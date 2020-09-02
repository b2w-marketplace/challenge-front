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

  constructor(private userService: UserService, private mockService: MockService) { }

  ngOnInit(): void {

  }

  getUser() {
    this.userService.getUser().subscribe((userData: UserModel[]) => {
      this.userData = userData;
      console.log(this.userData);
    });
  }

}
