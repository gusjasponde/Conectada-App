import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController,
  NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';
import { InvitePage } from '../invite/invite';
import { InviteSentPage } from '../inviteSent/inviteSent';
import { userStatus } from '../../interfaces/userStatus';
import { AuthsProvider } from '../../providers/auths/auths';

declare const window;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor (
    private nav: NavController,
    private viewCtrl: ViewController,
    private params: NavParams,
    private authsProvider: AuthsProvider,
    private alert: AlertController
  ) {}

  loginWithFacebook() {
    return this.authsProvider.loginWithFacebook()
      .then(auth => {
        utils.createAlert(this.alert, 'then', JSON.stringify(auth));
        if (auth === false) return;
        switch(auth) {
          case userStatus.invite:
            return utils.setNavRoot(this.nav, InvitePage);
          case userStatus.inviteSent:
            return utils.setNavRoot(this.nav, InviteSentPage);
          case userStatus.authorized:
            return utils.setNavRoot(this.nav, TabsPage);
        }
      });
  }

  goToInvite() {
    utils.setNavRoot(this.nav, InvitePage);
  }

  goToTabsPage() {
    utils.setNavRoot(this.nav, TabsPage);
  }
}
