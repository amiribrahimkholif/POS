"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_login-audit_login-audit_module_ts"],{

/***/ 16975:
/*!*************************************************************!*\
  !*** ./src/app/core/domain-classes/login-audit-resource.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuditResource": () => (/* binding */ LoginAuditResource)
/* harmony export */ });
/* harmony import */ var _resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resource-parameter */ 75519);

class LoginAuditResource extends _resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ResourceParameter {
    constructor() {
        super(...arguments);
        this.id = '';
        this.userName = '';
    }
}


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

/***/ 89814:
/*!*******************************************************!*\
  !*** ./src/app/login-audit/login-audit-datasource.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuditDataSource": () => (/* binding */ LoginAuditDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 44661);


class LoginAuditDataSource {
    constructor(loginAuditService) {
        this.loginAuditService = loginAuditService;
        this.loginAuditSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.responseHeaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.loading$ = this.loadingSubject.asObservable();
        this._count = 0;
        this.responseHeaderSubject$ = this.responseHeaderSubject.asObservable();
    }
    get count() {
        return this._count;
    }
    connect() {
        return this.loginAuditSubject.asObservable();
    }
    disconnect() {
        this.loginAuditSubject.complete();
        this.loadingSubject.complete();
    }
    loadLoginAudits(loginAuditResource) {
        this.loadingSubject.next(true);
        this.loginAuditService.getLoginAudits(loginAuditResource).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => this.loadingSubject.next(false)))
            .subscribe((resp) => {
            const paginationParam = JSON.parse(resp.headers.get('X-Pagination'));
            this.responseHeaderSubject.next(paginationParam);
            const loginAuditTrails = [...resp.body];
            this._count = loginAuditTrails.length;
            this.loginAuditSubject.next(loginAuditTrails);
        });
    }
}


/***/ }),

/***/ 49829:
/*!****************************************************************************!*\
  !*** ./src/app/login-audit/login-audit-list/login-audit-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuditListComponent": () => (/* binding */ LoginAuditListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_login_audit_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/login-audit-resource */ 16975);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _login_audit_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-audit-datasource */ 89814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_audit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login-audit.service */ 13161);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);


















const _c0 = ["input"];
function LoginAuditListComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function LoginAuditListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "DATE_TIME"), " ");
} }
function LoginAuditListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, audit_r17 == null ? null : audit_r17.loginTime, "dd/MM/yyyy hh:mm:ss"), " ");
} }
function LoginAuditListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "EMAIL"), " ");
} }
function LoginAuditListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", audit_r18.userName, " ");
} }
function LoginAuditListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "STATUS"), " ");
} }
function LoginAuditListComponent_td_24_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](audit_r19 == null ? null : audit_r19.status);
} }
function LoginAuditListComponent_td_24_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](audit_r19 == null ? null : audit_r19.status);
} }
function LoginAuditListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, LoginAuditListComponent_td_24_span_1_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginAuditListComponent_td_24_span_2_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (audit_r19 == null ? null : audit_r19.status) == "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (audit_r19 == null ? null : audit_r19.status) == "Error");
} }
function LoginAuditListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "IP_ADDRESS"), " ");
} }
function LoginAuditListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", audit_r24.remoteIP, " ");
} }
function LoginAuditListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "LATITUDE"), " ");
} }
function LoginAuditListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", audit_r25.latitude, " ");
} }
function LoginAuditListComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "LONGITUDE"), " ");
} }
function LoginAuditListComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const audit_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", audit_r26.longitude, " ");
} }
function LoginAuditListComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 32);
} }
function LoginAuditListComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 33);
} }
function LoginAuditListComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 34)(2, "div", 35)(3, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"));
} }
const _c1 = function () { return [10, 20, 30]; };
class LoginAuditListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(loginAuditService, translationService) {
        super(translationService);
        this.loginAuditService = loginAuditService;
        this.translationService = translationService;
        this.loginAudits = [];
        this.displayedColumns = ['loginTime', 'userName', 'remoteIP', 'status', 'latitude', 'longitude'];
        this.isLoadingResults = true;
        this.getLangDir();
        this.loginAuditResource = new _core_domain_classes_login_audit_resource__WEBPACK_IMPORTED_MODULE_0__.LoginAuditResource();
        this.loginAuditResource.pageSize = 10;
        this.loginAuditResource.orderBy = 'loginTime desc';
    }
    ngOnInit() {
        this.dataSource = new _login_audit_datasource__WEBPACK_IMPORTED_MODULE_2__.LoginAuditDataSource(this.loginAuditService);
        this.dataSource.loadLoginAudits(this.loginAuditResource);
        this.getResourceParameter();
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((c) => {
            this.loginAuditResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.loginAuditResource.pageSize = this.paginator.pageSize;
            this.loginAuditResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadLoginAudits(this.loginAuditResource);
        }))
            .subscribe();
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.input.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => {
            this.paginator.pageIndex = 0;
            this.loginAuditResource.userName = this.input.nativeElement.value;
            this.dataSource.loadLoginAudits(this.loginAuditResource);
        }))
            .subscribe();
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.loginAuditResource.pageSize = c.pageSize;
                this.loginAuditResource.skip = c.skip;
                this.loginAuditResource.totalCount = c.totalCount;
            }
        });
    }
}
LoginAuditListComponent.ɵfac = function LoginAuditListComponent_Factory(t) { return new (t || LoginAuditListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_login_audit_service__WEBPACK_IMPORTED_MODULE_3__.LoginAuditService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService)); };
LoginAuditListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginAuditListComponent, selectors: [["app-login-audit-list"]], viewQuery: function LoginAuditListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 38, vars: 20, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [1, "mat-elevation-z8"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], [1, "mb-3", "col-sm-5"], [1, "form-control", 3, "placeholder"], ["input", ""], ["mat-table", "", "matSort", "", "matSortActive", "loginTime", "matSortDirection", "desc", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "loginTime"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "userName"], ["matColumnDef", "status"], ["matColumnDef", "remoteIP"], ["matColumnDef", "latitude"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "longitude"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [1, "w-100", 3, "length", "dir", "pageSize", "pageSizeOptions"], [1, "loading-shade"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["class", "badge badge-success", 4, "ngIf"], ["class", "badge badge-warning", 4, "ngIf"], [1, "badge", "badge-success"], [1, "badge", "badge-warning"], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "row"], [1, "col-sm-12", "ml-4", "mt-3"], [1, "font-weight-bold"]], template: function LoginAuditListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, LoginAuditListComponent_div_8_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, LoginAuditListComponent_th_17_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, LoginAuditListComponent_td_18_Template, 3, 4, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](19, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, LoginAuditListComponent_th_20_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, LoginAuditListComponent_td_21_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](22, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, LoginAuditListComponent_th_23_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, LoginAuditListComponent_td_24_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](25, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, LoginAuditListComponent_th_26_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, LoginAuditListComponent_td_27_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](28, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, LoginAuditListComponent_th_29_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, LoginAuditListComponent_td_30_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](31, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, LoginAuditListComponent_th_32_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, LoginAuditListComponent_td_33_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, LoginAuditListComponent_tr_34_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, LoginAuditListComponent_tr_35_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, LoginAuditListComponent_ng_container_36_Template, 6, 3, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "mat-paginator", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 13, "LOGIN_AUDIT_LOGS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 15, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](14, 17, "SEARCH_BY_USER_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.count === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.loginAuditResource.totalCount)("dir", ctx.langDir)("pageSize", ctx.loginAuditResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c1));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".badge[_ngcontent-%COMP%] {\n  font-weight: normal;\n  padding: 0.5em 0.6em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWF1ZGl0LWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBQiUyMFBPU1xcRnJvbnRlbmRcXHNyY1xcYXBwXFxsb2dpbi1hdWRpdFxcbG9naW4tYXVkaXQtbGlzdFxcbG9naW4tYXVkaXQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJsb2dpbi1hdWRpdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBwYWRkaW5nOiAwLjUwZW0gMC42ZW07XHJcbn0iLCIuYmFkZ2Uge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBwYWRkaW5nOiAwLjVlbSAwLjZlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 50784:
/*!***********************************************************!*\
  !*** ./src/app/login-audit/login-audit-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuditRoutingModule": () => (/* binding */ LoginAuditRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _login_audit_list_login_audit_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-audit-list/login-audit-list.component */ 49829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _login_audit_list_login_audit_list_component__WEBPACK_IMPORTED_MODULE_1__.LoginAuditListComponent,
        data: { claimType: 'LOGS_VIEW_LOGIN_AUDITS' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
class LoginAuditRoutingModule {
}
LoginAuditRoutingModule.ɵfac = function LoginAuditRoutingModule_Factory(t) { return new (t || LoginAuditRoutingModule)(); };
LoginAuditRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginAuditRoutingModule });
LoginAuditRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginAuditRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 28443:
/*!***************************************************!*\
  !*** ./src/app/login-audit/login-audit.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuditModule": () => (/* binding */ LoginAuditModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _login_audit_list_login_audit_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-audit-list/login-audit-list.component */ 49829);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _login_audit_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-audit-routing.module */ 50784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);










class LoginAuditModule {
}
LoginAuditModule.ɵfac = function LoginAuditModule_Factory(t) { return new (t || LoginAuditModule)(); };
LoginAuditModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: LoginAuditModule });
LoginAuditModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _login_audit_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginAuditRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginAuditModule, { declarations: [_login_audit_list_login_audit_list_component__WEBPACK_IMPORTED_MODULE_0__.LoginAuditListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__.MatPaginatorModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _login_audit_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginAuditRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule] }); })();


/***/ }),

/***/ 13161:
/*!****************************************************!*\
  !*** ./src/app/login-audit/login-audit.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginAuditService": () => (/* binding */ LoginAuditService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);





class LoginAuditService {
    constructor(httpClient, commonHttpErrorService) {
        this.httpClient = httpClient;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    getLoginAudits(resource) {
        const url = `LoginAudit`;
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('Fields', resource.fields)
            .set('OrderBy', resource.orderBy)
            .set('PageSize', resource.pageSize.toString())
            .set('Skip', resource.skip.toString())
            .set('SearchQuery', resource.searchQuery)
            .set('id', resource.id.toString())
            .set('userName', resource.userName.toString());
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.commonHttpErrorService.handleError));
    }
}
LoginAuditService.ɵfac = function LoginAuditService_Factory(t) { return new (t || LoginAuditService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
LoginAuditService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LoginAuditService, factory: LoginAuditService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_login-audit_login-audit_module_ts.js.map