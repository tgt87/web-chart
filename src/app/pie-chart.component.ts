import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './services/data.service';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {
  data: any = [
    { category: 'Orange', value: 10 },
    { category: 'Apple', value: 30 },
    { category: 'Mangosteen', value: 20 },
    { category: 'Blueberry', value: 40 }
  ]
  total = 0;
  pieData: any;

  constructor(private dataService: DataService, private router: Router){
    for(var i = 0; i < this.data.length; i++){
      this.total += this.data[i].value;
    }
    for(var j = 0; j < this.data.length; j++){
      this.data[j].percent = this.data[j].value / this.total;
    }
  }

  ngOnInit(){
    this.pieData = this.data;
  }
  
  onSeriesClick(data){
    // console.log(data.dataItem)
    this.dataService.setData(data.dataItem);
    this.router.navigateByUrl('/listings');
  }

  public labelContent(e: any): string {
    return e.percentage * 100 + "%";
  }
}
