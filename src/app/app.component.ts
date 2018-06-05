import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { query } from '@angular/animations';
import { createNgModule } from '@angular/compiler/src/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { amounts, moneyStream, orders, products } from '../app/data';
import { AmountCounter, FireCrm, MoneyOperation, Order, Product} from '../app/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  @Input() products: Product[];
  @Input() moneyStream : MoneyOperation[];
  @Input() orders : Order[];
  @Input() amounts : AmountCounter;

  crmDoc : AngularFirestoreDocument<FireCrm>;
  crm : Observable<FireCrm>;

  constructor(private afs: AngularFirestore) {};

  ngOnInit() {

    this.crmDoc = this.afs.doc('crm/2O6FeLOoFWUtbdOkJDWR');
    this.crm = this.crmDoc.valueChanges();

    const sub = this.crm.subscribe(elem => {
      this.products = elem.products;
      this.orders = elem.orders;
      this.moneyStream = elem.moneyStream;
      this.amounts = elem.amounts;
      this.updateFire();
      sub.unsubscribe();
    });
  }

  updateFire(): void {
    setInterval(async () => this.crmDoc.set({
      products,
      amounts,
      orders,
      moneyStream
    }), 2000);
  }

}
