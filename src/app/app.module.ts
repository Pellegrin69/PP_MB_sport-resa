// Import des modules nécessaires depuis Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Import du module pour la simulation de l'API avec In-Memory Web API
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.services';

// Import des modules de fonctionnalités personnalisées
import { AuthModule } from './auth/auth.module'; // Importez le module AuthModule
import { SeancesModule } from "./seances/seances.module";

// Import du module de routage principal
import { AppRoutingModule } from './app-routing.module';

// Import du composant racine de l'application
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Déclaration des composants utilisés dans ce module (seulement AppComponent ici)
  imports: [
    BrowserModule, // Import du module BrowserModule pour fonctionner dans un navigateur
    AppRoutingModule, // Import du module de routage principal
    AuthModule, // Import du module AuthModule pour les fonctionnalités d'authentification
    HttpClientModule, // Import du module HttpClientModule pour effectuer des requêtes HTTP

    // Configuration de l'In-Memory Web API avec le service DataService.
    // HttpClientInMemoryWebApiModule permet de simuler une API en mémoire pour les tests.
    HttpClientInMemoryWebApiModule.forRoot(DataService),

    SeancesModule, // Import du module SeancesModule pour les fonctionnalités de séances
  ],
  providers: [], // Fournisseurs de services, vides ici (vous pouvez les ajouter si nécessaire)
  bootstrap: [AppComponent], // Composant racine à démarrer lors du chargement de l'application
})
export class AppModule {} // Déclaration de la classe AppModule en tant que module principal de l'application
