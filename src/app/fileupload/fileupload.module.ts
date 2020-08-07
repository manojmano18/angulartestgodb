import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileuploadRoutingModule } from './fileupload-routing.module';
import { FileuploadComponent } from './fileupload.component';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FileuploadComponent],
  imports: [
    CommonModule,
    FileuploadRoutingModule,FormsModule
  ]
})
export class FileuploadModule { }
