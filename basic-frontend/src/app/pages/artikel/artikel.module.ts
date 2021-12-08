import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelRoutingModule } from './artikel-routing.module';
import { ArtikelComponent } from './artikel.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [
    ArtikelComponent
  ],
    imports: [
        CommonModule,
        ArtikelRoutingModule,
        NzTableModule,
        NzIconModule
    ]
})
export class ArtikelModule { }
