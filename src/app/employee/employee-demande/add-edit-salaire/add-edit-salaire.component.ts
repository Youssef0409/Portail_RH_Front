import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DemandeAttestationService } from 'src/app/services/demande-attestation.service';
import { AddEditCongeComponent } from '../add-edit-conge/add-edit-conge.component';
import { DemandeAvanceSalaireService } from 'src/app/services/demande-avance-salaire.service';

@Component({
  selector: 'app-add-edit-salaire',
  templateUrl: './add-edit-salaire.component.html',
  styleUrls: ['./add-edit-salaire.component.scss']
})
export class AddEditSalaireComponent implements OnInit{
  registrationForm: FormGroup;
  editmode: boolean = false;
  editdata: any;
  respdata: any;
  idUser: any;
  avanceSalaire: { dateDemande: Date; montantDemande: number; dateRemboursement: Date; justificatif: string; user: any; };
  
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private jwtHelper: JwtHelperService ,  
    private routes:Router,private demandeAvanceSalaireService: DemandeAvanceSalaireService, private snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) public d: any,
    public dialogRef: MatDialogRef<AddEditSalaireComponent>) { this.registrationForm = this.formBuilder.group({
      dateDemande: ['', [Validators.required ]],
      montantDemande: ['', Validators.required],
      dateRemboursement: ['', Validators.required],
      justificatif: ['', Validators.required],
   
      
     
      // Add other form fields here
    });

  }

  ngOnInit(): void {
    const userData: string = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.idUser = user.id;
    }

  this.avanceSalaire  ={

    
    dateDemande: new Date(),
   
    montantDemande:null,
    dateRemboursement: new Date(),
    justificatif: '',
   
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
    
  console.log(this.avanceSalaire);
  if (this.registrationForm.invalid) {
    console.log(this.registrationForm);
    alert("éazsqdds");
    // Display error message and prevent form submission
    return;
  }

  this.demandeAvanceSalaireService.createAvanceSalaire(this.avanceSalaire)
    .subscribe(
      (response: any) => {
        // Handle successful registration response
      
        this.respdata = response;
        this.showSuccessMessage();
        if (this.respdata) {
          this.dialogRef.close();
          
          
        } location.reload();
        console.log(this.avanceSalaire);
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

