import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SeancesRoutingModule } from './seances-routing.module';
import { SeancesListComponent } from './seances-list/seances-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SeancesListComponent],
  imports: [
    CommonModule,
    SeancesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  exports: [SeancesListComponent],
})
export class SeancesModule {}
