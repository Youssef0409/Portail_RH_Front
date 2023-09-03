import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

// Angular Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

// Third-party Imports
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap/timepicker'; // Import the TimepickerModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { MyGuardGuard } from './guard/my-guard.guard';
import { GestionEmployeeComponent } from './manager/gestion-employee/gestion-employee.component';
import { GestionManagerComponent } from './manager/gestion-manager/gestion-manager.component';
import { AddEditManagerComponent } from './manager/gestion-manager/add-edit-manager/add-edit-manager.component';
import { AddEditEmployeeComponent } from './manager/gestion-employee/add-edit-employee/add-edit-employee.component';

import { EmployeeNavbarComponent } from './employee/employee-navbar/employee-navbar.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { EmployeeDemandeComponent } from './employee/employee-demande/employee-demande.component';
import { AddEditCongeComponent } from './employee/employee-demande/add-edit-conge/add-edit-conge.component';
import { AddEditSalaireComponent } from './employee/employee-demande/add-edit-salaire/add-edit-salaire.component';
import { AddEditAttestationComponent } from './employee/employee-demande/add-edit-attestation/add-edit-attestation.component';
import { EmployeeMesdemandesComponent } from './employee/employee-mesdemandes/employee-mesdemandes.component';
import { AuthGuard } from './guard/auth.guard';
import { GestionDemandeCongeComponent } from './manager/gestion-demande-conge/gestion-demande-conge.component';
import { GestionDemandeAttestationComponent } from './manager/gestion-demande-attestation/gestion-demande-attestation.component';
import { GestionDemandeSalaireComponent } from './manager/gestion-demande-salaire/gestion-demande-salaire.component';
import { AttestionComponent } from './manager/gestion-demande-attestation/attestion/attestion.component';
import { SalaireInfoComponent } from './manager/gestion-demande-salaire/salaire-info/salaire-info.component';
import { EmployeeAttestationComponent } from './employee/employee-attestation/employee-attestation.component';
import { EmployeeSalaireComponent } from './employee/employee-salaire/employee-salaire.component';
import { EmployeeCongeComponent } from './employee/employee-conge/employee-conge.component';
import { AttestationComponent } from './employee/employee-attestation/attestation/attestation.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { ManagerProfileComponent } from './manager/manager-profile/manager-profile.component';
import { StatistiqueComponent } from './manager/statistique/statistique.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    LoginComponent,
    GestionEmployeeComponent,
    GestionManagerComponent,
    AddEditManagerComponent,
    AddEditEmployeeComponent,
   
    EmployeeNavbarComponent,
    EmployeeHomeComponent,
    EmployeeDemandeComponent,
    AddEditCongeComponent,
    AddEditSalaireComponent,
    AddEditAttestationComponent,
    EmployeeMesdemandesComponent,
    GestionDemandeCongeComponent,
    GestionDemandeAttestationComponent,
    GestionDemandeSalaireComponent,
    AttestionComponent,
    SalaireInfoComponent,
    EmployeeAttestationComponent,
    EmployeeSalaireComponent,
    EmployeeCongeComponent,
    AttestationComponent,
    EmployeeProfileComponent,
    ManagerProfileComponent,
    StatistiqueComponent,
    
   
  ],
  imports: [
    NgxChartsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN'
    }),
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatSelectModule,
    NgbModalModule, TimepickerModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['*'], // Replace with your domain
        disallowedRoutes: [] // Replace with your API URL
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
 
    MyGuardGuard,
    AuthGuard
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }