import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ServiceComponent }   from './service/service.component';
import { StatsComponent }   from './stats/stats.component';
import { CashboxComponent }   from './cashbox/cashbox.component';
import { StorageComponent }   from './storage/storage.component';
import { FeedbackComponent }   from './feedback/feedback.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyDvesSHD6cQ-jXKENOc3wbDCP4pAbNObjY",
  authDomain: "monger-crm.firebaseapp.com",
  databaseURL: "https://monger-crm.firebaseio.com",
  projectId: "monger-crm",
  storageBucket: "monger-crm.appspot.com",
  messagingSenderId: "217864887577"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServiceComponent,
    StatsComponent,
    CashboxComponent,
    StorageComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
