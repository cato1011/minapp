import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '../user/user.service'


declare var Notification: any;

@Injectable()
export class MessagingService {
  public user: string;
  public authToken: string;
  public messaging: any;
  currentMessage = new BehaviorSubject(null);

  constructor(private firestore: AngularFirestore, private userService: UserService) {
    this.user = userService.getUserToken();
    this.authToken = userService.getMobileAuthToken();
    console.log("In Messaging Service" + this.authToken);

    if (this.user) {
      try {

        this.messaging = firebase.messaging();
      } catch (e) {
        console.log('Unable to Instantiate Firebase Messaging', e);
      }
    }
  }

  getPermission() {

    if (this.user) {
      try {
        this.messaging.requestPermission()
          .then(() => {
            console.log('Notification permission granted.');
            return this.messaging.getToken()
          })
          .then(token => {
            console.log(token);
            this.saveToken(token)
          })


          .catch((err) => {
            console.log('Unable to get permission to notify.', err);
          });
      }

      catch (e) {
        console.log('Unable to Listen PUSH Messages', e);
      }
    }
  }

  // Listen for token refresh
  monitorRefresh() {
    try {
      this.messaging.onTokenRefresh(() => {
        this.messaging.getToken()
          .then(refreshedToken => {
            console.log('Token refreshed.');
            this.saveToken(refreshedToken)
          })
          .catch(err => console.log(err, 'Unable to retrieve new token'))
      });
    }
    catch (e) {
      console.log('Unable to Listen to PUSH Messages', e);
    }
  }

  public async saveToken(token) {


    if (this.user) {
      for (let i = 0; i >= 0; i++) {
        let user_document = this.user;
        let fcmtoken_exists: boolean = false;

        if (i != 0) { user_document = this.user + '_' + i; }

        await this.firestore.doc(`pushnotifications/${user_document}`).ref.get().then((documentSnapshot) => {


          if (documentSnapshot.exists) {
            if (token == documentSnapshot.get('fcmToken')) {
              fcmtoken_exists = true;
            }
          }
          else {
            this.firestore.collection(`pushnotifications`).doc(`${user_document}`).set({ 'authToken': this.userService.getMobileAuthToken(), 'fcmToken': token });
            fcmtoken_exists = true;
          }

        });

        if (fcmtoken_exists)
          break;

      }
    }
  }
  receiveMessage() {

    if (this.user) {
      try {
        this.messaging.onMessage((payload) => {
          const notificationTitle = payload.notification.title;
          const tag = payload.notification.tag;
          const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon

          };
          console.log("Message received. ", payload);
          console.log("Tag:", tag);

          if (Notification.permission === "granted") {


            window.alert(notificationOptions.body);

            //var notification = new Notification(notificationTitle,notificationOptions);
          }
          this.currentMessage.next(payload.data)
        });

      } catch (e) {
        console.log('Unable to get push permission', e);
      }

    }

  }
}

