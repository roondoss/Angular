import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha';
import { JogoDaVelhaComponent } from './jogo-da-velha';

@NgModule({
  declarations: [
    AppComponent,
    JogoDaVelhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JogoDaVelhaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
