import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
