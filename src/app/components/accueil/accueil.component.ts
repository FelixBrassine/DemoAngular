import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  color:string ="#FBD650"
  name:string = ""
  age:number = 1;
  responseAge(): string{
    if (this.age<18){
      return "Return at school little boy"
    }else {
      return "You are an adult"
    }
  }



}
