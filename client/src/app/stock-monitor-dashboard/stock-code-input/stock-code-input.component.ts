import {Component, OnInit, Output} from '@angular/core';
import {debounceTime, flatMap, map, takeUntil, tap} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Quote, YahooQueryResult} from "./model/yahoo-query-result";

@Component({
  selector: 'app-stock-code-input',
  templateUrl: './stock-code-input.component.html',
  styleUrls: ['./stock-code-input.component.scss']
})
export class StockCodeInputComponent implements OnInit {

  @Output("InputValue") InputValue: string;

  myControl = new FormControl();
  options: Quote[] = [this.createDefaultQuoteTemp("IBM", "International Business Machines"), this.createDefaultQuoteTemp("BTC-USD", "Bitcoin USD")];
  filteredOptions: Observable<Quote[]>;
  NOT_ACCEPTED_QUOTE_TYPE = "OPTION";
  ACCEPTED_INDEX = "quotes";

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        debounceTime(500),
        tap(x => this.searchFromYahooQuery(x).subscribe(
          value => {
            this.options = [];
            value.quotes.filter(quote => quote.isYahooFinance == true)
              .filter(quote => !quote.quoteType.includes(this.NOT_ACCEPTED_QUOTE_TYPE) && quote.index == this.ACCEPTED_INDEX)
              .forEach(quote => {
                this.options.push(quote);
              });
            // console.log("Done");
          }
        )),
        debounceTime(1500),
        map(value => {
          let filteredOption = this._filter(value);
          console.log(filteredOption);
          if (filteredOption.length == 0){
            return [this.createDefaultQuoteTemp("", `No such quote ${value}`)]
          } else {
            return filteredOption
          }
        })
      )
  }

  private _filter(value: string): Quote[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.symbol.toLowerCase().includes(filterValue))
  }

  private searchFromYahooQuery(input: String): Observable<YahooQueryResult> {
    console.log("searching");
    return this.httpClient.get<YahooQueryResult>(`YahooStockPrice/yahoo-stock-code?stockCode=${input}`);
  }

  createDefaultQuoteTemp(symbol: string, name: string): Quote {
    let quote = new Quote();
    quote.symbol = symbol;
    quote.shortname = name;
    return quote

  }
}
