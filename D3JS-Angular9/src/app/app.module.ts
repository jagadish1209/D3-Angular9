import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
      BrowserModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
