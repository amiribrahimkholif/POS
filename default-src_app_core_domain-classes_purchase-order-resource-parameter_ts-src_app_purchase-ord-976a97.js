"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["default-src_app_core_domain-classes_purchase-order-resource-parameter_ts-src_app_purchase-ord-976a97"],{

/***/ 32667:
/*!**************************************************************************!*\
  !*** ./src/app/core/domain-classes/purchase-order-resource-parameter.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderResourceParameter": () => (/* binding */ PurchaseOrderResourceParameter)
/* harmony export */ });
/* harmony import */ var _purchase_order_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-order-status */ 12023);
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource-parameter */ 75519);


class PurchaseOrderResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_1__.ResourceParameter {
    constructor() {
        super(...arguments);
        this.orderNumber = '';
        this.supplierName = '';
        this.supplierId = '';
        this.isPurchaseOrderRequest = false;
        this.productId = '';
        this.productName = '';
        this.status = _purchase_order_status__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderStatusEnum.All;
    }
}


/***/ }),

/***/ 12023:
/*!**************************************************************!*\
  !*** ./src/app/core/domain-classes/purchase-order-status.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderStatusEnum": () => (/* binding */ PurchaseOrderStatusEnum)
/* harmony export */ });
var PurchaseOrderStatusEnum;
(function (PurchaseOrderStatusEnum) {
    PurchaseOrderStatusEnum[PurchaseOrderStatusEnum["Not_Return"] = 0] = "Not_Return";
    PurchaseOrderStatusEnum[PurchaseOrderStatusEnum["Return"] = 1] = "Return";
    PurchaseOrderStatusEnum[PurchaseOrderStatusEnum["All"] = 2] = "All";
})(PurchaseOrderStatusEnum || (PurchaseOrderStatusEnum = {}));


/***/ }),

/***/ 69822:
/*!**********************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderService": () => (/* binding */ PurchaseOrderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);





class PurchaseOrderService {
    constructor(http, commonHttpErrorService) {
        this.http = http;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    getAllPurchaseOrder(resourceParams) {
        const url = 'purchaseorder';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('name', resourceParams.name)
            .set('orderNumber', resourceParams.orderNumber)
            .set('supplierName', resourceParams.supplierName)
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '')
            .set('productId', resourceParams.productId ? resourceParams.productId : '')
            .set('supplierId', resourceParams.supplierId ? resourceParams.supplierId : '')
            .set('isPurchaseOrderRequest', resourceParams.isPurchaseOrderRequest)
            .set('status', resourceParams.status);
        return this.http.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
    getAllPurchaseOrderReport(resourceParams) {
        const url = 'purchaseorder/report';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('name', resourceParams.name)
            .set('orderNumber', resourceParams.orderNumber)
            .set('supplierName', resourceParams.supplierName)
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '')
            .set('productId', resourceParams.productId ? resourceParams.productId : '')
            .set('supplierId', resourceParams.supplierId ? resourceParams.supplierId : '')
            .set('isPurchaseOrderRequest', resourceParams.isPurchaseOrderRequest);
        return this.http.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
    getPurchaseOrderItemReport(resourceParams) {
        const url = 'purchaseorder/items/reports';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('name', resourceParams.name)
            .set('orderNumber', resourceParams.orderNumber)
            .set('supplierName', resourceParams.supplierName)
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '')
            .set('productId', resourceParams.productId ? resourceParams.productId : '')
            .set('productName', resourceParams.productName ? resourceParams.productName : '')
            .set('supplierId', resourceParams.supplierId ? resourceParams.supplierId : '')
            .set('isPurchaseOrderRequest', resourceParams.isPurchaseOrderRequest);
        return this.http.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
    getAllPurchaseOrderItemReport(resourceParams) {
        const url = 'purchaseorder/items/reports';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', 0)
            .set('Skip', 0)
            .set('SearchQuery', resourceParams.searchQuery)
            .set('name', resourceParams.name)
            .set('orderNumber', resourceParams.orderNumber)
            .set('supplierName', resourceParams.supplierName)
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '')
            .set('productId', resourceParams.productId ? resourceParams.productId : '')
            .set('productName', resourceParams.productName ? resourceParams.productName : '')
            .set('supplierId', resourceParams.supplierId ? resourceParams.supplierId : '')
            .set('isPurchaseOrderRequest', resourceParams.isPurchaseOrderRequest);
        return this.http.get(url, {
            params: customParams,
            observe: 'response'
        });
    }
    addPurchaseOrder(purchaseOrder) {
        const url = `PurchaseOrder`;
        return this.http.post(url, purchaseOrder)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    updatePurchaseOrder(purchaseOrder) {
        const url = `PurchaseOrder/${purchaseOrder.id}`;
        return this.http.put(url, purchaseOrder)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    updatePurchaseOrderReturn(purchaseOrder) {
        const url = `PurchaseOrder/${purchaseOrder.id}/return`;
        return this.http.put(url, purchaseOrder)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    deletePurchaseOrder(id) {
        const url = `PurchaseOrder/${id}`;
        return this.http.delete(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    getNewPurchaseOrderNumber(isPurchaseOrder) {
        const url = `purchaseorder/newOrderNumber/${isPurchaseOrder}`;
        return this.http.get(url);
    }
    getPurchaseOrderById(purchaseOrderId) {
        const url = `purchaseorder/${purchaseOrderId}`;
        return this.http.get(url);
    }
    getPurchaseOrderItems(purchaseOrderId, isReturn = false) {
        const url = `purchaseorder/${purchaseOrderId}/items?isReturn=${isReturn}`;
        return this.http.get(url);
    }
    downloadAttachment(id) {
        const url = `PurchaseOrderAttachment/${id}/download`;
        return this.http.get(url, {
            reportProgress: true,
            observe: 'events',
            responseType: 'blob',
        });
    }
}
PurchaseOrderService.ɵfac = function PurchaseOrderService_Factory(t) { return new (t || PurchaseOrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
PurchaseOrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PurchaseOrderService, factory: PurchaseOrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35803:
/*!**********************************************!*\
  !*** ./src/app/supplier/supplier.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierService": () => (/* binding */ SupplierService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class SupplierService {
    constructor(http) {
        this.http = http;
    }
    getSuppliers(resourceParams) {
        const url = 'supplier';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('supplierName', resourceParams.supplierName)
            .set('mobileNo', resourceParams.mobileNo)
            .set('email', resourceParams.email)
            .set('country', resourceParams.country ? resourceParams.country : '')
            .set('website', resourceParams.website);
        if (resourceParams.id) {
            customParams.append('id', resourceParams.id);
        }
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getSupplier(id) {
        const url = 'supplier/' + id;
        return this.http.get(url);
    }
    deleteSupplier(id) {
        const url = `supplier/${id}`;
        return this.http.delete(url);
    }
    updateSupplier(id, supplier) {
        const url = 'supplier/' + id;
        return this.http.put(url, supplier);
    }
    saveSupplier(supplier) {
        const url = 'supplier';
        return this.http.post(url, supplier);
    }
    checkEmailOrPhoneExist(email, mobileNo, supplierId) {
        const url = `supplier/${supplierId}/Exist?email=${email}&mobileNo=${mobileNo}`;
        return this.http.get(url);
    }
    getSuppliersForDropDown(searchString) {
        const url = 'SupplierSearch';
        if (searchString) {
            let params = `?searchQuery=${searchString.trim()}&pageSize=10`;
            return this.http.get(url + params);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }
    getSupplierPayments(resourceParams) {
        const url = 'supplier/GetSupplierPayment';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('supplierName', resourceParams.supplierName);
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getSupplierPaymentsExcel(resourceParams) {
        const url = 'supplier/GetSupplierPayment';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('supplierName', resourceParams.supplierName);
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
}
SupplierService.ɵfac = function SupplierService_Factory(t) { return new (t || SupplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
SupplierService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SupplierService, factory: SupplierService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_domain-classes_purchase-order-resource-parameter_ts-src_app_purchase-ord-976a97.js.map