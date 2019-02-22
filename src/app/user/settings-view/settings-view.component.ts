import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';
import {DeliveryPlacesService} from '../../delivery-places/delivery-places.service';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-settings-view',
    templateUrl: './settings-view.component.html',
    styleUrls: ['./settings-view.component.sass']
})
export class SettingsViewComponent implements OnInit {

    form: FormGroup;
    currentLang;
    public deliveryPlaces$: Observable<DeliveryPlace[]>;
    deliveryPlace: DeliveryPlace;
    preferredDeliveryPlaceExist: boolean = false;

    constructor(private translateService: TranslateService,
                private userService: UserService,
                private deliveryPlacesService: DeliveryPlacesService, private httpClient:HttpClient ) {
    }

    ngOnInit() {
        this.initData();
        this.initForm();
        this.onChanges();
    }

    initForm() {
        this.form = new FormGroup({
            language: new FormControl(this.currentLang),
            deliveryPlace: new FormControl(this.deliveryPlace)
        });
    }

    initData() {
        // TODO get settings and set preferred delivery place as preselected value for form
        this.currentLang = this.translateService.currentLang;
        this.deliveryPlacesService.reloadDeliveryPlaces();
        this.deliveryPlaces$ = this.deliveryPlacesService.getDeliveryPlaces();
    }

    onChanges() {
        // TODO post settings to backend
        this.form.valueChanges.subscribe(form => {
            if (form.deliveryPlace !== null) {
                this.preferredDeliveryPlaceExist = true;
            }
            this.userService.setSettings(form);
            this.translateService.use(form.language);
        });
    }

    // public sendUserConfiguration(parcelObject: Parcel) {

    //         // Cancel Vehicle Request
    //         this.httpClient.put(this.vehicleRequestUrl + parcelObject.vehicleRequestId, JSON.stringify(this.vehicleRequest), {
    //             headers: { identifier: 'APP', 'Content-Type': 'application/json' }
    //         }).subscribe(
    //             (response: Response) => {
    //                 console.log('Vehicle Request is canceled');
    //             });
    //     }
        


    

    }
