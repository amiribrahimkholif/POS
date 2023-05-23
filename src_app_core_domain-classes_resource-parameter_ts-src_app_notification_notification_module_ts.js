"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_core_domain-classes_resource-parameter_ts-src_app_notification_notification_module_ts"],{

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

/***/ 51966:
/*!*********************************************************!*\
  !*** ./src/app/notification/notification-datasource.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationDataSource": () => (/* binding */ NotificationDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class NotificationDataSource {
    constructor(notificationService) {
        this.notificationService = notificationService;
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
        this.sub$ = this.notificationService.getNotifications(resource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject$.next(false)))
            .subscribe((resp) => {
            if (resp && resp.headers && resp.headers.get('X-Pagination')) {
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

/***/ 89753:
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationRoutingModule": () => (/* binding */ NotificationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component */ 86768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent
    }
];
class NotificationRoutingModule {
}
NotificationRoutingModule.ɵfac = function NotificationRoutingModule_Factory(t) { return new (t || NotificationRoutingModule)(); };
NotificationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NotificationRoutingModule });
NotificationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NotificationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 86768:
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_reminder_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/reminder-resource-parameter */ 24702);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _notification_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification-datasource */ 51966);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.service */ 75769);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



















function NotificationComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function NotificationComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, reminder_r12.createdDate, "short"), " ");
} }
function NotificationComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "SUBJECT"), " ");
} }
const _c0 = function (a1) { return ["/sales-order/detail", a1]; };
function NotificationComponent_td_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "b")(2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reminder_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c0, reminder_r13.referenceId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", reminder_r13.subject, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("- ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "SALES_ORDER_EXPECTED_SHIPMENT_DATE"), ". ");
} }
const _c1 = function (a1) { return ["/purchase-order/detail", a1]; };
function NotificationComponent_td_16_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "b")(2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reminder_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c1, reminder_r13.referenceId));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", reminder_r13.subject, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "PURCHASE_ORDER_EXPECTED_DELIVERY_DATE"), ". ");
} }
function NotificationComponent_td_16_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reminder_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", reminder_r13.subject, " ");
} }
function NotificationComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NotificationComponent_td_16_ng_container_2_Template, 6, 7, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NotificationComponent_td_16_ng_container_3_Template, 6, 7, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NotificationComponent_td_16_ng_container_4_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", reminder_r13.application);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
} }
function NotificationComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MESSAGE"), " ");
} }
function NotificationComponent_td_19_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reminder_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", reminder_r20.subject, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, "SALES_ORDER_EXPECTED_SHIPMENT_DATE_IS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 5, reminder_r20.duration, "MM/dd/yyyy"), "");
} }
function NotificationComponent_td_19_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reminder_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", reminder_r20.subject, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("-", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, "PURCHASE_ORDER_EXPECTED_DELIVERY_DATE_IS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 5, reminder_r20.duration, "MM/dd/yyyy"), "");
} }
function NotificationComponent_td_19_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const reminder_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", reminder_r20.subject, " ");
} }
function NotificationComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NotificationComponent_td_19_ng_container_2_Template, 8, 8, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NotificationComponent_td_19_ng_container_3_Template, 8, 8, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NotificationComponent_td_19_ng_container_4_Template, 2, 1, "ng-container", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const reminder_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", reminder_r20.application);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", 2);
} }
const _c2 = function () { return [15, 20, 30]; };
function NotificationComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-paginator", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx_r6.reminderResource.totalCount)("pageSize", ctx_r6.reminderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c2));
} }
function NotificationComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 36)(2, "span", 37)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function NotificationComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 38);
} }
function NotificationComponent_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 39);
} }
function NotificationComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 40);
} }
function NotificationComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class NotificationComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(notificationService, translationService) {
        super(translationService);
        this.notificationService = notificationService;
        this.translationService = translationService;
        this.reminders = [];
        this.displayedColumns = ['createdDate', 'subject', 'message'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.getLangDir();
        this.reminderResource = new _core_domain_classes_reminder_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ReminderResourceParameter();
        this.reminderResource.pageSize = 15;
        this.reminderResource.orderBy = 'createdDate asc';
    }
    get SubjectFilter() {
        return this._subjectFilter;
    }
    set SubjectFilter(v) {
        this._subjectFilter = v;
        const subjectFilter = `subject:${v}`;
        this.filterObservable$.next(subjectFilter);
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
        this.dataSource = new _notification_datasource__WEBPACK_IMPORTED_MODULE_2__.NotificationDataSource(this.notificationService);
        this.dataSource.loadData(this.reminderResource);
        this.getResourceParameter();
        this.markAsReadNotification();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.distinctUntilChanged)())
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
            this.dataSource.loadData(this.reminderResource);
        });
    }
    markAsReadNotification() {
        this.sub$.sink = this.notificationService.markAsReadNotifications()
            .subscribe(c => {
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
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.tap)((c) => {
            this.reminderResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.reminderResource.pageSize = this.paginator.pageSize;
            this.reminderResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.reminderResource);
        }))
            .subscribe();
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], viewQuery: function NotificationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 28, vars: 11, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive", "grid-height"], ["mat-table", "", "matSort", "", "matSortActive", "createdDate", "matSortDirection", "desc", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "createdDate"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subject"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "message"], ["class", "table-column-500", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-500", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "6", 4, "matFooterCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["class", "loading-shade", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-500"], ["mat-cell", "", 1, "table-column-500"], ["mat-footer-cell", "", "colspan", "6"], [3, "length", "pageSize", "pageSizeOptions"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], [1, "loading-shade"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, NotificationComponent_th_12_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, NotificationComponent_td_13_Template, 3, 4, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, NotificationComponent_th_15_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, NotificationComponent_td_16_Template, 5, 3, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, NotificationComponent_th_18_Template, 3, 3, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, NotificationComponent_td_19_Template, 5, 3, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, NotificationComponent_td_21_Template, 2, 4, "td", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, NotificationComponent_tr_22_Template, 6, 3, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, NotificationComponent_tr_23_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, NotificationComponent_tr_24_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, NotificationComponent_tr_25_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, NotificationComponent_div_26_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 7, "NOTIFICATIONS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 9, ctx.dataSource.loading$));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchDefault, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLinkWithHref, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__.Dir, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortHeader, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatNoDataRow, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_5__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 22154:
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationModule": () => (/* binding */ NotificationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-routing.module */ 89753);
/* harmony import */ var _notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component */ 86768);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);












class NotificationModule {
}
NotificationModule.ɵfac = function NotificationModule_Factory(t) { return new (t || NotificationModule)(); };
NotificationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NotificationModule });
NotificationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NotificationModule, { declarations: [_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationRoutingModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule] }); })();


/***/ }),

/***/ 75769:
/*!******************************************************!*\
  !*** ./src/app/notification/notification.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class NotificationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getNotifications(resourceParams) {
        const url = 'reminder/notifications';
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()
            .set('fields', resourceParams.fields)
            .set('orderBy', resourceParams.orderBy)
            .set('pageSize', resourceParams.pageSize.toString())
            .set('skip', resourceParams.skip.toString())
            .set('searchQuery', resourceParams.searchQuery);
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response',
        });
    }
    markAsReadNotifications() {
        const url = 'reminder/notification/markasread';
        return this.httpClient.get(url);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_core_domain-classes_resource-parameter_ts-src_app_notification_notification_module_ts.js.map