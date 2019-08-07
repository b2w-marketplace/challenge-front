import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() public experience;
  @Input() public title;
  
  constructor() { }

  ngOnInit() {
  }
  
}
