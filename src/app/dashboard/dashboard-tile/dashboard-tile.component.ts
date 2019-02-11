import {Component, Input, OnInit} from '@angular/core';
import {DashboardItem} from '../dashboard.model';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.sass'],
  animations: [
    trigger('hover', [
      state('true', style({
        transform: 'scale(1.025)',
        'box-shadow': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      })),
      state('false', style({transform: 'scale(1.0)'})),
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out'))
    ])
  ]
})
export class DashboardTileComponent implements OnInit {

  @Input() dashboardItem: DashboardItem;
  isHovering = false;

  constructor(private router: Router) {
  }

  onClick() {
    console.log('hello');
    this.router.navigate([this.dashboardItem.link]);
  }

  ngOnInit() {
  }

}
