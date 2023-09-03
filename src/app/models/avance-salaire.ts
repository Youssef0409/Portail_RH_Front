import { Statut } from "./statut";

export interface AvanceSalaire {
    id?: number;
    dateDemande?: Date; // Assuming you want to use a string representation of the date
    statut?: Statut; // Enumerated type, you can adjust it according to your needs
    montantDemande?: number;
    dateRemboursement?: Date; // Assuming you want to use a string representation of the date
    justificatif?: string;
    user?: number; // Assuming you have a User interface
}
