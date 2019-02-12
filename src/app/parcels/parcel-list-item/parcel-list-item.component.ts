import {Component, Input, OnInit, Output} from '@angular/core';
import {Parcel} from '../parcel.model';
import {AlertController} from '@ionic/angular';
import {VehicleService} from '../../vehicles/vehicle.service';


@Component({
    selector: 'app-parcel-list-item',
    templateUrl: './parcel-list-item.component.html',
    styleUrls: ['./parcel-list-item.component.sass']
})
export class ParcelListItemComponent implements OnInit {

    @Input() parcel: Parcel;
    imagePrefix = './assets/icons/';

    constructor(private alertController: AlertController, private vehicleService: VehicleService) {
        
    }

    async DeleteAppointment(parcel_object) {
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
                        console.log('Cancel Vehicle Request:');
                        this.vehicleService.cancelVehicleRequest(parcel_object);                       
                         
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
