import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {

  constructor() { }

  async presentAlert(header:string, message:string,cssClass:string) {
    const alertController = document.querySelector('ion-alert-controller');
    await alertController.componentOnReady();
  
    const alert = await alertController.create({
      header: header,      
      message: message,
      buttons: ['OK'],
      animated: true,
      cssClass:cssClass

    });
    return await alert.present();
  }
}
