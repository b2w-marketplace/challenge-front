import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './about/header/header.component';
import { BannerComponent } from './about/banner/banner.component';
import { CardComponent } from './about/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AboutComponent, HeaderComponent, BannerComponent, CardComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [ AboutComponent ]
})
export class PagesModule { }
