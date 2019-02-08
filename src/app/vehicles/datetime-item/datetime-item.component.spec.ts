import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeItemComponent } from './datetime-item.component';

describe('DatetimeItemComponent', () => {
  let component: DatetimeItemComponent;
  let fixture: ComponentFixture<DatetimeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatetimeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
