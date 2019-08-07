import { Component, OnInit } from '@angular/core';
import { CurriculumVitae } from 'src/app/shared/models/curriculum-vitae';
import { CurriculumVitaeService } from 'src/app/shared/providers/curriculum-vitae.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cv: Observable<CurriculumVitae>;

  constructor(
    private curriculumVitae: CurriculumVitaeService
  ) { }

  ngOnInit() {
    this.cv = this.curriculumVitae.get();

    this.curriculumVitae.get().subscribe(data =>{
      console.log(data);
    });
  }

}
