import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { HobbiesPipe } from './pipes/hobbies.pipe';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentsModule } from '../mat-components.module';


@NgModule({
  declarations: [
    ListComponent,
    HobbiesPipe,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentsModule
  ]
})
export class HomeModule { }
