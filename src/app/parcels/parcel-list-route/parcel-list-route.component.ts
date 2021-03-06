import {Component, OnInit} from '@angular/core';
import {ParcelService} from '../parcel.service';
import {VehicleService} from '../../vehicles/vehicle.service';
import {ActivatedRoute} from '@angular/router';
import {Parcel} from '../parcel.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-parcel-list-route',
    templateUrl: './parcel-list-route.component.html',
    styleUrls: ['./parcel-list-route.component.sass']
})
export class ParcelListRouteComponent implements OnInit {

    parcels$: Observable<Parcel[]>;
    tabBarVisible = false;
    context: string;

    constructor(private route: ActivatedRoute, private parcelService: ParcelService, private vehicleService: VehicleService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.context = params['context'];
            (['in', 'out', 'appointments'].indexOf(this.context) > -1) ? this.tabBarVisible = true : this.tabBarVisible = false;
            console.log(this.context);
            if (this.context === 'in') {
                this.parcelService.reloadIn();
                this.parcels$ = this.parcelService.getAllIn();
            } else if (this.context === 'out') {
                this.parcelService.reloadOut();
                this.parcels$ = this.parcelService.getAllOut();
            } else {
                if (this.context === 'appointments') {
                    this.parcelService.reloadAll();
                    this.parcels$ = this.parcelService.getAll();
                }
            }
        });
    }

    public reset() {
        this.ngOnInit();
    }

}
