import { Component, ElementRef, ViewChild } from '@angular/core';
import { VideojuegoService } from '../services/videojuego.service';
import { Juego } from '../interfaces/videojuego.interface';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent {

  juegos: Juego[] = []

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
      console.log(resp)
    })
  }

}
