import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { GadgetsComponent } from './components/gadgets/gadgets.component';
import {FormsModule} from "@angular/forms";
import { ChronoComponent } from './components/chrono/chrono.component';
import { MinMAJpipePipe } from './pipe/min-majpipe.pipe';
import { TimerFormaterPipe } from './pipe/timer-formater.pipe';
import { MenuComponent } from './components/Menu/menu.component';
import { HomelComponent } from './components/home/homel.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GadgetsComponent,
    ChronoComponent,
    MinMAJpipePipe,
    TimerFormaterPipe,
    MenuComponent,
    HomelComponent,
    ContactComponent
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
