import { Component } from '@angular/core';
import {IngredientListService} from "../ingredient-list.service";

@Component({
  selector: 'app-ingredients-manager',
  templateUrl: './ingredients-manager.component.html',
  styleUrls: ['./ingredients-manager.component.scss']
})
export class IngredientsManagerComponent {
  ingredientList !:string[]

  constructor(private dataService: IngredientListService) {
    this.dataService.currentIngredients.subscribe(ingredients => this.ingredientList = ingredients);
  }

  add(produit: string){
    this.dataService.addIngredient( produit );
  }

  delete(produit: string){
    const index = this.ingredientList.indexOf(produit);
    this.ingredientList.splice(index, 1);
  }
}
