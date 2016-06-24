import {Component} from "@angular/core";
import {Events, NavController, Toast} from "ionic-angular";
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from '@angular/common';

import {AppService} from "./../../app.service";

@Component({
    templateUrl: "build/pages/login/login.html",
    providers: [AppService],
    directives: [FORM_DIRECTIVES]
})
export class LoginPage {
    private loginForm: ControlGroup;
    private empId: Control;
    private password: Control;

    constructor(
        private _events: Events,
        private _formBuilder: FormBuilder,
        private _appService: AppService,
        private _nav: NavController) {

        this.empId = new Control("100001", Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(6)
        ]));
        this.password = new Control("pass", Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(12)
        ]));

        this.loginForm = _formBuilder.group({
            "empId": this.empId,
            "password": this.password
        })
    }

    onSubmit(formData) {
        this._appService
            .userLogin(Number.parseInt(formData.empId), formData.password)
            .then(result => {
                console.log(result);

                if (result.error) {
                    if (result.error.name === "IdOrPassInvalidExcention") {
                        this.showLoginFailure("ไม่พบผู้ใช้งาน");
                    }

                    if (result.error.name === "UserNotFountException") {
                        this.showLoginFailure("ไม่พบผู้ใช้งาน");
                    }
                    return;
                }

                this._events.publish("user:login", result.data);
            })
            .catch(err => {
                console.log(err);
                this.showLoginFailure("ไม่สามารถเชื่อมต่อเซิฟเวอร์, กรุณาลองใหม่อีกครั้ง")
            });
    }

    showLoginFailure(message: string) {
        let toast = Toast.create({
            message: message,
            duration: 3000
        });
        this._nav.present(toast);
    }
}