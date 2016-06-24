import { Component, ViewChild } from "@angular/core";
import { App, ionicBootstrap, Platform, Nav, Events } from "ionic-angular";
import { StatusBar } from "ionic-native";
import "moment/locale/th";

import { Page1 } from "./pages/page1/page1";
import { Page2 } from "./pages/page2/page2";

import {LoginPage} from "./pages/login/login.component";
import {HomePage} from "./pages/home/home.component";
import {TimeWorkSearchPage} from "./pages/timework/timeworkSearch.component";

import {GlobalVars} from "./services/globalVars";
import {User} from "./app.models";

interface Page {
  alias: string;
  title: string;
  component: any;
  icon: string
}

@Component({
  providers: [GlobalVars],
  templateUrl: "build/app.html"
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<Page>;

  user: User;

  constructor(private platform: Platform,
    private events: Events,
    private globalVars: GlobalVars) {
  
    this.initializeApp();
    this.loadUser();
    this.loadPages();
    this.listenToLoginEvents();
  }

  initializeApp() {
    this.platform.setLang("th", true);
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  loadUser() {
    this.user = this.globalVars.getUser();
  }


  loadPages() {
    if (this.globalVars.getUser().auth) {
      this.rootPage = HomePage;
      this.pages = [
        { alias: "home", title: "หน้าหลัก", component: HomePage, icon: "ios-home" },
        { alias: "timework", title: "เวลางาน", component: TimeWorkSearchPage, icon: "ios-clock" },
        { alias: "test-1", title: "ทดสอบ 1", component: Page1, icon: "ios-code-working" },
        { alias: "test-2", title: "ทดสอย 2", component: Page2, icon: "ios-code-working" }
      ];
    } else {
      this.rootPage = LoginPage;
      this.pages = [
        { alias: "login", title: "ล็อกอิน", component: LoginPage, icon: "ios-key" }
      ];
    }
  }

  openPage(page: Page) {
    this.nav.setRoot(page.component);
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', (userDataEvent) => {
      this.globalVars.userLogin(userDataEvent[0]);
      this.loadUser();
      this.loadPages();
    });

    this.events.subscribe('user:logout', () => {
      this.globalVars.userLogout();
      this.loadUser();
      this.loadPages();
    });
  }
}

ionicBootstrap(MyApp);
