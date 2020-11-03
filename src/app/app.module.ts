import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AtomsModule } from './shared/atoms/atoms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { BackgroundComponent } from './components/background/background.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MenuComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    BackgroundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AtomsModule,
    RoundProgressModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
