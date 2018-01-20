import { Injectable } from "@angular/core";

@Injectable()
export class DataService {
    data: any;

    setData(chartData){
        this.data = chartData;
    }
    
    getData(){
        return this.data;
    }
}