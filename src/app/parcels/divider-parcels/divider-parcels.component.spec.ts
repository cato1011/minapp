import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerParcelsComponent } from './divider-parcels.component';

describe('DividerParcelsComponent', () => {
  let component: DividerParcelsComponent;
  let fixture: ComponentFixture<DividerParcelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerParcelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
