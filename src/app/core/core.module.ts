import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {LoginViewComponent} from './login-view/login-view.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuListComponent} from './menu-list/menu-list.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {MenuListItemComponent} from './menu-list-item/menu-list-item.component';
import {RouterModule} from '@angular/router';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {TabBarComponent} from './tab-bar/tab-bar.component';

@NgModule({
    declarations: [PagenotfoundComponent, LoginViewComponent, MenuListComponent, MenuListItemComponent, ConfirmDialogComponent, TabBarComponent],
    imports: [
        FormsModule,
        RouterModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatDialogModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        IonicModule,
        TranslateModule
    ],
    entryComponents: [ConfirmDialogComponent],
    exports: [MenuListComponent, TabBarComponent]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
