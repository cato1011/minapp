import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datetime-item',
  templateUrl: './datetime-item.component.html',
  styleUrls: ['./datetime-item.component.sass']
})
export class DatetimeItemComponent implements OnInit {

  @Input() parentForm:FormGroup;
  // Get the present date
  presentDate:Date = new Date(); 
  // Add 30 mins to present date to set the minimum date for drop down
  minimumTime=(new Date(this.presentDate.setMinutes(this.presentDate.getMinutes() + 90))).toISOString();
  minimumDate=this.presentDate.toISOString();
 
  constructor() { }

  ngOnInit() {
  }

}
