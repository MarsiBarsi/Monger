import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROUTES } from '../../sidebar/sidebar.component';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;

    @ViewChild('navbar-cmp') button;

    constructor(location: Location, private renderer : Renderer, private element : ElementRef) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }
    getTitle(): string {
        let titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (let item = 0; item < this.listTitles.length; item++){
            if (this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Ошибка 404';
    }
     sidebarToggle(): void {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];

        if (this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
