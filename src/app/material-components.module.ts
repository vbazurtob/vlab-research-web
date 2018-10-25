import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule
  ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule
  ],
})
export class MaterialComponentsModule { }
