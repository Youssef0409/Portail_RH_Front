import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { DemandeAttestationService } from 'src/app/services/demande-attestation.service';

@Component({
  selector: 'app-attestion',
  templateUrl: './attestion.component.html',
  styleUrls: ['./attestion.component.scss']
})
export class AttestionComponent implements OnInit{
  respdata: any;
  ListAttestations: any;
  constructor(public dialogRef: MatDialogRef<AttestionComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any,private snackBar: MatSnackBar,private dialog:MatDialog,private service:DemandeAttestationService) { }
  ngOnInit(): void {
    console.log(this.dialogData.dataitem)
  }


  Annulerdemande(id:number){
    this.service.refuserAttestationTravail(this.dialogData.dataitem.id).subscribe(res=>{
      this.respdata = res;
      if (this.respdata) {
        this.dialogRef.close();
        this.showRefuserMessage();
       
      }location.reload();
      
    })

  }

  

  Accepterdemande(id:number){
    this.service.validerAttestationTravail(this.dialogData.dataitem.id).subscribe(res=>{
      this.respdata = res;
      if (this.respdata) {
        this.dialogRef.close();
        this.showSuccessMessage();
      }
      location.reload();
    })

  }

  showSuccessMessage() {
    const config = new MatSnackBarConfig();
    config.duration = 3000; // Duration in milliseconds
    config.horizontalPosition = 'center'; // Set the horizontal position to center
    config.verticalPosition = 'top'; // Set the vertical position to top
  
    this.snackBar.open('Attestation Validé', 'Close', config);
  }

  showRefuserMessage() {
    const config = new MatSnackBarConfig();
    config.duration = 3000; // Duration in milliseconds
    config.horizontalPosition = 'center'; // Set the horizontal position to center
    config.verticalPosition = 'top'; // Set the vertical position to top
  
    this.snackBar.open('Attestation Refusé', 'Close', config);
  }

}
