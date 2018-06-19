import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

    userNameObj;
    firstNameObj;
    LastNameObj;
    constructor(){

    }
    get userName(){
        return this.userNameObj
    }

    set userName(obj){
        this.userNameObj = obj;
    }

    get firstName(){
        return this.firstNameObj
    }

    set firstName(obj){
        this.firstNameObj = obj;
    }

    get lastName(){
        return this.LastNameObj
    }

    set lastName(obj){
        this.LastNameObj = obj;
    }

}