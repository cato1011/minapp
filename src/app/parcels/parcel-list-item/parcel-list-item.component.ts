import {Component, Input, OnInit, Output} from '@angular/core';
import {Parcel} from '../parcel.model';
import {AlertController} from '@ionic/angular';


@Component({
    selector: 'app-parcel-list-item',
    templateUrl: './parcel-list-item.component.html',
    styleUrls: ['./parcel-list-item.component.sass']
})
export class ParcelListItemComponent implements OnInit {

    @Input() parcel: Parcel;
    imagePrefix = './assets/icons/parcels/';

    constructor(private alertController: AlertController) {
    }

    async DeleteAppointment() {
        const alert = await this.alertController.create({
            header: 'Cancel Appointment!',
            message: 'Are you sure you want to cancel the appointment?',
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    cssClass: 'ion-color-danger',
                    handler: (blah) => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Yes',
                    cssClass: 'mat-raised-button',
                    handler: () => {
                        this.deleteParcel();
                    }
                }
            ]
        });
        await alert.present();
    }

    ngOnInit() {
    }

    deleteParcel() {
        console.log('unread');
    }


}
