import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelRoutingModule } from './artikel-routing.module';
import { ArtikelComponent } from './artikel.component';
import {NzTableModule} from "ng-zorro-antd/table";


@NgModule({
  declarations: [
    ArtikelComponent
  ],
  imports: [
    CommonModule,
    ArtikelRoutingModule,
    NzTableModule
  ]
})
export class ArtikelModule { }
