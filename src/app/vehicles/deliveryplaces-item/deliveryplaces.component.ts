import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model';
import {FormGroup} from '@angular/forms';
import {DeliveryPlacesService} from '../../delivery-places/delivery-places.service';

@Component({
    selector: 'app-deliveryplaces',
    templateUrl: './deliveryplaces.component.html',
    styleUrls: ['./deliveryplaces.component.sass']
})
export class DeliveryplacesComponent implements OnInit {

    @Input() parentForm: FormGroup;
    @Input() deliveryPlaces: DeliveryPlace[];

    constructor(private deliveryPlacesService: DeliveryPlacesService) {
    }

    ngOnInit() {

    }

}
