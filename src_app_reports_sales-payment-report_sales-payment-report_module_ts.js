"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_reports_sales-payment-report_sales-payment-report_module_ts"],{

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

/***/ 61723:
/*!*************************************************************************************!*\
  !*** ./src/app/reports/sales-payment-report/sales-payment-report-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPaymentReportRoutingModule": () => (/* binding */ SalesPaymentReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _sales_payment_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-payment-report.component */ 36621);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _sales_payment_report_component__WEBPACK_IMPORTED_MODULE_1__.SalesPaymentReportComponent,
        data: { claimType: 'REP_SO_PAYMENT_REP' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
class SalesPaymentReportRoutingModule {
}
SalesPaymentReportRoutingModule.ɵfac = function SalesPaymentReportRoutingModule_Factory(t) { return new (t || SalesPaymentReportRoutingModule)(); };
SalesPaymentReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SalesPaymentReportRoutingModule });
SalesPaymentReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesPaymentReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 36621:
/*!********************************************************************************!*\
  !*** ./src/app/reports/sales-payment-report/sales-payment-report.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPaymentReportComponent": () => (/* binding */ SalesPaymentReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/sales-order-resource-parameter */ 708);
/* harmony import */ var _core_services_date_range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/date-range */ 68287);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/paymentMethod.pipe */ 57432);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/purchase-order-paymentStatus.pipe */ 80443);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _sales_payment_report_datasource__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-payment-report.datasource */ 1626);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sales_payment_report_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales-payment-report.service */ 68716);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

































function SalesPaymentReportComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function SalesPaymentReportComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "DATE_RANGE_VALIDATION_MSG"), " ");
} }
function SalesPaymentReportComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SalesPaymentReportComponent_div_46_div_1_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.searchForm.errors == null ? null : ctx_r3.searchForm.errors.dateRange);
} }
function SalesPaymentReportComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "PAYMENT_DATE"), " ");
} }
function SalesPaymentReportComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 1, element_r20.paymentDate, "shortDate"), " ");
} }
function SalesPaymentReportComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "SO_NUMBER"), " ");
} }
const _c0 = function (a1) { return ["/sales-order/detail", a1]; };
function SalesPaymentReportComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 45)(1, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](2, _c0, element_r21.salesOrderId));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", element_r21.orderNumber, " ");
} }
function SalesPaymentReportComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "REFERENCE_NUMBER"), " ");
} }
function SalesPaymentReportComponent_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", element_r22.referenceNumber, " ");
} }
function SalesPaymentReportComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "AMOUNT"), " ");
} }
function SalesPaymentReportComponent_td_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, element_r23.amount), " ");
} }
function SalesPaymentReportComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "PAID_BY"), "");
} }
function SalesPaymentReportComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "paymentmethod");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, element_r24.paymentMethod), " ");
} }
const _c1 = function () { return [10, 20, 30]; };
function SalesPaymentReportComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-paginator", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("length", ctx_r14.salesOrderResource.totalCount)("pageSize", ctx_r14.salesOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](3, _c1));
} }
function SalesPaymentReportComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 49)(2, "span", 50)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function SalesPaymentReportComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 51);
} }
function SalesPaymentReportComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 52);
} }
function SalesPaymentReportComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 53);
} }
class SalesPaymentReportComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_6__.BaseComponent {
    constructor(salesPaymentReportService, toastrService, commonDialogService, translationService, fb, utcToLocalTime, customCurrencyPipe, paymentMethodPipe) {
        super(translationService);
        this.salesPaymentReportService = salesPaymentReportService;
        this.toastrService = toastrService;
        this.commonDialogService = commonDialogService;
        this.translationService = translationService;
        this.fb = fb;
        this.utcToLocalTime = utcToLocalTime;
        this.customCurrencyPipe = customCurrencyPipe;
        this.paymentMethodPipe = paymentMethodPipe;
        this.isData = false;
        this.isDeleted = false;
        this.currentDate = new Date();
        this.displayedColumns = ['paymentDate', 'orderNumber', 'referenceNumber', 'amount', 'paymentMethod'];
        this.footerToDisplayed = ['footer'];
        this.getLangDir();
        this.salesOrderResource = new _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.SalesOrderResourceParameter();
    }
    ngOnInit() {
        this.createSearchFormGroup();
        this.dataSource = new _sales_payment_report_datasource__WEBPACK_IMPORTED_MODULE_7__.SalesPaymentReportDataSource(this.salesPaymentReportService);
        this.dataSource.loadData(this.salesOrderResource);
        this.getResourceParameter();
    }
    createSearchFormGroup() {
        this.searchForm = this.fb.group({
            fromDate: [''],
            toDate: [''],
            filterProductValue: [''],
        }, {
            validators: (0,_core_services_date_range__WEBPACK_IMPORTED_MODULE_1__.dateCompare)()
        });
    }
    onSearch() {
        if (this.searchForm.valid) {
            this.salesOrderResource.fromDate = this.searchForm.get('fromDate').value;
            this.salesOrderResource.toDate = this.searchForm.get('toDate').value;
            this.dataSource.loadData(this.salesOrderResource);
        }
    }
    onClear() {
        this.searchForm.reset();
        this.salesOrderResource.fromDate = this.searchForm.get('fromDate').value;
        this.salesOrderResource.toDate = this.searchForm.get('toDate').value;
        this.dataSource.loadData(this.salesOrderResource);
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)((c) => {
            this.salesOrderResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.salesOrderResource.pageSize = this.paginator.pageSize;
            this.salesOrderResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.salesOrderResource);
        }))
            .subscribe();
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.salesOrderResource.pageSize = c.pageSize;
                this.salesOrderResource.skip = c.skip;
                this.salesOrderResource.totalCount = c.totalCount;
            }
        });
    }
    onDownloadReport() {
        this.salesPaymentReportService.getAllSalesOrderPaymentReportExcel(this.salesOrderResource)
            .subscribe((c) => {
            const salesOrderPayments = [...c.body];
            let heading = [[
                    this.translationService.getValue('PAYMENT_DATE'),
                    this.translationService.getValue('SO_NUMBER'),
                    this.translationService.getValue('REFERENCE_NUMBER'),
                    this.translationService.getValue('AMOUNT'),
                    this.translationService.getValue('PAID_BY')
                ]];
            let saleOrderPaymentReport = [];
            salesOrderPayments.forEach((salesOrderPayment) => {
                saleOrderPaymentReport.push({
                    'PAYMENT_DATE': this.utcToLocalTime.transform(salesOrderPayment.paymentDate, 'shortDate'),
                    'SO_NUMBER': salesOrderPayment.orderNumber,
                    'REFERENCE_NUMBER': salesOrderPayment.referenceNumber,
                    'AMOUNT': this.customCurrencyPipe.transform(salesOrderPayment.amount),
                    'PAID_BY': this.paymentMethodPipe.transform(salesOrderPayment.paymentMethod)
                });
            });
            let workBook = xlsx__WEBPACK_IMPORTED_MODULE_14__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_14__.utils.sheet_add_aoa(workBook, heading);
            let workSheet = xlsx__WEBPACK_IMPORTED_MODULE_14__.utils.sheet_add_json(workBook, saleOrderPaymentReport, { origin: "A2", skipHeader: true });
            xlsx__WEBPACK_IMPORTED_MODULE_14__.utils.book_append_sheet(workBook, workSheet, this.translationService.getValue('SALES_PAYMENT_ORDER_REPORT'));
            xlsx__WEBPACK_IMPORTED_MODULE_14__.writeFile(workBook, this.translationService.getValue('SALES_PAYMENT_ORDER_REPORT') + ".xlsx");
        });
    }
}
SalesPaymentReportComponent.ɵfac = function SalesPaymentReportComponent_Factory(t) { return new (t || SalesPaymentReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_sales_payment_report_service__WEBPACK_IMPORTED_MODULE_8__.SalesPaymentReportService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_9__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodPipe)); };
SalesPaymentReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: SalesPaymentReportComponent, selectors: [["app-sales-payment-report"]], viewQuery: function SalesPaymentReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomCurrencyPipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_4__.PaymentStatusPipe, _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 72, vars: 44, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-sm-12", "mb-3"], [3, "formGroup"], [1, "col-md-3"], [1, "form-group"], ["for", "fromDate"], ["id", "fromDate", "formControlName", "fromDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["fromDate", ""], ["for", "toDate"], ["id", "toDate", "formControlName", "toDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["toDate", ""], [1, "col-md-4", "report-tool-bar"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-search"], ["type", "submit", 1, "btn", "btn-danger", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-eraser"], ["type", "submit", 1, "btn", "btn-warning", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-download"], [1, "col-sm-12"], [4, "ngIf"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "matSortActive", "paymentDate", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "paymentDate"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderNumber"], ["matColumnDef", "referenceNumber"], ["matColumnDef", "amount"], ["matColumnDef", "paymentMethod"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "12", 4, "matFooterCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], [1, "loading-shade"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "routerLink"], ["mat-footer-cell", "", "colspan", "12"], [3, "length", "pageSize", "pageSizeOptions"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function SalesPaymentReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, SalesPaymentReportComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "form", 7)(12, "div", 5)(13, "div", 8)(14, "div", 9)(15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "owl-date-time", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div", 8)(23, "div", 9)(24, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "owl-date-time", 12, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 17)(32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesPaymentReportComponent_Template_button_click_32_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesPaymentReportComponent_Template_button_click_36_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesPaymentReportComponent_Template_button_click_40_listener() { return ctx.onDownloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 5)(45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](46, SalesPaymentReportComponent_div_46_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 5)(48, "div", 24)(49, "div", 26)(50, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](51, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](52, SalesPaymentReportComponent_th_52_Template, 3, 3, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](53, SalesPaymentReportComponent_td_53_Template, 3, 4, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](54, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](55, SalesPaymentReportComponent_th_55_Template, 3, 3, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](56, SalesPaymentReportComponent_td_56_Template, 3, 4, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](57, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, SalesPaymentReportComponent_th_58_Template, 3, 3, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](59, SalesPaymentReportComponent_td_59_Template, 2, 1, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](60, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](61, SalesPaymentReportComponent_th_61_Template, 3, 3, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](62, SalesPaymentReportComponent_td_62_Template, 3, 3, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](63, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](64, SalesPaymentReportComponent_th_64_Template, 3, 3, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](65, SalesPaymentReportComponent_td_65_Template, 3, 3, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](66, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](67, SalesPaymentReportComponent_td_67_Template, 2, 4, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, SalesPaymentReportComponent_tr_68_Template, 6, 3, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](69, SalesPaymentReportComponent_tr_69_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, SalesPaymentReportComponent_tr_70_Template, 1, 0, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](71, SalesPaymentReportComponent_tr_71_Template, 1, 0, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](21);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 26, "SALES_PAYMENT_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 28, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 30, "FROM_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](19, 32, "FROM_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r1)("owlDateTime", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 34, "TO_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](28, 36, "TO_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r2)("owlDateTime", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 38, "SEARCH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](39, 40, "CLEAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](43, 42, "DOWNLOAD_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.searchForm.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed)("matFooterRowDefSticky", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinner, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_24__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_24__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_24__.OwlDateTimeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomCurrencyPipe, _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1wYXltZW50LXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1626:
/*!*********************************************************************************!*\
  !*** ./src/app/reports/sales-payment-report/sales-payment-report.datasource.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPaymentReportDataSource": () => (/* binding */ SalesPaymentReportDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class SalesPaymentReportDataSource {
    constructor(salesPaymentReportService) {
        this.salesPaymentReportService = salesPaymentReportService;
        this._salesOrderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this._responseHeaderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.loading$ = this.loadingSubject.asObservable();
        this._count = 0;
        this.responseHeaderSubject$ = this._responseHeaderSubject$.asObservable();
    }
    get count() {
        return this._count;
    }
    connect() {
        this.sub$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        return this._salesOrderSubject$.asObservable();
    }
    disconnect() {
        this._salesOrderSubject$.complete();
        this.loadingSubject.complete();
        this.sub$.unsubscribe();
    }
    loadData(salesOrderResource) {
        this.loadingSubject.next(true);
        this.sub$ = this.salesPaymentReportService.getAllSalesOrderPaymentReport(salesOrderResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject.next(false)))
            .subscribe((resp) => {
            if (resp && resp.headers) {
                const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
                this._responseHeaderSubject$.next(paginationParam);
                const salesOrders = [...resp.body];
                this._count = salesOrders.length;
                this._salesOrderSubject$.next(salesOrders);
            }
        });
    }
}


/***/ }),

/***/ 29881:
/*!*****************************************************************************!*\
  !*** ./src/app/reports/sales-payment-report/sales-payment-report.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPaymentReportModule": () => (/* binding */ SalesPaymentReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sales_payment_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-payment-report-routing.module */ 61723);
/* harmony import */ var _sales_payment_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-payment-report.component */ 36621);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
























class SalesPaymentReportModule {
}
SalesPaymentReportModule.ɵfac = function SalesPaymentReportModule_Factory(t) { return new (t || SalesPaymentReportModule)(); };
SalesPaymentReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SalesPaymentReportModule });
SalesPaymentReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _sales_payment_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesPaymentReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_19__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_19__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SalesPaymentReportModule, { declarations: [_sales_payment_report_component__WEBPACK_IMPORTED_MODULE_1__.SalesPaymentReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _sales_payment_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesPaymentReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_19__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_19__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDividerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule] }); })();


/***/ }),

/***/ 68716:
/*!******************************************************************************!*\
  !*** ./src/app/reports/sales-payment-report/sales-payment-report.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPaymentReportService": () => (/* binding */ SalesPaymentReportService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class SalesPaymentReportService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllSalesOrderPaymentReport(resourceParams) {
        const url = 'SalesOrderPayment/report';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('name', resourceParams.name)
            .set('orderNumber', resourceParams.orderNumber)
            .set('customerName', resourceParams.customerName)
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '')
            .set('productId', resourceParams.productId ? resourceParams.productId : '')
            .set('customerId', resourceParams.customerId ? resourceParams.customerId : '')
            .set('isSalesOrderRequest', resourceParams.isSalesOrderRequest);
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
    getAllSalesOrderPaymentReportExcel(resourceParams) {
        const url = 'SalesOrderPayment/report';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', "0")
            .set('Skip', "0")
            .set('SearchQuery', resourceParams.searchQuery)
            .set('name', resourceParams.name)
            .set('orderNumber', resourceParams.orderNumber)
            .set('customerName', resourceParams.customerName)
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '')
            .set('productId', resourceParams.productId ? resourceParams.productId : '')
            .set('customerId', resourceParams.customerId ? resourceParams.customerId : '')
            .set('isSalesOrderRequest', resourceParams.isSalesOrderRequest);
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
}
SalesPaymentReportService.ɵfac = function SalesPaymentReportService_Factory(t) { return new (t || SalesPaymentReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
SalesPaymentReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SalesPaymentReportService, factory: SalesPaymentReportService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_reports_sales-payment-report_sales-payment-report_module_ts.js.map