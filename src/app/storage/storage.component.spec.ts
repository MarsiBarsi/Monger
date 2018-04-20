import { TestBed, async } from '@angular/core/testing';
import { StorageComponent } from './storage.component'
import { products, amounts } from '../app.component'
import { FormBuilder } from '@angular/forms';


describe('StorageComponent', () => { 
  let storageTest;
  let arg = new FormBuilder();
  beforeEach(() => {
    storageTest = new StorageComponent(arg);
  });
  
  describe('Adding', () => {
    

    it('1. should count amount by adding new product', () => {
      
      let numberOfProducts = amounts['products'];
      let [nameOfProduct,priceOfProduct,amountOfProducts] = [{},{},{}];

      nameOfProduct['value'] = 'testProduct';
      priceOfProduct['value'] = '14';
      amountOfProducts['value'] = '10';
      storageTest.addNewProduct(nameOfProduct,priceOfProduct,amountOfProducts);
      
      expect(amounts['products']).toEqual(numberOfProducts + 1);

    });

    it('2. should add new product correctly', () => {
      
      
      let [nameOfProduct,priceOfProduct,amountOfProducts] = [{},{},{}];

      nameOfProduct['value'] = 'testProduct 2';
      priceOfProduct['value'] = '5';
      amountOfProducts['value'] = 'test';
      storageTest.addNewProduct(nameOfProduct,priceOfProduct,amountOfProducts);
      
      let testProd = products.pop();
      
      expect(testProd[0] > 0).toEqual(true);
      expect(testProd[1]).toEqual('testProduct 2');
      expect(testProd[2]).toEqual(5);
      expect(testProd[3]).toEqual(NaN);
      
    });

    it('3. should set to zeros field values', () => {
      
      
      let [nameOfProduct,priceOfProduct,amountOfProducts] = [{},{},{}];

      nameOfProduct['value'] = 'testProduct 2';
      priceOfProduct['value'] = '5';
      amountOfProducts['value'] = 'test';
      storageTest.addNewProduct(nameOfProduct,priceOfProduct,amountOfProducts);
      
      expect(nameOfProduct['value']).toEqual('');
      expect(priceOfProduct['value']).toEqual('');
      expect(amountOfProducts['value']).toEqual('');

    });

    it('4. should show notification if name of product is empty', () => {
      
      
      let [nameOfProduct,priceOfProduct,amountOfProducts] = [{},{},{}];

      nameOfProduct['value'] = '';
      priceOfProduct['value'] = '5';
      amountOfProducts['value'] = 'test';
      storageTest.addNewProduct(nameOfProduct,priceOfProduct,amountOfProducts);
      
      expect(storageTest.statusesWrong).toBeTruthy();

    });
    
  }); // end of adding

  describe('Changing', () => {

    it('1. should change the product correctly', () => {
      
      
      let [indexOfProduct, newPriceOfProduct,newAmountOfProducts] = [{},{},{}];

      indexOfProduct['value'] = '2';
      let indexForTest = 2;
      newPriceOfProduct['value'] = '55';
      newAmountOfProducts['value'] = '10';

      
      storageTest.changeProduct(indexOfProduct, newPriceOfProduct,newAmountOfProducts);
      
      let testProd = products[indexForTest - 1];
      
      expect(testProd[0]).toEqual(2);
      expect(testProd[2]).toEqual(55);
      expect(testProd[3]).toEqual(10);
      
    });

  }); // end of changing

  describe('Deleting', () => {

    it('1. should delete the product correctly', () => {
      
      
      let indexToDelete = 0;
      
      storageTest.deleteProduct(indexToDelete);
      
      expect(products[0]).toEqual([0,'',0,0]);
      
    });

  });


});
