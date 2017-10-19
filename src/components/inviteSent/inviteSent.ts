import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';
import { AuthsService } from '../../services/auths/auths';

@IonicPage()
@Component({
  selector: 'page-invite-sent',
  templateUrl: 'inviteSent.html',
})
export class InviteSent {
  constructor(private nav: NavController) {
  }

  private refresh($event) {
    setTimeout(() => $event.complete(), 1000);
  }

  private test() {
    utils.setNavRoot(this.nav, TabsPage);
  }
}
