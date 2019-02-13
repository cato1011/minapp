import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './user/user.module';
import {UserService} from './user/user.service';
import {HttpClient} from '@angular/common/http';
import {CoreModule} from './core/core.module';
import {VehiclesModule} from './vehicles/vehicles.module';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {DeliveryPlacesModule} from './delivery-places/delivery-places.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        IonicModule.forRoot(),
        BrowserModule,
        CoreModule,
        UserModule,
        VehiclesModule,
        DeliveryPlacesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {
            provide: APP_INITIALIZER,
            useFactory: (userService: UserService) => () => userService.init(),
            deps: [UserService, HttpClient],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(translate: TranslateService) {
        translate.setDefaultLang('de');
        translate.use('en');
    }
}
