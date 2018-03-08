import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class ProfileService {

  private readonly endpoint: string = "http://www.mocky.io/v2";
  private readonly defaultParam: string = "/5a5e38f3330000b0261923a5";
  private params: string;

  constructor(private http: Http) { }

  getProfile(params?: string) {
    
    if(params && params != ""){
      this.params = "/" + params;
    }else{
      this.params = this.defaultParam;
    }

    return this.http.get(this.endpoint + this.params)
      .map((response) => response.json());
  }

}