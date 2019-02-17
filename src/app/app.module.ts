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
import {DashboardModule} from './dashboard/dashboard.module';
import {CommonModule} from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// For push notifications
import { MessagingService } from './core/messaging.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// Configuration of firebase
export const firebaseConfig = {
    apiKey: "AIzaSyCyC_Y0GyM3Pob6ucRxNXK8BBUIXgGf_4c",
      authDomain: "push-buga.firebaseapp.com",
      databaseURL: "https://push-buga.firebaseio.com",
      projectId: "push-buga",
      storageBucket: "push-buga.appspot.com",
      messagingSenderId: "429056293943"
  };

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        IonicModule.forRoot(),
        CoreModule,
        CommonModule,
        UserModule,
        VehiclesModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        MessagingService,
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
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('de');
        translate.use('en');
    }
}
