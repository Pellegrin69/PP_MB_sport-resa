// Import des modules nécessaires depuis Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Définition des routes de l'application
const routes: Routes = [
  // Autres routes non lazy-loaded ici

  // Routes lazy-loaded pour chaque module

  // Lorsque l'URL correspond à 'auth', le module AuthModule sera chargé de manière lazy-loaded.
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  // Lorsque l'URL correspond à 'seances', le module SeancesModule sera chargé de manière lazy-loaded.
  { path: 'seances', loadChildren: () => import('./seances/seances.module').then(m => m.SeancesModule) },

  // Lorsque l'URL correspond à 'reservations', le module ReservationsModule sera chargé de manière lazy-loaded.
  { path: 'reservations', loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule) },

  // Lorsque l'URL correspond à 'admin/etablissements', le module AdminEtablissementsModule sera chargé de manière lazy-loaded.
  { path: 'admin/etablissements', loadChildren: () => import('./admin-etablissements/admin-etablissements.module').then(m => m.AdminEtablissementsModule) },

  // Lorsque l'URL correspond à 'admin/seances', le module AdminSeancesModule sera chargé de manière lazy-loaded.
  { path: 'admin/seances', loadChildren: () => import('./admin-seances/admin-seances.module').then(m => m.AdminSeancesModule) },

  // Lorsque l'URL correspond à 'notifications', le module NotificationsModule sera chargé de manière lazy-loaded.
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },

  // Redirection vers la page d'accueil par défaut (p. ex., "/seances") si aucune route ne correspond
  { path: '**', redirectTo: 'seances' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes principales avec RouterModule.forRoot()
  exports: [RouterModule], // Exporte le RouterModule pour être utilisé dans le AppModule
})
export class AppRoutingModule {} // Déclaration de la classe AppRoutingModule en tant que module de routage principal de l'application
