import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Juego } from '../interfaces/videojuego.interface';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {

  private _historial: string[] = []
  public juegos: Juego[] = []

  get historial() {
    return [...this._historial]
  }

  private apiUrl: string = "https://api.rawg.io/api/games?key="

  constructor(private http: HttpClient) { }

  buscarJuego(termino: string): Observable<Juego[]> {

    termino = termino.trim().toLocaleLowerCase();
    if(!this._historial.includes(termino)){
      this._historial.unshift(termino);
      this._historial = this.historial.splice(0,10);
    }

    const url = `${this.apiUrl}4fb0f361f416472284aa8c103c67cf08&search=${termino}`;
    return this.http.get<Juego[]>(url)

  }
}
