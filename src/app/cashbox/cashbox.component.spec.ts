import { TestBed, async } from '@angular/core/testing';
import { CashboxComponent } from './cashbox.component';
import { moneyStream, amounts } from '../data';
import { MoneyOperation, AmountCounter, Inputs } from '../interfaces';
import { FormGroup, FormBuilder } from '@angular/forms';


describe('CashboxComponent', () => {
  let cashboxTest : CashboxComponent;
  const arg = new FormBuilder();
  beforeEach(() => {
    cashboxTest = new CashboxComponent(arg);
  });

  describe('Adding new operation', () => {

    it('1. should add a new operation to the money stream', () => {
      const savedAmount : number = amounts['moneyStream'];

      const savedName = 'test name';
      const savedBalance = '10';

      cashboxTest.initForm();

      cashboxTest.CashboxForm.value.name = savedName;
      cashboxTest.CashboxForm.value.income = savedBalance;

      cashboxTest.addNewOperation();

      expect(moneyStream[savedAmount].name).toEqual(savedName);
      expect(moneyStream[savedAmount].income).toEqual(~~savedBalance);
      expect(amounts['moneyStream']).toEqual(savedAmount + 1);
    });

    it('2. should get ready to the new adding', () => {

      const savedName = 'test name';
      const savedBalance = '10';

      cashboxTest.initForm();

      cashboxTest.CashboxForm.value.name = savedName;
      cashboxTest.CashboxForm.value.income = savedBalance;

      cashboxTest.addNewOperation();

      expect(cashboxTest.CashboxForm.value.name).toEqual(['']);
      expect(cashboxTest.CashboxForm.value.income).toEqual([null]);

    });

    it('3. should inscrease income by positive operation', () => {
      const savedIncome : number = cashboxTest.income;

      const savedName = 'test name';
      const savedBalance = '10';

      cashboxTest.initForm();

      cashboxTest.CashboxForm.value.name = savedName;
      cashboxTest.CashboxForm.value.income = savedBalance;

      cashboxTest.addNewOperation();

      expect(cashboxTest.income).toEqual(savedIncome + Number(savedBalance));

    });

    it('3. should insrease expense by negative operation', () => {
      const savedExpense = cashboxTest.expense;

      const savedName = 'test name';
      const savedBalance = '-10';

      cashboxTest.initForm();

      cashboxTest.CashboxForm.value.name = savedName;
      cashboxTest.CashboxForm.value.income = savedBalance;

      cashboxTest.addNewOperation();

      expect(cashboxTest.expense).toEqual(savedExpense + (-Number(savedBalance)));

    });


  });

});

