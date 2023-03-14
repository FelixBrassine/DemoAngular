import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {StoreManagerComponent} from "./store-manager/store-manager.component";
import {MainComponent} from "../inventory/main/main.component";
import {IngredientsManagerComponent} from "./ingredients-manager/ingredients-manager.component";


const routes: Routes = [
  { path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'ingredients', pathMatch: 'full' },
      { path: 'ingredients', component: IngredientsManagerComponent},
      { path: 'store', component: StoreManagerComponent }
    ]}
]

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class InventoryRoutingModule{
}
