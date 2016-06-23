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


    find(empId?: String, password?: String, date?: Date): Promise<TimeWork[]> {
        return Promise.resolve(timeworkDatas);
    }

    // callTimeWork(empId?: String, password?: String, date?: Date): Promise<TimeWork[]> {
    //     const bodyArr = [];
    //     if (empId) {
    //         bodyArr.push("id=" + empId);
    //     }
    //     if (password) {
    //         bodyArr.push("pass=" + password);
    //     }
    //     if (date) {
    //         bodyArr.push("day=" + (date.getDay() + 1));
    //         bodyArr.push("month=" + (date.getMonth() + 1));
    //         bodyArr.push("year=" + (date.getFullYear() + 543));
    //     }
    //     const body = bodyArr.join("&");
    //     const headers = new Headers();
    //     headers.append("Content-Type", "application/x-www-form-urlencoded:charset=utf8");

    //     return this._http
    //         .post(config.server + "/MobileAppRAOT/rest/TimeWorkService/timeWork", body, { headers: headers })
    //         .map(res => {
    //             console.log(res.json());
    //             return res.json()
    //         })
    //         .toPromise()
    // }
}