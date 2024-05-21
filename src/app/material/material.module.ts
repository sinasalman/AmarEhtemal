import { NgModule } from '@angular/core';
import { 
  MatToolbarModule
 } from "@angular/material/toolbar";

 import {  MatButtonModule } from "@angular/material/button"
 import { MatInputModule } from "@angular/material/input"
 import { MatTableModule } from "@angular/material/table"
 const material = [
  MatToolbarModule, 
  MatButtonModule,
  MatInputModule,
  MatTableModule
];
@NgModule({
  exports:[
    material
  ],
  imports: [
    material
  ]
})
export class MaterialModule { }
