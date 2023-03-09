import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList = [
    {
      brand: "spainProd",
      model:"griotte",
      price: 5,
      stock : 10
    },
    {
      brand: "ford",
      model:"fiesta",
      price: 1,
      stock : 1000000
    },
    {
      brand: "playstation",
      model:"5",
      price: 1000,
      stock : 0
    }
  ];

}
