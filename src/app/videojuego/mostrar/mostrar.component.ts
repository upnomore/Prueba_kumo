import { Component, Input, ViewChild } from '@angular/core';
import { VideojuegoService } from '../services/videojuego.service';
import { Juego } from '../interfaces/videojuego.interface';
import { BuscarComponent } from '../buscar/buscar.component';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html'
})
export class MostrarComponent {


  constructor(private videojuegoService: VideojuegoService) { }



}
