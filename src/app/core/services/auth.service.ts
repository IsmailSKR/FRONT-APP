import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import axios from 'axios';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://localhost:8082/auth/login';
  private basicAuthToken: string | null = null;

  constructor(private http: HttpClient) {}


login(username: string, password: string): Observable<any> {
  const encodedCredentials = btoa(username + ':' + password);
  const headers = {
    Authorization: 'Basic ' + encodedCredentials,
    'Content-Type': 'application/json',
  };
  console.log(encodedCredentials);
  
  return new Observable(observer => {
    axios.post(this.apiURL, {}, { headers: headers, responseType: 'text' })
      .then(response => {
        const token = response.data;
        localStorage.setItem('authToken', token);
        this.basicAuthToken = encodedCredentials;
        observer.next(token);
        observer.complete();
      })
      .catch(error => {
        observer.error(new Error('Something bad happened; please try again later.'));
      });
  });
}


  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }

  logout(): void {
    localStorage.removeItem('authToken');
    // Suppression des identifiants de base
    this.basicAuthToken = null;
  }

  // Méthode pour récupérer les en-têtes d'authentification de base
  getBasicAuthHeaders(): HttpHeaders {
    if (this.basicAuthToken) {
      return new HttpHeaders({
        Authorization: 'Basic ' + this.basicAuthToken,
        'Content-Type': 'application/json',
      });
    } else {
      throw new Error('Basic authentication token is not available');
    }
  }
}
