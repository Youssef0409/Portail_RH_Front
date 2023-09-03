import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DemandeAvanceSalaireService } from 'src/app/services/demande-avance-salaire.service';

@Component({
  selector: 'app-employee-salaire',
  templateUrl: './employee-salaire.component.html',
  styleUrls: ['./employee-salaire.component.scss']
})
export class EmployeeSalaireComponent {
  selectedOption: string = 'En Cours'
 
  ListDemande:any=[];
  id: any;
  constructor(private snackBar: MatSnackBar,private dialog:MatDialog,private service:DemandeAvanceSalaireService){}
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
       this.id = user.id;
       if (this.selectedOption === 'Valider') {
        this.GetDemandeAvanceApprouve(this.id);
      }else if (this.selectedOption === 'Annuler') {
       this.GetDemandeAvanceSalaireRefuser(this.id);
      } else if (this.selectedOption === 'En Cours') {
        this.GetDeamandeAvanceEnAttente(this.id);
      }
       
      // Do something with the id_user value
      
    }
    
  }


  GetDeamandeAvanceEnAttente(id:number){
    this.service.getDemandesEnCoursByUserId(this.id).subscribe(reps=>{
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

  GetDemandeAvanceApprouve(id:number){
    this.service.getDemandesValideesByUserId(this.id).subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }



  GetDemandeAvanceSalaireRefuser(id:number){
    this.service.getDemandesAnnuleesByUserId(this.id).subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }


  
  onRadioChange() {
    if (this.selectedOption === 'Valider') {
      this.GetDemandeAvanceApprouve(this.id);
    }else if (this.selectedOption === 'Annuler') {
     this.GetDemandeAvanceSalaireRefuser(this.id);
    } else if (this.selectedOption === 'En Cours') {
      this.GetDeamandeAvanceEnAttente(this.id);
    }
  }

}
