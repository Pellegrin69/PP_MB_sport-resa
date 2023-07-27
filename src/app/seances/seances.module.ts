import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeancesRoutingModule } from './seances-routing.module';
import { SeancesListComponent } from './seances-list/seances-list.component';


@NgModule({
  declarations: [
    SeancesListComponent
  ],
  imports: [
    CommonModule,
    SeancesRoutingModule
  ]
})
export class SeancesModule { }
