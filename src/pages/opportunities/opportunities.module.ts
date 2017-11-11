import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpportunitiesPage } from './opportunities';

@NgModule({
  declarations: [
    OpportunitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(OpportunitiesPage),
  ],
  exports: [
    OpportunitiesPage
  ]
})
export class OpportunitiesModule {}
