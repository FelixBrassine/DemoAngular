import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.scss']
})
export class ModuloComponent {

  paramReceive: number;
  isPair(){
    if( (this.paramReceive%2==0)){
      return "Le nombre est pair";
    }else{
      return "Le nombre est impair"
    }
  }
  constructor(route: ActivatedRoute) {
    this.paramReceive = route.snapshot.params['param'];
  }
}
