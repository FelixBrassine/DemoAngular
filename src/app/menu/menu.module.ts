import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagComponent } from './bag/bag.component';
import {MenuService} from "./menu.service";
import {BagService} from "./bag.service";
import {MenuComponent} from "./menu/menu.component";


@NgModule({
  declarations: [
    BagComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BagComponent,
    MenuComponent
  ],
  providers: [
    MenuService,
    BagService
  ]
})
export class MenuModule { }
