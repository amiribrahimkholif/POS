"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_core_domain-classes_resource-parameter_ts-src_app_reports_expense-report_expense-repo-b1ae5e"],{

/***/ 75519:
/*!***********************************************************!*\
  !*** ./src/app/core/domain-classes/resource-parameter.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceParameter": () => (/* binding */ ResourceParameter)
/* harmony export */ });
class ResourceParameter {
    constructor() {
        this.fields = '';
        this.orderBy = '';
        this.searchQuery = '';
        this.pageSize = 30;
        this.skip = 0;
        this.name = '';
        this.totalCount = 0;
    }
}


/***/ }),

/***/ 28093:
/*!*************************************************************************!*\
  !*** ./src/app/reports/expense-report/expense-report-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseReportRoutingModule": () => (/* binding */ ExpenseReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _expense_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense-report.component */ 95478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _expense_report_component__WEBPACK_IMPORTED_MODULE_1__.ExpenseReportComponent,
        data: { claimType: 'REP_EXPENSE_REP' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    }
];
class ExpenseReportRoutingModule {
}
ExpenseReportRoutingModule.ɵfac = function ExpenseReportRoutingModule_Factory(t) { return new (t || ExpenseReportRoutingModule)(); };
ExpenseReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExpenseReportRoutingModule });
ExpenseReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExpenseReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 95478:
/*!********************************************************************!*\
  !*** ./src/app/reports/expense-report/expense-report.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseReportComponent": () => (/* binding */ ExpenseReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_expense_source_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/expense-source-parameter */ 75355);
/* harmony import */ var _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/user-resource */ 68527);
/* harmony import */ var _core_services_date_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/date-range */ 68287);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _expense_report_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense-report.datasource */ 33138);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _expense_expense_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../expense/expense.service */ 55941);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_expense_category_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/expense-category.service */ 72916);
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user/user.service */ 1584);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-translate/core */ 87514);








































const _c0 = function () { return ["/expense/add"]; };
function ExpenseReportComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 64)(1, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "ADD_EXPENSE"), " ");
} }
function ExpenseReportComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "DATE_RANGE_VALIDATION_MSG"), " ");
} }
function ExpenseReportComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ExpenseReportComponent_div_45_div_1_Template, 3, 3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r3.searchForm.errors == null ? null : ctx_r3.searchForm.errors.dateRange);
} }
function ExpenseReportComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function ExpenseReportComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 70);
} }
function ExpenseReportComponent_td_54_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExpenseReportComponent_td_54_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r43); const expense_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r41.editExpense(expense_r36.id)); });
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
function ExpenseReportComponent_td_54_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExpenseReportComponent_td_54_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r46); const expense_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r44.downloadReceipt(expense_r36)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "DOWNLOAD_RECEIPT"));
} }
function ExpenseReportComponent_td_54_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExpenseReportComponent_td_54_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r49); const expense_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r47.deleteExpense(expense_r36)); });
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
function ExpenseReportComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 71)(1, "button", 72)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-menu", null, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ExpenseReportComponent_td_54_button_6_Template, 6, 3, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ExpenseReportComponent_td_54_button_7_Template, 6, 3, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, ExpenseReportComponent_td_54_button_8_Template, 6, 3, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const expense_r36 = ctx.$implicit;
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "EXP_UPDATE_EXPENSE");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", expense_r36.receiptName);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "EXP_DELETE_EXPENSE");
} }
function ExpenseReportComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function ExpenseReportComponent_td_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, expense_r50.createdDate, "shortDate"), " ");
} }
function ExpenseReportComponent_th_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "EXPENSE_DATE"), " ");
} }
function ExpenseReportComponent_td_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](2, 1, expense_r51.expenseDate, "shortDate"), " ");
} }
function ExpenseReportComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "AMOUNT"), " ");
} }
function ExpenseReportComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, expense_r52.amount), " ");
} }
function ExpenseReportComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "REFERENCE"), " ");
} }
function ExpenseReportComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", expense_r53.reference, " ");
} }
function ExpenseReportComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "EXPENSE_CATEGORY"), " ");
} }
function ExpenseReportComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", expense_r54.expenseCategory == null ? null : expense_r54.expenseCategory.name, " ");
} }
function ExpenseReportComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "EXPENSE_BY"), " ");
} }
function ExpenseReportComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expense_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", expense_r55.expenseBy == null ? null : expense_r55.expenseBy.firstName, " ", expense_r55.expenseBy == null ? null : expense_r55.expenseBy.lastName, " ");
} }
function ExpenseReportComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 85);
} }
function ExpenseReportComponent_th_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 85);
} }
function ExpenseReportComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 85);
} }
function ExpenseReportComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 85);
} }
function ExpenseReportComponent_th_82_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 85)(1, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ExpenseReportComponent_th_82_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r56.ReferenceFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "REFERENCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r23.ReferenceFilter);
} }
function ExpenseReportComponent_th_84_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", category_r59.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", category_r59.name, " ");
} }
function ExpenseReportComponent_th_84_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 85)(1, "mat-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ExpenseReportComponent_th_84_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r60.CategoryFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ExpenseReportComponent_th_84_mat_option_6_Template, 2, 2, "mat-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 5, "EXPENSE_CATEGORY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r24.langDir)("ngModel", ctx_r24.CategoryFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r24.expenseCategories);
} }
function ExpenseReportComponent_th_86_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", user_r63.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", user_r63.firstName, " ", user_r63.lastName, " ");
} }
function ExpenseReportComponent_th_86_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 85)(1, "mat-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function ExpenseReportComponent_th_86_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r64.UserFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, ExpenseReportComponent_th_86_mat_option_6_Template, 2, 3, "mat-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 5, "USER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r25.langDir)("ngModel", ctx_r25.UserFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 7, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r25.users);
} }
const _c1 = function () { return [15, 20, 30]; };
function ExpenseReportComponent_td_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "mat-paginator", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx_r26.langDir)("length", ctx_r26.expenseResource.totalCount)("pageSize", ctx_r26.expenseResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](4, _c1));
} }
function ExpenseReportComponent_td_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 94)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "TOTAL"), ":");
} }
function ExpenseReportComponent_td_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, ctx_r28.totalAmount), " ");
} }
function ExpenseReportComponent_tr_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr")(1, "td", 96)(2, "span", 97)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function ExpenseReportComponent_tr_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 98);
} }
function ExpenseReportComponent_tr_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 99);
} }
function ExpenseReportComponent_tr_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 98);
} }
function ExpenseReportComponent_tr_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 100);
} }
function ExpenseReportComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 100);
} }
const _c2 = function () { return ["action-search", "date-search", "expensedate-search", "amount-search", "reference-search", "expenseCategoryId-search", "expenseBy-search"]; };
class ExpenseReportComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(expenseService, toastrService, commonDialogService, router, translationService, expenseCategoryService, userService, fb, utcToLocalTime, customCurrencyPipe) {
        super(translationService);
        this.expenseService = expenseService;
        this.toastrService = toastrService;
        this.commonDialogService = commonDialogService;
        this.router = router;
        this.translationService = translationService;
        this.expenseCategoryService = expenseCategoryService;
        this.userService = userService;
        this.fb = fb;
        this.utcToLocalTime = utcToLocalTime;
        this.customCurrencyPipe = customCurrencyPipe;
        this.expenses = [];
        this.displayedColumns = ['action', 'createdDate', 'expenseDate', 'amount', 'reference', 'expenseCategoryId', 'expenseBy'];
        this.footerToDisplayed = ['footer'];
        this.totalAmountDisplayed = ['totalAmountLabel', 'totalAmount'];
        this.isLoadingResults = true;
        this.users = [];
        this.expenseCategories = [];
        this.totalAmount = 0;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
        this.currentDate = new Date();
        this.getLangDir();
        this.expenseResource = new _core_domain_classes_expense_source_parameter__WEBPACK_IMPORTED_MODULE_0__.ExpenseResourceParameter();
        this.expenseResource.pageSize = 15;
        this.expenseResource.orderBy = 'createdDate asc';
    }
    get ReferenceFilter() {
        return this._referenceFilter;
    }
    set ReferenceFilter(v) {
        this._referenceFilter = v;
        const referenceFilter = `reference:${v}`;
        this.filterObservable$.next(referenceFilter);
    }
    get CategoryFilter() {
        return this._categoryFilter;
    }
    set CategoryFilter(v) {
        this._categoryFilter = v;
        const categoryFilter = `expenseCategoryId:${v}`;
        this.filterObservable$.next(categoryFilter);
    }
    get UserFilter() {
        return this._userFilter;
    }
    set UserFilter(v) {
        this._userFilter = v ? v : '';
        const expenseById = `expenseById:${this._userFilter}`;
        this.filterObservable$.next(expenseById);
    }
    ngOnInit() {
        this.createSearchFormGroup();
        this.dataSource = new _expense_report_datasource__WEBPACK_IMPORTED_MODULE_4__.ExpenseReportDataSource(this.expenseService);
        this.dataSource.loadData(this.expenseResource);
        this.getResourceParameter();
        this.getExpenseCategories();
        this.getUsers();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)())
            .subscribe((c) => {
            this.expenseResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split(':');
            if (strArray[0] === 'reference') {
                this.expenseResource.reference = strArray[1];
            }
            else if (strArray[0] === 'expenseCategoryId') {
                this.expenseResource.expenseCategoryId = strArray[1];
            }
            else if (strArray[0] === 'expenseById') {
                this.expenseResource.expenseById = strArray[1];
            }
            this.dataSource.loadData(this.expenseResource);
        });
    }
    createSearchFormGroup() {
        this.searchForm = this.fb.group({
            fromDate: [''],
            toDate: ['']
        }, {
            validators: (0,_core_services_date_range__WEBPACK_IMPORTED_MODULE_2__.dateCompare)()
        });
    }
    onSearch() {
        if (this.searchForm.valid) {
            this.expenseResource.fromDate = this.searchForm.get('fromDate').value;
            this.expenseResource.toDate = this.searchForm.get('toDate').value;
            this.dataSource.loadData(this.expenseResource);
        }
    }
    onClear() {
        this.searchForm.reset();
        this.expenseResource.fromDate = this.searchForm.get('fromDate').value;
        this.expenseResource.toDate = this.searchForm.get('toDate').value;
        this.dataSource.loadData(this.expenseResource);
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)((c) => {
            this.expenseResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.expenseResource.pageSize = this.paginator.pageSize;
            this.expenseResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.expenseResource);
        }))
            .subscribe();
    }
    getExpenseCategories() {
        this.expenseCategoryService.getAll().subscribe(categories => {
            this.expenseCategories = categories;
        });
    }
    getUsers() {
        let userResource = new _core_domain_classes_user_resource__WEBPACK_IMPORTED_MODULE_1__.UserResource();
        userResource.pageSize = 10;
        userResource.orderBy = 'firstName desc';
        this.sub$.sink = this.userService.getUsers(userResource)
            .subscribe((resp) => {
            this.users = resp.body;
        });
    }
    deleteExpense(expense) {
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')}?`)
            .subscribe((isTrue) => {
            if (isTrue) {
                this.sub$.sink = this.expenseService.deleteExpense(expense.id)
                    .subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('EXPENSE_DELETED_SUCCESSFULLY'));
                    this.paginator.pageIndex = 0;
                    this.dataSource.loadData(this.expenseResource);
                });
            }
        });
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.expenseResource.pageSize = c.pageSize;
                this.expenseResource.skip = c.skip;
                this.expenseResource.totalCount = c.totalCount;
                this.totalAmount = c.totalAmount;
            }
        });
    }
    editExpense(expenseId) {
        this.router.navigate(['/expense/manage', expenseId]);
    }
    downloadReceipt(expense) {
        this.sub$.sink = this.expenseService.downloadReceipt(expense.id)
            .subscribe((event) => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpEventType.Response) {
                this.downloadFile(event, expense.receiptName);
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
    onDownloadReport() {
        this.expenseService.getExpensesReport(this.expenseResource)
            .subscribe((c) => {
            this.expenses = [...c.body];
            let heading = [[this.translationService.getValue('EXPENSE_DATE'), this.translationService.getValue('AMOUNT'), this.translationService.getValue('REFERENCE'), this.translationService.getValue('EXPENSE_CATEGORY'), this.translationService.getValue('EXPENSE_BY')]];
            let expensesReport = [];
            this.expenses.forEach((expense) => {
                var _a, _b, _c, _d;
                expensesReport.push({
                    'expenseDate': this.utcToLocalTime.transform(expense.expenseDate, 'shortDate'),
                    'amount': this.customCurrencyPipe.transform(expense.amount),
                    'reference': expense.reference,
                    'category': expense.expenseCategory.name,
                    'expenseBy': expense ? `${((_a = expense.expenseBy) === null || _a === void 0 ? void 0 : _a.firstName) ? (_b = expense.expenseBy) === null || _b === void 0 ? void 0 : _b.firstName : ''} ${((_c = expense.expenseBy) === null || _c === void 0 ? void 0 : _c.lastName) ? (_d = expense.expenseBy) === null || _d === void 0 ? void 0 : _d.lastName : ''}` : ''
                });
            });
            let workBook = xlsx__WEBPACK_IMPORTED_MODULE_20__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_20__.utils.sheet_add_aoa(workBook, heading);
            let workSheet = xlsx__WEBPACK_IMPORTED_MODULE_20__.utils.sheet_add_json(workBook, expensesReport, { origin: "A2", skipHeader: true });
            xlsx__WEBPACK_IMPORTED_MODULE_20__.utils.book_append_sheet(workBook, workSheet, this.translationService.getValue('EXPENSE_REPORT'));
            xlsx__WEBPACK_IMPORTED_MODULE_20__.writeFile(workBook, this.translationService.getValue('EXPENSE_REPORT') + ".xlsx");
        });
    }
}
ExpenseReportComponent.ɵfac = function ExpenseReportComponent_Factory(t) { return new (t || ExpenseReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_expense_expense_service__WEBPACK_IMPORTED_MODULE_7__.ExpenseService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_21__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_8__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_core_services_expense_category_service__WEBPACK_IMPORTED_MODULE_10__.ExpenseCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_user_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_6__.CustomCurrencyPipe)); };
ExpenseReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ExpenseReportComponent, selectors: [["ng-component"]], viewQuery: function ExpenseReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_6__.CustomCurrencyPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵInheritDefinitionFeature"]], decls: 99, vars: 46, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], ["class", "col-md-auto col-sm-auto col-auto", 4, "hasClaim"], [1, "row"], [1, "col-sm-12", "mb-3"], [3, "formGroup"], [1, "col-md-3"], [1, "form-group"], ["for", "fromDate"], ["id", "fromDate", "formControlName", "fromDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["fromDate", ""], ["for", "toDate"], ["id", "toDate", "formControlName", "toDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["toDate", ""], [1, "col-md-4", "report-tool-bar"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], ["type", "submit", 1, "btn", "btn-danger", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-eraser"], ["type", "submit", 1, "btn", "btn-warning", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-download"], [1, "col-sm-12"], [4, "ngIf"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "matSortActive", "createdDate", "matSortDirection", "desc", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "action", "sticky", ""], ["mat-header-cell", "", "class", "table-column-50", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-50", 4, "matCellDef"], ["matColumnDef", "createdDate", "sticky", ""], ["mat-header-cell", "", "mat-sort-header", "", "class", "table-column-150", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-150", 4, "matCellDef"], ["matColumnDef", "expenseDate", "sticky", ""], ["matColumnDef", "amount"], ["mat-header-cell", "", "mat-sort-header", "", "class", "table-column-200 pl-3", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-200 pl-3", 4, "matCellDef"], ["matColumnDef", "reference"], ["matColumnDef", "expenseCategoryId"], ["mat-header-cell", "", "mat-sort-header", "", "class", "table-column-300", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-300", 4, "matCellDef"], ["matColumnDef", "expenseBy"], ["mat-header-cell", "", "mat-sort-header", "", "class", "table-column-200", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-column-200", 4, "matCellDef"], ["matColumnDef", "action-search", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "date-search", "sticky", ""], ["matColumnDef", "expensedate-search", "sticky", ""], ["matColumnDef", "amount-search", "sticky", ""], ["matColumnDef", "reference-search"], ["matColumnDef", "expenseCategoryId-search"], ["matColumnDef", "expenseBy-search", "sticky", ""], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "7", 4, "matFooterCellDef"], ["matColumnDef", "totalAmountLabel"], ["mat-footer-cell", "", "colspan", "3", 4, "matFooterCellDef"], ["matColumnDef", "totalAmount"], ["class", "pl-3", "mat-footer-cell", "", "colspan", "4", 4, "matFooterCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "col-md-auto", "col-sm-auto", "col-auto"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-50"], ["mat-cell", "", 1, "table-column-50"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-200", "pl-3"], ["mat-cell", "", 1, "table-column-200", "pl-3"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], [1, "form-control", "w-90", 3, "dir", "placeholder", "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "form-control", "w-90", 3, "dir", "ngModel", "placeholder", "ngModelChange"], ["mat-footer-cell", "", "colspan", "7"], [1, "float-left", 3, "dir", "length", "pageSize", "pageSizeOptions"], ["mat-footer-cell", "", "colspan", "3"], ["mat-footer-cell", "", "colspan", "4", 1, "pl-3"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function ExpenseReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, ExpenseReportComponent_div_7_Template, 5, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "form", 7)(11, "div", 5)(12, "div", 8)(13, "div", 9)(14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "owl-date-time", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 8)(22, "div", 9)(23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "owl-date-time", 12, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 17)(31, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExpenseReportComponent_Template_button_click_31_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExpenseReportComponent_Template_button_click_35_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ExpenseReportComponent_Template_button_click_39_listener() { return ctx.onDownloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 5)(44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, ExpenseReportComponent_div_45_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "div", 5)(47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](48, ExpenseReportComponent_div_48_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](49, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "div", 27)(51, "table", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](52, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](53, ExpenseReportComponent_th_53_Template, 1, 0, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](54, ExpenseReportComponent_td_54_Template, 9, 4, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](55, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](56, ExpenseReportComponent_th_56_Template, 3, 3, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](57, ExpenseReportComponent_td_57_Template, 3, 4, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](58, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](59, ExpenseReportComponent_th_59_Template, 3, 3, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](60, ExpenseReportComponent_td_60_Template, 3, 4, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](61, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](62, ExpenseReportComponent_th_62_Template, 3, 3, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](63, ExpenseReportComponent_td_63_Template, 3, 3, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](64, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](65, ExpenseReportComponent_th_65_Template, 3, 3, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](66, ExpenseReportComponent_td_66_Template, 2, 1, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](67, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](68, ExpenseReportComponent_th_68_Template, 3, 3, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](69, ExpenseReportComponent_td_69_Template, 2, 1, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](70, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](71, ExpenseReportComponent_th_71_Template, 3, 3, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](72, ExpenseReportComponent_td_72_Template, 2, 2, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](73, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](74, ExpenseReportComponent_th_74_Template, 1, 0, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](75, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](76, ExpenseReportComponent_th_76_Template, 1, 0, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](77, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](78, ExpenseReportComponent_th_78_Template, 1, 0, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](79, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](80, ExpenseReportComponent_th_80_Template, 1, 0, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](81, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](82, ExpenseReportComponent_th_82_Template, 3, 4, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](83, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](84, ExpenseReportComponent_th_84_Template, 7, 9, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](85, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](86, ExpenseReportComponent_th_86_Template, 7, 9, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](87, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](88, ExpenseReportComponent_td_88_Template, 2, 5, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](89, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](90, ExpenseReportComponent_td_90_Template, 4, 3, "td", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](91, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](92, ExpenseReportComponent_td_92_Template, 3, 3, "td", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](93, ExpenseReportComponent_tr_93_Template, 6, 3, "tr", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](94, ExpenseReportComponent_tr_94_Template, 1, 0, "tr", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](95, ExpenseReportComponent_tr_95_Template, 1, 0, "tr", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](96, ExpenseReportComponent_tr_96_Template, 1, 0, "tr", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](97, ExpenseReportComponent_tr_97_Template, 1, 0, "tr", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](98, ExpenseReportComponent_tr_98_Template, 1, 0, "tr", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](20);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 27, "EXPENSE_LIST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hasClaim", "expense_add_expense");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 29, "FROM_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 31, "FROM_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r1)("owlDateTime", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](25, 33, "TO_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](27, 35, "TO_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r2)("owlDateTime", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](34, 37, "SEARCH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](38, 39, "CLEAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](42, 41, "DOWNLOAD_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.searchForm.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](49, 43, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](45, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matFooterRowDef", ctx.totalAmountDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLink, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_12__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlName, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinner, _angular_material_select__WEBPACK_IMPORTED_MODULE_29__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatOption, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatNoDataRow, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_32__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButton, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_35__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_35__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_35__.OwlDateTimeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_6__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 33138:
/*!*********************************************************************!*\
  !*** ./src/app/reports/expense-report/expense-report.datasource.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseReportDataSource": () => (/* binding */ ExpenseReportDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class ExpenseReportDataSource {
    constructor(expenseService) {
        this.expenseService = expenseService;
        this._expenseSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this._responseHeaderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.loading$ = this.loadingSubject.asObservable();
        this._count = 0;
        this._totalAmount = 0;
        this.responseHeaderSubject$ = this._responseHeaderSubject$.asObservable();
    }
    get count() {
        return this._count;
    }
    get totalAmount() {
        return this._totalAmount;
    }
    connect() {
        this.sub$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        return this._expenseSubject$.asObservable();
    }
    disconnect() {
        this._expenseSubject$.complete();
        this.loadingSubject.complete();
        this.sub$.unsubscribe();
    }
    loadData(expenseResource) {
        this.loadingSubject.next(true);
        this.sub$ = this.expenseService.getExpenses(expenseResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject.next(false)))
            .subscribe((resp) => {
            const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
            this._responseHeaderSubject$.next(paginationParam);
            const inquiries = [...resp.body];
            this._count = inquiries.length;
            this._totalAmount = paginationParam.totalAmount;
            this._expenseSubject$.next(inquiries);
        });
    }
}


/***/ }),

/***/ 56997:
/*!*****************************************************************!*\
  !*** ./src/app/reports/expense-report/expense-report.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpenseReportModule": () => (/* binding */ ExpenseReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _expense_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expense-report-routing.module */ 28093);
/* harmony import */ var _expense_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense-report.component */ 95478);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


















class ExpenseReportModule {
}
ExpenseReportModule.ɵfac = function ExpenseReportModule_Factory(t) { return new (t || ExpenseReportModule)(); };
ExpenseReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ExpenseReportModule });
ExpenseReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _expense_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpenseReportRoutingModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_17__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_17__.OwlNativeDateTimeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ExpenseReportModule, { declarations: [_expense_report_component__WEBPACK_IMPORTED_MODULE_1__.ExpenseReportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _expense_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpenseReportRoutingModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatNativeDateModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__.MatProgressSpinnerModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_17__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_17__.OwlNativeDateTimeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_core_domain-classes_resource-parameter_ts-src_app_reports_expense-report_expense-repo-b1ae5e.js.map