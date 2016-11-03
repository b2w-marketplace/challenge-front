import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  loadData () {
    return this.http.get('http://www.mocky.io/v2/57dfec211000009020598073')
      .map(res => res.json())
  }
}
