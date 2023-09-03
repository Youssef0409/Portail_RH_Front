import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DemandeAttestationService } from 'src/app/services/demande-attestation.service';
import { AttestionComponent } from '../../gestion-demande-attestation/attestion/attestion.component';

@Component({
  selector: 'app-salaire-info',
  templateUrl: './salaire-info.component.html',
  styleUrls: ['./salaire-info.component.scss']
})
export class SalaireInfoComponent {
  respdata: any;
  ListAttestations: any;
  constructor(public dialogRef: MatDialogRef<SalaireInfoComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any,private snackBar: MatSnackBar,private dialog:MatDialog) { }
  ngOnInit(): void {
    console.log(this.dialogData.dataitem)
  }



  
}
