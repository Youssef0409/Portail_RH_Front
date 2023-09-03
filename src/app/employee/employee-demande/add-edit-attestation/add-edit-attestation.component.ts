import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DemandeCongeService } from 'src/app/services/demande-conge.service';
import { AddEditCongeComponent } from '../add-edit-conge/add-edit-conge.component';
import { DemandeAttestationService } from 'src/app/services/demande-attestation.service';

@Component({
  selector: 'app-add-edit-attestation',
  templateUrl: './add-edit-attestation.component.html',
  styleUrls: ['./add-edit-attestation.component.scss']
})
export class AddEditAttestationComponent implements OnInit{
  registrationForm: FormGroup;
  editmode: boolean = false;
  editdata: any;
  respdata: any;
  idUser: any;
  attestation: { dateDemande: Date; dateDebutTravail: Date; dateFinTravail: Date; motif: string; details: string; user: any; };

  constructor(private formBuilder: FormBuilder,private http: HttpClient, private jwtHelper: JwtHelperService ,  
    private routes:Router,private demandeAttestaionService: DemandeAttestationService, private snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) public d: any,
    public dialogRef: MatDialogRef<AddEditCongeComponent>) { this.registrationForm = this.formBuilder.group({
      dateDemande: ['', [Validators.required ]],
     dateDebutTravail: ['', Validators.required],
     dateFinTravail: ['', Validators.required],
      motif: ['', Validators.required],
      details: ['', Validators.required],
      
     
      // Add other form fields here
    });

  }

  ngOnInit(): void {
    const userData: string = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.idUser = user.id;
    }

  this.attestation  ={

    
    dateDemande: new Date(),
   
    dateDebutTravail:new Date(),
    dateFinTravail: new Date(),
    motif: '',
    details: '',
    user: this.idUser,
  }
  }

  showSuccessMessage() {
    const config = new MatSnackBarConfig();
    config.duration = 3000; // Duration in milliseconds
    config.horizontalPosition = 'center'; // Set the horizontal position to center
    config.verticalPosition = 'top'; // Set the vertical position to top

    this.snackBar.open('Demande Envoyée', 'Close', config);
  }
  showFailMessage() {
     
   const config = new MatSnackBarConfig();
   config.duration = 3000; // Duration in milliseconds
   config.horizontalPosition = 'center'; // Set the horizontal position to center
   config.verticalPosition = 'top'; // Set the vertical position to top

   this.snackBar.open('Vous avez déja une demande en attente', 'Close', config);
 }


 register() {
    
  console.log(this.attestation);
  if (this.registrationForm.invalid) {
    console.log(this.registrationForm);
    alert("éazsqdds");
    // Display error message and prevent form submission
    return;
  }

  this.demandeAttestaionService.createDemandeAttestation(this.attestation)
    .subscribe(
      (response: any) => {
        // Handle successful registration response
      
        this.respdata = response;
        this.showSuccessMessage();
        if (this.respdata) {
          this.dialogRef.close();
          
          
        } location.reload();
        console.log(this.attestation);
        // Redirect or perform further actions
        // e.g., navigate to a protected route
      },
      (error: any) => {
        this.showFailMessage();
        // Handle error response
        console.error('Registration failed:', error);
      }
    );
}

}
