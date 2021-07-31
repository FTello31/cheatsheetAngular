import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AppConfig } from './config/app.config';
import { MaPartida } from '../models/ma-partida.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TablesService {

  constructor(private http: HttpClient) { }

  urlJsonServer = AppConfig.settings.apiServer.protocol + AppConfig.settings.apiServer.host
    + AppConfig.settings.apiServer.app;

  private urlRest = "/partidas";

  private url = this.urlJsonServer + this.urlRest;

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);
  }

  getPartidas(repartoTipo: number): Observable<MaPartida[]> {
    return this.http.get<MaPartida[]>(`${this.urlJsonServer}${this.urlRest}/${repartoTipo}`, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPartidasNotInMov(repartoTipo: number, periodo: number): Observable<MaPartida[]> {
    return this.http.get<MaPartida[]>(`${this.urlJsonServer}${this.urlRest}/period/${repartoTipo}/${periodo}`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  createPartida(nuevaPartida: MaPartida): any {
    return this.http.post(`${this.urlJsonServer}${this.urlRest}`, nuevaPartida, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updatePartida(nuevaPartida: MaPartida): any {
    return this.http.put(`${this.urlJsonServer}${this.urlRest}`, nuevaPartida, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deletePartida(nuevaPartida: MaPartida): any {
    return this.http.delete(`${this.urlJsonServer}${this.urlRest}/${nuevaPartida.repartoTipo}/${nuevaPartida.codPartida}`, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
