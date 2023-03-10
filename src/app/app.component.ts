import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedSquare = 0;
  displayHome():void{
    this.selectedSquare = 0;
  }
  displayMenu():void{
      this.selectedSquare = 1;
  }
  displayContact():void{
    this.selectedSquare =2;
  }
  displayGadgets():void{
    this.selectedSquare =3;
  }
}
