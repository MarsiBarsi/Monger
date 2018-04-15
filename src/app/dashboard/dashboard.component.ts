import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { SidebarComponent, RouteInfo, ROUTES } from '../sidebar/sidebar.component';
import { orders } from '../app.component';

declare let $:any;

const iconClasses : string[] = [
  'icon-big icon-warning text-center',
  'icon-big icon-success text-center',
  'icon-big icon-danger text-center',
  'icon-big icon-info text-center'
];

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  
  public menuItems: any[] = [
    
  ];

  ordersFromToday() {
    let now : Date = new Date();
    let outAmount : number[] = [0,0,0,0,0,0]; // 9-12-15-18-21-24
    let array = new Array();
    array = orders;
    array.forEach( elem => {
      if (Number(now) - Number(elem[1]) < 86400000) {
        let hour : number = Number(elem[1].getHours);
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

  ngOnInit(){
      for (let i = 1; i < ROUTES.length - 1; i++) {
        this.menuItems[i - 1] = {
          iconClass : iconClasses[i - 1],
          icon : ROUTES[i].icon,
          path : '../' + ROUTES[i].path,
          title : ROUTES[i].title
        };
      }

       
      //console.log(this.ordersFromToday());

      let dataSales = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM'],
        series: [
          this.ordersFromToday()
        ]
      };

      let optionsSales = {
        low: 0,
        high: (this.ordersFromToday())['total'] + 10 ,
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
