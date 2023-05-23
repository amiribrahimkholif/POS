"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_pos_pos_module_ts"],{

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

/***/ 43852:
/*!*******************************************!*\
  !*** ./src/app/pos/pos-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosRoutingModule": () => (/* binding */ PosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/products.resolve */ 29147);
/* harmony import */ var _sales_order_sales_order_add_edit_sales_order_tax_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sales-order/sales-order-add-edit/sales-order-tax-resolve */ 68394);
/* harmony import */ var _sales_order_sales_order_add_edit_sales_order_unit_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sales-order/sales-order-add-edit/sales-order-unit-resolve */ 53349);
/* harmony import */ var _pos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pos.component */ 28394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        component: _pos_component__WEBPACK_IMPORTED_MODULE_4__.PosComponent,
        data: { claimType: ['POS_POS'] },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        resolve: {
            'units': _sales_order_sales_order_add_edit_sales_order_unit_resolve__WEBPACK_IMPORTED_MODULE_3__.SalesOrderUnitResolver,
            'taxs': _sales_order_sales_order_add_edit_sales_order_tax_resolve__WEBPACK_IMPORTED_MODULE_2__.SalesOrderTaxResolver,
            'products': _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__.ProductsResolver
        },
    },
];
class PosRoutingModule {
}
PosRoutingModule.ɵfac = function PosRoutingModule_Factory(t) { return new (t || PosRoutingModule)(); };
PosRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PosRoutingModule });
PosRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PosRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 28394:
/*!**************************************!*\
  !*** ./src/app/pos/pos.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosComponent": () => (/* binding */ PosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/customer-resource-parameter */ 13231);
/* harmony import */ var _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/delivery-status-enum */ 3007);
/* harmony import */ var _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/domain-classes/operator */ 22746);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/domain-classes/sales-order-status */ 80002);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/pipes/quantities-unitprice-tax.pipe */ 76521);
/* harmony import */ var _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/quantities-unitprice.pipe */ 16695);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _customer_customer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer/customer.service */ 61781);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../sales-order/sales-order.service */ 40838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _product_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../product/product.service */ 55528);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var ngx_barcodeput__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-barcodeput */ 78694);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





































const _c0 = ["filterValue"];
function PosComponent_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", customer_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", customer_r10.customerName, " ");
} }
function PosComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function PosComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "CUSTOMER_NAME_IS_REQUIRED"), " ");
} }
function PosComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PosComponent_div_20_div_1_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.salesOrderForm.get("customerId").errors == null ? null : ctx_r2.salesOrderForm.get("customerId").errors.required);
} }
function PosComponent_tr_53_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r23 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r14.langDir)("value", a_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", a_r23.name, " ");
} }
function PosComponent_tr_53_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "UNIT_IS_REQUIRED"), " ");
} }
function PosComponent_tr_53_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PosComponent_tr_53_div_6_div_1_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("unitId").errors == null ? null : salesOrderItem_r12.get("unitId").errors.required);
} }
function PosComponent_tr_53_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE_IS_REQUIRED"), " ");
} }
function PosComponent_tr_53_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "PRICE_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PosComponent_tr_53_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PosComponent_tr_53_div_10_div_1_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, PosComponent_tr_53_div_10_div_2_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("unitPrice").errors == null ? null : salesOrderItem_r12.get("unitPrice").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("unitPrice").errors == null ? null : salesOrderItem_r12.get("unitPrice").errors.min);
} }
function PosComponent_tr_53_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_REQUIRED"), " ");
} }
function PosComponent_tr_53_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "QUANTITY_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PosComponent_tr_53_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PosComponent_tr_53_div_14_div_1_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, PosComponent_tr_53_div_14_div_2_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("quantity").errors == null ? null : salesOrderItem_r12.get("quantity").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("quantity").errors == null ? null : salesOrderItem_r12.get("quantity").errors.min);
} }
function PosComponent_tr_53_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "DISCOUNT_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PosComponent_tr_53_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", tax_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", tax_r32.name, " (", tax_r32.percentage, "%) ");
} }
function PosComponent_tr_53_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TAX_IS_REQUIRED"), " ");
} }
function PosComponent_tr_53_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PosComponent_tr_53_div_22_div_1_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("taxValue").errors == null ? null : salesOrderItem_r12.get("taxValue").errors.required);
} }
const _c1 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function PosComponent_tr_53_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const salesOrderItem_r12 = ctx_r35.$implicit;
    const i_r13 = ctx_r35.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "TAX_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](12, _c1, salesOrderItem_r12.get("quantity").value, salesOrderItem_r12.get("unitPrice").value, salesOrderItem_r12.get("discountPercentage").value, salesOrderItem_r12.get("taxValue").value, ctx_r21.taxsMap[i_r13]))), " ");
} }
function PosComponent_tr_53_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PosComponent_tr_53_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38); const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r36.onRemoveSalesOrderItem(i_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "delete_forever ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function PosComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 43)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td")(4, "mat-select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function PosComponent_tr_53_Template_mat_select_selectionChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40); const i_r13 = restoredCtx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r39.onSelectionChange($event.value, i_r13)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, PosComponent_tr_53_mat_option_5_Template, 2, 3, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, PosComponent_tr_53_div_6_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "td")(8, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function PosComponent_tr_53_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r41.onUnitPriceChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, PosComponent_tr_53_div_10_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td")(12, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function PosComponent_tr_53_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r42.onQuantityChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, PosComponent_tr_53_div_14_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "td")(16, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function PosComponent_tr_53_Template_input_change_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r43.onDiscountChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, PosComponent_tr_53_div_18_Template, 3, 3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "td")(20, "mat-select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function PosComponent_tr_53_Template_mat_select_selectionChange_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r44.onTaxSelectionChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, PosComponent_tr_53_mat_option_21_Template, 2, 3, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, PosComponent_tr_53_div_22_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](25, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, PosComponent_tr_53_div_27_Template, 5, 18, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, PosComponent_tr_53_button_29_Template, 3, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const salesOrderItem_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroupName", i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r3.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r3.unitsMap[i_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("unitId").touched && salesOrderItem_r12.get("unitId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 16, "UNIT_PER_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("unitPrice").touched && salesOrderItem_r12.get("unitPrice").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 18, "QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("quantity").touched && salesOrderItem_r12.get("quantity").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](17, 20, "DISCOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("discountPercentage").errors == null ? null : salesOrderItem_r12.get("discountPercentage").errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r3.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r3.taxsMap[i_r13]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("taxValue").touched && salesOrderItem_r12.get("taxValue").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](25, 22, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](26, 24, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](30, _c1, salesOrderItem_r12.get("quantity").value, salesOrderItem_r12.get("unitPrice").value, salesOrderItem_r12.get("discountPercentage").value, salesOrderItem_r12.get("taxValue").value, ctx_r3.taxsMap[i_r13]))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r12.get("taxValue").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx_r3.salesOrderItemsArray == null ? null : ctx_r3.salesOrderItemsArray.controls.length) !== 1);
} }
function PosComponent_button_87_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PosComponent_button_87_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r45.onSalesOrderSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "SAVE"), "");
} }
function PosComponent_button_88_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PosComponent_button_88_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r47.onSaveAndNew()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "SAVE_AND_NEW"), "");
} }
function PosComponent_div_105_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const a_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx_r51.baseUrl + a_r49.productUrl, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
} }
function PosComponent_div_105_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 1, "PRODUCT_IMAGE"));
} }
function PosComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 57)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PosComponent_div_105_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r56); const a_r49 = restoredCtx.$implicit; const i_r50 = restoredCtx.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r55.onProductSelect(a_r49, i_r50)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, PosComponent_div_105_ng_container_3_Template, 2, 1, "ng-container", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, PosComponent_div_105_ng_template_4_Template, 2, 3, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const a_r49 = ctx.$implicit;
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", a_r49.productUrl)("ngIfElse", _r52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](a_r49.name);
} }
function PosComponent_div_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "NO_DATA_FOUND"), "");
} }
function PosComponent_div_108_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-spinner");
} }
function PosComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PosComponent_div_108_mat_spinner_1_Template, 1, 0, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r9.isLoading);
} }
const _c2 = function () { return ["SO_ADD_SO", "SO_UPDATE_SO", "SO_RETURN_SO", "POS_POS"]; };
class PosComponent extends _base_component__WEBPACK_IMPORTED_MODULE_8__.BaseComponent {
    constructor(fb, customerService, toastrService, salesOrderService, router, productService, route, quantitiesUnitPricePipe, quantitiesUnitPriceTaxPipe, translationService, clonerService) {
        super(translationService);
        this.fb = fb;
        this.customerService = customerService;
        this.toastrService = toastrService;
        this.salesOrderService = salesOrderService;
        this.router = router;
        this.productService = productService;
        this.route = route;
        this.quantitiesUnitPricePipe = quantitiesUnitPricePipe;
        this.quantitiesUnitPriceTaxPipe = quantitiesUnitPriceTaxPipe;
        this.translationService = translationService;
        this.clonerService = clonerService;
        this.products = [];
        this.filterProducts = [];
        this.customers = [];
        this.isLoading = false;
        this.isCustomerLoading = false;
        this.filterProductsMap = {};
        this.unitsMap = {};
        this.unitConversationlist = [];
        this.taxsMap = {};
        this.totalBeforeDiscount = 0;
        this.totalAfterDiscount = 0;
        this.totalDiscount = 0;
        this.grandTotal = 0;
        this.totalTax = 0;
        this.isEdit = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.apiUrl;
        this.isFromScanner = false;
        this.getLangDir();
        this.customerResource = new _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.CustomerResourceParameter();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_3__.ProductResourceParameter();
    }
    get salesOrderItemsArray() {
        return this.salesOrderForm.get('salesOrderItems');
    }
    ngOnInit() {
        this.unitConversationlist = [...this.route.snapshot.data['units']];
        this.createSalesOrder();
        this.getProducts();
        this.customerNameChangeValue();
        this.getNewSalesOrderNumber();
        this.salesOrderForm.get('filterProductValue').setValue('');
    }
    ngAfterViewInit() {
        this.filterValue.nativeElement.focus();
    }
    createSalesOrder() {
        this.route.data
            .pipe()
            .subscribe((salesOrderData) => {
            this.salesOrder = salesOrderData.salesorder;
            this.isEdit = false;
            this.getCustomers();
            this.salesOrderForm = this.fb.group({
                orderNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                filerCustomer: [''],
                deliveryDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                soCreatedDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                deliveryStatus: [1],
                customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                note: [''],
                termAndCondition: [''],
                salesOrderItems: this.fb.array([]),
                filterProductValue: [''],
            });
        });
    }
    setUnitConversationForProduct(id, index) {
        this.unitsMap[index] = this.unitConversationlist.filter((c) => c.id == id || c.parentId == id);
    }
    onSelectionChange(unitId, index, isFromUI = true) {
        const productId = this.salesOrderItemsArray.controls[index].get('productId').value;
        const product = this.filterProducts.find((c) => c.id === productId);
        const unit = this.unitConversationlist.find((c) => c.id === unitId);
        let price = 0;
        if (unit.value) {
            switch (unit.operator) {
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_2__.Operators.Plush:
                    price = product.salesPrice + parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_2__.Operators.Minus:
                    price = product.salesPrice - parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_2__.Operators.Multiply:
                    price = product.salesPrice * parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_2__.Operators.Divide:
                    price = product.salesPrice / parseFloat(unit.value);
                    break;
            }
            this.salesOrderItemsArray.controls[index].patchValue({
                unitPrice: price,
            });
        }
        else {
            this.salesOrderItemsArray.controls[index].patchValue({
                unitPrice: product.salesPrice,
            });
        }
    }
    onProductSelect(product, index) {
        let salesOrderItems = this.salesOrderForm.get('salesOrderItems').value;
        const existingProductIndex = salesOrderItems.findIndex((c) => c.productId == product.id);
        let newIndex = existingProductIndex;
        if (existingProductIndex >= 0) {
            let iteamToUpdate = salesOrderItems[existingProductIndex];
            this.salesOrderItemsArray
                .at(existingProductIndex)
                .get('quantity')
                .patchValue(iteamToUpdate.quantity + 1);
        }
        else {
            newIndex = this.salesOrderItemsArray.length;
            this.salesOrderItemsArray.push(this.createSalesOrderItem(this.salesOrderItemsArray.length, product));
        }
        this.setUnitConversationForProduct(product.unitId, newIndex);
        this.getAllTotal();
        this.filterValue.nativeElement.focus();
    }
    createSalesOrderItem(index, product) {
        const taxs = product.productTaxes.map((c) => c.taxId);
        const formGroup = this.fb.group({
            productId: [product.id],
            warehouseId: [product.warehouseId],
            unitPrice: [product.salesPrice, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.min(0)]],
            quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.min(1)]],
            taxValue: [taxs],
            unitId: [product.unitId, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            discountPercentage: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.min(0)]],
            productName: [product.name],
        });
        this.unitsMap[index] = this.unitConversationlist.filter((c) => c.id == product.unitId || c.parentId == product.unitId);
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        return formGroup;
    }
    onDetected(event) {
        if ((event === null || event === void 0 ? void 0 : event.type) == 'scanner') {
            this.isFromScanner = true;
        }
        else {
            this.isFromScanner = false;
        }
    }
    getProducts() {
        this.sub$.sink = this.salesOrderForm
            .get('filterProductValue')
            .valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)((c) => {
            if (this.isFromScanner) {
                this.productResource.barcode = c;
            }
            else {
                this.productResource.name = c;
            }
            this.productResource.pageSize = 12;
            return this.productService.getProducts(this.productResource);
        }))
            .subscribe((resp) => {
            if (resp && resp.headers) {
                if (this.isFromScanner) {
                    this.isFromScanner = false;
                    if (resp.body.length == 1) {
                        this.onProductSelect(this.clonerService.deepClone(resp.body[0]), null);
                        this.toastrService.success('Product Added Successfully');
                    }
                    else {
                        this.toastrService.warning('Product not found');
                    }
                    this.productResource.barcode = '';
                    this.salesOrderForm.get('filterProductValue').patchValue('');
                }
                else {
                    this.filterProducts = this.clonerService.deepClone(resp.body);
                }
            }
        }, (err) => {
            this.isFromScanner = false;
        });
    }
    getAllTotal() {
        let salesOrderItems = this.salesOrderForm.get('salesOrderItems').value;
        this.totalBeforeDiscount = 0;
        this.grandTotal = 0;
        this.totalDiscount = 0;
        this.totalTax = 0;
        if (salesOrderItems && salesOrderItems.length > 0) {
            salesOrderItems.forEach((so) => {
                if (so.unitPrice && so.quantity) {
                    const totalBeforeDiscount = this.totalBeforeDiscount +
                        parseFloat(this.quantitiesUnitPricePipe.transform(so.quantity, so.unitPrice));
                    this.totalBeforeDiscount = parseFloat(totalBeforeDiscount.toFixed(2));
                    const gradTotal = this.grandTotal +
                        parseFloat(this.quantitiesUnitPricePipe.transform(so.quantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0]));
                    this.grandTotal = parseFloat(gradTotal.toFixed(2));
                    const totalTax = this.totalTax +
                        parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.quantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0]));
                    this.totalTax = parseFloat(totalTax.toFixed(2));
                    const totalDiscount = this.totalDiscount +
                        parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.quantity, so.unitPrice, so.discountPercentage));
                    this.totalDiscount = parseFloat(totalDiscount.toFixed(2));
                }
            });
        }
    }
    onUnitPriceChange() {
        this.getAllTotal();
    }
    onQuantityChange() {
        this.getAllTotal();
    }
    onDiscountChange() {
        this.getAllTotal();
    }
    onTaxSelectionChange() {
        this.getAllTotal();
    }
    onRemoveSalesOrderItem(index) {
        this.salesOrderItemsArray.removeAt(index);
        this.getAllTotal();
    }
    getNewSalesOrderNumber() {
        this.salesOrderService.getNewSalesOrderNumber().subscribe((salesOrder) => {
            if (!this.salesOrder) {
                this.salesOrderForm.patchValue({
                    orderNumber: salesOrder.orderNumber,
                });
            }
        });
    }
    customerNameChangeValue() {
        this.sub$.sink = this.salesOrderForm
            .get('filerCustomer')
            .valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)((c) => (this.isCustomerLoading = true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)((c) => {
            this.customerResource.customerName = c;
            this.customerResource.id = null;
            return this.customerService.getCustomers(this.customerResource);
        }))
            .subscribe((resp) => {
            this.isCustomerLoading = false;
            if (resp && resp.headers) {
                this.customers = [...resp.body];
            }
        }, (err) => {
            this.isCustomerLoading = false;
        });
    }
    getCustomers() {
        if (this.salesOrder) {
            this.customerResource.id = this.salesOrder.customerId;
        }
        else {
            this.customerResource.customerName = '';
            this.customerResource.id = null;
        }
        this.customerService
            .getCustomers(this.customerResource)
            .subscribe((resp) => {
            if (resp && resp.headers) {
                this.customers = [...resp.body];
                const walkInCustomer = this.customers.find((c) => c.isWalkIn);
                if (!walkInCustomer) {
                    this.getWalkinCustomer();
                }
                else {
                    this.salesOrderForm.get('customerId').setValue(walkInCustomer.id);
                }
            }
        });
    }
    getWalkinCustomer() {
        this.customerService.getWalkInCustomer().subscribe((c) => {
            if (c) {
                this.customers.push(c);
                this.salesOrderForm.get('customerId').setValue(c.id);
            }
        });
    }
    onSaveAndNew() {
        this.onSalesOrderSubmit(true);
    }
    onSalesOrderSubmit(isSaveAndNew = false) {
        if (!this.salesOrderForm.valid) {
            this.salesOrderForm.markAllAsTouched();
        }
        else {
            const salesOrder = this.buildSalesOrder();
            let salesOrderItems = this.salesOrderForm.get('salesOrderItems').value;
            if (salesOrderItems && salesOrderItems.length == 0) {
                this.toastrService.error(this.translationService.getValue('PLEASE_SELECT_ATLEASE_ONE_PRODUCT'));
            }
            else {
                this.salesOrderService
                    .addSalesOrder(salesOrder)
                    .subscribe((c) => {
                    this.toastrService.success(this.translationService.getValue('SALES_ORDER_ADDED_SUCCESSFULLY'));
                    if (isSaveAndNew) {
                        this.router.navigate(['/pos']);
                        this.ngOnInit();
                    }
                    else {
                        this.router.navigate(['/sales-order/list']);
                    }
                });
            }
        }
    }
    reloadCurrentRoute() {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentUrl]);
        });
    }
    buildSalesOrder() {
        const salesOrder = {
            id: this.salesOrder ? this.salesOrder.id : '',
            orderNumber: this.salesOrderForm.get('orderNumber').value,
            deliveryDate: this.salesOrderForm.get('deliveryDate').value,
            deliveryStatus: _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_1__.DeliveryStatusEnum.UnDelivery,
            isSalesOrderRequest: false,
            soCreatedDate: this.salesOrderForm.get('soCreatedDate').value,
            salesOrderStatus: _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_4__.SalesOrderStatusEnum.Not_Return,
            customerId: this.salesOrderForm.get('customerId').value,
            totalAmount: this.grandTotal,
            totalDiscount: this.totalDiscount,
            totalTax: this.totalTax,
            note: this.salesOrderForm.get('note').value,
            termAndCondition: this.salesOrderForm.get('termAndCondition').value,
            salesOrderItems: [],
        };
        const salesOrderItems = this.salesOrderForm.get('salesOrderItems').value;
        if (salesOrderItems && salesOrderItems.length > 0) {
            salesOrderItems.forEach((so) => {
                salesOrder.salesOrderItems.push({
                    discount: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.quantity, so.unitPrice, so.discountPercentage)),
                    discountPercentage: so.discountPercentage,
                    productId: so.productId,
                    unitId: so.unitId,
                    quantity: so.quantity,
                    warehouseId: so.warehouseId,
                    taxValue: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.quantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0])),
                    unitPrice: parseFloat(so.unitPrice),
                    salesOrderItemTaxes: so.taxValue
                        ? [
                            ...so.taxValue.map((element) => {
                                const salesOrderItemTaxes = {
                                    taxId: element,
                                };
                                return salesOrderItemTaxes;
                            }),
                        ]
                        : [],
                });
            });
        }
        return salesOrder;
    }
    onSalesOrderList() {
        this.router.navigate(['/']);
    }
}
PosComponent.ɵfac = function PosComponent_Factory(t) { return new (t || PosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_customer_customer_service__WEBPACK_IMPORTED_MODULE_9__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_10__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_product_product_service__WEBPACK_IMPORTED_MODULE_11__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_7__.QuantitiesUnitPricePipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPriceTaxPipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_13__.ClonerService)); };
PosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: PosComponent, selectors: [["app-pos"]], viewQuery: function PosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.filterValue = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([], [_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_7__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPriceTaxPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 109, vars: 76, consts: [[1, "content-area-pos"], ["autocomplete", "off", 3, "formGroup"], [1, "row"], [1, "col-sm-12", "col-md-12", "col-lg-12"], [1, "col-sm-12", "col-12", "order-2", "order-md-1", "col-md-8"], [1, "card"], [1, "card-body"], [1, "text-danger"], ["role", "group", 1, "input-group", "input-customer"], ["formControlName", "customerId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filerCustomer", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [4, "ngIf"], ["formArrayName", "salesOrderItems", 1, "col-sm-12"], [1, "col"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover"], [1, "table-column-200"], [1, "table-column-150"], [1, "table-column-130"], [1, "table-column-110"], [1, "table-column-100"], [2, "text-align", "center"], [1, "fas", "fa-trash-alt", 2, "opacity", "0.5", "filter", "alpha(opacity=50)"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "mt-1"], [1, "col-10", "text-right", "font-weight-bold"], [1, "col-2", "text-left", "font-weight-bold"], [1, "col-2", "text-left", "text-danger", "font-weight-bold"], [1, "col-12"], [1, "col-md-12", "mb-1", "text-center"], ["type", "button", "class", "btn btn-success btn-sm m-right-10 ", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], [1, "col-sm-12", "col-12", "order-1", "order-md-2", "col-md-4"], ["ngxBarCodePut", "", "formControlName", "filterProductValue", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder", "onDetected"], ["filterValue", ""], [1, "form-row", "mt-3", "card-scroller"], ["class", "col-sm-6 col-lg-4", 4, "ngFor", "ngForOf"], ["class", "loading-shade", 4, "ngIf"], [3, "value"], ["class", "text-danger", 4, "ngIf"], [3, "formGroupName"], ["disabled", "", "formControlName", "productName", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100"], ["formControlName", "unitId", 1, "form-control", 3, "dir", "selectionChange"], [3, "dir", "value", 4, "ngFor", "ngForOf"], ["type", "number", "formControlName", "unitPrice", 1, "form-control", 3, "placeholder", "change"], ["type", "number", "formControlName", "quantity", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "discountPercentage", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "taxValue", "placeholder", "Select Tax", "multiple", "", 1, "form-control", 3, "dir", "selectionChange"], ["type", "button", "mat-icon-button", "", "aria-label", "Action", 3, "click", 4, "ngIf"], [3, "dir", "value"], ["type", "button", "mat-icon-button", "", "aria-label", "Action", 3, "click"], [1, "btn-danger"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], [1, "col-sm-6", "col-lg-4"], [1, "card", "card-pos", 3, "click"], [4, "ngIf", "ngIfElse"], ["noImage", ""], [1, "text-center", "card-text"], [1, "img-circle", 3, "src"], ["src", "assets/images/no-preview.jpg", 1, "img-circle", 3, "alt"], [1, "loading-shade"]], template: function PosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 3)(9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 8)(13, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, PosComponent_mat_option_18_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, PosComponent_mat_option_19_Template, 3, 3, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, PosComponent_div_20_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 3)(23, "div", 2)(24, "div", 14)(25, "div", 2)(26, "div", 15)(27, "div", 16)(28, "table", 17)(29, "tr")(30, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](52, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](53, PosComponent_tr_53_Template, 30, 36, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "div", 26)(55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](60, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "div", 2)(62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](67, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "div", 2)(69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](74, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "div", 2)(76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](77, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](78, "div", 2)(79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](84, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](85, "div", 2)(86, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](87, PosComponent_button_87_Template, 4, 3, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](88, PosComponent_button_88_Template, 4, 3, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](89, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PosComponent_Template_button_click_89_listener() { return ctx.onSalesOrderList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](90, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](93, "div", 35)(94, "div", 5)(95, "div", 6)(96, "div", 3)(97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](100, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onDetected", function PosComponent_Template_input_onDetected_100_listener($event) { return ctx.onDetected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](103, "div", 3)(104, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](105, PosComponent_div_105_Template, 8, 3, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](107, PosComponent_div_107_Template, 4, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](108, PosComponent_div_108_Template, 2, 1, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.salesOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](11, 32, "CUSTOMER_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 34, "SELECT_CUSTOMER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 36, "SEARCH_OTHER_CUSTOMERS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.customers.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.salesOrderForm.get("customerId").touched && ctx.salesOrderForm.get("customerId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](32, 38, "PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](35, 40, "UNIT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](38, 42, "PRICE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](41, 44, "QUANTITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](44, 46, "DISCOUNT"), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](47, 48, "TAX"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](50, 50, "TOTAL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.salesOrderItemsArray == null ? null : ctx.salesOrderItemsArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](57, 52, "SUB_TOTAL_BEFORE_DISCOUNT"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](60, 54, ctx.totalBeforeDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](64, 56, "TOTAL_DISCOUNT"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](67, 58, ctx.totalDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](71, 60, "TOTAL_TAX"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](74, 62, ctx.totalTax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](81, 64, "GRAND_TOTAL"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](84, 66, ctx.grandTotal), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](74, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](75, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](92, 68, "CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](99, 70, "PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](102, 72, "SEARCH_OTHER_PRODUCTS_WITH_NAME_AND_SCAN_BARCODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.filterProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.filterProducts.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_14__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormArrayName, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinner, _angular_material_divider__WEBPACK_IMPORTED_MODULE_31__.MatDivider, ngx_barcodeput__WEBPACK_IMPORTED_MODULE_32__.NgxBarCodePutDirective, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_15__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe, _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_7__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPriceTaxPipe], styles: [".mat-card-header-text[_ngcontent-%COMP%] {\n  margin: 0 0 !important;\n}\n\n.list-inline-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n}\n\n.ul-block[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.pos[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.content-area[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n}\n\n#pos[_ngcontent-%COMP%]   #leftdiv[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 10px 5px;\n  background: #f5f5f5;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcQUIlMjBQT1NcXEZyb250ZW5kXFxzcmNcXGFwcFxccG9zXFxwb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwwQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDRUYiLCJmaWxlIjoicG9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICBtYXJnaW46IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGlzdC1pbmxpbmUtaXRlbSBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51bC1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ucG9zIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5jb250ZW50LWFyZWF7XHJcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNwb3MgI2xlZnRkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBtYXJnaW46IDA7XHJcbn0iLCIubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBtYXJnaW46IDAgMCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdC1pbmxpbmUtaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnVsLWJsb2NrIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ucG9zIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmNvbnRlbnQtYXJlYSB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4jcG9zICNsZWZ0ZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"] });


/***/ }),

/***/ 69295:
/*!***********************************!*\
  !*** ./src/app/pos/pos.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosModule": () => (/* binding */ PosModule)
/* harmony export */ });
/* harmony import */ var _pos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pos.component */ 28394);
/* harmony import */ var _pos_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pos-routing.module */ 43852);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_barcodeput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-barcodeput */ 78694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);

























class PosModule {
}
PosModule.ɵfac = function PosModule_Factory(t) { return new (t || PosModule)(); };
PosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PosModule });
PosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _pos_routing_module__WEBPACK_IMPORTED_MODULE_1__.PosRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_21__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_21__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule,
        ngx_barcodeput__WEBPACK_IMPORTED_MODULE_24__.NgxBarCodePutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PosModule, { declarations: [_pos_component__WEBPACK_IMPORTED_MODULE_0__.PosComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _pos_routing_module__WEBPACK_IMPORTED_MODULE_1__.PosRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_21__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_21__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_23__.MatDividerModule,
        ngx_barcodeput__WEBPACK_IMPORTED_MODULE_24__.NgxBarCodePutModule] }); })();


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


/***/ }),

/***/ 78694:
/*!****************************************************************!*\
  !*** ./node_modules/ngx-barcodeput/fesm2015/ngx-barcodeput.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxBarCodePutDirective": () => (/* binding */ NgxBarCodePutDirective),
/* harmony export */   "NgxBarCodePutModule": () => (/* binding */ NgxBarCodePutModule)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);





class NgxBarCodePutDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    /**
     * Input delay
     */

    this.debounce = 0;
    /**
     * After how many characters start search
     */

    this.skipStart = 0;
    /**
     * Data cleansing event
     */

    this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event after data entry
     */

    this.onDetected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Use for unsubscribe
     */

    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  ngAfterViewInit() {
    /**
     * Often the code scanner is connected to the computer.
     * It emulates a press key, so we use keyboard events to press and release keys.
     */
    const events = ['keydown', 'keyup'];
    /**
     * Empty object for delay logic
     */

    const pressed = {};
    /**
     * Look at the
     * {@Link http://reactivex.io/documentation/operators/from.html}
     */

    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(events).pipe(
    /**
     * Look at the
     * {@Link https://rxjs-dev.firebaseapp.com/api/operators/mergeMap}
     */
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(event => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.elementRef.nativeElement, event)),
    /**
     * Prepare input data
     */
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(event => {
      switch (event.type) {
        case 'keydown':
          /**
           * Since "which" is deprecated, we use it for a temporary variable
           * and set the processing time keydown.
           */
          pressed[event.which] = event.timeStamp;
          break;

        case 'keyup':
          /**
           * In the delay set the difference between keydown and keyup events.
           */
          Object.assign(event, {
            duration: (event.timeStamp - pressed[event.which]) / 1000
          });
          break;
      }
      /**
       * @return {event: KeyboardEvent}
       */


      return event;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => {
      if (event.keyCode === 8 || event.code === 'Backspace' || event.which === 8) {
        /**
         * Used to clear data.
         */
        this.onDelete.emit({
          event,
          value: event.target.value,
          type: 'delete'
        });
      }
      /**
       * Return data after typed in two characters.
       */


      return event.target.value.length > this.skipStart;
    }),
    /**
     * Data entry delay is used to limit requests.
     */
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(this.debounce),
    /**
     * Look at the
     * {@Link http://reactivex.io/documentation/operators/distinct.html}
     */
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)())
    /**
     * Use for unsubscribe
     */
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
    /**
     * Subscribe to the input data and determine the delay time for our purposes.
     */
    .subscribe(event => {
      if (event.duration > 0.02) {
        /**
         * Keyboard input.
         */
        this.onDetected.emit({
          event,
          value: event.target.value,
          time: event.duration,
          type: 'keyboard'
        });
      } else if (event.duration <= 0.02) {
        /**
         * Input from the scanner.
         */
        this.onDetected.emit({
          event,
          value: event.target.value,
          time: event.duration,
          type: 'scanner'
        });
      }
    });
  }
  /**
   * Use for unsubscribe
   */


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}

NgxBarCodePutDirective.ɵfac = function NgxBarCodePutDirective_Factory(t) {
  return new (t || NgxBarCodePutDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

NgxBarCodePutDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: NgxBarCodePutDirective,
  selectors: [["", "ngxBarCodePut", ""]],
  inputs: {
    debounce: "debounce",
    skipStart: "skipStart"
  },
  outputs: {
    onDelete: "onDelete",
    onDetected: "onDetected"
  }
});

NgxBarCodePutDirective.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}];

NgxBarCodePutDirective.propDecorators = {
  debounce: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  skipStart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
  }],
  onDelete: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }],
  onDetected: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxBarCodePutDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngxBarCodePut]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    skipStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onDelete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onDetected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class NgxBarCodePutModule {}

NgxBarCodePutModule.ɵfac = function NgxBarCodePutModule_Factory(t) {
  return new (t || NgxBarCodePutModule)();
};

NgxBarCodePutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxBarCodePutModule
});
NgxBarCodePutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxBarCodePutModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [NgxBarCodePutDirective],
      exports: [NgxBarCodePutDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxBarCodePutModule, {
    declarations: [NgxBarCodePutDirective],
    exports: [NgxBarCodePutDirective]
  });
})();
/*
 * Public API Surface of ngx-barcodeput
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pos_pos_module_ts.js.map