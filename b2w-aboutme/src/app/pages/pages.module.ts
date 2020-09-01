import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './about/header/header.component';
import { BannerComponent } from './about/banner/banner.component';
import { CardComponent } from './about/card/card.component';

@NgModule({
  declarations: [ AboutComponent, HeaderComponent, BannerComponent, CardComponent ],
  imports: [
    CommonModule
  ],
  exports: [ AboutComponent ]
})
export class PagesModule { }
