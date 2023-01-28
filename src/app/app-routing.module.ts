import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutErrorComponent } from './pages/checkout-error/checkout-error.component';
import { AnacardosDescComponent } from './pages/descripcion/anacardos-desc.component';
import { BaobabDescComponent } from './pages/descripcion/baobab-desc.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';

const routes: Routes = [
  {
    path:'' ,component:HeaderComponent
  },
  {
    path:'home' ,component:HeaderComponent
  },
  {
    path:'shop', component:ShopComponent
  },
  {
    path:'formulario', component:FormularioComponent
  },
  {
    path:'productos', component:ProductosComponent
  },
  {
    path:'baobab-desc', component:BaobabDescComponent
  },
  {
    path:'anacardos-desc', component:AnacardosDescComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'thankyou', component:ThankyouComponent
  },
  {
    path:'check-error', component:CheckoutErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
