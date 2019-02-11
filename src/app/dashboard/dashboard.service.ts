import {Injectable} from '@angular/core';
import {DashboardItem} from './dashboard.model';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    public dashboardItems: DashboardItem[];
    public imagePrefix = './assets/icons/dashboard/';
    public foo: string;

    constructor(private translate: TranslateService) {

    }

    public getDashboard() {
        this.dashboardItems = [
            {
                title: this.translate.instant('dashboard.appointments'),
                link: 'events',
                image: this.imagePrefix + 'clock_big_2x.png'
            },
            {
                title: this.translate.instant('dashboard.parcels_to_me'),
                link: 'parcels/in',
                image: this.imagePrefix + 'parcels_in_2x.png'
            },
            {
                title: this.translate.instant('dashboard.parcels_from_me'),
                link: 'parcels/out',
                image: this.imagePrefix + 'parcels_out_2x.png'
            }
        ];
        return this.dashboardItems;
    }
}
