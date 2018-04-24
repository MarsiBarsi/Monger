import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {  
    let AppCompTest;
    let arg;
    beforeEach(async(() => {
        AppCompTest = new AppComponent(arg);
    }));
    
    it('1. should create the app', async(() => {
      expect(AppCompTest).toBeTruthy();
    }));
});
