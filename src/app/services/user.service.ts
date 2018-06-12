import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

    nameObj;
    constructor(){

    }

    get name(){
        return this.nameObj
    }

    set name(obj){
        this.nameObj = obj;
    }

}