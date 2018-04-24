import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'feedback-cmp',
    moduleId: module.id,
    templateUrl: 'feedback.component.html'
})


export class FeedbackComponent implements OnInit{
    ngOnInit(){
    }

    feedback(feed : HTMLInputElement, email : HTMLInputElement): void {
        feed.value = '';
        email.value = '';
    }
}
