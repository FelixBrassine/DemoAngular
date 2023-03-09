import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  color:string ="#D4E8D4"
  name?:string
  age!:number
  responseName(): string{
    if (this.name === undefined){
      return ""
    } else {
      return "Hello " + this.name + " !"
    }
  }
  responseAge(): string{
    if (this.age === undefined){
      return ""
    }else if (this.age<18){
      return "Return at school little boy"
    }else {
      return "You are an adult"
    }
  }
}
