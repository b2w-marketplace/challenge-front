import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  @Input() contentTitle: any = [];
  @Input() contentData: any = [];

  constructor() { }

}
