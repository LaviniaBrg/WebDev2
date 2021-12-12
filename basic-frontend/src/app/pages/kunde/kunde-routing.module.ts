import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KundeComponent} from './kunde.component';
import {KundeBearbeitenComponent} from "./kunde-bearbeiten/kunde-bearbeiten.component";
import {KundeErstellenComponent} from "./kunde-erstellen/kunde-erstellen.component";
import {LoginGuard} from "../../core/guards/login.guard";

const routes: Routes = [
    {path: '', canActivate: [LoginGuard], component: KundeComponent},
    {path: 'kundeBearbeiten/:KundenNr', canActivate: [LoginGuard], component: KundeBearbeitenComponent},
    {path: 'kundeErstellen', canActivate: [LoginGuard], component: KundeErstellenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KundeRoutingModule {
}
