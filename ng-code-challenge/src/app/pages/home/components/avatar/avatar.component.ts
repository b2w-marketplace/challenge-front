import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnChanges {
  @Input() public avatar;
  @Input() public name;
  @Input() public profession;

  constructor() { }

  ngOnChanges() {
    this.avatar = 'https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/avatar-dev.png';
  }

}
