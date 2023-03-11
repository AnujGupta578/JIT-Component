import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppDialogComponent } from './components/app-dialog/app-dialog.component';
import { AppDialogModule } from './components/app-dialog/app-dialog.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    AppDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppDialogComponent]
})
export class AppModule { }
