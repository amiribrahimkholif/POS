"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_reports_sales-order-report_sales-order-report_module_ts"],{

/***/ 24198:
/*!*********************************************************************************************!*\
  !*** ./src/app/reports/sales-order-report/sales-order-items/sales-order-items.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderItemsComponent": () => (/* binding */ SalesOrderItemsComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales-order/sales-order.service */ 40838);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function SalesOrderItemsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SalesOrderItemsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function SalesOrderItemsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r21.productName, " ");
} }
function SalesOrderItemsComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SOURCE"));
} }
function SalesOrderItemsComponent_td_15_ng_contaner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SALES_ORDER_RETURN"), " ");
} }
function SalesOrderItemsComponent_td_15_ng_contaner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SALES_ORDER"), " ");
} }
function SalesOrderItemsComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesOrderItemsComponent_td_15_ng_contaner_1_Template, 3, 3, "ng-contaner", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SalesOrderItemsComponent_td_15_ng_contaner_2_Template, 3, 3, "ng-contaner", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r22.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r22.status != 1);
} }
function SalesOrderItemsComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT"), " ");
} }
function SalesOrderItemsComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r25.unitName, " ");
} }
function SalesOrderItemsComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE"), " ");
} }
function SalesOrderItemsComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r26.unitPrice), " ");
} }
function SalesOrderItemsComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "QUANTITY"), " ");
} }
function SalesOrderItemsComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.status === 1 ? -1 * element_r27.quantity : element_r27.quantity, " ");
} }
function SalesOrderItemsComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function SalesOrderItemsComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, element_r28.discount), "(", element_r28.discountPercentage, "%) ");
} }
function SalesOrderItemsComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TAX"), " ");
} }
function SalesOrderItemsComponent_td_30_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SalesOrderItemsComponent_td_30_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SalesOrderItemsComponent_td_30_span_1_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r31 = ctx.$implicit;
    const last_r32 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r31.taxName, "(", tax_r31.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r32);
} }
function SalesOrderItemsComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SalesOrderItemsComponent_td_30_span_1_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", element_r29.salesOrderItemTaxes);
} }
function SalesOrderItemsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function SalesOrderItemsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r34.taxValue), " ");
} }
function SalesOrderItemsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL"), " ");
} }
function SalesOrderItemsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r35.unitPrice * element_r35.quantity - element_r35.discount + element_r35.taxValue), " ");
} }
function SalesOrderItemsComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 25);
} }
function SalesOrderItemsComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("bg-warning1", row_r36.status === 1);
} }
class SalesOrderItemsComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(salesOrderService, translationService) {
        super(translationService);
        this.salesOrderService = salesOrderService;
        this.translationService = translationService;
        this.salesOrderItems = [];
        this.isLoading = false;
        this.displayedColumns = ['productName', 'source', 'unitName', 'unitPrice', 'quantity', 'totalDiscount', 'taxes', 'totalTax', 'totalAmount'];
        this.getLangDir();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['salesOrder']) {
            this.getSalesOrderItems();
        }
    }
    getSalesOrderItems() {
        this.isLoading = true;
        this.salesOrderService.getSalesOrderItems(this.salesOrder.id)
            .subscribe((data) => {
            this.isLoading = false;
            this.salesOrderItems = data;
        }, () => this.isLoading = false);
    }
}
SalesOrderItemsComponent.ɵfac = function SalesOrderItemsComponent_Factory(t) { return new (t || SalesOrderItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_1__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
SalesOrderItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SalesOrderItemsComponent, selectors: [["app-sales-order-items"]], inputs: { salesOrder: "salesOrder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 39, vars: 9, consts: [[1, "page-header-main"], [1, "row", "align-items-center"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "source"], ["matColumnDef", "unitName"], ["matColumnDef", "unitPrice"], ["matColumnDef", "quantity"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "taxes"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", ""]], template: function SalesOrderItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SalesOrderItemsComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SalesOrderItemsComponent_th_11_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SalesOrderItemsComponent_td_12_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SalesOrderItemsComponent_th_14_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SalesOrderItemsComponent_td_15_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SalesOrderItemsComponent_th_17_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SalesOrderItemsComponent_td_18_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SalesOrderItemsComponent_th_20_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SalesOrderItemsComponent_td_21_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SalesOrderItemsComponent_th_23_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SalesOrderItemsComponent_td_24_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SalesOrderItemsComponent_th_26_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, SalesOrderItemsComponent_td_27_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, SalesOrderItemsComponent_th_29_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SalesOrderItemsComponent_td_30_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, SalesOrderItemsComponent_th_32_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, SalesOrderItemsComponent_td_33_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, SalesOrderItemsComponent_th_35_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, SalesOrderItemsComponent_td_36_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, SalesOrderItemsComponent_tr_37_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SalesOrderItemsComponent_tr_38_Template, 1, 2, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "SALES_ORDER_ITEMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.salesOrderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1vcmRlci1pdGVtcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 80056:
/*!*********************************************************************************!*\
  !*** ./src/app/reports/sales-order-report/sales-order-report-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderReportRoutingModule": () => (/* binding */ SalesOrderReportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _sales_order_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-order-report.component */ 98491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _sales_order_report_component__WEBPACK_IMPORTED_MODULE_1__.SalesOrderReportComponent,
        data: { claimType: 'REP_SO_REP' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }
];
class SalesOrderReportRoutingModule {
}
SalesOrderReportRoutingModule.ɵfac = function SalesOrderReportRoutingModule_Factory(t) { return new (t || SalesOrderReportRoutingModule)(); };
SalesOrderReportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SalesOrderReportRoutingModule });
SalesOrderReportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesOrderReportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 98491:
/*!****************************************************************************!*\
  !*** ./src/app/reports/sales-order-report/sales-order-report.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderReportComponent": () => (/* binding */ SalesOrderReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/sales-order-resource-parameter */ 708);
/* harmony import */ var _core_services_date_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/date-range */ 68287);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var src_app_sales_order_add_sales_order_payment_add_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales-order/add-sales-order-payment/add-sales-order-payment.component */ 43085);
/* harmony import */ var src_app_sales_order_sales_order_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales-order/sales-order-datasource */ 80931);
/* harmony import */ var src_app_sales_order_view_sales_order_payment_view_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales-order/view-sales-order-payment/view-sales-order-payment.component */ 61739);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/purchase-order-paymentStatus.pipe */ 80443);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/sales-order/sales-order.service */ 40838);
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/customer/customer.service */ 61781);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _shared_sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/sales-order-invoice/sales-order-invoice.component */ 56717);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _sales_order_items_sales_order_items_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sales-order-items/sales-order-items.component */ 24198);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





















































const _c0 = function () { return ["/sales-order/add"]; };
function SalesOrderReportComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 2, "ADD_SALES_ORDER"), " ");
} }
function SalesOrderReportComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SalesOrderReportComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r49 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dir", ctx_r4.langDir)("value", a_r49.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", a_r49.name, " ");
} }
function SalesOrderReportComponent_mat_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function SalesOrderReportComponent_div_60_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "DATE_RANGE_VALIDATION_MSG"), " ");
} }
function SalesOrderReportComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SalesOrderReportComponent_div_60_div_1_Template, 3, 3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r6.searchForm.errors == null ? null : ctx_r6.searchForm.errors.dateRange);
} }
function SalesOrderReportComponent_th_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 82);
} }
function SalesOrderReportComponent_td_67_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SalesOrderReportComponent_td_67_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function SalesOrderReportComponent_td_67_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 91)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matMenuTriggerFor", _r55);
} }
const _c1 = function (a1) { return ["/sales-order/detail", a1]; };
function SalesOrderReportComponent_td_67_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 92)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](4, _c1, so_r51.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 2, "DETAIL"));
} }
function SalesOrderReportComponent_td_67_ng_container_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_td_67_ng_container_8_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r65); const so_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r63.deleteSalesOrder(so_r51)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, "DELETE"));
} }
function SalesOrderReportComponent_td_67_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SalesOrderReportComponent_td_67_ng_container_8_button_1_Template, 6, 3, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasClaim", "sales_order_delete_sales_order");
} }
function SalesOrderReportComponent_td_67_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_td_67_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r68); const so_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r66.onSaleOrderReturn(so_r51)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "assignment_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, "SALES_ORDER_RETURN"));
} }
function SalesOrderReportComponent_td_67_ng_contaner_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_td_67_ng_contaner_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r72); const so_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r70.addPayment(so_r51)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, "ADD_PAYMENT"));
} }
function SalesOrderReportComponent_td_67_ng_contaner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SalesOrderReportComponent_td_67_ng_contaner_11_button_1_Template, 6, 3, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasClaim", "sales_order_AddPayment_sales_order");
} }
function SalesOrderReportComponent_td_67_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_td_67_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r75); const so_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r73.viewPayment(so_r51)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2, "view_carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, "VIEW_PAYMENT"));
} }
const _c2 = function () { return ["sales_order_view_sales_order_detail", "sales_order_delete_sales_order", "sales_order_edit_sales_order", "sales_order_AddPayment_sales_order", "sales_order_ViewPayment_sales_order"]; };
function SalesOrderReportComponent_td_67_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 83)(1, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_td_67_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r77); const so_r51 = restoredCtx.$implicit; const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r76.toggleRow(so_r51)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, SalesOrderReportComponent_td_67_mat_icon_2_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, SalesOrderReportComponent_td_67_mat_icon_3_Template, 2, 0, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, SalesOrderReportComponent_td_67_button_4_Template, 3, 1, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "mat-menu", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, SalesOrderReportComponent_td_67_button_7_Template, 6, 6, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, SalesOrderReportComponent_td_67_ng_container_8_Template, 2, 1, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, SalesOrderReportComponent_td_67_button_10_Template, 6, 3, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, SalesOrderReportComponent_td_67_ng_contaner_11_Template, 2, 1, "ng-contaner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, SalesOrderReportComponent_td_67_button_12_Template, 6, 3, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_td_67_Template_button_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r77); const so_r51 = restoredCtx.$implicit; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r78.generateInvoice(so_r51)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const so_r51 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", so_r51 != ctx_r8.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", so_r51 == ctx_r8.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dir", ctx_r8.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasClaim", "sales_order_edit_sales_order");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", so_r51.status == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasClaim", "sale_order_return");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", so_r51.paymentStatus != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasClaim", "sales_order_ViewPayment_sales_order");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 10, "GENERATE_INVOICE"));
} }
function SalesOrderReportComponent_th_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function SalesOrderReportComponent_td_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 1, so_r79.soCreatedDate, "shortDate"), " ");
} }
function SalesOrderReportComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "ORDER_NUMBER"), " ");
} }
function SalesOrderReportComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 83)(1, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](2, _c1, so_r80.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", so_r80.orderNumber, " ");
} }
function SalesOrderReportComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE"), " ");
} }
function SalesOrderReportComponent_td_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 1, so_r81.deliveryDate, "shortDate"), " ");
} }
function SalesOrderReportComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "CUSTOMER_NAME"), " ");
} }
const _c3 = function (a1) { return ["/customer", a1]; };
function SalesOrderReportComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 98)(1, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](2, _c3, so_r82.customerId));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", so_r82.customerName, " ");
} }
function SalesOrderReportComponent_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function SalesOrderReportComponent_td_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, so_r83.totalDiscount), " ");
} }
function SalesOrderReportComponent_th_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function SalesOrderReportComponent_td_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, so_r84.totalTax), " ");
} }
function SalesOrderReportComponent_th_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "TOTAL_AMOUNT"), " ");
} }
function SalesOrderReportComponent_td_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, so_r85.totalAmount), " ");
} }
function SalesOrderReportComponent_th_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "TOTAL_PAID_AMOUNT"), " ");
} }
function SalesOrderReportComponent_td_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, so_r86.totalPaidAmount), " ");
} }
function SalesOrderReportComponent_th_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "PAYMENT_STATUS"), " ");
} }
const _c4 = function (a0, a1, a2) { return { "badge-success": a0, "badge-danger": a1, "badge-warning": a2 }; };
function SalesOrderReportComponent_td_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 101)(1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "paymentStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction3"](4, _c4, so_r87.paymentStatus == 0, so_r87.paymentStatus == 1, so_r87.paymentStatus == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 2, so_r87.paymentStatus));
} }
function SalesOrderReportComponent_th_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "IS_RETURN"), " ");
} }
function SalesOrderReportComponent_td_97_ng_contaner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "YES"), " ");
} }
function SalesOrderReportComponent_td_97_ng_contaner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "NO"), " ");
} }
function SalesOrderReportComponent_td_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SalesOrderReportComponent_td_97_ng_contaner_1_Template, 3, 3, "ng-contaner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, SalesOrderReportComponent_td_97_ng_contaner_2_Template, 3, 3, "ng-contaner", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", so_r88.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", so_r88.status != 1);
} }
function SalesOrderReportComponent_th_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
function SalesOrderReportComponent_th_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
function SalesOrderReportComponent_th_103_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 103)(1, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function SalesOrderReportComponent_th_103_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r91.OrderNumberFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "ORDER_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r31.OrderNumberFilter);
} }
function SalesOrderReportComponent_th_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
function SalesOrderReportComponent_th_107_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r95 = ctx.$implicit;
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dir", ctx_r94.langDir)("value", customer_r95.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", customer_r95.customerName, " ");
} }
function SalesOrderReportComponent_th_107_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "mat-autocomplete", 106, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("optionSelected", function SalesOrderReportComponent_th_107_Template_mat_autocomplete_optionSelected_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵresetView"](ctx_r96.CustomerFilter = $event.option.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "mat-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, SalesOrderReportComponent_th_107_mat_option_8_Template, 2, 3, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4);
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 7, "CUSTOMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formControl", ctx_r33.customerNameControl)("matAutocomplete", _r93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("autoActiveFirstOption", true)("dir", ctx_r33.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 9, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](9, 11, ctx_r33.customerList$));
} }
function SalesOrderReportComponent_th_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
function SalesOrderReportComponent_th_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
function SalesOrderReportComponent_th_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
function SalesOrderReportComponent_th_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
function SalesOrderReportComponent_th_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
function SalesOrderReportComponent_th_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "th", 103);
} }
const _c5 = function () { return [10, 20, 30]; };
function SalesOrderReportComponent_td_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "mat-paginator", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dir", ctx_r40.langDir)("length", ctx_r40.salesOrderResource.totalCount)("pageSize", ctx_r40.salesOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c5));
} }
function SalesOrderReportComponent_td_123_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 111)(2, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "app-sales-order-items", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const soObject_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("@detailExpand", soObject_r98 == ctx_r99.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("salesOrder", soObject_r98);
} }
function SalesOrderReportComponent_td_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, SalesOrderReportComponent_td_123_ng_container_1_Template, 4, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soObject_r98 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("colspan", ctx_r41.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", soObject_r98 == ctx_r41.expandedElement);
} }
function SalesOrderReportComponent_tr_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tr")(1, "td", 114)(2, "span", 115)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function SalesOrderReportComponent_tr_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tr", 116);
} }
function SalesOrderReportComponent_tr_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tr", 117);
} if (rf & 2) {
    const row_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵclassProp"]("bg-warning1", row_r101.status === 1);
} }
function SalesOrderReportComponent_tr_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tr", 116);
} }
function SalesOrderReportComponent_tr_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tr", 118);
} }
function SalesOrderReportComponent_tr_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tr", 119);
} }
function SalesOrderReportComponent_ng_container_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "app-sales-order-invoice", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("salesOrder", ctx_r48.salesOrderForInvoice);
} }
const _c6 = function () { return ["expandedDetail"]; };
class SalesOrderReportComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(salesOrderService, customerService, cd, commonDialogService, toastrService, router, translationService, dialog, clonerService, fb, productService, utcToLocalTime, customCurrencyPipe, paymentStatusPipe) {
        super(translationService);
        this.salesOrderService = salesOrderService;
        this.customerService = customerService;
        this.cd = cd;
        this.commonDialogService = commonDialogService;
        this.toastrService = toastrService;
        this.router = router;
        this.translationService = translationService;
        this.dialog = dialog;
        this.clonerService = clonerService;
        this.fb = fb;
        this.productService = productService;
        this.utcToLocalTime = utcToLocalTime;
        this.customCurrencyPipe = customCurrencyPipe;
        this.paymentStatusPipe = paymentStatusPipe;
        this.salesOrders = [];
        this.displayedColumns = ['action', 'soCreatedDate', 'orderNumber', 'deliveryDate', 'customerName', 'totalDiscount', 'totalTax', 'totalAmount', 'totalPaidAmount', 'paymentStatus', 'status'];
        this.filterColumns = ['action-search', 'soCreatedDate-search', 'orderNumber-search', 'deliverDate-search', 'customer-search', 'totalAmount-search', 'totalDiscount-search', 'totalTax-search', 'totalPaidAmount-search', 'paymentStatus-search', 'status-search'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.customerNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormControl();
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_21__.Subject();
        this.products = [];
        this.currentDate = new Date();
        this.getLangDir();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.ProductResourceParameter();
        this.salesOrderResource = new _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_1__.SalesOrderResourceParameter();
        this.salesOrderResource.pageSize = 50;
        this.salesOrderResource.orderBy = 'soCreatedDate asc';
    }
    get CustomerFilter() {
        return this._customerFilter;
    }
    set CustomerFilter(v) {
        this._customerFilter = v;
        const customerFilter = `customerName:${v}`;
        this.filterObservable$.next(customerFilter);
    }
    get OrderNumberFilter() {
        return this._orderNumberFilter;
    }
    set OrderNumberFilter(v) {
        this._orderNumberFilter = v;
        const orderNumberFilter = `orderNumber:${v}`;
        this.filterObservable$.next(orderNumberFilter);
    }
    ngOnInit() {
        this.customerNameControlOnChange();
        this.createSearchFormGroup();
        this.getProductByNameValue();
        this.getProducts();
        this.dataSource = new src_app_sales_order_sales_order_datasource__WEBPACK_IMPORTED_MODULE_5__.SalesOrderDataSource(this.salesOrderService);
        this.dataSource.loadData(this.salesOrderResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.distinctUntilChanged)())
            .subscribe((c) => {
            this.salesOrderResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split(':');
            if (strArray[0] === 'customerName') {
                this.salesOrderResource.customerName = strArray[1];
            }
            else if (strArray[0] === 'orderNumber') {
                this.salesOrderResource.orderNumber = strArray[1];
            }
            this.dataSource.loadData(this.salesOrderResource);
        });
    }
    addPayment(salesOrder) {
        const dialogRef = this.dialog.open(src_app_sales_order_add_sales_order_payment_add_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_4__.AddSalesOrderPaymentComponent, {
            width: '100vh',
            direction: this.langDir,
            data: Object.assign({}, salesOrder)
        });
        dialogRef.afterClosed().subscribe((isAdded) => {
            if (isAdded) {
                this.dataSource.loadData(this.salesOrderResource);
            }
        });
    }
    createSearchFormGroup() {
        this.searchForm = this.fb.group({
            fromDate: [''],
            toDate: [''],
            filterProductValue: [''],
            productId: ['']
        }, {
            validators: (0,_core_services_date_range__WEBPACK_IMPORTED_MODULE_2__.dateCompare)()
        });
    }
    onSearch() {
        if (this.searchForm.valid) {
            this.salesOrderResource.fromDate = this.searchForm.get('fromDate').value;
            this.salesOrderResource.toDate = this.searchForm.get('toDate').value;
            this.salesOrderResource.productId = this.searchForm.get('productId').value;
            this.dataSource.loadData(this.salesOrderResource);
        }
    }
    onClear() {
        this.searchForm.reset();
        this.salesOrderResource.fromDate = this.searchForm.get('fromDate').value;
        this.salesOrderResource.toDate = this.searchForm.get('toDate').value;
        this.salesOrderResource.productId = this.searchForm.get('productId').value;
        this.dataSource.loadData(this.salesOrderResource);
    }
    getProductByNameValue() {
        this.sub$.sink = this.searchForm.get('filterProductValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.switchMap)(c => {
            this.productResource.name = c;
            return this.productService.getProducts(this.productResource);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.products = [...resp.body];
            }
        }, (err) => {
        });
    }
    getProducts() {
        this.productResource.name = '';
        return this.productService.getProducts(this.productResource)
            .subscribe((resp) => {
            if (resp && resp.headers) {
                this.products = [...resp.body];
            }
        }, (err) => {
        });
        ;
    }
    onDetailSalesOrder(salesOrder) {
        this.router.navigate(['/sales-order', salesOrder.id]);
    }
    customerNameControlOnChange() {
        this.customerList$ = this.customerNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.switchMap)(c => {
            return this.customerService.getCustomersForDropDown('CustomerName', c);
        }));
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)((c) => {
            this.salesOrderResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.salesOrderResource.pageSize = this.paginator.pageSize;
            this.salesOrderResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.salesOrderResource);
        }))
            .subscribe();
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.salesOrderResource.pageSize = c.pageSize;
                this.salesOrderResource.skip = c.skip;
                this.salesOrderResource.totalCount = c.totalCount;
            }
        });
    }
    toggleRow(element) {
        this.expandedElement = this.expandedElement === element ? null : element;
        this.cd.detectChanges();
    }
    deleteSalesOrder(salesOrder) {
        this.commonDialogService.deleteConformationDialog(this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE'))
            .subscribe((isYes) => {
            if (isYes) {
                this.salesOrderService.deleteSalesOrder(salesOrder.id).subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('SALES_ORDER_DELETED_SUCCESSFULLY'));
                    this.dataSource.loadData(this.salesOrderResource);
                });
            }
        });
    }
    viewPayment(salesOrder) {
        const dialogRef = this.dialog.open(src_app_sales_order_view_sales_order_payment_view_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_6__.ViewSalesOrderPaymentComponent, {
            data: Object.assign({}, salesOrder), direction: this.langDir,
        });
        dialogRef.afterClosed().subscribe((isAdded) => {
            if (isAdded) {
                this.dataSource.loadData(this.salesOrderResource);
            }
        });
    }
    onSaleOrderReturn(saleOrder) {
        this.router.navigate(['sales-order-return', saleOrder.id]);
    }
    generateInvoice(so) {
        let soForInvoice = this.clonerService.deepClone(so);
        const getCustomerRequest = this.customerService.getCustomer(so.customerId);
        const getSalesOrderItems = this.salesOrderService.getSalesOrderItems(so.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.forkJoin)({ getCustomerRequest, getSalesOrderItems }).subscribe(response => {
            soForInvoice.customer = response.getCustomerRequest;
            soForInvoice.salesOrderItems = response.getSalesOrderItems;
            this.salesOrderForInvoice = soForInvoice;
        });
    }
    onDownloadReport() {
        this.salesOrderService.getAllSalesOrderExcel(this.salesOrderResource)
            .subscribe((c) => {
            this.salesOrders = [...c.body];
            let heading = [[
                    this.translationService.getValue('CREATED_DATE'),
                    this.translationService.getValue('ORDER_NUMBER'),
                    this.translationService.getValue('DELIVERY_DATE'),
                    this.translationService.getValue('CUSTOMER_NAME'),
                    this.translationService.getValue('TOTAL_DISCOUNT'),
                    this.translationService.getValue('TOTAL_TAX'),
                    this.translationService.getValue('TOTAL_AMOUNT'),
                    this.translationService.getValue('TOTAL_PAID_AMOUNT'),
                    this.translationService.getValue('PAYMENT_STATUS'),
                    this.translationService.getValue('IS_RETURN')
                ]];
            let salesOrderReport = [];
            this.salesOrders.forEach((salesOrder) => {
                salesOrderReport.push({
                    'CREATED_DATE': this.utcToLocalTime.transform(salesOrder.soCreatedDate, 'shortDate'),
                    'ORDER_NUMBER': salesOrder.orderNumber,
                    'DELIVERY_DATE': this.utcToLocalTime.transform(salesOrder.deliveryDate, 'shortDate'),
                    'CUSTOMER_NAME': salesOrder.customerName,
                    'TOTAL_DISCOUNT': this.customCurrencyPipe.transform(salesOrder.totalDiscount),
                    'TOTAL_TAX': this.customCurrencyPipe.transform(salesOrder.totalTax),
                    'TOTAL_AMOUNT': this.customCurrencyPipe.transform(salesOrder.totalAmount),
                    'TOTAL_PAID_AMOUNT': this.customCurrencyPipe.transform(salesOrder.totalPaidAmount),
                    'PAYMENT_STATUS': this.paymentStatusPipe.transform(salesOrder.paymentStatus),
                    'IS_RETURN': salesOrder.status == 1 ? 'True' : 'False'
                });
            });
            let workBook = xlsx__WEBPACK_IMPORTED_MODULE_28__.utils.book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_28__.utils.sheet_add_aoa(workBook, heading);
            let workSheet = xlsx__WEBPACK_IMPORTED_MODULE_28__.utils.sheet_add_json(workBook, salesOrderReport, { origin: "A2", skipHeader: true });
            xlsx__WEBPACK_IMPORTED_MODULE_28__.utils.book_append_sheet(workBook, workSheet, this.translationService.getValue('SALES_ORDER_REPORT'));
            xlsx__WEBPACK_IMPORTED_MODULE_28__.writeFile(workBook, this.translationService.getValue('SALES_ORDER_REPORT') + ".xlsx");
        });
    }
}
SalesOrderReportComponent.ɵfac = function SalesOrderReportComponent_Factory(t) { return new (t || SalesOrderReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_10__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_11__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_12__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_29__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_30__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_13__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_14__.ClonerService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_15__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_8__.UTCToLocalTime), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.CustomCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__.PaymentStatusPipe)); };
SalesOrderReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: SalesOrderReportComponent, selectors: [["app-sales-order-report"]], viewQuery: function SalesOrderReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵProvidersFeature"]([_shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_8__.UTCToLocalTime, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.CustomCurrencyPipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__.PaymentStatusPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]], decls: 131, vars: 62, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "btn blue-btn btn-sm m-right-10", 3, "routerLink", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-sm-12", "mb-3"], [3, "formGroup"], [1, "col-md-2"], [1, "form-group"], ["for", "fromDate"], ["id", "fromDate", "formControlName", "fromDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["fromDate", ""], ["for", "toDate"], ["id", "toDate", "formControlName", "toDate", 1, "form-control", 3, "max", "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["toDate", ""], [1, "col-md-3"], ["formControlName", "productId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filterProductValue", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value", 4, "ngFor", "ngForOf"], [3, "value", 4, "ngIf"], [1, "col-md-5", "report-tool-bar"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-search"], ["type", "submit", 1, "btn", "btn-danger", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-eraser"], ["type", "submit", 1, "btn", "btn-warning", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-download"], [1, "col-sm-12"], [4, "ngIf"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "soCreatedDate", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "soCreatedDate"], ["class", "table-column-100", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderNumber"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "deliveryDate"], ["matColumnDef", "customerName"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalDiscount"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "totalPaidAmount"], ["matColumnDef", "paymentStatus"], ["class", "table-column-150", "mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "action-search"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "soCreatedDate-search"], ["matColumnDef", "orderNumber-search"], ["matColumnDef", "deliverDate-search"], ["matColumnDef", "customer-search"], ["matColumnDef", "totalAmount-search"], ["matColumnDef", "totalDiscount-search"], ["matColumnDef", "totalTax-search"], ["matColumnDef", "totalPaidAmount-search"], ["matColumnDef", "paymentStatus-search"], ["matColumnDef", "status-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "12", 4, "matFooterCellDef"], ["matColumnDef", "expandedDetail"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "bg-warning1", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "loading-shade"], [3, "dir", "value"], [3, "value"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-icon-button", "", 3, "click"], ["class", "ml-4", "mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor", 4, "hasClaim"], [3, "dir"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", "aria-label", "Action", 1, "ml-4", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], [3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 1, "table-column-150", 2, "text-align", "center"], [1, "badge-pill", 3, "ngClass"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "formControl", "matAutocomplete"], [3, "autoActiveFirstOption", "dir", "optionSelected"], ["autoCustomer", "matAutocomplete"], ["value", ""], ["mat-footer-cell", "", "colspan", "12"], [3, "dir", "length", "pageSize", "pageSizeOptions"], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "salesOrder"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], ["mat-row", "", 1, "example-detail-row"]], template: function SalesOrderReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, SalesOrderReportComponent_button_8_Template, 4, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, SalesOrderReportComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "form", 8)(14, "div", 6)(15, "div", 9)(16, "div", 10)(17, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "owl-date-time", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](24, "div", 9)(25, "div", 10)(26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "owl-date-time", 13, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "div", 18)(34, "div", 10)(35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "mat-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](42, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](43, SalesOrderReportComponent_mat_option_43_Template, 2, 3, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](44, SalesOrderReportComponent_mat_option_44_Template, 3, 3, "mat-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](45, "div", 23)(46, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_Template_button_click_46_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](47, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](50, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_Template_button_click_50_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](51, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](54, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function SalesOrderReportComponent_Template_button_click_54_listener() { return ctx.onDownloadReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](55, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](58, "div", 6)(59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](60, SalesOrderReportComponent_div_60_Template, 2, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](61, "div", 6)(62, "div", 30)(63, "div", 32)(64, "table", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](65, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](66, SalesOrderReportComponent_th_66_Template, 1, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](67, SalesOrderReportComponent_td_67_Template, 19, 13, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](68, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](69, SalesOrderReportComponent_th_69_Template, 3, 3, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](70, SalesOrderReportComponent_td_70_Template, 3, 4, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](71, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](72, SalesOrderReportComponent_th_72_Template, 3, 3, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](73, SalesOrderReportComponent_td_73_Template, 3, 4, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](74, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](75, SalesOrderReportComponent_th_75_Template, 3, 3, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](76, SalesOrderReportComponent_td_76_Template, 3, 4, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](77, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](78, SalesOrderReportComponent_th_78_Template, 3, 3, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](79, SalesOrderReportComponent_td_79_Template, 3, 4, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](80, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](81, SalesOrderReportComponent_th_81_Template, 3, 3, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](82, SalesOrderReportComponent_td_82_Template, 3, 3, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](83, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](84, SalesOrderReportComponent_th_84_Template, 3, 3, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](85, SalesOrderReportComponent_td_85_Template, 3, 3, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](86, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](87, SalesOrderReportComponent_th_87_Template, 3, 3, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](88, SalesOrderReportComponent_td_88_Template, 3, 3, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](89, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](90, SalesOrderReportComponent_th_90_Template, 3, 3, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](91, SalesOrderReportComponent_td_91_Template, 3, 3, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](92, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](93, SalesOrderReportComponent_th_93_Template, 3, 3, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](94, SalesOrderReportComponent_td_94_Template, 4, 8, "td", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](95, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](96, SalesOrderReportComponent_th_96_Template, 3, 3, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](97, SalesOrderReportComponent_td_97_Template, 3, 2, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](98, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](99, SalesOrderReportComponent_th_99_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](100, 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](101, SalesOrderReportComponent_th_101_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](102, 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](103, SalesOrderReportComponent_th_103_Template, 3, 4, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](104, 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](105, SalesOrderReportComponent_th_105_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](106, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](107, SalesOrderReportComponent_th_107_Template, 10, 13, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](108, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](109, SalesOrderReportComponent_th_109_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](110, 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](111, SalesOrderReportComponent_th_111_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](112, 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](113, SalesOrderReportComponent_th_113_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](114, 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](115, SalesOrderReportComponent_th_115_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](116, 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](117, SalesOrderReportComponent_th_117_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](118, 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](119, SalesOrderReportComponent_th_119_Template, 1, 0, "th", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](120, 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](121, SalesOrderReportComponent_td_121_Template, 2, 5, "td", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](122, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](123, SalesOrderReportComponent_td_123_Template, 2, 2, "td", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](124, SalesOrderReportComponent_tr_124_Template, 6, 3, "tr", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](125, SalesOrderReportComponent_tr_125_Template, 1, 0, "tr", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](126, SalesOrderReportComponent_tr_126_Template, 1, 2, "tr", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](127, SalesOrderReportComponent_tr_127_Template, 1, 0, "tr", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](128, SalesOrderReportComponent_tr_128_Template, 1, 0, "tr", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](129, SalesOrderReportComponent_tr_129_Template, 1, 0, "tr", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](130, SalesOrderReportComponent_ng_container_130_Template, 2, 1, "ng-container", 31);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 37, "SALES_ORDER_REPORT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hasClaim", "sales_order_add_sales_order");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](10, 39, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](19, 41, "FROM_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](21, 43, "FROM_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r2)("owlDateTime", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](28, 45, "TO_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](30, 47, "TO_DATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("max", ctx.currentDate)("owlDateTimeTrigger", _r3)("owlDateTime", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("pickerType", "calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](37, 49, "SELECT_PRODUCT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](39, 51, "SELECT_PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](41, 53, "SEARCH_OTHER_PRODUCTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.products.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](49, 55, "SEARCH"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](53, 57, "CLEAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](57, 59, "DOWNLOAD_REPORT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.searchForm.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matHeaderRowDef", ctx.filterColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](61, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_16__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_35__.Dir, _shared_sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_17__.SalesOrderInvoiceComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_36__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_37__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_33__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_39__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_41__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__.MatAutocompleteTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_43__.MatProgressSpinner, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_44__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_44__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_44__.OwlDateTimeComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_45__.MatDivider, _sales_order_items_sales_order_items_component__WEBPACK_IMPORTED_MODULE_18__.SalesOrderItemsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_34__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_8__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_46__.TranslatePipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__.PaymentStatusPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1vcmRlci1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_47__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_47__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_47__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_47__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_47__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_47__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_47__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 84277:
/*!*************************************************************************!*\
  !*** ./src/app/reports/sales-order-report/sales-order-report.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderReportModule": () => (/* binding */ SalesOrderReportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sales_order_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-order-report-routing.module */ 80056);
/* harmony import */ var _sales_order_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-order-report.component */ 98491);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _sales_order_items_sales_order_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-order-items/sales-order-items.component */ 24198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);

























class SalesOrderReportModule {
}
SalesOrderReportModule.ɵfac = function SalesOrderReportModule_Factory(t) { return new (t || SalesOrderReportModule)(); };
SalesOrderReportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SalesOrderReportModule });
SalesOrderReportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _sales_order_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesOrderReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_22__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_22__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SalesOrderReportModule, { declarations: [_sales_order_report_component__WEBPACK_IMPORTED_MODULE_1__.SalesOrderReportComponent,
        _sales_order_items_sales_order_items_component__WEBPACK_IMPORTED_MODULE_3__.SalesOrderItemsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _sales_order_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.SalesOrderReportRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_22__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_22__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDividerModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_reports_sales-order-report_sales-order-report_module_ts.js.map