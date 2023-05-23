"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_inquiry-status_inquiry-status_module_ts"],{

/***/ 77366:
/*!***************************************************************************************************************!*\
  !*** ./src/app/inquiry-status/inquiry-status-list-presentation/inquiry-status-list-presentation.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryStatusListPresentationComponent": () => (/* binding */ InquiryStatusListPresentationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _manage_inquiry_status_manage_inquiry_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manage-inquiry-status/manage-inquiry-status.component */ 96313);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);













function InquiryStatusListPresentationComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryStatusListPresentationComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.manageInquiryStatus({})); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "ADD_INQUIRY_STATUS"), " ");
} }
function InquiryStatusListPresentationComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InquiryStatusListPresentationComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ACTION"), " ");
} }
function InquiryStatusListPresentationComponent_td_13_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryStatusListPresentationComponent_td_13_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.manageInquiryStatus(element_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "EDIT"), "");
} }
function InquiryStatusListPresentationComponent_td_13_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquiryStatusListPresentationComponent_td_13_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.deleteInquiryStatus(element_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "DELETE"), "");
} }
function InquiryStatusListPresentationComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InquiryStatusListPresentationComponent_td_13_button_1_Template, 5, 3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, InquiryStatusListPresentationComponent_td_13_button_2_Template, 5, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_INQ_STATUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_INQ_STATUS");
} }
function InquiryStatusListPresentationComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function InquiryStatusListPresentationComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r19.name, " ");
} }
function InquiryStatusListPresentationComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
} }
function InquiryStatusListPresentationComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
} }
class InquiryStatusListPresentationComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialog, commonDialogService, translationService) {
        super(translationService);
        this.dialog = dialog;
        this.commonDialogService = commonDialogService;
        this.translationService = translationService;
        this.loading = false;
        this.deleteInquiryStatusHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.displayedColumns = ['action', 'name'];
    }
    ngOnInit() {
    }
    deleteInquiryStatus(inquiryStatus) {
        const areU = this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE');
        this.sub$.sink = this.commonDialogService.deleteConformationDialog(`${areU} :: ${inquiryStatus.name}`)
            .subscribe(isTrue => {
            if (isTrue) {
                this.deleteInquiryStatusHandler.emit(inquiryStatus.id);
            }
        });
    }
    manageInquiryStatus(inquiryStatus) {
        this.dialog.open(_manage_inquiry_status_manage_inquiry_status_component__WEBPACK_IMPORTED_MODULE_1__.ManageInquiryStatusComponent, {
            width: '350px',
            direction: this.langDir,
            data: Object.assign({}, inquiryStatus)
        });
    }
}
InquiryStatusListPresentationComponent.ɵfac = function InquiryStatusListPresentationComponent_Factory(t) { return new (t || InquiryStatusListPresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_2__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService)); };
InquiryStatusListPresentationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InquiryStatusListPresentationComponent, selectors: [["app-inquiry-status-list-presentation"]], inputs: { inquiryStatuses: "inquiryStatuses", loading: "loading" }, outputs: { deleteInquiryStatusHandler: "deleteInquiryStatusHandler" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 10, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], ["class", "col-md-auto col-sm-auto col-auto", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-200", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "col-md-auto", "col-sm-auto", "col-auto"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["class", "btn btn-success btn-sm m-right-10", "type", "button", 3, "click", 4, "hasClaim"], ["class", "btn btn-danger btn-sm", "type", "button", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "d-none", "d-sm-inline"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-trash-alt"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function InquiryStatusListPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, InquiryStatusListPresentationComponent_div_7_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, InquiryStatusListPresentationComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, InquiryStatusListPresentationComponent_th_12_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, InquiryStatusListPresentationComponent_td_13_Template, 3, 2, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, InquiryStatusListPresentationComponent_th_15_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, InquiryStatusListPresentationComponent_td_16_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, InquiryStatusListPresentationComponent_tr_17_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, InquiryStatusListPresentationComponent_tr_18_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 8, "INQUIRY_STATUSES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_INQ_STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.inquiryStatuses);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__.HasClaimDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LXN0YXR1cy1saXN0LXByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 85157:
/*!*************************************************************************************!*\
  !*** ./src/app/inquiry-status/inquiry-status-list/inquiry-status-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryStatusListComponent": () => (/* binding */ InquiryStatusListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/inquiry-status.service */ 94061);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _inquiry_status_list_presentation_inquiry_status_list_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inquiry-status-list-presentation/inquiry-status-list-presentation.component */ 77366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);








class InquiryStatusListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(inquiryStatusService, toastrService, translationService) {
        super(translationService);
        this.inquiryStatusService = inquiryStatusService;
        this.toastrService = toastrService;
        this.translationService = translationService;
    }
    ngOnInit() {
        this.loading$ = this.inquiryStatusService.loaded$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(loaded => {
            if (!loaded) {
                this.getInquiryStatuses();
            }
        }));
        this.inquiryStatuses$ = this.inquiryStatusService.entities$;
    }
    getInquiryStatuses() {
        this.inquiryStatusService.getAll();
    }
    deleteInquiryStatus(id) {
        this.sub$.sink = this.inquiryStatusService.delete(id).subscribe(() => {
            this.toastrService.success(this.translationService.getValue('INQUIRY_STATUS_DELETED_SUCCESSFULLY'));
        });
    }
}
InquiryStatusListComponent.ɵfac = function InquiryStatusListComponent_Factory(t) { return new (t || InquiryStatusListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_1__.InquiryStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
InquiryStatusListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InquiryStatusListComponent, selectors: [["app-inquiry-status-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 6, consts: [[3, "inquiryStatuses", "loading", "deleteInquiryStatusHandler"]], template: function InquiryStatusListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-inquiry-status-list-presentation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("deleteInquiryStatusHandler", function InquiryStatusListComponent_Template_app_inquiry_status_list_presentation_deleteInquiryStatusHandler_0_listener($event) { return ctx.deleteInquiryStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inquiryStatuses", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.inquiryStatuses$))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx.loading$));
    } }, dependencies: [_inquiry_status_list_presentation_inquiry_status_list_presentation_component__WEBPACK_IMPORTED_MODULE_3__.InquiryStatusListPresentationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LXN0YXR1cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 86364:
/*!*****************************************************************!*\
  !*** ./src/app/inquiry-status/inquiry-status-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryStatusRoutingModule": () => (/* binding */ InquiryStatusRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _inquiry_status_list_inquiry_status_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-status-list/inquiry-status-list.component */ 85157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _inquiry_status_list_inquiry_status_list_component__WEBPACK_IMPORTED_MODULE_1__.InquiryStatusListComponent,
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { claimType: 'INQ_MANAGE_INQ_STATUS' },
    }
];
class InquiryStatusRoutingModule {
}
InquiryStatusRoutingModule.ɵfac = function InquiryStatusRoutingModule_Factory(t) { return new (t || InquiryStatusRoutingModule)(); };
InquiryStatusRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InquiryStatusRoutingModule });
InquiryStatusRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InquiryStatusRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 98209:
/*!*********************************************************!*\
  !*** ./src/app/inquiry-status/inquiry-status.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryStatusModule": () => (/* binding */ InquiryStatusModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _inquiry_status_list_inquiry_status_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry-status-list/inquiry-status-list.component */ 85157);
/* harmony import */ var _inquiry_status_list_presentation_inquiry_status_list_presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-status-list-presentation/inquiry-status-list-presentation.component */ 77366);
/* harmony import */ var _manage_inquiry_status_manage_inquiry_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-inquiry-status/manage-inquiry-status.component */ 96313);
/* harmony import */ var _inquiry_status_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inquiry-status-routing.module */ 86364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);











class InquiryStatusModule {
}
InquiryStatusModule.ɵfac = function InquiryStatusModule_Factory(t) { return new (t || InquiryStatusModule)(); };
InquiryStatusModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InquiryStatusModule });
InquiryStatusModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _inquiry_status_routing_module__WEBPACK_IMPORTED_MODULE_3__.InquiryStatusRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InquiryStatusModule, { declarations: [_inquiry_status_list_inquiry_status_list_component__WEBPACK_IMPORTED_MODULE_0__.InquiryStatusListComponent,
        _inquiry_status_list_presentation_inquiry_status_list_presentation_component__WEBPACK_IMPORTED_MODULE_1__.InquiryStatusListPresentationComponent,
        _manage_inquiry_status_manage_inquiry_status_component__WEBPACK_IMPORTED_MODULE_2__.ManageInquiryStatusComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _inquiry_status_routing_module__WEBPACK_IMPORTED_MODULE_3__.InquiryStatusRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 96313:
/*!*****************************************************************************************!*\
  !*** ./src/app/inquiry-status/manage-inquiry-status/manage-inquiry-status.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageInquiryStatusComponent": () => (/* binding */ ManageInquiryStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/inquiry-status.service */ 94061);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












function ManageInquiryStatusComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "INQUIRY_STATUS_NAME_IS_REQUIRED"), " ");
} }
function ManageInquiryStatusComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ManageInquiryStatusComponent_div_19_div_1_Template, 3, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.inquiryStatusForm.get("name").touched && (ctx_r0.inquiryStatusForm.get("name").errors == null ? null : ctx_r0.inquiryStatusForm.get("name").errors.required));
} }
function ManageInquiryStatusComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageInquiryStatusComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.saveInquiryStatus()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "SAVE"), " ");
} }
class ManageInquiryStatusComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data, inquiryStatusService, toastrService, fb, translationService) {
        super(translationService);
        this.dialogRef = dialogRef;
        this.data = data;
        this.inquiryStatusService = inquiryStatusService;
        this.toastrService = toastrService;
        this.fb = fb;
        this.translationService = translationService;
        this.isEdit = false;
    }
    ngOnInit() {
        this.createForm();
        if (this.data.id) {
            this.inquiryStatusForm.patchValue(this.data);
            this.isEdit = true;
        }
    }
    createForm() {
        this.inquiryStatusForm = this.fb.group({
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    saveInquiryStatus() {
        if (!this.inquiryStatusForm.valid) {
            this.inquiryStatusForm.markAllAsTouched();
            return;
        }
        const inquiryStatus = this.inquiryStatusForm.value;
        if (this.data.id) {
            this.inquiryStatusService.update(inquiryStatus).subscribe(() => {
                this.toastrService.success(this.translationService.getValue('INQUIRY_STATUS_UPDATED_SUCCESSFULLY'));
                this.dialogRef.close();
            });
        }
        else {
            this.inquiryStatusService.add(inquiryStatus).subscribe(() => {
                this.toastrService.success(this.translationService.getValue('INQUIRY_STATUS_SAVED_SUCCESSFULLY'));
                this.dialogRef.close();
            });
        }
    }
}
ManageInquiryStatusComponent.ɵfac = function ManageInquiryStatusComponent_Factory(t) { return new (t || ManageInquiryStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_inquiry_status_service__WEBPACK_IMPORTED_MODULE_1__.InquiryStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
ManageInquiryStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ManageInquiryStatusComponent, selectors: [["app-manage-inquiry-status"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 12, consts: [[1, "modal-content1"], [1, "modal-header"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], [1, "col-md-9", "col"], [1, "modal-title"], [1, "col-sm-auto", "col-auto", "ml-auto"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "fas", "fa-times"], [3, "formGroup"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["for", "inquiryStatusName", 1, "text-danger"], ["formControlName", "name", "type", "text", "id", "inquiryStatusName", 1, "form-control"], [4, "ngIf"], [1, "modal-footer"], [1, "form-row", "w-100"], [1, "col-md-auto", "col-auto"], ["class", "btn btn-success btn-sm m-right-10", "cdkFocusInitial", "", 3, "click", 4, "hasClaim"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["cdkFocusInitial", "", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"]], template: function ManageInquiryStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageInquiryStatusComponent_Template_button_click_8_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ManageInquiryStatusComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ManageInquiryStatusComponent_button_23_Template, 4, 3, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ManageInquiryStatusComponent_Template_button_click_24_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 6, "MANAGE_INQUIRY_STATUS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.inquiryStatusForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 8, "INQUIRY_STATUS_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.inquiryStatusForm.get("name").touched && ctx.inquiryStatusForm.get("name").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_INQ_STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 10, "CANCEL"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_3__.HasClaimDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtaW5xdWlyeS1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_inquiry-status_inquiry-status_module_ts.js.map