import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AddEditCongeComponent } from './add-edit-conge/add-edit-conge.component';
import { AddEditAttestationComponent } from './add-edit-attestation/add-edit-attestation.component';
import { AddEditSalaireComponent } from './add-edit-salaire/add-edit-salaire.component';

@Component({
  selector: 'app-employee-demande',
  templateUrl: './employee-demande.component.html',
  styleUrls: ['./employee-demande.component.scss']
})
export class EmployeeDemandeComponent {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private snackBar: MatSnackBar,private dialog:MatDialog,private routes:Router,private renderer: Renderer2, private elRef: ElementRef , private service: UserService){}
  editmode:boolean=false;
  ListEmp:any=[];
  ngOnInit(): void {
  

  }


  showSuccessMessage() {
    const config = new MatSnackBarConfig();
    config.duration = 3000; // Duration in milliseconds
    config.horizontalPosition = 'center'; // Set the horizontal position to center
    config.verticalPosition = 'top'; // Set the vertical position to top
  
    this.snackBar.open('Delete succeeded!', 'Close', config);
  }
  
  showFailMessage() {
    
    const config = new MatSnackBarConfig();
    config.duration = 3000; // Duration in milliseconds
    config.horizontalPosition = 'center'; // Set the horizontal position to center
    config.verticalPosition = 'top'; // Set the vertical position to top
  
    this.snackBar.open('Delete failed!', 'Close', config);
  }


  add(){
    this.editmode=false;
    this.OpenDialog('1000ms','600ms','')
 

  }

  add2(){
    this.editmode=false;
    this.OpenDialog2('1000ms','600ms','')
 

  }

  add3(){
    this.editmode=false;
    this.OpenDialog3('1000ms','600ms','')
 

  }

  
  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditCongeComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
          id:id,
           editmo:this.editmode,
   
         } })
   
        }

  OpenDialog2(enteranimation:any,exitanimation:any,id:any){
      this.dialog.open(AddEditAttestationComponent,{
         enterAnimationDuration:enteranimation,
          exitAnimationDuration:exitanimation,
               width: '700px',
               data:{
                id:id,
                 editmo:this.editmode,
         
               } })
         
             }  
   
   OpenDialog3(enteranimation:any,exitanimation:any,id:any){
     this.dialog.open(AddEditSalaireComponent,{
        enterAnimationDuration:enteranimation,
          exitAnimationDuration:exitanimation,
          width: '700px',
           data:{
            id:id,
               editmo:this.editmode,
             
                   } })
             
                  }                

}
