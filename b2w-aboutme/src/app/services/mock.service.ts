import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class MockService {

    initialData: UserModel = {
        results: [
            {
                name: {
                    first: 'string',
                    last: 'string',
                    title: 'string'
                },
                email: 'raphaelbzr@gmail.com',
                gender: 'Male',
                dob: {
                    age: 28
                },
                location: {
                    city: 'Guarulhos',
                    country: 'Brasil',
                    postcode: '00000-000',
                    state: 'São Paulo',
                    street: {
                        name: 'Rua Francisco Pereira',
                        number: 466
                    }
                },
                login: {
                    username: 'raphaelbzr'
                },
                phone: '(99) 9999-9999',
                cell: '(99) 99999-9999',
                registered: {
                    age: 10
                }
            }
        ]
    };

    constructor() {}

}