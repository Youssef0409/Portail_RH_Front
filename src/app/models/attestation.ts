import { Statut } from "./statut";

export interface Attestation {
    id?: number;
    dateDemande?: Date; // Assuming you want to use a string representation of the date
    statut?: Statut; // Enumerated type, you can adjust it according to your needs
    dateDebutTravail?:Date; // Assuming you want to use a string representation of the date
    dateFinTravail?: Date; // Assuming you want to use a string representation of the date
    motif?: string;
    details?: string;
    user?: number; // Assuming you have a User interface
  
}
