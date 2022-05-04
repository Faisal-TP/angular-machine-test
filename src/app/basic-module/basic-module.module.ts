import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicquestionOneComponent } from './basicquestion-one/basicquestion-one.component';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { BasicquestionTwoComponent } from './basicquestion-two/basicquestion-two.component';
import { BasicquestionThreeComponent } from './basicquestion-three/basicquestion-three.component';


@NgModule({
  declarations: [
    BasicquestionOneComponent,
    BasicquestionTwoComponent,
    BasicquestionThreeComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule,
    MatTableModule
  ],
  exports:[
    BasicquestionOneComponent
  ]
})
export class BasicModuleModule { }
