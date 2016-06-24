import {Component, OnInit} from "@angular/core";
import {NavController, Toast, Platform, Modal} from "ionic-angular";
import * as faker from "faker";
import * as moment from "moment";

import {AppService} from "./../../app.service";
import {Timework} from "./../../app.models";
import {SearchFilterModal} from "./searchFilter";

@Component({
  providers: [AppService],
  templateUrl: 'build/pages/timework/timeworkSearch.html'
})
export class TimeWorkSearchPage implements OnInit {
  private timeworks: Array<Timework> = [];
  private heads: Array<String> = [];

  constructor(
    private _nav: NavController,
    private _appService: AppService) {
  }

  ngOnInit() {
    this.timeworks = [];
    this.heads = [];
    this._appService
      .fecthTimeworkList("")
      .then(response => {
        console.log(response);
        if (response.error) {
          this.showFecthFailure("เกิดข้อผิดผลาดการโหลดข้อมูล, กรุณาลองใหม่อีกครั้ง")
          return
        }
        this.onInitData(response.data);
      })
      .catch(err => {
        console.log(err);
        this.showFecthFailure("ไม่สามารถเชื่อมต่อเซิฟเวอร์, กรุณาลองใหม่อีกครั้ง")
      })
  }

  onInitData(data: Timework[]) {
    data.forEach((item, index, array) => {
      const str = item.date.getFullYear() + "-" + n(item.date.getMonth() + 1);

      if (this.heads.indexOf(str) === -1) {
        this.heads.push(str);
      }

      function n(n) {
        return n > 9 ? "" + n : "0" + n;
      }
    })
    this.timeworks = data;
  }
  onSearchFilterClick(){
      let searchFiterModel = Modal.create(SearchFilterModal)
      this._nav.present(searchFiterModel);
  }
  doInfinite(infiniteScroll) {

  }

  getTimeworks(filter): Timework[] {
    return this.timeworks.filter((item, index, array) => {
      return item.date.toISOString().startsWith(filter)
    });
  }
  getDividerDisplay(date) {
    return moment(date).format("MMMM YYYY");
  }
  getDateDisplay(date) {
    return moment(date).format("h:mm a");
  }
  getRandomColor() {
    return faker.internet.color();
  }
  showFecthFailure(message: string) {
    let toast = Toast.create({
      message: message,
      duration: 3000
    });
    this._nav.present(toast);
  }
}