import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzDemoButtonBasicComponent } from './welcome.component';
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  imports: [WelcomeRoutingModule, NzButtonModule],
  declarations: [WelcomeComponent,
                 NzDemoButtonBasicComponent ],
  bootstrap: [ NzDemoButtonBasicComponent ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
