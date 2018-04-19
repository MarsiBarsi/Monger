
import { Component, OnInit } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { moneyStream,amounts, MoneyOperation } from '../app.component'


declare interface CashboxTableData {
    headerRow: string[];
    dataRows: Array<MoneyOperation>; // id,операция,доход или убыток
}

@Component({
    selector: 'cashbox-cmp',
    moduleId: module.id,
    templateUrl: 'cashbox.component.html'
})

export class CashboxComponent{    
    statusesWrong = false;

    moneyStream = moneyStream;
    public cashboxTable: CashboxTableData;
    
    income : number = 0
    expense : number = 0;

    
    ngOnInit(){
         this.cashboxTable = {
             headerRow: [ '#', 'дата', 'Операция', 'Баланс'],
             dataRows: moneyStream
         };
         
         for (let elem of this.cashboxTable.dataRows) {
             if (elem.income > 0) {
                 this.income += elem.income;
             } else {
                 this.expense += -(elem.income);
             }         
         }
         
    };

    showNotification() {
        this.statusesWrong = true;
        setTimeout( () => {
            this.statusesWrong = false;
        },2000);
    };

    addNewOperation(nameOfOperation, changeOfBalance : HTMLInputElement) {
        if (!nameOfOperation.value) {
            this.showNotification();
        } else {
            moneyStream.push({
                id : ++amounts['moneyStream'],
                date : new Date(),
                name : nameOfOperation.value,
                income : Number(changeOfBalance.value)
            });
            
            if (Number(changeOfBalance.value) > 0) {
                this.income += Number(changeOfBalance.value);
            } else {
                this.expense += -(Number(changeOfBalance.value));
            }
    
            nameOfOperation.value = '';
            changeOfBalance.value = '';
        }

    };

}
