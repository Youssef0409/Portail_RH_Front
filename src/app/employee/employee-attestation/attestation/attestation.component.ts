import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AttestionComponent } from 'src/app/manager/gestion-demande-attestation/attestion/attestion.component';
import { DemandeAttestationService } from 'src/app/services/demande-attestation.service';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-attestation',
  templateUrl: './attestation.component.html',
  styleUrls: ['./attestation.component.scss']
})
export class AttestationComponent implements OnInit{
  @ViewChild('content', {static:false}) el!: ElementRef
  respdata: any;
  ListAttestations: any;
  constructor(public dialogRef: MatDialogRef<AttestionComponent>,@Inject(MAT_DIALOG_DATA) public dialogData: any,private snackBar: MatSnackBar,private dialog:MatDialog,private service:DemandeAttestationService) { }
  ngOnInit(): void {
    console.log(this.dialogData.dataitem)
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

  makePDf() {
    const element = this.el.nativeElement;
    
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Attestation.pdf');
    });
  }

  
}


