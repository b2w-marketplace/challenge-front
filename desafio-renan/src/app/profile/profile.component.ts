import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProfileService } from './profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private profile: any;
  private intro: any = {};
  private detail: any = {};
  private experience: any = [];
  private education: any = [];

  constructor(private profileService: ProfileService){ }

  ngOnInit(){

    this.getProfile();

  }

  getProfile() {

    this.profileService.getProfile()
      .subscribe(
        (profile) => {
          this.profile = profile;
          console.log(profile);
          this.intro = {
            "name": profile.name,
            "profession": profile.profession,
            "image": profile.image
          }
          this.detail = {
            "description": profile.description,
            "contact": profile.contact,
            "skills": profile.skills
          }
          this.experience = profile.experience;
          this.education = profile.education;
        },
        error => {
          console.log(error);
        }
    );

  }
}