import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService } from './core/menu.service';
import { filter } from 'rxjs/operators';
import { MessagingService } from "./core/messaging.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

    href;
    isSidebarVisible;
    message;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private menuService: MenuService,
        private msgService: MessagingService
    ) {
    }

    ngOnInit() {
        this.initializeApp();
        this.menuService.navState$.subscribe((state) => {
            this.isSidebarVisible = state;
        }, error => console.log(error));
        this.href = this.router.url;
        this.menuService.setNavBarState(false);

        this.msgService.getPermission();
        this.msgService.receiveMessage();
        this.message = this.msgService.currentMessage;
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // this.statusBar.styleDefault();
            // this.splashScreen.hide();
        });
        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe((nav: NavigationEnd) => {
            (nav.url === '/login') ? this.menuService.setNavBarState(false) : this.menuService.setNavBarState(true);
        });
    }
}
