import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSeancesComponent } from './admin-seances/admin-seances.component';

const routes: Routes = [
  { path: '', component: AdminSeancesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminSeancesRoutingModule {}
