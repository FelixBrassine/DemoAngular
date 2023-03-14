import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import { MenuComponent } from './menu/Menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { GadgetModule} from "./gadget/gadget.module";
import { HeaderComponent } from './components/header/header.component';
import {InventoryModule} from "./Inventory/inventory.module";

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GadgetModule,
    InventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
