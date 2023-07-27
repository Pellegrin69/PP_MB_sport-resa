// auth.service.ts
import { Injectable } from '@angular/core';

import * as jwt from 'jsonwebtoken';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {

  }

  logIn(credentials: { username: string, password: string }): boolean {
    // Vérifiez les informations d'identification ici (remplacez les valeurs en dur par vos propres valeurs)
    if (credentials.username === 'user' && credentials.password === 'password') {
      // Authentification réussie
      // Stockez le token JWT dans le local storage
      const token = this.generateJwtToken();
      localStorage.setItem('token', token);
      return true;
    } else {
      // Échec de l'authentification
      return false;
    }
  }

  logOut(): void {
    // Supprimez le token JWT du local storage
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // Vérifiez si le token existe dans le local storage et s'il est valide
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwt.verify(token, 'secret_key');
        return true;
      } catch (error) {
        // Le token est invalide ou a expiré
        return false;
      }
    } else {
      // Le token n'existe pas
      return false;
    }
  }

  private generateJwtToken(): string {
    // Générez un nouveau token JWT avec les données que vous souhaitez
    const token = jwt.sign({ username: 'user' }, 'secret_key', { expiresIn: '1h' });
    return token;
  }
}
