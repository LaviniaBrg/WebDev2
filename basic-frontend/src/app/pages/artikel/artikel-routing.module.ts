import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArtikelComponent} from './artikel.component';
import {ArtikelBearbeitenComponent} from "./artikel-bearbeiten/artikel-bearbeiten.component";

const routes: Routes = [
    {path: '', component: ArtikelComponent},
    {path: 'artikelBearbeiten/:ArtikelId', component: ArtikelBearbeitenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArtikelRoutingModule {
}
