import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RechnungenComponent } from './rechnungen.component';

const routes: Routes = [{ path: '', component: RechnungenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RechnungenRoutingModule { }
