import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';
import {DeliveryPlacesService} from '../../delivery-places/delivery-places.service';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model';
import {FormControl, FormGroup} from '@angular/forms';

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

    constructor(private translateService: TranslateService,
                private userService: UserService,
                private deliveryPlacesService: DeliveryPlacesService) {
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
        // TODO get settings and set favorite delivery place as preselected value
        this.currentLang = this.translateService.currentLang;
        this.deliveryPlacesService.reloadDeliveryPlaces();
        this.deliveryPlaces$ = this.deliveryPlacesService.getDeliveryPlaces();
    }

    onChanges() {
        // TODO post settings to backend
        this.form.valueChanges.subscribe(form => {
            this.userService.setSettings(form);
            this.translateService.use(form.language);
        });
    }
}
