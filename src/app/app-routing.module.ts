import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './guard/unauthorized/unauthorized.component';
import { GestionEmployeeComponent } from './manager/gestion-employee/gestion-employee.component';
import { GestionManagerComponent } from './manager/gestion-manager/gestion-manager.component';
import { EmployeeMesdemandesComponent } from './employee/employee-mesdemandes/employee-mesdemandes.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { EmployeeDemandeComponent } from './employee/employee-demande/employee-demande.component';
import { MyGuardGuard } from './guard/my-guard.guard';
import { AuthGuard } from './guard/auth.guard';
import { GestionDemandeAttestationComponent } from './manager/gestion-demande-attestation/gestion-demande-attestation.component';
import { GestionDemandeCongeComponent } from './manager/gestion-demande-conge/gestion-demande-conge.component';
import { GestionDemandeSalaireComponent } from './manager/gestion-demande-salaire/gestion-demande-salaire.component';
import { EmployeeAttestationComponent } from './employee/employee-attestation/employee-attestation.component';
import { EmployeeCongeComponent } from './employee/employee-conge/employee-conge.component';
import { EmployeeSalaireComponent } from './employee/employee-salaire/employee-salaire.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { ManagerProfileComponent } from './manager/manager-profile/manager-profile.component';
import  {StatistiqueComponent} from './manager/statistique/statistique.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',canActivate: [AuthGuard], component: LoginComponent },
  { path: 'manager/home', canActivate: [MyGuardGuard],component: HomeComponent },
  { path: '404', canActivate: [MyGuardGuard],component: UnauthorizedComponent },
  { path: 'manager/profile',canActivate: [MyGuardGuard], component: ManagerProfileComponent},
  { path: 'manager/dashboard', canActivate: [MyGuardGuard],component: DashboardComponent },
  { path: 'manager/gestion-employee',canActivate: [MyGuardGuard], component: GestionEmployeeComponent},
  { path: 'manager/gestion-manager', canActivate: [MyGuardGuard],component: GestionManagerComponent },
  { path: 'manager/gestion-demande-conge', canActivate: [MyGuardGuard],component: GestionDemandeCongeComponent},
  { path: 'manager/gestion-demande-salaire', canActivate: [MyGuardGuard],component: GestionDemandeSalaireComponent},
  { path: 'manager/gestion-demande-attestation', canActivate: [MyGuardGuard],component: GestionDemandeAttestationComponent },
  { path: 'manager/statistique', canActivate: [MyGuardGuard],component: StatistiqueComponent },



  { path: 'employee/mesdemandes', canActivate: [MyGuardGuard],component: EmployeeMesdemandesComponent },
  { path: 'employee/home', canActivate: [MyGuardGuard,AuthGuard],component: EmployeeHomeComponent },
  { path: 'employee/demande',canActivate: [MyGuardGuard], component: EmployeeDemandeComponent },
  { path: 'employee/attestation',canActivate: [MyGuardGuard], component: EmployeeAttestationComponent },
  { path: 'employee/conge',canActivate: [MyGuardGuard], component: EmployeeCongeComponent },
  { path: 'employee/salaire',canActivate: [MyGuardGuard], component: EmployeeSalaireComponent },
  { path: 'employee/profile',canActivate: [MyGuardGuard], component: EmployeeProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
