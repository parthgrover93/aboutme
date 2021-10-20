import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent implements OnInit {
  experience: string = '';
  constructor() {}

  ngOnInit(): void {
    var currentDate = new Date();
    var startCareer = new Date('04-15-2020');
    var currentDateYear = currentDate.getFullYear();
    var currentDateMonth = currentDate.getMonth() + 1;
    var startCareerYear = startCareer.getFullYear();
    var startCareerMonth = startCareer.getMonth() + 1;

    var expyear = currentDateYear - startCareerYear;
    var expMonth = currentDateMonth - startCareerMonth;

    if (expMonth < 0) {
      expyear = expyear - 1;
      expMonth = 12 + Math.abs(currentDateMonth) - startCareerMonth;
    }
    expMonth = expMonth + 1;
    if (expMonth == 12) {
      expyear = expyear + 1;
      expMonth = 0;
    }
    this.experience = expyear + ' Year ';

    if (expMonth < 2) {
      this.experience = this.experience + expMonth + ' Month *';
    } else {
      this.experience = this.experience + expMonth + ' Months *';
    }
  }
}
