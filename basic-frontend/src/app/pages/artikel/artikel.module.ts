import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArtikelRoutingModule} from './artikel-routing.module';
import {ArtikelComponent} from './artikel.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {ArtikelBearbeitenComponent} from "./artikel-bearbeiten/artikel-bearbeiten.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import { ArtikelErstellenComponent } from './artikel-erstellen/artikel-erstellen.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";


@NgModule({
    declarations: [
        ArtikelComponent,
        ArtikelBearbeitenComponent,
        ArtikelErstellenComponent
    ],
    imports: [
        CommonModule,
        ArtikelRoutingModule,
        NzTableModule,
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        NzFormModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzInputModule,
        FormsModule,
        NzTypographyModule
    ]
})
export class ArtikelModule {
}
