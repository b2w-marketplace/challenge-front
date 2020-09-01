import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'b2w-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() buttonTitle: string;

  moreInfo = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMoreInfo() {
    if (this.moreInfo === true) {
      this.moreInfo = false;
    } else {
      this.moreInfo = true;
    }
  }

}
