"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_email-send_email-send_module_ts"],{

/***/ 4232:
/*!**************************************************!*\
  !*** ./src/app/core/domain-classes/file-info.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileInfo": () => (/* binding */ FileInfo)
/* harmony export */ });
class FileInfo {
    constructor() {
        this.src = '';
        this.name = '';
        this.extension = '';
        this.fileType = '';
    }
}


/***/ }),

/***/ 34495:
/*!*********************************************************!*\
  !*** ./src/app/email-send/email-send-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailSendRoutingModule": () => (/* binding */ EmailSendRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _email_send_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-send.component */ 80602);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        component: _email_send_component__WEBPACK_IMPORTED_MODULE_0__.EmailSendComponent,
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: { claimType: 'EMAIL_SEND_EMAIL' }
    }
];
class EmailSendRoutingModule {
}
EmailSendRoutingModule.ɵfac = function EmailSendRoutingModule_Factory(t) { return new (t || EmailSendRoutingModule)(); };
EmailSendRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmailSendRoutingModule });
EmailSendRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmailSendRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 80602:
/*!****************************************************!*\
  !*** ./src/app/email-send/email-send.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailSendComponent": () => (/* binding */ EmailSendComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_file_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/file-info */ 4232);
/* harmony import */ var _shared_editor_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/editor.config */ 7757);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _email_template_email_template_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email-template/email-template.service */ 12069);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _email_send_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-send.service */ 95948);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/has-claim.directive */ 79785);
/* harmony import */ var _shared_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/drag-drop.directive */ 33900);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





















function EmailSendComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EmailSendComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tamplate_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", tamplate_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", tamplate_r11.name, " ");
} }
function EmailSendComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "TO_ADDRESS_IS_REQUIRED"), " ");
} }
function EmailSendComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmailSendComponent_div_27_div_1_Template, 3, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.emailForm.get("toAddress").errors == null ? null : ctx_r2.emailForm.get("toAddress").errors.required);
} }
function EmailSendComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "CC_ADDRESS_IS_REQUIRED"), " ");
} }
function EmailSendComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmailSendComponent_div_36_div_1_Template, 3, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.emailForm.get("cCAddress").errors == null ? null : ctx_r3.emailForm.get("cCAddress").errors.required);
} }
function EmailSendComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "SUBJECT_IS_REQUIRED"), " ");
} }
function EmailSendComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmailSendComponent_div_45_div_1_Template, 3, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r4.emailForm.get("subject").errors == null ? null : ctx_r4.emailForm.get("subject").errors.required);
} }
function EmailSendComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "BODY_IS_REQUIRED"), " ");
} }
function EmailSendComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmailSendComponent_div_52_div_1_Template, 3, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.emailForm.get("body").errors == null ? null : ctx_r5.emailForm.get("body").errors.required);
} }
function EmailSendComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5)(1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "PARAMETER_NAME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 4, "PARAMETER_VALUE"), " * ");
} }
function EmailSendComponent_div_55_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "PARAMETER_VALUE_IS_REQUIRED"), " ");
} }
function EmailSendComponent_div_55_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EmailSendComponent_div_55_div_6_div_1_Template, 3, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", param_r16.get("value").errors == null ? null : param_r16.get("value").errors.required);
} }
function EmailSendComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 45)(5, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focusout", function EmailSendComponent_div_55_Template_input_focusout_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.setParameterValue()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, EmailSendComponent_div_55_div_6_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", param_r16.get("value").touched && param_r16.get("value").errors);
} }
function EmailSendComponent_li_76_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EmailSendComponent_li_76_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "li", 48)(1, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 50)(4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmailSendComponent_li_76_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const i_r24 = restoredCtx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.onDeleteFile(i_r24)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, EmailSendComponent_li_76_div_6_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r23 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", file_r23 == null ? null : file_r23.name, " -- ", ctx_r9.formatBytes(file_r23 == null ? null : file_r23.size), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", file_r23 == null ? null : file_r23.progress);
} }
function EmailSendComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 53)(1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EmailSendComponent_div_77_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.sendEmail()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "SEND"), " ");
} }
class EmailSendComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(fb, emailTemplateService, toastrService, emailSendService, router, translationService) {
        super(translationService);
        this.fb = fb;
        this.emailTemplateService = emailTemplateService;
        this.toastrService = toastrService;
        this.emailSendService = emailSendService;
        this.router = router;
        this.translationService = translationService;
        this.emailTamplates = [];
        this.editorConfig = _shared_editor_config__WEBPACK_IMPORTED_MODULE_1__.EditorConfig;
        this.isLoading = false;
        this.files = [];
        this.fileData = [];
        this.extension = '';
        this.fileType = '';
        this.getLangDir();
    }
    ngOnInit() {
        this.createEmailForm();
        this.getEmailTamplate();
    }
    onTempateChange() {
        this.parameters.clear();
        this.emailForm.patchValue(this.selectedEmailTamplate);
        const regex = /\##(.*?)\##/gi;
        const parameters = this.selectedEmailTamplate.body.match(regex);
        [...new Set(parameters)].forEach(parameter => {
            this.parameters.push(this.newParameter(parameter));
        });
    }
    newParameter(parameter) {
        return this.fb.group({
            parameter: [parameter, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
        });
    }
    get parameters() {
        return this.emailForm.get('parameters');
    }
    setParameterValue() {
        const paramters = this.parameters.value;
        let emailBody = this.selectedEmailTamplate.body;
        if (paramters) {
            paramters.forEach(paramter => {
                if (paramter.value) {
                    emailBody = emailBody.split(paramter.parameter).join(paramter.value);
                }
            });
            this.emailForm.get('body').setValue(emailBody);
        }
    }
    getEmailTamplate() {
        this.sub$.sink = this.emailTemplateService.getEmailTemplates().subscribe((emailTamplats) => {
            this.emailTamplates = emailTamplats;
        });
    }
    createEmailForm() {
        this.emailForm = this.fb.group({
            id: [''],
            toAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            cCAddress: [''],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            parameters: this.fb.array([])
        });
    }
    fileBrowseHandler(files) {
        for (let file of files) {
            this.files.push(file);
        }
        this.getFileInfo();
    }
    getFileInfo() {
        this.fileData = [];
        for (let i = 0; i < this.files.length; i++) {
            const reader = new FileReader();
            this.extension = this.files[i].name.split('.').pop().toLowerCase();
            this.fileType = this.files[i].type;
            reader.onload = (ev) => {
                const fileInfo = new _core_domain_classes_file_info__WEBPACK_IMPORTED_MODULE_0__.FileInfo();
                fileInfo.src = ev.target.result.toString();
                fileInfo.extension = this.extension;
                fileInfo.name = this.files[i].name;
                fileInfo.fileType = this.fileType;
                this.fileData.push(fileInfo);
            };
            reader.readAsDataURL(this.files[i]);
        }
        ;
    }
    sendEmail() {
        if (!this.emailForm.valid) {
            this.emailForm.markAllAsTouched();
            return;
        }
        this.isLoading = true;
        const emailObj = this.emailForm.value;
        emailObj.attechments = this.fileData;
        this.emailSendService.sendEmail(emailObj)
            .subscribe(() => {
            this.toastrService.success(this.translationService.getValue('EMAIL_SENT_SUCCESSFULLY'));
            this.isLoading = false;
            this.clearForm();
        }, () => {
            this.isLoading = false;
        });
    }
    clearForm() {
        this.parameters.clear();
        this.files = [];
        this.selectedEmailTamplate = {
            name: '',
            id: '',
            body: '',
            subject: '',
        };
        this.emailForm.patchValue({
            id: [''],
            toAddress: [''],
            cCAddress: [''],
            subject: ['']
        });
        this.emailForm.get('body').setValue("");
    }
    formatBytes(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0)
            return 'n/a';
        const value = Math.floor(Math.log(bytes) / Math.log(1024));
        const i = parseInt(value.toString(), 10);
        if (i === 0)
            return `${bytes} ${sizes[i]})`;
        return `${(bytes / (Math.pow(1024, i))).toFixed(1)} ${sizes[i]}`;
    }
    onDeleteFile(index) {
        this.files.splice(index, 1);
    }
    onFileDropped($event) {
        for (let file of $event) {
            this.files.push(file);
        }
        this.getFileInfo();
    }
}
EmailSendComponent.ɵfac = function EmailSendComponent_Factory(t) { return new (t || EmailSendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_email_template_email_template_service__WEBPACK_IMPORTED_MODULE_3__.EmailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_email_send_service__WEBPACK_IMPORTED_MODULE_4__.EmailSendService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_5__.TranslationService)); };
EmailSendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: EmailSendComponent, selectors: [["app-email-send"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 78, vars: 57, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-md-12", "col-sm-12"], [1, "form-group"], [3, "dir"], ["name", "selectedEmailTamplate", 1, "form-control", 3, "dir", "placeholder", "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "formGroup"], [1, "col-md-12", "pb-1"], [1, "input-group"], [1, "input-group-prepend"], ["id", "toAddress", 1, "input-group-text", "text-danger"], ["formControlName", "toAddress", "type", "text", "aria-label", "To", "aria-describedby", "toAddress", 1, "form-control", 3, "placeholder"], [4, "ngIf"], ["formControlName", "cCAddress", "type", "text", "aria-label", "To", "aria-describedby", "toAddress", 1, "form-control", 3, "placeholder"], ["id", "subject", 1, "input-group-text", "text-danger"], ["formControlName", "subject", "type", "text", "aria-label", "To", "aria-describedby", "subject", 1, "form-control", 3, "placeholder"], [1, "col-md-12"], [1, "font-weight-bold", "text-danger"], ["formControlName", "body", 3, "config"], ["formArrayName", "parameters", 1, "col-md-12"], ["class", "row", 4, "ngIf"], ["class", "row mt-1", 4, "ngFor", "ngForOf"], [1, "col-md-12", "mt-2"], [1, "font-weight-bold"], ["appDragDrop", "", 1, "dropzone", 3, "onFileDropped"], ["type", "file", "id", "fileDropRef", "multiple", "", 3, "change"], ["fileDropRef", ""], ["aria-hidden", "true", 1, "text-danger", "fas", "fa-download", "fa-lg"], ["for", "fileDropRef"], [1, "list-group"], ["class", "list-group-item d-flex justify-content-between align-items-center", 4, "ngFor", "ngForOf"], ["class", "col-md-12 mt-1", 4, "hasClaim"], [1, "loading-shade"], [3, "value"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "col-md-6", "font-weight-bold"], [1, "col-md-6", "font-weight-bold", "text-danger"], [1, "row", "mt-1"], [3, "formGroupName"], [1, "col-md-6"], ["readonly", "", "type", "text", "formControlName", "parameter", 1, "form-control"], ["type", "text", "formControlName", "value", 1, "form-control", 3, "focusout"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "name"], [1, "badge", "badge-pill"], [1, "btn", "btn-danger", 3, "click"], [1, "text-light", "fas", "fa-trash"], [1, "col-md-12", "mt-1"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-paper-plane"]], template: function EmailSendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, EmailSendComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "mat-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EmailSendComponent_Template_mat_select_ngModelChange_14_listener($event) { return ctx.selectedEmailTamplate = $event; })("selectionChange", function EmailSendComponent_Template_mat_select_selectionChange_14_listener() { return ctx.onTempateChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, EmailSendComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "form", 11)(18, "div", 5)(19, "div", 12)(20, "div", 13)(21, "div", 14)(22, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, EmailSendComponent_div_27_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 12)(29, "div", 13)(30, "div", 14)(31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, EmailSendComponent_div_36_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 12)(38, "div", 13)(39, "div", 14)(40, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, EmailSendComponent_div_45_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 21)(47, "div", 7)(48, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "angular-editor", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, EmailSendComponent_div_52_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, EmailSendComponent_div_54_Template, 7, 6, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, EmailSendComponent_div_55_Template, 7, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 27)(57, "div", 7)(58, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onFileDropped", function EmailSendComponent_Template_div_onFileDropped_61_listener($event) { return ctx.onFileDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function EmailSendComponent_Template_input_change_62_listener($event) { return ctx.fileBrowseHandler($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 27)(75, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, EmailSendComponent_li_76_Template, 7, 3, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, EmailSendComponent_div_77_Template, 5, 3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 29, "SEND_EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 31, "SELECT_EMAIL_TAMPLATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 33, "SELECT_EMAIL_TAMPLATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir)("ngModel", ctx.selectedEmailTamplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.emailTamplates);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.emailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 35, "TO"), "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](26, 37, "COMMA_SEPARATED_EMAILS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.emailForm.get("toAddress").touched && ctx.emailForm.get("toAddress").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 39, "CC"), "* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 41, "COMMA_SEPARATED_EMAILS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.emailForm.get("cCAddress").touched && ctx.emailForm.get("cCAddress").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 43, "SUBJECT"), " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 45, "SUBJECT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.emailForm.get("subject").touched && ctx.emailForm.get("subject").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](50, 47, "BODY"), " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.emailForm.get("body").touched && ctx.emailForm.get("body").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.parameters.controls.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.parameters.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 49, "ATTACHMENTS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](67, 51, "DRAG_AND_DROP_FILE_HERE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](70, 53, "OR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](73, 55, "BROWSE_FOR_FILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasClaim", "EMAIL_SEND_EMAIL");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Dir, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_17__.AngularEditorComponent, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_6__.HasClaimDirective, _shared_directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_7__.DragDropDirective, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__.MatProgressSpinner, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.dropzone[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n  margin: 0 auto;\n}\n\n.dropzone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.dropzone[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  width: 183px;\n  height: 44px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n}\n\n.dropzone[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #38424c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXNlbmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXGVtYWlsLXNlbmRcXGVtYWlsLXNlbmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0U7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0NGOztBREVFO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0U7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREYiLCJmaWxlIjoiZW1haWwtc2VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3B6b25lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgaW5wdXQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTgzcHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIxLjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyMDJmO1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMzg0MjRjO1xyXG4gIH1cclxufVxyXG5cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRyb3B6b25lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAwcHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICM5Nzk3OTc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uZHJvcHpvbmUgaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5kcm9wem9uZSBsYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDE4M3B4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIxLjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiMjAyZjtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG59XG4uZHJvcHpvbmUgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzg0MjRjO1xufSJdfQ== */"] });


/***/ }),

/***/ 31087:
/*!*************************************************!*\
  !*** ./src/app/email-send/email-send.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailSendModule": () => (/* binding */ EmailSendModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _email_send_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-send.component */ 80602);
/* harmony import */ var _email_send_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-send-routing.module */ 34495);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);









class EmailSendModule {
}
EmailSendModule.ɵfac = function EmailSendModule_Factory(t) { return new (t || EmailSendModule)(); };
EmailSendModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmailSendModule });
EmailSendModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _email_send_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmailSendRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__.AngularEditorModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmailSendModule, { declarations: [_email_send_component__WEBPACK_IMPORTED_MODULE_0__.EmailSendComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _email_send_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmailSendRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_7__.AngularEditorModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 95948:
/*!**************************************************!*\
  !*** ./src/app/email-send/email-send.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailSendService": () => (/* binding */ EmailSendService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);




class EmailSendService {
    constructor(httpClient, commonHttpErrorService) {
        this.httpClient = httpClient;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    sendEmail(email) {
        const url = 'Email';
        return this.httpClient.post(url, email)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
}
EmailSendService.ɵfac = function EmailSendService_Factory(t) { return new (t || EmailSendService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
EmailSendService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmailSendService, factory: EmailSendService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_email-send_email-send_module_ts.js.map