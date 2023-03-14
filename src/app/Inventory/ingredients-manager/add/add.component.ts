import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  ingredient!: string;
  @Output('add')
  toStockEmitter = new EventEmitter<string>()

  onClick(){
    this.toStockEmitter.emit( this.ingredient )
  }
}
