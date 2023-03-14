import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { ShopComponent } from './accueil/shop/shop.component';
import { StockComponent } from './accueil/stock/stock.component';
import {AccueilComponent} from "./accueil/accueil.component";

@NgModule({
  declarations: [
    ShopComponent,
    StockComponent,
    AccueilComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class InventoryModule { }
