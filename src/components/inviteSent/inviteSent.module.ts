import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteSent } from './inviteSent';

@NgModule({
  declarations: [
    InviteSent,
  ],
  imports: [
    IonicPageModule.forChild(InviteSent),
  ],
  exports: [
    InviteSent
  ]
})
export class InviteSentModule {}
