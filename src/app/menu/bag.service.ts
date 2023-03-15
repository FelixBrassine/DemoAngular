import { Injectable } from '@angular/core';
import {Pizza} from "./pizza";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class BagService {

  private _bagList : Array<{pizza : Pizza, quantity :number}> =[];
  private _total = 0;
  private _totalSource = new BehaviorSubject<number>(this._total);
  total$ = this._totalSource.asObservable();

  getTotal(): number {
    return this._total;
  }
  updateTotal() {
    let total = 0;
    for (let item of this._bagList) {
      total += item.pizza.price * item.quantity;
    }
    this._total = total;
    this._totalSource.next(total);
  }
  getAllPizza(): Array<{ pizza: Pizza; quantity: number }>{
    return this._bagList;
  }
  removePizzas(pizza: Pizza) {
    let pizzaInList = this._bagList.find(item => item.pizza === pizza);
    if (pizzaInList && pizzaInList.quantity > 1) {
      pizzaInList.quantity --;
      this._total -= pizzaInList.pizza.price;
    }else{
      this._bagList.pop();
    }
  }
  removeAllPizzas(pizza: Pizza) {
    let pizzaInList = this._bagList.find(item => item.pizza === pizza);
    if (pizzaInList && pizzaInList.quantity > 1) {
      this._total -= pizzaInList.pizza.price* pizzaInList.quantity;
      pizzaInList.quantity = 0;
      this._bagList.pop();
    }
  }
  addPizza(pizza: Pizza) {
    let pizzaInList = this._bagList.find(item => item.pizza === pizza);
    if (pizzaInList) {
      pizzaInList.quantity += 1;
      this._total += pizzaInList.pizza.price;
    } else {
      this._bagList.push({ pizza: pizza, quantity: 1 });
    }
  }
}
