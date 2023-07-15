import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefultComponent } from './layouts/defult/defult.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component:DefultComponent,children:[{
    path: '', component:DashboardComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
