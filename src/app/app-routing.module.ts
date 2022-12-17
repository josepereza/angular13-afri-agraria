import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './pages/cart/cart.component';
import { BaobabDescComponent } from './pages/descripcion/baobab-desc.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ShopComponent } from './pages/shop/shop.component';

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
    path:'cart', component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
