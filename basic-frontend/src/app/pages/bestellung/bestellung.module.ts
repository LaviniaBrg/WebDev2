import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungRoutingModule } from './bestellung-routing.module';
import { BestellungComponent } from './bestellung.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    BestellungComponent
  ],
  imports: [
    CommonModule,
    BestellungRoutingModule,
    NzTableModule,
    NzIconModule
  ]
})
export class BestellungModule { }
