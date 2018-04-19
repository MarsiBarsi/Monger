import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { query } from '@angular/animations';


declare let $:any;


export interface Product {
  id : number,
  name : string,
  price : number,
  amount : number
};

export let products : Array<Product> = [
  {
    id : 1,
    name : 'товар 1',
    price : 4,
    amount : 15
  },
  {
    id : 2,
    name : 'товар 2',
    price : 7,
    amount : 5
  }
];

export interface MoneyOperation {
  id : number,
  date : Date,
  name : string,
  income : number
};

export let moneyStream : Array<MoneyOperation> = [
  {
    id : 1,
    date : new Date(2018, 0, 1, 0, 0, 0, 0),
    name : 'прибыль от продажи',
    income : 100
  },
  {
    id : 2,
    date : new Date(2018, 0, 2, 0, 0, 0, 0),
    name : 'выплата зарплат',
    income : -50
  }
];

interface Order {
    id : number,
    date : Date,
    products : Object // product_id = amount
}

export let orders : Array<Order> = [
  {
    id : 1,
    date : new Date(2018, 0, 1, 0, 0, 0, 0),
    products : { 1 : 2 }
  },
  {
    id : 2,
    date : new Date(),
    products : { 1 : 1, 2 : 3 }
  }
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

    this.productsCollection = this.afs.collection('products');
    this.prods = this.productsCollection.valueChanges();
    this.snapshot = this.productsCollection.snapshotChanges();
    
    this.prods.subscribe(elem => console.log(elem));
    
    /*for (let key in this.prods) {
      products.push(this.prods[key]);
      console.log(this.prods[key]);
    } */

   /* this.prods.forEach(element => {
      if (element[0]) {
        products.push(element[0][0]);
      }
      console.log(element[0]);
    }); */
    
  }

  

}
