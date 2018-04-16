import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component'
import { amounts,products,orders,moneyStream } from '../app.component'
import { isNumber } from '@swimlane/ngx-charts/release/utils';


describe('DashboardComponent', () => { 
  let dashboardTest; 
  beforeEach(() => {
    dashboardTest = new DashboardComponent();
  });
  
  describe('ordersFromToday()', () => {
    
    it('1. should return array with numbers and length 6', () => {
    
      let testArr = dashboardTest.ordersFromToday();
      let status = true;
      
      if (testArr.length !== 6) {
        status = false;
      } else {
        status = testArr.every(elem => isNumber(elem));
      }

      expect(status).toBeTruthy();

    });

    
  });

  
});

