import { Component, OnInit } from '@angular/core';

import { products,orders,moneyStream, amounts } from '../app.component'

@Component({
    selector: 'service-cmp',
    moduleId: module.id,
    templateUrl: 'service.component.html'
})

export class ServiceComponent implements OnInit{
    sumOfOrder : number = 0;
    moneyOfCustomer : number = 0;
    
    productsInOrder : Array<number> = [
        
    ]; // productsInOrder[id_товара] = кол-во товара

    products = products;
    

    ngOnInit(){
        
    }

    minusProduct(artikul : HTMLElement) {
        let idInList : number = Number(artikul.innerHTML) - 1;
        if (this.productsInOrder[idInList] > 0) {
            this.productsInOrder[idInList]--;
            this.sumOfOrder -= products[idInList].price;
            products[idInList][3]++;
            
        }
    }

    plusProduct(artikul : HTMLElement) {
        console.log(this.moneyOfCustomer);
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
            //console.log(this.productsInOrder);
        }
        //console.log(elem.children[0].innerHTML);
    }

    order() {
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

        // готовимся к следующему заказу
        this.sumOfOrder = 0;
        this.productsInOrder = [];
        this.moneyOfCustomer = 0;
    }

    cancel() {
        this.productsInOrder.forEach( (elem,index) => {
            products[index][3] += elem;
        });
        this.productsInOrder = [];
        this.sumOfOrder = 0;
        this.moneyOfCustomer = 0;
    }
}
