import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import localeFr  from "@angular/common/locales/fr";
import { AppComponent } from './app.component';
import {HotelListComponent} from "./hotel-list/hotel-list.component";
import {FormsModule} from "@angular/forms";
import {ConteurComponent} from "./conteur/conteur.component";


registerLocaleData(localeFr,'fr')
@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ConteurComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
