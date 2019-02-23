import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StockPriceService} from "./service/stock-price.service";
import {StockInfo} from "./model/stock-info";
import {RowNode} from "ag-grid-community";
import {interval} from 'rxjs';
import {Observable} from "rxjs/internal/Observable";
import {Subscription} from "rxjs/src/internal/Subscription";

@Component({
  selector: 'app-stock-price-table',
  templateUrl: './stock-price-table.component.html',
  styleUrls: ['./stock-price-table.component.scss'],
  providers: [StockPriceService]
})
export class StockPriceTableComponent implements OnChanges {
  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private rowData;
  private rowSelection;
  private stockToMonitor: string[] = ["IBM", "BTC-USD", "AAPL", "0388.HK", "XRP-USD", "JPM", "UBS"];
  private intervalObs;
  @Input() intervalTime: number;

  constructor(private stockPriceService: StockPriceService) {
    this.intervalTime = 4000;

    this.columnDefs = [
      {headerName: "Stock Code", field: "stock_code"},
      {headerName: "Market state", field: "marketState"},
      {headerName: "Market cap", field: "marketCap"},
      {headerName: "Region", field: "region"},
      {headerName: "Quote type", field: "quoteType"},
      {headerName: "Currency", field: "currency"},
      {headerName: "Open", field: "regularMarketOpen"},
      {headerName: "High", field: "regularMarketDayHigh"},
      {headerName: "Low", field: "regularMarketDayLow"},
      {headerName: "200 day avg", field: "twoHundredDayAverage"},
      {
        headerName: "Price", field: "price", cellStyle: function (params) {
          var color = numberToColor(params);
          return {"background-color": color};
        }
      },
      {headerName: "Last changed", field: "changed"},
      {headerName: "Volume", field: "regularMarketVolume"},
    ];
    this.rowData = [];
    this.rowSelection = "multiple";
    this.intervalObs = interval(this.intervalTime * 1000).subscribe(value =>
        console.log(`Refreshing time${this.intervalTime * 1000}`)
      , error1 => console.error(error1));
  }

  addOrUpdateToTheTable(stockInfo: StockInfo) {
    let rowNode = this.getIfExisted(stockInfo);
    if (rowNode != null) {
      let stockToUpdate = rowNode.data;
      StockPriceTableComponent.setUpdatedStockInfo(stockToUpdate, stockInfo);

      this.gridApi.updateRowData({update: [stockToUpdate]});
    } else {
      this.gridApi.showLoadingOverlay();
      this.gridApi.sizeColumnsToFit();
      this.gridApi.updateRowData({add: [stockInfo]});
    }
  }

  getIfExisted(stockPriceInfo: StockInfo): RowNode {
    let tempRowNode = null;
    this.gridApi.forEachNode(function (rowNode: RowNode, _) {
      if (rowNode.data.stock_code == stockPriceInfo.stock_code) {
        tempRowNode = rowNode;
      }
    });
    return tempRowNode;
  }

  addStockToMonitor(stockCode: string) {
    if (!this.stockToMonitor.includes(stockCode)) {
      this.gridApi.showLoadingOverlay();
      this.stockToMonitor.push(stockCode)
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
    this.gridApi.showLoadingOverlay();
  }

  private static setUpdatedStockInfo(stockToUpdate: StockInfo, data: StockInfo) {
    stockToUpdate.changed = data.price - stockToUpdate.price;
    stockToUpdate.price = data.price;
    stockToUpdate.marketState = data.marketState;
    stockToUpdate.marketCap = data.marketCap;
    stockToUpdate.region = data.region;
    stockToUpdate.quoteType = data.quoteType;
    stockToUpdate.currency = data.currency;
    stockToUpdate.regularMarketOpen = data.regularMarketOpen;
    stockToUpdate.regularMarketDayHigh = data.regularMarketDayHigh;
    stockToUpdate.regularMarketDayLow = data.regularMarketDayLow;
    stockToUpdate.twoHundredDayAverage = data.twoHundredDayAverage;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty("intervalTime")) {
      this.intervalTime = changes.intervalTime.currentValue;
      this.intervalObs.unsubscribe();
      this.intervalObs = interval(this.intervalTime * 1000).subscribe(() => {
        this.stockToMonitor.forEach(stockCode => this.stockPriceService.getStockPrice(stockCode).subscribe(
          stockPriceInfo => this.addOrUpdateToTheTable(stockPriceInfo)
          , error1 => console.error(error1)
          )
        )
      });
    }
  }
}

function numberToColor(param) {
  if (param.data.changed == 0 || param.data.changed == null) {
    return "#f4fffd";
  } else if (param.data.changed > 0) {
    return "#17af1c";
  } else if (param.data.changed < 0) {
    return "#ff513e";
  }
}
