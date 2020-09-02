import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    urlBase = 'https://randomuser.me/api/';

    constructor(private httpClient: HttpClient) {}

    // Resgata dados de usuário
    getUser(): Observable<UserModel[]> {
        return this.httpClient.get<UserModel[]>(this.urlBase)
        .pipe(
            retry(2),
            catchError(this.handleError))
    }

    // Método de erro genérico
    handleError(error: HttpErrorResponse) {

        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Código: ${error.status}, ` + `mensagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };
}