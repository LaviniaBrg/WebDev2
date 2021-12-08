import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestellungBearbeitenComponent } from './bestellung-bearbeiten.component';

const routes: Routes = [{ path: '', component: BestellungBearbeitenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestellungBearbeitenRoutingModule { }
