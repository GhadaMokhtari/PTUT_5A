import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../../services/evaluation.service';
import { element } from 'protractor';

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.scss']
})
export class GrapheComponent implements OnInit {

  data = [];
  evaluations = [];

  chart = {
    title: 'Evolution de la dépendance du résident',
    type: 'LineChart',
    data: [
    ],
    columnNames: ['Date', 'GIR'],
    options: {
      colors: ['#e0440e'],
      is3D: true,
      hAxis: {
        title: 'Date',
        type: 'date',
      },
      vAxis: {
        title: 'GIR'
      },
    },
    width: 600,
    height: 400
  };


  constructor(public evaluationService: EvaluationService) { }


  ngOnInit(): void {
    this.evaluationService.getAll().subscribe((res: any) => {
      this.evaluations = res;
      console.log('evaluations', res);
      // tslint:disable-next-line:no-shadowed-variable
      res.forEach(element => {
        let date = new Date(element.date);
        console.log(date);
        let chartDate = date.getDate()+"-"+ date.getMonth()+"-"+ date.getFullYear();
        this.data.push([chartDate, element.gir]);
      });
      this.chart.data = [this.data];
      console.log(this.chart.data);
    }, (err) => {
      console.error(err);
    });
  }
}
