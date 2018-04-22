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

      storageTest.initForm();
      storageTest.newProductForm.value.name = 'test name';
      storageTest.newProductForm.value.price = '15';
      storageTest.newProductForm.value.amount = '20';

      storageTest.addNewProduct();
      
      expect(amounts['products']).toEqual(numberOfProducts + 1);

    });

    it('2. should add new product correctly', () => {
      
      
      storageTest.initForm();
      storageTest.newProductForm.value.name = 'test name';
      storageTest.newProductForm.value.price = '15';
      storageTest.newProductForm.value.amount = '20';

      storageTest.addNewProduct();
      
      let testProd = products.pop();
      
      expect(testProd.id > 0).toEqual(true);
      expect(testProd.name).toEqual('test name');
      expect(testProd.price).toEqual(15);
      expect(testProd.amount).toEqual(20);
      
    });

    it('3. should set to zeros field values', () => {
      
      storageTest.initForm();
      storageTest.newProductForm.value.name = 'test name';
      storageTest.newProductForm.value.price = '15';
      storageTest.newProductForm.value.amount = '20';

      storageTest.addNewProduct();
      
      expect(storageTest.newProductForm.value.name).toEqual(['']);
      expect(storageTest.newProductForm.value.price).toEqual([null]);
      expect(storageTest.newProductForm.value.amount).toEqual([null]);

    });

    it('4. should show notification if name of product is empty', () => {
      
      storageTest.initForm();
      storageTest.newProductForm.value.name = '';
      storageTest.newProductForm.value.price = '15';
      storageTest.newProductForm.value.amount = '20';
      storageTest.newProductForm.controls['name'].touched = true;

      expect(storageTest.isControlInvalid(storageTest.newProductForm,'name')).toBeTruthy();

    });  

  }); // end of adding

  describe('Changing', () => {

    it('1. should change the product correctly', () => {
      let indexForTest = 1;

      storageTest.initForm();
      
      storageTest.changeProductForm.value.id = String(indexForTest);
      storageTest.changeProductForm.value.newPrice = '15';
      storageTest.changeProductForm.value.newAmount = '20';

      storageTest.changeProduct();

      let testProd = products[indexForTest - 1];
      
      expect(testProd.id).toEqual(1);
      expect(testProd.price).toEqual(15);
      expect(testProd.amount).toEqual(20);      
    });

  }); // end of changing

  describe('Deleting', () => {

    it('1. should delete the product correctly', () => {

      let indexToDelete : number = 1;
      
      storageTest.deleteProduct(indexToDelete);
      
      expect(products[indexToDelete].id).toEqual(0);
      expect(products[indexToDelete].name).toEqual('Deleted');
      expect(products[indexToDelete].price).toEqual(-1);
      expect(products[indexToDelete].amount).toEqual(-1);
    });

  });


});
