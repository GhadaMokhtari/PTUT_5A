import { Component, OnInit, ViewChild } from '@angular/core';
import { EvaluationService } from '../../../services/evaluation.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.scss']
})
export class GrapheComponent implements OnInit {


  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'GIR' },
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }
      ],
      yAxes: [
        {
          id: 'y-axis-1',
          position: 'left',
          ticks: {
            beginAtZero: true,
            max: 6,
            min: 0,
            stepSize: 1
          },
          scaleLabel: {
            display: true,
            labelString: 'GIR'
          }
        }
      ]
    },
    annotation: {},
  };

  public lineChartColors: Color[] = [
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(
    public evaluationService: EvaluationService,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.evaluationService.getByPatient(id).subscribe((evaluations: any) => {
      // tslint:disable-next-line:no-shadowed-variable
      evaluations.forEach(element => {
        let date = new Date(element.date);
        let chartDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        this.lineChartData[0].data.push(element.gir);
        this.lineChartLabels.push(chartDate);
      });
      // this.chart.data = [this.data];
      // console.log(this.chart.data);
      this.chart.update()
    }, (err) => {
      console.error(err);
    });
  }
}
