
import { Component, OnInit } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { products, amounts } from '../app.component'


declare let $:any;



declare interface StorageTableData {
    headerRow: string[];
    dataRows: Array<[number,string,number,number]>;
}

@Component({
    selector: 'storage-cmp',
    moduleId: module.id,
    templateUrl: 'storage.component.html'
})


export class StorageComponent implements OnInit {
    public statusesWrong : boolean = false;

    public storageTable: StorageTableData;
    

    ngOnInit(){

        this.storageTable = {
            headerRow: [ 'Артикул', 'Название товара', 'Стоимость', 'Остаток', ''],
            dataRows: products
        };
        
    };
    showNotification() {
        this.statusesWrong = true;
        setTimeout( () => {
            this.statusesWrong = false;
        },2000);
    };

    addNewProduct(nameOfProduct, priceOfProduct,amountOfProducts : HTMLInputElement) {
        if (!nameOfProduct.value) {
            this.showNotification();
        } else {
            products.push(
                [++amounts['products'],
                    nameOfProduct.value,
                    Number(priceOfProduct.value),
                    Number(amountOfProducts.value)]);

            nameOfProduct.value = '';
            priceOfProduct.value = '';
            amountOfProducts.value = '';
        }
    }

    deleteProduct(elem : HTMLElement) {
        products[~~(elem.children[0].innerHTML) - 1] = [0,'',0,0];
    }

    changeProduct(indexOfProduct, newPriceOfProduct,newAmountOfProducts : HTMLInputElement) {
        products[~~indexOfProduct.value - 1][2] = Number(newPriceOfProduct.value);
        products[~~indexOfProduct.value - 1][3] = Number(newAmountOfProducts.value);
        
        indexOfProduct.value = '';
        newPriceOfProduct.value = '';
        newAmountOfProducts.value = '';
    }

    
}
