import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { MasterPageComponent } from './main-container/master-page/master-page.component';

export const appRoutes: Routes = [
    {
        path: "index.html",
        component: MasterPageComponent
    },
    {
        path: '',
        redirectTo: "/index.html",
        pathMatch: "full"
    }

];
