import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GadgetsComponent} from "./components/gadgets/gadgets.component";
import {MenuComponent} from "./components/Menu/menu.component";

const routes: Routes = [
  {path : 'gadgets', component : GadgetsComponent},
  {path: 'menu', component : MenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
