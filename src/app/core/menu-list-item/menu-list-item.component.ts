import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../menu.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-menu-list-item',
    templateUrl: './menu-list-item.component.html',
    styleUrls: ['./menu-list-item.component.sass'],
    animations: [
        trigger('hover', [
            state('true', style({
                'color': '#42B961',
                'font-weight': 'bold',
                transform: 'scale(1.05)'
            })),
            state('false', style({})),
            transition('false => true', animate('50ms ease-in')),
            transition('true => false', animate('50ms ease-out'))
        ])
    ]
})
export class MenuListItemComponent implements OnInit {
    @Input() menuItem: MenuItem;
    isHovering = false;

    constructor() {
    }

    ngOnInit() {
    }

}
