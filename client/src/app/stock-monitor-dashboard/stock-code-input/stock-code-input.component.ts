import {Component, OnInit, Output} from '@angular/core';
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-stock-code-input',
  templateUrl: './stock-code-input.component.html',
  styleUrls: ['./stock-code-input.component.scss']
})
export class StockCodeInputComponent implements OnInit {

  @Output("InputValue") InputValue: string;

  myControl = new FormControl();
  options: string[] = ['0388.HK', 'FB', 'AAPL', 'BTC-USD', "AMZN", "TSLA", "GOOGS"];
  filteredOptions: Observable<string[]>;
  stockCode: string;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}
