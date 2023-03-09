import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import {FormsModule} from "@angular/forms";
import { ChronoComponent } from './components/chrono/chrono.component';
import { MinMAJpipePipe } from './pipe/min-majpipe.pipe';
import { TimerFormaterPipe } from './pipe/timer-formater.pipe';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ChronoComponent,
    MinMAJpipePipe,
    TimerFormaterPipe,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
