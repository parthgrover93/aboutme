import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  activeTab = 'Home';

  constructor() {}

  ngOnInit(): void {}

  tabSelection(activeTab: string) {
    if (activeTab === 'Home') {
      this.activeTab = activeTab;
    } else if (activeTab === 'Skills') {
      this.activeTab = activeTab;
    } else if (activeTab === 'Experience') {
      this.activeTab = activeTab;
    } else if (activeTab === 'Education') {
      this.activeTab = activeTab;
    } else {
      this.activeTab = activeTab;
    }
  }
}
