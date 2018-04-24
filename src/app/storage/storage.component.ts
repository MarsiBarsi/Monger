import { BrowserModule } from '@angular/platform-browser'; 
import { Component, OnInit, ApplicationInitStatus, Input } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormControl, Validators, Form } from '@angular/forms'
import { products, amounts,AmountCounter, Product } from '../app.component'
import { FormGroup, FormBuilder } from '@angular/forms';

declare let $:any;

declare interface StorageTableData {
    headerRow: string[];
    dataRows : Array<Product>;
}

declare interface Inputs{
    name : string,
    controlName : string,
    wrongMes : string
}


@Component({
    selector: 'storage-cmp',
    moduleId: module.id,
    templateUrl: 'storage.component.html'
})


export class StorageComponent implements OnInit {
    @Input() products : Product[];
    @Input() amounts : AmountCounter;

    public newProductForm : FormGroup;
    public changeProductForm : FormGroup;

    constructor(private fb: FormBuilder){}

    public addFormInfo : Inputs[] = [
        {
            name : 'Имя товара',
            controlName : 'name',
            wrongMes : 'Задано пустое имя'
        },
        {
            name : 'Стоимость',
            controlName : 'price',
            wrongMes : 'стоимость не может быть отрицательной'
        },
        {
            name : 'Количество',
            controlName : 'amount',
            wrongMes : 'количество не может быть отрицательным'
        },
    ];

    public changeFormInfo : Inputs[] = [
        {
            name : 'Артикул товара',
            controlName : 'id',
            wrongMes : 'Артикул задан некорректно'
        },
        {
            name : 'Новая стоимость',
            controlName : 'newPrice',
            wrongMes : 'стоимость не может быть отрицательной'
        },
        {
            name : 'Новое количество',
            controlName : 'newAmount',
            wrongMes : 'количество не может быть отрицательным'
        },
    ];

    public storageTable: StorageTableData;

    initForm(): void {
        this.newProductForm = this.fb.group({
            name: ['',[Validators.required]],
            price : [null,[Validators.min(0)]],
            amount : [null,[Validators.min(0)]]
        });

        this.changeProductForm = this.fb.group({
            id: [null,[Validators.min(1),Validators.max(amounts.products)]],
            newPrice : [null,[Validators.min(0)]],
            newAmount : [null,[Validators.min(0)]]
        });
    }

    isControlInvalid(form : FormGroup, controlName : string): boolean {
        const control = form.controls[controlName];
        console.log(form.controls[controlName]);
        const result = control.invalid && control.touched;
        return result;
    }

    ngOnInit(){
        this.initForm();
        
        this.storageTable = {
            headerRow: [ 'Артикул', 'Название товара', 'Стоимость', 'Остаток', ''],
            dataRows: products
        };

    };

    addNewProduct(): void {
        products.push({
            id : ++amounts['products'],
            name : this.newProductForm.value.name,
            price : Number(this.newProductForm.value.price),
            amount : Number(this.newProductForm.value.amount)
        });
        
        this.newProductForm.setValue({
            name : [''],
            price : [null],
            amount : [null]
        });  
    }

    deleteProduct(indexOfProd : number): void {
        products[indexOfProd] = {
            id : 0,
            name : 'Deleted',
            price : -1,
            amount : -1
        };
        
    } 

    changeProduct(): void {
        products[Number(this.changeProductForm.value.id - 1)].price = Number(this.changeProductForm.value.newPrice);
        products[Number(this.changeProductForm.value.id - 1)].amount = Number(this.changeProductForm.value.newAmount);
        
        this.changeProductForm.setValue({
            id : [null],
            newPrice : [null],
            newAmount : [null]
        });
    }

    addFieldType(index : number): string {
        if (index == 0){
            return 'text';
        }
        return 'number';
    }

}