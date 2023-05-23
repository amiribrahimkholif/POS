"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_product_product_module_ts"],{

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

/***/ 94240:
/*!********************************************************************!*\
  !*** ./src/app/product/manage-product/manage-product.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageProductComponent": () => (/* binding */ ManageProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/unit-conversation/unit-conversation.service */ 14603);
/* harmony import */ var _core_services_product_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/product-category.service */ 51063);
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/tax.service */ 36018);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product.service */ 55528);
/* harmony import */ var _core_services_brand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/brand.service */ 66944);
/* harmony import */ var _core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/warehouse.service */ 78381);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
























function ManageProductComponent_div_7_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "mat-spinner");
} }
function ManageProductComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ManageProductComponent_div_7_mat_spinner_1_Template, 1, 0, "mat-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
} }
function ManageProductComponent_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME_IS_REQUIRED"), ". ");
} }
function ManageProductComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ManageProductComponent_div_18_div_1_Template, 3, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r1.productForm.get("name").errors == null ? null : ctx_r1.productForm.get("name").errors.required);
} }
function ManageProductComponent_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", brand_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", brand_r19.name, " ");
} }
function ManageProductComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "BRAND_IS_REQUIRED"), " ");
} }
function ManageProductComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ManageProductComponent_div_33_div_1_Template, 3, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.productForm.get("brandId").errors == null ? null : ctx_r3.productForm.get("brandId").errors.required);
} }
function ManageProductComponent_mat_option_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", category_r21.name, "");
} }
function ManageProductComponent_mat_option_41_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", category_r21.name, " ");
} }
const _c0 = function (a0) { return { "margin-left.px": a0 }; };
const _c1 = function (a0) { return { "margin-right.px": a0 }; };
function ManageProductComponent_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 46)(1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, ManageProductComponent_mat_option_41_div_2_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, ManageProductComponent_mat_option_41_div_3_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r21 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", category_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", ctx_r4.langDir == "ltr" ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](4, _c0, category_r21.deafLevel * 20) : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](6, _c1, category_r21.deafLevel * 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !category_r21.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", category_r21.parentId);
} }
function ManageProductComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "CATEGORY_IS_REQUIRED"), ". ");
} }
function ManageProductComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ManageProductComponent_div_42_div_1_Template, 3, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.productForm.get("categoryId").errors == null ? null : ctx_r5.productForm.get("categoryId").errors.required);
} }
function ManageProductComponent_mat_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", unit_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", unit_r27.name, " ");
} }
function ManageProductComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" Base ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, "UNIT_IS_REQUIRED"), ". ");
} }
function ManageProductComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, ManageProductComponent_div_49_div_1_Template, 3, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r7.productForm.get("unitId").errors == null ? null : ctx_r7.productForm.get("unitId").errors.required);
} }
function ManageProductComponent_mat_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const warehouse_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", warehouse_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", warehouse_r29.name, " ");
} }
function ManageProductComponent_mat_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", tax_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" ", tax_r30.name, " (", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 3, tax_r30.percentage), "%) ");
} }
function ManageProductComponent_img_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx_r11.productImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
} }
function ManageProductComponent_img_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 49);
} }
function ManageProductComponent_button_122_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ManageProductComponent_button_122_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r32); _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](117); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r10.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "ADD"), "");
} }
function ManageProductComponent_button_123_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ManageProductComponent_button_123_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34); _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](117); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](_r10.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "CHANGE"), "");
} }
function ManageProductComponent_button_124_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ManageProductComponent_button_124_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r35.onProductImageRemove()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "REMOVE"), "");
} }
function ManageProductComponent_button_126_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ManageProductComponent_button_126_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r37.onProductSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](3, 1, "SAVE"), "");
} }
const _c2 = function () { return ["PRO_ADD_PRODUCT", "PRO_UPDATE_PRODUCT"]; };
const _c3 = function () { return ["/products"]; };
class ManageProductComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(fb, unitService, productCategoryService, taxService, productService, brandService, warehouseService, toastrService, router, activatedRoute, translationService) {
        super(translationService);
        this.fb = fb;
        this.unitService = unitService;
        this.productCategoryService = productCategoryService;
        this.taxService = taxService;
        this.productService = productService;
        this.brandService = brandService;
        this.warehouseService = warehouseService;
        this.toastrService = toastrService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.translationService = translationService;
        this.units = [];
        this.productCategories = [];
        this.allCategories = [];
        this.taxes = [];
        this.brands = [];
        this.warehouses = [];
        this.isLoading = false;
        this.productImgSrc = null;
        this.isProductImageUpload = false;
        this.qrCodeImgSrc = null;
        this.isQrCodeUpload = false;
        this.getLangDir();
    }
    ngOnInit() {
        this.createProductForm();
        this.getUnits();
        this.getProductCategories();
        this.getTaxes();
        this.getBrands();
        this.getWarehouse();
        this.activatedRoute.data.subscribe((data) => {
            if (data && data.product) {
                this.productForm.patchValue(data.product);
                if (data.product.productUrl) {
                    this.productImgSrc = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${data.product.productUrl}`;
                }
                if (data.product.qrCodeUrl) {
                    this.qrCodeImgSrc = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${data.product.qrCodeUrl}`;
                }
                const productTaxIds = data.product.productTaxes.map(c => c.taxId);
                this.productForm.get('productTaxIds').patchValue(productTaxIds);
            }
        });
    }
    createProductForm() {
        this.productForm = this.fb.group({
            id: [''],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            brandId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            code: [''],
            barcode: [''],
            skuCode: [''],
            skuName: [''],
            description: [''],
            productTaxIds: [],
            productUrlData: [],
            qRCodeUrlData: [''],
            unitId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            purchasePrice: [],
            salesPrice: [],
            mrp: [],
            categoryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            warehouseId: [''],
        });
    }
    getUnits() {
        this.unitService.getAllBaseUnit().subscribe(units => {
            this.units = units;
        });
    }
    getWarehouse() {
        this.warehouseService.getAll().subscribe(warehouses => {
            this.warehouses = warehouses;
        });
    }
    getProductCategories() {
        this.productCategoryService.getAllCategoriesForDropDown().subscribe(c => {
            this.productCategories = [...c];
            this.setDeafLevel();
        });
    }
    setDeafLevel(parent, parentId) {
        const children = this.productCategories.filter(c => c.parentId == parentId);
        if (children.length > 0) {
            children.map((c, index) => {
                const object = Object.assign({}, c, {
                    deafLevel: parent ? parent.deafLevel + 1 : 0,
                    index: (parent ? parent.index : 0) + index * Math.pow(0.1, c.deafLevel)
                });
                this.allCategories.push(object);
                this.setDeafLevel(object, object.id);
            });
        }
        return parent;
    }
    getTaxes() {
        this.taxService.getAll().subscribe(c => this.taxes = c);
    }
    getBrands() {
        this.brandService.getAll().subscribe(b => this.brands = b);
    }
    onProductSubmit() {
        if (this.productForm.valid) {
            let product = this.productForm.value;
            const taxIds = this.productForm.get('productTaxIds').value;
            if (taxIds) {
                product.productTaxes = taxIds.map(c => {
                    return {
                        taxId: c,
                        productId: product.id
                    };
                });
            }
            product.isProductImageUpload = this.isProductImageUpload;
            product.isQrCodeUpload = this.isQrCodeUpload;
            product.productUrlData = this.productImgSrc;
            product.qRCodeUrlData = this.qrCodeImgSrc;
            if (!product.id) {
                this.isLoading = true;
                this.productService
                    .addProudct(product)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success(this.translationService.getValue('PRODUCT_SAVED_SUCCESSFULLY'));
                    this.router.navigate(['/products']);
                }, () => this.isLoading = false);
            }
            else {
                this.isLoading = true;
                this.productService
                    .updateProudct(product.id, product)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success(this.translationService.getValue('PRODUCT_SAVED_SUCCESSFULLY'));
                    this.router.navigate(['/products']);
                }, () => this.isLoading = false);
            }
        }
        else {
            this.productForm.markAllAsTouched();
        }
    }
    onProductImageSelect($event) {
        const fileSelected = $event.target.files[0];
        if (!fileSelected) {
            return;
        }
        const mimeType = fileSelected.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(fileSelected);
        // tslint:disable-next-line: variable-name
        reader.onload = (_event) => {
            this.productImgSrc = reader.result;
            this.isProductImageUpload = true;
            $event.target.value = '';
        };
    }
    onProductImageRemove() {
        this.isProductImageUpload = true;
        this.productImgSrc = '';
    }
    onQRCodeSelect($event) {
        const fileSelected = $event.target.files[0];
        if (!fileSelected) {
            return;
        }
        const mimeType = fileSelected.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(fileSelected);
        // tslint:disable-next-line: variable-name
        reader.onload = (_event) => {
            this.qrCodeImgSrc = reader.result;
            this.isQrCodeUpload = true;
            $event.target.value = '';
        };
    }
    onQRCodeRemove() {
        this.isQrCodeUpload = true;
        this.qrCodeImgSrc = '';
    }
}
ManageProductComponent.ɵfac = function ManageProductComponent_Factory(t) { return new (t || ManageProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_2__.UnitConversationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_product_category_service__WEBPACK_IMPORTED_MODULE_3__.ProductCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_tax_service__WEBPACK_IMPORTED_MODULE_4__.TaxService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_brand_service__WEBPACK_IMPORTED_MODULE_6__.BrandService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_warehouse_service__WEBPACK_IMPORTED_MODULE_7__.WarehouseService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_8__.TranslationService)); };
ManageProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ManageProductComponent, selectors: [["app-manage-product"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]], decls: 131, vars: 90, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup"], [1, "row"], [1, "col-md-10"], [1, "col-md-6"], [1, "form-group"], [1, "text-danger"], ["formControlName", "name", "type", "text", 1, "form-control"], [4, "ngIf"], ["formControlName", "code", "type", "text", 1, "form-control"], ["formControlName", "brandId", 1, "form-control", 3, "dir", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "text-danger", 3, "dir"], ["formControlName", "categoryId", 1, "form-control", 3, "dir", "placeholder"], ["placeholder", "Select Base Unit", "formControlName", "unitId", 1, "form-control", 3, "dir"], [3, "dir"], ["placeholder", "Select Warehouse", "formControlName", "warehouseId", 1, "form-control", 3, "dir"], ["value", ""], ["dir", "rtl", "formControlName", "productTaxIds", "multiple", "", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "skuCode", "type", "text", 1, "form-control"], ["formControlName", "skuName", "type", "text", 1, "form-control"], [1, "col-md-3"], ["formControlName", "salesPrice", "type", "number", 1, "form-control"], ["formControlName", "purchasePrice", "type", "number", 1, "form-control"], ["formControlName", "mrp", "type", "number", 1, "form-control"], ["formControlName", "barcode", "type", "text", 1, "form-control"], [1, "col-md-12"], ["formControlName", "description", 1, "form-control"], [1, "col-md-2"], [1, "cus-mat-card", "text-center", 3, "dir"], ["hidden", "", "name", "logo", "type", "file", "fxFlex", "30", 3, "name", "change"], ["fileInput", ""], ["class", "full-width img-fluid", 3, "src", 4, "ngIf"], ["class", "full-width img-fluid", "src", "assets/images/no-preview.jpg", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-sm m-right-10", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger btn-sm mt-1", 3, "click", 4, "ngIf"], [1, "col-md-12", "mt-2"], ["type", "button", "class", "btn btn-success btn-sm m-right-10", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "routerLink"], [1, "fas", "fa-times-circle"], [1, "loading-shade"], ["class", "text-danger", 4, "ngIf"], [3, "value"], [1, "country-item", 3, "ngStyle"], [1, "full-width", "img-fluid", 3, "src"], ["src", "assets/images/no-preview.jpg", 1, "full-width", "img-fluid"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "far", "fa-image"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "mt-1", 3, "click"], [1, "fas", "fa-trash-alt"], [1, "fas", "fa-save"]], template: function ManageProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, ManageProductComponent_div_7_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "div", 6)(12, "div", 8)(13, "div", 9)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, ManageProductComponent_div_18_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 8)(20, "div", 9)(21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 8)(26, "div", 9)(27, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, ManageProductComponent_mat_option_32_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, ManageProductComponent_div_33_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "div", 8)(35, "div", 9)(36, "mat-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](41, ManageProductComponent_mat_option_41_Template, 4, 8, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, ManageProductComponent_div_42_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div", 8)(44, "div", 9)(45, "mat-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "Base Unit *");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "mat-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](48, ManageProductComponent_mat_option_48_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](49, ManageProductComponent_div_49_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "div", 8)(51, "div", 9)(52, "mat-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "Warehouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "mat-select", 20)(55, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](58, ManageProductComponent_mat_option_58_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 8)(60, "div", 9)(61, "mat-label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, ManageProductComponent_mat_option_66_Template, 3, 5, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "div", 8)(68, "div", 9)(69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](72, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](73, "div", 8)(74, "div", 9)(75, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](78, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 25)(80, "div", 9)(81, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](84, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "div", 25)(86, "div", 9)(87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](90, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 8)(92, "div", 9)(93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](96, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "div", 8)(98, "div", 9)(99, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](102, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "div", 30)(104, "div", 9)(105, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](108, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "div", 32)(110, "div", 6)(111, "div", 30)(112, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "mat-card", 33)(116, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function ManageProductComponent_Template_input_change_116_listener($event) { return ctx.onProductImageSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](118, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](119, ManageProductComponent_img_119_Template, 1, 1, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](120, ManageProductComponent_img_120_Template, 1, 0, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](122, ManageProductComponent_button_122_Template, 4, 3, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](123, ManageProductComponent_button_123_Template, 4, 3, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](124, ManageProductComponent_button_124_Template, 4, 3, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](125, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](126, ManageProductComponent_button_126_Template, 4, 3, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](128, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 48, "MANAGE_PRODUCTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](16, 50, "NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.productForm.get("name").touched && ctx.productForm.get("name").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 52, "CODE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](29, 54, "BRAND"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](31, 56, "BRAND"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.brands);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.productForm.get("brandId").touched && ctx.productForm.get("brandId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](38, 58, "CATEGORY"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](40, 60, "SELECT_CATEGORY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.allCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.productForm.get("categoryId").touched && ctx.productForm.get("categoryId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.units);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.productForm.get("unitId").touched && ctx.productForm.get("unitId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](57, 62, "NONE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.warehouses);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](63, 64, "TAX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](65, 66, "TAX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.taxes);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](71, 68, "SKU_CODE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](77, 70, "SKU_NAME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](83, 72, "SALES_PRICE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](89, 74, "PURCHASE_PRICE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](95, 76, "MRP"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](101, 78, "BARCODE_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](107, 80, "DESCRIPTION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](114, 82, "PRODUCT_IMAGE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("name", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](118, 84, "PRODUCT_IMAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.productImgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.productImgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.productImgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.productImgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.productImgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](88, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](89, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](130, 86, "CANCEL"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_9__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.Dir, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardActions, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinner, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_10__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_22__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 42698:
/*!********************************************************************!*\
  !*** ./src/app/product/manage-product/product-resolver.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductResolverService": () => (/* binding */ ProductResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../product.service */ 55528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);






class ProductResolverService {
    constructor(productService, router) {
        this.productService = productService;
        this.router = router;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        if (id === 'add') {
            return null;
        }
        return this.productService.getProudct(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((expense) => {
            if (expense) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(expense);
            }
            else {
                this.router.navigate(['/products']);
                return null;
            }
        }));
    }
}
ProductResolverService.ɵfac = function ProductResolverService_Factory(t) { return new (t || ProductResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ProductResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ProductResolverService, factory: ProductResolverService.ɵfac });


/***/ }),

/***/ 83858:
/*!*************************************************************************************!*\
  !*** ./src/app/product/product-list/generate-barcode/generate-barcode.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateBarcodeComponent": () => (/* binding */ GenerateBarcodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-barcode */ 14740);



class GenerateBarcodeComponent {
    constructor() { }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['product']) {
            this.generateBarcode = this.product;
            this.product = null;
        }
        setTimeout(() => {
            this.printInvoice();
        }, 1000);
    }
    printInvoice() {
        let name = this.generateBarcode.name;
        let printContents, popupWin;
        printContents = document.getElementById('generateBarcode').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
        <html>
          <head>
            <title>${name}</title>
            <style>
            @page { size: auto;  margin: 0mm;  margin-top:60px; }

            @media print {
              * {
                font-family: "Hind-Vadodara", sans-serif;
                -webkit-print-color-adjust: exact;
              }
            }
            tr{
              border: 1px solid #000;
              border-spacing: 2px;
              
            }
            table {
              border-collapse: collapse;
            }
            th, td {
              padding: 5px;
            }
            </style>
            <script>
            function loadHandler(){

            var is_chrome = function () { return Boolean(window.chrome); }
        if(is_chrome)
        {
           window.print();
           setTimeout(function(){window.close();}, 1000);
           //give them 10 seconds to print, then close
        }
        else
        {
           window.print();
           window.close();
        }
        }
        </script>
          </head>
      <body onload="loadHandler()">${printContents}</body>
        </html>
    `);
        popupWin.document.close();
    }
}
GenerateBarcodeComponent.ɵfac = function GenerateBarcodeComponent_Factory(t) { return new (t || GenerateBarcodeComponent)(); };
GenerateBarcodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GenerateBarcodeComponent, selectors: [["app-generate-barcode"]], inputs: { product: "product" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 4, consts: [[2, "position", "absolute", "left", "-15420px"], [2, "width", "100%", "display", "flex"], ["id", "generateBarcode"], [2, "display", "inline-block", "vertical-align", "middle"], [1, "center-block", 2, "max-height", "0.35in !important", "width", "20%", "opacity", "1.0", 3, "bc-value", "bc-display-value", "bc-width", "bc-height"]], template: function GenerateBarcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-barcode", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("bc-value", ctx.generateBarcode.barcode)("bc-display-value", true)("bc-width", 1.2)("bc-height", 30);
    } }, dependencies: [ngx_barcode__WEBPACK_IMPORTED_MODULE_0__.NgxBarcodeComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmF0ZS1iYXJjb2RlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 52872:
/*!************************************************************!*\
  !*** ./src/app/product/product-list/product-datasource.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDataSource": () => (/* binding */ ProductDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class ProductDataSource {
    constructor(productService) {
        this.productService = productService;
        this._entities$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this._responseHeaderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.loadingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.loading$ = this.loadingSubject$.asObservable();
        this._count = 0;
        this.responseHeaderSubject$ = this._responseHeaderSubject$.asObservable();
        this.sub$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
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
    loadData(resource) {
        this.loadingSubject$.next(true);
        this.sub$ = this.productService.getProducts(resource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject$.next(false)))
            .subscribe((resp) => {
            if (resp && resp.headers.get('X-Pagination')) {
                const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
                this._responseHeaderSubject$.next(paginationParam);
                const entities = [...resp.body];
                this._count = entities.length;
                this._entities$.next(entities);
            }
            else {
                this._entities$.next([]);
            }
        });
    }
}


/***/ }),

/***/ 10147:
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductListComponent": () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _generate_barcode_generate_barcode_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-barcode/generate-barcode.component */ 83858);
/* harmony import */ var _product_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-datasource */ 52872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product.service */ 55528);
/* harmony import */ var _core_services_product_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/product-category.service */ 51063);
/* harmony import */ var _core_services_brand_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/brand.service */ 66944);
/* harmony import */ var src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/unit-conversation/unit-conversation.service */ 14603);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



































function ProductListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
} }
const _c0 = function (a1) { return ["/products/manage", a1]; };
function ProductListComponent_td_18_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 55)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c0, product_r38.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 2, "EDIT"));
} }
function ProductListComponent_td_18_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProductListComponent_td_18_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r46); const product_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r44.deleteProduct(product_r38)); });
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
function ProductListComponent_td_18_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProductListComponent_td_18_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r49); const product_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r47.generateInvoice(product_r38)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "PRINT_BARCODE"));
} }
function ProductListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 48)(1, "button", 49)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-menu", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ProductListComponent_td_18_button_6_Template, 6, 6, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ProductListComponent_td_18_button_7_Template, 6, 3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, ProductListComponent_td_18_button_8_Template, 6, 3, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r38 = ctx.$implicit;
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r1.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "PRO_UPDATE_PRODUCT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "PRO_DELETE_PRODUCT");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", product_r38.barcode);
} }
function ProductListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
} }
function ProductListComponent_td_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "PRODUCT_IMAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx_r51.baseUrl + product_r50.productUrl, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
} }
function ProductListComponent_td_21_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 1, "PRODUCT_IMAGE"));
} }
function ProductListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProductListComponent_td_21_ng_container_1_Template, 3, 4, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProductListComponent_td_21_ng_template_2_Template, 2, 3, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r50 = ctx.$implicit;
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", product_r50.productUrl)("ngIfElse", _r52);
} }
function ProductListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function ProductListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r55.name, " ");
} }
function ProductListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "BRAND"), " ");
} }
function ProductListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r56.brandName, " ");
} }
function ProductListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "CATEGORY"), " ");
} }
function ProductListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r57.categoryName, " ");
} }
function ProductListComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "UNIT"), " ");
} }
function ProductListComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r58.unitName, " ");
} }
function ProductListComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "PURCHASE_PRICE"), " ");
} }
function ProductListComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r59.purchasePrice ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, product_r59.purchasePrice) : "--", " ");
} }
function ProductListComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "SALES_PRICE"), " ");
} }
function ProductListComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r60.salesPrice ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, product_r60.salesPrice) : "--", " ");
} }
function ProductListComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "MRP"), " ");
} }
function ProductListComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r61.mrp ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, product_r61.mrp) : "--", " ");
} }
function ProductListComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "WAREHOUSE"), " ");
} }
function ProductListComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", product_r62.warehouseName ? product_r62.warehouseName : "--", " ");
} }
function ProductListComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
} }
function ProductListComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
} }
function ProductListComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 47)(1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ProductListComponent_th_51_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r63.NameFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r22.NameFilter);
} }
function ProductListComponent_th_53_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", brand_r66.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", brand_r66.name, " ");
} }
function ProductListComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 47)(1, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ProductListComponent_th_53_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r67.BrandFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ProductListComponent_th_53_mat_option_6_Template, 2, 2, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 4, "BRAND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r23.BrandFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 6, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r23.brands);
} }
function ProductListComponent_th_55_mat_option_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", category_r70.name, "");
} }
function ProductListComponent_th_55_mat_option_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", category_r70.name, " ");
} }
const _c1 = function (a0) { return { "margin-left.px": a0 }; };
const _c2 = function (a0) { return { "margin-right.px": a0 }; };
function ProductListComponent_th_55_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 73)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProductListComponent_th_55_mat_option_6_div_2_Template, 3, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ProductListComponent_th_55_mat_option_6_div_3_Template, 2, 1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const category_r70 = ctx.$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r69.langDir)("value", category_r70.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", ctx_r69.langDir == "ltr" ? _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](5, _c1, category_r70.deafLevel * 20) : _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](7, _c2, category_r70.deafLevel * 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !category_r70.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", category_r70.parentId);
} }
function ProductListComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 47)(1, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ProductListComponent_th_55_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r75.CategoryFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ProductListComponent_th_55_mat_option_6_Template, 4, 9, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 5, "SELECT_CATEGORY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r24.langDir)("ngModel", ctx_r24.CategoryFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r24.allCategories);
} }
function ProductListComponent_th_57_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", unit_r78.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", unit_r78.name, " ");
} }
function ProductListComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 47)(1, "mat-select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ProductListComponent_th_57_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r79.UnitFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ProductListComponent_th_57_mat_option_6_Template, 2, 2, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 5, "UNIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r25.langDir)("ngModel", ctx_r25.UnitFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r25.units);
} }
function ProductListComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
} }
function ProductListComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
} }
function ProductListComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
} }
function ProductListComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 47);
} }
const _c3 = function () { return [15, 20, 30]; };
function ProductListComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-paginator", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r30.langDir)("length", ctx_r30.productResource.totalCount)("pageSize", ctx_r30.productResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](4, _c3));
} }
function ProductListComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 77)(2, "span", 78)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function ProductListComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 79);
} }
function ProductListComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 80);
} }
function ProductListComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 79);
} }
function ProductListComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 81);
} }
function ProductListComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function ProductListComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "app-generate-barcode", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("product", ctx_r37.product);
} }
const _c4 = function () { return ["/products/add"]; };
class ProductListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(productService, productCategoryService, brandService, unitConversationService, dialog, translationService, commonDialogService, toastrService) {
        super(translationService);
        this.productService = productService;
        this.productCategoryService = productCategoryService;
        this.brandService = brandService;
        this.unitConversationService = unitConversationService;
        this.dialog = dialog;
        this.translationService = translationService;
        this.commonDialogService = commonDialogService;
        this.toastrService = toastrService;
        this.displayedColumns = ['action', 'imageUrl', 'name', 'brandName', 'categoryName', 'unitName', 'purchasePrice', 'salesPrice', 'mrp', 'warehouse'];
        this.searchColumns = ['action-search', 'imageUrl-search', 'name-search', 'brandName-search', 'categoryName-search', 'unitName-search', 'purchasePrice-search',
            'salesPrice-search', 'mrp-search', 'warehouse-search'];
        this.footerToDisplayed = ['footer'];
        this.brands = [];
        this.allCategories = [];
        this.productCategories = [];
        this.units = [];
        this.isLoadingResults = true;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
        this.getLangDir();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ProductResourceParameter();
        this.productResource.pageSize = 15;
        this.productResource.orderBy = 'createdDate desc';
    }
    get NameFilter() {
        return this._nameFilter;
    }
    set NameFilter(v) {
        this._nameFilter = v;
        const nameFilter = `name:${v}`;
        this.filterObservable$.next(nameFilter);
    }
    set BrandFilter(v) {
        this._brandFilter = v ? v : '';
        const brandFilter = `brandId:${this._brandFilter}`;
        this.filterObservable$.next(brandFilter);
    }
    get BrandFilter() {
        return this._brandFilter;
    }
    set UnitFilter(v) {
        this._unitFilter = v ? v : '';
        const unitFilter = `unitId:${this._unitFilter}`;
        this.filterObservable$.next(unitFilter);
    }
    get UnitFilter() {
        return this._unitFilter;
    }
    set CategoryFilter(v) {
        this._categoryFilter = v ? v : '';
        const categoryFilter = `categoryId:${this._categoryFilter}`;
        this.filterObservable$.next(categoryFilter);
    }
    get CategoryFilter() {
        return this._categoryFilter;
    }
    ngOnInit() {
        this.dataSource = new _product_datasource__WEBPACK_IMPORTED_MODULE_4__.ProductDataSource(this.productService);
        this.dataSource.loadData(this.productResource);
        this.getResourceParameter();
        this.getBrands();
        this.getProductCategories();
        this.getUnits();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)())
            .subscribe((c) => {
            this.productResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split(':');
            if (strArray[0] === 'name') {
                this.productResource.name = strArray[1];
            }
            if (strArray[0] === 'unitId') {
                this.productResource.unitId = strArray[1];
            }
            if (strArray[0] === 'brandId') {
                this.productResource.brandId = strArray[1];
            }
            if (strArray[0] === 'categoryId') {
                this.productResource.categoryId = strArray[1];
            }
            this.dataSource.loadData(this.productResource);
        });
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.productResource.pageSize = c.pageSize;
                this.productResource.skip = c.skip;
                this.productResource.totalCount = c.totalCount;
            }
        });
    }
    getProductCategories() {
        this.productCategoryService.getAllCategoriesForDropDown().subscribe(c => {
            this.productCategories = [...c];
            this.setDeafLevel();
        });
    }
    setDeafLevel(parent, parentId) {
        const children = this.productCategories.filter(c => c.parentId == parentId);
        if (children.length > 0) {
            children.map((c, index) => {
                const object = Object.assign({}, c, {
                    deafLevel: parent ? parent.deafLevel + 1 : 0,
                    index: (parent ? parent.index : 0) + index * Math.pow(0.1, c.deafLevel)
                });
                this.allCategories.push(object);
                this.setDeafLevel(object, object.id);
            });
        }
        return parent;
    }
    getBrands() {
        this.brandService.getAll().subscribe(b => this.brands = b);
    }
    getUnits() {
        this.unitConversationService.getUnitConversations().subscribe(units => {
            this.units = units;
        });
    }
    generateInvoice(po) {
        this.product = po;
    }
    generateBarcode(product) {
        this.dialog.open(_generate_barcode_generate_barcode_component__WEBPACK_IMPORTED_MODULE_3__.GenerateBarcodeComponent, {
            width: '110vh',
            direction: this.langDir,
            data: Object.assign({}, product)
        });
    }
    ngAfterViewInit() {
        this.sub$.sink = this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)((c) => {
            this.productResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.productResource.pageSize = this.paginator.pageSize;
            this.productResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.productResource);
        }))
            .subscribe();
    }
    deleteProduct(product) {
        this.commonDialogService
            .deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')}?`)
            .subscribe((isTrue) => {
            if (isTrue) {
                this.sub$.sink = this.productService.deleteProudct(product.id)
                    .subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('PRODUCT_DELETED_SUCCESSFULLY'));
                    this.paginator.pageIndex = 0;
                    this.dataSource.loadData(this.productResource);
                });
            }
        });
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_product_category_service__WEBPACK_IMPORTED_MODULE_6__.ProductCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_brand_service__WEBPACK_IMPORTED_MODULE_7__.BrandService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_unit_conversation_unit_conversation_service__WEBPACK_IMPORTED_MODULE_8__.UnitConversationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_10__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrService)); };
ProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], viewQuery: function ProductListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 76, vars: 21, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], [1, "col-md-auto", "col-sm-auto", "col-auto"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "matSortActive", "createdDate", "matSortDirection", "desc", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "imageUrl"], ["mat-cell", "", "class", "table-column-100", 4, "matCellDef"], ["matColumnDef", "name"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "brandName"], ["class", "table-column-200", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "categoryName"], ["matColumnDef", "unitName"], ["matColumnDef", "purchasePrice"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "salesPrice"], ["matColumnDef", "mrp"], ["matColumnDef", "warehouse"], ["matColumnDef", "action-search"], ["matColumnDef", "imageUrl-search"], ["matColumnDef", "name-search"], ["matColumnDef", "brandName-search"], ["matColumnDef", "categoryName-search"], ["matColumnDef", "unitName-search"], ["matColumnDef", "purchasePrice-search"], ["matColumnDef", "salesPrice-search"], ["matColumnDef", "mrp-search"], ["matColumnDef", "warehouse-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "10", 4, "matFooterCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["class", "loading-shade", 4, "ngIf"], [4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor"], [3, "dir"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-cell", "", 1, "table-column-100"], [4, "ngIf", "ngIfElse"], ["noImage", ""], [1, "img-thumbnail", "product-thumbnail", "my-2", 3, "src", "alt"], ["src", "assets/images/no-preview.jpg", 1, "img-thumbnail", "product-thumbnail", "my-2", 3, "alt"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["mat-header-cell", "", "mat-sort-header", ""], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", 3, "dir", "placeholder", "ngModel", "ngModelChange"], [3, "dir", "value", 4, "ngFor", "ngForOf"], [3, "dir", "value"], [1, "country-item", 3, "ngStyle"], ["mat-footer-cell", "", "colspan", "10"], [3, "dir", "length", "pageSize", "pageSizeOptions"], ["colspan", "10"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], [1, "loading-shade"], [3, "product"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 7)(13, "div", 8)(14, "div", 9)(15, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, ProductListComponent_th_17_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, ProductListComponent_td_18_Template, 9, 5, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](19, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, ProductListComponent_th_20_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, ProductListComponent_td_21_Template, 4, 2, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](22, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](23, ProductListComponent_th_23_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](24, ProductListComponent_td_24_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](25, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, ProductListComponent_th_26_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, ProductListComponent_td_27_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](28, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](29, ProductListComponent_th_29_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, ProductListComponent_td_30_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](31, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, ProductListComponent_th_32_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](33, ProductListComponent_td_33_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, ProductListComponent_th_35_Template, 3, 3, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](36, ProductListComponent_td_36_Template, 3, 3, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](37, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](38, ProductListComponent_th_38_Template, 3, 3, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, ProductListComponent_td_39_Template, 3, 3, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](40, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](41, ProductListComponent_th_41_Template, 3, 3, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, ProductListComponent_td_42_Template, 3, 3, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](43, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, ProductListComponent_th_44_Template, 3, 3, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, ProductListComponent_td_45_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](46, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, ProductListComponent_th_47_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](48, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](49, ProductListComponent_th_49_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](50, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](51, ProductListComponent_th_51_Template, 2, 1, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](52, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](53, ProductListComponent_th_53_Template, 7, 8, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](54, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, ProductListComponent_th_55_Template, 7, 9, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](56, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](57, ProductListComponent_th_57_Template, 7, 9, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](58, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, ProductListComponent_th_59_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](60, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](61, ProductListComponent_th_61_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](62, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, ProductListComponent_th_63_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](64, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, ProductListComponent_th_65_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](66, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](67, ProductListComponent_td_67_Template, 2, 5, "td", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, ProductListComponent_tr_68_Template, 6, 3, "tr", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](69, ProductListComponent_tr_69_Template, 1, 0, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](70, ProductListComponent_tr_70_Template, 1, 0, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](71, ProductListComponent_tr_71_Template, 1, 0, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](72, ProductListComponent_tr_72_Template, 1, 0, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](73, ProductListComponent_div_73_Template, 2, 0, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](74, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](75, ProductListComponent_ng_container_75_Template, 2, 1, "ng-container", 46);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 14, "PRODUCTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](20, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 16, "ADD_PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.searchColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](74, 18, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.product);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_11__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModel, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatNoDataRow, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_33__.MatProgressSpinner, _generate_barcode_generate_barcode_component__WEBPACK_IMPORTED_MODULE_3__.GenerateBarcodeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_12__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe], styles: [".product-thumbnail[_ngcontent-%COMP%] {\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXHByb2R1Y3RcXHByb2R1Y3QtbGlzdFxccHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufSIsIi5wcm9kdWN0LXRodW1ibmFpbCB7XG4gIHdpZHRoOiA0MHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 76329:
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductRoutingModule": () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-product/manage-product.component */ 94240);
/* harmony import */ var _manage_product_product_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-product/product-resolver.service */ 42698);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ 10147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__.ProductListComponent,
        data: { claimType: 'PRO_VIEW_PRODUCTS' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }, {
        path: 'add',
        component: _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_1__.ManageProductComponent,
        data: { claimType: 'PRO_ADD_PRODUCT' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'manage/:id',
        component: _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_1__.ManageProductComponent,
        resolve: {
            product: _manage_product_product_resolver_service__WEBPACK_IMPORTED_MODULE_2__.ProductResolverService,
        },
        data: { claimType: 'PRO_UPDATE_PRODUCT' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
class ProductRoutingModule {
}
ProductRoutingModule.ɵfac = function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); };
ProductRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProductRoutingModule });
ProductRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 11589:
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductModule": () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-list/product-list.component */ 10147);
/* harmony import */ var _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-product/manage-product.component */ 94240);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-routing.module */ 76329);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _manage_product_product_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-product/product-resolver.service */ 42698);
/* harmony import */ var _product_list_generate_barcode_generate_barcode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/generate-barcode/generate-barcode.component */ 83858);
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-barcode */ 14740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);






















class ProductModule {
}
ProductModule.ɵfac = function ProductModule_Factory(t) { return new (t || ProductModule)(); };
ProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ProductModule });
ProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        _manage_product_product_resolver_service__WEBPACK_IMPORTED_MODULE_4__.ProductResolverService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProductRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        ngx_barcode__WEBPACK_IMPORTED_MODULE_6__.NgxBarcodeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProductModule, { declarations: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_0__.ProductListComponent,
        _manage_product_manage_product_component__WEBPACK_IMPORTED_MODULE_1__.ManageProductComponent,
        _product_list_generate_barcode_generate_barcode_component__WEBPACK_IMPORTED_MODULE_5__.GenerateBarcodeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _product_routing_module__WEBPACK_IMPORTED_MODULE_2__.ProductRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        ngx_barcode__WEBPACK_IMPORTED_MODULE_6__.NgxBarcodeModule] }); })();


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

/***/ 12081:
/*!*************************************************!*\
  !*** ./node_modules/jsbarcode/bin/JsBarcode.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _barcodes = __webpack_require__(/*! ./barcodes/ */ 55019);

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(/*! ./help/merge.js */ 58818);

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(/*! ./help/linearizeEncodings.js */ 20082);

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(/*! ./help/fixOptions.js */ 74782);

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(/*! ./help/getRenderProperties.js */ 66740);

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(/*! ./help/optionsFromStrings.js */ 90799);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(/*! ./exceptions/ErrorHandler.js */ 38988);

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(/*! ./exceptions/exceptions.js */ 93662);

var _defaults = __webpack_require__(/*! ./options/defaults.js */ 50410);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // The protype of the object returned from the JsBarcode() call
// Help functions


var API = function API() {}; // The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers
// Default values
// Exceptions
// Import all the barcodes


var JsBarcode = function JsBarcode(element, text, options) {
  var api = new API();

  if (typeof element === "undefined") {
    throw Error("No element to render on was provided.");
  } // Variables that will be pased through the API calls


  api._renderProperties = (0, _getRenderProperties2.default)(element);
  api._encodings = [];
  api._options = _defaults2.default;
  api._errorHandler = new _ErrorHandler2.default(api); // If text is set, use the simple syntax (render the barcode directly)

  if (typeof text !== "undefined") {
    options = options || {};

    if (!options.format) {
      options.format = autoSelectBarcode();
    }

    api.options(options)[options.format](text, options).render();
  }

  return api;
}; // To make tests work TODO: remove


JsBarcode.getModule = function (name) {
  return _barcodes2.default[name];
}; // Register all barcodes


for (var name in _barcodes2.default) {
  if (_barcodes2.default.hasOwnProperty(name)) {
    // Security check if the propery is a prototype property
    registerBarcode(_barcodes2.default, name);
  }
}

function registerBarcode(barcodes, name) {
  API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
    var api = this;
    return api._errorHandler.wrapBarcodeCall(function () {
      // Ensure text is options.text
      options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;
      var newOptions = (0, _merge2.default)(api._options, options);
      newOptions = (0, _optionsFromStrings2.default)(newOptions);
      var Encoder = barcodes[name];
      var encoded = encode(text, Encoder, newOptions);

      api._encodings.push(encoded);

      return api;
    });
  };
} // encode() handles the Encoder call and builds the binary string to be rendered


function encode(text, Encoder, options) {
  // Ensure that text is a string
  text = "" + text;
  var encoder = new Encoder(text, options); // If the input is not valid for the encoder, throw error.
  // If the valid callback option is set, call it instead of throwing error

  if (!encoder.valid()) {
    throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
  } // Make a request for the binary data (and other infromation) that should be rendered


  var encoded = encoder.encode(); // Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
  // Convert to [1-1, 1-2, 2, 3-1, 3-2]

  encoded = (0, _linearizeEncodings2.default)(encoded); // Merge

  for (var i = 0; i < encoded.length; i++) {
    encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
  }

  return encoded;
}

function autoSelectBarcode() {
  // If CODE128 exists. Use it
  if (_barcodes2.default["CODE128"]) {
    return "CODE128";
  } // Else, take the first (probably only) barcode


  return Object.keys(_barcodes2.default)[0];
} // Sets global encoder options
// Added to the api by the JsBarcode function


API.prototype.options = function (options) {
  this._options = (0, _merge2.default)(this._options, options);
  return this;
}; // Will create a blank space (usually in between barcodes)


API.prototype.blank = function (size) {
  var zeroes = new Array(size + 1).join("0");

  this._encodings.push({
    data: zeroes
  });

  return this;
}; // Initialize JsBarcode on all HTML elements defined.


API.prototype.init = function () {
  // Should do nothing if no elements where found
  if (!this._renderProperties) {
    return;
  } // Make sure renderProperies is an array


  if (!Array.isArray(this._renderProperties)) {
    this._renderProperties = [this._renderProperties];
  }

  var renderProperty;

  for (var i in this._renderProperties) {
    renderProperty = this._renderProperties[i];
    var options = (0, _merge2.default)(this._options, renderProperty.options);

    if (options.format == "auto") {
      options.format = autoSelectBarcode();
    }

    this._errorHandler.wrapBarcodeCall(function () {
      var text = options.value;

      var Encoder = _barcodes2.default[options.format.toUpperCase()];

      var encoded = encode(text, Encoder, options);
      render(renderProperty, encoded, options);
    });
  }
}; // The render API call. Calls the real render function.


API.prototype.render = function () {
  if (!this._renderProperties) {
    throw new _exceptions.NoElementException();
  }

  if (Array.isArray(this._renderProperties)) {
    for (var i = 0; i < this._renderProperties.length; i++) {
      render(this._renderProperties[i], this._encodings, this._options);
    }
  } else {
    render(this._renderProperties, this._encodings, this._options);
  }

  return this;
};

API.prototype._defaults = _defaults2.default; // Prepares the encodings and calls the renderer

function render(renderProperties, encodings, options) {
  encodings = (0, _linearizeEncodings2.default)(encodings);

  for (var i = 0; i < encodings.length; i++) {
    encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
    (0, _fixOptions2.default)(encodings[i].options);
  }

  (0, _fixOptions2.default)(options);
  var Renderer = renderProperties.renderer;
  var renderer = new Renderer(renderProperties.element, encodings, options);
  renderer.render();

  if (renderProperties.afterRender) {
    renderProperties.afterRender();
  }
} // Export to browser


if (typeof window !== "undefined") {
  window.JsBarcode = JsBarcode;
} // Export to jQuery

/*global jQuery */


if (typeof jQuery !== 'undefined') {
  jQuery.fn.JsBarcode = function (content, options) {
    var elementArray = [];
    jQuery(this).each(function () {
      elementArray.push(this);
    });
    return JsBarcode(elementArray, content, options);
  };
} // Export to commonJS


module.exports = JsBarcode;

/***/ }),

/***/ 4995:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/Barcode.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Barcode = function Barcode(data, options) {
  _classCallCheck(this, Barcode);

  this.data = data;
  this.text = options.text || data;
  this.options = options;
};

exports["default"] = Barcode;

/***/ }),

/***/ 91724:
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(/*! ./constants */ 91558);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // This is the master class,
// it does require the start code to be included in the string


var CODE128 = function (_Barcode) {
  _inherits(CODE128, _Barcode);

  function CODE128(data, options) {
    _classCallCheck(this, CODE128); // Get array of ascii codes from data


    var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

    _this.bytes = data.split('').map(function (char) {
      return char.charCodeAt(0);
    });
    return _this;
  }

  _createClass(CODE128, [{
    key: 'valid',
    value: function valid() {
      // ASCII value ranges 0-127, 200-211
      return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
    } // The public encoding function

  }, {
    key: 'encode',
    value: function encode() {
      var bytes = this.bytes; // Remove the start code from the bytes and set its index

      var startIndex = bytes.shift() - 105; // Get start set by index

      var startSet = _constants.SET_BY_CODE[startIndex];

      if (startSet === undefined) {
        throw new RangeError('The encoding does not start with a start character.');
      }

      if (this.shouldEncodeAsEan128() === true) {
        bytes.unshift(_constants.FNC1);
      } // Start encode with the right type


      var encodingResult = CODE128.next(bytes, 1, startSet);
      return {
        text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
        data: // Add the start bits
        CODE128.getBar(startIndex) + // Add the encoded bits
        encodingResult.result + // Add the checksum
        CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) + // Add the end bits
        CODE128.getBar(_constants.STOP)
      };
    } // GS1-128/EAN-128

  }, {
    key: 'shouldEncodeAsEan128',
    value: function shouldEncodeAsEan128() {
      var isEAN128 = this.options.ean128 || false;

      if (typeof isEAN128 === 'string') {
        isEAN128 = isEAN128.toLowerCase() === 'true';
      }

      return isEAN128;
    } // Get a bar symbol by index

  }], [{
    key: 'getBar',
    value: function getBar(index) {
      return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
    } // Correct an index by a set and shift it from the bytes array

  }, {
    key: 'correctIndex',
    value: function correctIndex(bytes, set) {
      if (set === _constants.SET_A) {
        var charCode = bytes.shift();
        return charCode < 32 ? charCode + 64 : charCode - 32;
      } else if (set === _constants.SET_B) {
        return bytes.shift() - 32;
      } else {
        return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
      }
    }
  }, {
    key: 'next',
    value: function next(bytes, pos, set) {
      if (!bytes.length) {
        return {
          result: '',
          checksum: 0
        };
      }

      var nextCode = void 0,
          index = void 0; // Special characters

      if (bytes[0] >= 200) {
        index = bytes.shift() - 105;
        var nextSet = _constants.SWAP[index]; // Swap to other set

        if (nextSet !== undefined) {
          nextCode = CODE128.next(bytes, pos + 1, nextSet);
        } // Continue on current set but encode a special character
        else {
          // Shift
          if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
            // Convert the next character so that is encoded correctly
            bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
          }

          nextCode = CODE128.next(bytes, pos + 1, set);
        }
      } // Continue encoding
      else {
        index = CODE128.correctIndex(bytes, set);
        nextCode = CODE128.next(bytes, pos + 1, set);
      } // Get the correct binary encoding and calculate the weight


      var enc = CODE128.getBar(index);
      var weight = index * pos;
      return {
        result: enc + nextCode.result,
        checksum: weight + nextCode.checksum
      };
    }
  }]);

  return CODE128;
}(_Barcode3.default);

exports["default"] = CODE128;

/***/ }),

/***/ 46680:
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ 91724);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ 91558);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CODE128A = function (_CODE) {
  _inherits(CODE128A, _CODE);

  function CODE128A(string, options) {
    _classCallCheck(this, CODE128A);

    return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
  }

  _createClass(CODE128A, [{
    key: 'valid',
    value: function valid() {
      return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
    }
  }]);

  return CODE128A;
}(_CODE3.default);

exports["default"] = CODE128A;

/***/ }),

/***/ 77675:
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ 91724);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ 91558);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CODE128B = function (_CODE) {
  _inherits(CODE128B, _CODE);

  function CODE128B(string, options) {
    _classCallCheck(this, CODE128B);

    return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
  }

  _createClass(CODE128B, [{
    key: 'valid',
    value: function valid() {
      return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
    }
  }]);

  return CODE128B;
}(_CODE3.default);

exports["default"] = CODE128B;

/***/ }),

/***/ 32402:
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ 91724);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ 91558);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CODE128C = function (_CODE) {
  _inherits(CODE128C, _CODE);

  function CODE128C(string, options) {
    _classCallCheck(this, CODE128C);

    return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
  }

  _createClass(CODE128C, [{
    key: 'valid',
    value: function valid() {
      return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
    }
  }]);

  return CODE128C;
}(_CODE3.default);

exports["default"] = CODE128C;

/***/ }),

/***/ 72989:
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _CODE2 = __webpack_require__(/*! ./CODE128 */ 91724);

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(/*! ./auto */ 25996);

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CODE128AUTO = function (_CODE) {
  _inherits(CODE128AUTO, _CODE);

  function CODE128AUTO(data, options) {
    _classCallCheck(this, CODE128AUTO); // ASCII value ranges 0-127, 200-211


    if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
      var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
    } else {
      var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
    }

    return _possibleConstructorReturn(_this);
  }

  return CODE128AUTO;
}(_CODE3.default);

exports["default"] = CODE128AUTO;

/***/ }),

/***/ 25996:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _constants = __webpack_require__(/*! ./constants */ 91558); // Match Set functions


var matchSetALength = function matchSetALength(string) {
  return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};

var matchSetBLength = function matchSetBLength(string) {
  return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};

var matchSetC = function matchSetC(string) {
  return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
}; // CODE128A or CODE128B


function autoSelectFromAB(string, isA) {
  var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
  var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

  if (untilC) {
    return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
  }

  var chars = string.match(new RegExp('^' + ranges + '+'))[0];

  if (chars.length === string.length) {
    return string;
  }

  return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
} // CODE128C


function autoSelectFromC(string) {
  var cMatch = matchSetC(string);
  var length = cMatch.length;

  if (length === string.length) {
    return string;
  }

  string = string.substring(length); // Select A/B depending on the longest match

  var isA = matchSetALength(string) >= matchSetBLength(string);
  return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
} // Detect Code Set (A, B or C) and format the string


exports["default"] = function (string) {
  var newString = void 0;
  var cLength = matchSetC(string).length; // Select 128C if the string start with enough digits

  if (cLength >= 2) {
    newString = _constants.C_START_CHAR + autoSelectFromC(string);
  } else {
    // Select A/B depending on the longest match
    var isA = matchSetALength(string) > matchSetBLength(string);
    newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
  }

  return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
  function (match, char) {
    return String.fromCharCode(203) + char;
  });
};

/***/ }),

/***/ 91558:
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _SET_BY_CODE;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // constants for internal usage


var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2; // Special characters

var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207; // Get set by start code

var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE); // Get next set by code

var SWAP = exports.SWAP = {
  101: SET_A,
  100: SET_B,
  99: SET_C
};
var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105

var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105

var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105
// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4

var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]"; // 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4

var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]"; // 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1

var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)"; // CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).

var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),

/***/ 81350:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(/*! ./CODE128_AUTO.js */ 72989);

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(/*! ./CODE128A.js */ 46680);

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(/*! ./CODE128B.js */ 77675);

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(/*! ./CODE128C.js */ 32402);

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),

/***/ 53532:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE39/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE39 = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding


var CODE39 = function (_Barcode) {
  _inherits(CODE39, _Barcode);

  function CODE39(data, options) {
    _classCallCheck(this, CODE39);

    data = data.toUpperCase(); // Calculate mod43 checksum if enabled

    if (options.mod43) {
      data += getCharacter(mod43checksum(data));
    }

    return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
  }

  _createClass(CODE39, [{
    key: "encode",
    value: function encode() {
      // First character is always a *
      var result = getEncoding("*"); // Take every character and add the binary representation to the result

      for (var i = 0; i < this.data.length; i++) {
        result += getEncoding(this.data[i]) + "0";
      } // Last character is always a *


      result += getEncoding("*");
      return {
        data: result,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function valid() {
      return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
    }
  }]);

  return CODE39;
}(_Barcode3.default); // All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"]; // The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function

var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770]; // Get the binary representation of a character by converting the encodings
// from decimal to binary

function getEncoding(character) {
  return getBinary(characterValue(character));
}

function getBinary(characterValue) {
  return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
  return characters[characterValue];
}

function characterValue(character) {
  return characters.indexOf(character);
}

function mod43checksum(data) {
  var checksum = 0;

  for (var i = 0; i < data.length; i++) {
    checksum += characterValue(data[i]);
  }

  checksum = checksum % 43;
  return checksum;
}

exports.CODE39 = CODE39;

/***/ }),

/***/ 67886:
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _constants = __webpack_require__(/*! ./constants */ 15091);

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Base class for EAN8 & EAN13


var EAN = function (_Barcode) {
  _inherits(EAN, _Barcode);

  function EAN(data, options) {
    _classCallCheck(this, EAN); // Make sure the font is not bigger than the space between the guard bars


    var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

    _this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize; // Make the guard bars go down half the way of the text

    _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
    return _this;
  }

  _createClass(EAN, [{
    key: 'encode',
    value: function encode() {
      return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
    }
  }, {
    key: 'leftText',
    value: function leftText(from, to) {
      return this.text.substr(from, to);
    }
  }, {
    key: 'leftEncode',
    value: function leftEncode(data, structure) {
      return (0, _encoder2.default)(data, structure);
    }
  }, {
    key: 'rightText',
    value: function rightText(from, to) {
      return this.text.substr(from, to);
    }
  }, {
    key: 'rightEncode',
    value: function rightEncode(data, structure) {
      return (0, _encoder2.default)(data, structure);
    }
  }, {
    key: 'encodeGuarded',
    value: function encodeGuarded() {
      var textOptions = {
        fontSize: this.fontSize
      };
      var guardOptions = {
        height: this.guardHeight
      };
      return [{
        data: _constants.SIDE_BIN,
        options: guardOptions
      }, {
        data: this.leftEncode(),
        text: this.leftText(),
        options: textOptions
      }, {
        data: _constants.MIDDLE_BIN,
        options: guardOptions
      }, {
        data: this.rightEncode(),
        text: this.rightText(),
        options: textOptions
      }, {
        data: _constants.SIDE_BIN,
        options: guardOptions
      }];
    }
  }, {
    key: 'encodeFlat',
    value: function encodeFlat() {
      var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];
      return {
        data: data.join(''),
        text: this.text
      };
    }
  }]);

  return EAN;
}(_Barcode3.default);

exports["default"] = EAN;

/***/ }),

/***/ 45074:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _constants = __webpack_require__(/*! ./constants */ 15091);

var _EAN2 = __webpack_require__(/*! ./EAN */ 67886);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode
// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


var checksum = function checksum(number) {
  var res = number.substr(0, 12).split('').map(function (n) {
    return +n;
  }).reduce(function (sum, a, idx) {
    return idx % 2 ? sum + a * 3 : sum + a;
  }, 0);
  return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
  _inherits(EAN13, _EAN);

  function EAN13(data, options) {
    _classCallCheck(this, EAN13); // Add checksum if it does not exist


    if (data.search(/^[0-9]{12}$/) !== -1) {
      data += checksum(data);
    } // Adds a last character to the end of the barcode


    var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

    _this.lastChar = options.lastChar;
    return _this;
  }

  _createClass(EAN13, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
    }
  }, {
    key: 'leftText',
    value: function leftText() {
      return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
    }
  }, {
    key: 'leftEncode',
    value: function leftEncode() {
      var data = this.data.substr(1, 6);
      var structure = _constants.EAN13_STRUCTURE[this.data[0]];
      return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
    }
  }, {
    key: 'rightText',
    value: function rightText() {
      return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
    }
  }, {
    key: 'rightEncode',
    value: function rightEncode() {
      var data = this.data.substr(7, 6);
      return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
    } // The "standard" way of printing EAN13 barcodes with guard bars

  }, {
    key: 'encodeGuarded',
    value: function encodeGuarded() {
      var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this); // Extend data with left digit & last character


      if (this.options.displayValue) {
        data.unshift({
          data: '000000000000',
          text: this.text.substr(0, 1),
          options: {
            textAlign: 'left',
            fontSize: this.fontSize
          }
        });

        if (this.options.lastChar) {
          data.push({
            data: '00'
          });
          data.push({
            data: '00000',
            text: this.options.lastChar,
            options: {
              fontSize: this.fontSize
            }
          });
        }
      }

      return data;
    }
  }]);

  return EAN13;
}(_EAN3.default);

exports["default"] = EAN13;

/***/ }),

/***/ 43197:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _constants = __webpack_require__(/*! ./constants */ 15091);

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding


var EAN2 = function (_Barcode) {
  _inherits(EAN2, _Barcode);

  function EAN2(data, options) {
    _classCallCheck(this, EAN2);

    return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
  }

  _createClass(EAN2, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{2}$/) !== -1;
    }
  }, {
    key: 'encode',
    value: function encode() {
      // Choose the structure based on the number mod 4
      var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];

      return {
        // Start bits + Encode the two digits with 01 in between
        data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
        text: this.text
      };
    }
  }]);

  return EAN2;
}(_Barcode3.default);

exports["default"] = EAN2;

/***/ }),

/***/ 13102:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _constants = __webpack_require__(/*! ./constants */ 15091);

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding


var checksum = function checksum(data) {
  var result = data.split('').map(function (n) {
    return +n;
  }).reduce(function (sum, a, idx) {
    return idx % 2 ? sum + a * 9 : sum + a * 3;
  }, 0);
  return result % 10;
};

var EAN5 = function (_Barcode) {
  _inherits(EAN5, _Barcode);

  function EAN5(data, options) {
    _classCallCheck(this, EAN5);

    return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
  }

  _createClass(EAN5, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{5}$/) !== -1;
    }
  }, {
    key: 'encode',
    value: function encode() {
      var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];

      return {
        data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
        text: this.text
      };
    }
  }]);

  return EAN5;
}(_Barcode3.default);

exports["default"] = EAN5;

/***/ }),

/***/ 47280:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _EAN2 = __webpack_require__(/*! ./EAN */ 67886);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml
// Calculate the checksum digit


var checksum = function checksum(number) {
  var res = number.substr(0, 7).split('').map(function (n) {
    return +n;
  }).reduce(function (sum, a, idx) {
    return idx % 2 ? sum + a : sum + a * 3;
  }, 0);
  return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
  _inherits(EAN8, _EAN);

  function EAN8(data, options) {
    _classCallCheck(this, EAN8); // Add checksum if it does not exist


    if (data.search(/^[0-9]{7}$/) !== -1) {
      data += checksum(data);
    }

    return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
  }

  _createClass(EAN8, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
    }
  }, {
    key: 'leftText',
    value: function leftText() {
      return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
    }
  }, {
    key: 'leftEncode',
    value: function leftEncode() {
      var data = this.data.substr(0, 4);
      return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
    }
  }, {
    key: 'rightText',
    value: function rightText() {
      return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
    }
  }, {
    key: 'rightEncode',
    value: function rightEncode() {
      var data = this.data.substr(4, 4);
      return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
    }
  }]);

  return EAN8;
}(_EAN3.default);

exports["default"] = EAN8;

/***/ }),

/***/ 31485:
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

exports.checksum = checksum;

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding


var UPC = function (_Barcode) {
  _inherits(UPC, _Barcode);

  function UPC(data, options) {
    _classCallCheck(this, UPC); // Add checksum if it does not exist


    if (data.search(/^[0-9]{11}$/) !== -1) {
      data += checksum(data);
    }

    var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

    _this.displayValue = options.displayValue; // Make sure the font is not bigger than the space between the guard bars

    if (options.fontSize > options.width * 10) {
      _this.fontSize = options.width * 10;
    } else {
      _this.fontSize = options.fontSize;
    } // Make the guard bars go down half the way of the text


    _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
    return _this;
  }

  _createClass(UPC, [{
    key: "valid",
    value: function valid() {
      return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
    }
  }, {
    key: "encode",
    value: function encode() {
      if (this.options.flat) {
        return this.flatEncoding();
      } else {
        return this.guardedEncoding();
      }
    }
  }, {
    key: "flatEncoding",
    value: function flatEncoding() {
      var result = "";
      result += "101";
      result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
      result += "01010";
      result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
      result += "101";
      return {
        data: result,
        text: this.text
      };
    }
  }, {
    key: "guardedEncoding",
    value: function guardedEncoding() {
      var result = []; // Add the first digit

      if (this.displayValue) {
        result.push({
          data: "00000000",
          text: this.text.substr(0, 1),
          options: {
            textAlign: "left",
            fontSize: this.fontSize
          }
        });
      } // Add the guard bars


      result.push({
        data: "101" + (0, _encoder2.default)(this.data[0], "L"),
        options: {
          height: this.guardHeight
        }
      }); // Add the left side

      result.push({
        data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
        text: this.text.substr(1, 5),
        options: {
          fontSize: this.fontSize
        }
      }); // Add the middle bits

      result.push({
        data: "01010",
        options: {
          height: this.guardHeight
        }
      }); // Add the right side

      result.push({
        data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
        text: this.text.substr(6, 5),
        options: {
          fontSize: this.fontSize
        }
      }); // Add the end bits

      result.push({
        data: (0, _encoder2.default)(this.data[11], "R") + "101",
        options: {
          height: this.guardHeight
        }
      }); // Add the last digit

      if (this.displayValue) {
        result.push({
          data: "00000000",
          text: this.text.substr(11, 1),
          options: {
            textAlign: "right",
            fontSize: this.fontSize
          }
        });
      }

      return result;
    }
  }]);

  return UPC;
}(_Barcode3.default); // Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
  var result = 0;
  var i;

  for (i = 1; i < 11; i += 2) {
    result += parseInt(number[i]);
  }

  for (i = 0; i < 11; i += 2) {
    result += parseInt(number[i]) * 3;
  }

  return (10 - result % 10) % 10;
}

exports["default"] = UPC;

/***/ }),

/***/ 95095:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(/*! ./UPC.js */ 31485);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E


var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];
var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
  _inherits(UPCE, _Barcode);

  function UPCE(data, options) {
    _classCallCheck(this, UPCE);

    var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options)); // Code may be 6 or 8 digits;
    // A 7 digit code is ambiguous as to whether the extra digit
    // is a UPC-A check or number system digit.


    _this.isValid = false;

    if (data.search(/^[0-9]{6}$/) !== -1) {
      _this.middleDigits = data;
      _this.upcA = expandToUPCA(data, "0");
      _this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
      _this.isValid = true;
    } else if (data.search(/^[01][0-9]{7}$/) !== -1) {
      _this.middleDigits = data.substring(1, data.length - 1);
      _this.upcA = expandToUPCA(_this.middleDigits, data[0]);

      if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
        _this.isValid = true;
      } else {
        // checksum mismatch
        return _possibleConstructorReturn(_this);
      }
    } else {
      return _possibleConstructorReturn(_this);
    }

    _this.displayValue = options.displayValue; // Make sure the font is not bigger than the space between the guard bars

    if (options.fontSize > options.width * 10) {
      _this.fontSize = options.width * 10;
    } else {
      _this.fontSize = options.fontSize;
    } // Make the guard bars go down half the way of the text


    _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
    return _this;
  }

  _createClass(UPCE, [{
    key: 'valid',
    value: function valid() {
      return this.isValid;
    }
  }, {
    key: 'encode',
    value: function encode() {
      if (this.options.flat) {
        return this.flatEncoding();
      } else {
        return this.guardedEncoding();
      }
    }
  }, {
    key: 'flatEncoding',
    value: function flatEncoding() {
      var result = "";
      result += "101";
      result += this.encodeMiddleDigits();
      result += "010101";
      return {
        data: result,
        text: this.text
      };
    }
  }, {
    key: 'guardedEncoding',
    value: function guardedEncoding() {
      var result = []; // Add the UPC-A number system digit beneath the quiet zone

      if (this.displayValue) {
        result.push({
          data: "00000000",
          text: this.text[0],
          options: {
            textAlign: "left",
            fontSize: this.fontSize
          }
        });
      } // Add the guard bars


      result.push({
        data: "101",
        options: {
          height: this.guardHeight
        }
      }); // Add the 6 UPC-E digits

      result.push({
        data: this.encodeMiddleDigits(),
        text: this.text.substring(1, 7),
        options: {
          fontSize: this.fontSize
        }
      }); // Add the end bits

      result.push({
        data: "010101",
        options: {
          height: this.guardHeight
        }
      }); // Add the UPC-A check digit beneath the quiet zone

      if (this.displayValue) {
        result.push({
          data: "00000000",
          text: this.text[7],
          options: {
            textAlign: "right",
            fontSize: this.fontSize
          }
        });
      }

      return result;
    }
  }, {
    key: 'encodeMiddleDigits',
    value: function encodeMiddleDigits() {
      var numberSystem = this.upcA[0];
      var checkDigit = this.upcA[this.upcA.length - 1];
      var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
      return (0, _encoder2.default)(this.middleDigits, parity);
    }
  }]);

  return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
  var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
  var expansion = EXPANSIONS[lastUpcE];
  var result = "";
  var digitIndex = 0;

  for (var i = 0; i < expansion.length; i++) {
    var c = expansion[i];

    if (c === 'X') {
      result += middleDigits[digitIndex++];
    } else {
      result += c;
    }
  }

  result = '' + numberSystem + result;
  return '' + result + (0, _UPC.checksum)(result);
}

exports["default"] = UPCE;

/***/ }),

/***/ 15091:
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
})); // Standard start end and middle bits

var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';
var BINARIES = exports.BINARIES = {
  'L': [// The L (left) type of encoding
  '0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
  'G': [// The G type of encoding
  '0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
  'R': [// The R (right) type of encoding
  '1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
  'O': [// The O (odd) encoding for UPC-E
  '0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
  'E': [// The E (even) encoding for UPC-E
  '0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
}; // Define the EAN-2 structure

var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG']; // Define the EAN-5 structure

var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG']; // Define the EAN-13 structure

var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),

/***/ 38709:
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _constants = __webpack_require__(/*! ./constants */ 15091); // Encode data string


var encode = function encode(data, structure, separator) {
  var encoded = data.split('').map(function (val, idx) {
    return _constants.BINARIES[structure[idx]];
  }).map(function (val, idx) {
    return val ? val[data[idx]] : '';
  });

  if (separator) {
    var last = data.length - 1;
    encoded = encoded.map(function (val, idx) {
      return idx < last ? val + separator : val;
    });
  }

  return encoded.join('');
};

exports["default"] = encode;

/***/ }),

/***/ 36024:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(/*! ./EAN13.js */ 45074);

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(/*! ./EAN8.js */ 47280);

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(/*! ./EAN5.js */ 13102);

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(/*! ./EAN2.js */ 43197);

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(/*! ./UPC.js */ 31485);

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(/*! ./UPCE.js */ 95095);

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),

/***/ 84940:
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GenericBarcode = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GenericBarcode = function (_Barcode) {
  _inherits(GenericBarcode, _Barcode);

  function GenericBarcode(data, options) {
    _classCallCheck(this, GenericBarcode);

    return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
  } // Return the corresponding binary numbers for the data provided


  _createClass(GenericBarcode, [{
    key: "encode",
    value: function encode() {
      return {
        data: "10101010101010101010101010101010101010101",
        text: this.text
      };
    } // Resturn true/false if the string provided is valid for this encoder

  }, {
    key: "valid",
    value: function valid() {
      return true;
    }
  }]);

  return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),

/***/ 31449:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _constants = __webpack_require__(/*! ./constants */ 64639);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ITF = function (_Barcode) {
  _inherits(ITF, _Barcode);

  function ITF() {
    _classCallCheck(this, ITF);

    return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
  }

  _createClass(ITF, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^([0-9]{2})+$/) !== -1;
    }
  }, {
    key: 'encode',
    value: function encode() {
      var _this2 = this; // Calculate all the digit pairs


      var encoded = this.data.match(/.{2}/g).map(function (pair) {
        return _this2.encodePair(pair);
      }).join('');
      return {
        data: _constants.START_BIN + encoded + _constants.END_BIN,
        text: this.text
      };
    } // Calculate the data of a number pair

  }, {
    key: 'encodePair',
    value: function encodePair(pair) {
      var second = _constants.BINARIES[pair[1]];
      return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
        return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
      }).join('');
    }
  }]);

  return ITF;
}(_Barcode3.default);

exports["default"] = ITF;

/***/ }),

/***/ 98221:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _ITF2 = __webpack_require__(/*! ./ITF */ 31449);

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Calculate the checksum digit


var checksum = function checksum(data) {
  var res = data.substr(0, 13).split('').map(function (num) {
    return parseInt(num, 10);
  }).reduce(function (sum, n, idx) {
    return sum + n * (3 - idx % 2 * 2);
  }, 0);
  return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
  _inherits(ITF14, _ITF);

  function ITF14(data, options) {
    _classCallCheck(this, ITF14); // Add checksum if it does not exist


    if (data.search(/^[0-9]{13}$/) !== -1) {
      data += checksum(data);
    }

    return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
  }

  _createClass(ITF14, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
    }
  }]);

  return ITF14;
}(_ITF3.default);

exports["default"] = ITF14;

/***/ }),

/***/ 64639:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';
var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),

/***/ 81162:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(/*! ./ITF */ 31449);

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(/*! ./ITF14 */ 98221);

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),

/***/ 46177:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup


var MSI = function (_Barcode) {
  _inherits(MSI, _Barcode);

  function MSI(data, options) {
    _classCallCheck(this, MSI);

    return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
  }

  _createClass(MSI, [{
    key: "encode",
    value: function encode() {
      // Start bits
      var ret = "110";

      for (var i = 0; i < this.data.length; i++) {
        // Convert the character to binary (always 4 binary digits)
        var digit = parseInt(this.data[i]);
        var bin = digit.toString(2);
        bin = addZeroes(bin, 4 - bin.length); // Add 100 for every zero and 110 for every 1

        for (var b = 0; b < bin.length; b++) {
          ret += bin[b] == "0" ? "100" : "110";
        }
      } // End bits


      ret += "1001";
      return {
        data: ret,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function valid() {
      return this.data.search(/^[0-9]+$/) !== -1;
    }
  }]);

  return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
  for (var i = 0; i < n; i++) {
    number = "0" + number;
  }

  return number;
}

exports["default"] = MSI;

/***/ }),

/***/ 32894:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ 55741);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MSI10 = function (_MSI) {
  _inherits(MSI10, _MSI);

  function MSI10(data, options) {
    _classCallCheck(this, MSI10);

    return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
  }

  return MSI10;
}(_MSI3.default);

exports["default"] = MSI10;

/***/ }),

/***/ 46736:
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ 55741);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MSI1010 = function (_MSI) {
  _inherits(MSI1010, _MSI);

  function MSI1010(data, options) {
    _classCallCheck(this, MSI1010);

    data += (0, _checksums.mod10)(data);
    data += (0, _checksums.mod10)(data);
    return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
  }

  return MSI1010;
}(_MSI3.default);

exports["default"] = MSI1010;

/***/ }),

/***/ 97111:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ 55741);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MSI11 = function (_MSI) {
  _inherits(MSI11, _MSI);

  function MSI11(data, options) {
    _classCallCheck(this, MSI11);

    return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
  }

  return MSI11;
}(_MSI3.default);

exports["default"] = MSI11;

/***/ }),

/***/ 11044:
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ 55741);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MSI1110 = function (_MSI) {
  _inherits(MSI1110, _MSI);

  function MSI1110(data, options) {
    _classCallCheck(this, MSI1110);

    data += (0, _checksums.mod11)(data);
    data += (0, _checksums.mod10)(data);
    return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
  }

  return MSI1110;
}(_MSI3.default);

exports["default"] = MSI1110;

/***/ }),

/***/ 55741:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mod10 = mod10;
exports.mod11 = mod11;

function mod10(number) {
  var sum = 0;

  for (var i = 0; i < number.length; i++) {
    var n = parseInt(number[i]);

    if ((i + number.length) % 2 === 0) {
      sum += n;
    } else {
      sum += n * 2 % 10 + Math.floor(n * 2 / 10);
    }
  }

  return (10 - sum % 10) % 10;
}

function mod11(number) {
  var sum = 0;
  var weights = [2, 3, 4, 5, 6, 7];

  for (var i = 0; i < number.length; i++) {
    var n = parseInt(number[number.length - 1 - i]);
    sum += weights[i % weights.length] * n;
  }

  return (11 - sum % 11) % 11;
}

/***/ }),

/***/ 59856:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(/*! ./MSI10.js */ 32894);

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(/*! ./MSI11.js */ 97111);

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(/*! ./MSI1010.js */ 46736);

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(/*! ./MSI1110.js */ 11044);

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),

/***/ 4059:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/codabar/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.codabar = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml


var codabar = function (_Barcode) {
  _inherits(codabar, _Barcode);

  function codabar(data, options) {
    _classCallCheck(this, codabar);

    if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
      data = "A" + data + "A";
    }

    var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

    _this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
    return _this;
  }

  _createClass(codabar, [{
    key: "valid",
    value: function valid() {
      return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
    }
  }, {
    key: "encode",
    value: function encode() {
      var result = [];
      var encodings = this.getEncodings();

      for (var i = 0; i < this.data.length; i++) {
        result.push(encodings[this.data.charAt(i)]); // for all characters except the last, append a narrow-space ("0")

        if (i !== this.data.length - 1) {
          result.push("0");
        }
      }

      return {
        text: this.text,
        data: result.join('')
      };
    }
  }, {
    key: "getEncodings",
    value: function getEncodings() {
      return {
        "0": "101010011",
        "1": "101011001",
        "2": "101001011",
        "3": "110010101",
        "4": "101101001",
        "5": "110101001",
        "6": "100101011",
        "7": "100101101",
        "8": "100110101",
        "9": "110100101",
        "-": "101001101",
        "$": "101100101",
        ":": "1101011011",
        "/": "1101101011",
        ".": "1101101101",
        "+": "1011011011",
        "A": "1011001001",
        "B": "1001001011",
        "C": "1010010011",
        "D": "1010011001"
      };
    }
  }]);

  return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),

/***/ 55019:
/*!******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _CODE = __webpack_require__(/*! ./CODE39/ */ 53532);

var _CODE2 = __webpack_require__(/*! ./CODE128/ */ 81350);

var _EAN_UPC = __webpack_require__(/*! ./EAN_UPC/ */ 36024);

var _ITF = __webpack_require__(/*! ./ITF/ */ 81162);

var _MSI = __webpack_require__(/*! ./MSI/ */ 59856);

var _pharmacode = __webpack_require__(/*! ./pharmacode/ */ 51410);

var _codabar = __webpack_require__(/*! ./codabar */ 4059);

var _GenericBarcode = __webpack_require__(/*! ./GenericBarcode/ */ 84940);

exports["default"] = {
  CODE39: _CODE.CODE39,
  CODE128: _CODE2.CODE128,
  CODE128A: _CODE2.CODE128A,
  CODE128B: _CODE2.CODE128B,
  CODE128C: _CODE2.CODE128C,
  EAN13: _EAN_UPC.EAN13,
  EAN8: _EAN_UPC.EAN8,
  EAN5: _EAN_UPC.EAN5,
  EAN2: _EAN_UPC.EAN2,
  UPC: _EAN_UPC.UPC,
  UPCE: _EAN_UPC.UPCE,
  ITF14: _ITF.ITF14,
  ITF: _ITF.ITF,
  MSI: _MSI.MSI,
  MSI10: _MSI.MSI10,
  MSI11: _MSI.MSI11,
  MSI1010: _MSI.MSI1010,
  MSI1110: _MSI.MSI1110,
  pharmacode: _pharmacode.pharmacode,
  codabar: _codabar.codabar,
  GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),

/***/ 51410:
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pharmacode = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf


var pharmacode = function (_Barcode) {
  _inherits(pharmacode, _Barcode);

  function pharmacode(data, options) {
    _classCallCheck(this, pharmacode);

    var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

    _this.number = parseInt(data, 10);
    return _this;
  }

  _createClass(pharmacode, [{
    key: "encode",
    value: function encode() {
      var z = this.number;
      var result = ""; // http://i.imgur.com/RMm4UDJ.png
      // (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)

      while (!isNaN(z) && z != 0) {
        if (z % 2 === 0) {
          // Even
          result = "11100" + result;
          z = (z - 2) / 2;
        } else {
          // Odd
          result = "100" + result;
          z = (z - 1) / 2;
        }
      } // Remove the two last zeroes


      result = result.slice(0, -2);
      return {
        data: result,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function valid() {
      return this.number >= 3 && this.number <= 131070;
    }
  }]);

  return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),

/***/ 38988:
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/*eslint no-console: 0 */


var ErrorHandler = function () {
  function ErrorHandler(api) {
    _classCallCheck(this, ErrorHandler);

    this.api = api;
  }

  _createClass(ErrorHandler, [{
    key: "handleCatch",
    value: function handleCatch(e) {
      // If babel supported extending of Error in a correct way instanceof would be used here
      if (e.name === "InvalidInputException") {
        if (this.api._options.valid !== this.api._defaults.valid) {
          this.api._options.valid(false);
        } else {
          throw e.message;
        }
      } else {
        throw e;
      }

      this.api.render = function () {};
    }
  }, {
    key: "wrapBarcodeCall",
    value: function wrapBarcodeCall(func) {
      try {
        var result = func.apply(undefined, arguments);

        this.api._options.valid(true);

        return result;
      } catch (e) {
        this.handleCatch(e);
        return this.api;
      }
    }
  }]);

  return ErrorHandler;
}();

exports["default"] = ErrorHandler;

/***/ }),

/***/ 93662:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/exceptions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var InvalidInputException = function (_Error) {
  _inherits(InvalidInputException, _Error);

  function InvalidInputException(symbology, input) {
    _classCallCheck(this, InvalidInputException);

    var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

    _this.name = "InvalidInputException";
    _this.symbology = symbology;
    _this.input = input;
    _this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
    return _this;
  }

  return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
  _inherits(InvalidElementException, _Error2);

  function InvalidElementException() {
    _classCallCheck(this, InvalidElementException);

    var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

    _this2.name = "InvalidElementException";
    _this2.message = "Not supported type to render on";
    return _this2;
  }

  return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
  _inherits(NoElementException, _Error3);

  function NoElementException() {
    _classCallCheck(this, NoElementException);

    var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

    _this3.name = "NoElementException";
    _this3.message = "No element to render on.";
    return _this3;
  }

  return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),

/***/ 74782:
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/fixOptions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = fixOptions;

function fixOptions(options) {
  // Fix the margins
  options.marginTop = options.marginTop || options.margin;
  options.marginBottom = options.marginBottom || options.margin;
  options.marginRight = options.marginRight || options.margin;
  options.marginLeft = options.marginLeft || options.margin;
  return options;
}

/***/ }),

/***/ 67710:
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getOptionsFromElement.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _optionsFromStrings = __webpack_require__(/*! ./optionsFromStrings.js */ 90799);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(/*! ../options/defaults.js */ 50410);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getOptionsFromElement(element) {
  var options = {};

  for (var property in _defaults2.default) {
    if (_defaults2.default.hasOwnProperty(property)) {
      // jsbarcode-*
      if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
        options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
      } // data-*


      if (element.hasAttribute("data-" + property.toLowerCase())) {
        options[property] = element.getAttribute("data-" + property.toLowerCase());
      }
    }
  }

  options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value"); // Since all atributes are string they need to be converted to integers

  options = (0, _optionsFromStrings2.default)(options);
  return options;
}

exports["default"] = getOptionsFromElement;

/***/ }),

/***/ 66740:
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getRenderProperties.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/* global HTMLImageElement */

/* global HTMLCanvasElement */

/* global SVGElement */


var _getOptionsFromElement = __webpack_require__(/*! ./getOptionsFromElement.js */ 67710);

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(/*! ../renderers */ 15119);

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(/*! ../exceptions/exceptions.js */ 93662);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }


function getRenderProperties(element) {
  // If the element is a string, query select call again
  if (typeof element === "string") {
    return querySelectedRenderProperties(element);
  } // If element is array. Recursivly call with every object in the array
  else if (Array.isArray(element)) {
    var returnArray = [];

    for (var i = 0; i < element.length; i++) {
      returnArray.push(getRenderProperties(element[i]));
    }

    return returnArray;
  } // If element, render on canvas and set the uri as src
  else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
    return newCanvasRenderProperties(element);
  } // If SVG
  else if (element && element.nodeName && element.nodeName.toLowerCase() === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
    return {
      element: element,
      options: (0, _getOptionsFromElement2.default)(element),
      renderer: _renderers2.default.SVGRenderer
    };
  } // If canvas (in browser)
  else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
    return {
      element: element,
      options: (0, _getOptionsFromElement2.default)(element),
      renderer: _renderers2.default.CanvasRenderer
    };
  } // If canvas (in node)
  else if (element && element.getContext) {
    return {
      element: element,
      renderer: _renderers2.default.CanvasRenderer
    };
  } else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
    return {
      element: element,
      renderer: _renderers2.default.ObjectRenderer
    };
  } else {
    throw new _exceptions.InvalidElementException();
  }
}

function querySelectedRenderProperties(string) {
  var selector = document.querySelectorAll(string);

  if (selector.length === 0) {
    return undefined;
  } else {
    var returnArray = [];

    for (var i = 0; i < selector.length; i++) {
      returnArray.push(getRenderProperties(selector[i]));
    }

    return returnArray;
  }
}

function newCanvasRenderProperties(imgElement) {
  var canvas = document.createElement('canvas');
  return {
    element: canvas,
    options: (0, _getOptionsFromElement2.default)(imgElement),
    renderer: _renderers2.default.CanvasRenderer,
    afterRender: function afterRender() {
      imgElement.setAttribute("src", canvas.toDataURL());
    }
  };
}

exports["default"] = getRenderProperties;

/***/ }),

/***/ 20082:
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/linearizeEncodings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = linearizeEncodings; // Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
  var linearEncodings = [];

  function nextLevel(encoded) {
    if (Array.isArray(encoded)) {
      for (var i = 0; i < encoded.length; i++) {
        nextLevel(encoded[i]);
      }
    } else {
      encoded.text = encoded.text || "";
      encoded.data = encoded.data || "";
      linearEncodings.push(encoded);
    }
  }

  nextLevel(encodings);
  return linearEncodings;
}

/***/ }),

/***/ 58818:
/*!**************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/merge.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),

/***/ 90799:
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/optionsFromStrings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = optionsFromStrings; // Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
  var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

  for (var intOption in intOptions) {
    if (intOptions.hasOwnProperty(intOption)) {
      intOption = intOptions[intOption];

      if (typeof options[intOption] === "string") {
        options[intOption] = parseInt(options[intOption], 10);
      }
    }
  }

  if (typeof options["displayValue"] === "string") {
    options["displayValue"] = options["displayValue"] != "false";
  }

  return options;
}

/***/ }),

/***/ 50410:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/options/defaults.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var defaults = {
  width: 2,
  height: 100,
  format: "auto",
  displayValue: true,
  fontOptions: "",
  font: "monospace",
  text: undefined,
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  valid: function valid() {}
};
exports["default"] = defaults;

/***/ }),

/***/ 1268:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/canvas.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _merge = __webpack_require__(/*! ../help/merge.js */ 58818);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ 19164);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CanvasRenderer = function () {
  function CanvasRenderer(canvas, encodings, options) {
    _classCallCheck(this, CanvasRenderer);

    this.canvas = canvas;
    this.encodings = encodings;
    this.options = options;
  }

  _createClass(CanvasRenderer, [{
    key: "render",
    value: function render() {
      // Abort if the browser does not support HTML5 canvas
      if (!this.canvas.getContext) {
        throw new Error('The browser does not support canvas.');
      }

      this.prepareCanvas();

      for (var i = 0; i < this.encodings.length; i++) {
        var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);
        this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
        this.drawCanvasText(encodingOptions, this.encodings[i]);
        this.moveCanvasDrawing(this.encodings[i]);
      }

      this.restoreCanvas();
    }
  }, {
    key: "prepareCanvas",
    value: function prepareCanvas() {
      // Get the canvas context
      var ctx = this.canvas.getContext("2d");
      ctx.save();
      (0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
      var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
      var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
      this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;
      this.canvas.height = maxHeight; // Paint the canvas

      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      if (this.options.background) {
        ctx.fillStyle = this.options.background;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }

      ctx.translate(this.options.marginLeft, 0);
    }
  }, {
    key: "drawCanvasBarcode",
    value: function drawCanvasBarcode(options, encoding) {
      // Get the canvas context
      var ctx = this.canvas.getContext("2d");
      var binary = encoding.data; // Creates the barcode out of the encoded binary

      var yFrom;

      if (options.textPosition == "top") {
        yFrom = options.marginTop + options.fontSize + options.textMargin;
      } else {
        yFrom = options.marginTop;
      }

      ctx.fillStyle = options.lineColor;

      for (var b = 0; b < binary.length; b++) {
        var x = b * options.width + encoding.barcodePadding;

        if (binary[b] === "1") {
          ctx.fillRect(x, yFrom, options.width, options.height);
        } else if (binary[b]) {
          ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
        }
      }
    }
  }, {
    key: "drawCanvasText",
    value: function drawCanvasText(options, encoding) {
      // Get the canvas context
      var ctx = this.canvas.getContext("2d");
      var font = options.fontOptions + " " + options.fontSize + "px " + options.font; // Draw the text if displayValue is set

      if (options.displayValue) {
        var x, y;

        if (options.textPosition == "top") {
          y = options.marginTop + options.fontSize - options.textMargin;
        } else {
          y = options.height + options.textMargin + options.marginTop + options.fontSize;
        }

        ctx.font = font; // Draw the text in the correct X depending on the textAlign option

        if (options.textAlign == "left" || encoding.barcodePadding > 0) {
          x = 0;
          ctx.textAlign = 'left';
        } else if (options.textAlign == "right") {
          x = encoding.width - 1;
          ctx.textAlign = 'right';
        } // In all other cases, center the text
        else {
          x = encoding.width / 2;
          ctx.textAlign = 'center';
        }

        ctx.fillText(encoding.text, x, y);
      }
    }
  }, {
    key: "moveCanvasDrawing",
    value: function moveCanvasDrawing(encoding) {
      var ctx = this.canvas.getContext("2d");
      ctx.translate(encoding.width, 0);
    }
  }, {
    key: "restoreCanvas",
    value: function restoreCanvas() {
      // Get the canvas context
      var ctx = this.canvas.getContext("2d");
      ctx.restore();
    }
  }]);

  return CanvasRenderer;
}();

exports["default"] = CanvasRenderer;

/***/ }),

/***/ 15119:
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _canvas = __webpack_require__(/*! ./canvas.js */ 1268);

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(/*! ./svg.js */ 31239);

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(/*! ./object.js */ 33069);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports["default"] = {
  CanvasRenderer: _canvas2.default,
  SVGRenderer: _svg2.default,
  ObjectRenderer: _object2.default
};

/***/ }),

/***/ 33069:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ObjectRenderer = function () {
  function ObjectRenderer(object, encodings, options) {
    _classCallCheck(this, ObjectRenderer);

    this.object = object;
    this.encodings = encodings;
    this.options = options;
  }

  _createClass(ObjectRenderer, [{
    key: "render",
    value: function render() {
      this.object.encodings = this.encodings;
    }
  }]);

  return ObjectRenderer;
}();

exports["default"] = ObjectRenderer;

/***/ }),

/***/ 19164:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/shared.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(/*! ../help/merge.js */ 58818);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getEncodingHeight(encoding, options) {
  return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
  if (options.displayValue && barcodeWidth < textWidth) {
    if (options.textAlign == "center") {
      return Math.floor((textWidth - barcodeWidth) / 2);
    } else if (options.textAlign == "left") {
      return 0;
    } else if (options.textAlign == "right") {
      return Math.floor(textWidth - barcodeWidth);
    }
  }

  return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
  for (var i = 0; i < encodings.length; i++) {
    var encoding = encodings[i];
    var options = (0, _merge2.default)(barcodeOptions, encoding.options); // Calculate the width of the encoding

    var textWidth;

    if (options.displayValue) {
      textWidth = messureText(encoding.text, options, context);
    } else {
      textWidth = 0;
    }

    var barcodeWidth = encoding.data.length * options.width;
    encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));
    encoding.height = getEncodingHeight(encoding, options);
    encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
  }
}

function getTotalWidthOfEncodings(encodings) {
  var totalWidth = 0;

  for (var i = 0; i < encodings.length; i++) {
    totalWidth += encodings[i].width;
  }

  return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
  var maxHeight = 0;

  for (var i = 0; i < encodings.length; i++) {
    if (encodings[i].height > maxHeight) {
      maxHeight = encodings[i].height;
    }
  }

  return maxHeight;
}

function messureText(string, options, context) {
  var ctx;

  if (context) {
    ctx = context;
  } else if (typeof document !== "undefined") {
    ctx = document.createElement("canvas").getContext("2d");
  } else {
    // If the text cannot be messured we will return 0.
    // This will make some barcode with big text render incorrectly
    return 0;
  }

  ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font; // Calculate the width of the encoding

  var measureTextResult = ctx.measureText(string);

  if (!measureTextResult) {
    // Some implementations don't implement measureText and return undefined.
    // If the text cannot be measured we will return 0.
    // This will make some barcode with big text render incorrectly
    return 0;
  }

  var size = measureTextResult.width;
  return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),

/***/ 31239:
/*!*****************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/svg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _merge = __webpack_require__(/*! ../help/merge.js */ 58818);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ 19164);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
  function SVGRenderer(svg, encodings, options) {
    _classCallCheck(this, SVGRenderer);

    this.svg = svg;
    this.encodings = encodings;
    this.options = options;
    this.document = options.xmlDocument || document;
  }

  _createClass(SVGRenderer, [{
    key: "render",
    value: function render() {
      var currentX = this.options.marginLeft;
      this.prepareSVG();

      for (var i = 0; i < this.encodings.length; i++) {
        var encoding = this.encodings[i];
        var encodingOptions = (0, _merge2.default)(this.options, encoding.options);
        var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);
        this.setGroupOptions(group, encodingOptions);
        this.drawSvgBarcode(group, encodingOptions, encoding);
        this.drawSVGText(group, encodingOptions, encoding);
        currentX += encoding.width;
      }
    }
  }, {
    key: "prepareSVG",
    value: function prepareSVG() {
      // Clear the SVG
      while (this.svg.firstChild) {
        this.svg.removeChild(this.svg.firstChild);
      }

      (0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
      var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
      var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
      var width = totalWidth + this.options.marginLeft + this.options.marginRight;
      this.setSvgAttributes(width, maxHeight);

      if (this.options.background) {
        this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
      }
    }
  }, {
    key: "drawSvgBarcode",
    value: function drawSvgBarcode(parent, options, encoding) {
      var binary = encoding.data; // Creates the barcode out of the encoded binary

      var yFrom;

      if (options.textPosition == "top") {
        yFrom = options.fontSize + options.textMargin;
      } else {
        yFrom = 0;
      }

      var barWidth = 0;
      var x = 0;

      for (var b = 0; b < binary.length; b++) {
        x = b * options.width + encoding.barcodePadding;

        if (binary[b] === "1") {
          barWidth++;
        } else if (barWidth > 0) {
          this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
          barWidth = 0;
        }
      } // Last draw is needed since the barcode ends with 1


      if (barWidth > 0) {
        this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
      }
    }
  }, {
    key: "drawSVGText",
    value: function drawSVGText(parent, options, encoding) {
      var textElem = this.document.createElementNS(svgns, 'text'); // Draw the text if displayValue is set

      if (options.displayValue) {
        var x, y;
        textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

        if (options.textPosition == "top") {
          y = options.fontSize - options.textMargin;
        } else {
          y = options.height + options.textMargin + options.fontSize;
        } // Draw the text in the correct X depending on the textAlign option


        if (options.textAlign == "left" || encoding.barcodePadding > 0) {
          x = 0;
          textElem.setAttribute("text-anchor", "start");
        } else if (options.textAlign == "right") {
          x = encoding.width - 1;
          textElem.setAttribute("text-anchor", "end");
        } // In all other cases, center the text
        else {
          x = encoding.width / 2;
          textElem.setAttribute("text-anchor", "middle");
        }

        textElem.setAttribute("x", x);
        textElem.setAttribute("y", y);
        textElem.appendChild(this.document.createTextNode(encoding.text));
        parent.appendChild(textElem);
      }
    }
  }, {
    key: "setSvgAttributes",
    value: function setSvgAttributes(width, height) {
      var svg = this.svg;
      svg.setAttribute("width", width + "px");
      svg.setAttribute("height", height + "px");
      svg.setAttribute("x", "0px");
      svg.setAttribute("y", "0px");
      svg.setAttribute("viewBox", "0 0 " + width + " " + height);
      svg.setAttribute("xmlns", svgns);
      svg.setAttribute("version", "1.1");
      svg.setAttribute("style", "transform: translate(0,0)");
    }
  }, {
    key: "createGroup",
    value: function createGroup(x, y, parent) {
      var group = this.document.createElementNS(svgns, 'g');
      group.setAttribute("transform", "translate(" + x + ", " + y + ")");
      parent.appendChild(group);
      return group;
    }
  }, {
    key: "setGroupOptions",
    value: function setGroupOptions(group, options) {
      group.setAttribute("style", "fill:" + options.lineColor + ";");
    }
  }, {
    key: "drawRect",
    value: function drawRect(x, y, width, height, parent) {
      var rect = this.document.createElementNS(svgns, 'rect');
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", width);
      rect.setAttribute("height", height);
      parent.appendChild(rect);
      return rect;
    }
  }]);

  return SVGRenderer;
}();

exports["default"] = SVGRenderer;

/***/ }),

/***/ 14740:
/*!*******************************************!*\
  !*** ./node_modules/ngx-barcode/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxBarcodeComponent": () => (/* binding */ NgxBarcodeComponent),
/* harmony export */   "NgxBarcodeModule": () => (/* binding */ NgxBarcodeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


var _c0 = ["bcElement"];

var
/** @type {?} */
jsbarcode = __webpack_require__(/*! jsbarcode */ 12081);

var NgxBarcodeComponent =
/** @class */
function () {
  /**
   * @param {?} renderer
   */
  function NgxBarcodeComponent(renderer) {
    this.renderer = renderer;
    this.elementType = 'svg';
    this.cssClass = 'barcode'; // this should be done more elegantly

    this.format = 'CODE128';
    this.lineColor = '#000000';
    this.width = 2;
    this.height = 100;
    this.displayValue = false;
    this.fontOptions = '';
    this.font = 'monospace';
    this.textAlign = 'center';
    this.textPosition = 'bottom';
    this.textMargin = 2;
    this.fontSize = 20;
    this.background = '#ffffff';
    this.margin = 10;
    this.marginTop = 10;
    this.marginBottom = 10;
    this.marginLeft = 10;
    this.marginRight = 10;
    this.value = '';

    this.valid = function () {
      return true;
    };
  }

  Object.defineProperty(NgxBarcodeComponent.prototype, "options", {
    /**
     * @return {?}
     */
    get: function () {
      return {
        format: this.format,
        lineColor: this.lineColor,
        width: this.width,
        height: this.height,
        displayValue: this.displayValue,
        fontOptions: this.fontOptions,
        font: this.font,
        textAlign: this.textAlign,
        textPosition: this.textPosition,
        textMargin: this.textMargin,
        fontSize: this.fontSize,
        background: this.background,
        margin: this.margin,
        marginTop: this.marginTop,
        marginBottom: this.marginBottom,
        marginLeft: this.marginLeft,
        marginRight: this.marginRight,
        valid: this.valid
      };
    },
    enumerable: true,
    configurable: true
  });
  /**
   * @return {?}
   */

  NgxBarcodeComponent.prototype.ngOnChanges = function () {
    this.createBarcode();
  };
  /**
   * @return {?}
   */


  NgxBarcodeComponent.prototype.createBarcode = function () {
    if (!this.value) {
      return;
    }

    var
    /** @type {?} */
    element;

    switch (this.elementType) {
      case 'img':
        element = this.renderer.createElement('img');
        break;

      case 'canvas':
        element = this.renderer.createElement('canvas');
        break;

      case 'svg':
      default:
        element = this.renderer.createElement('svg', 'svg');
    }

    jsbarcode(element, this.value, this.options);

    for (var _i = 0, _a = this.bcElement.nativeElement.childNodes; _i < _a.length; _i++) {
      var node = _a[_i];
      this.renderer.removeChild(this.bcElement.nativeElement, node);
    }

    this.renderer.appendChild(this.bcElement.nativeElement, element);
  };
  /**
   * @nocollapse
   */


  NgxBarcodeComponent.ctorParameters = function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  };

  NgxBarcodeComponent.propDecorators = {
    'elementType': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-element-type']
    }],
    'cssClass': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-class']
    }],
    'format': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-format']
    }],
    'lineColor': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-line-color']
    }],
    'width': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-width']
    }],
    'height': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-height']
    }],
    'displayValue': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-display-value']
    }],
    'fontOptions': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-font-options']
    }],
    'font': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-font']
    }],
    'textAlign': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-text-align']
    }],
    'textPosition': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-text-position']
    }],
    'textMargin': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-text-margin']
    }],
    'fontSize': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-font-size']
    }],
    'background': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-background']
    }],
    'margin': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-margin']
    }],
    'marginTop': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-margin-top']
    }],
    'marginBottom': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-margin-bottom']
    }],
    'marginLeft': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-margin-left']
    }],
    'marginRight': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-margin-right']
    }],
    'value': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-value']
    }],
    'bcElement': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['bcElement',
      /** @type {?} */
      {
        static: true
      }]
    }],
    'valid': [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['bc-valid']
    }]
  };

  NgxBarcodeComponent.ɵfac = function NgxBarcodeComponent_Factory(t) {
    return new (t || NgxBarcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };

  NgxBarcodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgxBarcodeComponent,
    selectors: [["ngx-barcode"]],
    viewQuery: function NgxBarcodeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bcElement = _t.first);
      }
    },
    inputs: {
      elementType: ["bc-element-type", "elementType"],
      cssClass: ["bc-class", "cssClass"],
      format: ["bc-format", "format"],
      lineColor: ["bc-line-color", "lineColor"],
      width: ["bc-width", "width"],
      height: ["bc-height", "height"],
      displayValue: ["bc-display-value", "displayValue"],
      fontOptions: ["bc-font-options", "fontOptions"],
      font: ["bc-font", "font"],
      textAlign: ["bc-text-align", "textAlign"],
      textPosition: ["bc-text-position", "textPosition"],
      textMargin: ["bc-text-margin", "textMargin"],
      fontSize: ["bc-font-size", "fontSize"],
      background: ["bc-background", "background"],
      margin: ["bc-margin", "margin"],
      marginTop: ["bc-margin-top", "marginTop"],
      marginBottom: ["bc-margin-bottom", "marginBottom"],
      marginLeft: ["bc-margin-left", "marginLeft"],
      marginRight: ["bc-margin-right", "marginRight"],
      value: ["bc-value", "value"],
      valid: ["bc-valid", "valid"]
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 2,
    consts: [["bcElement", ""]],
    template: function NgxBarcodeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
      }
    },
    encapsulation: 2
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxBarcodeComponent, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
      args: [{
        selector: 'ngx-barcode',
        template: "<div #bcElement [class]=\"cssClass\"></div>"
      }]
    }], function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
      }];
    }, {
      elementType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-element-type']
      }],
      cssClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-class']
      }],
      format: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-format']
      }],
      lineColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-line-color']
      }],
      width: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-width']
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-height']
      }],
      displayValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-display-value']
      }],
      fontOptions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-font-options']
      }],
      font: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-font']
      }],
      textAlign: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-text-align']
      }],
      textPosition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-text-position']
      }],
      textMargin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-text-margin']
      }],
      fontSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-font-size']
      }],
      background: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-background']
      }],
      margin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-margin']
      }],
      marginTop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-margin-top']
      }],
      marginBottom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-margin-bottom']
      }],
      marginLeft: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-margin-left']
      }],
      marginRight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-margin-right']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-value']
      }],
      valid: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
        args: ['bc-valid']
      }],
      bcElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
        args: ['bcElement',
        /** @type {?} */
        {
          static: true
        }]
      }]
    });
  })();

  return NgxBarcodeComponent;
}();

var NgxBarcodeModule =
/** @class */
function () {
  function NgxBarcodeModule() {}
  /**
   * @return {?}
   */


  NgxBarcodeModule.forRoot = function () {
    return {
      ngModule: NgxBarcodeModule,
      providers: []
    };
  };
  /**
   * @nocollapse
   */


  NgxBarcodeModule.ctorParameters = function () {
    return [];
  };

  NgxBarcodeModule.ɵfac = function NgxBarcodeModule_Factory(t) {
    return new (t || NgxBarcodeModule)();
  };

  NgxBarcodeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NgxBarcodeModule
  });
  NgxBarcodeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxBarcodeModule, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
      args: [{
        imports: [],
        declarations: [NgxBarcodeComponent],
        exports: [NgxBarcodeComponent]
      }]
    }], function () {
      return [];
    }, null);
  })();

  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxBarcodeModule, {
      declarations: [NgxBarcodeComponent],
      exports: [NgxBarcodeComponent]
    });
  })();

  return NgxBarcodeModule;
}();



/***/ })

}]);
//# sourceMappingURL=src_app_product_product_module_ts.js.map