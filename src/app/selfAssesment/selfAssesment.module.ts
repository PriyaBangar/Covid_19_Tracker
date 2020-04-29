import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';
import { selfAssesmentRoutingModule } from './selfAssesment.routing.module';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { RouterModule } from '@angular/router';
import { HomePageModule } from './home/home.module';
import { RegFormComponent } from './upper-nav/reg-form/reg-form.component';


@NgModule({
  declarations: [UpperNavComponent, RegFormComponent],
  imports: [
    CommonModule,
    selfAssesmentRoutingModule,
    IonicModule,
    HomePageModule
  ],
  exports: [
    UpperNavComponent
  ]
})
export class selfAssesmentModule { }
