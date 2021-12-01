import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungRoutingModule } from './bestellung-routing.module';
import { BestellungComponent } from './bestellung.component';


@NgModule({
  declarations: [
    BestellungComponent
  ],
  imports: [
    CommonModule,
    BestellungRoutingModule
  ]
})
export class BestellungModule { }
