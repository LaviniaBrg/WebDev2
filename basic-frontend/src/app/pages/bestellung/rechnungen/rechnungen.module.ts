import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechnungenRoutingModule } from './rechnungen-routing.module';
import { RechnungenComponent } from './rechnungen.component';


@NgModule({
  declarations: [
    RechnungenComponent
  ],
  imports: [
    CommonModule,
    RechnungenRoutingModule
  ]
})
export class RechnungenModule { }
