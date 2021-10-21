import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  icon1: Boolean = false;
  icon2: Boolean = false;
  icon3: Boolean = false;

  totalExp: string = '';
  relevantExp: string = '';
  startDateTechM: string = '2021-05-25';
  startDatePrakat: string = '2020-04-16';
  endDatePrakat: string = '2021-05-23';
  startDateUnitedLex: string = '2016-03-21';
  endDateUnitedLex: string = '2019-09-18';
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
    }
  }
}
