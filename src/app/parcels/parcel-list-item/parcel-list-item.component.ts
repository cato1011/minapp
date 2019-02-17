import { Component, Input, OnInit } from '@angular/core';
import { Parcel } from '../parcel.model';
import { AlertController } from '@ionic/angular';
import { VehicleService } from '../../vehicles/vehicle.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ParcelService } from '../parcel.service';

@Component({
    selector: 'app-parcel-list-item',
    templateUrl: './parcel-list-item.component.html',
    styleUrls: ['./parcel-list-item.component.sass'],
    animations: [
        trigger('hover', [
            state('true', style({
                transform: 'scale(1.025)',
                'color': '#42B961'
            })),
            state('false', style({ transform: 'scale(1.0)' })),
            transition('false => true', animate('50ms ease-in')),
            transition('true => false', animate('50ms ease-out'))
        ])
    ]
})
export class ParcelListItemComponent implements OnInit {

    @Input() parcel: Parcel;
    imagePrefix = './assets/icons/parcels/';
    isHovering = false;

    constructor(
        private alertController: AlertController,
        private vehicleService: VehicleService,
        private parcelService: ParcelService) {
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
                        console.log('Cancelled');
                    }
                }, {
                    text: 'Yes',
                    cssClass: 'mat-raised-button',
                    handler: () => {
                        this.vehicleService.cancelVehicleRequest(parcel_object);

                    }
                }
            ]
        });
        await alert.present();
    }

    ngOnInit() {
    }

    clickedRequestAppointment() {
        this.parcelService.setCurrentSelectedParcel(this.parcel);
    }

    parcelMessage(parcelStatus: string) {
        switch (parcelStatus) {
            case 'DELIVERY_REQUESTED': {
                return 'Delivery is requested';
            }
            case 'STATION':
            case 'PIN':
                {
                    return 'You have a new Parcel';
                }
            case 'REJECTED':
            case 'CANCELED':
                {
                    return 'New delivery date should be requested';
                }
            case 'DELIVERY_CONFIRMED': {
                return 'Delivery is confirmed';
            }
        }
    }



}
