import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArtikelRoutingModule} from './artikel-routing.module';
import {ArtikelComponent} from './artikel.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {ArtikelBearbeitenComponent} from "./artikel-bearbeiten/artikel-bearbeiten.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
    declarations: [
        ArtikelComponent,
        ArtikelBearbeitenComponent
    ],
    imports: [
        CommonModule,
        ArtikelRoutingModule,
        NzTableModule,
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule,
        NzFormModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzInputModule
    ]
})
export class ArtikelModule {
}
