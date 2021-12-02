import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Impressum2RoutingModule } from './impressum-routing.module';
import { Impressum2Component } from './impressum.component';


@NgModule({
  declarations: [
    Impressum2Component
  ],
  imports: [
    CommonModule,
    Impressum2RoutingModule
  ]
})
export class Impressum2Module { }
