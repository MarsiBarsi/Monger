import { async, TestBed } from '@angular/core/testing';
import { ServiceComponent } from './service.component';

import { Component } from '@angular/core';
import { amounts, holdedOrders, moneyStream, orders, products } from '../data';
import { AmountCounter, HoldedOrder, MoneyOperation, Order, Product } from '../interfaces';


describe('ServiceComponent', () => {
  let serviceTest : ServiceComponent;
  beforeEach(() => {
    serviceTest = new ServiceComponent();
  });

  describe('Adding to order', () => {

    it('1. should add a product in receipt', () => {
      const idInListTest = 1;

      products[idInListTest].amount = 10;

      serviceTest.plusProduct(idInListTest);

      expect(serviceTest.productsInOrder[idInListTest] > 0).toEqual(true);

    });

    it('2. should inscrease the sum of the order', () => {
      const savedSum = serviceTest.sumOfOrder;

      const idInListTest = 1;

      products[idInListTest].price = 15;
      products[idInListTest].amount = 10;

      serviceTest.plusProduct(idInListTest);

      expect(serviceTest.sumOfOrder).toEqual(savedSum + products[idInListTest].price);
    });

    it('3. should descrease the amount of the products', () => {
      const amountTest = 10;

      const idInListTest = 1;

      products[idInListTest].amount = amountTest;

      serviceTest.plusProduct(idInListTest);

      expect(products[idInListTest].amount).toEqual(amountTest - 1);
    });

  }); // end of adding

  describe('Minus product', () => {

    it('1. should increase the amount of the products', () => {
      const amountTest = 10;

      const idInListTest = 1;

      products[idInListTest].amount = amountTest;
      serviceTest.productsInOrder[idInListTest] = 5;

      serviceTest.minusProduct(idInListTest);

      expect(products[idInListTest].amount).toEqual(amountTest + 1);
    });

    it('2. should decrease the sum of the order', () => {
      const savedSum : number = serviceTest.sumOfOrder;

      const idInListTest = 1;

      products[idInListTest].amount = 10;
      serviceTest.productsInOrder[idInListTest] = 5;

      serviceTest.minusProduct(idInListTest);

      expect(serviceTest.sumOfOrder).toEqual(savedSum - products[idInListTest].price);
    });

    it('3. should remove the product from receipt', () => {
      const amountTest = 5;
      const idInListTest = 1;

      serviceTest.productsInOrder[idInListTest] = amountTest;

      serviceTest.minusProduct(idInListTest);

      expect(serviceTest.productsInOrder[idInListTest]).toEqual(amountTest - 1);

    });

    it('4. should do nothing if the product is not in receipt', () => {

      const idInListTest = 1;

      const savedAmountOfProduct = 10;
      products[idInListTest].amount = savedAmountOfProduct;


      serviceTest.productsInOrder[idInListTest] = 0;

      serviceTest.minusProduct(idInListTest);

      expect(products[idInListTest].amount).toEqual(savedAmountOfProduct);

    });

  });

  describe('Canceling', () => {
    it('1. should cancel the whole order', () => {

      serviceTest.productsInOrder = [10, 20];

      serviceTest.cancel();

      expect(serviceTest.productsInOrder).toEqual([]);

    });

    it('2. should set a zero sum of order', () => {

      serviceTest.sumOfOrder = 500;

      serviceTest.cancel();

      expect(serviceTest.sumOfOrder).toEqual(0);

    });

  });

  describe('Ordering', () => {
    it('1. should get ready to new order', () => {

      serviceTest.productsInOrder = [10, 20];
      serviceTest.sumOfOrder = 500;

      serviceTest.order();

      expect(serviceTest.productsInOrder).toEqual([]);
      expect(serviceTest.sumOfOrder).toEqual(0);
    });

    it('2. should add new elem to the list of orders correctly', () => {
      const ordersSaved : number = amounts['orders'];

      serviceTest.productsInOrder = [10, 20];
      serviceTest.sumOfOrder = 500;

      serviceTest.order();

      expect(amounts['orders']).toEqual(ordersSaved + 1);
      expect(orders[ordersSaved].products).toEqual({ 1 : 10, 2: 20});
    });

    it('3. should add new elem to the money stream correctly', () => {
      const amountSaved : number = amounts['moneyStream'];

      const savedSum : number = serviceTest.sumOfOrder = 500;
      serviceTest.productsInOrder = [10, 20];

      serviceTest.order();

      expect(amounts['moneyStream']).toEqual(amountSaved + 1);
      expect(moneyStream[amountSaved].income).toEqual(savedSum);
    });


  });

  describe('returnHolded', () => {
    it('1. should set the current order correctly', () => {

      const savedSum = 8;
      const savedArray : number[] = [2];

      holdedOrders[0] = {
        sum : savedSum,
        order : savedArray
      };

      serviceTest.returnHolded(0);

      expect(serviceTest.productsInOrder).toEqual(savedArray);
      expect(serviceTest.sumOfOrder).toEqual(savedSum);
    });

    describe('returnHolded', () => {
      it('1. should change holdedOrders', () => {

        const savedSum = 8;
        const savedArray : number[] = [2];

        holdedOrders[0] = {
          sum : savedSum,
          order : savedArray
        };

        serviceTest.returnHolded(0);

        expect(holdedOrders[0].sum).toEqual(0);
        expect(holdedOrders[0].order).toEqual([]);
      });

  });


}); ; ;

