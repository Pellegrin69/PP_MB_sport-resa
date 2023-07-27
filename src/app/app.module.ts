import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module'; // Importez le module AuthModule
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';
import {SeancesModule} from "./seances/seances.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    SeancesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
