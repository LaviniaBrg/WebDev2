import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestellungComponent } from './bestellung.component';

const routes: Routes = [
  { path: '', component: BestellungComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestellungRoutingModule { }
