import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BestellungComponent} from './bestellung.component';
import {BestellungBearbeitenComponent} from "./bestellung-bearbeiten/bestellung-bearbeiten.component";
import {BestellungErstellenComponent} from "./bestellung-erstellen/bestellung-erstellen.component";

const routes: Routes = [
    {path: '', component: BestellungComponent},
    {path: 'bestellungBearbeiten/:BestellNr', component: BestellungBearbeitenComponent},
    {path: 'bestellungErstellen', component: BestellungErstellenComponent}

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BestellungRoutingModule {
}
