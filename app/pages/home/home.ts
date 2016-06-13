import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private values: any;
  
  constructor(private http: Http,
    private _navController: NavController) {
    http.get("http://jsonplaceholder.typicode.com/posts")
      .map(res => res.json())
      .subscribe(
        data => this.values = data,
        err => console.log(err),
        () => console.log("Completed")
      );
  }

  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
