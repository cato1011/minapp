import {Component, OnInit} from '@angular/core';
import {MenuService} from '../menu.service';
import {MenuItem} from '../menu.model';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.sass']
})
export class MenuListComponent implements OnInit {

    isSidebarVisible = true;
    firstMenuItems: MenuItem[];
    commercialMenuItems: MenuItem[];
    secondMenuItems: MenuItem[];

    constructor(private menuService: MenuService) {
    }

    ngOnInit() {
        this.firstMenuItems = this.menuService.getFirstMenuItem();
        this.commercialMenuItems = this.menuService.getCommercialMenuItems();
        this.secondMenuItems = this.menuService.getSecondMenuItems();
        console.log(this.firstMenuItems);
    }

}
