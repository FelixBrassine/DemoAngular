import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { ShopComponent } from './store-manager/shop/shop.component';
import { StockComponent } from './store-manager/stock/stock.component';
import {InventoryRoutingModule} from "./inventory-routing.module";
import { IngredientsManagerComponent } from './ingredients-manager/ingredients-manager.component';
import { StoreManagerComponent } from './store-manager/store-manager.component';
import {MainComponent} from "./main/main.component";
import { AddComponent } from './ingredients-manager/add/add.component';
import { DeleteComponent } from './ingredients-manager/delete/delete.component';
import {IngredientListService} from "./ingredient-list.service";

@NgModule({
  declarations: [
    ShopComponent,
    StockComponent,
    IngredientsManagerComponent,
    StoreManagerComponent,
    MainComponent,
    AddComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InventoryRoutingModule
  ],
  providers:[
    IngredientListService,
  ]
})
export class InventoryModule { }
