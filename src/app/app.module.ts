import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from './material-components.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
// import { MasterPageComponent } from './main-container/master-page/mas';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes.module';
import { ToolbarHorizontalComponent } from './main-container/toolbar-horizontal/toolbar-horizontal.component';
import { MembersPageComponent } from './members/members-page/members-page.component';
import { HeaderComponent } from './main-container/header/header.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';
import { PublicationsPageComponent } from './publications/publications-page/publications-page.component';
import { FooterComponent } from './main-container/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // MasterPageComponent,
    ToolbarHorizontalComponent,
    MembersPageComponent,
    HeaderComponent,
    HomePageComponent,
    ProjectsPageComponent,
    PublicationsPageComponent,
    FooterComponent
  ],
  imports: [

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),


    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
