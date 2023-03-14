import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {

  @Input()
  stock: string[] = []

  @Output('to-shop')
  toShopEmitter = new EventEmitter<string>();

  onClick(produit: string){
    this.toShopEmitter.emit( produit );
  }
}
