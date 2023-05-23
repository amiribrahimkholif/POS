"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["default-src_app_core_domain-classes_sales-order-resource-parameter_ts-src_app_customer_custom-3e5c04"],{

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

/***/ 80931:
/*!*******************************************************!*\
  !*** ./src/app/sales-order/sales-order-datasource.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderDataSource": () => (/* binding */ SalesOrderDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class SalesOrderDataSource {
    constructor(salesOrderService) {
        this.salesOrderService = salesOrderService;
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
        this.sub$ = this.salesOrderService.getAllSalesOrder(salesOrderResource)
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

/***/ 40838:
/*!****************************************************!*\
  !*** ./src/app/sales-order/sales-order.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderService": () => (/* binding */ SalesOrderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);





class SalesOrderService {
    constructor(http, commonHttpErrorService) {
        this.http = http;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    getAllSalesOrder(resourceParams) {
        const url = 'salesOrder';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
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
            .set('status', resourceParams.status);
        return this.http.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
    getAllSalesOrderExcel(resourceParams) {
        const url = 'salesOrder';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', 0)
            .set('Skip', 0)
            .set('SearchQuery', resourceParams.searchQuery)
            .set('name', resourceParams.name)
            .set('orderNumber', resourceParams.orderNumber)
            .set('customerName', resourceParams.customerName)
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '')
            .set('productId', resourceParams.productId ? resourceParams.productId : '')
            .set('customerId', resourceParams.customerId ? resourceParams.customerId : '');
        return this.http.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
    addSalesOrder(salesOrder) {
        const url = `salesOrder`;
        return this.http.post(url, salesOrder)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    updateSalesOrder(salesOrder) {
        const url = `salesOrder/${salesOrder.id}`;
        return this.http.put(url, salesOrder)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    updateSalesOrderReturn(salesOrder) {
        const url = `salesOrder/${salesOrder.id}/return`;
        return this.http.put(url, salesOrder)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    deleteSalesOrder(id) {
        const url = `salesOrder/${id}`;
        return this.http.delete(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    getNewSalesOrderNumber() {
        const url = `salesOrder/newOrderNumber`;
        return this.http.get(url);
    }
    getSalesOrderById(salesOrderId) {
        const url = `salesOrder/${salesOrderId}`;
        return this.http.get(url);
    }
    getSalesOrderItems(salesOrderId, isReturn = false) {
        const url = `salesOrder/${salesOrderId}/items?isReturn=${isReturn}`;
        return this.http.get(url);
    }
    downloadAttachment(id) {
        const url = `salesOrderAttachment/${id}/download`;
        return this.http.get(url, {
            reportProgress: true,
            observe: 'events',
            responseType: 'blob',
        });
    }
    getSalesOrderItemReport(resourceParams) {
        const url = 'salesOrder/items/reports';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
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
            .set('productName', resourceParams.productName ? resourceParams.productName : '')
            .set('customerId', resourceParams.customerId ? resourceParams.customerId : '')
            .set('isSalesOrderRequest', resourceParams.isSalesOrderRequest);
        return this.http.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
}
SalesOrderService.ɵfac = function SalesOrderService_Factory(t) { return new (t || SalesOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
SalesOrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SalesOrderService, factory: SalesOrderService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_domain-classes_sales-order-resource-parameter_ts-src_app_customer_custom-3e5c04.js.map