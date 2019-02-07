import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {Observable} from 'rxjs';
import {VehicleService} from '../vehicle.service'

@Component({
  selector: 'app-vehicle-request-view',
  templateUrl: './vehicle-request-view.component.html',
  styleUrls: ['./vehicle-request-view.component.sass']
})
export class VehicleRequestViewComponent implements OnInit {

  packetSizes=['S', 'M' ,'L' ,'XL'];
  vehicleRequestForm: FormGroup;
  

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    

    this.vehicleRequestForm= new FormGroup({
      'deliveryplaces': new FormControl(null),
      'deliverdatetime' : new FormControl(null),
      'packetsizes': new FormControl('S')

    
      

    })
  }

}
