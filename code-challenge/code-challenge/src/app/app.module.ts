import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CurriculumVitaeService } from './shared/providers/curriculum-vitae.service';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './pages/home/components/experience/experience.component';
import { ProfileComponent } from './pages/home/components/profile/profile.component';
import { AvatarComponent } from './pages/home/components/avatar/avatar.component';

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
