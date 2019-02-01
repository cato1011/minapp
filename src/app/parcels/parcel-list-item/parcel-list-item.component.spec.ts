import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelListItemComponent } from './parcel-list-item.component';

describe('ParcelListItemComponent', () => {
  let component: ParcelListItemComponent;
  let fixture: ComponentFixture<ParcelListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
