import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvanceSalaire } from '../models/avance-salaire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeAvanceSalaireService {

 
  private baseUrl = 'http://localhost:8080/gestion'; // Update with your API base URL

  constructor(private http: HttpClient) { }

  createAvanceSalaire(avanceSalaire: AvanceSalaire): Observable<AvanceSalaire> {
    const url = `${this.baseUrl}/demande-avance-salaire`;
    return this.http.post<AvanceSalaire>(url, avanceSalaire);
  }

  
  getAvanceSalaireById(avanceId: number): Observable<any> {
    const url = `${this.baseUrl}/findAvance/${avanceId}`;
    return this.http.get(url);
  }

  getAllAvanceSalaires(): Observable<any> {
    const url = `${this.baseUrl}/findAvance/all`;
    return this.http.get(url);
  }

  getAvanceSalairesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/findAvance/user/${userId}`;
    return this.http.get(url);
  }

  deleteAvanceSalaire(avanceId: number): Observable<any> {
    const url = `${this.baseUrl}/avance-salaire/${avanceId}`;
    return this.http.delete(url);
  }

  refuserAvanceSalaire(avanceId: number): Observable<any> {
    const url = `${this.baseUrl}/refuser-avance-salaire/${avanceId}`;
    return this.http.post(url, {});
  }

  validerAvanceSalaire(avanceId: number): Observable<any> {
    const url = `${this.baseUrl}/valider-avance-salaire/${avanceId}`;
    return this.http.post(url, {});
  }


  getAvanceSalaireEnAttente(): Observable<any> {
    const url = `${this.baseUrl}/getAvance/en-attente`;
    return this.http.get(url);
  }

  getAvanceSalairesAccepter(): Observable<any> {
    const url = `${this.baseUrl}/getAvance/Accepter`;
    return this.http.get(url);
  }

  getAvanceSalairesRefuser(): Observable<any> {
    const url = `${this.baseUrl}/getAvance/Refuser`;
    return this.http.get(url);
  }



  getDemandesValideesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/employee/salaire-accepter/${userId}`;
    return this.http.get(url);
  }

 
  getDemandesAnnuleesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/employee/salaire-refuser/${userId}`;
    return this.http.get(url);
  }

  getDemandesEnCoursByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/employee/salaire-en-attente/${userId}`;
    return this.http.get(url);
  }

  
  getStatistique(): Observable<any> {
    const url = `${this.baseUrl}/avance-salaire/counts`;
    return this.http.get(url);
  }
}
