import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GadgetModule} from "./gadget/gadget.module";
import { HeaderComponent } from './components/header/header.component';
import {InventoryModule} from "./inventory/inventory.module";
import {MenuModule} from "./menu/menu.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GadgetModule,
    InventoryModule,
    MenuModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
