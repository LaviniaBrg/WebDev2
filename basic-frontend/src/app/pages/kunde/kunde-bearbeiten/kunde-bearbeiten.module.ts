import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KundeBearbeitenRoutingModule } from './kunde-bearbeiten-routing.module';
import { KundeBearbeitenComponent } from './kunde-bearbeiten.component';
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [
    KundeBearbeitenComponent
  ],
    imports: [
        CommonModule,
        KundeBearbeitenRoutingModule,
        NzInputModule
    ]
})
export class KundeBearbeitenModule { }
