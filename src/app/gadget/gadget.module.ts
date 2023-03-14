import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GadgetComponent } from './gadget/gadget.component';
import { ExoComponent } from './exo/exo.component';
import {ChronoComponent} from "./chrono/chrono.component";
import {GadgetRoutingModule} from "./gadget-routing.module";
import {MinMAJpipePipe} from "./pipe/min-majpipe.pipe";
import {TimerFormaterPipe} from "./pipe/timer-formater.pipe";
import {FormsModule} from "@angular/forms";
import { ModuloComponent } from './modulo/modulo.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    GadgetComponent,
    ExoComponent,
    ChronoComponent,
    MinMAJpipePipe,
    TimerFormaterPipe,
    ModuloComponent,
    AccueilComponent
  ],
  imports: [
    CommonModule,
    GadgetRoutingModule,
    FormsModule
  ]
})
export class GadgetModule { }
