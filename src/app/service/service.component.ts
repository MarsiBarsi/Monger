import { Component, OnInit } from '@angular/core';
import { StorageComponent } from '../storage/storage.component';

@Component({
    selector: 'service-cmp',
    moduleId: module.id,
    templateUrl: 'service.component.html'
})

export class ServiceComponent implements OnInit{
    sumOfOrder : number = 0;

    ngOnInit(){
    }
}
