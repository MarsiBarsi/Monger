import { Component } from '@angular/core';
import { TableData } from '../stats/stats.component'
declare let $:any;

declare interface StorageTableData {
    headerRow: string[];
    dataRows: (string | number)[][];
}

@Component({
    selector: 'storage-cmp',
    moduleId: module.id,
    templateUrl: 'storage.component.html'
})

export class StorageComponent{
    public storageTable: StorageTableData;
    
    ngOnInit(){
        this.storageTable = {
            headerRow: [ 'Артикул', 'Название товара', 'Стоимость', 'Остаток'],
            dataRows: [
                [1, 'товар 1', 4, 12],
                [2, 'товар 2', 23, 15],
            ]
        };
        
    }
}
