import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../user.service';
import {DeliveryPlacesService} from '../../delivery-places/delivery-places.service';
import {Observable} from 'rxjs';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model';

@Component({
    selector: 'app-settings-route',
    templateUrl: './settings-route.component.html',
    styleUrls: ['./settings-route.component.sass']
})
export class SettingsRouteComponent implements OnInit {

    currentLang: string;
    preferedDeliveryPlaceId: number;
    deliveryPlaces$: Observable<DeliveryPlace[]>;
    preferedDeliveryPlace$: Observable<DeliveryPlace>;
    preferedDeliveryPlaceExists: boolean = false;

    constructor(private translateService: TranslateService,
                private deliveryPlacesService: DeliveryPlacesService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.initData();
    }

    initData() {
        this.currentLang = this.translateService.currentLang;
        this.deliveryPlacesService.reloadDeliveryPlaces();
        this.deliveryPlaces$ = this.deliveryPlacesService.getDeliveryPlaces();
        this.userService.getSettings().subscribe(settings => {
            if (settings.preferedDeliveryPlaceId) {
                this.preferedDeliveryPlaceExists = true;
                this.deliveryPlacesService.loadPreferedDeliveryPlace(settings.preferedDeliveryPlaceId);
                this.preferedDeliveryPlace$ = this.deliveryPlacesService.getPreferedDeliveryPlace();
                this.preferedDeliveryPlaceId = parseInt(settings.preferedDeliveryPlaceId);
            } else {
                this.preferedDeliveryPlaceExists = false;
            }
        });
    }

}
