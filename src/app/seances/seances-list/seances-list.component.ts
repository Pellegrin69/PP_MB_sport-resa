import { Component, OnInit } from '@angular/core';
import { Seance } from '../seances.model';
import { SeanceService } from '../seances.service';

@Component({
  selector: 'app-seances-list',
  templateUrl: './seances-list.component.html',
  styleUrls: ['./seances-list.component.scss'],
})
export class SeancesListComponent implements OnInit {
  // Propriétés
  seance = {
    id: -1,
    theme: '',
    date_session: new Date(),
    heure: '00:00',
    duree: 0,
    capacite_max: 0,
    coach: '',
    id_etablissement: -1,
  };

  edit = true;
  add = false;
  seances: Seance[] = [];

  constructor(private seanceService: SeanceService) {}

  ngOnInit(): void {
    this.getSeances();
  }

  /**
   * Récupère la liste des séances depuis le service en utilisant une requête HTTP GET.
   * Les erreurs éventuelles seront réessayées deux fois avant de lever l'erreur définitive.
   * En cas d'erreur HTTP, la fonction catchError sera exécutée pour gérer l'erreur.
   * @returns Un observable contenant un tableau de séances.
   */
  private getSeances() {
    this.seanceService
      .getSeances()
      .subscribe(seances => (this.seances = seances));
  }

  /**
   * Ajoute une nouvelle séance à la liste.
   * Après l'ajout, la liste des séances sera récupérée à nouveau pour refléter les changements.
   */
  addSeance() {
    const data = {
      id: this.seance.id,
      theme: this.seance.theme,
      date_session: this.seance.date_session,
      heure: this.seance.heure,
      duree: this.seance.duree,
      capacite_max: this.seance.capacite_max,
      coach: this.seance.coach,
      id_etablissement: this.seance.id_etablissement,
    };
    this.seanceService.createSeance(data).subscribe(response => {
      console.log(response);
      this.getSeances();
    });
  }

  /**
   * Met le formulaire en mode édition en copiant les valeurs de la séance sélectionnée.
   * Le formulaire sera alors prêt à être modifié et sauvegardé.
   * @param seance La séance sélectionnée pour l'édition.
   */
  setSeanceEdit(seance: Seance) {
    this.seance.id = seance.id;
    this.seance.theme = seance.theme;
    this.seance.date_session = seance.date_session;
    this.seance.heure = seance.heure;
    this.seance.duree = seance.duree;
    this.seance.capacite_max = seance.capacite_max;
    this.seance.coach = seance.coach;
    this.seance.id_etablissement = seance.id_etablissement;
    this.edit = false;
    this.add = true;
  }

  /**
   * Réinitialise les valeurs du formulaire pour permettre l'ajout d'une nouvelle séance.
   * Le formulaire sera vierge avec les valeurs par défaut.
   */
  resetValues() {
    this.seance.id = -1;
    this.seance.theme = '';
    this.seance.date_session = new Date();
    this.seance.heure = '';
    this.seance.duree = 0;
    this.seance.capacite_max = 0;
    this.seance.coach = '';
    this.seance.id_etablissement = -1;
    this.edit = true;
    this.add = false;
  }

  /**
   * Supprime une séance de la liste.
   * Après la suppression, la liste des séances sera mise à jour pour refléter le changement.
   * @param seance La séance à supprimer.
   */
  removeSeance(seance: Seance) {
    const id = seance.id;
    console.log(seance);
    this.seanceService
      .deleteSeance(id)
      .subscribe(seance => console.log(seance));
    this.getSeances();
  }

  /**
   * Met à jour une séance dans la liste en utilisant une requête HTTP PUT.
   * Après la mise à jour, la liste des séances sera récupérée à nouveau pour refléter les changements.
   */
  updateSeance() {
    this.seanceService
      .editSeance(this.seance)
      .subscribe(response => console.log(response));
    this.getSeances();
    this.resetValues();
  }

  /**
   * Formate une date en une chaîne de caractères locale selon le format spécifié.
   * @param date La date à formater (peut être une chaîne ou un objet Date).
   * @returns La date formatée en chaîne de caractères.
   */
  formatDate(date: string | Date): string {
    if (!date) {
      return '';
    }
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };
    return dateObj.toLocaleDateString('fr-FR', options);
  }
}
