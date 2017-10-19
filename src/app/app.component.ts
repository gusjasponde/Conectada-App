import { Component, ViewChild } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../components/tabs/tabs';
import { Login } from '../components/login/login';
import { AuthsService } from '../services/auths/auths';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    authsService: AuthsService,
    private app:App) {

    platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#F7931E');
      authsService.getLoginStatus()
        .then(success => {
          if (success) {
             app.getActiveNav().push(TabsPage);
          }
          splashScreen.hide();
        });
    });
  }
}
