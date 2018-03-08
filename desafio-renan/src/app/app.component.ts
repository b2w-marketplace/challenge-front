import { Component } from '@angular/core';

import { ProfileService } from './profile/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  private profile: string[];
  constructor(private profileService: ProfileService){ }

  onInit

  getProfile() {

    this.profileService.getProfile()
      .subscribe( response => {
        this.profile = response.profile;
      }
    );
  }
}
