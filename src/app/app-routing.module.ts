import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./components/contact/contact.component";
import {HomeComponent} from "./components/home/home.component";
import {MenuComponent} from "./menu/menu/menu.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'gadget', loadChildren: () => import('./gadget/gadget.module').then( m => m.GadgetModule)},
  {path: 'inventory', loadChildren: () => import('./inventory/inventory.module').then( m => m.InventoryModule)},
  {path: 'menu', component: MenuComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
