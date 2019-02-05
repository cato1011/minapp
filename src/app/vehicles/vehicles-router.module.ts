import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehicleRequestViewComponent} from './vehicle-request-view/vehicle-request-view.component';

const routes: Routes = [
  { path: 'vehicleRequest', component: VehicleRequestViewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class VehiclesRouterModule { }
