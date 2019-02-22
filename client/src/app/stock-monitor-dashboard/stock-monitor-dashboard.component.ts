import {Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {StockCodeInputComponent} from "./stock-code-input/stock-code-input.component";
import {StockPriceTableComponent} from "./stock-price-table/stock-price-table.component";
import {RefreshSilderComponent} from "./refresh-silder/refresh-silder.component";

@Component({
  selector: 'app-stock-monitor-dashboard',
  templateUrl: './stock-monitor-dashboard.component.html',
  styleUrls: ['./stock-monitor-dashboard.component.scss']
})
export class StockMonitorDashboardComponent {

  stockSearchClicked($event, stockCodeInput: StockCodeInputComponent, appStockPriceTable: StockPriceTableComponent, refreshSlider: RefreshSilderComponent) {
    appStockPriceTable.addStockToMonitor(stockCodeInput.myControl.value);
    console.log(refreshSlider);
  }
}
