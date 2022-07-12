import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from "@angular/common/http";
import { ActivityBarComponent } from './components/activity-bar/activity-bar.component';
import { AddTableComponent } from './components/add-table/add-table.component';
import { AddSegmentComponent } from './components/add-segment/add-segment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';


@NgModule({
  declarations: [
    AppComponent,
    ActivityBarComponent,
    AddTableComponent,
    AddSegmentComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
