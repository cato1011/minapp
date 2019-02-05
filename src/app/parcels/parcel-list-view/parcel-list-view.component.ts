import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ParcelService} from '../parcel.service';
import {Parcel} from '../parcel.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-parcel-list-view',
    templateUrl: './parcel-list-view.component.html',
    styleUrls: ['./parcel-list-view.component.sass']
})
export class ParcelListViewComponent implements OnInit {

    context: string;
    parcels: Parcel[];
    parcels$: Observable<Parcel[]>;

    constructor(private route: ActivatedRoute, private parcelService: ParcelService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.context = params['context'];
            if (this.context === 'in') {
                this.parcels = this.parcelService.getParcelsIn();
                this.parcelService.reloadIn();
                this.parcels$ = this.parcelService.getAllIn();
            } else {
                this.parcels = this.parcelService.getParcelsOut();
                this.parcelService.reloadOut();
                this.parcels$ = this.parcelService.getAllOut();
            }
        });
    }
}
