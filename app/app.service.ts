import {Http, Headers} from "@angular/http";
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import config from "./config";
import {TimeWork} from "./app.models";
import {timeworkDatas} from "./mockData";

@Injectable()
export class AppService {
    constructor(private _http: Http) {

    }

    userLogin(empId: number, password: string): Promise<any> {
        if(empId === 123456 && password === "123456789") {
            return Promise.resolve()
        } else {
            return Promise.resolve()
        }
    }
 
    userLogout(empId: number) {
        return Promise.resolve(true);
    }


    find(empId?: String, password?: String, date?: Date): Promise<TimeWork[]> {
        return Promise.resolve(timeworkDatas);
    }
}