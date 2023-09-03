import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeConge } from '../models/demande-conge';

@Injectable({
  providedIn: 'root'
})
export class DemandeCongeService {

  private baseUrl = 'http://localhost:8080/gestion'; // Update with your API base URL

  constructor(private http: HttpClient) { }

  createDemandeConge(demandeConge: DemandeConge): Observable<DemandeConge> {
    const url = `${this.baseUrl}/demande-conge`;
    return this.http.post<DemandeConge>(url, demandeConge);
  }


  getAllDemandesConge(): Observable<any> {
    const url = `${this.baseUrl}/demande-conge/All`;
    return this.http.get(url);
  }

  validerDemandeConge(demandeId: number): Observable<any> {
    const url = `${this.baseUrl}/valider-demande/${demandeId}`;
    return this.http.put(url, {});
  }

  annulerDemandeConge(demandeId: number): Observable<any> {
    const url = `${this.baseUrl}/annuler-demande/${demandeId}`;
    return this.http.put(url, {});
  }

  getDemandesAccepteesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/demandes-acceptees/${userId}`;
    return this.http.get(url);
  }

  getDemandesEnAttente(): Observable<any> {
    const url = `${this.baseUrl}/demandes-en-attente`;
    return this.http.get(url);
  }

  getDemandesRefuser(): Observable<any> {
    const url = `${this.baseUrl}/demandes-Refuser`;
    return this.http.get(url);
  }

  getDemandesValider(): Observable<any> {
    const url = `${this.baseUrl}/demandes-Valider`;
    return this.http.get(url);
  }

  deleteDemandeConge(demandeId: number): Observable<any> {
    const url = `${this.baseUrl}/demande-conge/${demandeId}`;
    return this.http.delete(url);
  }

  getDemandeCongeById(demandeId: number): Observable<any> {
    const url = `${this.baseUrl}/demande-conge/${demandeId}`;
    return this.http.get(url);
  }

  getDemandesValideesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/demandes-validees/${userId}`;
    return this.http.get(url);
  }

  getDemandesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/demandes/${userId}`;
    return this.http.get(url);
  }

  getDemandesAnnuleesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/demandes-annulees/${userId}`;
    return this.http.get(url);
  }

  getDemandesEnCoursByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/demandes-en-cours/${userId}`;
    return this.http.get(url);
  }


  getStatistique(): Observable<any> {
    const url = `${this.baseUrl}/demande-conge/counts`;
    return this.http.get(url);
  }
}