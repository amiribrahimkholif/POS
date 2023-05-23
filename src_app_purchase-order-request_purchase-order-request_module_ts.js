"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_purchase-order-request_purchase-order-request_module_ts"],{

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

/***/ 14662:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/purchase-order-request/purchase-order-request-add-edit/purchase-order-request-add-edit.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderRequestAddEditComponent": () => (/* binding */ PurchaseOrderRequestAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/delivery-status-enum */ 3007);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/domain-classes/purchase-order-status */ 12023);
/* harmony import */ var _core_domain_classes_supplier_resource_parameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/domain-classes/supplier-resource-parameter */ 32754);
/* harmony import */ var _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice-tax.pipe */ 76521);
/* harmony import */ var _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice.pipe */ 16695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/domain-classes/operator */ 22746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/supplier/supplier.service */ 35803);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/purchase-order/purchase-order.service */ 69822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/tax.service */ 36018);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/unit-conversation/unit-conversation.service */ 14603);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






































function PurchaseOrderRequestAddEditComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function PurchaseOrderRequestAddEditComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "PO_ORDER_NUMBER_IS_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_div_18_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.purchaseOrderForm.get("orderNumber").errors == null ? null : ctx_r1.purchaseOrderForm.get("orderNumber").errors.required);
} }
function PurchaseOrderRequestAddEditComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "ORDER_DATE_IS_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_div_26_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.purchaseOrderForm.get("poCreatedDate").errors == null ? null : ctx_r2.purchaseOrderForm.get("poCreatedDate").errors.required);
} }
function PurchaseOrderRequestAddEditComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_div_36_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r4.purchaseOrderForm.get("deliveryDate").errors == null ? null : ctx_r4.purchaseOrderForm.get("deliveryDate").errors.required);
} }
function PurchaseOrderRequestAddEditComponent_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r15 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r6.langDir)("value", supplier_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", supplier_r15.supplierName, " ");
} }
function PurchaseOrderRequestAddEditComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " No Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function PurchaseOrderRequestAddEditComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SUPPLIER_NAME_IS_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_div_52_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r8.purchaseOrderForm.get("supplierId").errors == null ? null : ctx_r8.purchaseOrderForm.get("supplierId").errors.required);
} }
function PurchaseOrderRequestAddEditComponent_tr_124_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderRequestAddEditComponent_tr_124_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r35); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r33.onRemovePurchaseOrderItem(i_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} }
function PurchaseOrderRequestAddEditComponent_tr_124_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r36 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r20.langDir)("value", a_r36.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", a_r36.name, " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, " No Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "PRODUCT_IS_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_tr_124_div_11_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("productId").errors == null ? null : purchaseOrderItem_r17.get("productId").errors.required);
} }
function PurchaseOrderRequestAddEditComponent_tr_124_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const warehouse_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", warehouse_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", warehouse_r39.name, " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r40 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r24.langDir)("value", a_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", a_r40.name, " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "UNIT_IS_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_tr_124_div_18_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("unitId").errors == null ? null : purchaseOrderItem_r17.get("unitId").errors.required);
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE_IS_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "PRICE_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_tr_124_div_22_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PurchaseOrderRequestAddEditComponent_tr_124_div_22_div_2_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("unitPrice").errors == null ? null : purchaseOrderItem_r17.get("unitPrice").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("unitPrice").errors == null ? null : purchaseOrderItem_r17.get("unitPrice").errors.min);
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "QUANTITY_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_tr_124_div_26_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PurchaseOrderRequestAddEditComponent_tr_124_div_26_div_2_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("quantity").errors == null ? null : purchaseOrderItem_r17.get("quantity").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("quantity").errors == null ? null : purchaseOrderItem_r17.get("quantity").errors.min);
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "DISCOUNT_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "DISCOUNT_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind3"](4, 6, purchaseOrderItem_r17.get("quantity").value, purchaseOrderItem_r17.get("unitPrice").value, purchaseOrderItem_r17.get("discountPercentage").value)), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", tax_r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("", tax_r50.name, " (", tax_r50.percentage, "%) ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TAX_IS_REQUIRED"), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_tr_124_div_44_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("taxValue").errors == null ? null : purchaseOrderItem_r17.get("taxValue").errors.required);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function PurchaseOrderRequestAddEditComponent_tr_124_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const purchaseOrderItem_r17 = ctx_r53.$implicit;
    const i_r18 = ctx_r53.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "TAX_AMOUNT"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBindV"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction5"](12, _c0, purchaseOrderItem_r17.get("quantity").value, purchaseOrderItem_r17.get("unitPrice").value, purchaseOrderItem_r17.get("discountPercentage").value, purchaseOrderItem_r17.get("taxValue").value, ctx_r32.taxsMap[i_r18]))), " ");
} }
function PurchaseOrderRequestAddEditComponent_tr_124_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr", 58)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PurchaseOrderRequestAddEditComponent_tr_124_button_2_Template, 3, 0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "td")(4, "mat-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selectionChange", function PurchaseOrderRequestAddEditComponent_tr_124_Template_mat_select_selectionChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55); const i_r18 = restoredCtx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r54.onProductSelectionChange($event.value, i_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, PurchaseOrderRequestAddEditComponent_tr_124_mat_option_9_Template, 2, 3, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, PurchaseOrderRequestAddEditComponent_tr_124_mat_option_10_Template, 2, 0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, PurchaseOrderRequestAddEditComponent_tr_124_div_11_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "td")(13, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, PurchaseOrderRequestAddEditComponent_tr_124_mat_option_14_Template, 2, 2, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "td")(16, "mat-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selectionChange", function PurchaseOrderRequestAddEditComponent_tr_124_Template_mat_select_selectionChange_16_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55); const i_r18 = restoredCtx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r56.onSelectionChange($event.value, i_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, PurchaseOrderRequestAddEditComponent_tr_124_mat_option_17_Template, 2, 3, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, PurchaseOrderRequestAddEditComponent_tr_124_div_18_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "td")(20, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function PurchaseOrderRequestAddEditComponent_tr_124_Template_input_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r57.onUnitPriceChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](22, PurchaseOrderRequestAddEditComponent_tr_124_div_22_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](23, "td")(24, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function PurchaseOrderRequestAddEditComponent_tr_124_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r58.onQuantityChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](26, PurchaseOrderRequestAddEditComponent_tr_124_div_26_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](29, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](30, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "td")(32, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function PurchaseOrderRequestAddEditComponent_tr_124_Template_input_change_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r59.onDiscountChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](34, PurchaseOrderRequestAddEditComponent_tr_124_div_34_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](37, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](38, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](39, PurchaseOrderRequestAddEditComponent_tr_124_div_39_Template, 5, 10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "td")(41, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selectionChange", function PurchaseOrderRequestAddEditComponent_tr_124_Template_mat_select_selectionChange_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r60.onTaxSelectionChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](43, PurchaseOrderRequestAddEditComponent_tr_124_mat_option_43_Template, 2, 3, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, PurchaseOrderRequestAddEditComponent_tr_124_div_44_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](47, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](48, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](49, PurchaseOrderRequestAddEditComponent_tr_124_div_49_Template, 5, 18, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const purchaseOrderItem_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroupName", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", i_r18 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 28, "SELECT_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r9.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 30, "SEARCH_OTHER_PRODUCTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r9.filterProductsMap[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r9.filterProductsMap[i_r18].length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("productId").touched && purchaseOrderItem_r17.get("productId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r9.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r9.warehouseMap[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r9.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r9.unitsMap[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("unitId").touched && purchaseOrderItem_r17.get("unitId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](21, 32, "UNIT_PER_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("unitPrice").touched && purchaseOrderItem_r17.get("unitPrice").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](25, 34, "QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("quantity").touched && purchaseOrderItem_r17.get("quantity").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](29, 36, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](30, 38, purchaseOrderItem_r17.get("quantity").value, purchaseOrderItem_r17.get("unitPrice").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](33, 41, "DISCOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("discountPercentage").errors == null ? null : purchaseOrderItem_r17.get("discountPercentage").errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](37, 43, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind3"](38, 45, purchaseOrderItem_r17.get("quantity").value, purchaseOrderItem_r17.get("unitPrice").value, purchaseOrderItem_r17.get("discountPercentage").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("discountPercentage").value != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](42, 49, "TAX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r9.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r9.taxsMap[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("taxValue").touched && purchaseOrderItem_r17.get("taxValue").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](47, 51, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBindV"](48, 53, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction5"](59, _c0, purchaseOrderItem_r17.get("quantity").value, purchaseOrderItem_r17.get("unitPrice").value, purchaseOrderItem_r17.get("discountPercentage").value, purchaseOrderItem_r17.get("taxValue").value, ctx_r9.taxsMap[i_r18]))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r17.get("taxValue").value);
} }
function PurchaseOrderRequestAddEditComponent_button_158_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderRequestAddEditComponent_button_158_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r61.onPurchaseOrderSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 1, "SAVE"), "");
} }
function PurchaseOrderRequestAddEditComponent_div_163_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "mat-spinner");
} }
function PurchaseOrderRequestAddEditComponent_div_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderRequestAddEditComponent_div_163_mat_spinner_1_Template, 1, 0, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r11.isLoading);
} }
const _c1 = function () { return ["POR_ADD_PO_REQUEST", "POR_UPDATE_PO_REQUEST"]; };
const _c2 = function () { return ["/purchase-order-request/list"]; };
class PurchaseOrderRequestAddEditComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_6__.BaseComponent {
    constructor(fb, supplierService, toastrService, purchaseOrderService, router, translationService, commonService, taxService, productService, route, quantitiesUnitPricePipe, quantitiesUnitPriceTaxPipe, unitConversationService) {
        super(translationService);
        this.fb = fb;
        this.supplierService = supplierService;
        this.toastrService = toastrService;
        this.purchaseOrderService = purchaseOrderService;
        this.router = router;
        this.translationService = translationService;
        this.commonService = commonService;
        this.taxService = taxService;
        this.productService = productService;
        this.route = route;
        this.quantitiesUnitPricePipe = quantitiesUnitPricePipe;
        this.quantitiesUnitPriceTaxPipe = quantitiesUnitPriceTaxPipe;
        this.unitConversationService = unitConversationService;
        this.products = [];
        this.suppliers = [];
        this.isLoading = false;
        this.isSupplierLoading = false;
        this.filterProductsMap = {};
        this.warehouseMap = {};
        this.warehouseList = [];
        this.unitsMap = {};
        this.unitConversationlist = [];
        this.taxsMap = {};
        this.totalBeforeDiscount = 0;
        this.totalAfterDiscount = 0;
        this.totalDiscount = 0;
        this.grandTotal = 0;
        this.totalTax = 0;
        this.isEdit = false;
        this.getLangDir();
        this.supplierResource = new _core_domain_classes_supplier_resource_parameter__WEBPACK_IMPORTED_MODULE_3__.SupplierResourceParameter();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_1__.ProductResourceParameter();
    }
    get purchaseOrderItemsArray() {
        return this.purchaseOrderForm.get('purchaseOrderItems');
    }
    ngOnInit() {
        this.unitConversationlist = [...this.route.snapshot.data['units']];
        this.warehouseList = [...this.route.snapshot.data['warehouses']];
        this.createPurchaseOrder();
        this.supplierNameChangeValue();
        this.getNewPurchaseOrderNumber();
        this.getTaxes();
        this.getProductByBarCodeValue();
    }
    getTaxes() {
        this.taxes$ = this.taxService.entities$;
    }
    createPurchaseOrder() {
        this.route.data
            .pipe()
            .subscribe((purchaseOrderData) => {
            this.purchaseOrder = purchaseOrderData.purchaseorder;
            if (this.purchaseOrder) {
                this.isEdit = true;
                this.purchaseOrderForm = this.fb.group({
                    orderNumber: [this.purchaseOrder.orderNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                    filerSupplier: [''],
                    deliveryDate: [this.purchaseOrder.deliveryDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                    poCreatedDate: [this.purchaseOrder.poCreatedDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                    deliveryStatus: [this.purchaseOrder.deliveryStatus],
                    supplierId: [this.purchaseOrder.supplierId, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                    note: [this.purchaseOrder.note],
                    filterBarCodeValue: [''],
                    termAndCondition: [this.purchaseOrder.termAndCondition],
                    purchaseOrderItems: this.fb.array([])
                });
                this.purchaseOrder.purchaseOrderItems.forEach(c => {
                    this.purchaseOrderItemsArray.push(this.createPurchaseOrderItemPatch(this.purchaseOrderItemsArray.length, c));
                });
                this.getSuppliers();
                this.getAllTotal();
            }
            else {
                this.isEdit = false;
                this.getSuppliers();
                this.purchaseOrderForm = this.fb.group({
                    orderNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                    filerSupplier: [''],
                    deliveryDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                    poCreatedDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                    deliveryStatus: [1],
                    supplierId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
                    note: [''],
                    filterBarCodeValue: [''],
                    termAndCondition: [''],
                    purchaseOrderItems: this.fb.array([])
                });
                this.purchaseOrderItemsArray.push(this.createPurchaseOrderItem(this.purchaseOrderItemsArray.length));
            }
        });
    }
    onAddAnotherProduct() {
        this.purchaseOrderItemsArray.push(this.createPurchaseOrderItem(this.purchaseOrderItemsArray.length));
    }
    createPurchaseOrderItemPatch(index, purchaseOrderItem) {
        const taxs = purchaseOrderItem.purchaseOrderItemTaxes.map(c => c.taxId);
        const formGroup = this.fb.group({
            productId: [purchaseOrderItem.productId, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            filterProductValue: [''],
            unitPrice: [purchaseOrderItem.unitPrice, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            quantity: [purchaseOrderItem.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            taxValue: [taxs],
            unitId: [purchaseOrderItem.unitId, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            warehouseId: [purchaseOrderItem.warehouseId],
            discountPercentage: [purchaseOrderItem.discountPercentage]
        });
        this.unitsMap[index] = this.unitConversationlist.filter(c => c.id == purchaseOrderItem.product.unitId || c.parentId == purchaseOrderItem.product.unitId);
        ;
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        this.warehouseMap[index] = this.warehouseList;
        this.filterProductsMap[index.toString()] = [purchaseOrderItem.product];
        this.getProductByNameValue(formGroup, index);
        return formGroup;
    }
    createPurchaseOrderItem(index) {
        const formGroup = this.fb.group({
            productId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            filterProductValue: [''],
            unitPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(0)]],
            quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(1)]],
            taxValue: [null],
            unitId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]],
            warehouseId: [''],
            discountPercentage: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.min(0)]]
        });
        // this.unitsMap[index] = [... this.route.snapshot.data['units']];
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        this.warehouseMap[index] = this.warehouseList;
        this.filterProductsMap[index.toString()] = [...this.route.snapshot.data['products']];
        this.getProductByNameValue(formGroup, index);
        return formGroup;
    }
    getProductByBarCodeValue() {
        this.sub$.sink = this.purchaseOrderForm.get('filterBarCodeValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(c => {
            if (c) {
                this.productResource.barcode = c;
                return this.productService.getProducts(this.productResource);
            }
            {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.of)([]);
            }
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                if (resp.body.length == 1) {
                    if (this.purchaseOrderItemsArray.length == 1) {
                        if (!this.purchaseOrderItemsArray.controls[0].get('productId').value) {
                            this.onRemovePurchaseOrderItem(0);
                        }
                    }
                    const productId = resp.body[0].id;
                    let purchaseOrderItems = this.purchaseOrderItemsArray.value;
                    var existingProductIndex = purchaseOrderItems.findIndex(c => c.productId == productId);
                    if (existingProductIndex >= 0) {
                        let iteamToUpdate = purchaseOrderItems[existingProductIndex];
                        this.purchaseOrderItemsArray.at(existingProductIndex).get('quantity').patchValue(iteamToUpdate.quantity + 1);
                    }
                    else {
                        this.onAddAnotherProduct();
                        const currentIndex = this.purchaseOrderItemsArray.length - 1;
                        this.filterProductsMap[currentIndex.toString()] = [...resp.body];
                        this.onProductSelectionChange(productId, currentIndex, false);
                    }
                    this.getAllTotal();
                }
                else {
                    this.toastrService.warning('Product not found');
                }
                this.productResource.barcode = '';
                this.purchaseOrderForm.get('filterBarCodeValue').patchValue('');
            }
        }, (err) => {
        });
    }
    getProductByNameValue(formGroup, index) {
        if (this.purchaseOrder) {
            this.getProducts(index);
        }
        this.sub$.sink = formGroup.get('filterProductValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(c => {
            this.productResource.name = c;
            return this.productService.getProducts(this.productResource);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.filterProductsMap[index.toString()] = [...resp.body];
            }
        }, (err) => {
        });
    }
    getAllTotal() {
        let purchaseOrderItems = this.purchaseOrderForm.get('purchaseOrderItems').value;
        this.totalBeforeDiscount = 0;
        this.grandTotal = 0;
        this.totalDiscount = 0;
        this.totalTax = 0;
        if (purchaseOrderItems && purchaseOrderItems.length > 0) {
            purchaseOrderItems.forEach(po => {
                if (po.unitPrice && po.quantity) {
                    const totalBeforeDiscount = this.totalBeforeDiscount + parseFloat(this.quantitiesUnitPricePipe.transform(po.quantity, po.unitPrice));
                    this.totalBeforeDiscount = parseFloat(totalBeforeDiscount.toFixed(2));
                    const gradTotal = this.grandTotal + parseFloat(this.quantitiesUnitPricePipe.transform(po.quantity, po.unitPrice, po.discountPercentage, po.taxValue, this.taxsMap[0]));
                    this.grandTotal = parseFloat(gradTotal.toFixed(2));
                    const totalTax = this.totalTax + parseFloat(this.quantitiesUnitPriceTaxPipe.transform(po.quantity, po.unitPrice, po.discountPercentage, po.taxValue, this.taxsMap[0]));
                    this.totalTax = parseFloat(totalTax.toFixed(2));
                    const totalDiscount = this.totalDiscount + parseFloat(this.quantitiesUnitPriceTaxPipe.transform(po.quantity, po.unitPrice, po.discountPercentage));
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
    onRemovePurchaseOrderItem(index) {
        this.purchaseOrderItemsArray.removeAt(index);
        this.getAllTotal();
    }
    getProducts(index) {
        if (this.products.length === 0) {
            this.productResource.name = '';
            this.productService.getProducts(this.productResource)
                .subscribe((resp) => {
                this.products = [...resp.body];
                this.filterProductsMap[index.toString()] = [...resp.body];
            }, (err) => {
            });
        }
        else {
            this.filterProductsMap[index.toString()] = [...this.products];
        }
    }
    setUnitConversationForProduct(id, index) {
        this.unitsMap[index] = this.unitConversationlist.filter(c => c.id == id || c.parentId == id);
    }
    onSelectionChange(unitId, index, isFromUI = true) {
        const productId = this.purchaseOrderItemsArray.controls[index].get('productId').value;
        const product = this.filterProductsMap[index].find(c => c.id === productId);
        const unit = this.unitConversationlist.find(c => c.id === unitId);
        let price = 0;
        if (unit.value) {
            switch (unit.operator) {
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__.Operators.Plush:
                    price = product.purchasePrice + parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__.Operators.Minus:
                    price = product.purchasePrice - parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__.Operators.Multiply:
                    price = product.purchasePrice * parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__.Operators.Divide:
                    price = product.purchasePrice / parseFloat(unit.value);
                    break;
            }
            this.purchaseOrderItemsArray.controls[index].patchValue({
                unitPrice: price,
            });
        }
        else {
            this.purchaseOrderItemsArray.controls[index].patchValue({
                unitPrice: product.purchasePrice,
                unitId: unitId,
                warehouseId: product.warehouseId
            });
        }
    }
    onProductSelectionChange(productId, index, isFromUI = true) {
        const product = this.filterProductsMap[index].find((c) => c.id === productId);
        this.setUnitConversationForProduct(product.unitId, index);
        if (isFromUI) {
            this.purchaseOrderItemsArray.controls[index].patchValue({
                filterProductValue: ''
            });
        }
        else {
            this.purchaseOrderItemsArray.controls[index].patchValue({
                productId: productId
            });
        }
        this.purchaseOrderItemsArray.controls[index].patchValue({
            unitPrice: product.purchasePrice,
            unitId: product.unitId,
            warehouseId: product.warehouseId
        });
        if (product.productTaxes.length) {
            this.purchaseOrderItemsArray.controls[index].patchValue({
                taxValue: product.productTaxes.map(c => c.taxId)
            });
        }
        this.getAllTotal();
    }
    getNewPurchaseOrderNumber() {
        if (!this.purchaseOrder) {
            this.purchaseOrderService.getNewPurchaseOrderNumber(false)
                .subscribe(purchaseOrder => {
                this.purchaseOrderForm.patchValue({
                    orderNumber: purchaseOrder.orderNumber
                });
            });
        }
    }
    supplierNameChangeValue() {
        this.sub$.sink = this.purchaseOrderForm.get('filerSupplier').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(c => this.isSupplierLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(c => {
            this.supplierResource.supplierName = c;
            this.supplierResource.id = '';
            return this.supplierService.getSuppliers(this.supplierResource);
        })).subscribe((resp) => {
            this.isSupplierLoading = false;
            if (resp && resp.headers) {
                this.suppliers = [...resp.body];
            }
        }, (err) => {
            this.isSupplierLoading = false;
        });
    }
    getSuppliers() {
        if (this.purchaseOrder) {
            this.supplierResource.id = this.purchaseOrder.supplierId;
        }
        else {
            this.supplierResource.supplierName = '';
            this.supplierResource.id = '';
        }
        this.supplierService.getSuppliers(this.supplierResource)
            .subscribe(resp => {
            if (resp && resp.headers) {
                this.suppliers = [...resp.body];
            }
        });
    }
    onPurchaseOrderSubmit() {
        if (!this.purchaseOrderForm.valid) {
            this.purchaseOrderForm.markAllAsTouched();
        }
        else {
            if (this.purchaseOrder && this.purchaseOrder.purchaseOrderStatus === _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderStatusEnum.Not_Return) {
                this.toastrService.error("Purchase Order can't edit becuase it's already approved.");
                return;
            }
            this.isLoading = true;
            const purchaseOrder = this.buildPurchaseOrder();
            if (purchaseOrder.id) {
                this.purchaseOrderService.updatePurchaseOrder(purchaseOrder)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success('Quotation Edited successfully.');
                    this.router.navigate(['/purchase-order-request/list']);
                }, (err) => {
                    this.isLoading = false;
                });
            }
            else {
                this.purchaseOrderService.addPurchaseOrder(purchaseOrder)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success('Quotation added successfully.');
                    this.router.navigate(['/purchase-order-request/list']);
                }, (err) => {
                    this.isLoading = false;
                });
            }
        }
    }
    buildPurchaseOrder() {
        const purchaseOrder = {
            id: this.purchaseOrder ? this.purchaseOrder.id : '',
            orderNumber: this.purchaseOrderForm.get('orderNumber').value,
            deliveryDate: this.purchaseOrderForm.get('deliveryDate').value,
            deliveryStatus: _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_0__.DeliveryStatusEnum.UnDelivery,
            isPurchaseOrderRequest: true,
            poCreatedDate: this.purchaseOrderForm.get('poCreatedDate').value,
            purchaseOrderStatus: _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderStatusEnum.Not_Return,
            supplierId: this.purchaseOrderForm.get('supplierId').value,
            totalAmount: this.grandTotal,
            totalDiscount: this.totalDiscount,
            totalTax: this.totalTax,
            note: this.purchaseOrderForm.get('note').value,
            termAndCondition: this.purchaseOrderForm.get('termAndCondition').value,
            purchaseOrderItems: []
        };
        const purchaseOrderItems = this.purchaseOrderForm.get('purchaseOrderItems').value;
        if (purchaseOrderItems && purchaseOrderItems.length > 0) {
            purchaseOrderItems.forEach(po => {
                purchaseOrder.purchaseOrderItems.push({
                    discount: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(po.quantity, po.unitPrice, po.discountPercentage)),
                    discountPercentage: po.discountPercentage,
                    productId: po.productId,
                    unitId: po.unitId,
                    warehouseId: po.warehouseId,
                    quantity: po.quantity,
                    taxValue: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(po.quantity, po.unitPrice, po.discountPercentage, po.taxValue, this.taxsMap[0])),
                    unitPrice: parseFloat(po.unitPrice),
                    purchaseOrderItemTaxes: po.taxValue ? [
                        ...po.taxValue.map(element => {
                            const purchaseOrderItemTaxes = {
                                taxId: element
                            };
                            return purchaseOrderItemTaxes;
                        })
                    ] : []
                });
            });
        }
        return purchaseOrder;
    }
}
PurchaseOrderRequestAddEditComponent.ɵfac = function PurchaseOrderRequestAddEditComponent_Factory(t) { return new (t || PurchaseOrderRequestAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_8__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_24__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_9__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_11__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__.TaxService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_13__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_25__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPricePipe), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_4__.QuantitiesUnitPriceTaxPipe), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_14__.UnitConversationService)); };
PurchaseOrderRequestAddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: PurchaseOrderRequestAddEditComponent, selectors: [["app-purchase-order-request-add-edit"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵProvidersFeature"]([], [_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_4__.QuantitiesUnitPriceTaxPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 164, vars: 121, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup"], [1, "row"], [1, "col-md-3"], [1, "form-group"], [1, "text-danger"], ["formControlName", "orderNumber", "type", "text", 1, "form-control", "w-100", 3, "readonly"], [4, "ngIf"], ["for", "poCreatedDate", 1, "text-danger"], ["id", "poCreatedDate", "formControlName", "poCreatedDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["poCreatedDate", ""], ["for", "deliveryDate", 1, "text-danger"], ["id", "deliveryDate", "formControlName", "deliveryDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["deliveryDate", ""], [1, "input-group"], ["formControlName", "supplierId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filerSupplier", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [1, "col-sm-6"], ["formControlName", "termAndCondition", 1, "form-control", "w-100"], ["formControlName", "note", 1, "form-control", "w-100"], [1, "col-sm-12", "col-md-12"], [1, "col-sm-6", "col-md-6", "col-lg-6"], ["formControlName", "filterBarCodeValue", "type", "text", 1, "form-control", "w-100", 3, "placeholder"], ["formArrayName", "purchaseOrderItems", 1, "col-sm-12"], [1, "col-sm-12", "text-right", "mb-2"], ["type", "button", 1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], [1, "col"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "table-sm"], [1, "table-column-50"], [1, "table-column-200"], [1, "table-column-150"], [1, "table-column-130"], [1, "table-column-120"], [1, "table-column-100"], [1, "table-column-300"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-10", "text-right", "font-weight-bold"], [1, "col-2", "text-left", "font-weight-bold"], [1, "col-2", "text-left", "text-danger", "font-weight-bold"], [1, "col-12"], [1, "col-md-12", "mb-1"], ["type", "button", "class", "btn btn-success btn-sm m-right-10", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "routerLink"], [1, "fas", "fa-times-circle"], [1, "loading-shade"], ["class", "text-danger", 4, "ngIf"], [3, "dir", "value"], [3, "value"], [3, "formGroupName"], ["type", "button", "mat-icon-button", "", "aria-label", "Action", 3, "click", 4, "ngIf"], ["formControlName", "productId", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["formControlName", "filterProductValue", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], ["placeholder", "Select Warehouse", "formControlName", "warehouseId", 1, "form-control", 3, "dir"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "unitId", 1, "form-control", 3, "dir", "selectionChange"], ["type", "number", "formControlName", "unitPrice", 1, "form-control", 3, "placeholder", "change"], ["type", "number", "formControlName", "quantity", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "discountPercentage", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "taxValue", "multiple", "", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["type", "button", "mat-icon-button", "", "aria-label", "Action", 3, "click"], [1, "btn-danger"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"]], template: function PurchaseOrderRequestAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, PurchaseOrderRequestAddEditComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, PurchaseOrderRequestAddEditComponent_div_18_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "div", 7)(20, "div", 8)(21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](26, PurchaseOrderRequestAddEditComponent_div_26_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "owl-date-time", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "div", 7)(30, "div", 8)(31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](36, PurchaseOrderRequestAddEditComponent_div_36_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](37, "owl-date-time", 14, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](39, "div", 7)(40, "div", 8)(41, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "div", 19)(45, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](50, PurchaseOrderRequestAddEditComponent_mat_option_50_Template, 2, 3, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](51, PurchaseOrderRequestAddEditComponent_mat_option_51_Template, 2, 0, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](52, PurchaseOrderRequestAddEditComponent_div_52_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "div", 6)(54, "div", 24)(55, "div", 8)(56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "div", 19)(60, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](61, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](62, "div", 24)(63, "div", 8)(64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](67, "div", 19)(68, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](69, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "div", 6)(71, "div", 27)(72, "div", 6)(73, "div", 28)(74, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](77, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](79, "div", 6)(80, "div", 30)(81, "div", 6)(82, "div", 31)(83, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderRequestAddEditComponent_Template_button_click_83_listener() { return ctx.onAddAnotherProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](84, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](87, "div", 6)(88, "div", 34)(89, "div", 35)(90, "table", 36)(91, "tr")(92, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](93, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](94, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](97, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](100, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](103, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](106, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](109, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](112, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](115, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](118, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](121, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](124, PurchaseOrderRequestAddEditComponent_tr_124_Template, 50, 65, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](125, "div", 45)(126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](129, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](131, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](132, "div", 6)(133, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](136, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](138, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](139, "div", 6)(140, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](142, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](143, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](145, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](146, "div", 6)(147, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](148, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](149, "div", 6)(150, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](152, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](153, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](155, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](156, "div", 6)(157, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](158, PurchaseOrderRequestAddEditComponent_button_158_Template, 4, 3, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](159, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](160, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](163, PurchaseOrderRequestAddEditComponent_div_163_Template, 2, 1, "div", 4);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](28);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 53, "MANAGE_PURCHASE_ORDER_REQUEST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx.purchaseOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](14, 55, "PO_REQUEST_NUMBER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("readonly", ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForm.get("orderNumber").touched && ctx.purchaseOrderForm.get("orderNumber").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](23, 57, "ORDER_DATE"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](25, 59, "DELIVERY_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("owlDateTimeTrigger", _r3)("owlDateTime", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForm.get("poCreatedDate").touched && ctx.purchaseOrderForm.get("poCreatedDate").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](33, 61, "DELIVERY_DATE"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](35, 63, "DELIVERY_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("owlDateTimeTrigger", _r5)("owlDateTime", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForm.get("deliveryDate").touched && ctx.purchaseOrderForm.get("deliveryDate").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](43, 65, "SUPPLIER_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](46, 67, "SELECT_SUPPLIER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](48, 69, "SEARCH_OTHER_SUPPLIERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.suppliers);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.suppliers.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForm.get("supplierId").touched && ctx.purchaseOrderForm.get("supplierId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](58, 71, "TERM_AND_CONDITION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](66, 73, "NOTES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](76, 75, "SCAN_BARCODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](78, 77, "SCAN_BARCODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](86, 79, "ADD_ANOTHER_PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](96, 81, "PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](99, 83, "WAREHOUSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](102, 85, "UNIT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](105, 87, "PRICE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](108, 89, "QUANTITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](111, 91, "SUBTOTAL_BEFORE_DISCOUNT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](114, 93, "DISCOUNT"), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](117, 95, "SUBTOTAL_AFTER_DISCOUNT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](120, 97, "TAX"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](123, 99, "TOTAL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx.purchaseOrderItemsArray == null ? null : ctx.purchaseOrderItemsArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](128, 101, "SUB_TOTAL_BEFORE_DISCOUNT"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](131, 103, ctx.totalBeforeDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](135, 105, "TOTAL_DISCOUNT"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](138, 107, ctx.totalDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](142, 109, "TOTAL_TAX"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](145, 111, ctx.totalTax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](152, 113, "GRAND_TOTAL"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](155, 115, ctx.grandTotal), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](119, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](120, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](162, 117, "CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormArrayName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_15__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_32__.MatProgressSpinner, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_33__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_33__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_33__.OwlDateTimeComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__.MatDivider, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_16__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe, _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_4__.QuantitiesUnitPriceTaxPipe], styles: [".hr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #2095F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLXJlcXVlc3QtYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBQiUyMFBPU1xcRnJvbnRlbmRcXHNyY1xcYXBwXFxwdXJjaGFzZS1vcmRlci1yZXF1ZXN0XFxwdXJjaGFzZS1vcmRlci1yZXF1ZXN0LWFkZC1lZGl0XFxwdXJjaGFzZS1vcmRlci1yZXF1ZXN0LWFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0NBQUE7QUNBRiIsImZpbGUiOiJwdXJjaGFzZS1vcmRlci1yZXF1ZXN0LWFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5ocntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIwOTVGMztcclxufVxyXG4iLCIuaHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIwOTVGMztcbn0iXX0= */"] });


/***/ }),

/***/ 74555:
/*!*********************************************************************************************************!*\
  !*** ./src/app/purchase-order-request/purchase-order-request-list/purchase-order-request-datasource.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderRequestDataSource": () => (/* binding */ PurchaseOrderRequestDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class PurchaseOrderRequestDataSource {
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

/***/ 71822:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/purchase-order-request/purchase-order-request-list/purchase-order-request-items/purchase-order-request-items.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderRequestItemsComponent": () => (/* binding */ PurchaseOrderRequestItemsComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/purchase-order/purchase-order.service */ 69822);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function PurchaseOrderRequestItemsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PurchaseOrderRequestItemsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function PurchaseOrderRequestItemsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r21.productName, " ");
} }
function PurchaseOrderRequestItemsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT"), " ");
} }
function PurchaseOrderRequestItemsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r22.unitName, " ");
} }
function PurchaseOrderRequestItemsComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE"), " ");
} }
function PurchaseOrderRequestItemsComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r23.unitPrice), " ");
} }
function PurchaseOrderRequestItemsComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "QUANTITY"), " ");
} }
function PurchaseOrderRequestItemsComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r24.quantity, " ");
} }
function PurchaseOrderRequestItemsComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function PurchaseOrderRequestItemsComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, element_r25.discount), "(", element_r25.discountPercentage, "%) ");
} }
function PurchaseOrderRequestItemsComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TAX"), " ");
} }
function PurchaseOrderRequestItemsComponent_td_27_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PurchaseOrderRequestItemsComponent_td_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PurchaseOrderRequestItemsComponent_td_27_span_1_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r28 = ctx.$implicit;
    const last_r29 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r28.taxName, "(", tax_r28.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r29);
} }
function PurchaseOrderRequestItemsComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PurchaseOrderRequestItemsComponent_td_27_span_1_Template, 3, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", element_r26.purchaseOrderItemTaxes);
} }
function PurchaseOrderRequestItemsComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function PurchaseOrderRequestItemsComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r31.taxValue), " ");
} }
function PurchaseOrderRequestItemsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL"), " ");
} }
function PurchaseOrderRequestItemsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r32.unitPrice * element_r32.quantity - element_r32.discount + element_r32.taxValue), " ");
} }
function PurchaseOrderRequestItemsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "WAREHOUSE"), "");
} }
function PurchaseOrderRequestItemsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r33.warehouseName, " ");
} }
function PurchaseOrderRequestItemsComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 25);
} }
function PurchaseOrderRequestItemsComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
} }
class PurchaseOrderRequestItemsComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(purchaseOrderService, translationService) {
        super(translationService);
        this.purchaseOrderService = purchaseOrderService;
        this.translationService = translationService;
        this.purchaseOrderItems = [];
        this.isLoading = false;
        this.displayedColumns = ['productName', 'unitName', 'unitPrice', 'quantity', 'totalDiscount', 'taxes', 'totalTax', 'totalAmount', 'warehouse'];
        this.getLangDir();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['purchaseOrder']) {
            this.getPurchaseOrderItems();
        }
    }
    getPurchaseOrderItems() {
        this.isLoading = true;
        this.purchaseOrderService.getPurchaseOrderItems(this.purchaseOrder.id)
            .subscribe((data) => {
            this.isLoading = false;
            this.purchaseOrderItems = data;
        }, () => this.isLoading = false);
    }
}
PurchaseOrderRequestItemsComponent.ɵfac = function PurchaseOrderRequestItemsComponent_Factory(t) { return new (t || PurchaseOrderRequestItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
PurchaseOrderRequestItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PurchaseOrderRequestItemsComponent, selectors: [["app-purchase-order-request-items"]], inputs: { purchaseOrder: "purchaseOrder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 39, vars: 9, consts: [[1, "page-header-main"], [1, "row", "align-items-center"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "unitName"], ["matColumnDef", "unitPrice"], ["matColumnDef", "quantity"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "taxes"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "warehouse"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-header-row", ""], ["mat-row", ""]], template: function PurchaseOrderRequestItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PurchaseOrderRequestItemsComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PurchaseOrderRequestItemsComponent_th_11_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PurchaseOrderRequestItemsComponent_td_12_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PurchaseOrderRequestItemsComponent_th_14_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, PurchaseOrderRequestItemsComponent_td_15_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PurchaseOrderRequestItemsComponent_th_17_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PurchaseOrderRequestItemsComponent_td_18_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PurchaseOrderRequestItemsComponent_th_20_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PurchaseOrderRequestItemsComponent_td_21_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PurchaseOrderRequestItemsComponent_th_23_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PurchaseOrderRequestItemsComponent_td_24_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, PurchaseOrderRequestItemsComponent_th_26_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PurchaseOrderRequestItemsComponent_td_27_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, PurchaseOrderRequestItemsComponent_th_29_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PurchaseOrderRequestItemsComponent_td_30_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, PurchaseOrderRequestItemsComponent_th_32_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, PurchaseOrderRequestItemsComponent_td_33_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, PurchaseOrderRequestItemsComponent_th_35_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, PurchaseOrderRequestItemsComponent_td_36_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, PurchaseOrderRequestItemsComponent_tr_37_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, PurchaseOrderRequestItemsComponent_tr_38_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "PURCHASE_ORDER_REQUEST_ITEMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.purchaseOrderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS1vcmRlci1yZXF1ZXN0LWl0ZW1zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8576:
/*!*************************************************************************************************************!*\
  !*** ./src/app/purchase-order-request/purchase-order-request-list/purchase-order-request-list.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderRequestListComponent": () => (/* binding */ PurchaseOrderRequestListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/purchase-order-resource-parameter */ 32667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _purchase_order_request_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-order-request-datasource */ 74555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/purchase-order/purchase-order.service */ 69822);
/* harmony import */ var src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/supplier/supplier.service */ 35803);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _shared_purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/purchase-order-invoice/purchase-order-invoice.component */ 92552);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _purchase_order_request_items_purchase_order_request_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./purchase-order-request-items/purchase-order-request-items.component */ 71822);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




































const _c0 = function () { return ["/purchase-order-request/add"]; };
function PurchaseOrderRequestListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "ADD_PURCHASE_ORDER_REQUEST"), " ");
} }
function PurchaseOrderRequestListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PurchaseOrderRequestListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 48);
} }
function PurchaseOrderRequestListComponent_td_17_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PurchaseOrderRequestListComponent_td_17_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PurchaseOrderRequestListComponent_td_17_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 55)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r39);
} }
function PurchaseOrderRequestListComponent_td_17_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PurchaseOrderRequestListComponent_td_17_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r47); const po_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r45.onDetailPurchaseOrder(po_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "EDIT"));
} }
const _c1 = function (a1) { return ["/purchase-order/detail", a1]; };
function PurchaseOrderRequestListComponent_td_17_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 57)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c1, po_r35.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 2, "DETAIL"));
} }
function PurchaseOrderRequestListComponent_td_17_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PurchaseOrderRequestListComponent_td_17_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r51); const po_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r49.convertToPurchaseOrder(po_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "navigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "CONVERT_TO_PURCHASE_ORDER"));
} }
function PurchaseOrderRequestListComponent_td_17_ng_container_10_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PurchaseOrderRequestListComponent_td_17_ng_container_10_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r55); const po_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r53.deletePurchaseOrder(po_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "DELETE"));
} }
function PurchaseOrderRequestListComponent_td_17_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PurchaseOrderRequestListComponent_td_17_ng_container_10_button_1_Template, 6, 3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "POR_DELETE_PO_REQUEST");
} }
function PurchaseOrderRequestListComponent_td_17_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PurchaseOrderRequestListComponent_td_17_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r58); const po_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r56.generateInvoice(po_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "GENERATE_PURCHASE_ORDER_REQUEST"));
} }
const _c2 = function () { return ["POR_UPDATE_PO_REQUEST", "POR_POR_DETAIL", "POR_CONVERT_TO_PO", "POR_DELETE_PO_REQUEST", "POR_GENERATE_INVOICE"]; };
function PurchaseOrderRequestListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 49)(1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PurchaseOrderRequestListComponent_td_17_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r60); const po_r35 = restoredCtx.$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r59.toggleRow(po_r35)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, PurchaseOrderRequestListComponent_td_17_mat_icon_2_Template, 2, 0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, PurchaseOrderRequestListComponent_td_17_mat_icon_3_Template, 2, 0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, PurchaseOrderRequestListComponent_td_17_button_4_Template, 3, 1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "mat-menu", null, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, PurchaseOrderRequestListComponent_td_17_button_7_Template, 6, 3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, PurchaseOrderRequestListComponent_td_17_button_8_Template, 6, 6, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, PurchaseOrderRequestListComponent_td_17_button_9_Template, 6, 3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, PurchaseOrderRequestListComponent_td_17_ng_container_10_Template, 2, 1, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, PurchaseOrderRequestListComponent_td_17_button_11_Template, 6, 3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r35 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", po_r35 != ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", po_r35 == ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "POR_UPDATE_PO_REQUEST");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "POR_POR_DETAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "POR_CONVERT_TO_PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !po_r35.isClosed);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "POR_GENERATE_INVOICE");
} }
function PurchaseOrderRequestListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function PurchaseOrderRequestListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, po_r61.poCreatedDate, "shortDate"), " ");
} }
function PurchaseOrderRequestListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "ORDER_NUMBER"), " ");
} }
function PurchaseOrderRequestListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 49)(1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](2, _c1, po_r62.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", po_r62.orderNumber, " ");
} }
function PurchaseOrderRequestListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE"), " ");
} }
function PurchaseOrderRequestListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, po_r63.deliveryDate, "shortDate"), " ");
} }
function PurchaseOrderRequestListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "SUPPLIER_NAME"), " ");
} }
const _c3 = function (a1) { return ["/supplier/manage/", a1]; };
function PurchaseOrderRequestListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 63)(1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](2, _c3, po_r64.supplierId));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", po_r64.supplierName, " ");
} }
function PurchaseOrderRequestListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "TOTAL_AMOUNT"), " ");
} }
function PurchaseOrderRequestListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, po_r65.totalAmount), " ");
} }
function PurchaseOrderRequestListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function PurchaseOrderRequestListComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, po_r66.totalDiscount), " ");
} }
function PurchaseOrderRequestListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function PurchaseOrderRequestListComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, po_r67.totalTax), " ");
} }
function PurchaseOrderRequestListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 66);
} }
function PurchaseOrderRequestListComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 66);
} }
function PurchaseOrderRequestListComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 66)(1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function PurchaseOrderRequestListComponent_th_44_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r68.OrderNumberFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "ORDER_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r20.OrderNumberFilter);
} }
function PurchaseOrderRequestListComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 66);
} }
function PurchaseOrderRequestListComponent_th_48_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", supplier_r72.supplierName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", supplier_r72.supplierName, " ");
} }
function PurchaseOrderRequestListComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-autocomplete", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("optionSelected", function PurchaseOrderRequestListComponent_th_48_Template_mat_autocomplete_optionSelected_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r73.SupplierFilter = $event.option.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, PurchaseOrderRequestListComponent_th_48_mat_option_8_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 8, "SUPPLIER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formControl", ctx_r22.supplierNameControl)("matAutocomplete", _r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r22.langDir)("autoActiveFirstOption", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r22.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 10, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](9, 12, ctx_r22.supplierList$));
} }
function PurchaseOrderRequestListComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 66);
} }
function PurchaseOrderRequestListComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 66);
} }
function PurchaseOrderRequestListComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 66);
} }
const _c4 = function () { return [10, 20, 30]; };
function PurchaseOrderRequestListComponent_td_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-paginator", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r26.langDir)("length", ctx_r26.purchaseOrderResource.totalCount)("pageSize", ctx_r26.purchaseOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](4, _c4));
} }
function PurchaseOrderRequestListComponent_td_58_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 76)(2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "app-purchase-order-request-items", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const poObject_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@detailExpand", poObject_r75 == ctx_r76.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("purchaseOrder", poObject_r75);
} }
function PurchaseOrderRequestListComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PurchaseOrderRequestListComponent_td_58_ng_container_1_Template, 4, 2, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poObject_r75 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵattribute"]("colspan", ctx_r27.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", poObject_r75 == ctx_r27.expandedElement);
} }
function PurchaseOrderRequestListComponent_tr_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 79)(2, "span", 80)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function PurchaseOrderRequestListComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 81);
} }
function PurchaseOrderRequestListComponent_tr_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 82);
} }
function PurchaseOrderRequestListComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 81);
} }
function PurchaseOrderRequestListComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 83);
} }
function PurchaseOrderRequestListComponent_tr_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 84);
} }
function PurchaseOrderRequestListComponent_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-purchase-order-invoice", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("purchaseOrder", ctx_r34.purchaseOrderForInvoice);
} }
const _c5 = function () { return ["expandedDetail"]; };
class PurchaseOrderRequestListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(purchaseOrderService, supplierService, cd, commonDialogService, toastrService, router, translationService, cloneService) {
        super(translationService);
        this.purchaseOrderService = purchaseOrderService;
        this.supplierService = supplierService;
        this.cd = cd;
        this.commonDialogService = commonDialogService;
        this.toastrService = toastrService;
        this.router = router;
        this.translationService = translationService;
        this.cloneService = cloneService;
        this.purchaseOrders = [];
        this.displayedColumns = ['action', 'poCreatedDate', 'orderNumber', 'deliveryDate', 'supplierName', 'totalAmount', 'totalDiscount', 'totalTax'];
        this.filterColumns = ['action-search', 'poCreatedDate-search', 'orderNumber-search', 'deliverDate-search', 'supplier-search', 'totalAmount-search', 'totalDiscount-search', 'totalTax-search'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.supplierNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.UntypedFormControl();
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this.getLangDir();
        this.purchaseOrderResource = new _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderResourceParameter();
        this.purchaseOrderResource.pageSize = 50;
        this.purchaseOrderResource.orderBy = 'poCreatedDate asc';
        this.purchaseOrderResource.isPurchaseOrderRequest = true;
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
        this.dataSource = new _purchase_order_request_datasource__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderRequestDataSource(this.purchaseOrderService);
        this.dataSource.loadData(this.purchaseOrderResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)())
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
    convertToPurchaseOrder(purchaseOrder) {
        this.router.navigate(['purchase-order/add'], { queryParams: { 'purchase-order-requestId': purchaseOrder.id } });
    }
    onDetailPurchaseOrder(purchaseOrder) {
        this.router.navigate(['/purchase-order-request', purchaseOrder.id]);
    }
    supplierNameControlOnChange() {
        this.supplierList$ = this.supplierNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(c => {
            return this.supplierService.getSuppliersForDropDown(c);
        }));
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)((c) => {
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
    toggleRow(element) {
        this.expandedElement = this.expandedElement === element ? null : element;
        this.cd.detectChanges();
    }
    poChangeEvent(purchaseOrder) {
        this.toggleRow(purchaseOrder);
    }
    deletePurchaseOrder(purchaseOrder) {
        this.commonDialogService.deleteConformationDialog(this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE'))
            .subscribe((isYes) => {
            if (isYes) {
                this.purchaseOrderService.deletePurchaseOrder(purchaseOrder.id).subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('PURCHASE_ORDER_REQUEST_DELETED'));
                    this.dataSource.loadData(this.purchaseOrderResource);
                });
            }
        });
    }
    generateInvoice(po) {
        let poForInvoice = this.cloneService.deepClone(po);
        const getSupplierRequest = this.supplierService.getSupplier(po.supplierId);
        const getPurchaseOrderItems = this.purchaseOrderService.getPurchaseOrderItems(po.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.forkJoin)({ getSupplierRequest, getPurchaseOrderItems }).subscribe(response => {
            poForInvoice.supplier = response.getSupplierRequest;
            poForInvoice.purchaseOrderItems = response.getPurchaseOrderItems;
            this.purchaseOrderForInvoice = poForInvoice;
        });
    }
}
PurchaseOrderRequestListComponent.ɵfac = function PurchaseOrderRequestListComponent_Factory(t) { return new (t || PurchaseOrderRequestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_4__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_5__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_7__.ClonerService)); };
PurchaseOrderRequestListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: PurchaseOrderRequestListComponent, selectors: [["app-purchase-order-request-list"]], viewQuery: function PurchaseOrderRequestListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 66, vars: 19, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "btn blue-btn btn-sm m-right-10", 3, "routerLink", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "poCreatedDate", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "poCreatedDate"], ["class", "table-column-100", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderNumber"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "deliveryDate"], ["matColumnDef", "supplierName"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalAmount"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "totalTax"], ["matColumnDef", "action-search"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "poCreatedDate-search"], ["matColumnDef", "orderNumber-search"], ["matColumnDef", "deliverDate-search"], ["matColumnDef", "supplier-search"], ["matColumnDef", "totalAmount-search"], ["matColumnDef", "totalDiscount-search"], ["matColumnDef", "totalTax-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "11", 4, "matFooterCellDef"], ["matColumnDef", "expandedDetail"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-icon-button", "", 3, "click"], ["class", "ml-4", "mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor", 4, "hasClaim"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-menu-item", "", 3, "routerLink", 4, "hasClaim"], ["mat-icon-button", "", "aria-label", "Action", 1, "ml-4", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], [3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "formControl", "matAutocomplete"], [3, "dir", "autoActiveFirstOption", "optionSelected"], ["autoSupplier", "matAutocomplete"], ["value", "", 3, "dir"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-footer-cell", "", "colspan", "11"], [3, "dir", "length", "pageSize", "pageSizeOptions"], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "purchaseOrder"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], ["mat-row", "", 1, "example-detail-row"]], template: function PurchaseOrderRequestListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, PurchaseOrderRequestListComponent_button_8_Template, 4, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, PurchaseOrderRequestListComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, PurchaseOrderRequestListComponent_th_16_Template, 1, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, PurchaseOrderRequestListComponent_td_17_Template, 12, 9, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, PurchaseOrderRequestListComponent_th_19_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, PurchaseOrderRequestListComponent_td_20_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, PurchaseOrderRequestListComponent_th_22_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, PurchaseOrderRequestListComponent_td_23_Template, 3, 4, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, PurchaseOrderRequestListComponent_th_25_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, PurchaseOrderRequestListComponent_td_26_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](28, PurchaseOrderRequestListComponent_th_28_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, PurchaseOrderRequestListComponent_td_29_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](30, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](31, PurchaseOrderRequestListComponent_th_31_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, PurchaseOrderRequestListComponent_td_32_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](33, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, PurchaseOrderRequestListComponent_th_34_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, PurchaseOrderRequestListComponent_td_35_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](37, PurchaseOrderRequestListComponent_th_37_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](38, PurchaseOrderRequestListComponent_td_38_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](39, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, PurchaseOrderRequestListComponent_th_40_Template, 1, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](41, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, PurchaseOrderRequestListComponent_th_42_Template, 1, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](43, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, PurchaseOrderRequestListComponent_th_44_Template, 3, 4, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](45, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](46, PurchaseOrderRequestListComponent_th_46_Template, 1, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](47, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](48, PurchaseOrderRequestListComponent_th_48_Template, 10, 14, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](49, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, PurchaseOrderRequestListComponent_th_50_Template, 1, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](51, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](52, PurchaseOrderRequestListComponent_th_52_Template, 1, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](53, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](54, PurchaseOrderRequestListComponent_th_54_Template, 1, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](55, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](56, PurchaseOrderRequestListComponent_td_56_Template, 2, 5, "td", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](57, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, PurchaseOrderRequestListComponent_td_58_Template, 2, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, PurchaseOrderRequestListComponent_tr_59_Template, 6, 3, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](60, PurchaseOrderRequestListComponent_tr_60_Template, 1, 0, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, PurchaseOrderRequestListComponent_tr_61_Template, 1, 0, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, PurchaseOrderRequestListComponent_tr_62_Template, 1, 0, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, PurchaseOrderRequestListComponent_tr_63_Template, 1, 0, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](64, PurchaseOrderRequestListComponent_tr_64_Template, 1, 0, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, PurchaseOrderRequestListComponent_ng_container_65_Template, 2, 1, "ng-container", 44);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 14, "PURCHASE_ORDERS_REQUEST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "POR_ADD_PO_REQUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 16, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.filterColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](18, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlDirective, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_8__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__.Dir, _shared_purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_9__.PurchaseOrderInvoiceComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocompleteTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinner, _purchase_order_request_items_purchase_order_request_items_component__WEBPACK_IMPORTED_MODULE_10__.PurchaseOrderRequestItemsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_11__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_12__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n\n.table-column-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.table-column-2[_ngcontent-%COMP%] {\n  min-width: 2px;\n}\n\n.table-column-4[_ngcontent-%COMP%] {\n  min-width: 4px;\n}\n\n.table-column-6[_ngcontent-%COMP%] {\n  min-width: 6px;\n}\n\n.table-column-8[_ngcontent-%COMP%] {\n  min-width: 8px;\n}\n\n.table-column-10[_ngcontent-%COMP%] {\n  min-width: 10px;\n}\n\n.table-column-12[_ngcontent-%COMP%] {\n  min-width: 12px;\n}\n\n.table-column-14[_ngcontent-%COMP%] {\n  min-width: 14px;\n}\n\n.table-column-16[_ngcontent-%COMP%] {\n  min-width: 16px;\n}\n\n.table-column-18[_ngcontent-%COMP%] {\n  min-width: 18px;\n}\n\n.table-column-20[_ngcontent-%COMP%] {\n  min-width: 20px;\n}\n\n.table-column-22[_ngcontent-%COMP%] {\n  min-width: 22px;\n}\n\n.table-column-24[_ngcontent-%COMP%] {\n  min-width: 24px;\n}\n\n.table-column-26[_ngcontent-%COMP%] {\n  min-width: 26px;\n}\n\n.table-column-28[_ngcontent-%COMP%] {\n  min-width: 28px;\n}\n\n.table-column-30[_ngcontent-%COMP%] {\n  min-width: 30px;\n}\n\n.table-column-32[_ngcontent-%COMP%] {\n  min-width: 32px;\n}\n\n.table-column-34[_ngcontent-%COMP%] {\n  min-width: 34px;\n}\n\n.table-column-36[_ngcontent-%COMP%] {\n  min-width: 36px;\n}\n\n.table-column-38[_ngcontent-%COMP%] {\n  min-width: 38px;\n}\n\n.table-column-40[_ngcontent-%COMP%] {\n  min-width: 40px;\n}\n\n.table-column-42[_ngcontent-%COMP%] {\n  min-width: 42px;\n}\n\n.table-column-44[_ngcontent-%COMP%] {\n  min-width: 44px;\n}\n\n.table-column-46[_ngcontent-%COMP%] {\n  min-width: 46px;\n}\n\n.table-column-48[_ngcontent-%COMP%] {\n  min-width: 48px;\n}\n\n.table-column-50[_ngcontent-%COMP%] {\n  min-width: 50px;\n}\n\n.table-column-52[_ngcontent-%COMP%] {\n  min-width: 52px;\n}\n\n.table-column-54[_ngcontent-%COMP%] {\n  min-width: 54px;\n}\n\n.table-column-56[_ngcontent-%COMP%] {\n  min-width: 56px;\n}\n\n.table-column-58[_ngcontent-%COMP%] {\n  min-width: 58px;\n}\n\n.table-column-60[_ngcontent-%COMP%] {\n  min-width: 60px;\n}\n\n.table-column-62[_ngcontent-%COMP%] {\n  min-width: 62px;\n}\n\n.table-column-64[_ngcontent-%COMP%] {\n  min-width: 64px;\n}\n\n.table-column-66[_ngcontent-%COMP%] {\n  min-width: 66px;\n}\n\n.table-column-68[_ngcontent-%COMP%] {\n  min-width: 68px;\n}\n\n.table-column-70[_ngcontent-%COMP%] {\n  min-width: 70px;\n}\n\n.table-column-72[_ngcontent-%COMP%] {\n  min-width: 72px;\n}\n\n.table-column-74[_ngcontent-%COMP%] {\n  min-width: 74px;\n}\n\n.table-column-76[_ngcontent-%COMP%] {\n  min-width: 76px;\n}\n\n.table-column-78[_ngcontent-%COMP%] {\n  min-width: 78px;\n}\n\n.table-column-80[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n\n.table-column-82[_ngcontent-%COMP%] {\n  min-width: 82px;\n}\n\n.table-column-84[_ngcontent-%COMP%] {\n  min-width: 84px;\n}\n\n.table-column-86[_ngcontent-%COMP%] {\n  min-width: 86px;\n}\n\n.table-column-88[_ngcontent-%COMP%] {\n  min-width: 88px;\n}\n\n.table-column-90[_ngcontent-%COMP%] {\n  min-width: 90px;\n}\n\n.table-column-92[_ngcontent-%COMP%] {\n  min-width: 92px;\n}\n\n.table-column-94[_ngcontent-%COMP%] {\n  min-width: 94px;\n}\n\n.table-column-96[_ngcontent-%COMP%] {\n  min-width: 96px;\n}\n\n.table-column-98[_ngcontent-%COMP%] {\n  min-width: 98px;\n}\n\n.table-column-100[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n.table-column-102[_ngcontent-%COMP%] {\n  min-width: 102px;\n}\n\n.table-column-104[_ngcontent-%COMP%] {\n  min-width: 104px;\n}\n\n.table-column-106[_ngcontent-%COMP%] {\n  min-width: 106px;\n}\n\n.table-column-108[_ngcontent-%COMP%] {\n  min-width: 108px;\n}\n\n.table-column-110[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.table-column-112[_ngcontent-%COMP%] {\n  min-width: 112px;\n}\n\n.table-column-114[_ngcontent-%COMP%] {\n  min-width: 114px;\n}\n\n.table-column-116[_ngcontent-%COMP%] {\n  min-width: 116px;\n}\n\n.table-column-118[_ngcontent-%COMP%] {\n  min-width: 118px;\n}\n\n.table-column-120[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n\n.table-column-122[_ngcontent-%COMP%] {\n  min-width: 122px;\n}\n\n.table-column-124[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n\n.table-column-126[_ngcontent-%COMP%] {\n  min-width: 126px;\n}\n\n.table-column-128[_ngcontent-%COMP%] {\n  min-width: 128px;\n}\n\n.table-column-130[_ngcontent-%COMP%] {\n  min-width: 130px;\n}\n\n.table-column-132[_ngcontent-%COMP%] {\n  min-width: 132px;\n}\n\n.table-column-134[_ngcontent-%COMP%] {\n  min-width: 134px;\n}\n\n.table-column-136[_ngcontent-%COMP%] {\n  min-width: 136px;\n}\n\n.table-column-138[_ngcontent-%COMP%] {\n  min-width: 138px;\n}\n\n.table-column-140[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n.table-column-142[_ngcontent-%COMP%] {\n  min-width: 142px;\n}\n\n.table-column-144[_ngcontent-%COMP%] {\n  min-width: 144px;\n}\n\n.table-column-146[_ngcontent-%COMP%] {\n  min-width: 146px;\n}\n\n.table-column-148[_ngcontent-%COMP%] {\n  min-width: 148px;\n}\n\n.table-column-150[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.table-column-152[_ngcontent-%COMP%] {\n  min-width: 152px;\n}\n\n.table-column-154[_ngcontent-%COMP%] {\n  min-width: 154px;\n}\n\n.table-column-156[_ngcontent-%COMP%] {\n  min-width: 156px;\n}\n\n.table-column-158[_ngcontent-%COMP%] {\n  min-width: 158px;\n}\n\n.table-column-160[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n\n.table-column-162[_ngcontent-%COMP%] {\n  min-width: 162px;\n}\n\n.table-column-164[_ngcontent-%COMP%] {\n  min-width: 164px;\n}\n\n.table-column-166[_ngcontent-%COMP%] {\n  min-width: 166px;\n}\n\n.table-column-168[_ngcontent-%COMP%] {\n  min-width: 168px;\n}\n\n.table-column-170[_ngcontent-%COMP%] {\n  min-width: 170px;\n}\n\n.table-column-172[_ngcontent-%COMP%] {\n  min-width: 172px;\n}\n\n.table-column-174[_ngcontent-%COMP%] {\n  min-width: 174px;\n}\n\n.table-column-176[_ngcontent-%COMP%] {\n  min-width: 176px;\n}\n\n.table-column-178[_ngcontent-%COMP%] {\n  min-width: 178px;\n}\n\n.table-column-180[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n\n.table-column-182[_ngcontent-%COMP%] {\n  min-width: 182px;\n}\n\n.table-column-184[_ngcontent-%COMP%] {\n  min-width: 184px;\n}\n\n.table-column-186[_ngcontent-%COMP%] {\n  min-width: 186px;\n}\n\n.table-column-188[_ngcontent-%COMP%] {\n  min-width: 188px;\n}\n\n.table-column-190[_ngcontent-%COMP%] {\n  min-width: 190px;\n}\n\n.table-column-192[_ngcontent-%COMP%] {\n  min-width: 192px;\n}\n\n.table-column-194[_ngcontent-%COMP%] {\n  min-width: 194px;\n}\n\n.table-column-196[_ngcontent-%COMP%] {\n  min-width: 196px;\n}\n\n.table-column-198[_ngcontent-%COMP%] {\n  min-width: 198px;\n}\n\n.table-column-200[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.table-column-202[_ngcontent-%COMP%] {\n  min-width: 202px;\n}\n\n.table-column-204[_ngcontent-%COMP%] {\n  min-width: 204px;\n}\n\n.table-column-206[_ngcontent-%COMP%] {\n  min-width: 206px;\n}\n\n.table-column-208[_ngcontent-%COMP%] {\n  min-width: 208px;\n}\n\n.table-column-210[_ngcontent-%COMP%] {\n  min-width: 210px;\n}\n\n.table-column-212[_ngcontent-%COMP%] {\n  min-width: 212px;\n}\n\n.table-column-214[_ngcontent-%COMP%] {\n  min-width: 214px;\n}\n\n.table-column-216[_ngcontent-%COMP%] {\n  min-width: 216px;\n}\n\n.table-column-218[_ngcontent-%COMP%] {\n  min-width: 218px;\n}\n\n.table-column-220[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n\n.table-column-222[_ngcontent-%COMP%] {\n  min-width: 222px;\n}\n\n.table-column-224[_ngcontent-%COMP%] {\n  min-width: 224px;\n}\n\n.table-column-226[_ngcontent-%COMP%] {\n  min-width: 226px;\n}\n\n.table-column-228[_ngcontent-%COMP%] {\n  min-width: 228px;\n}\n\n.table-column-230[_ngcontent-%COMP%] {\n  min-width: 230px;\n}\n\n.table-column-232[_ngcontent-%COMP%] {\n  min-width: 232px;\n}\n\n.table-column-234[_ngcontent-%COMP%] {\n  min-width: 234px;\n}\n\n.table-column-236[_ngcontent-%COMP%] {\n  min-width: 236px;\n}\n\n.table-column-238[_ngcontent-%COMP%] {\n  min-width: 238px;\n}\n\n.table-column-240[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n\n.table-column-242[_ngcontent-%COMP%] {\n  min-width: 242px;\n}\n\n.table-column-244[_ngcontent-%COMP%] {\n  min-width: 244px;\n}\n\n.table-column-246[_ngcontent-%COMP%] {\n  min-width: 246px;\n}\n\n.table-column-248[_ngcontent-%COMP%] {\n  min-width: 248px;\n}\n\n.table-column-250[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n\n.table-column-252[_ngcontent-%COMP%] {\n  min-width: 252px;\n}\n\n.table-column-254[_ngcontent-%COMP%] {\n  min-width: 254px;\n}\n\n.table-column-256[_ngcontent-%COMP%] {\n  min-width: 256px;\n}\n\n.table-column-258[_ngcontent-%COMP%] {\n  min-width: 258px;\n}\n\n.table-column-260[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n\n.table-column-262[_ngcontent-%COMP%] {\n  min-width: 262px;\n}\n\n.table-column-264[_ngcontent-%COMP%] {\n  min-width: 264px;\n}\n\n.table-column-266[_ngcontent-%COMP%] {\n  min-width: 266px;\n}\n\n.table-column-268[_ngcontent-%COMP%] {\n  min-width: 268px;\n}\n\n.table-column-270[_ngcontent-%COMP%] {\n  min-width: 270px;\n}\n\n.table-column-272[_ngcontent-%COMP%] {\n  min-width: 272px;\n}\n\n.table-column-274[_ngcontent-%COMP%] {\n  min-width: 274px;\n}\n\n.table-column-276[_ngcontent-%COMP%] {\n  min-width: 276px;\n}\n\n.table-column-278[_ngcontent-%COMP%] {\n  min-width: 278px;\n}\n\n.table-column-280[_ngcontent-%COMP%] {\n  min-width: 280px;\n}\n\n.table-column-282[_ngcontent-%COMP%] {\n  min-width: 282px;\n}\n\n.table-column-284[_ngcontent-%COMP%] {\n  min-width: 284px;\n}\n\n.table-column-286[_ngcontent-%COMP%] {\n  min-width: 286px;\n}\n\n.table-column-288[_ngcontent-%COMP%] {\n  min-width: 288px;\n}\n\n.table-column-290[_ngcontent-%COMP%] {\n  min-width: 290px;\n}\n\n.table-column-292[_ngcontent-%COMP%] {\n  min-width: 292px;\n}\n\n.table-column-294[_ngcontent-%COMP%] {\n  min-width: 294px;\n}\n\n.table-column-296[_ngcontent-%COMP%] {\n  min-width: 296px;\n}\n\n.table-column-298[_ngcontent-%COMP%] {\n  min-width: 298px;\n}\n\n.table-column-300[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n.table-column-302[_ngcontent-%COMP%] {\n  min-width: 302px;\n}\n\n.table-column-304[_ngcontent-%COMP%] {\n  min-width: 304px;\n}\n\n.table-column-306[_ngcontent-%COMP%] {\n  min-width: 306px;\n}\n\n.table-column-308[_ngcontent-%COMP%] {\n  min-width: 308px;\n}\n\n.table-column-310[_ngcontent-%COMP%] {\n  min-width: 310px;\n}\n\n.table-column-312[_ngcontent-%COMP%] {\n  min-width: 312px;\n}\n\n.table-column-314[_ngcontent-%COMP%] {\n  min-width: 314px;\n}\n\n.table-column-316[_ngcontent-%COMP%] {\n  min-width: 316px;\n}\n\n.table-column-318[_ngcontent-%COMP%] {\n  min-width: 318px;\n}\n\n.table-column-320[_ngcontent-%COMP%] {\n  min-width: 320px;\n}\n\n.table-column-322[_ngcontent-%COMP%] {\n  min-width: 322px;\n}\n\n.table-column-324[_ngcontent-%COMP%] {\n  min-width: 324px;\n}\n\n.table-column-326[_ngcontent-%COMP%] {\n  min-width: 326px;\n}\n\n.table-column-328[_ngcontent-%COMP%] {\n  min-width: 328px;\n}\n\n.table-column-330[_ngcontent-%COMP%] {\n  min-width: 330px;\n}\n\n.table-column-332[_ngcontent-%COMP%] {\n  min-width: 332px;\n}\n\n.table-column-334[_ngcontent-%COMP%] {\n  min-width: 334px;\n}\n\n.table-column-336[_ngcontent-%COMP%] {\n  min-width: 336px;\n}\n\n.table-column-338[_ngcontent-%COMP%] {\n  min-width: 338px;\n}\n\n.table-column-340[_ngcontent-%COMP%] {\n  min-width: 340px;\n}\n\n.table-column-342[_ngcontent-%COMP%] {\n  min-width: 342px;\n}\n\n.table-column-344[_ngcontent-%COMP%] {\n  min-width: 344px;\n}\n\n.table-column-346[_ngcontent-%COMP%] {\n  min-width: 346px;\n}\n\n.table-column-348[_ngcontent-%COMP%] {\n  min-width: 348px;\n}\n\n.table-column-350[_ngcontent-%COMP%] {\n  min-width: 350px;\n}\n\n.table-column-352[_ngcontent-%COMP%] {\n  min-width: 352px;\n}\n\n.table-column-354[_ngcontent-%COMP%] {\n  min-width: 354px;\n}\n\n.table-column-356[_ngcontent-%COMP%] {\n  min-width: 356px;\n}\n\n.table-column-358[_ngcontent-%COMP%] {\n  min-width: 358px;\n}\n\n.table-column-360[_ngcontent-%COMP%] {\n  min-width: 360px;\n}\n\n.table-column-362[_ngcontent-%COMP%] {\n  min-width: 362px;\n}\n\n.table-column-364[_ngcontent-%COMP%] {\n  min-width: 364px;\n}\n\n.table-column-366[_ngcontent-%COMP%] {\n  min-width: 366px;\n}\n\n.table-column-368[_ngcontent-%COMP%] {\n  min-width: 368px;\n}\n\n.table-column-370[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n\n.table-column-372[_ngcontent-%COMP%] {\n  min-width: 372px;\n}\n\n.table-column-374[_ngcontent-%COMP%] {\n  min-width: 374px;\n}\n\n.table-column-376[_ngcontent-%COMP%] {\n  min-width: 376px;\n}\n\n.table-column-378[_ngcontent-%COMP%] {\n  min-width: 378px;\n}\n\n.table-column-380[_ngcontent-%COMP%] {\n  min-width: 380px;\n}\n\n.table-column-382[_ngcontent-%COMP%] {\n  min-width: 382px;\n}\n\n.table-column-384[_ngcontent-%COMP%] {\n  min-width: 384px;\n}\n\n.table-column-386[_ngcontent-%COMP%] {\n  min-width: 386px;\n}\n\n.table-column-388[_ngcontent-%COMP%] {\n  min-width: 388px;\n}\n\n.table-column-390[_ngcontent-%COMP%] {\n  min-width: 390px;\n}\n\n.table-column-392[_ngcontent-%COMP%] {\n  min-width: 392px;\n}\n\n.table-column-394[_ngcontent-%COMP%] {\n  min-width: 394px;\n}\n\n.table-column-396[_ngcontent-%COMP%] {\n  min-width: 396px;\n}\n\n.table-column-398[_ngcontent-%COMP%] {\n  min-width: 398px;\n}\n\n.table-column-400[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n.table-column-402[_ngcontent-%COMP%] {\n  min-width: 402px;\n}\n\n.table-column-404[_ngcontent-%COMP%] {\n  min-width: 404px;\n}\n\n.table-column-406[_ngcontent-%COMP%] {\n  min-width: 406px;\n}\n\n.table-column-408[_ngcontent-%COMP%] {\n  min-width: 408px;\n}\n\n.table-column-410[_ngcontent-%COMP%] {\n  min-width: 410px;\n}\n\n.table-column-412[_ngcontent-%COMP%] {\n  min-width: 412px;\n}\n\n.table-column-414[_ngcontent-%COMP%] {\n  min-width: 414px;\n}\n\n.table-column-416[_ngcontent-%COMP%] {\n  min-width: 416px;\n}\n\n.table-column-418[_ngcontent-%COMP%] {\n  min-width: 418px;\n}\n\n.table-column-420[_ngcontent-%COMP%] {\n  min-width: 420px;\n}\n\n.table-column-422[_ngcontent-%COMP%] {\n  min-width: 422px;\n}\n\n.table-column-424[_ngcontent-%COMP%] {\n  min-width: 424px;\n}\n\n.table-column-426[_ngcontent-%COMP%] {\n  min-width: 426px;\n}\n\n.table-column-428[_ngcontent-%COMP%] {\n  min-width: 428px;\n}\n\n.table-column-430[_ngcontent-%COMP%] {\n  min-width: 430px;\n}\n\n.table-column-432[_ngcontent-%COMP%] {\n  min-width: 432px;\n}\n\n.table-column-434[_ngcontent-%COMP%] {\n  min-width: 434px;\n}\n\n.table-column-436[_ngcontent-%COMP%] {\n  min-width: 436px;\n}\n\n.table-column-438[_ngcontent-%COMP%] {\n  min-width: 438px;\n}\n\n.table-column-440[_ngcontent-%COMP%] {\n  min-width: 440px;\n}\n\n.table-column-442[_ngcontent-%COMP%] {\n  min-width: 442px;\n}\n\n.table-column-444[_ngcontent-%COMP%] {\n  min-width: 444px;\n}\n\n.table-column-446[_ngcontent-%COMP%] {\n  min-width: 446px;\n}\n\n.table-column-448[_ngcontent-%COMP%] {\n  min-width: 448px;\n}\n\n.table-column-450[_ngcontent-%COMP%] {\n  min-width: 450px;\n}\n\n.table-column-452[_ngcontent-%COMP%] {\n  min-width: 452px;\n}\n\n.table-column-454[_ngcontent-%COMP%] {\n  min-width: 454px;\n}\n\n.table-column-456[_ngcontent-%COMP%] {\n  min-width: 456px;\n}\n\n.table-column-458[_ngcontent-%COMP%] {\n  min-width: 458px;\n}\n\n.table-column-460[_ngcontent-%COMP%] {\n  min-width: 460px;\n}\n\n.table-column-462[_ngcontent-%COMP%] {\n  min-width: 462px;\n}\n\n.table-column-464[_ngcontent-%COMP%] {\n  min-width: 464px;\n}\n\n.table-column-466[_ngcontent-%COMP%] {\n  min-width: 466px;\n}\n\n.table-column-468[_ngcontent-%COMP%] {\n  min-width: 468px;\n}\n\n.table-column-470[_ngcontent-%COMP%] {\n  min-width: 470px;\n}\n\n.table-column-472[_ngcontent-%COMP%] {\n  min-width: 472px;\n}\n\n.table-column-474[_ngcontent-%COMP%] {\n  min-width: 474px;\n}\n\n.table-column-476[_ngcontent-%COMP%] {\n  min-width: 476px;\n}\n\n.table-column-478[_ngcontent-%COMP%] {\n  min-width: 478px;\n}\n\n.table-column-480[_ngcontent-%COMP%] {\n  min-width: 480px;\n}\n\n.table-column-482[_ngcontent-%COMP%] {\n  min-width: 482px;\n}\n\n.table-column-484[_ngcontent-%COMP%] {\n  min-width: 484px;\n}\n\n.table-column-486[_ngcontent-%COMP%] {\n  min-width: 486px;\n}\n\n.table-column-488[_ngcontent-%COMP%] {\n  min-width: 488px;\n}\n\n.table-column-490[_ngcontent-%COMP%] {\n  min-width: 490px;\n}\n\n.table-column-492[_ngcontent-%COMP%] {\n  min-width: 492px;\n}\n\n.table-column-494[_ngcontent-%COMP%] {\n  min-width: 494px;\n}\n\n.table-column-496[_ngcontent-%COMP%] {\n  min-width: 496px;\n}\n\n.table-column-498[_ngcontent-%COMP%] {\n  min-width: 498px;\n}\n\n.table-column-500[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n\n.table-column-502[_ngcontent-%COMP%] {\n  min-width: 502px;\n}\n\n.table-column-504[_ngcontent-%COMP%] {\n  min-width: 504px;\n}\n\n.table-column-506[_ngcontent-%COMP%] {\n  min-width: 506px;\n}\n\n.table-column-508[_ngcontent-%COMP%] {\n  min-width: 508px;\n}\n\n.table-column-510[_ngcontent-%COMP%] {\n  min-width: 510px;\n}\n\n.table-column-512[_ngcontent-%COMP%] {\n  min-width: 512px;\n}\n\n.table-column-514[_ngcontent-%COMP%] {\n  min-width: 514px;\n}\n\n.table-column-516[_ngcontent-%COMP%] {\n  min-width: 516px;\n}\n\n.table-column-518[_ngcontent-%COMP%] {\n  min-width: 518px;\n}\n\n.table-column-520[_ngcontent-%COMP%] {\n  min-width: 520px;\n}\n\n.table-column-522[_ngcontent-%COMP%] {\n  min-width: 522px;\n}\n\n.table-column-524[_ngcontent-%COMP%] {\n  min-width: 524px;\n}\n\n.table-column-526[_ngcontent-%COMP%] {\n  min-width: 526px;\n}\n\n.table-column-528[_ngcontent-%COMP%] {\n  min-width: 528px;\n}\n\n.table-column-530[_ngcontent-%COMP%] {\n  min-width: 530px;\n}\n\n.table-column-532[_ngcontent-%COMP%] {\n  min-width: 532px;\n}\n\n.table-column-534[_ngcontent-%COMP%] {\n  min-width: 534px;\n}\n\n.table-column-536[_ngcontent-%COMP%] {\n  min-width: 536px;\n}\n\n.table-column-538[_ngcontent-%COMP%] {\n  min-width: 538px;\n}\n\n.table-column-540[_ngcontent-%COMP%] {\n  min-width: 540px;\n}\n\n.table-column-542[_ngcontent-%COMP%] {\n  min-width: 542px;\n}\n\n.table-column-544[_ngcontent-%COMP%] {\n  min-width: 544px;\n}\n\n.table-column-546[_ngcontent-%COMP%] {\n  min-width: 546px;\n}\n\n.table-column-548[_ngcontent-%COMP%] {\n  min-width: 548px;\n}\n\n.table-column-550[_ngcontent-%COMP%] {\n  min-width: 550px;\n}\n\n.table-column-552[_ngcontent-%COMP%] {\n  min-width: 552px;\n}\n\n.table-column-554[_ngcontent-%COMP%] {\n  min-width: 554px;\n}\n\n.table-column-556[_ngcontent-%COMP%] {\n  min-width: 556px;\n}\n\n.table-column-558[_ngcontent-%COMP%] {\n  min-width: 558px;\n}\n\n.table-column-560[_ngcontent-%COMP%] {\n  min-width: 560px;\n}\n\n.table-column-562[_ngcontent-%COMP%] {\n  min-width: 562px;\n}\n\n.table-column-564[_ngcontent-%COMP%] {\n  min-width: 564px;\n}\n\n.table-column-566[_ngcontent-%COMP%] {\n  min-width: 566px;\n}\n\n.table-column-568[_ngcontent-%COMP%] {\n  min-width: 568px;\n}\n\n.table-column-570[_ngcontent-%COMP%] {\n  min-width: 570px;\n}\n\n.table-column-572[_ngcontent-%COMP%] {\n  min-width: 572px;\n}\n\n.table-column-574[_ngcontent-%COMP%] {\n  min-width: 574px;\n}\n\n.table-column-576[_ngcontent-%COMP%] {\n  min-width: 576px;\n}\n\n.table-column-578[_ngcontent-%COMP%] {\n  min-width: 578px;\n}\n\n.table-column-580[_ngcontent-%COMP%] {\n  min-width: 580px;\n}\n\n.table-column-582[_ngcontent-%COMP%] {\n  min-width: 582px;\n}\n\n.table-column-584[_ngcontent-%COMP%] {\n  min-width: 584px;\n}\n\n.table-column-586[_ngcontent-%COMP%] {\n  min-width: 586px;\n}\n\n.table-column-588[_ngcontent-%COMP%] {\n  min-width: 588px;\n}\n\n.table-column-590[_ngcontent-%COMP%] {\n  min-width: 590px;\n}\n\n.table-column-592[_ngcontent-%COMP%] {\n  min-width: 592px;\n}\n\n.table-column-594[_ngcontent-%COMP%] {\n  min-width: 594px;\n}\n\n.table-column-596[_ngcontent-%COMP%] {\n  min-width: 596px;\n}\n\n.table-column-598[_ngcontent-%COMP%] {\n  min-width: 598px;\n}\n\n.table-column-600[_ngcontent-%COMP%] {\n  min-width: 600px;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0 !important;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.inner-table[_ngcontent-%COMP%] {\n  margin: 1em;\n  padding: 1em;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLXJlcXVlc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXHB1cmNoYXNlLW9yZGVyLXJlcXVlc3RcXHB1cmNoYXNlLW9yZGVyLXJlcXVlc3QtbGlzdFxccHVyY2hhc2Utb3JkZXItcmVxdWVzdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdFO0VBRUUsY0FBQTtBQ0RKOztBRERFO0VBRUUsY0FBQTtBQ0dKOztBRExFO0VBRUUsY0FBQTtBQ09KOztBRFRFO0VBRUUsY0FBQTtBQ1dKOztBRGJFO0VBRUUsY0FBQTtBQ2VKOztBRGpCRTtFQUVFLGVBQUE7QUNtQko7O0FEckJFO0VBRUUsZUFBQTtBQ3VCSjs7QUR6QkU7RUFFRSxlQUFBO0FDMkJKOztBRDdCRTtFQUVFLGVBQUE7QUMrQko7O0FEakNFO0VBRUUsZUFBQTtBQ21DSjs7QURyQ0U7RUFFRSxlQUFBO0FDdUNKOztBRHpDRTtFQUVFLGVBQUE7QUMyQ0o7O0FEN0NFO0VBRUUsZUFBQTtBQytDSjs7QURqREU7RUFFRSxlQUFBO0FDbURKOztBRHJERTtFQUVFLGVBQUE7QUN1REo7O0FEekRFO0VBRUUsZUFBQTtBQzJESjs7QUQ3REU7RUFFRSxlQUFBO0FDK0RKOztBRGpFRTtFQUVFLGVBQUE7QUNtRUo7O0FEckVFO0VBRUUsZUFBQTtBQ3VFSjs7QUR6RUU7RUFFRSxlQUFBO0FDMkVKOztBRDdFRTtFQUVFLGVBQUE7QUMrRUo7O0FEakZFO0VBRUUsZUFBQTtBQ21GSjs7QURyRkU7RUFFRSxlQUFBO0FDdUZKOztBRHpGRTtFQUVFLGVBQUE7QUMyRko7O0FEN0ZFO0VBRUUsZUFBQTtBQytGSjs7QURqR0U7RUFFRSxlQUFBO0FDbUdKOztBRHJHRTtFQUVFLGVBQUE7QUN1R0o7O0FEekdFO0VBRUUsZUFBQTtBQzJHSjs7QUQ3R0U7RUFFRSxlQUFBO0FDK0dKOztBRGpIRTtFQUVFLGVBQUE7QUNtSEo7O0FEckhFO0VBRUUsZUFBQTtBQ3VISjs7QUR6SEU7RUFFRSxlQUFBO0FDMkhKOztBRDdIRTtFQUVFLGVBQUE7QUMrSEo7O0FEaklFO0VBRUUsZUFBQTtBQ21JSjs7QURySUU7RUFFRSxlQUFBO0FDdUlKOztBRHpJRTtFQUVFLGVBQUE7QUMySUo7O0FEN0lFO0VBRUUsZUFBQTtBQytJSjs7QURqSkU7RUFFRSxlQUFBO0FDbUpKOztBRHJKRTtFQUVFLGVBQUE7QUN1Sko7O0FEekpFO0VBRUUsZUFBQTtBQzJKSjs7QUQ3SkU7RUFFRSxlQUFBO0FDK0pKOztBRGpLRTtFQUVFLGVBQUE7QUNtS0o7O0FEcktFO0VBRUUsZUFBQTtBQ3VLSjs7QUR6S0U7RUFFRSxlQUFBO0FDMktKOztBRDdLRTtFQUVFLGVBQUE7QUMrS0o7O0FEakxFO0VBRUUsZUFBQTtBQ21MSjs7QURyTEU7RUFFRSxlQUFBO0FDdUxKOztBRHpMRTtFQUVFLGVBQUE7QUMyTEo7O0FEN0xFO0VBRUUsZUFBQTtBQytMSjs7QURqTUU7RUFFRSxlQUFBO0FDbU1KOztBRHJNRTtFQUVFLGdCQUFBO0FDdU1KOztBRHpNRTtFQUVFLGdCQUFBO0FDMk1KOztBRDdNRTtFQUVFLGdCQUFBO0FDK01KOztBRGpORTtFQUVFLGdCQUFBO0FDbU5KOztBRHJORTtFQUVFLGdCQUFBO0FDdU5KOztBRHpORTtFQUVFLGdCQUFBO0FDMk5KOztBRDdORTtFQUVFLGdCQUFBO0FDK05KOztBRGpPRTtFQUVFLGdCQUFBO0FDbU9KOztBRHJPRTtFQUVFLGdCQUFBO0FDdU9KOztBRHpPRTtFQUVFLGdCQUFBO0FDMk9KOztBRDdPRTtFQUVFLGdCQUFBO0FDK09KOztBRGpQRTtFQUVFLGdCQUFBO0FDbVBKOztBRHJQRTtFQUVFLGdCQUFBO0FDdVBKOztBRHpQRTtFQUVFLGdCQUFBO0FDMlBKOztBRDdQRTtFQUVFLGdCQUFBO0FDK1BKOztBRGpRRTtFQUVFLGdCQUFBO0FDbVFKOztBRHJRRTtFQUVFLGdCQUFBO0FDdVFKOztBRHpRRTtFQUVFLGdCQUFBO0FDMlFKOztBRDdRRTtFQUVFLGdCQUFBO0FDK1FKOztBRGpSRTtFQUVFLGdCQUFBO0FDbVJKOztBRHJSRTtFQUVFLGdCQUFBO0FDdVJKOztBRHpSRTtFQUVFLGdCQUFBO0FDMlJKOztBRDdSRTtFQUVFLGdCQUFBO0FDK1JKOztBRGpTRTtFQUVFLGdCQUFBO0FDbVNKOztBRHJTRTtFQUVFLGdCQUFBO0FDdVNKOztBRHpTRTtFQUVFLGdCQUFBO0FDMlNKOztBRDdTRTtFQUVFLGdCQUFBO0FDK1NKOztBRGpURTtFQUVFLGdCQUFBO0FDbVRKOztBRHJURTtFQUVFLGdCQUFBO0FDdVRKOztBRHpURTtFQUVFLGdCQUFBO0FDMlRKOztBRDdURTtFQUVFLGdCQUFBO0FDK1RKOztBRGpVRTtFQUVFLGdCQUFBO0FDbVVKOztBRHJVRTtFQUVFLGdCQUFBO0FDdVVKOztBRHpVRTtFQUVFLGdCQUFBO0FDMlVKOztBRDdVRTtFQUVFLGdCQUFBO0FDK1VKOztBRGpWRTtFQUVFLGdCQUFBO0FDbVZKOztBRHJWRTtFQUVFLGdCQUFBO0FDdVZKOztBRHpWRTtFQUVFLGdCQUFBO0FDMlZKOztBRDdWRTtFQUVFLGdCQUFBO0FDK1ZKOztBRGpXRTtFQUVFLGdCQUFBO0FDbVdKOztBRHJXRTtFQUVFLGdCQUFBO0FDdVdKOztBRHpXRTtFQUVFLGdCQUFBO0FDMldKOztBRDdXRTtFQUVFLGdCQUFBO0FDK1dKOztBRGpYRTtFQUVFLGdCQUFBO0FDbVhKOztBRHJYRTtFQUVFLGdCQUFBO0FDdVhKOztBRHpYRTtFQUVFLGdCQUFBO0FDMlhKOztBRDdYRTtFQUVFLGdCQUFBO0FDK1hKOztBRGpZRTtFQUVFLGdCQUFBO0FDbVlKOztBRHJZRTtFQUVFLGdCQUFBO0FDdVlKOztBRHpZRTtFQUVFLGdCQUFBO0FDMllKOztBRDdZRTtFQUVFLGdCQUFBO0FDK1lKOztBRGpaRTtFQUVFLGdCQUFBO0FDbVpKOztBRHJaRTtFQUVFLGdCQUFBO0FDdVpKOztBRHpaRTtFQUVFLGdCQUFBO0FDMlpKOztBRDdaRTtFQUVFLGdCQUFBO0FDK1pKOztBRGphRTtFQUVFLGdCQUFBO0FDbWFKOztBRHJhRTtFQUVFLGdCQUFBO0FDdWFKOztBRHphRTtFQUVFLGdCQUFBO0FDMmFKOztBRDdhRTtFQUVFLGdCQUFBO0FDK2FKOztBRGpiRTtFQUVFLGdCQUFBO0FDbWJKOztBRHJiRTtFQUVFLGdCQUFBO0FDdWJKOztBRHpiRTtFQUVFLGdCQUFBO0FDMmJKOztBRDdiRTtFQUVFLGdCQUFBO0FDK2JKOztBRGpjRTtFQUVFLGdCQUFBO0FDbWNKOztBRHJjRTtFQUVFLGdCQUFBO0FDdWNKOztBRHpjRTtFQUVFLGdCQUFBO0FDMmNKOztBRDdjRTtFQUVFLGdCQUFBO0FDK2NKOztBRGpkRTtFQUVFLGdCQUFBO0FDbWRKOztBRHJkRTtFQUVFLGdCQUFBO0FDdWRKOztBRHpkRTtFQUVFLGdCQUFBO0FDMmRKOztBRDdkRTtFQUVFLGdCQUFBO0FDK2RKOztBRGplRTtFQUVFLGdCQUFBO0FDbWVKOztBRHJlRTtFQUVFLGdCQUFBO0FDdWVKOztBRHplRTtFQUVFLGdCQUFBO0FDMmVKOztBRDdlRTtFQUVFLGdCQUFBO0FDK2VKOztBRGpmRTtFQUVFLGdCQUFBO0FDbWZKOztBRHJmRTtFQUVFLGdCQUFBO0FDdWZKOztBRHpmRTtFQUVFLGdCQUFBO0FDMmZKOztBRDdmRTtFQUVFLGdCQUFBO0FDK2ZKOztBRGpnQkU7RUFFRSxnQkFBQTtBQ21nQko7O0FEcmdCRTtFQUVFLGdCQUFBO0FDdWdCSjs7QUR6Z0JFO0VBRUUsZ0JBQUE7QUMyZ0JKOztBRDdnQkU7RUFFRSxnQkFBQTtBQytnQko7O0FEamhCRTtFQUVFLGdCQUFBO0FDbWhCSjs7QURyaEJFO0VBRUUsZ0JBQUE7QUN1aEJKOztBRHpoQkU7RUFFRSxnQkFBQTtBQzJoQko7O0FEN2hCRTtFQUVFLGdCQUFBO0FDK2hCSjs7QURqaUJFO0VBRUUsZ0JBQUE7QUNtaUJKOztBRHJpQkU7RUFFRSxnQkFBQTtBQ3VpQko7O0FEemlCRTtFQUVFLGdCQUFBO0FDMmlCSjs7QUQ3aUJFO0VBRUUsZ0JBQUE7QUMraUJKOztBRGpqQkU7RUFFRSxnQkFBQTtBQ21qQko7O0FEcmpCRTtFQUVFLGdCQUFBO0FDdWpCSjs7QUR6akJFO0VBRUUsZ0JBQUE7QUMyakJKOztBRDdqQkU7RUFFRSxnQkFBQTtBQytqQko7O0FEamtCRTtFQUVFLGdCQUFBO0FDbWtCSjs7QURya0JFO0VBRUUsZ0JBQUE7QUN1a0JKOztBRHprQkU7RUFFRSxnQkFBQTtBQzJrQko7O0FEN2tCRTtFQUVFLGdCQUFBO0FDK2tCSjs7QURqbEJFO0VBRUUsZ0JBQUE7QUNtbEJKOztBRHJsQkU7RUFFRSxnQkFBQTtBQ3VsQko7O0FEemxCRTtFQUVFLGdCQUFBO0FDMmxCSjs7QUQ3bEJFO0VBRUUsZ0JBQUE7QUMrbEJKOztBRGptQkU7RUFFRSxnQkFBQTtBQ21tQko7O0FEcm1CRTtFQUVFLGdCQUFBO0FDdW1CSjs7QUR6bUJFO0VBRUUsZ0JBQUE7QUMybUJKOztBRDdtQkU7RUFFRSxnQkFBQTtBQyttQko7O0FEam5CRTtFQUVFLGdCQUFBO0FDbW5CSjs7QURybkJFO0VBRUUsZ0JBQUE7QUN1bkJKOztBRHpuQkU7RUFFRSxnQkFBQTtBQzJuQko7O0FEN25CRTtFQUVFLGdCQUFBO0FDK25CSjs7QURqb0JFO0VBRUUsZ0JBQUE7QUNtb0JKOztBRHJvQkU7RUFFRSxnQkFBQTtBQ3VvQko7O0FEem9CRTtFQUVFLGdCQUFBO0FDMm9CSjs7QUQ3b0JFO0VBRUUsZ0JBQUE7QUMrb0JKOztBRGpwQkU7RUFFRSxnQkFBQTtBQ21wQko7O0FEcnBCRTtFQUVFLGdCQUFBO0FDdXBCSjs7QUR6cEJFO0VBRUUsZ0JBQUE7QUMycEJKOztBRDdwQkU7RUFFRSxnQkFBQTtBQytwQko7O0FEanFCRTtFQUVFLGdCQUFBO0FDbXFCSjs7QURycUJFO0VBRUUsZ0JBQUE7QUN1cUJKOztBRHpxQkU7RUFFRSxnQkFBQTtBQzJxQko7O0FEN3FCRTtFQUVFLGdCQUFBO0FDK3FCSjs7QURqckJFO0VBRUUsZ0JBQUE7QUNtckJKOztBRHJyQkU7RUFFRSxnQkFBQTtBQ3VyQko7O0FEenJCRTtFQUVFLGdCQUFBO0FDMnJCSjs7QUQ3ckJFO0VBRUUsZ0JBQUE7QUMrckJKOztBRGpzQkU7RUFFRSxnQkFBQTtBQ21zQko7O0FEcnNCRTtFQUVFLGdCQUFBO0FDdXNCSjs7QUR6c0JFO0VBRUUsZ0JBQUE7QUMyc0JKOztBRDdzQkU7RUFFRSxnQkFBQTtBQytzQko7O0FEanRCRTtFQUVFLGdCQUFBO0FDbXRCSjs7QURydEJFO0VBRUUsZ0JBQUE7QUN1dEJKOztBRHp0QkU7RUFFRSxnQkFBQTtBQzJ0Qko7O0FEN3RCRTtFQUVFLGdCQUFBO0FDK3RCSjs7QURqdUJFO0VBRUUsZ0JBQUE7QUNtdUJKOztBRHJ1QkU7RUFFRSxnQkFBQTtBQ3V1Qko7O0FEenVCRTtFQUVFLGdCQUFBO0FDMnVCSjs7QUQ3dUJFO0VBRUUsZ0JBQUE7QUMrdUJKOztBRGp2QkU7RUFFRSxnQkFBQTtBQ212Qko7O0FEcnZCRTtFQUVFLGdCQUFBO0FDdXZCSjs7QUR6dkJFO0VBRUUsZ0JBQUE7QUMydkJKOztBRDd2QkU7RUFFRSxnQkFBQTtBQyt2Qko7O0FEandCRTtFQUVFLGdCQUFBO0FDbXdCSjs7QURyd0JFO0VBRUUsZ0JBQUE7QUN1d0JKOztBRHp3QkU7RUFFRSxnQkFBQTtBQzJ3Qko7O0FEN3dCRTtFQUVFLGdCQUFBO0FDK3dCSjs7QURqeEJFO0VBRUUsZ0JBQUE7QUNteEJKOztBRHJ4QkU7RUFFRSxnQkFBQTtBQ3V4Qko7O0FEenhCRTtFQUVFLGdCQUFBO0FDMnhCSjs7QUQ3eEJFO0VBRUUsZ0JBQUE7QUMreEJKOztBRGp5QkU7RUFFRSxnQkFBQTtBQ215Qko7O0FEcnlCRTtFQUVFLGdCQUFBO0FDdXlCSjs7QUR6eUJFO0VBRUUsZ0JBQUE7QUMyeUJKOztBRDd5QkU7RUFFRSxnQkFBQTtBQyt5Qko7O0FEanpCRTtFQUVFLGdCQUFBO0FDbXpCSjs7QURyekJFO0VBRUUsZ0JBQUE7QUN1ekJKOztBRHp6QkU7RUFFRSxnQkFBQTtBQzJ6Qko7O0FEN3pCRTtFQUVFLGdCQUFBO0FDK3pCSjs7QURqMEJFO0VBRUUsZ0JBQUE7QUNtMEJKOztBRHIwQkU7RUFFRSxnQkFBQTtBQ3UwQko7O0FEejBCRTtFQUVFLGdCQUFBO0FDMjBCSjs7QUQ3MEJFO0VBRUUsZ0JBQUE7QUMrMEJKOztBRGoxQkU7RUFFRSxnQkFBQTtBQ20xQko7O0FEcjFCRTtFQUVFLGdCQUFBO0FDdTFCSjs7QUR6MUJFO0VBRUUsZ0JBQUE7QUMyMUJKOztBRDcxQkU7RUFFRSxnQkFBQTtBQysxQko7O0FEajJCRTtFQUVFLGdCQUFBO0FDbTJCSjs7QURyMkJFO0VBRUUsZ0JBQUE7QUN1MkJKOztBRHoyQkU7RUFFRSxnQkFBQTtBQzIyQko7O0FENzJCRTtFQUVFLGdCQUFBO0FDKzJCSjs7QURqM0JFO0VBRUUsZ0JBQUE7QUNtM0JKOztBRHIzQkU7RUFFRSxnQkFBQTtBQ3UzQko7O0FEejNCRTtFQUVFLGdCQUFBO0FDMjNCSjs7QUQ3M0JFO0VBRUUsZ0JBQUE7QUMrM0JKOztBRGo0QkU7RUFFRSxnQkFBQTtBQ200Qko7O0FEcjRCRTtFQUVFLGdCQUFBO0FDdTRCSjs7QUR6NEJFO0VBRUUsZ0JBQUE7QUMyNEJKOztBRDc0QkU7RUFFRSxnQkFBQTtBQys0Qko7O0FEajVCRTtFQUVFLGdCQUFBO0FDbTVCSjs7QURyNUJFO0VBRUUsZ0JBQUE7QUN1NUJKOztBRHo1QkU7RUFFRSxnQkFBQTtBQzI1Qko7O0FENzVCRTtFQUVFLGdCQUFBO0FDKzVCSjs7QURqNkJFO0VBRUUsZ0JBQUE7QUNtNkJKOztBRHI2QkU7RUFFRSxnQkFBQTtBQ3U2Qko7O0FEejZCRTtFQUVFLGdCQUFBO0FDMjZCSjs7QUQ3NkJFO0VBRUUsZ0JBQUE7QUMrNkJKOztBRGo3QkU7RUFFRSxnQkFBQTtBQ203Qko7O0FEcjdCRTtFQUVFLGdCQUFBO0FDdTdCSjs7QUR6N0JFO0VBRUUsZ0JBQUE7QUMyN0JKOztBRDc3QkU7RUFFRSxnQkFBQTtBQys3Qko7O0FEajhCRTtFQUVFLGdCQUFBO0FDbThCSjs7QURyOEJFO0VBRUUsZ0JBQUE7QUN1OEJKOztBRHo4QkU7RUFFRSxnQkFBQTtBQzI4Qko7O0FENzhCRTtFQUVFLGdCQUFBO0FDKzhCSjs7QURqOUJFO0VBRUUsZ0JBQUE7QUNtOUJKOztBRHI5QkU7RUFFRSxnQkFBQTtBQ3U5Qko7O0FEejlCRTtFQUVFLGdCQUFBO0FDMjlCSjs7QUQ3OUJFO0VBRUUsZ0JBQUE7QUMrOUJKOztBRGorQkU7RUFFRSxnQkFBQTtBQ20rQko7O0FEcitCRTtFQUVFLGdCQUFBO0FDdStCSjs7QUR6K0JFO0VBRUUsZ0JBQUE7QUMyK0JKOztBRDcrQkU7RUFFRSxnQkFBQTtBQysrQko7O0FEai9CRTtFQUVFLGdCQUFBO0FDbS9CSjs7QURyL0JFO0VBRUUsZ0JBQUE7QUN1L0JKOztBRHovQkU7RUFFRSxnQkFBQTtBQzIvQko7O0FENy9CRTtFQUVFLGdCQUFBO0FDKy9CSjs7QURqZ0NFO0VBRUUsZ0JBQUE7QUNtZ0NKOztBRHJnQ0U7RUFFRSxnQkFBQTtBQ3VnQ0o7O0FEemdDRTtFQUVFLGdCQUFBO0FDMmdDSjs7QUQ3Z0NFO0VBRUUsZ0JBQUE7QUMrZ0NKOztBRGpoQ0U7RUFFRSxnQkFBQTtBQ21oQ0o7O0FEcmhDRTtFQUVFLGdCQUFBO0FDdWhDSjs7QUR6aENFO0VBRUUsZ0JBQUE7QUMyaENKOztBRDdoQ0U7RUFFRSxnQkFBQTtBQytoQ0o7O0FEamlDRTtFQUVFLGdCQUFBO0FDbWlDSjs7QURyaUNFO0VBRUUsZ0JBQUE7QUN1aUNKOztBRHppQ0U7RUFFRSxnQkFBQTtBQzJpQ0o7O0FEN2lDRTtFQUVFLGdCQUFBO0FDK2lDSjs7QURqakNFO0VBRUUsZ0JBQUE7QUNtakNKOztBRHJqQ0U7RUFFRSxnQkFBQTtBQ3VqQ0o7O0FEempDRTtFQUVFLGdCQUFBO0FDMmpDSjs7QUQ3akNFO0VBRUUsZ0JBQUE7QUMrakNKOztBRGprQ0U7RUFFRSxnQkFBQTtBQ21rQ0o7O0FEcmtDRTtFQUVFLGdCQUFBO0FDdWtDSjs7QUR6a0NFO0VBRUUsZ0JBQUE7QUMya0NKOztBRDdrQ0U7RUFFRSxnQkFBQTtBQytrQ0o7O0FEamxDRTtFQUVFLGdCQUFBO0FDbWxDSjs7QURybENFO0VBRUUsZ0JBQUE7QUN1bENKOztBRHpsQ0U7RUFFRSxnQkFBQTtBQzJsQ0o7O0FEN2xDRTtFQUVFLGdCQUFBO0FDK2xDSjs7QURqbUNFO0VBRUUsZ0JBQUE7QUNtbUNKOztBRHJtQ0U7RUFFRSxnQkFBQTtBQ3VtQ0o7O0FEem1DRTtFQUVFLGdCQUFBO0FDMm1DSjs7QUQ3bUNFO0VBRUUsZ0JBQUE7QUMrbUNKOztBRGpuQ0U7RUFFRSxnQkFBQTtBQ21uQ0o7O0FEcm5DRTtFQUVFLGdCQUFBO0FDdW5DSjs7QUR6bkNFO0VBRUUsZ0JBQUE7QUMybkNKOztBRDduQ0U7RUFFRSxnQkFBQTtBQytuQ0o7O0FEam9DRTtFQUVFLGdCQUFBO0FDbW9DSjs7QURyb0NFO0VBRUUsZ0JBQUE7QUN1b0NKOztBRHpvQ0U7RUFFRSxnQkFBQTtBQzJvQ0o7O0FEN29DRTtFQUVFLGdCQUFBO0FDK29DSjs7QURqcENFO0VBRUUsZ0JBQUE7QUNtcENKOztBRHJwQ0U7RUFFRSxnQkFBQTtBQ3VwQ0o7O0FEenBDRTtFQUVFLGdCQUFBO0FDMnBDSjs7QUQ3cENFO0VBRUUsZ0JBQUE7QUMrcENKOztBRGpxQ0U7RUFFRSxnQkFBQTtBQ21xQ0o7O0FEcnFDRTtFQUVFLGdCQUFBO0FDdXFDSjs7QUR6cUNFO0VBRUUsZ0JBQUE7QUMycUNKOztBRDdxQ0U7RUFFRSxnQkFBQTtBQytxQ0o7O0FEM3FDQTtFQUNFLG9CQUFBO0FDOHFDRjs7QUQzcUNBO0VBQ0Usc0JBQUE7QUM4cUNGOztBRDNxQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUM4cUNGOztBRDNxQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDOHFDRiIsImZpbGUiOiJwdXJjaGFzZS1vcmRlci1yZXF1ZXN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG59XHJcbkBmb3IgJGluZGV4IGZyb20gMCB0aHJvdWdoIDMwMCB7XHJcbiAgJHNpemU6ICRpbmRleCAqIDI7XHJcbiAgLnRhYmxlLWNvbHVtbi0jeyRzaXplfSB7XHJcbiAgICAvLyBmbGV4OiAwIDEgI3skc2l6ZX0je1wicHhcIn07XHJcbiAgICBtaW4td2lkdGg6ICN7JHNpemV9I3tcInB4XCJ9O1xyXG4gIH1cclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXkgOiBmbGV4O1xyXG59XHJcblxyXG4uaW5uZXItdGFibGUge1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5tYXQtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi50YWJsZS1jb2x1bW4tMCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIge1xuICBtaW4td2lkdGg6IDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00IHtcbiAgbWluLXdpZHRoOiA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNiB7XG4gIG1pbi13aWR0aDogNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTgge1xuICBtaW4td2lkdGg6IDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMCB7XG4gIG1pbi13aWR0aDogMTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMiB7XG4gIG1pbi13aWR0aDogMTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNCB7XG4gIG1pbi13aWR0aDogMTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNiB7XG4gIG1pbi13aWR0aDogMTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOCB7XG4gIG1pbi13aWR0aDogMThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMCB7XG4gIG1pbi13aWR0aDogMjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMiB7XG4gIG1pbi13aWR0aDogMjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNCB7XG4gIG1pbi13aWR0aDogMjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNiB7XG4gIG1pbi13aWR0aDogMjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOCB7XG4gIG1pbi13aWR0aDogMjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMCB7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMiB7XG4gIG1pbi13aWR0aDogMzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNCB7XG4gIG1pbi13aWR0aDogMzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNiB7XG4gIG1pbi13aWR0aDogMzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zOCB7XG4gIG1pbi13aWR0aDogMzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MCB7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MiB7XG4gIG1pbi13aWR0aDogNDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NCB7XG4gIG1pbi13aWR0aDogNDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NiB7XG4gIG1pbi13aWR0aDogNDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OCB7XG4gIG1pbi13aWR0aDogNDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MCB7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MiB7XG4gIG1pbi13aWR0aDogNTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NCB7XG4gIG1pbi13aWR0aDogNTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NiB7XG4gIG1pbi13aWR0aDogNTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OCB7XG4gIG1pbi13aWR0aDogNThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02MCB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02MiB7XG4gIG1pbi13aWR0aDogNjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02NCB7XG4gIG1pbi13aWR0aDogNjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02NiB7XG4gIG1pbi13aWR0aDogNjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02OCB7XG4gIG1pbi13aWR0aDogNjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03MCB7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03MiB7XG4gIG1pbi13aWR0aDogNzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03NCB7XG4gIG1pbi13aWR0aDogNzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03NiB7XG4gIG1pbi13aWR0aDogNzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03OCB7XG4gIG1pbi13aWR0aDogNzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04MCB7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04MiB7XG4gIG1pbi13aWR0aDogODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04NCB7XG4gIG1pbi13aWR0aDogODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04NiB7XG4gIG1pbi13aWR0aDogODZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04OCB7XG4gIG1pbi13aWR0aDogODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05MCB7XG4gIG1pbi13aWR0aDogOTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05MiB7XG4gIG1pbi13aWR0aDogOTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05NCB7XG4gIG1pbi13aWR0aDogOTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05NiB7XG4gIG1pbi13aWR0aDogOTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05OCB7XG4gIG1pbi13aWR0aDogOThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMDAge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEwMiB7XG4gIG1pbi13aWR0aDogMTAycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTA0IHtcbiAgbWluLXdpZHRoOiAxMDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMDYge1xuICBtaW4td2lkdGg6IDEwNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTEwOCB7XG4gIG1pbi13aWR0aDogMTA4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTEwIHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMTIge1xuICBtaW4td2lkdGg6IDExMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTExNCB7XG4gIG1pbi13aWR0aDogMTE0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTE2IHtcbiAgbWluLXdpZHRoOiAxMTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMTgge1xuICBtaW4td2lkdGg6IDExOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEyMCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTIyIHtcbiAgbWluLXdpZHRoOiAxMjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMjQge1xuICBtaW4td2lkdGg6IDEyNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEyNiB7XG4gIG1pbi13aWR0aDogMTI2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTI4IHtcbiAgbWluLXdpZHRoOiAxMjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMzAge1xuICBtaW4td2lkdGg6IDEzMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEzMiB7XG4gIG1pbi13aWR0aDogMTMycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTM0IHtcbiAgbWluLXdpZHRoOiAxMzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMzYge1xuICBtaW4td2lkdGg6IDEzNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTEzOCB7XG4gIG1pbi13aWR0aDogMTM4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTQwIHtcbiAgbWluLXdpZHRoOiAxNDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNDIge1xuICBtaW4td2lkdGg6IDE0MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE0NCB7XG4gIG1pbi13aWR0aDogMTQ0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTQ2IHtcbiAgbWluLXdpZHRoOiAxNDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNDgge1xuICBtaW4td2lkdGg6IDE0OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE1MCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTUyIHtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNTQge1xuICBtaW4td2lkdGg6IDE1NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE1NiB7XG4gIG1pbi13aWR0aDogMTU2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTU4IHtcbiAgbWluLXdpZHRoOiAxNThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNjAge1xuICBtaW4td2lkdGg6IDE2MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE2MiB7XG4gIG1pbi13aWR0aDogMTYycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTY0IHtcbiAgbWluLXdpZHRoOiAxNjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNjYge1xuICBtaW4td2lkdGg6IDE2NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE2OCB7XG4gIG1pbi13aWR0aDogMTY4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTcwIHtcbiAgbWluLXdpZHRoOiAxNzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNzIge1xuICBtaW4td2lkdGg6IDE3MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE3NCB7XG4gIG1pbi13aWR0aDogMTc0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTc2IHtcbiAgbWluLXdpZHRoOiAxNzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNzgge1xuICBtaW4td2lkdGg6IDE3OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE4MCB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTgyIHtcbiAgbWluLXdpZHRoOiAxODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xODQge1xuICBtaW4td2lkdGg6IDE4NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE4NiB7XG4gIG1pbi13aWR0aDogMTg2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTg4IHtcbiAgbWluLXdpZHRoOiAxODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOTAge1xuICBtaW4td2lkdGg6IDE5MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE5MiB7XG4gIG1pbi13aWR0aDogMTkycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTk0IHtcbiAgbWluLXdpZHRoOiAxOTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOTYge1xuICBtaW4td2lkdGg6IDE5NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE5OCB7XG4gIG1pbi13aWR0aDogMTk4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjAwIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMDIge1xuICBtaW4td2lkdGg6IDIwMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIwNCB7XG4gIG1pbi13aWR0aDogMjA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjA2IHtcbiAgbWluLXdpZHRoOiAyMDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMDgge1xuICBtaW4td2lkdGg6IDIwOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIxMCB7XG4gIG1pbi13aWR0aDogMjEwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjEyIHtcbiAgbWluLXdpZHRoOiAyMTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMTQge1xuICBtaW4td2lkdGg6IDIxNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIxNiB7XG4gIG1pbi13aWR0aDogMjE2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjE4IHtcbiAgbWluLXdpZHRoOiAyMThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMjAge1xuICBtaW4td2lkdGg6IDIyMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIyMiB7XG4gIG1pbi13aWR0aDogMjIycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjI0IHtcbiAgbWluLXdpZHRoOiAyMjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMjYge1xuICBtaW4td2lkdGg6IDIyNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIyOCB7XG4gIG1pbi13aWR0aDogMjI4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjMwIHtcbiAgbWluLXdpZHRoOiAyMzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMzIge1xuICBtaW4td2lkdGg6IDIzMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIzNCB7XG4gIG1pbi13aWR0aDogMjM0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjM2IHtcbiAgbWluLXdpZHRoOiAyMzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMzgge1xuICBtaW4td2lkdGg6IDIzOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI0MCB7XG4gIG1pbi13aWR0aDogMjQwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjQyIHtcbiAgbWluLXdpZHRoOiAyNDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNDQge1xuICBtaW4td2lkdGg6IDI0NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI0NiB7XG4gIG1pbi13aWR0aDogMjQ2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjQ4IHtcbiAgbWluLXdpZHRoOiAyNDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNTAge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI1MiB7XG4gIG1pbi13aWR0aDogMjUycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjU0IHtcbiAgbWluLXdpZHRoOiAyNTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNTYge1xuICBtaW4td2lkdGg6IDI1NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI1OCB7XG4gIG1pbi13aWR0aDogMjU4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjYwIHtcbiAgbWluLXdpZHRoOiAyNjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNjIge1xuICBtaW4td2lkdGg6IDI2MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI2NCB7XG4gIG1pbi13aWR0aDogMjY0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjY2IHtcbiAgbWluLXdpZHRoOiAyNjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNjgge1xuICBtaW4td2lkdGg6IDI2OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI3MCB7XG4gIG1pbi13aWR0aDogMjcwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjcyIHtcbiAgbWluLXdpZHRoOiAyNzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNzQge1xuICBtaW4td2lkdGg6IDI3NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI3NiB7XG4gIG1pbi13aWR0aDogMjc2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjc4IHtcbiAgbWluLXdpZHRoOiAyNzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yODAge1xuICBtaW4td2lkdGg6IDI4MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI4MiB7XG4gIG1pbi13aWR0aDogMjgycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjg0IHtcbiAgbWluLXdpZHRoOiAyODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yODYge1xuICBtaW4td2lkdGg6IDI4NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI4OCB7XG4gIG1pbi13aWR0aDogMjg4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjkwIHtcbiAgbWluLXdpZHRoOiAyOTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOTIge1xuICBtaW4td2lkdGg6IDI5MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI5NCB7XG4gIG1pbi13aWR0aDogMjk0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjk2IHtcbiAgbWluLXdpZHRoOiAyOTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOTgge1xuICBtaW4td2lkdGg6IDI5OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMwMCB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzAyIHtcbiAgbWluLXdpZHRoOiAzMDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMDQge1xuICBtaW4td2lkdGg6IDMwNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMwNiB7XG4gIG1pbi13aWR0aDogMzA2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzA4IHtcbiAgbWluLXdpZHRoOiAzMDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMTAge1xuICBtaW4td2lkdGg6IDMxMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMxMiB7XG4gIG1pbi13aWR0aDogMzEycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzE0IHtcbiAgbWluLXdpZHRoOiAzMTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMTYge1xuICBtaW4td2lkdGg6IDMxNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTMxOCB7XG4gIG1pbi13aWR0aDogMzE4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzIwIHtcbiAgbWluLXdpZHRoOiAzMjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMjIge1xuICBtaW4td2lkdGg6IDMyMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTMyNCB7XG4gIG1pbi13aWR0aDogMzI0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzI2IHtcbiAgbWluLXdpZHRoOiAzMjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMjgge1xuICBtaW4td2lkdGg6IDMyOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMzMCB7XG4gIG1pbi13aWR0aDogMzMwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzMyIHtcbiAgbWluLXdpZHRoOiAzMzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMzQge1xuICBtaW4td2lkdGg6IDMzNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMzNiB7XG4gIG1pbi13aWR0aDogMzM2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzM4IHtcbiAgbWluLXdpZHRoOiAzMzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNDAge1xuICBtaW4td2lkdGg6IDM0MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM0MiB7XG4gIG1pbi13aWR0aDogMzQycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzQ0IHtcbiAgbWluLXdpZHRoOiAzNDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNDYge1xuICBtaW4td2lkdGg6IDM0NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM0OCB7XG4gIG1pbi13aWR0aDogMzQ4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzUwIHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNTIge1xuICBtaW4td2lkdGg6IDM1MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM1NCB7XG4gIG1pbi13aWR0aDogMzU0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzU2IHtcbiAgbWluLXdpZHRoOiAzNTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNTgge1xuICBtaW4td2lkdGg6IDM1OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM2MCB7XG4gIG1pbi13aWR0aDogMzYwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzYyIHtcbiAgbWluLXdpZHRoOiAzNjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNjQge1xuICBtaW4td2lkdGg6IDM2NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM2NiB7XG4gIG1pbi13aWR0aDogMzY2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzY4IHtcbiAgbWluLXdpZHRoOiAzNjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNzAge1xuICBtaW4td2lkdGg6IDM3MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM3MiB7XG4gIG1pbi13aWR0aDogMzcycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzc0IHtcbiAgbWluLXdpZHRoOiAzNzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNzYge1xuICBtaW4td2lkdGg6IDM3NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM3OCB7XG4gIG1pbi13aWR0aDogMzc4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzgwIHtcbiAgbWluLXdpZHRoOiAzODBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zODIge1xuICBtaW4td2lkdGg6IDM4MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM4NCB7XG4gIG1pbi13aWR0aDogMzg0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzg2IHtcbiAgbWluLXdpZHRoOiAzODZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zODgge1xuICBtaW4td2lkdGg6IDM4OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM5MCB7XG4gIG1pbi13aWR0aDogMzkwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzkyIHtcbiAgbWluLXdpZHRoOiAzOTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zOTQge1xuICBtaW4td2lkdGg6IDM5NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM5NiB7XG4gIG1pbi13aWR0aDogMzk2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzk4IHtcbiAgbWluLXdpZHRoOiAzOThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MDAge1xuICBtaW4td2lkdGg6IDQwMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQwMiB7XG4gIG1pbi13aWR0aDogNDAycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDA0IHtcbiAgbWluLXdpZHRoOiA0MDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MDYge1xuICBtaW4td2lkdGg6IDQwNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQwOCB7XG4gIG1pbi13aWR0aDogNDA4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDEwIHtcbiAgbWluLXdpZHRoOiA0MTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MTIge1xuICBtaW4td2lkdGg6IDQxMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQxNCB7XG4gIG1pbi13aWR0aDogNDE0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDE2IHtcbiAgbWluLXdpZHRoOiA0MTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MTgge1xuICBtaW4td2lkdGg6IDQxOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQyMCB7XG4gIG1pbi13aWR0aDogNDIwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDIyIHtcbiAgbWluLXdpZHRoOiA0MjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MjQge1xuICBtaW4td2lkdGg6IDQyNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQyNiB7XG4gIG1pbi13aWR0aDogNDI2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDI4IHtcbiAgbWluLXdpZHRoOiA0MjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MzAge1xuICBtaW4td2lkdGg6IDQzMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQzMiB7XG4gIG1pbi13aWR0aDogNDMycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDM0IHtcbiAgbWluLXdpZHRoOiA0MzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MzYge1xuICBtaW4td2lkdGg6IDQzNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQzOCB7XG4gIG1pbi13aWR0aDogNDM4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDQwIHtcbiAgbWluLXdpZHRoOiA0NDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NDIge1xuICBtaW4td2lkdGg6IDQ0MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ0NCB7XG4gIG1pbi13aWR0aDogNDQ0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDQ2IHtcbiAgbWluLXdpZHRoOiA0NDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NDgge1xuICBtaW4td2lkdGg6IDQ0OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ1MCB7XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDUyIHtcbiAgbWluLXdpZHRoOiA0NTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NTQge1xuICBtaW4td2lkdGg6IDQ1NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ1NiB7XG4gIG1pbi13aWR0aDogNDU2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDU4IHtcbiAgbWluLXdpZHRoOiA0NThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NjAge1xuICBtaW4td2lkdGg6IDQ2MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ2MiB7XG4gIG1pbi13aWR0aDogNDYycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDY0IHtcbiAgbWluLXdpZHRoOiA0NjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NjYge1xuICBtaW4td2lkdGg6IDQ2NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ2OCB7XG4gIG1pbi13aWR0aDogNDY4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDcwIHtcbiAgbWluLXdpZHRoOiA0NzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NzIge1xuICBtaW4td2lkdGg6IDQ3MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ3NCB7XG4gIG1pbi13aWR0aDogNDc0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDc2IHtcbiAgbWluLXdpZHRoOiA0NzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00Nzgge1xuICBtaW4td2lkdGg6IDQ3OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ4MCB7XG4gIG1pbi13aWR0aDogNDgwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDgyIHtcbiAgbWluLXdpZHRoOiA0ODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00ODQge1xuICBtaW4td2lkdGg6IDQ4NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ4NiB7XG4gIG1pbi13aWR0aDogNDg2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDg4IHtcbiAgbWluLXdpZHRoOiA0ODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OTAge1xuICBtaW4td2lkdGg6IDQ5MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ5MiB7XG4gIG1pbi13aWR0aDogNDkycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDk0IHtcbiAgbWluLXdpZHRoOiA0OTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OTYge1xuICBtaW4td2lkdGg6IDQ5NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ5OCB7XG4gIG1pbi13aWR0aDogNDk4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTAwIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MDIge1xuICBtaW4td2lkdGg6IDUwMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUwNCB7XG4gIG1pbi13aWR0aDogNTA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTA2IHtcbiAgbWluLXdpZHRoOiA1MDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MDgge1xuICBtaW4td2lkdGg6IDUwOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUxMCB7XG4gIG1pbi13aWR0aDogNTEwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTEyIHtcbiAgbWluLXdpZHRoOiA1MTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MTQge1xuICBtaW4td2lkdGg6IDUxNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUxNiB7XG4gIG1pbi13aWR0aDogNTE2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTE4IHtcbiAgbWluLXdpZHRoOiA1MThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MjAge1xuICBtaW4td2lkdGg6IDUyMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUyMiB7XG4gIG1pbi13aWR0aDogNTIycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTI0IHtcbiAgbWluLXdpZHRoOiA1MjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MjYge1xuICBtaW4td2lkdGg6IDUyNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUyOCB7XG4gIG1pbi13aWR0aDogNTI4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTMwIHtcbiAgbWluLXdpZHRoOiA1MzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MzIge1xuICBtaW4td2lkdGg6IDUzMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUzNCB7XG4gIG1pbi13aWR0aDogNTM0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTM2IHtcbiAgbWluLXdpZHRoOiA1MzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01Mzgge1xuICBtaW4td2lkdGg6IDUzOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU0MCB7XG4gIG1pbi13aWR0aDogNTQwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTQyIHtcbiAgbWluLXdpZHRoOiA1NDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NDQge1xuICBtaW4td2lkdGg6IDU0NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU0NiB7XG4gIG1pbi13aWR0aDogNTQ2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTQ4IHtcbiAgbWluLXdpZHRoOiA1NDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NTAge1xuICBtaW4td2lkdGg6IDU1MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU1MiB7XG4gIG1pbi13aWR0aDogNTUycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTU0IHtcbiAgbWluLXdpZHRoOiA1NTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NTYge1xuICBtaW4td2lkdGg6IDU1NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU1OCB7XG4gIG1pbi13aWR0aDogNTU4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTYwIHtcbiAgbWluLXdpZHRoOiA1NjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NjIge1xuICBtaW4td2lkdGg6IDU2MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU2NCB7XG4gIG1pbi13aWR0aDogNTY0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTY2IHtcbiAgbWluLXdpZHRoOiA1NjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01Njgge1xuICBtaW4td2lkdGg6IDU2OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU3MCB7XG4gIG1pbi13aWR0aDogNTcwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTcyIHtcbiAgbWluLXdpZHRoOiA1NzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NzQge1xuICBtaW4td2lkdGg6IDU3NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU3NiB7XG4gIG1pbi13aWR0aDogNTc2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTc4IHtcbiAgbWluLXdpZHRoOiA1NzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01ODAge1xuICBtaW4td2lkdGg6IDU4MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU4MiB7XG4gIG1pbi13aWR0aDogNTgycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTg0IHtcbiAgbWluLXdpZHRoOiA1ODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01ODYge1xuICBtaW4td2lkdGg6IDU4NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU4OCB7XG4gIG1pbi13aWR0aDogNTg4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTkwIHtcbiAgbWluLXdpZHRoOiA1OTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OTIge1xuICBtaW4td2lkdGg6IDU5MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU5NCB7XG4gIG1pbi13aWR0aDogNTk0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTk2IHtcbiAgbWluLXdpZHRoOiA1OTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OTgge1xuICBtaW4td2lkdGg6IDU5OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTYwMCB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlubmVyLXRhYmxlIHtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_36__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 20551:
/*!*********************************************************************************!*\
  !*** ./src/app/purchase-order-request/purchase-order-request-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderRequestRoutingModule": () => (/* binding */ PurchaseOrderRequestRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/products.resolve */ 29147);
/* harmony import */ var _purchase_order_purchase_order_add_edit_purchase_order_by_id_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../purchase-order/purchase-order-add-edit/purchase-order-by-id.resolve */ 98408);
/* harmony import */ var _purchase_order_purchase_order_add_edit_purchase_order_tax_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../purchase-order/purchase-order-add-edit/purchase-order-tax.resolve */ 99117);
/* harmony import */ var _purchase_order_purchase_order_add_edit_purchase_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-order/purchase-order-add-edit/purchase-order-unit.resolve */ 78489);
/* harmony import */ var _purchase_order_purchase_order_add_edit_purchase_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../purchase-order/purchase-order-add-edit/purchase-order-warehouse.resolve */ 21798);
/* harmony import */ var _purchase_order_request_add_edit_purchase_order_request_add_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-order-request-add-edit/purchase-order-request-add-edit.component */ 14662);
/* harmony import */ var _purchase_order_request_list_purchase_order_request_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchase-order-request-list/purchase-order-request-list.component */ 8576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    {
        path: 'list',
        component: _purchase_order_request_list_purchase_order_request_list_component__WEBPACK_IMPORTED_MODULE_7__.PurchaseOrderRequestListComponent,
        data: { claimType: 'POR_VIEW_PO_REQUESTS' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }, {
        path: ':id',
        component: _purchase_order_request_add_edit_purchase_order_request_add_edit_component__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderRequestAddEditComponent,
        data: { claimType: ['POR_ADD_PO_REQUEST', 'POR_UPDATE_PO_REQUEST'] },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        resolve: {
            'units': _purchase_order_purchase_order_add_edit_purchase_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__.PurchaseOrderUnitResolver,
            'warehouses': _purchase_order_purchase_order_add_edit_purchase_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_5__.PurchaseOrderWarehouseResolver,
            'taxs': _purchase_order_purchase_order_add_edit_purchase_order_tax_resolve__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderTaxResolver,
            'purchaseorder': _purchase_order_purchase_order_add_edit_purchase_order_by_id_resolve__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderByIdResolver,
            'products': _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__.ProductsResolver
        }
    }
];
class PurchaseOrderRequestRoutingModule {
}
PurchaseOrderRequestRoutingModule.ɵfac = function PurchaseOrderRequestRoutingModule_Factory(t) { return new (t || PurchaseOrderRequestRoutingModule)(); };
PurchaseOrderRequestRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PurchaseOrderRequestRoutingModule });
PurchaseOrderRequestRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PurchaseOrderRequestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 31822:
/*!*************************************************************************!*\
  !*** ./src/app/purchase-order-request/purchase-order-request.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderRequestModule": () => (/* binding */ PurchaseOrderRequestModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _purchase_order_request_add_edit_purchase_order_request_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-order-request-add-edit/purchase-order-request-add-edit.component */ 14662);
/* harmony import */ var _purchase_order_request_list_purchase_order_request_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-order-request-list/purchase-order-request-list.component */ 8576);
/* harmony import */ var _purchase_order_request_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-order-request-routing.module */ 20551);
/* harmony import */ var _purchase_order_request_list_purchase_order_request_items_purchase_order_request_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-order-request-list/purchase-order-request-items/purchase-order-request-items.component */ 71822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);


























class PurchaseOrderRequestModule {
}
PurchaseOrderRequestModule.ɵfac = function PurchaseOrderRequestModule_Factory(t) { return new (t || PurchaseOrderRequestModule)(); };
PurchaseOrderRequestModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PurchaseOrderRequestModule });
PurchaseOrderRequestModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _purchase_order_request_routing_module__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderRequestRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_23__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_23__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PurchaseOrderRequestModule, { declarations: [_purchase_order_request_add_edit_purchase_order_request_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderRequestAddEditComponent,
        _purchase_order_request_list_purchase_order_request_list_component__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderRequestListComponent,
        _purchase_order_request_list_purchase_order_request_items_purchase_order_request_items_component__WEBPACK_IMPORTED_MODULE_4__.PurchaseOrderRequestItemsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _purchase_order_request_routing_module__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderRequestRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_23__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_23__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_purchase-order-request_purchase-order-request_module_ts.js.map