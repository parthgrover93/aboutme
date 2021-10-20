import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    FaqsComponent,
    HomeComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
