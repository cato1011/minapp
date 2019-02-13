import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vehicles} from '../vehicles/vehicles.model';
import {Parcel} from '../parcels/parcel.model';
import {ReplaySubject, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {
    private userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    vehicleRequest: Vehicles[];
    private vehicleRequestSubject: Subject<Vehicles[]> = new ReplaySubject<Vehicles[]>(25);
    private sendVehicleRequestUrl: string;
    private getVehicleRequestUrl: string;
    private cancelVehicleRequestUrl: string;
    carrierServerUrl = 'http://localhost:8081';

    finalVehicleRequest: Vehicles = {
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


    constructor(private httpClient: HttpClient) {
    }


    public sendVehicleRequest(vehicle_obj: Vehicles) {
        this.sendVehicleRequestUrl = this.carrierServerUrl + '/vehicleRequests';
        return this.httpClient.post(this.sendVehicleRequestUrl, JSON.stringify(vehicle_obj), {
            headers: {userToken: this.userToken, identifier: 'APP', 'Content-Type': 'application/json'}
        }).subscribe(
            (response: Response) => {
                console.log(response);            
               
            }
        );
        
    }

    public getVehicleRequestById(vehicleRequest_id: number) {
        this.getVehicleRequestUrl = this.carrierServerUrl + '/vehicleRequests/' + vehicleRequest_id;
        this.httpClient.get<Vehicles[]>(this.getVehicleRequestUrl, {
            headers: {userToken: this.userToken, identifier: 'APP'}
        }).subscribe((ps) => {
            this.vehicleRequestSubject.next(ps);
        });
        return this.vehicleRequestSubject.asObservable();
    }


    public cancelVehicleRequest(parcel_obj: Parcel) {
        this.getVehicleRequestById(parcel_obj.vehicleRequestId).subscribe(
            (vehicleRequest: Vehicles[]) => {
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
