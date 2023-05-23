"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_core_domain-classes_resource-parameter_ts-src_app_reports_customer-payment-report_cus-26df86"],{

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

/***/ 61781:
/*!**********************************************!*\
  !*** ./src/app/customer/customer.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class CustomerService {
    constructor(http) {
        this.http = http;
    }
    getCustomers(resourceParams) {
        const url = 'customer';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('fields', resourceParams.fields)
            .set('orderBy', resourceParams.orderBy)
            .set('pageSize', resourceParams.pageSize.toString())
            .set('skip', resourceParams.skip.toString())
            .set('searchQuery', resourceParams.searchQuery)
            .set('customerName', resourceParams.customerName)
            .set('mobileNo', resourceParams.mobileNo)
            .set('phoneNo', resourceParams.phoneNo)
            .set('email', resourceParams.email)
            .set('contactPerson', resourceParams.contactPerson)
            .set('website', resourceParams.website);
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getCustomersForDropDown(searchBy, searchString) {
        const url = 'customer/search';
        if (searchString && searchBy) {
            let params = `?searchQuery=${searchString.trim()}&searchBy=${searchBy}&pageSize=10`;
            return this.http.get(url + params);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }
    getWalkInCustomer() {
        const url = 'customer/walkIn';
        return this.http.get(url);
    }
    getCustomer(id) {
        const url = 'customer/' + id;
        return this.http.get(url);
    }
    deleteCustomer(id) {
        const url = 'customer/' + id;
        return this.http.delete(url);
    }
    updateCustomer(id, customer) {
        const url = 'customer/' + id;
        return this.http.put(url, customer);
    }
    saveCustomer(customer) {
        const url = 'customer';
        return this.http.post(url, customer);
    }
    checkEmailOrPhoneExist(email, mobileNo, id) {
        const url = `customer/${id}/Exist?email=${email}&mobileNo=${mobileNo}`;
        return this.http.get(url);
    }
    getCustomerPayments(resourceParams) {
        const url = 'customer/GetCustomerPayment';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('customerName', resourceParams.customerName);
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getCustomerPaymentsReport(resourceParams) {
        const url = 'customer/GetCustomerPayment/report';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('customerName', resourceParams.customerName);
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
CustomerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 20112:
/*!*******************************************************************************************!*\
  !*** ./src/app/reports/customer-payment-report/customer-payment-report-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPaymentReportRoutingModule": () => (/* binding */ CustomerPaymentReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _customer_payment_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-payment-report.component */ 91612);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _customer_payment_report_component__WEBPACK_IMPORTED_MODULE_0__.CustomerPaymentReportComponent,
        data: { claimType: 'REP_CUST_PAYMENT_REP' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    }
];
class CustomerPaymentReportRoutingModule {
}
CustomerPaymentReportRoutingModule.ɵfac = function CustomerPaymentReportRoutingModule_Factory(t) { return new (t || CustomerPaymentReportRoutingModule)(); };
CustomerPaymentReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerPaymentReportRoutingModule });
CustomerPaymentReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerPaymentReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 91612:
/*!**************************************************************************************!*\
  !*** ./src/app/reports/customer-payment-report/customer-payment-report.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPaymentReportComponent": () => (/* binding */ CustomerPaymentReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/customer-resource-parameter */ 13231);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _customer_payment_report_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-payment-report.datasource */ 14443);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/customer/customer.service */ 61781);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

























function CustomerPaymentReportComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
const _c0 = function (a1) { return ["/customer/", a1]; };
function CustomerPaymentReportComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 34)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const customer_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, customer_r18.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", customer_r18.customerName, " ");
} }
function CustomerPaymentReportComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "TOTAL_AMOUNT"), " ");
} }
function CustomerPaymentReportComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, customer_r19.totalAmount), " ");
} }
function CustomerPaymentReportComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "TOTAL_PAID_AMOUNT"), " ");
} }
function CustomerPaymentReportComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, customer_r20.totalPaidAmount), " ");
} }
function CustomerPaymentReportComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "TOTAL_PENDING_AMOUNT"), " ");
} }
function CustomerPaymentReportComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", customer_r21.totalPendingAmount < 0 ? 0 : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, customer_r21.totalPendingAmount), " ");
} }
function CustomerPaymentReportComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 40)(1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function CustomerPaymentReportComponent_th_28_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r22.NameFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r8.NameFilter);
} }
function CustomerPaymentReportComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 42);
} }
function CustomerPaymentReportComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 42);
} }
function CustomerPaymentReportComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 42);
} }
const _c1 = function () { return [10, 20, 30]; };
function CustomerPaymentReportComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-paginator", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("length", ctx_r12.customerResource.totalCount)("pageSize", ctx_r12.customerResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c1));
} }
function CustomerPaymentReportComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 45);
} }
function CustomerPaymentReportComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 46);
} }
function CustomerPaymentReportComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 47);
} }
function CustomerPaymentReportComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 48);
} }
function CustomerPaymentReportComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["customerName-search", "totalAmount-search", "totalPaidAmount-search", "totalPendingAmount-search"]; };
class CustomerPaymentReportComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(customerService, translateService, utcToLocalTime, customCurrencyPipe, translationService) {
        super(translationService);
        this.customerService = customerService;
        this.translateService = translateService;
        this.utcToLocalTime = utcToLocalTime;
        this.customCurrencyPipe = customCurrencyPipe;
        this.translationService = translationService;
        this.displayedColumns = ['customerName', 'totalAmount', 'totalPaidAmount', 'totalPendingAmount'];
        this.columnsToDisplay = ["footer"];
        this.isLoadingResults = true;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.getLangDir();
        this.customerResource = new _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.CustomerResourceParameter();
        this.customerResource.pageSize = 10;
        this.customerResource.orderBy = 'customerName asc';
    }
    get NameFilter() {
        return this._nameFilter;
    }
    set NameFilter(v) {
        this._nameFilter = v;
        const nameFilter = `customerName##${v}`;
        this.filterObservable$.next(nameFilter);
    }
    ngOnInit() {
        this.dataSource = new _customer_payment_report_datasource__WEBPACK_IMPORTED_MODULE_2__.CustomerPaymentReportDataSource(this.customerService);
        this.dataSource.loadData(this.customerResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
            .subscribe((c) => {
            this.customerResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split('##');
            if (strArray[0] === 'customerName') {
                this.customerResource.customerName = escape(strArray[1]);
            }
            this.dataSource.loadData(this.customerResource);
        });
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
            this.customerResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.customerResource.pageSize = this.paginator.pageSize;
            this.customerResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.customerResource);
        }))
            .subscribe();
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.customerResource.pageSize = c.pageSize;
                this.customerResource.skip = c.skip;
                this.customerResource.totalCount = c.totalCount;
            }
        });
    }
    onDownloadReport() {
        this.customerService.getCustomerPaymentsReport(this.customerResource)
            .subscribe((c) => {
            let customerPayments = [...c.body];
            let heading = [[this.translateService.getValue('NAME'), this.translateService.getValue('TOTAL_AMOUNT'), this.translateService.getValue('TOTAL_PAID_AMOUNT'), this.translateService.getValue('TOTAL_PENDING_AMOUNT')]];
            let customerPaymentsReport = [];
            customerPayments.forEach((customerPayment) => {
                customerPaymentsReport.push({
                    'name': customerPayment.customerName,
                    'totalAmount': this.customCurrencyPipe.transform(customerPayment.totalAmount),
                    'totalPaidAmount': this.customCurrencyPipe.transform(customerPayment.totalPaidAmount),
                    'totalPendingAmount': this.customCurrencyPipe.transform(customerPayment.totalPendingAmount < 0 ? 0 : customerPayment.totalPendingAmount)
                });
            });
            let workBook = xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.sheet_add_aoa(workBook, heading);
            let workSheet = xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.sheet_add_json(workBook, customerPaymentsReport, { origin: "A2", skipHeader: true });
            xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.book_append_sheet(workBook, workSheet, this.translationService.getValue('CUSTOMER_PAYMENT_REPORT'));
            xlsx__WEBPACK_IMPORTED_MODULE_13__.writeFile(workBook, this.translationService.getValue('CUSTOMER_PAYMENT_REPORT') + ".xlsx");
        });
    }
}
CustomerPaymentReportComponent.ɵfac = function CustomerPaymentReportComponent_Factory(t) { return new (t || CustomerPaymentReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_5__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__.UTCToLocalTime), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_4__.CustomCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.TranslationService)); };
CustomerPaymentReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CustomerPaymentReportComponent, selectors: [["app-customer-payment-report"]], viewQuery: function CustomerPaymentReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__.UTCToLocalTime, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_4__.CustomCurrencyPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 43, vars: 19, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], [1, "row"], [1, "col-md-4", "mb-4"], ["type", "submit", 1, "btn", "btn-warning", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-download"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "customerName", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "customerName", "sticky", ""], ["class", "table-column-300", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalAmount"], ["class", "table-column-200", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalPaidAmount"], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalPendingAmount"], ["matColumnDef", "customerName-search", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "totalAmount-search", "sticky", ""], ["class", "pr-5", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "totalPaidAmount-search", "sticky", ""], ["matColumnDef", "totalPendingAmount-search", "sticky", ""], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "4", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["class", "loading-shade", 4, "ngIf"], ["mat-header-cell", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], [3, "routerLink"], ["mat-header-cell", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mat-header-cell", "", 1, "pr-5"], ["mat-footer-cell", "", "colspan", "4"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-footer-row", ""], [1, "loading-shade"]], template: function CustomerPaymentReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomerPaymentReportComponent_Template_button_click_9_listener() { return ctx.onDownloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 8)(14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, CustomerPaymentReportComponent_th_16_Template, 3, 3, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, CustomerPaymentReportComponent_td_17_Template, 3, 4, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, CustomerPaymentReportComponent_th_19_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, CustomerPaymentReportComponent_td_20_Template, 3, 3, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, CustomerPaymentReportComponent_th_22_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CustomerPaymentReportComponent_td_23_Template, 3, 3, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](24, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, CustomerPaymentReportComponent_th_25_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, CustomerPaymentReportComponent_td_26_Template, 3, 3, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](27, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, CustomerPaymentReportComponent_th_28_Template, 2, 1, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](29, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, CustomerPaymentReportComponent_th_30_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](31, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, CustomerPaymentReportComponent_th_32_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](33, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, CustomerPaymentReportComponent_th_34_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](35, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, CustomerPaymentReportComponent_td_36_Template, 2, 4, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, CustomerPaymentReportComponent_tr_37_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, CustomerPaymentReportComponent_tr_38_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, CustomerPaymentReportComponent_tr_39_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, CustomerPaymentReportComponent_tr_40_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, CustomerPaymentReportComponent_div_41_Template, 2, 0, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 12, "CUSTOMER_PAYMENT_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 14, "DOWNLOAD_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](18, _c2))("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matFooterRowDef", ctx.columnsToDisplay)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 16, ctx.dataSource.loading$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_20__.MatFooterRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_4__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1wYXltZW50LXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 14443:
/*!***************************************************************************************!*\
  !*** ./src/app/reports/customer-payment-report/customer-payment-report.datasource.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPaymentReportDataSource": () => (/* binding */ CustomerPaymentReportDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class CustomerPaymentReportDataSource {
    constructor(customerService) {
        this.customerService = customerService;
        this._customerPaymentSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
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
        return this._customerPaymentSubject$.asObservable();
    }
    disconnect() {
        this._customerPaymentSubject$.complete();
        this.loadingSubject.complete();
        this.sub$.unsubscribe();
    }
    loadData(customerResource) {
        this.loadingSubject.next(true);
        this.sub$ = this.customerService.getCustomerPayments(customerResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject.next(false)))
            .subscribe((resp) => {
            if (resp && resp.headers) {
                const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
                this._responseHeaderSubject$.next(paginationParam);
                const customerPayments = [...resp.body];
                this._count = customerPayments.length;
                this._customerPaymentSubject$.next(customerPayments);
            }
        });
    }
}


/***/ }),

/***/ 28788:
/*!***********************************************************************************!*\
  !*** ./src/app/reports/customer-payment-report/customer-payment-report.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPaymentReportModule": () => (/* binding */ CustomerPaymentReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _customer_payment_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-payment-report.component */ 91612);
/* harmony import */ var _customer_payment_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-payment-report-routing.module */ 20112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);










class CustomerPaymentReportModule {
}
CustomerPaymentReportModule.ɵfac = function CustomerPaymentReportModule_Factory(t) { return new (t || CustomerPaymentReportModule)(); };
CustomerPaymentReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CustomerPaymentReportModule });
CustomerPaymentReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _customer_payment_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomerPaymentReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CustomerPaymentReportModule, { declarations: [_customer_payment_report_component__WEBPACK_IMPORTED_MODULE_0__.CustomerPaymentReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _customer_payment_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.CustomerPaymentReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_core_domain-classes_resource-parameter_ts-src_app_reports_customer-payment-report_cus-26df86.js.map