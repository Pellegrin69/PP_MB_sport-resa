import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

// Suite de tests pour le composant AppComponent
describe('AppComponent', () => {
  // Avant chaque test, configure le TestBed avec les dépendances nécessaires
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule], // Importe le RouterTestingModule pour les tests liés aux routes
    declarations: [AppComponent] // Déclare le AppComponent pour les tests unitaires
  }));

  // Teste si le composant AppComponent est créé avec succès
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crée une instance du composant
    const app = fixture.componentInstance; // Récupère l'instance du composant
    expect(app).toBeTruthy(); // Vérifie que l'instance du composant est définie et existe
  });

  // Teste si la propriété 'title' du composant a la valeur attendue
  it(`should have as title 'resa-sport'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Crée une instance du composant
    const app = fixture.componentInstance; // Récupère l'instance du composant
    expect(app.title).toEqual('resa-sport'); // Vérifie que la propriété 'title' a la valeur 'resa-sport'
  });

  // Teste si le titre est rendu correctement dans le template HTML
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crée une instance du composant
    fixture.detectChanges(); // Déclenche la détection des changements dans le template
    const compiled = fixture.nativeElement as HTMLElement; // Récupère le template HTML compilé
    // Vérifie que le titre est présent dans le template avec le bon contenu
    expect(compiled.querySelector('.content span')?.textContent).toContain('resa-sport app is running!');
  });
});
