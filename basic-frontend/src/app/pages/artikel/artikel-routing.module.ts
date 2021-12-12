import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtikelComponent} from './artikel.component';
import {ArtikelBearbeitenComponent} from "./artikel-bearbeiten/artikel-bearbeiten.component";
import {ArtikelErstellenComponent} from "./artikel-erstellen/artikel-erstellen.component";

const routes: Routes = [
    {path: '', component: ArtikelComponent},
    {path: 'artikelBearbeiten/:ArtikelNr', component: ArtikelBearbeitenComponent},
    {path: 'artikelErstellen', component: ArtikelErstellenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtikelRoutingModule {
}
