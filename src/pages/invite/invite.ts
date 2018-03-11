import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import * as utils from '../utils';
import { InviteSentPage } from '../inviteSent/inviteSent';
import { Invite } from '../../interfaces/invite';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {
  invite: Invite = {
    city: '',
    state: '',
    university: '',
    campus: '',
    universityEmail: '',
    email: '',
    age: '',
    course: ''
  };

  constructor(
    private nav: NavController
  ) {}

  sendInvite() {
    utils.setNavRoot(this.nav, InviteSentPage);
  }

  refresh($event) {
    setTimeout(() => $event.complete(), 1000);
  }
}
