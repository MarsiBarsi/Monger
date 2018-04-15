import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { amounts,orders, products } from '../app.component';

import {NgxChartsModule} from '@swimlane/ngx-charts';

export let data = [];


export declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'stats-cmp',
    moduleId: module.id,
    templateUrl: 'stats.component.html'
})

export class StatsComponent implements OnInit{
    
    single: any[];
    multi: any[];
    
    view: any[] = [$(this).parent().width(),$(this).parent().height()];
  
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };
  
    constructor() {
      Object.assign(this, {data})   
    }
    
    onSelect(event) {
      console.log(event);
    }
    

    public tableData1: TableData;
    ordersFromToday() {
        let now : Date = new Date();
        let outAmount : number[] = [0,0,0,0,0,0]; // 9-12-15-18-21-24
        
        orders.forEach( elem => {
          if (Number(now) - Number(elem[1]) < 86400000) { // from the last day 
            let hour : number = elem[1].getHours();
            if (hour <= 16) { // 9-12-15
              if (hour >= 14) {
                outAmount[2]++;
              }
              else if (hour >= 11) {
                outAmount[1]++;
              }
              else {
                outAmount[0]++;
              }
            }
            else { // 18-21-24
              if (hour <= 19) {
                outAmount[3]++;
              }
              else if (hour <= 22) {
                outAmount[4]++;
              }
              else {
                outAmount[5]++;
              }
            }
          }
        });
        outAmount['total'] = outAmount.reduce( (sum,elem) => {
          return sum + elem;
        });
        return outAmount;
      }

    selectStatistics(){
        
        let arrayOfProducts = [];

        orders.forEach( elem => {
            for(let key in elem[2]) {
                if( arrayOfProducts[Number(key)]) {
                    arrayOfProducts[Number(key)] += Number(elem[2][key]);
                } 
                else {
                    arrayOfProducts[Number(key)] = Number(elem[2][key]);
                }
            }
        });
        let i = 0;
        console.log(arrayOfProducts);
        
        arrayOfProducts.forEach( (elem,index) => {
            data[i] = ({
                name : products[index - 1][1],
                value : elem
            });
            i++;
        });
        
    }
    

    ngOnInit(){
        
        this.selectStatistics();
  
        let dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM'],
          series: [
            this.ordersFromToday()
          ]
        };
  
        let optionsSales = {
          low: 0,
          high: (this.ordersFromToday())['total'] + 5 ,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false,
        };
  
        let responsiveSales: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
  
        new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);
              
      }
  
}
