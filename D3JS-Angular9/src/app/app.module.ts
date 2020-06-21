import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component';
import { MiserablesComponent } from './miserables/miserables.component';

@NgModule({
   declarations: [
      AppComponent,
      BarchartComponent,
      MiserablesComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
