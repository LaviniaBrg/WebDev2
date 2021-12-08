import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KundeBearbeitungComponent } from './kunde-bearbeitung.component';

const routes: Routes = [{ path: '', component: KundeBearbeitungComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KundeBearbeitungRoutingModule { }
