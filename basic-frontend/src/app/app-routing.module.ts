import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'route/to/page', loadChildren: () => import('./pages/artikel/artikel.module').then(m => m.ArtikelModule) },
  { path: 'route/to/page', loadChildren: () => import('./pages/bestellung/bestellung.module').then(m => m.BestellungModule) },
  { path: 'route/to/page', loadChildren: () => import('./pages/kunde/kunde.module').then(m => m.KundeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
