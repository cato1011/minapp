import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-requested-view',
  templateUrl: './vehicle-requested-view.component.html',
  styleUrls: ['./vehicle-requested-view.component.sass']
})
export class VehicleRequestedViewComponent implements OnInit {
  private imageUrl="../assets/icons/parcels/vehicle_requested.png";

  constructor() { 
    
  }

  ngOnInit() {
  }

}
