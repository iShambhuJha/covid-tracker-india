import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatesComponent } from './states/states.component';

const routes: Routes = [
  {path:'', pathMatch:"full", redirectTo:"dashboard"},
  {path:"dashboard", component:DashboardComponent},
  {path:"states", component:StatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
