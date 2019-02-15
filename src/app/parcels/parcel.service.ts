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
    // otherUserToken = 'b7417fd77717365710c8ff2700fd645d';
    // parcelInUrl = 'http://localhost:8082/parcels/users/' + this.userToken + '?filter=in';

    constructor(private httpClient: HttpClient, private userService: UserService) {
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
        this.httpClient.get<Parcel[]>('https://parcelserver.cabreracano.de/parcels/' + 'in/' + this.userService.getUserToken(), {
            headers: {userToken: this.userService.getUserToken()}
        }).subscribe((ps) => {
            console.log(ps);
            this.parcelInSubject.next(ps);
        });
    }

    reloadOut() {
        // this.loginService.getUser().subscribe(user => this.userToken = user.userToken);
        this.httpClient.get<Parcel[]>('https://parcelserver.cabreracano.de/parcels/' + 'out/' + this.userService.getUserToken(), {
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
