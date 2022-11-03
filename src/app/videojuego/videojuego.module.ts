import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FormsModule } from '@angular/forms';
import { MostrarComponent } from './mostrar/mostrar.component';



@NgModule({
  declarations: [
    MainpageComponent,
    BuscarComponent,
    MostrarComponent,
  ],
  exports: [
    MainpageComponent,
    BuscarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VideojuegoModule { }
