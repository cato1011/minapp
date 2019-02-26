import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsListRouteComponent } from './appointments-list-route.component';

describe('AppointmentsListRouteComponent', () => {
  let component: AppointmentsListRouteComponent;
  let fixture: ComponentFixture<AppointmentsListRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsListRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
