import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})


export class CrudService {

  constructor( private http : HttpClient) { }
  public getUsers():Observable<any>{

    return this.http.get("https://randomuser.me/api/")
  }

}
