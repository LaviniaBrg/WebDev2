import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelBearbeitenRoutingModule } from './artikel-bearbeiten-routing.module';
import { ArtikelBearbeitenComponent } from './artikel-bearbeiten.component';


@NgModule({
  declarations: [
    ArtikelBearbeitenComponent
  ],
  imports: [
    CommonModule,
    ArtikelBearbeitenRoutingModule
  ]
})
export class ArtikelBearbeitenModule { }
