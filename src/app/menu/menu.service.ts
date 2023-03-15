import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Pizza} from "./pizza";

@Injectable()
export class MenuService {
  private pizzaList : Pizza[]=[
    new Pizza(0,"Margherita",["tomate","Mozarella"],8),
    new Pizza(1,"Funghi",["tomate","Mozarella","Champignons"],10),
    new Pizza(2,"Proscuito",["tomate","Mozarella","Jambon"],12)
  ];

  getAllPizza(): Pizza[]{
    return this.pizzaList;
  }
}
