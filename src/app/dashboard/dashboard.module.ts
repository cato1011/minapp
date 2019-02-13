import {NgModule} from '@angular/core';
import {DashboardTileComponent} from './dashboard-tile/dashboard-tile.component';
import {DashboardRouterModule} from './dashboard-router.module';
import {DashboardListComponent} from './dashboard-list/dashboard-list.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [DashboardTileComponent, DashboardListComponent],
    imports: [
        RouterModule,
        DashboardRouterModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,        
        IonicModule,
        TranslateModule
    ],
    exports: [DashboardListComponent]
})
export class DashboardModule {
}
