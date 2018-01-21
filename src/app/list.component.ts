import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { DataService } from './services/data.service';

@Component({
  selector: 'list',
  template: `
        <div (swiperight)="swipe($event.type)">
            <h1>{{title}}</h1>
            <ul>
                <li *ngFor="let fruit of fruitList">{{fruit}}</li>
            </ul>
            <br>
            <button (click)="back()">Back to charts</button>
        </div>    
  `
})
export class ListComponent {
    title: string = "List of fruits";
    fruitList = ["fruit 1", "fruit 2", "fruit 3","fruit 4", "fruit 5", "fruit 6", "fruit 7", "fruit 8", "fruit 9", "fruit 10"];
    constructor(private dataService: DataService, private location: Location){
        this.title = dataService.getData().category;
    }

    back(){
        this.location.back();
    }

    swipe(action){
        if(action === 'swiperight'){
            this.location.back();
        }
    }
}