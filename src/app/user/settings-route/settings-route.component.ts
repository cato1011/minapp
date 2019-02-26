import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../user.service';
import {DeliveryPlacesService} from '../../delivery-places/delivery-places.service';
import {Observable} from 'rxjs';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model';
import {MOCK_USER} from '../user.model';

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
    preferedDeliveryPlaceExists = false;
    emailAddress: string;

    constructor(private translateService: TranslateService,
                private deliveryPlacesService: DeliveryPlacesService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.userService.setUser(MOCK_USER);
        this.initData();
    }

    initData() {
        this.deliveryPlacesService.reloadDeliveryPlaces();
        this.deliveryPlaces$ = this.deliveryPlacesService.getDeliveryPlaces();
        this.userService.getUser().subscribe(user => {
            this.emailAddress = user.email;
            this.currentLang = user.userConfiguration.applicationLangauge;
            if (user.userConfiguration.preferedDeliveryPlaceId) {
                this.preferedDeliveryPlaceExists = true;
                this.deliveryPlacesService.loadPreferedDeliveryPlace(user.userConfiguration.preferedDeliveryPlaceId);
                this.preferedDeliveryPlace$ = this.deliveryPlacesService.getPreferedDeliveryPlace();
                this.preferedDeliveryPlaceId = parseInt(user.userConfiguration.preferedDeliveryPlaceId);

            } else {
                this.preferedDeliveryPlaceExists = false;
            }
        });
    }

}
