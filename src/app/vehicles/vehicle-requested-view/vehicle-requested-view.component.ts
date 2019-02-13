import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';


@Component({
  selector: 'app-vehicle-requested-view',
  templateUrl: './vehicle-requested-view.component.html',
  styleUrls: ['./vehicle-requested-view.component.sass']
})
export class VehicleRequestedViewComponent implements OnInit {
  private imageUrl="../assets/icons/parcels/vehicle_requested.png";

  constructor(public navCtrl: NgxNavigationWithDataComponent) { 
    console.log(this.navCtrl.get('name'));
  }

  ngOnInit() {
  }

}
