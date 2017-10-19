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
  public invite = {
    city: '',
    state: '',
    university: '',
    campus: '',
    universityEmail: '',
    email: '',
    age: '',
    course: ''
  };

  constructor(private nav: NavController) {

  }

  private sendInvite() {
    utils.setNavRoot(this.nav, InviteSent);
  }

  private refresh($event) {
    setTimeout(() => $event.complete(), 1000);
  }
}
