import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleRequestViewComponent} from './vehicle-request-view/vehicle-request-view.component';
import {VehiclesRouterModule} from './vehicles-router.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'
import {IonicModule} from '@ionic/angular';
import { DeliveryplacesComponent } from './deliveryplaces-item/deliveryplaces.component';

@NgModule({
    declarations: [VehicleRequestViewComponent, DeliveryplacesComponent],
    imports: [
        CommonModule,
        RouterModule,
        VehiclesRouterModule,
        ReactiveFormsModule,
        IonicModule
    ],
    exports: [VehicleRequestViewComponent]
})
export class VehiclesModule {
}
