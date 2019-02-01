import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';

const routes: Routes = [
  {path: '', component: DashboardListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardRouterModule { }
