"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_reports_product-purchase-report_product-purchase-report_module_ts"],{

/***/ 10796:
/*!*******************************************************************!*\
  !*** ./src/app/core/domain-classes/product-resource-parameter.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductResourceParameter": () => (/* binding */ ProductResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class ProductResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
    constructor() {
        super(...arguments);
        this.name = '';
        this.unitId = '';
        this.barcode = '';
        this.categoryId = '';
        this.brandId = '';
        this.id = '';
    }
}


/***/ }),

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

/***/ 55528:
/*!********************************************!*\
  !*** ./src/app/product/product.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ProductService {
    constructor(http) {
        this.http = http;
    }
    getProducts(resourceParams) {
        const url = 'product';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('fields', resourceParams.fields)
            .set('orderBy', resourceParams.orderBy)
            .set('pageSize', resourceParams.pageSize.toString())
            .set('skip', resourceParams.skip.toString())
            .set('searchQuery', resourceParams.searchQuery)
            .set('name', resourceParams.name)
            .set('id', resourceParams.id)
            .set('categoryId', resourceParams.categoryId ? resourceParams.categoryId : '')
            .set('unitId', resourceParams.unitId ? resourceParams.unitId : '')
            .set('barcode', resourceParams.barcode ? resourceParams.barcode : '')
            .set('brandId', resourceParams.brandId ? resourceParams.brandId : resourceParams.brandId);
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getProudct(id) {
        const url = `product/${id}`;
        return this.http.get(url);
    }
    addProudct(product) {
        const url = 'product';
        return this.http.post(url, product);
    }
    updateProudct(id, product) {
        const url = `product/${id}`;
        return this.http.put(url, product);
    }
    deleteProudct(id) {
        const url = `product/${id}`;
        return this.http.delete(url);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 87714:
/*!*******************************************************************************************!*\
  !*** ./src/app/reports/product-purchase-report/product-purchase-report-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPurchaseReportRoutingModule": () => (/* binding */ ProductPurchaseReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _product_purchase_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-purchase-report.component */ 64346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _product_purchase_report_component__WEBPACK_IMPORTED_MODULE_1__.ProductPurchaseReportComponent,
        data: { claimType: 'REP_PRO_PP_REP' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    }
];
class ProductPurchaseReportRoutingModule {
}
ProductPurchaseReportRoutingModule.ɵfac = function ProductPurchaseReportRoutingModule_Factory(t) { return new (t || ProductPurchaseReportRoutingModule)(); };
ProductPurchaseReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductPurchaseReportRoutingModule });
ProductPurchaseReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductPurchaseReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 64346:
/*!**************************************************************************************!*\
  !*** ./src/app/reports/product-purchase-report/product-purchase-report.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPurchaseReportComponent": () => (/* binding */ ProductPurchaseReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/purchase-order-resource-parameter */ 32667);
/* harmony import */ var _core_services_date_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/date-range */ 68287);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _product_purchase_report_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-purchase-report.datasource */ 79986);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/purchase-order-paymentStatus.pipe */ 80443);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/purchase-order/purchase-order.service */ 69822);
/* harmony import */ var src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/supplier/supplier.service */ 35803);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 87514);









































function ProductPurchaseReportComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r32 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dir", ctx_r2.langDir)("value", a_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", a_r32.name, " ");
} }
function ProductPurchaseReportComponent_mat_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " No Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ProductPurchaseReportComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "DATE_RANGE_VALIDATION_MSG"), " ");
} }
function ProductPurchaseReportComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductPurchaseReportComponent_div_56_div_1_Template, 3, 3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r4.searchForm.errors == null ? null : ctx_r4.searchForm.errors.dateRange);
} }
function ProductPurchaseReportComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function ProductPurchaseReportComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r34.productName, " ");
} }
function ProductPurchaseReportComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ORDER_NUMBER"));
} }
const _c0 = function (a1) { return ["/purchase-order/detail", a1]; };
function ProductPurchaseReportComponent_td_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57)(1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](2, _c0, element_r35.purchaseOrderId));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", element_r35.purchaseOrderNumber, " ");
} }
function ProductPurchaseReportComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "SUPPLIER"));
} }
function ProductPurchaseReportComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r36.supplierName, " ");
} }
function ProductPurchaseReportComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "PURCHASE_DATE"));
} }
function ProductPurchaseReportComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, element_r37.poCreatedDate, "shortDate"), " ");
} }
function ProductPurchaseReportComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "UNIT"), " ");
} }
function ProductPurchaseReportComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r38.unitName, " ");
} }
function ProductPurchaseReportComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE"), " ");
} }
function ProductPurchaseReportComponent_td_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, element_r39.unitPrice), " ");
} }
function ProductPurchaseReportComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "QUANTITY"), " ");
} }
function ProductPurchaseReportComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r40.status === 1 ? -1 * element_r40.quantity : element_r40.quantity, " ");
} }
function ProductPurchaseReportComponent_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function ProductPurchaseReportComponent_td_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, element_r41.discount), "(", element_r41.discountPercentage, "%) ");
} }
function ProductPurchaseReportComponent_th_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "TAX"), " ");
} }
function ProductPurchaseReportComponent_td_85_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, " ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function ProductPurchaseReportComponent_td_85_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ProductPurchaseReportComponent_td_85_span_1_span_2_Template, 2, 0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r44 = ctx.$implicit;
    const last_r45 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", tax_r44.taxName, "(", tax_r44.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !last_r45);
} }
function ProductPurchaseReportComponent_td_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProductPurchaseReportComponent_td_85_span_1_Template, 3, 3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", element_r42.purchaseOrderItemTaxes);
} }
function ProductPurchaseReportComponent_th_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), "");
} }
function ProductPurchaseReportComponent_td_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, element_r47.taxValue), " ");
} }
function ProductPurchaseReportComponent_th_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "TOTAL"), " ");
} }
function ProductPurchaseReportComponent_td_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, element_r48.unitPrice * element_r48.quantity - element_r48.discount + element_r48.taxValue), " ");
} }
const _c1 = function () { return [10, 20, 30]; };
function ProductPurchaseReportComponent_td_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-paginator", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("length", ctx_r27.purchaseOrderResource.totalCount)("pageSize", ctx_r27.purchaseOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c1));
} }
function ProductPurchaseReportComponent_tr_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 63)(2, "span", 64)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function ProductPurchaseReportComponent_tr_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 65);
} }
function ProductPurchaseReportComponent_tr_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 66);
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("bg-warning1", row_r49.status === 1);
} }
function ProductPurchaseReportComponent_tr_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 67);
} }
class ProductPurchaseReportComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(purchaseOrderService, supplierService, cd, commonDialogService, toastrService, router, translationService, dialog, clonerService, fb, productService, utcToLocalTime, customCurrencyPipe) {
        super(translationService);
        this.purchaseOrderService = purchaseOrderService;
        this.supplierService = supplierService;
        this.cd = cd;
        this.commonDialogService = commonDialogService;
        this.toastrService = toastrService;
        this.router = router;
        this.translationService = translationService;
        this.dialog = dialog;
        this.clonerService = clonerService;
        this.fb = fb;
        this.productService = productService;
        this.utcToLocalTime = utcToLocalTime;
        this.customCurrencyPipe = customCurrencyPipe;
        this.purchaseOrderItems = [];
        this.displayedColumns = ['productName', 'purchaseOrderNumber', 'supplierName', 'pOCreatedDate', 'unitName', 'unitPrice', 'quantity', 'totalDiscount', 'taxes', 'totalTax', 'totalAmount'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.supplierNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormControl();
        this.currentDate = new Date();
        this.products = [];
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
        this.getLangDir();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ProductResourceParameter();
        this.purchaseOrderResource = new _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderResourceParameter();
        this.purchaseOrderResource.pageSize = 50;
        this.purchaseOrderResource.orderBy = 'poCreatedDate asc';
        this.purchaseOrderResource.isPurchaseOrderRequest = false;
    }
    get SupplierFilter() {
        return this._supplierFilter;
    }
    set SupplierFilter(v) {
        this._supplierFilter = v;
        const supplierFilter = `supplierName:${v}`;
        this.filterObservable$.next(supplierFilter);
    }
    get OrderNumberFilter() {
        return this._orderNumberFilter;
    }
    set OrderNumberFilter(v) {
        this._orderNumberFilter = v;
        const orderNumberFilter = `orderNumber:${v}`;
        this.filterObservable$.next(orderNumberFilter);
    }
    ngOnInit() {
        this.supplierNameControlOnChange();
        this.createSearchFormGroup();
        this.getProducts();
        this.getProductByNameValue();
        this.dataSource = new _product_purchase_report_datasource__WEBPACK_IMPORTED_MODULE_4__.ProductPurchaseReportDataSource(this.purchaseOrderService);
        this.dataSource.loadData(this.purchaseOrderResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)())
            .subscribe((c) => {
            this.purchaseOrderResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split(':');
            if (strArray[0] === 'supplierName') {
                this.purchaseOrderResource.supplierName = strArray[1];
            }
            else if (strArray[0] === 'orderNumber') {
                this.purchaseOrderResource.orderNumber = strArray[1];
            }
            this.dataSource.loadData(this.purchaseOrderResource);
        });
    }
    createSearchFormGroup() {
        this.searchForm = this.fb.group({
            fromDate: [''],
            toDate: [''],
            filterProductValue: [''],
            productId: ['']
        }, {
            validators: (0,_core_services_date_range__WEBPACK_IMPORTED_MODULE_2__.dateCompare)()
        });
    }
    onSearch() {
        if (this.searchForm.valid) {
            this.purchaseOrderResource.fromDate = this.searchForm.get('fromDate').value;
            this.purchaseOrderResource.toDate = this.searchForm.get('toDate').value;
            this.purchaseOrderResource.productId = this.searchForm.get('productId').value;
            this.dataSource.loadData(this.purchaseOrderResource);
        }
    }
    onClear() {
        this.searchForm.reset();
        this.purchaseOrderResource.fromDate = this.searchForm.get('fromDate').value;
        this.purchaseOrderResource.toDate = this.searchForm.get('toDate').value;
        this.purchaseOrderResource.productId = this.searchForm.get('productId').value;
        this.dataSource.loadData(this.purchaseOrderResource);
    }
    getProductByNameValue() {
        this.sub$.sink = this.searchForm.get('filterProductValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(c => {
            this.productResource.name = c;
            return this.productService.getProducts(this.productResource);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.products = [...resp.body];
            }
        }, (err) => {
        });
    }
    getProducts() {
        this.productResource.name = '';
        return this.productService.getProducts(this.productResource)
            .subscribe((resp) => {
            if (resp && resp.headers) {
                this.products = [...resp.body];
            }
        }, (err) => {
        });
        ;
    }
    supplierNameControlOnChange() {
        this.supplierList$ = this.supplierNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(c => {
            return this.supplierService.getSuppliersForDropDown(c);
        }));
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)((c) => {
            this.purchaseOrderResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.purchaseOrderResource.pageSize = this.paginator.pageSize;
            this.purchaseOrderResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.purchaseOrderResource);
        }))
            .subscribe();
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.purchaseOrderResource.pageSize = c.pageSize;
                this.purchaseOrderResource.skip = c.skip;
                this.purchaseOrderResource.totalCount = c.totalCount;
            }
        });
    }
    onDownloadReport() {
        this.purchaseOrderService.getAllPurchaseOrderItemReport(this.purchaseOrderResource)
            .subscribe((c) => {
            this.purchaseOrderItems = [...c.body];
            let heading = [[
                    this.translationService.getValue('PRODUCT_NAME'),
                    this.translationService.getValue('ORDER_NUMBER'),
                    this.translationService.getValue('SUPPLIER'),
                    this.translationService.getValue('PURCHASE_DATE'),
                    this.translationService.getValue('UNIT'),
                    this.translationService.getValue('UNIT_PER_PRICE'),
                    this.translationService.getValue('QUANTITY'),
                    this.translationService.getValue('TOTAL_DISCOUNT'),
                    this.translationService.getValue('TAX'),
                    this.translationService.getValue('TOTAL_TAX'),
                    this.translationService.getValue('TOTAL')
                ]];
            let purchaseOrderReport = [];
            this.purchaseOrderItems.forEach((purchaseOrderItem) => {
                purchaseOrderReport.push({
                    'PRODUCT_NAME': purchaseOrderItem.productName,
                    'ORDER_NUMBER': purchaseOrderItem.purchaseOrderNumber,
                    'SUPPLIER': purchaseOrderItem.supplierName,
                    'PURCHASE_DATE': this.utcToLocalTime.transform(purchaseOrderItem.poCreatedDate, 'shortDate'),
                    'UNIT': purchaseOrderItem.unitName,
                    'UNIT_PER_PRICE': this.customCurrencyPipe.transform(purchaseOrderItem.unitPrice),
                    'QUANTITY': purchaseOrderItem.quantity,
                    'TOTAL_DISCOUNT': this.customCurrencyPipe.transform(purchaseOrderItem.discount),
                    'TAX': purchaseOrderItem.purchaseOrderItemTaxes.map(c => c.taxName + '(' + c.taxPercentage + ' %)'),
                    'TOTAL_TAX': this.customCurrencyPipe.transform(purchaseOrderItem.taxValue),
                    'TOTAL': this.customCurrencyPipe.transform((purchaseOrderItem.unitPrice * purchaseOrderItem.quantity) - purchaseOrderItem.discount + purchaseOrderItem.taxValue)
                });
            });
            let workBook = xlsx__WEBPACK_IMPORTED_MODULE_22__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_22__.utils.sheet_add_aoa(workBook, heading);
            let workSheet = xlsx__WEBPACK_IMPORTED_MODULE_22__.utils.sheet_add_json(workBook, purchaseOrderReport, { origin: "A2", skipHeader: true });
            xlsx__WEBPACK_IMPORTED_MODULE_22__.utils.book_append_sheet(workBook, workSheet, this.translationService.getValue('PRODUCT_PURCHASE_REPORT'));
            xlsx__WEBPACK_IMPORTED_MODULE_22__.writeFile(workBook, this.translationService.getValue('PRODUCT_PURCHASE_REPORT') + ".xlsx");
        });
    }
}
ProductPurchaseReportComponent.ɵfac = function ProductPurchaseReportComponent_Factory(t) { return new (t || ProductPurchaseReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_8__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_9__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_10__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_23__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_12__.ClonerService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_13__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_6__.UTCToLocalTime), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.CustomCurrencyPipe)); };
ProductPurchaseReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: ProductPurchaseReportComponent, selectors: [["app-product-purchase-report"]], viewQuery: function ProductPurchaseReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_6__.UTCToLocalTime, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.CustomCurrencyPipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_5__.PaymentStatusPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 98, vars: 53, consts: [[1, "page-header-main"], [1, "row", "align-items-center"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [1, "row"], [1, "col-sm-12", "mb-3"], [3, "formGroup"], [1, "col-md-2"], [1, "form-group"], ["for", "fromDate"], ["id", "fromDate", "formControlName", "fromDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["fromDate", ""], ["for", "toDate"], ["id", "toDate", "formControlName", "toDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["toDate", ""], [1, "col-md-3"], ["formControlName", "productId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filterProductValue", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [1, "col-md-5", "report-tool-bar"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-search"], ["type", "submit", 1, "btn", "btn-danger", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-eraser"], ["type", "submit", 1, "btn", "btn-warning", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-download"], [1, "col-sm-12"], [4, "ngIf"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "matSortActive", "poCreatedDate", "matSortDirection", "asc", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "purchaseOrderNumber"], ["matColumnDef", "supplierName"], ["matColumnDef", "pOCreatedDate"], ["matColumnDef", "unitName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "unitPrice"], ["matColumnDef", "quantity"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "taxes"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "12", 4, "matFooterCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], [3, "dir", "value"], [3, "value"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [3, "routerLink"], ["mat-header-cell", ""], [4, "ngFor", "ngForOf"], ["mat-footer-cell", "", "colspan", "12"], [3, "length", "pageSize", "pageSizeOptions"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function ProductPurchaseReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "form", 6)(10, "div", 4)(11, "div", 7)(12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "owl-date-time", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "owl-date-time", 11, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 16)(30, "div", 8)(31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](38, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, ProductPurchaseReportComponent_mat_option_39_Template, 2, 3, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, ProductPurchaseReportComponent_mat_option_40_Template, 2, 0, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "div", 21)(42, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductPurchaseReportComponent_Template_button_click_42_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](43, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductPurchaseReportComponent_Template_button_click_46_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](47, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProductPurchaseReportComponent_Template_button_click_50_listener() { return ctx.onDownloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](51, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div", 4)(55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](56, ProductPurchaseReportComponent_div_56_Template, 2, 1, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 30)(58, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](59, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, ProductPurchaseReportComponent_th_60_Template, 3, 3, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, ProductPurchaseReportComponent_td_61_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](62, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, ProductPurchaseReportComponent_th_63_Template, 3, 3, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](64, ProductPurchaseReportComponent_td_64_Template, 3, 4, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](65, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](66, ProductPurchaseReportComponent_th_66_Template, 3, 3, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](67, ProductPurchaseReportComponent_td_67_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](68, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](69, ProductPurchaseReportComponent_th_69_Template, 3, 3, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](70, ProductPurchaseReportComponent_td_70_Template, 3, 4, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](71, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](72, ProductPurchaseReportComponent_th_72_Template, 3, 3, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](73, ProductPurchaseReportComponent_td_73_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](74, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](75, ProductPurchaseReportComponent_th_75_Template, 3, 3, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, ProductPurchaseReportComponent_td_76_Template, 3, 3, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](77, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](78, ProductPurchaseReportComponent_th_78_Template, 3, 3, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](79, ProductPurchaseReportComponent_td_79_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](80, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](81, ProductPurchaseReportComponent_th_81_Template, 3, 3, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](82, ProductPurchaseReportComponent_td_82_Template, 3, 4, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](83, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](84, ProductPurchaseReportComponent_th_84_Template, 3, 3, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](85, ProductPurchaseReportComponent_td_85_Template, 2, 1, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](86, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](87, ProductPurchaseReportComponent_th_87_Template, 3, 3, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](88, ProductPurchaseReportComponent_td_88_Template, 3, 3, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](89, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](90, ProductPurchaseReportComponent_th_90_Template, 3, 3, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](91, ProductPurchaseReportComponent_td_91_Template, 3, 3, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](92, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](93, ProductPurchaseReportComponent_td_93_Template, 2, 4, "td", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](94, ProductPurchaseReportComponent_tr_94_Template, 6, 3, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](95, ProductPurchaseReportComponent_tr_95_Template, 1, 0, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](96, ProductPurchaseReportComponent_tr_96_Template, 1, 2, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](97, ProductPurchaseReportComponent_tr_97_Template, 1, 0, "tr", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](19);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 31, "PRODUCT_PURCHASE_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 33, "FROM_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](17, 35, "FROM_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r0)("owlDateTime", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](24, 37, "TO_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](26, 39, "TO_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r1)("owlDateTime", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](33, 41, "SELECT_PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](35, 43, "SELECT_PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](37, 45, "SEARCH_OTHER_PRODUCTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.products.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](45, 47, "SEARCH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](49, 49, "CLEAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](53, 51, "DOWNLOAD_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.searchForm.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed)("matFooterRowDefSticky", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_30__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortHeader, _angular_material_select__WEBPACK_IMPORTED_MODULE_31__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOption, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_33__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_33__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_33__.OwlDateTimeComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__.MatDivider, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_6__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXB1cmNoYXNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 79986:
/*!***************************************************************************************!*\
  !*** ./src/app/reports/product-purchase-report/product-purchase-report.datasource.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPurchaseReportDataSource": () => (/* binding */ ProductPurchaseReportDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class ProductPurchaseReportDataSource {
    constructor(purchaseOrderService) {
        this.purchaseOrderService = purchaseOrderService;
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
        this.sub$ = this.purchaseOrderService.getPurchaseOrderItemReport(customerResource)
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

/***/ 1499:
/*!***********************************************************************************!*\
  !*** ./src/app/reports/product-purchase-report/product-purchase-report.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPurchaseReportModule": () => (/* binding */ ProductPurchaseReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _product_purchase_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-purchase-report-routing.module */ 87714);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _product_purchase_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-purchase-report.component */ 64346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






















class ProductPurchaseReportModule {
}
ProductPurchaseReportModule.ɵfac = function ProductPurchaseReportModule_Factory(t) { return new (t || ProductPurchaseReportModule)(); };
ProductPurchaseReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProductPurchaseReportModule });
ProductPurchaseReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _product_purchase_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPurchaseReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
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
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProductPurchaseReportModule, { declarations: [_product_purchase_report_component__WEBPACK_IMPORTED_MODULE_2__.ProductPurchaseReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _product_purchase_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductPurchaseReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
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
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_reports_product-purchase-report_product-purchase-report_module_ts.js.map