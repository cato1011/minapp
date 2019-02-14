import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelListRouteComponent } from './parcel-list-route.component';

describe('ParcelListRouteComponent', () => {
  let component: ParcelListRouteComponent;
  let fixture: ComponentFixture<ParcelListRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelListRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
