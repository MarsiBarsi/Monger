import { Component } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormGroup, FormControl, Validators } from '@angular/forms'

declare let $:any;

declare interface StorageTableData {
    headerRow: string[];
    dataRows: (string | number)[][];
}

@Component({
    selector: 'storage-cmp',
    moduleId: module.id,
    templateUrl: 'storage.component.html'
})

export class StorageComponent{
    public amount : number = 3;

   /* public storageForm: FormGroup;

    mainStorageForm = new FormGroup({
        name : new FormControl('',[Validators.required, Validators.minLength(3)])
        
    }); */

    vari : string = '';

    public storageTable: StorageTableData;
    
    ngOnInit(){
        this.storageTable = {
            headerRow: [ 'Артикул', 'Название товара', 'Стоимость', 'Остаток', ''],
            dataRows: [
                [1, 'товар 1', 4, 12],
                [2, 'товар 2', 23, 15],
            ]
        };
        
    };

    addNewProduct(nameOfProduct, priceOfProduct,amountOfProducts : HTMLInputElement) {
        this.storageTable.dataRows.push([this.amount,nameOfProduct.value,priceOfProduct.value,amountOfProducts.value]);
        this.amount++;
        nameOfProduct.value = '';
    }

    deleteProduct(elem : any) {
        console.log(elem);
        
       // delete this.storageTable.dataRows[number];
        
    }
}
