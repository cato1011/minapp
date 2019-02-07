import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParcelListViewComponent} from './parcel-list-view/parcel-list-view.component';
import {ParcelDetailViewComponent} from './parcel-detail-view/parcel-detail-view.component';
import {RouterModule} from '@angular/router';
import {ParcelRouterModule} from './parcel-router.module';
import {IonicModule} from '@ionic/angular';
import {ParcelListItemComponent} from './parcel-list-item/parcel-list-item.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [ParcelListViewComponent, ParcelListItemComponent, ParcelDetailViewComponent],
    imports: [
        CommonModule,
        RouterModule,
        ParcelRouterModule,
        IonicModule,
        TranslateModule
    ],
    exports: [ParcelListViewComponent]
})
export class ParcelsModule {
}
