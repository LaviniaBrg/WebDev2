import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikelBearbeitenComponent } from './artikel-bearbeiten.component';

const routes: Routes = [{ path: '', component: ArtikelBearbeitenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtikelBearbeitenRoutingModule { }
