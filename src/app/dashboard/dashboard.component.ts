import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { SidebarComponent, RouteInfo, ROUTES } from '../sidebar/sidebar.component';

declare let $:any;


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  
  public menuItems: any[];
  

  ngOnInit(){
      this.menuItems = ROUTES;
      
      let dataSales = {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM'],
        series: [
           [100, 120, 115, 150, 160, 145, 90],
          [33, 40, 35, 50, 40, 56, 42],
          [14, 13, 10, 12, 27, 40, 33]
        ]
      };

      let optionsSales = {
        low: 0,
        high: 200,
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
