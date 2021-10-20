import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  icon1: Boolean = true;
  icon2: Boolean = true;
  icon3: Boolean = true;
  icon4: Boolean = true;
  icon5: Boolean = true;
  icon6: Boolean = true;
  icon7: Boolean = true;
  icon8: Boolean = true;
  icon9: Boolean = true;
  totalExp: string = '';
  relevantExp: string = '';

  constructor() {}

  ngOnInit(): void {
    var currentDate = new Date();
    var startCareer = new Date('09-21-2016');
    var startRelevantCareer = new Date('04-15-2020');
    var currentDateYear = currentDate.getFullYear();
    var currentDateMonth = currentDate.getMonth() + 1;
    var startCareerYear = startCareer.getFullYear();
    var startCareerMonth = startCareer.getMonth() + 1;
    var startRelevantCareerYear = startRelevantCareer.getFullYear();
    var startRelevantCareerMonth = startRelevantCareer.getMonth() + 1;

    var expyear = currentDateYear - startCareerYear;
    var expRelevantYear = currentDateYear - startRelevantCareerYear;
    var expMonth = currentDateMonth - startCareerMonth;
    var expRelevantMonth = currentDateMonth - startRelevantCareerMonth;

    if (expMonth < 0) {
      expyear = expyear - 1;
      expMonth = 12 + Math.abs(currentDateMonth) - startCareerMonth;
    }
    if (expRelevantMonth < 0) {
      expRelevantYear = expRelevantYear - 1;
      expRelevantMonth = 12 + Math.abs(currentDateMonth) - expRelevantMonth;
    }
    expMonth = expMonth + 1;
    expRelevantMonth = expRelevantMonth + 1;
    if (expMonth == 12) {
      expyear = expyear + 1;
      expMonth = 0;
    }
    if (expRelevantMonth == 12) {
      expRelevantYear = expRelevantYear + 1;
      expRelevantMonth = 0;
    }
    this.totalExp = expyear + ' Year ';
    this.relevantExp = expRelevantYear + ' Year ';

    if (expMonth < 2) {
      this.totalExp = this.totalExp + expMonth + ' Month *';
    } else {
      this.totalExp = this.totalExp + expMonth + ' Months *';
    }
    if (expRelevantMonth < 2) {
      this.relevantExp = this.relevantExp + expRelevantMonth + ' Month *';
    } else {
      this.relevantExp = this.relevantExp + expRelevantMonth + ' Months *';
    }
  }
  switchIcon(input: number) {
    if (input == 1) {
      this.icon1 = !this.icon1;
    } else if (input == 2) {
      this.icon2 = !this.icon2;
    } else if (input == 3) {
      this.icon3 = !this.icon3;
    } else if (input == 4) {
      this.icon4 = !this.icon4;
    } else if (input == 5) {
      this.icon5 = !this.icon5;
    } else if (input == 6) {
      this.icon6 = !this.icon6;
    } else if (input == 7) {
      this.icon7 = !this.icon7;
    } else if (input == 8) {
      this.icon8 = !this.icon8;
    } else if (input == 9) {
      this.icon9 = !this.icon9;
    }
  }
}
