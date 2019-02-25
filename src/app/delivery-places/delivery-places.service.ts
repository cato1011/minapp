import {Injectable} from '@angular/core';
import {DeliveryPlace, PREFERED_DELIVERY_PLACE} from './delivery-places.model';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DeliveryPlacesService {

    private deliveryPlacesSubject: ReplaySubject<DeliveryPlace[]> = new ReplaySubject<DeliveryPlace[]>(1);
    private preferedDeliveryPlaceSubject: ReplaySubject<DeliveryPlace> = new ReplaySubject<DeliveryPlace>(1);
    public deliveryPlacesUrl = 'https://parcelserver.cabreracano.de/deliveryPlaces';
    // public deliveryPlacesUrl = 'http://localhost:8082/deliveryPlaces';
    public userToken = 'c1e46f017983b562c8c6af0627f28ff9';

    constructor(private httpClient: HttpClient) {
    }

    reloadDeliveryPlaces() {
        this.httpClient.get<DeliveryPlace[]>(this.deliveryPlacesUrl, {
            headers: {userToken: this.userToken}
        }).subscribe((dps) => {
            this.deliveryPlacesSubject.next(dps);
        });
    }

    loadPreferedDeliveryPlace(id: string) {
        // this.preferedDeliveryPlaceSubject.next(PREFERED_DELIVERY_PLACE);
        if (id !== null) {
            this.httpClient.get<DeliveryPlace>(`${this.deliveryPlacesUrl}/${id}`, {
                headers: {userToken: this.userToken}
            }).subscribe((dp) => {
                this.preferedDeliveryPlaceSubject.next(dp);
            });
        }
    }

    getDeliveryPlaces(): Observable<DeliveryPlace[]> {
        return this.deliveryPlacesSubject;
    }

    getPreferedDeliveryPlace(): Observable<DeliveryPlace> {
        return this.preferedDeliveryPlaceSubject;
    }

}
