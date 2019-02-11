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
            title: 'menu.dashboard',
            url: '/dashboard',
            icon: this.imagePrefix + 'next_parcel_2x.png'
        },
        {
            title: 'menu.appointments',
            url: '/appointments',
            icon: this.imagePrefix + 'clock_small_2x.png'
        },
        {
            title: 'menu.parcels_to_me',
            url: '/parcels/in',
            icon: this.imagePrefix + 'parcels_in_2x.png'
        },
        {
            title: 'menu.parcels_from_me',
            url: '/parcels/out',
            icon: this.imagePrefix + 'parcels_out_2x.png'
        },
        {
            title: 'menu.return',
            url: '/parcels/retoure',
            icon: this.imagePrefix + 'retoure_2x.png'
        },
        {
            title: 'menu.courier',
            url: '/parcels/n2n',
            icon: this.imagePrefix + 'n2n_2x.png'
        }
    ];

    // TODO translation
    public commercialAppPages = [
        {
            title: 'menu.supplier',
            url: '/supplier',
            icon: this.imagePrefix + 'supplier_2x.png'
        },
        {
            title: 'menu.waste',
            url: '/waste',
            icon: this.imagePrefix + 'waste_2x.png'
        }
    ];

    // TODO translation
    public generalPages = [
        {
            title: 'menu.settings',
            url: '/settings',
            icon: this.imagePrefix + 'settings_2x.png'
        },
        {
            title: 'menu.help',
            url: '/help',
            icon: this.imagePrefix + 'faq_2x.png'
        },
        {
            title: 'menu.disclaimer',
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
