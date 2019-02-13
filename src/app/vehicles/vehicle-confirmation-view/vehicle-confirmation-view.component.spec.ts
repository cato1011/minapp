import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleConfirmationViewComponent } from './vehicle-confirmation-view.component';

describe('VehicleConfirmationViewComponent', () => {
  let component: VehicleConfirmationViewComponent;
  let fixture: ComponentFixture<VehicleConfirmationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleConfirmationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleConfirmationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
