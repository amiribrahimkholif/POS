"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_reports_warehouse-stock-report_warehouse-stock-report_module_ts"],{

/***/ 1940:
/*!*************************************************************************************************************!*\
  !*** ./src/app/reports/warehouse-stock-report/warehouse-product-items/warehouse-product-items.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseProductItemsComponent": () => (/* binding */ WarehouseProductItemsComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _warehouse_stock_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../warehouse-stock-report.service */ 11037);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);










function WarehouseProductItemsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function WarehouseProductItemsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function WarehouseProductItemsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r7.productName, " ");
} }
function WarehouseProductItemsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "STOCK"), " ");
} }
function WarehouseProductItemsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", element_r8.stock, "(", element_r8.unitCode, ") ");
} }
function WarehouseProductItemsComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 16);
} }
function WarehouseProductItemsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 17);
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-warning1", row_r9.status === 1);
} }
class WarehouseProductItemsComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(warehouseStockReportService, translationService) {
        super(translationService);
        this.warehouseStockReportService = warehouseStockReportService;
        this.translationService = translationService;
        this.warehouseInventory = [];
        this.isLoading = false;
        this.displayedColumns = ['productName', 'stock'];
        this.getLangDir();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['warehouse']) {
            this.getWarehouseProduct();
        }
    }
    getWarehouseProduct() {
        this.isLoading = true;
        this.warehouseStockReportService.getWarehouseProduct(this.warehouse.id)
            .subscribe((data) => {
            this.isLoading = false;
            this.warehouseInventory = data;
        }, () => this.isLoading = false);
    }
}
WarehouseProductItemsComponent.ɵfac = function WarehouseProductItemsComponent_Factory(t) { return new (t || WarehouseProductItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_warehouse_stock_report_service__WEBPACK_IMPORTED_MODULE_1__.WarehouseStockReportService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
WarehouseProductItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WarehouseProductItemsComponent, selectors: [["app-warehouse-product-items"]], inputs: { warehouse: "warehouse" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 9, consts: [[1, "page-header-main"], [1, "row", "align-items-center"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "stock"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function WarehouseProductItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, WarehouseProductItemsComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, WarehouseProductItemsComponent_th_11_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, WarehouseProductItemsComponent_td_12_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, WarehouseProductItemsComponent_th_14_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, WarehouseProductItemsComponent_td_15_Template, 2, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, WarehouseProductItemsComponent_tr_16_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, WarehouseProductItemsComponent_tr_17_Template, 1, 2, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, "PRODUCT_ITEMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.warehouseInventory);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2UtcHJvZHVjdC1pdGVtcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35727:
/*!*****************************************************************************************!*\
  !*** ./src/app/reports/warehouse-stock-report/warehouse-stock-report-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseStockReportRoutingModule": () => (/* binding */ WarehouseStockReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _warehouse_stock_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-stock-report.component */ 28891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _warehouse_stock_report_component__WEBPACK_IMPORTED_MODULE_1__.WarehouseStockReportComponent,
        data: { claimType: 'REP_VIEW_WAR_REP' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
    },
];
class WarehouseStockReportRoutingModule {
}
WarehouseStockReportRoutingModule.ɵfac = function WarehouseStockReportRoutingModule_Factory(t) { return new (t || WarehouseStockReportRoutingModule)(); };
WarehouseStockReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: WarehouseStockReportRoutingModule });
WarehouseStockReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WarehouseStockReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 28891:
/*!************************************************************************************!*\
  !*** ./src/app/reports/warehouse-stock-report/warehouse-stock-report.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseStockReportComponent": () => (/* binding */ WarehouseStockReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/purchase-order-paymentStatus.pipe */ 80443);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _warehouse_stock_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./warehouse-stock-report.service */ 11037);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _warehouse_product_items_warehouse_product_items_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warehouse-product-items/warehouse-product-items.component */ 1940);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

















function WarehouseStockReportComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 26);
} }
function WarehouseStockReportComponent_td_13_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseStockReportComponent_td_13_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function WarehouseStockReportComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WarehouseStockReportComponent_td_13_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const so_r15 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r18.toggleRow(so_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WarehouseStockReportComponent_td_13_mat_icon_2_Template, 2, 0, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, WarehouseStockReportComponent_td_13_mat_icon_3_Template, 2, 0, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r15 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", so_r15 != ctx_r1.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", so_r15 == ctx_r1.expandedElement);
} }
function WarehouseStockReportComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function WarehouseStockReportComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](so_r20.name);
} }
function WarehouseStockReportComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "CONTACT_PERSON"), " ");
} }
function WarehouseStockReportComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](so_r21.contactPerson);
} }
function WarehouseStockReportComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "MOBILE_NUMBER"), " ");
} }
function WarehouseStockReportComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r22.mobileNumber, " ");
} }
function WarehouseStockReportComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "EMAIL"), " ");
} }
function WarehouseStockReportComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", element_r23.email, " ");
} }
function WarehouseStockReportComponent_td_27_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 36)(2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-warehouse-product-items", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const soObject_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("@detailExpand", soObject_r24 == ctx_r25.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("warehouse", soObject_r24);
} }
function WarehouseStockReportComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, WarehouseStockReportComponent_td_27_ng_container_1_Template, 4, 2, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soObject_r24 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("colspan", ctx_r10.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", soObject_r24 == ctx_r10.expandedElement);
} }
function WarehouseStockReportComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 39)(2, "span", 40)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function WarehouseStockReportComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 41);
} }
function WarehouseStockReportComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 42);
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("bg-warning1", row_r27.status === 1);
} }
function WarehouseStockReportComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 43);
} }
const _c0 = function () { return ["expandedDetail"]; };
class WarehouseStockReportComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(cd, translationService, warehouseStockReportService) {
        super(translationService);
        this.cd = cd;
        this.translationService = translationService;
        this.warehouseStockReportService = warehouseStockReportService;
        this.displayedColumns = ['action', 'name', 'contactPerson', 'mobileNumber', 'email'];
        this.waehouseList = [];
        this.getLangDir();
    }
    ngOnInit() {
        this.getWarehouse();
    }
    getWarehouse() {
        return this.warehouseStockReportService.getWarehouses().subscribe((resp) => {
            if (resp) {
                this.waehouseList = resp;
            }
        }, (err) => { });
    }
    toggleRow(element) {
        this.expandedElement = this.expandedElement === element ? null : element;
        this.cd.detectChanges();
    }
}
WarehouseStockReportComponent.ɵfac = function WarehouseStockReportComponent_Factory(t) { return new (t || WarehouseStockReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_warehouse_stock_report_service__WEBPACK_IMPORTED_MODULE_5__.WarehouseStockReportService)); };
WarehouseStockReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: WarehouseStockReportComponent, selectors: [["app-warehouse-stock-report"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_2__.UTCToLocalTime, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CustomCurrencyPipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_1__.PaymentStatusPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 32, vars: 10, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "soCreatedDate", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-100", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["class", "table-column-300", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "contactPerson"], ["class", "table-column-200", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "mobileNumber"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "expandedDetail"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], ["mat-header-cell", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "warehouse"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-row", "", 1, "example-detail-row"]], template: function WarehouseStockReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, WarehouseStockReportComponent_th_12_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, WarehouseStockReportComponent_td_13_Template, 4, 2, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, WarehouseStockReportComponent_th_15_Template, 3, 3, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, WarehouseStockReportComponent_td_16_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](17, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, WarehouseStockReportComponent_th_18_Template, 3, 3, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, WarehouseStockReportComponent_td_19_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](20, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, WarehouseStockReportComponent_th_21_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, WarehouseStockReportComponent_td_22_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](23, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, WarehouseStockReportComponent_th_24_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, WarehouseStockReportComponent_td_25_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](26, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, WarehouseStockReportComponent_td_27_Template, 2, 2, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, WarehouseStockReportComponent_tr_28_Template, 6, 3, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, WarehouseStockReportComponent_tr_29_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, WarehouseStockReportComponent_tr_30_Template, 1, 2, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, WarehouseStockReportComponent_tr_31_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 7, "WAREHOUSE_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.waehouseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _warehouse_product_items_warehouse_product_items_component__WEBPACK_IMPORTED_MODULE_6__.WarehouseProductItemsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YXJlaG91c2Utc3RvY2stcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 8041:
/*!*********************************************************************************!*\
  !*** ./src/app/reports/warehouse-stock-report/warehouse-stock-report.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseStockReportModule": () => (/* binding */ WarehouseStockReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _warehouse_stock_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warehouse-stock-report.component */ 28891);
/* harmony import */ var _warehouse_stock_report_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-stock-report-routing.module */ 35727);
/* harmony import */ var _warehouse_product_items_warehouse_product_items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-product-items/warehouse-product-items.component */ 1940);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);












class WarehouseStockReportModule {
}
WarehouseStockReportModule.ɵfac = function WarehouseStockReportModule_Factory(t) { return new (t || WarehouseStockReportModule)(); };
WarehouseStockReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: WarehouseStockReportModule });
WarehouseStockReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _warehouse_stock_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.WarehouseStockReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WarehouseStockReportModule, { declarations: [_warehouse_stock_report_component__WEBPACK_IMPORTED_MODULE_0__.WarehouseStockReportComponent,
        _warehouse_product_items_warehouse_product_items_component__WEBPACK_IMPORTED_MODULE_2__.WarehouseProductItemsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _warehouse_stock_report_routing_module__WEBPACK_IMPORTED_MODULE_1__.WarehouseStockReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 11037:
/*!**********************************************************************************!*\
  !*** ./src/app/reports/warehouse-stock-report/warehouse-stock-report.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WarehouseStockReportService": () => (/* binding */ WarehouseStockReportService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);



class WarehouseStockReportService {
    constructor(http) {
        this.http = http;
    }
    getWarehouses() {
        const url = 'warehouses';
        return this.http.get(url);
    }
    getWarehouseProduct(warehouseId) {
        const url = `warehouse/${warehouseId}/items`;
        return this.http.get(url);
    }
}
WarehouseStockReportService.ɵfac = function WarehouseStockReportService_Factory(t) { return new (t || WarehouseStockReportService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
WarehouseStockReportService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WarehouseStockReportService, factory: WarehouseStockReportService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_reports_warehouse-stock-report_warehouse-stock-report_module_ts.js.map