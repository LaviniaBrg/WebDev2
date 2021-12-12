import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BestellungComponent} from "./bestellung.component";
import {BestellungRoutingModule} from "./bestellung-routing.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTableModule} from "ng-zorro-antd/table";
import {BestellungBearbeitenComponent} from "./bestellung-bearbeiten/bestellung-bearbeiten.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import { BestellungErstellenComponent } from './bestellung-erstellen/bestellung-erstellen.component';
import {NzTypographyModule} from "ng-zorro-antd/typography";


@NgModule({
    declarations: [
        BestellungComponent,
        BestellungBearbeitenComponent,
        BestellungErstellenComponent
    ],
    imports: [
        CommonModule,
        BestellungRoutingModule,
        NzTableModule,
        NzIconModule,
        ReactiveFormsModule,
        NzFormModule,
        NzButtonModule,
        NzInputModule,
        NzSelectModule,
        NzDatePickerModule,
        FormsModule,
        NzTypographyModule
    ]
})
export class BestellungModule {
}
