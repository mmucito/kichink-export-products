import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { HttpModule } from '@angular/http';
import { ExportService } from './export.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
