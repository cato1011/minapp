import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle.service';
import {ToastController} from '@ionic/angular';


@Component({
    selector: 'app-vehicle-requested-view',
    templateUrl: './vehicle-requested-view.component.html',
    styleUrls: ['./vehicle-requested-view.component.sass']
})
export class VehicleRequestedViewComponent implements OnInit {

    imageUrl = '../assets/icons/parcels/vehicle_requested.png';
    dateTime = this.vehicleService.getLastVehicleRequest().time.slice(0, -1);
    toastMessage = '';


    constructor(private vehicleService: VehicleService, public toastController: ToastController) {
    }

    ngOnInit() {
        console.log(this.vehicleService.getLastVehicleRequest());


    }

}
