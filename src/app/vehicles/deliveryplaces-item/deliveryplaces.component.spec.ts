import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryplacesComponent } from './deliveryplaces.component';

describe('DeliveryplacesComponent', () => {
  let component: DeliveryplacesComponent;
  let fixture: ComponentFixture<DeliveryplacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryplacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
