import { Component, Input } from '@angular/core';

@Component({
  selector: 'bar-chart',
  template: `
    <div class="bar-chart">
      <div class="bar-filling" [style.width]="filled"></div>
    </div>
  `,
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

  @Input() filled: any;

  constructor() { }

}
