import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {StockPriceService} from "./service/stock-price.service";
import {StockInfo} from "./model/stock-info";
import {RowNode} from "ag-grid-community";
import {interval} from 'rxjs';
import {Observable} from "rxjs/internal/Observable";
import {Subscription} from "rxjs/src/internal/Subscription";
import {StockPriceUpdater} from "./model/stock-price-updater";

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
  @Output() userRowClickedEvent: StockPriceUpdater = new StockPriceUpdater();

  constructor(private stockPriceService: StockPriceService) {
    this.intervalTime = 4000;

    this.columnDefs = [
      {headerName: "Stock Code", field: "stock_code"},
      {headerName: "Market state", field: "marketState"},
      {
        headerName: "Market cap", field: "marketCap", valueParser: numberValueParser, valueFormatter: function (params) {
          return formatNumber(params.value);
        }
      },
      {headerName: "Region", field: "region"},
      {headerName: "Quote type", field: "quoteType"},
      {headerName: "Currency", field: "currency"},
      {
        headerName: "Open", field: "regularMarketOpen", valueParser: numberValueParser
      },
      {
        headerName: "High", field: "regularMarketDayHigh", valueParser: numberValueParser
      },
      {
        headerName: "Low", field: "regularMarketDayLow", valueParser: numberValueParser
      },
      {
        headerName: "200 day avg", field: "twoHundredDayAverage", valueParser: numberValueParser, valueFormatter: function (params) {
          return formatNumber(params.value);
        }
      },
      {
        headerName: "Price", field: "price", cellStyle: function (params) {
          let color = numberToColor(params);
          return {"background-color": color};
        }, valueParser: numberValueParser
      },
      {
        headerName: "Last changed", field: "changed", valueParser: numberValueParser
      },
      {
        headerName: "Volume", field: "regularMarketVolume", valueParser: numberValueParser, valueFormatter: function (params) {
          return formatNumber(params.value);
        }
      },
    ];
    this.rowData = [];
    this.rowSelection = "single";
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

      if (rowNode.isSelected()) {
        this.sendToChart(rowNode.data.stock_code, rowNode.data.price);
      }

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
    let sort = [{colId: "changed", sort: "desc"}];
    this.gridApi.setSortModel(sort);
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

  userRowClicked($event: any) {
    this.sendToChart($event.data.stock_code, $event.data.price);
  }

  private sendToChart(stock_code: string, price: number) {
    this.userRowClickedEvent = new StockPriceUpdater();
    this.userRowClickedEvent.stockCode = stock_code;
    this.userRowClickedEvent.stockPrice = price;
    console.log("Send")
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

function numberValueParser(params) {
  return Number(params.newValue);
}

function formatNumber(number: number) {
  return Math.floor(number)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
