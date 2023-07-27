import { Injectable } from '@angular/core';
import { Seance } from './seances.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SeanceService {
  private seancesUrl = 'api/seances/';

  constructor(private http: HttpClient) {}

  getSeances(): Observable<Seance[]> {
    return this.http.get<Seance[]>(this.seancesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  createSeance(seance: Seance): Observable<Seance> {
    seance.id = -1;
    return this.http.post<Seance>(this.seancesUrl, seance).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  editSeance(seance: Seance): Observable<any> {
    return this.http.put(this.seancesUrl + seance.id, seance);
  }

  deleteSeance(id: number): Observable<any> {
    return this.http.delete(this.seancesUrl + id);
  }
}
