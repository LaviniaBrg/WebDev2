import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KundeBearbeitungRoutingModule } from './kunde-bearbeitung-routing.module';
import { KundeBearbeitungComponent } from './kunde-bearbeitung.component';
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [
    KundeBearbeitungComponent
  ],
    imports: [
        CommonModule,
        KundeBearbeitungRoutingModule,
        NzInputModule
    ]
})
export class KundeBearbeitungModule { }
