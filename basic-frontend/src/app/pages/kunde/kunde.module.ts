import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KundeRoutingModule } from './kunde-routing.module';
import { KundeComponent } from './kunde.component';
import {NzTableModule} from "ng-zorro-antd/table";


@NgModule({
  declarations: [
    KundeComponent
  ],
  imports: [
    CommonModule,
    KundeRoutingModule,
    NzTableModule
  ]
})
export class KundeModule { }
