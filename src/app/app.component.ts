import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // data: any = [
  //   { category: 'Orange', value: 10 },
  //   { category: 'Apple', value: 30 },
  //   { category: 'Mangosteen', value: 20 },
  //   { category: 'Blueberry', value: 40 }
  // ]
  // total = 0;
  // pieData: any;
  // constructor(){
  //   for(var i = 0; i < this.data.length; i++){
  //     this.total += this.data[i].value;
  //   }
  //   for(var j = 0; j < this.data.length; j++){
  //     this.data[j].percent = this.data[j].value / this.total;
  //   }
  // }

  // ngOnInit(){
  //   this.pieData = this.data;
  // }
  
  // onSeriesClick(data){
  //   console.log(data)
  // }

  // public labelContent(e: any): string {
  //   return e.percentage * 100 + "%";
  // }
}
