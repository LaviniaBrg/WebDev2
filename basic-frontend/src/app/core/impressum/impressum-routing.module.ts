import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Impressum2Component } from './impressum.component';

const routes: Routes = [{ path: '', component: Impressum2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Impressum2RoutingModule { }
