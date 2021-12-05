import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LieferscheineComponent } from './lieferscheine.component';

const routes: Routes = [{ path: '', component: LieferscheineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LieferscheineRoutingModule { }
