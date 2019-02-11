import {NgModule,forwardRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleRequestViewComponent} from './vehicle-request-view/vehicle-request-view.component';
import {VehiclesRouterModule} from './vehicles-router.module';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {IonicModule} from '@ionic/angular';
import {DeliveryplacesComponent } from './deliveryplaces-item/deliveryplaces.component';
import {DatetimeItemComponent } from './datetime-item/datetime-item.component';
import {
    MatButtonModule,
    MatCardModule,
    
} from '@angular/material'

@NgModule({
    declarations: [VehicleRequestViewComponent, DeliveryplacesComponent, DatetimeItemComponent],
    imports: [
        CommonModule,
        RouterModule,
        VehiclesRouterModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        MatButtonModule,
        MatCardModule,
    ],
    exports: [VehicleRequestViewComponent]
    
})
export class VehiclesModule {
}
