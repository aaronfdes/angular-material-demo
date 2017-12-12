import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MyOwnCustomMaterialModule } from './myownmaterial.module';
import { DialogOverviewExampleDialog } from './app.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
  ],  
  entryComponents: [
    DialogOverviewExampleDialog
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
