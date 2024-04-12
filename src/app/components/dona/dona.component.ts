import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnChanges {

  @Input() title: string = 'No Title';


  // Doughnut
  @Input('labels') doughnutChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
  ];

  @Input() data = [350, 450, 100];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: this.data,
        backgroundColor: [
          '#6857E6',
          '#009FEE',
          '#F02059'
        ],
      },
    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnChanges(){
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data }],
    };
  } 

}

