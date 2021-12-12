import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {HeaderComponent} from "./core/header/header.component";
import {FooterComponent} from "./core/footer/footer.component";
import {CommonModule, registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {de_DE, NZ_I18N} from 'ng-zorro-antd/i18n';
import de from '@angular/common/locales/de';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';

import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {HomeComponent} from './pages/home/home.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {NzImageModule} from "ng-zorro-antd/experimental/image";

registerLocaleData(de);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PageNotFoundComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule,
        NzImageModule
    ],
    providers: [{provide: NZ_I18N, useValue: de_DE}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
