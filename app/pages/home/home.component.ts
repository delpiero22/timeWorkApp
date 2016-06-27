import {Component, OnInit } from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {NavController, Alert} from 'ionic-angular';
import config from "./../../config.ts";
import * as moment from 'moment';
import 'rxjs/Rx';
import {HomeService} from "./home.service";
import {TimeWork} from "./home.model"


@Component({
  providers: [HomeService],
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  myDate = new Date().toISOString();
  private values: TimeWork[];

  constructor(private homeService: HomeService, private _nav: NavController) { }

  ngOnInit() {

  }
  checkTime(id, pass, myDate) {
    let dateObject = new Date(myDate);//1466054245200 (iso8061)

    let year = dateObject.getFullYear() + 543;
    let month = dateObject.getMonth() + 1;
    let day = dateObject.getDate();



    this.homeService.callTimeWork(id, pass, day, month, year)
        .then(data => this.values = data)
        .catch(err => console.log(JSON.stringify(err)))
  };
}
