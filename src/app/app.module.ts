import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginModule} from './login/login.module';
import {LoginService} from './login/login.service';
import {HttpClient} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {MatIconModule} from '@angular/material';
import {VehiclesModule} from './vehicles/vehicles.module';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        LoginModule,
        VehiclesModule,
        CoreModule,
        MatIconModule,
        AppRoutingModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {
            provide: APP_INITIALIZER,
            useFactory: (loginService: LoginService) => () => loginService.init(),
            deps: [LoginService, HttpClient],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
