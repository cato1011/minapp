import {Injectable} from '@angular/core';
import {Parcel} from './parcel.model';
import {ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class ParcelService {

    private parcelInSubject: Subject<Parcel[]> = new ReplaySubject<Parcel[]>(25);
    private parcelOutSubject: Subject<Parcel[]> = new ReplaySubject<Parcel[]>(25);
    private currentSelectedParcel: Parcel;
    userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    private parcelInUrl = 'http://localhost:8082/parcels/users/' + this.userToken + '?filter=in';

    constructor(private httpClient: HttpClient, private loginService: UserService) {
    }

    setCurrentSelectedParcel(parcel: Parcel) {
        console.log(parcel);
        this.currentSelectedParcel = parcel;
    }

    getCurrentSelectedParcel(): Parcel {
        return this.currentSelectedParcel;
    }

    reloadIn() {
        // this.loginService.getUser().subscribe(user => this.userToken = user.userToken);
        this.httpClient.get<Parcel[]>('https://parcelserver.cabreracano.de/parcels/' + 'in/' + this.userToken, {
            headers: {userToken: this.userToken}
        }).subscribe((ps) => {
            this.parcelInSubject.next(ps);
        });
    }

    reloadOut() {
        // this.loginService.getUser().subscribe(user => this.userToken = user.userToken);
        this.httpClient.get<Parcel[]>('https://parcelserver.cabreracano.de/parcels/' + 'out/' + this.userToken, {
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
