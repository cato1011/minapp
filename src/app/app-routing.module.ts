import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginViewComponent} from './core/login-view/login-view.component';
import {PagenotfoundComponent} from './core/pagenotfound/pagenotfound.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginViewComponent
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'parcels',
        pathMatch: 'prefix',
        loadChildren: './parcels/parcels.module#ParcelsModule'
    },
    {path: '**', component: PagenotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
