import { async, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Form, FormControl, Validators } from '@angular/forms';
import { amounts, products } from '../data';
import { AmountCounter, Inputs, Product } from '../interfaces';
import { StorageComponent } from './storage.component';



describe('StorageComponent', () => {
  let storageTest : StorageComponent;
  const arg = new FormBuilder();
  beforeEach(() => {
    storageTest = new StorageComponent(arg);
  });

  describe('Adding', () => {


    it('1. should count amount by adding new product', () => {

      const numberOfProducts : number = amounts['products'];

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

      const testProd : Product = products.pop();

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

      expect(storageTest.isControlInvalid(storageTest.newProductForm, 'name')).toBeTruthy();

    });

  }); // end of adding

  describe('Changing', () => {

    it('1. should change the product correctly', () => {
      const indexForTest = 1;

      storageTest.initForm();

      storageTest.changeProductForm.value.id = String(indexForTest);
      storageTest.changeProductForm.value.newPrice = '15';
      storageTest.changeProductForm.value.newAmount = '20';

      storageTest.changeProduct();

      const testProd : Product = products[indexForTest - 1];

      expect(testProd.id).toEqual(1);
      expect(testProd.price).toEqual(15);
      expect(testProd.amount).toEqual(20);
    });

  }); // end of changing

  describe('Deleting', () => {

    it('1. should delete the product correctly', () => {

      const indexToDelete = 1;

      storageTest.deleteProduct(indexToDelete);

      expect(products[indexToDelete].id).toEqual(0);
      expect(products[indexToDelete].name).toEqual('Deleted');
      expect(products[indexToDelete].price).toEqual(-1);
      expect(products[indexToDelete].amount).toEqual(-1);
    });

  });

  describe('addFieldType() -> types for the add form', () => {

    it('1. should return "text" for first field and "number" for other', () => {

      const testText : string = storageTest.addFieldType(0);
      const testNum : string = storageTest.addFieldType(22);

      expect(testText).toEqual('text');
      expect(testNum).toEqual('number');
    });

  });

  describe('isControlInvalid() -> showing of notifications', () => {

    it('1. should return false for untouched form', () => {
      const controlName = 'name';
      storageTest.initForm();
      storageTest.newProductForm.controls[controlName].touched = false;

      expect(storageTest.isControlInvalid(storageTest.newProductForm, controlName)).toBeFalsy();

    });

  });

});
