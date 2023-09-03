import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DemandeCongeService } from 'src/app/services/demande-conge.service';

@Component({
  selector: 'app-gestion-demande-conge',
  templateUrl: './gestion-demande-conge.component.html',
  styleUrls: ['./gestion-demande-conge.component.scss']
})
export class GestionDemandeCongeComponent {
  sideBarOpen = true;
  selectedOption: string = 'En Cours'

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }



  ListDemande:any=[];
  ngOnInit(): void {
    if (this.selectedOption === 'Valider') {
      this.GetDemandeCongeApprouve();
    }else if (this.selectedOption === 'Annuler') {
     this.GetDemandeCongeRefuser();
    } else if (this.selectedOption === 'En Cours') {
      this.GetDeamandeCongeEnAttente();
    }
  }
  constructor(private snackBar: MatSnackBar,private service: DemandeCongeService){}
  GetDeamandeCongeEnAttente(){
    this.service.getDemandesEnAttente().subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }

  GetAllDeamandeConge(){
    this.service.getAllDemandesConge().subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }

  GetDemandeCongeApprouve(){
    this.service.getDemandesValider().subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }


  GetDemandeCongeRefuser(){
    this.service.getDemandesRefuser().subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }

  validerdemande(id:number){
    this.service.validerDemandeConge(id).subscribe(res=>{
      this.showSuccessMessage();
      this.selectedOption = 'En Cours'
     this.GetDeamandeCongeEnAttente();
    })

  }
  Annulerdemande(id:number){
    this.service.annulerDemandeConge(id).subscribe(res=>{
     this.showAnnulerMessage();
     this.selectedOption = 'En Cours'
     this.GetDeamandeCongeEnAttente();
    })

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





  onRadioChange() {
    if (this.selectedOption === 'Valider') {
      this.GetDemandeCongeApprouve();
    }else if (this.selectedOption === 'Annuler') {
     this.GetDemandeCongeRefuser();
    } else if (this.selectedOption === 'En Cours') {
      this.GetDeamandeCongeEnAttente();
    }
  }


}
