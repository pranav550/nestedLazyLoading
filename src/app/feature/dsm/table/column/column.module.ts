import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnComponent } from './column/column.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: ColumnComponent },

    ]
  }
];

@NgModule({
  declarations: [ColumnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ColumnModule { }
