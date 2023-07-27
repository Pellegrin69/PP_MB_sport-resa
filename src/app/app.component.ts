import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Chemin du template HTML associé à ce composant
  styleUrls: ['./app.component.scss'] // Chemin du fichier de styles associé à ce composant
})
export class AppComponent {
  title = 'resa-sport'; // Propriété 'title' utilisée dans le template pour afficher le titre de l'application
}
