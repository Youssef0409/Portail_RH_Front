import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartDataPoint } from 'src/app/models/chart';
import { DemandeCongeService } from 'src/app/services/demande-conge.service';
import { ChartTypeRegistry } from 'chart.js/auto'; // Import the ChartTypeRegistry
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DemandeAvanceSalaireService } from 'src/app/services/demande-avance-salaire.service';
import { DemandeAttestationService } from 'src/app/services/demande-attestation.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
  @ViewChild('chartCanvas') chartCanvas: ElementRef;
  chartData: any[];
  chartData1: any[];
  chartData2: any[];
  chartOptions: any;
  chartOptions1: any;
  chartOptions2: any;
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private congeService: DemandeCongeService,private avaceSalaire: DemandeAvanceSalaireService,private attestation:DemandeAttestationService) {}

  ngOnInit(): void {
    this.congeService.getStatistique().subscribe(data => {
      this.chartData = Object.entries(data).map(([name, value]) => ({
        name: name,
        value: value
      }));
    });

    this.chartOptions = {
      view: [800, 400],
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: true,
      showXAxisLabel: true,
      xAxisLabel: 'Users',
      showYAxisLabel: true,
      yAxisLabel: 'Nbr Demande Congé',
      chartTitle: 'Demande Congé'
    };



    this.attestation.getStatistique().subscribe(data => {
      this.chartData1 = Object.entries(data).map(([name, value]) => ({
        name: name,
        value: value
      }));
    });

    this.chartOptions1 = {
      view: [800, 400],
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: true,
      showXAxisLabel: true,
      xAxisLabel: 'Users',
      showYAxisLabel: true,
      yAxisLabel: 'Nbr Attestation',
      chartTitle: 'Demande Attestation'
    };




    this.avaceSalaire.getStatistique().subscribe(data => {
      this.chartData2 = Object.entries(data).map(([name, value]) => ({
        name: name,
        value: value
      }));
    });

    this.chartOptions2 = {
      view: [800, 400],
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: true,
      showXAxisLabel: true,
      xAxisLabel: 'Users',
      showYAxisLabel: true,
      yAxisLabel: 'Nbr Avance Saliare',
      chartTitle: 'Demandes Avances Salaire'
    };
  }













  }

  
