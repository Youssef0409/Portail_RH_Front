import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DemandeAttestationService } from 'src/app/services/demande-attestation.service';
import { AttestionComponent } from './attestion/attestion.component';

@Component({
  selector: 'app-gestion-demande-attestation',
  templateUrl: './gestion-demande-attestation.component.html',
  styleUrls: ['./gestion-demande-attestation.component.scss']
})
export class GestionDemandeAttestationComponent implements OnInit{
  sideBarOpen = true;
  ListAttestations:any=[];
  constructor(private snackBar: MatSnackBar,private dialog:MatDialog,private service:DemandeAttestationService){}
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  selectedOption: string = 'En Cours'
  ngOnInit(): void {
    if (this.selectedOption === 'Valider') {
      this.GetAttestationAccepter();
      }else if (this.selectedOption === 'Annuler') {
       this.GetAttestationRefuser();
      } else if (this.selectedOption === 'En Cours') {
        this.GetAttestationEnAttente();
      }
  }
  editmode:boolean=false;
  OpenDialog(enteranimation: any, exitanimation: any, dataitem: any) {
    this.dialog.open(AttestionComponent, {
        enterAnimationDuration: enteranimation,
        exitAnimationDuration: exitanimation,
        width: '700px',
        data: {
            dataitem: dataitem,
            editmo: this.editmode,
        }
    });
}
     update(id:any){
      this.editmode=true;
     this.OpenDialog('1000ms','600ms',id)
     
     
     if (this.selectedOption === 'Valider') {
      this.GetAttestationAccepter();
      }else if (this.selectedOption === 'Annuler') {
       this.GetAttestationRefuser();
      } else if (this.selectedOption === 'En Cours') {
        this.GetAttestationEnAttente();
      }
    }


    GetAttestationEnAttente(){
      this.service.getAttestationEnAttente().subscribe(reps=>{
  this.ListAttestations=reps
      })
    }

    showSuccessMessage() {
      const config = new MatSnackBarConfig();
      config.duration = 3000; // Duration in milliseconds
      config.horizontalPosition = 'center'; // Set the horizontal position to center
      config.verticalPosition = 'top'; // Set the vertical position to top
    
      this.snackBar.open('Delete succeeded!', 'Close', config);
    }


    
  onRadioChange() {
    if (this.selectedOption === 'Valider') {
    this.GetAttestationAccepter();
    }else if (this.selectedOption === 'Annuler') {
     this.GetAttestationRefuser();
    } else if (this.selectedOption === 'En Cours') {
      this.GetAttestationEnAttente();
    }
  }

  GetAttestationAccepter(){
    this.service.getAttestationAccepter().subscribe(reps=>{
this.ListAttestations=reps
    })
  }

  GetAttestationRefuser(){
    this.service.getAttestationAnnuler().subscribe(reps=>{
this.ListAttestations=reps
    })
  }

}
