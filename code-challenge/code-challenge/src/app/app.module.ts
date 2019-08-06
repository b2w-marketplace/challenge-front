import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './pages/home/home.component';
import { CurriculumVitaeService } from './shared/providers/curriculum-vitae.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    HomeComponent,
    ProfileComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CurriculumVitaeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
