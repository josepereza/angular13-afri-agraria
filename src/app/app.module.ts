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
import { ShopComponent } from './pages/shop/shop.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { BaobabDescComponent } from './pages/descripcion/baobab-desc.component';
import { CartComponent } from './pages/cart/cart.component';
import { CantidadPipe } from './pipes/cantidad.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AnacardosDescComponent } from './pages/descripcion/anacardos-desc.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    JumbotronComponent,
    CartelComponent,
    FooterComponent,
    IconosComponent,
    ShopComponent,
    FormularioComponent,
    ProductosComponent,
    BaobabDescComponent,
    CartComponent,
    CantidadPipe,
    AnacardosDescComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollEventModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStripeModule.forRoot('pk_test_51KwttKJhfdXMP2PM1eyZwmyTnW37LyaYzXB4xe0Hn13Y1NHPNUj4FVlVg4NoGLym1SO38P5WJrM0UbgWbMKScooI0000eFuVzO'),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })  
  ],
  providers: [
    {provide: SCROLL_EVENT_TIME, useValue: 500}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
