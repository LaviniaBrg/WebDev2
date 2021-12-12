import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtikelComponent} from './artikel.component';
import {ArtikelBearbeitenComponent} from "./artikel-bearbeiten/artikel-bearbeiten.component";
import {ArtikelErstellenComponent} from "./artikel-erstellen/artikel-erstellen.component";
import {LoginGuard} from "../../core/guards/login.guard";

const routes: Routes = [
    {path: '', canActivate: [LoginGuard], component: ArtikelComponent},
    {path: 'artikelBearbeiten/:ArtikelNr', canActivate: [LoginGuard], component: ArtikelBearbeitenComponent},
    {path: 'artikelErstellen', canActivate: [LoginGuard], component: ArtikelErstellenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtikelRoutingModule {
}
