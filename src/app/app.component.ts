import {Component, ViewChild} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AppService} from './app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MenuService} from './menu/menu.service';
import {MenuListComponent} from './menu/menu-list/menu-list.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    animations: [
        trigger('hover', [
            state('true', style({
                'color': '#f13'
            })),
            state('false', style({})),
            transition('false => true', animate('50ms ease-in')),
            transition('true => false', animate('50ms ease-out'))
        ])
    ]
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
