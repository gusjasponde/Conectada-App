import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController,
  NavParams, ViewController, LoadingController, ModalController } from 'ionic-angular';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';
import { Invite } from '../invite/invite';
import { InviteSent } from '../inviteSent/inviteSent';
import { userStatus } from '../../interfaces/userStatus';
import { AuthsService } from '../../services/auths/auths';

declare const window;

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  constructor (
    private nav: NavController,
    private viewCtrl: ViewController,
    private params: NavParams,
    private AuthsService: AuthsService,
    private alert: AlertController
  ) {}

  loginWithFacebook() {
    return this.AuthsService.loginWithFacebook()
      .then(auth => {
        utils.createAlert(this.alert, 'then', JSON.stringify(auth));
        if (auth === false) return;
        switch(auth) {
          case userStatus.invite:
            return utils.setNavRoot(this.nav, Invite);
          case userStatus.inviteSent:
            return utils.setNavRoot(this.nav, InviteSent);
          case userStatus.authorized:
            return utils.setNavRoot(this.nav, TabsPage);
        }
      });
  }

  goToInvite() {
    utils.setNavRoot(this.nav, Invite);
  }

  goToTabsPage() {
    utils.setNavRoot(this.nav, TabsPage);
  }
}
