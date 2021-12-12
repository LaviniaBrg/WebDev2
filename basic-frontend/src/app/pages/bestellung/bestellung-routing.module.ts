import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BestellungComponent} from './bestellung.component';
import {BestellungBearbeitenComponent} from "./bestellung-bearbeiten/bestellung-bearbeiten.component";

const routes: Routes = [
    {path: '', component: BestellungComponent},
    {path: 'bestellungBearbeiten/:BestellId', component: BestellungBearbeitenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BestellungRoutingModule {
}
