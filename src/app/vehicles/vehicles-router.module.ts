import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VehicleRequestViewComponent} from './vehicle-request-view/vehicle-request-view.component';
import {VehicleConfirmationViewComponent} from './vehicle-confirmation-view/vehicle-confirmation-view.component'

const routes: Routes = [
  { path: 'vehicleRequest', component: VehicleRequestViewComponent },
  { path: 'vehicleConfirmation', component: VehicleConfirmationViewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class VehiclesRouterModule { }
