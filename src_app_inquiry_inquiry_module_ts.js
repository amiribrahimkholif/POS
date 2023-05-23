"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_inquiry_inquiry_module_ts"],{

/***/ 88907:
/*!*********************************************************!*\
  !*** ./src/app/core/domain-classes/application.enum.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationEnums": () => (/* binding */ ApplicationEnums)
/* harmony export */ });
var ApplicationEnums;
(function (ApplicationEnums) {
    ApplicationEnums[ApplicationEnums["Reminder"] = 0] = "Reminder";
    ApplicationEnums[ApplicationEnums["SalesOrder"] = 1] = "SalesOrder";
    ApplicationEnums[ApplicationEnums["PurchaseOrder"] = 2] = "PurchaseOrder";
    ApplicationEnums[ApplicationEnums["Inquiry"] = 3] = "Inquiry";
})(ApplicationEnums || (ApplicationEnums = {}));


/***/ }),

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

/***/ 1607:
/*!*********************************************************************!*\
  !*** ./src/app/inquiry/add-inquiry/add-inquiry-resolver.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddInquiryResolverService": () => (/* binding */ AddInquiryResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _inquiry_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inquiry.service */ 44614);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);






class AddInquiryResolverService {
    constructor(inquiryService, router) {
        this.inquiryService = inquiryService;
        this.router = router;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        if (id === 'addItem') {
            return null;
        }
        return this.inquiryService.getInquiry(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((inquiry) => {
            if (inquiry) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(inquiry);
            }
            else {
                this.router.navigate(['/inquiry']);
                return null;
            }
        }));
    }
}
AddInquiryResolverService.ɵfac = function AddInquiryResolverService_Factory(t) { return new (t || AddInquiryResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_inquiry_service__WEBPACK_IMPORTED_MODULE_0__.InquiryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AddInquiryResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AddInquiryResolverService, factory: AddInquiryResolverService.ɵfac });


/***/ }),

/***/ 31259:
/*!**************************************************************!*\
  !*** ./src/app/inquiry/add-inquiry/add-inquiry.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddInquiryComponent": () => (/* binding */ AddInquiryComponent),
/* harmony export */   "emailOrMobileValidator": () => (/* binding */ emailOrMobileValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/user-resource */ 68527);
/* harmony import */ var _shared_editor_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/editor.config */ 7757);
/* harmony import */ var _shared_validators_url_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/validators/url-validation */ 70407);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _inquiry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inquiry.service */ 44614);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/user/user.service */ 1584);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/inquiry-status.service */ 94061);
/* harmony import */ var _core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/inquiry-source.service */ 92539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






























function AddInquiryComponent_div_8_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "mat-spinner");
} }
function AddInquiryComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddInquiryComponent_div_8_mat_spinner_1_Template, 1, 0, "mat-spinner", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isLoading);
} }
function AddInquiryComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", a_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", a_r19.name, " ");
} }
function AddInquiryComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function AddInquiryComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "SELECTED_PRODUCTS"), ":");
} }
function AddInquiryComponent_mat_chip_22_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](1, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddInquiryComponent_mat_chip_22_Template_i_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23); const i_r21 = restoredCtx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r22.removeProduct(i_r21)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroupName", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r20.get("name").value);
} }
function AddInquiryComponent_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryStatus_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", inquiryStatus_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", inquiryStatus_r24.name, " ");
} }
function AddInquiryComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "PLEASE_SELECT_INQUIRY_STATUS"), " ");
} }
function AddInquiryComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddInquiryComponent_div_31_div_1_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r6.inquiryForm.get("inquiryStatusId").errors == null ? null : ctx_r6.inquiryForm.get("inquiryStatusId").errors.required);
} }
function AddInquiryComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", user_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", user_r26.firstName, " ", user_r26.lastName, " ");
} }
function AddInquiryComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "PLEASE_ENTER_ORGANIZATION"), " ");
} }
function AddInquiryComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddInquiryComponent_div_46_div_1_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r8.inquiryForm.get("companyName").errors == null ? null : ctx_r8.inquiryForm.get("companyName").errors.required);
} }
function AddInquiryComponent_div_53_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "CONTACT_PERSON_NAME_IS_REQUIRED"), " ");
} }
function AddInquiryComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddInquiryComponent_div_53_div_1_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r9.inquiryForm.get("contactPerson").errors == null ? null : ctx_r9.inquiryForm.get("contactPerson").errors.required);
} }
function AddInquiryComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "PLEASE_ENTER_VALID_EMAIL"), " ");
} }
function AddInquiryComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddInquiryComponent_div_60_div_1_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r10.inquiryForm.get("email").errors == null ? null : ctx_r10.inquiryForm.get("email").errors.email);
} }
function AddInquiryComponent_div_61_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "EITHER_EMAIL_OR_MOBILE_NUMBER_IS_REQUIRED"), " ");
} }
function AddInquiryComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddInquiryComponent_div_61_div_1_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r11.inquiryForm.errors == null ? null : ctx_r11.inquiryForm.errors.mobileoremail);
} }
function AddInquiryComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "PLEASE_ENTER_CORRECT_URL_OF_WEBSITE"), " ");
} }
function AddInquiryComponent_mat_option_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", country_r31.countryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", country_r31.countryName, " ");
} }
function AddInquiryComponent_mat_option_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 47)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const city_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", city_r32.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](city_r32.cityName);
} }
function AddInquiryComponent_mat_option_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const source_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", source_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", source_r33.name, " ");
} }
function AddInquiryComponent_mat_error_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx_r17.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "SOURCE_OF_INQUIRY_IS_REQUIRED"), " ");
} }
function emailOrMobileValidator() {
    return (form) => {
        const email = form.get("email").value;
        const mobileNo = form.get("mobileNo").value;
        if (email || mobileNo) {
            return null;
        }
        return { mobileoremail: true };
    };
}
class AddInquiryComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent {
    constructor(fb, inquiryService, commonService, router, route, toastrService, productService, userService, translationService, inquiryStatusService, inquirySourceService) {
        super(translationService);
        this.fb = fb;
        this.inquiryService = inquiryService;
        this.commonService = commonService;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.productService = productService;
        this.userService = userService;
        this.translationService = translationService;
        this.inquiryStatusService = inquiryStatusService;
        this.inquirySourceService = inquirySourceService;
        this.products = [];
        this.countries = [];
        this.cities = [];
        this.isLoading = false;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.filterCityObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.editorConfig = _shared_editor_config__WEBPACK_IMPORTED_MODULE_2__.EditorConfig;
        this.inquiryStatuses = [];
        this.users = [];
        this.sourcesOfInquiry = [];
        this.getLangDir();
        this.userResource = new _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_1__.UserResource();
        this.userResource.pageSize = 10;
        this.userResource.orderBy = 'firstName desc';
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ProductResourceParameter();
    }
    get inquieryProductArray() {
        return this.inquiryForm.get('inquiryProducts');
    }
    ngOnInit() {
        this.createInquiryForm();
        this.getCountry();
        this.getCityByName();
        this.getInuiriesStatus();
        this.getInquirySource();
        this.getUsers();
        this.getDefaultProducts();
        this.inquiry = null;
        this.inquiryForm.get('productNameInput').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)(c => {
            this.productResource.name = c !== null && c !== void 0 ? c : '';
            return this.productService.getProducts(this.productResource);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.products = [...resp.body];
            }
        }, (err) => {
        });
    }
    getDefaultProducts() {
        this.productResource.name = '';
        this.productService.getProducts(this.productResource)
            .subscribe(c => {
            this.products = [...c.body];
        });
    }
    getUsers() {
        this.sub$.sink = this.userService.getUsers(this.userResource)
            .subscribe((resp) => {
            this.users = resp.body;
        });
    }
    getCityByName() {
        this.sub$.sink = this.filterCityObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => this.isLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.switchMap)((c) => {
            if (c) {
                var strArray = c.split(':');
                return this.commonService.getCityByName(strArray[0], strArray[1]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => { this.isLoading = false; }));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)(null);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.finalize)(() => { this.isLoading = false; }))
            .subscribe((c) => {
            this.cities = [...c];
            this.isLoading = false;
        }, (err) => (this.isLoading = false));
    }
    patchInquiry() {
        this.inquiryForm.patchValue({
            companyName: this.inquiry.companyName,
            contactPerson: this.inquiry.contactPerson,
            email: this.inquiry.email,
            mobileNo: this.inquiry.mobileNo,
            phoneNo: this.inquiry.phone,
            description: this.inquiry.description,
            website: this.inquiry.website,
            address: this.inquiry.address,
            cityName: this.inquiry.cityName,
            countryName: this.inquiry.countryName,
            inquiryProducts: this.inquiry.inquiryProducts,
            message: this.inquiry.message,
            inquirySourceId: this.inquiry.inquirySourceId,
            assignTo: this.inquiry.assignTo,
            inquiryStatusId: this.inquiry.inquiryStatusId
        });
        if (this.inquiry.countryName && this.inquiry.cityName) {
            const strCountryCity = this.inquiry.countryName + ':' + this.inquiry.cityName;
            this.filterCityObservable$.next(strCountryCity);
        }
    }
    createInquiryForm() {
        this.inquiryForm = this.fb.group({
            id: [''],
            productNameInput: [''],
            productId: [''],
            inquiryProducts: this.fb.array([]),
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.maxLength(500)]],
            contactPerson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.email]],
            mobileNo: [''],
            phoneNo: [''],
            website: ['', [_shared_validators_url_validation__WEBPACK_IMPORTED_MODULE_3__.ValidateUrl]],
            address: [''],
            cityName: [''],
            countryName: [''],
            message: [''],
            inquirySourceId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]],
            inquiryStatusId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required]],
            assignTo: [null]
        }, {
            validators: [emailOrMobileValidator()]
        });
    }
    getCountry() {
        this.sub$.sink = this.commonService.getCountry().subscribe((data) => {
            this.countries = data;
        });
    }
    getInuiriesStatus() {
        this.sub$.sink = this.inquiryStatusService.getAll()
            .subscribe(c => {
            this.inquiryStatuses = c;
        });
    }
    getInquirySource() {
        this.inquirySourceService.getAll()
            .subscribe(c => this.sourcesOfInquiry = c);
    }
    handleFilterCity(cityName) {
        cityName = this.inquiryForm.get('cityName').value;
        const country = this.inquiryForm.get('countryName').value;
        if (cityName && country) {
            const strCountryCity = country + ':' + cityName;
            this.filterCityObservable$.next(strCountryCity);
        }
    }
    onCountryChange(country) {
        this.inquiryForm.patchValue({
            cityName: '',
        });
        if (country) {
            const strCountry = country + ':' + '';
            this.filterCityObservable$.next(strCountry);
        }
        else {
            this.cities = [];
        }
    }
    onInquiryList() {
        this.router.navigate(['/inquiry']);
    }
    onInquirySubmit() {
        if (this.inquieryProductArray.length == 0) {
            this.toastrService.error(this.translationService.getValue('PLEASE_SELECT_ATLEST_ONE_PRODUCT.'));
            return;
        }
        if (this.inquiryForm.valid) {
            this.isLoading = true;
            const inqObj = this.createBuildForm();
            if (this.inquiry) {
                this.sub$.sink = this.inquiryService
                    .updateInquiry(this.inquiry.id, inqObj)
                    .subscribe((c) => {
                    this.toastrService.success(this.translationService.getValue('INQUIRY_UPDATE_SUCCESSFULLY'));
                    this.router.navigate(['/inquiry']);
                }, () => { this.isLoading = false; });
            }
            else {
                this.sub$.sink = this.inquiryService
                    .saveInquiry(inqObj)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success(this.translationService.getValue('INQUIRY_SAVE_SUCCESSFULLY'));
                    this.router.navigate(['/inquiry']);
                }, () => { this.isLoading = false; });
            }
        }
        else {
            this.inquiryForm.markAllAsTouched();
            // this.markFormGroupTouched(this.inquiryForm);
        }
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    createBuildForm() {
        const inquiryObj = {
            id: this.inquiry ? this.inquiry.id : null,
            companyName: this.inquiryForm.get('companyName').value,
            contactPerson: this.inquiryForm.get('contactPerson').value,
            email: this.inquiryForm.get('email').value,
            mobileNo: this.inquiryForm.get('mobileNo').value,
            phone: this.inquiryForm.get('phoneNo').value,
            website: this.inquiryForm.get('website').value,
            message: this.inquiryForm.get('message').value,
            countryName: this.inquiryForm.get('countryName').value,
            cityName: this.inquiryForm.get('cityName').value,
            address: this.inquiryForm.get('address').value,
            inquiryProducts: this.inquiryForm.get('inquiryProducts').value,
            inquirySourceId: this.inquiryForm.get('inquirySourceId').value,
            inquiryStatusId: this.inquiryForm.get('inquiryStatusId').value,
            assignTo: this.inquiryForm.get('assignTo').value
        };
        return inquiryObj;
    }
    editInquiryProduct(product) {
        return this.fb.group({
            productId: [product.productId],
            name: [product.name],
            inquiryId: [product.inquiryId]
        });
    }
    pushValuesInquiryProduct() {
        if (this.inquiry.inquiryProducts && this.inquiry.inquiryProducts.length > 0) {
            this.inquiry.inquiryProducts.map(product => {
                this.inquieryProductArray.push(this.editInquiryProduct(product));
            });
        }
    }
    selectProduct() {
        const product = this.products.find(c => c.id === this.inquiryForm.get('productId').value);
        if (product) {
            this.inquieryProductArray.push(this.editInquiryProduct({
                productId: product.id,
                inquiryId: this.inquiry ? this.inquiry.id : '',
                name: product.name
            }));
            this.inquiryForm.get('productNameInput').setValue(null);
            this.inquiryForm.get('productId').setValue('');
        }
    }
    ;
    removeProduct(index) {
        this.inquieryProductArray.removeAt(index);
    }
}
AddInquiryComponent.ɵfac = function AddInquiryComponent_Factory(t) { return new (t || AddInquiryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_inquiry_service__WEBPACK_IMPORTED_MODULE_5__.InquiryService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_7__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_10__.InquiryStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_11__.InquirySourceService)); };
AddInquiryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: AddInquiryComponent, selectors: [["app-add-inquiry"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 133, vars: 98, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["formControlName", "productId", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["formControlName", "productNameInput", "focused", "'true'", "type", "text", "autocomplete", "off", "placeholder", "search other products", 1, "form-control", "w-100"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], ["formArrayName", "inquiryProducts", 1, "col-md-12"], [4, "ngIf"], [3, "dir"], [4, "ngFor", "ngForOf"], [1, "form-group", "mt-1"], [1, "text-danger", 3, "dir"], ["formControlName", "inquiryStatusId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "assignTo", 1, "form-control", 3, "dir", "placeholder"], [1, "text-danger"], ["formControlName", "companyName", "type", "text", 1, "form-control"], ["formControlName", "contactPerson", "type", "text", 1, "form-control"], ["formControlName", "email", "type", "text", 1, "form-control"], ["formControlName", "mobileNo", "type", "text", 1, "form-control"], [1, "col-sm-12"], ["formControlName", "phoneNo", "type", "text", 1, "form-control"], ["formControlName", "website", "type", "text", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-12"], ["formControlName", "address", 1, "form-control"], [1, "col-md-6", "mt-4"], [1, "form-row"], ["formControlName", "countryName", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["autocomplete", "new-city", "type", "text", "formControlName", "cityName", 1, "form-control", 3, "placeholder", "matAutocomplete", "input"], ["auto", "matAutocomplete"], ["formControlName", "inquirySourceId", 1, "form-control", 3, "dir", "placeholder"], ["class", "text-danger", 3, "dir", 4, "ngIf"], [1, "col-sm-12", "mt-2"], ["formControlName", "message", 3, "config"], [1, "col-md-12", "mb-1"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10"], [1, "fas", "fa-save"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], [1, "loading-shade"], [3, "value"], [3, "formGroupName"], [1, "material-icons", "cursor-pointer", 3, "click"]], template: function AddInquiryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function AddInquiryComponent_Template_form_ngSubmit_7_listener() { return ctx.onInquirySubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AddInquiryComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function AddInquiryComponent_Template_mat_select_selectionChange_12_listener() { return ctx.selectProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "input", 10)(15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, AddInquiryComponent_mat_option_16_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, AddInquiryComponent_mat_option_17_Template, 3, 3, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, AddInquiryComponent_span_19_Template, 3, 3, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "mat-chip-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, AddInquiryComponent_mat_chip_22_Template, 6, 2, "mat-chip", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 7)(24, "div", 17)(25, "mat-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, AddInquiryComponent_mat_option_30_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, AddInquiryComponent_div_31_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 7)(33, "div", 17)(34, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "mat-select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, AddInquiryComponent_mat_option_39_Template, 2, 3, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 7)(41, "div", 8)(42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](45, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, AddInquiryComponent_div_46_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div", 7)(48, "div", 8)(49, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](52, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, AddInquiryComponent_div_53_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 7)(55, "div", 8)(56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](60, AddInquiryComponent_div_60_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, AddInquiryComponent_div_61_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "div", 7)(63, "div", 8)(64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](67, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div", 7)(70, "div", 8)(71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](74, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "div", 7)(76, "div", 8)(77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](80, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](81, AddInquiryComponent_div_81_Template, 3, 3, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "div", 30)(83, "div", 6)(84, "div", 7)(85, "div", 8)(86, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](89, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "div", 32)(91, "div", 33)(92, "div", 7)(93, "div", 8)(94, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "mat-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function AddInquiryComponent_Template_mat_select_selectionChange_97_listener($event) { return ctx.onCountryChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](99, AddInquiryComponent_mat_option_99_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "div", 7)(101, "div", 8)(102, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("input", function AddInquiryComponent_Template_input_input_105_listener($event) { return ctx.handleFilterCity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](107, "mat-autocomplete", 15, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](109, AddInquiryComponent_mat_option_109_Template, 3, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](110, "div", 7)(111, "mat-label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](116, AddInquiryComponent_mat_option_116_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](117, AddInquiryComponent_mat_error_117_Template, 3, 4, "mat-error", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](118, "div", 39)(119, "div", 8)(120, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](122, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](123, "angular-editor", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](124, "div", 41)(125, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](126, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddInquiryComponent_Template_button_click_129_listener() { return ctx.onInquiryList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](130, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 54, "MANAGE_INQUIRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.inquiryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 56, "SELECT_PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.products.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inquieryProductArray.controls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.inquieryProductArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 58, "INQUIRY_STATUS"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](29, 60, "SELECT_STATUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.inquiryStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("inquiryStatusId").touched && ctx.inquiryForm.get("inquiryStatusId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](36, 62, "ASSIGN_TO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](38, 64, "SELECT_USER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](44, 66, "ORGANIZATION"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("companyName").touched && ctx.inquiryForm.get("companyName").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](51, 68, "CONTACT_PERSON"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("contactPerson").touched && ctx.inquiryForm.get("contactPerson").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](58, 70, "EMAIL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("email").touched && ctx.inquiryForm.get("email").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("mobileNo").touched || ctx.inquiryForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](66, 72, "MOBILE_NO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](73, 74, "PHONE_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](79, 76, "WEBSITE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("website").touched && (ctx.inquiryForm.get("website").errors == null ? null : ctx.inquiryForm.get("website").errors.valid_url));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](88, 78, "ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](96, 80, "SELECT_COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](98, 82, "SEARCH_COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](104, 84, "SELECT_CITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](106, 86, "SEARCH_CITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](113, 88, "SOURCE_OF_INQUIRY"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](115, 90, "SELECT_SOURCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.sourcesOfInquiry);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("inquirySourceId").touched && (ctx.inquiryForm.get("inquirySourceId").errors == null ? null : ctx.inquiryForm.get("inquirySourceId").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](122, 92, "MESSAGE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](128, 94, "SAVE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](132, 96, "CANCEL"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormArrayName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_28__.MatChip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelect, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_31__.AngularEditorComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDivider, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaW5xdWlyeS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 21500:
/*!************************************************************************************!*\
  !*** ./src/app/inquiry/inquiry-attachment-add/inquiry-attachment-add.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryAttachmentAddComponent": () => (/* binding */ InquiryAttachmentAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _inquiry_attachment_inquiry_attachment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inquiry-attachment/inquiry-attachment.service */ 67160);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











class InquiryAttachmentAddComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(fb, data, dialogRef, toastrService, inquiryAttachmentService, translationService) {
        super(translationService);
        this.fb = fb;
        this.data = data;
        this.dialogRef = dialogRef;
        this.toastrService = toastrService;
        this.inquiryAttachmentService = inquiryAttachmentService;
        this.translationService = translationService;
        this.documentForm = '';
        this._validFileExtensions = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.allowFileExtension;
        this.extension = '';
    }
    ngOnInit() {
        this.createInquiryDocumentForm();
    }
    createInquiryDocumentForm() {
        this.inquiryDocumentForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    fileEvent($event) {
        let files = $event.target.files;
        if (files.length == 0) {
            return;
        }
        const file = files[0];
        this.extension = file.name.split('.').pop();
        if (this.Validate(file.name)) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (_event) => {
                this.documentForm = reader.result.toString();
            };
        }
    }
    buildInquiryDocumentForm() {
        const inquiryAttachment = {
            inquiryId: this.data.inquiryId,
            documents: this.documentForm,
            name: this.inquiryDocumentForm.get('name').value,
            extension: this.extension
        };
        return inquiryAttachment;
    }
    onAttachmentSubmit() {
        if (!this.inquiryDocumentForm.valid) {
            this.toastrService.error(this.translationService.getValue('PLEASE_ENTER_NAME_OF_DOCUMENT'));
            this.inquiryDocumentForm.markAllAsTouched();
            return;
        }
        if (!this.documentForm) {
            this.toastrService.error(this.translationService.getValue('PLEASE_UPLOAD_DOCUMENT'));
            return;
        }
        const inquiryAttachment = this.buildInquiryDocumentForm();
        this.sub$.sink = this.inquiryAttachmentService.saveInquiryAttachment(inquiryAttachment)
            .subscribe(c => {
            this.toastrService.success(this.translationService.getValue('DOCUMENT_SAVE_SUCCESSFULLY'));
            this.dialogRef.close();
        });
    }
    Validate(fileName) {
        var sFileName = fileName;
        if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < this._validFileExtensions.length; j++) {
                var sCurExtension = this._validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }
            if (!blnValid) {
                this.toastrService.error(sFileName + this.translationService.getValue('IS_INVALID_ALLOWED_EXTENSIONS_ARE') + this._validFileExtensions.join(", "));
                return false;
            }
        }
        return true;
    }
    onInquiryList() {
        this.dialogRef.close();
    }
}
InquiryAttachmentAddComponent.ɵfac = function InquiryAttachmentAddComponent_Factory(t) { return new (t || InquiryAttachmentAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_inquiry_attachment_inquiry_attachment_service__WEBPACK_IMPORTED_MODULE_2__.InquiryAttachmentService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService)); };
InquiryAttachmentAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InquiryAttachmentAddComponent, selectors: [["app-inquiry-attachment-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 16, consts: [[1, "modal-content1"], [1, "modal-header"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], [1, "col-md-8"], [1, "modal-title"], [1, "col-sm-auto", "ml-auto"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "fas", "fa-times"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "form-group", "row"], ["for", "txtName", 1, "col-sm-4", "col-form-label"], [1, "col-sm-8"], ["type", "text", "id", "txtName", "formControlName", "name", 1, "form-control"], ["name", "file", "type", "file", "name", "Upload File", "fxFlex", "30", 3, "change"], ["fileInput", ""], [1, "modal-footer"], [1, "form-row", "w-100", "justify-content-end"], [1, "col-md-auto", "col-auto"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10"], [1, "fas", "fa-save"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"]], template: function InquiryAttachmentAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryAttachmentAddComponent_Template_button_click_8_listener() { return ctx.onInquiryList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function InquiryAttachmentAddComponent_Template_form_ngSubmit_10_listener() { return ctx.onAttachmentSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12)(21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 14)(25, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function InquiryAttachmentAddComponent_Template_input_change_25_listener($event) { return ctx.fileEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 18)(28, "div", 19)(29, "div", 20)(30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryAttachmentAddComponent_Template_button_click_34_listener() { return ctx.onInquiryList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, "ADD_ATTACHMENT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.inquiryDocumentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 8, "NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 10, "UPLOAD_FILE"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 12, "SAVE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 14, "CANCEL"), " ");
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LWF0dGFjaG1lbnQtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 45581:
/*!****************************************************************************!*\
  !*** ./src/app/inquiry/inquiry-attachment/inquiry-attachment.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryAttachmentComponent": () => (/* binding */ InquiryAttachmentComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _inquiry_attachment_add_inquiry_attachment_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inquiry-attachment-add/inquiry-attachment-add.component */ 21500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _inquiry_attachment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inquiry-attachment.service */ 67160);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












function InquiryAttachmentComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td")(9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InquiryAttachmentComponent_tr_31_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const inquiryAttachment_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r2.onDownload(inquiryAttachment_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InquiryAttachmentComponent_tr_31_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3); const inquiryAttachment_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.onDeleted(inquiryAttachment_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const inquiryAttachment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", inquiryAttachment_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 6, inquiryAttachment_r1.createdDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", inquiryAttachment_r1 == null ? null : inquiryAttachment_r1.createdByUser.firstName, " ", inquiryAttachment_r1 == null ? null : inquiryAttachment_r1.createdByUser.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 9, "DOWNLOAD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 11, "DELETE"), "");
} }
class InquiryAttachmentComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(inquiryAttachmentService, commonDialogService, translationService, dialog, toastrService) {
        super(translationService);
        this.inquiryAttachmentService = inquiryAttachmentService;
        this.commonDialogService = commonDialogService;
        this.translationService = translationService;
        this.dialog = dialog;
        this.toastrService = toastrService;
        this.inquiryAttachments = [];
    }
    ngOnInit() {
        this.getInquiryAttachments();
    }
    getInquiryAttachments() {
        this.sub$.sink = this.inquiryAttachmentService.getInquiryAttachments(this.inquiryId)
            .subscribe(c => {
            this.inquiryAttachments = c;
        });
    }
    onDownload(inquiryAttachment) {
        this.sub$.sink = this.inquiryAttachmentService.downloadFile(inquiryAttachment.id)
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.Response) {
                this.downloadFile(event, inquiryAttachment.name);
            }
        }, (error) => {
            this.toastrService.error(this.translationService.getValue('ERROR_WHILE_DOWNLOADING_DOCUMENT'));
        });
    }
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
    onDeleted(inquiryAttachment) {
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')}?`)
            .subscribe((isTrue) => {
            if (isTrue) {
                this.sub$.sink = this.inquiryAttachmentService.deleteInquiryAttachment(inquiryAttachment.id)
                    .subscribe(c => {
                    if (c) {
                        this.toastrService.success(this.translationService.getValue('INQUIRY_ATTACHMENT_DELETED'));
                        this.getInquiryAttachments();
                    }
                });
            }
        });
    }
    onAddInquiryAttachement() {
        const inquiryAttachmentDialog = {
            inquiryId: this.inquiryId,
            inquiryAttachment: null
        };
        const dialogRef = this.dialog.open(_inquiry_attachment_add_inquiry_attachment_add_component__WEBPACK_IMPORTED_MODULE_1__.InquiryAttachmentAddComponent, {
            width: '600px',
            direction: this.langDir,
            data: inquiryAttachmentDialog
        });
        this.sub$.sink = dialogRef.afterClosed()
            .subscribe(result => {
            this.getInquiryAttachments();
        });
    }
}
InquiryAttachmentComponent.ɵfac = function InquiryAttachmentComponent_Factory(t) { return new (t || InquiryAttachmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_inquiry_attachment_service__WEBPACK_IMPORTED_MODULE_2__.InquiryAttachmentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_3__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService)); };
InquiryAttachmentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InquiryAttachmentComponent, selectors: [["app-inquiry-attachment"]], inputs: { inquiryId: "inquiryId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 19, consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "form-row"], [1, "col-sm-8", "col"], [1, "col-sm-4", "text-right", "col-auto"], [1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], [1, "card-body"], [1, "table-responsive"], [1, "tbl-1000"], [1, "mat-header-row"], [1, "mat-header-cell", 2, "width", "100px"], [1, "mat-header-cell"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "btn-sm", "mr-2", 3, "click"], [1, "fas", "fa-download"], [1, "ml-1"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-trash"]], template: function InquiryAttachmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InquiryAttachmentComponent_Template_button_click_9_listener() { return ctx.onAddInquiryAttachement(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "table", 11)(16, "thead")(17, "tr", 12)(18, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, InquiryAttachmentComponent_tr_31_Template, 19, 13, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 7, "ATTACHMENTS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 9, "ADD_ATTACHMENT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 11, "NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 13, "CREATED_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 15, "CREATED_USER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 17, "ACTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.inquiryAttachments);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LWF0dGFjaG1lbnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 67160:
/*!**************************************************************************!*\
  !*** ./src/app/inquiry/inquiry-attachment/inquiry-attachment.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryAttachmentService": () => (/* binding */ InquiryAttachmentService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);


class InquiryAttachmentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getInquiryAttachments(inquieryId) {
        const url = `inquiryAttachment/${inquieryId}`;
        return this.httpClient.get(url);
    }
    deleteInquiryAttachment(id) {
        const url = `inquiryAttachment/${id}`;
        return this.httpClient.delete(url);
    }
    updateInquiryAttachment(id, inquiryAttachment) {
        const url = 'inquiryAttachment/' + id;
        return this.httpClient.put(url, inquiryAttachment);
    }
    saveInquiryAttachment(inquiryAttachment) {
        const url = 'inquiryAttachment/';
        return this.httpClient.post(url, inquiryAttachment);
    }
    downloadFile(id) {
        const url = `inquiryAttachment/${id}/download`;
        return this.httpClient.get(url, {
            reportProgress: true,
            observe: 'events',
            responseType: 'blob',
        });
    }
}
InquiryAttachmentService.ɵfac = function InquiryAttachmentService_Factory(t) { return new (t || InquiryAttachmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
InquiryAttachmentService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InquiryAttachmentService, factory: InquiryAttachmentService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31538:
/*!********************************************************************!*\
  !*** ./src/app/inquiry/inquiry-detail/inquiry-detail.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryDetailComponent": () => (/* binding */ InquiryDetailComponent),
/* harmony export */   "emailOrMobileValidator": () => (/* binding */ emailOrMobileValidator)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_application_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/application.enum */ 88907);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/domain-classes/user-resource */ 68527);
/* harmony import */ var _shared_add_reminder_scheduler_add_reminder_scheduler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/add-reminder-scheduler/add-reminder-scheduler.component */ 24929);
/* harmony import */ var _shared_editor_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/editor.config */ 7757);
/* harmony import */ var _shared_validators_url_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/validators/url-validation */ 70407);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _inquiry_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inquiry.service */ 44614);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user/user.service */ 1584);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/inquiry-status.service */ 94061);
/* harmony import */ var _core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/inquiry-source.service */ 92539);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _inquiry_note_inquiry_note_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../inquiry-note/inquiry-note.component */ 45201);
/* harmony import */ var _inquiry_task_inquiry_task_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../inquiry-task/inquiry-task.component */ 71164);
/* harmony import */ var _inquiry_attachment_inquiry_attachment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../inquiry-attachment/inquiry-attachment.component */ 45581);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




































function InquiryDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 50)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InquiryDetailComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r23.onAddReminder()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 1, "ADD_REMINDER"), " ");
} }
function InquiryDetailComponent_div_16_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "mat-spinner");
} }
function InquiryDetailComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, InquiryDetailComponent_div_16_mat_spinner_1_Template, 1, 0, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r1.isLoading);
} }
function InquiryDetailComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InquiryDetailComponent_mat_option_23_Template_mat_option_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r28); const product_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r27.selectProduct(product_r26)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const product_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", product_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](product_r26.name);
} }
function InquiryDetailComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "SELECTED_PRODUCTS"), ":");
} }
function InquiryDetailComponent_mat_chip_28_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](1, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InquiryDetailComponent_mat_chip_28_Template_i_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r32); const i_r30 = restoredCtx.index; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵresetView"](ctx_r31.removeProduct(i_r30)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5, " clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroupName", i_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](product_r29.get("name").value);
} }
function InquiryDetailComponent_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryStatus_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", inquiryStatus_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", inquiryStatus_r33.name, " ");
} }
function InquiryDetailComponent_div_37_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "PLEASE_SELECT_INQUIRY_STATUS"), " ");
} }
function InquiryDetailComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, InquiryDetailComponent_div_37_div_1_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r7.inquiryForm.get("inquiryStatusId").errors == null ? null : ctx_r7.inquiryForm.get("inquiryStatusId").errors.required);
} }
function InquiryDetailComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", user_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", user_r35.firstName, " ", user_r35.lastName, " ");
} }
function InquiryDetailComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "PLEASE_ENTER_ORGANIZATION"), " ");
} }
function InquiryDetailComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, InquiryDetailComponent_div_52_div_1_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r9.inquiryForm.get("companyName").errors == null ? null : ctx_r9.inquiryForm.get("companyName").errors.required);
} }
function InquiryDetailComponent_div_59_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "CONTACT_PERSON_NAME_IS_REQUIRED"), " ");
} }
function InquiryDetailComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, InquiryDetailComponent_div_59_div_1_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r10.inquiryForm.get("contactPerson").errors == null ? null : ctx_r10.inquiryForm.get("contactPerson").errors.required);
} }
function InquiryDetailComponent_div_66_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "div", 22);
} }
function InquiryDetailComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, InquiryDetailComponent_div_66_div_1_Template, 1, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r11.inquiryForm.get("email").errors == null ? null : ctx_r11.inquiryForm.get("email").errors.email);
} }
function InquiryDetailComponent_div_67_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "EITHER_EMAIL_OR_MOBILE_NUMBER_IS_REQUIRED"), " ");
} }
function InquiryDetailComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, InquiryDetailComponent_div_67_div_1_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r12.inquiryForm.errors == null ? null : ctx_r12.inquiryForm.errors.mobileoremail);
} }
function InquiryDetailComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "PLEASE_ENTER_CORRECT_URL_OF_WEBSITE"), " ");
} }
function InquiryDetailComponent_mat_option_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", country_r40.countryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", country_r40.countryName, " ");
} }
function InquiryDetailComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "PLEASE_SELECT_CITY"), " ");
} }
function InquiryDetailComponent_mat_option_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 57)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const city_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", city_r41.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](city_r41.cityName);
} }
function InquiryDetailComponent_mat_option_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const source_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", source_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", source_r42.name, " ");
} }
function InquiryDetailComponent_mat_error_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "mat-error", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx_r19.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "SOURCE_OF_INQUIRY_IS_REQUIRED"), " ");
} }
function InquiryDetailComponent_app_inquiry_note_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-inquiry-note", 59);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inquiryId", ctx_r20.inquiry == null ? null : ctx_r20.inquiry.id);
} }
function InquiryDetailComponent_app_inquiry_task_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-inquiry-task", 59);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inquiryId", ctx_r21.inquiry == null ? null : ctx_r21.inquiry.id);
} }
function InquiryDetailComponent_app_inquiry_attachment_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-inquiry-attachment", 59);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("inquiryId", ctx_r22.inquiry == null ? null : ctx_r22.inquiry.id);
} }
function emailOrMobileValidator() {
    return (form) => {
        const email = form.get("email").value;
        const mobileNo = form.get("mobileNo").value;
        if (email || mobileNo) {
            return null;
        }
        return { mobileoremail: true };
    };
}
class InquiryDetailComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_6__.BaseComponent {
    constructor(fb, inquiryService, commonService, router, route, toastrService, productService, userService, translationService, inquiryStatusService, inquirySourceService, dialog) {
        super(translationService);
        this.fb = fb;
        this.inquiryService = inquiryService;
        this.commonService = commonService;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.productService = productService;
        this.userService = userService;
        this.translationService = translationService;
        this.inquiryStatusService = inquiryStatusService;
        this.inquirySourceService = inquirySourceService;
        this.dialog = dialog;
        this.titlePage = 'Inquiry';
        this.countries = [];
        this.cities = [];
        this.isLoading = false;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
        this.filterCityObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
        this.editorConfig = _shared_editor_config__WEBPACK_IMPORTED_MODULE_4__.EditorConfig;
        this.inquiryStatuses = [];
        this.users = [];
        this.sourcesOfInquiry = [];
        this.selectProduct = (product) => {
            this.inquieryProductArray.push(this.editInquiryProduct({
                productId: product.id,
                inquiryId: this.inquiry ? this.inquiry.id : '',
                name: product.name
            }));
            this.inquiryForm.get('productNameInput').setValue(null);
        };
        this.getLangDir();
        this.userResource = new _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_2__.UserResource();
        this.userResource.pageSize = 10;
        this.userResource.orderBy = 'firstName desc';
    }
    get inquieryProductArray() {
        return this.inquiryForm.get('inquiryProducts');
    }
    ngOnInit() {
        this.createInquiryForm();
        this.getCountry();
        this.getCityByName();
        this.getInuiriesStatus();
        this.getInquirySource();
        this.getUsers();
        const routeSub$ = this.route.data.subscribe((data) => {
            if (data.inquiry) {
                this.inquiry = data.inquiry;
                this.titlePage = 'Inquiry Detail';
                this.patchInquiry();
                this.pushValuesInquiryProduct();
            }
            else {
                this.titlePage = 'Add Inquiry';
                if (this.inquiry) {
                    this.createInquiryForm();
                    this.inquiry = null;
                }
            }
        });
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_1__.ProductResourceParameter();
        this.sub$.add(routeSub$);
        this.inquiryForm.get('productNameInput').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(c => {
            this.productResource.name = c;
            return this.productService.getProducts(this.productResource);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.products = [...resp.body];
            }
        }, (err) => {
        });
    }
    getUsers() {
        this.sub$.sink = this.userService.getUsers(this.userResource)
            .subscribe((resp) => {
            this.users = resp.body;
        });
    }
    getCityByName() {
        this.sub$.sink = this.filterCityObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => this.isLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)((c) => {
            if (c) {
                var strArray = c.split(':');
                return this.commonService.getCityByName(strArray[0], strArray[1]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.tap)(() => { this.isLoading = false; }));
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.of)(null);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.finalize)(() => { this.isLoading = false; }))
            .subscribe((c) => {
            this.cities = [...c];
            this.isLoading = false;
        }, (err) => (this.isLoading = false));
    }
    patchInquiry() {
        this.inquiryForm.patchValue({
            companyName: this.inquiry.companyName,
            contactPerson: this.inquiry.contactPerson,
            email: this.inquiry.email,
            mobileNo: this.inquiry.mobileNo,
            phoneNo: this.inquiry.phone,
            description: this.inquiry.description,
            website: this.inquiry.website,
            address: this.inquiry.address,
            cityName: this.inquiry.cityName,
            countryName: this.inquiry.countryName,
            inquiryProducts: this.inquiry.inquiryProducts,
            message: this.inquiry.message,
            inquirySourceId: this.inquiry.inquirySourceId,
            assignTo: this.inquiry.assignTo,
            inquiryStatusId: this.inquiry.inquiryStatusId
        });
        if (this.inquiry.countryName && this.inquiry.cityName) {
            const strCountryCity = this.inquiry.countryName + ':' + this.inquiry.cityName;
            this.filterCityObservable$.next(strCountryCity);
        }
    }
    createInquiryForm() {
        this.inquiryForm = this.fb.group({
            id: [''],
            productNameInput: [''],
            inquiryProducts: this.fb.array([]),
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.maxLength(500)]],
            contactPerson: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.email]],
            mobileNo: [''],
            phoneNo: [''],
            website: ['', [_shared_validators_url_validation__WEBPACK_IMPORTED_MODULE_5__.ValidateUrl]],
            address: [''],
            cityName: [''],
            countryName: [''],
            message: [''],
            inquirySourceId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            inquiryStatusId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__.Validators.required]],
            assignTo: [null]
        }, {
            validators: [emailOrMobileValidator()]
        });
    }
    getCountry() {
        this.sub$.sink = this.commonService.getCountry().subscribe((data) => {
            this.countries = data;
        });
    }
    getInuiriesStatus() {
        this.sub$.sink = this.inquiryStatusService.getAll()
            .subscribe(c => {
            this.inquiryStatuses = c;
        });
    }
    getInquirySource() {
        this.inquirySourceService.getAll()
            .subscribe(c => this.sourcesOfInquiry = c);
    }
    handleFilterCity(cityName) {
        cityName = this.inquiryForm.get('cityName').value;
        const country = this.inquiryForm.get('countryName').value;
        if (cityName && country) {
            const strCountryCity = country + ':' + cityName;
            this.filterCityObservable$.next(strCountryCity);
        }
    }
    onCountryChange(country) {
        this.inquiryForm.patchValue({
            cityName: '',
        });
        if (country) {
            const strCountry = country + ':' + '';
            this.filterCityObservable$.next(strCountry);
        }
        else {
            this.cities = [];
        }
    }
    onInquiryList() {
        this.router.navigate(['/inquiry']);
    }
    onInquirySubmit() {
        if (this.inquieryProductArray.length == 0) {
            this.toastrService.error(this.translationService.getValue('PLEASE_SELECT_ATLEST_ONE_PRODUCT'));
            return;
        }
        if (this.inquiryForm.valid) {
            this.isLoading = true;
            const inqObj = this.createBuildForm();
            if (this.inquiry) {
                this.sub$.sink = this.inquiryService
                    .updateInquiry(this.inquiry.id, inqObj)
                    .subscribe((c) => {
                    this.toastrService.success(this.translationService.getValue('INQUIRY_UPDATE_SUCCESSFULLY'));
                    this.router.navigate(['/inquiry']);
                }, () => { this.isLoading = false; });
            }
            else {
                this.sub$.sink = this.inquiryService
                    .saveInquiry(inqObj)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success(this.translationService.getValue('INQUIRY_SAVE_SUCCESSFULLY'));
                    this.router.navigate(['/inquiry']);
                }, () => { this.isLoading = false; });
            }
        }
        else {
            this.markFormGroupTouched(this.inquiryForm);
        }
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    createBuildForm() {
        const inquiryObj = {
            id: this.inquiry ? this.inquiry.id : null,
            companyName: this.inquiryForm.get('companyName').value,
            contactPerson: this.inquiryForm.get('contactPerson').value,
            email: this.inquiryForm.get('email').value,
            mobileNo: this.inquiryForm.get('mobileNo').value,
            phone: this.inquiryForm.get('phoneNo').value,
            website: this.inquiryForm.get('website').value,
            message: this.inquiryForm.get('message').value,
            countryName: this.inquiryForm.get('countryName').value,
            cityName: this.inquiryForm.get('cityName').value,
            address: this.inquiryForm.get('address').value,
            inquiryProducts: this.inquiryForm.get('inquiryProducts').value,
            inquirySourceId: this.inquiryForm.get('inquirySourceId').value,
            inquiryStatusId: this.inquiryForm.get('inquiryStatusId').value,
            assignTo: this.inquiryForm.get('assignTo').value
        };
        return inquiryObj;
    }
    editInquiryProduct(product) {
        return this.fb.group({
            productId: [product.productId],
            name: [product.name],
            inquiryId: [product.inquiryId]
        });
    }
    pushValuesInquiryProduct() {
        if (this.inquiry.inquiryProducts && this.inquiry.inquiryProducts.length > 0) {
            this.inquiry.inquiryProducts.map(product => {
                this.inquieryProductArray.push(this.editInquiryProduct(product));
            });
        }
    }
    onAddReminder() {
        const moduleReference = {
            application: _core_domain_classes_application_enum__WEBPACK_IMPORTED_MODULE_0__.ApplicationEnums.Inquiry,
            referenceId: this.inquiry.id
        };
        this.dialog.open(_shared_add_reminder_scheduler_add_reminder_scheduler_component__WEBPACK_IMPORTED_MODULE_3__.AddReminderSchedulerComponent, {
            minWidth: '800px',
            direction: this.langDir,
            data: Object.assign({}, moduleReference)
        });
    }
    removeProduct(index) {
        this.inquieryProductArray.removeAt(index);
    }
}
InquiryDetailComponent.ɵfac = function InquiryDetailComponent_Factory(t) { return new (t || InquiryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_26__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_inquiry_service__WEBPACK_IMPORTED_MODULE_7__.InquiryService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_28__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_9__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_11__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_12__.InquiryStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_13__.InquirySourceService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__.MatDialog)); };
InquiryDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: InquiryDetailComponent, selectors: [["app-inquiry-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵInheritDefinitionFeature"]], decls: 143, vars: 101, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "col-md-auto col-sm-auto col-auto", 4, "hasClaim"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["class", "loading-shade", 4, "ngIf"], [1, "col-md-12"], ["formControlName", "productNameInput", 1, "form-control", 3, "placeholder", "matAutocomplete"], [3, "dir"], ["autoForProduct", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formArrayName", "inquiryProducts", 1, "col-md-12", "mb-1"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "form-group", "mt-1"], [1, "text-danger"], ["formControlName", "inquiryStatusId", 1, "form-control", 3, "dir", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "assignTo", 1, "form-control", 3, "dir", "placeholder"], [1, "form-group"], ["formControlName", "companyName", "type", "text", 1, "form-control"], ["formControlName", "contactPerson", "type", "text", 1, "form-control"], ["formControlName", "email", "type", "text", 1, "form-control"], ["formControlName", "mobileNo", "type", "text", 1, "form-control"], ["formControlName", "phoneNo", "type", "text", 1, "form-control"], ["formControlName", "website", "type", "text", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "address", 1, "form-control"], [1, "col-md-6", "mt-4"], [1, "form-row"], ["formControlName", "countryName", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["autocomplete", "new-city", "type", "text", "formControlName", "cityName", 1, "form-control", 3, "placeholder", "matAutocomplete", "input"], ["auto", "matAutocomplete"], ["formControlName", "inquirySourceId", 1, "form-control", 3, "dir", "placeholder"], ["class", "text-danger", 3, "dir", 4, "ngIf"], ["formControlName", "message", 3, "config"], [1, "col-md-12", "mb-1"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10"], [1, "fas", "fa-save"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], [1, "mt-2"], [3, "inquiryId", 4, "ngIf"], [1, "col-md-auto", "col-sm-auto", "col-auto"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], [1, "loading-shade"], [3, "value", "click"], [3, "formGroupName"], [1, "material-icons", "cursor-pointer", 3, "click"], [3, "value"], [1, "text-danger", 3, "dir"], [3, "inquiryId"]], template: function InquiryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, InquiryDetailComponent_div_7_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 9)(15, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngSubmit", function InquiryDetailComponent_Template_form_ngSubmit_15_listener() { return ctx.onInquirySubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](16, InquiryDetailComponent_div_16_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "div", 5)(18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "mat-autocomplete", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, InquiryDetailComponent_mat_option_23_Template, 3, 2, "mat-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](25, InquiryDetailComponent_span_25_Template, 3, 3, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "mat-chip-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](28, InquiryDetailComponent_mat_chip_28_Template, 6, 2, "mat-chip", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 20)(30, "div", 21)(31, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](36, InquiryDetailComponent_mat_option_36_Template, 2, 2, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](37, InquiryDetailComponent_div_37_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "div", 20)(39, "div", 21)(40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](43, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](45, InquiryDetailComponent_mat_option_45_Template, 2, 3, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "div", 20)(47, "div", 26)(48, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](51, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](52, InquiryDetailComponent_div_52_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "div", 20)(54, "div", 26)(55, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](58, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](59, InquiryDetailComponent_div_59_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](60, "div", 20)(61, "div", 26)(62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](65, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](66, InquiryDetailComponent_div_66_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](67, InquiryDetailComponent_div_67_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](68, "div", 20)(69, "div", 26)(70, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](73, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "div", 20)(75, "div", 26)(76, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](78, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](79, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](80, "div", 20)(81, "div", 26)(82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](85, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](86, InquiryDetailComponent_div_86_Template, 3, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](87, "div", 12)(88, "div", 5)(89, "div", 20)(90, "div", 26)(91, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](94, "textarea", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](95, "div", 35)(96, "div", 36)(97, "div", 20)(98, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](101, "mat-select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("selectionChange", function InquiryDetailComponent_Template_mat_select_selectionChange_101_listener($event) { return ctx.onCountryChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](103, InquiryDetailComponent_mat_option_103_Template, 2, 2, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](104, "div", 20)(105, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](107, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](108, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("input", function InquiryDetailComponent_Template_input_input_108_listener($event) { return ctx.handleFilterCity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](110, InquiryDetailComponent_div_110_Template, 3, 3, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](111, "mat-autocomplete", 14, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](113, InquiryDetailComponent_mat_option_113_Template, 3, 2, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](114, "div", 20)(115, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](118, "mat-select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](120, InquiryDetailComponent_mat_option_120_Template, 2, 2, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](121, InquiryDetailComponent_mat_error_121_Template, 3, 4, "mat-error", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](122, "div", 6)(123, "div", 26)(124, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](126, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](127, "angular-editor", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](128, "div", 43)(129, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](130, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](131);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](132, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](133, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InquiryDetailComponent_Template_button_click_133_listener() { return ctx.onInquiryList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](134, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](137, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](138, InquiryDetailComponent_app_inquiry_note_138_Template, 1, 1, "app-inquiry-note", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](139, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](140, InquiryDetailComponent_app_inquiry_task_140_Template, 1, 1, "app-inquiry-task", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](141, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](142, InquiryDetailComponent_app_inquiry_attachment_142_Template, 1, 1, "app-inquiry-attachment", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](22);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 55, "MANAGE_INQUIRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hasClaim", "inquiry_manage_reminders");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 57, "DETAIL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.inquiryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](20, 59, "SELECT_PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matAutocomplete", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquieryProductArray.controls.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.inquieryProductArray.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](33, 61, "INQUIRY_STATUS"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](35, 63, "SELECT_STATUS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.inquiryStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("inquiryStatusId").touched && ctx.inquiryForm.get("inquiryStatusId").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](42, 65, "ASSIGN_TO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](44, 67, "SELECT_USER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](50, 69, "ORGANIZATION"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("companyName").touched && ctx.inquiryForm.get("companyName").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](57, 71, "CONTACT_PERSON"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("contactPerson").touched && ctx.inquiryForm.get("contactPerson").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](64, 73, "EMAIL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("email").touched && ctx.inquiryForm.get("email").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("mobileNo").touched || ctx.inquiryForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](72, 75, "MOBILE_NO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](78, 77, "PHONE_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](84, 79, "WEBSITE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("website").touched && (ctx.inquiryForm.get("website").errors == null ? null : ctx.inquiryForm.get("website").errors.valid_url));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](93, 81, "ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](100, 83, "SELECT_COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](102, 85, "SEARCH_COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](107, 87, "SELECT_CITY"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](109, 89, "SEARCH_CITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("matAutocomplete", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("cityName").touched && (ctx.inquiryForm.get("cityName").errors == null ? null : ctx.inquiryForm.get("cityName").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](117, 91, "SOURCE_OF_INQUIRY"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](119, 93, "SELECT_SOURCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.sourcesOfInquiry);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiryForm.get("inquirySourceId").touched && (ctx.inquiryForm.get("inquirySourceId").errors == null ? null : ctx.inquiryForm.get("inquirySourceId").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](126, 95, "MESSAGE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](132, 97, "SAVE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](136, 99, "CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiry == null ? null : ctx.inquiry.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiry == null ? null : ctx.inquiry.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.inquiry == null ? null : ctx.inquiry.id);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_14__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormArrayName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatError, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_33__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_34__.MatOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__.MatChipList, _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__.MatChip, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_36__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_37__.MatSelect, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_38__.AngularEditorComponent, _inquiry_note_inquiry_note_component__WEBPACK_IMPORTED_MODULE_15__.InquiryNoteComponent, _inquiry_task_inquiry_task_component__WEBPACK_IMPORTED_MODULE_16__.InquiryTaskComponent, _inquiry_attachment_inquiry_attachment_component__WEBPACK_IMPORTED_MODULE_17__.InquiryAttachmentComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_39__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3388:
/*!************************************************************!*\
  !*** ./src/app/inquiry/inquiry-list/inquiry-datasource.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryDataSource": () => (/* binding */ InquiryDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class InquiryDataSource {
    constructor(inquiryService) {
        this.inquiryService = inquiryService;
        this._inquirySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
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
        return this._inquirySubject$.asObservable();
    }
    disconnect() {
        this._inquirySubject$.complete();
        this.loadingSubject.complete();
        this.sub$.unsubscribe();
    }
    loadData(inquiryResource) {
        this.loadingSubject.next(true);
        this.sub$ = this.inquiryService.getInquiries(inquiryResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject.next(false)))
            .subscribe((resp) => {
            const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
            this._responseHeaderSubject$.next(paginationParam);
            const inquiries = [...resp.body];
            this._count = inquiries.length;
            this._inquirySubject$.next(inquiries);
        });
    }
}


/***/ }),

/***/ 44681:
/*!****************************************************************!*\
  !*** ./src/app/inquiry/inquiry-list/inquiry-list.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryListComponent": () => (/* binding */ InquiryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_application_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/application.enum */ 88907);
/* harmony import */ var _core_domain_classes_inquiry_resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/inquiry-resource-parameter */ 44519);
/* harmony import */ var _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/domain-classes/user-resource */ 68527);
/* harmony import */ var _shared_add_reminder_scheduler_add_reminder_scheduler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/add-reminder-scheduler/add-reminder-scheduler.component */ 24929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _inquiry_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inquiry-datasource */ 3388);
/* harmony import */ var _inquiry_product_list_inquiry_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inquiry-product-list/inquiry-product-list.component */ 63464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _inquiry_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inquiry.service */ 44614);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user/user.service */ 1584);
/* harmony import */ var _core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/inquiry-status.service */ 94061);
/* harmony import */ var _core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/inquiry-source.service */ 92539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



































const _c0 = function () { return ["/inquiry/add"]; };
function InquiryListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 50)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "ADD_INQUIRY"), " ");
} }
function InquiryListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function InquiryListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 54);
} }
function InquiryListComponent_td_16_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InquiryListComponent_td_16_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const inquiry_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r49.editInquiry(inquiry_r44.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "EDIT"));
} }
function InquiryListComponent_td_16_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InquiryListComponent_td_16_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r54); const inquiry_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r52.deleteInquiry(inquiry_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "DELETE"));
} }
function InquiryListComponent_td_16_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InquiryListComponent_td_16_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r57); const inquiry_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r55.addReminder(inquiry_r44.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "add_alert");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "REMINDER"));
} }
function InquiryListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 55)(1, "button", 56)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "mat-menu", null, 57)(6, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function InquiryListComponent_td_16_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r59); const inquiry_r44 = restoredCtx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r58.viewProduct(inquiry_r44)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "format_list_bulleted");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, InquiryListComponent_td_16_button_12_Template, 6, 3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, InquiryListComponent_td_16_button_13_Template, 6, 3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, InquiryListComponent_td_16_button_14_Template, 6, 3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 5, "VIEW_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hasClaim", "INQ_UPDATE_INQUIRY");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hasClaim", "INQ_DELETE_INQUIRY");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_REMINDERS");
} }
function InquiryListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "DATE"), " ");
} }
function InquiryListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 1, inquiry_r60.createdDate, "dd/MM/yyyy hh:mm:ss"), " ");
} }
function InquiryListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "COMPANY_NAME"), " ");
} }
function InquiryListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r61.companyName, " ");
} }
function InquiryListComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "STATUS"), " ");
} }
function InquiryListComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r62.inquiryStatus, " ");
} }
function InquiryListComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "SOURCE"), " ");
} }
function InquiryListComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r63.inquirySource, " ");
} }
function InquiryListComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "ASSIGN_TO"), " ");
} }
function InquiryListComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r64.assignToName, " ");
} }
function InquiryListComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "EMAIL"), " ");
} }
function InquiryListComponent_td_34_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inquiry_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate1"]("href", "mailto:", inquiry_r65.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](inquiry_r65.email);
} }
function InquiryListComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, InquiryListComponent_td_34_ng_container_1_Template, 3, 2, "ng-container", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", inquiry_r65.email);
} }
function InquiryListComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "MOBILE"), " ");
} }
function InquiryListComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r68.mobileNo, " ");
} }
function InquiryListComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "CITY"), " ");
} }
function InquiryListComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r69.cityName, " ");
} }
function InquiryListComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "TOTAL_TASKS"), " ");
} }
function InquiryListComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r70.inquiryActivityCount, " ");
} }
function InquiryListComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "TOTAL_COMMENTS"), " ");
} }
function InquiryListComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r71.inquiryNoteCount, " ");
} }
function InquiryListComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "TOTAL_ATTACHMENTS"), " ");
} }
function InquiryListComponent_td_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiry_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiry_r72.inquiryAttachmentCount, " ");
} }
function InquiryListComponent_th_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 69);
} }
function InquiryListComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 69);
} }
function InquiryListComponent_th_55_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryStatus_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", inquiryStatus_r74.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", inquiryStatus_r74.name, " ");
} }
function InquiryListComponent_th_55_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69)(1, "mat-select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InquiryListComponent_th_55_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r75.StatusToFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, InquiryListComponent_th_55_mat_option_6_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 5, "STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dir", ctx_r28.langDir)("ngModel", ctx_r28.StatusToFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 7, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r28.inquiryStatuses);
} }
function InquiryListComponent_th_57_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const source_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", source_r78.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", source_r78.name, " ");
} }
function InquiryListComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69)(1, "mat-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InquiryListComponent_th_57_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r79.SourceFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, InquiryListComponent_th_57_mat_option_6_Template, 2, 2, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 5, "SOURCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dir", ctx_r29.langDir)("ngModel", ctx_r29.SourceFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 7, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r29.sourcesOfInquiry);
} }
function InquiryListComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69)(1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InquiryListComponent_th_59_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r81.CompanyNameFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "COMPANY_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r30.CompanyNameFilter);
} }
function InquiryListComponent_th_61_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", user_r84.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", user_r84.firstName, " ", user_r84.lastName, " ");
} }
function InquiryListComponent_th_61_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69)(1, "mat-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InquiryListComponent_th_61_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r85.AssignToFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "mat-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, InquiryListComponent_th_61_mat_option_6_Template, 2, 3, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 5, "ASSIGN_TO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dir", ctx_r31.langDir)("ngModel", ctx_r31.AssignToFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 7, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r31.users);
} }
function InquiryListComponent_th_63_Template(rf, ctx) { if (rf & 1) {
    const _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69)(1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InquiryListComponent_th_63_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r88); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r87.EmailFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r32.EmailFilter);
} }
function InquiryListComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69)(1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InquiryListComponent_th_65_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r89.MobileNoFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "MOBILE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r33.MobileNoFilter);
} }
function InquiryListComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69)(1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function InquiryListComponent_th_67_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r91.CityFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "CITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r34.CityFilter);
} }
function InquiryListComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 69);
} }
function InquiryListComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 69);
} }
function InquiryListComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "th", 69);
} }
const _c1 = function () { return [15, 20, 30]; };
function InquiryListComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "mat-paginator", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("length", ctx_r38.inquiryResource.totalCount)("pageSize", ctx_r38.inquiryResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](3, _c1));
} }
function InquiryListComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 78)(2, "span", 79)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function InquiryListComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 80);
} }
function InquiryListComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 81);
} }
function InquiryListComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 80);
} }
function InquiryListComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 82);
} }
const _c2 = function () { return ["action-search", "date-search", "name-search", "status-search", "source-search", "assign-search", "email-search", "mobile-search", "city-search", "note-search", "task-search", "attachment-search"]; };
class InquiryListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent {
    constructor(inquiryService, toastrService, commonDialogService, router, translationService, dialog, userService, inquiryStatusService, inquirySourceService) {
        super(translationService);
        this.inquiryService = inquiryService;
        this.toastrService = toastrService;
        this.commonDialogService = commonDialogService;
        this.router = router;
        this.translationService = translationService;
        this.dialog = dialog;
        this.userService = userService;
        this.inquiryStatusService = inquiryStatusService;
        this.inquirySourceService = inquirySourceService;
        this.inquiries = [];
        this.displayedColumns = ['action', 'createdDate', 'companyName', 'status', 'source', 'assignTo', 'email', 'mobileNo', 'cityName', 'taskCount', 'commentCount', 'attachmentCount'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.inquiryStatuses = [];
        this.users = [];
        this.sourcesOfInquiry = [];
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
        this.getLangDir();
        this.inquiryResource = new _core_domain_classes_inquiry_resource_parameter__WEBPACK_IMPORTED_MODULE_1__.InquiryResourceParameter();
        this.inquiryResource.pageSize = 15;
        this.inquiryResource.orderBy = 'createdDate asc';
        this.userResource = new _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_2__.UserResource();
        this.userResource.pageSize = 10;
        this.userResource.orderBy = 'firstName desc';
    }
    get CompanyNameFilter() {
        return this._companyNameFilter;
    }
    set CompanyNameFilter(v) {
        this._companyNameFilter = v;
        const companyNameFilter = `companyName:${v}`;
        this.filterObservable$.next(companyNameFilter);
    }
    get SourceFilter() {
        return this._sourceToFilter;
    }
    set SourceFilter(v) {
        this._sourceToFilter = v ? v : '';
        const sourceToFilter = `Source:${this._sourceToFilter}`;
        this.filterObservable$.next(sourceToFilter);
    }
    set StatusToFilter(v) {
        this._statusToFilter = v ? v : '';
        const statusToFilter = `Status:${this._statusToFilter}`;
        this.filterObservable$.next(statusToFilter);
    }
    get StatusToFilter() {
        return this._statusToFilter;
    }
    set AssignToFilter(v) {
        this._assignToFilter = v ? v : '';
        const assignToFilter = `AssignTo:${this._assignToFilter}`;
        this.filterObservable$.next(assignToFilter);
    }
    get AssignToFilter() {
        return this._assignToFilter;
    }
    get EmailFilter() {
        return this._emailFilter;
    }
    set EmailFilter(v) {
        this._emailFilter = v;
        const emailFilter = `email:${v}`;
        this.filterObservable$.next(emailFilter);
    }
    get MobileNoFilter() {
        return this._mobileNoFilter;
    }
    set MobileNoFilter(v) {
        this._mobileNoFilter = v;
        const mobileOrFilter = `mobileNo:${v}`;
        this.filterObservable$.next(mobileOrFilter);
    }
    get CityFilter() {
        return this._cityFilter;
    }
    set CityFilter(v) {
        this._cityFilter = v;
        const cityFilter = `cityName:${v}`;
        this.filterObservable$.next(cityFilter);
    }
    ngOnInit() {
        this.dataSource = new _inquiry_datasource__WEBPACK_IMPORTED_MODULE_5__.InquiryDataSource(this.inquiryService);
        this.dataSource.loadData(this.inquiryResource);
        this.getResourceParameter();
        this.getInuiriesStatus();
        this.getInquirySource();
        this.getUsers();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)())
            .subscribe((c) => {
            this.inquiryResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split(':');
            if (strArray[0] === 'companyName') {
                this.inquiryResource.companyName = escape(strArray[1]);
            }
            else if (strArray[0] === 'email') {
                this.inquiryResource.email = strArray[1];
            }
            else if (strArray[0] === 'mobileNo') {
                this.inquiryResource.mobileNo = strArray[1];
            }
            else if (strArray[0] === 'cityName') {
                this.inquiryResource.city = strArray[1];
            }
            else if (strArray[0] === 'AssignTo') {
                this.inquiryResource.assignTo = strArray[1];
            }
            else if (strArray[0] === 'Source') {
                this.inquiryResource.inquirySourceId = strArray[1];
            }
            else if (strArray[0] === 'Status') {
                this.inquiryResource.inquiryStatusId = strArray[1];
            }
            this.dataSource.loadData(this.inquiryResource);
        });
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.tap)((c) => {
            this.inquiryResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.inquiryResource.pageSize = this.paginator.pageSize;
            this.inquiryResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.inquiryResource);
        }))
            .subscribe();
    }
    getUsers() {
        this.sub$.sink = this.userService.getUsers(this.userResource)
            .subscribe((resp) => {
            this.users = resp.body;
        });
    }
    getInuiriesStatus() {
        this.sub$.sink = this.inquiryStatusService.getAll()
            .subscribe(c => {
            this.inquiryStatuses = c;
        });
    }
    getInquirySource() {
        this.inquirySourceService.getAll()
            .subscribe(c => this.sourcesOfInquiry = c);
    }
    deleteInquiry(inquiry) {
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')}?`)
            .subscribe((isTrue) => {
            if (isTrue) {
                this.sub$.sink = this.inquiryService.deleteInquiry(inquiry.id)
                    .subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('INQUIRY_DELETED_SUCCESSFULLY'));
                    this.paginator.pageIndex = 0;
                    this.dataSource.loadData(this.inquiryResource);
                });
            }
        });
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.inquiryResource.pageSize = c.pageSize;
                this.inquiryResource.skip = c.skip;
                this.inquiryResource.totalCount = c.totalCount;
            }
        });
    }
    addReminder(inquiryId) {
        const moduleReference = {
            application: _core_domain_classes_application_enum__WEBPACK_IMPORTED_MODULE_0__.ApplicationEnums.Inquiry,
            referenceId: inquiryId
        };
        this.dialog.open(_shared_add_reminder_scheduler_add_reminder_scheduler_component__WEBPACK_IMPORTED_MODULE_3__.AddReminderSchedulerComponent, {
            minWidth: '800px',
            direction: this.langDir,
            data: Object.assign({}, moduleReference)
        });
    }
    editInquiry(inquiryId) {
        this.router.navigate(['/inquiry/manage', inquiryId]);
    }
    viewProduct(inquiry) {
        this.dialog.open(_inquiry_product_list_inquiry_product_list_component__WEBPACK_IMPORTED_MODULE_6__.InquiryProductListComponent, {
            minWidth: '800px',
            direction: this.langDir,
            data: Object.assign({}, inquiry)
        });
    }
}
InquiryListComponent.ɵfac = function InquiryListComponent_Factory(t) { return new (t || InquiryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_inquiry_service__WEBPACK_IMPORTED_MODULE_7__.InquiryService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_8__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_11__.InquiryStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_12__.InquirySourceService)); };
InquiryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: InquiryListComponent, selectors: [["app-inquiry-list"]], viewQuery: function InquiryListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]], decls: 81, vars: 14, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], ["class", "col-md-auto col-sm-auto col-auto", 4, "hasClaim"], [1, "row"], [1, "col-sm-12"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "matSortActive", "createdDate", "matSortDirection", "desc", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "action", "sticky", ""], ["mat-header-cell", "", "class", "table-column-50", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-50", 4, "matCellDef"], ["matColumnDef", "createdDate", "sticky", ""], ["mat-header-cell", "", "mat-sort-header", "", "class", "table-column-200", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-200", 4, "matCellDef"], ["matColumnDef", "companyName"], ["mat-header-cell", "", "mat-sort-header", "", "class", "table-column-200 pl-3", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-200 pl-3", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", "class", "table-column-150", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-150", 4, "matCellDef"], ["matColumnDef", "source"], ["matColumnDef", "assignTo"], ["matColumnDef", "email"], ["matColumnDef", "mobileNo"], ["matColumnDef", "cityName"], ["matColumnDef", "taskCount"], ["mat-header-cell", "", "class", "table-column-150", 4, "matHeaderCellDef"], ["matColumnDef", "commentCount"], ["matColumnDef", "attachmentCount"], ["matColumnDef", "action-search", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "date-search", "sticky", ""], ["matColumnDef", "status-search"], ["matColumnDef", "source-search"], ["matColumnDef", "name-search"], ["matColumnDef", "assign-search"], ["matColumnDef", "email-search"], ["matColumnDef", "mobile-search"], ["matColumnDef", "city-search"], ["matColumnDef", "note-search"], ["matColumnDef", "task-search"], ["matColumnDef", "attachment-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "12", 4, "matFooterCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "col-md-auto", "col-sm-auto", "col-auto"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-50"], ["mat-cell", "", 1, "table-column-50"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-200", "pl-3"], ["mat-cell", "", 1, "table-column-200", "pl-3"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], [4, "ngIf"], [3, "href"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-header-cell", ""], [1, "form-control", 3, "dir", "placeholder", "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-control", "w-90", 3, "dir", "placeholder", "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [1, "form-control", "w-90", 3, "dir", "ngModel", "placeholder", "ngModelChange"], ["mat-footer-cell", "", "colspan", "12"], [1, "float-left", 3, "length", "pageSize", "pageSizeOptions"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function InquiryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, InquiryListComponent_div_7_Template, 5, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, InquiryListComponent_div_10_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 8)(13, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, InquiryListComponent_th_15_Template, 1, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, InquiryListComponent_td_16_Template, 15, 7, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, InquiryListComponent_th_18_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, InquiryListComponent_td_19_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, InquiryListComponent_th_21_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](22, InquiryListComponent_td_22_Template, 2, 1, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](23, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, InquiryListComponent_th_24_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](25, InquiryListComponent_td_25_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](26, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, InquiryListComponent_th_27_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, InquiryListComponent_td_28_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](29, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, InquiryListComponent_th_30_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, InquiryListComponent_td_31_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](32, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](33, InquiryListComponent_th_33_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](34, InquiryListComponent_td_34_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](35, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, InquiryListComponent_th_36_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](37, InquiryListComponent_td_37_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](38, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, InquiryListComponent_th_39_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, InquiryListComponent_td_40_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](41, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, InquiryListComponent_th_42_Template, 3, 3, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, InquiryListComponent_td_43_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](44, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, InquiryListComponent_th_45_Template, 3, 3, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](46, InquiryListComponent_td_46_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](47, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, InquiryListComponent_th_48_Template, 3, 3, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](49, InquiryListComponent_td_49_Template, 2, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](50, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](51, InquiryListComponent_th_51_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](52, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, InquiryListComponent_th_53_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](54, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](55, InquiryListComponent_th_55_Template, 7, 9, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](56, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](57, InquiryListComponent_th_57_Template, 7, 9, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](58, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, InquiryListComponent_th_59_Template, 3, 4, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](60, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, InquiryListComponent_th_61_Template, 7, 9, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](62, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](63, InquiryListComponent_th_63_Template, 3, 4, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](64, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](65, InquiryListComponent_th_65_Template, 3, 4, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](66, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](67, InquiryListComponent_th_67_Template, 3, 4, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](68, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](69, InquiryListComponent_th_69_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](70, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](71, InquiryListComponent_th_71_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](72, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](73, InquiryListComponent_th_73_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](74, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](75, InquiryListComponent_td_75_Template, 2, 4, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, InquiryListComponent_tr_76_Template, 6, 3, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](77, InquiryListComponent_tr_77_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](78, InquiryListComponent_tr_78_Template, 1, 0, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](79, InquiryListComponent_tr_79_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](80, InquiryListComponent_tr_80_Template, 1, 0, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 9, "INQUIRY_LIST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hasClaim", "INQ_ADD_INQUIRY");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 11, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_13__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_30__.MatSelect, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatNoDataRow, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 63464:
/*!*********************************************************************************************!*\
  !*** ./src/app/inquiry/inquiry-list/inquiry-product-list/inquiry-product-list.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryProductListComponent": () => (/* binding */ InquiryProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _inquiry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../inquiry.service */ 44614);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












function InquiryProductListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function InquiryProductListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r15.name, " ");
} }
function InquiryProductListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "BRANDS"), " ");
} }
function InquiryProductListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r16.brandName, " ");
} }
function InquiryProductListComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PRODUCT"), " ");
} }
function InquiryProductListComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r17.categoryName, " ");
} }
function InquiryProductListComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SALES_PRICE"), " ");
} }
function InquiryProductListComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r18.salesPrice ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, product_r18.salesPrice) : "--", " ");
} }
function InquiryProductListComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PURCHASE_PRICE"), " ");
} }
function InquiryProductListComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r19.purchasePrice ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, product_r19.purchasePrice) : "--", " ");
} }
function InquiryProductListComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "MRP"), " ");
} }
function InquiryProductListComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r20.mrp ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, product_r20.mrp) : "--", " ");
} }
function InquiryProductListComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 25);
} }
function InquiryProductListComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
} }
function InquiryProductListComponent_div_34_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-spinner");
} }
function InquiryProductListComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InquiryProductListComponent_div_34_mat_spinner_1_Template, 1, 0, "mat-spinner", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r14.isLoading);
} }
class InquiryProductListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(inquiryService, dialogRef, data, translationService, dialog) {
        super(translationService);
        this.inquiryService = inquiryService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.translationService = translationService;
        this.dialog = dialog;
        this.products = [];
        this.isLoading = false;
        this.displayedColumns = ['name', 'brand', 'category', 'salesPrice', 'purchasePrice', 'mrp'];
        this.getLangDir();
    }
    ngOnInit() {
        if (this.data) {
            this.getProductsList();
        }
    }
    getProductsList() {
        this.isLoading = true;
        this.sub$.sink = this.inquiryService
            .getProductsByInquiryId(this.data.id)
            .subscribe((c) => {
            this.products = c;
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
InquiryProductListComponent.ɵfac = function InquiryProductListComponent_Factory(t) { return new (t || InquiryProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_inquiry_service__WEBPACK_IMPORTED_MODULE_1__.InquiryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
InquiryProductListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InquiryProductListComponent, selectors: [["app-inquiry-product-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 35, vars: 9, consts: [[1, "modal-content1"], [1, "modal-header"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], [1, "col-md-8"], [1, "modal-title"], [1, "col-sm-auto", "ml-auto"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover"], ["mat-table", "", 1, "mat-elevation-z8", "table", 3, "dir", "dataSource"], ["matColumnDef", "name"], ["class", "table-column-200", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "brand"], ["matColumnDef", "category"], ["matColumnDef", "salesPrice"], ["matColumnDef", "purchasePrice"], ["matColumnDef", "mrp"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "loading-shade", 4, "ngIf"], ["mat-header-cell", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["mat-header-row", ""], ["mat-row", ""], [1, "loading-shade"], [4, "ngIf"]], template: function InquiryProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InquiryProductListComponent_Template_button_click_8_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, InquiryProductListComponent_th_15_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, InquiryProductListComponent_td_16_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, InquiryProductListComponent_th_18_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, InquiryProductListComponent_td_19_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, InquiryProductListComponent_th_21_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, InquiryProductListComponent_td_22_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, InquiryProductListComponent_th_24_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, InquiryProductListComponent_td_25_Template, 3, 3, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](26, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, InquiryProductListComponent_th_27_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, InquiryProductListComponent_td_28_Template, 3, 3, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, InquiryProductListComponent_th_30_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, InquiryProductListComponent_td_31_Template, 3, 3, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, InquiryProductListComponent_tr_32_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, InquiryProductListComponent_tr_33_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, InquiryProductListComponent_div_34_Template, 2, 1, "div", 22);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "PRODUCT_LIST"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__.Dir, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LXByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 45201:
/*!****************************************************************!*\
  !*** ./src/app/inquiry/inquiry-note/inquiry-note.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryNoteComponent": () => (/* binding */ InquiryNoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _inquiry_note_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-note.service */ 57375);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);










function InquiryNoteComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryNoteComponent_div_10_Template_span_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const inquiryNote_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onDelete(inquiryNote_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 16)(6, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const inquiryNote_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", inquiryNote_r2.note, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 4, inquiryNote_r2.createdDate, "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", inquiryNote_r2 == null ? null : inquiryNote_r2.createdByUser.firstName, " ", inquiryNote_r2 == null ? null : inquiryNote_r2.createdByUser.lastName, " ");
} }
function InquiryNoteComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "NOTE_IS_REQUIRED"), " ");
} }
function InquiryNoteComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InquiryNoteComponent_div_16_div_1_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.commentForm.get("note").errors == null ? null : ctx_r1.commentForm.get("note").errors.required);
} }
class InquiryNoteComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(fb, inquiryNoteService, commonDialogService, translationService) {
        super(translationService);
        this.fb = fb;
        this.inquiryNoteService = inquiryNoteService;
        this.commonDialogService = commonDialogService;
        this.translationService = translationService;
        this.inquiryNotes = [];
    }
    ngOnInit() {
        this.createForm();
        this.getNotes();
    }
    createForm() {
        this.commentForm = this.fb.group({
            note: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    getNotes() {
        this.sub$.sink = this.inquiryNoteService.getInquiryNotes(this.inquiryId)
            .subscribe((c) => {
            this.inquiryNotes = c;
        });
    }
    patchNote(note) {
        this.commentForm.patchValue({
            note: note
        });
    }
    addComment() {
        if (this.commentForm.invalid) {
            this.commentForm.markAllAsTouched();
            return;
        }
        const inquiryNote = {
            inquiryId: this.inquiryId,
            note: this.commentForm.get('note').value
        };
        this.sub$.sink = this.inquiryNoteService.saveInquiryNote(inquiryNote)
            .subscribe((c) => {
            this.patchNote('');
            this.commentForm.markAsUntouched();
            this.getNotes();
        });
    }
    onDelete(id) {
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')}?`)
            .subscribe((isTrue) => {
            if (isTrue) {
                this.sub$.sink = this.inquiryNoteService.deleteInquiryNote(id)
                    .subscribe(() => {
                    this.getNotes();
                });
            }
        });
    }
}
InquiryNoteComponent.ɵfac = function InquiryNoteComponent_Factory(t) { return new (t || InquiryNoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_inquiry_note_service__WEBPACK_IMPORTED_MODULE_1__.InquiryNoteService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_2__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService)); };
InquiryNoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InquiryNoteComponent, selectors: [["app-inquiry-note"]], inputs: { inquiryId: "inquiryId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 9, consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "list-group"], ["class", "list-group-item list-group-item-action", "aria-current", "true", 4, "ngFor", "ngForOf"], [1, "mt-3", 3, "formGroup"], [1, "form-group"], ["formControlName", "note", "rows", "3", 1, "form-control"], [4, "ngIf"], ["type", "submit", 1, "btn", "blue-btn", "btn-sm", 3, "click"], ["aria-current", "true", 1, "list-group-item", "list-group-item-action"], [1, "mb-1"], ["role", "button", 1, "badge", 3, "click"], [1, "fas", "text-danger", "fa-trash"], [1, "w-100"], [1, "mr-2"], [1, "text-primary"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"]], template: function InquiryNoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 0)(8, "div", 1)(9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, InquiryNoteComponent_div_10_Template, 11, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 0)(12, "div", 1)(13, "form", 7)(14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, InquiryNoteComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryNoteComponent_Template_button_click_17_listener() { return ctx.addComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, "NOTES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.inquiryNotes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.commentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.commentForm.get("note").touched && ctx.commentForm.get("note").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 7, "ADD_NOTE"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_4__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LW5vdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 57375:
/*!**************************************************************!*\
  !*** ./src/app/inquiry/inquiry-note/inquiry-note.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryNoteService": () => (/* binding */ InquiryNoteService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);


class InquiryNoteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getInquiryNotes(inquieryId) {
        const url = `inquiryNote/${inquieryId}`;
        return this.httpClient.get(url);
    }
    deleteInquiryNote(id) {
        const url = `inquiryNote/${id}`;
        return this.httpClient.delete(url);
    }
    updateInquiryNote(id, inquiryNote) {
        const url = 'inquiryNote/' + id;
        return this.httpClient.put(url, inquiryNote);
    }
    saveInquiryNote(inquiryNote) {
        const url = 'inquiryNote/';
        return this.httpClient.post(url, inquiryNote);
    }
}
InquiryNoteService.ɵfac = function InquiryNoteService_Factory(t) { return new (t || InquiryNoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
InquiryNoteService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InquiryNoteService, factory: InquiryNoteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 51461:
/*!***************************************************!*\
  !*** ./src/app/inquiry/inquiry-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryRoutingModule": () => (/* binding */ InquiryRoutingModule)
/* harmony export */ });
/* harmony import */ var _inquiry_list_inquiry_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry-list/inquiry-list.component */ 44681);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_inquiry_add_inquiry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-inquiry/add-inquiry.component */ 31259);
/* harmony import */ var _add_inquiry_add_inquiry_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-inquiry/add-inquiry-resolver.service */ 1607);
/* harmony import */ var _inquiry_detail_inquiry_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inquiry-detail/inquiry-detail.component */ 31538);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        component: _inquiry_list_inquiry_list_component__WEBPACK_IMPORTED_MODULE_0__.InquiryListComponent,
        data: { claimType: 'INQ_VIEW_INQUIRIES' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
    }, {
        path: 'add',
        component: _add_inquiry_add_inquiry_component__WEBPACK_IMPORTED_MODULE_1__.AddInquiryComponent,
        data: { claimType: 'INQ_ADD_INQUIRY' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
    },
    {
        path: 'manage/:id',
        component: _inquiry_detail_inquiry_detail_component__WEBPACK_IMPORTED_MODULE_3__.InquiryDetailComponent,
        resolve: {
            inquiry: _add_inquiry_add_inquiry_resolver_service__WEBPACK_IMPORTED_MODULE_2__.AddInquiryResolverService,
        },
        data: { claimType: 'INQ_UPDATE_INQUIRY' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard]
    }
];
class InquiryRoutingModule {
}
InquiryRoutingModule.ɵfac = function InquiryRoutingModule_Factory(t) { return new (t || InquiryRoutingModule)(); };
InquiryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InquiryRoutingModule });
InquiryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InquiryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 72282:
/*!************************************************************************!*\
  !*** ./src/app/inquiry/inquiry-task-add/inquiry-task-add.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryTaskAddComponent": () => (/* binding */ InquiryTaskAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/user-resource */ 68527);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/user/user.service */ 1584);
/* harmony import */ var _inquiry_task_inquiry_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inquiry-task/inquiry-task.service */ 21194);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



















function InquiryTaskAddComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "TITLE_IS_REQUIRED"), " ");
} }
function InquiryTaskAddComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InquiryTaskAddComponent_div_19_div_1_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.inquiryTaskForm.get("subject").errors == null ? null : ctx_r0.inquiryTaskForm.get("subject").errors.required);
} }
function InquiryTaskAddComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", user_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", user_r5.firstName, " ", user_r5.lastName, " ");
} }
function InquiryTaskAddComponent_mat_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priority_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", priority_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", priority_r6.value, " ");
} }
class InquiryTaskAddComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(data, dialogRef, fb, userService, inquiryTaskService, toastrService, translationService) {
        super(translationService);
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.userService = userService;
        this.inquiryTaskService = inquiryTaskService;
        this.toastrService = toastrService;
        this.translationService = translationService;
        this.users = [];
        this.minDate = new Date();
        this.priorities = [
            {
                name: 'High',
                value: 'High',
            },
            {
                name: 'Low',
                value: 'Low',
            },
            {
                name: 'Normal',
                value: 'Normal'
            }
        ];
        this.getLangDir();
        this.userResource = new _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_0__.UserResource();
        this.userResource.pageSize = 10;
        this.userResource.orderBy = 'firstName desc';
    }
    ngOnInit() {
        this.createInquiryTask();
        this.getUsers();
        this.patchInquiryTask();
    }
    createInquiryTask() {
        this.inquiryTaskForm = this.fb.group({
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            description: [''],
            dueDate: [null],
            isOpen: [true],
            assignTo: [],
            priority: []
        });
    }
    patchInquiryTask() {
        if (this.data.inquiryTask) {
            this.inquiryTaskForm.patchValue({
                subject: this.data.inquiryTask.subject,
                description: this.data.inquiryTask.description,
                dueDate: this.data.inquiryTask.dueDate,
                isOpen: this.data.inquiryTask.isOpen,
                assignTo: this.data.inquiryTask.assignTo,
                priority: this.data.inquiryTask.priority
            });
        }
    }
    closeDialog() {
        this.dialogRef.close();
    }
    buildInquiryTask() {
        const inquiryTask = {
            subject: this.inquiryTaskForm.get('subject').value,
            description: this.inquiryTaskForm.get('description').value,
            dueDate: this.inquiryTaskForm.get('dueDate').value,
            inquiryId: this.data.inquiryId,
            isOpen: this.inquiryTaskForm.get('isOpen').value,
            assignTo: this.inquiryTaskForm.get('assignTo').value,
            priority: this.inquiryTaskForm.get('priority').value,
        };
        return inquiryTask;
    }
    getUsers() {
        this.sub$.sink = this.userService.getUsers(this.userResource)
            .subscribe((resp) => {
            this.users = resp.body;
        });
    }
    onInquiryTaskSave() {
        if (this.inquiryTaskForm.invalid) {
            this.inquiryTaskForm.markAllAsTouched();
            return;
        }
        const inquiryTask = this.buildInquiryTask();
        if (this.data.inquiryTask) {
            this.sub$.sink = this.inquiryTaskService.updateInquiryActivity(this.data.inquiryTask.id, inquiryTask)
                .subscribe(c => {
                this.toastrService.success(this.translationService.getValue('INQUIRY_TASK_UPDATED'));
                this.dialogRef.close();
            });
        }
        else {
            this.sub$.sink = this.inquiryTaskService.saveInquiryActivity(inquiryTask)
                .subscribe(c => {
                this.toastrService.success(this.translationService.getValue('INQUIRY_TASK_SAVE_SUCCESSFULLY'));
                this.dialogRef.close();
            });
        }
    }
}
InquiryTaskAddComponent.ɵfac = function InquiryTaskAddComponent_Factory(t) { return new (t || InquiryTaskAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_inquiry_task_inquiry_task_service__WEBPACK_IMPORTED_MODULE_3__.InquiryTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService)); };
InquiryTaskAddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InquiryTaskAddComponent, selectors: [["app-inquiry-task-add"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 62, vars: 42, consts: [[1, "modal-content1"], [1, "modal-header"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], [1, "col-md-8"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "row"], [1, "col-sm-12"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "txtSubject", 1, "col-sm-2", "col-form-label"], [1, "col-sm-10"], ["type", "text", "formControlName", "subject", 1, "form-control"], [4, "ngIf"], ["for", "txtDescription", 1, "col-sm-2", "col-form-label"], ["id", "txtDescription", "formControlName", "description", 1, "form-control"], ["for", "dpDueDate", 1, "col-sm-2", "col-form-label"], ["appearance", "outline", 3, "dir"], ["matInput", "", "formControlName", "dueDate", 3, "min", "matDatepicker"], ["matSuffix", "", 3, "for", "dir"], [3, "dir"], ["picker", ""], ["for", "assignTo", 1, "col-sm-2", "col-form-label"], ["id", "assignTo", "formControlName", "assignTo", 1, "form-control", 3, "dir", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "priority", 1, "col-sm-2", "col-form-label"], ["id", "priority", "formControlName", "priority", 1, "form-control", 3, "dir", "placeholder"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10"], [1, "fas", "fa-save"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [3, "value"]], template: function InquiryTaskAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryTaskAddComponent_Template_button_click_7_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function InquiryTaskAddComponent_Template_form_ngSubmit_12_listener() { return ctx.onInquiryTaskSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11)(14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, InquiryTaskAddComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11)(21, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 11)(27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 13)(31, "mat-form-field", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 20)(33, "mat-datepicker-toggle", 21)(34, "mat-datepicker", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 11)(37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 13)(41, "mat-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, InquiryTaskAddComponent_mat_option_43_Template, 2, 3, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 11)(45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 13)(49, "mat-select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, InquiryTaskAddComponent_mat_option_51_Template, 2, 2, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 8)(53, "div", 13)(54, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryTaskAddComponent_Template_button_click_58_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 22, "INQUIRY_TASK"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.inquiryTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 24, "TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.inquiryTaskForm.get("subject").touched && ctx.inquiryTaskForm.get("subject").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 26, "DESCRIPTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 28, "DUE_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", ctx.minDate)("matDatepicker", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r1)("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 30, "ASSIGN_TO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 32, "SELECT_USER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](47, 34, "PRIORITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](50, 36, "SELECT_PRIORITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.priorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](57, 38, "SAVE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](61, 40, "CANCEL"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LXRhc2stYWRkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 71164:
/*!****************************************************************!*\
  !*** ./src/app/inquiry/inquiry-task/inquiry-task.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryTaskComponent": () => (/* binding */ InquiryTaskComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _inquiry_task_add_inquiry_task_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inquiry-task-add/inquiry-task-add.component */ 72282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _inquiry_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inquiry-task.service */ 21194);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












function InquiryTaskComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ACTION"), " ");
} }
function InquiryTaskComponent_td_19_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InquiryTaskComponent_td_19_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const inquiryTask_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.onChangeStatus(inquiryTask_r17)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, "CLOSE"), "");
} }
function InquiryTaskComponent_td_19_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InquiryTaskComponent_td_19_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25); const inquiryTask_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.onChangeStatus(inquiryTask_r17)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 1, "OPEN"), "");
} }
function InquiryTaskComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InquiryTaskComponent_td_19_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27); const inquiryTask_r17 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.onEditInquiryTask(inquiryTask_r17)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, InquiryTaskComponent_td_19_button_6_Template, 5, 3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, InquiryTaskComponent_td_19_button_7_Template, 5, 3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryTask_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "EDIT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", inquiryTask_r17.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !inquiryTask_r17.isOpen);
} }
function InquiryTaskComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function InquiryTaskComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryTask_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", inquiryTask_r28.subject, " ");
} }
function InquiryTaskComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "DESCRIPTION"), " ");
} }
function InquiryTaskComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryTask_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", inquiryTask_r29.description, " ");
} }
function InquiryTaskComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "DUE_DATE"), " ");
} }
function InquiryTaskComponent_td_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inquiryTask_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, inquiryTask_r30.dueDate, "shortDate"), " ");
} }
function InquiryTaskComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, InquiryTaskComponent_td_28_ng_container_1_Template, 3, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryTask_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", inquiryTask_r30.dueDate);
} }
function InquiryTaskComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "STATUS"), " ");
} }
function InquiryTaskComponent_td_31_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "OPEN"), " ");
} }
function InquiryTaskComponent_td_31_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "CLOSE"), " ");
} }
function InquiryTaskComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, InquiryTaskComponent_td_31_ng_container_1_Template, 4, 3, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, InquiryTaskComponent_td_31_ng_container_2_Template, 4, 3, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryTask_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", inquiryTask_r33.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !inquiryTask_r33.isOpen);
} }
function InquiryTaskComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ASSIGN_TO"), " ");
} }
function InquiryTaskComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryTask_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", inquiryTask_r36 == null ? null : inquiryTask_r36.assignUser == null ? null : inquiryTask_r36.assignUser.firstName, " ", inquiryTask_r36 == null ? null : inquiryTask_r36.assignUser == null ? null : inquiryTask_r36.assignUser.lastName, " ");
} }
function InquiryTaskComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "PRIORITY"), " ");
} }
function InquiryTaskComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inquiryTask_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", inquiryTask_r37.priority, " ");
} }
function InquiryTaskComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 34);
} }
function InquiryTaskComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 35);
} }
function InquiryTaskComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0)(2, "div", 36)(3, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
class InquiryTaskComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(inquiryTaskService, commonDialogService, translationService, dialog) {
        super(translationService);
        this.inquiryTaskService = inquiryTaskService;
        this.commonDialogService = commonDialogService;
        this.translationService = translationService;
        this.dialog = dialog;
        this.inquiryTasks = [];
        this.displayedColumns = ['action', 'subject', 'description', 'dueDate', 'isOpen', 'assignToName', 'priority'];
        this.getLangDir();
    }
    ngOnInit() {
        this.getInquiryTasks();
    }
    getInquiryTasks() {
        this.sub$.sink = this.inquiryTaskService.getInquiryTasks(this.inquiryId)
            .subscribe((c) => {
            this.inquiryTasks = c;
        });
    }
    onDelete(id) {
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')}?`)
            .subscribe((isTrue) => {
            if (isTrue) {
                this.sub$.sink = this.inquiryTaskService.deleteInquiryActivity(id)
                    .subscribe(() => {
                    this.getInquiryTasks();
                });
            }
        });
    }
    onAddInquiryTask() {
        const inquiryTaskEdit = {
            inquiryId: this.inquiryId,
            inquiryTask: null
        };
        const dialogRef = this.dialog.open(_inquiry_task_add_inquiry_task_add_component__WEBPACK_IMPORTED_MODULE_1__.InquiryTaskAddComponent, {
            width: '600px',
            direction: this.langDir,
            data: inquiryTaskEdit
        });
        this.sub$.sink = dialogRef.afterClosed()
            .subscribe(result => {
            this.getInquiryTasks();
        });
    }
    onEditInquiryTask(inquiryTask) {
        const inquiryTaskEdit = {
            inquiryId: this.inquiryId,
            inquiryTask: inquiryTask
        };
        const dialogRef = this.dialog.open(_inquiry_task_add_inquiry_task_add_component__WEBPACK_IMPORTED_MODULE_1__.InquiryTaskAddComponent, {
            width: '600px',
            direction: this.langDir,
            data: inquiryTaskEdit
        });
        this.sub$.sink = dialogRef.afterClosed()
            .subscribe(result => {
            this.getInquiryTasks();
        });
    }
    onChangeStatus(inquiryTask) {
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(this.translationService.getValue('ARE_YOU_SURE_WANT_TO_CHANGE_STATUS'))
            .subscribe((isTrue) => {
            if (isTrue) {
                inquiryTask.isOpen = !inquiryTask.isOpen;
                this.sub$.sink = this.inquiryTaskService.updateInquiryActivity(inquiryTask.id, inquiryTask)
                    .subscribe(() => {
                    this.getInquiryTasks();
                });
            }
        });
    }
}
InquiryTaskComponent.ɵfac = function InquiryTaskComponent_Factory(t) { return new (t || InquiryTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_inquiry_task_service__WEBPACK_IMPORTED_MODULE_2__.InquiryTaskService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_3__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
InquiryTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InquiryTaskComponent, selectors: [["app-inquiry-task"]], inputs: { inquiryId: "inquiryId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 12, consts: [[1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "col-sm-8", "col"], [1, "col-sm-4", "col-auto", "text-right"], [1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], [1, "card-body"], [1, "col-sm-12", "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subject"], ["matColumnDef", "description"], ["matColumnDef", "dueDate"], ["matColumnDef", "isOpen"], ["matColumnDef", "assignToName"], ["matColumnDef", "priority"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "btn", "btn-success", "btn-sm", "mr-2", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "ml-1"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], ["class", "btn blue-btn btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "btn", "blue-btn", "btn-sm", 3, "click"], [1, "text-success"], [1, "text-danger"], ["mat-header-row", ""], ["mat-row", ""], [1, "col-sm-12", "ml-4", "mt-3"], [1, "font-weight-bold"]], template: function InquiryTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 0)(5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function InquiryTaskComponent_Template_button_click_9_listener() { return ctx.onAddInquiryTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 8)(14, "div", 0)(15, "div", 9)(16, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, InquiryTaskComponent_th_18_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, InquiryTaskComponent_td_19_Template, 8, 5, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, InquiryTaskComponent_th_21_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, InquiryTaskComponent_td_22_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, InquiryTaskComponent_th_24_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, InquiryTaskComponent_td_25_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, InquiryTaskComponent_th_27_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, InquiryTaskComponent_td_28_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, InquiryTaskComponent_th_30_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, InquiryTaskComponent_td_31_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, InquiryTaskComponent_th_33_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, InquiryTaskComponent_td_34_Template, 2, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, InquiryTaskComponent_th_36_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, InquiryTaskComponent_td_37_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, InquiryTaskComponent_tr_38_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, InquiryTaskComponent_tr_39_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, InquiryTaskComponent_ng_container_40_Template, 6, 3, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 8, "TASKS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 10, "ADD_INQUIRY_TASK"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.inquiryTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.inquiryTasks.length === 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 21194:
/*!**************************************************************!*\
  !*** ./src/app/inquiry/inquiry-task/inquiry-task.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryTaskService": () => (/* binding */ InquiryTaskService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);


class InquiryTaskService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getInquiryTasks(inquieryId) {
        const url = `inquiryActivity/${inquieryId}`;
        return this.httpClient.get(url);
    }
    deleteInquiryActivity(id) {
        const url = `inquiryActivity/${id}`;
        return this.httpClient.delete(url);
    }
    updateInquiryActivity(id, inquiryTask) {
        const url = 'inquiryActivity/' + id;
        return this.httpClient.put(url, inquiryTask);
    }
    saveInquiryActivity(inquiryTask) {
        const url = 'inquiryActivity/';
        return this.httpClient.post(url, inquiryTask);
    }
}
InquiryTaskService.ɵfac = function InquiryTaskService_Factory(t) { return new (t || InquiryTaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
InquiryTaskService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InquiryTaskService, factory: InquiryTaskService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80544:
/*!*******************************************!*\
  !*** ./src/app/inquiry/inquiry.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryModule": () => (/* binding */ InquiryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _inquiry_list_inquiry_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry-list/inquiry-list.component */ 44681);
/* harmony import */ var _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-routing.module */ 51461);
/* harmony import */ var _add_inquiry_add_inquiry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-inquiry/add-inquiry.component */ 31259);
/* harmony import */ var _add_inquiry_add_inquiry_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-inquiry/add-inquiry-resolver.service */ 1607);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _inquiry_detail_inquiry_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inquiry-detail/inquiry-detail.component */ 31538);
/* harmony import */ var _inquiry_note_inquiry_note_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inquiry-note/inquiry-note.component */ 45201);
/* harmony import */ var _inquiry_task_inquiry_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inquiry-task/inquiry-task.component */ 71164);
/* harmony import */ var _inquiry_task_add_inquiry_task_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inquiry-task-add/inquiry-task-add.component */ 72282);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _inquiry_attachment_inquiry_attachment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inquiry-attachment/inquiry-attachment.component */ 45581);
/* harmony import */ var _inquiry_attachment_add_inquiry_attachment_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inquiry-attachment-add/inquiry-attachment-add.component */ 21500);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _inquiry_list_inquiry_product_list_inquiry_product_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inquiry-list/inquiry-product-list/inquiry-product-list.component */ 63464);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);


































class InquiryModule {
}
InquiryModule.ɵfac = function InquiryModule_Factory(t) { return new (t || InquiryModule)(); };
InquiryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: InquiryModule });
InquiryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        _add_inquiry_add_inquiry_resolver_service__WEBPACK_IMPORTED_MODULE_3__.AddInquiryResolverService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__.InquiryRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_22__.AngularEditorModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](InquiryModule, { declarations: [_inquiry_list_inquiry_list_component__WEBPACK_IMPORTED_MODULE_0__.InquiryListComponent,
        _add_inquiry_add_inquiry_component__WEBPACK_IMPORTED_MODULE_2__.AddInquiryComponent,
        _inquiry_detail_inquiry_detail_component__WEBPACK_IMPORTED_MODULE_5__.InquiryDetailComponent,
        _inquiry_note_inquiry_note_component__WEBPACK_IMPORTED_MODULE_6__.InquiryNoteComponent,
        _inquiry_task_inquiry_task_component__WEBPACK_IMPORTED_MODULE_7__.InquiryTaskComponent,
        _inquiry_task_add_inquiry_task_add_component__WEBPACK_IMPORTED_MODULE_8__.InquiryTaskAddComponent,
        _inquiry_attachment_inquiry_attachment_component__WEBPACK_IMPORTED_MODULE_9__.InquiryAttachmentComponent,
        _inquiry_attachment_add_inquiry_attachment_add_component__WEBPACK_IMPORTED_MODULE_10__.InquiryAttachmentAddComponent,
        _inquiry_list_inquiry_product_list_inquiry_product_list_component__WEBPACK_IMPORTED_MODULE_11__.InquiryProductListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatNativeDateModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__.InquiryRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_19__.MatChipsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_22__.AngularEditorModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_29__.MatSidenavModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDividerModule] }); })();


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

/***/ 70407:
/*!*****************************************************!*\
  !*** ./src/app/shared/validators/url-validation.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateUrl": () => (/* binding */ ValidateUrl)
/* harmony export */ });
function ValidateUrl(control) {
    const regexp = new RegExp('^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$');
    const ctrlValue = control.value;
    if (!regexp.test(ctrlValue) && control.dirty && ctrlValue !== '') {
        return { valid_url: true };
    }
    return null;
}


/***/ }),

/***/ 7216:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/sidenav.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_DRAWER_DEFAULT_AUTOSIZE": () => (/* binding */ MAT_DRAWER_DEFAULT_AUTOSIZE),
/* harmony export */   "MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY": () => (/* binding */ MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY),
/* harmony export */   "MatDrawer": () => (/* binding */ MatDrawer),
/* harmony export */   "MatDrawerContainer": () => (/* binding */ MatDrawerContainer),
/* harmony export */   "MatDrawerContent": () => (/* binding */ MatDrawerContent),
/* harmony export */   "MatSidenav": () => (/* binding */ MatSidenav),
/* harmony export */   "MatSidenavContainer": () => (/* binding */ MatSidenavContainer),
/* harmony export */   "MatSidenavContent": () => (/* binding */ MatSidenavContent),
/* harmony export */   "MatSidenavModule": () => (/* binding */ MatSidenavModule),
/* harmony export */   "matDrawerAnimations": () => (/* binding */ matDrawerAnimations),
/* harmony export */   "throwMatDuplicatedDrawerError": () => (/* binding */ throwMatDuplicatedDrawerError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 95752);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ 75939);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 29361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ 14390);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material drawers.
 * @docs-private
 */

const _c0 = ["*"];
const _c1 = ["content"];

function MatDrawerContainer_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDrawerContainer_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2._onBackdropClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
  }
}

function MatDrawerContainer_mat_drawer_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
const _c3 = ["mat-drawer", "mat-drawer-content", "*"];

function MatSidenavContainer_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSidenavContainer_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2._onBackdropClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-shown", ctx_r0._isShowingBackdrop());
  }
}

function MatSidenavContainer_mat_sidenav_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
const _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
const _c6 = ".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}";
const matDrawerAnimations = {
  /** Animation that slides a drawer in and out. */
  transformDrawer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transform', [// We remove the `transform` here completely, rather than setting it to zero, because:
  // 1. Having a transform can cause elements with ripples or an animated
  //    transform to shift around in Chrome with an RTL layout (see #10023).
  // 2. 3d transforms causes text to appear blurry on IE and Edge.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('open, open-instant', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    'transform': 'none',
    'visibility': 'visible'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    // Avoids the shadow showing up when closed in SSR.
    'box-shadow': 'none',
    'visibility': 'hidden'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => open-instant', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0ms')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void <=> open, open-instant => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))])
};
/**
 * Throws an exception when two MatDrawer are matching the same position.
 * @docs-private
 */

function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
/** Configures whether drawers should use auto sizing by default. */


const MAT_DRAWER_DEFAULT_AUTOSIZE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DRAWER_DEFAULT_AUTOSIZE', {
  providedIn: 'root',
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
/**
 * Used to provide a drawer container to a drawer while avoiding circular references.
 * @docs-private
 */

const MAT_DRAWER_CONTAINER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DRAWER_CONTAINER');
/** @docs-private */

function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}

class MatDrawerContent extends _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable {
  constructor(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
    super(elementRef, scrollDispatcher, ngZone);
    this._changeDetectorRef = _changeDetectorRef;
    this._container = _container;
  }

  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

}

MatDrawerContent.ɵfac = function MatDrawerContent_Factory(t) {
  return new (t || MatDrawerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDrawerContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

MatDrawerContent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDrawerContent,
  selectors: [["mat-drawer-content"]],
  hostAttrs: [1, "mat-drawer-content"],
  hostVars: 4,
  hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
    useExisting: MatDrawerContent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatDrawerContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDrawerContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-drawer-content',
      template: '<ng-content></ng-content>',
      host: {
        'class': 'mat-drawer-content',
        '[style.margin-left.px]': '_container._contentMargins.left',
        '[style.margin-right.px]': '_container._contentMargins.right'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
        useExisting: MatDrawerContent
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatDrawerContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDrawerContainer)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();
/**
 * This component corresponds to a drawer that can be opened on the drawer container.
 */


class MatDrawer {
  constructor(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _interactivityChecker, _doc, _container) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._focusMonitor = _focusMonitor;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._interactivityChecker = _interactivityChecker;
    this._doc = _doc;
    this._container = _container;
    this._elementFocusedBeforeDrawerWasOpened = null;
    /** Whether the drawer is initialized. Used for disabling the initial animation. */

    this._enableAnimations = false;
    this._position = 'start';
    this._mode = 'over';
    this._disableClose = false;
    this._opened = false;
    /** Emits whenever the drawer has started animating. */

    this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Emits whenever the drawer is done animating. */

    this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Current state of the sidenav animation. */

    this._animationState = 'void';
    /** Event emitted when the drawer open state is changed. */

    this.openedChange = // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
    new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(
    /* isAsync */
    true);
    /** Event emitted when the drawer has been opened. */

    this._openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {}));
    /** Event emitted when the drawer has started opening. */

    this.openedStart = this._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e.fromState !== e.toState && e.toState.indexOf('open') === 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(undefined));
    /** Event emitted when the drawer has been closed. */

    this._closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {}));
    /** Event emitted when the drawer has started closing. */

    this.closedStart = this._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e.fromState !== e.toState && e.toState === 'void'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mapTo)(undefined));
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Event emitted when the drawer's position changes. */
    // tslint:disable-next-line:no-output-on-prefix

    this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * An observable that emits when the drawer mode changes. This is used by the drawer container to
     * to know when to when the mode changes so it can adapt the margins on the content.
     */

    this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.openedChange.subscribe(opened => {
      if (opened) {
        if (this._doc) {
          this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
        }

        this._takeFocus();
      } else if (this._isFocusWithinDrawer()) {
        this._restoreFocus(this._openedVia || 'program');
      }
    });
    /**
     * Listen to `keydown` events outside the zone so that change detection is not run every
     * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
     * and we don't have close disabled.
     */

    this._ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(this._elementRef.nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => {
        return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(event => this._ngZone.run(() => {
        this.close();
        event.stopPropagation();
        event.preventDefault();
      }));
    }); // We need a Subject with distinctUntilChanged, because the `done` event
    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084


    this._animationEnd.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)((x, y) => {
      return x.fromState === y.fromState && x.toState === y.toState;
    })).subscribe(event => {
      const {
        fromState,
        toState
      } = event;

      if (toState.indexOf('open') === 0 && fromState === 'void' || toState === 'void' && fromState.indexOf('open') === 0) {
        this.openedChange.emit(this._opened);
      }
    });
  }
  /** The side that the drawer is attached to. */


  get position() {
    return this._position;
  }

  set position(value) {
    // Make sure we have a valid value.
    value = value === 'end' ? 'end' : 'start';

    if (value !== this._position) {
      // Static inputs in Ivy are set before the element is in the DOM.
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }

      this._position = value;
      this.onPositionChanged.emit();
    }
  }
  /** Mode of the drawer; one of 'over', 'push' or 'side'. */


  get mode() {
    return this._mode;
  }

  set mode(value) {
    this._mode = value;

    this._updateFocusTrapState();

    this._modeChanged.next();
  }
  /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */


  get disableClose() {
    return this._disableClose;
  }

  set disableClose(value) {
    this._disableClose = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * Whether the drawer should focus the first focusable element automatically when opened.
   * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
   * enabled, focus will be moved into the sidenav in `side` mode as well.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
   * instead.
   */


  get autoFocus() {
    const value = this._autoFocus; // Note that usually we don't allow autoFocus to be set to `first-tabbable` in `side` mode,
    // because we don't know how the sidenav is being used, but in some cases it still makes
    // sense to do it. The consumer can explicitly set `autoFocus`.

    if (value == null) {
      if (this.mode === 'side') {
        return 'dialog';
      } else {
        return 'first-tabbable';
      }
    }

    return value;
  }

  set autoFocus(value) {
    if (value === 'true' || value === 'false' || value == null) {
      value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
    }

    this._autoFocus = value;
  }
  /**
   * Whether the drawer is opened. We overload this because we trigger an event when it
   * starts or end.
   */


  get opened() {
    return this._opened;
  }

  set opened(value) {
    this.toggle((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value));
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */


  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1; // The tabindex attribute should be removed to avoid navigating to that element again

      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener('blur', callback);
          element.removeEventListener('mousedown', callback);
          element.removeAttribute('tabindex');
        };

        element.addEventListener('blur', callback);
        element.addEventListener('mousedown', callback);
      });
    }

    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */


  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);

    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves focus into the drawer. Note that this works even if
   * the focus trap is disabled in `side` mode.
   */


  _takeFocus() {
    if (!this._focusTrap) {
      return;
    }

    const element = this._elementRef.nativeElement; // When autoFocus is not on the sidenav, if the element cannot be focused or does
    // not exist, focus the sidenav itself so the keyboard navigation still works.
    // We need to check that `focus` is a function due to Universal.

    switch (this.autoFocus) {
      case false:
      case 'dialog':
        return;

      case true:
      case 'first-tabbable':
        this._focusTrap.focusInitialElementWhenReady().then(hasMovedFocus => {
          if (!hasMovedFocus && typeof this._elementRef.nativeElement.focus === 'function') {
            element.focus();
          }
        });

        break;

      case 'first-heading':
        this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');

        break;

      default:
        this._focusByCssSelector(this.autoFocus);

        break;
    }
  }
  /**
   * Restores focus to the element that was originally focused when the drawer opened.
   * If no element was focused at that time, the focus will be restored to the drawer.
   */


  _restoreFocus(focusOrigin) {
    if (this.autoFocus === 'dialog') {
      return;
    }

    if (this._elementFocusedBeforeDrawerWasOpened) {
      this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
    } else {
      this._elementRef.nativeElement.blur();
    }

    this._elementFocusedBeforeDrawerWasOpened = null;
  }
  /** Whether focus is currently within the drawer. */


  _isFocusWithinDrawer() {
    const activeEl = this._doc.activeElement;
    return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  }

  ngAfterViewInit() {
    this._isAttached = true;
    this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);

    this._updateFocusTrapState(); // Only update the DOM position when the sidenav is positioned at
    // the end since we project the sidenav before the content by default.


    if (this._position === 'end') {
      this._updatePositionInParent('end');
    }
  }

  ngAfterContentChecked() {
    // Enable the animations after the lifecycle hooks have run, in order to avoid animating
    // drawers that are open by default. When we're on the server, we shouldn't enable the
    // animations, because we don't want the drawer to animate the first time the user sees
    // the page.
    if (this._platform.isBrowser) {
      this._enableAnimations = true;
    }
  }

  ngOnDestroy() {
    var _a;

    if (this._focusTrap) {
      this._focusTrap.destroy();
    }

    (_a = this._anchor) === null || _a === void 0 ? void 0 : _a.remove();
    this._anchor = null;

    this._animationStarted.complete();

    this._animationEnd.complete();

    this._modeChanged.complete();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /**
   * Open the drawer.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */


  open(openedVia) {
    return this.toggle(true, openedVia);
  }
  /** Close the drawer. */


  close() {
    return this.toggle(false);
  }
  /** Closes the drawer with context that the backdrop was clicked. */


  _closeViaBackdropClick() {
    // If the drawer is closed upon a backdrop click, we always want to restore focus. We
    // don't need to check whether focus is currently in the drawer, as clicking on the
    // backdrop causes blurs the active element.
    return this._setOpen(
    /* isOpen */
    false,
    /* restoreFocus */
    true, 'mouse');
  }
  /**
   * Toggle this drawer.
   * @param isOpen Whether the drawer should be open.
   * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
   * Used for focus management after the sidenav is closed.
   */


  toggle(isOpen = !this.opened, openedVia) {
    // If the focus is currently inside the drawer content and we are closing the drawer,
    // restore the focus to the initially focused element (when the drawer opened).
    if (isOpen && openedVia) {
      this._openedVia = openedVia;
    }

    const result = this._setOpen(isOpen,
    /* restoreFocus */
    !isOpen && this._isFocusWithinDrawer(), this._openedVia || 'program');

    if (!isOpen) {
      this._openedVia = null;
    }

    return result;
  }
  /**
   * Toggles the opened state of the drawer.
   * @param isOpen Whether the drawer should open or close.
   * @param restoreFocus Whether focus should be restored on close.
   * @param focusOrigin Origin to use when restoring focus.
   */


  _setOpen(isOpen, restoreFocus, focusOrigin) {
    this._opened = isOpen;

    if (isOpen) {
      this._animationState = this._enableAnimations ? 'open' : 'open-instant';
    } else {
      this._animationState = 'void';

      if (restoreFocus) {
        this._restoreFocus(focusOrigin);
      }
    }

    this._updateFocusTrapState();

    return new Promise(resolve => {
      this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(open => resolve(open ? 'open' : 'close'));
    });
  }

  _getWidth() {
    return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
  }
  /** Updates the enabled state of the focus trap. */


  _updateFocusTrapState() {
    if (this._focusTrap) {
      // The focus trap is only enabled when the drawer is open in any mode other than side.
      this._focusTrap.enabled = this.opened && this.mode !== 'side';
    }
  }
  /**
   * Updates the position of the drawer in the DOM. We need to move the element around ourselves
   * when it's in the `end` position so that it comes after the content and the visual order
   * matches the tab order. We also need to be able to move it back to `start` if the sidenav
   * started off as `end` and was changed to `start`.
   */


  _updatePositionInParent(newPosition) {
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode;

    if (newPosition === 'end') {
      if (!this._anchor) {
        this._anchor = this._doc.createComment('mat-drawer-anchor');
        parent.insertBefore(this._anchor, element);
      }

      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode.insertBefore(element, this._anchor);
    }
  }

}

MatDrawer.ɵfac = function MatDrawer_Factory(t) {
  return new (t || MatDrawer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DRAWER_CONTAINER, 8));
};

MatDrawer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDrawer,
  selectors: [["mat-drawer"]],
  viewQuery: function MatDrawer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
    }
  },
  hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
  hostVars: 12,
  hostBindings: function MatDrawer_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transform.start", function MatDrawer_animation_transform_start_HostBindingHandler($event) {
        return ctx._animationStarted.next($event);
      })("@transform.done", function MatDrawer_animation_transform_done_HostBindingHandler($event) {
        return ctx._animationEnd.next($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transform", ctx._animationState);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened);
    }
  },
  inputs: {
    position: "position",
    mode: "mode",
    disableClose: "disableClose",
    autoFocus: "autoFocus",
    opened: "opened"
  },
  outputs: {
    openedChange: "openedChange",
    _openedStream: "opened",
    openedStart: "openedStart",
    _closedStream: "closed",
    closedStart: "closedStart",
    onPositionChanged: "positionChanged"
  },
  exportAs: ["matDrawer"],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["cdkScrollable", "", 1, "mat-drawer-inner-container"], ["content", ""]],
  template: function MatDrawer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable],
  encapsulation: 2,
  data: {
    animation: [matDrawerAnimations.transformDrawer]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDrawer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-drawer',
      exportAs: 'matDrawer',
      animations: [matDrawerAnimations.transformDrawer],
      host: {
        'class': 'mat-drawer',
        // must prevent the browser from aligning text based on value
        '[attr.align]': 'null',
        '[class.mat-drawer-end]': 'position === "end"',
        '[class.mat-drawer-over]': 'mode === "over"',
        '[class.mat-drawer-push]': 'mode === "push"',
        '[class.mat-drawer-side]': 'mode === "side"',
        '[class.mat-drawer-opened]': 'opened',
        'tabIndex': '-1',
        '[@transform]': '_animationState',
        '(@transform.start)': '_animationStarted.next($event)',
        '(@transform.done)': '_animationEnd.next($event)'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<div class=\"mat-drawer-inner-container\" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusTrapFactory
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusMonitor
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.InteractivityChecker
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DOCUMENT]
      }]
    }, {
      type: MatDrawerContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DRAWER_CONTAINER]
      }]
    }];
  }, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableClose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    autoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['opened']
    }],
    openedStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['closed']
    }],
    closedStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onPositionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['positionChanged']
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content']
    }]
  });
})();
/**
 * `<mat-drawer-container>` component.
 *
 * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
 * and coordinates the backdrop and content styling.
 */


class MatDrawerContainer {
  constructor(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler, defaultAutosize = false, _animationMode) {
    this._dir = _dir;
    this._element = _element;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    /** Drawers that belong to this container. */

    this._drawers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** Event emitted when the drawer backdrop is clicked. */

    this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Emits on every ngDoCheck. Used for debouncing reflows. */

    this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * Margins to be applied to the content. These are used to push / shrink the drawer content when a
     * drawer is open. We use margin rather than transform even for push mode because transform breaks
     * fixed position elements inside of the transformed element.
     */

    this._contentMargins = {
      left: null,
      right: null
    };
    this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(); // If a `Dir` directive exists up the tree, listen direction changes
    // and update the left/right properties to point to the proper start/end.

    if (_dir) {
      _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(() => {
        this._validateDrawers();

        this.updateContentMargins();
      });
    } // Since the minimum width of the sidenav depends on the viewport width,
    // we need to recompute the margins if the viewport changes.


    viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(() => this.updateContentMargins());
    this._autosize = defaultAutosize;
  }
  /** The drawer child with the `start` position. */


  get start() {
    return this._start;
  }
  /** The drawer child with the `end` position. */


  get end() {
    return this._end;
  }
  /**
   * Whether to automatically resize the container whenever
   * the size of any of its drawers changes.
   *
   * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
   * the drawers on every change detection cycle. Can be configured globally via the
   * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
   */


  get autosize() {
    return this._autosize;
  }

  set autosize(value) {
    this._autosize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * Whether the drawer container should have a backdrop while one of the sidenavs is open.
   * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
   * mode as well.
   */


  get hasBackdrop() {
    if (this._backdropOverride == null) {
      return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
    }

    return this._backdropOverride;
  }

  set hasBackdrop(value) {
    this._backdropOverride = value == null ? null : (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /** Reference to the CdkScrollable instance that wraps the scrollable content. */


  get scrollable() {
    return this._userContent || this._content;
  }

  ngAfterContentInit() {
    this._allDrawers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(this._allDrawers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(drawer => {
      this._drawers.reset(drawer.filter(item => !item._container || item._container === this));

      this._drawers.notifyOnChanges();
    });

    this._drawers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null)).subscribe(() => {
      this._validateDrawers();

      this._drawers.forEach(drawer => {
        this._watchDrawerToggle(drawer);

        this._watchDrawerPosition(drawer);

        this._watchDrawerMode(drawer);
      });

      if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
        this.updateContentMargins();
      }

      this._changeDetectorRef.markForCheck();
    }); // Avoid hitting the NgZone through the debounce timeout.


    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(10), // Arbitrary debounce time, less than a frame at 60fps
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroyed)).subscribe(() => this.updateContentMargins());
    });
  }

  ngOnDestroy() {
    this._contentMarginChanges.complete();

    this._doCheckSubject.complete();

    this._drawers.destroy();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /** Calls `open` of both start and end drawers */


  open() {
    this._drawers.forEach(drawer => drawer.open());
  }
  /** Calls `close` of both start and end drawers */


  close() {
    this._drawers.forEach(drawer => drawer.close());
  }
  /**
   * Recalculates and updates the inline styles for the content. Note that this should be used
   * sparingly, because it causes a reflow.
   */


  updateContentMargins() {
    // 1. For drawers in `over` mode, they don't affect the content.
    // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
    //    left margin (for left drawer) or right margin (for right the drawer).
    // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
    //    adding to the left or right margin and simultaneously subtracting the same amount of
    //    margin from the other side.
    let left = 0;
    let right = 0;

    if (this._left && this._left.opened) {
      if (this._left.mode == 'side') {
        left += this._left._getWidth();
      } else if (this._left.mode == 'push') {
        const width = this._left._getWidth();

        left += width;
        right -= width;
      }
    }

    if (this._right && this._right.opened) {
      if (this._right.mode == 'side') {
        right += this._right._getWidth();
      } else if (this._right.mode == 'push') {
        const width = this._right._getWidth();

        right += width;
        left -= width;
      }
    } // If either `right` or `left` is zero, don't set a style to the element. This
    // allows users to specify a custom size via CSS class in SSR scenarios where the
    // measured widths will always be zero. Note that we reset to `null` here, rather
    // than below, in order to ensure that the types in the `if` below are consistent.


    left = left || null;
    right = right || null;

    if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
      this._contentMargins = {
        left,
        right
      }; // Pull back into the NgZone since in some cases we could be outside. We need to be careful
      // to do it only when something changed, otherwise we can end up hitting the zone too often.

      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
    }
  }

  ngDoCheck() {
    // If users opted into autosizing, do a check every change detection cycle.
    if (this._autosize && this._isPushed()) {
      // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }
  /**
   * Subscribes to drawer events in order to set a class on the main container element when the
   * drawer is open and the backdrop is visible. This ensures any overflow on the container element
   * is properly hidden.
   */


  _watchDrawerToggle(drawer) {
    drawer._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(event => event.fromState !== event.toState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._drawers.changes)).subscribe(event => {
      // Set the transition class on the container so that the animations occur. This should not
      // be set initially because animations should only be triggered via a change in state.
      if (event.toState !== 'open-instant' && this._animationMode !== 'NoopAnimations') {
        this._element.nativeElement.classList.add('mat-drawer-transition');
      }

      this.updateContentMargins();

      this._changeDetectorRef.markForCheck();
    });

    if (drawer.mode !== 'side') {
      drawer.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
    }
  }
  /**
   * Subscribes to drawer onPositionChanged event in order to
   * re-validate drawers when the position changes.
   */


  _watchDrawerPosition(drawer) {
    if (!drawer) {
      return;
    } // NOTE: We need to wait for the microtask queue to be empty before validating,
    // since both drawers may be swapping positions at the same time.


    drawer.onPositionChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._drawers.changes)).subscribe(() => {
      this._ngZone.onMicrotaskEmpty.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(() => {
        this._validateDrawers();
      });
    });
  }
  /** Subscribes to changes in drawer mode so we can run change detection. */


  _watchDrawerMode(drawer) {
    if (drawer) {
      drawer._modeChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(this._drawers.changes, this._destroyed))).subscribe(() => {
        this.updateContentMargins();

        this._changeDetectorRef.markForCheck();
      });
    }
  }
  /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */


  _setContainerClass(isAdd) {
    const classList = this._element.nativeElement.classList;
    const className = 'mat-drawer-container-has-open';

    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className);
    }
  }
  /** Validate the state of the drawer children components. */


  _validateDrawers() {
    this._start = this._end = null; // Ensure that we have at most one start and one end drawer.

    this._drawers.forEach(drawer => {
      if (drawer.position == 'end') {
        if (this._end != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatDuplicatedDrawerError('end');
        }

        this._end = drawer;
      } else {
        if (this._start != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatDuplicatedDrawerError('start');
        }

        this._start = drawer;
      }
    });

    this._right = this._left = null; // Detect if we're LTR or RTL.

    if (this._dir && this._dir.value === 'rtl') {
      this._left = this._end;
      this._right = this._start;
    } else {
      this._left = this._start;
      this._right = this._end;
    }
  }
  /** Whether the container is being pushed to the side by one of the drawers. */


  _isPushed() {
    return this._isDrawerOpen(this._start) && this._start.mode != 'over' || this._isDrawerOpen(this._end) && this._end.mode != 'over';
  }

  _onBackdropClicked() {
    this.backdropClick.emit();

    this._closeModalDrawersViaBackdrop();
  }

  _closeModalDrawersViaBackdrop() {
    // Close all open drawers where closing is not disabled and the mode is not `side`.
    [this._start, this._end].filter(drawer => drawer && !drawer.disableClose && this._canHaveBackdrop(drawer)).forEach(drawer => drawer._closeViaBackdropClick());
  }

  _isShowingBackdrop() {
    return this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start) || this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end);
  }

  _canHaveBackdrop(drawer) {
    return drawer.mode !== 'side' || !!this._backdropOverride;
  }

  _isDrawerOpen(drawer) {
    return drawer != null && drawer.opened;
  }

}

MatDrawerContainer.ɵfac = function MatDrawerContainer_Factory(t) {
  return new (t || MatDrawerContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DRAWER_DEFAULT_AUTOSIZE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
};

MatDrawerContainer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatDrawerContainer,
  selectors: [["mat-drawer-container"]],
  contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDrawerContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDrawer, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
    }
  },
  viewQuery: function MatDrawerContainer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatDrawerContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._userContent = _t.first);
    }
  },
  hostAttrs: [1, "mat-drawer-container"],
  hostVars: 2,
  hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
    }
  },
  inputs: {
    autosize: "autosize",
    hasBackdrop: "hasBackdrop"
  },
  outputs: {
    backdropClick: "backdropClick"
  },
  exportAs: ["matDrawerContainer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_DRAWER_CONTAINER,
    useExisting: MatDrawerContainer
  }])],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 2,
  consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]],
  template: function MatDrawerContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDrawerContainer_div_0_Template, 1, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatDrawerContainer_mat_drawer_content_3_Template, 2, 0, "mat-drawer-content", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._content);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, MatDrawerContent],
  styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatDrawerContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-drawer-container',
      exportAs: 'matDrawerContainer',
      host: {
        'class': 'mat-drawer-container',
        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatDrawerContainer
      }],
      template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-drawer\"></ng-content>\n\n<ng-content select=\"mat-drawer-content\">\n</ng-content>\n<mat-drawer-content *ngIf=\"!_content\">\n  <ng-content></ng-content>\n</mat-drawer-content>\n",
      styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"]
    }]
  }], function () {
    return [{
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DRAWER_DEFAULT_AUTOSIZE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    _allDrawers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatDrawerContent]
    }],
    _userContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [MatDrawerContent]
    }],
    autosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hasBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backdropClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSidenavContent extends MatDrawerContent {
  constructor(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
    super(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
  }

}

MatSidenavContent.ɵfac = function MatSidenavContent_Factory(t) {
  return new (t || MatSidenavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSidenavContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

MatSidenavContent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSidenavContent,
  selectors: [["mat-sidenav-content"]],
  hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
  hostVars: 4,
  hostBindings: function MatSidenavContent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
    useExisting: MatSidenavContent
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatSidenavContent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSidenavContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-sidenav-content',
      template: '<ng-content></ng-content>',
      host: {
        'class': 'mat-drawer-content mat-sidenav-content',
        '[style.margin-left.px]': '_container._contentMargins.left',
        '[style.margin-right.px]': '_container._contentMargins.right'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
        useExisting: MatSidenavContent
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatSidenavContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSidenavContainer)]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

class MatSidenav extends MatDrawer {
  constructor() {
    super(...arguments);
    this._fixedInViewport = false;
    this._fixedTopGap = 0;
    this._fixedBottomGap = 0;
  }
  /** Whether the sidenav is fixed in the viewport. */


  get fixedInViewport() {
    return this._fixedInViewport;
  }

  set fixedInViewport(value) {
    this._fixedInViewport = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
   * mode.
   */


  get fixedTopGap() {
    return this._fixedTopGap;
  }

  set fixedTopGap(value) {
    this._fixedTopGap = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value);
  }
  /**
   * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
   * fixed mode.
   */


  get fixedBottomGap() {
    return this._fixedBottomGap;
  }

  set fixedBottomGap(value) {
    this._fixedBottomGap = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceNumberProperty)(value);
  }

}

MatSidenav.ɵfac = /* @__PURE__ */function () {
  let ɵMatSidenav_BaseFactory;
  return function MatSidenav_Factory(t) {
    return (ɵMatSidenav_BaseFactory || (ɵMatSidenav_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSidenav)))(t || MatSidenav);
  };
}();

MatSidenav.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSidenav,
  selectors: [["mat-sidenav"]],
  hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"],
  hostVars: 17,
  hostBindings: function MatSidenav_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened)("mat-sidenav-fixed", ctx.fixedInViewport);
    }
  },
  inputs: {
    fixedInViewport: "fixedInViewport",
    fixedTopGap: "fixedTopGap",
    fixedBottomGap: "fixedBottomGap"
  },
  exportAs: ["matSidenav"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["cdkScrollable", "", 1, "mat-drawer-inner-container"], ["content", ""]],
  template: function MatSidenav_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable],
  encapsulation: 2,
  data: {
    animation: [matDrawerAnimations.transformDrawer]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSidenav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-sidenav',
      exportAs: 'matSidenav',
      animations: [matDrawerAnimations.transformDrawer],
      host: {
        'class': 'mat-drawer mat-sidenav',
        'tabIndex': '-1',
        // must prevent the browser from aligning text based on value
        '[attr.align]': 'null',
        '[class.mat-drawer-end]': 'position === "end"',
        '[class.mat-drawer-over]': 'mode === "over"',
        '[class.mat-drawer-push]': 'mode === "push"',
        '[class.mat-drawer-side]': 'mode === "side"',
        '[class.mat-drawer-opened]': 'opened',
        '[class.mat-sidenav-fixed]': 'fixedInViewport',
        '[style.top.px]': 'fixedInViewport ? fixedTopGap : null',
        '[style.bottom.px]': 'fixedInViewport ? fixedBottomGap : null'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<div class=\"mat-drawer-inner-container\" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n"
    }]
  }], null, {
    fixedInViewport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fixedTopGap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fixedBottomGap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class MatSidenavContainer extends MatDrawerContainer {}

MatSidenavContainer.ɵfac = /* @__PURE__ */function () {
  let ɵMatSidenavContainer_BaseFactory;
  return function MatSidenavContainer_Factory(t) {
    return (ɵMatSidenavContainer_BaseFactory || (ɵMatSidenavContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSidenavContainer)))(t || MatSidenavContainer);
  };
}();

MatSidenavContainer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSidenavContainer,
  selectors: [["mat-sidenav-container"]],
  contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatSidenavContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatSidenav, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
    }
  },
  hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
  hostVars: 2,
  hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
    }
  },
  exportAs: ["matSidenavContainer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_DRAWER_CONTAINER,
    useExisting: MatSidenavContainer
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c5,
  decls: 4,
  vars: 2,
  consts: [["class", "mat-drawer-backdrop", 3, "mat-drawer-shown", "click", 4, "ngIf"], [4, "ngIf"], [1, "mat-drawer-backdrop", 3, "click"]],
  template: function MatSidenavContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatSidenavContainer_div_0_Template, 1, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSidenavContainer_mat_sidenav_content_3_Template, 2, 0, "mat-sidenav-content", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasBackdrop);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._content);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, MatSidenavContent],
  styles: [_c6],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSidenavContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-sidenav-container',
      exportAs: 'matSidenavContainer',
      host: {
        'class': 'mat-drawer-container mat-sidenav-container',
        '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: MAT_DRAWER_CONTAINER,
        useExisting: MatSidenavContainer
      }],
      template: "<div class=\"mat-drawer-backdrop\" (click)=\"_onBackdropClicked()\" *ngIf=\"hasBackdrop\"\n     [class.mat-drawer-shown]=\"_isShowingBackdrop()\"></div>\n\n<ng-content select=\"mat-sidenav\"></ng-content>\n\n<ng-content select=\"mat-sidenav-content\">\n</ng-content>\n<mat-sidenav-content *ngIf=\"!_content\">\n  <ng-content></ng-content>\n</mat-sidenav-content>\n",
      styles: [".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer{transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"]
    }]
  }], null, {
    _allDrawers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }],
    _content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MatSidenavContent]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatSidenavModule {}

MatSidenavModule.ɵfac = function MatSidenavModule_Factory(t) {
  return new (t || MatSidenavModule)();
};

MatSidenavModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSidenavModule
});
MatSidenavModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSidenavModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatCommonModule, MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent],
      declarations: [MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenav, MatSidenavContainer, MatSidenavContent]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_inquiry_inquiry_module_ts.js.map