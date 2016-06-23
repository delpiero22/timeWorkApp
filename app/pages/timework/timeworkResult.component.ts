import {Component, AfterViewInit, OnInit } from "@angular/core";
import {Loading, NavController, NavParams} from "ionic-angular";
import {AppService} from "./../../app.service";
import {TimeWork} from "./../../app.models";

interface Query {
  empId?: string;
  password?: string;
  date?: Date;
}

@Component({
  providers: [AppService],
  templateUrl: 'build/pages/timework/timeworkResult.html'
})
export class TimeWorkResult implements AfterViewInit, OnInit {
  private query: Query;
  private timeworks: TimeWork[];
  private loading: Loading;

  constructor(
    public _nav: NavController,
    public _params: NavParams,
    public _appService: AppService) {
    this.query = this._params.data.query;
    this.loading = Loading.create({
      content: "Loading...",
      dismissOnPageChange: true
    });
  }
  ngOnInit(){}
  ngAfterViewInit() {
    const {empId, password, date} = this.query;
    
    this._nav.present(this.loading);
    this._appService
      .find(empId, password, date)
      .then(data => {
        this.loading.dismiss();
        this.timeworks = data;
        console.log(JSON.stringify(data));
      })
      .catch(err => {
        this.loading.dismiss();
        console.log(JSON.stringify(err))
      });
  }
  onSelectResult() { }
}