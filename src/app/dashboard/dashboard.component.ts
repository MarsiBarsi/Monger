import { Component, Input, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { orders } from '../data';
import { Order } from '../interfaces';
import { RouteInfo, ROUTES, SidebarComponent } from '../sidebar/sidebar.component';

interface RouteInfoWithIcon extends RouteInfo{
  iconClass : string;
}

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
  @Input() orders : Order[];

  public menuItems: RouteInfoWithIcon[] = [ ];

  ordersFromToday(): number[] {
    const now : Date = new Date();
    const outAmount : number[] = [0, 0, 0, 0, 0, 0]; // 9-12-15-18-21-24

    orders.forEach( elem => {
      if (Number(now) - Number(elem.date) < 86400000) { // from the last day
        const hour : number = elem.date.getHours();
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
    outAmount['total'] = outAmount.reduce( (sum, elem) => {
      return sum + elem;
    });
    return outAmount;
  }

  menuCreating(): void {
    for (let i = 1; i < ROUTES.length - 1; i++) {
      this.menuItems[i - 1] = {
        iconClass : iconClasses[i - 1],
        icon : ROUTES[i].icon,
        path : '../' + ROUTES[i].path,
        title : ROUTES[i].title
      };
    }
  }

  ngOnInit(){
    this.menuCreating();

    const dataSales = {
      labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM'],
      series: [
        this.ordersFromToday()
      ]
    };

    const optionsSales = {
      low: 0,
      high: (this.ordersFromToday())['total'] + 5 ,
      showArea: true,
      height: '245px',
      axisX: {
        showGrid: false,
      },
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      showLine: true,
      showPoint: false,
    };

    const responsiveSales: any[] = [
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
