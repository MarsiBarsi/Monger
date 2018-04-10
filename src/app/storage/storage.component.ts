
import { Component, OnInit } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { products, amounts } from '../app.component'

import { AngularFireModule } from 'angularfire2'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//import * as firebase from 'firebase/app';
//import { firebaseConfig } from '../app.module'

declare let $:any;

interface DataRow {
    id: number,
    name: string,
    price: number,
    amuount: number
}

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
    productsCollection : AngularFirestoreCollection<DataRow>;
    products : Observable<DataRow[]>

    constructor(private afs: AngularFirestore) { };


    //public amount : number = 3;
    public storageTable: StorageTableData;
    
    ngOnInit(){
       
        this.productsCollection = this.afs.collection('crm');
        this.products = this.productsCollection.valueChanges()

        console.log( this.productsCollection,this.products );

        this.storageTable = {
            headerRow: [ 'Артикул', 'Название товара', 'Стоимость', 'Остаток', ''],
            dataRows: products
        };
        
    };

    addNewProduct(nameOfProduct, priceOfProduct,amountOfProducts : HTMLInputElement) {
        products.push(
            [++amounts['products'],
                nameOfProduct.value,
                Number(priceOfProduct.value),
                Number(amountOfProducts.value)]);

       

        nameOfProduct.value = '';
        priceOfProduct.value = '';
        amountOfProducts.value = '';
    }

    deleteProduct(elem : HTMLElement) {
        
        products[~~(elem.children[0].innerHTML) - 1] = [0,'',0,0];
    }
}
