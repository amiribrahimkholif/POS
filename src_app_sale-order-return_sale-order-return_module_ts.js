"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_sale-order-return_sale-order-return_module_ts"],{

/***/ 11645:
/*!**********************************************************************************************!*\
  !*** ./src/app/sale-order-return/sale-order-return-item/sale-order-return-item.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleOrderReturnItemComponent": () => (/* binding */ SaleOrderReturnItemComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales-order/sales-order.service */ 40838);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function SaleOrderReturnItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SaleOrderReturnItemComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function SaleOrderReturnItemComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r23.productName, " ");
} }
function SaleOrderReturnItemComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SOURCE"));
} }
function SaleOrderReturnItemComponent_td_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SALES_ORDER_RETURN"), " ");
} }
function SaleOrderReturnItemComponent_td_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SALES_ORDER"), " ");
} }
function SaleOrderReturnItemComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SaleOrderReturnItemComponent_td_15_ng_container_1_Template, 3, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SaleOrderReturnItemComponent_td_15_ng_container_2_Template, 3, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r24.status === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r24.status !== 1);
} }
function SaleOrderReturnItemComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT"), " ");
} }
function SaleOrderReturnItemComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.unitName, " ");
} }
function SaleOrderReturnItemComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE"), " ");
} }
function SaleOrderReturnItemComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r28.unitPrice), " ");
} }
function SaleOrderReturnItemComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "QUANTITY"), " ");
} }
function SaleOrderReturnItemComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r29.status === 1 ? -1 * element_r29.quantity : element_r29.quantity, " ");
} }
function SaleOrderReturnItemComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function SaleOrderReturnItemComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, element_r30.discount), "(", element_r30.discountPercentage, "%) ");
} }
function SaleOrderReturnItemComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TAX"), " ");
} }
function SaleOrderReturnItemComponent_td_30_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SaleOrderReturnItemComponent_td_30_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SaleOrderReturnItemComponent_td_30_span_1_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r33 = ctx.$implicit;
    const last_r34 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r33.taxName, "(", tax_r33.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r34);
} }
function SaleOrderReturnItemComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SaleOrderReturnItemComponent_td_30_span_1_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", element_r31.salesOrderItemTaxes);
} }
function SaleOrderReturnItemComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function SaleOrderReturnItemComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r36.taxValue), " ");
} }
function SaleOrderReturnItemComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL"), " ");
} }
function SaleOrderReturnItemComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r37.unitPrice * element_r37.quantity - element_r37.discount + element_r37.taxValue), " ");
} }
function SaleOrderReturnItemComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "WAREHOUSE"), "");
} }
function SaleOrderReturnItemComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r38.warehouseName, " ");
} }
function SaleOrderReturnItemComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
} }
function SaleOrderReturnItemComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 27);
} }
class SaleOrderReturnItemComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(salesOrderService, translationService) {
        super(translationService);
        this.salesOrderService = salesOrderService;
        this.translationService = translationService;
        this.salesOrderItems = [];
        this.isLoading = false;
        this.displayedColumns = ['productName', 'source', 'unitName', 'unitPrice', 'quantity', 'totalDiscount', 'taxes', 'totalTax', 'totalAmount', 'warehouse'];
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
        this.salesOrderService.getSalesOrderItems(this.salesOrder.id, true)
            .subscribe((data) => {
            this.isLoading = false;
            this.salesOrderItems = data;
        }, () => this.isLoading = false);
    }
}
SaleOrderReturnItemComponent.ɵfac = function SaleOrderReturnItemComponent_Factory(t) { return new (t || SaleOrderReturnItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_1__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
SaleOrderReturnItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SaleOrderReturnItemComponent, selectors: [["app-sale-order-return-item"]], inputs: { salesOrder: "salesOrder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 42, vars: 9, consts: [[1, "page-header-main"], [1, "row", "align-items-center"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "source"], ["matColumnDef", "unitName"], ["matColumnDef", "unitPrice"], ["matColumnDef", "quantity"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "taxes"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "warehouse"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", ""]], template: function SaleOrderReturnItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SaleOrderReturnItemComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SaleOrderReturnItemComponent_th_11_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SaleOrderReturnItemComponent_td_12_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SaleOrderReturnItemComponent_th_14_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SaleOrderReturnItemComponent_td_15_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SaleOrderReturnItemComponent_th_17_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SaleOrderReturnItemComponent_td_18_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SaleOrderReturnItemComponent_th_20_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, SaleOrderReturnItemComponent_td_21_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SaleOrderReturnItemComponent_th_23_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, SaleOrderReturnItemComponent_td_24_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SaleOrderReturnItemComponent_th_26_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, SaleOrderReturnItemComponent_td_27_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, SaleOrderReturnItemComponent_th_29_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, SaleOrderReturnItemComponent_td_30_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, SaleOrderReturnItemComponent_th_32_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, SaleOrderReturnItemComponent_td_33_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, SaleOrderReturnItemComponent_th_35_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, SaleOrderReturnItemComponent_td_36_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](37, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SaleOrderReturnItemComponent_th_38_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, SaleOrderReturnItemComponent_td_39_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, SaleOrderReturnItemComponent_tr_40_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, SaleOrderReturnItemComponent_tr_41_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "SALES_ORDER_ITEMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.salesOrderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLW9yZGVyLXJldHVybi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 98030:
/*!**********************************************************************************************!*\
  !*** ./src/app/sale-order-return/sale-order-return-list/sale-order-return-list.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleOrderReturnListComponent": () => (/* binding */ SaleOrderReturnListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/sales-order-resource-parameter */ 708);
/* harmony import */ var _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/sales-order-status */ 80002);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var src_app_sales_order_add_sales_order_payment_add_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales-order/add-sales-order-payment/add-sales-order-payment.component */ 43085);
/* harmony import */ var src_app_sales_order_sales_order_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales-order/sales-order-datasource */ 80931);
/* harmony import */ var src_app_sales_order_view_sales_order_payment_view_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales-order/view-sales-order-payment/view-sales-order-payment.component */ 61739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales-order/sales-order.service */ 40838);
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/customer/customer.service */ 61781);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _shared_sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/sales-order-invoice/sales-order-invoice.component */ 56717);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _sale_order_return_item_sale_order_return_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sale-order-return-item/sale-order-return-item.component */ 11645);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/purchase-order-paymentStatus.pipe */ 80443);









































const _c0 = function () { return ["/sales-order-return/add"]; };
function SaleOrderReturnListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 2, "ADD_SALES_ORDER_RETURN"), " ");
} }
function SaleOrderReturnListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function SaleOrderReturnListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 53);
} }
function SaleOrderReturnListComponent_td_17_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function SaleOrderReturnListComponent_td_17_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function SaleOrderReturnListComponent_td_17_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 61)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matMenuTriggerFor", _r45);
} }
const _c1 = function (a1) { return ["/sales-order/detail", a1]; };
function SaleOrderReturnListComponent_td_17_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 62)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](4, _c1, so_r41.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 2, "DETAIL"));
} }
function SaleOrderReturnListComponent_td_17_ng_contaner_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function SaleOrderReturnListComponent_td_17_ng_contaner_8_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r54); const so_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r52.addPayment(so_r41)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 1, "ADD_PAYMENT"));
} }
function SaleOrderReturnListComponent_td_17_ng_contaner_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, SaleOrderReturnListComponent_td_17_ng_contaner_8_button_1_Template, 6, 3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "SO_ADD_SO_PAYMENT");
} }
function SaleOrderReturnListComponent_td_17_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function SaleOrderReturnListComponent_td_17_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r57); const so_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r55.viewPayment(so_r41)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "view_carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 1, "VIEW_PAYMENT"));
} }
function SaleOrderReturnListComponent_td_17_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function SaleOrderReturnListComponent_td_17_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r60); const so_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r58.generateInvoice(so_r41)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 1, "GENERATE_INVOICE"));
} }
const _c2 = function () { return ["SO_UPDATE_SO", "SO_VIEW_SO_DETAIL", "SO_DELETE_SO", "SO_RETURN_SO", "SO_ADD_SO_PAYMENT", "SO_VIEW_SO_PAYMENTS", "SO_GENERATE_INVOICE"]; };
function SaleOrderReturnListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 54)(1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function SaleOrderReturnListComponent_td_17_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62); const so_r41 = restoredCtx.$implicit; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r61.toggleRow(so_r41)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, SaleOrderReturnListComponent_td_17_mat_icon_2_Template, 2, 0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, SaleOrderReturnListComponent_td_17_mat_icon_3_Template, 2, 0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, SaleOrderReturnListComponent_td_17_button_4_Template, 3, 1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "mat-menu", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, SaleOrderReturnListComponent_td_17_button_7_Template, 6, 6, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, SaleOrderReturnListComponent_td_17_ng_contaner_8_Template, 2, 1, "ng-contaner", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, SaleOrderReturnListComponent_td_17_button_9_Template, 6, 3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, SaleOrderReturnListComponent_td_17_button_10_Template, 6, 3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r41 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", so_r41 != ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", so_r41 == ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r3.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "SO_VIEW_SO_DETAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", so_r41.paymentStatus != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "SO_VIEW_SO_PAYMENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "SO_GENERATE_INVOICE");
} }
function SaleOrderReturnListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function SaleOrderReturnListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, so_r63.soCreatedDate, "shortDate"), " ");
} }
function SaleOrderReturnListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "ORDER_NUMBER"), " ");
} }
function SaleOrderReturnListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 54)(1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](2, _c1, so_r64.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", so_r64.orderNumber, " ");
} }
function SaleOrderReturnListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE"), " ");
} }
function SaleOrderReturnListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, so_r65.deliveryDate, "shortDate"), " ");
} }
function SaleOrderReturnListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "CUSTOMER_NAME"), " ");
} }
const _c3 = function (a1) { return ["/customer", a1]; };
function SaleOrderReturnListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 69)(1, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](2, _c3, so_r66.customerId));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", so_r66.customerName, " ");
} }
function SaleOrderReturnListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function SaleOrderReturnListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, so_r67.totalDiscount), " ");
} }
function SaleOrderReturnListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function SaleOrderReturnListComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, so_r68.totalTax), " ");
} }
function SaleOrderReturnListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TOTAL_AMOUNT"), " ");
} }
function SaleOrderReturnListComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, so_r69.totalAmount), " ");
} }
function SaleOrderReturnListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TOTAL_PAID_AMOUNT"), " ");
} }
function SaleOrderReturnListComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, so_r70.totalPaidAmount), " ");
} }
function SaleOrderReturnListComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "PAYMENT_STATUS"), " ");
} }
const _c4 = function (a0, a1, a2) { return { "badge-success": a0, "badge-danger": a1, "badge-warning": a2 }; };
function SaleOrderReturnListComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 72)(1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "paymentStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction3"](4, _c4, so_r71.paymentStatus == 0, so_r71.paymentStatus == 1, so_r71.paymentStatus == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 2, so_r71.paymentStatus));
} }
function SaleOrderReturnListComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 74);
} }
function SaleOrderReturnListComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 74);
} }
function SaleOrderReturnListComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 74)(1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function SaleOrderReturnListComponent_th_50_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r72.OrderNumberFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "ORDER_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r24.OrderNumberFilter);
} }
function SaleOrderReturnListComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 74);
} }
function SaleOrderReturnListComponent_th_54_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", customer_r76.customerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", customer_r76.customerName, " ");
} }
function SaleOrderReturnListComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "mat-autocomplete", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("optionSelected", function SaleOrderReturnListComponent_th_54_Template_mat_autocomplete_optionSelected_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r77.CustomerFilter = $event.option.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, SaleOrderReturnListComponent_th_54_mat_option_8_Template, 2, 2, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](4);
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 8, "CUSTOMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formControl", ctx_r26.customerNameControl)("matAutocomplete", _r74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r26.langDir)("autoActiveFirstOption", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r26.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 10, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](9, 12, ctx_r26.customerList$));
} }
function SaleOrderReturnListComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 74);
} }
function SaleOrderReturnListComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 74);
} }
function SaleOrderReturnListComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 74);
} }
function SaleOrderReturnListComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 74);
} }
function SaleOrderReturnListComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 74);
} }
const _c5 = function () { return [10, 20, 30]; };
function SaleOrderReturnListComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "mat-paginator", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("length", ctx_r32.salesOrderResource.totalCount)("pageSize", ctx_r32.salesOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](3, _c5));
} }
function SaleOrderReturnListComponent_td_68_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 84)(2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "app-sale-order-return-item", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const soObject_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@detailExpand", soObject_r79 == ctx_r80.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("salesOrder", soObject_r79);
} }
function SaleOrderReturnListComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, SaleOrderReturnListComponent_td_68_ng_container_1_Template, 4, 2, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const soObject_r79 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵattribute"]("colspan", ctx_r33.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", soObject_r79 == ctx_r33.expandedElement);
} }
function SaleOrderReturnListComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 87)(2, "span", 88)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function SaleOrderReturnListComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 89);
} }
function SaleOrderReturnListComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 90);
} }
function SaleOrderReturnListComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 89);
} }
function SaleOrderReturnListComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 91);
} }
function SaleOrderReturnListComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 92);
} }
function SaleOrderReturnListComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-sales-order-invoice", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("salesOrder", ctx_r40.salesOrderForInvoice);
} }
const _c6 = function () { return ["expandedDetail"]; };
class SaleOrderReturnListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(salesOrderService, customerService, cd, commonDialogService, toastrService, router, translationService, dialog, clonerService) {
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
        this.salesOrders = [];
        this.displayedColumns = ['action', 'soCreatedDate', 'orderNumber', 'deliveryDate', 'customerName', 'totalDiscount', 'totalTax', 'totalAmount', 'totalPaidAmount', 'paymentStatus'];
        this.filterColumns = ['action-search', 'soCreatedDate-search', 'orderNumber-search', 'deliverDate-search', 'customer-search', 'totalAmount-search', 'totalDiscount-search', 'totalTax-search', 'totalPaidAmount-search', 'paymentStatus-search'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.customerNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.UntypedFormControl();
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
        this.getLangDir();
        this.salesOrderResource = new _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.SalesOrderResourceParameter();
        this.salesOrderResource.pageSize = 50;
        this.salesOrderResource.orderBy = 'soCreatedDate asc',
            this.salesOrderResource.status = _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_1__.SalesOrderStatusEnum.Return;
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
        this.dataSource = new src_app_sales_order_sales_order_datasource__WEBPACK_IMPORTED_MODULE_4__.SalesOrderDataSource(this.salesOrderService);
        this.dataSource.loadData(this.salesOrderResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)())
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
    customerNameControlOnChange() {
        this.customerList$ = this.customerNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(c => {
            return this.customerService.getCustomersForDropDown('CustomerName', c);
        }));
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.tap)((c) => {
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
    addPayment(salesOrder) {
        const dialogRef = this.dialog.open(src_app_sales_order_add_sales_order_payment_add_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_3__.AddSalesOrderPaymentComponent, {
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
    viewPayment(salesOrder) {
        const dialogRef = this.dialog.open(src_app_sales_order_view_sales_order_payment_view_sales_order_payment_component__WEBPACK_IMPORTED_MODULE_5__.ViewSalesOrderPaymentComponent, {
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.forkJoin)({ getCustomerRequest, getSalesOrderItems }).subscribe(response => {
            soForInvoice.customer = response.getCustomerRequest;
            soForInvoice.salesOrderItems = response.getSalesOrderItems;
            this.salesOrderForInvoice = soForInvoice;
        });
    }
}
SaleOrderReturnListComponent.ɵfac = function SaleOrderReturnListComponent_Factory(t) { return new (t || SaleOrderReturnListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_6__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_7__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_8__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_26__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_10__.ClonerService)); };
SaleOrderReturnListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: SaleOrderReturnListComponent, selectors: [["app-sale-order-return-list"]], viewQuery: function SaleOrderReturnListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 76, vars: 19, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "btn blue-btn btn-sm m-right-10", 3, "routerLink", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "soCreatedDate", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "soCreatedDate"], ["class", "table-column-100", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderNumber"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "deliveryDate"], ["matColumnDef", "customerName"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalDiscount"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "totalPaidAmount"], ["matColumnDef", "paymentStatus"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "action-search"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "soCreatedDate-search"], ["matColumnDef", "orderNumber-search"], ["matColumnDef", "deliverDate-search"], ["matColumnDef", "customer-search"], ["matColumnDef", "totalAmount-search"], ["matColumnDef", "totalDiscount-search"], ["matColumnDef", "totalTax-search"], ["matColumnDef", "totalPaidAmount-search"], ["matColumnDef", "paymentStatus-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "12", 4, "matFooterCellDef"], ["matColumnDef", "expandedDetail"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-icon-button", "", 3, "click"], ["class", "ml-4", "mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor", 4, "hasClaim"], [3, "dir"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-icon-button", "", "aria-label", "Action", 1, "ml-4", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], [3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 2, "text-align", "center"], [1, "badge-pill", 3, "ngClass"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "formControl", "matAutocomplete"], [3, "dir", "autoActiveFirstOption", "optionSelected"], ["autoCustomer", "matAutocomplete"], ["value", "", 3, "dir"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mat-footer-cell", "", "colspan", "12"], [3, "length", "pageSize", "pageSizeOptions"], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "salesOrder"], ["colspan", "8"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], ["mat-row", "", 1, "example-detail-row"]], template: function SaleOrderReturnListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, SaleOrderReturnListComponent_button_8_Template, 4, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, SaleOrderReturnListComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, SaleOrderReturnListComponent_th_16_Template, 1, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, SaleOrderReturnListComponent_td_17_Template, 11, 9, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, SaleOrderReturnListComponent_th_19_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, SaleOrderReturnListComponent_td_20_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](22, SaleOrderReturnListComponent_th_22_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, SaleOrderReturnListComponent_td_23_Template, 3, 4, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, SaleOrderReturnListComponent_th_25_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](26, SaleOrderReturnListComponent_td_26_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, SaleOrderReturnListComponent_th_28_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, SaleOrderReturnListComponent_td_29_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](30, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](31, SaleOrderReturnListComponent_th_31_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](32, SaleOrderReturnListComponent_td_32_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](33, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](34, SaleOrderReturnListComponent_th_34_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](35, SaleOrderReturnListComponent_td_35_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](37, SaleOrderReturnListComponent_th_37_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](38, SaleOrderReturnListComponent_td_38_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](39, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](40, SaleOrderReturnListComponent_th_40_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, SaleOrderReturnListComponent_td_41_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](42, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](43, SaleOrderReturnListComponent_th_43_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, SaleOrderReturnListComponent_td_44_Template, 4, 8, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](45, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](46, SaleOrderReturnListComponent_th_46_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](47, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](48, SaleOrderReturnListComponent_th_48_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](49, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](50, SaleOrderReturnListComponent_th_50_Template, 3, 4, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](51, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](52, SaleOrderReturnListComponent_th_52_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](53, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](54, SaleOrderReturnListComponent_th_54_Template, 10, 14, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](55, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](56, SaleOrderReturnListComponent_th_56_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](57, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](58, SaleOrderReturnListComponent_th_58_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](59, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](60, SaleOrderReturnListComponent_th_60_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](61, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](62, SaleOrderReturnListComponent_th_62_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](63, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](64, SaleOrderReturnListComponent_th_64_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](65, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](66, SaleOrderReturnListComponent_td_66_Template, 2, 4, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](67, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](68, SaleOrderReturnListComponent_td_68_Template, 2, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](69, SaleOrderReturnListComponent_tr_69_Template, 6, 3, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](70, SaleOrderReturnListComponent_tr_70_Template, 1, 0, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](71, SaleOrderReturnListComponent_tr_71_Template, 1, 0, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](72, SaleOrderReturnListComponent_tr_72_Template, 1, 0, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](73, SaleOrderReturnListComponent_tr_73_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](74, SaleOrderReturnListComponent_tr_74_Template, 1, 0, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](75, SaleOrderReturnListComponent_ng_container_75_Template, 2, 1, "ng-container", 49);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 14, "SALES_ORDER_RETURN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "SORE_ADD_SORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 16, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matHeaderRowDef", ctx.filterColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](18, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlDirective, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_11__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__.Dir, _shared_sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_12__.SalesOrderInvoiceComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_36__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortHeader, _sale_order_return_item_sale_order_return_item_component__WEBPACK_IMPORTED_MODULE_13__.SaleOrderReturnItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_14__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_15__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslatePipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_16__.PaymentStatusPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlLW9yZGVyLXJldHVybi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 12960:
/*!***********************************************************************!*\
  !*** ./src/app/sale-order-return/sale-order-return-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleOrderReturnRoutingModule": () => (/* binding */ SaleOrderReturnRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/products.resolve */ 29147);
/* harmony import */ var _sales_order_sales_order_add_edit_sale_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sales-order/sales-order-add-edit/sale-order-warehouse.resolve */ 94835);
/* harmony import */ var _sales_order_sales_order_add_edit_sales_order_tax_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sales-order/sales-order-add-edit/sales-order-tax-resolve */ 68394);
/* harmony import */ var _sales_order_sales_order_add_edit_sales_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sales-order/sales-order-add-edit/sales-order-unit-resolve */ 53349);
/* harmony import */ var _sales_order_sales_order_add_edit_sales_oredr_by_id_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sales-order/sales-order-add-edit/sales-oredr-by-id-resolve */ 47286);
/* harmony import */ var _sale_order_return_list_sale_order_return_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sale-order-return-list/sale-order-return-list.component */ 98030);
/* harmony import */ var _sale_order_return_sale_order_return_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sale-order-return/sale-order-return.component */ 51595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    {
        path: 'list',
        component: _sale_order_return_list_sale_order_return_list_component__WEBPACK_IMPORTED_MODULE_6__.SaleOrderReturnListComponent,
        data: { claimType: 'SO_RETURN_SO' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }, {
        path: 'add',
        component: _sale_order_return_sale_order_return_component__WEBPACK_IMPORTED_MODULE_7__.SaleOrderReturnComponent,
        data: { claimType: 'SO_RETURN_SO' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        resolve: {
            'units': _sales_order_sales_order_add_edit_sales_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__.SalesOrderUnitResolver,
            'taxs': _sales_order_sales_order_add_edit_sales_order_tax_resolve__WEBPACK_IMPORTED_MODULE_3__.SalesOrderTaxResolver,
            'warehouses': _sales_order_sales_order_add_edit_sale_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_2__.SaleOrderWarehouseResolver,
            'products': _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__.ProductsResolver
        }
    }, {
        path: ':id',
        component: _sale_order_return_sale_order_return_component__WEBPACK_IMPORTED_MODULE_7__.SaleOrderReturnComponent,
        data: { claimType: 'SO_RETURN_SO' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        resolve: {
            'units': _sales_order_sales_order_add_edit_sales_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__.SalesOrderUnitResolver,
            'taxs': _sales_order_sales_order_add_edit_sales_order_tax_resolve__WEBPACK_IMPORTED_MODULE_3__.SalesOrderTaxResolver,
            'warehouses': _sales_order_sales_order_add_edit_sale_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_2__.SaleOrderWarehouseResolver,
            'salesorder': _sales_order_sales_order_add_edit_sales_oredr_by_id_resolve__WEBPACK_IMPORTED_MODULE_5__.SalesOrderByIdResolver,
            'products': _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__.ProductsResolver
        }
    }
];
class SaleOrderReturnRoutingModule {
}
SaleOrderReturnRoutingModule.ɵfac = function SaleOrderReturnRoutingModule_Factory(t) { return new (t || SaleOrderReturnRoutingModule)(); };
SaleOrderReturnRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SaleOrderReturnRoutingModule });
SaleOrderReturnRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SaleOrderReturnRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 17136:
/*!***************************************************************!*\
  !*** ./src/app/sale-order-return/sale-order-return.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleOrderReturnModule": () => (/* binding */ SaleOrderReturnModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sale_order_return_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sale-order-return-routing.module */ 12960);
/* harmony import */ var _sale_order_return_sale_order_return_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sale-order-return/sale-order-return.component */ 51595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _sale_order_return_list_sale_order_return_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sale-order-return-list/sale-order-return-list.component */ 98030);
/* harmony import */ var _sale_order_return_item_sale_order_return_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sale-order-return-item/sale-order-return-item.component */ 11645);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);



























class SaleOrderReturnModule {
}
SaleOrderReturnModule.ɵfac = function SaleOrderReturnModule_Factory(t) { return new (t || SaleOrderReturnModule)(); };
SaleOrderReturnModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SaleOrderReturnModule });
SaleOrderReturnModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _sale_order_return_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaleOrderReturnRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SaleOrderReturnModule, { declarations: [_sale_order_return_sale_order_return_component__WEBPACK_IMPORTED_MODULE_1__.SaleOrderReturnComponent,
        _sale_order_return_list_sale_order_return_list_component__WEBPACK_IMPORTED_MODULE_3__.SaleOrderReturnListComponent,
        _sale_order_return_item_sale_order_return_item_component__WEBPACK_IMPORTED_MODULE_4__.SaleOrderReturnItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _sale_order_return_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaleOrderReturnRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__.OwlNativeDateTimeModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDividerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule] }); })();


/***/ }),

/***/ 51595:
/*!************************************************************************************!*\
  !*** ./src/app/sale-order-return/sale-order-return/sale-order-return.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaleOrderReturnComponent": () => (/* binding */ SaleOrderReturnComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/customer-resource-parameter */ 13231);
/* harmony import */ var _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/delivery-status-enum */ 3007);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/domain-classes/sales-order-resource-parameter */ 708);
/* harmony import */ var _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/domain-classes/sales-order-status */ 80002);
/* harmony import */ var _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice-tax.pipe */ 76521);
/* harmony import */ var _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice.pipe */ 16695);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/customer/customer.service */ 61781);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sales-order/sales-order.service */ 40838);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/tax.service */ 36018);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




































function SaleOrderReturnComponent_ng_container_7_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r3.langDir)("value", customer_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", customer_r8.customerName, " ");
} }
function SaleOrderReturnComponent_ng_container_7_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NONE"));
} }
function SaleOrderReturnComponent_ng_container_7_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function SaleOrderReturnComponent_ng_container_7_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r6.langDir)("value", so_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", so_r9.orderNumber, " ");
} }
function SaleOrderReturnComponent_ng_container_7_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function SaleOrderReturnComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "form", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 10)(9, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](14, SaleOrderReturnComponent_ng_container_7_mat_option_14_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, SaleOrderReturnComponent_ng_container_7_mat_option_15_Template, 3, 3, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, SaleOrderReturnComponent_ng_container_7_mat_option_16_Template, 3, 3, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 10)(23, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](25, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](28, SaleOrderReturnComponent_ng_container_7_mat_option_28_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, SaleOrderReturnComponent_ng_container_7_mat_option_29_Template, 3, 3, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r0.salesOrderReturnForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 14, "SELECT_CUSTOMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 16, "SELECT_CUSTOMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r0.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](12, 18, "SEARCH_OTHER_CUSTOMERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r0.customersForSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.customersForSearch.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.customersForSearch.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](21, 20, "SELECT_SALES_ORDER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](24, 22, "SELECT_SALES_ORDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r0.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 24, "SEARCH_OTHER_SALES_ORDER"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r0.salesorders);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r0.salesorders.length == 0);
} }
function SaleOrderReturnComponent_ng_container_8_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "SO_ORDER_NUMBER_IS_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_div_11_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r10.salesOrderForm.get("orderNumber").errors == null ? null : ctx_r10.salesOrderForm.get("orderNumber").errors.required);
} }
function SaleOrderReturnComponent_ng_container_8_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "ORDER_DATE_IS_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_div_19_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r11.salesOrderForm.get("soCreatedDate").errors == null ? null : ctx_r11.salesOrderForm.get("soCreatedDate").errors.required);
} }
function SaleOrderReturnComponent_ng_container_8_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_div_29_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r13.salesOrderForm.get("deliveryDate").errors == null ? null : ctx_r13.salesOrderForm.get("deliveryDate").errors.required);
} }
function SaleOrderReturnComponent_ng_container_8_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r23 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r15.langDir)("value", customer_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", customer_r23.customerName, " ");
} }
function SaleOrderReturnComponent_ng_container_8_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "CUSTOMER_NAME_IS_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_div_44_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r17.salesOrderForm.get("customerId").errors == null ? null : ctx_r17.salesOrderForm.get("customerId").errors.required);
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SaleOrderReturnComponent_ng_container_8_tr_96_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42); const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r40.onRemoveSalesOrderItem(i_r26)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r43 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r28.langDir)("value", a_r43.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", a_r43.name, " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r29.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "NO_RECORDS"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "PRODUCT_IS_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_tr_96_div_9_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("productId").errors == null ? null : salesOrderItem_r25.get("productId").errors.required);
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const warehouse_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", warehouse_r46.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", warehouse_r46.name, " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r47 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r32.langDir)("value", a_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", a_r47.name, " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "UNIT_IS_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_tr_96_div_19_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("unitPrice").errors == null ? null : salesOrderItem_r25.get("unitPrice").errors.required);
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_tr_96_div_23_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("quantity").errors == null ? null : salesOrderItem_r25.get("quantity").errors.required);
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_MAX"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_MIN"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_tr_96_div_27_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, SaleOrderReturnComponent_ng_container_8_tr_96_div_27_div_2_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, SaleOrderReturnComponent_ng_container_8_tr_96_div_27_div_3_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("returnquantity").errors == null ? null : salesOrderItem_r25.get("returnquantity").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("returnquantity").errors == null ? null : salesOrderItem_r25.get("returnquantity").errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("returnquantity").errors == null ? null : salesOrderItem_r25.get("returnquantity").errors.min);
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "DISCOUNT_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind3"](4, 6, salesOrderItem_r25.get("returnquantity").value, salesOrderItem_r25.get("unitPrice").value, salesOrderItem_r25.get("discountPercentage").value)), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r57 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r37.langDir)("value", tax_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"]("", tax_r57.name, " (", tax_r57.percentage, "%) ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "TAX_IS_REQUIRED"), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_ng_container_8_tr_96_div_44_div_1_Template, 3, 3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const salesOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("taxValue").errors == null ? null : salesOrderItem_r25.get("taxValue").errors.required);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function SaleOrderReturnComponent_ng_container_8_tr_96_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    const salesOrderItem_r25 = ctx_r60.$implicit;
    const i_r26 = ctx_r60.index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "TAX_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](12, _c0, salesOrderItem_r25.get("returnquantity").value, salesOrderItem_r25.get("unitPrice").value, salesOrderItem_r25.get("discountPercentage").value, salesOrderItem_r25.get("taxValue").value, ctx_r39.taxsMap[i_r26]))), " ");
} }
function SaleOrderReturnComponent_ng_container_8_tr_96_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 57)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, SaleOrderReturnComponent_ng_container_8_tr_96_button_2_Template, 3, 0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td")(4, "mat-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function SaleOrderReturnComponent_ng_container_8_tr_96_Template_mat_select_selectionChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62); const i_r26 = restoredCtx.index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.onProductSelectionChange($event, i_r26)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_7_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_8_Template, 3, 4, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, SaleOrderReturnComponent_ng_container_8_tr_96_div_9_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "td")(11, "mat-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_12_Template, 2, 2, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "td")(14, "mat-select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_15_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, SaleOrderReturnComponent_ng_container_8_tr_96_div_19_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](21, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, SaleOrderReturnComponent_ng_container_8_tr_96_div_23_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "td")(25, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function SaleOrderReturnComponent_ng_container_8_tr_96_Template_input_change_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r63.onQuantityChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](27, SaleOrderReturnComponent_ng_container_8_tr_96_div_27_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](31, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "td")(33, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function SaleOrderReturnComponent_ng_container_8_tr_96_Template_input_change_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r64.onDiscountChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](37, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](38, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](39, SaleOrderReturnComponent_ng_container_8_tr_96_div_39_Template, 5, 10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "td")(41, "mat-select", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectionChange", function SaleOrderReturnComponent_ng_container_8_tr_96_Template_mat_select_selectionChange_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r65.onTaxSelectionChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](43, SaleOrderReturnComponent_ng_container_8_tr_96_mat_option_43_Template, 2, 4, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, SaleOrderReturnComponent_ng_container_8_tr_96_div_44_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](47, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](48, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](49, SaleOrderReturnComponent_ng_container_8_tr_96_div_49_Template, 5, 18, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const salesOrderItem_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroupName", i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r18.salesOrderItemsArray.length !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 27, "SELECT_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r18.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r18.filterProductsMap[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r18.filterProductsMap[i_r26].length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("productId").touched && salesOrderItem_r25.get("productId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r18.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r18.warehouseMap[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r18.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r18.unitsMap[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 29, "UNIT_PER_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("unitPrice").touched && salesOrderItem_r25.get("unitPrice").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](22, 31, "QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("quantity").touched && salesOrderItem_r25.get("quantity").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 33, "RETURN_QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("quantity").touched && salesOrderItem_r25.get("returnquantity").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](30, 35, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](31, 37, salesOrderItem_r25.get("returnquantity").value, salesOrderItem_r25.get("unitPrice").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](34, 40, "DISCOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](37, 42, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind3"](38, 44, salesOrderItem_r25.get("returnquantity").value, salesOrderItem_r25.get("unitPrice").value, salesOrderItem_r25.get("discountPercentage").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("discountPercentage").value != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](42, 48, "TAX"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r18.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r18.taxsMap[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("taxValue").touched && salesOrderItem_r25.get("taxValue").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](47, 50, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBindV"](48, 52, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction5"](58, _c0, salesOrderItem_r25.get("returnquantity").value, salesOrderItem_r25.get("unitPrice").value, salesOrderItem_r25.get("discountPercentage").value, salesOrderItem_r25.get("taxValue").value, ctx_r18.taxsMap[i_r26]))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", salesOrderItem_r25.get("taxValue").value);
} }
function SaleOrderReturnComponent_ng_container_8_button_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "RETURN"), "");
} }
function SaleOrderReturnComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function SaleOrderReturnComponent_ng_container_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r66.onSalesOrderSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 7)(3, "div", 22)(4, "div", 9)(5, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, SaleOrderReturnComponent_ng_container_8_div_11_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "div", 25)(13, "div", 9)(14, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](17, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, SaleOrderReturnComponent_ng_container_8_div_19_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "owl-date-time", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 25)(23, "div", 9)(24, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, SaleOrderReturnComponent_ng_container_8_div_29_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](30, "owl-date-time", 28, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div", 7)(33, "div", 8)(34, "div", 9)(35, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "div", 10)(39, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](41, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](42, SaleOrderReturnComponent_ng_container_8_mat_option_42_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](43, SaleOrderReturnComponent_ng_container_8_mat_option_43_Template, 3, 3, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](44, SaleOrderReturnComponent_ng_container_8_div_44_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "div", 7)(46, "div", 33)(47, "div", 9)(48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "div", 10)(52, "textarea", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](53, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "div", 7)(55, "div", 35)(56, "div", 7)(57, "div", 36)(58, "div", 37)(59, "table", 38)(60, "tr")(61, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](62, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](63, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](69, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](72, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](78, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](84, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](87, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](90, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](93, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](96, SaleOrderReturnComponent_ng_container_8_tr_96_Template, 50, 64, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](97, "div", 47)(98, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](101, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](103, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](104, "div", 7)(105, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](108, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](110, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](111, "div", 7)(112, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](114, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](115, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](117, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](118, "div", 7)(119, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](120, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](121, "div", 7)(122, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](124, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](125, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](127, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](128, "div", 7)(129, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](130, SaleOrderReturnComponent_ng_container_8_button_130_Template, 4, 3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](131, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function SaleOrderReturnComponent_ng_container_8_Template_button_click_131_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r68.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](132, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](134, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](21);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r1.salesOrderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 45, "SO_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("readonly", ctx_r1.isEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.salesOrderForm.get("orderNumber").touched && ctx_r1.salesOrderForm.get("orderNumber").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 47, "ORDER_DATE"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](18, 49, "DELIVERY_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("owlDateTimeTrigger", _r12)("owlDateTime", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.salesOrderForm.get("soCreatedDate").touched && ctx_r1.salesOrderForm.get("soCreatedDate").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 51, "DELIVERY_DATE"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](28, 53, "DELIVERY_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("owlDateTimeTrigger", _r14)("owlDateTime", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.salesOrderForm.get("deliveryDate").touched && ctx_r1.salesOrderForm.get("deliveryDate").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](37, 55, "CUSTOMER_NAME"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](40, 57, "SELECT_CUSTOMER"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("dir", ctx_r1.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.customers);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.customers.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.salesOrderForm.get("customerId").touched && ctx_r1.salesOrderForm.get("customerId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](50, 59, "RETURN_NOTES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](65, 61, "PRODUCT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](68, 63, "WAREHOUSE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](71, 65, "UNIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](74, 67, "PRICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](77, 69, "QUANTITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](80, 71, "RETURN_QUANTITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](83, 73, "SUBTOTAL_BEFORE_DISCOUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](86, 75, "DISCOUNT"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](89, 77, "SUBTOTAL_AFTER_DISCOUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](92, 79, "TAX"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](95, 81, "TOTAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.salesOrderItemsArray == null ? null : ctx_r1.salesOrderItemsArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](100, 83, "SUB_TOTAL_BEFORE_DISCOUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](103, 85, ctx_r1.totalBeforeDiscount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](107, 87, "TOTAL_DISCOUNT"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](110, 89, ctx_r1.totalDiscount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](114, 91, "TOTAL_TAX"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](117, 93, ctx_r1.totalTax), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](124, 95, "GRAND_TOTAL"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](127, 97, ctx_r1.grandTotal), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("hasClaim", "SO_RETURN_SO");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](134, 99, "CANCEL"), " ");
} }
function SaleOrderReturnComponent_div_9_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "mat-spinner");
} }
function SaleOrderReturnComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, SaleOrderReturnComponent_div_9_mat_spinner_1_Template, 1, 0, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
} }
class SaleOrderReturnComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_7__.BaseComponent {
    constructor(fb, customerService, toastrService, salesOrderService, router, taxService, productService, route, quantitiesUnitPricePipe, quantitiesUnitPriceTaxPipe, location, cloneService, translationService) {
        super(translationService);
        this.fb = fb;
        this.customerService = customerService;
        this.toastrService = toastrService;
        this.salesOrderService = salesOrderService;
        this.router = router;
        this.taxService = taxService;
        this.productService = productService;
        this.route = route;
        this.quantitiesUnitPricePipe = quantitiesUnitPricePipe;
        this.quantitiesUnitPriceTaxPipe = quantitiesUnitPriceTaxPipe;
        this.location = location;
        this.cloneService = cloneService;
        this.translationService = translationService;
        this.products = [];
        this.customersForSearch = [];
        this.customers = [];
        this.salesorders = [];
        this.isLoading = false;
        this.isCustomerLoading = false;
        this.filterProductsMap = {};
        this.warehouseMap = {};
        this.unitsMap = {};
        this.taxsMap = {};
        this.totalBeforeDiscount = 0;
        this.totalAfterDiscount = 0;
        this.totalDiscount = 0;
        this.grandTotal = 0;
        this.totalTax = 0;
        this.isEdit = false;
        this.getLangDir();
        this.salesResouce = new _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_3__.SalesOrderResourceParameter();
        this.salesOrderResource = new _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_3__.SalesOrderResourceParameter();
        this.customerResource = new _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.CustomerResourceParameter();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_2__.ProductResourceParameter();
    }
    get salesOrderItemsArray() {
        return this.salesOrderForm.get('salesOrderItems');
    }
    ngOnInit() {
        this.createSalesOrder();
        this.getTaxes();
    }
    onFilterValue(filterValue) {
        console.log(filterValue);
    }
    getTaxes() {
        this.taxes$ = this.taxService.entities$;
    }
    createSalesOrderReturnOrder() {
        this.salesOrderReturnForm = this.fb.group({
            orderNumber: [''],
            filerCustomer: [''],
            customerId: [''],
            salesOrderId: [''],
            filerSalesOrder: ['']
        });
        this.getCustomers();
        this.customerNameForSearchChangeValue();
        this.subscribeCustomerChangeEvent();
        this.subscribeSalesOrderFilterChangeEvent();
        this.onSalesOrderChange();
    }
    subscribeCustomerChangeEvent() {
        this.salesOrderReturnForm.get('customerId').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(c => {
            this.salesResouce.customerId = c;
            this.salesResouce.status = _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_4__.SalesOrderStatusEnum.Not_Return;
            return this.salesOrderService.getAllSalesOrder(this.salesResouce);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.salesorders = [...resp.body];
            }
        });
    }
    subscribeSalesOrderFilterChangeEvent() {
        this.salesOrderReturnForm.get('filerSalesOrder').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(c => {
            this.salesResouce.orderNumber = c;
            return this.salesOrderService.getAllSalesOrder(this.salesResouce);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.salesorders = [...resp.body];
            }
        });
    }
    onSalesOrderChange() {
        this.salesOrderReturnForm.get('salesOrderId').valueChanges
            .subscribe(id => {
            if (id) {
                this.router.navigate(['/sales-order-return', id]);
            }
        });
    }
    createSalesOrder() {
        this.route.data
            .pipe()
            .subscribe((salesOrderData) => {
            this.salesOrder = salesOrderData.salesorder;
            if (this.salesOrder) {
                this.isEdit = true;
                this.salesOrderForm = this.fb.group({
                    orderNumber: [{ value: this.salesOrder.orderNumber, disabled: true }],
                    filerCustomer: [{ value: '', disabled: true }],
                    deliveryDate: [{ value: this.salesOrder.deliveryDate, disabled: true }],
                    soCreatedDate: [{ value: this.salesOrder.soCreatedDate, disabled: true }],
                    deliveryStatus: [{ value: _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_4__.SalesOrderStatusEnum.Return, disabled: true }],
                    customerId: [{ value: this.salesOrder.customerId, disabled: true }],
                    note: [{ value: '', disabled: false }],
                    salesOrderItems: this.fb.array([])
                });
                this.salesOrder.salesOrderItems.forEach(c => {
                    this.salesOrderItemsArray.push(this.createSalesOrderItemPatch(this.salesOrderItemsArray.length, c));
                });
                this.customerNameChangeValue();
                this.getCustomers();
                this.getAllTotal();
            }
            else {
                this.createSalesOrderReturnOrder();
                this.salesResouce.pageSize = 10;
                this.salesResouce.status = _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_4__.SalesOrderStatusEnum.Not_Return;
                this.salesOrderService.getAllSalesOrder(this.salesResouce)
                    .subscribe((resp) => {
                    if (resp && resp.headers) {
                        this.salesorders = [...resp.body];
                    }
                });
            }
        });
    }
    createSalesOrderItemPatch(index, salesOrderItem) {
        const taxs = salesOrderItem.salesOrderItemTaxes.map(c => c.taxId);
        const formGroup = this.fb.group({
            productId: [{ value: salesOrderItem.productId, disabled: true }],
            unitPrice: [{ value: salesOrderItem.unitPrice, disabled: true }],
            quantity: [{ value: salesOrderItem.quantity, disabled: true }],
            returnquantity: [{ value: salesOrderItem.quantity, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.max(salesOrderItem.quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.min(1)]],
            taxValue: [{ value: taxs, disabled: true }],
            unitId: [{ value: salesOrderItem.unitId, disabled: true }],
            warehouseId: [{ value: salesOrderItem.warehouseId, disabled: true }],
            discountPercentage: [{ value: salesOrderItem.discountPercentage, disabled: true }]
        });
        this.unitsMap[index] = [...this.route.snapshot.data['units']];
        this.warehouseMap[index] = [...this.route.snapshot.data['warehouses']];
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        this.filterProductsMap[index.toString()] = [salesOrderItem.product];
        return formGroup;
    }
    customerNameForSearchChangeValue() {
        this.sub$.sink = this.salesOrderReturnForm.get('filerCustomer').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(c => this.isCustomerLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(c => {
            this.customerResource.customerName = c;
            this.customerResource.id = null;
            return this.customerService.getCustomers(this.customerResource);
        })).subscribe((resp) => {
            this.isCustomerLoading = false;
            if (resp && resp.headers) {
                this.customersForSearch = [...resp.body];
            }
        }, (err) => {
            this.isCustomerLoading = false;
        });
    }
    customerNameChangeValue() {
        this.sub$.sink = this.salesOrderForm.get('filerCustomer').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.tap)(c => this.isCustomerLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.switchMap)(c => {
            this.customerResource.customerName = c;
            this.customerResource.id = null;
            return this.customerService.getCustomers(this.customerResource);
        })).subscribe((resp) => {
            this.isCustomerLoading = false;
            if (resp && resp.headers) {
                this.customers = [...resp.body];
            }
        }, (err) => {
            this.isCustomerLoading = false;
        });
    }
    getAllTotal() {
        let salesOrderItemsArray = this.salesOrderForm.get('salesOrderItems');
        let salesOrderItems = salesOrderItemsArray.getRawValue();
        this.totalBeforeDiscount = 0;
        this.grandTotal = 0;
        this.totalDiscount = 0;
        this.totalTax = 0;
        if (salesOrderItems && salesOrderItems.length > 0) {
            salesOrderItems.forEach(so => {
                if (so.unitPrice && so.returnquantity) {
                    const totalBeforeDiscount = this.totalBeforeDiscount + parseFloat(this.quantitiesUnitPricePipe.transform(so.returnquantity, so.unitPrice));
                    this.totalBeforeDiscount = parseFloat(totalBeforeDiscount.toFixed(2));
                    const gradTotal = this.grandTotal + parseFloat(this.quantitiesUnitPricePipe.transform(so.returnquantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0]));
                    this.grandTotal = parseFloat(gradTotal.toFixed(2));
                    const totalTax = this.totalTax + parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.returnquantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0]));
                    this.totalTax = parseFloat(totalTax.toFixed(2));
                    const totalDiscount = this.totalDiscount + parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.returnquantity, so.unitPrice, so.discountPercentage));
                    this.totalDiscount = parseFloat(totalDiscount.toFixed(2));
                }
            });
        }
    }
    onQuantityChange() {
        this.getAllTotal();
    }
    onRemoveSalesOrderItem(index) {
        this.salesOrderItemsArray.removeAt(index);
        this.salesOrderItemsArray.controls.forEach((c, index) => {
            const productId = c.get('productId').value;
            this.salesOrder.salesOrderItems.map(pi => {
                if (pi.product.id === productId) {
                    this.filterProductsMap[index.toString()] = this.cloneService.deepClone([pi.product]);
                }
            });
        });
        this.getAllTotal();
    }
    getProducts(index) {
        if (this.products.length === 0) {
            this.productResource.name = '';
            this.productService.getProducts(this.productResource)
                .subscribe((resp) => {
                this.products = [...resp.body];
                this.filterProductsMap[index.toString()] = [...resp.body];
            }, (err) => {
            });
        }
        else {
            this.filterProductsMap[index.toString()] = [...this.products];
        }
    }
    onProductSelectionChange(value, index) {
        this.salesOrderItemsArray.controls[index].patchValue({
            filterProductValue: ''
        });
        const product = this.filterProductsMap[index].find((c) => c.id === value.value);
        if (product) {
            this.salesOrderItemsArray.controls[index].patchValue({
                unitId: product.unitId,
                warehouseId: product.warehouseId
            });
        }
    }
    getNewSalesOrderNumber() {
        this.salesOrderService.getNewSalesOrderNumber().subscribe(salesOrder => {
            if (!this.salesOrder) {
                this.salesOrderForm.patchValue({
                    orderNumber: salesOrder.orderNumber
                });
            }
        });
    }
    getCustomers() {
        if (this.salesOrder) {
            this.customerResource.id = this.salesOrder.customerId;
        }
        else {
            this.customerResource.customerName = '';
            this.customerResource.id = null;
        }
        this.customerService.getCustomers(this.customerResource)
            .subscribe(resp => {
            if (resp && resp.headers) {
                this.customers = [...resp.body];
                this.customersForSearch = [...resp.body];
            }
        });
    }
    onSalesOrderSubmit() {
        if (!this.salesOrderForm.valid) {
            this.salesOrderForm.markAllAsTouched();
        }
        else {
            if (this.salesOrder && this.salesOrder.salesOrderStatus === _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_4__.SalesOrderStatusEnum.Return) {
                this.toastrService.error("Sales Order can't edit becuase it's already approved.");
                return;
            }
            const salesOrder = this.buildSalesOrder();
            if (salesOrder.id) {
                this.salesOrderService.updateSalesOrderReturn(salesOrder)
                    .subscribe((c) => {
                    this.toastrService.success('Sales order return added.');
                    this.router.navigate(['/sales-order/list']);
                });
            }
        }
    }
    buildSalesOrder() {
        const salesOrder = {
            id: this.salesOrder ? this.salesOrder.id : '',
            orderNumber: this.salesOrderForm.get('orderNumber').value,
            deliveryDate: this.salesOrderForm.get('deliveryDate').value,
            deliveryStatus: _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_1__.DeliveryStatusEnum.UnDelivery,
            isSalesOrderRequest: false,
            soCreatedDate: this.salesOrderForm.get('soCreatedDate').value,
            salesOrderStatus: _core_domain_classes_sales_order_status__WEBPACK_IMPORTED_MODULE_4__.SalesOrderStatusEnum.Return,
            customerId: this.salesOrderForm.get('customerId').value,
            totalAmount: this.grandTotal,
            totalDiscount: this.totalDiscount,
            totalTax: this.totalTax,
            note: this.salesOrderForm.get('note').value,
            salesOrderItems: []
        };
        const salesOrderItemsArray = this.salesOrderForm.get('salesOrderItems');
        const salesOrderItems = salesOrderItemsArray.getRawValue();
        if (salesOrderItems && salesOrderItems.length > 0) {
            salesOrderItems.forEach(so => {
                salesOrder.salesOrderItems.push({
                    discount: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.returnquantity, so.unitPrice, so.discountPercentage)),
                    discountPercentage: so.discountPercentage,
                    productId: so.productId,
                    unitId: so.unitId,
                    warehouseId: so.warehouseId,
                    quantity: so.returnquantity,
                    taxValue: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(so.returnquantity, so.unitPrice, so.discountPercentage, so.taxValue, this.taxsMap[0])),
                    unitPrice: parseFloat(so.unitPrice),
                    salesOrderItemTaxes: so.taxValue ? [
                        ...so.taxValue.map(element => {
                            const salesOrderItemTaxes = {
                                taxId: element
                            };
                            return salesOrderItemTaxes;
                        })
                    ] : []
                });
            });
        }
        return salesOrder;
    }
    cancel() {
        this.location.back();
    }
}
SaleOrderReturnComponent.ɵfac = function SaleOrderReturnComponent_Factory(t) { return new (t || SaleOrderReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_20__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_customer_customer_service__WEBPACK_IMPORTED_MODULE_8__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_22__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_9__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_tax_service__WEBPACK_IMPORTED_MODULE_10__.TaxService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_11__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPricePipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPriceTaxPipe), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_24__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_12__.ClonerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_13__.TranslationService)); };
SaleOrderReturnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: SaleOrderReturnComponent, selectors: [["app-sale-order-return"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([], [_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPriceTaxPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 6, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [4, "ngIf"], ["class", "loading-shade", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup"], [1, "row"], [1, "col-sm-6", "col-md-4"], [1, "form-group"], [1, "input-group"], ["formControlName", "customerId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filerCustomer", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value", 4, "ngFor", "ngForOf"], ["value", "", 4, "ngIf"], [3, "value", 4, "ngIf"], ["formControlName", "salesOrderId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filerSalesOrder", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value"], ["value", ""], [3, "value"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "col-sm-4"], [1, "text-danger"], ["formControlName", "orderNumber", "type", "text", 1, "form-control", "w-100", 3, "readonly"], [1, "col-md-4"], ["for", "soCreatedDate", 1, "text-danger"], ["id", "soCreatedDate", "formControlName", "soCreatedDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["soCreatedDate", ""], ["for", "deliveryDate", 1, "text-danger"], ["id", "deliveryDate", "formControlName", "deliveryDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["deliveryDate", ""], [1, "col-sm-12"], ["formControlName", "note", 1, "form-control", "w-100"], ["formArrayName", "salesOrderItems", 1, "col-sm-12"], [1, "col"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "table-sm"], [1, "table-column-50"], [1, "table-column-200"], [1, "table-column-150"], [1, "table-column-130"], [1, "table-column-120"], [1, "table-column-100"], [1, "table-column-300"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-10", "text-right", "font-weight-bold"], [1, "col-2", "text-left", "font-weight-bold"], [1, "col-2", "text-left", "text-danger", "font-weight-bold"], [1, "col-12"], [1, "col-md-12", "mb-1"], ["type", "submit", "class", "btn btn-success btn-sm m-right-10", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], ["class", "text-danger", 4, "ngIf"], [3, "formGroupName"], ["mat-icon-button", "", "aria-label", "Action", 3, "click", 4, "ngIf"], ["formControlName", "productId", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], [3, "dir", "value", 4, "ngIf"], ["formControlName", "warehouseId", 1, "form-control-plaintext", 3, "dir"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "unitId", 1, "form-control-plaintext", 3, "dir"], ["type", "number", "formControlName", "unitPrice", 1, "form-control", 3, "placeholder"], ["type", "number", "formControlName", "quantity", 1, "form-control", 3, "placeholder"], ["type", "number", "formControlName", "returnquantity", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "discountPercentage", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "taxValue", "multiple", "", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], ["mat-icon-button", "", "aria-label", "Action", 3, "click"], [1, "btn-danger"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10"], [1, "fas", "fa-save"], [1, "loading-shade"]], template: function SaleOrderReturnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, SaleOrderReturnComponent_ng_container_7_Template, 30, 26, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, SaleOrderReturnComponent_ng_container_8_Template, 135, 101, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, SaleOrderReturnComponent_div_9_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 4, "RETURN_SALES_ORDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.salesOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.salesOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormArrayName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_14__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_25__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__.MatProgressSpinner, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_31__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_31__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_31__.OwlDateTimeComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__.MatDivider, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_15__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe, _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPriceTaxPipe], styles: [".hr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #2095F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGUtb3JkZXItcmV0dXJuLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQUIlMjBQT1NcXEZyb250ZW5kXFxzcmNcXGFwcFxcc2FsZS1vcmRlci1yZXR1cm5cXHNhbGUtb3JkZXItcmV0dXJuXFxzYWxlLW9yZGVyLXJldHVybi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic2FsZS1vcmRlci1yZXR1cm4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMDk1RjM7XHJcbn1cclxuIiwiLmhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMDk1RjM7XG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sale-order-return_sale-order-return_module_ts.js.map