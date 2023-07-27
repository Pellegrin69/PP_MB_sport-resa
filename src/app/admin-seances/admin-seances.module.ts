import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSeancesRoutingModule } from './admin-seances-routing.module';
import { AdminSeancesComponent } from './admin-seances/admin-seances.component';


@NgModule({
  declarations: [
    AdminSeancesComponent
  ],
  imports: [
    CommonModule,
    AdminSeancesRoutingModule
  ]
})
export class AdminSeancesModule { }
