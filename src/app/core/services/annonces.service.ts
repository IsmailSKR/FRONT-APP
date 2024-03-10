import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AnnoncesService {
  private apiURL = 'http://localhost:8081/domain/annonce';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAnnonces(): Observable<any> {
    const authToken = this.authService.getAuthToken();
    console.log(authToken);

    if (!authToken) {
      return throwError(
        () => new Error('Authentication token is not available')
      );
    }

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + authToken, 
      'Content-Type': 'application/json',
    });

    return this.http.get(this.apiURL, { headers: headers }).pipe(
      catchError((error) => {
        return throwError(
          () => new Error('Something bad happened; please try again later.')
        );
      })
    );
  }
}
