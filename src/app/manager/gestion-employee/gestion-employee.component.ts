import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import * as alertifyjs from 'alertifyjs';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
@Component({
  selector: 'app-gestion-employee',
  templateUrl: './gestion-employee.component.html',
  styleUrls: ['./gestion-employee.component.scss']
})
export class GestionEmployeeComponent implements OnInit {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private snackBar: MatSnackBar,private dialog:MatDialog,private routes:Router,private renderer: Renderer2, private elRef: ElementRef , private service: UserService){}
  editmode:boolean=false;
  ListEmp:any=[];
  ngOnInit(): void {
    this.GetAllEmployee();

  }
  


  GetAllEmployee(){
    this.service.getAllEmployees().subscribe(res=>{
      console.log(res);
      this.ListEmp=res
    })
  }
 

  supprimer(id:any){
    

    alertifyjs.confirm("Supprimer Le Collaborateur","Voulez vous supprimer l'employee ?",()=>{ this.service.deleteUser(id).subscribe(del=>{
     this.GetAllEmployee();
     this.showSuccessMessage();
    })
  
    },function(){
  
    })
   
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
   this.GetAllEmployee();

  }


  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditEmployeeComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
          id:id,
           editmo:this.editmode,
   
         } })
   
        }




}
