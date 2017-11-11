import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ConectadaHeaderComponent } from './conectada-header';

@NgModule({
  declarations: [
    ConectadaHeaderComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ConectadaHeaderComponent
  ]
})
export class ConectadaHeaderComponentModule {}
