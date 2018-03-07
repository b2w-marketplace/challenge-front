import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class PortfolioService {

  http: Http;
  private readonly _url: string = 'http://www.mocky.io/v2/5a5e38f3330000b0261923a5';

  constructor(private _http: Http) {

    this.http = _http;
  }
   
  list() {

    let result = this.http.get(this._url)
      .map((res) => res.json());
    return result;
  }

}
