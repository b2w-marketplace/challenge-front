import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'b2w-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() buttonEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  tryNext() {
    this.buttonEvent.emit();
  }

}
