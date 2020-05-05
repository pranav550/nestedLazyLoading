import { TableComponent } from './feature/dsm/table/table/table.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { DsmComponent } from './feature/dsm/dsm/dsm.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dsm', pathMatch: 'full' },
  { path: 'dsm', component: DsmComponent },
  { path: 'dsm', loadChildren: () => import(`./feature/dsm/dsm.module`).then(m => m.DsmModule) },
  { path: 'table', loadChildren: () => import(`./feature/dsm/table/table.module`).then(m => m.TableModule) },
  // { path: 'table/:id', component: TableComponent },
  { path: 'column', loadChildren: () => import(`./feature/dsm/table/column/column.module`).then(m => m.ColumnModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
