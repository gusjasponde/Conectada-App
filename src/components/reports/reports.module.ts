import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Reports } from './reports';

@NgModule({
  declarations: [
    Reports,
  ],
  imports: [
    IonicPageModule.forChild(Reports),
  ],
  exports: [
    Reports
  ]
})
export class ReportsModule {}
