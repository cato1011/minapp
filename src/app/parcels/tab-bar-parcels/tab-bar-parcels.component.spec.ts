import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBarParcelsComponent } from './tab-bar-parcels.component';

describe('TabBarParcelsComponent', () => {
  let component: TabBarParcelsComponent;
  let fixture: ComponentFixture<TabBarParcelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBarParcelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBarParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
