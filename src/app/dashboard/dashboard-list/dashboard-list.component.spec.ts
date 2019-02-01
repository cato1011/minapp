import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {DashboardListComponent} from './dashboard-list.component';
import {DashboardTileComponent} from '../dashboard-tile/dashboard-tile.component';
import {DashboardService} from '../dashboard.service';
import {CommonModule} from '@angular/common';
import {DashboardRouterModule} from '../dashboard-router.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DashboardItem} from '../dashboard.model';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;
  const dashboardService: DashboardService = new DashboardService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardListComponent, DashboardTileComponent],
      providers: [{
        provide: DashboardService, useValue: dashboardService
      }],
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
    fixture = TestBed.createComponent(DashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
;
