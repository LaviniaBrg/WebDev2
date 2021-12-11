import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtikelBearbeitenRoutingModule } from './artikel-bearbeiten-routing.module';
import { ArtikelBearbeitenComponent } from './artikel-bearbeiten.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzWaveModule} from "ng-zorro-antd/core/wave";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    ArtikelBearbeitenComponent
  ],
  imports: [
    CommonModule,
    ArtikelBearbeitenRoutingModule,
    ReactiveFormsModule,
    NzGridModule,
    NzWaveModule,
    NzFormModule,
    NzButtonModule
  ]
})
export class ArtikelBearbeitenModule { }
