import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  color:string ="#D4E8D4"
  name:string = ""
  age:number = 0;
  responseName(): string{
    if (this.name.length<1){
      return ""
    } else {
      return "Hello " + this.name + " !"
    }
  }
  responseAge(): string{
    if (this.age === 0){
      return ""
    }else if (this.age<18){
      return "Return at school little boy"
    }else {
      return "You are an adult"
    }
  }
}
