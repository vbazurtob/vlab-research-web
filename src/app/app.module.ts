import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialComponentsModule } from './material-components.module';

import { AppComponent } from './app.component';
import { MasterPageComponent } from './main-container/master-page/master-page.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes.module';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent
  ],
  imports: [

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),


    BrowserModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
