import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {MenuService} from './core/menu.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

    href;
    isSidebarVisible;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private menuService: MenuService
    ) {
    }

    ngOnInit() {
        this.initializeApp();
        this.menuService.navState$.subscribe((state) => {
            this.isSidebarVisible = state;
        }, error => console.log(error));
        this.href = this.router.url;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // this.statusBar.styleDefault();
            // this.splashScreen.hide();
        });
    }

}
