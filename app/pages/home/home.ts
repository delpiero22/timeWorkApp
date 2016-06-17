import {Component} from "@angular/core";
<<<<<<< HEAD
import {Http, Headers, RequestOptions} from "@angular/http";
import {NavController, Alert} from 'ionic-angular';
// import * as moment from 'moment';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/Rx';


=======
import {Http} from "@angular/http";
import {Alert, NavController} from 'ionic-angular';
>>>>>>> 78f7e8799b22298a47709e9766ee31e7b63c334b

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
<<<<<<< HEAD
  private values;
  myDate: String = new Date().toISOString();
  // maxDate = moment.utc().add('y').format('YYYY-MM-DD');

  constructor(private http: Http, private nav: NavController) {
    console.log("Home Print")

    this.checkTime

  }



  checkTime(id, pass,myDate) {
    let dateObject = new Date(myDate);//1466054245200 (iso8061)
    
    let year = dateObject.getFullYear()+543;
    let month = dateObject.getMonth()+1;
    let day = dateObject.getDate();
    
         

    const server = "http://10.11.11.87:8080";
    const test = "http://127.0.0.1:8080";
    const url = server + "/MobileAppRAOT/rest/TimeWorkService/timeWork";
    let bodyTest = "id=3355&pass=22112532&day=8&month=6&year=2559";
    let body = 'id=' + id + '&pass=' + pass + '&day=' +day+ '&month=' +month+ '&year=' +year;
    let headers = new Headers();//({ "Content-Type": "application/x-www-form-urlencoded:charset=utf8" });
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    console.log(body);//print post body
    
    this.http.post(url,body,{headers:headers})
      .map(res => {
        if (res.status == 200) {
          return res.json();
        } else {
          return {};
        }
      })
      .subscribe(
      data => this.values = data,
      err => console.log("Error ==>", err)
=======
  private values: any;

  constructor(private http: Http,
    private nav: NavController) {
    http.get("http://jsonplaceholder.typicode.com/posts")
      .map(res => res.json())
      .subscribe(
        data => this.values = data,
        err => this.onError(err),
        () => console.log("Completed")
>>>>>>> 78f7e8799b22298a47709e9766ee31e7b63c334b
      );

  }
<<<<<<< HEAD


  // onClick(data: Data) {
  //   console.log(data);

  //   this.http.get("http://10.11.11.87:8080/TestRESTful/rest/UserService/users/1")
  //     .map(res => res.json())
  //     .subscribe(
  //     (data): void => { this.values = data },
  //     err => console.log(err),
  //     () => console.log("Completed")
  //     );
  
=======
  onError(err: Error) {
    let alert = Alert.create({
      title: "Error",
      subTitle: err.message,
      buttons: ['OK']
    });
    this.nav.present(alert);
  }
  onSelect(item) {
    let alert = Alert.create({
      title: item.title,
      subTitle: item.body,
      buttons: ['OK']
    });
    this.nav.present(alert);
  }
>>>>>>> 78f7e8799b22298a47709e9766ee31e7b63c334b
}
