import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StockInfo} from "../model/stock-info";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  constructor(private httpClient: HttpClient) {
  }

  public getStockPrice(stock_code: string): Observable<StockInfo> {
    return this.httpClient.get<StockInfo>(`YahooStockPrice/yahoo-stock-price?stockCode=${stock_code}`)
  }

}
