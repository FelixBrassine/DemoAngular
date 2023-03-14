import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IngredientListService {

  private ingredientsSource = new BehaviorSubject<string[]>([
    "tomate",
    "ail",
    "fromage",
    "poivron"
  ]);
  currentIngredients = this.ingredientsSource.asObservable();

  constructor() { }

  changeIngredients(ingredients: string[]) {
    this.ingredientsSource.next(ingredients);
  }

  addIngredient(ingredient: string) {
    let ingredients = this.ingredientsSource.getValue();
    ingredients.push(ingredient);
    this.changeIngredients(ingredients);
  }
}
