"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_reports_stock-report_stock-report_module_ts"],{

/***/ 50228:
/*!*********************************************************************************************!*\
  !*** ./src/app/reports/stock-report/inventory-history-list/inventory-history-datasource.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryHistoryDataSource": () => (/* binding */ InventoryHistoryDataSource)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_response_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/response-header */ 31358);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 44661);



class InventoryHistoryDataSource {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
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
    loadData(inventoryHistoryResource) {
        this.loadingSubject$.next(true);
        this.sub$ = this.inventoryService.getInventoryHistories(inventoryHistoryResource)
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

/***/ 44813:
/*!*************************************************************************************************!*\
  !*** ./src/app/reports/stock-report/inventory-history-list/inventory-history-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryHistoryListComponent": () => (/* binding */ InventoryHistoryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_inventory_history_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/inventory-history-resource-parameter */ 63723);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _inventory_history_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory-history-datasource */ 50228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/inventory/inventory.service */ 26435);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_inventory_source_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/inventory-source.pipe */ 94840);






















function InventoryHistoryListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function InventoryHistoryListComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "DATE"), " ");
} }
function InventoryHistoryListComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, row_r14.createdDate, "shortDate"), " ");
} }
function InventoryHistoryListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "SOURCE"), " ");
} }
const _c0 = function (a1) { return ["/purchase-order/detail", a1]; };
function InventoryHistoryListComponent_td_17_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span")(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c0, row_r15.purchaseOrderId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", row_r15.purchaseOrderNumber, ")");
} }
const _c1 = function (a1) { return ["/sales-order/detail", a1]; };
function InventoryHistoryListComponent_td_17_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span")(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c1, row_r15.salesOrderId));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", row_r15.salesOrderNumber, ")");
} }
function InventoryHistoryListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "inventorySource");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, InventoryHistoryListComponent_td_17_span_3_Template, 3, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, InventoryHistoryListComponent_td_17_span_4_Template, 3, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, row_r15.inventorySource), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r15.purchaseOrderId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r15.salesOrderId);
} }
function InventoryHistoryListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "STOCK"), " ");
} }
function InventoryHistoryListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 26)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r20.stock, " ");
} }
function InventoryHistoryListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE"));
} }
function InventoryHistoryListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, row_r21.pricePerUnit), " ");
} }
const _c2 = function () { return [10, 20, 30]; };
function InventoryHistoryListComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-paginator", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx_r9.inventoryHistoryResource.totalCount)("pageSize", ctx_r9.inventoryHistoryResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c2));
} }
function InventoryHistoryListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 30);
} }
function InventoryHistoryListComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 31);
} if (rf & 2) {
    const row_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("bg-warning1", row_r22.inventorySource == 2 || row_r22.inventorySource == 3);
} }
function InventoryHistoryListComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 32);
} }
function InventoryHistoryListComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 33)(2, "div", 34)(3, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
class InventoryHistoryListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(inventoryService, translationService) {
        super(translationService);
        this.inventoryService = inventoryService;
        this.translationService = translationService;
        this.displayedColumns = ['createdDate', 'inventorySource', 'stock', 'pricePerUnit'];
        this.columnsToDisplay = ["footer"];
        this.getLangDir();
        this.inventoryHistoryResource = new _core_domain_classes_inventory_history_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.InventoryHistoryResourceParameter();
        this.inventoryHistoryResource.pageSize = 10;
        this.inventoryHistoryResource.orderBy = 'createdDate asc';
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['inventory']) {
            this.inventoryHistoryResource.productId = this.inventory.productId;
            this.dataSource = new _inventory_history_datasource__WEBPACK_IMPORTED_MODULE_2__.InventoryHistoryDataSource(this.inventoryService);
            this.dataSource.loadData(this.inventoryHistoryResource);
            this.getResourceParameter();
        }
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
            this.inventoryHistoryResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.inventoryHistoryResource.pageSize = this.paginator.pageSize;
            this.inventoryHistoryResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.inventoryHistoryResource);
        }))
            .subscribe();
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.inventoryHistoryResource.pageSize = c.pageSize;
                this.inventoryHistoryResource.skip = c.skip;
                this.inventoryHistoryResource.totalCount = c.totalCount;
            }
        });
    }
}
InventoryHistoryListComponent.ɵfac = function InventoryHistoryListComponent_Factory(t) { return new (t || InventoryHistoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_3__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService)); };
InventoryHistoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: InventoryHistoryListComponent, selectors: [["app-inventory-history-report-list"]], viewQuery: function InventoryHistoryListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { inventory: "inventory" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 30, vars: 14, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover"], ["mat-table", "", "matSort", "", "multiTemplateDataRows", "", "matSortActive", "createdDate", 3, "dir", "dataSource"], ["matColumnDef", "createdDate"], ["class", "table-column-200", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "inventorySource"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "stock"], ["matColumnDef", "pricePerUnit"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "5", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], [4, "ngIf"], [1, "loading-shade"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], [3, "routerLink"], ["mat-footer-cell", "", "colspan", "5"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], [1, "row"], [1, "col-sm-12", "ml-4", "mt-3"], [1, "font-weight-bold"]], template: function InventoryHistoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, InventoryHistoryListComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, InventoryHistoryListComponent_th_13_Template, 3, 3, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, InventoryHistoryListComponent_td_14_Template, 3, 4, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, InventoryHistoryListComponent_th_16_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, InventoryHistoryListComponent_td_17_Template, 5, 5, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, InventoryHistoryListComponent_th_19_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, InventoryHistoryListComponent_td_20_Template, 3, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, InventoryHistoryListComponent_th_22_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, InventoryHistoryListComponent_td_23_Template, 3, 3, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, InventoryHistoryListComponent_td_25_Template, 2, 4, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, InventoryHistoryListComponent_tr_26_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, InventoryHistoryListComponent_tr_27_Template, 1, 2, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, InventoryHistoryListComponent_tr_28_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, InventoryHistoryListComponent_ng_container_29_Template, 6, 3, "ng-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, "STOCK_HISTORY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 12, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matFooterRowDef", ctx.columnsToDisplay)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dataSource.count === 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Dir, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatFooterRow, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_5__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_6__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _shared_pipes_inventory_source_pipe__WEBPACK_IMPORTED_MODULE_7__.InventorySourcePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnktaGlzdG9yeS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 76065:
/*!*********************************************************************!*\
  !*** ./src/app/reports/stock-report/stock-report-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockReportRoutingModule": () => (/* binding */ StockReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _stock_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stock-report.component */ 15426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _stock_report_component__WEBPACK_IMPORTED_MODULE_1__.StockReportComponent,
        data: { claimType: 'REP_STOCK_REPORT' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    }
];
class StockReportRoutingModule {
}
StockReportRoutingModule.ɵfac = function StockReportRoutingModule_Factory(t) { return new (t || StockReportRoutingModule)(); };
StockReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StockReportRoutingModule });
StockReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StockReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 15426:
/*!****************************************************************!*\
  !*** ./src/app/reports/stock-report/stock-report.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockReportComponent": () => (/* binding */ StockReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_inventory_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/inventory-resource-parameter */ 37345);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var src_app_inventory_inventory_list_inventory_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/inventory/inventory-list/inventory-datasource */ 46000);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/inventory/inventory.service */ 26435);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _inventory_history_list_inventory_history_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-history-list/inventory-history-list.component */ 44813);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




























function StockReportComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function StockReportComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 41);
} }
function StockReportComponent_td_19_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function StockReportComponent_td_19_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function StockReportComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StockReportComponent_td_19_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29); const inventory_r25 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r28.toggleRow(inventory_r25)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, StockReportComponent_td_19_mat_icon_2_Template, 2, 0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, StockReportComponent_td_19_mat_icon_3_Template, 2, 0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const inventory_r25 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventory_r25 != ctx_r2.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventory_r25 == ctx_r2.expandedElement);
} }
function StockReportComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function StockReportComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r30.productName, " ");
} }
function StockReportComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "STOCK"), " ");
} }
function StockReportComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", row_r31.stock, " -", row_r31.unitName, " ");
} }
function StockReportComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "AVERAGE_PURCHASE_PRICE"), " ");
} }
function StockReportComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, row_r32.averagePurchasePrice), " ");
} }
function StockReportComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "AVERAGE_SALES_PRICE"), "");
} }
function StockReportComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, row_r33.averageSalesPrice), " ");
} }
function StockReportComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 49);
} }
function StockReportComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 50)(1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function StockReportComponent_th_35_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.ProductNameFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r12.ProductNameFilter);
} }
function StockReportComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 49);
} }
function StockReportComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 49);
} }
function StockReportComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 49);
} }
const _c0 = function () { return [10, 20, 30]; };
function StockReportComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-paginator", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx_r16.langDir)("length", ctx_r16.inventoryResource.totalCount)("pageSize", ctx_r16.inventoryResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0));
} }
function StockReportComponent_ng_container_44_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 52)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "NO_DATA_FOUND"), "");
} }
function StockReportComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StockReportComponent_ng_container_44_td_1_Template, 4, 3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
function StockReportComponent_td_46_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 56)(2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-inventory-history-report-list", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inventoryObject_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@detailExpand", inventoryObject_r37 == ctx_r38.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("inventory", inventoryObject_r37);
} }
function StockReportComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StockReportComponent_td_46_ng_container_1_Template, 4, 2, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inventoryObject_r37 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", ctx_r18.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", inventoryObject_r37 == ctx_r18.expandedElement);
} }
function StockReportComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 59)(2, "span", 60)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function StockReportComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 61);
} }
function StockReportComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 62);
} }
function StockReportComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 63);
} }
function StockReportComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 64);
} }
function StockReportComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 65);
} }
const _c1 = function () { return ["action-search", "productName-search", "stock-search", "averagePurchasePrice-search", "averageSalesPrice-search"]; };
const _c2 = function () { return ["expandedDetail"]; };
class StockReportComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(inventoryService, cd, dialog, translationService, customCurrencyPipe) {
        super(translationService);
        this.inventoryService = inventoryService;
        this.cd = cd;
        this.dialog = dialog;
        this.translationService = translationService;
        this.customCurrencyPipe = customCurrencyPipe;
        this.displayedColumns = ['action', 'productName', 'stock', 'averagePurchasePrice', 'averageSalesPrice'];
        this.columnsToDisplay = ["footer"];
        this.expandedElement = null;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.getLangDir();
        this.inventoryResource = new _core_domain_classes_inventory_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.InventoryResourceParameter();
        this.inventoryResource.pageSize = 50;
        this.inventoryResource.orderBy = 'productName asc';
    }
    get ProductNameFilter() {
        return this._productNameFilter;
    }
    set ProductNameFilter(v) {
        this._productNameFilter = v;
        const nameFilter = `productName##${v}`;
        this.filterObservable$.next(nameFilter);
    }
    ngOnInit() {
        this.dataSource = new src_app_inventory_inventory_list_inventory_datasource__WEBPACK_IMPORTED_MODULE_3__.InventoryDataSource(this.inventoryService);
        this.dataSource.loadData(this.inventoryResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)())
            .subscribe((c) => {
            this.inventoryResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split('##');
            if (strArray[0] === 'productName') {
                this.inventoryResource.productName = escape(strArray[1]);
            }
            this.dataSource.loadData(this.inventoryResource);
        });
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => {
            this.inventoryResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.inventoryResource.pageSize = this.paginator.pageSize;
            this.inventoryResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.inventoryResource);
        }))
            .subscribe();
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.inventoryResource.pageSize = c.pageSize;
                this.inventoryResource.skip = c.skip;
                this.inventoryResource.totalCount = c.totalCount;
            }
        });
    }
    toggleRow(element) {
        this.expandedElement = this.expandedElement === element ? null : element;
        this.cd.detectChanges();
    }
    onDownloadReport() {
        this.inventoryService.getInventoriesReport(this.inventoryResource)
            .subscribe((c) => {
            const inventories = [...c.body];
            let heading = [[
                    this.translationService.getValue('PRODUCT_NAME'),
                    this.translationService.getValue('STOCK'),
                    this.translationService.getValue('AVERAGE_PURCHASE_PRICE'),
                    this.translationService.getValue('AVERAGE_SALES_PRICE')
                ]];
            let inventoryReport = [];
            inventories.forEach((inventory) => {
                inventoryReport.push({
                    'PRODUCT_NAME': inventory.productName,
                    'STOCK': `${inventory.stock} - ${inventory.unitName}`,
                    'AVERAGE_PURCHASE_PRICE': this.customCurrencyPipe.transform(inventory.averagePurchasePrice),
                    'AVERAGE_SALES_PRICE': this.customCurrencyPipe.transform(inventory.averageSalesPrice)
                });
            });
            let workBook = xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.sheet_add_aoa(workBook, heading);
            let workSheet = xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.sheet_add_json(workBook, inventoryReport, { origin: "A2", skipHeader: true });
            xlsx__WEBPACK_IMPORTED_MODULE_13__.utils.book_append_sheet(workBook, workSheet, this.translationService.getValue('STOCK_REPORT'));
            xlsx__WEBPACK_IMPORTED_MODULE_13__.writeFile(workBook, this.translationService.getValue('STOCK_REPORT') + ".xlsx");
        });
    }
}
StockReportComponent.ɵfac = function StockReportComponent_Factory(t) { return new (t || StockReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_inventory_inventory_service__WEBPACK_IMPORTED_MODULE_4__.InventoryService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_5__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.CustomCurrencyPipe)); };
StockReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: StockReportComponent, selectors: [["app-stock-report"]], viewQuery: function StockReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.CustomCurrencyPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 53, vars: 22, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], [1, "col-md-auto", "col-sm-auto", "col-auto"], ["type", "submit", 1, "btn", "btn-warning", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-download"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "grid-height"], ["mat-table", "", "matSort", "", "multiTemplateDataRows", "", "matSortActive", "productName", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-100", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "productName"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "stock"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "averagePurchasePrice"], ["matColumnDef", "averageSalesPrice"], ["matColumnDef", "action-search"], ["class", "pr-5", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "productName-search"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "stock-search"], ["matColumnDef", "averagePurchasePrice-search"], ["matColumnDef", "averageSalesPrice-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "5", 4, "matFooterCellDef"], ["matColumnDef", "no-records", 4, "ngIf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-header-cell", "", 1, "pr-5"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", "w-90", 3, "ngModel", "ngModelChange"], ["mat-footer-cell", "", "colspan", "5"], [3, "dir", "length", "pageSize", "pageSizeOptions"], ["matColumnDef", "no-records"], ["mat-cell", ""], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "inventory"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-footer-row", ""], ["mat-row", "", 1, "example-detail-row"]], template: function StockReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function StockReportComponent_Template_button_click_8_listener() { return ctx.onDownloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, StockReportComponent_div_12_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, StockReportComponent_th_18_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, StockReportComponent_td_19_Template, 4, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, StockReportComponent_th_21_Template, 3, 3, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, StockReportComponent_td_22_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, StockReportComponent_th_24_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, StockReportComponent_td_25_Template, 2, 2, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, StockReportComponent_th_27_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, StockReportComponent_td_28_Template, 3, 3, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](29, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, StockReportComponent_th_30_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, StockReportComponent_td_31_Template, 3, 3, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](32, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, StockReportComponent_th_33_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, StockReportComponent_th_35_Template, 2, 1, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, StockReportComponent_th_37_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](38, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, StockReportComponent_th_39_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](40, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, StockReportComponent_th_41_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](42, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, StockReportComponent_td_43_Template, 2, 5, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, StockReportComponent_ng_container_44_Template, 2, 0, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](45, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, StockReportComponent_td_46_Template, 2, 2, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, StockReportComponent_tr_47_Template, 6, 3, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, StockReportComponent_tr_48_Template, 1, 0, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, StockReportComponent_tr_49_Template, 1, 0, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, StockReportComponent_tr_50_Template, 1, 0, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, StockReportComponent_tr_51_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, StockReportComponent_tr_52_Template, 1, 0, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 14, "STOCK_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 16, "DOWNLOAD_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 18, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dataSource.count === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](20, _c1))("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matFooterRowDef", ctx.columnsToDisplay)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](21, _c2));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__.Dir, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_21__.MatNoDataRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _inventory_history_list_inventory_history_list_component__WEBPACK_IMPORTED_MODULE_6__.InventoryHistoryListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_25__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_25__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_25__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_25__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_25__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_25__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_25__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 92155:
/*!*************************************************************!*\
  !*** ./src/app/reports/stock-report/stock-report.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockReportModule": () => (/* binding */ StockReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _stock_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stock-report-routing.module */ 76065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _stock_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stock-report.component */ 15426);
/* harmony import */ var _inventory_history_list_inventory_history_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-history-list/inventory-history-list.component */ 44813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);




















class StockReportModule {
}
StockReportModule.ɵfac = function StockReportModule_Factory(t) { return new (t || StockReportModule)(); };
StockReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: StockReportModule });
StockReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _stock_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](StockReportModule, { declarations: [_stock_report_component__WEBPACK_IMPORTED_MODULE_2__.StockReportComponent,
        _inventory_history_list_inventory_history_list_component__WEBPACK_IMPORTED_MODULE_3__.InventoryHistoryListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _stock_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.StockReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__.MatAutocompleteModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule] }); })();


/***/ }),

/***/ 19975:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/divider.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatDivider": () => (/* binding */ MatDivider),
/* harmony export */   "MatDividerModule": () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 88133);




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class MatDivider {
  constructor() {
    this._vertical = false;
    this._inset = false;
  }
  /** Whether the divider is vertically aligned. */


  get vertical() {
    return this._vertical;
  }

  set vertical(value) {
    this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
  }
  /** Whether the divider is an inset divider. */


  get inset() {
    return this._inset;
  }

  set inset(value) {
    this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
  }

}

MatDivider.ɵfac = function MatDivider_Factory(t) {
  return new (t || MatDivider)();
};

MatDivider.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatDivider,
  selectors: [["mat-divider"]],
  hostAttrs: ["role", "separator", 1, "mat-divider"],
  hostVars: 7,
  hostBindings: function MatDivider_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
    }
  },
  inputs: {
    vertical: "vertical",
    inset: "inset"
  },
  decls: 0,
  vars: 0,
  template: function MatDivider_Template(rf, ctx) {},
  styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDivider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-divider',
      host: {
        'role': 'separator',
        '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
        '[class.mat-divider-vertical]': 'vertical',
        '[class.mat-divider-horizontal]': '!vertical',
        '[class.mat-divider-inset]': 'inset',
        'class': 'mat-divider'
      },
      template: '',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"]
    }]
  }], null, {
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    inset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
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


class MatDividerModule {}

MatDividerModule.ɵfac = function MatDividerModule_Factory(t) {
  return new (t || MatDividerModule)();
};

MatDividerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatDividerModule
});
MatDividerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDividerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: [MatDivider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatDivider]
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
//# sourceMappingURL=src_app_reports_stock-report_stock-report_module_ts.js.map