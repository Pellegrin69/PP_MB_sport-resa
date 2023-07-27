import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class DataService implements InMemoryDbService {
  createDb() {
    const utilisateurs = [
      {
        id: 1,
        nom: 'Pellegrin',
        prenom: 'Pierre',
        email: 'pellegrinpierre69510@gmail.com',
        mot_de_passe: 'test',
        role: 'admin',
      },
      {
        id: 2,
        nom: 'Benalia',
        prenom: 'Mohamed',
        email: 'test@gmail.com',
        mot_de_passe: 'test',
        role: 'admin',
      },
      {
        id: 3,
        nom: 'Zelnio',
        prenom: 'Pierre',
        email: 'test@gmail.com',
        mot_de_passe: 'test',
        role: 'user',
      },
      {
        id: 4,
        nom: 'Brevet',
        prenom: 'Bastien',
        email: 'test@gmail.com',
        mot_de_passe: 'test',
        role: 'user',
      },
      {
        id: 5,
        nom: 'Lattanzi',
        prenom: 'Gianluca',
        email: 'test@gmail.com',
        mot_de_passe: 'test',
        role: 'user',
      },
    ];

    const reservations = [
      {
        date_reservation: new Date('2023-07-27'),
        id_utilisateur: 1,
        id_session: 1,
      },
      {
        date_reservation: new Date('2023-08-15'),
        id_utilisateur: 2,
        id_session: 2,
      },
      {
        date_reservation: new Date('2023-09-05'),
        id_utilisateur: 3,
        id_session: 3,
      },
      {
        date_reservation: new Date('2023-10-02'),
        id_utilisateur: 4,
        id_session: 4,
      },
      {
        date_reservation: new Date('2023-11-10'),
        id_utilisateur: 5,
        id_session: 5,
      },
    ];

    const sessions = [
      {
        id: 1,
        theme: 'Yoga',
        date_session: new Date('2023-07-27'),
        heure: '15:00', // Format d'heure au choix (par exemple, "HH:mm")
        duree: 1,
        capacite_max: 15,
        coach: 'Doe John',
        id_etablissement: 3,
      },
      {
        id: 2,
        theme: 'Cardio Boxing',
        date_session: new Date('2023-08-15'),
        heure: '18:30',
        duree: 2,
        capacite_max: 20,
        coach: 'Smith Alice',
        id_etablissement: 1,
      },
      {
        id: 3,
        theme: 'Pilates',
        date_session: new Date('2023-09-05'),
        heure: '09:00',
        duree: 1,
        capacite_max: 12,
        coach: 'Brown Robert',
        id_etablissement: 4,
      },
      {
        id: 4,
        theme: 'CrossFit',
        date_session: new Date('2023-10-02'),
        heure: '17:00',
        duree: 2,
        capacite_max: 18,
        coach: 'Johnson Emily',
        id_etablissement: 2,
      },
      {
        id: 5,
        theme: 'Zumba',
        date_session: new Date('2023-11-10'),
        heure: '20:00',
        duree: 1,
        capacite_max: 20,
        coach: 'Williams Michael',
        id_etablissement: 5,
      },
    ];

    const etablissements = [
      {
        id: 1,
        nom: 'GymFit',
        telephone: '01 23 45 67 89',
        horaire_ouverture: '06:00', // Format d'heure au choix (par exemple, "HH:mm")
        adresse: '123 Rue du Sport',
      },
      {
        id: 2,
        nom: 'FitnessZone',
        telephone: '02 34 56 78 90',
        horaire_ouverture: '07:30',
        adresse: '456 Avenue de la Forme',
      },
      {
        id: 3,
        nom: 'PowerGym',
        telephone: '03 45 67 89 01',
        horaire_ouverture: '08:00',
        adresse: '789 Boulevard de la Musculation',
      },
      {
        id: 4,
        nom: 'YogaZen',
        telephone: '04 56 78 90 12',
        horaire_ouverture: '06:30',
        adresse: '321 Rue de la Sérénité',
      },
      {
        id: 5,
        nom: 'CrossFitX',
        telephone: '05 67 89 01 23',
        horaire_ouverture: '07:00',
        adresse: "987 Avenue de l'Endurance",
      },
    ];

    return { utilisateurs, reservations, sessions, etablissements };
  }
}
