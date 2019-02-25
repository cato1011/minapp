import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {SettingsViewComponent} from './settings-view/settings-view.component';
import {RouterModule} from '@angular/router';
import {UserRouterModule} from './user-router.module';
import { UserConfiguration } from './user.model';

@NgModule({
    declarations: [SettingsViewComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        UserRouterModule,
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
    providers: [UserConfiguration],
    exports: []
})
export class UserModule {
}
