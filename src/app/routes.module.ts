import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
// import { MasterPageComponent } from './main-container/master-page/master-page.component';
import { MembersPageComponent } from  './members/members-page/members-page.component';
import { ProjectsPageComponent} from  './projects/projects-page/projects-page.component';
import { PublicationsPageComponent } from  './publications/publications-page/publications-page.component';
import { HomePageComponent } from  './home/home-page/home-page.component';

export const appRoutes: Routes = [
    {
        path: "index.html",
        component: HomePageComponent
    },

    // {
    //     path: "members",
    //     component: MembersPageComponent
    // },

    {
        path: "projects",
        component: ProjectsPageComponent
    },

    {
        path: "publications",
        component: PublicationsPageComponent
    },

    {
        path: '',
        redirectTo: "/index.html",
        pathMatch: "full"
    },

    {
        path: 'home',
        redirectTo: "/index.html",
        pathMatch: "full"
    }




];
