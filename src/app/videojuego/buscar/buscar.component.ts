import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { VideojuegoService } from '../services/videojuego.service';
import { Juego, Result } from '../interfaces/videojuego.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent {

 juegos: Result[] = []

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  constructor(private videojuegoService: VideojuegoService) { }


  buscar(){
    const termino = this.txtBuscar.nativeElement.value

    if (termino.trim().length == 0){
      return
    }
    
    this.txtBuscar.nativeElement.value = ""


    this.videojuegoService.buscarJuego(termino)
    .subscribe((resp) => {
      this.juegos = resp.results;
      console.log(resp);
    })
  }

}
