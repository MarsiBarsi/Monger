import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { ServiceComponent }   from './service/service.component';
import { StatsComponent }   from './stats/stats.component';
import { CashboxComponent }   from './cashbox/cashbox.component';
import { StorageComponent }   from './storage/storage.component';
import { FeedbackComponent }   from './feedback/feedback.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'service',
        component: ServiceComponent
    },
    {
        path: 'stats',
        component: StatsComponent
    },
    {
        path: 'cashbox',
        component: CashboxComponent
    },
    {
        path: 'storage',
        component: StorageComponent
    },
    {
        path: 'feedback',
        component: FeedbackComponent
    },
    {
        path : '**',
        component : DashboardComponent
    }
]
