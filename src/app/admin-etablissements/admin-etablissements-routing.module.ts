import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEtablissementsComponent } from './admin-etablissements/admin-etablissements.component';

const routes: Routes = [
  { path: '', component: AdminEtablissementsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminEtablissementsRoutingModule {}
