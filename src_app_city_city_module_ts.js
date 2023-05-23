"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_city_city_module_ts"],{

/***/ 20254:
/*!***************************************************!*\
  !*** ./src/app/city/city-list/city-datasource.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityDataSource": () => (/* binding */ CityDataSource)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_response_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/response-header */ 31358);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 44661);



class CityDataSource {
    constructor(cityService) {
        this.cityService = cityService;
        this._entities$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this._responseHeaderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.loadingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.loading$ = this.loadingSubject$.asObservable();
        this._count = 0;
        this.responseHeaderSubject$ = this._responseHeaderSubject$.asObservable();
        this.sub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
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
    loadData(cityResource) {
        this.loadingSubject$.next(true);
        this.sub$ = this.cityService.getCities(cityResource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.loadingSubject$.next(false)))
            .subscribe((resp) => {
            let paginationParam = new _core_domain_classes_response_header__WEBPACK_IMPORTED_MODULE_0__.ResponseHeader();
            if (resp && resp.headers.get('X-Pagination')) {
                paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
            }
            this._responseHeaderSubject$.next(paginationParam);
            const entities = [...resp.body];
            this._count = entities.length;
            this._entities$.next(entities);
        });
    }
}


/***/ }),

/***/ 48007:
/*!*******************************************************!*\
  !*** ./src/app/city/city-list/city-list.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityListComponent": () => (/* binding */ CityListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_city_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/city-resource-parameter */ 27167);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 25722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _manage_city_manage_city_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manage-city/manage-city.component */ 14592);
/* harmony import */ var _city_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city-datasource */ 20254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../city.service */ 20759);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




























function CityListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 29)(1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CityListComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r17.manageCity({})); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, "ADD_CITY"), " ");
} }
function CityListComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "ACTION"), " ");
} }
function CityListComponent_td_12_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CityListComponent_td_12_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r24); const element_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r22.manageCity(element_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, "EDIT"), "");
} }
function CityListComponent_td_12_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CityListComponent_td_12_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27); const element_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r25.deleteCity(element_r19)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 1, "DELETE"), "");
} }
function CityListComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CityListComponent_td_12_button_1_Template, 5, 3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CityListComponent_td_12_button_2_Template, 5, 3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hasClaim", "SETT_MANAGE_CITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hasClaim", "SETT_MANAGE_CITY");
} }
function CityListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "CITY"), " ");
} }
function CityListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", city_r28.cityName, " ");
} }
function CityListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "COUNTRY"), " ");
} }
function CityListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", city_r29.countryName, " ");
} }
function CityListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 45);
} }
function CityListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 46)(1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function CityListComponent_th_22_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.NameFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "CITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r8.NameFilter);
} }
function CityListComponent_th_24_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cont_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", cont_r34.countryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", cont_r34.countryName, " ");
} }
function CityListComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-autocomplete", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("optionSelected", function CityListComponent_th_24_Template_mat_autocomplete_optionSelected_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.CountryFilter = $event.option.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, CityListComponent_th_24_mat_option_8_Template, 2, 2, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 7, "COUNTRY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx_r9.countryControl)("matAutocomplete", _r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dir", ctx_r9.langDir)("autoActiveFirstOption", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 9, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 11, ctx_r9.filteredCountryList));
} }
const _c0 = function () { return [10, 20, 30]; };
function CityListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-paginator", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("length", ctx_r10.cityResource.totalCount)("pageSize", ctx_r10.cityResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](3, _c0));
} }
function CityListComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 56)(2, "span", 57)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function CityListComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 58);
} }
function CityListComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 59);
} }
function CityListComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 60);
} }
function CityListComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 61);
} }
function CityListComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["action-search", "cityName-search", "country-search"]; };
class CityListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(cityService, toastrService, commonDialogService, router, translationService, dialog, commonService) {
        super(translationService);
        this.cityService = cityService;
        this.toastrService = toastrService;
        this.commonDialogService = commonDialogService;
        this.router = router;
        this.translationService = translationService;
        this.dialog = dialog;
        this.commonService = commonService;
        this.cities = [];
        this.displayedColumns = ['action', 'cityName', 'countryName'];
        this.columnsToDisplay = ["footer"];
        this.countryList = [];
        this.countryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormControl();
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.getLangDir();
        this.cityResource = new _core_domain_classes_city_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.CityResourceParameter();
        this.cityResource.pageSize = 10;
        this.cityResource.orderBy = 'cityName asc';
    }
    get NameFilter() {
        return this._nameFilter;
    }
    set NameFilter(v) {
        this._nameFilter = v;
        const nameFilter = `cityName##${v}`;
        this.filterObservable$.next(nameFilter);
    }
    get CountryNameFilter() {
        return this._countrynameFilter;
    }
    set CountryNameFilter(v) {
        this._countrynameFilter = v;
        const countrynameFilter = `countryName##${v}`;
        this.filterObservable$.next(countrynameFilter);
    }
    get CountryFilter() {
        return this._countryFilter;
    }
    set CountryFilter(v) {
        this._countryFilter = v;
        const countryFilter = `country##${v}`;
        this.filterObservable$.next(countryFilter);
    }
    ngOnInit() {
        this.dataSource = new _city_datasource__WEBPACK_IMPORTED_MODULE_3__.CityDataSource(this.cityService);
        this.dataSource.loadData(this.cityResource);
        this.getResourceParameter();
        this.getCountries();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)())
            .subscribe((c) => {
            this.cityResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split('##');
            if (strArray[0] === 'cityName') {
                this.cityResource.cityName = strArray[1];
            }
            else if (strArray[0] === 'country') {
                this.cityResource.countryName = strArray[1];
            }
            this.dataSource.loadData(this.cityResource);
        });
        this.filteredCountryList = this.countryControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(value => this._filterCountry(value)));
    }
    _filterCountry(value) {
        const filterValue = value.toLowerCase();
        return this.countryList.filter(option => option.countryName.toLowerCase().includes(filterValue));
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(() => {
            this.cityResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.cityResource.pageSize = this.paginator.pageSize;
            this.cityResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.cityResource);
        }))
            .subscribe();
    }
    getCountries() {
        this.sub$.sink = this.commonService.getCountry().subscribe(c => this.countryList = c);
    }
    deleteCity(city) {
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')} ${city.cityName}`)
            .subscribe((isTrue) => {
            if (isTrue) {
                this.sub$.sink = this.cityService.deleteCity(city.id)
                    .subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('CITY_IS_DELETED.'));
                    this.paginator.pageIndex = 0;
                    this.dataSource.loadData(this.cityResource);
                });
            }
        });
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.cityResource.pageSize = c.pageSize;
                this.cityResource.skip = c.skip;
                this.cityResource.totalCount = c.totalCount;
            }
        });
    }
    manageCity(city) {
        let dialogRef = this.dialog.open(_manage_city_manage_city_component__WEBPACK_IMPORTED_MODULE_2__.ManageCityComponent, {
            width: '350px',
            direction: this.langDir,
            data: Object.assign({}, city)
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.dataSource.loadData(this.cityResource);
            }
        });
    }
}
CityListComponent.ɵfac = function CityListComponent_Factory(t) { return new (t || CityListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_city_service__WEBPACK_IMPORTED_MODULE_4__.CityService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_5__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService)); };
CityListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: CityListComponent, selectors: [["app-city-list"]], viewQuery: function CityListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 34, vars: 17, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], ["class", "col-md-auto col-sm-auto col-auto", 4, "hasClaim"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "cityName", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "action", "sticky", ""], ["class", "table-column-200", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cityName", "sticky", ""], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "countryName"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "action-search", "sticky", ""], ["class", "pr-5", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "cityName-search", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "country-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "8", 4, "matFooterCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["class", "loading-shade", 4, "ngIf"], [1, "col-md-auto", "col-sm-auto", "col-auto"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-plus"], ["mat-header-cell", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["class", "btn btn-success btn-sm m-right-10", "type", "button", 3, "click", 4, "hasClaim"], ["class", "btn btn-danger btn-sm", "type", "button", 3, "click", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-pencil-alt"], [1, "d-none", "d-sm-inline"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-trash-alt"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-header-cell", "", 1, "pr-5"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", 3, "placeholder", "formControl", "matAutocomplete"], [3, "dir", "autoActiveFirstOption", "optionSelected"], ["auto", "matAutocomplete"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-footer-cell", "", "colspan", "8"], [3, "length", "pageSize", "pageSizeOptions"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-footer-row", ""], [1, "loading-shade"]], template: function CityListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, CityListComponent_div_7_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 5)(9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, CityListComponent_th_11_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, CityListComponent_td_12_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, CityListComponent_th_14_Template, 3, 3, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, CityListComponent_td_15_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](16, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](17, CityListComponent_th_17_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, CityListComponent_td_18_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](19, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, CityListComponent_th_20_Template, 1, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](21, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, CityListComponent_th_22_Template, 3, 4, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](23, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, CityListComponent_th_24_Template, 10, 13, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](25, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](26, CityListComponent_td_26_Template, 2, 4, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, CityListComponent_tr_27_Template, 6, 3, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, CityListComponent_tr_28_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](29, CityListComponent_tr_29_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, CityListComponent_tr_30_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, CityListComponent_tr_31_Template, 1, 0, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, CityListComponent_div_32_Template, 2, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](33, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 12, "CITIES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hasClaim", "SETT_MANAGE_CITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](16, _c1))("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matFooterRowDef", ctx.columnsToDisplay)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](33, 14, ctx.dataSource.loading$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_8__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_25__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteTrigger, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortHeader, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatNoDataRow, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaXR5LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 61635:
/*!*********************************************!*\
  !*** ./src/app/city/city-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityRoutingModule": () => (/* binding */ CityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _city_list_city_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-list/city-list.component */ 48007);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _city_list_city_list_component__WEBPACK_IMPORTED_MODULE_0__.CityListComponent,
        data: { claimType: 'SETT_MANAGE_CITY' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard]
    }
];
class CityRoutingModule {
}
CityRoutingModule.ɵfac = function CityRoutingModule_Factory(t) { return new (t || CityRoutingModule)(); };
CityRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CityRoutingModule });
CityRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 11368:
/*!*************************************!*\
  !*** ./src/app/city/city.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityModule": () => (/* binding */ CityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _city_list_city_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-list/city-list.component */ 48007);
/* harmony import */ var _city_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./city-routing.module */ 61635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _manage_city_manage_city_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-city/manage-city.component */ 14592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);

















class CityModule {
}
CityModule.ɵfac = function CityModule_Factory(t) { return new (t || CityModule)(); };
CityModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CityModule });
CityModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _city_routing_module__WEBPACK_IMPORTED_MODULE_1__.CityRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CityModule, { declarations: [_city_list_city_list_component__WEBPACK_IMPORTED_MODULE_0__.CityListComponent,
        _manage_city_manage_city_component__WEBPACK_IMPORTED_MODULE_3__.ManageCityComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _city_routing_module__WEBPACK_IMPORTED_MODULE_1__.CityRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule] }); })();


/***/ }),

/***/ 20759:
/*!**************************************!*\
  !*** ./src/app/city/city.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityService": () => (/* binding */ CityService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class CityService {
    constructor(http) {
        this.http = http;
    }
    getCities(resourceParams) {
        const url = 'city';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('Fields', resourceParams.fields)
            .set('OrderBy', resourceParams.orderBy)
            .set('PageSize', resourceParams.pageSize.toString())
            .set('Skip', resourceParams.skip.toString())
            .set('SearchQuery', resourceParams.searchQuery)
            .set('cityName', resourceParams.cityName)
            .set('countryName', resourceParams.countryName ? resourceParams.countryName : '');
        return this.http.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    getCity(id) {
        const url = 'city/' + id;
        return this.http.get(url);
    }
    deleteCity(id) {
        const url = `city/${id}`;
        return this.http.delete(url);
    }
    updateCity(id, city) {
        const url = 'city/' + id;
        return this.http.put(url, city);
    }
    saveCity(city) {
        const url = 'city';
        return this.http.post(url, city);
    }
}
CityService.ɵfac = function CityService_Factory(t) { return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
CityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CityService, factory: CityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14592:
/*!***********************************************************!*\
  !*** ./src/app/city/manage-city/manage-city.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCityComponent": () => (/* binding */ ManageCityComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _city_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../city.service */ 20759);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

















function ManageCityComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", country_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", country_r4.countryName, " ");
} }
function ManageCityComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx_r1.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, "PLEASE_SELECT_COUNTRY"), " ");
} }
function ManageCityComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "CITY_NAME_IS_REQUIRED."), " ");
} }
function ManageCityComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ManageCityComponent_div_29_div_1_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.cityForm.get("cityName").touched && (ctx_r2.cityForm.get("cityName").errors == null ? null : ctx_r2.cityForm.get("cityName").errors.required));
} }
function ManageCityComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCityComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.saveCity()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 1, "SAVE"), " ");
} }
class ManageCityComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(dialogRef, data, cityService, toastrService, fb, commonService, translationService) {
        super(translationService);
        this.dialogRef = dialogRef;
        this.data = data;
        this.cityService = cityService;
        this.toastrService = toastrService;
        this.fb = fb;
        this.commonService = commonService;
        this.translationService = translationService;
        this.isEdit = false;
        this.countryList = [];
        this.getLangDir();
    }
    ngOnInit() {
        this.createForm();
        this.getCountries();
        if (this.data.id) {
            this.cityForm.patchValue(this.data);
            this.isEdit = true;
        }
    }
    createForm() {
        this.cityForm = this.fb.group({
            id: [''],
            cityName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
            countryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    getCountries() {
        this.sub$.sink = this.commonService.getCountry().subscribe(c => this.countryList = c);
    }
    onCancel() {
        this.dialogRef.close();
    }
    saveCity() {
        if (!this.cityForm.valid) {
            this.cityForm.markAllAsTouched();
            return;
        }
        const city = this.cityForm.value;
        if (this.data.id) {
            this.cityService.updateCity(city.id, city).subscribe(() => {
                this.toastrService.success(this.translationService.getValue('CITY_SAVED_SUCCESSFULLY'));
                this.dialogRef.close(city);
            });
        }
        else {
            this.cityService.saveCity(city).subscribe((c) => {
                this.toastrService.success(this.translationService.getValue('CITY_SAVED_SUCCESSFULLY'));
                this.dialogRef.close(city);
            });
        }
    }
}
ManageCityComponent.ɵfac = function ManageCityComponent_Factory(t) { return new (t || ManageCityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_city_service__WEBPACK_IMPORTED_MODULE_1__.CityService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService)); };
ManageCityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ManageCityComponent, selectors: [["app-manage-city"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 21, consts: [[1, "modal-content1"], [1, "modal-header"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], [1, "col-md-9", "col"], [1, "modal-title"], [1, "col-sm-auto", "col-auto", "ml-auto"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "fas", "fa-times"], [3, "formGroup"], [1, "modal-body"], [1, "row"], [1, "col-md-12"], [1, "form-group"], [1, "text-danger"], ["formControlName", "countryId", 1, "form-control", 3, "dir", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-danger", 3, "dir", 4, "ngIf"], ["for", "cityName", 1, "text-danger"], ["formControlName", "cityName", "type", "text", "id", "cityName", 1, "form-control"], [4, "ngIf"], [1, "modal-footer"], [1, "form-row", "w-100"], [1, "col-md-auto", "col-auto"], ["class", "btn btn-success btn-sm m-right-10", "cdkFocusInitial", "", 3, "click", 4, "hasClaim"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], [3, "value"], [1, "text-danger", 3, "dir"], ["class", "text-danger", 4, "ngIf"], ["cdkFocusInitial", "", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"]], template: function ManageCityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCityComponent_Template_button_click_8_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 8)(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "mat-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ManageCityComponent_mat_option_20_Template, 2, 2, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ManageCityComponent_mat_error_21_Template, 3, 4, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 10)(23, "div", 11)(24, "div", 12)(25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ManageCityComponent_div_29_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20)(31, "div", 21)(32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ManageCityComponent_button_33_Template, 4, 3, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ManageCityComponent_Template_button_click_34_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 11, "MANAGE_CITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.cityForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 13, "COUNTRY"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 15, "COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cityForm.get("countryId").touched && (ctx.cityForm.get("countryId").errors == null ? null : ctx.cityForm.get("countryId").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 17, "CITY_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cityForm.get("cityName").touched && ctx.cityForm.get("cityName").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hasClaim", "SETT_MANAGE_CITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](37, 19, "CANCEL"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_4__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtY2l0eS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 27167:
/*!****************************************************************!*\
  !*** ./src/app/core/domain-classes/city-resource-parameter.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CityResourceParameter": () => (/* binding */ CityResourceParameter)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class CityResourceParameter extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
    constructor() {
        super(...arguments);
        this.cityId = '';
        this.cityName = '';
        this.countryId = '';
        this.countryName = '';
    }
}


/***/ })

}]);
//# sourceMappingURL=src_app_city_city_module_ts.js.map