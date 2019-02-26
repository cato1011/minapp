import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentsListRouteComponent} from './appointments-list-route/appointments-list-route.component';
import {AppointmentsListViewComponent} from './appointments-list-view/appointments-list-view.component';
import {RouterModule} from '@angular/router';
import {AppointmentsRouterModule} from './appointments-router.module';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [AppointmentsListRouteComponent, AppointmentsListViewComponent],
    imports: [
        CommonModule,
        RouterModule,
        AppointmentsRouterModule,
        IonicModule,
        TranslateModule,
    ],
    exports: [AppointmentsListRouteComponent]
})
export class AppointmentsModule {
}
