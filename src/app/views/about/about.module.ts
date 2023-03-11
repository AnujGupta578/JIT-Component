import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppDialogModule } from 'src/app/components/app-dialog/app-dialog.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
