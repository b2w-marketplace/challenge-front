import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'b2w-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() userImage: string;
  @Input() state: string;
  @Input() country: string;

  @Output() followEvent: EventEmitter<any> = new EventEmitter();

  @Input() following: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  follow() {
    this.followEvent.emit();
  }

}
