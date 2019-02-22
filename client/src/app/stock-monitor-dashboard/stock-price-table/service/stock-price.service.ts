import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StockPriceInfo} from "../model/stock-price-info";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  constructor(private httpClient: HttpClient) {
  }

  public getStockPrice(stock_code: string): Observable<StockPriceInfo> {
    return this.httpClient.get<StockPriceInfo>(`YahooStockPrice/yahoo-stock-price?stockCode=${stock_code}`)
  }

}
