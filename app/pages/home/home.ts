import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {NavController, Alert} from 'ionic-angular';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/Rx';


interface Data {
  id: number,
  pass: string,
  day: string,
  month: string,
  year: string,
}
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private values;
  


  constructor(private http: Http, private nav: NavController) {
    console.log("Home Print")
    
    this.makePost
    
  }
  onClick(data: Data) {
  }
  makePost(id,password,day,month,year){
    let url = "http://127.0.0.1:8080/MobileAppRAOT/rest/TimeWorkService/timeWork";
    let body = "id=3355&pass=22112532&day=8&month=6&year=2559";
    let body1 = JSON.stringify({"id":id, "password": password,"day":day,"month":month,"year":year})
    let headers = new Headers({ "Content-Type": "application/x-www-form-urlencoded" });
    
    console.log(id);
    
    // this.http.post(url,body1, headers)
    //   .map(res => {
    //     if (res.status == 200) {
    //       return res.json();
    //     } else {
    //       return {};
    //     }
    //   })
    //   .subscribe(
    //   data => this.values = data,
    //   err => console.log("Error ==>", err)
    //   );
  }

  // onClick(data: Data) {
  //   console.log(data);

  //   this.http.get("http://10.11.11.87:8080/TestRESTful/rest/UserService/users/1")
  //     .map(res => res.json())
  //     .subscribe(
  //     (data): void => { this.values = data },
  //     err => console.log(err),
  //     () => console.log("Completed")
  //     );
  // }
  // submit(){
  //   let url = "http://10.11.11.87:8080/MobileAppRAOT/rest/TimeWorkService/timeWork";
  //   let body = JSON.stringify({id:this.data.id});
  //   let headers = new Headers({'Content-Type':'application/json' });
  //   let options = new RequestOptions({headers:headers});
  //   return this.http.post(url,body,options)
  //   .map(res=>res.json())
  //   .catch(this.handleError);


  // }
  // handleError(error){
  //   console.error(error);
  //   return Observation.throw(error.json().error||'Server error')
  // }

  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
