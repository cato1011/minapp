import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vehicle, VehicleRequest} from '../vehicles/vehicles.model';
import {Parcel} from '../parcels/parcel.model';
import {ReplaySubject, Subject} from 'rxjs';
import {ParcelService} from '../parcels/parcel.service';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    private userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    vehicleRequest: Vehicle[];
    private vehicleRequestSubject: Subject<Vehicle[]> = new ReplaySubject<Vehicle[]>(25);
    private sendVehicleRequestUrl: string;
    private getVehicleRequestUrl: string;
    private cancelVehicleRequestUrl: string;
    private lastVehicleRequest: Vehicle;
    carrierServerUrl = 'http://localhost:8081';


    finalVehicleRequest: Vehicle = {
        'boxGUID': '',
        'id': 0,
        'latitude': 0,
        'longitude': 0,
        'parcelGUID': '',
        'potentialVehicleIds': [0],
        'requestPurpose': '',
        'size': 'new_request',
        'status': '',
        'time': '',
        'userToken': '',
        'waitingTime': 0,
    };


    constructor(private httpClient: HttpClient, private parcelService: ParcelService) {
    }


    public sendVehicleRequest(vehicleRequest: VehicleRequest) {
        if (vehicleRequest.requestPurpose === 'PARCEL_DELIVERY') {
            vehicleRequest.parcelGUID = this.parcelService.getCurrentSelectedParcel().parcelGUID;
        }
        this.lastVehicleRequest = vehicleRequest;
        this.sendVehicleRequestUrl = this.carrierServerUrl + '/vehicleRequests';
        return this.httpClient.post(this.sendVehicleRequestUrl, JSON.stringify(vehicleRequest), {
            headers: {userToken: this.userToken, identifier: 'APP', 'Content-Type': 'application/json'}
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
        this.getVehicleRequestUrl = this.carrierServerUrl + '/vehicleRequests/' + vehicleRequest_id;
        this.httpClient.get<Vehicle[]>(this.getVehicleRequestUrl, {
            headers: {userToken: this.userToken, identifier: 'APP'}
        }).subscribe((ps) => {
            this.vehicleRequestSubject.next(ps);
        });
        return this.vehicleRequestSubject.asObservable();
    }


    public cancelVehicleRequest(parcel_obj: Parcel) {
        this.getVehicleRequestById(parcel_obj.vehicleRequestId).subscribe(
            (vehicleRequest: Vehicle[]) => {
                this.vehicleRequest = vehicleRequest;
            });
        // Set status for the Vehicle Request
        // Set Cancelled status in vehicle Request
        this.cancelVehicleRequestUrl = this.carrierServerUrl + '/vehicleRequests/' + parcel_obj.vehicleRequestId;
        return this.httpClient.put(this.cancelVehicleRequestUrl, JSON.stringify(this.vehicleRequest), {
            headers: {identifier: 'APP', 'Content-Type': 'application/json'}
        }).subscribe(
            (response: Response) => {
                console.log(response);
            });
    }


}
