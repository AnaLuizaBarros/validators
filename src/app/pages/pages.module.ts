import { SharedModule } from './../shared/shared.module';
import { PasswordComponent } from './password/password.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule,
    SharedModule
  ],
  declarations: [
    PasswordComponent
  ],
  exports:[],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
