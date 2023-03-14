import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @Input()
  enVente: string[] = []

  @Output('to-stock')
  toStockEmitter = new EventEmitter<string>()

  onClick(produit: string){
    this.toStockEmitter.emit( produit )
  }

}
