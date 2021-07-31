import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MaPartida } from '../models/ma-partida.model';
import { AppConfig } from './config/app.config';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RxjsWayService {

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
        tap(data => {
          // debug here
          console.log(data);
        }),
        catchError(this.handleError)
      );
  }

}
