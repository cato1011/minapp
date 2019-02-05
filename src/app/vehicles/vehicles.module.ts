import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleRequestViewComponent} from './vehicle-request-view/vehicle-request-view.component';
import {VehiclesRouterModule} from './vehicles-router.module';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [VehicleRequestViewComponent],
    imports: [
        CommonModule,
        RouterModule,
        VehiclesRouterModule
    ]
})
export class VehiclesModule {
}
