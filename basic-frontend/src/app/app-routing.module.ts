import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'artikel', loadChildren: () => import('./pages/artikel/artikel.module').then(m => m.ArtikelModule) },
  { path: 'bestellungen', loadChildren: () => import('./pages/bestellung/bestellung.module').then(m => m.BestellungModule) },
  { path: 'kunden', loadChildren: () => import('./pages/kunde/kunde.module').then(m => m.KundeModule) },
  { path: 'impressum', loadChildren: () => import('./core/impressum/impressum.module').then(m => m.Impressum2Module) },
  { path: 'bestellungen/rechnungen', loadChildren: () => import('./pages/bestellung/rechnungen/rechnungen.module').then(m => m.RechnungenModule) },
  { path: 'bestellungen/lieferscheine', loadChildren: () => import('./pages/bestellung/lieferscheine/lieferscheine.module').then(m => m.LieferscheineModule) },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
