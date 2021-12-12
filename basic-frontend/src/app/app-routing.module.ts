import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/welcome'},
    {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
    {path: 'artikel', loadChildren: () => import('./pages/artikel/artikel.module').then(m => m.ArtikelModule)},
    {path: 'bestellungen', loadChildren: () => import('./pages/bestellung/bestellung.module').then(m => m.BestellungModule)},
    {path: 'kunden', loadChildren: () => import('./pages/kunde/kunde.module').then(m => m.KundeModule)},
    {path: 'impressum', loadChildren: () => import('./core/impressum/impressum.module').then(m => m.Impressum2Module)},
    {path: 'bestellungen/rechnungen', loadChildren: () => import('./pages/bestellung/rechnungen/rechnungen.module').then(m => m.RechnungenModule)},
    {path: 'bestellungen/lieferscheine', loadChildren: () => import('./pages/bestellung/lieferscheine/lieferscheine.module').then(m => m.LieferscheineModule)},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    //Wild Card Route for 404 request
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
