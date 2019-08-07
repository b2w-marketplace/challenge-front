import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Contact, Skill } from 'src/app/shared/models/curriculum-vitae';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnChanges {
  @Input() public contact: Contact;
  @Input() public description: string;
  @Input() public skills: Skill[];
  
  constructor() { }

  ngOnChanges() {
    this.skills.map((skill, idx) => {
      this.skills[idx].value = skill.value.substring(-1, 2);
    });
  }

}
