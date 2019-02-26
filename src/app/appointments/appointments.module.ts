import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppointmentsListRouteComponent} from './appointments-list-route/appointments-list-route.component';
import {AppointmentsListViewComponent} from './appointments-list-view/appointments-list-view.component';
import {RouterModule} from '@angular/router';
import {AppointmentsRouterModule} from './appointments-router.module';

@NgModule({
    declarations: [AppointmentsListRouteComponent, AppointmentsListViewComponent],
    imports: [
        CommonModule,
        RouterModule,
        AppointmentsRouterModule
    ]
})
export class AppointmentsModule {
}
