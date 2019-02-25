import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserService} from '../user.service';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-settings-view',
    templateUrl: './settings-view.component.html',
    styleUrls: ['./settings-view.component.sass']
})
export class SettingsViewComponent implements OnInit {

    form: FormGroup;
    @Input() currentLang;
    @Input() deliveryPlaces: DeliveryPlace[];
    @Input() preferedDeliveryPlace$: Observable<DeliveryPlace>;
    @Input() preferedDeliveryPlaceId: number;
    @Input() preferedDeliveryPlaceExist;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.initForm();
        this.onChange();
    }

    initForm() {
        this.form = new FormGroup({
            applicationLangauge: new FormControl(this.currentLang),
            preferedDeliveryPlaceId: new FormControl(this.preferedDeliveryPlaceId)
        });
    }

    onChange() {
        this.form.valueChanges.subscribe(form => {
            if (form.deliveryPlace !== null) {
                this.preferedDeliveryPlaceExist = true;
            }
            this.userService.saveSettings(form);
        });
    }

}
