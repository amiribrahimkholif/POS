"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_core_domain-classes_resource-parameter_ts-src_app_reminder_reminder_module_ts"],{

/***/ 12851:
/*!*******************************************************!*\
  !*** ./src/app/core/domain-classes/dayOfWeek.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DayOfWeek": () => (/* binding */ DayOfWeek)
/* harmony export */ });
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["Sunday"] = 0] = "Sunday";
    DayOfWeek[DayOfWeek["Monday"] = 1] = "Monday";
    DayOfWeek[DayOfWeek["Tuesday"] = 2] = "Tuesday";
    DayOfWeek[DayOfWeek["Wednesday"] = 3] = "Wednesday";
    DayOfWeek[DayOfWeek["Thursday"] = 4] = "Thursday";
    DayOfWeek[DayOfWeek["Friday"] = 5] = "Friday";
    DayOfWeek[DayOfWeek["Saturday"] = 6] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));


/***/ }),

/***/ 44598:
/*!*******************************************************!*\
  !*** ./src/app/core/domain-classes/frequency.enum.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Frequency": () => (/* binding */ Frequency)
/* harmony export */ });
var Frequency;
(function (Frequency) {
    Frequency[Frequency["Daily"] = 0] = "Daily";
    Frequency[Frequency["Weekly"] = 1] = "Weekly";
    Frequency[Frequency["Monthly"] = 2] = "Monthly";
    Frequency[Frequency["Quarterly"] = 3] = "Quarterly";
    Frequency[Frequency["HalfYearly"] = 4] = "HalfYearly";
    Frequency[Frequency["Yearly"] = 5] = "Yearly";
})(Frequency || (Frequency = {}));


/***/ }),

/***/ 71357:
/*!*****************************************************!*\
  !*** ./src/app/core/domain-classes/quarter.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quarter": () => (/* binding */ Quarter)
/* harmony export */ });
var Quarter;
(function (Quarter) {
    Quarter[Quarter["Quarter1"] = 0] = "Quarter1";
    Quarter[Quarter["Quarter2"] = 1] = "Quarter2";
    Quarter[Quarter["Quarter3"] = 2] = "Quarter3";
    Quarter[Quarter["Quarter4"] = 3] = "Quarter4";
})(Quarter || (Quarter = {}));


/***/ }),

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

/***/ 86279:
/*!*****************************************************************!*\
  !*** ./src/app/reminder/add-reminder/add-reminder.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReminderComponent": () => (/* binding */ AddReminderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _core_domain_classes_frequency_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/frequency.enum */ 44598);
/* harmony import */ var _core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/domain-classes/dayOfWeek.enum */ 12851);
/* harmony import */ var _core_domain_classes_quarter_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/domain-classes/quarter.enum */ 71357);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reminder.service */ 53037);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






















function AddReminderComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "SUBJECT_IS_REQUIRED"), " ");
} }
function AddReminderComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddReminderComponent_div_16_div_1_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.reminderForm.get("subject").errors == null ? null : ctx_r0.reminderForm.get("subject").errors.required);
} }
function AddReminderComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "MESSAGE_IS_REQUIRED"), " ");
} }
function AddReminderComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddReminderComponent_div_23_div_1_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.reminderForm.get("message").errors == null ? null : ctx_r1.reminderForm.get("message").errors.required);
} }
function AddReminderComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r2.selectedUsers[0].firstName, " ", ctx_r2.selectedUsers[0].lastName, " ");
} }
function AddReminderComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" (+", ctx_r3.selectedUsers.length - 1, " ", ctx_r3.selectedUsers.length === 2 ? "other" : "others", ") ");
} }
function AddReminderComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r14 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx_r4.langDir)("value", user_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", user_r14.firstName, " ", user_r14.lastName, "");
} }
function AddReminderComponent_div_40_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frequencyItem_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", frequencyItem_r17 == null ? null : frequencyItem_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", frequencyItem_r17 == null ? null : frequencyItem_r17.name, " ");
} }
function AddReminderComponent_div_40_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "FREQUENCY_IS_REQUIRED"), " ");
} }
function AddReminderComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "div", 32)(2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddReminderComponent_div_40_Template_select_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.onFrequencyChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AddReminderComponent_div_40_option_9_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AddReminderComponent_div_40_div_10_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, "FREQUENCY"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("--", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 6, "NONE"), "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.reminderFrequencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.reminderForm.get("frequency").errors == null ? null : ctx_r5.reminderForm.get("frequency").errors.required);
} }
function AddReminderComponent_div_41_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-checkbox", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dailyReminder_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", dailyReminder_r25.controls["name"].value, " ");
} }
function AddReminderComponent_div_41_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40)(1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddReminderComponent_div_41_div_2_div_5_Template, 4, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "WEEK_DAYS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r20.dailyRemindersArray.controls);
} }
function AddReminderComponent_div_41_div_3_mat_radio_button_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-radio-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", day_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](day_r28.name);
} }
function AddReminderComponent_div_41_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40)(1, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 48)(5, "mat-radio-group", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddReminderComponent_div_41_div_3_mat_radio_button_6_Template, 2, 2, "mat-radio-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "WEEK_DAY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r21.dayOfWeek);
} }
function AddReminderComponent_div_41_div_4_tr_16_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mon_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", mon_r36.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", mon_r36.name, " ");
} }
function AddReminderComponent_div_41_div_4_tr_16_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", day_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", day_r37, " ");
} }
function AddReminderComponent_div_41_div_4_tr_16_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "PLEASE_SELECT_VALID_DAY"), " ");
} }
function AddReminderComponent_div_41_div_4_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td")(5, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddReminderComponent_div_41_div_4_tr_16_Template_select_change_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const quarterlyReminder_r31 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r38.onDateChange(quarterlyReminder_r31)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddReminderComponent_div_41_div_4_tr_16_option_6_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td")(8, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddReminderComponent_div_41_div_4_tr_16_Template_select_change_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const quarterlyReminder_r31 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r40.onDateChange(quarterlyReminder_r31)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AddReminderComponent_div_41_div_4_tr_16_option_9_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AddReminderComponent_div_41_div_4_tr_16_div_10_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quarterlyReminder_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](quarterlyReminder_r31.controls["name"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", quarterlyReminder_r31.controls["monthValues"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r30.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", quarterlyReminder_r31.get("day").touched && quarterlyReminder_r31.hasError("invalidDate"));
} }
function AddReminderComponent_div_41_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40)(1, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 53)(5, "table", 54)(6, "thead")(7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "tbody", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, AddReminderComponent_div_41_div_4_tr_16_Template, 11, 5, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "SELECT_QUARTER_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 6, "MONTH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 8, "DAY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r22.quarterlyRemindersArray.controls);
} }
function AddReminderComponent_div_41_div_5_tr_16_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mon_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", mon_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", mon_r47.name, " ");
} }
function AddReminderComponent_div_41_div_5_tr_16_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", day_r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", day_r48, " ");
} }
function AddReminderComponent_div_41_div_5_tr_16_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "PLEASE_SELECT_VALID_DAY"), " ");
} }
function AddReminderComponent_div_41_div_5_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](1, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "td")(5, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddReminderComponent_div_41_div_5_tr_16_Template_select_change_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50); const halfYearlyReminder_r42 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.onDateChange(halfYearlyReminder_r42)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddReminderComponent_div_41_div_5_tr_16_option_6_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td")(8, "select", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddReminderComponent_div_41_div_5_tr_16_Template_select_change_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50); const halfYearlyReminder_r42 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r51.onDateChange(halfYearlyReminder_r42)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, AddReminderComponent_div_41_div_5_tr_16_option_9_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AddReminderComponent_div_41_div_5_tr_16_div_10_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const halfYearlyReminder_r42 = ctx.$implicit;
    const i_r43 = ctx.index;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](halfYearlyReminder_r42.controls["name"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", halfYearlyReminder_r42.controls["monthValues"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r41.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", halfYearlyReminder_r42.get("day").touched && halfYearlyReminder_r42.hasError("invalidDate"));
} }
function AddReminderComponent_div_41_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40)(1, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 60)(5, "table", 54)(6, "thead")(7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "tbody", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, AddReminderComponent_div_41_div_5_tr_16_Template, 11, 5, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "SELECT_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 6, "MONTH"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 8, "DAY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r23.halfYearlyRemindersArray.controls);
} }
function AddReminderComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 4)(1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AddReminderComponent_div_41_div_2_Template, 6, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, AddReminderComponent_div_41_div_3_Template, 7, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, AddReminderComponent_div_41_div_4_Template, 17, 10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddReminderComponent_div_41_div_5_Template, 17, 10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.reminderForm.get("frequency").value == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.reminderForm.get("frequency").value == "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.reminderForm.get("frequency").value == "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.reminderForm.get("frequency").value == "4");
} }
function AddReminderComponent_div_43_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "DATE_IS_REQUIRED"), " ");
} }
function AddReminderComponent_div_43_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddReminderComponent_div_43_div_5_div_1_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r52.reminderForm.get("startDate").errors == null ? null : ctx_r52.reminderForm.get("startDate").errors.required);
} }
function AddReminderComponent_div_43_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "START_DATE_SHOULD_BE_GREATER_THEN_CURRENT_DATE_TIME"), " ");
} }
function AddReminderComponent_div_43_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddReminderComponent_div_43_div_6_div_1_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r53.reminderForm.get("startDate").errors == null ? null : ctx_r53.reminderForm.get("startDate").errors.owlDateTimeMin);
} }
function AddReminderComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddReminderComponent_div_43_div_5_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddReminderComponent_div_43_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "owl-date-time", null, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 6, "REMINDER_DATE"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("owlDateTimeTrigger", _r54)("min", ctx_r7.minDate)("owlDateTime", _r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.reminderForm.get("startDate").touched && ctx_r7.reminderForm.get("startDate").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.reminderForm.get("startDate").touched && ctx_r7.reminderForm.get("startDate").errors);
} }
function AddReminderComponent_div_44_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "START_DATE_IS_REQUIRED"), " ");
} }
function AddReminderComponent_div_44_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddReminderComponent_div_44_div_5_div_1_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r57.reminderForm.get("startDate").errors == null ? null : ctx_r57.reminderForm.get("startDate").errors.required);
} }
function AddReminderComponent_div_44_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "START_DATE_SHOULD_BE_GREATER_THEN_CURRENT_DATE_TIME"), " ");
} }
function AddReminderComponent_div_44_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddReminderComponent_div_44_div_6_div_1_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r58.reminderForm.get("startDate").errors == null ? null : ctx_r58.reminderForm.get("startDate").errors.owlDateTimeMin);
} }
function AddReminderComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, AddReminderComponent_div_44_div_5_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, AddReminderComponent_div_44_div_6_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "owl-date-time", null, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](8);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 6, "REMINDER_START_DATE"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("owlDateTimeTrigger", _r59)("min", ctx_r8.minDate)("owlDateTime", _r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.reminderForm.get("startDate").touched && ctx_r8.reminderForm.get("startDate").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.reminderForm.get("startDate").touched && ctx_r8.reminderForm.get("startDate").errors);
} }
function AddReminderComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 67)(5, "owl-date-time", null, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "REMINDER_END_DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("owlDateTimeTrigger", _r62)("owlDateTime", _r62);
} }
function AddReminderComponent_button_47_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AddReminderComponent_button_47_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r63.createReminder()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "SAVE"), "");
} }
function AddReminderComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["REM_ADD_REMINDER", "REM_UPDATE_REMINDER"]; };
const _c1 = function () { return ["/reminders"]; };
class AddReminderComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(fb, reminderService, commonService, toastrService, route, activatedRoute, translationService) {
        super(translationService);
        this.fb = fb;
        this.reminderService = reminderService;
        this.commonService = commonService;
        this.toastrService = toastrService;
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.translationService = translationService;
        this.reminderFrequencies = [];
        this.minDate = new Date();
        this.users = [];
        this.selectedUsers = [];
        this.isLoading = false;
        this.dayOfWeek = [{
                id: 0,
                name: 'Sunday'
            }, {
                id: 1,
                name: 'Monday'
            }, {
                id: 2,
                name: 'Tuesday'
            }, {
                id: 3,
                name: 'Wednesday'
            }, {
                id: 4,
                name: 'Thursday'
            }, {
                id: 5,
                name: 'Friday'
            }, {
                id: 6,
                name: 'Saturday'
            }];
        this.months = [
            {
                id: 1,
                name: 'January'
            }, {
                id: 2,
                name: 'February'
            }, {
                id: 3,
                name: 'March'
            }, {
                id: 4,
                name: 'April'
            }, {
                id: 5,
                name: 'May'
            }, {
                id: 6,
                name: 'June'
            }, {
                id: 7,
                name: 'July'
            }, {
                id: 8,
                name: 'August'
            }, {
                id: 9,
                name: 'September'
            }, {
                id: 10,
                name: 'October'
            }, {
                id: 11,
                name: 'November'
            }, {
                id: 12,
                name: 'December'
            }
        ];
        this.days = [];
        this.getLangDir();
    }
    get dailyRemindersArray() {
        return this.reminderForm.get('dailyReminders');
    }
    get quarterlyRemindersArray() {
        return this.reminderForm.get('quarterlyReminders');
    }
    get halfYearlyRemindersArray() {
        return this.reminderForm.get('halfYearlyReminders');
    }
    ngOnInit() {
        for (let i = 1; i <= 31; i++) {
            this.days.push(i);
        }
        this.getReminderFrequency();
        this.createReminderForm();
        this.sub$.sink = this.activatedRoute.data.subscribe((data) => {
            if (data.reminder) {
                this.reminder = Object.assign({}, data.reminder);
                this.reminderForm.patchValue(this.reminder);
                this.onFrequencyChange();
                this.reminderForm.patchValue(this.reminder);
                if (this.reminderForm.get('isRepeated').value) {
                    this.reminderForm.get('frequency').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
                }
            }
        });
        this.getUsers();
    }
    getReminderFrequency() {
        this.sub$.sink = this.commonService.getReminderFrequency()
            .subscribe(f => this.reminderFrequencies = [...f]);
    }
    createReminderForm() {
        var currentDate = new Date();
        this.reminderForm = this.fb.group({
            id: [''],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            frequency: [''],
            isRepeated: [false],
            isEmailNotification: [false],
            startDate: [currentDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            endDate: [null],
            dayOfWeek: [2]
        });
    }
    checkData(event) {
        if (event.checked) {
            this.reminderForm.get('frequency').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
        }
        else {
            this.reminderForm.get('frequency').setValidators([]);
        }
    }
    createReminder() {
        if (!this.reminderForm.valid) {
            this.reminderForm.markAllAsTouched();
            return;
        }
        let reminder = this.reminderForm.value;
        reminder.reminderUsers = this.selectedUsers.map(u => {
            return {
                reminderId: reminder.id,
                userId: u.id
            };
        });
        if (reminder.isRepeated) {
            reminder.frequencyId = "6";
        }
        if (!this.reminder) {
            this.isLoading = true;
            this.sub$.sink = this.reminderService.addReminder(reminder).subscribe(d => {
                this.toastrService.success(this.translationService.getValue('REMINDER_CREATED_SUCCESSFULLY'));
                this.route.navigate(['/reminders']);
                this.isLoading = false;
            }, () => this.isLoading = false);
        }
        else {
            if (reminder.dailyReminders) {
                reminder.dailyReminders = reminder.dailyReminders.map(c => {
                    c.reminderId = this.reminder.id;
                    return c;
                });
            }
            if (reminder.quarterlyReminders) {
                reminder.quarterlyReminders = reminder.quarterlyReminders.map(c => {
                    c.reminderId = this.reminder.id;
                    return c;
                });
            }
            if (reminder.halfYearlyReminders) {
                reminder.halfYearlyReminders = reminder.halfYearlyReminders.map(c => {
                    c.reminderId = this.reminder.id;
                    return c;
                });
            }
            this.isLoading = true;
            this.sub$.sink = this.reminderService.updateReminder(reminder).subscribe(d => {
                this.toastrService.success(this.translationService.getValue('REMINDER_UPDATED_SUCCESSFULLY'));
                this.route.navigate(['/reminders']);
                this.isLoading = false;
            }, () => this.isLoading = false);
        }
    }
    getUsers() {
        this.sub$.sink = this.commonService.getAllUsers().subscribe((u) => {
            this.users = u;
            if (this.reminder) {
                const reminderUsers = this.reminder.reminderUsers.map(c => c.userId);
                this.selectedUsers = this.users.filter(c => reminderUsers.indexOf(c.id) >= 0);
            }
        });
    }
    onFrequencyChange() {
        let frequency = this.reminderForm.get('frequency').value;
        frequency = frequency == 0 ? '0' : frequency;
        if (frequency == _core_domain_classes_frequency_enum__WEBPACK_IMPORTED_MODULE_1__.Frequency.Daily.toString()) {
            this.removeQuarterlyReminders();
            this.removeHalfYearlyReminders();
            this.addDailReminders();
            this.reminderForm.get('dayOfWeek').setValue('');
        }
        else if (frequency == _core_domain_classes_frequency_enum__WEBPACK_IMPORTED_MODULE_1__.Frequency.Weekly.toString()) {
            this.removeDailReminders();
            this.removeQuarterlyReminders();
            this.removeHalfYearlyReminders();
            this.reminderForm.get('dayOfWeek').setValue(2);
        }
        else if (frequency == _core_domain_classes_frequency_enum__WEBPACK_IMPORTED_MODULE_1__.Frequency.Quarterly.toString()) {
            this.removeDailReminders();
            this.removeHalfYearlyReminders();
            this.addQuarterlyReminders();
            this.reminderForm.get('dayOfWeek').setValue('');
        }
        else if (frequency == _core_domain_classes_frequency_enum__WEBPACK_IMPORTED_MODULE_1__.Frequency.HalfYearly.toString()) {
            this.removeDailReminders();
            this.removeQuarterlyReminders();
            this.addHalfYearlyReminders();
            this.reminderForm.get('dayOfWeek').setValue('');
        }
        else {
            this.removeDailReminders();
            this.removeQuarterlyReminders();
            this.removeHalfYearlyReminders();
            this.reminderForm.get('dayOfWeek').setValue('');
        }
    }
    addDailReminders() {
        if (!this.reminderForm.contains('dailyReminders')) {
            var formArray = this.fb.array([]);
            formArray.push(this.createDailyReminderFormGroup(_core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__.DayOfWeek.Sunday));
            formArray.push(this.createDailyReminderFormGroup(_core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__.DayOfWeek.Monday));
            formArray.push(this.createDailyReminderFormGroup(_core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__.DayOfWeek.Tuesday));
            formArray.push(this.createDailyReminderFormGroup(_core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__.DayOfWeek.Wednesday));
            formArray.push(this.createDailyReminderFormGroup(_core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__.DayOfWeek.Thursday));
            formArray.push(this.createDailyReminderFormGroup(_core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__.DayOfWeek.Friday));
            formArray.push(this.createDailyReminderFormGroup(_core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__.DayOfWeek.Saturday));
            this.reminderForm.addControl('dailyReminders', formArray);
        }
    }
    addQuarterlyReminders() {
        if (!this.reminderForm.contains('quarterlyReminders')) {
            var formArray = this.fb.array([]);
            var firstQuaterMonths = this.months.filter(c => [1, 2, 3].indexOf(c.id) >= 0);
            var secondQuaterMonths = this.months.filter(c => [4, 5, 6].indexOf(c.id) >= 0);
            var thirdQuaterMonths = this.months.filter(c => [7, 8, 9].indexOf(c.id) >= 0);
            var forthQuaterMonths = this.months.filter(c => [10, 11, 12].indexOf(c.id) >= 0);
            formArray.push(this.createQuarterlyReminderFormGroup(_core_domain_classes_quarter_enum__WEBPACK_IMPORTED_MODULE_3__.Quarter.Quarter1, "Jan - Mar", firstQuaterMonths));
            formArray.push(this.createQuarterlyReminderFormGroup(_core_domain_classes_quarter_enum__WEBPACK_IMPORTED_MODULE_3__.Quarter.Quarter2, "Apr - Jun", secondQuaterMonths));
            formArray.push(this.createQuarterlyReminderFormGroup(_core_domain_classes_quarter_enum__WEBPACK_IMPORTED_MODULE_3__.Quarter.Quarter3, "Jul - Sept", thirdQuaterMonths));
            formArray.push(this.createQuarterlyReminderFormGroup(_core_domain_classes_quarter_enum__WEBPACK_IMPORTED_MODULE_3__.Quarter.Quarter4, "Oct - Dec", forthQuaterMonths));
            this.reminderForm.addControl('quarterlyReminders', formArray);
        }
    }
    addHalfYearlyReminders() {
        if (!this.reminderForm.contains('halfYearlyReminders')) {
            var formArray = this.fb.array([]);
            var firstQuaterMonths = this.months.filter(c => [1, 2, 3, 4, 5, 6].indexOf(c.id) >= 0);
            var secondQuaterMonths = this.months.filter(c => [7, 8, 9, 10, 11, 13].indexOf(c.id) >= 0);
            formArray.push(this.createHalfYearlyReminderFormGroup(_core_domain_classes_quarter_enum__WEBPACK_IMPORTED_MODULE_3__.Quarter.Quarter1, "Jan - Jun", firstQuaterMonths));
            formArray.push(this.createHalfYearlyReminderFormGroup(_core_domain_classes_quarter_enum__WEBPACK_IMPORTED_MODULE_3__.Quarter.Quarter2, "Jul - Dec", secondQuaterMonths));
            this.reminderForm.addControl('halfYearlyReminders', formArray);
        }
    }
    removeDailReminders() {
        if (this.reminderForm.contains('dailyReminders')) {
            this.reminderForm.removeControl('dailyReminders');
        }
    }
    removeQuarterlyReminders() {
        if (this.reminderForm.contains('quarterlyReminders')) {
            this.reminderForm.removeControl('quarterlyReminders');
        }
    }
    removeHalfYearlyReminders() {
        if (this.reminderForm.contains('halfYearlyReminders')) {
            this.reminderForm.removeControl('halfYearlyReminders');
        }
    }
    createDailyReminderFormGroup(dayOfWeek) {
        return this.fb.group({
            id: [''],
            reminderId: [''],
            dayOfWeek: [dayOfWeek],
            isActive: [true],
            name: [_core_domain_classes_dayOfWeek_enum__WEBPACK_IMPORTED_MODULE_2__.DayOfWeek[dayOfWeek]]
        });
    }
    createQuarterlyReminderFormGroup(quater, name, monthValues) {
        return this.fb.group({
            id: [''],
            reminderId: [''],
            quarter: [quater],
            day: [this.getCurrentDay()],
            month: [monthValues[0]],
            name: [name],
            monthValues: [monthValues]
        });
    }
    createHalfYearlyReminderFormGroup(quater, name, monthValues) {
        return this.fb.group({
            id: [''],
            reminderId: [''],
            quarter: [quater],
            day: [this.getCurrentDay()],
            month: [monthValues[0]],
            name: [name],
            monthValues: [monthValues]
        });
    }
    getCurrentDay() {
        return new Date().getDate();
    }
    onDateChange(formGrouup) {
        const day = formGrouup.get('day').value;
        const month = formGrouup.get('month').value;
        var daysInMonth = new Date(new Date().getFullYear(), Number.parseInt(month), 0).getDate();
        if (day > daysInMonth) {
            formGrouup.setErrors({
                'invalidDate': 'Invalid Date'
            });
            formGrouup.markAllAsTouched();
        }
    }
}
AddReminderComponent.ɵfac = function AddReminderComponent_Factory(t) { return new (t || AddReminderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_reminder_service__WEBPACK_IMPORTED_MODULE_4__.ReminderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.TranslationService)); };
AddReminderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddReminderComponent, selectors: [["app-add-reminder"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 53, vars: 42, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [1, "row"], [1, "col-sm-12"], [3, "formGroup"], [1, "form-group", "col-md-12"], ["for", "subject", 1, "text-danger"], ["formControlName", "subject", "type", "text", "id", "subject", 1, "form-control"], [4, "ngIf"], ["for", "message", 1, "text-danger"], ["formControlName", "message", "id", "message", "cols", "30", 1, "form-control"], [1, "col-md-2"], ["color", "primary", "formControlName", "isRepeated", 3, "dir", "change"], ["color", "primary", "formControlName", "isEmailNotification", 3, "dir"], [1, "col-md-4"], ["multiple", "", 1, "form-control", 3, "dir", "placeholder", "value", "valueChange"], [3, "dir"], ["class", "example-additional-selection", 4, "ngIf"], [3, "dir", "value", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["class", "form-group col-md-6", 4, "ngIf"], [1, "mt-2", "col-md-12"], ["type", "submit", "class", "btn btn-success btn-sm m-right-10", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "routerLink"], [1, "fas", "fa-times-circle"], ["class", "loading-shade", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "example-additional-selection"], [3, "dir", "value"], [1, "form-group", "col-md-6"], ["for", "frequency", 1, "text-danger"], ["formControlName", "frequency", "id", "frequency", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-md-12"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "weekDays"], ["id", "weekDays", 1, "row"], ["class", "col-sm-auto mr-1", "formArrayName", "dailyReminders", 4, "ngFor", "ngForOf"], ["formArrayName", "dailyReminders", 1, "col-sm-auto", "mr-1"], [3, "formGroupName"], ["color", "primary", "formControlName", "isActive", 1, "mr-1"], ["for", "weekDay"], ["id", "weekDay"], ["formControlName", "dayOfWeek"], ["class", "mr-2", "color", "primary", 3, "value", 4, "ngFor", "ngForOf"], ["color", "primary", 1, "mr-2", 3, "value"], ["for", "Quarterly"], ["id", "Quarterly", 1, "row"], [1, "table"], ["formArrayName", "quarterlyReminders"], [4, "ngFor", "ngForOf"], ["formControlName", "month", 1, "form-control", 3, "change"], ["formControlName", "day", 1, "form-control", 3, "change"], ["for", "HalfYearly"], ["id", "HalfYearly", 1, "row"], ["formArrayName", "halfYearlyReminders"], ["formControlName", "startDate", "placeholder", "Date", 1, "form-control", 3, "owlDateTimeTrigger", "min", "owlDateTime"], ["dt2", ""], ["formControlName", "startDate", "placeholder", "Start Date", 1, "form-control", 3, "owlDateTimeTrigger", "min", "owlDateTime"], ["dt3", ""], ["for", "frequency"], ["formControlName", "endDate", "placeholder", "End Date", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime"], ["dt4", ""], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], [1, "loading-shade"]], template: function AddReminderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "form", 6)(10, "div", 4)(11, "div", 7)(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, AddReminderComponent_div_16_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 4)(18, "div", 7)(19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, AddReminderComponent_div_23_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 4)(25, "div", 13)(26, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function AddReminderComponent_Template_mat_checkbox_change_26_listener($event) { return ctx.checkData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 13)(30, "mat-checkbox", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 16)(34, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function AddReminderComponent_Template_mat_select_valueChange_34_listener($event) { return ctx.selectedUsers = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-select-trigger", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, AddReminderComponent_span_37_Template, 2, 2, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, AddReminderComponent_span_38_Template, 2, 2, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, AddReminderComponent_mat_option_39_Template, 2, 4, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, AddReminderComponent_div_40_Template, 11, 8, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, AddReminderComponent_div_41_Template, 6, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, AddReminderComponent_div_43_Template, 9, 8, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, AddReminderComponent_div_44_Template, 9, 8, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, AddReminderComponent_div_45_Template, 7, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, AddReminderComponent_button_47_Template, 4, 3, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, AddReminderComponent_div_52_Template, 2, 0, "div", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 26, "MANAGE_REMINDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.reminderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 28, "SUBJECT"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.reminderForm.get("subject").touched && ctx.reminderForm.get("subject").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](21, 30, "MESSAGE"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.reminderForm.get("message").touched && ctx.reminderForm.get("message").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 32, "REPEATE_REMINDER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 34, "SEND_EMAIL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 36, "SELECT_USERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir)("value", ctx.selectedUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedUsers.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedUsers.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.reminderForm.get("isRepeated").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.reminderForm.get("isRepeated").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.reminderForm.get("isRepeated").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.reminderForm.get("isRepeated").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.reminderForm.get("isRepeated").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](40, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](41, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 38, "CANCEL"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_13__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_13__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_13__.OwlDateTimeComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__.MatProgressSpinner, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Dir, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_7__.HasClaimDirective, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__.MatRadioButton, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVtaW5kZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 842:
/*!*******************************************************************!*\
  !*** ./src/app/reminder/add-reminder/reminder-detail.resolver.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderDetailResolverService": () => (/* binding */ ReminderDetailResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _reminder_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reminder.service */ 53037);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);






class ReminderDetailResolverService {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        if (id === 'add') {
            return null;
        }
        return this.cs.getReminder(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((reminder) => {
            if (reminder) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(reminder);
            }
            else {
                this.router.navigate(['/reminders']);
                return null;
            }
        }));
    }
}
ReminderDetailResolverService.ɵfac = function ReminderDetailResolverService_Factory(t) { return new (t || ReminderDetailResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_reminder_service__WEBPACK_IMPORTED_MODULE_0__.ReminderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ReminderDetailResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ReminderDetailResolverService, factory: ReminderDetailResolverService.ɵfac });


/***/ }),

/***/ 89160:
/*!***************************************************************!*\
  !*** ./src/app/reminder/reminder-list/reminder-datasource.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderDataSource": () => (/* binding */ ReminderDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class ReminderDataSource {
    constructor(reminderService) {
        this.reminderService = reminderService;
        this._reminderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
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
        return this._reminderSubject$.asObservable();
    }
    disconnect() {
        this._reminderSubject$.complete();
        this.loadingSubject.complete();
        this.sub$.unsubscribe();
    }
    loadData(reminderResource) {
        this.loadingSubject.next(true);
        this.sub$ = this.reminderService.getReminders(reminderResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject.next(false)))
            .subscribe((resp) => {
            if (resp && resp.headers.get('X-Pagination')) {
                const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
                this._responseHeaderSubject$.next(paginationParam);
            }
            if (resp) {
                const inquiries = [...resp.body];
                this._count = inquiries.length;
                this._reminderSubject$.next(inquiries);
            }
        });
    }
}


/***/ }),

/***/ 75795:
/*!*******************************************************************!*\
  !*** ./src/app/reminder/reminder-list/reminder-frequency.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderFrequencyPipe": () => (/* binding */ ReminderFrequencyPipe)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_reminder_frequency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/reminder-frequency */ 32760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ReminderFrequencyPipe {
    transform(value, ...args) {
        const reminderFrequency = _core_domain_classes_reminder_frequency__WEBPACK_IMPORTED_MODULE_0__.reminderFrequencies.find(c => c.id == value);
        if (reminderFrequency) {
            return reminderFrequency.name;
        }
        return '';
    }
}
ReminderFrequencyPipe.ɵfac = function ReminderFrequencyPipe_Factory(t) { return new (t || ReminderFrequencyPipe)(); };
ReminderFrequencyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "frequency", type: ReminderFrequencyPipe, pure: true });


/***/ }),

/***/ 59493:
/*!*******************************************************************!*\
  !*** ./src/app/reminder/reminder-list/reminder-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderListComponent": () => (/* binding */ ReminderListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_reminder_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/reminder-resource-parameter */ 24702);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _add_reminder_add_reminder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-reminder/add-reminder.component */ 86279);
/* harmony import */ var _reminder_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reminder-datasource */ 89160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reminder.service */ 53037);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/truncate.pipe */ 52821);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _reminder_frequency_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reminder-frequency.pipe */ 75795);

































const _c0 = function () { return ["/reminders/add"]; };
function ReminderListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "ADD_REMINDER"), " ");
} }
function ReminderListComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 33);
} }
function ReminderListComponent_td_14_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 39)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matMenuTriggerFor", _r28);
} }
const _c1 = function (a1) { return ["/reminders/manage", a1]; };
function ReminderListComponent_td_14_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 40)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const reminder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c1, reminder_r26.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 2, "EDIT"));
} }
function ReminderListComponent_td_14_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ReminderListComponent_td_14_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34); const reminder_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r32.deleteReminder(reminder_r26)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 1, "DELETE"));
} }
const _c2 = function () { return ["REM_UPDATE_REMINDER", "REM_DELETE_REMINDER"]; };
function ReminderListComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ReminderListComponent_td_14_button_1_Template, 3, 1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-menu", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ReminderListComponent_td_14_button_4_Template, 6, 6, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ReminderListComponent_td_14_button_5_Template, 6, 3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hasClaim", "REM_UPDATE_REMINDER");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hasClaim", "REM_DELETE_REMINDER");
} }
function ReminderListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "START_DATE"), " ");
} }
function ReminderListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, reminder_r35.startDate, "short"), " ");
} }
function ReminderListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "END_DATE"), " ");
} }
function ReminderListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, reminder_r36.endDate, "short"), " ");
} }
function ReminderListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "SUBJECT"), " ");
} }
function ReminderListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "limitTo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, reminder_r37.subject, 100), " ");
} }
function ReminderListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "MESSAGE"), " ");
} }
function ReminderListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "limitTo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, reminder_r38.message, 150), " ");
} }
function ReminderListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "FREQUENCY"), " ");
} }
function ReminderListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, reminder_r39.frequency), " ");
} }
function ReminderListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 33);
} }
function ReminderListComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 33);
} }
function ReminderListComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 33);
} }
function ReminderListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 33)(1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ReminderListComponent_th_37_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r40.SubjectFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "SUBJECT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r16.SubjectFilter);
} }
function ReminderListComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 33)(1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ReminderListComponent_th_39_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r42.MessageFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "MESSAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r17.MessageFilter);
} }
function ReminderListComponent_th_41_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const frequency_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", frequency_r45 == null ? null : frequency_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", frequency_r45 == null ? null : frequency_r45.name, " ");
} }
function ReminderListComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 33)(1, "mat-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ReminderListComponent_th_41_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r46.FrequencyFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ReminderListComponent_th_41_mat_option_5_Template, 2, 2, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 4, "FREQUENCY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx_r18.langDir)("ngModel", ctx_r18.FrequencyFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r18.reminderFrequencies);
} }
const _c3 = function () { return [15, 20, 30]; };
function ReminderListComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-paginator", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx_r19.langDir)("length", ctx_r19.reminderResource.totalCount)("pageSize", ctx_r19.reminderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](4, _c3));
} }
function ReminderListComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr")(1, "td", 49)(2, "span", 50)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function ReminderListComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 51);
} }
function ReminderListComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 52);
} }
function ReminderListComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 51);
} }
function ReminderListComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 53);
} }
function ReminderListComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
const _c4 = function () { return ["action-search", "date-search", "enddate-search", "subject-search", "message-search", "frequency-search"]; };
class ReminderListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(reminderService, dialog, commonService, commonDialogService, toastrService, translationService) {
        super(translationService);
        this.reminderService = reminderService;
        this.dialog = dialog;
        this.commonService = commonService;
        this.commonDialogService = commonDialogService;
        this.toastrService = toastrService;
        this.translationService = translationService;
        this.reminders = [];
        this.reminderFrequencies = [];
        this.displayedColumns = ['action', 'startDate', 'endDate', 'subject', 'message', 'frequency'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.getLangDir();
        this.reminderResource = new _core_domain_classes_reminder_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ReminderResourceParameter();
        this.reminderResource.pageSize = 15;
        this.reminderResource.orderBy = 'startDate desc';
    }
    get SubjectFilter() {
        return this._subjectFilter;
    }
    set SubjectFilter(v) {
        this._subjectFilter = v;
        const subjectFilter = `subject:${v}`;
        this.filterObservable$.next(subjectFilter);
    }
    set FrequencyFilter(v) {
        if (v == '0') {
            this._frequencyFilter = '0';
        }
        else {
            this._frequencyFilter = v ? v.toString() : '';
        }
        const frequencyFilter = `frequency:${this._frequencyFilter}`;
        this.filterObservable$.next(frequencyFilter);
    }
    get FrequencyFilter() {
        return this._frequencyFilter;
    }
    get MessageFilter() {
        return this._messageFilter;
    }
    set MessageFilter(v) {
        this._messageFilter = v;
        const messageFilter = `message:${v}`;
        this.filterObservable$.next(messageFilter);
    }
    ngOnInit() {
        this.getReminderFrequency();
        this.dataSource = new _reminder_datasource__WEBPACK_IMPORTED_MODULE_3__.ReminderDataSource(this.reminderService);
        this.dataSource.loadData(this.reminderResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)())
            .subscribe((c) => {
            this.reminderResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split(':');
            if (strArray[0] === 'subject') {
                this.reminderResource.subject = escape(strArray[1]);
            }
            else if (strArray[0] === 'message') {
                this.reminderResource.message = strArray[1];
            }
            else if (strArray[0] === 'frequency') {
                this.reminderResource.frequency = strArray[1];
            }
            this.dataSource.loadData(this.reminderResource);
        });
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.reminderResource.pageSize = c.pageSize;
                this.reminderResource.skip = c.skip;
                this.reminderResource.totalCount = c.totalCount;
            }
        });
    }
    ngAfterViewInit() {
        this.sub$.sink = this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)((c) => {
            this.reminderResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.reminderResource.pageSize = this.paginator.pageSize;
            this.reminderResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.reminderResource);
        }))
            .subscribe();
    }
    getReminderFrequency() {
        this.sub$.sink = this.commonService.getReminderFrequency().subscribe(f => this.reminderFrequencies = [...f]);
    }
    editReminder(reminder) {
        this.isLoadingResults = true;
        this.sub$.sink = this.reminderService.getReminder(reminder.id).subscribe((reminder) => {
            this.isLoadingResults = false;
            let dialog = this.dialog.open(_add_reminder_add_reminder_component__WEBPACK_IMPORTED_MODULE_2__.AddReminderComponent, {
                width: '60vw',
                direction: this.langDir,
                data: Object.assign({}, {
                    frequencies: this.reminderFrequencies,
                    reminder
                })
            });
            this.sub$.sink = dialog.afterClosed().subscribe((isUpdated) => {
                if (isUpdated) {
                    this.dataSource.loadData(this.reminderResource);
                }
            });
        }, () => this.isLoadingResults = false);
    }
    deleteReminder(reminder) {
        this.sub$.sink = this.commonDialogService.deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')}?`).subscribe(isTrue => {
            if (isTrue) {
                this.isLoadingResults = true;
                this.reminderService.deleteReminder(reminder.id).subscribe(() => {
                    this.isLoadingResults = false;
                    this.toastrService.success(this.translationService.getValue('REMINDER_DELETED_SUCCESSFULLY'));
                    this.dataSource.loadData(this.reminderResource);
                }, () => this.isLoadingResults = false);
            }
        });
    }
}
ReminderListComponent.ɵfac = function ReminderListComponent_Factory(t) { return new (t || ReminderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_reminder_service__WEBPACK_IMPORTED_MODULE_4__.ReminderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_6__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_19__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__.TranslationService)); };
ReminderListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ReminderListComponent, selectors: [["app-reminder-list"]], viewQuery: function ReminderListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]], decls: 51, vars: 14, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], [1, "col-md-auto", "col-sm-auto", "col-auto"], ["class", "btn blue-btn btn-sm m-right-10", 3, "routerLink", 4, "hasClaim"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "grid-height"], ["mat-table", "", "matSort", "", "matSortActive", "createdDate", "matSortDirection", "desc", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "startDate"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "endDate"], ["matColumnDef", "subject"], ["matColumnDef", "message"], ["matColumnDef", "frequency"], ["matColumnDef", "action-search"], ["matColumnDef", "date-search"], ["matColumnDef", "enddate-search"], ["matColumnDef", "subject-search"], ["matColumnDef", "message-search"], ["matColumnDef", "frequency-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "6", 4, "matFooterCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["class", "loading-shade", 4, "ngIf"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor", 4, "hasClaim"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "ngModel", "ngModelChange"], [1, "form-control", 3, "dir", "placeholder", "ngModel", "ngModelChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-footer-cell", "", "colspan", "6"], [3, "dir", "length", "pageSize", "pageSizeOptions"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], [1, "loading-shade"]], template: function ReminderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, ReminderListComponent_button_8_Template, 4, 5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, ReminderListComponent_th_13_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, ReminderListComponent_td_14_Template, 6, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](15, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ReminderListComponent_th_16_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ReminderListComponent_td_17_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, ReminderListComponent_th_19_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, ReminderListComponent_td_20_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, ReminderListComponent_th_22_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, ReminderListComponent_td_23_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, ReminderListComponent_th_25_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, ReminderListComponent_td_26_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, ReminderListComponent_th_28_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, ReminderListComponent_td_29_Template, 3, 3, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](30, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, ReminderListComponent_th_31_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](32, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, ReminderListComponent_th_33_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](34, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, ReminderListComponent_th_35_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](36, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, ReminderListComponent_th_37_Template, 3, 4, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](38, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, ReminderListComponent_th_39_Template, 3, 4, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](40, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](41, ReminderListComponent_th_41_Template, 6, 6, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](42, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, ReminderListComponent_td_43_Template, 2, 5, "td", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, ReminderListComponent_tr_44_Template, 6, 3, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, ReminderListComponent_tr_45_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, ReminderListComponent_tr_46_Template, 1, 0, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](47, ReminderListComponent_tr_47_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](48, ReminderListComponent_tr_48_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](49, ReminderListComponent_div_49_Template, 2, 0, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](50, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 9, "REMINDERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hasClaim", "REM_ADD_REMINDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](13, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](50, 11, ctx.dataSource.loading$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterLink, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinner, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_8__.HasClaimDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__.MatMenuTrigger, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatNoDataRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_32__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe, _shared_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_9__.TruncatePipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_10__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe, _reminder_frequency_pipe__WEBPACK_IMPORTED_MODULE_11__.ReminderFrequencyPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1pbmRlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 18762:
/*!*****************************************************!*\
  !*** ./src/app/reminder/reminder-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderRoutingModule": () => (/* binding */ ReminderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _reminder_list_reminder_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reminder-list/reminder-list.component */ 59493);
/* harmony import */ var _add_reminder_add_reminder_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-reminder/add-reminder.component */ 86279);
/* harmony import */ var _add_reminder_reminder_detail_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-reminder/reminder-detail.resolver */ 842);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        component: _reminder_list_reminder_list_component__WEBPACK_IMPORTED_MODULE_0__.ReminderListComponent,
        data: { claimType: 'REM_VIEW_REMINDERS' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
    }, {
        path: 'add',
        component: _add_reminder_add_reminder_component__WEBPACK_IMPORTED_MODULE_1__.AddReminderComponent,
        data: { claimType: 'REM_ADD_REMINDER' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
    }, {
        path: 'manage/:id',
        resolve: { reminder: _add_reminder_reminder_detail_resolver__WEBPACK_IMPORTED_MODULE_2__.ReminderDetailResolverService },
        component: _add_reminder_add_reminder_component__WEBPACK_IMPORTED_MODULE_1__.AddReminderComponent,
        data: { claimType: 'REM_UPDATE_REMINDER' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
    }
];
class ReminderRoutingModule {
}
ReminderRoutingModule.ɵfac = function ReminderRoutingModule_Factory(t) { return new (t || ReminderRoutingModule)(); };
ReminderRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ReminderRoutingModule });
ReminderRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ReminderRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 78784:
/*!*********************************************!*\
  !*** ./src/app/reminder/reminder.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderModule": () => (/* binding */ ReminderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _reminder_list_reminder_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reminder-list/reminder-list.component */ 59493);
/* harmony import */ var _reminder_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reminder-routing.module */ 18762);
/* harmony import */ var _add_reminder_add_reminder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-reminder/add-reminder.component */ 86279);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _add_reminder_reminder_detail_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-reminder/reminder-detail.resolver */ 842);
/* harmony import */ var _reminder_list_reminder_frequency_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reminder-list/reminder-frequency.pipe */ 75795);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);

























class ReminderModule {
}
ReminderModule.ɵfac = function ReminderModule_Factory(t) { return new (t || ReminderModule)(); };
ReminderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ReminderModule });
ReminderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _add_reminder_reminder_detail_resolver__WEBPACK_IMPORTED_MODULE_4__.ReminderDetailResolverService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _reminder_routing_module__WEBPACK_IMPORTED_MODULE_1__.ReminderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__.OwlNativeDateTimeModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ReminderModule, { declarations: [_reminder_list_reminder_list_component__WEBPACK_IMPORTED_MODULE_0__.ReminderListComponent,
        _add_reminder_add_reminder_component__WEBPACK_IMPORTED_MODULE_2__.AddReminderComponent,
        _reminder_list_reminder_frequency_pipe__WEBPACK_IMPORTED_MODULE_5__.ReminderFrequencyPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _reminder_routing_module__WEBPACK_IMPORTED_MODULE_1__.ReminderRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__.OwlNativeDateTimeModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckboxModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__.MatSlideToggleModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTableModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__.MatButtonToggleModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule] }); })();


/***/ }),

/***/ 53037:
/*!**********************************************!*\
  !*** ./src/app/reminder/reminder.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderService": () => (/* binding */ ReminderService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);





class ReminderService {
    constructor(httpClient, commonHttpErrorService) {
        this.httpClient = httpClient;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    getReminders(resourceParams) {
        const url = 'reminder/GetReminders';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('Fields', resourceParams.fields ? resourceParams.fields : '')
            .set('OrderBy', resourceParams.orderBy ? resourceParams.orderBy : '')
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery ? resourceParams.searchQuery : '')
            .set('subject', resourceParams.subject ? resourceParams.subject : '')
            .set('message', resourceParams.message ? resourceParams.message : '')
            .set('frequency', resourceParams.frequency ? resourceParams.frequency : '');
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    addReminder(reminder) {
        const url = `reminder`;
        return this.httpClient.post(url, reminder)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    updateReminder(reminder) {
        const url = `reminder/${reminder.id}`;
        return this.httpClient.post(url, reminder)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    getReminder(id) {
        const url = `reminder/${id}`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
    deleteReminder(id) {
        const url = `reminder/${id}`;
        return this.httpClient.delete(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
}
ReminderService.ɵfac = function ReminderService_Factory(t) { return new (t || ReminderService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
ReminderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ReminderService, factory: ReminderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31959:
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/button-toggle.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS": () => (/* binding */ MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS),
/* harmony export */   "MAT_BUTTON_TOGGLE_GROUP": () => (/* binding */ MAT_BUTTON_TOGGLE_GROUP),
/* harmony export */   "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR": () => (/* binding */ MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR),
/* harmony export */   "MatButtonToggle": () => (/* binding */ MatButtonToggle),
/* harmony export */   "MatButtonToggleChange": () => (/* binding */ MatButtonToggleChange),
/* harmony export */   "MatButtonToggleGroup": () => (/* binding */ MatButtonToggleGroup),
/* harmony export */   "MatButtonToggleModule": () => (/* binding */ MatButtonToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 84128);








/**
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
 */

const _c0 = ["button"];
const _c1 = ["*"];
const MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to reference instances of `MatButtonToggleGroup`.
 * It serves as alternative token to the actual `MatButtonToggleGroup` class which
 * could cause unnecessary retention of the class and its component metadata.
 */

const MAT_BUTTON_TOGGLE_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatButtonToggleGroup');
/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */

const MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatButtonToggleGroup),
  multi: true
}; // Counter used to generate unique IDs.

let uniqueIdCounter = 0;
/** Change event object emitted by MatButtonToggle. */

class MatButtonToggleChange {
  constructor(
  /** The MatButtonToggle that emits the event. */
  source,
  /** The value assigned to the MatButtonToggle. */
  value) {
    this.source = source;
    this.value = value;
  }

}
/** Exclusive selection button toggle group that behaves like a radio-button group. */


class MatButtonToggleGroup {
  constructor(_changeDetector, defaultOptions) {
    this._changeDetector = _changeDetector;
    this._vertical = false;
    this._multiple = false;
    this._disabled = false;
    /**
     * The method to be called in order to update ngModel.
     * Now `ngModel` binding is not supported in multiple selection mode.
     */

    this._controlValueAccessorChangeFn = () => {};
    /** onTouch function registered via registerOnTouch (ControlValueAccessor). */


    this._onTouched = () => {};

    this._name = `mat-button-toggle-group-${uniqueIdCounter++}`;
    /**
     * Event that emits whenever the value of the group changes.
     * Used to facilitate two-way data binding.
     * @docs-private
     */

    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the group's value changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
  }
  /** `name` attribute for the underlying `input` element. */


  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;

    this._markButtonsForCheck();
  }
  /** Whether the toggle group is vertical. */


  get vertical() {
    return this._vertical;
  }

  set vertical(value) {
    this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }
  /** Value of the toggle group. */


  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];

    if (this.multiple) {
      return selected.map(toggle => toggle.value);
    }

    return selected[0] ? selected[0].value : undefined;
  }

  set value(newValue) {
    this._setSelectionByValue(newValue);

    this.valueChange.emit(this.value);
  }
  /** Selected button toggles in the group. */


  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */


  get multiple() {
    return this._multiple;
  }

  set multiple(value) {
    this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    this._markButtonsForCheck();
  }

  ngOnInit() {
    this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__.SelectionModel(this.multiple, undefined, false);
  }

  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter(toggle => toggle.checked));
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */


  writeValue(value) {
    this.value = value;

    this._changeDetector.markForCheck();
  } // Implemented as part of ControlValueAccessor.


  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  } // Implemented as part of ControlValueAccessor.


  registerOnTouched(fn) {
    this._onTouched = fn;
  } // Implemented as part of ControlValueAccessor.


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Dispatch change event with current selection and group value. */


  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);

    this._controlValueAccessorChangeFn(event.value);

    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */


  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    // Deselect the currently-selected toggle, if we're in single-selection
    // mode and the button being toggled isn't selected at the moment.
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }

    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    } // We need to defer in some cases in order to avoid "changed after checked errors", however
    // the side-effect is that we may end up updating the model value out of sequence in others
    // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.


    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */


  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */


  _isPrechecked(toggle) {
    if (typeof this._rawValue === 'undefined') {
      return false;
    }

    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some(value => toggle.value != null && value === toggle.value);
    }

    return toggle.value === this._rawValue;
  }
  /** Updates the selection state of the toggles in the group based on a value. */


  _setSelectionByValue(value) {
    this._rawValue = value;

    if (!this._buttonToggles) {
      return;
    }

    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Value must be an array in multiple-selection mode.');
      }

      this._clearSelection();

      value.forEach(currentValue => this._selectValue(currentValue));
    } else {
      this._clearSelection();

      this._selectValue(value);
    }
  }
  /** Clears the selected toggles. */


  _clearSelection() {
    this._selectionModel.clear();

    this._buttonToggles.forEach(toggle => toggle.checked = false);
  }
  /** Selects a value if there's a toggle that corresponds to it. */


  _selectValue(value) {
    const correspondingOption = this._buttonToggles.find(toggle => {
      return toggle.value != null && toggle.value === value;
    });

    if (correspondingOption) {
      correspondingOption.checked = true;

      this._selectionModel.select(correspondingOption);
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */


  _updateModelValue(toggle, isUserInput) {
    // Only emit the change event for user input.
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    } // Note: we emit this one no matter whether it was a user interaction, because
    // it is used by Angular to sync up the two-way data binding.


    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */


  _markButtonsForCheck() {
    var _a;

    (_a = this._buttonToggles) === null || _a === void 0 ? void 0 : _a.forEach(toggle => toggle._markForCheck());
  }

}

MatButtonToggleGroup.ɵfac = function MatButtonToggleGroup_Factory(t) {
  return new (t || MatButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
};

MatButtonToggleGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatButtonToggleGroup,
  selectors: [["mat-button-toggle-group"]],
  contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatButtonToggle, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._buttonToggles = _t);
    }
  },
  hostAttrs: ["role", "group", 1, "mat-button-toggle-group"],
  hostVars: 5,
  hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
    }
  },
  inputs: {
    appearance: "appearance",
    name: "name",
    vertical: "vertical",
    value: "value",
    multiple: "multiple",
    disabled: "disabled"
  },
  outputs: {
    valueChange: "valueChange",
    change: "change"
  },
  exportAs: ["matButtonToggleGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
    provide: MAT_BUTTON_TOGGLE_GROUP,
    useExisting: MatButtonToggleGroup
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButtonToggleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-button-toggle-group',
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        'role': 'group',
        'class': 'mat-button-toggle-group',
        '[attr.aria-disabled]': 'disabled',
        '[class.mat-button-toggle-vertical]': 'vertical',
        '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
      },
      exportAs: 'matButtonToggleGroup'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    _buttonToggles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})(); // Boilerplate for applying mixins to the MatButtonToggle class.

/** @docs-private */


const _MatButtonToggleBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.mixinDisableRipple)(class {});
/** Single button inside of a toggle group. */


class MatButtonToggle extends _MatButtonToggleBase {
  constructor(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._checked = false;
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */

    this.ariaLabelledby = null;
    this._disabled = false;
    /** Event emitted when the group value changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
  }
  /** Unique ID for the underlying `button` element. */


  get buttonId() {
    return `${this.id}-button`;
  }
  /** The appearance style of the button. */


  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }

  set appearance(value) {
    this._appearance = value;
  }
  /** Whether the button is checked. */


  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }

  set checked(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);

    if (newValue !== this._checked) {
      this._checked = newValue;

      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }

      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */


  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
  }

  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || `mat-button-toggle-${uniqueIdCounter++}`;

    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        // As as side effect of the circular dependency between the toggle group and the button,
        // we may end up in a state where the button is supposed to be checked on init, but it
        // isn't, because the checked value was assigned too early. This can happen when Ivy
        // assigns the static input value before the `ngOnInit` has run.
        group._syncButtonToggle(this, this._checked);
      }
    }
  }

  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }

  ngOnDestroy() {
    const group = this.buttonToggleGroup;

    this._focusMonitor.stopMonitoring(this._elementRef); // Remove the toggle from the selection once it's destroyed. Needs to happen
    // on the next tick in order to avoid "changed after checked" errors.


    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */


  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */


  _onButtonClick() {
    const newChecked = this._isSingleSelector() ? true : !this._checked;

    if (newChecked !== this._checked) {
      this._checked = newChecked;

      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);

        this.buttonToggleGroup._onTouched();
      }
    } // Emit a change event when it's the single selector


    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */


  _markForCheck() {
    // When the group value changes, the button will not be notified.
    // Use `markForCheck` to explicit update button toggle's status.
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */


  _getButtonName() {
    if (this._isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }

    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */


  _isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }

}

MatButtonToggle.ɵfac = function MatButtonToggle_Factory(t) {
  return new (t || MatButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
};

MatButtonToggle.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatButtonToggle,
  selectors: [["mat-button-toggle"]],
  viewQuery: function MatButtonToggle_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._buttonElement = _t.first);
    }
  },
  hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
  hostVars: 12,
  hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatButtonToggle_focus_HostBindingHandler() {
        return ctx.focus();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    id: "id",
    name: "name",
    value: "value",
    tabIndex: "tabIndex",
    appearance: "appearance",
    checked: "checked",
    disabled: "disabled"
  },
  outputs: {
    change: "change"
  },
  exportAs: ["matButtonToggle"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 9,
  consts: [["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "id", "disabled", "click"], ["button", ""], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
  template: function MatButtonToggle_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatButtonToggle_Template_button_click_0_listener() {
        return ctx._onButtonClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3)(5, "span", 4);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.buttonId)("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
  styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButtonToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-button-toggle',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      exportAs: 'matButtonToggle',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disableRipple'],
      host: {
        '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
        '[class.mat-button-toggle-checked]': 'checked',
        '[class.mat-button-toggle-disabled]': 'disabled',
        '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
        'class': 'mat-button-toggle',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[attr.id]': 'id',
        '[attr.name]': 'null',
        '(focus)': 'focus()',
        'role': 'presentation'
      },
      template: "<button #button class=\"mat-button-toggle-button mat-focus-indicator\"\n        type=\"button\"\n        [id]=\"buttonId\"\n        [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n        [attr.aria-pressed]=\"checked\"\n        [disabled]=\"disabled || null\"\n        [attr.name]=\"_getButtonName()\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        (click)=\"_onButtonClick()\">\n  <span class=\"mat-button-toggle-label-content\">\n    <ng-content></ng-content>\n  </span>\n</button>\n\n<span class=\"mat-button-toggle-focus-overlay\"></span>\n<span class=\"mat-button-toggle-ripple\" matRipple\n     [matRippleTrigger]=\"button\"\n     [matRippleDisabled]=\"this.disableRipple || this.disabled\">\n</span>\n",
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"]
    }]
  }], function () {
    return [{
      type: MatButtonToggleGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_BUTTON_TOGGLE_GROUP]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    _buttonElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['button']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
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


class MatButtonToggleModule {}

MatButtonToggleModule.ɵfac = function MatButtonToggleModule_Factory(t) {
  return new (t || MatButtonToggleModule)();
};

MatButtonToggleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatButtonToggleModule
});
MatButtonToggleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatButtonToggleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, MatButtonToggleGroup, MatButtonToggle],
      declarations: [MatButtonToggleGroup, MatButtonToggle]
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
//# sourceMappingURL=src_app_core_domain-classes_resource-parameter_ts-src_app_reminder_reminder_module_ts.js.map