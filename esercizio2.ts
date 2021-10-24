import { IObj } from './esercizio1';

class User implements IObj{
    name: string;
    surname: string

    constructor(name: string, surname: string) {
        this.name = name;
        this.surname = surname;
    }

    fullName(){
        console.log(`${this.name} ${this.surname}`);
    }
}

let user : User = new User ('Chiara' ,'Grottini');

user.fullName();