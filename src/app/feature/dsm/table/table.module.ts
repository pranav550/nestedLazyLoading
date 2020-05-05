import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: ':id', component: TableComponent,
        children: [
          { path: 'column', loadChildren: () => import(`./column/column.module`).then(m => m.ColumnModule) },
        ]
      },
    ]
  }
];

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TableModule { }
