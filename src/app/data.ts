import { Product, MoneyOperation, Order, AmountCounter, HoldedOrder, FireCrm} from '../app/interfaces';

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

  export let amounts : AmountCounter = {
    products : 2,
    moneyStream : 2,
    orders : 2,
  };

  export let holdedOrders : Array<HoldedOrder> = [
    {
      sum : 8,
      order : [2]
    }
  ];