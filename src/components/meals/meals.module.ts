import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Meals } from './meals';

@NgModule({
  declarations: [
    Meals,
  ],
  imports: [
    IonicPageModule.forChild(Meals),
  ],
  exports: [
    Meals
  ]
})
export class MealsModule {}
