import { async, TestBed } from '@angular/core/testing';
import { isNumber } from '@swimlane/ngx-charts/release/utils';
import { orders } from '../data';
import { Order } from '../interfaces';
import { RouteInfo, ROUTES, SidebarComponent } from '../sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
  let dashboardTest : DashboardComponent;
  beforeEach(() => {
    dashboardTest = new DashboardComponent();
  });

  describe('ordersFromToday()', () => {

    it('1. should return array with numbers and length 6', () => {

      const testArr : number[] = dashboardTest.ordersFromToday();
      let status = true;

      if (testArr.length !== 6) {
        status = false;
      } else {
        status = testArr.every(elem => isNumber(elem));
      }

      expect(status).toBeTruthy();

    });
  });

  describe('menuCreating()', () => {

    it('1. should generate right paths', () => {

      dashboardTest.menuCreating();

      expect(dashboardTest.menuItems[0].path.slice(0, 3)).toEqual('../');
    });
  });


});

