import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollEventModule, SCROLL_EVENT_TIME} from "ng2-events/lib/scroll";
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { CartelComponent } from './components/cartel/cartel.component';
import { FooterComponent } from './components/footer/footer.component';
import { IconosComponent } from './components/iconos/iconos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    JumbotronComponent,
    CartelComponent,
    FooterComponent,
    IconosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollEventModule
  ],
  providers: [
    {provide: SCROLL_EVENT_TIME, useValue: 500}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
