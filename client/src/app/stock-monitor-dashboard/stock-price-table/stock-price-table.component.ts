import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StockPriceService} from "./service/stock-price.service";
import {StockPriceInfo} from "./model/stock-price-info";
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
  private stockToMonitor: string[] = [];
  private intervalObs;
  @Input() intervalTime: number;

  constructor(private stockPriceService: StockPriceService) {
    this.intervalTime = 4000;
    this.columnDefs = [
      {headerName: "Stock Code", field: "stock_code"},
      {headerName: "Open", field: "open"},
      {headerName: "High", field: "high"},
      {headerName: "Low", field: "low"},
      {
        headerName: "Close", field: "close", cellStyle: function (params) {
          var color = numberToColor(params);
          return {"background-color": color};
        }
      },
      {headerName: "Changed", field: "changed"},
      {headerName: "Volume", field: "volume"},
    ];
    this.rowData = [];
    this.rowSelection = "multiple";
    this.intervalObs = interval(this.intervalTime * 1000).subscribe(value =>
        console.log(`Refreshing time${this.intervalTime * 1000}`)
      , error1 => console.error(error1));
    // setInterval(() => {
    //   console.log(`Refreshing time${this.intervalTime}`);
    //   // this.stockToMonitor.forEach(stockCode =>
    //   //   this.stockPriceService.getStockPrice(stockCode).subscribe(
    //   //   stockPriceInfo => {
    //   //     this.addOrUpdateToTheTable(stockPriceInfo);
    //   //   }, error1 => {
    //   //     console.error(error1);
    //   //   }
    //   // ))
    // }, this.intervalTime);
  }

  public setInterval1(time: number) {
    console.log("Change");
    this.intervalTime = time;
  }

  public showInterval() {
    console.log(this.intervalTime);
  }

  addOrUpdateToTheTable(stockPriceInfo: StockPriceInfo) {
    let rowNode = this.getIfExisted(stockPriceInfo);
    if (rowNode != null) {
      console.log("Update");
      let stockToUpdate = rowNode.data;
      StockPriceTableComponent.setUpdatedStockInfo(stockToUpdate, stockPriceInfo);

      // stockToUpdate.close = stockToUpdate.close - 1;
      this.gridApi.updateRowData({update: [stockToUpdate]});
    } else {
      console.log("Add");
      this.gridApi.updateRowData({add: [stockPriceInfo]});
    }
  }

  getIfExisted(stockPriceInfo: StockPriceInfo): RowNode {
    let tempRowNode = null;
    this.gridApi.forEachNode(function (rowNode: RowNode, _) {
      if (rowNode.data.stock_code == stockPriceInfo.stock_code) {
        tempRowNode = rowNode;
      }
    });
    return tempRowNode;
  }

  addStockToMonitor(stockCode: string) {
    console.log(`Trying to add stock code ${stockCode}`);
    if (!this.stockToMonitor.includes(stockCode)) {
      this.stockToMonitor.push(stockCode)
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  private static setUpdatedStockInfo(stockToUpdate: StockPriceInfo, data: StockPriceInfo) {
    // console.log(stockToUpdate);
    // console.log(data);
    stockToUpdate.changed = data.close - stockToUpdate.close;
    stockToUpdate.close = data.close;
    stockToUpdate.high = data.high;
    stockToUpdate.low = data.low;
    stockToUpdate.open = data.open;
    stockToUpdate.volume = data.volume;

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty("intervalTime")) {
      this.intervalTime = changes.intervalTime.currentValue;
      this.intervalObs.unsubscribe();
      this.intervalObs = interval(this.intervalTime * 1000).subscribe(() => {
        console.log(`refreshing time : ${this.intervalTime}`);
        this.stockToMonitor.forEach(stockCode => this.stockPriceService.getStockPrice(stockCode).subscribe(
          stockPriceInfo => this.addOrUpdateToTheTable(stockPriceInfo)
          , error1 => console.error(error1)
          )
        )
      });
    }
  }


  // this.doSomething(changes.categoryId.currentValue);
  // You can also use categoryId.previousValue and
  // categoryId.firstChange for comparing old and new values

}

function numberToColor(param) {
  console.log(param);
  if (param.data.changed == 0 || param.data.changed == null) {
    return "#f4fffd";
  } else if (param.data.changed > 0) {
    return "#10ff1f";
  } else {
    return "#ff513e";
  }
}
