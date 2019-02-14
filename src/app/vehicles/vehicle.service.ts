import {Injectable, ɵConsole} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vehicle, VehicleRequest} from './vehicles.model';
import {Parcel} from '../parcels/parcel.model';
import {ReplaySubject, Subject} from 'rxjs';
import {ParcelService} from '../parcels/parcel.service';
import { Url } from 'url';
import { async } from '@angular/core/testing';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    private userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    vehicleRequest: Vehicle[];
    private vehicleRequestSubject: Subject<Vehicle[]> = new ReplaySubject<Vehicle[]>(25);
    private sendVehicleRequestUrl: string;
    private getVehicleRequestUrl: string;
    private lastVehicleRequest: Vehicle;
   // carrierServerUrl = 'https://carrierserver.cabreracano.de';
   carrierServerUrl = 'http://localhost:8081';
   private cancelledStatus:string="CANCELED_BY_USER";

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

  getVehicleRequestById(vehicleRequest_id: number) {
        this.getVehicleRequestUrl = this.carrierServerUrl + '/vehicleRequests/' + vehicleRequest_id;
         this.httpClient.get<Vehicle[]>(this.getVehicleRequestUrl, {
            headers: {userToken: this.userToken, identifier: 'APP'}
        }).subscribe((ps) => {
            this.vehicleRequestSubject.next(ps);
        });
       return this.vehicleRequestSubject.asObservable();
    }


     cancelVehicleRequest(parcelObject: Parcel) {

        
     this.getVehicleRequestById(parcelObject.vehicleRequestId).subscribe(data => 
            {
               this.vehicleRequest=data;               
                //Set Cancelation status for vehicle request
               this.vehicleRequest['status']=this.cancelledStatus;   
               
               // Cancel Vehicle Request
               this.httpClient.put(this.carrierServerUrl+'/vehicleRequests/'+parcelObject.vehicleRequestId, JSON.stringify(this.vehicleRequest), {
                headers: {identifier: 'APP', 'Content-Type': 'application/json'}
            }).subscribe(
                (response: Response) => {
                   console.log("Vehicle Request is canceled");
                });
            }
        );
       
      
         
    }


}
