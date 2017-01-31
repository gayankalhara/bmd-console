import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

import { PAGE_ROUTES } from './pages/pages.routing';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: PAGE_ROUTES
  }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
