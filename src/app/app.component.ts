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
    imagePrefix = './assets/icons/menu/';

    // TODO translation
    public appPages = [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: this.imagePrefix + 'next_parcel_2x.png'
        },
        {
            title: 'Aktuelle Termine',
            url: '/events',
            icon: this.imagePrefix + 'clock_small_2x.png'
        },
        {
            title: 'Sendungen zu mir (Received)',
            url: '/parcels/in',
            icon: this.imagePrefix + 'parcels_in_2x.png'
        },
        {
            title: 'Sendungen von mir (Sent)',
            url: '/parcels/out',
            icon: this.imagePrefix + 'parcels_out_2x.png'
        },
        {
            title: 'Retoure',
            url: '/parcels/retoure',
            icon: this.imagePrefix + 'retoure_2x.png'
        },
        {
            title: 'Quartier-Kurier',
            url: '/parcels/n2n',
            icon: this.imagePrefix + 'n2n_2x.png'
        }
    ];

    // TODO translation
    public commercialAppPages = [
        {
            title: 'Zulieferer-Anlieferung',
            url: '/supplier',
            icon: this.imagePrefix + 'supplier_2x.png'
        },
        {
            title: 'Altpapier-Entsorgung',
            url: '/waste',
            icon: this.imagePrefix + 'waste_2x.png'
        }
    ];

    // TODO translation
    public generalPages = [
        {
            title: 'Settings',
            url: '/settings',
            icon: this.imagePrefix + 'settings_2x.png'
        },
        {
            title: 'Help / FAQ',
            url: '/help',
            icon: this.imagePrefix + 'faq_2x.png'
        },
        {
            title: 'Disclaimer',
            url: '/dislaimer',
            icon: this.imagePrefix + 'disclaimer_2x.png'
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
