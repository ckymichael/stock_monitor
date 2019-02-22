import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StockMonitorDashboardComponent} from "./stock-monitor-dashboard/stock-monitor-dashboard.component";

const routes: Routes = [
  {path: '**', component: StockMonitorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
