import {Injectable} from '@angular/core';
import {Parcel} from './parcel.model';
import {Observable, ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user/user.service';
import {PARCELS_ALL, PARCELS_IN, PARCELS_OUT} from './parcels.mock';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ParcelService {

    private parcelInSubject: ReplaySubject<Parcel[]> = new ReplaySubject<Parcel[]>(25);
    private parcelOutSubject: ReplaySubject<Parcel[]> = new ReplaySubject<Parcel[]>(25);
    private parcelAllSubject: ReplaySubject<Parcel[]> = new ReplaySubject<Parcel[]>(25);
    private currentSelectedParcel: Parcel;
    private parcelsOnCurrentSelectedVehicle: Parcel[];

    constructor(private httpClient: HttpClient, private userService: UserService) {
    }

    setCurrentSelectedParcel(parcel: Parcel) {
        this.currentSelectedParcel = parcel;
    }

    getCurrentSelectedParcel(): Parcel {
        return this.currentSelectedParcel;
    }

    setParcelsOnCurrentSelectedVehicle(parcels: Observable<Parcel[]>) {
        parcels.subscribe(value => this.parcelsOnCurrentSelectedVehicle = value);
    }

    getParcelsonCurrentSelectedVehicle() {
        return this.parcelsOnCurrentSelectedVehicle;
    }

    getParcelsFromVehicleWithVehicleId(parcels$: Observable<Parcel[]>, vehicleId: number): Observable<Parcel[]> {
        return parcels$.pipe(
            map(parcels => parcels.filter(parcel => parcel.vehicleId === vehicleId)),
        );
    }

    getParcelsByStatus(parcels$: Observable<Parcel[]>, status: string[]): Observable<Parcel[]> {
        return parcels$.pipe(
            map(parcels => parcels.filter(parcel => parcel.status in status)),
        );
    }

    reloadAll() {
        this.parcelAllSubject.next(PARCELS_ALL);
    }

    // TODO url with string interpolation ``
    reloadIn() {
        this.parcelInSubject.next(PARCELS_IN);
        /**
         this.httpClient.get<Parcel[]>('https://parcelserver.cabreracano.de/parcels/users/' + this.userService.getUserToken(), {
            headers: {userToken: this.userService.getUserToken()},
            params: {filter: 'in'}
        }).subscribe((ps) => {
            console.log(ps);
            this.parcelInSubject.next(ps);
        });
         **/
    }

    reloadOut() {
        this.parcelOutSubject.next(PARCELS_OUT);
        /**
         this.httpClient.get<Parcel[]>('https://parcelserver.cabreracano.de/parcels/users/' + this.userService.getUserToken(), {
            headers: {userToken: this.userService.getUserToken()},
            params: {filter: 'out'}
        }).subscribe((ps) => {
            console.log(ps);
            this.parcelOutSubject.next(ps);
        });
         **/
    }

    getAll() {
        return this.parcelAllSubject;
    }

    getAllIn() {
        return this.parcelInSubject;
    }

    getAllOut() {
        return this.parcelOutSubject;
    }
}
