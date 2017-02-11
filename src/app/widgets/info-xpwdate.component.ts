import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'info-xpwdate',
  styleUrls: ['./info-xpwdate.style.scss'],
  template: `
<section>
  <div class="title">
    <div [class]="'icon ' + (iconStyle ? iconStyle : '')"><img [src]="icon" /></div>
    <h2 class="text">{{title}}</h2>
  </div>
  <table class="table" *ngFor="let item of items">
    <tr>
      <td rowspan="3">{{item.month}}<br>{{item.year}}</td>
      <td>{{item.name}}</td>
    </tr>
    <tr><td>{{item.local}}, {{item.city}}</td></tr>
    <tr><td>{{item.description}}</td></tr>
  </table>
</section>
  `
})
export class InfoXPWDate{
  @Input() title;
  @Input() icon;
  @Input() iconStyle;
  @Input() items;
}