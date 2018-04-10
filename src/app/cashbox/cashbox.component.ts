import { Component } from '@angular/core';
import { moneyStream } from '../app.component'


@Component({
    selector: 'cashbox-cmp',
    moduleId: module.id,
    templateUrl: 'cashbox.component.html'
})

export class CashboxComponent{
    moneyStream = moneyStream;
    
}
