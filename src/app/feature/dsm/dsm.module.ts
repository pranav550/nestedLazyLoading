import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsmComponent } from './dsm/dsm.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: DsmComponent },
      { path: 'table', loadChildren: () => import(`./table/table.module`).then(m => m.TableModule) },
    ]
  }
];

@NgModule({
  declarations: [DsmComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DsmModule { }
