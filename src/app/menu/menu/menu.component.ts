import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pizza} from "../pizza";
import {MenuService} from "../menu.service";
import {BagService} from "../bag.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  pizzaList: Pizza[] = []
  bagList!: Array<{ pizza: Pizza; quantity: number }>
  constructor(
    private readonly _menuService: MenuService,
    private readonly  _bagService: BagService
  ) { }

  ngOnInit(): void {
    this.pizzaList = this._menuService.getAllPizza();
    this.bagList =this._bagService.getAllPizza();
  }
  buyPizza(pizza: Pizza){
    this._bagService.addPizza(pizza);
    this._bagService.updateTotal();
  }
}
