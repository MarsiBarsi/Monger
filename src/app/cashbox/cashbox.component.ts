import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,  FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TableData } from '../stats/stats.component';

import { amounts, moneyStream } from '../data';
import { AmountCounter, Inputs, MoneyOperation } from '../interfaces';


declare interface CashboxTableData {
    headerRow: string[];
    dataRows: MoneyOperation[]; // id,операция,доход или убыток
}

@Component({
    selector: 'cashbox-cmp',
    moduleId: module.id,
    templateUrl: 'cashbox.component.html'
})

export class CashboxComponent{
    @Input() amounts : AmountCounter;
    @Input() moneyStream : MoneyOperation[];

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

    public cashboxTable: CashboxTableData;

    income = 0;
    expense = 0;

    initForm(): void {
        this.CashboxForm = this.fb.group({
            name: ['', [Validators.required]],
            income : [null]
        });
    }

    ngOnInit(){
        this.initForm();

        this.cashboxTable = {
            headerRow: [ '#', 'дата', 'Операция', 'Баланс'],
            dataRows: moneyStream
        };

        for (const elem of this.cashboxTable.dataRows) {
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
