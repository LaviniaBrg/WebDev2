import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KundeRoutingModule } from './kunde-routing.module';
import { KundeComponent } from './kunde.component';


@NgModule({
  declarations: [
    KundeComponent
  ],
  imports: [
    CommonModule,
    KundeRoutingModule
  ]
})
export class KundeModule { }
