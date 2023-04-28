import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Punto1Component } from './componentes/punto1/punto1.component';
import { Punto2Component } from './componentes/punto2/punto2.component';

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    Punto2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
