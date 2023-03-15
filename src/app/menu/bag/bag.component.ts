import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from "../pizza";
import {BagService} from "../bag.service";

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit{
  pizzaList!: Array<{ pizza: Pizza; quantity: number }>
  total!: number;
  constructor(private readonly _bagService: BagService) {
    this._bagService.total$.subscribe(tots => this.total = tots);
  }

  ngOnInit(): void {
    this.pizzaList = this._bagService.getAllPizza();
    this.total = this._bagService.getTotal();
  }
  buyPizza(pizza: Pizza){
    this._bagService.addPizza(pizza);
    this._bagService.updateTotal();
  }
  removePizza(pizza: Pizza){
    this._bagService.removePizzas(pizza);
    this._bagService.updateTotal();
  }
  removeAllPizza(pizza: Pizza){
    this._bagService.removeAllPizzas(pizza);
    this._bagService.updateTotal();
  }
}
