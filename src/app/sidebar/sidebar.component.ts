import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Главная',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'Принять заказ',  icon:'ti-receipt', class: '' },
    { path: 'notifications', title: 'Склад',  icon:'ti-layout-grid3-alt', class: '' },
    { path: 'table', title: 'Статистика',  icon:'ti-stats-up', class: '' },
    { path: 'typography', title: 'Касса',  icon:'ti-money', class: '' },
   // { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
   // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
    
    { path: 'upgrade', title: 'Сообщить об ошибке',  icon:'ti-headphone-alt', class: 'active-pro' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
