import firebase from 'firebase';
import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthsProvider } from '../providers/auths/auths';

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

      if (firebase.auth().currentUser) {
        app.getActiveNav().push(TabsPage);
      }
      splashScreen.hide();
    });
  }
}
