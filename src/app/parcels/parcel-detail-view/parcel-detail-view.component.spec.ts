import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ParcelDetailViewComponent} from './parcel-detail-view.component';
import {ParcelListViewComponent} from '../parcel-list-view/parcel-list-view.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';

describe('ParcelDetailViewComponent', () => {
  let component: ParcelDetailViewComponent;
  let fixture: ComponentFixture<ParcelDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelListViewComponent, ParcelDetailViewComponent],
      imports: [
        RouterTestingModule,
        CommonModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
