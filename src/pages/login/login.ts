import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';
import { InvitePage } from '../invite/invite';
import { InviteSentPage } from '../inviteSent/inviteSent';
import { UserStatus } from '../../interfaces/userStatus';
import { AuthsProvider } from '../../providers/auths/auths';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor (
    private nav: NavController,
    private authsProvider: AuthsProvider
  ) {}

  login() {
    return this.authsProvider.login()
      .then(auth => {
        switch(auth) {
          case UserStatus.invite:
            return utils.setNavRoot(this.nav, InvitePage);
          case UserStatus.inviteSent:
            return utils.setNavRoot(this.nav, InviteSentPage);
          case UserStatus.authorized:
            return utils.setNavRoot(this.nav, TabsPage);
        }
      });
  }

  goToInvitePage() {
    utils.setNavRoot(this.nav, InvitePage);
  }
}
