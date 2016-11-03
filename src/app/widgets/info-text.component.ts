import {Component, Input} from '@angular/core';

@Component({
  selector: 'info-text',
  styleUrls: ['./info-text.style.scss'],
  template: `
<section>
  <div class="title">
    <div [class]="'icon ' + (iconStyle ? iconStyle : '')"><img [src]="icon" /></div>
    <h2 class="text">{{title}}</h2>
  </div>
  <p class="description">{{description}}</p>
</section>
  `
})
export class InfoText{
  @Input() iconStyle;
  @Input() icon;
  @Input() title;
  @Input() description;
}