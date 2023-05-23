"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_inquiry-source_inquiry-source_module_ts"],{

/***/ 40573:
/*!*******************************************************!*\
  !*** ./src/app/core/domain-classes/inquiry-source.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquirySource": () => (/* binding */ InquirySource)
/* harmony export */ });
class InquirySource {
}


/***/ }),

/***/ 44158:
/*!***************************************************************************************************************!*\
  !*** ./src/app/inquiry-source/inquiry-source-list-presentation/inquiry-source-list-presentation.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquirySourceListPresentationComponent": () => (/* binding */ InquirySourceListPresentationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _manage_inquiry_source_manage_inquiry_source_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manage-inquiry-source/manage-inquiry-source.component */ 63003);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);













function InquirySourceListPresentationComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquirySourceListPresentationComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.manageInquirySource({})); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "ADD_INQUIRY_SOURCE"), " ");
} }
function InquirySourceListPresentationComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function InquirySourceListPresentationComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ACTION"), " ");
} }
function InquirySourceListPresentationComponent_td_14_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquirySourceListPresentationComponent_td_14_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.manageInquirySource(element_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "EDIT"), "");
} }
function InquirySourceListPresentationComponent_td_14_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function InquirySourceListPresentationComponent_td_14_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.deleteInquirySource(element_r10)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "DELETE"), "");
} }
function InquirySourceListPresentationComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, InquirySourceListPresentationComponent_td_14_button_1_Template, 5, 3, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, InquirySourceListPresentationComponent_td_14_button_2_Template, 5, 3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_INQ_SOURCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_INQ_SOURCE");
} }
function InquirySourceListPresentationComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function InquirySourceListPresentationComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r19.name, " ");
} }
function InquirySourceListPresentationComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 31);
} }
function InquirySourceListPresentationComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
} }
class InquirySourceListPresentationComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialog, commonDialogService, translationService) {
        super(translationService);
        this.dialog = dialog;
        this.commonDialogService = commonDialogService;
        this.translationService = translationService;
        this.loading = false;
        this.deleteInquirySourceHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.displayedColumns = ['action', 'name'];
        this.getLangDir();
    }
    ngOnInit() {
    }
    deleteInquirySource(inquirySource) {
        const areU = this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE');
        this.sub$.sink = this.commonDialogService.deleteConformationDialog(`${areU} :: ${inquirySource.name}`)
            .subscribe(isTrue => {
            if (isTrue) {
                this.deleteInquirySourceHandler.emit(inquirySource.id);
            }
        });
    }
    manageInquirySource(inquirySource) {
        this.dialog.open(_manage_inquiry_source_manage_inquiry_source_component__WEBPACK_IMPORTED_MODULE_1__.ManageInquirySourceComponent, {
            width: '350px',
            direction: this.langDir,
            data: Object.assign({}, inquirySource)
        });
    }
}
InquirySourceListPresentationComponent.ɵfac = function InquirySourceListPresentationComponent_Factory(t) { return new (t || InquirySourceListPresentationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_2__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService)); };
InquirySourceListPresentationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InquirySourceListPresentationComponent, selectors: [["app-inquiry-source-list-presentation"]], inputs: { inquirySources: "inquirySources", loading: "loading" }, outputs: { deleteInquirySourceHandler: "deleteInquirySourceHandler" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 10, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], [1, "col-md-auto", "col-sm-auto", "col-auto"], ["class", "btn blue-btn btn-sm m-right-10", 3, "click", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-200", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["class", "btn btn-success btn-sm m-right-10", "type", "button", 3, "click", 4, "hasClaim"], ["class", "btn btn-danger btn-sm", "type", "button", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "d-none", "d-sm-inline"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-trash-alt"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function InquirySourceListPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, InquirySourceListPresentationComponent_button_8_Template, 4, 3, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, InquirySourceListPresentationComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, InquirySourceListPresentationComponent_th_13_Template, 3, 3, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, InquirySourceListPresentationComponent_td_14_Template, 3, 2, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, InquirySourceListPresentationComponent_th_16_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, InquirySourceListPresentationComponent_td_17_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, InquirySourceListPresentationComponent_tr_18_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, InquirySourceListPresentationComponent_tr_19_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 8, "INQUIRY_SOURCES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_INQ_SOURCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.inquirySources);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__.HasClaimDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LXNvdXJjZS1saXN0LXByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1935:
/*!*************************************************************************************!*\
  !*** ./src/app/inquiry-source/inquiry-source-list/inquiry-source-list.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquirySourceListComponent": () => (/* binding */ InquirySourceListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/inquiry-source.service */ 92539);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _inquiry_source_list_presentation_inquiry_source_list_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inquiry-source-list-presentation/inquiry-source-list-presentation.component */ 44158);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);








class InquirySourceListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(inquirySourcesService, toastrService, translationService) {
        super(translationService);
        this.inquirySourcesService = inquirySourcesService;
        this.toastrService = toastrService;
        this.translationService = translationService;
    }
    ngOnInit() {
        this.loading$ = this.inquirySourcesService.loaded$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(loaded => {
            if (!loaded) {
                this.getInquirySources();
            }
        }));
        this.inquirySources$ = this.inquirySourcesService.entities$;
    }
    getInquirySources() {
        this.inquirySourcesService.getAll();
    }
    deleteInquirySource(id) {
        this.sub$.sink = this.inquirySourcesService.delete(id).subscribe(() => {
            this.toastrService.success(this.translationService.getValue('INQUIRY_SOURCE_DELETED_SUCCESSFULLY'));
        });
    }
}
InquirySourceListComponent.ɵfac = function InquirySourceListComponent_Factory(t) { return new (t || InquirySourceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_1__.InquirySourceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
InquirySourceListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: InquirySourceListComponent, selectors: [["app-inquiry-source-list"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 6, consts: [[3, "inquirySources", "loading", "deleteInquirySourceHandler"]], template: function InquirySourceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-inquiry-source-list-presentation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("deleteInquirySourceHandler", function InquirySourceListComponent_Template_app_inquiry_source_list_presentation_deleteInquirySourceHandler_0_listener($event) { return ctx.deleteInquirySource($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inquirySources", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.inquirySources$))("loading", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx.loading$));
    } }, dependencies: [_inquiry_source_list_presentation_inquiry_source_list_presentation_component__WEBPACK_IMPORTED_MODULE_3__.InquirySourceListPresentationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnF1aXJ5LXNvdXJjZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 29433:
/*!*****************************************************************!*\
  !*** ./src/app/inquiry-source/inquiry-source-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquirySourceRoutingModule": () => (/* binding */ InquirySourceRoutingModule)
/* harmony export */ });
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _inquiry_source_list_inquiry_source_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-source-list/inquiry-source-list.component */ 1935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _inquiry_source_list_inquiry_source_list_component__WEBPACK_IMPORTED_MODULE_1__.InquirySourceListComponent,
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { claimType: 'INQ_MANAGE_INQ_SOURCE' },
    }
];
class InquirySourceRoutingModule {
}
InquirySourceRoutingModule.ɵfac = function InquirySourceRoutingModule_Factory(t) { return new (t || InquirySourceRoutingModule)(); };
InquirySourceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InquirySourceRoutingModule });
InquirySourceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InquirySourceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 97640:
/*!*********************************************************!*\
  !*** ./src/app/inquiry-source/inquiry-source.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquirySourceModule": () => (/* binding */ InquirySourceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _inquiry_source_list_inquiry_source_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry-source-list/inquiry-source-list.component */ 1935);
/* harmony import */ var _inquiry_source_list_presentation_inquiry_source_list_presentation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry-source-list-presentation/inquiry-source-list-presentation.component */ 44158);
/* harmony import */ var _manage_inquiry_source_manage_inquiry_source_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-inquiry-source/manage-inquiry-source.component */ 63003);
/* harmony import */ var _inquiry_source_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inquiry-source-routing.module */ 29433);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);











class InquirySourceModule {
}
InquirySourceModule.ɵfac = function InquirySourceModule_Factory(t) { return new (t || InquirySourceModule)(); };
InquirySourceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InquirySourceModule });
InquirySourceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _inquiry_source_routing_module__WEBPACK_IMPORTED_MODULE_3__.InquirySourceRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InquirySourceModule, { declarations: [_inquiry_source_list_inquiry_source_list_component__WEBPACK_IMPORTED_MODULE_0__.InquirySourceListComponent,
        _inquiry_source_list_presentation_inquiry_source_list_presentation_component__WEBPACK_IMPORTED_MODULE_1__.InquirySourceListPresentationComponent,
        _manage_inquiry_source_manage_inquiry_source_component__WEBPACK_IMPORTED_MODULE_2__.ManageInquirySourceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _inquiry_source_routing_module__WEBPACK_IMPORTED_MODULE_3__.InquirySourceRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule] }); })();


/***/ }),

/***/ 63003:
/*!*****************************************************************************************!*\
  !*** ./src/app/inquiry-source/manage-inquiry-source/manage-inquiry-source.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageInquirySourceComponent": () => (/* binding */ ManageInquirySourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/inquiry-source.service */ 92539);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _core_domain_classes_inquiry_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/domain-classes/inquiry-source */ 40573);













function ManageInquirySourceComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "INQUIRY_SOURCE_NAME_IS_REQUIRED"), " ");
} }
function ManageInquirySourceComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManageInquirySourceComponent_div_19_div_1_Template, 3, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.inquirySourceForm.get("name").touched && (ctx_r0.inquirySourceForm.get("name").errors == null ? null : ctx_r0.inquirySourceForm.get("name").errors.required));
} }
function ManageInquirySourceComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageInquirySourceComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.saveInquirySource()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "SAVE"), " ");
} }
class ManageInquirySourceComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data, inquirySourceService, toastrService, fb, translationService) {
        super(translationService);
        this.dialogRef = dialogRef;
        this.data = data;
        this.inquirySourceService = inquirySourceService;
        this.toastrService = toastrService;
        this.fb = fb;
        this.translationService = translationService;
        this.isEdit = false;
    }
    ngOnInit() {
        this.createForm();
        if (this.data.id) {
            this.inquirySourceForm.patchValue(this.data);
            this.isEdit = true;
        }
    }
    createForm() {
        this.inquirySourceForm = this.fb.group({
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    onCancel() {
        this.dialogRef.close();
    }
    saveInquirySource() {
        if (!this.inquirySourceForm.valid) {
            this.inquirySourceForm.markAllAsTouched();
            return;
        }
        const inquirySource = this.inquirySourceForm.value;
        if (this.data.id) {
            this.inquirySourceService.update(inquirySource).subscribe(() => {
                this.toastrService.success(this.translationService.getValue('INQUIRY_SOURCE_UPDATED_SUCCESSFULLY'));
                this.dialogRef.close();
            });
        }
        else {
            this.inquirySourceService.add(inquirySource).subscribe(() => {
                this.toastrService.success(this.translationService.getValue('INQUIRY_SOURCE_SAVED_SUCCESSFULLY'));
                this.dialogRef.close();
            });
        }
    }
}
ManageInquirySourceComponent.ɵfac = function ManageInquirySourceComponent_Factory(t) { return new (t || ManageInquirySourceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_inquiry_source_service__WEBPACK_IMPORTED_MODULE_1__.InquirySourceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
ManageInquirySourceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManageInquirySourceComponent, selectors: [["app-manage-inquiry-source"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 12, consts: [[1, "modal-content1"], [1, "modal-header"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], [1, "col-md-10", "col"], [1, "modal-title"], [1, "col-sm-auto", "col-auto", "ml-auto"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "fas", "fa-times"], [3, "formGroup"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "form-group"], ["for", "inquirySourceName", 1, "text-danger"], ["formControlName", "name", "type", "text", "id", "inquirySourceName", 1, "form-control"], [4, "ngIf"], [1, "modal-footer"], [1, "form-row", "w-100"], [1, "col-md-auto", "col-auto"], ["class", "btn btn-success btn-sm m-right-10", "cdkFocusInitial", "", 3, "click", 4, "hasClaim"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["cdkFocusInitial", "", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"]], template: function ManageInquirySourceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageInquirySourceComponent_Template_button_click_8_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ManageInquirySourceComponent_div_19_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 16)(21, "div", 17)(22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ManageInquirySourceComponent_button_23_Template, 4, 3, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageInquirySourceComponent_Template_button_click_24_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, "MANAGE_INQUIRY_SOURCE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.inquirySourceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 8, "INQUIRY_SOURCE_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.inquirySourceForm.get("name").touched && ctx.inquirySourceForm.get("name").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "INQ_MANAGE_INQ_SOURCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 10, "CANCEL"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_3__.HasClaimDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtaW5xdWlyeS1zb3VyY2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_inquiry-source_inquiry-source_module_ts.js.map