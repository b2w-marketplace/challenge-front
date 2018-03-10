import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() detailData: any;

  constructor() { }

  ngOnInit() {
  }

}
