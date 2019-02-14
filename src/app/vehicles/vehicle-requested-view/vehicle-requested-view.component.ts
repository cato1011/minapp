import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle.service';


@Component({
    selector: 'app-vehicle-requested-view',
    templateUrl: './vehicle-requested-view.component.html',
    styleUrls: ['./vehicle-requested-view.component.sass']
})
export class VehicleRequestedViewComponent implements OnInit {

    private imageUrl = '../assets/icons/parcels/vehicle_requested.png';

    constructor(private vehicleService: VehicleService) {
    }

    ngOnInit() {
        console.log(this.vehicleService.getLastVehicleRequest());
    }

}
