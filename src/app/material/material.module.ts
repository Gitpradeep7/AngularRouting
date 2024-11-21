import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

const materialMod = [
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialMod
  ],
  exports:[
    materialMod
  ]
})
export class MaterialModule { }
