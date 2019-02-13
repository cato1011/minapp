import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRequestedViewComponent } from './vehicle-requested-view.component';

describe('VehicleConfirmationViewComponent', () => {
  let component: VehicleRequestedViewComponent;
  let fixture: ComponentFixture<VehicleRequestedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleRequestedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRequestedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
