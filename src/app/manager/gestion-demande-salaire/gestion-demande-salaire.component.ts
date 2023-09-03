import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DemandeAvanceSalaireService } from 'src/app/services/demande-avance-salaire.service';
import { DemandeCongeService } from 'src/app/services/demande-conge.service';
import { AttestionComponent } from '../gestion-demande-attestation/attestion/attestion.component';
import { SalaireInfoComponent } from './salaire-info/salaire-info.component';

@Component({
  selector: 'app-gestion-demande-salaire',
  templateUrl: './gestion-demande-salaire.component.html',
  styleUrls: ['./gestion-demande-salaire.component.scss']
})
export class GestionDemandeSalaireComponent {
  sideBarOpen = true;
  selectedOption: string = 'En Cours'

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }





  ListDemande:any=[];
  ngOnInit(): void {
    if (this.selectedOption === 'Valider') {
      this.GetDemandeAvanceApprouve();
    }else if (this.selectedOption === 'Annuler') {
     this.GetDemandeAvanceSalaireRefuser();
    } else if (this.selectedOption === 'En Cours') {
      this.GetDeamandeAvanceEnAttente();
    }
  }
  constructor(private dialog:MatDialog,private snackBar: MatSnackBar,private service: DemandeAvanceSalaireService){}
  GetDeamandeAvanceEnAttente(){
    this.service.getAvanceSalaireEnAttente().subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }

  GetAllDeamandeAvanceSalire(){
    this.service.getAllAvanceSalaires().subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }

  GetDemandeAvanceApprouve(){
    this.service.getAvanceSalairesAccepter().subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }



  GetDemandeAvanceSalaireRefuser(){
    this.service.getAvanceSalairesRefuser().subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }

  validerdemande(id:number){
    this.service.validerAvanceSalaire(id).subscribe(res=>{
      this.showSuccessMessage();
      this.selectedOption = 'En Cours'
     this.GetDeamandeAvanceEnAttente();
    })

  }
  Annulerdemande(id:number){
    this.service.refuserAvanceSalaire(id).subscribe(res=>{
     this.showAnnulerMessage();
     this.selectedOption = 'En Cours'
     this.GetDeamandeAvanceEnAttente();
    })

  }



  
  onRadioChange() {
    if (this.selectedOption === 'Valider') {
      this.GetDemandeAvanceApprouve();
    }else if (this.selectedOption === 'Annuler') {
     this.GetDemandeAvanceSalaireRefuser();
    } else if (this.selectedOption === 'En Cours') {
      this.GetDeamandeAvanceEnAttente();
    }
  }


  showSuccessMessage() {
    const config = new MatSnackBarConfig();
    config.duration = 3000; // Duration in milliseconds
    config.horizontalPosition = 'center'; // Set the horizontal position to center
    config.verticalPosition = 'top'; // Set the vertical position to top
  
    this.snackBar.open('Bravo! Demande est validée avec succès', 'Close', config);
  }

  showAnnulerMessage() {
    const config = new MatSnackBarConfig();
    config.duration = 3000; // Duration in milliseconds
    config.horizontalPosition = 'center'; // Set the horizontal position to center
    config.verticalPosition = 'top'; // Set the vertical position to top
  
    this.snackBar.open('Bravo demande est annuléé', 'Close', config);
  }



  editmode:boolean=false;
  OpenDialog(enteranimation: any, exitanimation: any, dataitem: any) {
    this.dialog.open(SalaireInfoComponent, {
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
      this.GetDemandeAvanceApprouve();
      }else if (this.selectedOption === 'Annuler') {
       this.GetDemandeAvanceSalaireRefuser();
      } else if (this.selectedOption === 'En Cours') {
        this.GetDeamandeAvanceEnAttente();
      }
    }

}
