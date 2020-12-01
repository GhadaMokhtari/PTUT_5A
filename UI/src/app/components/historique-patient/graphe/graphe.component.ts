import {Component, OnInit} from '@angular/core';
import {EvaluationService} from '../../../services/evaluation.service';
import {element} from 'protractor';

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.scss']
})
export class GrapheComponent implements OnInit {

  data = [];
  evaluations = [];

  chart = {
    title : 'Evolution de la dépendance du résident',
    type : 'LineChart',
    data : [
    ],
    columnNames : ['Date', 'GIR'],
    options : {
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'], is3D: true
    },
    width : 600,
    height : 400
  };


  constructor(public evaluationService: EvaluationService) { }


  ngOnInit(): void {
    this.evaluationService.getAll().subscribe((res: any) => {
      this.evaluations = res;
      console.log('evaluations', res);
       // tslint:disable-next-line:no-shadowed-variable
      res.forEach(element => {
        const date = new Date();
        const dd = date.getDay() + '-' + date.getMonth() + '-' + date.getFullYear();
        this.data.push([date, element.gir]);
      });
      console.log('data', this.data);
      this.chart.data = [this.data];
    }, (err) => {
      console.error(err);
    });
  }
}
