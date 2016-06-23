import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

import {TimeWorkResultPage} from "./timeworkResult.component"

@Component({
  templateUrl: 'build/pages/timework/timeworkSearch.html'
})
export class TimeWorkSearchPage {
  constructor(private _nav: NavController) {

  }

  onTimeworkSearchClick(empId, password, dateString) {
    const date = (dateString === true ? new Date(dateString) : undefined);
    this._nav.push(TimeWorkResultPage, { query: { empId, password, date } })
  }
}