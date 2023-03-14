import { Component } from '@angular/core';
import {IngredientListService} from "../ingredient-list.service";

@Component({
  selector: 'app-store-manager',
  templateUrl: './store-manager.component.html',
  styleUrls: ['./store-manager.component.scss']
})
export class StoreManagerComponent {
  enStock !:string[]

  constructor(private dataService: IngredientListService) {
    this.dataService.currentIngredients.subscribe(ingredients => this.enStock = ingredients);
  }

  enVente: string[] = []

  onToShop(produit: string){
    const index  = this.enStock.indexOf(produit);
    this.enStock.splice(index, 1);
    this.enVente.push( produit );
  }

  onToStock(produit: string){
    const index = this.enVente.indexOf(produit);
    this.enVente.splice(index, 1);
    this.enStock.push(produit);
  }
}
