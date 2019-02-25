import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsRouteComponent} from './settings-route/settings-route.component';

const routes: Routes = [
    {path: 'user/settings', component: SettingsRouteComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class UserRouterModule {
}

