import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeConge } from '../models/demande-conge';
import { Attestation } from '../models/attestation';

@Injectable({
  providedIn: 'root'
})
export class DemandeAttestationService {

  private baseUrl = 'http://localhost:8080/gestion'; // Update with your API base URL

  constructor(private http: HttpClient) { }

  createDemandeAttestation(attestation: Attestation): Observable<Attestation> {
    const url = `${this.baseUrl}/demande-attestation-travail`;
    return this.http.post<Attestation>(url, attestation);
  }

  validerAttestationTravail(idAttestationTravail: number): Observable<Attestation> {
    const url = `${this.baseUrl}/valider-attestation-travail/${idAttestationTravail}`;
    return this.http.post<Attestation>(url, {});
  }


  
  refuserAttestationTravail(idAttestationTravail: number): Observable<Attestation> {
    const url = `${this.baseUrl}/refuser-attestation-travail/${idAttestationTravail}`;
    return this.http.post<Attestation>(url, {});
  }

  deleteAttestationById(id: number): Observable<any> {
    const url = `${this.baseUrl}/attestation-travail/${id}`;
    return this.http.delete(url);
  }

  getAllAttestations(): Observable<any> {
    const url = `${this.baseUrl}/getAttestation/All`;
    return this.http.get(url);
  }

  getAttestationById(id: number): Observable<any> {
    const url = `${this.baseUrl}/getAttestation/${id}`;
    return this.http.get(url);
  }

  getAttestationsByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/getAttestation/user/${userId}`;
    return this.http.get(url);
  }


  getAttestationEnAttente(): Observable<any> {
    const url = `${this.baseUrl}/attestations-en-attente`;
    return this.http.get(url,{});
  }

  
  getAttestationAccepter(): Observable<any> {
    const url = `${this.baseUrl}/attestations-accepter`;
    return this.http.get(url,{});
  }

  getAttestationAnnuler(): Observable<any> {
    const url = `${this.baseUrl}/attestations-refuser`;
    return this.http.get(url,{});
  }


  getDemandesValideesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/employee/attestations-accepter/${userId}`;
    return this.http.get(url);
  }

 
  getDemandesAnnuleesByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/employee/attestations-refuser/${userId}`;
    return this.http.get(url);
  }

  getDemandesEnCoursByUserId(userId: number): Observable<any> {
    const url = `${this.baseUrl}/employee/attestations-en-attente/${userId}`;
    return this.http.get(url);
  }
  
  
  getStatistique(): Observable<any> {
    const url = `${this.baseUrl}/attestation/counts`;
    return this.http.get(url);
  }
}
