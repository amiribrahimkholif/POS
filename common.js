"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["common"],{

/***/ 13231:
/*!********************************************************************!*\
  !*** ./src/app/core/domain-classes/customer-resource-parameter.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerResourceParameter": () => (/* binding */ CustomerResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class CustomerResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
    constructor() {
        super(...arguments);
        this.id = '';
        this.customerName = '';
        this.mobileNo = '';
        this.phoneNo = '';
        this.email = '';
        this.contactPerson = '';
        this.website = '';
    }
}


/***/ }),

/***/ 3007:
/*!*************************************************************!*\
  !*** ./src/app/core/domain-classes/delivery-status-enum.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeliveryStatusEnum": () => (/* binding */ DeliveryStatusEnum)
/* harmony export */ });
var DeliveryStatusEnum;
(function (DeliveryStatusEnum) {
    DeliveryStatusEnum[DeliveryStatusEnum["UnDelivery"] = 0] = "UnDelivery";
    DeliveryStatusEnum[DeliveryStatusEnum["Pending_Delivery"] = 1] = "Pending_Delivery";
    DeliveryStatusEnum[DeliveryStatusEnum["Partially_Delivery"] = 2] = "Partially_Delivery";
    DeliveryStatusEnum[DeliveryStatusEnum["Completely_Delivery"] = 3] = "Completely_Delivery";
})(DeliveryStatusEnum || (DeliveryStatusEnum = {}));


/***/ }),

/***/ 75355:
/*!*****************************************************************!*\
  !*** ./src/app/core/domain-classes/expense-source-parameter.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseResourceParameter": () => (/* binding */ ExpenseResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class ExpenseResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
}


/***/ }),

/***/ 44519:
/*!*******************************************************************!*\
  !*** ./src/app/core/domain-classes/inquiry-resource-parameter.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryResourceParameter": () => (/* binding */ InquiryResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class InquiryResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
}


/***/ }),

/***/ 63723:
/*!*****************************************************************************!*\
  !*** ./src/app/core/domain-classes/inventory-history-resource-parameter.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryHistoryResourceParameter": () => (/* binding */ InventoryHistoryResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class InventoryHistoryResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
}


/***/ }),

/***/ 37345:
/*!*********************************************************************!*\
  !*** ./src/app/core/domain-classes/inventory-resource-parameter.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryResourceParameter": () => (/* binding */ InventoryResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class InventoryResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
}


/***/ }),

/***/ 24702:
/*!********************************************************************!*\
  !*** ./src/app/core/domain-classes/reminder-resource-parameter.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderResourceParameter": () => (/* binding */ ReminderResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class ReminderResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
}


/***/ }),

/***/ 31358:
/*!********************************************************!*\
  !*** ./src/app/core/domain-classes/response-header.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResponseHeader": () => (/* binding */ ResponseHeader)
/* harmony export */ });
class ResponseHeader {
    constructor() {
        this.totalCount = 0;
        this.pageSize = 0;
        this.skip = 0;
        this.totalPages = 0;
        this.totalAmount = 0;
    }
}


/***/ }),

/***/ 32754:
/*!********************************************************************!*\
  !*** ./src/app/core/domain-classes/supplier-resource-parameter.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierResourceParameter": () => (/* binding */ SupplierResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class SupplierResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
    constructor() {
        super(...arguments);
        this.supplierName = '';
        this.mobileNo = '';
        this.email = '';
        this.website = '';
        this.country = '';
        this.id = '';
    }
}


/***/ }),

/***/ 68527:
/*!******************************************************!*\
  !*** ./src/app/core/domain-classes/user-resource.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserResource": () => (/* binding */ UserResource)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class UserResource extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
}


/***/ }),

/***/ 66944:
/*!************************************************!*\
  !*** ./src/app/core/services/brand.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandService": () => (/* binding */ BrandService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class BrandService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('Brand', serviceElementsFactory);
    }
}
BrandService.ɵfac = function BrandService_Factory(t) { return new (t || BrandService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory)); };
BrandService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BrandService, factory: BrandService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 68287:
/*!*********************************************!*\
  !*** ./src/app/core/services/date-range.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateCompare": () => (/* binding */ dateCompare)
/* harmony export */ });
function dateCompare() {
    return (controls) => {
        const fromDate = controls.get('fromDate').value;
        const toDate = controls.get('toDate').value;
        if (fromDate && toDate) {
            if ((Date.parse(fromDate) > Date.parse(toDate))) {
                return { dateRange: true };
            }
            return null;
        }
        else {
            return null;
        }
    };
}


/***/ }),

/***/ 72916:
/*!***********************************************************!*\
  !*** ./src/app/core/services/expense-category.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseCategoryService": () => (/* binding */ ExpenseCategoryService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ExpenseCategoryService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('ExpenseCategory', serviceElementsFactory);
    }
}
ExpenseCategoryService.ɵfac = function ExpenseCategoryService_Factory(t) { return new (t || ExpenseCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory)); };
ExpenseCategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExpenseCategoryService, factory: ExpenseCategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92539:
/*!*********************************************************!*\
  !*** ./src/app/core/services/inquiry-source.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquirySourceService": () => (/* binding */ InquirySourceService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class InquirySourceService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('InquirySource', serviceElementsFactory);
    }
}
InquirySourceService.ɵfac = function InquirySourceService_Factory(t) { return new (t || InquirySourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory)); };
InquirySourceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InquirySourceService, factory: InquirySourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94061:
/*!*********************************************************!*\
  !*** ./src/app/core/services/inquiry-status.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryStatusService": () => (/* binding */ InquiryStatusService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class InquiryStatusService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('InquiryStatus', serviceElementsFactory);
    }
}
InquiryStatusService.ɵfac = function InquiryStatusService_Factory(t) { return new (t || InquiryStatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory)); };
InquiryStatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InquiryStatusService, factory: InquiryStatusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 51063:
/*!***********************************************************!*\
  !*** ./src/app/core/services/product-category.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductCategoryService": () => (/* binding */ ProductCategoryService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class ProductCategoryService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory, httpClient) {
        super('ProductCategory', serviceElementsFactory);
        this.httpClient = httpClient;
    }
    getSubCategories(id) {
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('Id', id);
        const url = `ProductCategories`;
        return this.httpClient.get(url, {
            params: customParams
        });
    }
    getAllCategoriesForDropDown() {
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('isDropDown', true);
        const url = `ProductCategories`;
        return this.httpClient.get(url, {
            params: customParams
        });
    }
}
ProductCategoryService.ɵfac = function ProductCategoryService_Factory(t) { return new (t || ProductCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductCategoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductCategoryService, factory: ProductCategoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 29147:
/*!***************************************************!*\
  !*** ./src/app/core/services/products.resolve.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsResolver": () => (/* binding */ ProductsResolver)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../product/product.service */ 55528);





class ProductsResolver {
    /**
     *
     */
    constructor(productService) {
        this.productService = productService;
    }
    resolve(route) {
        const productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ProductResourceParameter();
        return this.productService.getProducts(productResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp.body));
    }
}
ProductsResolver.ɵfac = function ProductsResolver_Factory(t) { return new (t || ProductsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_product_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService)); };
ProductsResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProductsResolver, factory: ProductsResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 36018:
/*!**********************************************!*\
  !*** ./src/app/core/services/tax.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxService": () => (/* binding */ TaxService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class TaxService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('Tax', serviceElementsFactory);
    }
}
TaxService.ɵfac = function TaxService_Factory(t) { return new (t || TaxService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory)); };
TaxService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TaxService, factory: TaxService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 78381:
/*!****************************************************!*\
  !*** ./src/app/core/services/warehouse.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseService": () => (/* binding */ WarehouseService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class WarehouseService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('Warehouse', serviceElementsFactory);
    }
}
WarehouseService.ɵfac = function WarehouseService_Factory(t) { return new (t || WarehouseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory)); };
WarehouseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WarehouseService, factory: WarehouseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 12069:
/*!**********************************************************!*\
  !*** ./src/app/email-template/email-template.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailTemplateService": () => (/* binding */ EmailTemplateService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);




class EmailTemplateService {
    constructor(httpClient, commonHttpErrorService) {
        this.httpClient = httpClient;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    updateEmailTemplate(emailTemplate) {
        const url = `emailTemplate/${emailTemplate.id}`;
        return this.httpClient.put(url, emailTemplate)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    addEmailTemplate(emailTemplate) {
        const url = `emailTemplate`;
        return this.httpClient.post(url, emailTemplate)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    deleteEmailTemplate(emailTemplate) {
        const url = `emailTemplate/${emailTemplate.id}`;
        return this.httpClient.delete(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    getEmailTemplate(id) {
        const url = `emailTemplate/${id}`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    getEmailTemplates() {
        const url = `emailTemplate`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
}
EmailTemplateService.ɵfac = function EmailTemplateService_Factory(t) { return new (t || EmailTemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
EmailTemplateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmailTemplateService, factory: EmailTemplateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 55941:
/*!********************************************!*\
  !*** ./src/app/expense/expense.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseService": () => (/* binding */ ExpenseService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ExpenseService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getExpenses(resourceParams) {
        const url = 'expense';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields ? resourceParams.fields : '')
            .set('OrderBy', resourceParams.orderBy ? resourceParams.orderBy : '')
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery ? resourceParams.searchQuery : '')
            .set('description', resourceParams.description ? resourceParams.description : '')
            .set('expenseCategoryId', resourceParams.expenseCategoryId ? resourceParams.expenseCategoryId : '')
            .set('reference', resourceParams.reference ? resourceParams.reference : '')
            .set('expenseById', resourceParams.expenseById ? resourceParams.expenseById : '')
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '');
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getExpensesReport(resourceParams) {
        const url = 'expense/report';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields ? resourceParams.fields : '')
            .set('OrderBy', resourceParams.orderBy ? resourceParams.orderBy : '')
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery ? resourceParams.searchQuery : '')
            .set('description', resourceParams.description ? resourceParams.description : '')
            .set('expenseCategoryId', resourceParams.expenseCategoryId ? resourceParams.expenseCategoryId : '')
            .set('reference', resourceParams.reference ? resourceParams.reference : '')
            .set('expenseById', resourceParams.expenseById ? resourceParams.expenseById : '')
            .set('fromDate', resourceParams.fromDate ? resourceParams.fromDate.toDateString() : '')
            .set('toDate', resourceParams.toDate ? resourceParams.toDate.toDateString() : '');
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getExpense(id) {
        const url = 'expense/' + id;
        return this.httpClient.get(url);
    }
    deleteExpense(id) {
        const url = `expense/${id}`;
        return this.httpClient.delete(url);
    }
    updateExpense(id, expense) {
        const url = 'expense/' + id;
        return this.httpClient.put(url, expense);
    }
    addExpense(expense) {
        const url = 'expense';
        return this.httpClient.post(url, expense);
    }
    downloadReceipt(id) {
        const url = `expense/${id}/download`;
        return this.httpClient.get(url, {
            reportProgress: true,
            observe: 'events',
            responseType: 'blob',
        });
    }
}
ExpenseService.ɵfac = function ExpenseService_Factory(t) { return new (t || ExpenseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ExpenseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExpenseService, factory: ExpenseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44614:
/*!********************************************!*\
  !*** ./src/app/inquiry/inquiry.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryService": () => (/* binding */ InquiryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class InquiryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getInquiries(resourceParams) {
        const url = 'inquiry';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields ? resourceParams.fields : '')
            .set('OrderBy', resourceParams.orderBy ? resourceParams.orderBy : '')
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery ? resourceParams.searchQuery : '')
            .set('companyName', resourceParams.companyName ? resourceParams.companyName : '')
            .set('mobileNo', resourceParams.mobileNo ? resourceParams.mobileNo : '')
            .set('cityName', resourceParams.city ? resourceParams.city : '')
            .set('phoneNo', resourceParams.phoneNo ? resourceParams.phoneNo : '')
            .set('email', resourceParams.email ? resourceParams.email : '')
            .set('assignTo', resourceParams.assignTo ? resourceParams.assignTo : '')
            .set('inquiryStatusId', resourceParams.inquiryStatusId ? resourceParams.inquiryStatusId : '')
            .set('inquirySourceId', resourceParams.inquirySourceId ? resourceParams.inquirySourceId : '')
            .set('contactPerson', resourceParams.contactPerson ? resourceParams.contactPerson : '');
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getInquiry(id) {
        const url = 'inquiry/' + id;
        return this.httpClient.get(url);
    }
    deleteInquiry(id) {
        const url = `inquiry/${id}`;
        return this.httpClient.delete(url);
    }
    updateInquiry(id, inquiry) {
        const url = 'inquiry/' + id;
        return this.httpClient.put(url, inquiry);
    }
    saveInquiry(inquiry) {
        const url = 'inquiry';
        return this.httpClient.post(url, inquiry);
    }
    getProductsByInquiryId(id) {
        const url = `inquiry/${id}/products`;
        return this.httpClient.get(url);
    }
}
InquiryService.ɵfac = function InquiryService_Factory(t) { return new (t || InquiryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
InquiryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InquiryService, factory: InquiryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 46000:
/*!******************************************************************!*\
  !*** ./src/app/inventory/inventory-list/inventory-datasource.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryDataSource": () => (/* binding */ InventoryDataSource)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_response_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/response-header */ 31358);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 44661);



class InventoryDataSource {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
        this._entities$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._responseHeaderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.loadingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.loading$ = this.loadingSubject$.asObservable();
        this._count = 0;
        this.responseHeaderSubject$ = this._responseHeaderSubject$.asObservable();
        this.sub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    }
    get count() {
        return this._count;
    }
    connect() {
        return this._entities$.asObservable();
    }
    disconnect() {
        this._entities$.complete();
        this.loadingSubject$.complete();
        this.sub$.unsubscribe();
    }
    loadData(inventoryResource) {
        this.loadingSubject$.next(true);
        this.sub$ = this.inventoryService.getInventories(inventoryResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loadingSubject$.next(false)))
            .subscribe((resp) => {
            let paginationParam = new _core_domain_classes_response_header__WEBPACK_IMPORTED_MODULE_0__.ResponseHeader();
            if (resp && resp.headers.get('X-Pagination')) {
                paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
            }
            this._responseHeaderSubject$.next(paginationParam);
            const entities = [...resp.body];
            this._count = entities.length;
            this._entities$.next(entities);
        });
    }
}


/***/ }),

/***/ 26435:
/*!************************************************!*\
  !*** ./src/app/inventory/inventory.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryService": () => (/* binding */ InventoryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class InventoryService {
    constructor(http) {
        this.http = http;
    }
    getInventories(resourceParams) {
        const url = 'inventory';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('productName', resourceParams.productName ? resourceParams.productName : '');
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getInventoriesReport(resourceParams) {
        const url = 'inventory';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', 0)
            .set('Skip', 0)
            .set('SearchQuery', resourceParams.searchQuery)
            .set('productName', resourceParams.productName ? resourceParams.productName : '');
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    addInventory(inventory) {
        const url = 'inventory';
        return this.http.post(url, inventory);
    }
    getInventoryHistories(resourceParams) {
        const url = 'inventory/history';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('productId', resourceParams.productId);
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
}
InventoryService.ɵfac = function InventoryService_Factory(t) { return new (t || InventoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
InventoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InventoryService, factory: InventoryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98408:
/*!****************************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-add-edit/purchase-order-by-id.resolve.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderByIdResolver": () => (/* binding */ PurchaseOrderByIdResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _purchase_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../purchase-order.service */ 69822);



class PurchaseOrderByIdResolver {
    /**
     *
     */
    constructor(purchaseOrderService) {
        this.purchaseOrderService = purchaseOrderService;
    }
    resolve(route) {
        const id = route.paramMap.get('id');
        if (id === 'add') {
            return null;
        }
        return this.purchaseOrderService.getPurchaseOrderById(id);
    }
}
PurchaseOrderByIdResolver.ɵfac = function PurchaseOrderByIdResolver_Factory(t) { return new (t || PurchaseOrderByIdResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_purchase_order_service__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderService)); };
PurchaseOrderByIdResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PurchaseOrderByIdResolver, factory: PurchaseOrderByIdResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99117:
/*!**************************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-add-edit/purchase-order-tax.resolve.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderTaxResolver": () => (/* binding */ PurchaseOrderTaxResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/tax.service */ 36018);



class PurchaseOrderTaxResolver {
    /**
     *
     */
    constructor(taxService) {
        this.taxService = taxService;
    }
    resolve(route) {
        return this.taxService.getAll();
    }
}
PurchaseOrderTaxResolver.ɵfac = function PurchaseOrderTaxResolver_Factory(t) { return new (t || PurchaseOrderTaxResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_tax_service__WEBPACK_IMPORTED_MODULE_0__.TaxService)); };
PurchaseOrderTaxResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PurchaseOrderTaxResolver, factory: PurchaseOrderTaxResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 78489:
/*!***************************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-add-edit/purchase-order-unit.resolve.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderUnitResolver": () => (/* binding */ PurchaseOrderUnitResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/unit-conversation/unit-conversation.service */ 14603);



class PurchaseOrderUnitResolver {
    /**
     *
     */
    constructor(unitConversationService) {
        this.unitConversationService = unitConversationService;
    }
    resolve(route) {
        return this.unitConversationService.getUnitConversations();
    }
}
PurchaseOrderUnitResolver.ɵfac = function PurchaseOrderUnitResolver_Factory(t) { return new (t || PurchaseOrderUnitResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_0__.UnitConversationService)); };
PurchaseOrderUnitResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PurchaseOrderUnitResolver, factory: PurchaseOrderUnitResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 21798:
/*!********************************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-add-edit/purchase-order-warehouse.resolve.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderWarehouseResolver": () => (/* binding */ PurchaseOrderWarehouseResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/warehouse.service */ 78381);



class PurchaseOrderWarehouseResolver {
    /**
     *
     */
    constructor(warehouseService) {
        this.warehouseService = warehouseService;
    }
    resolve(route) {
        return this.warehouseService.getAll();
    }
}
PurchaseOrderWarehouseResolver.ɵfac = function PurchaseOrderWarehouseResolver_Factory(t) { return new (t || PurchaseOrderWarehouseResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_0__.WarehouseService)); };
PurchaseOrderWarehouseResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PurchaseOrderWarehouseResolver, factory: PurchaseOrderWarehouseResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7854:
/*!*********************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-list/purchase-order-datasource.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderDataSource": () => (/* binding */ PurchaseOrderDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class PurchaseOrderDataSource {
    constructor(purchaseOrderService) {
        this.purchaseOrderService = purchaseOrderService;
        this._purchaseOrderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
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
        return this._purchaseOrderSubject$.asObservable();
    }
    disconnect() {
        this._purchaseOrderSubject$.complete();
        this.loadingSubject.complete();
        this.sub$.unsubscribe();
    }
    loadData(purchaseOrderResource) {
        this.loadingSubject.next(true);
        this.sub$ = this.purchaseOrderService.getAllPurchaseOrder(purchaseOrderResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject.next(false)))
            .subscribe((resp) => {
            if (resp && resp.headers) {
                const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
                this._responseHeaderSubject$.next(paginationParam);
                const purchaseOrders = [...resp.body];
                this._count = purchaseOrders.length;
                this._purchaseOrderSubject$.next(purchaseOrders);
            }
        });
    }
}


/***/ }),

/***/ 94835:
/*!**********************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-add-edit/sale-order-warehouse.resolve.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleOrderWarehouseResolver": () => (/* binding */ SaleOrderWarehouseResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/warehouse.service */ 78381);



class SaleOrderWarehouseResolver {
    /**
     *
     */
    constructor(warehouseService) {
        this.warehouseService = warehouseService;
    }
    resolve(route) {
        return this.warehouseService.getAll();
    }
}
SaleOrderWarehouseResolver.ɵfac = function SaleOrderWarehouseResolver_Factory(t) { return new (t || SaleOrderWarehouseResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_0__.WarehouseService)); };
SaleOrderWarehouseResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SaleOrderWarehouseResolver, factory: SaleOrderWarehouseResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 68394:
/*!*****************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-add-edit/sales-order-tax-resolve.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderTaxResolver": () => (/* binding */ SalesOrderTaxResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/tax.service */ 36018);



class SalesOrderTaxResolver {
    /**
     *
     */
    constructor(taxService) {
        this.taxService = taxService;
    }
    resolve(route) {
        return this.taxService.getAll();
    }
}
SalesOrderTaxResolver.ɵfac = function SalesOrderTaxResolver_Factory(t) { return new (t || SalesOrderTaxResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services_tax_service__WEBPACK_IMPORTED_MODULE_0__.TaxService)); };
SalesOrderTaxResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SalesOrderTaxResolver, factory: SalesOrderTaxResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53349:
/*!******************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-add-edit/sales-order-unit-resolve.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderUnitResolver": () => (/* binding */ SalesOrderUnitResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/unit-conversation/unit-conversation.service */ 14603);



class SalesOrderUnitResolver {
    /**
     *
     */
    constructor(unitConversationService) {
        this.unitConversationService = unitConversationService;
    }
    resolve(route) {
        return this.unitConversationService.getUnitConversations();
    }
}
SalesOrderUnitResolver.ɵfac = function SalesOrderUnitResolver_Factory(t) { return new (t || SalesOrderUnitResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_0__.UnitConversationService)); };
SalesOrderUnitResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SalesOrderUnitResolver, factory: SalesOrderUnitResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47286:
/*!*******************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-add-edit/sales-oredr-by-id-resolve.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderByIdResolver": () => (/* binding */ SalesOrderByIdResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sales_order_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sales-order.service */ 40838);



class SalesOrderByIdResolver {
    /**
     *
     */
    constructor(salesOrderService) {
        this.salesOrderService = salesOrderService;
    }
    resolve(route) {
        const id = route.paramMap.get('id');
        if (id === 'add') {
            return null;
        }
        return this.salesOrderService.getSalesOrderById(id);
    }
}
SalesOrderByIdResolver.ɵfac = function SalesOrderByIdResolver_Factory(t) { return new (t || SalesOrderByIdResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_sales_order_service__WEBPACK_IMPORTED_MODULE_0__.SalesOrderService)); };
SalesOrderByIdResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SalesOrderByIdResolver, factory: SalesOrderByIdResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14603:
/*!****************************************************************!*\
  !*** ./src/app/unit-conversation/unit-conversation.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitConversationService": () => (/* binding */ UnitConversationService)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/operator */ 22746);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);





class UnitConversationService {
    constructor(http) {
        this.http = http;
    }
    getUnitConversations() {
        const url = 'unitConversation';
        return this.http.get(url);
    }
    getUnitConversation(id) {
        const url = 'unitConversation/' + id;
        return this.http.get(url);
    }
    deleteUnitConversation(id) {
        const url = `unitConversation/${id}`;
        return this.http.delete(url);
    }
    updateUnitConversation(id, unitConversation) {
        const url = 'unitConversation/' + id;
        return this.http.put(url, unitConversation);
    }
    saveUnitConversation(unitConversation) {
        const url = 'unitConversation';
        return this.http.post(url, unitConversation);
    }
    getUnitOperator() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_0__.unitOperators);
    }
    getAllBaseUnit() {
        const url = 'unitConversation/dropDown';
        return this.http.get(url);
    }
}
UnitConversationService.ɵfac = function UnitConversationService_Factory(t) { return new (t || UnitConversationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UnitConversationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UnitConversationService, factory: UnitConversationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 12378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 10328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}

/***/ })

}]);
//# sourceMappingURL=common.js.map