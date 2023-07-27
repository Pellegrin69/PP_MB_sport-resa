import { Component, OnInit } from '@angular/core';
import { Seance } from '../seances.model';
import { SeanceService } from '../seances.service';

@Component({
  selector: 'app-seances-list',
  templateUrl: './seances-list.component.html',
  styleUrls: ['./seances-list.component.scss'],
})
export class SeancesListComponent implements OnInit {
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

  constructor(
    private seanceService: SeanceService,
  ) {}

  ngOnInit(): void {
    this.getSeances();
  }

  private getSeances() {
    this.seanceService
      .getSeances()
      .subscribe(seances => (this.seances = seances));
  }

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

  removeSeance(seance: Seance) {
    const id = seance.id;
    console.log(seance);
    this.seanceService
      .deleteSeance(id)
      .subscribe(seance => console.log(seance));
    this.getSeances();
  }

  updateSeance() {
    this.seanceService
      .editSeance(this.seance)
      .subscribe(response => console.log(response));
    this.getSeances();
    this.resetValues();
  }

  formatDate(date: string | Date): string {
    if (!date) {
      return ''; // Ou un texte de remplacement, selon vos besoins.
    }

    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };    return dateObj.toLocaleDateString('fr-FR', options);
  }
}
