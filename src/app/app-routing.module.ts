import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './shared-module/index-page/index-page.component';
import { BasicquestionOneComponent } from './basic-module/basicquestion-one/basicquestion-one.component';
import { BasicquestionTwoComponent } from './basic-module/basicquestion-two/basicquestion-two.component';
import { BasicquestionThreeComponent } from './basic-module/basicquestion-three/basicquestion-three.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'Bacis-1', component: BasicquestionOneComponent },
  { path: 'Bacis-2', component: BasicquestionTwoComponent },
  { path: 'Bacis-3', component: BasicquestionThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
