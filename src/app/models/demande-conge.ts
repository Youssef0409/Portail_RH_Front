import { Statut } from "./statut";
import { TypeConge } from "./type-conge";
import { User } from "./user";

export interface DemandeConge {
   id?:number
  dateDebut:Date;
  dateFin:Date;
  //  typeconge:TypeConge;
  type:TypeConge;
    statut:Statut;
    user:string;
}
