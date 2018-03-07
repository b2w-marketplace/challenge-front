import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PortifolioModule } from './portfolio/portfolio.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PortifolioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
