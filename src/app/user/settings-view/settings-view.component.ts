import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { DeliveryPlacesService } from '../../delivery-places/delivery-places.service';
import { DeliveryPlace } from '../../delivery-places/delivery-places.model';
import { UserConfiguration } from '../user.model';
import { FormControl, FormGroup } from '@angular/forms';

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
        private deliveryPlacesService: DeliveryPlacesService,
        private userConfiguration: UserConfiguration) {
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

    sendData() {
        this.userConfiguration.applicationLangauge = this.form.value.language;
        this.userConfiguration.id = this.userService.getuserId();
        // TODO: Set id for Deliveryplace after asking from Michael
        this.userConfiguration.preferedDeliveryPlaceId = this.form.value.deliveryPlace.description;
        // Set user settings
        this.userService.saveSettings(this.userConfiguration);

    }








}
