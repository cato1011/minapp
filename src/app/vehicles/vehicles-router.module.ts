import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehicleRequestViewComponent} from './vehicle-request-view/vehicle-request-view.component';
import {VehicleRequestedViewComponent} from './vehicle-requested-view/vehicle-requested-view.component'

const routes: Routes = [
  { path: 'vehicleRequest', component: VehicleRequestViewComponent },
  { path: 'vehicleRequested', component: VehicleRequestedViewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class VehiclesRouterModule { }
