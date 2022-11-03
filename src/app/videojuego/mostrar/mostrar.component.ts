import { Component, Input } from '@angular/core';
import { VideojuegoService } from '../services/videojuego.service';
import { Result } from '../interfaces/videojuego.interface';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
})
export class MostrarComponent {

  constructor(private videojuegoService: VideojuegoService) { }

  @Input() juegos: Result[] = []

  

}
