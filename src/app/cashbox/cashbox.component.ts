
import { Component, OnInit } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { moneyStream,amounts } from '../app.component'


declare interface CashboxTableData {
    headerRow: string[];
    dataRows: Array<[number,Date,string,number]>; // id,операция,доход или убыток
}

@Component({
    selector: 'cashbox-cmp',
    moduleId: module.id,
    templateUrl: 'cashbox.component.html'
})

export class CashboxComponent{
    

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
             if (elem[3] > 0) {
                 this.income += elem[3];
             } else {
                 this.expense += -(elem[3]);
             }         
         }
         
    };

    addNewOperation(nameOfOperation, changeOfBalance : HTMLInputElement) {
        moneyStream.push([
            ++amounts['moneyStream'],
            new Date(),
            nameOfOperation.value,
            Number(changeOfBalance.value)
        ]);
        
        if (Number(changeOfBalance.value) > 0) {
            this.income += Number(changeOfBalance.value);
        } else {
            this.expense += -(Number(changeOfBalance.value));
        }

        nameOfOperation.value = '';
        changeOfBalance.value = '';

    };

}
