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
    MatIconModule, MatInputModule,
    MatListModule,
    MatSidenavModule, MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuListItemComponent} from './menu-list-item/menu-list-item.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [PagenotfoundComponent, LoginViewComponent, MenuListComponent, MenuListItemComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
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
    entryComponents: [],
    exports: [MenuListComponent]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
