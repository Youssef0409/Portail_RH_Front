import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AttestationComponent } from 'src/app/employee/employee-attestation/attestation/attestation.component';
import { DemandeAttestationService } from 'src/app/services/demande-attestation.service';

@Component({
  selector: 'app-employee-attestation',
  templateUrl: './employee-attestation.component.html',
  styleUrls: ['./employee-attestation.component.scss']
})
export class EmployeeAttestationComponent implements OnInit {
  selectedOption: string = 'En Cours'
 
  ListAttestations:any=[];
  id: any;
  constructor(private snackBar: MatSnackBar,private dialog:MatDialog,private service:DemandeAttestationService){}
  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
       this.id = user.id;
       if (this.selectedOption === 'Valider') {
        this.GetAttestationAccepter(this.id);
        }else if (this.selectedOption === 'Annuler') {
         this.GetAttestationRefuser(this.id);
        } else if (this.selectedOption === 'En Cours') {
          this.GetAttestationEnAttente(this.id);
        }
       
      // Do something with the id_user value
      
    }
    
  }

 


  
  GetAttestationEnAttente(id:number){
    this.service.getDemandesEnCoursByUserId(this.id).subscribe(reps=>{
this.ListAttestations=reps
    })
  }

  onRadioChange() {
    if (this.selectedOption === 'Valider') {
    this.GetAttestationAccepter(this.id);
    }else if (this.selectedOption === 'Annuler') {
     this.GetAttestationRefuser(this.id);
    } else if (this.selectedOption === 'En Cours') {
      this.GetAttestationEnAttente(this.id);
    }
  }

  GetAttestationAccepter(id:number){
    this.service.getDemandesValideesByUserId(this.id).subscribe(reps=>{
this.ListAttestations=reps
    })
  }

  GetAttestationRefuser(id:number){
    this.service.getDemandesAnnuleesByUserId(this.id).subscribe(reps=>{
this.ListAttestations=reps
    })
  }




  update(id:any){
    this.editmode=true;
   this.OpenDialog('1000ms','600ms',id)
   
   
   if (this.selectedOption === 'Valider') {
    this.GetAttestationAccepter(this.id);
    }else if (this.selectedOption === 'Annuler') {
     this.GetAttestationRefuser(this.id);
    } else if (this.selectedOption === 'En Cours') {
      this.GetAttestationEnAttente(this.id);
    }
  }


  editmode:boolean=false;
  OpenDialog(enteranimation: any, exitanimation: any, dataitem: any) {
    this.dialog.open(AttestationComponent, {
        enterAnimationDuration: enteranimation,
        exitAnimationDuration: exitanimation,
        width: '700px',
        data: {
            dataitem: dataitem,
            editmo: this.editmode,
        }
    });
}

}
