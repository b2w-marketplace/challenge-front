import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'b2w-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  userData: UserModel[] = [];
  userDataNext = [];
  followingUsers = [];
  following: boolean;

  constructor(private userService: UserService, private mockService: MockService) { }

  ngOnInit(): void {
    this.userData = this.mockService.getUserData();
  }

  getUser() {

    setTimeout(() => {
      this.following = false;
    }, 500);
 
    this.userService.getUser().subscribe((userData: UserModel[]) => {
      this.userDataNext = [];
      this.userDataNext.push(userData);
      this.userData = this.userDataNext;

      setTimeout(() => {
        this.userData.forEach((item) => {
          item.results.forEach((itemResults) => {
            if (this.followingUsers.indexOf(itemResults.login.username) > -1) {
              this.following = true;
            }
          });
        });
      }, 500);
    });
  }

  setFollow(userName: string) {

    if (this.followingUsers.indexOf(userName) < 0) {
      this.following = true;
      this.followingUsers.push(userName);
    } else if (this.followingUsers.indexOf(userName) > -1) {
      this.following = false;
      this.followingUsers = this.followingUsers.filter(item => item !== userName);
    }
  }

}
