import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle, VehicleRequest } from './vehicles.model';
import { Parcel } from '../parcels/parcel.model';
import { ReplaySubject, Subject } from 'rxjs';
import { ParcelService } from '../parcels/parcel.service';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    private userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    vehicleRequest: Vehicle[];
    private vehicleRequestSubject: Subject<Vehicle[]> = new ReplaySubject<Vehicle[]>(25);
    private lastVehicleRequest: Vehicle;
    // public vehicleRequestUrl = 'https://carrierserver.cabreracano.de/vehicleRequests/';
    public vehicleRequestUrl = 'http://localhost:8081/vehicleRequests/';
    private cancelledStatus: string = 'CANCELED_BY_USER';
    private allVehicleRequestsSubject: Subject<Vehicle[]> = new ReplaySubject<Vehicle[]>(25);

    constructor(private httpClient: HttpClient, private parcelService: ParcelService, private userService: UserService) {
    }


    public sendVehicleRequest(vehicleRequest: VehicleRequest) {
        if (vehicleRequest.requestPurpose === 'PARCEL_DELIVERY') {
            vehicleRequest.parcelGUID = this.parcelService.getCurrentSelectedParcel().parcelGUID;
        }
        this.lastVehicleRequest = vehicleRequest;
        return this.httpClient.post(this.vehicleRequestUrl, JSON.stringify(vehicleRequest), {
            headers: { userToken: this.userToken, identifier: 'APP', 'Content-Type': 'application/json' }
        }).subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    public setLastVehicleRequest(vehicleRequest: Vehicle) {
        this.lastVehicleRequest = vehicleRequest;
    }

    public getLastVehicleRequest(): Vehicle {
        return this.lastVehicleRequest;
    }

    public getVehicleRequestById(vehicleRequest_id: number) {
        this.httpClient.get<Vehicle[]>(this.vehicleRequestUrl + vehicleRequest_id, {
            headers: { userToken: this.userToken, identifier: 'APP' }
        }).subscribe((ps) => {
            this.vehicleRequestSubject.next(ps);
        });
        return this.vehicleRequestSubject.asObservable();
    }


    public cancelVehicleRequest(parcelObject: Parcel) {
        this.getVehicleRequestById(parcelObject.vehicleRequestId).subscribe(data => {
            this.vehicleRequest = data;
            // Set Cancelation status for vehicle request
            this.vehicleRequest['status'] = this.cancelledStatus;
            // Cancel Vehicle Request
            this.httpClient.put(this.vehicleRequestUrl + parcelObject.vehicleRequestId, JSON.stringify(this.vehicleRequest), {
                headers: { identifier: 'APP', 'Content-Type': 'application/json' }
            }).subscribe(
                (response: Response) => {
                    console.log('Vehicle Request is canceled');
                });
        }
        );


    }

    public reloadVehicleRequests() {

        this.httpClient.get<Vehicle[]>(this.vehicleRequestUrl + 'users/' + this.userService.getUserToken(), {
            headers: { userToken: this.userService.getUserToken(), identifier: "APP" }
        }).subscribe((ps) => {
            console.log(ps);
            this.allVehicleRequestsSubject.next(ps);
        });
    }

    public getAllVehicleRequests() {
        return this.allVehicleRequestsSubject.asObservable();
    }

}
