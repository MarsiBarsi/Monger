import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { amounts,orders, products, moneyStream } from '../app.component';

import {NgxChartsModule} from '@swimlane/ngx-charts';

export let data : Array<Object> = [];


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
    public wholeStatistics = [
        { 
            mes : 'Всего заказов завершено',
            value  : amounts['orders']
        },
        { 
            mes : 'Всего операций выполнено',
            value  : amounts['moneyStream']
        },
        { 
            mes : 'Типов товаров',
            value  : amounts['products']
        }
    ];

    single: any[];
    multi: any[];
    
    view: any[] = [$(this).parent().width(),$(this).parent().height()];
    

    colorScheme = {
      domain: ['#7fb5b5','#6dae81','#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#ffcc00','#ffad99','#77d4c4']
    };
  
    constructor() {
      Object.assign(this, {data})   
    }
    
    onSelect(event): void {
      //console.log(event);
    }


    selectStatistics(): void {
        
        let arrayOfProducts = [];
        
        orders.forEach( elem => {
            for(let key in elem.products) {
                if( arrayOfProducts[Number(key)]) {
                    arrayOfProducts[Number(key)] += Number(elem.products[key]);
                } 
                else {
                    arrayOfProducts[Number(key)] = Number(elem.products[key]);
                }
            }
        });

        let i = 0;
        console.log(arrayOfProducts);
        
        arrayOfProducts.forEach( (elem,index) => {
            data[i] = {
                name : products[index - 1].name,
                value : elem
            };
            i++;
        });
        
    }
    

    getMainProfit() {
        
        let finalObject = {
          labels : [],
          series : [
              []
            ],
          min : 0,
          max : 0
        };
        //console.log(moneyStream);

        finalObject.series[0][-1] = 0; // for the first iteration
        for (let i = 0; i < moneyStream.length; i++) {
            finalObject.labels.push(moneyStream[i].income);
            finalObject.series[0].push(finalObject.series[0][i - 1] + moneyStream[i].income);
            if (finalObject.series[0][i] < finalObject.min) {
                finalObject.min = finalObject.series[0][i];
            }
            if (finalObject.series[0][i] > finalObject.max) {
                finalObject.max = finalObject.series[0][i];
            }
        }

        if (finalObject.labels.length > 40) {
            for (let i = 0; i < finalObject.labels.length; i++) {
                finalObject.labels[i] = '';
            }
        }
        //console.log(finalObject);
        return finalObject;
    }

    ngOnInit(){
        
        this.selectStatistics();
        
        let dataMoneyStream = this.getMainProfit();
                
        let optionsMoneyStream = {
          low: this.getMainProfit().min - 5,
          high: this.getMainProfit().max + 5 ,
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
    
        let responsiveMoneyStream: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        new Chartist.Line('#chartMoney', dataMoneyStream, optionsMoneyStream, responsiveMoneyStream);
    }
}
