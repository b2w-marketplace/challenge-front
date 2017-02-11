import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.loadData().subscribe(
      data => {

        /**
         * padronizando o retorno da API para reutilizar os compomentes.
         */
          this.data = data;
          this.data.personalSkill = Object.assign({},
            {title: this.data.personalSkill.title},
            {items: Object.keys(this.data.personalSkill).filter(x => x !== 'title').map(i => { return { key: i, value: this.data.personalSkill[i]}})}
          );

          this.data.professionalSkill = Object.assign({},
            {title: this.data.professionalSkill.title},
            {items: this.data.professionalSkill.tools.map(x => {return {key: x.toolName, value: x.toolsSkill}})}
          );

          this.data.education = Object.assign({},
            {title: this.data.education.title},
            {items: this.data.education.university.map(x => {return {
              name: x.courseName,
              description: x.description,
              month: x.month,
              year: x.year,
              local: x.universityName,
              city: x.universityCity
            }})}
          );

          this.data.experience = Object.assign({},
            {title: this.data.experience.title},
            {items: this.data.experience.company.map(x => {return {
              name: x.roleName,
              description: x.description,
              month: x.month,
              year: x.year,
              local: x.companyName,
              city: x.companyCity
            }})}
          );

          this.data.award = Object.assign({},
            {title: this.data.award.title},
            {items: [{
              name: this.data.award.awardName,
              description: this.data.award.description,
              month: this.data.award.month,
              year: this.data.award.year,
              local: this.data.award.projectName,
              city: this.data.award.city
            }]}
          );
        },
      error => console.error(error)
    )
  }
}
