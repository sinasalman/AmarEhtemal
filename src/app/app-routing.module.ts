import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { CalcAndResComponent } from './calc-and-res/calc-and-res.component';

const routes: Routes = [
  {path:'',component:FirstComponent},
  {
    path:'calc',component:CalcAndResComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
