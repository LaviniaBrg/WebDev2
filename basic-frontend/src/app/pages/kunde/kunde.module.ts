import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KundeRoutingModule } from './kunde-routing.module';
import { KundeComponent } from './kunde.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";


@NgModule({
  declarations: [
    KundeComponent
  ],
    imports: [
        CommonModule,
        KundeRoutingModule,
        NzTableModule,
        NzButtonModule,
        NzIconModule,
        NzBreadCrumbModule
    ]
})
export class KundeModule { }
