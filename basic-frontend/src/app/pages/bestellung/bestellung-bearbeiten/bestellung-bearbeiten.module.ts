import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungBearbeitenRoutingModule } from './bestellung-bearbeiten-routing.module';
import { BestellungBearbeitenComponent } from './bestellung-bearbeiten.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [
    BestellungBearbeitenComponent
  ],
  imports: [
    CommonModule,
    BestellungBearbeitenRoutingModule,
    ReactiveFormsModule,
    NzGridModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule
  ]
})
export class BestellungBearbeitenModule { }
