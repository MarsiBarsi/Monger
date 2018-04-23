import { Component, OnInit,HostListener, Input } from '@angular/core';

import { products,orders,moneyStream, amounts,updateFire, Product } from '../app.component'

@Component({
    selector: 'service-cmp',
    moduleId: module.id,
    templateUrl: 'service.component.html'
})

export class ServiceComponent implements OnInit{
    products : Product[] = products;

    sumOfOrder : number = 0;
    moneyOfCustomer : number = 0;
    
    productsInOrder : Array<number> = [
        
    ]; // productsInOrder[id_товара] = кол-во товара

    

    ngOnInit(){
        
    }

    minusProduct(artikul : HTMLElement): void {
        let idInList : number = Number(artikul.innerHTML) - 1;
        if (this.productsInOrder[idInList] > 0) {
            this.productsInOrder[idInList]--;
            this.sumOfOrder -= products[idInList].price;
            products[idInList].amount++;
            
        }
    }

    plusProduct(artikul : HTMLElement): void {
        let idInList : number = Number(artikul.innerHTML) - 1;
        if (products[idInList].amount > 0) { // если кол-во товара > 0
            products[idInList].amount--;
            this.sumOfOrder += products[idInList].price; // прибавляем к сумме заказа
            if (this.productsInOrder[idInList] === undefined) {
                this.productsInOrder[idInList] = 1;
            }
            else {
                this.productsInOrder[idInList] += 1;
            }
            //updateFire();
            //console.log(this.productsInOrder);
        }
        //console.log(elem.children[0].innerHTML);
    }

    order(): void {
        // заказ
        let soldProducts : Object = new Object();
        
        for (let i = 0; i < this.productsInOrder.length; i++) {
            if (this.productsInOrder[i]) {
                soldProducts[i+1] = this.productsInOrder[i];
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

        //updateFire();
        
        // готовимся к следующему заказу
        this.sumOfOrder = 0;
        this.productsInOrder = [];
        this.moneyOfCustomer = 0;
    }

    cancel(): void {
        this.productsInOrder.forEach( (elem,index) => {
            products[index][3] += elem;
        });
        //updateFire();
        this.productsInOrder = [];
        this.sumOfOrder = 0;
        this.moneyOfCustomer = 0;
    }

    
}
