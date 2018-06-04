import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { query } from '@angular/animations';
import { createNgModule } from '@angular/compiler/src/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Product, MoneyOperation, Order, AmountCounter, FireCrm} from '../app/interfaces';
import { products, moneyStream, orders, amounts } from '../app/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  @Input() products: Array<Product>;
  @Input() moneyStream : Array<MoneyOperation>;
  @Input() orders : Array<Order>;
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
      products : products,
      amounts : amounts,
      orders : orders,
      moneyStream : moneyStream
    }), 2000);
  }

}
