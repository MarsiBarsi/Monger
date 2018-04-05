import { Component, OnInit } from '@angular/core';

export declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'stats-cmp',
    moduleId: module.id,
    templateUrl: 'stats.component.html'
})

export class StatsComponent implements OnInit{
    public tableData1: TableData;
    
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Имя', 'Зарплата'],
            dataRows: [
                ['1', 'Работник 1', '$36,738'],
                ['2', 'Работник 2', '$23,789'],
            ]
        };
        
    }
}
