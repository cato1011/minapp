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

    constructor(private httpClient: HttpClient, private userService: UserService) {
    }

    setCurrentSelectedParcel(parcel: Parcel) {
        this.currentSelectedParcel = parcel;
    }

    getCurrentSelectedParcel(): Parcel {
        return this.currentSelectedParcel;
    }

    reloadIn() {
        this.httpClient.get<Parcel[]>('https://parcelserver.cabreracano.de/parcels/' + this.userService.getUserToken() + '?filter=in', {
            headers: {userToken: this.userService.getUserToken()}
        }).subscribe((ps) => {
            console.log(ps);
            this.parcelInSubject.next(ps);
        });
    }

    reloadOut() {
        this.httpClient.get<Parcel[]>('https://parcelserver.cabreracano.de/parcels/' + this.userService.getUserToken() + '?filter=out', {
            headers: {userToken: this.userService.getUserToken()}
        }).subscribe((ps) => {
            console.log(ps);
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
