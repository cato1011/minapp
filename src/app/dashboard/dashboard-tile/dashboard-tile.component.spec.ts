import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardTileComponent} from './dashboard-tile.component';
import {CommonModule} from '@angular/common';
import {DashboardRouterModule} from '../dashboard-router.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {DashboardListComponent} from '../dashboard-list/dashboard-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardItem} from '../dashboard.model';

describe('DashboardTileComponent', () => {
  let component: DashboardTileComponent;
  let fixture: ComponentFixture<DashboardTileComponent>;
  const mockItem: DashboardItem = {
    title: 'mock',
    link: 'mock',
    image: 'mock'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardListComponent, DashboardTileComponent],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        CommonModule,
        DashboardRouterModule,
        MatCardModule,
        MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTileComponent);
    TestBed.createComponent(DashboardListComponent);
    component = fixture.componentInstance;
    component.dashboardItem = mockItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
