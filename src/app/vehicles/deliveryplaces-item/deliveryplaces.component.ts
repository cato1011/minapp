import {Component, Input, OnInit} from '@angular/core';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-deliveryplaces',
    templateUrl: './deliveryplaces.component.html',
    styleUrls: ['./deliveryplaces.component.sass']
})
export class DeliveryplacesComponent implements OnInit {

    @Input() parentForm: FormGroup;
    @Input() deliveryPlaces: DeliveryPlace[];

    constructor() {
    }

    ngOnInit() {

    }

}
