import { Component } from '@angular/core';

@Component({
    selector: 'line-chart',
    template: `
        <kendo-chart [transitions]="false">
        <kendo-chart-title text="Update"></kendo-chart-title>
          <kendo-chart-series>
            <kendo-chart-series-item type="line" [data]="seriesData">
            </kendo-chart-series-item>
          </kendo-chart-series>
        </kendo-chart>
    `
})
export class LineChartComponent {
    public seriesData: number[] = [];

    constructor() {
        setInterval(() => {
            // Clone the array
            const data = this.seriesData.slice(0);

            // Produce one random value each 1000ms
            data.push(Math.random());

            if (data.length > 10) {
                // Keep only 10 items in the array
                data.shift();
            }

            // Replace with the new array instance
            this.seriesData = data;
        }, 1000);
    }
}
