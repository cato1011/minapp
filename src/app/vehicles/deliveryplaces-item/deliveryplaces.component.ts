import { Component, OnInit, Input } from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';
import {DeliveryPlace} from '../../delivery-places/delivery-places.model'
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {VehicleService} from '../vehicle.service'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-deliveryplaces',
  templateUrl: './deliveryplaces.component.html',
  styleUrls: ['./deliveryplaces.component.sass']
})
export class DeliveryplacesComponent implements OnInit {

  private deliveryPlacesSubject: Subject<DeliveryPlace[]> = new ReplaySubject<DeliveryPlace[]>(25);
  public parcelServerUrl: 'http://localhost:8082/parcels';
  public userToken = 'c1e46f017983b562c8c6af0627f28ff9';
  parcels$: Observable<DeliveryPlace[]>;
  deliveryPlaces: DeliveryPlace[];
  
  @Input() parentForm:FormGroup;

  constructor(private httpClient: HttpClient) { }

  reloadIn() {
        
    this.httpClient.get<DeliveryPlace[]>('http://localhost:8082/deliveryPlaces/', {
        headers: {userToken: this.userToken}
    }).subscribe((ps) => {
        this.deliveryPlacesSubject.next(ps);
    });
   
}   

getAllDeliveryPlaces() {
    
    return this.deliveryPlacesSubject.asObservable();
}


  ngOnInit() {

    this.reloadIn();
    this.parcels$ = this.getAllDeliveryPlaces();
    
  }

}
