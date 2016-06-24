import {Injectable} from "@angular/core";
import {User} from "./../app.models";

@Injectable()
export class GlobalVars {
  private user: User;

  constructor() {
    this.userLogout();
  }

  getUser() {
    return this.user;
  }

  userLogin(user: User) {
    this.user = user;
    this.user.auth = true;
  }

  userLogout() {
    this.user = {
      avatar: "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-9-2-128.png",
      name: "Unknown",
      email: "กรุณาล็อกอิน",
      auth: false
    }
  }

}