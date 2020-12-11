import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockdataComponent } from './dumb/stockdata/stockdata.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NgPaginatorModule } from 'ng-paginator-plus';
import { ModalComponent } from './modal/modal.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StockdataComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgPaginatorModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule
  ],
  providers: [AppService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
