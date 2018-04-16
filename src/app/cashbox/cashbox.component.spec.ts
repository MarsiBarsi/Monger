import { TestBed, async } from '@angular/core/testing';
import { CashboxComponent } from './cashbox.component';
import { amounts,products,orders,moneyStream } from '../app.component'


describe('CashboxComponent', () => { 
  let cashboxTest; 
  beforeEach(() => {
    cashboxTest = new CashboxComponent();
  });

  describe('Adding new operation', () => {
    
    it('1. should add a new operation to the money stream', () => {
      let savedAmount = amounts['moneyStream'];

      let savedName = 'test name';
      let savedBalance = '10';

      let nameOfOperation = { value : savedName}
      let changeOfBalance = { value : savedBalance };
      
      
      cashboxTest.addNewOperation(nameOfOperation, changeOfBalance);
    
      expect(moneyStream[savedAmount][2]).toEqual(savedName);
      expect(moneyStream[savedAmount][3]).toEqual(~~savedBalance);
      expect(amounts['moneyStream']).toEqual(savedAmount + 1)
    });

    it('2. should get ready to the new adding', () => {
      
      let savedName = 'test name';
      let savedBalance = '10';

      let nameOfOperation = { value : savedName}
      let changeOfBalance = { value : savedBalance };
      
      cashboxTest.addNewOperation(nameOfOperation, changeOfBalance);

      expect(nameOfOperation.value).toEqual('');
      expect(changeOfBalance.value).toEqual('');

    });

    it('3. should inscrease income by positive operation', () => {
      let savedIncome = cashboxTest.income;

      let savedName = 'test name';
      let savedBalance = '10';

      let nameOfOperation = { value : savedName}
      let changeOfBalance = { value : savedBalance };
      
      cashboxTest.addNewOperation(nameOfOperation, changeOfBalance);
      
      expect(cashboxTest.income).toEqual(savedIncome + Number(savedBalance));

    });

    it('3. should insrease expense by negative operation', () => {
      let savedExpense = cashboxTest.expense;

      let savedName = 'test name';
      let savedBalance = '-10';

      let nameOfOperation = { value : savedName}
      let changeOfBalance = { value : savedBalance };
      
      cashboxTest.addNewOperation(nameOfOperation, changeOfBalance);
      
      expect(cashboxTest.expense).toEqual(savedExpense + (-Number(savedBalance)));

    });


  });
  
});

