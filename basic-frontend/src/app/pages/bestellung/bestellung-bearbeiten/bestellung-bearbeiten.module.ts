import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BestellungBearbeitenRoutingModule } from './bestellung-bearbeiten-routing.module';
import { BestellungBearbeitenComponent } from './bestellung-bearbeiten.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzTransitionPatchModule} from "ng-zorro-antd/core/transition-patch/transition-patch.module";
import {NzButtonModule} from "ng-zorro-antd/button";


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
    NzTransitionPatchModule,
    NzButtonModule
  ]
})
export class BestellungBearbeitenModule { }
