import {Http, Headers} from "@angular/http";
import { Injectable } from '@angular/core';

import config from "./../../config";
import { TimeWork } from "./home.model";

@Injectable()
export class HomeService {
    constructor(private _http: Http) {

    }

    callTimeWork(id, pass, day, month, year): Promise<TimeWork[]> {
        let body = 'id=' + id + '&pass=' + pass + '&day=' + day + '&month=' + month + '&year=' + year;
        let headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded:charset=utf8" });

        return this._http
            .post(config.server + "/MobileAppRAOT/rest/TimeWorkService/timeWork", body, { headers: headers })
            .map(res => res.json())
            .toPromise()
    }
}