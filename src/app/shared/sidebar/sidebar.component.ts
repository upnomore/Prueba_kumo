import { Component } from '@angular/core';
import { VideojuegoService } from '../../videojuego/services/videojuego.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  get historial(){
    return this.videojuegoService.historial;
  }

  constructor(private videojuegoService:VideojuegoService) { }

  buscar(termino:string){
    this.videojuegoService.buscarJuego(termino)
  }

}
