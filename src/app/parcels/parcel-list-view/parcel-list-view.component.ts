import {Component, Input, OnInit} from '@angular/core';
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

    @Input() parcels: Parcel[];

    constructor() {
    }

    ngOnInit() {
    }

}
