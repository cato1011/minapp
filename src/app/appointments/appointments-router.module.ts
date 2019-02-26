import {NgModule} from '@angular/core';
import {ParcelListRouteComponent} from '../parcels/parcel-list-route/parcel-list-route.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', component: ParcelListRouteComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class AppointmentsRouterModule {
}

