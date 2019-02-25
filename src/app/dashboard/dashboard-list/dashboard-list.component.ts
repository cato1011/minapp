import {Component, OnInit} from '@angular/core';
import {DashboardItem} from '../dashboard.model';
import {DashboardService} from '../dashboard.service';

@Component({
    selector: 'app-dashboard-list',
    templateUrl: './dashboard-list.component.html',
    styleUrls: ['./dashboard-list.component.sass']
})
export class DashboardListComponent implements OnInit {

    dashboardItems: DashboardItem[];

    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.dashboardItems = this.dashboardService.getDashboard();
    }

reset()
{
    this.ngOnInit();
}
}
