import { Component, OnInit } from '@angular/core';

import { products,orders,moneyStream, amounts } from '../app.component'

@Component({
    selector: 'service-cmp',
    moduleId: module.id,
    templateUrl: 'service.component.html'
})

export class ServiceComponent implements OnInit{
    sumOfOrder : number = 0;
    productsInOrder : Array<number> = [
        
    ]; // productsInOrder[id_товара] = кол-во товара

    products = products;
    

    ngOnInit(){
        
    }

    minusProduct(artikul : HTMLElement) {
        let idInList : number = Number(artikul.innerHTML) - 1;
        if (this.productsInOrder[idInList] > 0) {
            this.productsInOrder[idInList]--;
            this.sumOfOrder -= products[idInList][2];
            products[idInList][3]++;
            
        }
    }

    plusProduct(artikul : HTMLElement) {
        let idInList : number = Number(artikul.innerHTML) - 1;
        if (products[idInList][3] > 0) { // если кол-во товара > 0
            products[idInList][3]--;
            this.sumOfOrder += products[idInList][2]; // прибавляем к сумме заказа
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
        let soldProducts = new Object();
        
        this.productsInOrder.forEach( (elem,index) => {
            soldProducts[index] = elem;
        });
        //console.log(soldProducts);
        orders.push([
            ++amounts['orders'],
            new Date(),
            soldProducts
        ]);
        
        // денежная операция
        moneyStream.push([
            ++amounts['moneyStream'],
            new Date(),
            'Заказ #' + amounts['orders'],
            this.sumOfOrder
        ]);

        // готовимся к следующему заказу
        this.sumOfOrder = 0;
        this.productsInOrder = [];
    }
}
