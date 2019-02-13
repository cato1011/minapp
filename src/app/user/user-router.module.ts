import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsViewComponent} from './settings-view/settings-view.component';

const routes: Routes = [
    {path: 'user/settings', component: SettingsViewComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class UserRouterModule {
}

