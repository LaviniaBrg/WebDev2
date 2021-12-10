import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KundeBearbeitenRoutingModule } from './kunde-bearbeiten-routing.module';
import { KundeBearbeitenComponent } from './kunde-bearbeiten.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {SharedModule} from "../../../shared/shared.module";
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
//import {NzTransitionPatchModule} from "ng-zorro-antd/core/transition-patch/transition-patch.module";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    KundeBearbeitenComponent
  ],
  imports: [
    CommonModule,
    KundeBearbeitenRoutingModule,
    NzInputModule,
    SharedModule,
    NzFormModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzButtonModule
  ]
})
export class KundeBearbeitenModule { }
