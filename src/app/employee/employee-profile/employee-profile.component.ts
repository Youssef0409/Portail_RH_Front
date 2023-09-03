import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent implements OnInit {
  changePassword: boolean = false;
  newPassword: string = '';
  confirmPassword: string = '';
  id: any;
  user: User ;
  nom: any;
  competences:any=[];

  constructor(private userService:UserService,private snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.id=user.id;
      this.nom=user.nom;
      
       
       
      // Do something with the id_user value
      
    }
    this.getUser();
    
  }

  getUser() {
    // Call your service method to fetch the existing collaborateur data
    this.userService.getUserById(this.id)
      .subscribe(
        existingCollaborateur => {
          // Populate the collaborateur object with the existing values
          this.user = existingCollaborateur;
          console.log(this.user);
        },
        error => {
          console.error('Error fetching collaborateur:', error);
          // Handle error appropriately
        }
      );
  }




  onFormSubmit() {
    if (this.newPassword.trim() != '') {
      if (this.newPassword === this.confirmPassword) {
        this.user.password=this.newPassword;
      
    this.userService.updateUser(this.id, this.user)
      .subscribe(
        updatedCollaborateur => {
          //const currentUser = JSON.parse(localStorage.getItem('currentUser'));
     localStorage.setItem('user', JSON.stringify(this.user));
     this.snackBar.open('Profile mise à jour avec succès!', 'Fermer', {
      duration: 3000,
      verticalPosition: 'top'
    }); 
          // Perform any additional actions after update
        },
        error => {
          this.snackBar.open('Erreur est survenue', 'Fermer', {
            duration: 3000,
            verticalPosition: 'top'
          })
          // Handle error appropriately
        }
      );}else {
        // Passwords do not match, handle the error case
        this.snackBar.open('Les mots de passe ne correspondent pas.', 'Fermer', {
          duration: 3000,
          verticalPosition: 'top'
        });
  }}else {this.snackBar.open('Password should not be empty', 'Fermer', {
    duration: 3000,
    verticalPosition: 'top'
  });}

}
}
