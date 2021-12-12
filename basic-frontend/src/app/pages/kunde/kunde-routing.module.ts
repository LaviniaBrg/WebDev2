import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KundeComponent} from './kunde.component';
import {KundeBearbeitenComponent} from "./kunde-bearbeiten/kunde-bearbeiten.component";
import {KundeErstellenComponent} from "./kunde-erstellen/kunde-erstellen.component";

const routes: Routes = [
    {path: '', component: KundeComponent},
    {path: 'kundeBearbeiten/:KundenNr', component: KundeBearbeitenComponent},
    {path: 'kundeErstellen', component: KundeErstellenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KundeRoutingModule {
}
