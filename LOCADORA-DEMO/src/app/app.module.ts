import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeFormComponent,
    FilmeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
