import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

import {TimeWorkResult} from "./timeworkResult.component"

@Component({
  templateUrl: 'build/pages/timework/timeworkSearch.html'
})
export class TimeWorkSearch {
  constructor(private _nav: NavController) { }
  onTimeworkSearch(empId, password, dateString) {
    const date = (dateString === true ? new Date(dateString) : undefined);
    this._nav.push(TimeWorkResult, { query: { empId, password, date } })
  }
}