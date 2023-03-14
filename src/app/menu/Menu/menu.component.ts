import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  pizzaList = [
    {
      brand: "Margheritta",
      model: ["tomato","Mozarella"],
      price: 8
    },
    {
      brand: "Funghi",
      model: ["tomato","Mozarella","Mushroom"],
      price: 10
    },
    {
      brand: "Proscuito",
      model: ["tomato","Mozarella","ham"],
      price: 12
    }
  ];
}
