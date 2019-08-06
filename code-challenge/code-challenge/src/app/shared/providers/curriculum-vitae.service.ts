import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurriculumVitae } from '../models/curriculum-vitae';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeService {

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<CurriculumVitae> {
    return this.http.get<CurriculumVitae>(environment.api);
  }
}
