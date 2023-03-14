import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  @Input()
  ingredientList: string[] = []

  @Output('delete')
  toStockEmitter = new EventEmitter<string>()

  onClick(ingredient: string){
    this.toStockEmitter.emit( ingredient )
  }
}
