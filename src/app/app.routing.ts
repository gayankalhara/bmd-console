import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
