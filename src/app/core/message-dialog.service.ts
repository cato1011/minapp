import {Injectable} from '@angular/core';
import {AlertController, ToastController, ModalController} from '@ionic/angular';
@Injectable({
    providedIn: 'root'
})
export class MessageDialogService {

    constructor(
      private alertController: AlertController,
      private modalController: ModalController,
      private toastController: ToastController) {
    }

    async presentAlert(header: string, message: string, cssClass: string) {
        const alert = await this.alertController.create({
            header: header,
            message: message,
            buttons: ['OK'],
            animated: true,
            cssClass: cssClass
        });
        return await alert.present();
    }

    async presentToast(message: string) {
      const toast = await this.toastController.create({
        message: message,
        duration: 3000,
        showCloseButton: true
      });
      toast.present();
    }
}
