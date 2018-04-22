import { BrowserModule } from '@angular/platform-browser'; 
import { Component, OnInit } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormGroup,  FormBuilder, FormControl, Validators } from '@angular/forms'
import { moneyStream,amounts, MoneyOperation } from '../app.component'

declare interface Inputs {
    name : string,
    controlName : string,
    wrongMes : string
}

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

    public CashboxForm : FormGroup;
    constructor(private fb: FormBuilder){}

    public CashboxFormInfo : Inputs[] = [
        {
            name : 'Название операции',
            controlName : 'name',
            wrongMes : 'Задано пустое имя'
        },
        {
            name : 'Изменение баланса',
            controlName : 'income',
            wrongMes : 'введено некорректно'
        }
    ];

    moneyStream = moneyStream;
    public cashboxTable: CashboxTableData;
    
    income : number = 0
    expense : number = 0;

    initForm(): void {
        this.CashboxForm = this.fb.group({
            name: ['',[Validators.required]],
            income : [null]
        });
    }
    
    ngOnInit(){
        this.initForm();
        
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

    isControlInvalid(form : FormGroup, controlName : string): boolean {
        const control = form.controls[controlName];
        const result = control.invalid && control.touched;
        return result;
    }

    addNewOperation() : void {
        moneyStream.push({
            id : ++amounts['moneyStream'],
            date : new Date(),
            name : this.CashboxForm.value.name,
            income : Number(this.CashboxForm.value.income)
        });
        
        if (Number(this.CashboxForm.value.income) > 0) {
            this.income += Number(this.CashboxForm.value.income);
        } else {
            this.expense += -(Number(this.CashboxForm.value.income));
        }

        this.CashboxForm.setValue({
            name : [''],
            income : [null]
        });  
    };

}
