import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageDialogService {

  constructor(private alertController: AlertController) { }

  async presentAlert(header:string, message:string,cssClass:string) {
  
  
    const alert = await this.alertController.create({
      header: header,      
      message: message,
      buttons: ['OK'],
      animated: true,
      cssClass:cssClass

    });
    return await alert.present();
  }
}
