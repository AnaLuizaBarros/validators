import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    PagesModule,
    NgbDropdownModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
