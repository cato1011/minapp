import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../menu.model';

@Component({
    selector: 'app-menu-list-item',
    templateUrl: './menu-list-item.component.html',
    styleUrls: ['./menu-list-item.component.sass']
})
export class MenuListItemComponent implements OnInit {
    @Input() menuItem: MenuItem;

    constructor() {
    }

    ngOnInit() {
    }

}
