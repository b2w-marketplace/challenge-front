import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class MockService {

    initialData: UserModel[];

    constructor() {}

    getUserData() {
        return this.initialData = 
        [
            {
                results: [
                    {
                        name: {
                            first: 'Raphael',
                            last: 'Bezerra',
                            title: ''
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
                        picture: {
                            large: 'https://media-exp1.licdn.com/dms/image/C4E03AQHdOmFp7YpgBA/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=rxfOmXptf5PxpkXfJXj3cO4i2kLoLBr559cv5LSEBC0'
                        },
                        registered: {
                            age: 10
                        }
                    }
                ]
            }
        ]
    }

}