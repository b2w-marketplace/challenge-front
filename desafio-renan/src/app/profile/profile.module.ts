import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile.component';
import { IntroComponent } from './intro/intro.component';
import { LineBreakerPipe } from './../pipes/line-breaker.pipe';
import { DetailComponent } from './detail/detail.component';
import { BarChartComponent } from '../shared/bar-chart/bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    ProfileService
  ],
  declarations: [
    ProfileComponent,
    IntroComponent,
    LineBreakerPipe,
    DetailComponent,
    BarChartComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
