import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPageComponent } from './index-page/index-page.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    IndexPageComponent
  ],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports:[
    IndexPageComponent
  ]
})
export class SharedModuleModule { }
