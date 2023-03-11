import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  CommonModule,
  MatDialogModule,
  MatButtonModule,
  MatIconModule,
];


@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class SharedModule {
  // tslint:disable-next-line: typedef
  static forRoot() {
    return {
      ngModule: SharedModule
    };
  }
}
