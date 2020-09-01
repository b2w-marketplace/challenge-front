import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'b2w-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUser() {
    console.log('get user');
  }

}
