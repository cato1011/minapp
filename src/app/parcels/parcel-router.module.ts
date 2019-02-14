import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParcelListRouteComponent} from './parcel-list-route/parcel-list-route.component';

const routes: Routes = [
    {path: ':context', component: ParcelListRouteComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ParcelRouterModule {
}
