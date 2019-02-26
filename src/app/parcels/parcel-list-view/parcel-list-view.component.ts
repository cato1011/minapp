import {Component, Input, OnInit} from '@angular/core';
import {Parcel} from '../parcel.model';
import {Observable} from 'rxjs';
import {ParcelService} from '../parcel.service';

@Component({
    selector: 'app-parcel-list-view',
    templateUrl: './parcel-list-view.component.html',
    styleUrls: ['./parcel-list-view.component.sass']
})
export class ParcelListViewComponent implements OnInit {

    @Input() vehicle: number;
    @Input() parcels$: Observable<Parcel[]>;
    parcelsFromVehicle$: Observable<Parcel[]>;

    constructor(private parcelService: ParcelService) {
    }

    clickedRequestAppointment() {
        this.parcelService.setParcelsOnCurrentSelectedVehicle(this.parcels$);
    }

    ngOnInit() {
        this.parcelsFromVehicle$ = this.parcelService.getParcelsFromVehicleWithVehicleId(this.parcels$, this.vehicle);
    }

}
