import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vehicle, VehicleRequest} from './vehicles.model';
import {Parcel} from '../parcels/parcel.model';
import {ReplaySubject, Subject} from 'rxjs';
import {ParcelService} from '../parcels/parcel.service';
import {UserService} from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    private userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    vehicleRequest: Vehicle[];
    private vehicleRequestSubject: Subject<Vehicle[]> = new ReplaySubject<Vehicle[]>(25);
    private lastVehicleRequest: Vehicle;
    public vehcileRequestUrl = 'https://carrierserver.cabreracano.de/vehicleRequests/';
    // public vehcileRequestUrl = 'http://localhost:8081/vehicleRequests/';
    private cancelledStatus: string = 'CANCELED_BY_USER';

    constructor(private httpClient: HttpClient, private parcelService: ParcelService, private userService: UserService) {
    }


    public sendVehicleRequest(vehicleRequest: VehicleRequest) {
        if (vehicleRequest.requestPurpose === 'PARCEL_DELIVERY') {
            vehicleRequest.parcelGUID = this.parcelService.getCurrentSelectedParcel().parcelGUID;
        }
        this.lastVehicleRequest = vehicleRequest;
        return this.httpClient.post(this.vehcileRequestUrl, JSON.stringify(vehicleRequest), {
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

    getVehicleRequestById(vehicleRequest_id: number) {
        this.httpClient.get<Vehicle[]>(this.vehcileRequestUrl + vehicleRequest_id, {
            headers: {userToken: this.userToken, identifier: 'APP'}
        }).subscribe((ps) => {
            this.vehicleRequestSubject.next(ps);
        });
        return this.vehicleRequestSubject.asObservable();
    }


    cancelVehicleRequest(parcelObject: Parcel) {
        this.getVehicleRequestById(parcelObject.vehicleRequestId).subscribe(data => {
                this.vehicleRequest = data;
                // Set Cancelation status for vehicle request
                this.vehicleRequest['status'] = this.cancelledStatus;
                // Cancel Vehicle Request
                this.httpClient.put(this.vehcileRequestUrl + parcelObject.vehicleRequestId, JSON.stringify(this.vehicleRequest), {
                    headers: {identifier: 'APP', 'Content-Type': 'application/json'}
                }).subscribe(
                    (response: Response) => {
                        console.log('Vehicle Request is canceled');
                    });
            }
        );


    }


}
