import { Component } from '@angular/core';
import { TableData } from '../stats/stats.component'
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//import * as firebase from 'firebase/app';
//import { firebaseConfig } from '../app.module'

declare let $:any;
/*
interface DataRow {
    id: number,
    name: string,
    price: number,
    amuount: number
} */

declare interface StorageTableData {
    headerRow: string[];
    dataRows: Array<[number,string,number,number]>;
}

@Component({
    selector: 'storage-cmp',
    moduleId: module.id,
    templateUrl: 'storage.component.html'
})

export class StorageComponent{
  /*  productsCollection : AngularFirestoreCollection<DataRow>;
    products : Observable<DataRow[]>

    constructor(private afs: AngularFirestore) { };
*/

    public amount : number = 3;
    public storageTable: StorageTableData;
    
    ngOnInit(){
       
       /// this.productsCollection = this.afs.collection('crm');
      //  this.products = this.productsCollection.valueChanges()

       // console.log( this.productsCollection,this.products );

        this.storageTable = {
            headerRow: [ 'Артикул', 'Название товара', 'Стоимость', 'Остаток', ''],
            dataRows: 
             [
                [1, 'товар 1', 4, 12],
                [2, 'товар 2', 23, 15],
            ] 
        };
        
    };

    addNewProduct(nameOfProduct, priceOfProduct,amountOfProducts : HTMLInputElement) {
       

        this.storageTable.dataRows.push(
            [this.amount,
                nameOfProduct.value,
                Number(priceOfProduct.value),
                Number(amountOfProducts.value)]);
        this.amount++;
        nameOfProduct.value = '';
        priceOfProduct.value = '';
        amountOfProducts.value = '';
    }

    deleteProduct(elem : HTMLElement) {
       elem.parentElement.children[~~(elem.children[0].innerHTML) - 1].innerHTML = '';
       delete this.storageTable.dataRows[~~(elem.children[0].innerHTML) - 1];
    }
}
