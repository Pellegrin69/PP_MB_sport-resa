import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Autres routes non lazy-loaded ici

  // Routes lazy-loaded pour chaque module
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'seances', loadChildren: () => import('./seances/seances.module').then(m => m.SeancesModule) },
  { path: 'reservations', loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule) },
  { path: 'admin/etablissements', loadChildren: () => import('./admin-etablissements/admin-etablissements.module').then(m => m.AdminEtablissementsModule) },
  { path: 'admin/seances', loadChildren: () => import('./admin-seances/admin-seances.module').then(m => m.AdminSeancesModule) },
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },

  // Redirection vers la page d'accueil par défaut (p. ex., "/seances") si aucune route ne correspond
  { path: '**', redirectTo: 'seances' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
