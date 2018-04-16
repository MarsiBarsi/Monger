import { TestBed, async } from '@angular/core/testing';
import { ServiceComponent } from './service.component'
import { amounts,products,orders,moneyStream } from '../app.component'


describe('ServiceComponent', () => { 
  let serviceTest; 
  beforeEach(() => {
    serviceTest = new ServiceComponent();
  });
  
  describe('Adding to order', () => {
    
    it('1. should add a product in receipt', () => {
      
      let product = { innerHTML : '1'};
      let idInListTest = Number(product['innerHTML']) - 1;
      
      products[idInListTest][3] = 10;

      serviceTest.plusProduct(product);
      
      expect(serviceTest.productsInOrder[idInListTest] > 0).toEqual(true);

    });

    it('2. should inscrease the sum of the order', () => {
      let savedSum = serviceTest.sumOfOrder;

      let product = {'innerHTML' : '1'};
      let idInListTest = Number(product['innerHTML']) - 1;
      
      products[idInListTest][3] = 10;

      serviceTest.plusProduct(product);
      
      expect(serviceTest.sumOfOrder).toEqual(savedSum + products[idInListTest][2]);
    });

    it('3. should descrease the amount of the products', () => {
      let amountTest = 10;

      let product = {'innerHTML' : '1'};
      let idInListTest = Number(product['innerHTML']) - 1;
      
      products[idInListTest][3] = amountTest;

      serviceTest.plusProduct(product);
      
      expect(products[idInListTest][3]).toEqual(amountTest - 1);
    });

  }); // end of adding

  describe('Minus product', () => {

    it('1. should increase the amount of the products', () => {
      let amountTest = 10;

      let product = {'innerHTML' : '1'};
      let idInListTest = Number(product['innerHTML']) - 1;
      
      products[idInListTest][3] = amountTest;
      serviceTest.productsInOrder[idInListTest] = 5;

      serviceTest.minusProduct(product);
      
      expect(products[idInListTest][3]).toEqual(amountTest + 1);
    });

    it('2. should decrease the sum of the order', () => {
      let savedSum = serviceTest.sumOfOrder;

      let product = {'innerHTML' : '1'};
      let idInListTest = Number(product['innerHTML']) - 1;
      
      products[idInListTest][3] = 10;
      serviceTest.productsInOrder[idInListTest] = 5;

      serviceTest.minusProduct(product);
      
      expect(serviceTest.sumOfOrder).toEqual(savedSum - products[idInListTest][2]);
    });

    it('3. should remove the product from receipt', () => {
      let amountTest = 5;
      let product = { innerHTML : '1'};
      let idInListTest = Number(product['innerHTML']) - 1;
      
      products[idInListTest][3] = 10;
      serviceTest.productsInOrder[idInListTest] = amountTest;

      serviceTest.minusProduct(product);
      
      expect(serviceTest.productsInOrder[idInListTest]).toEqual(amountTest - 1);

    });

    it('4. should do nothing if the product is not in receipt', () => {
      
      let product = { innerHTML : '1'};
      let idInListTest = Number(product['innerHTML']) - 1;
      
      let savedAmountOfProduct = 10;
      products[idInListTest][3] = savedAmountOfProduct;


      serviceTest.productsInOrder[idInListTest] = 0;

      serviceTest.minusProduct(product);
      
      expect(products[idInListTest][3]).toEqual(savedAmountOfProduct);

    });

  });

  describe('Canceling', () => {
    it('1. should cancel the whole order', () => {
      
      serviceTest.productsInOrder = [10,20];

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
      
      serviceTest.productsInOrder = [10,20];
      serviceTest.sumOfOrder = 500;

      serviceTest.order();
      
      expect(serviceTest.productsInOrder).toEqual([]);
      expect(serviceTest.sumOfOrder).toEqual(0);
    });

    it('2. should add new elem to the list of orders correctly', () => {
      let ordersSaved = amounts['orders'];

      serviceTest.productsInOrder = [10,20];
      serviceTest.sumOfOrder = 500;

      serviceTest.order();
      
      expect(amounts['orders']).toEqual(ordersSaved + 1);
      expect(orders[ordersSaved][2]).toEqual({ 1 : 10, 2: 20});
    });

    it('3. should add new elem to the money stream correctly', () => {
      let amountSaved = amounts['moneyStream'];
      
      let savedSum = serviceTest.sumOfOrder = 500;
      serviceTest.productsInOrder = [10,20];
      
      serviceTest.order();
      
      expect(amounts['moneyStream']).toEqual(amountSaved + 1);
      expect(moneyStream[amountSaved][3]).toEqual(savedSum);
    });


  });

  
});

