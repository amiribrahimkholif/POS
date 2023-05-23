"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_reports_sales-purchase-report_sales-purchase-report_module_ts"],{

/***/ 41745:
/*!**********************************************************************************!*\
  !*** ./src/app/reports/sales-purchase-report/sales-purchase-report.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPurchaseReportComponent": () => (/* binding */ SalesPurchaseReportComponent)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_months__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/months */ 87018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sales_purchase_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-purchase-report.service */ 99907);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 2277);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);








function SalesPurchaseReportComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", month_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", month_r2.name, " ");
} }
function SalesPurchaseReportComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", year_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", year_r3, " ");
} }
class SalesPurchaseReportComponent {
    constructor(salesPurchaseReportService, uTCToLocalTime) {
        this.salesPurchaseReportService = salesPurchaseReportService;
        this.uTCToLocalTime = uTCToLocalTime;
        this.months = _core_domain_classes_months__WEBPACK_IMPORTED_MODULE_0__.Months;
        this.years = [];
        this.barChartLabels = [];
        this.barChartData = [];
        this.selectedMonth = new Date().getMonth() + 1;
        this.selectedYear = new Date().getFullYear();
        this.barChartOptions = {
            responsive: true,
        };
        this.lineChartColors = [
            {
                backgroundColor: '#2196f3',
            },
        ];
    }
    ngOnInit() {
        for (let index = 1995; index < 2050; index++) {
            this.years.push(index);
        }
        this.getReportData();
    }
    getReportData() {
        this.salesPurchaseReportService.getSalesVsPurchaseReport(this.selectedMonth, this.selectedYear).subscribe((data) => {
            const totalSales = data.map(c => c.totalSales);
            const totalPurchase = data.map(c => c.totalPurchase);
            this.barChartData = [
                { data: totalSales, label: 'Sales' },
                { data: totalPurchase, label: 'Purchase' }
            ];
            this.barChartLabels = data.map(c => this.uTCToLocalTime.transform(c.date, 'shortDate'));
        });
    }
}
SalesPurchaseReportComponent.ɵfac = function SalesPurchaseReportComponent_Factory(t) { return new (t || SalesPurchaseReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_sales_purchase_report_service__WEBPACK_IMPORTED_MODULE_1__.SalesPurchaseReportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_2__.UTCToLocalTime)); };
SalesPurchaseReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SalesPurchaseReportComponent, selectors: [["app-sales-purchase-report"]], decls: 23, vars: 18, consts: [[1, "page-header-main", "mt-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [1, "form-inline", "mr-5"], [1, "form-group"], [1, "mr-2", "font-weight-bold"], [1, "form-control", "mr-3", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", 3, "ngModel", "change", "ngModelChange"], [2, "display", "block"], ["baseChart", "", "chartType", "bar", 3, "datasets", "labels", "options", "legend", "colors"], [3, "value"]], template: function SalesPurchaseReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2)(8, "div", 4)(9, "div", 5)(10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SalesPurchaseReportComponent_Template_select_change_13_listener() { return ctx.getReportData(); })("ngModelChange", function SalesPurchaseReportComponent_Template_select_ngModelChange_13_listener($event) { return ctx.selectedMonth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SalesPurchaseReportComponent_option_14_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SalesPurchaseReportComponent_Template_select_change_19_listener() { return ctx.getReportData(); })("ngModelChange", function SalesPurchaseReportComponent_Template_select_ngModelChange_19_listener($event) { return ctx.selectedYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SalesPurchaseReportComponent_option_20_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 12, "SALES_VS_PURCHASE_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 14, "MONTH"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 16, "YEAR"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", true)("colors", ctx.lineChartColors);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1wdXJjaGFzZS1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 31797:
/*!*******************************************************************************!*\
  !*** ./src/app/reports/sales-purchase-report/sales-purchase-report.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPurchaseReportModule": () => (/* binding */ SalesPurchaseReportModule)
/* harmony export */ });
/* harmony import */ var _sales_purchase_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-purchase-report.component */ 41745);
/* harmony import */ var _sales_purchase_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-purchase-routing.module */ 80361);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 2277);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);













class SalesPurchaseReportModule {
}
SalesPurchaseReportModule.ɵfac = function SalesPurchaseReportModule_Factory(t) { return new (t || SalesPurchaseReportModule)(); };
SalesPurchaseReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SalesPurchaseReportModule });
SalesPurchaseReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__.UTCToLocalTime], imports: [_sales_purchase_routing_module__WEBPACK_IMPORTED_MODULE_1__.SalesPurchaseRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_6__.ChartsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SalesPurchaseReportModule, { declarations: [_sales_purchase_report_component__WEBPACK_IMPORTED_MODULE_0__.SalesPurchaseReportComponent], imports: [_sales_purchase_routing_module__WEBPACK_IMPORTED_MODULE_1__.SalesPurchaseRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_6__.ChartsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule] }); })();


/***/ }),

/***/ 99907:
/*!********************************************************************************!*\
  !*** ./src/app/reports/sales-purchase-report/sales-purchase-report.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPurchaseReportService": () => (/* binding */ SalesPurchaseReportService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);




class SalesPurchaseReportService {
    constructor(httpClient, commonHttpErrorService) {
        this.httpClient = httpClient;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    getSalesVsPurchaseReport(month, year) {
        const url = `dashboard/salesvspurchase/${month}/${year}`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
}
SalesPurchaseReportService.ɵfac = function SalesPurchaseReportService_Factory(t) { return new (t || SalesPurchaseReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
SalesPurchaseReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SalesPurchaseReportService, factory: SalesPurchaseReportService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80361:
/*!********************************************************************************!*\
  !*** ./src/app/reports/sales-purchase-report/sales-purchase-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPurchaseRoutingModule": () => (/* binding */ SalesPurchaseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sales_purchase_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-purchase-report.component */ 41745);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _sales_purchase_report_component__WEBPACK_IMPORTED_MODULE_0__.SalesPurchaseReportComponent,
        data: { claimType: 'REP_SALES_VS_PURCHASE_REP' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    }
];
class SalesPurchaseRoutingModule {
}
SalesPurchaseRoutingModule.ɵfac = function SalesPurchaseRoutingModule_Factory(t) { return new (t || SalesPurchaseRoutingModule)(); };
SalesPurchaseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SalesPurchaseRoutingModule });
SalesPurchaseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesPurchaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_reports_sales-purchase-report_sales-purchase-report_module_ts.js.map