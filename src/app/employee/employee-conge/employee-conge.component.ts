import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DemandeCongeService } from 'src/app/services/demande-conge.service';

@Component({
  selector: 'app-employee-conge',
  templateUrl: './employee-conge.component.html',
  styleUrls: ['./employee-conge.component.scss']
})
export class EmployeeCongeComponent {
  selectedOption: string = 'En Cours'
  ListDemande:any=[];
  id: any;
  constructor(private snackBar: MatSnackBar,private service: DemandeCongeService){}
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
       this.id = user.id;
       if (this.selectedOption === 'Valider') {
        this.GetDemandeCongeApprouve(this.id);
      }else if (this.selectedOption === 'Annuler') {
       this.GetDemandeCongeRefuser(this.id);
      } else if (this.selectedOption === 'En Cours') {
        this.GetDeamandeCongeEnAttente(this.id);
      }
       
      // Do something with the id_user value
      
    }
    
  }


  onRadioChange() {
    if (this.selectedOption === 'Valider') {
      this.GetDemandeCongeApprouve(this.id);
    }else if (this.selectedOption === 'Annuler') {
     this.GetDemandeCongeRefuser(this.id);
    } else if (this.selectedOption === 'En Cours') {
      this.GetDeamandeCongeEnAttente(this.id);
    }
  }


  GetDeamandeCongeEnAttente(id:number){
    this.service.getDemandesEnCoursByUserId(this.id).subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }
  
  GetDemandeCongeApprouve(id:number){
    this.service.getDemandesValideesByUserId(this.id).subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }


  GetDemandeCongeRefuser(id:number){
    this.service.getDemandesAnnuleesByUserId(this.id).subscribe(reps=>{
this.ListDemande=reps

console.log(reps)
    })
  }
}
