import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InviteSentPage } from './inviteSent';

@NgModule({
  declarations: [
    InviteSentPage,
  ],
  imports: [
    IonicPageModule.forChild(InviteSentPage),
  ],
  exports: [
    InviteSentPage
  ]
})
export class InviteSentModule {}
