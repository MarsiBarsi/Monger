import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';


declare let $:any;

export let products : Array<[number,string,number,number]> = [
  // [id,name,price,amount]
  [1, 'товар 1', 4, 12],
  [2, 'товар 2', 23, 15],
];

export let moneyStream : Array<[number,Date,string,number]> = [
  // [id,date,operationName, + or - money]
  [1,new Date(2018, 0, 1, 0, 0, 0, 0),'прибыль от продажи',100],
  [2,new Date(2018, 0, 2, 0, 0, 0, 0),'выплата зарплат',-50]
];

export let orders : Array<[number,Date,Object ]> = [
  // [id,date, {productId : amount}]
  [1,new Date(2018, 0, 1, 0, 0, 0, 0), { 1 : 2} ],
  [2,new Date(), { 1 : 1, 2 : 3 } ]
];

export let amounts : Object = {
  products : 2,
  moneyStream : 2,
  orders : 2
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 

export class AppComponent{
 
}
