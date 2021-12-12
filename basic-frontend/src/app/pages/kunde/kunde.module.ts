import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KundeRoutingModule} from './kunde-routing.module';
import {KundeComponent} from './kunde.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {KundeBearbeitenComponent} from "./kunde-bearbeiten/kunde-bearbeiten.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
    declarations: [
        KundeComponent,
        KundeBearbeitenComponent
    ],
    imports: [
        CommonModule,
        KundeRoutingModule,
        NzTableModule,
        NzButtonModule,
        NzIconModule,
        NzBreadCrumbModule,
        NzFormModule,
        NzInputModule,
        FormsModule,
        ReactiveFormsModule,
        NzDropDownModule,
        NzSelectModule
    ]
})
export class KundeModule {
}
