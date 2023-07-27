import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeancesListComponent } from './seances-list/seances-list.component';

const routes: Routes = [
  { path: '', component: SeancesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeancesRoutingModule {}
