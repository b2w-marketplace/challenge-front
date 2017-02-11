import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoText} from './info-text.component';
import {InfoProgress} from './info-progress.component';
import {InfoContact} from './info-contact.component';
import {InfoXPWDate} from './info-xpwdate.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InfoText, InfoProgress, InfoContact, InfoXPWDate],
  exports: [InfoText, InfoProgress, InfoContact, InfoXPWDate, CommonModule] ,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class WidgetModule {}