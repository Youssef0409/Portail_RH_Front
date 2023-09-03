import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import * as alertifyjs from 'alertifyjs';
import { AddEditEmployeeComponent } from '../gestion-employee/add-edit-employee/add-edit-employee.component';
import { AddEditManagerComponent } from './add-edit-manager/add-edit-manager.component';
@Component({
  selector: 'app-gestion-manager',
  templateUrl: './gestion-manager.component.html',
  styleUrls: ['./gestion-manager.component.scss']
})
export class GestionManagerComponent {

  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private snackBar: MatSnackBar,private dialog:MatDialog,private routes:Router,private renderer: Renderer2, private elRef: ElementRef , private service: UserService){}
  editmode:boolean=false;
  ListEmp:any=[];
  ngOnInit(): void {
    this.GetAllManagers();

  }
  


  GetAllManagers(){
    this.service.getAllMangers().subscribe(res=>{
      console.log(res);
      this.ListEmp=res
    })
  }
 

  supprimer(id:any){
    

    alertifyjs.confirm("Supprimer Le Manager","Voulez vous supprimer le manager ?",()=>{ this.service.deleteUser(id).subscribe(del=>{
     this.GetAllManagers();
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
   this.GetAllManagers();

  }


  OpenDialog(enteranimation:any,exitanimation:any,id:any){
    this.dialog.open(AddEditManagerComponent,{
         enterAnimationDuration:enteranimation,
         exitAnimationDuration:exitanimation,
         width: '700px',
         data:{
          id_user:id,
           editmo:this.editmode,
   
         } })
   
        }
         
}
