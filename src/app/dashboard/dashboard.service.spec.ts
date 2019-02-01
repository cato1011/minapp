import {TestBed} from '@angular/core/testing';

import {DashboardService} from './dashboard.service';
import {CommonModule} from '@angular/common';
import {DashboardRouterModule} from './dashboard-router.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';
import {DashboardModule} from './dashboard.module';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      CommonModule,
      DashboardRouterModule,
      DashboardModule,
      MatCardModule,
      MatButtonModule
    ]
  }));

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });
});
