import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatGridListModule,MatDialogModule, MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatGridListModule,MatDialogModule, MatButtonModule, MatInputModule],
  exports: [MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule, MatGridListModule,MatDialogModule, MatButtonModule, MatInputModule],
})
export class MyOwnCustomMaterialModule { }