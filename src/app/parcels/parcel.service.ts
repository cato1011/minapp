import {Injectable} from '@angular/core';
import {PARCELS_IN, PARCELS_OUT} from './parcels.mock';
import {Parcel} from './parcel.model';
import {ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login/login.service';
import {map, tap} from 'rxjs/operators';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Injectable({
    providedIn: 'root'
})
export class ParcelService {

    private parcelInSubject: Subject<Parcel[]> = new ReplaySubject<Parcel[]>(25);
    private parcelOutSubject: Subject<Parcel[]> = new ReplaySubject<Parcel[]>(25);
    public parcelServerUrl: 'http://localhost:8082/parcels';
    public userToken = 'c1e46f017983b562c8c6af0627f28ff9';

    constructor(private httpClient: HttpClient, private loginService: LoginService) {
    }

    getParcelsIn() {
        return PARCELS_IN;
    }

    getParcelsOut() {
        return PARCELS_OUT;
    }

    reloadIn() {
        // this.loginService.getUser().subscribe(user => this.userToken = user.userToken);
        this.httpClient.get<Parcel[]>('http://localhost:8082/parcels' + '/in/' + this.userToken, {
            headers: {userToken: this.userToken}
        }).subscribe((ps) => {
            this.parcelInSubject.next(ps);
        });
    }

    reloadOut() {
        // this.loginService.getUser().subscribe(user => this.userToken = user.userToken);
        this.httpClient.get<Parcel[]>('http://localhost:8082/parcels/' + 'out/' + this.userToken, {
            headers: {userToken: this.userToken}
        }).subscribe((ps) => {
            this.parcelOutSubject.next(ps);
        });
    }

    getAllIn() {
        return this.parcelInSubject.asObservable();
    }

    getAllOut() {
        return this.parcelOutSubject.asObservable();
    }
}
