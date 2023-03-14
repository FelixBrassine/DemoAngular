import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {GadgetComponent} from "./gadget/gadget.component";
import {ChronoComponent} from "./chrono/chrono.component";
import {ExoComponent} from "./exo/exo.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {ModuloComponent} from "./modulo/modulo.component";


const routes: Routes = [

  { path: '', component: GadgetComponent, children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'accueil', component: AccueilComponent},
      { path: 'exo', component: ExoComponent },
      { path: 'chrono', component: ChronoComponent },
      { path: 'modulo/:param', component: ModuloComponent}
    ]}

]

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ]
})
export class GadgetRoutingModule{
}
