"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_purchase-order_purchase-order_module_ts"],{

/***/ 92684:
/*!*********************************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-add-edit/purchase-order-add-edit.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderAddEditComponent": () => (/* binding */ PurchaseOrderAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_supplier_resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/supplier-resource-parameter */ 32754);
/* harmony import */ var _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice-tax.pipe */ 76521);
/* harmony import */ var _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice.pipe */ 16695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/domain-classes/delivery-status-enum */ 3007);
/* harmony import */ var _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/domain-classes/purchase-order-status */ 12023);
/* harmony import */ var _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/domain-classes/purchase-order-resource-parameter */ 32667);
/* harmony import */ var _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/domain-classes/operator */ 22746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/supplier/supplier.service */ 35803);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _purchase_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../purchase-order.service */ 69822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/tax.service */ 36018);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var _core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @core/services/warehouse.service */ 78381);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-translate/core */ 87514);







































function PurchaseOrderAddEditComponent_mat_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderRequest_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", purchaseOrderRequest_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", purchaseOrderRequest_r13.orderNumber, " ");
} }
function PurchaseOrderAddEditComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function PurchaseOrderAddEditComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "PO_ORDER_NUMBER_IS_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_div_30_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r2.purchaseOrderForm.get("orderNumber").errors == null ? null : ctx_r2.purchaseOrderForm.get("orderNumber").errors.required);
} }
function PurchaseOrderAddEditComponent_div_38_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "ORDER_DATE_IS_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_div_38_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r3.purchaseOrderForm.get("poCreatedDate").errors == null ? null : ctx_r3.purchaseOrderForm.get("poCreatedDate").errors.required);
} }
function PurchaseOrderAddEditComponent_div_48_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_div_48_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r5.purchaseOrderForm.get("deliveryDate").errors == null ? null : ctx_r5.purchaseOrderForm.get("deliveryDate").errors.required);
} }
function PurchaseOrderAddEditComponent_mat_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", supplier_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", supplier_r17.supplierName, " ");
} }
function PurchaseOrderAddEditComponent_mat_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function PurchaseOrderAddEditComponent_div_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "SUPPLIER_NAME_IS_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_div_64_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.purchaseOrderForm.get("supplierId").errors == null ? null : ctx_r9.purchaseOrderForm.get("supplierId").errors.required);
} }
function PurchaseOrderAddEditComponent_tr_134_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PurchaseOrderAddEditComponent_tr_134_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r37); const i_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r35.onRemovePurchaseOrderItem(i_r20)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} }
function PurchaseOrderAddEditComponent_tr_134_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r38 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx_r22.langDir)("value", a_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", a_r38.name, " ");
} }
function PurchaseOrderAddEditComponent_tr_134_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "PRODUCT_IS_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_tr_134_div_11_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("productId").errors == null ? null : purchaseOrderItem_r19.get("productId").errors.required);
} }
function PurchaseOrderAddEditComponent_tr_134_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const warehouse_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", warehouse_r41.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", warehouse_r41.name, " ");
} }
function PurchaseOrderAddEditComponent_tr_134_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", a_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", a_r42.name, " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "UNIT_IS_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_tr_134_div_18_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("unitId").errors == null ? null : purchaseOrderItem_r19.get("unitId").errors.required);
} }
function PurchaseOrderAddEditComponent_tr_134_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE_IS_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "PRICE_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_tr_134_div_22_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, PurchaseOrderAddEditComponent_tr_134_div_22_div_2_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("unitPrice").errors == null ? null : purchaseOrderItem_r19.get("unitPrice").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("unitPrice").errors == null ? null : purchaseOrderItem_r19.get("unitPrice").errors.min);
} }
function PurchaseOrderAddEditComponent_tr_134_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "QUANTITY_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_tr_134_div_26_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, PurchaseOrderAddEditComponent_tr_134_div_26_div_2_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("quantity").errors == null ? null : purchaseOrderItem_r19.get("quantity").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("quantity").errors == null ? null : purchaseOrderItem_r19.get("quantity").errors.min);
} }
function PurchaseOrderAddEditComponent_tr_134_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "DISCOUNT_SHOULD_BE_MORE_THEN_0"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "DISCOUNT_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind3"](4, 6, purchaseOrderItem_r19.get("quantity").value, purchaseOrderItem_r19.get("unitPrice").value, purchaseOrderItem_r19.get("discountPercentage").value)), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", tax_r52.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"]("", tax_r52.name, " (", tax_r52.percentage, "%) ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "TAX_IS_REQUIRED"), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_tr_134_div_44_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("taxValue").errors == null ? null : purchaseOrderItem_r19.get("taxValue").errors.required);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function PurchaseOrderAddEditComponent_tr_134_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    const purchaseOrderItem_r19 = ctx_r55.$implicit;
    const i_r20 = ctx_r55.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "TAX_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBindV"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction5"](12, _c0, purchaseOrderItem_r19.get("quantity").value, purchaseOrderItem_r19.get("unitPrice").value, purchaseOrderItem_r19.get("discountPercentage").value, purchaseOrderItem_r19.get("taxValue").value, ctx_r34.taxsMap[i_r20]))), " ");
} }
function PurchaseOrderAddEditComponent_tr_134_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr", 57)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, PurchaseOrderAddEditComponent_tr_134_button_2_Template, 3, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "td")(4, "mat-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectionChange", function PurchaseOrderAddEditComponent_tr_134_Template_mat_select_selectionChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57); const i_r20 = restoredCtx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r56.onProductSelectionChange($event.value, i_r20)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, PurchaseOrderAddEditComponent_tr_134_mat_option_9_Template, 2, 3, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, PurchaseOrderAddEditComponent_tr_134_mat_option_10_Template, 3, 3, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, PurchaseOrderAddEditComponent_tr_134_div_11_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td")(13, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](14, PurchaseOrderAddEditComponent_tr_134_mat_option_14_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "td")(16, "mat-select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectionChange", function PurchaseOrderAddEditComponent_tr_134_Template_mat_select_selectionChange_16_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57); const i_r20 = restoredCtx.index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r58.onSelectionChange($event.value, i_r20)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](17, PurchaseOrderAddEditComponent_tr_134_mat_option_17_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](18, PurchaseOrderAddEditComponent_tr_134_div_18_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "td")(20, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PurchaseOrderAddEditComponent_tr_134_Template_input_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r59.onUnitPriceChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, PurchaseOrderAddEditComponent_tr_134_div_22_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "td")(24, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PurchaseOrderAddEditComponent_tr_134_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r60.onQuantityChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](26, PurchaseOrderAddEditComponent_tr_134_div_26_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](29, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](30, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "td")(32, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PurchaseOrderAddEditComponent_tr_134_Template_input_change_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r61.onDiscountChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](34, PurchaseOrderAddEditComponent_tr_134_div_34_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](37, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](38, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](39, PurchaseOrderAddEditComponent_tr_134_div_39_Template, 5, 10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "td")(41, "mat-select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectionChange", function PurchaseOrderAddEditComponent_tr_134_Template_mat_select_selectionChange_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r57); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r62.onTaxSelectionChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](43, PurchaseOrderAddEditComponent_tr_134_mat_option_43_Template, 2, 3, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](44, PurchaseOrderAddEditComponent_tr_134_div_44_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](47, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](48, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](49, PurchaseOrderAddEditComponent_tr_134_div_49_Template, 5, 18, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const purchaseOrderItem_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroupName", i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", (ctx_r10.purchaseOrderItemsArray == null ? null : ctx_r10.purchaseOrderItemsArray.controls.length) !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 28, "SELECT_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx_r10.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 30, "SEARCH_OTHER_PRODUCTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r10.filterProductsMap[i_r20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r10.filterProductsMap[i_r20].length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("productId").touched && purchaseOrderItem_r19.get("productId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx_r10.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r10.warehouseMap[i_r20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx_r10.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r10.unitsMap[i_r20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("unitId").touched && purchaseOrderItem_r19.get("unitId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](21, 32, "UNIT_PER_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("unitPrice").touched && purchaseOrderItem_r19.get("unitPrice").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](25, 34, "QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("quantity").touched && purchaseOrderItem_r19.get("quantity").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](29, 36, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](30, 38, purchaseOrderItem_r19.get("quantity").value, purchaseOrderItem_r19.get("unitPrice").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](33, 41, "DISCOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("discountPercentage").errors == null ? null : purchaseOrderItem_r19.get("discountPercentage").errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](37, 43, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind3"](38, 45, purchaseOrderItem_r19.get("quantity").value, purchaseOrderItem_r19.get("unitPrice").value, purchaseOrderItem_r19.get("discountPercentage").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("discountPercentage").value != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](42, 49, "TAX"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx_r10.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r10.taxsMap[i_r20]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("taxValue").touched && purchaseOrderItem_r19.get("taxValue").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](47, 51, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBindV"](48, 53, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction5"](59, _c0, purchaseOrderItem_r19.get("quantity").value, purchaseOrderItem_r19.get("unitPrice").value, purchaseOrderItem_r19.get("discountPercentage").value, purchaseOrderItem_r19.get("taxValue").value, ctx_r10.taxsMap[i_r20]))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", purchaseOrderItem_r19.get("taxValue").value);
} }
function PurchaseOrderAddEditComponent_button_168_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PurchaseOrderAddEditComponent_button_168_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r63.onPurchaseOrderSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 1, "SAVE"), "");
} }
function PurchaseOrderAddEditComponent_div_173_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "mat-spinner");
} }
function PurchaseOrderAddEditComponent_div_173_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, PurchaseOrderAddEditComponent_div_173_mat_spinner_1_Template, 1, 0, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r12.isLoading);
} }
const _c1 = function () { return ["PO_ADD_PO", "PO_UPDATE_PO", "POR_CONVERT_TO_PO"]; };
const _c2 = function () { return ["/purchase-order/list"]; };
class PurchaseOrderAddEditComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent {
    constructor(fb, supplierService, toastrService, purchaseOrderService, router, translationService, commonService, taxService, productService, route, quantitiesUnitPricePipe, quantitiesUnitPriceTaxPipe, warehouseService) {
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
        this.warehouseService = warehouseService;
        this.products = [];
        this.suppliers = [];
        this.warehouseList = [];
        this.isLoading = false;
        this.isSupplierLoading = false;
        this.filterProductsMap = {};
        this.unitsMap = {};
        this.warehouseMap = {};
        this.unitConversationlist = [];
        this.taxsMap = {};
        this.totalBeforeDiscount = 0;
        this.totalAfterDiscount = 0;
        this.totalDiscount = 0;
        this.grandTotal = 0;
        this.totalTax = 0;
        this.isEdit = false;
        this.purchaseOrderRequestList = [];
        this.getLangDir();
        this.supplierResource = new _core_domain_classes_supplier_resource_parameter__WEBPACK_IMPORTED_MODULE_1__.SupplierResourceParameter();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ProductResourceParameter();
        this.purchaseOrderResource = new _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_7__.PurchaseOrderResourceParameter();
        this.purchaseOrderResource.pageSize = 50;
        this.purchaseOrderResource.orderBy = 'poCreatedDate asc';
        this.purchaseOrderResource.isPurchaseOrderRequest = true;
    }
    get purchaseOrderItemsArray() {
        return this.purchaseOrderForm.get('purchaseOrderItems');
    }
    ngOnInit() {
        this.unitConversationlist = [...this.route.snapshot.data['units']];
        this.warehouseList = [...this.route.snapshot.data['warehouses']];
        this.createPurchaseOrder();
        this.getPurchaseOrderRequest();
        this.supplierNameChangeValue();
        this.getNewPurchaseOrderNumber();
        this.getPurchaseOrderRequestList();
        this.getPurchaseOrderRequestChange();
        this.getPurchaseOrderRequestIdChange();
        this.getTaxes();
        this.getProductByBarCodeValue();
    }
    getPurchaseOrderRequestChange() {
        this.purchaseOrderForm.get('purchaseOrderRequestOrderNumber').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)()).subscribe(c => {
            this.purchaseOrderResource.orderNumber = c;
            this.getPurchaseOrderRequestList();
        });
    }
    getPurchaseOrderRequestIdChange() {
        this.purchaseOrderForm.get('purchaseOrderRequestId').valueChanges
            .subscribe(c => {
            this.getPurchaseOrderRequestById(c);
            // this.purchaseOrderResource.orderNumber='';
            // this.getPurchaseOrderRequestList();
        });
    }
    getPurchaseOrderRequestList() {
        this.purchaseOrderService.getAllPurchaseOrder(this.purchaseOrderResource)
            .subscribe((resp) => {
            if (resp && resp.headers) {
                const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
                this.purchaseOrderRequestList = [...resp.body];
            }
        });
    }
    getTaxes() {
        this.taxes$ = this.taxService.entities$;
    }
    getPurchaseOrderRequest() {
        this.sub$.sink = this.route.queryParamMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)((params) => params.get('purchase-order-requestId'))).subscribe(c => {
            if (c)
                this.getPurchaseOrderRequestById(c);
        });
    }
    getPurchaseOrderRequestById(id) {
        this.purchaseOrderService.getPurchaseOrderById(id)
            .subscribe((c) => {
            if (c) {
                this.purchaseOrderForm.patchValue({
                    purchaseOrderRequestOrderNumber: '',
                    filerSupplier: '',
                    deliveryDate: c.deliveryDate,
                    poCreatedDate: c.poCreatedDate,
                    deliveryStatus: c.deliveryStatus,
                    supplierId: c.supplierId,
                    note: c.note,
                    termAndCondition: c.termAndCondition
                });
                this.clearFormArray();
                c.purchaseOrderItems.forEach(item => {
                    this.purchaseOrderItemsArray.push(this.createPurchaseOrderItemPatch(this.purchaseOrderItemsArray.length, item));
                });
                this.supplierResource.id = c.supplierId;
                this.supplierService.getSuppliers(this.supplierResource)
                    .subscribe(resp => {
                    if (resp && resp.headers) {
                        this.suppliers = [...resp.body];
                    }
                });
                this.getAllTotal();
            }
        });
    }
    clearFormArray() {
        while (this.purchaseOrderItemsArray.length !== 0) {
            this.purchaseOrderItemsArray.removeAt(0);
        }
    }
    createPurchaseOrder() {
        this.route.data
            .pipe()
            .subscribe((purchaseOrderData) => {
            this.purchaseOrder = purchaseOrderData.purchaseorder;
            if (this.purchaseOrder) {
                this.isEdit = true;
                this.purchaseOrderForm = this.fb.group({
                    purchaseOrderRequestId: [{ value: '', disabled: true }],
                    purchaseOrderRequestOrderNumber: [{ value: '', disabled: true }],
                    orderNumber: [{ value: this.purchaseOrder.orderNumber, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
                    filerSupplier: [''],
                    deliveryDate: [this.purchaseOrder.deliveryDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
                    poCreatedDate: [this.purchaseOrder.poCreatedDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
                    deliveryStatus: [this.purchaseOrder.deliveryStatus],
                    supplierId: [this.purchaseOrder.supplierId, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
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
                    purchaseOrderRequestId: [''],
                    purchaseOrderRequestOrderNumber: [''],
                    orderNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
                    filerSupplier: [''],
                    deliveryDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
                    poCreatedDate: [new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
                    deliveryStatus: [1],
                    supplierId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
                    note: [''],
                    filterBarCodeValue: [''],
                    termAndCondition: [''],
                    purchaseOrderItems: this.fb.array([])
                });
                this.purchaseOrderItemsArray.push(this.createPurchaseOrderItem(this.purchaseOrderItemsArray.length));
            }
        });
    }
    getProductByBarCodeValue() {
        this.sub$.sink = this.purchaseOrderForm.get('filterBarCodeValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(c => {
            if (c) {
                this.productResource.barcode = c;
                return this.productService.getProducts(this.productResource);
            }
            {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)([]);
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
    onAddAnotherProduct() {
        this.purchaseOrderItemsArray.push(this.createPurchaseOrderItem(this.purchaseOrderItemsArray.length));
    }
    createPurchaseOrderItemPatch(index, purchaseOrderItem) {
        const taxs = purchaseOrderItem.purchaseOrderItemTaxes.map(c => c.taxId);
        const formGroup = this.fb.group({
            productId: [purchaseOrderItem.productId, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            filterProductValue: [''],
            unitPrice: [purchaseOrderItem.unitPrice, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            quantity: [purchaseOrderItem.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            taxValue: [taxs],
            unitId: [purchaseOrderItem.unitId, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
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
            productId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            filterProductValue: [''],
            unitPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.min(0)]],
            quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.min(1)]],
            taxValue: [null],
            unitId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            warehouseId: [''],
            discountPercentage: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.min(0)]]
        });
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        this.warehouseMap[index] = this.warehouseList;
        this.filterProductsMap[index.toString()] = [...this.route.snapshot.data['products']];
        this.getProductByNameValue(formGroup, index);
        return formGroup;
    }
    getProductByNameValue(formGroup, index) {
        if (this.purchaseOrder) {
            this.getProducts(index);
        }
        this.sub$.sink = formGroup.get('filterProductValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(c => {
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
        this.purchaseOrderItemsArray.controls.forEach((c, index) => {
            const productId = c.get('productId').value;
            if (productId) {
                this.purchaseOrder.purchaseOrderItems.map(pi => {
                    if (pi.product.id === productId) {
                        if (this.products.find(c => c.id === productId)) {
                            this.getProducts(index);
                        }
                        else {
                            this.getProducts(index, productId);
                        }
                    }
                });
            }
            else {
                this.getProducts(index);
            }
        });
        this.getAllTotal();
    }
    getProducts(index, productId) {
        if (this.products.length === 0 || productId) {
            this.productResource.name = '';
            this.productResource.id = productId ? productId : '';
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
    setWarehouseForProduct(id, index) {
        this.warehouseMap[index] = id ? this.warehouseList.filter(c => c.id == id) : this.warehouseList;
    }
    onSelectionChange(unitId, index, isFromUI = true) {
        const productId = this.purchaseOrderItemsArray.controls[index].get('productId').value;
        const product = this.filterProductsMap[index].find(c => c.id === productId);
        const unit = this.unitConversationlist.find(c => c.id === unitId);
        let price = 0;
        if (unit.value) {
            switch (unit.operator) {
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_8__.Operators.Plush:
                    price = product.purchasePrice + parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_8__.Operators.Minus:
                    price = product.purchasePrice - parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_8__.Operators.Multiply:
                    price = product.purchasePrice * parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_8__.Operators.Divide:
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
        //this.setWarehouseForProduct(product.warehouseId, index);
        if (isFromUI) {
            this.purchaseOrderItemsArray.controls[index].patchValue({
                filterProductValue: ''
            });
        }
        else {
            this.purchaseOrderItemsArray.controls[index].patchValue({
                productId: productId,
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
            this.purchaseOrderService.getNewPurchaseOrderNumber(true)
                .subscribe(purchaseOrder => {
                this.purchaseOrderForm.patchValue({
                    orderNumber: purchaseOrder.orderNumber
                });
            });
        }
    }
    supplierNameChangeValue() {
        this.sub$.sink = this.purchaseOrderForm.get('filerSupplier').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.tap)(c => this.isSupplierLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.switchMap)(c => {
            this.supplierResource.supplierName = c;
            this.supplierResource.id = null;
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
            this.supplierResource.id = null;
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
            if (this.purchaseOrder && this.purchaseOrder.purchaseOrderStatus === _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderStatusEnum.Return) {
                this.toastrService.error(this.translationService.getValue('RETURN_PURCHASE_ORDER_CANT_BE_EDITED'));
                return;
            }
            this.isLoading = true;
            const purchaseOrder = this.buildPurchaseOrder();
            if (purchaseOrder.id) {
                this.purchaseOrderService.updatePurchaseOrder(purchaseOrder)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success(this.translationService.getValue('PURCHASE_ORDER_UPDATED_SUCCESSFULLY'));
                    this.router.navigate(['/purchase-order/list']);
                }, (err) => {
                    this.isLoading = false;
                });
            }
            else {
                this.purchaseOrderService.addPurchaseOrder(purchaseOrder)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success(this.translationService.getValue('PURCHASE_ORDER_ADDED_SUCCESSFULLY'));
                    this.router.navigate(['/purchase-order/list']);
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
            deliveryStatus: _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_5__.DeliveryStatusEnum.UnDelivery,
            isPurchaseOrderRequest: false,
            poCreatedDate: this.purchaseOrderForm.get('poCreatedDate').value,
            purchaseOrderStatus: _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderStatusEnum.Not_Return,
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
PurchaseOrderAddEditComponent.ɵfac = function PurchaseOrderAddEditComponent_Factory(t) { return new (t || PurchaseOrderAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_22__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_9__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_26__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_purchase_order_service__WEBPACK_IMPORTED_MODULE_10__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_12__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_tax_service__WEBPACK_IMPORTED_MODULE_13__.TaxService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_14__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_3__.QuantitiesUnitPricePipe), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_2__.QuantitiesUnitPriceTaxPipe), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_15__.WarehouseService)); };
PurchaseOrderAddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: PurchaseOrderAddEditComponent, selectors: [["app-purchase-order-add-edit"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵProvidersFeature"]([], [_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_3__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_2__.QuantitiesUnitPriceTaxPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 174, vars: 132, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["autocomplete", "off", 3, "formGroup"], [1, "row"], [1, "col-md-3"], [1, "form-group"], ["formControlName", "purchaseOrderRequestId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "purchaseOrderRequestOrderNumber", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [1, "text-danger"], ["formControlName", "orderNumber", "type", "text", 1, "form-control", "w-100", 3, "readonly"], [4, "ngIf"], ["for", "poCreatedDate", 1, "text-danger"], ["id", "poCreatedDate", "formControlName", "poCreatedDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["poCreatedDate", ""], ["for", "deliveryDate", 1, "text-danger"], ["id", "deliveryDate", "formControlName", "deliveryDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["deliveryDate", ""], [1, "input-group"], ["formControlName", "supplierId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filerSupplier", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [1, "col-md-6"], ["formControlName", "termAndCondition", 1, "form-control", "w-100"], ["formControlName", "note", 1, "form-control", "w-100"], [1, "col-sm-6", "col-md-6"], ["formControlName", "filterBarCodeValue", "type", "text", 1, "form-control", "w-100", 3, "placeholder"], ["formArrayName", "purchaseOrderItems", 1, "col-sm-12"], [1, "col-sm-12", "text-right", "mb-2"], ["type", "button", 1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], [1, "col"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "table-sm"], [1, "table-column-50"], [1, "table-column-200"], [1, "table-column-150"], [1, "table-column-130"], [1, "table-column-120"], [1, "table-column-100"], [1, "table-column-300"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-10", "text-right", "font-weight-bold"], [1, "col-2", "text-left", "font-weight-bold"], [1, "col-2", "text-left", "text-danger", "font-weight-bold"], [1, "col-12"], [1, "col-md-12", "mb-1"], ["type", "button", "class", "btn btn-success btn-sm m-right-10", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "routerLink"], [1, "fas", "fa-times-circle"], ["class", "loading-shade", 4, "ngIf"], [3, "value"], ["class", "text-danger", 4, "ngIf"], [3, "formGroupName"], ["type", "button", "mat-icon-button", "", "aria-label", "Action", 3, "click", 4, "ngIf"], ["formControlName", "productId", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["formControlName", "filterProductValue", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value", 4, "ngFor", "ngForOf"], ["placeholder", "Select Warehouse", "formControlName", "warehouseId", 1, "form-control", 3, "dir"], ["formControlName", "unitId", 1, "form-control", 3, "dir", "selectionChange"], ["type", "number", "formControlName", "unitPrice", 1, "form-control", 3, "placeholder", "change"], ["type", "number", "formControlName", "quantity", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "discountPercentage", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "taxValue", "multiple", "", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["type", "button", "mat-icon-button", "", "aria-label", "Action", 3, "click"], [1, "btn-danger"], [3, "dir", "value"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], [1, "loading-shade"]], template: function PurchaseOrderAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "form", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, PurchaseOrderAddEditComponent_mat_option_19_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](20, PurchaseOrderAddEditComponent_mat_option_20_Template, 3, 3, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 5)(22, "div", 6)(23, "div", 7)(24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](30, PurchaseOrderAddEditComponent_div_30_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 6)(32, "div", 7)(33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, PurchaseOrderAddEditComponent_div_38_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](39, "owl-date-time", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 6)(42, "div", 7)(43, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](46, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](48, PurchaseOrderAddEditComponent_div_48_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](49, "owl-date-time", 17, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](51, "div", 6)(52, "div", 7)(53, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "div", 22)(57, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](59, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](61, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](62, PurchaseOrderAddEditComponent_mat_option_62_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](63, PurchaseOrderAddEditComponent_mat_option_63_Template, 3, 3, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](64, PurchaseOrderAddEditComponent_div_64_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 5)(66, "div", 25)(67, "div", 7)(68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](71, "div", 22)(72, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](73, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "div", 25)(75, "div", 7)(76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](79, "div", 22)(80, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](81, "          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](82, "div", 5)(83, "div", 28)(84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](87, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](89, "div", 5)(90, "div", 30)(91, "div", 5)(92, "div", 31)(93, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PurchaseOrderAddEditComponent_Template_button_click_93_listener() { return ctx.onAddAnotherProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](94, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](97, "div", 5)(98, "div", 34)(99, "div", 35)(100, "table", 36)(101, "tr")(102, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](103, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](104, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](107, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](110, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](113, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](116, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](119, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](122, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](125, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](127, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](128, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](131, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](133, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](134, PurchaseOrderAddEditComponent_tr_134_Template, 50, 65, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](135, "div", 45)(136, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](138, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](139, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](141, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](142, "div", 5)(143, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](145, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](146, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](148, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](149, "div", 5)(150, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](152, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](153, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](155, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](156, "div", 5)(157, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](158, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](159, "div", 5)(160, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](163, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](165, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](166, "div", 5)(167, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](168, PurchaseOrderAddEditComponent_button_168_Template, 4, 3, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](169, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](170, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](172, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](173, PurchaseOrderAddEditComponent_div_173_Template, 2, 1, "div", 54);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](40);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 58, "MANAGE_PURCHASE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.purchaseOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 60, "SELECT_PURCHASE_ORDER_REQUEST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 62, "SEARCH_PURCHASE_ORDER_REQUEST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](17, 64, "SEARCH_PURCHASE_ORDER_REQUEST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.purchaseOrderRequestList);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.purchaseOrderRequestList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](26, 66, "PO_NUMBER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("readonly", ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForm.get("orderNumber").touched && ctx.purchaseOrderForm.get("orderNumber").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](35, 68, "ORDER_DATE"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](37, 70, "DELIVERY_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("owlDateTimeTrigger", _r4)("owlDateTime", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForm.get("poCreatedDate").touched && ctx.purchaseOrderForm.get("poCreatedDate").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](45, 72, "DELIVERY_DATE"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](47, 74, "DELIVERY_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("owlDateTimeTrigger", _r6)("owlDateTime", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForm.get("deliveryDate").touched && ctx.purchaseOrderForm.get("deliveryDate").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](55, 76, "SUPPLIER_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](58, 78, "SELECT_SUPPLIER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](60, 80, "SEARCH_OTHER_SUPPLIERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.suppliers);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.suppliers.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForm.get("supplierId").touched && ctx.purchaseOrderForm.get("supplierId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](70, 82, "TERM_AND_CONDITION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](78, 84, "NOTES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](86, 86, "SCAN_BARCODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](88, 88, "SCAN_BARCODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](96, 90, "ADD_ANOTHER_PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](106, 92, "PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](109, 94, "WAREHOUSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](112, 96, "UNIT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](115, 98, "PRICE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](118, 100, "QUANTITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](121, 102, "SUBTOTAL_BEFORE_DISCOUNT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](124, 104, "DISCOUNT"), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](127, 106, "SUBTOTAL_AFTER_DISCOUNT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](130, 108, "TAX"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](133, 110, "TOTAL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.purchaseOrderItemsArray == null ? null : ctx.purchaseOrderItemsArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](138, 112, "SUB_TOTAL_BEFORE_DISCOUNT"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](141, 114, ctx.totalBeforeDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](145, 116, "TOTAL_DISCOUNT"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](148, 118, ctx.totalDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](152, 120, "TOTAL_TAX"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](155, 122, ctx.totalTax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](162, 124, "GRAND_TOTAL"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](165, 126, ctx.grandTotal), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](130, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](131, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](172, 128, "CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormArrayName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_16__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_31__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__.MatProgressSpinner, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_35__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_35__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_35__.OwlDateTimeComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_36__.MatDivider, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_17__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_37__.TranslatePipe, _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_3__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_2__.QuantitiesUnitPriceTaxPipe], styles: [".hr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #2095F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLWFkZC1lZGl0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQUIlMjBQT1NcXEZyb250ZW5kXFxzcmNcXGFwcFxccHVyY2hhc2Utb3JkZXJcXHB1cmNoYXNlLW9yZGVyLWFkZC1lZGl0XFxwdXJjaGFzZS1vcmRlci1hZGQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoicHVyY2hhc2Utb3JkZXItYWRkLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjA5NUYzO1xyXG59IiwiLmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMDk1RjM7XG59Il19 */"] });


/***/ }),

/***/ 24109:
/*!*****************************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-detail/purchase-order-detail.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderDetailComponent": () => (/* binding */ PurchaseOrderDetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _purchase_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../purchase-order.service */ 69822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _shared_purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/purchase-order-invoice/purchase-order-invoice.component */ 92552);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/paymentMethod.pipe */ 57432);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/pipes/purchase-order-paymentStatus.pipe */ 80443);


















function PurchaseOrderDetailComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "PURCHASE_ORDER_REQUEST"), "#", ctx_r0.purchaseOrder == null ? null : ctx_r0.purchaseOrder.orderNumber, "");
} }
function PurchaseOrderDetailComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 2, "PURCHASE_ORDER"), "#", ctx_r1.purchaseOrder == null ? null : ctx_r1.purchaseOrder.orderNumber, "");
} }
function PurchaseOrderDetailComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 2)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PurchaseOrderDetailComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r6.generateInvoice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 1, "GENERATE_INVOICE"), " ");
} }
function PurchaseOrderDetailComponent_ng_container_8_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r8.purchaseOrder == null ? null : ctx_r8.purchaseOrder.supplier == null ? null : ctx_r8.purchaseOrder.supplier.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r8.purchaseOrder == null ? null : ctx_r8.purchaseOrder.supplier == null ? null : ctx_r8.purchaseOrder.supplier.email);
} }
function PurchaseOrderDetailComponent_ng_container_8_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r9.companyProfile.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r9.companyProfile.email);
} }
function PurchaseOrderDetailComponent_ng_container_8_tr_93_ng_container_1_span_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PurchaseOrderDetailComponent_ng_container_8_tr_93_ng_container_1_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PurchaseOrderDetailComponent_ng_container_8_tr_93_ng_container_1_span_19_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r20 = ctx.$implicit;
    const last_r21 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", tax_r20.taxName, "(", tax_r20.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !last_r21);
} }
function PurchaseOrderDetailComponent_ng_container_8_tr_93_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, PurchaseOrderDetailComponent_ng_container_8_tr_93_ng_container_1_span_19_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const i_r17 = ctx_r23.index;
    const purchaseItem_r16 = ctx_r23.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](i_r17 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](purchaseItem_r16.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 9, purchaseItem_r16.unitPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", purchaseItem_r16.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("(", purchaseItem_r16 == null ? null : purchaseItem_r16.unitConversation == null ? null : purchaseItem_r16.unitConversation.name, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 11, purchaseItem_r16.discount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 13, purchaseItem_r16.taxValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", purchaseItem_r16.purchaseOrderItemTaxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 15, (purchaseItem_r16 == null ? null : purchaseItem_r16.quantity) * (purchaseItem_r16 == null ? null : purchaseItem_r16.unitPrice) - purchaseItem_r16.discount + purchaseItem_r16.taxValue), " ");
} }
function PurchaseOrderDetailComponent_ng_container_8_tr_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PurchaseOrderDetailComponent_ng_container_8_tr_93_ng_container_1_Template, 23, 17, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseItem_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", purchaseItem_r16.status == 0);
} }
function PurchaseOrderDetailComponent_ng_container_8_tr_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 40)(1, "td", 41)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 1, "RETURNED_ITEMS"));
} }
function PurchaseOrderDetailComponent_ng_container_8_tr_95_span_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function PurchaseOrderDetailComponent_ng_container_8_tr_95_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, PurchaseOrderDetailComponent_ng_container_8_tr_95_span_20_span_2_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r27 = ctx.$implicit;
    const last_r28 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", tax_r27.taxName, "(", tax_r27.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !last_r28);
} }
function PurchaseOrderDetailComponent_ng_container_8_tr_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 40)(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, PurchaseOrderDetailComponent_ng_container_8_tr_95_span_20_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const purchaseItem_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](i_r25 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](purchaseItem_r24.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 9, purchaseItem_r24.unitPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", -1 * purchaseItem_r24.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("(", purchaseItem_r24 == null ? null : purchaseItem_r24.unitConversation == null ? null : purchaseItem_r24.unitConversation.name, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 11, -1 * purchaseItem_r24.discount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 13, -1 * purchaseItem_r24.taxValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", purchaseItem_r24.purchaseOrderItemTaxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 15, -1 * ((purchaseItem_r24 == null ? null : purchaseItem_r24.quantity) * (purchaseItem_r24 == null ? null : purchaseItem_r24.unitPrice) - purchaseItem_r24.discount + purchaseItem_r24.taxValue)), " ");
} }
function PurchaseOrderDetailComponent_ng_container_8_div_123_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "paymentmethod");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const purchaseItempayments_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 4, purchaseItempayments_r31.paymentDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 7, purchaseItempayments_r31.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](purchaseItempayments_r31.referenceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 9, purchaseItempayments_r31.paymentMethod));
} }
function PurchaseOrderDetailComponent_ng_container_8_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 16)(10, "table", 42)(11, "thead", 18)(12, "tr")(13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, PurchaseOrderDetailComponent_ng_container_8_div_123_tr_26_Template, 12, 11, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 6, "PURCHASE_ORDER_PAYMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 8, "PAYMENT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 10, "AMOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 12, "REFERENCE_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 14, "PAID_BY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r13.purchaseOrder.purchaseOrderPayments);
} }
function PurchaseOrderDetailComponent_ng_container_8_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 9)(10, "div", 43)(11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "br")(14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 2, "TERMS_AND_CONDITION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r14.purchaseOrder == null ? null : ctx_r14.purchaseOrder.termAndCondition, "");
} }
function PurchaseOrderDetailComponent_ng_container_8_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 9)(10, "div", 43)(11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "br")(14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 2, "NOTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r15.purchaseOrder == null ? null : ctx_r15.purchaseOrder.note, "");
} }
const _c0 = function (a0, a1, a2) { return { "badge-success": a0, "badge-danger": a1, "badge-warning": a2 }; };
function PurchaseOrderDetailComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "br")(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, PurchaseOrderDetailComponent_ng_container_8_ng_container_18_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "div", 14)(21, "div", 11)(22, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "br")(30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, PurchaseOrderDetailComponent_ng_container_8_ng_container_36_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "div", 14)(39, "div", 11)(40, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](50, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](51, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](57, "paymentStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](58, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 0)(60, "div", 1)(61, "div", 2)(62, "div", 3)(63, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](66, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "div", 16)(68, "table", 17)(69, "thead", 18)(70, "tr")(71, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](76, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](88, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](91, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](92, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, PurchaseOrderDetailComponent_ng_container_8_tr_93_Template, 2, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, PurchaseOrderDetailComponent_ng_container_8_tr_94_Template, 5, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, PurchaseOrderDetailComponent_ng_container_8_tr_95_Template, 24, 17, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "tr")(97, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](102, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](105, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](106, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](108, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "tr")(110, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](112, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](115, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "tr")(117, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](122, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](123, PurchaseOrderDetailComponent_ng_container_8_div_123_Template, 27, 16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](124, PurchaseOrderDetailComponent_ng_container_8_div_124_Template, 15, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](125, PurchaseOrderDetailComponent_ng_container_8_div_125_Template, 15, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "div", 9)(127, "div", 32)(128, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function PurchaseOrderDetailComponent_ng_container_8_Template_button_click_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r32.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](129, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](131, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 44, "SUPPLIER_ADDRESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.supplier == null ? null : ctx_r3.purchaseOrder.supplier.supplierName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.supplier == null ? null : ctx_r3.purchaseOrder.supplier.billingAddress.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 46, "PHONE"), ": ", ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.supplier == null ? null : ctx_r3.purchaseOrder.supplier.mobileNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 48, "EMAIL"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.supplier == null ? null : ctx_r3.purchaseOrder.supplier.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 50, "COMPANY_PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.companyProfile.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.companyProfile.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](32, 52, "PHONE"), ": ", ctx_r3.companyProfile.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 54, "EMAIL"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.companyProfile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](42, 56, "REFERENCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.orderNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](48, 58, "DATE"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](50, 60, ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.poCreatedDate, "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](54, 63, "PAYMENT_STATUS"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](101, _c0, (ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.paymentStatus) == 0, (ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.paymentStatus) == 1, (ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.paymentStatus) == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](57, 65, ctx_r3.purchaseOrder == null ? null : ctx_r3.purchaseOrder.paymentStatus), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](65, 67, "PURCHASE_ORDER_ITEMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](73, 69, "NO."));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](76, 71, "DESCRIPTION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](79, 73, "UNIT_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](82, 75, "QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](85, 77, "DISCOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](88, 79, "TAX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](91, 81, "TOTAL_AMOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.purchaseOrderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.purchaseOrderReturnsItems.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r3.purchaseOrderReturnsItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](99, 83, "TOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](102, 85, ctx_r3.purchaseOrder.totalDiscount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](105, 87, ctx_r3.purchaseOrder.totalTax));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](108, 89, ctx_r3.purchaseOrder.totalAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](112, 91, "PAID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](115, 93, ctx_r3.purchaseOrder.totalPaidAmount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](119, 95, "BALANCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](122, 97, ctx_r3.purchaseOrder.totalAmount - ctx_r3.purchaseOrder.totalPaidAmount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.purchaseOrder.purchaseOrderPayments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.purchaseOrder.termAndCondition);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.purchaseOrder.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](131, 99, "CANCEL"), " ");
} }
function PurchaseOrderDetailComponent_div_9_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-spinner");
} }
function PurchaseOrderDetailComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, PurchaseOrderDetailComponent_div_9_mat_spinner_1_Template, 1, 0, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r4.isLoading);
} }
function PurchaseOrderDetailComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-purchase-order-invoice", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("purchaseOrder", ctx_r5.purchaseOrderForInvoice);
} }
const _c1 = function () { return ["PO_GENERATE_INVOICE", "POR_GENERATE_INVOICE"]; };
class PurchaseOrderDetailComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(purchaseOrderService, routes, clonerService, toastrService, securityService, location, translationService) {
        super(translationService);
        this.purchaseOrderService = purchaseOrderService;
        this.routes = routes;
        this.clonerService = clonerService;
        this.toastrService = toastrService;
        this.securityService = securityService;
        this.location = location;
        this.translationService = translationService;
        this.currentDate = new Date();
        this.quantitesErrormsg = '';
        this.errorMsg = '';
        this.isLoading = false;
        this.isquatation = false;
        this.purchaseOrder = null;
    }
    ngOnInit() {
        this.getSupplierOrderById();
        this.subScribeCompanyProfile();
    }
    getSupplierOrderById() {
        this.sub$.sink = this.routes.params.subscribe((c) => {
            this.getPurchaseOrderById(c['id']);
        });
    }
    subScribeCompanyProfile() {
        this.securityService.companyProfile.subscribe(data => {
            this.companyProfile = data;
        });
    }
    getPurchaseOrderById(id) {
        this.isLoading = true;
        this.purchaseOrderService.getPurchaseOrderById(id)
            .subscribe((c) => {
            // this.purchaseOrder=isquatation
            this.purchaseOrder = this.clonerService.deepClone(c);
            this.purchaseOrder.totalQuantity = this.purchaseOrder.purchaseOrderItems.map(item => item.status == 1 ? -1 * item.quantity : item.quantity).reduce((prev, next) => prev + next);
            this.purchaseOrderItems = this.purchaseOrder.purchaseOrderItems.filter(c => c.status == 0);
            this.purchaseOrderReturnsItems = this.purchaseOrder.purchaseOrderItems.filter(c => c.status == 1);
            this.isLoading = false;
        }, (err) => {
            this.isLoading = false;
        });
    }
    generateInvoice() {
        let poForInvoice = this.clonerService.deepClone(this.purchaseOrder);
        poForInvoice.purchaseOrderItems.map(c => {
            var _a;
            c.unitName = (_a = c.unitConversation) === null || _a === void 0 ? void 0 : _a.name;
            return c;
        });
        this.purchaseOrderForInvoice = poForInvoice;
    }
    // calulateTax() {
    //   const totalQuantity = this.purchaseOrder.totalQuantity;
    //   const unitPrice = this.purchaseOrder.pricePerUnit;;
    //   const tax = this.purchaseOrder.tax;
    //   const totalAmountWithTax = totalQuantity * unitPrice;
    //   let totalAmount = 0;
    //   if (tax && tax !== 0) {
    //     totalAmount = totalAmountWithTax + (totalAmountWithTax * tax) / 100;
    //     totalAmount = parseFloat(totalAmount.toFixed(2));
    //   } else {
    //     if (totalAmountWithTax) {
    //       totalAmount = totalAmountWithTax;
    //     } else {
    //       totalAmount = 0;
    //     }
    //   }
    //   return totalAmount;
    // }
    // downloadAttachment(attachement: PurchaseOrderAttachment) {
    //   this.sub$.sink = this.purchaseOrderService.downloadAttachment(attachement.id)
    //     .subscribe(
    //       (event) => {
    //         if (event.type === HttpEventType.Response) {
    //           this.downloadFile(event, attachement.name);
    //         }
    //       },
    //       (error) => {
    //         this.toastrService.error(this.translationService.getValue('ERROR_WHILE_DOWNLOADING_DOCUMENT'));
    //       }
    //     );
    // }
    downloadFile(data, name) {
        const downloadedFile = new Blob([data.body], { type: data.body.type });
        const a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        a.download = name;
        a.href = URL.createObjectURL(downloadedFile);
        a.target = '_blank';
        a.click();
        document.body.removeChild(a);
    }
    cancel() {
        this.location.back();
    }
}
PurchaseOrderDetailComponent.ɵfac = function PurchaseOrderDetailComponent_Factory(t) { return new (t || PurchaseOrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_purchase_order_service__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_2__.ClonerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_3__.SecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService)); };
PurchaseOrderDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: PurchaseOrderDetailComponent, selectors: [["app-purchase-order-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 11, vars: 7, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [4, "ngIf"], ["class", "col-md-auto col-sm-auto", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-receipt"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], [1, ""], [1, "clearfix"], [1, "col-md-4"], [1, "badge-pill", 3, "ngClass"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "table-striped", "table-sm"], [1, "head"], [2, "width", "1%"], [2, "width", "20%"], [2, "width", "3%"], [2, "width", "2%"], [2, "width", "5%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], ["class", "bg-warning1", 4, "ngIf"], ["class", "bg-warning1", 4, "ngFor", "ngForOf"], ["colspan", "4", 1, "text-right", "total"], [1, "text-right", "total"], [1, "total"], ["colspan", "6", 1, "text-right", "total"], [1, "col-md-12", "mb-1"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], [3, "href"], [2, "text-align", "center"], [1, "text-right"], [2, "font-size", "10px"], ["style", "font-size: 10px;", 4, "ngFor", "ngForOf"], [1, "bg-warning1"], ["colspan", "100%", 1, "no-border"], [1, "table", "table-bordered", "table-hover", "table-sm", 2, "width", "50%"], [1, "col-sm-12"], [1, "loading-shade"], [3, "purchaseOrder"]], template: function PurchaseOrderDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, PurchaseOrderDetailComponent_h1_4_Template, 3, 4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, PurchaseOrderDetailComponent_h1_5_Template, 3, 4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, PurchaseOrderDetailComponent_div_6_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, PurchaseOrderDetailComponent_ng_container_8_Template, 132, 105, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, PurchaseOrderDetailComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, PurchaseOrderDetailComponent_ng_container_10_Template, 2, 1, "ng-container", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.purchaseOrder == null ? null : ctx.purchaseOrder.isPurchaseOrderRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !(ctx.purchaseOrder == null ? null : ctx.purchaseOrder.isPurchaseOrderRequest));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.purchaseOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_5__.HasClaimDirective, _shared_purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderInvoiceComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.CustomCurrencyPipe, _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_8__.PaymentMethodPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_9__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_10__.PaymentStatusPipe], styles: [".total[_ngcontent-%COMP%] {\n  text-align: end;\n  border: 1px solid #dee2e6;\n  font-weight: bold;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXHB1cmNoYXNlLW9yZGVyXFxwdXJjaGFzZS1vcmRlci1kZXRhaWxcXHB1cmNoYXNlLW9yZGVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoicHVyY2hhc2Utb3JkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsIi50b3RhbCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 90521:
/*!*************************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-item/purchase-order-item.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderItemComponent": () => (/* binding */ PurchaseOrderItemComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _purchase_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../purchase-order.service */ 69822);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function PurchaseOrderItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PurchaseOrderItemComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function PurchaseOrderItemComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r23.productName, " ");
} }
function PurchaseOrderItemComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SOURCE"));
} }
function PurchaseOrderItemComponent_td_15_ng_contaner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PURCHASE_ORDER_RETURN"), " ");
} }
function PurchaseOrderItemComponent_td_15_ng_contaner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PURCHASE_ORDER"), " ");
} }
function PurchaseOrderItemComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PurchaseOrderItemComponent_td_15_ng_contaner_1_Template, 3, 3, "ng-contaner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PurchaseOrderItemComponent_td_15_ng_contaner_2_Template, 3, 3, "ng-contaner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r24.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r24.status != 1);
} }
function PurchaseOrderItemComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT"), " ");
} }
function PurchaseOrderItemComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.unitName, " ");
} }
function PurchaseOrderItemComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE"), " ");
} }
function PurchaseOrderItemComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r28.unitPrice), " ");
} }
function PurchaseOrderItemComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "QUANTITY"), " ");
} }
function PurchaseOrderItemComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r29.status === 1 ? -1 * element_r29.quantity : element_r29.quantity, " ");
} }
function PurchaseOrderItemComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function PurchaseOrderItemComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, element_r30.discount), "(", element_r30.discountPercentage, "%) ");
} }
function PurchaseOrderItemComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TAX"), " ");
} }
function PurchaseOrderItemComponent_td_30_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PurchaseOrderItemComponent_td_30_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PurchaseOrderItemComponent_td_30_span_1_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r33 = ctx.$implicit;
    const last_r34 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r33.taxName, "(", tax_r33.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r34);
} }
function PurchaseOrderItemComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PurchaseOrderItemComponent_td_30_span_1_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", element_r31.purchaseOrderItemTaxes);
} }
function PurchaseOrderItemComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), "");
} }
function PurchaseOrderItemComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r36.taxValue), " ");
} }
function PurchaseOrderItemComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL"), " ");
} }
function PurchaseOrderItemComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r37.unitPrice * element_r37.quantity - element_r37.discount + element_r37.taxValue), " ");
} }
function PurchaseOrderItemComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "WAREHOUSE"), "");
} }
function PurchaseOrderItemComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r38.warehouseName, " ");
} }
function PurchaseOrderItemComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
} }
function PurchaseOrderItemComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 27);
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-warning1", row_r39.status === 1);
} }
class PurchaseOrderItemComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(purchaseOrderService, translationService) {
        super(translationService);
        this.purchaseOrderService = purchaseOrderService;
        this.translationService = translationService;
        this.purchaseOrderItems = [];
        this.isLoading = false;
        this.displayedColumns = ['productName', 'source', 'unitName', 'unitPrice', 'quantity', 'totalDiscount', 'taxes', 'totalTax', 'totalAmount', 'warehouse'];
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
PurchaseOrderItemComponent.ɵfac = function PurchaseOrderItemComponent_Factory(t) { return new (t || PurchaseOrderItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_purchase_order_service__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
PurchaseOrderItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PurchaseOrderItemComponent, selectors: [["app-purchase-order-item"]], inputs: { purchaseOrder: "purchaseOrder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 42, vars: 9, consts: [[1, "page-header-main"], [1, "row", "align-items-center"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "source"], ["matColumnDef", "unitName"], ["matColumnDef", "unitPrice"], ["matColumnDef", "quantity"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "taxes"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "warehouse"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", ""]], template: function PurchaseOrderItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PurchaseOrderItemComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PurchaseOrderItemComponent_th_11_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PurchaseOrderItemComponent_td_12_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PurchaseOrderItemComponent_th_14_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, PurchaseOrderItemComponent_td_15_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PurchaseOrderItemComponent_th_17_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PurchaseOrderItemComponent_td_18_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PurchaseOrderItemComponent_th_20_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PurchaseOrderItemComponent_td_21_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PurchaseOrderItemComponent_th_23_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PurchaseOrderItemComponent_td_24_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, PurchaseOrderItemComponent_th_26_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PurchaseOrderItemComponent_td_27_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, PurchaseOrderItemComponent_th_29_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PurchaseOrderItemComponent_td_30_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, PurchaseOrderItemComponent_th_32_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, PurchaseOrderItemComponent_td_33_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, PurchaseOrderItemComponent_th_35_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, PurchaseOrderItemComponent_td_36_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](37, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, PurchaseOrderItemComponent_th_38_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, PurchaseOrderItemComponent_td_39_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, PurchaseOrderItemComponent_tr_40_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, PurchaseOrderItemComponent_tr_41_Template, 1, 2, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "PURCHASE_ORDER_ITEMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.purchaseOrderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS1vcmRlci1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 750:
/*!*************************************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-list/purchase-order-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderListComponent": () => (/* binding */ PurchaseOrderListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/purchase-order-resource-parameter */ 32667);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _add_purchase_order_payments_add_purchase_order_payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-purchase-order-payments/add-purchase-order-payments.component */ 26414);
/* harmony import */ var _view_purchase_order_payment_view_purchase_order_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-purchase-order-payment/view-purchase-order-payment.component */ 31421);
/* harmony import */ var _purchase_order_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-order-datasource */ 7854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _purchase_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../purchase-order.service */ 69822);
/* harmony import */ var src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/supplier/supplier.service */ 35803);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _shared_purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/purchase-order-invoice/purchase-order-invoice.component */ 92552);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _purchase_order_item_purchase_order_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../purchase-order-item/purchase-order-item.component */ 90521);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/purchase-order-paymentStatus.pipe */ 80443);








































const _c0 = function () { return ["/purchase-order/add"]; };
function PurchaseOrderListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "ADD_PURCHASE_ORDER"), " ");
} }
function PurchaseOrderListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function PurchaseOrderListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 55);
} }
function PurchaseOrderListComponent_td_17_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function PurchaseOrderListComponent_td_17_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function PurchaseOrderListComponent_td_17_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 62)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matMenuTriggerFor", _r48);
} }
const _c1 = function (a1) { return ["/purchase-order/", a1]; };
function PurchaseOrderListComponent_td_17_ng_contaner_7_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 63)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](4, _c1, po_r44.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 2, "EDIT"));
} }
function PurchaseOrderListComponent_td_17_ng_contaner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PurchaseOrderListComponent_td_17_ng_contaner_7_button_1_Template, 6, 6, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "PO_UPDATE_PO");
} }
const _c2 = function (a1) { return ["/purchase-order/detail", a1]; };
function PurchaseOrderListComponent_td_17_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 63)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](4, _c2, po_r44.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 2, "DETAIL"));
} }
function PurchaseOrderListComponent_td_17_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PurchaseOrderListComponent_td_17_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r61); const po_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r59.deletePurchaseOrder(po_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "DELETE"));
} }
function PurchaseOrderListComponent_td_17_ng_contaner_10_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PurchaseOrderListComponent_td_17_ng_contaner_10_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r65); const po_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r63.OnPurchaseOrderReturn(po_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "assignment_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "PURCHASE_ORDER_RETURN"));
} }
function PurchaseOrderListComponent_td_17_ng_contaner_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PurchaseOrderListComponent_td_17_ng_contaner_10_button_1_Template, 6, 3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "PO_RETURN_PO");
} }
function PurchaseOrderListComponent_td_17_ng_contaner_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PurchaseOrderListComponent_td_17_ng_contaner_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r69); const po_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r67.addPayment(po_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "ADD_PAYMENT"));
} }
function PurchaseOrderListComponent_td_17_ng_contaner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PurchaseOrderListComponent_td_17_ng_contaner_11_button_1_Template, 6, 3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "PO_ADD_PO_PAYMENT");
} }
function PurchaseOrderListComponent_td_17_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PurchaseOrderListComponent_td_17_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r72); const po_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r70.viewPayment(po_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "view_carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "VIEW_PAYMENT"));
} }
function PurchaseOrderListComponent_td_17_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PurchaseOrderListComponent_td_17_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r75); const po_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r73.generateInvoice(po_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "GENERATE_INVOICE"));
} }
const _c3 = function () { return ["PO_UPDATE_PO", "PO_VIEW_PO_DETAIL", "PO_DELETE_PO", "PO_RETURN_PO", "PO_ADD_PO_PAYMENT", "PO_VIEW_PO_PAYMENTS", "PO_GENERATE_INVOICE"]; };
function PurchaseOrderListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 56)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PurchaseOrderListComponent_td_17_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r77); const po_r44 = restoredCtx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r76.toggleRow(po_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, PurchaseOrderListComponent_td_17_mat_icon_2_Template, 2, 0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, PurchaseOrderListComponent_td_17_mat_icon_3_Template, 2, 0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, PurchaseOrderListComponent_td_17_button_4_Template, 3, 1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "mat-menu", null, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, PurchaseOrderListComponent_td_17_ng_contaner_7_Template, 2, 1, "ng-contaner", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, PurchaseOrderListComponent_td_17_button_8_Template, 6, 6, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, PurchaseOrderListComponent_td_17_button_9_Template, 6, 3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, PurchaseOrderListComponent_td_17_ng_contaner_10_Template, 2, 1, "ng-contaner", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, PurchaseOrderListComponent_td_17_ng_contaner_11_Template, 2, 1, "ng-contaner", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, PurchaseOrderListComponent_td_17_button_12_Template, 6, 3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, PurchaseOrderListComponent_td_17_button_13_Template, 6, 3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r44 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", po_r44 != ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", po_r44 == ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", po_r44.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "PO_VIEW_PO_DETAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "PO_DELETE_PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", po_r44.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", po_r44.paymentStatus != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "PO_VIEW_PO_PAYMENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "PO_GENERATE_INVOICE");
} }
function PurchaseOrderListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function PurchaseOrderListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](2, 1, po_r78.poCreatedDate, "shortDate"), " ");
} }
function PurchaseOrderListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "ORDER_NUMBER"), " ");
} }
function PurchaseOrderListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 56)(1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](2, _c2, po_r79.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", po_r79.orderNumber, " ");
} }
function PurchaseOrderListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE"), " ");
} }
function PurchaseOrderListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](2, 1, po_r80.deliveryDate, "shortDate"), " ");
} }
function PurchaseOrderListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "SUPPLIER_NAME"), " ");
} }
const _c4 = function (a1) { return ["/supplier/manage/", a1]; };
function PurchaseOrderListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 70)(1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](2, _c4, po_r81.supplierId));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", po_r81.supplierName, " ");
} }
function PurchaseOrderListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function PurchaseOrderListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, po_r82.totalDiscount), " ");
} }
function PurchaseOrderListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function PurchaseOrderListComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, po_r83.totalTax), " ");
} }
function PurchaseOrderListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TOTAL_AMOUNT"), " ");
} }
function PurchaseOrderListComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, po_r84.totalAmount), " ");
} }
function PurchaseOrderListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TOTAL_PAID_AMOUNT"), " ");
} }
function PurchaseOrderListComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, po_r85.totalPaidAmount), " ");
} }
function PurchaseOrderListComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "PAYMENT_STATUS"), " ");
} }
const _c5 = function (a0, a1, a2) { return { "badge-success": a0, "badge-danger": a1, "badge-warning": a2 }; };
function PurchaseOrderListComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 73)(1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "paymentStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction3"](4, _c5, po_r86.paymentStatus == 0, po_r86.paymentStatus == 1, po_r86.paymentStatus == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, po_r86.paymentStatus), "");
} }
function PurchaseOrderListComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "IS_RETURN"), " ");
} }
function PurchaseOrderListComponent_td_47_ng_contaner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "YES"), " ");
} }
function PurchaseOrderListComponent_td_47_ng_contaner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NO"), " ");
} }
function PurchaseOrderListComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PurchaseOrderListComponent_td_47_ng_contaner_1_Template, 3, 3, "ng-contaner", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, PurchaseOrderListComponent_td_47_ng_contaner_2_Template, 3, 3, "ng-contaner", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", po_r87.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", po_r87.status != 1);
} }
function PurchaseOrderListComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
function PurchaseOrderListComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
function PurchaseOrderListComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 75)(1, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function PurchaseOrderListComponent_th_53_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r90.OrderNumberFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "ORDER_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r26.OrderNumberFilter);
} }
function PurchaseOrderListComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
function PurchaseOrderListComponent_th_57_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", supplier_r94.supplierName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", supplier_r94.supplierName, " ");
} }
function PurchaseOrderListComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-autocomplete", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("optionSelected", function PurchaseOrderListComponent_th_57_Template_mat_autocomplete_optionSelected_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r95.SupplierFilter = $event.option.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, PurchaseOrderListComponent_th_57_mat_option_8_Template, 2, 2, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 6, "SUPPLIER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formControl", ctx_r28.supplierNameControl)("matAutocomplete", _r92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("autoActiveFirstOption", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 8, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 10, ctx_r28.supplierList$));
} }
function PurchaseOrderListComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
function PurchaseOrderListComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
function PurchaseOrderListComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
function PurchaseOrderListComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
function PurchaseOrderListComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
function PurchaseOrderListComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 75);
} }
const _c6 = function () { return [10, 20, 30]; };
function PurchaseOrderListComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-paginator", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("length", ctx_r35.purchaseOrderResource.totalCount)("pageSize", ctx_r35.purchaseOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](3, _c6));
} }
function PurchaseOrderListComponent_td_73_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 85)(2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-purchase-order-item", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const poObject_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@detailExpand", poObject_r97 == ctx_r98.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("purchaseOrder", poObject_r97);
} }
function PurchaseOrderListComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, PurchaseOrderListComponent_td_73_ng_container_1_Template, 4, 2, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poObject_r97 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("colspan", ctx_r36.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", poObject_r97 == ctx_r36.expandedElement);
} }
function PurchaseOrderListComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 88)(2, "span", 89)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function PurchaseOrderListComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 90);
} }
function PurchaseOrderListComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 91);
} if (rf & 2) {
    const row_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("bg-warning1", row_r100.status === 1);
} }
function PurchaseOrderListComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 90);
} }
function PurchaseOrderListComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 92);
} }
function PurchaseOrderListComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 93);
} }
function PurchaseOrderListComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-purchase-order-invoice", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("purchaseOrder", ctx_r43.purchaseOrderForInvoice);
} }
const _c7 = function () { return ["expandedDetail"]; };
class PurchaseOrderListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(purchaseOrderService, supplierService, cd, commonDialogService, toastrService, router, translationService, dialog, clonerService) {
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
        this.purchaseOrders = [];
        this.displayedColumns = ['action', 'poCreatedDate', 'orderNumber', 'deliveryDate', 'supplierName', 'totalDiscount', 'totalTax', 'totalAmount', 'totalPaidAmount', 'paymentStatus', 'status'];
        this.filterColumns = ['action-search', 'poCreatedDate-search', 'orderNumber-search', 'deliverDate-search', 'supplier-search', 'totalAmount-search', 'totalDiscount-search', 'totalTax-search', 'totalPaidAmount-search', 'paymentStatus-search', 'status-search'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.supplierNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormControl();
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
        this.getLangDir();
        this.purchaseOrderResource = new _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderResourceParameter();
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
        this.dataSource = new _purchase_order_datasource__WEBPACK_IMPORTED_MODULE_4__.PurchaseOrderDataSource(this.purchaseOrderService);
        this.dataSource.loadData(this.purchaseOrderResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)())
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
    supplierNameControlOnChange() {
        this.supplierList$ = this.supplierNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(c => {
            return this.supplierService.getSuppliersForDropDown(c);
        }));
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)((c) => {
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
                    this.toastrService.success(this.translationService.getValue('PURCHASE_ORDER_DELETED_SUCCESSFULLY'));
                    this.dataSource.loadData(this.purchaseOrderResource);
                });
            }
        });
    }
    addPayment(purchaseOrder) {
        const dialogRef = this.dialog.open(_add_purchase_order_payments_add_purchase_order_payments_component__WEBPACK_IMPORTED_MODULE_2__.AddPurchaseOrderPaymentsComponent, {
            width: '100vh',
            direction: this.langDir,
            data: Object.assign({}, purchaseOrder)
        });
        dialogRef.afterClosed().subscribe((isAdded) => {
            if (isAdded) {
                this.dataSource.loadData(this.purchaseOrderResource);
            }
        });
    }
    viewPayment(purchaseOrder) {
        const dialogRef = this.dialog.open(_view_purchase_order_payment_view_purchase_order_payment_component__WEBPACK_IMPORTED_MODULE_3__.ViewPurchaseOrderPaymentComponent, {
            data: Object.assign({}, purchaseOrder), direction: this.langDir,
        });
        dialogRef.afterClosed().subscribe((isAdded) => {
            if (isAdded) {
                this.dataSource.loadData(this.purchaseOrderResource);
            }
        });
    }
    OnPurchaseOrderReturn(purchaseOrder) {
        this.router.navigate(['/purchase-order-return', purchaseOrder.id]);
    }
    generateInvoice(po) {
        let poForInvoice = this.clonerService.deepClone(po);
        const getSupplierRequest = this.supplierService.getSupplier(po.supplierId);
        const getPurchaseOrderItems = this.purchaseOrderService.getPurchaseOrderItems(po.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.forkJoin)({ getSupplierRequest, getPurchaseOrderItems }).subscribe(response => {
            poForInvoice.supplier = response.getSupplierRequest;
            poForInvoice.purchaseOrderItems = response.getPurchaseOrderItems;
            this.purchaseOrderForInvoice = poForInvoice;
        });
    }
}
PurchaseOrderListComponent.ɵfac = function PurchaseOrderListComponent_Factory(t) { return new (t || PurchaseOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_purchase_order_service__WEBPACK_IMPORTED_MODULE_5__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_6__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_7__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_8__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_9__.ClonerService)); };
PurchaseOrderListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: PurchaseOrderListComponent, selectors: [["app-purchase-order-list"]], viewQuery: function PurchaseOrderListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 81, vars: 19, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "btn blue-btn btn-sm m-right-10", 3, "routerLink", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "poCreatedDate", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "poCreatedDate"], ["class", "table-column-100", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderNumber"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "deliveryDate"], ["matColumnDef", "supplierName"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalDiscount"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "totalPaidAmount"], ["matColumnDef", "paymentStatus"], ["class", "table-column-150", "mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "action-search"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "poCreatedDate-search"], ["matColumnDef", "orderNumber-search"], ["matColumnDef", "deliverDate-search"], ["matColumnDef", "supplier-search"], ["matColumnDef", "totalAmount-search"], ["matColumnDef", "totalDiscount-search"], ["matColumnDef", "totalTax-search"], ["matColumnDef", "totalPaidAmount-search"], ["matColumnDef", "paymentStatus-search"], ["matColumnDef", "status-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "12", 4, "matFooterCellDef"], ["matColumnDef", "expandedDetail"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-icon-button", "", 3, "click"], ["class", "ml-4", "mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor", 4, "hasClaim"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-icon-button", "", "aria-label", "Action", 1, "ml-4", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], [3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "table-column-150", 2, "text-align", "center"], [1, "badge-pill", 3, "ngClass"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "formControl", "matAutocomplete"], [3, "autoActiveFirstOption", "optionSelected"], ["autoSupplier", "matAutocomplete"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-footer-cell", "", "colspan", "12"], [3, "length", "pageSize", "pageSizeOptions"], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "purchaseOrder"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], ["mat-row", "", 1, "example-detail-row"]], template: function PurchaseOrderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, PurchaseOrderListComponent_button_8_Template, 4, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, PurchaseOrderListComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, PurchaseOrderListComponent_th_16_Template, 1, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, PurchaseOrderListComponent_td_17_Template, 14, 11, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, PurchaseOrderListComponent_th_19_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, PurchaseOrderListComponent_td_20_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, PurchaseOrderListComponent_th_22_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, PurchaseOrderListComponent_td_23_Template, 3, 4, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, PurchaseOrderListComponent_th_25_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, PurchaseOrderListComponent_td_26_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](28, PurchaseOrderListComponent_th_28_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, PurchaseOrderListComponent_td_29_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](30, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](31, PurchaseOrderListComponent_th_31_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](32, PurchaseOrderListComponent_td_32_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](33, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](34, PurchaseOrderListComponent_th_34_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, PurchaseOrderListComponent_td_35_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, PurchaseOrderListComponent_th_37_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](38, PurchaseOrderListComponent_td_38_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](39, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, PurchaseOrderListComponent_th_40_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](41, PurchaseOrderListComponent_td_41_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](42, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](43, PurchaseOrderListComponent_th_43_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, PurchaseOrderListComponent_td_44_Template, 4, 8, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](45, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, PurchaseOrderListComponent_th_46_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](47, PurchaseOrderListComponent_td_47_Template, 3, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](48, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](49, PurchaseOrderListComponent_th_49_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](50, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](51, PurchaseOrderListComponent_th_51_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](52, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](53, PurchaseOrderListComponent_th_53_Template, 3, 4, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](54, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](55, PurchaseOrderListComponent_th_55_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](56, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](57, PurchaseOrderListComponent_th_57_Template, 10, 12, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](58, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](59, PurchaseOrderListComponent_th_59_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](60, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](61, PurchaseOrderListComponent_th_61_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](62, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](63, PurchaseOrderListComponent_th_63_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](64, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](65, PurchaseOrderListComponent_th_65_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](66, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](67, PurchaseOrderListComponent_th_67_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](68, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](69, PurchaseOrderListComponent_th_69_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](70, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](71, PurchaseOrderListComponent_td_71_Template, 2, 4, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](72, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](73, PurchaseOrderListComponent_td_73_Template, 2, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](74, PurchaseOrderListComponent_tr_74_Template, 6, 3, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](75, PurchaseOrderListComponent_tr_75_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](76, PurchaseOrderListComponent_tr_76_Template, 1, 2, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](77, PurchaseOrderListComponent_tr_77_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](78, PurchaseOrderListComponent_tr_78_Template, 1, 0, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](79, PurchaseOrderListComponent_tr_79_Template, 1, 0, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](80, PurchaseOrderListComponent_ng_container_80_Template, 2, 1, "ng-container", 51);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 14, "PURCHASE_ORDERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "PO_ADD_PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 16, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matHeaderRowDef", ctx.filterColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](18, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlDirective, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_10__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__.Dir, _shared_purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_11__.PurchaseOrderInvoiceComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_36__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinner, _purchase_order_item_purchase_order_item_component__WEBPACK_IMPORTED_MODULE_12__.PurchaseOrderItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_13__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_14__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslatePipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_15__.PaymentStatusPipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n\n.table-column-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.table-column-2[_ngcontent-%COMP%] {\n  min-width: 2px;\n}\n\n.table-column-4[_ngcontent-%COMP%] {\n  min-width: 4px;\n}\n\n.table-column-6[_ngcontent-%COMP%] {\n  min-width: 6px;\n}\n\n.table-column-8[_ngcontent-%COMP%] {\n  min-width: 8px;\n}\n\n.table-column-10[_ngcontent-%COMP%] {\n  min-width: 10px;\n}\n\n.table-column-12[_ngcontent-%COMP%] {\n  min-width: 12px;\n}\n\n.table-column-14[_ngcontent-%COMP%] {\n  min-width: 14px;\n}\n\n.table-column-16[_ngcontent-%COMP%] {\n  min-width: 16px;\n}\n\n.table-column-18[_ngcontent-%COMP%] {\n  min-width: 18px;\n}\n\n.table-column-20[_ngcontent-%COMP%] {\n  min-width: 20px;\n}\n\n.table-column-22[_ngcontent-%COMP%] {\n  min-width: 22px;\n}\n\n.table-column-24[_ngcontent-%COMP%] {\n  min-width: 24px;\n}\n\n.table-column-26[_ngcontent-%COMP%] {\n  min-width: 26px;\n}\n\n.table-column-28[_ngcontent-%COMP%] {\n  min-width: 28px;\n}\n\n.table-column-30[_ngcontent-%COMP%] {\n  min-width: 30px;\n}\n\n.table-column-32[_ngcontent-%COMP%] {\n  min-width: 32px;\n}\n\n.table-column-34[_ngcontent-%COMP%] {\n  min-width: 34px;\n}\n\n.table-column-36[_ngcontent-%COMP%] {\n  min-width: 36px;\n}\n\n.table-column-38[_ngcontent-%COMP%] {\n  min-width: 38px;\n}\n\n.table-column-40[_ngcontent-%COMP%] {\n  min-width: 40px;\n}\n\n.table-column-42[_ngcontent-%COMP%] {\n  min-width: 42px;\n}\n\n.table-column-44[_ngcontent-%COMP%] {\n  min-width: 44px;\n}\n\n.table-column-46[_ngcontent-%COMP%] {\n  min-width: 46px;\n}\n\n.table-column-48[_ngcontent-%COMP%] {\n  min-width: 48px;\n}\n\n.table-column-50[_ngcontent-%COMP%] {\n  min-width: 50px;\n}\n\n.table-column-52[_ngcontent-%COMP%] {\n  min-width: 52px;\n}\n\n.table-column-54[_ngcontent-%COMP%] {\n  min-width: 54px;\n}\n\n.table-column-56[_ngcontent-%COMP%] {\n  min-width: 56px;\n}\n\n.table-column-58[_ngcontent-%COMP%] {\n  min-width: 58px;\n}\n\n.table-column-60[_ngcontent-%COMP%] {\n  min-width: 60px;\n}\n\n.table-column-62[_ngcontent-%COMP%] {\n  min-width: 62px;\n}\n\n.table-column-64[_ngcontent-%COMP%] {\n  min-width: 64px;\n}\n\n.table-column-66[_ngcontent-%COMP%] {\n  min-width: 66px;\n}\n\n.table-column-68[_ngcontent-%COMP%] {\n  min-width: 68px;\n}\n\n.table-column-70[_ngcontent-%COMP%] {\n  min-width: 70px;\n}\n\n.table-column-72[_ngcontent-%COMP%] {\n  min-width: 72px;\n}\n\n.table-column-74[_ngcontent-%COMP%] {\n  min-width: 74px;\n}\n\n.table-column-76[_ngcontent-%COMP%] {\n  min-width: 76px;\n}\n\n.table-column-78[_ngcontent-%COMP%] {\n  min-width: 78px;\n}\n\n.table-column-80[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n\n.table-column-82[_ngcontent-%COMP%] {\n  min-width: 82px;\n}\n\n.table-column-84[_ngcontent-%COMP%] {\n  min-width: 84px;\n}\n\n.table-column-86[_ngcontent-%COMP%] {\n  min-width: 86px;\n}\n\n.table-column-88[_ngcontent-%COMP%] {\n  min-width: 88px;\n}\n\n.table-column-90[_ngcontent-%COMP%] {\n  min-width: 90px;\n}\n\n.table-column-92[_ngcontent-%COMP%] {\n  min-width: 92px;\n}\n\n.table-column-94[_ngcontent-%COMP%] {\n  min-width: 94px;\n}\n\n.table-column-96[_ngcontent-%COMP%] {\n  min-width: 96px;\n}\n\n.table-column-98[_ngcontent-%COMP%] {\n  min-width: 98px;\n}\n\n.table-column-100[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n.table-column-102[_ngcontent-%COMP%] {\n  min-width: 102px;\n}\n\n.table-column-104[_ngcontent-%COMP%] {\n  min-width: 104px;\n}\n\n.table-column-106[_ngcontent-%COMP%] {\n  min-width: 106px;\n}\n\n.table-column-108[_ngcontent-%COMP%] {\n  min-width: 108px;\n}\n\n.table-column-110[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.table-column-112[_ngcontent-%COMP%] {\n  min-width: 112px;\n}\n\n.table-column-114[_ngcontent-%COMP%] {\n  min-width: 114px;\n}\n\n.table-column-116[_ngcontent-%COMP%] {\n  min-width: 116px;\n}\n\n.table-column-118[_ngcontent-%COMP%] {\n  min-width: 118px;\n}\n\n.table-column-120[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n\n.table-column-122[_ngcontent-%COMP%] {\n  min-width: 122px;\n}\n\n.table-column-124[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n\n.table-column-126[_ngcontent-%COMP%] {\n  min-width: 126px;\n}\n\n.table-column-128[_ngcontent-%COMP%] {\n  min-width: 128px;\n}\n\n.table-column-130[_ngcontent-%COMP%] {\n  min-width: 130px;\n}\n\n.table-column-132[_ngcontent-%COMP%] {\n  min-width: 132px;\n}\n\n.table-column-134[_ngcontent-%COMP%] {\n  min-width: 134px;\n}\n\n.table-column-136[_ngcontent-%COMP%] {\n  min-width: 136px;\n}\n\n.table-column-138[_ngcontent-%COMP%] {\n  min-width: 138px;\n}\n\n.table-column-140[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n.table-column-142[_ngcontent-%COMP%] {\n  min-width: 142px;\n}\n\n.table-column-144[_ngcontent-%COMP%] {\n  min-width: 144px;\n}\n\n.table-column-146[_ngcontent-%COMP%] {\n  min-width: 146px;\n}\n\n.table-column-148[_ngcontent-%COMP%] {\n  min-width: 148px;\n}\n\n.table-column-150[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.table-column-152[_ngcontent-%COMP%] {\n  min-width: 152px;\n}\n\n.table-column-154[_ngcontent-%COMP%] {\n  min-width: 154px;\n}\n\n.table-column-156[_ngcontent-%COMP%] {\n  min-width: 156px;\n}\n\n.table-column-158[_ngcontent-%COMP%] {\n  min-width: 158px;\n}\n\n.table-column-160[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n\n.table-column-162[_ngcontent-%COMP%] {\n  min-width: 162px;\n}\n\n.table-column-164[_ngcontent-%COMP%] {\n  min-width: 164px;\n}\n\n.table-column-166[_ngcontent-%COMP%] {\n  min-width: 166px;\n}\n\n.table-column-168[_ngcontent-%COMP%] {\n  min-width: 168px;\n}\n\n.table-column-170[_ngcontent-%COMP%] {\n  min-width: 170px;\n}\n\n.table-column-172[_ngcontent-%COMP%] {\n  min-width: 172px;\n}\n\n.table-column-174[_ngcontent-%COMP%] {\n  min-width: 174px;\n}\n\n.table-column-176[_ngcontent-%COMP%] {\n  min-width: 176px;\n}\n\n.table-column-178[_ngcontent-%COMP%] {\n  min-width: 178px;\n}\n\n.table-column-180[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n\n.table-column-182[_ngcontent-%COMP%] {\n  min-width: 182px;\n}\n\n.table-column-184[_ngcontent-%COMP%] {\n  min-width: 184px;\n}\n\n.table-column-186[_ngcontent-%COMP%] {\n  min-width: 186px;\n}\n\n.table-column-188[_ngcontent-%COMP%] {\n  min-width: 188px;\n}\n\n.table-column-190[_ngcontent-%COMP%] {\n  min-width: 190px;\n}\n\n.table-column-192[_ngcontent-%COMP%] {\n  min-width: 192px;\n}\n\n.table-column-194[_ngcontent-%COMP%] {\n  min-width: 194px;\n}\n\n.table-column-196[_ngcontent-%COMP%] {\n  min-width: 196px;\n}\n\n.table-column-198[_ngcontent-%COMP%] {\n  min-width: 198px;\n}\n\n.table-column-200[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.table-column-202[_ngcontent-%COMP%] {\n  min-width: 202px;\n}\n\n.table-column-204[_ngcontent-%COMP%] {\n  min-width: 204px;\n}\n\n.table-column-206[_ngcontent-%COMP%] {\n  min-width: 206px;\n}\n\n.table-column-208[_ngcontent-%COMP%] {\n  min-width: 208px;\n}\n\n.table-column-210[_ngcontent-%COMP%] {\n  min-width: 210px;\n}\n\n.table-column-212[_ngcontent-%COMP%] {\n  min-width: 212px;\n}\n\n.table-column-214[_ngcontent-%COMP%] {\n  min-width: 214px;\n}\n\n.table-column-216[_ngcontent-%COMP%] {\n  min-width: 216px;\n}\n\n.table-column-218[_ngcontent-%COMP%] {\n  min-width: 218px;\n}\n\n.table-column-220[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n\n.table-column-222[_ngcontent-%COMP%] {\n  min-width: 222px;\n}\n\n.table-column-224[_ngcontent-%COMP%] {\n  min-width: 224px;\n}\n\n.table-column-226[_ngcontent-%COMP%] {\n  min-width: 226px;\n}\n\n.table-column-228[_ngcontent-%COMP%] {\n  min-width: 228px;\n}\n\n.table-column-230[_ngcontent-%COMP%] {\n  min-width: 230px;\n}\n\n.table-column-232[_ngcontent-%COMP%] {\n  min-width: 232px;\n}\n\n.table-column-234[_ngcontent-%COMP%] {\n  min-width: 234px;\n}\n\n.table-column-236[_ngcontent-%COMP%] {\n  min-width: 236px;\n}\n\n.table-column-238[_ngcontent-%COMP%] {\n  min-width: 238px;\n}\n\n.table-column-240[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n\n.table-column-242[_ngcontent-%COMP%] {\n  min-width: 242px;\n}\n\n.table-column-244[_ngcontent-%COMP%] {\n  min-width: 244px;\n}\n\n.table-column-246[_ngcontent-%COMP%] {\n  min-width: 246px;\n}\n\n.table-column-248[_ngcontent-%COMP%] {\n  min-width: 248px;\n}\n\n.table-column-250[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n\n.table-column-252[_ngcontent-%COMP%] {\n  min-width: 252px;\n}\n\n.table-column-254[_ngcontent-%COMP%] {\n  min-width: 254px;\n}\n\n.table-column-256[_ngcontent-%COMP%] {\n  min-width: 256px;\n}\n\n.table-column-258[_ngcontent-%COMP%] {\n  min-width: 258px;\n}\n\n.table-column-260[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n\n.table-column-262[_ngcontent-%COMP%] {\n  min-width: 262px;\n}\n\n.table-column-264[_ngcontent-%COMP%] {\n  min-width: 264px;\n}\n\n.table-column-266[_ngcontent-%COMP%] {\n  min-width: 266px;\n}\n\n.table-column-268[_ngcontent-%COMP%] {\n  min-width: 268px;\n}\n\n.table-column-270[_ngcontent-%COMP%] {\n  min-width: 270px;\n}\n\n.table-column-272[_ngcontent-%COMP%] {\n  min-width: 272px;\n}\n\n.table-column-274[_ngcontent-%COMP%] {\n  min-width: 274px;\n}\n\n.table-column-276[_ngcontent-%COMP%] {\n  min-width: 276px;\n}\n\n.table-column-278[_ngcontent-%COMP%] {\n  min-width: 278px;\n}\n\n.table-column-280[_ngcontent-%COMP%] {\n  min-width: 280px;\n}\n\n.table-column-282[_ngcontent-%COMP%] {\n  min-width: 282px;\n}\n\n.table-column-284[_ngcontent-%COMP%] {\n  min-width: 284px;\n}\n\n.table-column-286[_ngcontent-%COMP%] {\n  min-width: 286px;\n}\n\n.table-column-288[_ngcontent-%COMP%] {\n  min-width: 288px;\n}\n\n.table-column-290[_ngcontent-%COMP%] {\n  min-width: 290px;\n}\n\n.table-column-292[_ngcontent-%COMP%] {\n  min-width: 292px;\n}\n\n.table-column-294[_ngcontent-%COMP%] {\n  min-width: 294px;\n}\n\n.table-column-296[_ngcontent-%COMP%] {\n  min-width: 296px;\n}\n\n.table-column-298[_ngcontent-%COMP%] {\n  min-width: 298px;\n}\n\n.table-column-300[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n.table-column-302[_ngcontent-%COMP%] {\n  min-width: 302px;\n}\n\n.table-column-304[_ngcontent-%COMP%] {\n  min-width: 304px;\n}\n\n.table-column-306[_ngcontent-%COMP%] {\n  min-width: 306px;\n}\n\n.table-column-308[_ngcontent-%COMP%] {\n  min-width: 308px;\n}\n\n.table-column-310[_ngcontent-%COMP%] {\n  min-width: 310px;\n}\n\n.table-column-312[_ngcontent-%COMP%] {\n  min-width: 312px;\n}\n\n.table-column-314[_ngcontent-%COMP%] {\n  min-width: 314px;\n}\n\n.table-column-316[_ngcontent-%COMP%] {\n  min-width: 316px;\n}\n\n.table-column-318[_ngcontent-%COMP%] {\n  min-width: 318px;\n}\n\n.table-column-320[_ngcontent-%COMP%] {\n  min-width: 320px;\n}\n\n.table-column-322[_ngcontent-%COMP%] {\n  min-width: 322px;\n}\n\n.table-column-324[_ngcontent-%COMP%] {\n  min-width: 324px;\n}\n\n.table-column-326[_ngcontent-%COMP%] {\n  min-width: 326px;\n}\n\n.table-column-328[_ngcontent-%COMP%] {\n  min-width: 328px;\n}\n\n.table-column-330[_ngcontent-%COMP%] {\n  min-width: 330px;\n}\n\n.table-column-332[_ngcontent-%COMP%] {\n  min-width: 332px;\n}\n\n.table-column-334[_ngcontent-%COMP%] {\n  min-width: 334px;\n}\n\n.table-column-336[_ngcontent-%COMP%] {\n  min-width: 336px;\n}\n\n.table-column-338[_ngcontent-%COMP%] {\n  min-width: 338px;\n}\n\n.table-column-340[_ngcontent-%COMP%] {\n  min-width: 340px;\n}\n\n.table-column-342[_ngcontent-%COMP%] {\n  min-width: 342px;\n}\n\n.table-column-344[_ngcontent-%COMP%] {\n  min-width: 344px;\n}\n\n.table-column-346[_ngcontent-%COMP%] {\n  min-width: 346px;\n}\n\n.table-column-348[_ngcontent-%COMP%] {\n  min-width: 348px;\n}\n\n.table-column-350[_ngcontent-%COMP%] {\n  min-width: 350px;\n}\n\n.table-column-352[_ngcontent-%COMP%] {\n  min-width: 352px;\n}\n\n.table-column-354[_ngcontent-%COMP%] {\n  min-width: 354px;\n}\n\n.table-column-356[_ngcontent-%COMP%] {\n  min-width: 356px;\n}\n\n.table-column-358[_ngcontent-%COMP%] {\n  min-width: 358px;\n}\n\n.table-column-360[_ngcontent-%COMP%] {\n  min-width: 360px;\n}\n\n.table-column-362[_ngcontent-%COMP%] {\n  min-width: 362px;\n}\n\n.table-column-364[_ngcontent-%COMP%] {\n  min-width: 364px;\n}\n\n.table-column-366[_ngcontent-%COMP%] {\n  min-width: 366px;\n}\n\n.table-column-368[_ngcontent-%COMP%] {\n  min-width: 368px;\n}\n\n.table-column-370[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n\n.table-column-372[_ngcontent-%COMP%] {\n  min-width: 372px;\n}\n\n.table-column-374[_ngcontent-%COMP%] {\n  min-width: 374px;\n}\n\n.table-column-376[_ngcontent-%COMP%] {\n  min-width: 376px;\n}\n\n.table-column-378[_ngcontent-%COMP%] {\n  min-width: 378px;\n}\n\n.table-column-380[_ngcontent-%COMP%] {\n  min-width: 380px;\n}\n\n.table-column-382[_ngcontent-%COMP%] {\n  min-width: 382px;\n}\n\n.table-column-384[_ngcontent-%COMP%] {\n  min-width: 384px;\n}\n\n.table-column-386[_ngcontent-%COMP%] {\n  min-width: 386px;\n}\n\n.table-column-388[_ngcontent-%COMP%] {\n  min-width: 388px;\n}\n\n.table-column-390[_ngcontent-%COMP%] {\n  min-width: 390px;\n}\n\n.table-column-392[_ngcontent-%COMP%] {\n  min-width: 392px;\n}\n\n.table-column-394[_ngcontent-%COMP%] {\n  min-width: 394px;\n}\n\n.table-column-396[_ngcontent-%COMP%] {\n  min-width: 396px;\n}\n\n.table-column-398[_ngcontent-%COMP%] {\n  min-width: 398px;\n}\n\n.table-column-400[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n.table-column-402[_ngcontent-%COMP%] {\n  min-width: 402px;\n}\n\n.table-column-404[_ngcontent-%COMP%] {\n  min-width: 404px;\n}\n\n.table-column-406[_ngcontent-%COMP%] {\n  min-width: 406px;\n}\n\n.table-column-408[_ngcontent-%COMP%] {\n  min-width: 408px;\n}\n\n.table-column-410[_ngcontent-%COMP%] {\n  min-width: 410px;\n}\n\n.table-column-412[_ngcontent-%COMP%] {\n  min-width: 412px;\n}\n\n.table-column-414[_ngcontent-%COMP%] {\n  min-width: 414px;\n}\n\n.table-column-416[_ngcontent-%COMP%] {\n  min-width: 416px;\n}\n\n.table-column-418[_ngcontent-%COMP%] {\n  min-width: 418px;\n}\n\n.table-column-420[_ngcontent-%COMP%] {\n  min-width: 420px;\n}\n\n.table-column-422[_ngcontent-%COMP%] {\n  min-width: 422px;\n}\n\n.table-column-424[_ngcontent-%COMP%] {\n  min-width: 424px;\n}\n\n.table-column-426[_ngcontent-%COMP%] {\n  min-width: 426px;\n}\n\n.table-column-428[_ngcontent-%COMP%] {\n  min-width: 428px;\n}\n\n.table-column-430[_ngcontent-%COMP%] {\n  min-width: 430px;\n}\n\n.table-column-432[_ngcontent-%COMP%] {\n  min-width: 432px;\n}\n\n.table-column-434[_ngcontent-%COMP%] {\n  min-width: 434px;\n}\n\n.table-column-436[_ngcontent-%COMP%] {\n  min-width: 436px;\n}\n\n.table-column-438[_ngcontent-%COMP%] {\n  min-width: 438px;\n}\n\n.table-column-440[_ngcontent-%COMP%] {\n  min-width: 440px;\n}\n\n.table-column-442[_ngcontent-%COMP%] {\n  min-width: 442px;\n}\n\n.table-column-444[_ngcontent-%COMP%] {\n  min-width: 444px;\n}\n\n.table-column-446[_ngcontent-%COMP%] {\n  min-width: 446px;\n}\n\n.table-column-448[_ngcontent-%COMP%] {\n  min-width: 448px;\n}\n\n.table-column-450[_ngcontent-%COMP%] {\n  min-width: 450px;\n}\n\n.table-column-452[_ngcontent-%COMP%] {\n  min-width: 452px;\n}\n\n.table-column-454[_ngcontent-%COMP%] {\n  min-width: 454px;\n}\n\n.table-column-456[_ngcontent-%COMP%] {\n  min-width: 456px;\n}\n\n.table-column-458[_ngcontent-%COMP%] {\n  min-width: 458px;\n}\n\n.table-column-460[_ngcontent-%COMP%] {\n  min-width: 460px;\n}\n\n.table-column-462[_ngcontent-%COMP%] {\n  min-width: 462px;\n}\n\n.table-column-464[_ngcontent-%COMP%] {\n  min-width: 464px;\n}\n\n.table-column-466[_ngcontent-%COMP%] {\n  min-width: 466px;\n}\n\n.table-column-468[_ngcontent-%COMP%] {\n  min-width: 468px;\n}\n\n.table-column-470[_ngcontent-%COMP%] {\n  min-width: 470px;\n}\n\n.table-column-472[_ngcontent-%COMP%] {\n  min-width: 472px;\n}\n\n.table-column-474[_ngcontent-%COMP%] {\n  min-width: 474px;\n}\n\n.table-column-476[_ngcontent-%COMP%] {\n  min-width: 476px;\n}\n\n.table-column-478[_ngcontent-%COMP%] {\n  min-width: 478px;\n}\n\n.table-column-480[_ngcontent-%COMP%] {\n  min-width: 480px;\n}\n\n.table-column-482[_ngcontent-%COMP%] {\n  min-width: 482px;\n}\n\n.table-column-484[_ngcontent-%COMP%] {\n  min-width: 484px;\n}\n\n.table-column-486[_ngcontent-%COMP%] {\n  min-width: 486px;\n}\n\n.table-column-488[_ngcontent-%COMP%] {\n  min-width: 488px;\n}\n\n.table-column-490[_ngcontent-%COMP%] {\n  min-width: 490px;\n}\n\n.table-column-492[_ngcontent-%COMP%] {\n  min-width: 492px;\n}\n\n.table-column-494[_ngcontent-%COMP%] {\n  min-width: 494px;\n}\n\n.table-column-496[_ngcontent-%COMP%] {\n  min-width: 496px;\n}\n\n.table-column-498[_ngcontent-%COMP%] {\n  min-width: 498px;\n}\n\n.table-column-500[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n\n.table-column-502[_ngcontent-%COMP%] {\n  min-width: 502px;\n}\n\n.table-column-504[_ngcontent-%COMP%] {\n  min-width: 504px;\n}\n\n.table-column-506[_ngcontent-%COMP%] {\n  min-width: 506px;\n}\n\n.table-column-508[_ngcontent-%COMP%] {\n  min-width: 508px;\n}\n\n.table-column-510[_ngcontent-%COMP%] {\n  min-width: 510px;\n}\n\n.table-column-512[_ngcontent-%COMP%] {\n  min-width: 512px;\n}\n\n.table-column-514[_ngcontent-%COMP%] {\n  min-width: 514px;\n}\n\n.table-column-516[_ngcontent-%COMP%] {\n  min-width: 516px;\n}\n\n.table-column-518[_ngcontent-%COMP%] {\n  min-width: 518px;\n}\n\n.table-column-520[_ngcontent-%COMP%] {\n  min-width: 520px;\n}\n\n.table-column-522[_ngcontent-%COMP%] {\n  min-width: 522px;\n}\n\n.table-column-524[_ngcontent-%COMP%] {\n  min-width: 524px;\n}\n\n.table-column-526[_ngcontent-%COMP%] {\n  min-width: 526px;\n}\n\n.table-column-528[_ngcontent-%COMP%] {\n  min-width: 528px;\n}\n\n.table-column-530[_ngcontent-%COMP%] {\n  min-width: 530px;\n}\n\n.table-column-532[_ngcontent-%COMP%] {\n  min-width: 532px;\n}\n\n.table-column-534[_ngcontent-%COMP%] {\n  min-width: 534px;\n}\n\n.table-column-536[_ngcontent-%COMP%] {\n  min-width: 536px;\n}\n\n.table-column-538[_ngcontent-%COMP%] {\n  min-width: 538px;\n}\n\n.table-column-540[_ngcontent-%COMP%] {\n  min-width: 540px;\n}\n\n.table-column-542[_ngcontent-%COMP%] {\n  min-width: 542px;\n}\n\n.table-column-544[_ngcontent-%COMP%] {\n  min-width: 544px;\n}\n\n.table-column-546[_ngcontent-%COMP%] {\n  min-width: 546px;\n}\n\n.table-column-548[_ngcontent-%COMP%] {\n  min-width: 548px;\n}\n\n.table-column-550[_ngcontent-%COMP%] {\n  min-width: 550px;\n}\n\n.table-column-552[_ngcontent-%COMP%] {\n  min-width: 552px;\n}\n\n.table-column-554[_ngcontent-%COMP%] {\n  min-width: 554px;\n}\n\n.table-column-556[_ngcontent-%COMP%] {\n  min-width: 556px;\n}\n\n.table-column-558[_ngcontent-%COMP%] {\n  min-width: 558px;\n}\n\n.table-column-560[_ngcontent-%COMP%] {\n  min-width: 560px;\n}\n\n.table-column-562[_ngcontent-%COMP%] {\n  min-width: 562px;\n}\n\n.table-column-564[_ngcontent-%COMP%] {\n  min-width: 564px;\n}\n\n.table-column-566[_ngcontent-%COMP%] {\n  min-width: 566px;\n}\n\n.table-column-568[_ngcontent-%COMP%] {\n  min-width: 568px;\n}\n\n.table-column-570[_ngcontent-%COMP%] {\n  min-width: 570px;\n}\n\n.table-column-572[_ngcontent-%COMP%] {\n  min-width: 572px;\n}\n\n.table-column-574[_ngcontent-%COMP%] {\n  min-width: 574px;\n}\n\n.table-column-576[_ngcontent-%COMP%] {\n  min-width: 576px;\n}\n\n.table-column-578[_ngcontent-%COMP%] {\n  min-width: 578px;\n}\n\n.table-column-580[_ngcontent-%COMP%] {\n  min-width: 580px;\n}\n\n.table-column-582[_ngcontent-%COMP%] {\n  min-width: 582px;\n}\n\n.table-column-584[_ngcontent-%COMP%] {\n  min-width: 584px;\n}\n\n.table-column-586[_ngcontent-%COMP%] {\n  min-width: 586px;\n}\n\n.table-column-588[_ngcontent-%COMP%] {\n  min-width: 588px;\n}\n\n.table-column-590[_ngcontent-%COMP%] {\n  min-width: 590px;\n}\n\n.table-column-592[_ngcontent-%COMP%] {\n  min-width: 592px;\n}\n\n.table-column-594[_ngcontent-%COMP%] {\n  min-width: 594px;\n}\n\n.table-column-596[_ngcontent-%COMP%] {\n  min-width: 596px;\n}\n\n.table-column-598[_ngcontent-%COMP%] {\n  min-width: 598px;\n}\n\n.table-column-600[_ngcontent-%COMP%] {\n  min-width: 600px;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0 !important;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.inner-table[_ngcontent-%COMP%] {\n  margin: 1em;\n  padding: 1em;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBQiUyMFBPU1xcRnJvbnRlbmRcXHNyY1xcYXBwXFxwdXJjaGFzZS1vcmRlclxccHVyY2hhc2Utb3JkZXItbGlzdFxccHVyY2hhc2Utb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURHSTtFQUVFLGNBQUE7QUNETjs7QURESTtFQUVFLGNBQUE7QUNHTjs7QURMSTtFQUVFLGNBQUE7QUNPTjs7QURUSTtFQUVFLGNBQUE7QUNXTjs7QURiSTtFQUVFLGNBQUE7QUNlTjs7QURqQkk7RUFFRSxlQUFBO0FDbUJOOztBRHJCSTtFQUVFLGVBQUE7QUN1Qk47O0FEekJJO0VBRUUsZUFBQTtBQzJCTjs7QUQ3Qkk7RUFFRSxlQUFBO0FDK0JOOztBRGpDSTtFQUVFLGVBQUE7QUNtQ047O0FEckNJO0VBRUUsZUFBQTtBQ3VDTjs7QUR6Q0k7RUFFRSxlQUFBO0FDMkNOOztBRDdDSTtFQUVFLGVBQUE7QUMrQ047O0FEakRJO0VBRUUsZUFBQTtBQ21ETjs7QURyREk7RUFFRSxlQUFBO0FDdUROOztBRHpESTtFQUVFLGVBQUE7QUMyRE47O0FEN0RJO0VBRUUsZUFBQTtBQytETjs7QURqRUk7RUFFRSxlQUFBO0FDbUVOOztBRHJFSTtFQUVFLGVBQUE7QUN1RU47O0FEekVJO0VBRUUsZUFBQTtBQzJFTjs7QUQ3RUk7RUFFRSxlQUFBO0FDK0VOOztBRGpGSTtFQUVFLGVBQUE7QUNtRk47O0FEckZJO0VBRUUsZUFBQTtBQ3VGTjs7QUR6Rkk7RUFFRSxlQUFBO0FDMkZOOztBRDdGSTtFQUVFLGVBQUE7QUMrRk47O0FEakdJO0VBRUUsZUFBQTtBQ21HTjs7QURyR0k7RUFFRSxlQUFBO0FDdUdOOztBRHpHSTtFQUVFLGVBQUE7QUMyR047O0FEN0dJO0VBRUUsZUFBQTtBQytHTjs7QURqSEk7RUFFRSxlQUFBO0FDbUhOOztBRHJISTtFQUVFLGVBQUE7QUN1SE47O0FEekhJO0VBRUUsZUFBQTtBQzJITjs7QUQ3SEk7RUFFRSxlQUFBO0FDK0hOOztBRGpJSTtFQUVFLGVBQUE7QUNtSU47O0FEcklJO0VBRUUsZUFBQTtBQ3VJTjs7QUR6SUk7RUFFRSxlQUFBO0FDMklOOztBRDdJSTtFQUVFLGVBQUE7QUMrSU47O0FEakpJO0VBRUUsZUFBQTtBQ21KTjs7QURySkk7RUFFRSxlQUFBO0FDdUpOOztBRHpKSTtFQUVFLGVBQUE7QUMySk47O0FEN0pJO0VBRUUsZUFBQTtBQytKTjs7QURqS0k7RUFFRSxlQUFBO0FDbUtOOztBRHJLSTtFQUVFLGVBQUE7QUN1S047O0FEektJO0VBRUUsZUFBQTtBQzJLTjs7QUQ3S0k7RUFFRSxlQUFBO0FDK0tOOztBRGpMSTtFQUVFLGVBQUE7QUNtTE47O0FEckxJO0VBRUUsZUFBQTtBQ3VMTjs7QUR6TEk7RUFFRSxlQUFBO0FDMkxOOztBRDdMSTtFQUVFLGVBQUE7QUMrTE47O0FEak1JO0VBRUUsZUFBQTtBQ21NTjs7QURyTUk7RUFFRSxnQkFBQTtBQ3VNTjs7QUR6TUk7RUFFRSxnQkFBQTtBQzJNTjs7QUQ3TUk7RUFFRSxnQkFBQTtBQytNTjs7QURqTkk7RUFFRSxnQkFBQTtBQ21OTjs7QURyTkk7RUFFRSxnQkFBQTtBQ3VOTjs7QUR6Tkk7RUFFRSxnQkFBQTtBQzJOTjs7QUQ3Tkk7RUFFRSxnQkFBQTtBQytOTjs7QURqT0k7RUFFRSxnQkFBQTtBQ21PTjs7QURyT0k7RUFFRSxnQkFBQTtBQ3VPTjs7QUR6T0k7RUFFRSxnQkFBQTtBQzJPTjs7QUQ3T0k7RUFFRSxnQkFBQTtBQytPTjs7QURqUEk7RUFFRSxnQkFBQTtBQ21QTjs7QURyUEk7RUFFRSxnQkFBQTtBQ3VQTjs7QUR6UEk7RUFFRSxnQkFBQTtBQzJQTjs7QUQ3UEk7RUFFRSxnQkFBQTtBQytQTjs7QURqUUk7RUFFRSxnQkFBQTtBQ21RTjs7QURyUUk7RUFFRSxnQkFBQTtBQ3VRTjs7QUR6UUk7RUFFRSxnQkFBQTtBQzJRTjs7QUQ3UUk7RUFFRSxnQkFBQTtBQytRTjs7QURqUkk7RUFFRSxnQkFBQTtBQ21STjs7QURyUkk7RUFFRSxnQkFBQTtBQ3VSTjs7QUR6Ukk7RUFFRSxnQkFBQTtBQzJSTjs7QUQ3Ukk7RUFFRSxnQkFBQTtBQytSTjs7QURqU0k7RUFFRSxnQkFBQTtBQ21TTjs7QURyU0k7RUFFRSxnQkFBQTtBQ3VTTjs7QUR6U0k7RUFFRSxnQkFBQTtBQzJTTjs7QUQ3U0k7RUFFRSxnQkFBQTtBQytTTjs7QURqVEk7RUFFRSxnQkFBQTtBQ21UTjs7QURyVEk7RUFFRSxnQkFBQTtBQ3VUTjs7QUR6VEk7RUFFRSxnQkFBQTtBQzJUTjs7QUQ3VEk7RUFFRSxnQkFBQTtBQytUTjs7QURqVUk7RUFFRSxnQkFBQTtBQ21VTjs7QURyVUk7RUFFRSxnQkFBQTtBQ3VVTjs7QUR6VUk7RUFFRSxnQkFBQTtBQzJVTjs7QUQ3VUk7RUFFRSxnQkFBQTtBQytVTjs7QURqVkk7RUFFRSxnQkFBQTtBQ21WTjs7QURyVkk7RUFFRSxnQkFBQTtBQ3VWTjs7QUR6Vkk7RUFFRSxnQkFBQTtBQzJWTjs7QUQ3Vkk7RUFFRSxnQkFBQTtBQytWTjs7QURqV0k7RUFFRSxnQkFBQTtBQ21XTjs7QURyV0k7RUFFRSxnQkFBQTtBQ3VXTjs7QUR6V0k7RUFFRSxnQkFBQTtBQzJXTjs7QUQ3V0k7RUFFRSxnQkFBQTtBQytXTjs7QURqWEk7RUFFRSxnQkFBQTtBQ21YTjs7QURyWEk7RUFFRSxnQkFBQTtBQ3VYTjs7QUR6WEk7RUFFRSxnQkFBQTtBQzJYTjs7QUQ3WEk7RUFFRSxnQkFBQTtBQytYTjs7QURqWUk7RUFFRSxnQkFBQTtBQ21ZTjs7QURyWUk7RUFFRSxnQkFBQTtBQ3VZTjs7QUR6WUk7RUFFRSxnQkFBQTtBQzJZTjs7QUQ3WUk7RUFFRSxnQkFBQTtBQytZTjs7QURqWkk7RUFFRSxnQkFBQTtBQ21aTjs7QURyWkk7RUFFRSxnQkFBQTtBQ3VaTjs7QUR6Wkk7RUFFRSxnQkFBQTtBQzJaTjs7QUQ3Wkk7RUFFRSxnQkFBQTtBQytaTjs7QURqYUk7RUFFRSxnQkFBQTtBQ21hTjs7QURyYUk7RUFFRSxnQkFBQTtBQ3VhTjs7QUR6YUk7RUFFRSxnQkFBQTtBQzJhTjs7QUQ3YUk7RUFFRSxnQkFBQTtBQythTjs7QURqYkk7RUFFRSxnQkFBQTtBQ21iTjs7QURyYkk7RUFFRSxnQkFBQTtBQ3ViTjs7QUR6Ykk7RUFFRSxnQkFBQTtBQzJiTjs7QUQ3Ykk7RUFFRSxnQkFBQTtBQytiTjs7QURqY0k7RUFFRSxnQkFBQTtBQ21jTjs7QURyY0k7RUFFRSxnQkFBQTtBQ3VjTjs7QUR6Y0k7RUFFRSxnQkFBQTtBQzJjTjs7QUQ3Y0k7RUFFRSxnQkFBQTtBQytjTjs7QURqZEk7RUFFRSxnQkFBQTtBQ21kTjs7QURyZEk7RUFFRSxnQkFBQTtBQ3VkTjs7QUR6ZEk7RUFFRSxnQkFBQTtBQzJkTjs7QUQ3ZEk7RUFFRSxnQkFBQTtBQytkTjs7QURqZUk7RUFFRSxnQkFBQTtBQ21lTjs7QURyZUk7RUFFRSxnQkFBQTtBQ3VlTjs7QUR6ZUk7RUFFRSxnQkFBQTtBQzJlTjs7QUQ3ZUk7RUFFRSxnQkFBQTtBQytlTjs7QURqZkk7RUFFRSxnQkFBQTtBQ21mTjs7QURyZkk7RUFFRSxnQkFBQTtBQ3VmTjs7QUR6Zkk7RUFFRSxnQkFBQTtBQzJmTjs7QUQ3Zkk7RUFFRSxnQkFBQTtBQytmTjs7QURqZ0JJO0VBRUUsZ0JBQUE7QUNtZ0JOOztBRHJnQkk7RUFFRSxnQkFBQTtBQ3VnQk47O0FEemdCSTtFQUVFLGdCQUFBO0FDMmdCTjs7QUQ3Z0JJO0VBRUUsZ0JBQUE7QUMrZ0JOOztBRGpoQkk7RUFFRSxnQkFBQTtBQ21oQk47O0FEcmhCSTtFQUVFLGdCQUFBO0FDdWhCTjs7QUR6aEJJO0VBRUUsZ0JBQUE7QUMyaEJOOztBRDdoQkk7RUFFRSxnQkFBQTtBQytoQk47O0FEamlCSTtFQUVFLGdCQUFBO0FDbWlCTjs7QURyaUJJO0VBRUUsZ0JBQUE7QUN1aUJOOztBRHppQkk7RUFFRSxnQkFBQTtBQzJpQk47O0FEN2lCSTtFQUVFLGdCQUFBO0FDK2lCTjs7QURqakJJO0VBRUUsZ0JBQUE7QUNtakJOOztBRHJqQkk7RUFFRSxnQkFBQTtBQ3VqQk47O0FEempCSTtFQUVFLGdCQUFBO0FDMmpCTjs7QUQ3akJJO0VBRUUsZ0JBQUE7QUMrakJOOztBRGprQkk7RUFFRSxnQkFBQTtBQ21rQk47O0FEcmtCSTtFQUVFLGdCQUFBO0FDdWtCTjs7QUR6a0JJO0VBRUUsZ0JBQUE7QUMya0JOOztBRDdrQkk7RUFFRSxnQkFBQTtBQytrQk47O0FEamxCSTtFQUVFLGdCQUFBO0FDbWxCTjs7QURybEJJO0VBRUUsZ0JBQUE7QUN1bEJOOztBRHpsQkk7RUFFRSxnQkFBQTtBQzJsQk47O0FEN2xCSTtFQUVFLGdCQUFBO0FDK2xCTjs7QURqbUJJO0VBRUUsZ0JBQUE7QUNtbUJOOztBRHJtQkk7RUFFRSxnQkFBQTtBQ3VtQk47O0FEem1CSTtFQUVFLGdCQUFBO0FDMm1CTjs7QUQ3bUJJO0VBRUUsZ0JBQUE7QUMrbUJOOztBRGpuQkk7RUFFRSxnQkFBQTtBQ21uQk47O0FEcm5CSTtFQUVFLGdCQUFBO0FDdW5CTjs7QUR6bkJJO0VBRUUsZ0JBQUE7QUMybkJOOztBRDduQkk7RUFFRSxnQkFBQTtBQytuQk47O0FEam9CSTtFQUVFLGdCQUFBO0FDbW9CTjs7QURyb0JJO0VBRUUsZ0JBQUE7QUN1b0JOOztBRHpvQkk7RUFFRSxnQkFBQTtBQzJvQk47O0FEN29CSTtFQUVFLGdCQUFBO0FDK29CTjs7QURqcEJJO0VBRUUsZ0JBQUE7QUNtcEJOOztBRHJwQkk7RUFFRSxnQkFBQTtBQ3VwQk47O0FEenBCSTtFQUVFLGdCQUFBO0FDMnBCTjs7QUQ3cEJJO0VBRUUsZ0JBQUE7QUMrcEJOOztBRGpxQkk7RUFFRSxnQkFBQTtBQ21xQk47O0FEcnFCSTtFQUVFLGdCQUFBO0FDdXFCTjs7QUR6cUJJO0VBRUUsZ0JBQUE7QUMycUJOOztBRDdxQkk7RUFFRSxnQkFBQTtBQytxQk47O0FEanJCSTtFQUVFLGdCQUFBO0FDbXJCTjs7QURyckJJO0VBRUUsZ0JBQUE7QUN1ckJOOztBRHpyQkk7RUFFRSxnQkFBQTtBQzJyQk47O0FEN3JCSTtFQUVFLGdCQUFBO0FDK3JCTjs7QURqc0JJO0VBRUUsZ0JBQUE7QUNtc0JOOztBRHJzQkk7RUFFRSxnQkFBQTtBQ3VzQk47O0FEenNCSTtFQUVFLGdCQUFBO0FDMnNCTjs7QUQ3c0JJO0VBRUUsZ0JBQUE7QUMrc0JOOztBRGp0Qkk7RUFFRSxnQkFBQTtBQ210Qk47O0FEcnRCSTtFQUVFLGdCQUFBO0FDdXRCTjs7QUR6dEJJO0VBRUUsZ0JBQUE7QUMydEJOOztBRDd0Qkk7RUFFRSxnQkFBQTtBQyt0Qk47O0FEanVCSTtFQUVFLGdCQUFBO0FDbXVCTjs7QURydUJJO0VBRUUsZ0JBQUE7QUN1dUJOOztBRHp1Qkk7RUFFRSxnQkFBQTtBQzJ1Qk47O0FEN3VCSTtFQUVFLGdCQUFBO0FDK3VCTjs7QURqdkJJO0VBRUUsZ0JBQUE7QUNtdkJOOztBRHJ2Qkk7RUFFRSxnQkFBQTtBQ3V2Qk47O0FEenZCSTtFQUVFLGdCQUFBO0FDMnZCTjs7QUQ3dkJJO0VBRUUsZ0JBQUE7QUMrdkJOOztBRGp3Qkk7RUFFRSxnQkFBQTtBQ213Qk47O0FEcndCSTtFQUVFLGdCQUFBO0FDdXdCTjs7QUR6d0JJO0VBRUUsZ0JBQUE7QUMyd0JOOztBRDd3Qkk7RUFFRSxnQkFBQTtBQyt3Qk47O0FEanhCSTtFQUVFLGdCQUFBO0FDbXhCTjs7QURyeEJJO0VBRUUsZ0JBQUE7QUN1eEJOOztBRHp4Qkk7RUFFRSxnQkFBQTtBQzJ4Qk47O0FEN3hCSTtFQUVFLGdCQUFBO0FDK3hCTjs7QURqeUJJO0VBRUUsZ0JBQUE7QUNteUJOOztBRHJ5Qkk7RUFFRSxnQkFBQTtBQ3V5Qk47O0FEenlCSTtFQUVFLGdCQUFBO0FDMnlCTjs7QUQ3eUJJO0VBRUUsZ0JBQUE7QUMreUJOOztBRGp6Qkk7RUFFRSxnQkFBQTtBQ216Qk47O0FEcnpCSTtFQUVFLGdCQUFBO0FDdXpCTjs7QUR6ekJJO0VBRUUsZ0JBQUE7QUMyekJOOztBRDd6Qkk7RUFFRSxnQkFBQTtBQyt6Qk47O0FEajBCSTtFQUVFLGdCQUFBO0FDbTBCTjs7QURyMEJJO0VBRUUsZ0JBQUE7QUN1MEJOOztBRHowQkk7RUFFRSxnQkFBQTtBQzIwQk47O0FENzBCSTtFQUVFLGdCQUFBO0FDKzBCTjs7QURqMUJJO0VBRUUsZ0JBQUE7QUNtMUJOOztBRHIxQkk7RUFFRSxnQkFBQTtBQ3UxQk47O0FEejFCSTtFQUVFLGdCQUFBO0FDMjFCTjs7QUQ3MUJJO0VBRUUsZ0JBQUE7QUMrMUJOOztBRGoyQkk7RUFFRSxnQkFBQTtBQ20yQk47O0FEcjJCSTtFQUVFLGdCQUFBO0FDdTJCTjs7QUR6MkJJO0VBRUUsZ0JBQUE7QUMyMkJOOztBRDcyQkk7RUFFRSxnQkFBQTtBQysyQk47O0FEajNCSTtFQUVFLGdCQUFBO0FDbTNCTjs7QURyM0JJO0VBRUUsZ0JBQUE7QUN1M0JOOztBRHozQkk7RUFFRSxnQkFBQTtBQzIzQk47O0FENzNCSTtFQUVFLGdCQUFBO0FDKzNCTjs7QURqNEJJO0VBRUUsZ0JBQUE7QUNtNEJOOztBRHI0Qkk7RUFFRSxnQkFBQTtBQ3U0Qk47O0FEejRCSTtFQUVFLGdCQUFBO0FDMjRCTjs7QUQ3NEJJO0VBRUUsZ0JBQUE7QUMrNEJOOztBRGo1Qkk7RUFFRSxnQkFBQTtBQ201Qk47O0FEcjVCSTtFQUVFLGdCQUFBO0FDdTVCTjs7QUR6NUJJO0VBRUUsZ0JBQUE7QUMyNUJOOztBRDc1Qkk7RUFFRSxnQkFBQTtBQys1Qk47O0FEajZCSTtFQUVFLGdCQUFBO0FDbTZCTjs7QURyNkJJO0VBRUUsZ0JBQUE7QUN1NkJOOztBRHo2Qkk7RUFFRSxnQkFBQTtBQzI2Qk47O0FENzZCSTtFQUVFLGdCQUFBO0FDKzZCTjs7QURqN0JJO0VBRUUsZ0JBQUE7QUNtN0JOOztBRHI3Qkk7RUFFRSxnQkFBQTtBQ3U3Qk47O0FEejdCSTtFQUVFLGdCQUFBO0FDMjdCTjs7QUQ3N0JJO0VBRUUsZ0JBQUE7QUMrN0JOOztBRGo4Qkk7RUFFRSxnQkFBQTtBQ204Qk47O0FEcjhCSTtFQUVFLGdCQUFBO0FDdThCTjs7QUR6OEJJO0VBRUUsZ0JBQUE7QUMyOEJOOztBRDc4Qkk7RUFFRSxnQkFBQTtBQys4Qk47O0FEajlCSTtFQUVFLGdCQUFBO0FDbTlCTjs7QURyOUJJO0VBRUUsZ0JBQUE7QUN1OUJOOztBRHo5Qkk7RUFFRSxnQkFBQTtBQzI5Qk47O0FENzlCSTtFQUVFLGdCQUFBO0FDKzlCTjs7QURqK0JJO0VBRUUsZ0JBQUE7QUNtK0JOOztBRHIrQkk7RUFFRSxnQkFBQTtBQ3UrQk47O0FEeitCSTtFQUVFLGdCQUFBO0FDMitCTjs7QUQ3K0JJO0VBRUUsZ0JBQUE7QUMrK0JOOztBRGovQkk7RUFFRSxnQkFBQTtBQ20vQk47O0FEci9CSTtFQUVFLGdCQUFBO0FDdS9CTjs7QUR6L0JJO0VBRUUsZ0JBQUE7QUMyL0JOOztBRDcvQkk7RUFFRSxnQkFBQTtBQysvQk47O0FEamdDSTtFQUVFLGdCQUFBO0FDbWdDTjs7QURyZ0NJO0VBRUUsZ0JBQUE7QUN1Z0NOOztBRHpnQ0k7RUFFRSxnQkFBQTtBQzJnQ047O0FEN2dDSTtFQUVFLGdCQUFBO0FDK2dDTjs7QURqaENJO0VBRUUsZ0JBQUE7QUNtaENOOztBRHJoQ0k7RUFFRSxnQkFBQTtBQ3VoQ047O0FEemhDSTtFQUVFLGdCQUFBO0FDMmhDTjs7QUQ3aENJO0VBRUUsZ0JBQUE7QUMraENOOztBRGppQ0k7RUFFRSxnQkFBQTtBQ21pQ047O0FEcmlDSTtFQUVFLGdCQUFBO0FDdWlDTjs7QUR6aUNJO0VBRUUsZ0JBQUE7QUMyaUNOOztBRDdpQ0k7RUFFRSxnQkFBQTtBQytpQ047O0FEampDSTtFQUVFLGdCQUFBO0FDbWpDTjs7QURyakNJO0VBRUUsZ0JBQUE7QUN1akNOOztBRHpqQ0k7RUFFRSxnQkFBQTtBQzJqQ047O0FEN2pDSTtFQUVFLGdCQUFBO0FDK2pDTjs7QURqa0NJO0VBRUUsZ0JBQUE7QUNta0NOOztBRHJrQ0k7RUFFRSxnQkFBQTtBQ3VrQ047O0FEemtDSTtFQUVFLGdCQUFBO0FDMmtDTjs7QUQ3a0NJO0VBRUUsZ0JBQUE7QUMra0NOOztBRGpsQ0k7RUFFRSxnQkFBQTtBQ21sQ047O0FEcmxDSTtFQUVFLGdCQUFBO0FDdWxDTjs7QUR6bENJO0VBRUUsZ0JBQUE7QUMybENOOztBRDdsQ0k7RUFFRSxnQkFBQTtBQytsQ047O0FEam1DSTtFQUVFLGdCQUFBO0FDbW1DTjs7QURybUNJO0VBRUUsZ0JBQUE7QUN1bUNOOztBRHptQ0k7RUFFRSxnQkFBQTtBQzJtQ047O0FEN21DSTtFQUVFLGdCQUFBO0FDK21DTjs7QURqbkNJO0VBRUUsZ0JBQUE7QUNtbkNOOztBRHJuQ0k7RUFFRSxnQkFBQTtBQ3VuQ047O0FEem5DSTtFQUVFLGdCQUFBO0FDMm5DTjs7QUQ3bkNJO0VBRUUsZ0JBQUE7QUMrbkNOOztBRGpvQ0k7RUFFRSxnQkFBQTtBQ21vQ047O0FEcm9DSTtFQUVFLGdCQUFBO0FDdW9DTjs7QUR6b0NJO0VBRUUsZ0JBQUE7QUMyb0NOOztBRDdvQ0k7RUFFRSxnQkFBQTtBQytvQ047O0FEanBDSTtFQUVFLGdCQUFBO0FDbXBDTjs7QURycENJO0VBRUUsZ0JBQUE7QUN1cENOOztBRHpwQ0k7RUFFRSxnQkFBQTtBQzJwQ047O0FEN3BDSTtFQUVFLGdCQUFBO0FDK3BDTjs7QURqcUNJO0VBRUUsZ0JBQUE7QUNtcUNOOztBRHJxQ0k7RUFFRSxnQkFBQTtBQ3VxQ047O0FEenFDSTtFQUVFLGdCQUFBO0FDMnFDTjs7QUQ3cUNJO0VBRUUsZ0JBQUE7QUMrcUNOOztBRDNxQ0U7RUFDRSxvQkFBQTtBQzhxQ0o7O0FEM3FDQTtFQUNJLHNCQUFBO0FDOHFDSjs7QUQzcUNBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDOHFDSjs7QUQzcUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQzhxQ0oiLCJmaWxlIjoicHVyY2hhc2Utb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgfVxyXG4gIEBmb3IgJGluZGV4IGZyb20gMCB0aHJvdWdoIDMwMCB7XHJcbiAgICAkc2l6ZTogJGluZGV4ICogMjtcclxuICAgIC50YWJsZS1jb2x1bW4tI3skc2l6ZX0ge1xyXG4gICAgICAvLyBmbGV4OiAwIDEgI3skc2l6ZX0je1wicHhcIn07XHJcbiAgICAgIG1pbi13aWR0aDogI3skc2l6ZX0je1wicHhcIn07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0ci5leGFtcGxlLWRldGFpbC1yb3cge1xyXG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5IDogZmxleDtcclxufVxyXG5cclxuLmlubmVyLXRhYmxlIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSIsIi5tYXQtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi50YWJsZS1jb2x1bW4tMCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIge1xuICBtaW4td2lkdGg6IDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00IHtcbiAgbWluLXdpZHRoOiA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNiB7XG4gIG1pbi13aWR0aDogNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTgge1xuICBtaW4td2lkdGg6IDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMCB7XG4gIG1pbi13aWR0aDogMTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMiB7XG4gIG1pbi13aWR0aDogMTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNCB7XG4gIG1pbi13aWR0aDogMTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNiB7XG4gIG1pbi13aWR0aDogMTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOCB7XG4gIG1pbi13aWR0aDogMThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMCB7XG4gIG1pbi13aWR0aDogMjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMiB7XG4gIG1pbi13aWR0aDogMjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNCB7XG4gIG1pbi13aWR0aDogMjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNiB7XG4gIG1pbi13aWR0aDogMjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOCB7XG4gIG1pbi13aWR0aDogMjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMCB7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMiB7XG4gIG1pbi13aWR0aDogMzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNCB7XG4gIG1pbi13aWR0aDogMzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNiB7XG4gIG1pbi13aWR0aDogMzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zOCB7XG4gIG1pbi13aWR0aDogMzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MCB7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MiB7XG4gIG1pbi13aWR0aDogNDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NCB7XG4gIG1pbi13aWR0aDogNDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NiB7XG4gIG1pbi13aWR0aDogNDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OCB7XG4gIG1pbi13aWR0aDogNDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MCB7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MiB7XG4gIG1pbi13aWR0aDogNTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NCB7XG4gIG1pbi13aWR0aDogNTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NiB7XG4gIG1pbi13aWR0aDogNTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OCB7XG4gIG1pbi13aWR0aDogNThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02MCB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02MiB7XG4gIG1pbi13aWR0aDogNjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02NCB7XG4gIG1pbi13aWR0aDogNjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02NiB7XG4gIG1pbi13aWR0aDogNjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02OCB7XG4gIG1pbi13aWR0aDogNjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03MCB7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03MiB7XG4gIG1pbi13aWR0aDogNzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03NCB7XG4gIG1pbi13aWR0aDogNzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03NiB7XG4gIG1pbi13aWR0aDogNzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03OCB7XG4gIG1pbi13aWR0aDogNzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04MCB7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04MiB7XG4gIG1pbi13aWR0aDogODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04NCB7XG4gIG1pbi13aWR0aDogODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04NiB7XG4gIG1pbi13aWR0aDogODZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04OCB7XG4gIG1pbi13aWR0aDogODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05MCB7XG4gIG1pbi13aWR0aDogOTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05MiB7XG4gIG1pbi13aWR0aDogOTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05NCB7XG4gIG1pbi13aWR0aDogOTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05NiB7XG4gIG1pbi13aWR0aDogOTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05OCB7XG4gIG1pbi13aWR0aDogOThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMDAge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEwMiB7XG4gIG1pbi13aWR0aDogMTAycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTA0IHtcbiAgbWluLXdpZHRoOiAxMDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMDYge1xuICBtaW4td2lkdGg6IDEwNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTEwOCB7XG4gIG1pbi13aWR0aDogMTA4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTEwIHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMTIge1xuICBtaW4td2lkdGg6IDExMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTExNCB7XG4gIG1pbi13aWR0aDogMTE0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTE2IHtcbiAgbWluLXdpZHRoOiAxMTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMTgge1xuICBtaW4td2lkdGg6IDExOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEyMCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTIyIHtcbiAgbWluLXdpZHRoOiAxMjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMjQge1xuICBtaW4td2lkdGg6IDEyNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEyNiB7XG4gIG1pbi13aWR0aDogMTI2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTI4IHtcbiAgbWluLXdpZHRoOiAxMjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMzAge1xuICBtaW4td2lkdGg6IDEzMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEzMiB7XG4gIG1pbi13aWR0aDogMTMycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTM0IHtcbiAgbWluLXdpZHRoOiAxMzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMzYge1xuICBtaW4td2lkdGg6IDEzNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTEzOCB7XG4gIG1pbi13aWR0aDogMTM4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTQwIHtcbiAgbWluLXdpZHRoOiAxNDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNDIge1xuICBtaW4td2lkdGg6IDE0MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE0NCB7XG4gIG1pbi13aWR0aDogMTQ0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTQ2IHtcbiAgbWluLXdpZHRoOiAxNDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNDgge1xuICBtaW4td2lkdGg6IDE0OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE1MCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTUyIHtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNTQge1xuICBtaW4td2lkdGg6IDE1NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE1NiB7XG4gIG1pbi13aWR0aDogMTU2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTU4IHtcbiAgbWluLXdpZHRoOiAxNThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNjAge1xuICBtaW4td2lkdGg6IDE2MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE2MiB7XG4gIG1pbi13aWR0aDogMTYycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTY0IHtcbiAgbWluLXdpZHRoOiAxNjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNjYge1xuICBtaW4td2lkdGg6IDE2NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE2OCB7XG4gIG1pbi13aWR0aDogMTY4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTcwIHtcbiAgbWluLXdpZHRoOiAxNzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNzIge1xuICBtaW4td2lkdGg6IDE3MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE3NCB7XG4gIG1pbi13aWR0aDogMTc0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTc2IHtcbiAgbWluLXdpZHRoOiAxNzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNzgge1xuICBtaW4td2lkdGg6IDE3OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE4MCB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTgyIHtcbiAgbWluLXdpZHRoOiAxODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xODQge1xuICBtaW4td2lkdGg6IDE4NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE4NiB7XG4gIG1pbi13aWR0aDogMTg2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTg4IHtcbiAgbWluLXdpZHRoOiAxODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOTAge1xuICBtaW4td2lkdGg6IDE5MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE5MiB7XG4gIG1pbi13aWR0aDogMTkycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTk0IHtcbiAgbWluLXdpZHRoOiAxOTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOTYge1xuICBtaW4td2lkdGg6IDE5NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE5OCB7XG4gIG1pbi13aWR0aDogMTk4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjAwIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMDIge1xuICBtaW4td2lkdGg6IDIwMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIwNCB7XG4gIG1pbi13aWR0aDogMjA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjA2IHtcbiAgbWluLXdpZHRoOiAyMDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMDgge1xuICBtaW4td2lkdGg6IDIwOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIxMCB7XG4gIG1pbi13aWR0aDogMjEwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjEyIHtcbiAgbWluLXdpZHRoOiAyMTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMTQge1xuICBtaW4td2lkdGg6IDIxNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIxNiB7XG4gIG1pbi13aWR0aDogMjE2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjE4IHtcbiAgbWluLXdpZHRoOiAyMThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMjAge1xuICBtaW4td2lkdGg6IDIyMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIyMiB7XG4gIG1pbi13aWR0aDogMjIycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjI0IHtcbiAgbWluLXdpZHRoOiAyMjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMjYge1xuICBtaW4td2lkdGg6IDIyNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIyOCB7XG4gIG1pbi13aWR0aDogMjI4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjMwIHtcbiAgbWluLXdpZHRoOiAyMzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMzIge1xuICBtaW4td2lkdGg6IDIzMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIzNCB7XG4gIG1pbi13aWR0aDogMjM0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjM2IHtcbiAgbWluLXdpZHRoOiAyMzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMzgge1xuICBtaW4td2lkdGg6IDIzOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI0MCB7XG4gIG1pbi13aWR0aDogMjQwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjQyIHtcbiAgbWluLXdpZHRoOiAyNDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNDQge1xuICBtaW4td2lkdGg6IDI0NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI0NiB7XG4gIG1pbi13aWR0aDogMjQ2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjQ4IHtcbiAgbWluLXdpZHRoOiAyNDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNTAge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI1MiB7XG4gIG1pbi13aWR0aDogMjUycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjU0IHtcbiAgbWluLXdpZHRoOiAyNTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNTYge1xuICBtaW4td2lkdGg6IDI1NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI1OCB7XG4gIG1pbi13aWR0aDogMjU4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjYwIHtcbiAgbWluLXdpZHRoOiAyNjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNjIge1xuICBtaW4td2lkdGg6IDI2MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI2NCB7XG4gIG1pbi13aWR0aDogMjY0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjY2IHtcbiAgbWluLXdpZHRoOiAyNjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNjgge1xuICBtaW4td2lkdGg6IDI2OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI3MCB7XG4gIG1pbi13aWR0aDogMjcwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjcyIHtcbiAgbWluLXdpZHRoOiAyNzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNzQge1xuICBtaW4td2lkdGg6IDI3NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI3NiB7XG4gIG1pbi13aWR0aDogMjc2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjc4IHtcbiAgbWluLXdpZHRoOiAyNzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yODAge1xuICBtaW4td2lkdGg6IDI4MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI4MiB7XG4gIG1pbi13aWR0aDogMjgycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjg0IHtcbiAgbWluLXdpZHRoOiAyODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yODYge1xuICBtaW4td2lkdGg6IDI4NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI4OCB7XG4gIG1pbi13aWR0aDogMjg4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjkwIHtcbiAgbWluLXdpZHRoOiAyOTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOTIge1xuICBtaW4td2lkdGg6IDI5MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI5NCB7XG4gIG1pbi13aWR0aDogMjk0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjk2IHtcbiAgbWluLXdpZHRoOiAyOTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOTgge1xuICBtaW4td2lkdGg6IDI5OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMwMCB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzAyIHtcbiAgbWluLXdpZHRoOiAzMDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMDQge1xuICBtaW4td2lkdGg6IDMwNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMwNiB7XG4gIG1pbi13aWR0aDogMzA2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzA4IHtcbiAgbWluLXdpZHRoOiAzMDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMTAge1xuICBtaW4td2lkdGg6IDMxMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMxMiB7XG4gIG1pbi13aWR0aDogMzEycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzE0IHtcbiAgbWluLXdpZHRoOiAzMTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMTYge1xuICBtaW4td2lkdGg6IDMxNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTMxOCB7XG4gIG1pbi13aWR0aDogMzE4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzIwIHtcbiAgbWluLXdpZHRoOiAzMjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMjIge1xuICBtaW4td2lkdGg6IDMyMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTMyNCB7XG4gIG1pbi13aWR0aDogMzI0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzI2IHtcbiAgbWluLXdpZHRoOiAzMjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMjgge1xuICBtaW4td2lkdGg6IDMyOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMzMCB7XG4gIG1pbi13aWR0aDogMzMwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzMyIHtcbiAgbWluLXdpZHRoOiAzMzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMzQge1xuICBtaW4td2lkdGg6IDMzNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMzNiB7XG4gIG1pbi13aWR0aDogMzM2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzM4IHtcbiAgbWluLXdpZHRoOiAzMzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNDAge1xuICBtaW4td2lkdGg6IDM0MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM0MiB7XG4gIG1pbi13aWR0aDogMzQycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzQ0IHtcbiAgbWluLXdpZHRoOiAzNDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNDYge1xuICBtaW4td2lkdGg6IDM0NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM0OCB7XG4gIG1pbi13aWR0aDogMzQ4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzUwIHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNTIge1xuICBtaW4td2lkdGg6IDM1MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM1NCB7XG4gIG1pbi13aWR0aDogMzU0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzU2IHtcbiAgbWluLXdpZHRoOiAzNTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNTgge1xuICBtaW4td2lkdGg6IDM1OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM2MCB7XG4gIG1pbi13aWR0aDogMzYwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzYyIHtcbiAgbWluLXdpZHRoOiAzNjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNjQge1xuICBtaW4td2lkdGg6IDM2NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM2NiB7XG4gIG1pbi13aWR0aDogMzY2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzY4IHtcbiAgbWluLXdpZHRoOiAzNjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNzAge1xuICBtaW4td2lkdGg6IDM3MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM3MiB7XG4gIG1pbi13aWR0aDogMzcycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzc0IHtcbiAgbWluLXdpZHRoOiAzNzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNzYge1xuICBtaW4td2lkdGg6IDM3NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM3OCB7XG4gIG1pbi13aWR0aDogMzc4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzgwIHtcbiAgbWluLXdpZHRoOiAzODBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zODIge1xuICBtaW4td2lkdGg6IDM4MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM4NCB7XG4gIG1pbi13aWR0aDogMzg0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzg2IHtcbiAgbWluLXdpZHRoOiAzODZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zODgge1xuICBtaW4td2lkdGg6IDM4OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM5MCB7XG4gIG1pbi13aWR0aDogMzkwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzkyIHtcbiAgbWluLXdpZHRoOiAzOTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zOTQge1xuICBtaW4td2lkdGg6IDM5NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM5NiB7XG4gIG1pbi13aWR0aDogMzk2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzk4IHtcbiAgbWluLXdpZHRoOiAzOThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MDAge1xuICBtaW4td2lkdGg6IDQwMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQwMiB7XG4gIG1pbi13aWR0aDogNDAycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDA0IHtcbiAgbWluLXdpZHRoOiA0MDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MDYge1xuICBtaW4td2lkdGg6IDQwNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQwOCB7XG4gIG1pbi13aWR0aDogNDA4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDEwIHtcbiAgbWluLXdpZHRoOiA0MTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MTIge1xuICBtaW4td2lkdGg6IDQxMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQxNCB7XG4gIG1pbi13aWR0aDogNDE0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDE2IHtcbiAgbWluLXdpZHRoOiA0MTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MTgge1xuICBtaW4td2lkdGg6IDQxOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQyMCB7XG4gIG1pbi13aWR0aDogNDIwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDIyIHtcbiAgbWluLXdpZHRoOiA0MjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MjQge1xuICBtaW4td2lkdGg6IDQyNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQyNiB7XG4gIG1pbi13aWR0aDogNDI2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDI4IHtcbiAgbWluLXdpZHRoOiA0MjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MzAge1xuICBtaW4td2lkdGg6IDQzMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQzMiB7XG4gIG1pbi13aWR0aDogNDMycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDM0IHtcbiAgbWluLXdpZHRoOiA0MzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MzYge1xuICBtaW4td2lkdGg6IDQzNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQzOCB7XG4gIG1pbi13aWR0aDogNDM4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDQwIHtcbiAgbWluLXdpZHRoOiA0NDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NDIge1xuICBtaW4td2lkdGg6IDQ0MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ0NCB7XG4gIG1pbi13aWR0aDogNDQ0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDQ2IHtcbiAgbWluLXdpZHRoOiA0NDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NDgge1xuICBtaW4td2lkdGg6IDQ0OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ1MCB7XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDUyIHtcbiAgbWluLXdpZHRoOiA0NTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NTQge1xuICBtaW4td2lkdGg6IDQ1NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ1NiB7XG4gIG1pbi13aWR0aDogNDU2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDU4IHtcbiAgbWluLXdpZHRoOiA0NThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NjAge1xuICBtaW4td2lkdGg6IDQ2MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ2MiB7XG4gIG1pbi13aWR0aDogNDYycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDY0IHtcbiAgbWluLXdpZHRoOiA0NjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NjYge1xuICBtaW4td2lkdGg6IDQ2NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ2OCB7XG4gIG1pbi13aWR0aDogNDY4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDcwIHtcbiAgbWluLXdpZHRoOiA0NzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NzIge1xuICBtaW4td2lkdGg6IDQ3MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ3NCB7XG4gIG1pbi13aWR0aDogNDc0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDc2IHtcbiAgbWluLXdpZHRoOiA0NzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00Nzgge1xuICBtaW4td2lkdGg6IDQ3OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ4MCB7XG4gIG1pbi13aWR0aDogNDgwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDgyIHtcbiAgbWluLXdpZHRoOiA0ODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00ODQge1xuICBtaW4td2lkdGg6IDQ4NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ4NiB7XG4gIG1pbi13aWR0aDogNDg2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDg4IHtcbiAgbWluLXdpZHRoOiA0ODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OTAge1xuICBtaW4td2lkdGg6IDQ5MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ5MiB7XG4gIG1pbi13aWR0aDogNDkycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDk0IHtcbiAgbWluLXdpZHRoOiA0OTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OTYge1xuICBtaW4td2lkdGg6IDQ5NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ5OCB7XG4gIG1pbi13aWR0aDogNDk4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTAwIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MDIge1xuICBtaW4td2lkdGg6IDUwMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUwNCB7XG4gIG1pbi13aWR0aDogNTA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTA2IHtcbiAgbWluLXdpZHRoOiA1MDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MDgge1xuICBtaW4td2lkdGg6IDUwOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUxMCB7XG4gIG1pbi13aWR0aDogNTEwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTEyIHtcbiAgbWluLXdpZHRoOiA1MTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MTQge1xuICBtaW4td2lkdGg6IDUxNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUxNiB7XG4gIG1pbi13aWR0aDogNTE2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTE4IHtcbiAgbWluLXdpZHRoOiA1MThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MjAge1xuICBtaW4td2lkdGg6IDUyMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUyMiB7XG4gIG1pbi13aWR0aDogNTIycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTI0IHtcbiAgbWluLXdpZHRoOiA1MjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MjYge1xuICBtaW4td2lkdGg6IDUyNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUyOCB7XG4gIG1pbi13aWR0aDogNTI4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTMwIHtcbiAgbWluLXdpZHRoOiA1MzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MzIge1xuICBtaW4td2lkdGg6IDUzMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUzNCB7XG4gIG1pbi13aWR0aDogNTM0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTM2IHtcbiAgbWluLXdpZHRoOiA1MzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01Mzgge1xuICBtaW4td2lkdGg6IDUzOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU0MCB7XG4gIG1pbi13aWR0aDogNTQwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTQyIHtcbiAgbWluLXdpZHRoOiA1NDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NDQge1xuICBtaW4td2lkdGg6IDU0NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU0NiB7XG4gIG1pbi13aWR0aDogNTQ2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTQ4IHtcbiAgbWluLXdpZHRoOiA1NDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NTAge1xuICBtaW4td2lkdGg6IDU1MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU1MiB7XG4gIG1pbi13aWR0aDogNTUycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTU0IHtcbiAgbWluLXdpZHRoOiA1NTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NTYge1xuICBtaW4td2lkdGg6IDU1NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU1OCB7XG4gIG1pbi13aWR0aDogNTU4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTYwIHtcbiAgbWluLXdpZHRoOiA1NjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NjIge1xuICBtaW4td2lkdGg6IDU2MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU2NCB7XG4gIG1pbi13aWR0aDogNTY0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTY2IHtcbiAgbWluLXdpZHRoOiA1NjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01Njgge1xuICBtaW4td2lkdGg6IDU2OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU3MCB7XG4gIG1pbi13aWR0aDogNTcwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTcyIHtcbiAgbWluLXdpZHRoOiA1NzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NzQge1xuICBtaW4td2lkdGg6IDU3NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU3NiB7XG4gIG1pbi13aWR0aDogNTc2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTc4IHtcbiAgbWluLXdpZHRoOiA1NzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01ODAge1xuICBtaW4td2lkdGg6IDU4MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU4MiB7XG4gIG1pbi13aWR0aDogNTgycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTg0IHtcbiAgbWluLXdpZHRoOiA1ODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01ODYge1xuICBtaW4td2lkdGg6IDU4NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU4OCB7XG4gIG1pbi13aWR0aDogNTg4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTkwIHtcbiAgbWluLXdpZHRoOiA1OTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OTIge1xuICBtaW4td2lkdGg6IDU5MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU5NCB7XG4gIG1pbi13aWR0aDogNTk0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTk2IHtcbiAgbWluLXdpZHRoOiA1OTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OTgge1xuICBtaW4td2lkdGg6IDU5OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTYwMCB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlubmVyLXRhYmxlIHtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 58205:
/*!*****************************************************************!*\
  !*** ./src/app/purchase-order/purchase-order-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderRoutingModule": () => (/* binding */ PurchaseOrderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/products.resolve */ 29147);
/* harmony import */ var _purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-order-add-edit/purchase-order-add-edit.component */ 92684);
/* harmony import */ var _purchase_order_add_edit_purchase_order_by_id_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-order-add-edit/purchase-order-by-id.resolve */ 98408);
/* harmony import */ var _purchase_order_add_edit_purchase_order_tax_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-order-add-edit/purchase-order-tax.resolve */ 99117);
/* harmony import */ var _purchase_order_add_edit_purchase_order_unit_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-order-add-edit/purchase-order-unit.resolve */ 78489);
/* harmony import */ var _purchase_order_add_edit_purchase_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-order-add-edit/purchase-order-warehouse.resolve */ 21798);
/* harmony import */ var _purchase_order_detail_purchase_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchase-order-detail/purchase-order-detail.component */ 24109);
/* harmony import */ var _purchase_order_list_purchase_order_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./purchase-order-list/purchase-order-list.component */ 750);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    {
        path: 'list',
        component: _purchase_order_list_purchase_order_list_component__WEBPACK_IMPORTED_MODULE_8__.PurchaseOrderListComponent,
        data: { claimType: 'PO_VIEW_PURCHASE_ORDERS' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }, {
        path: ':id',
        component: _purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderAddEditComponent,
        data: { claimType: ['PO_ADD_PO', 'PO_UPDATE_PO', 'POR_CONVERT_TO_PO'] },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        resolve: {
            'units': _purchase_order_add_edit_purchase_order_unit_resolve__WEBPACK_IMPORTED_MODULE_5__.PurchaseOrderUnitResolver,
            'warehouses': _purchase_order_add_edit_purchase_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderWarehouseResolver,
            'taxs': _purchase_order_add_edit_purchase_order_tax_resolve__WEBPACK_IMPORTED_MODULE_4__.PurchaseOrderTaxResolver,
            'purchaseorder': _purchase_order_add_edit_purchase_order_by_id_resolve__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderByIdResolver,
            'products': _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__.ProductsResolver
        }
    },
    {
        path: 'detail/:id',
        component: _purchase_order_detail_purchase_order_detail_component__WEBPACK_IMPORTED_MODULE_7__.PurchaseOrderDetailComponent,
        data: { claimType: ['PO_VIEW_PO_DETAIL', 'POR_POR_DETAIL'] },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
class PurchaseOrderRoutingModule {
}
PurchaseOrderRoutingModule.ɵfac = function PurchaseOrderRoutingModule_Factory(t) { return new (t || PurchaseOrderRoutingModule)(); };
PurchaseOrderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: PurchaseOrderRoutingModule });
PurchaseOrderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](PurchaseOrderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 32008:
/*!*********************************************************!*\
  !*** ./src/app/purchase-order/purchase-order.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderModule": () => (/* binding */ PurchaseOrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-order-routing.module */ 58205);
/* harmony import */ var _purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-order-add-edit/purchase-order-add-edit.component */ 92684);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _purchase_order_list_purchase_order_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-order-list/purchase-order-list.component */ 750);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _purchase_order_detail_purchase_order_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-order-detail/purchase-order-detail.component */ 24109);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _purchase_order_item_purchase_order_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-order-item/purchase-order-item.component */ 90521);
/* harmony import */ var _add_purchase_order_payments_add_purchase_order_payments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-purchase-order-payments/add-purchase-order-payments.component */ 26414);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _view_purchase_order_payment_view_purchase_order_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-purchase-order-payment/view-purchase-order-payment.component */ 31421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);






























class PurchaseOrderModule {
}
PurchaseOrderModule.ɵfac = function PurchaseOrderModule_Factory(t) { return new (t || PurchaseOrderModule)(); };
PurchaseOrderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PurchaseOrderModule });
PurchaseOrderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_26__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_26__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PurchaseOrderModule, { declarations: [_purchase_order_add_edit_purchase_order_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderAddEditComponent,
        _purchase_order_list_purchase_order_list_component__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderListComponent,
        _purchase_order_detail_purchase_order_detail_component__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderDetailComponent,
        _purchase_order_item_purchase_order_item_component__WEBPACK_IMPORTED_MODULE_5__.PurchaseOrderItemComponent,
        _add_purchase_order_payments_add_purchase_order_payments_component__WEBPACK_IMPORTED_MODULE_6__.AddPurchaseOrderPaymentsComponent,
        _view_purchase_order_payment_view_purchase_order_payment_component__WEBPACK_IMPORTED_MODULE_7__.ViewPurchaseOrderPaymentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _purchase_order_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_26__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_26__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialogModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_purchase-order_purchase-order_module_ts.js.map