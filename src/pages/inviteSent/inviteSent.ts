import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import * as utils from '../utils';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-invite-sent',
  templateUrl: 'inviteSent.html',
})
export class InviteSentPage {
  constructor(
    private nav: NavController
  ) {}

  refresh($event) {
    setTimeout(() => $event.complete(), 1000);
  }

  test() {
    utils.setNavRoot(this.nav, TabsPage);
  }
}
