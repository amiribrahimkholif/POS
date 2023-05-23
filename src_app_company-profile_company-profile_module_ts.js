"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_company-profile_company-profile_module_ts"],{

/***/ 78478:
/*!*******************************************************************!*\
  !*** ./src/app/company-profile/company-profile-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyProfileRoutingModule": () => (/* binding */ CompanyProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var _company_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-profile.component */ 74169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _company_profile_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-profile.resolver */ 31539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        component: _company_profile_component__WEBPACK_IMPORTED_MODULE_0__.CompanyProfileComponent,
        data: { claimType: 'SETT_UPDATE_COM_PROFILE' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        resolve: {
            profile: _company_profile_resolver__WEBPACK_IMPORTED_MODULE_2__.CompanyProfileResolver
        },
    }
];
class CompanyProfileRoutingModule {
}
CompanyProfileRoutingModule.ɵfac = function CompanyProfileRoutingModule_Factory(t) { return new (t || CompanyProfileRoutingModule)(); };
CompanyProfileRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CompanyProfileRoutingModule });
CompanyProfileRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CompanyProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 74169:
/*!**************************************************************!*\
  !*** ./src/app/company-profile/company-profile.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyProfileComponent": () => (/* binding */ CompanyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _company_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-profile.service */ 91076);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);


















function CompanyProfileComponent_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", currency_r7.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", currency_r7.name, " (", currency_r7.symbol, ") ");
} }
function CompanyProfileComponent_div_44_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "PLEASE_ENTER_VALID_EMAIL"), " ");
} }
function CompanyProfileComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CompanyProfileComponent_div_44_div_1_Template, 3, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.companyProfileForm.get("email").errors == null ? null : ctx_r1.companyProfileForm.get("email").errors.email);
} }
function CompanyProfileComponent_img_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 33);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r3.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
} }
function CompanyProfileComponent_img_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 34);
} }
function CompanyProfileComponent_button_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "SAVE"), " ");
} }
function CompanyProfileComponent_div_65_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-spinner");
} }
function CompanyProfileComponent_div_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CompanyProfileComponent_div_65_mat_spinner_1_Template, 1, 0, "mat-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.isLoading);
} }
const _c0 = function () { return ["/dashboard"]; };
class CompanyProfileComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(route, fb, companyProfileService, router, toastrService, securityService, translationService, commonService) {
        super(translationService);
        this.route = route;
        this.fb = fb;
        this.companyProfileService = companyProfileService;
        this.router = router;
        this.toastrService = toastrService;
        this.securityService = securityService;
        this.translationService = translationService;
        this.commonService = commonService;
        this.imgSrc = '';
        this.isLoading = false;
        this.currencies = [];
        this.getLangDir();
    }
    ngOnInit() {
        this.createform();
        this.getCurrencies();
        this.route.data.subscribe((data) => {
            this.companyProfileForm.patchValue(data.profile);
            if (data.profile.logoUrl) {
                this.imgSrc = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + data.profile.logoUrl;
            }
        });
    }
    createform() {
        this.companyProfileForm = this.fb.group({
            id: [''],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            logoUrl: [''],
            imageData: [],
            phone: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
            currencyCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
        });
    }
    getCurrencies() {
        this.commonService.getCurrencies().subscribe(data => this.currencies = data);
    }
    saveCompanyProfile() {
        if (this.companyProfileForm.invalid) {
            this.companyProfileForm.markAllAsTouched();
            return;
        }
        const companyProfile = this.companyProfileForm.getRawValue();
        this.isLoading = true;
        this.companyProfileService.updateCompanyProfile(companyProfile)
            .subscribe((companyProfile) => {
            this.isLoading = false;
            this.securityService.updateProfile(companyProfile);
            this.toastrService.success(this.translationService.getValue('COMPANY_PROFILE_UPDATED_SUCCESSFULLY'));
            this.router.navigate(['dashboard']);
        }, () => this.isLoading = false);
    }
    onFileSelect($event) {
        const fileSelected = $event.target.files[0];
        if (!fileSelected) {
            return;
        }
        const mimeType = fileSelected.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(fileSelected);
        reader.onload = (_event) => {
            this.imgSrc = reader.result;
            this.companyProfileForm.patchValue({
                imageData: reader.result.toString(),
                logoUrl: fileSelected.name
            });
            $event.target.value = '';
        };
    }
}
CompanyProfileComponent.ɵfac = function CompanyProfileComponent_Factory(t) { return new (t || CompanyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_company_profile_service__WEBPACK_IMPORTED_MODULE_2__.CompanyProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_3__.SecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService)); };
CompanyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CompanyProfileComponent, selectors: [["app-company-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 66, vars: 38, consts: [[1, "page-header-main", "mt-2"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-row"], [1, "form-group"], ["formControlName", "title", "type", "text", 1, "form-control", "w-100"], [1, "text-danger"], ["formControlName", "currencyCode", 1, "form-control", 3, "dir", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-12"], ["cols", "30", "rows", "3", "formControlName", "address", 1, "form-control", "w-100"], ["formControlName", "phone", "type", "text", 1, "form-control", "w-100"], ["formControlName", "email", "type", "text", 1, "form-control", "w-100"], [4, "ngIf"], [1, "row", "text-center"], [1, "col-md-9", "mt-2", "ml-5"], [1, "cus-mat-card", 3, "dir"], ["hidden", "", "name", "logo", "type", "file", "name", "Profile Photo", "fxFlex", "30", 3, "change"], ["fileInput", ""], ["class", "full-width", 3, "src", 4, "ngIf"], ["class", "full-width", "src", "../../assets/images/logo.png", 4, "ngIf"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "mb-2", 3, "click"], [1, "far", "fa-image"], ["type", "submit", "class", "btn btn-success btn-sm mr-2", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "routerLink"], [1, "fas", "fa-times-circle"], ["class", "loading-shade", 4, "ngIf"], [3, "value"], ["class", "text-danger", 4, "ngIf"], [1, "full-width", 3, "src"], ["src", "../../assets/images/logo.png", 1, "full-width"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "mr-2"], [1, "fas", "fa-save"], [1, "loading-shade"]], template: function CompanyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CompanyProfileComponent_Template_form_ngSubmit_7_listener() { return ctx.saveCompanyProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 6)(12, "div", 8)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 6)(18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, CompanyProfileComponent_mat_option_23_Template, 2, 3, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 13)(25, "div", 8)(26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 13)(31, "div", 5)(32, "div", 6)(33, "div", 8)(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 6)(39, "div", 8)(40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, CompanyProfileComponent_div_44_Template, 2, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 6)(46, "div", 18)(47, "div", 19)(48, "mat-card", 20)(49, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CompanyProfileComponent_Template_input_change_49_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, CompanyProfileComponent_img_51_Template, 1, 1, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, CompanyProfileComponent_img_52_Template, 1, 0, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-card-actions")(54, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CompanyProfileComponent_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](50); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r2.click()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 5)(59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, CompanyProfileComponent_button_60_Template, 4, 3, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, CompanyProfileComponent_div_65_Template, 2, 1, "div", 30);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 19, "COMPANY_PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.companyProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 21, "TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](20, 23, "CURRENCY"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 25, "CURRENCY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.currencies);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 27, "ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](36, 29, "PHONE_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 31, "EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.companyProfileForm.get("email").touched && ctx.companyProfileForm.get("email").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.imgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.imgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](57, 33, "CHANGE_LOGO"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hasClaim", "SETT_UPDATE_COM_PROFILE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](37, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](64, 35, "CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_6__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 63765:
/*!***********************************************************!*\
  !*** ./src/app/company-profile/company-profile.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyProfileModule": () => (/* binding */ CompanyProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _company_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-profile.component */ 74169);
/* harmony import */ var _company_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-profile-routing.module */ 78478);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);








class CompanyProfileModule {
}
CompanyProfileModule.ɵfac = function CompanyProfileModule_Factory(t) { return new (t || CompanyProfileModule)(); };
CompanyProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CompanyProfileModule });
CompanyProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _company_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.CompanyProfileRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CompanyProfileModule, { declarations: [_company_profile_component__WEBPACK_IMPORTED_MODULE_0__.CompanyProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _company_profile_routing_module__WEBPACK_IMPORTED_MODULE_1__.CompanyProfileRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_company-profile_company-profile_module_ts.js.map