import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'info-progress',
  styleUrls: ['./info-progress.style.scss'],
  template: `
<section>
  <div class="title">
    <div [class]="'icon ' + (iconStyle ? iconStyle : '')"><img [src]="icon" /></div>
    <h2 class="text">{{title}}</h2>
  </div>
  <ul class="items">
    <li *ngFor="let item of items">
      <div>
        <div class="key">{{item.key}}</div>
        <div [class]="'progress ' + (iconStyle ? 'progress2' : '')">
          <div [style]="sanitizer.bypassSecurityTrustStyle('width: ' + item.value * 280 / 100 + 'px;')"></div>
        </div>
      </div>
    </li>
  </ul>
</section>
  `
})
export class InfoProgress{
  constructor(private sanitizer:DomSanitizer) {
    
  }
  @Input() iconStyle;
  @Input() icon;
  @Input() title;
  @Input() items;
}