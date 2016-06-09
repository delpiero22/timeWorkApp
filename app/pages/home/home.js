import {Component} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/Rx';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  static get parameters(){
    return [[Http],[Headers]];
  }
  constructor(http,headers) {
     this.http = http;
     this.headers = headers;
     headers.append('Access-Control-Allow-Origin', '*');
     this.http.get("http://10.11.11.87:8080/TestRESTful/rest/UserService/users").subscribe(
       data=>{
         console.log("Get json data");
         this.items = JSON.parse(data._body);
       },error=>{
         console.log ("cant get data");
       }
     );
  }
  itemClicked (event,item){
    console.log (item.name.first);
  }
  removeItem(item){
   for(this.i = 0;this.i<this.items.length;this.i++){
      if(this.items[this.i]==item){
        this.items.splice(this.i,1);
      }
    }
  }
}
