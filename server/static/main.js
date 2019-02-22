(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stock_monitor_dashboard_stock_monitor_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stock-monitor-dashboard/stock-monitor-dashboard.component */ "./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.ts");




var routes = [
    { path: '**', component: _stock_monitor_dashboard_stock_monitor_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["StockMonitorDashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _stock_monitor_dashboard_stock_monitor_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stock-monitor-dashboard/stock-monitor-dashboard.component */ "./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.ts");
/* harmony import */ var _stock_monitor_dashboard_stock_code_input_stock_code_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stock-monitor-dashboard/stock-code-input/stock-code-input.component */ "./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _stock_monitor_dashboard_stock_price_table_stock_price_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stock-monitor-dashboard/stock-price-table/stock-price-table.component */ "./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _stock_monitor_dashboard_refresh_silder_refresh_silder_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stock-monitor-dashboard/refresh-silder/refresh-silder.component */ "./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _stock_monitor_dashboard_stock_monitor_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["StockMonitorDashboardComponent"],
                _stock_monitor_dashboard_stock_code_input_stock_code_input_component__WEBPACK_IMPORTED_MODULE_8__["StockCodeInputComponent"],
                _stock_monitor_dashboard_stock_price_table_stock_price_table_component__WEBPACK_IMPORTED_MODULE_11__["StockPriceTableComponent"],
                _stock_monitor_dashboard_refresh_silder_refresh_silder_component__WEBPACK_IMPORTED_MODULE_14__["RefreshSilderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__["AgGridModule"].withComponents([])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-slider\r\n  class=\"mat-refresh-slider\"\r\n  thumbLabel\r\n  tickInterval=\"1\"\r\n  [value]=value\r\n  [(ngModel)]=\"value\"\r\n  min=\"0\"\r\n  max=\"60\"></mat-slider>\r\n"

/***/ }),

/***/ "./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-refresh-slider {\n  width: inherit; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2stbW9uaXRvci1kYXNoYm9hcmQvcmVmcmVzaC1zaWxkZXIvQzpcXFVzZXJzXFxNYXJjb1xcV29ya3NwYWNlc1xcc3RvY2tNb25pdG9yXFxjbGllbnQvc3JjXFxhcHBcXHN0b2NrLW1vbml0b3ItZGFzaGJvYXJkXFxyZWZyZXNoLXNpbGRlclxccmVmcmVzaC1zaWxkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFjLEVBQ2YiLCJmaWxlIjoic3JjL2FwcC9zdG9jay1tb25pdG9yLWRhc2hib2FyZC9yZWZyZXNoLXNpbGRlci9yZWZyZXNoLXNpbGRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmVmcmVzaC1zbGlkZXIge1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.ts ***!
  \************************************************************************************/
/*! exports provided: RefreshSilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshSilderComponent", function() { return RefreshSilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RefreshSilderComponent = /** @class */ (function () {
    function RefreshSilderComponent() {
        this.value = 5;
    }
    RefreshSilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-refresh-silder',
            template: __webpack_require__(/*! ./refresh-silder.component.html */ "./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.html"),
            styles: [__webpack_require__(/*! ./refresh-silder.component.scss */ "./src/app/stock-monitor-dashboard/refresh-silder/refresh-silder.component.scss")]
        })
    ], RefreshSilderComponent);
    return RefreshSilderComponent;
}());



/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"input-form\">\r\n  <mat-form-field class=\"input-form-full-width\">\r\n    <input style=\"width: 100%\" type=\"text\" placeholder=\"Input Stock Code\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n        {{option}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-form {\n  min-width: 100%;\n  width: 100%; }\n\n.input-form-full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2stbW9uaXRvci1kYXNoYm9hcmQvc3RvY2stY29kZS1pbnB1dC9DOlxcVXNlcnNcXE1hcmNvXFxXb3Jrc3BhY2VzXFxzdG9ja01vbml0b3JcXGNsaWVudC9zcmNcXGFwcFxcc3RvY2stbW9uaXRvci1kYXNoYm9hcmRcXHN0b2NrLWNvZGUtaW5wdXRcXHN0b2NrLWNvZGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZTtFQUNmLFlBQVcsRUFDWjs7QUFFRDtFQUNFLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLW1vbml0b3ItZGFzaGJvYXJkL3N0b2NrLWNvZGUtaW5wdXQvc3RvY2stY29kZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1mb3JtIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dC1mb3JtLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StockCodeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockCodeInputComponent", function() { return StockCodeInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var StockCodeInputComponent = /** @class */ (function () {
    function StockCodeInputComponent() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options = ['0388.HK', 'FB', 'AAPL', 'BTC-USD', "AMZN", "TSLA", "GOOGS"];
    }
    StockCodeInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filter(value); }));
    };
    StockCodeInputComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("InputValue"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], StockCodeInputComponent.prototype, "InputValue", void 0);
    StockCodeInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-code-input',
            template: __webpack_require__(/*! ./stock-code-input.component.html */ "./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.html"),
            styles: [__webpack_require__(/*! ./stock-code-input.component.scss */ "./src/app/stock-monitor-dashboard/stock-code-input/stock-code-input.component.scss")]
        })
    ], StockCodeInputComponent);
    return StockCodeInputComponent;
}());



/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"4\" rowHeight=\"85px\" xmlns=\"http://www.w3.org/1999/html\">\r\n  <mat-grid-tile [colspan]=4 [rowspan]=2>\r\n    <mat-card style=\"width: 90%\">\r\n      <mat-grid-list cols=20 rows=1 rowHeight=\"65px\">\r\n        <mat-grid-tile [colspan]=19 [rowspan]=1>\r\n          <app-stock-code-input #stockCodeInput style=\"width: 100%\"></app-stock-code-input>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile [colspan]=1 [rowspan]=1>\r\n          <button mat-raised-button color=\"primary\"\r\n                  (click)=\"stockSearchClicked($event, stockCodeInput, appStockPriceTable, refreshSlider)\"><i class=\"material-icons\">search</i>\r\n          </button>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile [colspan]=15 [rowspan]=1>\r\n\r\n        </mat-grid-tile>\r\n        <mat-grid-tile [colspan]=5 [rowspan]=1>\r\n          <div style=\"position: absolute;right: 0px;bottom: 0px;height: 60%;\">\r\n            Refresh Interval\r\n            <app-refresh-silder #refreshSlider></app-refresh-silder>\r\n          </div>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n\r\n</mat-grid-list>\r\n\r\n<mat-grid-list cols=\"4\" rowHeight=\"800px\">\r\n  <mat-grid-tile [colspan]=4 [rowspan]=1>\r\n    <mat-card style=\"width: 90%;height: 90%\">\r\n      <app-stock-price-table [intervalTime]=refreshSlider.value #appStockPriceTable></app-stock-price-table>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n"

/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  margin: 20px; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvY2stbW9uaXRvci1kYXNoYm9hcmQvQzpcXFVzZXJzXFxNYXJjb1xcV29ya3NwYWNlc1xcc3RvY2tNb25pdG9yXFxjbGllbnQvc3JjXFxhcHBcXHN0b2NrLW1vbml0b3ItZGFzaGJvYXJkXFxzdG9jay1tb25pdG9yLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsV0FBVTtFQUNWLFlBQVc7RUFDWCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsU0FBUTtFQUNSLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLW1vbml0b3ItZGFzaGJvYXJkL3N0b2NrLW1vbml0b3ItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1vcmUtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.ts ***!
  \******************************************************************************/
/*! exports provided: StockMonitorDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockMonitorDashboardComponent", function() { return StockMonitorDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StockMonitorDashboardComponent = /** @class */ (function () {
    function StockMonitorDashboardComponent() {
    }
    StockMonitorDashboardComponent.prototype.stockSearchClicked = function ($event, stockCodeInput, appStockPriceTable, refreshSlider) {
        appStockPriceTable.addStockToMonitor(stockCodeInput.myControl.value);
        console.log(refreshSlider);
    };
    StockMonitorDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-monitor-dashboard',
            template: __webpack_require__(/*! ./stock-monitor-dashboard.component.html */ "./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./stock-monitor-dashboard.component.scss */ "./src/app/stock-monitor-dashboard/stock-monitor-dashboard.component.scss")]
        })
    ], StockMonitorDashboardComponent);
    return StockMonitorDashboardComponent;
}());



/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-price-table/service/stock-price.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-price-table/service/stock-price.service.ts ***!
  \******************************************************************************************/
/*! exports provided: StockPriceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPriceService", function() { return StockPriceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var StockPriceService = /** @class */ (function () {
    function StockPriceService(httpClient) {
        this.httpClient = httpClient;
    }
    StockPriceService.prototype.getStockPrice = function (stock_code) {
        return this.httpClient.get("YahooStockPrice/yahoo-stock-price?stockCode=" + stock_code);
    };
    StockPriceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StockPriceService);
    return StockPriceService;
}());



/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ag-grid-angular\r\n  #agGrid\r\n  style=\"width: 100%; height: 100%;\"\r\n  id=\"myGrid\"\r\n  class=\"ag-theme-balham\"\r\n  [columnDefs]=\"columnDefs\"\r\n  [rowData]=\"rowData\"\r\n  [animateRows]=\"true\"\r\n  [rowSelection]=\"rowSelection\"\r\n  [enableCellChangeFlash]=\"true\"\r\n  [enableSorting]=\"true\"\r\n  (gridReady)=\"onGridReady($event)\"\r\n></ag-grid-angular>\r\n"

/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b2NrLW1vbml0b3ItZGFzaGJvYXJkL3N0b2NrLXByaWNlLXRhYmxlL3N0b2NrLXByaWNlLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.ts ***!
  \******************************************************************************************/
/*! exports provided: StockPriceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockPriceTableComponent", function() { return StockPriceTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_stock_price_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/stock-price.service */ "./src/app/stock-monitor-dashboard/stock-price-table/service/stock-price.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var StockPriceTableComponent = /** @class */ (function () {
    function StockPriceTableComponent(stockPriceService) {
        var _this = this;
        this.stockPriceService = stockPriceService;
        this.stockToMonitor = [];
        this.intervalTime = 4000;
        this.columnDefs = [
            { headerName: "Stock Code", field: "stock_code" },
            { headerName: "Open", field: "open" },
            { headerName: "High", field: "high" },
            { headerName: "Low", field: "low" },
            {
                headerName: "Close", field: "close", cellStyle: function (params) {
                    var color = numberToColor(params);
                    return { "background-color": color };
                }
            },
            { headerName: "Changed", field: "changed" },
            { headerName: "Volume", field: "volume" },
        ];
        this.rowData = [];
        this.rowSelection = "multiple";
        this.intervalObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.intervalTime * 1000).subscribe(function (value) {
            return console.log("Refreshing time" + _this.intervalTime * 1000);
        }, function (error1) { return console.error(error1); });
    }
    StockPriceTableComponent_1 = StockPriceTableComponent;
    StockPriceTableComponent.prototype.addOrUpdateToTheTable = function (stockPriceInfo) {
        var rowNode = this.getIfExisted(stockPriceInfo);
        if (rowNode != null) {
            console.log("Update");
            var stockToUpdate = rowNode.data;
            StockPriceTableComponent_1.setUpdatedStockInfo(stockToUpdate, stockPriceInfo);
            this.gridApi.updateRowData({ update: [stockToUpdate] });
        }
        else {
            console.log("Add");
            this.gridApi.updateRowData({ add: [stockPriceInfo] });
        }
    };
    StockPriceTableComponent.prototype.getIfExisted = function (stockPriceInfo) {
        var tempRowNode = null;
        this.gridApi.forEachNode(function (rowNode, _) {
            if (rowNode.data.stock_code == stockPriceInfo.stock_code) {
                tempRowNode = rowNode;
            }
        });
        return tempRowNode;
    };
    StockPriceTableComponent.prototype.addStockToMonitor = function (stockCode) {
        console.log("Trying to add stock code " + stockCode);
        if (!this.stockToMonitor.includes(stockCode)) {
            this.stockToMonitor.push(stockCode);
        }
    };
    StockPriceTableComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    StockPriceTableComponent.setUpdatedStockInfo = function (stockToUpdate, data) {
        stockToUpdate.changed = data.close - stockToUpdate.close;
        stockToUpdate.close = data.close;
        stockToUpdate.high = data.high;
        stockToUpdate.low = data.low;
        stockToUpdate.open = data.open;
        stockToUpdate.volume = data.volume;
    };
    StockPriceTableComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty("intervalTime")) {
            this.intervalTime = changes.intervalTime.currentValue;
            this.intervalObs.unsubscribe();
            this.intervalObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(this.intervalTime * 1000).subscribe(function () {
                console.log("refreshing time : " + _this.intervalTime);
                _this.stockToMonitor.forEach(function (stockCode) { return _this.stockPriceService.getStockPrice(stockCode).subscribe(function (stockPriceInfo) { return _this.addOrUpdateToTheTable(stockPriceInfo); }, function (error1) { return console.error(error1); }); });
            });
        }
    };
    var StockPriceTableComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], StockPriceTableComponent.prototype, "intervalTime", void 0);
    StockPriceTableComponent = StockPriceTableComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-price-table',
            template: __webpack_require__(/*! ./stock-price-table.component.html */ "./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.html"),
            providers: [_service_stock_price_service__WEBPACK_IMPORTED_MODULE_2__["StockPriceService"]],
            styles: [__webpack_require__(/*! ./stock-price-table.component.scss */ "./src/app/stock-monitor-dashboard/stock-price-table/stock-price-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_stock_price_service__WEBPACK_IMPORTED_MODULE_2__["StockPriceService"]])
    ], StockPriceTableComponent);
    return StockPriceTableComponent;
}());

function numberToColor(param) {
    console.log(param);
    if (param.data.changed == 0 || param.data.changed == null) {
        return "#f4fffd";
    }
    else if (param.data.changed > 0) {
        return "#17af1c";
    }
    else {
        return "#ff513e";
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marco\Workspaces\stockMonitor\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map