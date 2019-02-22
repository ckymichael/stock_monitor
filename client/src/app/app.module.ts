import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatSliderModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { StockMonitorDashboardComponent } from './stock-monitor-dashboard/stock-monitor-dashboard.component';
import { StockCodeInputComponent } from './stock-monitor-dashboard/stock-code-input/stock-code-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StockPriceTableComponent } from './stock-monitor-dashboard/stock-price-table/stock-price-table.component';
import {AgGridModule} from "ag-grid-angular";
import {HttpClientModule} from "@angular/common/http";
import { RefreshSilderComponent } from './stock-monitor-dashboard/refresh-silder/refresh-silder.component';

@NgModule({
  declarations: [
    AppComponent,
    StockMonitorDashboardComponent,
    StockCodeInputComponent,
    StockPriceTableComponent,
    RefreshSilderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSliderModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatInputModule,
    MatAutocompleteModule,
    LayoutModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
