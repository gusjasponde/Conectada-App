import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-invite-sent',
  templateUrl: 'inviteSent.html',
})
export class InviteSentPage {
  constructor() {}

  refresh($event) {
    setTimeout(() => $event.complete(), 1000);
  }
}
