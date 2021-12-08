import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KundeBearbeitenComponent } from './kunde-bearbeiten.component';

const routes: Routes = [{ path: '', component: KundeBearbeitenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KundeBearbeitenRoutingModule { }
