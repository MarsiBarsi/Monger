export interface Product {
    id : number;
    name : string;
    price : number;
    amount : number;
};

export interface MoneyOperation {
    id : number;
    date : Date;
    name : string;
    income : number;
};

export interface AmountCounter {
    products : number;
    moneyStream : number;
    orders : number;
}

export interface FireCrm {
    amounts : AmountCounter;
    products : Product[];
    moneyStream : MoneyOperation[];
    orders : Order[];
}

export interface Order {
    id : number;
    date : Date;
    products : Object; // product_id = amount
}

export declare interface Inputs {
    name : string;
    controlName : string;
    wrongMes : string;
}

export interface HoldedOrder {
    sum : number;
    order : number[];
}