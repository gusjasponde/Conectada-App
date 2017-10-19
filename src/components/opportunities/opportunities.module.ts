import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Opportunities } from './opportunities';

@NgModule({
  declarations: [
    Opportunities,
  ],
  imports: [
    IonicPageModule.forChild(Opportunities),
  ],
  exports: [
    Opportunities
  ]
})
export class OpportunitiesModule {}
