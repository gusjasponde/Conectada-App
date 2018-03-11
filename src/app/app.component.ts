import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthsProvider } from '../providers/auths/auths';

import { UserStatus } from '../interfaces/userStatus';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    authsProvider: AuthsProvider,
    app:App) {

    platform.ready().then(() => {
      statusBar.backgroundColorByHexString('#F7931E');
      authsProvider.login()
        .then(status => {
          if (status === UserStatus.authorized) {
             app.getActiveNav().push(TabsPage);
          }
          splashScreen.hide();
        });
    });
  }
}
