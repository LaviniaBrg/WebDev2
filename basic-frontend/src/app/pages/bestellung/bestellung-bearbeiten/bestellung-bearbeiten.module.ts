import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungBearbeitenRoutingModule } from './bestellung-bearbeiten-routing.module';
import { BestellungBearbeitenComponent } from './bestellung-bearbeiten.component';


@NgModule({
  declarations: [
    BestellungBearbeitenComponent
  ],
  imports: [
    CommonModule,
    BestellungBearbeitenRoutingModule
  ]
})
export class BestellungBearbeitenModule { }
