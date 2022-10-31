import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BuscarComponent } from './buscar/buscar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainpageComponent,
    BuscarComponent,
    MostrarComponent
  ],
  exports: [
    MainpageComponent,
    BuscarComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class VideojuegoModule { }
