import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { query } from '@angular/animations';
import { createNgModule } from '@angular/compiler/src/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

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

export interface Order {
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

export interface AmountCounter {
  products : number,
  moneyStream : number,
  orders : number
} 

export let amounts : AmountCounter = {
  products : 2,
  moneyStream : 2,
  orders : 2, 
}

interface FireCrm {
  amounts : AmountCounter,
  products : Array<Product>,
  moneyStream : Array<MoneyOperation>,
  orders : Array<Order>
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{

  crmDoc : AngularFirestoreDocument<FireCrm>;
  crm : Observable<FireCrm>;

  constructor(private afs: AngularFirestore) {};
  
  ngOnInit() {
    
    this.crmDoc = this.afs.doc('crm/2O6FeLOoFWUtbdOkJDWR');
    this.crm = this.crmDoc.valueChanges();

    let sub = this.crm.subscribe(elem => {
      products = elem.products;
      orders = elem.orders;
      moneyStream = elem.moneyStream;
      amounts = elem.amounts;
      this.updateFire();
      sub.unsubscribe();
    });    
  }

  updateFire(): void {
    setInterval(async () => this.crmDoc.set({
      products : products,
      amounts : amounts,
      orders : orders,
      moneyStream : moneyStream
    }), 2000);
  }

}
