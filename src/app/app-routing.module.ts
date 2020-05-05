import { DsmComponent } from './feature/dsm/dsm/dsm.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dsm', pathMatch: 'full' },
  { path: 'dsm', component: DsmComponent },
  { path: 'dsm', loadChildren: () => import(`./feature/dsm/dsm.module`).then(m => m.DsmModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
