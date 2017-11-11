import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpportunityModalPage } from './opportunityModal';

@NgModule({
  declarations: [
    OpportunityModalPage,
  ],
  imports: [
    IonicPageModule.forChild(OpportunityModalPage),
  ],
  exports: [
    OpportunityModalPage
  ]
})
export class OpportunityModalModule {}
