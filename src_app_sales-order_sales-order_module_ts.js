"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_sales-order_sales-order_module_ts"],{

/***/ 5528:
/*!************************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-add-edit/sales-order-add-edit.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderAddEditComponent": () => (/* binding */ SalesOrderAddEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/customer-resource-parameter */ 13231);
/* harmony import */ var _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/delivery-status-enum */ 3007);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/domain-classes/sales-order-status */ 80002);
/* harmony import */ var _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice-tax.pipe */ 76521);
/* harmony import */ var _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice.pipe */ 16695);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/domain-classes/operator */ 22746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/customer/customer.service */ 61781);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _sales_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sales-order.service */ 40838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/tax.service */ 36018);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/unit-conversation/unit-conversation.service */ 14603);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





































function SalesOrderAddEditComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "SO_ORDER_NUMBER_IS_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_div_17_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.salesOrderForm.get("orderNumber").errors == null ? null : ctx_r0.salesOrderForm.get("orderNumber").errors.required);
} }
function SalesOrderAddEditComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "ORDER_DATE_IS_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_div_25_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.salesOrderForm.get("soCreatedDate").errors == null ? null : ctx_r1.salesOrderForm.get("soCreatedDate").errors.required);
} }
function SalesOrderAddEditComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_div_35_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r3.salesOrderForm.get("deliveryDate").errors == null ? null : ctx_r3.salesOrderForm.get("deliveryDate").errors.required);
} }
function SalesOrderAddEditComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r15 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r5.langDir)("value", customer_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", customer_r15.customerName, " ");
} }
function SalesOrderAddEditComponent_mat_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function SalesOrderAddEditComponent_div_51_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "CUSTOMER_NAME_IS_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_div_51_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r7.salesOrderForm.get("customerId").errors == null ? null : ctx_r7.salesOrderForm.get("customerId").errors.required);
} }
function SalesOrderAddEditComponent_tr_124_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderAddEditComponent_tr_124_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r35); const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r33.onRemoveSalesOrderItem(i_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function SalesOrderAddEditComponent_tr_124_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r36 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r20.langDir)("value", a_r36.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", a_r36.name, " ");
} }
function SalesOrderAddEditComponent_tr_124_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "PRODUCT_IS_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_tr_124_div_11_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("productId").errors == null ? null : salesOrderItem_r17.get("productId").errors.required);
} }
function SalesOrderAddEditComponent_tr_124_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const warehouse_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", warehouse_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", warehouse_r39.name, " ");
} }
function SalesOrderAddEditComponent_tr_124_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r40 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r24.langDir)("value", a_r40.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", a_r40.name, " ");
} }
function SalesOrderAddEditComponent_tr_124_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "UNIT_IS_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_tr_124_div_18_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("unitId").errors == null ? null : salesOrderItem_r17.get("unitId").errors.required);
} }
function SalesOrderAddEditComponent_tr_124_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE_IS_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_22_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "PRICE_SHOULD_BE_MORE_THEN_0"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_tr_124_div_22_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, SalesOrderAddEditComponent_tr_124_div_22_div_2_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("unitPrice").errors == null ? null : salesOrderItem_r17.get("unitPrice").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("unitPrice").errors == null ? null : salesOrderItem_r17.get("unitPrice").errors.min);
} }
function SalesOrderAddEditComponent_tr_124_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "QUANTITY_SHOULD_BE_MORE_THEN_0"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_tr_124_div_26_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, SalesOrderAddEditComponent_tr_124_div_26_div_2_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("quantity").errors == null ? null : salesOrderItem_r17.get("quantity").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("quantity").errors == null ? null : salesOrderItem_r17.get("quantity").errors.min);
} }
function SalesOrderAddEditComponent_tr_124_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "DISCOUNT_SHOULD_BE_MORE_THEN_0"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "DISCOUNT_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind3"](4, 6, salesOrderItem_r17.get("quantity").value, salesOrderItem_r17.get("unitPrice").value, salesOrderItem_r17.get("discountPercentage").value)), " ");
} }
function SalesOrderAddEditComponent_tr_124_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r50 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r30.langDir)("value", tax_r50.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", tax_r50.name, " (", tax_r50.percentage, "%) ");
} }
function SalesOrderAddEditComponent_tr_124_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TAX_IS_REQUIRED"), " ");
} }
function SalesOrderAddEditComponent_tr_124_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_tr_124_div_44_div_1_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("taxValue").errors == null ? null : salesOrderItem_r17.get("taxValue").errors.required);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function SalesOrderAddEditComponent_tr_124_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const salesOrderItem_r17 = ctx_r53.$implicit;
    const i_r18 = ctx_r53.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "TAX_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](12, _c0, salesOrderItem_r17.get("quantity").value, salesOrderItem_r17.get("unitPrice").value, salesOrderItem_r17.get("discountPercentage").value, salesOrderItem_r17.get("taxValue").value, ctx_r32.taxsMap[i_r18]))), " ");
} }
function SalesOrderAddEditComponent_tr_124_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 58)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, SalesOrderAddEditComponent_tr_124_button_2_Template, 3, 0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td")(4, "mat-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function SalesOrderAddEditComponent_tr_124_Template_mat_select_selectionChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55); const i_r18 = restoredCtx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r54.onProductSelectionChange($event.value, i_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, SalesOrderAddEditComponent_tr_124_mat_option_9_Template, 2, 3, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, SalesOrderAddEditComponent_tr_124_mat_option_10_Template, 3, 3, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, SalesOrderAddEditComponent_tr_124_div_11_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "td")(13, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, SalesOrderAddEditComponent_tr_124_mat_option_14_Template, 2, 2, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "td")(16, "mat-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function SalesOrderAddEditComponent_tr_124_Template_mat_select_selectionChange_16_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55); const i_r18 = restoredCtx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r56.onSelectionChange($event.value, i_r18)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, SalesOrderAddEditComponent_tr_124_mat_option_17_Template, 2, 3, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, SalesOrderAddEditComponent_tr_124_div_18_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "td")(20, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function SalesOrderAddEditComponent_tr_124_Template_input_change_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r57.onUnitPriceChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, SalesOrderAddEditComponent_tr_124_div_22_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "td")(24, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function SalesOrderAddEditComponent_tr_124_Template_input_change_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r58.onQuantityChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, SalesOrderAddEditComponent_tr_124_div_26_Template, 3, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](29, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "td")(32, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function SalesOrderAddEditComponent_tr_124_Template_input_change_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r59.onDiscountChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](34, SalesOrderAddEditComponent_tr_124_div_34_Template, 3, 3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](37, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](38, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](39, SalesOrderAddEditComponent_tr_124_div_39_Template, 5, 10, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "td")(41, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function SalesOrderAddEditComponent_tr_124_Template_mat_select_selectionChange_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r55); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r60.onTaxSelectionChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](43, SalesOrderAddEditComponent_tr_124_mat_option_43_Template, 2, 4, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, SalesOrderAddEditComponent_tr_124_div_44_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](47, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](48, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](49, SalesOrderAddEditComponent_tr_124_div_49_Template, 5, 18, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const salesOrderItem_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroupName", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", (ctx_r9.salesOrderItemsArray == null ? null : ctx_r9.salesOrderItemsArray.controls.length) !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 28, "SELECT_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r9.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 30, "SEARCH_OTHER_PRODUCTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r9.filterProductsMap[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r9.filterProductsMap[i_r18].length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("productId").touched && salesOrderItem_r17.get("productId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r9.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r9.warehouseMap[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r9.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r9.unitsMap[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("unitId").touched && salesOrderItem_r17.get("unitId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 32, "UNIT_PER_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("unitPrice").touched && salesOrderItem_r17.get("unitPrice").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](25, 34, "QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("quantity").touched && salesOrderItem_r17.get("quantity").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](29, 36, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](30, 38, salesOrderItem_r17.get("quantity").value, salesOrderItem_r17.get("unitPrice").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](33, 41, "DISCOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("discountPercentage").errors == null ? null : salesOrderItem_r17.get("discountPercentage").errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](37, 43, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind3"](38, 45, salesOrderItem_r17.get("quantity").value, salesOrderItem_r17.get("unitPrice").value, salesOrderItem_r17.get("discountPercentage").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("discountPercentage").value != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](42, 49, "SELECT_TAX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r9.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r9.taxsMap[i_r18]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("taxValue").touched && salesOrderItem_r17.get("taxValue").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](47, 51, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](48, 53, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](59, _c0, salesOrderItem_r17.get("quantity").value, salesOrderItem_r17.get("unitPrice").value, salesOrderItem_r17.get("discountPercentage").value, salesOrderItem_r17.get("taxValue").value, ctx_r9.taxsMap[i_r18]))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r17.get("taxValue").value);
} }
function SalesOrderAddEditComponent_button_158_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderAddEditComponent_button_158_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.onSalesOrderSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "SAVE"), "");
} }
function SalesOrderAddEditComponent_div_163_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-spinner");
} }
function SalesOrderAddEditComponent_div_163_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderAddEditComponent_div_163_mat_spinner_1_Template, 1, 0, "mat-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r11.isLoading);
} }
const _c1 = function () { return ["SO_ADD_SO", "SO_UPDATE_SO", "SO_RETURN_SO"]; };
class SalesOrderAddEditComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_6__.BaseComponent {
    constructor(fb, customerService, toastrService, salesOrderService, router, taxService, productService, route, quantitiesUnitPricePipe, quantitiesUnitPriceTaxPipe, translationService, unitConversationService) {
        super(translationService);
        this.fb = fb;
        this.customerService = customerService;
        this.toastrService = toastrService;
        this.salesOrderService = salesOrderService;
        this.router = router;
        this.taxService = taxService;
        this.productService = productService;
        this.route = route;
        this.quantitiesUnitPricePipe = quantitiesUnitPricePipe;
        this.quantitiesUnitPriceTaxPipe = quantitiesUnitPriceTaxPipe;
        this.translationService = translationService;
        this.unitConversationService = unitConversationService;
        this.products = [];
        this.customers = [];
        this.warehouseList = [];
        this.isLoading = false;
        this.isCustomerLoading = false;
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
        this.getLangDir();
        this.customerResource = new _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.CustomerResourceParameter();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_2__.ProductResourceParameter();
    }
    get salesOrderItemsArray() {
        return this.salesOrderForm.get('salesOrderItems');
    }
    ngOnInit() {
        this.unitConversationlist = [...this.route.snapshot.data['units']];
        this.warehouseList = [...this.route.snapshot.data['warehouses']];
        this.getSalesOrderById();
        this.createSalesOrder();
        this.customerNameChangeValue();
        this.getNewSalesOrderNumber();
        this.getTaxes();
        this.getProductByBarCodeValue();
    }
    onFilterValue(filterValue) {
        console.log(filterValue);
    }
    getTaxes() {
        this.taxes$ = this.taxService.entities$;
    }
    createSalesOrder() {
        this.route.data
            .pipe()
            .subscribe((salesOrderData) => {
            this.salesOrder = salesOrderData.salesorder;
            if (this.salesOrder) {
                this.isEdit = true;
                this.salesOrderForm = this.fb.group({
                    orderNumber: [this.salesOrder.orderNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                    filerCustomer: [''],
                    deliveryDate: [this.salesOrder.deliveryDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                    soCreatedDate: [this.salesOrder.soCreatedDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                    deliveryStatus: [this.salesOrder.deliveryStatus],
                    customerId: [this.salesOrder.customerId, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
                    note: [this.salesOrder.note],
                    filterBarCodeValue: [''],
                    termAndCondition: [this.salesOrder.termAndCondition],
                    salesOrderItems: this.fb.array([])
                });
                this.salesOrder.salesOrderItems.forEach(c => {
                    this.salesOrderItemsArray.push(this.createSalesOrderItemPatch(this.salesOrderItemsArray.length, c));
                });
                this.getCustomers();
                this.getAllTotal();
            }
            else {
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
                    filterBarCodeValue: [''],
                    termAndCondition: [''],
                    salesOrderItems: this.fb.array([])
                });
                this.salesOrderItemsArray.push(this.createSalesOrderItem(this.salesOrderItemsArray.length));
            }
        });
    }
    getProductByBarCodeValue() {
        this.sub$.sink = this.salesOrderForm.get('filterBarCodeValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(c => {
            if (c) {
                this.productResource.barcode = c;
                return this.productService.getProducts(this.productResource);
            }
            {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)([]);
            }
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                if (resp.body.length == 1) {
                    if (this.salesOrderItemsArray.length == 1) {
                        if (!this.salesOrderItemsArray.controls[0].get('productId').value) {
                            this.onRemoveSalesOrderItem(0);
                        }
                    }
                    const productId = resp.body[0].id;
                    let purchaseOrderItems = this.salesOrderItemsArray.value;
                    var existingProductIndex = purchaseOrderItems.findIndex(c => c.productId == productId);
                    if (existingProductIndex >= 0) {
                        let iteamToUpdate = purchaseOrderItems[existingProductIndex];
                        this.salesOrderItemsArray.at(existingProductIndex).get('quantity').patchValue(iteamToUpdate.quantity + 1);
                    }
                    else {
                        this.onAddAnotherProduct();
                        const currentIndex = this.salesOrderItemsArray.length - 1;
                        this.filterProductsMap[currentIndex.toString()] = [...resp.body];
                        this.onProductSelectionChange(productId, currentIndex, false);
                    }
                    this.getAllTotal();
                }
                else {
                    this.toastrService.warning('Product not found');
                }
                this.productResource.barcode = '';
                this.salesOrderForm.get('filterBarCodeValue').patchValue('');
            }
        }, (err) => {
        });
    }
    onAddAnotherProduct() {
        this.salesOrderItemsArray.push(this.createSalesOrderItem(this.salesOrderItemsArray.length));
    }
    createSalesOrderItemPatch(index, salesOrderItem) {
        const taxs = salesOrderItem.salesOrderItemTaxes.map(c => c.taxId);
        const formGroup = this.fb.group({
            productId: [salesOrderItem.productId, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            filterProductValue: [''],
            unitPrice: [salesOrderItem.unitPrice, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            quantity: [salesOrderItem.quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            taxValue: [taxs],
            unitId: [salesOrderItem.unitId, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            warehouseId: [salesOrderItem.warehouseId],
            discountPercentage: [salesOrderItem.discountPercentage]
        });
        this.unitsMap[index] = this.unitConversationlist.filter(c => c.id == salesOrderItem.product.unitId || c.parentId == salesOrderItem.product.unitId);
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        this.warehouseMap[index] = this.warehouseList;
        this.filterProductsMap[index.toString()] = [salesOrderItem.product];
        return formGroup;
    }
    createSalesOrderItem(index) {
        const formGroup = this.fb.group({
            productId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            filterProductValue: [''],
            unitPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.min(0)]],
            quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.min(1)]],
            taxValue: [null],
            unitId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required]],
            warehouseId: [''],
            discountPercentage: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.min(0)]]
        });
        // this.unitsMap[index] = [... this.route.snapshot.data['units']];
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        this.warehouseMap[index] = this.warehouseList;
        this.filterProductsMap[index.toString()] = [...this.route.snapshot.data['products']];
        this.getProductByNameValue(formGroup, index);
        return formGroup;
    }
    getProductByNameValue(formGroup, index) {
        if (this.salesOrder) {
            this.getProducts(index);
        }
        this.sub$.sink = formGroup.get('filterProductValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(c => {
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
        let salesOrderItems = this.salesOrderForm.get('salesOrderItems').value;
        this.totalBeforeDiscount = 0;
        this.grandTotal = 0;
        this.totalDiscount = 0;
        this.totalTax = 0;
        if (salesOrderItems && salesOrderItems.length > 0) {
            salesOrderItems.forEach(so => {
                if (so.unitPrice && so.quantity) {
                    const totalBeforeDiscount = this.totalBeforeDiscount + parseFloat(this.quantitiesUnitPricePipe.transform(so.quantity, so.unitPrice));
                    this.totalBeforeDiscount = parseFloat(totalBeforeDiscount.toFixed(2));
                    const gradTotal = this.grandTotal + parseFloat(this.quantitiesUnitPricePipe.transform(so.quantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0]));
                    this.grandTotal = parseFloat(gradTotal.toFixed(2));
                    const totalTax = this.totalTax + parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.quantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0]));
                    this.totalTax = parseFloat(totalTax.toFixed(2));
                    const totalDiscount = this.totalDiscount + parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.quantity, so.unitPrice, so.discountPercentage));
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
        this.salesOrderItemsArray.controls.forEach((c, index) => {
            const productId = c.get('productId').value;
            if (productId) {
                this.salesOrder.salesOrderItems.map(pi => {
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
    onSelectionChange(unitId, index, isFromUI = true) {
        const productId = this.salesOrderItemsArray.controls[index].get('productId').value;
        const product = this.filterProductsMap[index].find(c => c.id === productId);
        const unit = this.unitConversationlist.find(c => c.id === unitId);
        let price = 0;
        if (unit.value) {
            switch (unit.operator) {
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__.Operators.Plush:
                    price = product.salesPrice + parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__.Operators.Minus:
                    price = product.salesPrice - parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__.Operators.Multiply:
                    price = product.salesPrice * parseFloat(unit.value);
                    break;
                case _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_7__.Operators.Divide:
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
                warehouseId: product.warehouseId
            });
        }
    }
    onProductSelectionChange(productId, index, isFromUI = true) {
        const product = this.filterProductsMap[index].find((c) => c.id === productId);
        this.setUnitConversationForProduct(product.unitId, index);
        if (isFromUI) {
            this.salesOrderItemsArray.controls[index].patchValue({
                filterProductValue: '',
                unitPrice: ''
            });
        }
        else {
            this.salesOrderItemsArray.controls[index].patchValue({
                productId: productId
            });
        }
        this.salesOrderItemsArray.controls[index].patchValue({
            unitPrice: product.salesPrice,
            unitId: product.unitId,
            warehouseId: product.warehouseId
        });
        if (product.productTaxes.length) {
            this.salesOrderItemsArray.controls[index].patchValue({
                taxValue: product.productTaxes.map(c => c.taxId)
            });
        }
        this.getAllTotal();
    }
    getNewSalesOrderNumber() {
        this.salesOrderService.getNewSalesOrderNumber().subscribe(salesOrder => {
            if (!this.salesOrder) {
                this.salesOrderForm.patchValue({
                    orderNumber: salesOrder.orderNumber
                });
            }
        });
    }
    customerNameChangeValue() {
        this.sub$.sink = this.salesOrderForm.get('filerCustomer').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(c => this.isCustomerLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(c => {
            this.customerResource.customerName = c;
            this.customerResource.id = null;
            return this.customerService.getCustomers(this.customerResource);
        })).subscribe((resp) => {
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
        this.customerService.getCustomers(this.customerResource)
            .subscribe(resp => {
            if (resp && resp.headers) {
                this.customers = [...resp.body];
            }
        });
    }
    onSalesOrderSubmit() {
        if (!this.salesOrderForm.valid) {
            this.salesOrderForm.markAllAsTouched();
        }
        else {
            if (this.salesOrder && this.salesOrder.salesOrderStatus === _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_3__.SalesOrderStatusEnum.Return) {
                this.toastrService.error(this.translationService.getValue('RETURN_SALES_ORDER_CANT_BE_EDIT'));
                return;
            }
            const salesOrder = this.buildSalesOrder();
            if (salesOrder.id) {
                this.salesOrderService.updateSalesOrder(salesOrder)
                    .subscribe((c) => {
                    this.toastrService.success(this.translationService.getValue("SALES_ORDER_UPDATED_SUCCESSFULLY"));
                    this.router.navigate(['/sales-order/list']);
                });
            }
            else {
                this.salesOrderService.addSalesOrder(salesOrder)
                    .subscribe((c) => {
                    this.toastrService.success(this.translationService.getValue("SALES_ORDER_ADDED_SUCCESSFULLY"));
                    this.router.navigate(['/sales-order/list']);
                });
            }
        }
    }
    buildSalesOrder() {
        const salesOrder = {
            id: this.salesOrder ? this.salesOrder.id : '',
            orderNumber: this.salesOrderForm.get('orderNumber').value,
            deliveryDate: this.salesOrderForm.get('deliveryDate').value,
            deliveryStatus: _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_1__.DeliveryStatusEnum.UnDelivery,
            isSalesOrderRequest: false,
            soCreatedDate: this.salesOrderForm.get('soCreatedDate').value,
            salesOrderStatus: _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_3__.SalesOrderStatusEnum.Not_Return,
            customerId: this.salesOrderForm.get('customerId').value,
            totalAmount: this.grandTotal,
            totalDiscount: this.totalDiscount,
            totalTax: this.totalTax,
            note: this.salesOrderForm.get('note').value,
            termAndCondition: this.salesOrderForm.get('termAndCondition').value,
            salesOrderItems: []
        };
        const salesOrderItems = this.salesOrderForm.get('salesOrderItems').value;
        if (salesOrderItems && salesOrderItems.length > 0) {
            salesOrderItems.forEach(so => {
                salesOrder.salesOrderItems.push({
                    discount: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.quantity, so.unitPrice, so.discountPercentage)),
                    discountPercentage: so.discountPercentage,
                    productId: so.productId,
                    unitId: so.unitId,
                    warehouseId: so.warehouseId,
                    quantity: so.quantity,
                    taxValue: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.quantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0])),
                    unitPrice: parseFloat(so.unitPrice),
                    salesOrderItemTaxes: so.taxValue ? [
                        ...so.taxValue.map(element => {
                            const salesOrderItemTaxes = {
                                taxId: element
                            };
                            return salesOrderItemTaxes;
                        })
                    ] : []
                });
            });
        }
        return salesOrder;
    }
    onSalesOrderList() {
        this.router.navigate(['/sales-order/list']);
    }
    getSalesOrderById() {
        this.salesOrder = this.route.snapshot.data['salesorder'];
        if (this.salesOrder) {
        }
    }
}
SalesOrderAddEditComponent.ɵfac = function SalesOrderAddEditComponent_Factory(t) { return new (t || SalesOrderAddEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_23__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_sales_order_service__WEBPACK_IMPORTED_MODULE_9__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__.TaxService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_11__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPricePipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_4__.QuantitiesUnitPriceTaxPipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_12__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_13__.UnitConversationService)); };
SalesOrderAddEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: SalesOrderAddEditComponent, selectors: [["app-sales-order-add-edit"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([], [_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_4__.QuantitiesUnitPriceTaxPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 164, vars: 118, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["autocomplete", "off", 3, "formGroup"], [1, "row"], [1, "col-md-3"], [1, "form-group"], [1, "text-danger"], ["formControlName", "orderNumber", "type", "text", 1, "form-control", "w-100", 3, "readonly"], [4, "ngIf"], ["for", "soCreatedDate", 1, "text-danger"], ["id", "soCreatedDate", "formControlName", "soCreatedDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["soCreatedDate", ""], ["for", "deliveryDate", 1, "text-danger"], ["id", "deliveryDate", "formControlName", "deliveryDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["deliveryDate", ""], [1, "input-group"], ["formControlName", "customerId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filerCustomer", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [1, "col-md-6"], ["formControlName", "termAndCondition", 1, "form-control", "w-100"], ["formControlName", "note", 1, "form-control", "w-100"], [1, "col-sm-12", "col-md-12"], [1, "col-sm-6", "col-md-6", "col-lg-6"], ["formControlName", "filterBarCodeValue", "type", "text", 1, "form-control", "w-100", 3, "placeholder"], ["filterValue", ""], ["formArrayName", "salesOrderItems", 1, "col-sm-12"], [1, "col-sm-12", "text-right", "mb-2"], ["type", "button", 1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], [1, "col"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "table-sm"], [1, "table-column-10"], [1, "table-column-200"], [1, "table-column-150"], [1, "table-column-130"], [1, "table-column-120"], [1, "table-column-100"], [1, "table-column-300"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-10", "text-right", "font-weight-bold"], [1, "col-2", "text-left", "font-weight-bold"], [1, "col-2", "text-left", "text-danger", "font-weight-bold"], [1, "col-12"], [1, "col-md-12", "mb-1"], ["type", "button", "class", "btn btn-success btn-sm m-right-10", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], ["class", "loading-shade", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [3, "dir", "value"], [3, "value"], [3, "formGroupName"], ["type", "button", "mat-icon-button", "", "aria-label", "Action", 3, "click", 4, "ngIf"], ["formControlName", "productId", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["formControlName", "filterProductValue", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], ["placeholder", "Select Warehouse", "formControlName", "warehouseId", 1, "form-control", 3, "dir"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "unitId", 1, "form-control", 3, "dir", "selectionChange"], ["type", "number", "formControlName", "unitPrice", 1, "form-control", 3, "placeholder", "change"], ["type", "number", "formControlName", "quantity", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "discountPercentage", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "taxValue", "multiple", "", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["type", "button", "mat-icon-button", "", "aria-label", "Action", 3, "click"], [1, "btn-danger"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], [1, "loading-shade"]], template: function SalesOrderAddEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "form", 4)(8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, SalesOrderAddEditComponent_div_17_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 6)(19, "div", 7)(20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, SalesOrderAddEditComponent_div_25_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](26, "owl-date-time", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "div", 6)(29, "div", 7)(30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, SalesOrderAddEditComponent_div_35_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](36, "owl-date-time", 13, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "div", 6)(39, "div", 7)(40, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "div", 18)(44, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](46, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](48, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](49, SalesOrderAddEditComponent_mat_option_49_Template, 2, 3, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](50, SalesOrderAddEditComponent_mat_option_50_Template, 3, 3, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](51, SalesOrderAddEditComponent_div_51_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "div", 5)(53, "div", 23)(54, "div", 7)(55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "div", 18)(59, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](60, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](61, "div", 23)(62, "div", 7)(63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "div", 18)(67, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](68, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](69, "div", 5)(70, "div", 26)(71, "div", 5)(72, "div", 27)(73, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](76, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](79, "div", 5)(80, "div", 30)(81, "div", 5)(82, "div", 31)(83, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderAddEditComponent_Template_button_click_83_listener() { return ctx.onAddAnotherProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](84, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](87, "div", 5)(88, "div", 34)(89, "div", 35)(90, "table", 36)(91, "tr")(92, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](93, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](94, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](97, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](100, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](103, "th", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](106, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](109, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](112, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](115, "th", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](118, "th", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](121, "th", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](124, SalesOrderAddEditComponent_tr_124_Template, 50, 65, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](125, "div", 45)(126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](129, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](131, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](132, "div", 5)(133, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](136, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](137);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](138, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](139, "div", 5)(140, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](142, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](143, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](145, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](146, "div", 5)(147, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](148, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](149, "div", 5)(150, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](152, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](153, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](155, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](156, "div", 5)(157, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](158, SalesOrderAddEditComponent_button_158_Template, 4, 3, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](159, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderAddEditComponent_Template_button_click_159_listener() { return ctx.onSalesOrderList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](160, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](162, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](163, SalesOrderAddEditComponent_div_163_Template, 2, 1, "div", 54);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](27);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 51, "MANAGE_SALES_ORDERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx.salesOrderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 53, "SO_NUMBER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("readonly", ctx.isEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.salesOrderForm.get("orderNumber").touched && ctx.salesOrderForm.get("orderNumber").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 55, "ORDER_DATE"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](24, 57, "DELIVERY_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("owlDateTimeTrigger", _r2)("owlDateTime", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.salesOrderForm.get("soCreatedDate").touched && ctx.salesOrderForm.get("soCreatedDate").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](32, 59, "DELIVERY_DATE"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](34, 61, "DELIVERY_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("owlDateTimeTrigger", _r4)("owlDateTime", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.salesOrderForm.get("deliveryDate").touched && ctx.salesOrderForm.get("deliveryDate").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](42, 63, "CUSTOMER_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](45, 65, "SELECT_CUSTOMER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](47, 67, "SEARCH_OTHER_CUSTOMERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.customers.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.salesOrderForm.get("customerId").touched && ctx.salesOrderForm.get("customerId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](57, 69, "TERM_AND_CONDITION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](65, 71, "NOTES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](75, 73, "SCAN_BARCODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](78, 75, "SCAN_BARCODE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](86, 77, "ADD_ANOTHER_PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](96, 79, "PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](99, 81, "WAREHOUSE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](102, 83, "UNIT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](105, 85, "PRICE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](108, 87, "QUANTITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](111, 89, "SUBTOTAL_BEFORE_DISCOUNT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](114, 91, "DISCOUNT"), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](117, 93, "SUBTOTAL_AFTER_DISCOUNT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](120, 95, "TAX"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](123, 97, "TOTAL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.salesOrderItemsArray == null ? null : ctx.salesOrderItemsArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](128, 99, "SUB_TOTAL_BEFORE_DISCOUNT"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](131, 101, ctx.totalBeforeDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](135, 103, "TOTAL_DISCOUNT"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](138, 105, ctx.totalDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](142, 107, "TOTAL_TAX"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](145, 109, ctx.totalTax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](152, 111, "GRAND_TOTAL"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](155, 113, ctx.grandTotal), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](117, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](162, 115, "CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormArrayName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_14__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinner, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_32__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_32__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_32__.OwlDateTimeComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDivider, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_15__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_4__.QuantitiesUnitPriceTaxPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1vcmRlci1hZGQtZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 86783:
/*!********************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-detail/sales-order-detail.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderDetailComponent": () => (/* binding */ SalesOrderDetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sales_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sales-order.service */ 40838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _shared_sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sales-order-invoice/sales-order-invoice.component */ 56717);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/pipes/paymentMethod.pipe */ 57432);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/pipes/purchase-order-paymentStatus.pipe */ 80443);

















function SalesOrderDetailComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOrderDetailComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.generateInvoice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "GENERATE_INVOICE"), " ");
} }
function SalesOrderDetailComponent_ng_container_10_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r6.salesOrder == null ? null : ctx_r6.salesOrder.customer == null ? null : ctx_r6.salesOrder.customer.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r6.salesOrder == null ? null : ctx_r6.salesOrder.customer == null ? null : ctx_r6.salesOrder.customer.email);
} }
function SalesOrderDetailComponent_ng_container_10_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx_r7.companyProfile.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r7.companyProfile.email);
} }
function SalesOrderDetailComponent_ng_container_10_tr_93_ng_container_1_span_19_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function SalesOrderDetailComponent_ng_container_10_tr_93_ng_container_1_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SalesOrderDetailComponent_ng_container_10_tr_93_ng_container_1_span_19_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r18 = ctx.$implicit;
    const last_r19 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", tax_r18.taxName, "(", tax_r18.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !last_r19);
} }
function SalesOrderDetailComponent_ng_container_10_tr_93_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, SalesOrderDetailComponent_ng_container_10_tr_93_ng_container_1_span_19_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](22, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const i_r15 = ctx_r21.index;
    const salesItem_r14 = ctx_r21.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](i_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](salesItem_r14.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 9, salesItem_r14.unitPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", salesItem_r14.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("(", salesItem_r14 == null ? null : salesItem_r14.unitConversation == null ? null : salesItem_r14.unitConversation.name, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 11, salesItem_r14.discount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 13, salesItem_r14.taxValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", salesItem_r14.salesOrderItemTaxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](22, 15, (salesItem_r14 == null ? null : salesItem_r14.quantity) * (salesItem_r14 == null ? null : salesItem_r14.unitPrice) - salesItem_r14.discount + salesItem_r14.taxValue), " ");
} }
function SalesOrderDetailComponent_ng_container_10_tr_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SalesOrderDetailComponent_ng_container_10_tr_93_ng_container_1_Template, 23, 17, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesItem_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", salesItem_r14.status == 0);
} }
function SalesOrderDetailComponent_ng_container_10_tr_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 40)(1, "td", 41)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Returned Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
} }
function SalesOrderDetailComponent_ng_container_10_tr_95_span_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function SalesOrderDetailComponent_ng_container_10_tr_95_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, SalesOrderDetailComponent_ng_container_10_tr_95_span_20_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r25 = ctx.$implicit;
    const last_r26 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", tax_r25.taxName, "(", tax_r25.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !last_r26);
} }
function SalesOrderDetailComponent_ng_container_10_tr_95_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](20, SalesOrderDetailComponent_ng_container_10_tr_95_span_20_Template, 3, 3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const salesItem_r22 = ctx.$implicit;
    const i_r23 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](i_r23 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](salesItem_r22.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 9, salesItem_r22.unitPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](-1 * salesItem_r22.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("(", salesItem_r22 == null ? null : salesItem_r22.unitConversation == null ? null : salesItem_r22.unitConversation.name, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 11, -1 * salesItem_r22.discount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 13, -1 * salesItem_r22.taxValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", salesItem_r22.salesOrderItemTaxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 15, -1 * ((salesItem_r22 == null ? null : salesItem_r22.quantity) * (salesItem_r22 == null ? null : salesItem_r22.unitPrice) - salesItem_r22.discount + salesItem_r22.taxValue)), " ");
} }
function SalesOrderDetailComponent_ng_container_10_div_123_tr_26_Template(rf, ctx) { if (rf & 1) {
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
    const salesItempayments_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](3, 4, salesItempayments_r29.paymentDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 7, salesItempayments_r29.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](salesItempayments_r29.referenceNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 9, salesItempayments_r29.paymentMethod));
} }
function SalesOrderDetailComponent_ng_container_10_div_123_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, SalesOrderDetailComponent_ng_container_10_div_123_tr_26_Template, 12, 11, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 6, "SALES_ORDER_PAYMENTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 8, "PAYMENT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 10, "AMOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 12, "REFERENCE_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 14, "PAID_BY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r11.salesOrder.salesOrderPayments);
} }
function SalesOrderDetailComponent_ng_container_10_div_124_Template(rf, ctx) { if (rf & 1) {
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
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 2, "TERMS_AND_CONDITION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r12.salesOrder == null ? null : ctx_r12.salesOrder.termAndCondition, "");
} }
function SalesOrderDetailComponent_ng_container_10_div_125_Template(rf, ctx) { if (rf & 1) {
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
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](7, 2, "NOTE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r13.salesOrder == null ? null : ctx_r13.salesOrder.note, "");
} }
const _c0 = function (a0, a1, a2) { return { "badge-success": a0, "badge-danger": a1, "badge-warning": a2 }; };
function SalesOrderDetailComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, SalesOrderDetailComponent_ng_container_10_ng_container_18_Template, 3, 2, "ng-container", 5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, SalesOrderDetailComponent_ng_container_10_ng_container_36_Template, 3, 2, "ng-container", 5);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](93, SalesOrderDetailComponent_ng_container_10_tr_93_Template, 2, 1, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](94, SalesOrderDetailComponent_ng_container_10_tr_94_Template, 4, 0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](95, SalesOrderDetailComponent_ng_container_10_tr_95_Template, 24, 17, "tr", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](123, SalesOrderDetailComponent_ng_container_10_div_123_Template, 27, 16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](124, SalesOrderDetailComponent_ng_container_10_div_124_Template, 15, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](125, SalesOrderDetailComponent_ng_container_10_div_125_Template, 15, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "div", 9)(127, "div", 32)(128, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function SalesOrderDetailComponent_ng_container_10_Template_button_click_128_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r30.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](129, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](131, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 44, "CUSTOMER_ADDRESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.customer == null ? null : ctx_r1.salesOrder.customer.customerName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.customer == null ? null : ctx_r1.salesOrder.customer.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 46, "PHONE"), ": ", ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.customer == null ? null : ctx_r1.salesOrder.customer.mobileNo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 48, "EMAIL"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.customer == null ? null : ctx_r1.salesOrder.customer.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 50, "COMPANY_PROFILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.companyProfile.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.companyProfile.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](32, 52, "PHONE"), ": ", ctx_r1.companyProfile.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](35, 54, "EMAIL"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.companyProfile.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](42, 56, "REFERENCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.orderNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](48, 58, "DATE"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](50, 60, ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.soCreatedDate, "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](54, 63, "PAYMENT_STATUS"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](101, _c0, (ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.paymentStatus) == 0, (ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.paymentStatus) == 1, (ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.paymentStatus) == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](57, 65, ctx_r1.salesOrder == null ? null : ctx_r1.salesOrder.paymentStatus), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](65, 67, "SALES_ORDER_ITEMS"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.salesOrderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", (ctx_r1.salesOrderReturnsItems == null ? null : ctx_r1.salesOrderReturnsItems.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r1.salesOrderReturnsItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](99, 83, "TOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](102, 85, ctx_r1.salesOrder.totalDiscount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](105, 87, ctx_r1.salesOrder.totalTax));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](108, 89, ctx_r1.salesOrder.totalAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](112, 91, "PAID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](115, 93, ctx_r1.salesOrder.totalPaidAmount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](119, 95, "BALANCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](122, 97, ctx_r1.salesOrder.totalAmount - ctx_r1.salesOrder.totalPaidAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.salesOrder.salesOrderPayments.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.salesOrder.termAndCondition);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.salesOrder.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](131, 99, "CANCEL"), " ");
} }
function SalesOrderDetailComponent_div_11_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-spinner");
} }
function SalesOrderDetailComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, SalesOrderDetailComponent_div_11_mat_spinner_1_Template, 1, 0, "mat-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
} }
function SalesOrderDetailComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "app-sales-order-invoice", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("salesOrder", ctx_r3.salesOrderForInvoice);
} }
class SalesOrderDetailComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(salesOrderService, routes, clonerService, toastrService, location, securityService, translationService) {
        super(translationService);
        this.salesOrderService = salesOrderService;
        this.routes = routes;
        this.clonerService = clonerService;
        this.toastrService = toastrService;
        this.location = location;
        this.securityService = securityService;
        this.translationService = translationService;
        this.currentDate = new Date();
        this.quantitesErrormsg = '';
        this.errorMsg = '';
        this.isLoading = false;
        this.salesOrder = null;
    }
    ngOnInit() {
        this.getCustomerOrderById();
        this.subScribeCompanyProfile();
    }
    getCustomerOrderById() {
        this.sub$.sink = this.routes.params.subscribe((c) => {
            this.getSalesOrderById(c['id']);
        });
    }
    subScribeCompanyProfile() {
        this.securityService.companyProfile.subscribe(data => {
            this.companyProfile = data;
        });
    }
    getSalesOrderById(id) {
        this.isLoading = true;
        this.salesOrderService.getSalesOrderById(id)
            .subscribe((c) => {
            this.salesOrder = this.clonerService.deepClone(c);
            this.salesOrder.totalQuantity = this.salesOrder.salesOrderItems.map(item => item.status == 1 ? -1 * item.quantity : item.quantity).reduce((prev, next) => prev + next);
            this.salesOrderItems = this.salesOrder.salesOrderItems.filter(c => c.status == 0);
            this.salesOrderReturnsItems = this.salesOrder.salesOrderItems.filter(c => c.status == 1);
            this.isLoading = false;
        }, (err) => {
            this.isLoading = false;
        });
    }
    generateInvoice() {
        let soForInvoice = this.clonerService.deepClone(this.salesOrder);
        soForInvoice.salesOrderItems.map(c => {
            var _a;
            c.unitName = (_a = c.unitConversation) === null || _a === void 0 ? void 0 : _a.name;
            return c;
        });
        this.salesOrderForInvoice = soForInvoice;
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
SalesOrderDetailComponent.ɵfac = function SalesOrderDetailComponent_Factory(t) { return new (t || SalesOrderDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_sales_order_service__WEBPACK_IMPORTED_MODULE_1__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_2__.ClonerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_3__.SecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService)); };
SalesOrderDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: SalesOrderDetailComponent, selectors: [["app-sales-order-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 8, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "btn blue-btn btn-sm m-right-10", 3, "click", 4, "hasClaim"], [4, "ngIf"], ["class", "loading-shade", 4, "ngIf"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-receipt"], [1, "row"], [1, "col-sm-4"], [1, "form-group"], [1, ""], [1, "clearfix"], [1, "col-md-4"], [1, "badge-pill", 3, "ngClass"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "table-striped", "table-sm"], [1, "head"], [2, "width", "1%"], [2, "width", "20%"], [2, "width", "3%"], [2, "width", "2%"], [2, "width", "5%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], ["class", "bg-warning1", 4, "ngIf"], ["class", "bg-warning1", 4, "ngFor", "ngForOf"], ["colspan", "4", 1, "text-right", "total"], [1, "text-right", "total"], [1, "total"], ["colspan", "6", 1, "text-right", "total"], [1, "col-md-12", "mb-1"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], [3, "href"], [2, "text-align", "center"], [1, "text-right"], [2, "font-size", "10px"], ["style", "font-size: 10px;", 4, "ngFor", "ngForOf"], [1, "bg-warning1"], ["colspan", "100%", 1, "no-border"], [1, "table", "table-bordered", "table-hover", "table-striped", "table-sm", 2, "width", "50%"], [1, "col-sm-12"], [1, "loading-shade"], [3, "salesOrder"]], template: function SalesOrderDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, SalesOrderDetailComponent_button_8_Template, 4, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, SalesOrderDetailComponent_ng_container_10_Template, 132, 105, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, SalesOrderDetailComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, SalesOrderDetailComponent_ng_container_12_Template, 2, 1, "ng-container", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 6, "SALES_ORDER"), "#", ctx.salesOrder == null ? null : ctx.salesOrder.orderNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hasClaim", "SO_GENERATE_INVOICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.salesOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_5__.HasClaimDirective, _shared_sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_6__.SalesOrderInvoiceComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinner, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.CustomCurrencyPipe, _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_8__.PaymentMethodPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_9__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_10__.PaymentStatusPipe], styles: [".total[_ngcontent-%COMP%] {\n  text-align: end;\n  border: 1px solid #dee2e6;\n  font-weight: bold;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: #ececec;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLW9yZGVyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXHNhbGVzLW9yZGVyXFxzYWxlcy1vcmRlci1kZXRhaWxcXHNhbGVzLW9yZGVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic2FsZXMtb3JkZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvdGFsIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iLCIudG90YWwge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 27375:
/*!***********************************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-list/sales-order-items/sales-order-items.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderItemsComponent": () => (/* binding */ SalesOrderItemsComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sales_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sales-order.service */ 40838);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function SalesOrderItemsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SalesOrderItemsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function SalesOrderItemsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r23.productName, " ");
} }
function SalesOrderItemsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SOURCE"));
} }
function SalesOrderItemsComponent_td_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SALES_ORDER_RETURN"), " ");
} }
function SalesOrderItemsComponent_td_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SALES_ORDER"), " ");
} }
function SalesOrderItemsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesOrderItemsComponent_td_15_ng_container_1_Template, 3, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SalesOrderItemsComponent_td_15_ng_container_2_Template, 3, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r24.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r24.status !== 1);
} }
function SalesOrderItemsComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT"), " ");
} }
function SalesOrderItemsComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.unitName, " ");
} }
function SalesOrderItemsComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE"), " ");
} }
function SalesOrderItemsComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r28.unitPrice), " ");
} }
function SalesOrderItemsComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "QUANTITY"), " ");
} }
function SalesOrderItemsComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r29.status === 1 ? -1 * element_r29.quantity : element_r29.quantity, " ");
} }
function SalesOrderItemsComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function SalesOrderItemsComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, element_r30.discount), "(", element_r30.discountPercentage, "%) ");
} }
function SalesOrderItemsComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TAX"), " ");
} }
function SalesOrderItemsComponent_td_30_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SalesOrderItemsComponent_td_30_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SalesOrderItemsComponent_td_30_span_1_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r33 = ctx.$implicit;
    const last_r34 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r33.taxName, "(", tax_r33.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r34);
} }
function SalesOrderItemsComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesOrderItemsComponent_td_30_span_1_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", element_r31.salesOrderItemTaxes);
} }
function SalesOrderItemsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function SalesOrderItemsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r36.taxValue), " ");
} }
function SalesOrderItemsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL"), " ");
} }
function SalesOrderItemsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r37.unitPrice * element_r37.quantity - element_r37.discount + element_r37.taxValue), " ");
} }
function SalesOrderItemsComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "WAREHOUSE"), "");
} }
function SalesOrderItemsComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r38.warehouseName, " ");
} }
function SalesOrderItemsComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
} }
function SalesOrderItemsComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 27);
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-warning1", row_r39.status === 1);
} }
class SalesOrderItemsComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(salesOrderService, translationService) {
        super(translationService);
        this.salesOrderService = salesOrderService;
        this.translationService = translationService;
        this.salesOrderItems = [];
        this.isLoading = false;
        this.displayedColumns = ['productName', 'source', 'unitName', 'unitPrice', 'quantity', 'totalDiscount', 'taxes', 'totalTax', 'totalAmount', 'warehouse'];
        this.getLangDir();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['salesOrder']) {
            this.getSalesOrderItems();
        }
    }
    getSalesOrderItems() {
        this.isLoading = true;
        this.salesOrderService.getSalesOrderItems(this.salesOrder.id)
            .subscribe((data) => {
            this.isLoading = false;
            this.salesOrderItems = data;
        }, () => this.isLoading = false);
    }
}
SalesOrderItemsComponent.ɵfac = function SalesOrderItemsComponent_Factory(t) { return new (t || SalesOrderItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sales_order_service__WEBPACK_IMPORTED_MODULE_1__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
SalesOrderItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SalesOrderItemsComponent, selectors: [["app-sales-order-items"]], inputs: { salesOrder: "salesOrder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 42, vars: 9, consts: [[1, "page-header-main"], [1, "row", "align-items-center"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "source"], ["matColumnDef", "unitName"], ["matColumnDef", "unitPrice"], ["matColumnDef", "quantity"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "taxes"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "warehouse"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", ""]], template: function SalesOrderItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SalesOrderItemsComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SalesOrderItemsComponent_th_11_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SalesOrderItemsComponent_td_12_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SalesOrderItemsComponent_th_14_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SalesOrderItemsComponent_td_15_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SalesOrderItemsComponent_th_17_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SalesOrderItemsComponent_td_18_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SalesOrderItemsComponent_th_20_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SalesOrderItemsComponent_td_21_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SalesOrderItemsComponent_th_23_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SalesOrderItemsComponent_td_24_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SalesOrderItemsComponent_th_26_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, SalesOrderItemsComponent_td_27_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, SalesOrderItemsComponent_th_29_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SalesOrderItemsComponent_td_30_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, SalesOrderItemsComponent_th_32_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, SalesOrderItemsComponent_td_33_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, SalesOrderItemsComponent_th_35_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, SalesOrderItemsComponent_td_36_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](37, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SalesOrderItemsComponent_th_38_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, SalesOrderItemsComponent_td_39_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, SalesOrderItemsComponent_tr_40_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, SalesOrderItemsComponent_tr_41_Template, 1, 2, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "SALES_ORDER_ITEMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.salesOrderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1vcmRlci1pdGVtcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 38341:
/*!****************************************************************************!*\
  !*** ./src/app/sales-order/sales-order-list/sales-order-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderListComponent": () => (/* binding */ SalesOrderListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/sales-order-resource-parameter */ 708);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _add_sales_order_payment_add_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-sales-order-payment/add-sales-order-payment.component */ 43085);
/* harmony import */ var _sales_order_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sales-order-datasource */ 80931);
/* harmony import */ var _view_sales_order_payment_view_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-sales-order-payment/view-sales-order-payment.component */ 61739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _sales_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sales-order.service */ 40838);
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/customer/customer.service */ 61781);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _shared_sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/sales-order-invoice/sales-order-invoice.component */ 56717);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _sales_order_items_sales_order_items_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sales-order-items/sales-order-items.component */ 27375);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/purchase-order-paymentStatus.pipe */ 80443);








































const _c0 = function () { return ["/sales-order/add"]; };
function SalesOrderListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "ADD_SALES_ORDER"), " ");
} }
function SalesOrderListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function SalesOrderListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 55);
} }
function SalesOrderListComponent_td_17_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function SalesOrderListComponent_td_17_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function SalesOrderListComponent_td_17_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 63)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matMenuTriggerFor", _r48);
} }
const _c1 = function (a1) { return ["/sales-order/", a1]; };
function SalesOrderListComponent_td_17_ng_container_7_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 64)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](4, _c1, so_r44.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 2, "EDIT"));
} }
function SalesOrderListComponent_td_17_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderListComponent_td_17_ng_container_7_button_1_Template, 6, 6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_UPDATE_SO");
} }
const _c2 = function (a1) { return ["/sales-order/detail", a1]; };
function SalesOrderListComponent_td_17_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 64)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](4, _c2, so_r44.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 2, "DETAIL"));
} }
function SalesOrderListComponent_td_17_ng_container_9_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderListComponent_td_17_ng_container_9_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62); const so_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r60.deleteSalesOrder(so_r44)); });
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
function SalesOrderListComponent_td_17_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderListComponent_td_17_ng_container_9_button_1_Template, 6, 3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_DELETE_SO");
} }
function SalesOrderListComponent_td_17_ng_container_10_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderListComponent_td_17_ng_container_10_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r66); const so_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r64.onSaleOrderReturn(so_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "assignment_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "RETURN_SALES_ORDER"));
} }
function SalesOrderListComponent_td_17_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderListComponent_td_17_ng_container_10_button_1_Template, 6, 3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_RETURN_SO");
} }
function SalesOrderListComponent_td_17_ng_contaner_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderListComponent_td_17_ng_contaner_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r70); const so_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r68.addPayment(so_r44)); });
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
function SalesOrderListComponent_td_17_ng_contaner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderListComponent_td_17_ng_contaner_11_button_1_Template, 6, 3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_ADD_SO_PAYMENT");
} }
function SalesOrderListComponent_td_17_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderListComponent_td_17_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r73); const so_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r71.viewPayment(so_r44)); });
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
function SalesOrderListComponent_td_17_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderListComponent_td_17_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r76); const so_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r74.generateInvoice(so_r44)); });
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
const _c3 = function () { return ["SO_UPDATE_SO", "SO_VIEW_SO_DETAIL", "SO_DELETE_SO", "SO_RETURN_SO", "SO_ADD_SO_PAYMENT", "SO_VIEW_SO_PAYMENTS", "SO_GENERATE_INVOICE"]; };
function SalesOrderListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 56)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SalesOrderListComponent_td_17_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r78); const so_r44 = restoredCtx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r77.toggleRow(so_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, SalesOrderListComponent_td_17_mat_icon_2_Template, 2, 0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, SalesOrderListComponent_td_17_mat_icon_3_Template, 2, 0, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, SalesOrderListComponent_td_17_button_4_Template, 3, 1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "mat-menu", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, SalesOrderListComponent_td_17_ng_container_7_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, SalesOrderListComponent_td_17_button_8_Template, 6, 6, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, SalesOrderListComponent_td_17_ng_container_9_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, SalesOrderListComponent_td_17_ng_container_10_Template, 2, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, SalesOrderListComponent_td_17_ng_contaner_11_Template, 2, 1, "ng-contaner", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, SalesOrderListComponent_td_17_button_12_Template, 6, 3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, SalesOrderListComponent_td_17_button_13_Template, 6, 3, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r44 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", so_r44 != ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", so_r44 == ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](11, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r3.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", so_r44.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_VIEW_SO_DETAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", so_r44.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", so_r44.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", so_r44.paymentStatus != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_VIEW_SO_PAYMENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_GENERATE_INVOICE");
} }
function SalesOrderListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function SalesOrderListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](2, 1, so_r79.soCreatedDate, "shortDate"), " ");
} }
function SalesOrderListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "ORDER_NUMBER"), " ");
} }
function SalesOrderListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 56)(1, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](2, _c2, so_r80.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", so_r80.orderNumber, " ");
} }
function SalesOrderListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE"), " ");
} }
function SalesOrderListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](2, 1, so_r81.deliveryDate, "shortDate"), " ");
} }
function SalesOrderListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "CUSTOMER_NAME"), " ");
} }
const _c4 = function (a1) { return ["/customer", a1]; };
function SalesOrderListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 71)(1, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](2, _c4, so_r82.customerId));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", so_r82.customerName, " ");
} }
function SalesOrderListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function SalesOrderListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, so_r83.totalDiscount), " ");
} }
function SalesOrderListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function SalesOrderListComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, so_r84.totalTax), " ");
} }
function SalesOrderListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TOTAL_AMOUNT"), " ");
} }
function SalesOrderListComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, so_r85.totalAmount), " ");
} }
function SalesOrderListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TOTAL_PAID_AMOUNT"), " ");
} }
function SalesOrderListComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, so_r86.totalPaidAmount), " ");
} }
function SalesOrderListComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "PAYMENT_STATUS"), " ");
} }
const _c5 = function (a0, a1, a2) { return { "badge-success": a0, "badge-danger": a1, "badge-warning": a2 }; };
function SalesOrderListComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 74)(1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "paymentStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction3"](4, _c5, so_r87.paymentStatus == 0, so_r87.paymentStatus == 1, so_r87.paymentStatus == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, so_r87.paymentStatus));
} }
function SalesOrderListComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "IS_RETURN"), " ");
} }
function SalesOrderListComponent_td_47_ng_contaner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "YES"), " ");
} }
function SalesOrderListComponent_td_47_ng_contaner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NO"), " ");
} }
function SalesOrderListComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderListComponent_td_47_ng_contaner_1_Template, 3, 3, "ng-contaner", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, SalesOrderListComponent_td_47_ng_contaner_2_Template, 3, 3, "ng-contaner", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", so_r88.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", so_r88.status != 1);
} }
function SalesOrderListComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
function SalesOrderListComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
function SalesOrderListComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 76)(1, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function SalesOrderListComponent_th_53_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r91.OrderNumberFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "ORDER_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r26.OrderNumberFilter);
} }
function SalesOrderListComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
function SalesOrderListComponent_th_57_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r95 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r94.langDir)("value", customer_r95.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", customer_r95.customerName, " ");
} }
function SalesOrderListComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "mat-autocomplete", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("optionSelected", function SalesOrderListComponent_th_57_Template_mat_autocomplete_optionSelected_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r96.CustomerFilter = $event.option.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, SalesOrderListComponent_th_57_mat_option_8_Template, 2, 3, "mat-option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 7, "CUSTOMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formControl", ctx_r28.customerNameControl)("matAutocomplete", _r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r28.langDir)("autoActiveFirstOption", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 9, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](9, 11, ctx_r28.customerList$));
} }
function SalesOrderListComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
function SalesOrderListComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
function SalesOrderListComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
function SalesOrderListComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
function SalesOrderListComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
function SalesOrderListComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "th", 76);
} }
const _c6 = function () { return [10, 20, 30]; };
function SalesOrderListComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "mat-paginator", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r35.langDir)("length", ctx_r35.salesOrderResource.totalCount)("pageSize", ctx_r35.salesOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](4, _c6));
} }
function SalesOrderListComponent_td_73_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 86)(2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "app-sales-order-items", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const soObject_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("@detailExpand", soObject_r98 == ctx_r99.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("salesOrder", soObject_r98);
} }
function SalesOrderListComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SalesOrderListComponent_td_73_ng_container_1_Template, 4, 2, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soObject_r98 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵattribute"]("colspan", ctx_r36.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", soObject_r98 == ctx_r36.expandedElement);
} }
function SalesOrderListComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 89)(2, "span", 90)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function SalesOrderListComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 91);
} }
function SalesOrderListComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 92);
} if (rf & 2) {
    const row_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("bg-warning1", row_r101.status === 1);
} }
function SalesOrderListComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 91);
} }
function SalesOrderListComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 93);
} }
function SalesOrderListComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tr", 94);
} }
function SalesOrderListComponent_ng_container_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "app-sales-order-invoice", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("salesOrder", ctx_r43.salesOrderForInvoice);
} }
const _c7 = function () { return ["expandedDetail"]; };
class SalesOrderListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(salesOrderService, customerService, cd, commonDialogService, toastrService, router, translationService, dialog, clonerService) {
        super(translationService);
        this.salesOrderService = salesOrderService;
        this.customerService = customerService;
        this.cd = cd;
        this.commonDialogService = commonDialogService;
        this.toastrService = toastrService;
        this.router = router;
        this.translationService = translationService;
        this.dialog = dialog;
        this.clonerService = clonerService;
        this.salesOrders = [];
        this.displayedColumns = ['action', 'soCreatedDate', 'orderNumber', 'deliveryDate', 'customerName', 'totalDiscount', 'totalTax', 'totalAmount', 'totalPaidAmount', 'paymentStatus', 'status'];
        this.filterColumns = ['action-search', 'soCreatedDate-search', 'orderNumber-search', 'deliverDate-search', 'customer-search', 'totalAmount-search', 'totalDiscount-search', 'totalTax-search', 'totalPaidAmount-search', 'paymentStatus-search', 'status-search'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.customerNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.UntypedFormControl();
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
        this.getLangDir();
        this.salesOrderResource = new _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.SalesOrderResourceParameter();
        this.salesOrderResource.pageSize = 50;
        this.salesOrderResource.orderBy = 'soCreatedDate asc';
    }
    get CustomerFilter() {
        return this._customerFilter;
    }
    set CustomerFilter(v) {
        this._customerFilter = v;
        const customerFilter = `customerName:${v}`;
        this.filterObservable$.next(customerFilter);
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
        this.customerNameControlOnChange();
        this.dataSource = new _sales_order_datasource__WEBPACK_IMPORTED_MODULE_3__.SalesOrderDataSource(this.salesOrderService);
        this.dataSource.loadData(this.salesOrderResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)())
            .subscribe((c) => {
            this.salesOrderResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split(':');
            if (strArray[0] === 'customerName') {
                this.salesOrderResource.customerName = strArray[1];
            }
            else if (strArray[0] === 'orderNumber') {
                this.salesOrderResource.orderNumber = strArray[1];
            }
            this.dataSource.loadData(this.salesOrderResource);
        });
    }
    customerNameControlOnChange() {
        this.customerList$ = this.customerNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.switchMap)(c => {
            return this.customerService.getCustomersForDropDown('CustomerName', c);
        }));
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)((c) => {
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
    toggleRow(element) {
        this.expandedElement = this.expandedElement === element ? null : element;
        this.cd.detectChanges();
    }
    deleteSalesOrder(salesOrder) {
        this.commonDialogService.deleteConformationDialog(this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE'))
            .subscribe((isYes) => {
            if (isYes) {
                this.salesOrderService.deleteSalesOrder(salesOrder.id).subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('SALES_ORDER_DELETED_SUCCESSFULLY'));
                    this.dataSource.loadData(this.salesOrderResource);
                });
            }
        });
    }
    addPayment(salesOrder) {
        const dialogRef = this.dialog.open(_add_sales_order_payment_add_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_2__.AddSalesOrderPaymentComponent, {
            width: '100vh',
            direction: this.langDir,
            data: Object.assign({}, salesOrder)
        });
        dialogRef.afterClosed().subscribe((isAdded) => {
            if (isAdded) {
                this.dataSource.loadData(this.salesOrderResource);
            }
        });
    }
    viewPayment(salesOrder) {
        const dialogRef = this.dialog.open(_view_sales_order_payment_view_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_4__.ViewSalesOrderPaymentComponent, {
            data: Object.assign({}, salesOrder), direction: this.langDir,
        });
        dialogRef.afterClosed().subscribe((isAdded) => {
            if (isAdded) {
                this.dataSource.loadData(this.salesOrderResource);
            }
        });
    }
    onSaleOrderReturn(saleOrder) {
        this.router.navigate(['sales-order-return', saleOrder.id]);
    }
    generateInvoice(so) {
        let soForInvoice = this.clonerService.deepClone(so);
        const getCustomerRequest = this.customerService.getCustomer(so.customerId);
        const getSalesOrderItems = this.salesOrderService.getSalesOrderItems(so.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.forkJoin)({ getCustomerRequest, getSalesOrderItems }).subscribe(response => {
            soForInvoice.customer = response.getCustomerRequest;
            soForInvoice.salesOrderItems = response.getSalesOrderItems;
            this.salesOrderForInvoice = soForInvoice;
        });
    }
}
SalesOrderListComponent.ɵfac = function SalesOrderListComponent_Factory(t) { return new (t || SalesOrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_sales_order_service__WEBPACK_IMPORTED_MODULE_5__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_7__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_25__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_8__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_9__.ClonerService)); };
SalesOrderListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: SalesOrderListComponent, selectors: [["app-sales-order-list"]], viewQuery: function SalesOrderListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 81, vars: 19, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "btn blue-btn btn-sm m-right-10", 3, "routerLink", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "soCreatedDate", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "soCreatedDate"], ["class", "table-column-100", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderNumber"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "deliveryDate"], ["matColumnDef", "customerName"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalDiscount"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "totalPaidAmount"], ["matColumnDef", "paymentStatus"], ["class", "table-column-150", "mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "action-search"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "soCreatedDate-search"], ["matColumnDef", "orderNumber-search"], ["matColumnDef", "deliverDate-search"], ["matColumnDef", "customer-search"], ["matColumnDef", "totalAmount-search"], ["matColumnDef", "totalDiscount-search"], ["matColumnDef", "totalTax-search"], ["matColumnDef", "totalPaidAmount-search"], ["matColumnDef", "paymentStatus-search"], ["matColumnDef", "status-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "12", 4, "matFooterCellDef"], ["matColumnDef", "expandedDetail"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-icon-button", "", 3, "click"], ["class", "ml-4", "mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor", 4, "hasClaim"], [3, "dir"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-icon-button", "", "aria-label", "Action", 1, "ml-4", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], [3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "table-column-150", 2, "text-align", "center"], [1, "badge-pill", 3, "ngClass"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "formControl", "matAutocomplete"], [3, "dir", "autoActiveFirstOption", "optionSelected"], ["autoCustomer", "matAutocomplete"], ["value", ""], [3, "dir", "value", 4, "ngFor", "ngForOf"], [3, "dir", "value"], ["mat-footer-cell", "", "colspan", "12"], [3, "dir", "length", "pageSize", "pageSizeOptions"], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "salesOrder"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], ["mat-row", "", 1, "example-detail-row"]], template: function SalesOrderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, SalesOrderListComponent_button_8_Template, 4, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, SalesOrderListComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, SalesOrderListComponent_th_16_Template, 1, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](17, SalesOrderListComponent_td_17_Template, 14, 12, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, SalesOrderListComponent_th_19_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, SalesOrderListComponent_td_20_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](22, SalesOrderListComponent_th_22_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, SalesOrderListComponent_td_23_Template, 3, 4, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, SalesOrderListComponent_th_25_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](26, SalesOrderListComponent_td_26_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](28, SalesOrderListComponent_th_28_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, SalesOrderListComponent_td_29_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](30, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](31, SalesOrderListComponent_th_31_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](32, SalesOrderListComponent_td_32_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](33, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](34, SalesOrderListComponent_th_34_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, SalesOrderListComponent_td_35_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](37, SalesOrderListComponent_th_37_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](38, SalesOrderListComponent_td_38_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](39, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](40, SalesOrderListComponent_th_40_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](41, SalesOrderListComponent_td_41_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](42, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](43, SalesOrderListComponent_th_43_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, SalesOrderListComponent_td_44_Template, 4, 8, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](45, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](46, SalesOrderListComponent_th_46_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](47, SalesOrderListComponent_td_47_Template, 3, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](48, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](49, SalesOrderListComponent_th_49_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](50, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](51, SalesOrderListComponent_th_51_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](52, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](53, SalesOrderListComponent_th_53_Template, 3, 4, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](54, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](55, SalesOrderListComponent_th_55_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](56, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](57, SalesOrderListComponent_th_57_Template, 10, 13, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](58, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](59, SalesOrderListComponent_th_59_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](60, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](61, SalesOrderListComponent_th_61_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](62, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](63, SalesOrderListComponent_th_63_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](64, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](65, SalesOrderListComponent_th_65_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](66, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](67, SalesOrderListComponent_th_67_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](68, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](69, SalesOrderListComponent_th_69_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](70, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](71, SalesOrderListComponent_td_71_Template, 2, 5, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](72, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](73, SalesOrderListComponent_td_73_Template, 2, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](74, SalesOrderListComponent_tr_74_Template, 6, 3, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](75, SalesOrderListComponent_tr_75_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](76, SalesOrderListComponent_tr_76_Template, 1, 2, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](77, SalesOrderListComponent_tr_77_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](78, SalesOrderListComponent_tr_78_Template, 1, 0, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](79, SalesOrderListComponent_tr_79_Template, 1, 0, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](80, SalesOrderListComponent_ng_container_80_Template, 2, 1, "ng-container", 51);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 14, "SALES_ORDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_ADD_SO");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlDirective, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_10__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__.Dir, _shared_sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_11__.SalesOrderInvoiceComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_36__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinner, _sales_order_items_sales_order_items_component__WEBPACK_IMPORTED_MODULE_12__.SalesOrderItemsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_13__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_14__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslatePipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_15__.PaymentStatusPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1vcmRlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_40__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 73981:
/*!***********************************************************!*\
  !*** ./src/app/sales-order/sales-order-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderRoutingModule": () => (/* binding */ SalesOrderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _sales_order_list_sales_order_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-order-list/sales-order-list.component */ 38341);
/* harmony import */ var _sales_order_add_edit_sales_order_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-order-add-edit/sales-order-add-edit.component */ 5528);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _sales_order_add_edit_sales_oredr_by_id_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-order-add-edit/sales-oredr-by-id-resolve */ 47286);
/* harmony import */ var _sales_order_add_edit_sales_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-order-add-edit/sales-order-unit-resolve */ 53349);
/* harmony import */ var _sales_order_add_edit_sales_order_tax_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sales-order-add-edit/sales-order-tax-resolve */ 68394);
/* harmony import */ var _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/products.resolve */ 29147);
/* harmony import */ var _sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-order-detail/sales-order-detail.component */ 86783);
/* harmony import */ var _sales_order_add_edit_sale_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales-order-add-edit/sale-order-warehouse.resolve */ 94835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);












const routes = [
    {
        path: 'list',
        component: _sales_order_list_sales_order_list_component__WEBPACK_IMPORTED_MODULE_0__.SalesOrderListComponent,
        data: { claimType: 'SO_VIEW_SALES_ORDERS' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    }, {
        path: ':id',
        component: _sales_order_add_edit_sales_order_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.SalesOrderAddEditComponent,
        data: { claimType: ['SO_ADD_SO', 'SO_UPDATE_SO'] },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
        resolve: {
            'units': _sales_order_add_edit_sales_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__.SalesOrderUnitResolver,
            'warehouses': _sales_order_add_edit_sale_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_8__.SaleOrderWarehouseResolver,
            'taxs': _sales_order_add_edit_sales_order_tax_resolve__WEBPACK_IMPORTED_MODULE_5__.SalesOrderTaxResolver,
            'salesorder': _sales_order_add_edit_sales_oredr_by_id_resolve__WEBPACK_IMPORTED_MODULE_3__.SalesOrderByIdResolver,
            'products': _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_6__.ProductsResolver
        }
    },
    {
        path: 'detail/:id',
        component: _sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_7__.SalesOrderDetailComponent,
        data: { claimType: 'SO_VIEW_SO_DETAIL' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard]
    }
];
class SalesOrderRoutingModule {
}
SalesOrderRoutingModule.ɵfac = function SalesOrderRoutingModule_Factory(t) { return new (t || SalesOrderRoutingModule)(); };
SalesOrderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: SalesOrderRoutingModule });
SalesOrderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](SalesOrderRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule] }); })();


/***/ }),

/***/ 31073:
/*!***************************************************!*\
  !*** ./src/app/sales-order/sales-order.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderModule": () => (/* binding */ SalesOrderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sales_order_list_sales_order_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-order-list/sales-order-list.component */ 38341);
/* harmony import */ var _sales_order_add_edit_sales_order_add_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-order-add-edit/sales-order-add-edit.component */ 5528);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _sales_order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-order-routing.module */ 73981);
/* harmony import */ var _sales_order_list_sales_order_items_sales_order_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-order-list/sales-order-items/sales-order-items.component */ 27375);
/* harmony import */ var _view_sales_order_payment_view_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-sales-order-payment/view-sales-order-payment.component */ 61739);
/* harmony import */ var _add_sales_order_payment_add_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-sales-order-payment/add-sales-order-payment.component */ 43085);
/* harmony import */ var _sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sales-order-detail/sales-order-detail.component */ 86783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);





























class SalesOrderModule {
}
SalesOrderModule.ɵfac = function SalesOrderModule_Factory(t) { return new (t || SalesOrderModule)(); };
SalesOrderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SalesOrderModule });
SalesOrderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _sales_order_routing_module__WEBPACK_IMPORTED_MODULE_3__.SalesOrderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
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
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SalesOrderModule, { declarations: [_sales_order_list_sales_order_list_component__WEBPACK_IMPORTED_MODULE_0__.SalesOrderListComponent,
        _sales_order_add_edit_sales_order_add_edit_component__WEBPACK_IMPORTED_MODULE_1__.SalesOrderAddEditComponent,
        _sales_order_list_sales_order_items_sales_order_items_component__WEBPACK_IMPORTED_MODULE_4__.SalesOrderItemsComponent,
        _view_sales_order_payment_view_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_5__.ViewSalesOrderPaymentComponent,
        _add_sales_order_payment_add_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_6__.AddSalesOrderPaymentComponent,
        _sales_order_detail_sales_order_detail_component__WEBPACK_IMPORTED_MODULE_7__.SalesOrderDetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _sales_order_routing_module__WEBPACK_IMPORTED_MODULE_3__.SalesOrderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
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
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDividerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales-order_sales-order_module_ts.js.map