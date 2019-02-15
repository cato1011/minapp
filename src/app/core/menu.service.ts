import {Injectable} from '@angular/core';
import {BehaviorSubject, ReplaySubject} from 'rxjs';
import {MenuItem} from './menu.model';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    // TODO has to be changed to false in prod mode in order to prevent showing the navbar without login
    private navStateSource = new ReplaySubject<boolean>(1);
    public menuItemsFirst: MenuItem[];
    public commercialMenuItems: MenuItem[];
    public menuItemsSecond: MenuItem[];
    navState$ = this.navStateSource.asObservable();
    imagePrefix = './assets/icons/menu/';

    constructor() {
    }

    setNavBarState(state: boolean) {
        this.navStateSource.next(state);
    }

    getFirstMenuItem() {
        this.menuItemsFirst = [
            {
                title: 'menu.dashboard',
                url: '/dashboard',
                icon: this.imagePrefix + 'next_parcel_2x.png'
            },
            {
                title: 'menu.appointments',
                url: '/parcels/appointments',
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
        return this.menuItemsFirst;
    }

    getCommercialMenuItems() {
        this.commercialMenuItems = [
            {
                title: 'menu.supplier',
                url: '/supplier',
                icon: this.imagePrefix + 'supplier_2x.png',
                color: '#BCE0FD'
            },
            {
                title: 'menu.waste',
                url: '/waste',
                icon: this.imagePrefix + 'waste_2x.png',
                color: '#BCE0FD'
            }
        ];
        return this.commercialMenuItems;
    }

    getSecondMenuItems() {
        this.menuItemsSecond = [
            {
                title: 'menu.settings',
                url: '/user/settings',
                icon: this.imagePrefix + 'settings_2x.png'
            },
            {
                title: 'menu.help',
                url: '/help',
                icon: this.imagePrefix + 'faq_2x.png'
            },
            {
                title: 'menu.disclaimer',
                url: '/disclaimer',
                icon: this.imagePrefix + 'disclaimer_2x.png'
            }
        ];
        return this.menuItemsSecond;
    }
}
