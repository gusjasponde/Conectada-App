import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import * as utils from '../utils';
import { InviteSent } from '../inviteSent/inviteSent';
import { AuthsService } from '../../services/auths/auths';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class Invite {
  invite = {
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
    utils.setNavRoot(this.nav, InviteSent);
  }

  refresh($event) {
    setTimeout(() => $event.complete(), 1000);
  }
}
