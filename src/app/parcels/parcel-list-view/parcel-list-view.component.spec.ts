import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelListViewComponent } from './parcel-list-view.component';

describe('ParcelListViewComponent', () => {
  let component: ParcelListViewComponent;
  let fixture: ComponentFixture<ParcelListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
