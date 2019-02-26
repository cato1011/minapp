import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppointmentsListRouteComponent} from './appointments-list-route/appointments-list-route.component';

const routes: Routes = [
    {path: ':context', component: AppointmentsListRouteComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class AppointmentsRouterModule {
}

