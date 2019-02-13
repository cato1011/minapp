import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-datetime-item',
  templateUrl: './datetime-item.component.html',
  styleUrls: ['./datetime-item.component.sass']
})
export class DatetimeItemComponent implements OnInit {

  @Input() parentForm: FormGroup;
  // Get the present date
  presentDate: Date = new Date();
  // Disable old date in drop down 
  minimumDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  

  constructor() {
    
   }

  ngOnInit() {
  }

}
