import {Injectable} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class VehicleService {

    
    public parcelServerUrl: 'http://localhost:8082/parcels';
    public userToken = 'c1e46f017983b562c8c6af0627f28ff9';

    constructor(private httpClient: HttpClient) {

    }

      



    
}
