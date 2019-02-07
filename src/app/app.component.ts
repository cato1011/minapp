import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    public href;
    isSidebarVisible = true;
    imagePrefix = './assets/icons/';
    public appPages = [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: this.imagePrefix + 'parcel_sent.png'
        },
        {
            title: 'Sendungen zu mir (Received)',
            url: '/parcels/in',
            icon: this.imagePrefix + 'sendungen_zu_mir.png'
        },
        {
            title: 'Sendungen von mir (Sent)',
            url: '/parcels/out',
            icon: this.imagePrefix + 'sendungen_von_mir.png'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private appService: AppService
    ) {
        this.initializeApp();
        this.href = this.router.url;
        console.log(this.router.url);
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
        this.appService.navState$.subscribe((state) => {
            this.isSidebarVisible = state;
            console.log(state);
        }, error => console.log(error));
    }
}
