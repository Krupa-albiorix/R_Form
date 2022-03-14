import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { HobbiesPipe } from './pipes/hobbies.pipe';
import { UpdateComponent } from './update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatComponentsModule } from '../mat-components.module';
import { FormComponent } from './form/form.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    ListComponent,
    HobbiesPipe,
    UpdateComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatComponentsModule,
    NgxMaskModule.forRoot(maskConfig),
    MatIconModule
  ]
})
export class HomeModule { }
