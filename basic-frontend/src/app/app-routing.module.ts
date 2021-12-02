import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/startseite' },
  { path: 'startseite', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'artikel', loadChildren: () => import('./pages/artikel/artikel.module').then(m => m.ArtikelModule) },
  { path: 'bestellungen', loadChildren: () => import('./pages/bestellung/bestellung.module').then(m => m.BestellungModule) },
  { path: 'kunden', loadChildren: () => import('./pages/kunde/kunde.module').then(m => m.KundeModule) },
  { path: 'impressum', loadChildren: () => import('./core/impressum/impressum.module').then(m => m.Impressum2Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
