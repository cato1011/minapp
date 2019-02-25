import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { DeliveryPlacesService } from '../../delivery-places/delivery-places.service';
import { DeliveryPlace } from '../../delivery-places/delivery-places.model';
import { UserConfiguration, UserSettings } from '../user.model';
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
        // TODO set preferred delivery place and language as preselected value for form
        this.userService.loadSettings().subscribe(response => {

            console.log(response);
        }
        );



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
        this.userConfiguration.preferedDeliveryPlaceId = this.form.value.deliveryPlace;
        // Set user settings
        console.log(this.userConfiguration);
        this.userService.saveSettings(this.userConfiguration);

    }








}
