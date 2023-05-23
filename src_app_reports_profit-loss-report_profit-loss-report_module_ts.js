"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_reports_profit-loss-report_profit-loss-report_module_ts"],{

/***/ 75519:
/*!***********************************************************!*\
  !*** ./src/app/core/domain-classes/resource-parameter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceParameter": () => (/* binding */ ResourceParameter)
/* harmony export */ });
class ResourceParameter {
    constructor() {
        this.fields = '';
        this.orderBy = '';
        this.searchQuery = '';
        this.pageSize = 30;
        this.skip = 0;
        this.name = '';
        this.totalCount = 0;
    }
}


/***/ }),

/***/ 708:
/*!***********************************************************************!*\
  !*** ./src/app/core/domain-classes/sales-order-resource-parameter.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderResourceParameter": () => (/* binding */ SalesOrderResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);
/* harmony import */ var _sales_order_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-order-status */ 80002);


class SalesOrderResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
    constructor() {
        super(...arguments);
        this.orderNumber = '';
        this.customerName = '';
        this.customerId = '';
        this.isSalesOrderRequest = false;
        this.status = _sales_order_status__WEBPACK_IMPORTED_MODULE_1__.SalesOrderStatusEnum.All;
    }
}


/***/ }),

/***/ 80002:
/*!***********************************************************!*\
  !*** ./src/app/core/domain-classes/sales-order-status.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderStatusEnum": () => (/* binding */ SalesOrderStatusEnum)
/* harmony export */ });
var SalesOrderStatusEnum;
(function (SalesOrderStatusEnum) {
    SalesOrderStatusEnum[SalesOrderStatusEnum["Not_Return"] = 0] = "Not_Return";
    SalesOrderStatusEnum[SalesOrderStatusEnum["Return"] = 1] = "Return";
    SalesOrderStatusEnum[SalesOrderStatusEnum["All"] = 2] = "All";
})(SalesOrderStatusEnum || (SalesOrderStatusEnum = {}));


/***/ }),

/***/ 72512:
/*!*********************************************************************************!*\
  !*** ./src/app/reports/profit-loss-report/profit-loss-report-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitLossReportRoutingModule": () => (/* binding */ ProfitLossReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _profit_loss_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profit-loss-report.component */ 40050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _profit_loss_report_component__WEBPACK_IMPORTED_MODULE_1__.ProfitLossReportComponent,
        data: { claimType: 'REP_VIEW_PRO_LOSS_REP' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    }
];
class ProfitLossReportRoutingModule {
}
ProfitLossReportRoutingModule.ɵfac = function ProfitLossReportRoutingModule_Factory(t) { return new (t || ProfitLossReportRoutingModule)(); };
ProfitLossReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProfitLossReportRoutingModule });
ProfitLossReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProfitLossReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 40050:
/*!****************************************************************************!*\
  !*** ./src/app/reports/profit-loss-report/profit-loss-report.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitLossReportComponent": () => (/* binding */ ProfitLossReportComponent)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/sales-order-resource-parameter */ 708);
/* harmony import */ var _core_services_date_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/date-range */ 68287);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_expense_expense_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/expense/expense.service */ 55941);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _profit_loss_report_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profit-loss-report.service */ 11620);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

















function ProfitLossReportComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "DATE_RANGE_VALIDATION_MSG"), " ");
} }
function ProfitLossReportComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProfitLossReportComponent_div_40_div_1_Template, 3, 3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.searchForm.errors == null ? null : ctx_r2.searchForm.errors.dateRange);
} }
class ProfitLossReportComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent {
    constructor(expenseService, toastrService, translationService, profitLossReportService, fb, utcToLocalTime, customCurrencyPipe) {
        super(translationService);
        this.expenseService = expenseService;
        this.toastrService = toastrService;
        this.translationService = translationService;
        this.profitLossReportService = profitLossReportService;
        this.fb = fb;
        this.utcToLocalTime = utcToLocalTime;
        this.customCurrencyPipe = customCurrencyPipe;
        this.totalAmount = 0;
        this.currentDate = new Date();
        this.getLangDir();
        this.saleOrderResource = new _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.SalesOrderResourceParameter();
        this.saleOrderResource.pageSize = 15;
        this.saleOrderResource.orderBy = 'createdDate asc';
    }
    ngOnInit() {
        this.createSearchFormGroup();
        this.searchForm.get('fromDate').setValue(new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() - 30));
        this.searchForm.get('toDate').setValue(this.currentDate);
        this.saleOrderResource.fromDate = this.searchForm.get('fromDate').value;
        this.saleOrderResource.toDate = this.searchForm.get('toDate').value;
        this.getSaleOrderProfiteLoss(this.saleOrderResource);
        this.getPurchaseProfitLoss(this.saleOrderResource);
    }
    createSearchFormGroup() {
        this.searchForm = this.fb.group({
            fromDate: [''],
            toDate: ['']
        }, {
            validators: (0,_core_services_date_range__WEBPACK_IMPORTED_MODULE_1__.dateCompare)()
        });
    }
    onSearch() {
        if (this.searchForm.valid) {
            this.saleOrderResource.fromDate = this.searchForm.get('fromDate').value;
            this.saleOrderResource.toDate = this.searchForm.get('toDate').value;
            this.getSaleOrderProfiteLoss(this.saleOrderResource);
            this.getPurchaseProfitLoss(this.saleOrderResource);
        }
    }
    onClear() {
        this.searchForm.reset();
        this.saleOrderResource.fromDate = this.searchForm.get('fromDate').value;
        this.saleOrderResource.toDate = this.searchForm.get('toDate').value;
        this.getSaleOrderProfiteLoss(this.saleOrderResource);
    }
    getSaleOrderProfiteLoss(saleOrderResource) {
        this.profitLossReportService.getSaleOrderProfitLoss(saleOrderResource).subscribe((resp) => {
            if (resp) {
                this.saleOrderProfitLoss = resp;
            }
        });
    }
    getPurchaseProfitLoss(saleOrderResource) {
        this.profitLossReportService.getPurchaseProfitLoss(saleOrderResource).subscribe((resp) => {
            if (resp) {
                this.purchaseOrderProfitLoss = resp;
            }
        });
    }
    onDownloadReport() {
        var _a, _b, _c, _d, _e, _f, _g;
        let heading = [[this.translationService.getValue('TOTAL_PURCHASE'),
                this.translationService.getValue('TOTAL_PURCHASE_TAX'),
                this.translationService.getValue('TOTAL_DISCOUNT_ON_PURCHASE'),
                this.translationService.getValue('PAID_PAYMENT'),
                this.translationService.getValue('PURCHASE_DUE'),
                this.translationService.getValue('GROSS_TOTAL')]];
        let expensesReport = [];
        expensesReport.push({
            'Total Purchase': this.customCurrencyPipe.transform(((_a = this.purchaseOrderProfitLoss) === null || _a === void 0 ? void 0 : _a.total) - ((_b = this.purchaseOrderProfitLoss) === null || _b === void 0 ? void 0 : _b.totalTax) + ((_c = this.purchaseOrderProfitLoss) === null || _c === void 0 ? void 0 : _c.totalDiscount)),
            'Total Purchase Tax': this.customCurrencyPipe.transform(this.purchaseOrderProfitLoss.totalTax),
            'Total Discount on Purchase': this.customCurrencyPipe.transform((_d = this.purchaseOrderProfitLoss) === null || _d === void 0 ? void 0 : _d.totalDiscount),
            'Paid Payment': this.customCurrencyPipe.transform(this.purchaseOrderProfitLoss.paidPayment),
            'Purchase Due': this.customCurrencyPipe.transform(((_e = this.purchaseOrderProfitLoss) === null || _e === void 0 ? void 0 : _e.total) - ((_f = this.purchaseOrderProfitLoss) === null || _f === void 0 ? void 0 : _f.paidPayment)),
            'Gross Total': this.customCurrencyPipe.transform((_g = this.purchaseOrderProfitLoss) === null || _g === void 0 ? void 0 : _g.total),
        });
        let workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.sheet_add_aoa(workBook, heading);
        let workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.sheet_add_json(workBook, expensesReport, { origin: "A2", skipHeader: true });
        xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.book_append_sheet(workBook, workSheet, this.translationService.getValue('PURCHASE_PROFIT_&LOSS_REPORT'));
        xlsx__WEBPACK_IMPORTED_MODULE_9__.writeFile(workBook, this.translationService.getValue('PURCHASE_PROFIT_&LOSS_REPORT') + ".xlsx");
    }
    onSaleDownloadReport() {
        var _a, _b, _c, _d, _e, _f, _g;
        let heading = [[this.translationService.getValue('TOTAL_SALES'),
                this.translationService.getValue('TOTAL_SALES_TAX'),
                this.translationService.getValue('TOTAL_DISCOUNT_ON_SALES'),
                this.translationService.getValue('PAID_PAYMENT'),
                this.translationService.getValue('SALES_DUE'),
                this.translationService.getValue('GROSS_TOTAL')]];
        let expensesReport = [];
        expensesReport.push({
            'Total Sales': this.customCurrencyPipe.transform(((_a = this.saleOrderProfitLoss) === null || _a === void 0 ? void 0 : _a.total) - ((_b = this.saleOrderProfitLoss) === null || _b === void 0 ? void 0 : _b.totalTax) + ((_c = this.saleOrderProfitLoss) === null || _c === void 0 ? void 0 : _c.totalDiscount)),
            'Total Sales Tax': this.customCurrencyPipe.transform(this.saleOrderProfitLoss.totalTax),
            'Total Discount on Sales': this.customCurrencyPipe.transform((_d = this.saleOrderProfitLoss) === null || _d === void 0 ? void 0 : _d.totalDiscount),
            'Paid Payment': this.customCurrencyPipe.transform(this.saleOrderProfitLoss.paidPayment),
            'Sales Due': this.customCurrencyPipe.transform(((_e = this.saleOrderProfitLoss) === null || _e === void 0 ? void 0 : _e.total) - ((_f = this.saleOrderProfitLoss) === null || _f === void 0 ? void 0 : _f.paidPayment)),
            'Gross Total': this.customCurrencyPipe.transform((_g = this.saleOrderProfitLoss) === null || _g === void 0 ? void 0 : _g.total),
        });
        let workBook = xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.sheet_add_aoa(workBook, heading);
        let workSheet = xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.sheet_add_json(workBook, expensesReport, { origin: "A2", skipHeader: true });
        xlsx__WEBPACK_IMPORTED_MODULE_9__.utils.book_append_sheet(workBook, workSheet, this.translationService.getValue('SALES_PROFIT_&LOSS_REPORT'));
        xlsx__WEBPACK_IMPORTED_MODULE_9__.writeFile(workBook, this.translationService.getValue('SALES_PROFIT_&LOSS_REPORT') + ".xlsx");
    }
}
ProfitLossReportComponent.ɵfac = function ProfitLossReportComponent_Factory(t) { return new (t || ProfitLossReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_expense_expense_service__WEBPACK_IMPORTED_MODULE_5__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_profit_loss_report_service__WEBPACK_IMPORTED_MODULE_7__.ProfitLossReportService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__.UTCToLocalTime), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomCurrencyPipe)); };
ProfitLossReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ProfitLossReportComponent, selectors: [["app-profit-loss-report"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__.UTCToLocalTime, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomCurrencyPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 144, vars: 93, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], [1, "row"], [1, "col-sm-12", "mb-3"], [3, "formGroup"], [1, "col-md-3"], [1, "form-group"], ["for", "fromDate"], ["id", "fromDate", "formControlName", "fromDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["fromDate", ""], ["for", "toDate"], ["id", "toDate", "formControlName", "toDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["toDate", ""], [1, "col-md-4", "report-tool-bar"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], ["type", "submit", 1, "btn", "btn-danger", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-eraser"], [1, "col-sm-12"], [4, "ngIf"], [1, "col-md-6"], [1, "box", "box-info"], [1, "box-body", "table-responsive", "no-padding"], ["id", "report-data", 1, "table", "table-bordered", "table-hover"], ["colspan", "2", 1, "text-bold", "text-primary"], [1, "header"], [1, "float-right"], ["type", "submit", 1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "fas", "fa-download"], [1, "text-right", "pur_total"], [1, "text-right"], [1, "text-right", "text-success"], [1, "text-right", "text-danger"], [1, "profite"], [1, "text-bold"], [1, "text-right", "text-primary"], [1, "box-body", "table-responsive"], [1, "table", "table-bordered", "table-hover"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function ProfitLossReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "form", 6)(10, "div", 4)(11, "div", 7)(12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "owl-date-time", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](27, "owl-date-time", 11, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 16)(30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfitLossReportComponent_Template_button_click_30_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfitLossReportComponent_Template_button_click_34_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](35, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "div", 4)(39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, ProfitLossReportComponent_div_40_Template, 2, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 4)(42, "div", 23)(43, "div", 24)(44, "div", 25)(45, "table", 26)(46, "tbody")(47, "tr")(48, "td", 27)(49, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div", 29)(53, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfitLossReportComponent_Template_button_click_53_listener() { return ctx.onDownloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](54, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "tr")(58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "tr")(64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "tr")(70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "tr")(76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "tr")(82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "tr", 36)(88, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div", 23)(94, "div", 24)(95, "div", 39)(96, "table", 40)(97, "tbody")(98, "tr")(99, "td", 27)(100, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 29)(104, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProfitLossReportComponent_Template_button_click_104_listener() { return ctx.onSaleDownloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](105, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "tr")(109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "tr")(115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "tr")(121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "tr")(127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "tr")(133, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "tr", 36)(139, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](141, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](142, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](19);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 47, "PROFIT_VS_LOSS_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 49, "FROM_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](17, 51, "FROM_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r0)("owlDateTime", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 53, "TO_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 55, "TO_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r1)("owlDateTime", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 57, "SEARCH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 59, "CLEAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.searchForm.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 61, "PURCHASE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](56, 63, "DOWNLOAD_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 65, "TOTAL_PURCHASE"), "(", ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.totalItem, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.total) - (ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.totalTax) + (ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.totalDiscount));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](66, 67, "TOTAL_PURCHASE_TAX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.totalTax);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](72, 69, "TOTAL_DISCOUNT_ON_PURCHASE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.totalDiscount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](78, 71, "PAID_PAYMENT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.paidPayment, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](84, 73, "PURCHASE_DUE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.total) - (ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.paidPayment));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](90, 75, "GROSS_TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.purchaseOrderProfitLoss == null ? null : ctx.purchaseOrderProfitLoss.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](102, 77, "SALES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](107, 79, "DOWNLOAD_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](111, 81, "TOTAL_SALES"), "(", ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.totalItem, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.total) - (ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.totalTax) + (ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.totalDiscount));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](117, 83, "TOTAL_SALES_TAX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.totalTax);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](123, 85, "TOTAL_DISCOUNT_ON_SALES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.totalDiscount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](129, 87, "PAID_PAYMENT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.paidPayment, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](135, 89, "SALES_DUE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.total) - (ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.paidPayment));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](141, 91, "GROSS_TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.saleOrderProfitLoss == null ? null : ctx.saleOrderProfitLoss.total);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_13__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_13__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_13__.OwlDateTimeComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".box.box-primary[_ngcontent-%COMP%] {\n  border-top-color: 1px solid #2095F3 !important;\n}\n\n.profite[_ngcontent-%COMP%] {\n  background-color: #d2d6de;\n}\n\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpdC1sb3NzLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXHJlcG9ydHNcXHByb2ZpdC1sb3NzLXJlcG9ydFxccHJvZml0LWxvc3MtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksOENBQUE7QUNBSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKIiwiZmlsZSI6InByb2ZpdC1sb3NzLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYm94LmJveC1wcmltYXJ5IHtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IDFweCBzb2xpZCAjMjA5NUYzICFpbXBvcnRhbnQ7XHJcbn1cclxuLnByb2ZpdGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJkNmRlO1xyXG59XHJcbi50ZXh0LWJvbGR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxuXHJcbiIsIi5ib3guYm94LXByaW1hcnkge1xuICBib3JkZXItdG9wLWNvbG9yOiAxcHggc29saWQgIzIwOTVGMyAhaW1wb3J0YW50O1xufVxuXG4ucHJvZml0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmQ2ZGU7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */"] });


/***/ }),

/***/ 81291:
/*!*************************************************************************!*\
  !*** ./src/app/reports/profit-loss-report/profit-loss-report.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitLossReportModule": () => (/* binding */ ProfitLossReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _profit_loss_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profit-loss-report.component */ 40050);
/* harmony import */ var _profit_loss_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profit-loss-report-routing.module */ 72512);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


















class ProfitLossReportModule {
}
ProfitLossReportModule.ɵfac = function ProfitLossReportModule_Factory(t) { return new (t || ProfitLossReportModule)(); };
ProfitLossReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProfitLossReportModule });
ProfitLossReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _profit_loss_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfitLossReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_12__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_12__.OwlNativeDateTimeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProfitLossReportModule, { declarations: [_profit_loss_report_component__WEBPACK_IMPORTED_MODULE_0__.ProfitLossReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _profit_loss_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProfitLossReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_12__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_12__.OwlNativeDateTimeModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatNativeDateModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule] }); })();


/***/ }),

/***/ 11620:
/*!**************************************************************************!*\
  !*** ./src/app/reports/profit-loss-report/profit-loss-report.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfitLossReportService": () => (/* binding */ ProfitLossReportService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ProfitLossReportService {
    constructor(http) {
        this.http = http;
    }
    getSaleOrderProfitLoss(resourceParams) {
        const url = 'salesOrder/items/profitLoss';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '');
        return this.http.get(url, {
            params: customParams,
        });
    }
    getPurchaseProfitLoss(resourceParams) {
        const url = 'purchaseorder/items/profitLoss';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '');
        return this.http.get(url, {
            params: customParams,
        });
    }
}
ProfitLossReportService.ɵfac = function ProfitLossReportService_Factory(t) { return new (t || ProfitLossReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ProfitLossReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfitLossReportService, factory: ProfitLossReportService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_reports_profit-loss-report_profit-loss-report_module_ts.js.map