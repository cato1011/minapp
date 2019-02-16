import {NgModule} from '@angular/core';
import {ParcelListViewComponent} from './parcel-list-view/parcel-list-view.component';
import {ParcelDetailViewComponent} from './parcel-detail-view/parcel-detail-view.component';
import {RouterModule} from '@angular/router';
import {ParcelRouterModule} from './parcel-router.module';
import {IonicModule} from '@ionic/angular';
import {ParcelListItemComponent} from './parcel-list-item/parcel-list-item.component';
import {TranslateModule} from '@ngx-translate/core';
import {CoreModule} from '../core/core.module';
import {CommonModule} from '@angular/common';
import {ParcelListRouteComponent} from './parcel-list-route/parcel-list-route.component';
import {TabBarParcelsComponent} from './tab-bar-parcels/tab-bar-parcels.component';
import {DateFnsModule} from 'ngx-date-fns';


@NgModule({
    declarations: [ParcelListViewComponent, ParcelListItemComponent, ParcelDetailViewComponent, ParcelListRouteComponent, TabBarParcelsComponent],
    imports: [
        CoreModule,
        CommonModule,
        RouterModule,
        ParcelRouterModule,
        IonicModule,
        TranslateModule,
        DateFnsModule.forRoot()
    ],
    exports: [TabBarParcelsComponent, ParcelListViewComponent]
})
export class ParcelsModule {
}
