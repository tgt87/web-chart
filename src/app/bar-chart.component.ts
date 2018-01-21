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
        time: '1 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 1 pm'
    }, {
        time: '2 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 2 pm'
    }, {
        time: '3 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 3 pm'
    }, {
        time: '4 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 4 pm'
    }, {
        time: '5 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 5 pm'
    }, {
        time: '6 pm', type: 'Gain', value: this.getRandomInt(), category: 'Gain at 6 pm'
    }, {
        time: '1 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 1 pm'
    }, {
        time: '2 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 2 pm'
    }, {
        time: '3 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 3 pm'
    }, {
        time: '4 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 4 pm'
    }, {
        time: '5 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 5 pm'
    }, {
        time: '6 pm', type: 'Loss', value: this.getRandomInt(), category: 'Loss at 6 pm'
    }
];

    public series: Sample[] | GroupResult[];
    public categoryAxis: any = {
        max: 3
    };
    constructor(private dataService: DataService, private router: Router) {
        this.series = groupBy(this.data, [{ field: "type" }]);
    }

  onSeriesClick(data){
    // console.log(Object.getPrototypeOf(data.dataItem));
    this.dataService.setData(Object.getPrototypeOf(data.dataItem));
    this.router.navigateByUrl('/listings');
  }

  getRandomInt() {
    return Math.floor(Math.random() * 30) + 20;
  }
}
