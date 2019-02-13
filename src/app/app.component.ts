import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {MenuService} from './core/menu.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    public href;
    isSidebarVisible = true;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private menuService: MenuService
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
        this.menuService.navState$.subscribe((state) => {
            this.isSidebarVisible = state;
            console.log(state);
        }, error => console.log(error));
    }
}
