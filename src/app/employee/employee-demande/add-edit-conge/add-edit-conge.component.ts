import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AddEditEmployeeComponent } from 'src/app/manager/gestion-employee/add-edit-employee/add-edit-employee.component';
import { DemandeConge } from 'src/app/models/demande-conge';
import { Statut } from 'src/app/models/statut';
import { TypeConge } from 'src/app/models/type-conge';
import { AuthService } from 'src/app/services/auth.service';
import { DemandeCongeService } from 'src/app/services/demande-conge.service';

@Component({
  selector: 'app-add-edit-conge',
  templateUrl: './add-edit-conge.component.html',
  styleUrls: ['./add-edit-conge.component.scss']
})
export class AddEditCongeComponent implements OnInit{
  
  registrationForm: FormGroup;
  editmode: boolean = false;
  editdata: any;
  respdata: any;
  idUser: any;
  demandeConge: {
    dateDebut: Date; dateFin: Date; statut: Statut; type: TypeConge; user: any; // Use this.idUser here
  };
 
  constructor(private formBuilder: FormBuilder,private http: HttpClient, private jwtHelper: JwtHelperService ,  
    private routes:Router,private demandeCongeService: DemandeCongeService, private snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) public d: any,
    public dialogRef: MatDialogRef<AddEditCongeComponent>) { this.registrationForm = this.formBuilder.group({
     dateDebut: ['', [Validators.required ]],
      dateFin: ['', Validators.required],
      type: ['', Validators.required],
      
     
      // Add other form fields here
    });

  }

  ngOnInit(): void {
    const userData: string = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.idUser = user.id;
    }

    // Initialize demandeConge object with idUser after it's assigned
    this.demandeConge = {
      dateDebut: new Date(),
      dateFin: new Date(),
      statut: Statut.EN_ATTENTE,
      type: TypeConge.CONGE_PERSONNEL,
      user: this.idUser // Use this.idUser here
    };
  }
   DataResponse :any;  
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
    
    console.log(this.demandeConge);
    if (this.registrationForm.invalid) {
      console.log(this.registrationForm);
      alert("éazsqdds");
      // Display error message and prevent form submission
      return;
    }

    this.demandeCongeService.createDemandeConge(this.demandeConge)
      .subscribe(
        (response: any) => {
          // Handle successful registration response
        
          this.respdata = response;
          this.showSuccessMessage();
          if (this.respdata) {
            this.dialogRef.close();
            
            
          } location.reload();
          console.log(this.demandeConge);
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
