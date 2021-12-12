import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KundeComponent} from './kunde.component';
import {KundeBearbeitenComponent} from "./kunde-bearbeiten/kunde-bearbeiten.component";

const routes: Routes = [
    {path: '', component: KundeComponent},
    {path: 'kundeBearbeiten/:KundenId', component: KundeBearbeitenComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KundeRoutingModule {
}
