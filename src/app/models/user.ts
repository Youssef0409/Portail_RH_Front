import { Role } from "./role";

export interface User {
    id?: string;
    firstname?: string;
    lastname?: string;
    
    dateNaissance?: Date;
    email?: string;
    telephone?: number;
    
    password?: string;
    role?: Role;
}
