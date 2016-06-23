import {Component} from "@angular/core";
import {Events} from "ionic-angular";

import * as faker from "faker";

@Component({
    templateUrl: "build/pages/login/login.html"
})
export class LoginPage {
    private login: { empId?: string, password?: string } = {};

    constructor(private _events: Events) { }

    onLoginClick() {
       
        const user = {
            avatar: faker.internet.avatar(),
            name: faker.name.firstName() + " " + faker.name.lastName(),
            email: faker.internet.email(),
            cover: faker.image.abstract(300,60)
        };
        console.log(user);
        this._events.publish("user:login", user);
    }
}