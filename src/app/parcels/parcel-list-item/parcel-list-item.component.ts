import {Component, Input, OnInit} from '@angular/core';
import {Parcel} from '../parcel.model';

@Component({
    selector: 'app-parcel-list-item',
    templateUrl: './parcel-list-item.component.html',
    styleUrls: ['./parcel-list-item.component.sass']
})
export class ParcelListItemComponent implements OnInit {

    @Input() parcel: Parcel;
    imagePrefix = './assets/icons/';

    constructor() {
    }

    ngOnInit() {
    }

    deleteParcel() {
        console.log('unread');
    }

}
