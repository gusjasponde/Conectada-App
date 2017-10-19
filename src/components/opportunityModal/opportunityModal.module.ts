import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpportunityModal } from './opportunityModal';

@NgModule({
  declarations: [
    OpportunityModal,
  ],
  imports: [
    IonicPageModule.forChild(OpportunityModal),
  ],
  exports: [
    OpportunityModal
  ]
})
export class OpportunityModalModule {}
