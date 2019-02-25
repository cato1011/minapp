import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserSettings } from './user.model';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import {MessageDialogService} from '../core/message-dialog.service'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user$ = new BehaviorSubject<User | null>(null);
    // TODO remove fixed user token value in production
    private userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    private mobileAuthToken = 'ee6488b082bb58cf99609567eb87fd76255979d2e2383eda10dd7b1b8a2ea8bc';
    private userId = 9;
    private userSettings$ = new ReplaySubject<UserSettings | null>(1);
    //private parcelServerUrl='https://parcelserver.cabreracano.de';
    private parcelServerUrl = 'http://localhost:8082';

    constructor(private httpClient: HttpClient, private messageDialogService: MessageDialogService) {
    }

    init() {
        console.log('init user service');
    }

    loadSettings() {

        return this.httpClient.get<UserSettings[]>(this.parcelServerUrl + '/users/usertoken/' + this.userToken, {
            headers: { userToken: this.userToken }
        });


    }

    loadUser() {
        // TODO reload logged in user
    }

    saveUser() {
        // TODO send post request
    }

    saveSettings(userConfiguration: UserSettings) {
        // Send post request
        this.httpClient.put(this.parcelServerUrl + "/users/" + userConfiguration.id + '/configuration', JSON.stringify(userConfiguration), {
            headers: { userToken: this.userToken, 'Content-Type': 'application/json' }
        }).subscribe(
            (response: Response) => {
                console.log(response);
                this.messageDialogService.presentAlert(
                    'Success!',
                    'Your account settings were edited successfully!',
                    'success-message');
            },
            error => 
            { 
                this.messageDialogService.presentAlert(
                    'Request Failed!',
                    'Your request to edit account settings failed. <br /> <br /> Please try again later!',
                    'failure-message');} 
            );

    }

    setUser(user: User) {
        this.userToken = user.userToken;
        this.mobileAuthToken = user.mobileAuthToken;
        this.userId = user.id;
        this.user$.next(user);
    }

    getUser(): Observable<User | null> {
        return this.user$.asObservable();
    }

    setSettings(settings) {
        console.log(settings);
        this.userSettings$.next(settings);
    }

    getSettings(): Observable<UserSettings | null> {
        return this.userSettings$.asObservable();
    }

    getUserToken() {
        return this.userToken;
    }

    getMobileAuthToken() {

        return this.mobileAuthToken;
    }

    getuserId() {

        return this.userId;
    }
}
