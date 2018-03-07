import { Component, OnInit } from '@angular/core';

import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private _item;
  private _skills: string[];
  private _education: string[];
  private _experience:  string[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    
    this.getProducts();
  }

  getProducts() {
   
    this.portfolioService.list()
      .subscribe( response => {
        this._item = response.profile;
        this._skills = this._item.skills;
        this._experience = this._item.experience;
        this._education = this._item.education;
        }
      );
  }

}
