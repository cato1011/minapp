import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParcelListViewComponent} from './parcel-list-view/parcel-list-view.component';

const routes: Routes = [
  { path: ':context', component: ParcelListViewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ParcelRouterModule { }
