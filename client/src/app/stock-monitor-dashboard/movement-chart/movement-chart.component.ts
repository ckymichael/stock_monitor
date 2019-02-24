import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {DatePipe} from '@angular/common';
import {StockPriceUpdater} from "../stock-price-table/model/stock-price-updater";
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-movement-chart',
  templateUrl: './movement-chart.component.html',
  styleUrls: ['./movement-chart.component.scss'],
  providers: [DatePipe]
})
export class MovementChartComponent implements OnChanges {
  @Input() data: StockPriceUpdater;
  @Input() stockCode: string;
  @ViewChild("mainChart")
  public chart: BaseChartDirective;

  private _chartData: number[] = [];

  constructor(private datePipe: DatePipe) {

  }

  public lineChartData: Array<any> = [
    {data: [], label: 'Series A'}
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#060606',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty("data")) {
      if (!changes.data.isFirstChange()) {
        let dataCurrentValue = <StockPriceUpdater> changes.data.currentValue;
        let dataPreviousValue = <StockPriceUpdater> changes.data.previousValue;
        if (dataPreviousValue.stockCode != dataCurrentValue.stockCode) {
          this._chartData.length = 0;
          this.lineChartLabels.length = 0;
        }
        this._chartData.push(dataCurrentValue.stockPrice);
        this.lineChartData = [{data: this._chartData, label: dataCurrentValue.stockCode}];
        let myDate = new Date();
        let currentTime = this.datePipe.transform(myDate, "H:mm:s");
        this.lineChartLabels.push(currentTime.toString());
      } else {
        this.lineChartData = [{data: [], label: "Please click one row above"}];
      }
    }

  }
}
