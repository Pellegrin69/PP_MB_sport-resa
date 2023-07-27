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

  /**
   * Récupère la liste des séances depuis le serveur via HTTP GET.
   * En cas d'erreur, la requête sera réessayée deux fois avant de lever l'erreur.
   * En cas d'erreur HTTP, la fonction catchError sera exécutée pour gérer l'erreur.
   * @returns Un observable contenant un tableau de séances.
   */
  getSeances(): Observable<Seance[]> {
    return this.http.get<Seance[]>(this.seancesUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Crée une nouvelle séance via HTTP POST.
   * Attribue un ID temporaire (-1) car le serveur générera l'ID définitif.
   * En cas d'erreur HTTP, la fonction catchError sera exécutée pour gérer l'erreur.
   * @param seance La séance à créer.
   * @returns Un observable contenant la séance créée avec l'ID généré par le serveur.
   */
  createSeance(seance: Seance): Observable<Seance> {
    seance.id = -1;
    return this.http.post<Seance>(this.seancesUrl, seance).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Met à jour une séance existante via HTTP PUT.
   * Utilise HTTP PUT avec l'URL contenant l'ID de la séance pour effectuer la mise à jour.
   * @param seance La séance mise à jour.
   * @returns Un observable contenant la réponse HTTP (habituellement sans contenu).
   */
  editSeance(seance: Seance) {
    return this.http.put(this.seancesUrl + seance.id, seance);
  }

  /**
   * Supprime une séance via HTTP DELETE.
   * Utilise HTTP DELETE avec l'URL contenant l'ID de la séance à supprimer.
   * @param id L'ID de la séance à supprimer.
   * @returns Un observable contenant la réponse HTTP (habituellement sans contenu).
   */
  deleteSeance(id: number) {
    return this.http.delete(this.seancesUrl + id);
  }
}
