import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';

@NgModule({
  declarations: [
    PasswordValidatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgbModule,
    NgbDropdownModule,
  ],
  exports: [PasswordValidatorComponent],
  providers: [],

})
export class SharedModule { }
