import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LieferscheineRoutingModule } from './lieferscheine-routing.module';
import { LieferscheineComponent } from './lieferscheine.component';


@NgModule({
  declarations: [
    LieferscheineComponent
  ],
  imports: [
    CommonModule,
    LieferscheineRoutingModule
  ]
})
export class LieferscheineModule { }
