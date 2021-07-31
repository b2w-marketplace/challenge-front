
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  url = 'https://randomuser.me/api/';

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // busca pessoa
  getPessoa(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // tratamento de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
