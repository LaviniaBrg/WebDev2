import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelRoutingModule } from './artikel-routing.module';
import { ArtikelComponent } from './artikel.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";


@NgModule({
  declarations: [
    ArtikelComponent
  ],
  imports: [
    CommonModule,
    ArtikelRoutingModule,
    NzTableModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule
  ]
})
export class ArtikelModule { }
