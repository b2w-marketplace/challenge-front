import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProfileService {

  private readonly endpoint: string = "http://www.mocky.io/v2";
  
  constructor(private http: Http) { }
  
  getProfile(params?: string): Observable<any> {
    
    let param: string;
    const defaultParam: string = "/5a5e38f3330000b0261923a5";
    
    params = params && params != "" ? "/" + params : defaultParam;;

    let url = this.endpoint + params;
    
    return this.http.get(url)
      .map((response: Response) => response.json().profile)
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error :('))
  }

}