import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {MenuListComponent} from './menu-list/menu-list.component';
import {MenuListItemComponent} from './menu-list-item/menu-list-item.component';
import {MenuRouterModule} from './menu-router.module';

@NgModule({
    declarations: [MenuListComponent, MenuListItemComponent],
    imports: [
        RouterModule,
        MenuRouterModule,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        IonicModule,
        TranslateModule
    ],
    exports: [MenuListComponent, MenuListItemComponent]
})
export class MenuModule {
}
