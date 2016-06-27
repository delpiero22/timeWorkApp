import {Http, Headers} from "@angular/http";
import { Injectable } from '@angular/core';

import config from "./../../config";
import { TimeWork } from "./home.model";

@Injectable()
export class HomeService {
    constructor(private _http: Http) {

    }

    callTimeWork(id, pass, day, month, year): Promise<TimeWork[]> {
        const bodyArr = [];
        if (id) {
            bodyArr.push(`id=${id}`)
        }
        if (pass) {
            bodyArr.push(`pass=${pass}`)
        }
        if (day) {
            bodyArr.push(`day=${day}`)
        }
        if (month) {
            bodyArr.push(`month=${month}`)
        }
        if (year) {
            bodyArr.push(`year=${year}`)
        }

        const body = bodyArr.join("&");
        console.log(body);
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded")

        return this._http
            .post(config.server , body, { headers: headers })
            .map(res => {
                console.log(res.json());
                return res.json()
            })
            .toPromise()
    }
}