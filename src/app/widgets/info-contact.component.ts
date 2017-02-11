import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'info-contact',
  styleUrls: ['./info-contact.style.scss'],
  template: `
<section>
  <div class="title">
    <div [class]="'icon ' + (iconStyle ? iconStyle : '')"><img [src]="icon" /></div>
    <h2 class="text">{{title}}</h2>
  </div>
  <address>
    <ul>
      <li class="address">{{address}}</li>
      <li class="tel"><a [href]="'tel:' + tel">{{tel}}</a></li>
      <li class="email"><a [href]="'mailto:' + email">{{email}}</a></li>
      <li class="website"><a [href]="webSite">{{webSite.replace('http://', '')}}</a></li>
    </ul>
  </address>
</section>
  `
})
export class InfoContact{
  constructor(private sanitizer:DomSanitizer) {
    
  }
  @Input() title;
  @Input() icon;
  @Input() iconStyle;
  @Input() address;
  @Input() email;
  @Input() tel;
  @Input() webSite;
}