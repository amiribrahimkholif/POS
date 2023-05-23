"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_email-template_email-template_module_ts"],{

/***/ 15662:
/*!*************************************************************************************!*\
  !*** ./src/app/email-template/email-template-list/email-template-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailTemplateListComponent": () => (/* binding */ EmailTemplateListComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _email_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../email-template.service */ 12069);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function EmailTemplateListComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", "/emailtemplate/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, "ADD_EMAIL_TEMPLATE"), " ");
} }
function EmailTemplateListComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ACTION"), " ");
} }
const _c0 = function (a1) { return ["/emailtemplate", a1]; };
function EmailTemplateListComponent_td_13_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const emailTemplate_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, emailTemplate_r9.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "EDIT"), "");
} }
function EmailTemplateListComponent_td_13_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailTemplateListComponent_td_13_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const emailTemplate_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.delteEmailTemplate(emailTemplate_r9)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "DELETE"), "");
} }
function EmailTemplateListComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EmailTemplateListComponent_td_13_a_1_Template, 5, 6, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, EmailTemplateListComponent_td_13_button_2_Template, 5, 3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "EMAIL_MANAGE_EMAIL_TEMPLATES");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "EMAIL_MANAGE_EMAIL_TEMPLATES");
} }
function EmailTemplateListComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function EmailTemplateListComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emailTemplate_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", emailTemplate_r16.name, " ");
} }
function EmailTemplateListComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "SUBJECT"), " ");
} }
function EmailTemplateListComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const emailTemplate_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", emailTemplate_r17.subject, " ");
} }
function EmailTemplateListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 25);
} }
function EmailTemplateListComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 26);
} }
class EmailTemplateListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(emailTemplateService, toastrService, commonDialogService, translationService) {
        super(translationService);
        this.emailTemplateService = emailTemplateService;
        this.toastrService = toastrService;
        this.commonDialogService = commonDialogService;
        this.translationService = translationService;
        this.emailTemplates = [];
        this.displayedColumns = ['action', 'name', 'subject'];
        this.getLangDir();
    }
    ngOnInit() {
        this.getEmailTemplates();
    }
    delteEmailTemplate(emailTemplate) {
        const areU = this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE');
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(`${areU}:: ${emailTemplate.name}`)
            .subscribe((flag) => {
            if (flag) {
                this.sub$.sink = this.emailTemplateService.deleteEmailTemplate(emailTemplate)
                    .subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('EMAIL_TEMPLATE_DELETED_SUCCESSFULLY'));
                    this.getEmailTemplates();
                });
            }
        });
    }
    getEmailTemplates() {
        this.sub$.sink = this.emailTemplateService.getEmailTemplates()
            .subscribe((data) => {
            this.emailTemplates = data;
        }, (err) => {
            err.messages.forEach(msg => {
                this.toastrService.error(msg);
            });
        });
    }
}
EmailTemplateListComponent.ɵfac = function EmailTemplateListComponent_Factory(t) { return new (t || EmailTemplateListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_email_template_service__WEBPACK_IMPORTED_MODULE_1__.EmailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_2__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService)); };
EmailTemplateListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmailTemplateListComponent, selectors: [["app-email-template-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 9, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "btn blue-btn btn-sm m-right-10", "routerLinkActive", "router-link-active", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "hasClaim"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-300", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "subject"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["routerLinkActive", "router-link-active", "routerLinkActive", "router-link-active", 1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], ["mat-header-cell", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["routerLinkActive", "router-link-active", "class", "btn btn-success btn-sm m-right-10", "type", "button", 3, "routerLink", 4, "hasClaim"], ["class", "btn btn-danger btn-sm", 3, "click", 4, "hasClaim"], ["routerLinkActive", "router-link-active", "type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-pen"], [1, "d-none", "d-sm-inline"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-trash-alt"], ["mat-header-row", ""], ["mat-row", ""]], template: function EmailTemplateListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, EmailTemplateListComponent_a_8_Template, 4, 4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5)(10, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, EmailTemplateListComponent_th_12_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, EmailTemplateListComponent_td_13_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, EmailTemplateListComponent_th_15_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, EmailTemplateListComponent_td_16_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, EmailTemplateListComponent_th_18_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, EmailTemplateListComponent_td_19_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, EmailTemplateListComponent_tr_20_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, EmailTemplateListComponent_tr_21_Template, 1, 0, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, "EMAIL_TEMPLATE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "EMAIL_MANAGE_EMAIL_TEMPLATES");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.emailTemplates);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC10ZW1wbGF0ZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6140:
/*!*****************************************************************************************!*\
  !*** ./src/app/email-template/email-template-manage/email-template-manage.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailTemplateManageComponent": () => (/* binding */ EmailTemplateManageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_editor_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/editor.config */ 7757);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _email_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email-template.service */ 12069);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);













function EmailTemplateManageComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ADD_EMAIL_TEMPLATE"), " ");
} }
function EmailTemplateManageComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "EDIT_EMAIL_TEMPLATE"), " ");
} }
function EmailTemplateManageComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "EMAIL_TEMPLATE_NAME_IS_REQUIRED"), " ");
} }
function EmailTemplateManageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EmailTemplateManageComponent_div_14_div_1_Template, 3, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.emailTemplateForm.get("name").errors == null ? null : ctx_r2.emailTemplateForm.get("name").errors.required);
} }
function EmailTemplateManageComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "SUBJECT_IS_REQUIRED"), " ");
} }
function EmailTemplateManageComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EmailTemplateManageComponent_div_22_div_1_Template, 3, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.emailTemplateForm.get("subject").errors == null ? null : ctx_r3.emailTemplateForm.get("subject").errors.required);
} }
function EmailTemplateManageComponent_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "BODY_IS_REQUIRED"), " ");
} }
function EmailTemplateManageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EmailTemplateManageComponent_div_33_div_1_Template, 3, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.emailTemplateForm.get("body").errors == null ? null : ctx_r4.emailTemplateForm.get("body").errors.required);
} }
function EmailTemplateManageComponent_button_36_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailTemplateManageComponent_button_36_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.addUpdateEmailTemplate()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "SAVE"), " ");
} }
const _c0 = function () { return ["/emailtemplate"]; };
class EmailTemplateManageComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(fb, route, emailTemplateService, router, toastrService, translationService) {
        super(translationService);
        this.fb = fb;
        this.route = route;
        this.emailTemplateService = emailTemplateService;
        this.router = router;
        this.toastrService = toastrService;
        this.translationService = translationService;
        this.editorConfig = _shared_editor_config__WEBPACK_IMPORTED_MODULE_0__.EditorConfig;
        this.getLangDir();
    }
    ngOnInit() {
        this.createEmailTemplateForm();
        this.getEmailResolverData();
    }
    getEmailResolverData() {
        this.sub$.sink = this.route.data.subscribe((data) => {
            if (data.emailTemplate) {
                this.emailTemplate = data.emailTemplate;
                this.patchEmailTemplateData();
            }
        });
    }
    addUpdateEmailTemplate() {
        if (this.emailTemplateForm.valid) {
            if (this.emailTemplate) {
                this.sub$.sink = this.emailTemplateService
                    .updateEmailTemplate(this.createBuildObject())
                    .subscribe(c => {
                    this.toastrService.success(this.translationService.getValue('EMAIL_TEMPLATE_UPDATED_SUCCESSFULLY'));
                    this.router.navigate(['/emailtemplate']);
                });
            }
            else {
                this.sub$.sink = this.emailTemplateService
                    .addEmailTemplate(this.createBuildObject())
                    .subscribe(c => {
                    this.toastrService.success(this.translationService.getValue('EMAIL_TEMPLATE_SAVE_SUCCESSFULLY'));
                    this.router.navigate(['/emailtemplate']);
                });
            }
        }
        else {
            for (let inner in this.emailTemplateForm.controls) {
                this.emailTemplateForm.get(inner).markAsDirty();
                this.emailTemplateForm.get(inner).updateValueAndValidity();
            }
        }
    }
    createBuildObject() {
        const emailTemplate = {
            id: this.emailTemplate ? this.emailTemplate.id : null,
            name: this.emailTemplateForm.get('name').value,
            subject: this.emailTemplateForm.get('subject').value,
            body: this.emailTemplateForm.get('body').value
        };
        return emailTemplate;
    }
    createEmailTemplateForm() {
        this.emailTemplateForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    patchEmailTemplateData() {
        this.emailTemplateForm.patchValue({
            name: this.emailTemplate.name,
            subject: this.emailTemplate.subject,
            body: this.emailTemplate.body
        });
    }
}
EmailTemplateManageComponent.ɵfac = function EmailTemplateManageComponent_Factory(t) { return new (t || EmailTemplateManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_email_template_service__WEBPACK_IMPORTED_MODULE_2__.EmailTemplateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService)); };
EmailTemplateManageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmailTemplateManageComponent, selectors: [["app-email-template-manage"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 41, vars: 25, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-sm-12"], [1, "form-group"], [1, "text-danger"], ["formControlName", "name", "type", "text", 1, "form-control"], ["formControlName", "subject", "type", "text", 1, "form-control"], ["formControlName", "body", 3, "config"], [1, "mt-2", "col-md-12"], ["class", "btn btn-success btn-sm m-right-10", "cdkFocusInitial", "", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "routerLink"], [1, "las", "la-times-circle"], ["class", "text-danger", 4, "ngIf"], ["cdkFocusInitial", "", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "las", "la-save"]], template: function EmailTemplateManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, EmailTemplateManageComponent_h1_4_Template, 3, 3, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, EmailTemplateManageComponent_h1_5_Template, 3, 3, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, EmailTemplateManageComponent_div_14_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6)(16, "div", 7)(17, "div", 8)(18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, EmailTemplateManageComponent_div_22_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 6)(24, "div", 7)(25, "div", 8)(26, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "angular-editor", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, EmailTemplateManageComponent_div_33_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 6)(35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, EmailTemplateManageComponent_button_36_Template, 4, 3, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.emailTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.emailTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.emailTemplateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 14, "NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.emailTemplateForm.get("name").dirty && ctx.emailTemplateForm.get("name").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 16, "SUBJECT"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.emailTemplateForm.get("subject").dirty && ctx.emailTemplateForm.get("subject").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 18, "BODY"), " * ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](31, 20, "WORD_MUST_BE_START_AND_END_WITH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.emailTemplateForm.get("body").dirty && ctx.emailTemplateForm.get("body").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "EMAIL_MANAGE_EMAIL_TEMPLATES");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](40, 22, "CANCEL"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_10__.AngularEditorComponent, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__.HasClaimDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC10ZW1wbGF0ZS1tYW5hZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 74602:
/*!*****************************************************************!*\
  !*** ./src/app/email-template/email-template-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailTemplateRoutingModule": () => (/* binding */ EmailTemplateRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _email_template_list_email_template_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-template-list/email-template-list.component */ 15662);
/* harmony import */ var _email_template_manage_email_template_manage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-template-manage/email-template-manage.component */ 6140);
/* harmony import */ var _email_template_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-template.resolver */ 51387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _email_template_list_email_template_list_component__WEBPACK_IMPORTED_MODULE_1__.EmailTemplateListComponent,
        data: { claimType: 'EMAIL_MANAGE_EMAIL_TEMPLATES' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: ':id',
        component: _email_template_manage_email_template_manage_component__WEBPACK_IMPORTED_MODULE_2__.EmailTemplateManageComponent,
        resolve: { emailTemplate: _email_template_resolver__WEBPACK_IMPORTED_MODULE_3__.EmailTemplateResolver },
        data: { claimType: ['EMAIL_MANAGE_EMAIL_TEMPLATES', 'EMAIL_MANAGE_EMAIL_TEMPLATES'] },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
class EmailTemplateRoutingModule {
}
EmailTemplateRoutingModule.ɵfac = function EmailTemplateRoutingModule_Factory(t) { return new (t || EmailTemplateRoutingModule)(); };
EmailTemplateRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EmailTemplateRoutingModule });
EmailTemplateRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmailTemplateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 27514:
/*!*********************************************************!*\
  !*** ./src/app/email-template/email-template.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailTemplateModule": () => (/* binding */ EmailTemplateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _email_template_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-template-routing.module */ 74602);
/* harmony import */ var _email_template_manage_email_template_manage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-template-manage/email-template-manage.component */ 6140);
/* harmony import */ var _email_template_list_email_template_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-template-list/email-template-list.component */ 15662);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









class EmailTemplateModule {
}
EmailTemplateModule.ɵfac = function EmailTemplateModule_Factory(t) { return new (t || EmailTemplateModule)(); };
EmailTemplateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EmailTemplateModule });
EmailTemplateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _email_template_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailTemplateRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__.AngularEditorModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmailTemplateModule, { declarations: [_email_template_manage_email_template_manage_component__WEBPACK_IMPORTED_MODULE_1__.EmailTemplateManageComponent,
        _email_template_list_email_template_list_component__WEBPACK_IMPORTED_MODULE_2__.EmailTemplateListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _email_template_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailTemplateRoutingModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__.AngularEditorModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule] }); })();


/***/ }),

/***/ 51387:
/*!***********************************************************!*\
  !*** ./src/app/email-template/email-template.resolver.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailTemplateResolver": () => (/* binding */ EmailTemplateResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _email_template_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-template.service */ 12069);



class EmailTemplateResolver {
    constructor(emailTemplateService) {
        this.emailTemplateService = emailTemplateService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        if (id === 'add') {
            return null;
        }
        return this.emailTemplateService.getEmailTemplate(id);
    }
}
EmailTemplateResolver.ɵfac = function EmailTemplateResolver_Factory(t) { return new (t || EmailTemplateResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_email_template_service__WEBPACK_IMPORTED_MODULE_0__.EmailTemplateService)); };
EmailTemplateResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmailTemplateResolver, factory: EmailTemplateResolver.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_email-template_email-template_module_ts.js.map