import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {Alert, NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  private values: any;

  constructor(private http: Http,
    private nav: NavController) {
    http.get("http://jsonplaceholder.typicode.com/posts")
      .map(res => res.json())
      .subscribe(
        data => this.values = data,
        err => this.onError(err),
        () => console.log("Completed")
      );
  }
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
}
