import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms'
import {Observable} from 'rxjs';
import {VehicleService} from '../vehicle.service'
import { fbind } from 'q';

@Component({
  selector: 'app-vehicle-request-view',
  templateUrl: './vehicle-request-view.component.html',
  styleUrls: ['./vehicle-request-view.component.sass']
})
export class VehicleRequestViewComponent implements OnInit {

  packetSizes=['S', 'M' ,'L' ,'XL'];
  parentForm: FormGroup; 
  

  constructor(private vehicleService: VehicleService, private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm =this.fb.group({
      deliveryplaces: ['',Validators.required],
      datetime: ['',Validators.required]    
    });

    this.parentForm.valueChanges.subscribe(newVal =>console.log(newVal));
  }

  

  
}
