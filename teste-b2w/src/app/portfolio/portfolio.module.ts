import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioService } from './portfolio.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PortfolioComponent
  ],
  exports: [
    PortfolioComponent
  ],
  providers: [
    PortfolioService,
    PortfolioComponent
  ]
})
export class PortifolioModule { }