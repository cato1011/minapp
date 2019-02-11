import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ServerUrl } from '../core/serverurls'
import { Vehicles } from '../vehicles/vehicles.model'


@Injectable({
    providedIn: 'root'
})
export class VehicleService {


    public parcelServerUrl: 'http://localhost:8082/parcels';
    public userToken = 'c1e46f017983b562c8c6af0627f28ff9';

    constructor(private httpClient: HttpClient, private serverUrl: ServerUrl) {

    }


    public sendVehicleRequest(vehicle_obj: Vehicles) {


        var obs = this.httpClient.post('http://localhost:8081/vehicleRequests', JSON.stringify(vehicle_obj), {
            headers: { userToken: this.userToken, identifier: 'APP', 'Content-Type': 'application/json' }

        })
            .subscribe(
                (response: Response) => { console.log(response) }
            );

        return obs;
    }





}
