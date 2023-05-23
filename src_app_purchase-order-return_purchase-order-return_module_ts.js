"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_purchase-order-return_purchase-order-return_module_ts"],{

/***/ 44278:
/*!**********************************************************************************************************!*\
  !*** ./src/app/purchase-order-return/purchase-order-return-item/purchase-order-return-item.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderReturnItemComponent": () => (/* binding */ PurchaseOrderReturnItemComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/purchase-order/purchase-order.service */ 69822);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function PurchaseOrderReturnItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PurchaseOrderReturnItemComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PRODUCT_NAME"));
} }
function PurchaseOrderReturnItemComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r23.productName, " ");
} }
function PurchaseOrderReturnItemComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SOURCE"));
} }
function PurchaseOrderReturnItemComponent_td_15_ng_contaner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PURCHASE_ORDER_RETURN"), " ");
} }
function PurchaseOrderReturnItemComponent_td_15_ng_contaner_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PURCHASE_ORDER"), " ");
} }
function PurchaseOrderReturnItemComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PurchaseOrderReturnItemComponent_td_15_ng_contaner_1_Template, 3, 3, "ng-contaner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PurchaseOrderReturnItemComponent_td_15_ng_contaner_2_Template, 3, 3, "ng-contaner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r24.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r24.status != 1);
} }
function PurchaseOrderReturnItemComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT"), " ");
} }
function PurchaseOrderReturnItemComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.unitName, " ");
} }
function PurchaseOrderReturnItemComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "UNIT_PER_PRICE"), " ");
} }
function PurchaseOrderReturnItemComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r28.unitPrice), " ");
} }
function PurchaseOrderReturnItemComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "QUANTITY"), " ");
} }
function PurchaseOrderReturnItemComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r29.status === 1 ? -1 * element_r29.quantity : element_r29.quantity, " ");
} }
function PurchaseOrderReturnItemComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function PurchaseOrderReturnItemComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, element_r30.discount), "(", element_r30.discountPercentage, "%) ");
} }
function PurchaseOrderReturnItemComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TAX"), " ");
} }
function PurchaseOrderReturnItemComponent_td_30_span_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " ,");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PurchaseOrderReturnItemComponent_td_30_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PurchaseOrderReturnItemComponent_td_30_span_1_span_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r33 = ctx.$implicit;
    const last_r34 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r33.taxName, "(", tax_r33.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r34);
} }
function PurchaseOrderReturnItemComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PurchaseOrderReturnItemComponent_td_30_span_1_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", element_r31.purchaseOrderItemTaxes);
} }
function PurchaseOrderReturnItemComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), "");
} }
function PurchaseOrderReturnItemComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r36.taxValue), " ");
} }
function PurchaseOrderReturnItemComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "TOTAL"), " ");
} }
function PurchaseOrderReturnItemComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, element_r37.unitPrice * element_r37.quantity - element_r37.discount + element_r37.taxValue), " ");
} }
function PurchaseOrderReturnItemComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "WAREHOUSE"), "");
} }
function PurchaseOrderReturnItemComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r38.warehouseName, " ");
} }
function PurchaseOrderReturnItemComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
} }
function PurchaseOrderReturnItemComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 27);
} }
class PurchaseOrderReturnItemComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(purchaseOrderService, translationService) {
        super(translationService);
        this.purchaseOrderService = purchaseOrderService;
        this.translationService = translationService;
        this.purchaseOrderItems = [];
        this.isLoading = false;
        this.displayedColumns = ['productName', 'source', 'unitName', 'unitPrice', 'quantity', 'totalDiscount', 'taxes', 'totalTax', 'totalAmount', 'warehouse'];
        this.getLangDir();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['purchaseOrder']) {
            this.getPurchaseOrderItems();
        }
    }
    getPurchaseOrderItems() {
        this.isLoading = true;
        this.purchaseOrderService.getPurchaseOrderItems(this.purchaseOrder.id, true)
            .subscribe((data) => {
            this.isLoading = false;
            this.purchaseOrderItems = data;
        }, () => this.isLoading = false);
    }
}
PurchaseOrderReturnItemComponent.ɵfac = function PurchaseOrderReturnItemComponent_Factory(t) { return new (t || PurchaseOrderReturnItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService)); };
PurchaseOrderReturnItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PurchaseOrderReturnItemComponent, selectors: [["app-purchase-order-return-item"]], inputs: { purchaseOrder: "purchaseOrder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 42, vars: 9, consts: [[1, "page-header-main"], [1, "row", "align-items-center"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "source"], ["matColumnDef", "unitName"], ["matColumnDef", "unitPrice"], ["matColumnDef", "quantity"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "taxes"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "warehouse"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "loading-shade"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-header-row", ""], ["mat-row", ""]], template: function PurchaseOrderReturnItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, PurchaseOrderReturnItemComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5)(9, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PurchaseOrderReturnItemComponent_th_11_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, PurchaseOrderReturnItemComponent_td_12_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, PurchaseOrderReturnItemComponent_th_14_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, PurchaseOrderReturnItemComponent_td_15_Template, 3, 2, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PurchaseOrderReturnItemComponent_th_17_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PurchaseOrderReturnItemComponent_td_18_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PurchaseOrderReturnItemComponent_th_20_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PurchaseOrderReturnItemComponent_td_21_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, PurchaseOrderReturnItemComponent_th_23_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, PurchaseOrderReturnItemComponent_td_24_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, PurchaseOrderReturnItemComponent_th_26_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, PurchaseOrderReturnItemComponent_td_27_Template, 3, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, PurchaseOrderReturnItemComponent_th_29_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, PurchaseOrderReturnItemComponent_td_30_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, PurchaseOrderReturnItemComponent_th_32_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, PurchaseOrderReturnItemComponent_td_33_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, PurchaseOrderReturnItemComponent_th_35_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, PurchaseOrderReturnItemComponent_td_36_Template, 3, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](37, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, PurchaseOrderReturnItemComponent_th_38_Template, 3, 3, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, PurchaseOrderReturnItemComponent_td_39_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, PurchaseOrderReturnItemComponent_tr_40_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, PurchaseOrderReturnItemComponent_tr_41_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "PURCHASE_ORDER_RETURN_ITEMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.purchaseOrderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__.Dir, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS1vcmRlci1yZXR1cm4taXRlbS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 25320:
/*!**********************************************************************************************************!*\
  !*** ./src/app/purchase-order-return/purchase-order-return-list/purchase-order-return-list.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderReturnListComponent": () => (/* binding */ PurchaseOrderReturnListComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/purchase-order-resource-parameter */ 32667);
/* harmony import */ var _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/purchase-order-status */ 12023);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var src_app_purchase_order_add_purchase_order_payments_add_purchase_order_payments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/purchase-order/add-purchase-order-payments/add-purchase-order-payments.component */ 26414);
/* harmony import */ var src_app_purchase_order_purchase_order_list_purchase_order_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/purchase-order/purchase-order-list/purchase-order-datasource */ 7854);
/* harmony import */ var src_app_purchase_order_view_purchase_order_payment_view_purchase_order_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/purchase-order/view-purchase-order-payment/view-purchase-order-payment.component */ 31421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/purchase-order/purchase-order.service */ 69822);
/* harmony import */ var src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/supplier/supplier.service */ 35803);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _shared_purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/purchase-order-invoice/purchase-order-invoice.component */ 92552);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _purchase_order_return_item_purchase_order_return_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../purchase-order-return-item/purchase-order-return-item.component */ 44278);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/purchase-order-paymentStatus.pipe */ 80443);









































const _c0 = function () { return ["/purchase-order-return/add"]; };
function PurchaseOrderReturnListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 2, "ADD_PURCHASE_ORDER_RETURN"), " ");
} }
function PurchaseOrderReturnListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function PurchaseOrderReturnListComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 53);
} }
function PurchaseOrderReturnListComponent_td_17_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function PurchaseOrderReturnListComponent_td_17_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function PurchaseOrderReturnListComponent_td_17_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 60)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matMenuTriggerFor", _r46);
} }
const _c1 = function (a1) { return ["/purchase-order/detail", a1]; };
function PurchaseOrderReturnListComponent_td_17_button_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 61)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](4, _c1, po_r42.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 2, "DETAIL"));
} }
function PurchaseOrderReturnListComponent_td_17_ng_contaner_8_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderReturnListComponent_td_17_ng_contaner_8_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r55); const po_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r53.addPayment(po_r42)); });
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
function PurchaseOrderReturnListComponent_td_17_ng_contaner_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ng-contaner");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnListComponent_td_17_ng_contaner_8_button_1_Template, 6, 3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "PO_ADD_PO_PAYMENT");
} }
function PurchaseOrderReturnListComponent_td_17_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderReturnListComponent_td_17_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r58); const po_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r56.viewPayment(po_r42)); });
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
function PurchaseOrderReturnListComponent_td_17_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderReturnListComponent_td_17_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r61); const po_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r59.generateInvoice(po_r42)); });
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
const _c2 = function () { return ["PO_UPDATE_PO", "PO_VIEW_PO_DETAIL", "PO_DELETE_PO", "PO_RETURN_PO", "PO_ADD_PO_PAYMENT", "PO_VIEW_PO_PAYMENTS", "PO_GENERATE_INVOICE"]; };
function PurchaseOrderReturnListComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 54)(1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderReturnListComponent_td_17_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r63); const po_r42 = restoredCtx.$implicit; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r62.toggleRow(po_r42)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PurchaseOrderReturnListComponent_td_17_mat_icon_2_Template, 2, 0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, PurchaseOrderReturnListComponent_td_17_mat_icon_3_Template, 2, 0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, PurchaseOrderReturnListComponent_td_17_button_4_Template, 3, 1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "mat-menu", null, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, PurchaseOrderReturnListComponent_td_17_button_7_Template, 6, 6, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, PurchaseOrderReturnListComponent_td_17_ng_contaner_8_Template, 2, 1, "ng-contaner", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, PurchaseOrderReturnListComponent_td_17_button_9_Template, 6, 3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, PurchaseOrderReturnListComponent_td_17_button_10_Template, 6, 3, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r42 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", po_r42 != ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", po_r42 == ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "PO_VIEW_PO_DETAIL");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", po_r42.paymentStatus != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "PO_VIEW_PO_PAYMENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "PO_GENERATE_INVOICE");
} }
function PurchaseOrderReturnListComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function PurchaseOrderReturnListComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, po_r64.poCreatedDate, "shortDate"), " ");
} }
function PurchaseOrderReturnListComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "ORDER_NUMBER"), " ");
} }
function PurchaseOrderReturnListComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 54)(1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](2, _c1, po_r65.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", po_r65.orderNumber, " ");
} }
function PurchaseOrderReturnListComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE"), " ");
} }
function PurchaseOrderReturnListComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, po_r66.deliveryDate, "shortDate"), " ");
} }
function PurchaseOrderReturnListComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SUPPLIER_NAME"), " ");
} }
const _c3 = function (a1) { return ["/supplier/manage/", a1]; };
function PurchaseOrderReturnListComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 68)(1, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](2, _c3, po_r67.supplierId));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", po_r67.supplierName, " ");
} }
function PurchaseOrderReturnListComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function PurchaseOrderReturnListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, po_r68.totalDiscount), " ");
} }
function PurchaseOrderReturnListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function PurchaseOrderReturnListComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, po_r69.totalTax), " ");
} }
function PurchaseOrderReturnListComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TOTAL_AMOUNT"), " ");
} }
function PurchaseOrderReturnListComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, po_r70.totalAmount), " ");
} }
function PurchaseOrderReturnListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TOTAL_PAID_AMOUNT"), " ");
} }
function PurchaseOrderReturnListComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, po_r71.totalPaidAmount), " ");
} }
function PurchaseOrderReturnListComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "PAYMENT_STATUS"), " ");
} }
const _c4 = function (a0, a1, a2) { return { "badge-success": a0, "badge-danger": a1, "badge-warning": a2 }; };
function PurchaseOrderReturnListComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 71)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "paymentStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const po_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction3"](4, _c4, po_r72.paymentStatus == 0, po_r72.paymentStatus == 1, po_r72.paymentStatus == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 2, po_r72.paymentStatus), "");
} }
function PurchaseOrderReturnListComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 73);
} }
function PurchaseOrderReturnListComponent_th_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 73);
} }
function PurchaseOrderReturnListComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 73)(1, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function PurchaseOrderReturnListComponent_th_50_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r73.OrderNumberFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "ORDER_NO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r24.OrderNumberFilter);
} }
function PurchaseOrderReturnListComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 73);
} }
function PurchaseOrderReturnListComponent_th_54_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r77 = ctx.$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r76.langDir)("value", supplier_r77.supplierName);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", supplier_r77.supplierName, " ");
} }
function PurchaseOrderReturnListComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "mat-autocomplete", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("optionSelected", function PurchaseOrderReturnListComponent_th_54_Template_mat_autocomplete_optionSelected_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r78.SupplierFilter = $event.option.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "mat-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, PurchaseOrderReturnListComponent_th_54_mat_option_8_Template, 2, 3, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](4);
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 7, "SUPPLIER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formControl", ctx_r26.supplierNameControl)("matAutocomplete", _r75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r26.langDir)("autoActiveFirstOption", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 9, "NONE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](9, 11, ctx_r26.supplierList$));
} }
function PurchaseOrderReturnListComponent_th_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 73);
} }
function PurchaseOrderReturnListComponent_th_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 73);
} }
function PurchaseOrderReturnListComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 73);
} }
function PurchaseOrderReturnListComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 73);
} }
function PurchaseOrderReturnListComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "th", 73);
} }
const _c5 = function () { return [10, 20, 30]; };
function PurchaseOrderReturnListComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "mat-paginator", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r32.langDir)("length", ctx_r32.purchaseOrderResource.totalCount)("pageSize", ctx_r32.purchaseOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](4, _c5));
} }
function PurchaseOrderReturnListComponent_td_68_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 83)(2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "app-purchase-order-return-item", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const poObject_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("@detailExpand", poObject_r80 == ctx_r81.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("purchaseOrder", poObject_r80);
} }
function PurchaseOrderReturnListComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnListComponent_td_68_ng_container_1_Template, 4, 2, "ng-container", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const poObject_r80 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵattribute"]("colspan", ctx_r33.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", poObject_r80 == ctx_r33.expandedElement);
} }
function PurchaseOrderReturnListComponent_tr_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 86)(2, "span", 87)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function PurchaseOrderReturnListComponent_tr_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 88);
} }
function PurchaseOrderReturnListComponent_tr_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 89);
} }
function PurchaseOrderReturnListComponent_tr_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 88);
} }
function PurchaseOrderReturnListComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 90);
} }
function PurchaseOrderReturnListComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "tr", 91);
} }
function PurchaseOrderReturnListComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "div", 6)(2, "div", 92)(3, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function PurchaseOrderReturnListComponent_ng_container_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "app-purchase-order-invoice", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("purchaseOrder", ctx_r41.purchaseOrderForInvoice);
} }
const _c6 = function () { return ["expandedDetail"]; };
class PurchaseOrderReturnListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(purchaseOrderService, supplierService, cd, commonDialogService, toastrService, router, translationService, dialog, clonerService) {
        super(translationService);
        this.purchaseOrderService = purchaseOrderService;
        this.supplierService = supplierService;
        this.cd = cd;
        this.commonDialogService = commonDialogService;
        this.toastrService = toastrService;
        this.router = router;
        this.translationService = translationService;
        this.dialog = dialog;
        this.clonerService = clonerService;
        this.purchaseOrders = [];
        this.displayedColumns = ['action', 'poCreatedDate', 'orderNumber', 'deliveryDate', 'supplierName', 'totalDiscount', 'totalTax', 'totalAmount', 'totalPaidAmount', 'paymentStatus'];
        this.filterColumns = ['action-search', 'poCreatedDate-search', 'orderNumber-search', 'deliverDate-search', 'supplier-search', 'totalAmount-search', 'totalDiscount-search', 'totalTax-search', 'totalPaidAmount-search', 'paymentStatus-search'];
        this.footerToDisplayed = ['footer'];
        this.isLoadingResults = true;
        this.supplierNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.UntypedFormControl();
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_19__.Subject();
        this.getLangDir();
        this.purchaseOrderResource = new _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderResourceParameter();
        this.purchaseOrderResource.pageSize = 50;
        this.purchaseOrderResource.orderBy = 'poCreatedDate asc';
        this.purchaseOrderResource.isPurchaseOrderRequest = false;
        this.purchaseOrderResource.status = _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_1__.PurchaseOrderStatusEnum.Return;
    }
    get SupplierFilter() {
        return this._supplierFilter;
    }
    set SupplierFilter(v) {
        this._supplierFilter = v;
        const supplierFilter = `supplierName:${v}`;
        this.filterObservable$.next(supplierFilter);
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
        this.supplierNameControlOnChange();
        this.dataSource = new src_app_purchase_order_purchase_order_list_purchase_order_datasource__WEBPACK_IMPORTED_MODULE_4__.PurchaseOrderDataSource(this.purchaseOrderService);
        this.dataSource.loadData(this.purchaseOrderResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)())
            .subscribe((c) => {
            this.purchaseOrderResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split(':');
            if (strArray[0] === 'supplierName') {
                this.purchaseOrderResource.supplierName = strArray[1];
            }
            else if (strArray[0] === 'orderNumber') {
                this.purchaseOrderResource.orderNumber = strArray[1];
            }
            this.dataSource.loadData(this.purchaseOrderResource);
        });
    }
    supplierNameControlOnChange() {
        this.supplierList$ = this.supplierNameControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.switchMap)(c => {
            return this.supplierService.getSuppliersForDropDown(c);
        }));
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.tap)((c) => {
            this.purchaseOrderResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.purchaseOrderResource.pageSize = this.paginator.pageSize;
            this.purchaseOrderResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.purchaseOrderResource);
        }))
            .subscribe();
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.purchaseOrderResource.pageSize = c.pageSize;
                this.purchaseOrderResource.skip = c.skip;
                this.purchaseOrderResource.totalCount = c.totalCount;
            }
        });
    }
    toggleRow(element) {
        this.expandedElement = this.expandedElement === element ? null : element;
        this.cd.detectChanges();
    }
    poChangeEvent(purchaseOrder) {
        this.toggleRow(purchaseOrder);
    }
    deletePurchaseOrder(purchaseOrder) {
        this.commonDialogService.deleteConformationDialog(this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE'))
            .subscribe((isYes) => {
            if (isYes) {
                this.purchaseOrderService.deletePurchaseOrder(purchaseOrder.id).subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('PURCHASE_ORDER_DELETED_SUCCESSFULLY'));
                    this.dataSource.loadData(this.purchaseOrderResource);
                });
            }
        });
    }
    addPayment(purchaseOrder) {
        const dialogRef = this.dialog.open(src_app_purchase_order_add_purchase_order_payments_add_purchase_order_payments_component__WEBPACK_IMPORTED_MODULE_3__.AddPurchaseOrderPaymentsComponent, {
            width: '100vh',
            direction: this.langDir,
            data: Object.assign({}, purchaseOrder)
        });
        dialogRef.afterClosed().subscribe((isAdded) => {
            if (isAdded) {
                this.dataSource.loadData(this.purchaseOrderResource);
            }
        });
    }
    viewPayment(purchaseOrder) {
        const dialogRef = this.dialog.open(src_app_purchase_order_view_purchase_order_payment_view_purchase_order_payment_component__WEBPACK_IMPORTED_MODULE_5__.ViewPurchaseOrderPaymentComponent, {
            data: Object.assign({}, purchaseOrder), direction: this.langDir,
        });
        dialogRef.afterClosed().subscribe((isAdded) => {
            if (isAdded) {
                this.dataSource.loadData(this.purchaseOrderResource);
            }
        });
    }
    OnPurchaseOrderReturn(purchaseOrder) {
        this.router.navigate(['/purchase-order-return', purchaseOrder.id]);
    }
    generateInvoice(po) {
        let poForInvoice = this.clonerService.deepClone(po);
        const getSupplierRequest = this.supplierService.getSupplier(po.supplierId);
        const getPurchaseOrderItems = this.purchaseOrderService.getPurchaseOrderItems(po.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.forkJoin)({ getSupplierRequest, getPurchaseOrderItems }).subscribe(response => {
            poForInvoice.supplier = response.getSupplierRequest;
            poForInvoice.purchaseOrderItems = response.getPurchaseOrderItems;
            this.purchaseOrderForInvoice = poForInvoice;
        });
    }
}
PurchaseOrderReturnListComponent.ɵfac = function PurchaseOrderReturnListComponent_Factory(t) { return new (t || PurchaseOrderReturnListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_7__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_8__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_26__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_9__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_10__.ClonerService)); };
PurchaseOrderReturnListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: PurchaseOrderReturnListComponent, selectors: [["app-purchase-order-return-list"]], viewQuery: function PurchaseOrderReturnListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 77, vars: 20, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "btn blue-btn btn-sm m-right-10", 3, "routerLink", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "poCreatedDate", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action"], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "poCreatedDate"], ["class", "table-column-100", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderNumber"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "deliveryDate"], ["matColumnDef", "supplierName"], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalDiscount"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalTax"], ["matColumnDef", "totalAmount"], ["matColumnDef", "totalPaidAmount"], ["matColumnDef", "paymentStatus"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "action-search"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "poCreatedDate-search"], ["matColumnDef", "orderNumber-search"], ["matColumnDef", "deliverDate-search"], ["matColumnDef", "supplier-search"], ["matColumnDef", "totalAmount-search"], ["matColumnDef", "totalDiscount-search"], ["matColumnDef", "totalTax-search"], ["matColumnDef", "totalPaidAmount-search"], ["matColumnDef", "paymentStatus-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "12", 4, "matFooterCellDef"], ["matColumnDef", "expandedDetail"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-icon-button", "", 3, "click"], ["class", "ml-4", "mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor", 4, "hasClaim"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink", 4, "hasClaim"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-icon-button", "", "aria-label", "Action", 1, "ml-4", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], [3, "routerLink"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 2, "text-align", "center"], [1, "badge-pill", 3, "ngClass"], ["mat-header-cell", ""], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", 1, "form-control", "w-90", 3, "placeholder", "formControl", "matAutocomplete"], [3, "dir", "autoActiveFirstOption", "optionSelected"], ["autoSupplier", "matAutocomplete"], ["value", ""], [3, "dir", "value", 4, "ngFor", "ngForOf"], [3, "dir", "value"], ["mat-footer-cell", "", "colspan", "12"], [3, "dir", "length", "pageSize", "pageSizeOptions"], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "purchaseOrder"], ["colspan", "8"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], ["mat-row", "", 1, "example-detail-row"], [1, "col-sm-12", "ml-4", "mt-3"], [1, "font-weight-bold"]], template: function PurchaseOrderReturnListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, PurchaseOrderReturnListComponent_button_8_Template, 4, 5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, PurchaseOrderReturnListComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "div", 8)(14, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, PurchaseOrderReturnListComponent_th_16_Template, 1, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](17, PurchaseOrderReturnListComponent_td_17_Template, 11, 8, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](18, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, PurchaseOrderReturnListComponent_th_19_Template, 3, 3, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](20, PurchaseOrderReturnListComponent_td_20_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](21, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](22, PurchaseOrderReturnListComponent_th_22_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, PurchaseOrderReturnListComponent_td_23_Template, 3, 4, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](25, PurchaseOrderReturnListComponent_th_25_Template, 3, 3, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](26, PurchaseOrderReturnListComponent_td_26_Template, 3, 4, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](27, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, PurchaseOrderReturnListComponent_th_28_Template, 3, 3, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, PurchaseOrderReturnListComponent_td_29_Template, 3, 4, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](30, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](31, PurchaseOrderReturnListComponent_th_31_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](32, PurchaseOrderReturnListComponent_td_32_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](33, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](34, PurchaseOrderReturnListComponent_th_34_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](35, PurchaseOrderReturnListComponent_td_35_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](36, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](37, PurchaseOrderReturnListComponent_th_37_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](38, PurchaseOrderReturnListComponent_td_38_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](39, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](40, PurchaseOrderReturnListComponent_th_40_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, PurchaseOrderReturnListComponent_td_41_Template, 3, 3, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](42, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](43, PurchaseOrderReturnListComponent_th_43_Template, 3, 3, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, PurchaseOrderReturnListComponent_td_44_Template, 4, 8, "td", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](45, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](46, PurchaseOrderReturnListComponent_th_46_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](47, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](48, PurchaseOrderReturnListComponent_th_48_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](49, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](50, PurchaseOrderReturnListComponent_th_50_Template, 3, 4, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](51, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](52, PurchaseOrderReturnListComponent_th_52_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](53, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](54, PurchaseOrderReturnListComponent_th_54_Template, 10, 13, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](55, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](56, PurchaseOrderReturnListComponent_th_56_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](57, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](58, PurchaseOrderReturnListComponent_th_58_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](59, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](60, PurchaseOrderReturnListComponent_th_60_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](61, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](62, PurchaseOrderReturnListComponent_th_62_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](63, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](64, PurchaseOrderReturnListComponent_th_64_Template, 1, 0, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](65, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](66, PurchaseOrderReturnListComponent_td_66_Template, 2, 5, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](67, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](68, PurchaseOrderReturnListComponent_td_68_Template, 2, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](69, PurchaseOrderReturnListComponent_tr_69_Template, 6, 3, "tr", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](70, PurchaseOrderReturnListComponent_tr_70_Template, 1, 0, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](71, PurchaseOrderReturnListComponent_tr_71_Template, 1, 0, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](72, PurchaseOrderReturnListComponent_tr_72_Template, 1, 0, "tr", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](73, PurchaseOrderReturnListComponent_tr_73_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](74, PurchaseOrderReturnListComponent_tr_74_Template, 1, 0, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](75, PurchaseOrderReturnListComponent_ng_container_75_Template, 6, 3, "ng-container", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](76, PurchaseOrderReturnListComponent_ng_container_76_Template, 2, 1, "ng-container", 49);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 15, "PURCHASE_ORDER_RETURN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "PO_ADD_PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 17, ctx.dataSource.loading$));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](19, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.dataSource.count === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlDirective, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_11__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_32__.Dir, _shared_purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_12__.PurchaseOrderInvoiceComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_33__.MatOption, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_34__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_36__.MatButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteTrigger, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_38__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_39__.MatNoDataRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortHeader, _purchase_order_return_item_purchase_order_return_item_component__WEBPACK_IMPORTED_MODULE_13__.PurchaseOrderReturnItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_14__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_15__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslatePipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_16__.PaymentStatusPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS1vcmRlci1yZXR1cm4tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_41__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 44562:
/*!*******************************************************************************!*\
  !*** ./src/app/purchase-order-return/purchase-order-return-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderReturnRoutingModule": () => (/* binding */ PurchaseOrderReturnRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/products.resolve */ 29147);
/* harmony import */ var _purchase_order_purchase_order_add_edit_purchase_order_by_id_resolve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../purchase-order/purchase-order-add-edit/purchase-order-by-id.resolve */ 98408);
/* harmony import */ var _purchase_order_purchase_order_add_edit_purchase_order_tax_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../purchase-order/purchase-order-add-edit/purchase-order-tax.resolve */ 99117);
/* harmony import */ var _purchase_order_purchase_order_add_edit_purchase_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-order/purchase-order-add-edit/purchase-order-unit.resolve */ 78489);
/* harmony import */ var _purchase_order_purchase_order_add_edit_purchase_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../purchase-order/purchase-order-add-edit/purchase-order-warehouse.resolve */ 21798);
/* harmony import */ var _purchase_order_return_list_purchase_order_return_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-order-return-list/purchase-order-return-list.component */ 25320);
/* harmony import */ var _purchase_order_return_purchase_order_return_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchase-order-return/purchase-order-return.component */ 83171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);











const routes = [
    {
        path: 'list',
        component: _purchase_order_return_list_purchase_order_return_list_component__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderReturnListComponent,
        data: { claimType: 'PO_RETURN_PO' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    }, {
        path: 'add',
        component: _purchase_order_return_purchase_order_return_component__WEBPACK_IMPORTED_MODULE_7__.PurchaseOrderReturnComponent,
        data: { claimType: 'PO_RETURN_PO' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        resolve: {
            'units': _purchase_order_purchase_order_add_edit_purchase_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__.PurchaseOrderUnitResolver,
            'warehouses': _purchase_order_purchase_order_add_edit_purchase_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_5__.PurchaseOrderWarehouseResolver,
            'taxs': _purchase_order_purchase_order_add_edit_purchase_order_tax_resolve__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderTaxResolver,
            'products': _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__.ProductsResolver
        }
    }, {
        path: ':id',
        component: _purchase_order_return_purchase_order_return_component__WEBPACK_IMPORTED_MODULE_7__.PurchaseOrderReturnComponent,
        data: { claimType: 'PO_RETURN_PO' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        resolve: {
            'units': _purchase_order_purchase_order_add_edit_purchase_order_unit_resolve__WEBPACK_IMPORTED_MODULE_4__.PurchaseOrderUnitResolver,
            'taxs': _purchase_order_purchase_order_add_edit_purchase_order_tax_resolve__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderTaxResolver,
            'warehouses': _purchase_order_purchase_order_add_edit_purchase_order_warehouse_resolve__WEBPACK_IMPORTED_MODULE_5__.PurchaseOrderWarehouseResolver,
            'purchaseorder': _purchase_order_purchase_order_add_edit_purchase_order_by_id_resolve__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderByIdResolver,
            'products': _core_services_products_resolve__WEBPACK_IMPORTED_MODULE_1__.ProductsResolver
        }
    },
];
class PurchaseOrderReturnRoutingModule {
}
PurchaseOrderReturnRoutingModule.ɵfac = function PurchaseOrderReturnRoutingModule_Factory(t) { return new (t || PurchaseOrderReturnRoutingModule)(); };
PurchaseOrderReturnRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: PurchaseOrderReturnRoutingModule });
PurchaseOrderReturnRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](PurchaseOrderReturnRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 21522:
/*!***********************************************************************!*\
  !*** ./src/app/purchase-order-return/purchase-order-return.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderReturnModule": () => (/* binding */ PurchaseOrderReturnModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _purchase_order_return_purchase_order_return_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-order-return/purchase-order-return.component */ 83171);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 44466);
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
/* harmony import */ var _purchase_order_return_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase-order-return-routing.module */ 44562);
/* harmony import */ var _purchase_order_return_list_purchase_order_return_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-order-return-list/purchase-order-return-list.component */ 25320);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _purchase_order_return_item_purchase_order_return_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-order-return-item/purchase-order-return-item.component */ 44278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);



























class PurchaseOrderReturnModule {
}
PurchaseOrderReturnModule.ɵfac = function PurchaseOrderReturnModule_Factory(t) { return new (t || PurchaseOrderReturnModule)(); };
PurchaseOrderReturnModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PurchaseOrderReturnModule });
PurchaseOrderReturnModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
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
        _purchase_order_return_routing_module__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderReturnRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PurchaseOrderReturnModule, { declarations: [_purchase_order_return_purchase_order_return_component__WEBPACK_IMPORTED_MODULE_0__.PurchaseOrderReturnComponent,
        _purchase_order_return_list_purchase_order_return_list_component__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderReturnListComponent,
        _purchase_order_return_item_purchase_order_return_item_component__WEBPACK_IMPORTED_MODULE_4__.PurchaseOrderReturnItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
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
        _purchase_order_return_routing_module__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderReturnRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule] }); })();


/***/ }),

/***/ 83171:
/*!************************************************************************************************!*\
  !*** ./src/app/purchase-order-return/purchase-order-return/purchase-order-return.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderReturnComponent": () => (/* binding */ PurchaseOrderReturnComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/delivery-status-enum */ 3007);
/* harmony import */ var _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/product-resource-parameter */ 10796);
/* harmony import */ var _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/domain-classes/purchase-order-resource-parameter */ 32667);
/* harmony import */ var _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/domain-classes/purchase-order-status */ 12023);
/* harmony import */ var _core_domain_classes_supplier_resource_parameter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/domain-classes/supplier-resource-parameter */ 32754);
/* harmony import */ var _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice-tax.pipe */ 76521);
/* harmony import */ var _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/quantities-unitprice.pipe */ 16695);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/supplier/supplier.service */ 35803);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/purchase-order/purchase-order.service */ 69822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/services/tax.service */ 36018);
/* harmony import */ var src_app_product_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/product/product.service */ 55528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/services/clone.service */ 28265);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






































function PurchaseOrderReturnComponent_ng_container_7_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r3.langDir)("value", supplier_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", supplier_r8.supplierName, " ");
} }
function PurchaseOrderReturnComponent_ng_container_7_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "NONE"));
} }
function PurchaseOrderReturnComponent_ng_container_7_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_7_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const po_r9 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r6.langDir)("value", po_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", po_r9.orderNumber, " ");
} }
function PurchaseOrderReturnComponent_ng_container_7_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "form", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9)(5, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "div", 10)(9, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](13, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](14, PurchaseOrderReturnComponent_ng_container_7_mat_option_14_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, PurchaseOrderReturnComponent_ng_container_7_mat_option_15_Template, 3, 3, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, PurchaseOrderReturnComponent_ng_container_7_mat_option_16_Template, 3, 3, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "div", 8)(18, "div", 9)(19, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 10)(23, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](25, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](28, PurchaseOrderReturnComponent_ng_container_7_mat_option_28_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, PurchaseOrderReturnComponent_ng_container_7_mat_option_29_Template, 3, 3, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r0.purchaseOrderReturnForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 14, "SELECT_SUPPLIER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 16, "SELECT_SUPPLIER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r0.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](12, 18, "SEARCH_OTHER_SUPPLIERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r0.suppliersForSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.suppliersForSearch.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.suppliersForSearch.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](21, 20, "SELECT_PURCHASE_ORDER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](24, 22, "SELECT_PURCHASE_ORDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r0.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate1"]("placeholder", " ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](26, 24, "SEARCH_OTHER_PURCHASE_ORDER"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r0.purchaseorders);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r0.purchaseorders.length == 0);
} }
function PurchaseOrderReturnComponent_ng_container_8_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "PO_ORDER_NUMBER_IS_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_div_11_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r10.purchaseOrderForm.get("orderNumber").errors == null ? null : ctx_r10.purchaseOrderForm.get("orderNumber").errors.required);
} }
function PurchaseOrderReturnComponent_ng_container_8_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "ORDER_DATE_IS_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_div_19_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r11.purchaseOrderForm.get("poCreatedDate").errors == null ? null : ctx_r11.purchaseOrderForm.get("poCreatedDate").errors.required);
} }
function PurchaseOrderReturnComponent_ng_container_8_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "DELIVERY_DATE_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_div_29_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r13.purchaseOrderForm.get("deliveryDate").errors == null ? null : ctx_r13.purchaseOrderForm.get("deliveryDate").errors.required);
} }
function PurchaseOrderReturnComponent_ng_container_8_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const supplier_r23 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r15.langDir)("value", supplier_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", supplier_r23.supplierName, " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "SUPPLIER_NAME_IS_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_div_44_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r17.purchaseOrderForm.get("supplierId").errors == null ? null : ctx_r17.purchaseOrderForm.get("supplierId").errors.required);
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderReturnComponent_ng_container_8_tr_96_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r42); const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().index; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r40.onRemovePurchaseOrderItem(i_r26)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r43 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r28.langDir)("value", a_r43.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", a_r43.name, " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "NO_RECORDS"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "PRODUCT_IS_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_9_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("productId").errors == null ? null : purchaseOrderItem_r25.get("productId").errors.required);
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const warehouse_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", warehouse_r46.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", warehouse_r46.name, " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r47 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r32.langDir)("value", a_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", a_r47.name, " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "UNIT_IS_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_19_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("unitPrice").errors == null ? null : purchaseOrderItem_r25.get("unitPrice").errors.required);
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_23_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("quantity").errors == null ? null : purchaseOrderItem_r25.get("quantity").errors.required);
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_MAX"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "QUANTITY_IS_MIN"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_27_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_27_div_2_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_27_div_3_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("reurnquntity").errors == null ? null : purchaseOrderItem_r25.get("reurnquntity").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("reurnquntity").errors == null ? null : purchaseOrderItem_r25.get("reurnquntity").errors.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("reurnquntity").errors == null ? null : purchaseOrderItem_r25.get("reurnquntity").errors.min);
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "DISCOUNT_AMOUNT"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind3"](4, 6, purchaseOrderItem_r25.get("reurnquntity").value, purchaseOrderItem_r25.get("unitPrice").value, purchaseOrderItem_r25.get("discountPercentage").value)), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", tax_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"]("", tax_r57.name, " (", tax_r57.percentage, "%) ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, "TAX_IS_REQUIRED"), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_43_div_1_Template, 3, 3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const purchaseOrderItem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("taxValue").errors == null ? null : purchaseOrderItem_r25.get("taxValue").errors.required);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
function PurchaseOrderReturnComponent_ng_container_8_tr_96_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "quantitiesunitpriceTax");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    const purchaseOrderItem_r25 = ctx_r60.$implicit;
    const i_r26 = ctx_r60.index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, "TAX_AMOUNT"), ":: ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBindV"](4, 6, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction5"](12, _c0, purchaseOrderItem_r25.get("reurnquntity").value, purchaseOrderItem_r25.get("unitPrice").value, purchaseOrderItem_r25.get("discountPercentage").value, purchaseOrderItem_r25.get("taxValue").value, ctx_r39.taxsMap[i_r26]))), " ");
} }
function PurchaseOrderReturnComponent_ng_container_8_tr_96_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr", 59)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, PurchaseOrderReturnComponent_ng_container_8_tr_96_button_2_Template, 3, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "td")(4, "mat-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selectionChange", function PurchaseOrderReturnComponent_ng_container_8_tr_96_Template_mat_select_selectionChange_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62); const i_r26 = restoredCtx.index; const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r61.onProductSelectionChange($event, i_r26)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "input", 62)(6, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_7_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_8_Template, 3, 3, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_9_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "td")(11, "mat-select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](12, PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_12_Template, 2, 2, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "td")(14, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_15_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_19_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](21, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](23, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_23_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "td")(25, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function PurchaseOrderReturnComponent_ng_container_8_tr_96_Template_input_change_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r63.onQuantityChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](27, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_27_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](30, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](31, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "td")(33, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function PurchaseOrderReturnComponent_ng_container_8_tr_96_Template_input_change_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r64.onDiscountChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](37, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](38, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](39, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_39_Template, 5, 10, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "td")(41, "mat-select", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("selectionChange", function PurchaseOrderReturnComponent_ng_container_8_tr_96_Template_mat_select_selectionChange_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r62); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r65.onTaxSelectionChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](42, PurchaseOrderReturnComponent_ng_container_8_tr_96_mat_option_42_Template, 2, 3, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](43, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_43_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](46, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](47, "quantitiesunitprice");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](48, PurchaseOrderReturnComponent_ng_container_8_tr_96_div_48_Template, 5, 18, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const purchaseOrderItem_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroupName", i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r18.purchaseOrderItemsArray.length !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r18.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r18.filterProductsMap[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r18.filterProductsMap[i_r26].length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("productId").touched && purchaseOrderItem_r25.get("productId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r18.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r18.warehouseMap[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r18.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r18.unitsMap[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](18, 24, "UNIT_PER_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("unitPrice").touched && purchaseOrderItem_r25.get("unitPrice").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](22, 26, "QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("quantity").touched && purchaseOrderItem_r25.get("quantity").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](26, 28, "RETURN_QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("reurnquntity").touched && purchaseOrderItem_r25.get("reurnquntity").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](30, 30, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](31, 32, purchaseOrderItem_r25.get("reurnquntity").value, purchaseOrderItem_r25.get("unitPrice").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](34, 35, "DISCOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](37, 37, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind3"](38, 39, purchaseOrderItem_r25.get("reurnquntity").value, purchaseOrderItem_r25.get("unitPrice").value, purchaseOrderItem_r25.get("discountPercentage").value)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("discountPercentage").value != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r18.taxsMap[i_r26]);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("taxValue").touched && purchaseOrderItem_r25.get("taxValue").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](46, 43, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBindV"](47, 45, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction5"](51, _c0, purchaseOrderItem_r25.get("reurnquntity").value, purchaseOrderItem_r25.get("unitPrice").value, purchaseOrderItem_r25.get("discountPercentage").value, purchaseOrderItem_r25.get("taxValue").value, ctx_r18.taxsMap[i_r26]))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", purchaseOrderItem_r25.get("taxValue").value);
} }
function PurchaseOrderReturnComponent_ng_container_8_button_130_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 1, "RETURN"), "");
} }
function PurchaseOrderReturnComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngSubmit", function PurchaseOrderReturnComponent_ng_container_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r66.onPurchaseOrderSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 7)(3, "div", 22)(4, "div", 9)(5, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](11, PurchaseOrderReturnComponent_ng_container_8_div_11_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "div", 25)(13, "div", 9)(14, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](17, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, PurchaseOrderReturnComponent_ng_container_8_div_19_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](20, "owl-date-time", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 25)(23, "div", 9)(24, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](29, PurchaseOrderReturnComponent_ng_container_8_div_29_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](30, "owl-date-time", 28, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "div", 7)(33, "div", 8)(34, "div", 9)(35, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "div", 10)(39, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](40, "input", 34)(41, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](42, PurchaseOrderReturnComponent_ng_container_8_mat_option_42_Template, 2, 3, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](43, PurchaseOrderReturnComponent_ng_container_8_mat_option_43_Template, 3, 3, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](44, PurchaseOrderReturnComponent_ng_container_8_div_44_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](45, "div", 7)(46, "div", 35)(47, "div", 9)(48, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "div", 10)(52, "textarea", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](53, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "div", 7)(55, "div", 37)(56, "div", 7)(57, "div", 38)(58, "div", 39)(59, "table", 40)(60, "tr")(61, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](62, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](63, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](66, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](69, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](72, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](75, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](78, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](81, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](84, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](87, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](90, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](93, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](96, PurchaseOrderReturnComponent_ng_container_8_tr_96_Template, 49, 57, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](97, "div", 49)(98, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](101, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](103, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](104, "div", 7)(105, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](108, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](110, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](111, "div", 7)(112, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](114, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](115, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](117, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](118, "div", 7)(119, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](120, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](121, "div", 7)(122, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](124, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](125, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](126);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](127, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](128, "div", 7)(129, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](130, PurchaseOrderReturnComponent_ng_container_8_button_130_Template, 4, 3, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](131, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function PurchaseOrderReturnComponent_ng_container_8_Template_button_click_131_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r67); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r68.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](132, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](133);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](134, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](21);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](31);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r1.purchaseOrderForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 44, "PO_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("readonly", ctx_r1.isEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.purchaseOrderForm.get("orderNumber").touched && ctx_r1.purchaseOrderForm.get("orderNumber").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](16, 46, "ORDER_DATE"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](18, 48, "DELIVERY_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("owlDateTimeTrigger", _r12)("owlDateTime", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.purchaseOrderForm.get("poCreatedDate").touched && ctx_r1.purchaseOrderForm.get("poCreatedDate").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](26, 50, "DELIVERY_DATE"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](28, 52, "DELIVERY_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("owlDateTimeTrigger", _r14)("owlDateTime", _r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.purchaseOrderForm.get("deliveryDate").touched && ctx_r1.purchaseOrderForm.get("deliveryDate").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("pickerType", "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](37, 54, "SUPPLIER_NAME"), " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("dir", ctx_r1.langDir);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.suppliers);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.suppliers.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r1.purchaseOrderForm.get("supplierId").touched && ctx_r1.purchaseOrderForm.get("supplierId").errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](50, 56, "RETURN_NOTES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](65, 58, "PRODUCT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](68, 60, "WAREHOUSE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](71, 62, "UNIT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](74, 64, "PRICE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](77, 66, "QUANTITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](80, 68, "RETURN_QUANTITY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](83, 70, "SUBTOTAL_BEFORE_DISCOUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](86, 72, "DISCOUNT"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](89, 74, "SUBTOTAL_AFTER_DISCOUNT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](92, 76, "TAX"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](95, 78, "TOTAL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r1.purchaseOrderItemsArray == null ? null : ctx_r1.purchaseOrderItemsArray.controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](100, 80, "SUB_TOTAL_BEFORE_DISCOUNT"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](103, 82, ctx_r1.totalBeforeDiscount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](107, 84, "TOTAL_DISCOUNT"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](110, 86, ctx_r1.totalDiscount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](114, 88, "TOTAL_TAX"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](117, 90, ctx_r1.totalTax), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](124, 92, "GRAND_TOTAL"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](127, 94, ctx_r1.grandTotal), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("hasClaim", "PO_RETURN_PO");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](134, 96, "CANCEL"), " ");
} }
function PurchaseOrderReturnComponent_div_9_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "mat-spinner");
} }
function PurchaseOrderReturnComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, PurchaseOrderReturnComponent_div_9_mat_spinner_1_Template, 1, 0, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.isLoading);
} }
class PurchaseOrderReturnComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_7__.BaseComponent {
    constructor(fb, supplierService, toastrService, purchaseOrderService, router, translationService, commonService, taxService, productService, route, quantitiesUnitPricePipe, quantitiesUnitPriceTaxPipe, location, cloneService) {
        super(translationService);
        this.fb = fb;
        this.supplierService = supplierService;
        this.toastrService = toastrService;
        this.purchaseOrderService = purchaseOrderService;
        this.router = router;
        this.translationService = translationService;
        this.commonService = commonService;
        this.taxService = taxService;
        this.productService = productService;
        this.route = route;
        this.quantitiesUnitPricePipe = quantitiesUnitPricePipe;
        this.quantitiesUnitPriceTaxPipe = quantitiesUnitPriceTaxPipe;
        this.location = location;
        this.cloneService = cloneService;
        this.products = [];
        this.suppliers = [];
        this.suppliersForSearch = [];
        this.purchaseorders = [];
        this.isLoading = false;
        this.isSupplierLoading = false;
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
        this.purchaseOrderRequestList = [];
        this.getLangDir();
        this.supplierResource = new _core_domain_classes_supplier_resource_parameter__WEBPACK_IMPORTED_MODULE_4__.SupplierResourceParameter();
        this.purchaseResouce = new _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderResourceParameter();
        this.productResource = new _core_domain_classes_product_resource_parameter__WEBPACK_IMPORTED_MODULE_1__.ProductResourceParameter();
        this.purchaseOrderResource = new _core_domain_classes_purchase_order_resource_parameter__WEBPACK_IMPORTED_MODULE_2__.PurchaseOrderResourceParameter();
        this.purchaseOrderResource.pageSize = 50;
        this.purchaseOrderResource.orderBy = 'poCreatedDate asc';
        this.purchaseOrderResource.isPurchaseOrderRequest = true;
    }
    get purchaseOrderItemsArray() {
        return this.purchaseOrderForm.get('purchaseOrderItems');
    }
    ngOnInit() {
        this.createPurchaseOrder();
        this.getTaxes();
    }
    onFilterValue(filterValue) {
        console.log(filterValue);
    }
    getTaxes() {
        this.taxes$ = this.taxService.entities$;
    }
    createPurchaseOrderReturnOrder() {
        this.purchaseOrderReturnForm = this.fb.group({
            orderNumber: [''],
            filerSupplier: [''],
            supplierId: [''],
            purchaseOrderId: [''],
            filerPurchaseOrder: ['']
        });
        this.getSuppliers();
        this.supplierNameForSearchChangeValue();
        this.subscribeSupplierChangeEvent();
        this.subscribePurchaseOrderFilterChangeEvent();
        this.onPurchaseOrderChange();
    }
    subscribeSupplierChangeEvent() {
        this.purchaseOrderReturnForm.get('supplierId').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(c => {
            this.purchaseResouce.supplierId = c;
            this.purchaseResouce.status = _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderStatusEnum.Not_Return;
            return this.purchaseOrderService.getAllPurchaseOrder(this.purchaseResouce);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.purchaseorders = [...resp.body];
            }
        });
    }
    subscribePurchaseOrderFilterChangeEvent() {
        this.purchaseOrderReturnForm.get('filerPurchaseOrder').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(c => {
            this.purchaseResouce.orderNumber = c;
            return this.purchaseOrderService.getAllPurchaseOrder(this.purchaseResouce);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.purchaseorders = [...resp.body];
            }
        });
    }
    clearFormArray() {
        while (this.purchaseOrderItemsArray.length !== 0) {
            this.purchaseOrderItemsArray.removeAt(0);
        }
    }
    onPurchaseOrderChange() {
        this.purchaseOrderReturnForm.get('purchaseOrderId').valueChanges
            .subscribe(id => {
            if (id) {
                this.router.navigate(['/purchase-order-return', id]);
            }
        });
    }
    createPurchaseOrder() {
        this.route.data
            .pipe()
            .subscribe((purchaseOrderData) => {
            this.purchaseOrder = purchaseOrderData.purchaseorder;
            if (this.purchaseOrder) {
                this.isEdit = true;
                this.purchaseOrderForm = this.fb.group({
                    orderNumber: [{ value: this.purchaseOrder.orderNumber, disabled: false }],
                    filerSupplier: [{ value: '', disabled: true }],
                    deliveryDate: [{ value: this.purchaseOrder.deliveryDate, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
                    poCreatedDate: [{ value: this.purchaseOrder.poCreatedDate, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
                    deliveryStatus: [this.purchaseOrder.deliveryStatus],
                    supplierId: [{ value: this.purchaseOrder.supplierId, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
                    note: [{ value: '', disabled: false }],
                    purchaseOrderItems: this.fb.array([])
                });
                this.purchaseOrder.purchaseOrderItems.forEach(c => {
                    this.purchaseOrderItemsArray.push(this.createPurchaseOrderItemPatch(this.purchaseOrderItemsArray.length, c));
                });
                this.supplierNameChangeValue();
                this.getSuppliers();
                this.getAllTotal();
            }
            else {
                this.createPurchaseOrderReturnOrder();
                this.purchaseResouce.pageSize = 10;
                this.purchaseResouce.status = _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderStatusEnum.Not_Return;
                this.purchaseOrderService.getAllPurchaseOrder(this.purchaseResouce)
                    .subscribe((resp) => {
                    if (resp && resp.headers) {
                        this.purchaseorders = [...resp.body];
                    }
                });
            }
        });
    }
    onAddAnotherProduct() {
        this.purchaseOrderItemsArray.push(this.createPurchaseOrderItem(this.purchaseOrderItemsArray.length));
    }
    createPurchaseOrderItemPatch(index, purchaseOrderItem) {
        const taxs = purchaseOrderItem.purchaseOrderItemTaxes.map(c => c.taxId);
        const formGroup = this.fb.group({
            productId: [{ value: purchaseOrderItem.productId, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            filterProductValue: [{ value: '', disabled: true }],
            unitPrice: [{ value: purchaseOrderItem.unitPrice, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            quantity: [{ value: purchaseOrderItem.quantity, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            reurnquntity: [{ value: purchaseOrderItem.quantity, disabled: false }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.max(purchaseOrderItem.quantity), _angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.min(1)]],
            taxValue: [{ value: taxs, disabled: true }],
            unitId: [{ value: purchaseOrderItem.unitId, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            warehouseId: [{ value: purchaseOrderItem.warehouseId, disabled: true }],
            discountPercentage: [{ value: purchaseOrderItem.discountPercentage, disabled: true }]
        });
        this.unitsMap[index] = [...this.route.snapshot.data['units']];
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        this.warehouseMap[index] = [...this.route.snapshot.data['warehouses']];
        this.filterProductsMap[index.toString()] = [purchaseOrderItem.product];
        this.getProductByNameValue(formGroup, index);
        return formGroup;
    }
    createPurchaseOrderItem(index) {
        const formGroup = this.fb.group({
            productId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            filterProductValue: [''],
            unitPrice: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            quantity: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_21__.Validators.required]],
            taxValue: [null],
            unitId: [{ value: null, disabled: true }],
            warehouseId: [{ value: null, disabled: true }],
            discountPercentage: [0]
        });
        this.unitsMap[index] = [...this.route.snapshot.data['units']];
        this.warehouseMap[index] = [...this.route.snapshot.data['warehouses']];
        this.taxsMap[index] = [...this.route.snapshot.data['taxs']];
        this.filterProductsMap[index.toString()] = [...this.route.snapshot.data['products']];
        this.getProductByNameValue(formGroup, index);
        return formGroup;
    }
    getProductByNameValue(formGroup, index) {
        if (this.purchaseOrder) {
            this.getProducts(index);
        }
        this.sub$.sink = formGroup.get('filterProductValue').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(c => {
            this.productResource.name = c;
            return this.productService.getProducts(this.productResource);
        })).subscribe((resp) => {
            if (resp && resp.headers) {
                this.filterProductsMap[index.toString()] = [...resp.body];
            }
        }, (err) => {
        });
    }
    getAllTotal() {
        let purchaseOrderItemsArray = this.purchaseOrderForm.get('purchaseOrderItems');
        let purchaseOrderItems = purchaseOrderItemsArray.getRawValue();
        this.totalBeforeDiscount = 0;
        this.grandTotal = 0;
        this.totalDiscount = 0;
        this.totalTax = 0;
        if (purchaseOrderItems && purchaseOrderItems.length > 0) {
            purchaseOrderItems.forEach(po => {
                if (po.unitPrice && po.reurnquntity) {
                    const totalBeforeDiscount = this.totalBeforeDiscount + parseFloat(this.quantitiesUnitPricePipe.transform(po.reurnquntity, po.unitPrice));
                    this.totalBeforeDiscount = parseFloat(totalBeforeDiscount.toFixed(2));
                    const gradTotal = this.grandTotal + parseFloat(this.quantitiesUnitPricePipe.transform(po.reurnquntity, po.unitPrice, po.discountPercentage, po.taxValue, this.taxsMap[0]));
                    this.grandTotal = parseFloat(gradTotal.toFixed(2));
                    const totalTax = this.totalTax + parseFloat(this.quantitiesUnitPriceTaxPipe.transform(po.reurnquntity, po.unitPrice, po.discountPercentage, po.taxValue, this.taxsMap[0]));
                    this.totalTax = parseFloat(totalTax.toFixed(2));
                    const totalDiscount = this.totalDiscount + parseFloat(this.quantitiesUnitPriceTaxPipe.transform(po.reurnquntity, po.unitPrice, po.discountPercentage));
                    this.totalDiscount = parseFloat(totalDiscount.toFixed(2));
                }
            });
        }
    }
    onUnitPriceChange() {
        this.getAllTotal();
    }
    onQuantityChange() {
        this.getAllTotal();
    }
    onDiscountChange() {
        this.getAllTotal();
    }
    onTaxSelectionChange() {
        this.getAllTotal();
    }
    onRemovePurchaseOrderItem(index) {
        this.purchaseOrderItemsArray.removeAt(index);
        this.purchaseOrderItemsArray.controls.forEach((c, index) => {
            const productId = c.get('productId').value;
            this.purchaseOrder.purchaseOrderItems.map(pi => {
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
        const product = this.filterProductsMap[index].find((c) => c.id === value.value);
        this.purchaseOrderItemsArray.controls[index].patchValue({
            filterProductValue: ''
        });
        this.purchaseOrderItemsArray.controls[index].patchValue({
            unitId: product.unitId
        });
        if (product.productTaxes.length) {
            this.purchaseOrderItemsArray.controls[index].patchValue({
                taxValue: product.productTaxes.map(c => c.taxId),
                warehouseId: product.warehouseId
            });
        }
    }
    supplierNameForSearchChangeValue() {
        this.sub$.sink = this.purchaseOrderReturnForm.get('filerSupplier').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(c => this.isSupplierLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(c => {
            this.supplierResource.supplierName = c;
            this.supplierResource.id = null;
            return this.supplierService.getSuppliers(this.supplierResource);
        })).subscribe((resp) => {
            this.isSupplierLoading = false;
            if (resp && resp.headers) {
                this.suppliersForSearch = [...resp.body];
            }
        }, (err) => {
            this.isSupplierLoading = false;
        });
    }
    supplierNameChangeValue() {
        this.sub$.sink = this.purchaseOrderForm.get('filerSupplier').valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.tap)(c => this.isSupplierLoading = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.switchMap)(c => {
            this.supplierResource.supplierName = c;
            this.supplierResource.id = null;
            return this.supplierService.getSuppliers(this.supplierResource);
        })).subscribe((resp) => {
            this.isSupplierLoading = false;
            if (resp && resp.headers) {
                this.suppliers = [...resp.body];
            }
        }, (err) => {
            this.isSupplierLoading = false;
        });
    }
    getSuppliers() {
        if (this.purchaseOrder) {
            this.supplierResource.id = this.purchaseOrder.supplierId;
        }
        else {
            this.supplierResource.supplierName = '';
            this.supplierResource.id = null;
        }
        this.supplierService.getSuppliers(this.supplierResource)
            .subscribe(resp => {
            if (resp && resp.headers) {
                this.suppliers = [...resp.body];
                this.suppliersForSearch = [...resp.body];
            }
        });
    }
    onPurchaseOrderSubmit() {
        if (!this.purchaseOrderForm.valid) {
            this.purchaseOrderForm.markAllAsTouched();
        }
        else {
            if (this.purchaseOrder && this.purchaseOrder.purchaseOrderStatus === _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderStatusEnum.Return) {
                this.toastrService.error(this.translationService.getValue('RETURN_PURCHASE_ORDER_CANT_BE_EDITED'));
                return;
            }
            this.isLoading = true;
            const purchaseOrder = this.buildPurchaseOrder();
            if (purchaseOrder.id) {
                this.purchaseOrderService.updatePurchaseOrderReturn(purchaseOrder)
                    .subscribe((c) => {
                    this.isLoading = false;
                    this.toastrService.success(this.translationService.getValue('PURCHASE_ORDER_RETURN_ADDED'));
                    this.router.navigate(['/purchase-order/list']);
                }, (err) => {
                    this.isLoading = false;
                });
            }
        }
    }
    buildPurchaseOrder() {
        const purchaseOrder = {
            id: this.purchaseOrder ? this.purchaseOrder.id : '',
            orderNumber: this.purchaseOrderForm.get('orderNumber').value,
            deliveryDate: this.purchaseOrderForm.get('deliveryDate').value,
            deliveryStatus: _core_domain_classes_delivery_status_enum__WEBPACK_IMPORTED_MODULE_0__.DeliveryStatusEnum.UnDelivery,
            isPurchaseOrderRequest: false,
            poCreatedDate: this.purchaseOrderForm.get('poCreatedDate').value,
            purchaseOrderStatus: _core_domain_classes_purchase_order_status__WEBPACK_IMPORTED_MODULE_3__.PurchaseOrderStatusEnum.Return,
            supplierId: this.purchaseOrderForm.get('supplierId').value,
            totalAmount: this.grandTotal,
            totalDiscount: this.totalDiscount,
            totalTax: this.totalTax,
            note: this.purchaseOrderForm.get('note').value,
            purchaseOrderItems: []
        };
        const purchaseOrderItemsArray = this.purchaseOrderForm.get('purchaseOrderItems');
        const purchaseOrderItems = purchaseOrderItemsArray.getRawValue();
        if (purchaseOrderItems && purchaseOrderItems.length > 0) {
            purchaseOrderItems.forEach(po => {
                purchaseOrder.purchaseOrderItems.push({
                    discount: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(po.reurnquntity, po.unitPrice, po.discountPercentage)),
                    discountPercentage: po.discountPercentage,
                    productId: po.productId,
                    unitId: po.unitId,
                    warehouseId: po.warehouseId,
                    quantity: po.reurnquntity,
                    taxValue: parseFloat(this.quantitiesUnitPriceTaxPipe.transform(po.reurnquntity, po.unitPrice, po.discountPercentage, po.taxValue, this.taxsMap[0])),
                    unitPrice: parseFloat(po.unitPrice),
                    purchaseOrderItemTaxes: po.taxValue ? [
                        ...po.taxValue.map(element => {
                            const purchaseOrderItemTaxes = {
                                taxId: element
                            };
                            return purchaseOrderItemTaxes;
                        })
                    ] : []
                });
            });
        }
        return purchaseOrder;
    }
    cancel() {
        this.location.back();
    }
}
PurchaseOrderReturnComponent.ɵfac = function PurchaseOrderReturnComponent_Factory(t) { return new (t || PurchaseOrderReturnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_21__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_supplier_supplier_service__WEBPACK_IMPORTED_MODULE_8__.SupplierService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_23__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_purchase_order_purchase_order_service__WEBPACK_IMPORTED_MODULE_9__.PurchaseOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_10__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_11__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_tax_service__WEBPACK_IMPORTED_MODULE_12__.TaxService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_product_product_service__WEBPACK_IMPORTED_MODULE_13__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPricePipe), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPriceTaxPipe), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_25__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_14__.ClonerService)); };
PurchaseOrderReturnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: PurchaseOrderReturnComponent, selectors: [["app-purchase-order-return"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵProvidersFeature"]([], [_shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPriceTaxPipe]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵInheritDefinitionFeature"]], decls: 10, vars: 6, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [4, "ngIf"], ["class", "loading-shade", 4, "ngIf"], ["autocomplete", "off", 3, "formGroup"], [1, "row"], [1, "col-sm-6", "col-md-4"], [1, "form-group"], [1, "input-group"], ["formControlName", "supplierId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filerSupplier", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value", 4, "ngFor", "ngForOf"], ["value", "", 4, "ngIf"], [3, "value", 4, "ngIf"], ["formControlName", "purchaseOrderId", 1, "form-control", 3, "dir", "placeholder"], ["formControlName", "filerPurchaseOrder", "focused", "'true'", "type", "text", "autocomplete", "off", 1, "form-control", "w-100", 3, "placeholder"], [3, "dir", "value"], ["value", ""], [3, "value"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "col-sm-4"], [1, "text-danger"], ["formControlName", "orderNumber", "type", "text", 1, "form-control", "w-100", 3, "readonly"], [1, "col-md-4"], ["for", "poCreatedDate", 1, "text-danger"], ["id", "poCreatedDate", "formControlName", "poCreatedDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], [3, "pickerType"], ["poCreatedDate", ""], ["for", "deliveryDate", 1, "text-danger"], ["id", "deliveryDate", "formControlName", "deliveryDate", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime", "placeholder"], ["deliveryDate", ""], ["formControlName", "supplierId", "placeholder", "Select Supplier", 1, "form-control", 3, "dir"], ["formControlName", "filerSupplier", "focused", "'true'", "type", "text", "autocomplete", "off", "placeholder", "Search other suppliers", 1, "form-control", "w-100"], [1, "col-sm-12"], ["formControlName", "note", 1, "form-control", "w-100"], ["formArrayName", "purchaseOrderItems", 1, "col-sm-12"], [1, "col"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", "table-sm"], [1, "table-column-50"], [1, "table-column-200"], [1, "table-column-150"], [1, "table-column-130"], [1, "table-column-120"], [1, "table-column-100"], [1, "table-column-300"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-10", "text-right", "font-weight-bold"], [1, "col-2", "text-left", "font-weight-bold"], [1, "col-2", "text-left", "text-danger", "font-weight-bold"], [1, "col-12"], [1, "col-md-12", "mb-1"], ["type", "submit", "class", "btn btn-success btn-sm m-right-10", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], ["class", "text-danger", 4, "ngIf"], [3, "formGroupName"], ["mat-icon-button", "", "aria-label", "Action", 3, "click", 4, "ngIf"], ["formControlName", "productId", "placeholder", "Select Product", 1, "form-control", 3, "dir", "selectionChange"], ["formControlName", "filterProductValue", "focused", "'true'", "type", "text", "autocomplete", "off", "placeholder", "search other products", 1, "form-control", "w-100"], ["formControlName", "warehouseId", 1, "form-control-plaintext", 3, "dir"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "unitId", 1, "form-control-plaintext", 3, "dir"], ["type", "number", "formControlName", "unitPrice", 1, "form-control", 3, "placeholder"], ["type", "number", "formControlName", "quantity", 1, "form-control", 3, "placeholder"], ["type", "number", "formControlName", "reurnquntity", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "discountPercentage", 1, "form-control", 3, "placeholder", "change"], ["formControlName", "taxValue", "placeholder", "Tax", "multiple", "", 1, "form-control", 3, "selectionChange"], ["mat-icon-button", "", "aria-label", "Action", 3, "click"], [1, "btn-danger"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10"], [1, "fas", "fa-save"], [1, "loading-shade"]], template: function PurchaseOrderReturnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, PurchaseOrderReturnComponent_ng_container_7_Template, 30, 26, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, PurchaseOrderReturnComponent_ng_container_8_Template, 135, 98, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](9, PurchaseOrderReturnComponent_div_9_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 4, "PURCHASE_ORDER_RETURN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx.purchaseOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.purchaseOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormArrayName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_15__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__.Dir, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__.MatProgressSpinner, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_32__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_32__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_32__.OwlDateTimeComponent, _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__.MatDivider, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_16__.CustomCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _shared_pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_6__.QuantitiesUnitPricePipe, _shared_pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPriceTaxPipe], styles: [".hr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #2095F3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLXJldHVybi5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXHB1cmNoYXNlLW9yZGVyLXJldHVyblxccHVyY2hhc2Utb3JkZXItcmV0dXJuXFxwdXJjaGFzZS1vcmRlci1yZXR1cm4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQ0NGIiwiZmlsZSI6InB1cmNoYXNlLW9yZGVyLXJldHVybi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ocntcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIwOTVGMztcclxufVxyXG4iLCIuaHIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzIwOTVGMztcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_purchase-order-return_purchase-order-return_module_ts.js.map