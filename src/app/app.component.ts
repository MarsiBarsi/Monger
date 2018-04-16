import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Product {
  id : number,
  name : string,
  price : number,
  amount : number
}



declare let $:any;

export let products : Array<[number,string,number,number]> = [
  // [id,name,price,amount]
  [1, 'товар 1', 4, 12],
  [2, 'товар 2', 23, 15],
];

export let moneyStream : Array<[number,Date,string,number]> = [
  // [id,date,operationName, + or - money]
  [1,new Date(2018, 0, 1, 0, 0, 0, 0),'прибыль от продажи',100],
  [2,new Date(2018, 0, 2, 0, 0, 0, 0),'выплата зарплат',-50]
];

export let orders : Array<[number,Date,Object ]> = [
  // [id,date, {productId : amount}]
  [1,new Date(2018, 0, 1, 0, 0, 0, 0), { 1 : 2} ],
  [2,new Date(), { 1 : 1, 2 : 3 } ]
];

export let amounts : Object = {
  products : 2,
  moneyStream : 2,
  orders : 2
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 

export class AppComponent{
  productsCollection : AngularFirestoreCollection<Product>;
  prods : Observable<Product[]>;
  snapshot : any;

  constructor(private afs: AngularFirestore) {};

  ngOnInit() {
    this.productsCollection = this.afs.collection('amounts');
    this.prods = this.productsCollection.valueChanges();
    this.snapshot = this.productsCollection.snapshotChanges();


    this.prods.forEach(element => {
      if ( element[0]) {
        amounts = element[0];
      }
      console.log(element[0]);
    });
  }

  

}
