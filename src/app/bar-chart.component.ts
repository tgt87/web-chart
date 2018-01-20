import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { groupBy, GroupResult } from '@progress/kendo-data-query';

import { DataService } from './services/data.service';

interface Sample {
    time: string;
    type: string;
    value: number;
    category: string;
}

@Component({
  selector: 'bar-chart',
  templateUrl: './bar-chart.component.html'
})
export class BarChartComponent {
    public data: Sample[] = [{
        time: '7 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 7 pm'
    }, {
        time: '8 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 8 pm'
    }, {
        time: '9 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 9 pm'
    }, {
        time: '7 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 7 pm'
    }, {
        time: '8 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 8 pm'
    }, {
        time: '9 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 9 pm'
    }];

    public series: Sample[] | GroupResult[];

    constructor(private dataService: DataService, private router: Router) {
        this.series = groupBy(this.data, [{ field: "type" }]);
    }

  onSeriesClick(data){
    console.log(Object.getPrototypeOf(data.dataItem));
    this.dataService.setData(Object.getPrototypeOf(data.dataItem));
    this.router.navigateByUrl('/listings');
  }

  getRandomInt() {
    return Math.floor(Math.random() * 30) + 20;
  }
}
