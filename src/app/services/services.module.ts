import {NgModule} from '@angular/core';
import {ApiService} from './api.service'

@NgModule({})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [ApiService]
    }
  } 
}