import {Injectable} from '@angular/core';
import {DeliveryPlace} from './delivery-places.model';
import {ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DeliveryPlacesService {

    private deliveryPlacesSubject: Subject<DeliveryPlace[]> = new ReplaySubject<DeliveryPlace[]>(50);
    public deliveryPlaces: DeliveryPlace[];
    public deliverPlacesUrl = 'http://localhost:8082/deliveryPlaces';
    public userToken = 'c1e46f017983b562c8c6af0627f28ff9';

    constructor(private httpClient: HttpClient) {
    }

    reloadDeliveryPlaces() {
        this.httpClient.get<DeliveryPlace[]>(this.deliverPlacesUrl, {
            headers: {userToken: this.userToken}
        }).subscribe((dp) => {
            this.deliveryPlacesSubject.next(dp);
        });
    }

    getDeliveryPlaces() {
        return this.deliveryPlacesSubject.asObservable();
    }
}
