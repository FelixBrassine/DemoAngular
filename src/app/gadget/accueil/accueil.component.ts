import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  param!: number
  constructor(private _router: Router){}
  onClick(){
    this._router.navigate(['modulo',  this.param]);
  }
}
