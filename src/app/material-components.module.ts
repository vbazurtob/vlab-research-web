import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule
  ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule
  ],
})
export class MaterialComponentsModule { }
