import { Component, OnInit, HostListener } from '@angular/core';



export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class?: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Главная',  icon: 'ti-panel', class: '' },
    { path: 'service', title: 'Принять заказ',  icon:'ti-receipt', class: '' },
    { path: 'storage', title: 'Склад',  icon:'ti-layout-grid3-alt', class: '' },
    { path: 'stats', title: 'Статистика',  icon:'ti-stats-up', class: '' },
    { path: 'cashbox', title: 'Касса',  icon:'ti-money', class: '' },
    { path: 'feedback', title: 'Сообщить об ошибке',  icon:'ti-headphone-alt', class: 'feedback' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    winSize : number;

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    @HostListener('window:resize', ['$event']) onResize(event) {
      this.winSize = event.target.innerWidth; 
    }

    isNotMobileMenu(): boolean {
        if(this.winSize > 991){
            return false;
        }
        return true;
    }

}
