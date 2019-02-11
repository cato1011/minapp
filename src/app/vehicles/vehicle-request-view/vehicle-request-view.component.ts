import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { VehicleService } from '../vehicle.service'
import { Vehicles } from '../vehicles.model'
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-vehicle-request-view',
  templateUrl: './vehicle-request-view.component.html',
  styleUrls: ['./vehicle-request-view.component.sass']
})
export class VehicleRequestViewComponent implements OnInit {

  packetSizes = ['S', 'M', 'L', 'XL'];
  vehicleRequestForm: FormGroup;
  public userToken = 'c1e46f017983b562c8c6af0627f28ff9';
  public  request_type: string;
  public parcelGUID:string;
  vehicles: Vehicles = {
    "boxGUID": "",
    "id": 0,
    "latitude": 0,
    "longitude": 0,
    "parcelGUID": "",
    "potentialVehicleIds": [0],
    "requestPurpose": "",
    "size": "new_request",
    "status": "",
    "time": "",
    "userToken": "",
    "waitingTime": 0,
  };



  // For Default value in Form Group
  presentDate: Date = new Date();
  minimumDate = this.presentDate.toISOString();



  constructor(private vehicleService: VehicleService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    // Define Form
    this.vehicleRequestForm = this.fb.group({
      deliveryplaces: ['', Validators.required],
      datetime: [this.minimumDate]
    });

    // Get URL params to distinguish between normal vehicle request or parcel related request
    this.route.queryParams.subscribe(queryParams => {
      this.request_type = queryParams['func'];     
      this.parcelGUID=queryParams['parcelGUID'];
  });    

  }

  sendData() {

    var latitude_longitude = this.vehicleRequestForm.value.deliveryplaces.split("|", 2);
    // Set variables for post request
    this.vehicles.latitude = latitude_longitude[0];
    this.vehicles.longitude = latitude_longitude[1];

    // Set Request purpose according to URL param
    switch ( this.request_type) {
      case ("pd"):
        this.vehicles.requestPurpose = "PARCEL_DELIVERY";
        this.vehicles.parcelGUID=this.parcelGUID;
        break;

      case ("vr"):
        this.vehicles.requestPurpose = "VEHICLE_CALL";
        break;
    }

    // Set other required fields for Vehicle Request Object
   
    this.vehicles.status = "PENDING";
    this.vehicles.time = this.vehicleRequestForm.value.datetime;
    this.vehicles.userToken = this.userToken;

    // Send Vehicle Request
    this.vehicleService.sendVehicleRequest(this.vehicles);

  }




}
