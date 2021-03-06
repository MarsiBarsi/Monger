import { Component, HostListener, Input, OnInit } from '@angular/core';

import { amounts, holdedOrders, moneyStream, orders, products } from '../data';
import { AmountCounter, HoldedOrder, MoneyOperation, Order, Product } from '../interfaces';

@Component({
    selector: 'service-cmp',
    moduleId: module.id,
    templateUrl: 'service.component.html'
})

export class ServiceComponent implements OnInit{
    @Input() moneyStream : MoneyOperation[];
    @Input() orders : Order[];
    @Input() amounts : AmountCounter;

    holdedOrders : HoldedOrder[] = holdedOrders;
    products : Product[] = products;

    sumOfOrder = 0;
    moneyOfCustomer = 0;

    productsInOrder : number[] = [

    ]; // productsInOrder[id_товара] = кол-во товара

    ngOnInit(){
    }

    minusProduct(idInList : number): void {
        if (this.productsInOrder[idInList] > 0) {
            this.productsInOrder[idInList]--;
            this.sumOfOrder -= products[idInList].price;
            products[idInList].amount++;

        }
    }

    plusProduct(idInList : number): void {
        if (products[idInList].amount > 0) { // если кол-во товара > 0
            products[idInList].amount--;
            this.sumOfOrder += products[idInList].price; // прибавляем к сумме заказа
            if (this.productsInOrder[idInList] === undefined) {
                this.productsInOrder[idInList] = 1;
            }
            else {
                this.productsInOrder[idInList] += 1;
            }
        }
    }

    order(): void {
        // заказ
        const soldProducts : Object = new Object();

        for (let i = 0; i < this.productsInOrder.length; i++) {
            if (this.productsInOrder[i]) {
                soldProducts[i + 1] = this.productsInOrder[i];
            }
        }

        orders.push({
            id : ++amounts['orders'],
            date : new Date(),
            products : soldProducts
        });

        // денежная операция
        moneyStream.push({
           id : ++amounts['moneyStream'],
           date : new Date(),
           name : 'Заказ #' + amounts['orders'],
           income : this.sumOfOrder
        });

        // готовимся к следующему заказу
        this.sumOfOrder = 0;
        this.productsInOrder = [];
        this.moneyOfCustomer = 0;
    }

    cancel(): void {
        this.productsInOrder.forEach( (elem, index) => {
            products[index].amount += elem;
        });

        this.productsInOrder = [];
        this.sumOfOrder = 0;
        this.moneyOfCustomer = 0;
    }

    returnHolded(id : number): void {
        this.sumOfOrder = this.holdedOrders[id].sum;
        this.productsInOrder = this.holdedOrders[id].order;
        this.holdedOrders[id].sum = 0;
        this.holdedOrders[id].order = [];
    }

    ngOnDestroy(): void {
        if (this.productsInOrder.length){
            const holdStatus = confirm('Заказ не завершен. Отложить?');
            if (holdStatus) {
                holdedOrders.push({
                    sum : this.sumOfOrder,
                    order : this.productsInOrder
                });
            } else {
                this.cancel();
            }
        }
    }
}
