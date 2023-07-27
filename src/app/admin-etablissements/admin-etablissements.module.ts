import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEtablissementsRoutingModule } from './admin-etablissements-routing.module';
import { AdminEtablissementsComponent } from './admin-etablissements/admin-etablissements.component';


@NgModule({
  declarations: [
    AdminEtablissementsComponent
  ],
  imports: [
    CommonModule,
    AdminEtablissementsRoutingModule
  ]
})
export class AdminEtablissementsModule { }
