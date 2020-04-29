import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { RegFormComponent } from './upper-nav/reg-form/reg-form.component';



const routes: Routes = [
  { path: 'homePage', component: HomePage },
  { path: 'form', component: RegFormComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class selfAssesmentRoutingModule { }