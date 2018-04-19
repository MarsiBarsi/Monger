
import { Component, OnInit, ApplicationInitStatus } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { products, amounts, Product, AppComponent,crmDoc,updateFire } from '../app.component'


declare let $:any;

declare interface StorageTableData {
    headerRow: string[];
    dataRows : Array<Product>;
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
                {
                    id : ++amounts['products'],
                    name :  nameOfProduct.value,
                    price :   Number(priceOfProduct.value),
                    amount :  Number(amountOfProducts.value)
                });
            updateFire();
            nameOfProduct.value = '';
            priceOfProduct.value = '';
            amountOfProducts.value = '';
        }
    }

    deleteProduct(elem : HTMLElement) {
        products[~~(elem.children[0].innerHTML) - 1] = {
            id : 0,
            name : '',
            price : 0,
            amount : 0
        };
        updateFire();
    }

    changeProduct(indexOfProduct, newPriceOfProduct,newAmountOfProducts : HTMLInputElement) {
        products[~~indexOfProduct.value - 1].price = Number(newPriceOfProduct.value);
        products[~~indexOfProduct.value - 1].amount = Number(newAmountOfProducts.value);
        updateFire();
        indexOfProduct.value = '';
        newPriceOfProduct.value = '';
        newAmountOfProducts.value = '';
    }


}