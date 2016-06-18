import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {NavController, Alert} from 'ionic-angular';
import config from "./../../config.ts";
import * as moment from 'moment';
import 'rxjs/Rx';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  private values;
  myDate: String = new Date().toISOString();
  // maxDate = moment.utc().add('y').format('YYYY-MM-DD');

  constructor(private _http: Http, private _nav: NavController) {
    console.log("Home Print")

    this.checkTime

  }
  checkTime(id, pass, myDate) {
    let dateObject = new Date(myDate);//1466054245200 (iso8061)

    let year = dateObject.getFullYear() + 543;
    let month = dateObject.getMonth() + 1;
    let day = dateObject.getDate();



    let body = 'id=' + id + '&pass=' + pass + '&day=' + day + '&month=' + month + '&year=' + year;
    let headers = new Headers();//({ "Content-Type": "application/x-www-form-urlencoded:charset=utf8" });
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post(config.developServer + "/MobileAppRAOT/rest/TimeWorkService/timeWork", body, { headers: headers })

      .map(res => {
        if (res.status == 200) {
          return res.json();
        } else {
          return {};
        }
      })
      .subscribe(
      data => this.values = data,
      err => console.log(JSON.stringify(err))
      );
  };
}
