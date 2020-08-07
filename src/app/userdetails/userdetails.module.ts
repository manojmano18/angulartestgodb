import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdetailsRoutingModule } from './userdetails-routing.module';
import { UserdetailsComponent } from './userdetails.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';

@NgModule({
  declarations: [UserdetailsComponent,FileuploadComponent],
  imports: [
    CommonModule,
    UserdetailsRoutingModule,
  ]
})
export class UserdetailsModule { }
