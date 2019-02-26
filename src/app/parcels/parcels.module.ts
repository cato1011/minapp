import {NgModule} from '@angular/core';
import {ParcelListViewComponent} from './parcel-list-view/parcel-list-view.component';
import {RouterModule} from '@angular/router';
import {ParcelRouterModule} from './parcel-router.module';
import {IonicModule} from '@ionic/angular';
import {ParcelListItemComponent} from './parcel-list-item/parcel-list-item.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '../core/core.module';
import {CommonModule} from '@angular/common';
import {ParcelListRouteComponent} from './parcel-list-route/parcel-list-route.component';
import {DateFnsModule} from 'ngx-date-fns';
import {ParcelEnumPipe} from './parcel-enum.pipe';
import {MatDialogModule} from '@angular/material';


@NgModule({
    declarations: [ParcelListRouteComponent, ParcelListViewComponent, ParcelListItemComponent, ParcelEnumPipe],
    imports: [
        CoreModule,
        CommonModule,
        RouterModule,
        ParcelRouterModule,
        IonicModule,
        TranslateModule,
        MatDialogModule,
        DateFnsModule.forRoot()
    ],
    exports: [ParcelListRouteComponent]
})
export class ParcelsModule {
}
