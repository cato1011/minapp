import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleRequestViewComponent} from './vehicle-request-view/vehicle-request-view.component';
import {VehiclesRouterModule} from './vehicles-router.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {DeliveryplacesComponent} from './deliveryplaces-item/deliveryplaces.component';
import {DatetimeItemComponent} from './datetime-item/datetime-item.component';
import {MatButtonModule, MatCardModule, MatMenuModule} from '@angular/material';
import {VehicleRequestedViewComponent} from './vehicle-requested-view/vehicle-requested-view.component';

@NgModule({
    declarations: [VehicleRequestViewComponent, DeliveryplacesComponent, DatetimeItemComponent, VehicleRequestedViewComponent],
    imports: [
        CommonModule,
        RouterModule,
        VehiclesRouterModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        MatButtonModule,
        MatCardModule,
        MatMenuModule,
        TranslateModule
    ],
    providers: [],
    exports: [VehicleRequestViewComponent, DeliveryplacesComponent, VehicleRequestedViewComponent]
})
export class VehiclesModule {
}
