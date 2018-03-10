import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  @Input() introData: any;

  constructor() { }

  ngOnInit() {
  }

}