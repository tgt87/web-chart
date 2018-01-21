import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart.component';
import { BarChartComponent } from './bar-chart.component';
import { ChartComponent } from './chart.component';
import { ListComponent } from './list.component';
import { LineChartComponent } from './line-chart.component'
import { DataService } from './services/data.service';
import 'hammerjs';

const appRoutes: Routes = [
  { path: '', component: ChartComponent, pathMatch: 'full'},
  { path: 'listings', component: ListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    ListComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
