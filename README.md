# ResaSport

Ce projet a été généré avec Angular CLI version 16.1.6.

Pour retrouver notre repository GitHub, cliquez [ici](https://github.com/Pellegrin69/PP_MB_sport-resa).

## Découpage en Modules

1. **Module d'Authentification :**
   - Ce module gérera toute la logique d'authentification des utilisateurs, y compris la création de compte, la connexion, la déconnexion et la gestion des sessions utilisateur.

2. **Module de Consultation des Séances de Sport :**
   - Ce module permettra aux utilisateurs de consulter les séances de sport disponibles dans les établissements.
   - Il affichera les séances par établissement, thème, date et heure.
   - Les utilisateurs pourront filtrer les séances en fonction de critères tels que la localisation, le thème et la date.

3. **Module de Réservation de Séances de Sport :**
   - Ce module permettra aux utilisateurs authentifiés de réserver des séances de sport disponibles.
   - En cas de conflit de réservation pour un même créneau horaire, l'utilisateur pourra choisir parmi les établissements disponibles.
   - Les utilisateurs pourront visualiser et gérer leurs réservations existantes.

4. **Module de Gestion des Établissements :**
   - Ce module sera réservé aux administrateurs de l'application.
   - Il permettra de gérer les établissements, y compris l'ajout, la modification et la suppression des établissements.
   - Les informations sur les établissements, telles que les horaires d'ouverture, les adresses, les coordonnées, etc., seront configurables.

5. **Module de Gestion des Séances de Sport :**
   - Ce module sera également réservé aux administrateurs.
   - Il permettra d'ajouter, de modifier et de supprimer des séances de sport dans les établissements.
   - Les informations sur les séances de sport, y compris les horaires, les types de sport, les coachs, les capacités maximales, etc., seront configurables.

6. **Module de Notifications :**
   - Ce module gérera l'envoi de notifications aux utilisateurs.
   - Il enverra notamment des confirmations de réservation, des alertes d'annulations ou de modifications de réservation, etc.

Chaque module regroupera les composants, services et autres éléments nécessaires pour gérer la fonctionnalité spécifique de l'application. Par exemple, le module "Consultation des Séances de Sport" pourrait inclure les composants pour afficher la liste des séances, les services pour récupérer les données des séances depuis l'API, etc.

En découpant votre application en modules, vous pouvez mieux organiser le code, améliorer la réutilisabilité et la maintenabilité, et permettre une collaboration efficace entre les membres de l'équipe de développement. Chaque module pourra être développé indépendamment et testé séparément, ce qui facilite l'évolution et les mises à jour de l'application.




## Routes de l'application :

Notre application offre une navigation fluide grâce à un système de routes bien défini. Les routes permettent aux utilisateurs de découvrir et d'interagir avec différentes fonctionnalités de l'application en accédant à des pages spécifiques.

Voici un aperçu des différentes routes que nous avons mises en place pour notre application :

- **/login** : Cette route mène à la page de connexion. Ici, nos utilisateurs pourront se connecter à leur compte avec leurs identifiants.

- **/seances** : Sur cette page, nous avons regroupé toutes les séances de sport disponibles. Les utilisateurs pourront consulter les séances proposées par établissement, thème, date et heure. De plus, ils auront la possibilité de filtrer les séances selon différents critères tels que la localisation, le thème et la date pour trouver celles qui les intéressent le plus.

- **/reservations** : Cette route conduit à la liste des réservations de chaque utilisateur. Nos utilisateurs authentifiés pourront voir leurs réservations existantes et gérer leur planning sportif.

- **/admin/etablissements** : Pour nous, en tant qu'administrateurs, cette route nous permettra de gérer les établissements. Nous pourrons ajouter, modifier et supprimer des établissements en configurant leurs informations, telles que les horaires d'ouverture, les adresses et les coordonnées.

- **/admin/seances** : Cette route est réservée à l'administration des séances de sport. Nous pourrons ajouter, modifier et supprimer des séances dans les établissements. Les informations sur les séances de sport, y compris les horaires, les types de sport, les coachs et les capacités maximales, seront configurables.

Grâce à ce système de routes, nos utilisateurs auront une expérience utilisateur fluide et intuitive, leur permettant de découvrir et de profiter pleinement de toutes les fonctionnalités que propose notre application.





## Smart Component ET Dump Component


### Module d'Authentification :
- **Smart Component** : LoginComponent (Gère la logique de connexion et de création de compte)
- **Dumb Component** : LoginFormComponent (Affiche le formulaire de connexion)
- **Dumb Component** : RegisterFormComponent (Affiche le formulaire de création de compte)

### Module de Consultation des Séances de Sport :
- **Smart Component** : SeancesListComponent (Gère la récupération des séances et la logique de filtrage)
- **Dumb Component** : SeanceCardComponent (Affiche les informations d'une séance de sport)

### Module de Réservation de Séances de Sport :
- **Smart Component** : ReservationsComponent (Gère la récupération et l'affichage des réservations de l'utilisateur)
- **Dumb Component** : ReservationItemComponent (Affiche les détails d'une réservation)

### Module de Gestion des Établissements :
- **Smart Component** : AdminEtablissementsComponent (Gère la récupération et l'affichage des établissements pour l'administration)
- **Dumb Component** : EtablissementFormComponent (Affiche le formulaire pour ajouter ou modifier un établissement)

### Module de Gestion des Séances de Sport :
- **Smart Component** : AdminSeancesComponent (Gère la récupération et l'affichage des séances de sport pour l'administration)
- **Dumb Component** : SeanceFormComponent (Affiche le formulaire pour ajouter ou modifier une séance de sport)

### Module de Notifications :
- **Smart Component** : NotificationsComponent (Gère l'affichage des notifications pour les utilisateurs)
