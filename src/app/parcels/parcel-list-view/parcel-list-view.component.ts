import {Component, Input, OnInit} from '@angular/core';
import {Parcel} from '../parcel.model';

@Component({
    selector: 'app-parcel-list-view',
    templateUrl: './parcel-list-view.component.html',
    styleUrls: ['./parcel-list-view.component.sass']
})
export class ParcelListViewComponent implements OnInit {

    @Input() parcels: Parcel[];

    constructor() {
    }

    ngOnInit() {
    }

}
