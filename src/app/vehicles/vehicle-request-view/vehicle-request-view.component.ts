import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {VehicleService} from '../vehicle.service';
import {VehicleRequest} from '../vehicles.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DeliveryPlacesService} from '../../delivery-places/delivery-places.service';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model';
import {Observable} from 'rxjs';


@Component({
    selector: 'app-vehicle-request-view',
    templateUrl: './vehicle-request-view.component.html',
    styleUrls: ['./vehicle-request-view.component.sass']
})
export class VehicleRequestViewComponent implements OnInit {

    // Will be used with normal Vehicle Request (Not used now)
    packetSizes = ['S', 'M', 'L', 'XL'];
    userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    vehicleRequestForm: FormGroup;
    requestType: string;
    parcelGUID: string;
    deliveryPlaces$: Observable<DeliveryPlace[]>;
    deliveryPlace: DeliveryPlace;
    deliveryDate: Date;
    presentDate: Date = new Date();
    preSelectedDateTime = (new Date(this.presentDate.setMinutes(this.presentDate.getMinutes() + 90))).toISOString();

    constructor(
        private deliveryPlacesService: DeliveryPlacesService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private vehicleService: VehicleService,
        private router: Router,
        private vehicleRequest: VehicleRequest
    ) {
    }

    ngOnInit() {
        this.initForm();
        this.initQueryParams();
        this.initDeliveryPlaces();
    }

    initForm() {
        this.vehicleRequestForm = new FormGroup({
            deliveryPlace: new FormControl(this.deliveryPlace, Validators.required),
            // TODO write own validator which validates if the selected time is in the future
            deliveryDate: new FormControl(this.preSelectedDateTime)
        });
    }

    initQueryParams() {
        // Get URL params to distinguish between normal vehicle request or parcel related request
        this.route.queryParams.subscribe(queryParams => {
            this.requestType = queryParams['type'];
        });
    }

    initDeliveryPlaces() {
        // TODO get favorite delivery place from user via userService.getSettings
        this.deliveryPlacesService.reloadDeliveryPlaces();
        this.deliveryPlaces$ = this.deliveryPlacesService.getDeliveryPlaces();
    }

    sendData() {
        this.vehicleRequest.latitude = this.vehicleRequestForm.value.deliveryPlace.latitude;
        this.vehicleRequest.longitude = this.vehicleRequestForm.value.deliveryPlace.longitude;
        this.vehicleRequest.time = this.vehicleRequestForm.value.deliveryDate;
        this.vehicleRequest.requestPurpose = this.requestType;
        // TODO later set user token via userService in vehicleService
        // TODO getUserToken in userService to make it easier for all other services which make request (prevents requesting always whole user object to extract only the token)
        this.vehicleRequest.userToken = this.userToken;
        this.vehicleService.sendVehicleRequest(this.vehicleRequest);
        this.router.navigate(['vehicleRequested']);
    }

    reset() {
        this.vehicleRequestForm.reset();
        this.initForm();
    }
}
