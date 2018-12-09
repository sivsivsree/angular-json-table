import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {JSONTableModule} from './modules/data-table/data-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JSONTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
