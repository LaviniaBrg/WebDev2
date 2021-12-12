import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LieferscheineComponent} from './lieferscheine.component';
import {LoginGuard} from "../../../core/guards/login.guard";

const routes: Routes = [{path: '', canActivate: [LoginGuard], component: LieferscheineComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LieferscheineRoutingModule {
}
