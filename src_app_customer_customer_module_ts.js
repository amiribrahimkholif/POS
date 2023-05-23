"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["src_app_customer_customer_module_ts"],{

/***/ 95987:
/*!******************************************************************************!*\
  !*** ./src/app/customer/customer-detail/customer-detail-resolver.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerResolverService": () => (/* binding */ CustomerResolverService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customer.service */ 61781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);






class CustomerResolverService {
    constructor(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        if (id === 'addItem') {
            return null;
        }
        return this.customerService.getCustomer(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((customer) => {
            if (customer) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(customer);
            }
            else {
                this.router.navigate(['/customer']);
                return null;
            }
        }));
    }
}
CustomerResolverService.ɵfac = function CustomerResolverService_Factory(t) { return new (t || CustomerResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_customer_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
CustomerResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CustomerResolverService, factory: CustomerResolverService.ɵfac });


/***/ }),

/***/ 37581:
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-detail/customer-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlreadyExistValidator": () => (/* binding */ AlreadyExistValidator),
/* harmony export */   "CustomerDetailComponent": () => (/* binding */ CustomerDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! guid-typescript */ 69846);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _shared_editor_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/editor.config */ 7757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer.service */ 61781);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 49076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
























function CustomerDetailComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "CUSTOMER_NAME_IS_REQUIRED"), " ");
} }
function CustomerDetailComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerDetailComponent_div_17_div_1_Template, 3, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.customerForm.get("customerName").errors == null ? null : ctx_r0.customerForm.get("customerName").errors.required);
} }
function CustomerDetailComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "PLEASE_ENTER_VALID_EMAIL"), " ");
} }
function CustomerDetailComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "EMAIL_IS_REQUIRED"), " ");
} }
function CustomerDetailComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "MOBILE_IS_REQUIRED"), " ");
} }
function CustomerDetailComponent_mat_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", country_r15.countryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", country_r15.countryName, " ");
} }
function CustomerDetailComponent_mat_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 40)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const city_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", city_r16.cityName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](city_r16.cityName);
} }
function CustomerDetailComponent_img_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 41);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r8.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
} }
function CustomerDetailComponent_img_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "img", 42);
} }
function CustomerDetailComponent_button_96_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerDetailComponent_button_96_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](92); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r7.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "ADD_LOGO"), "");
} }
function CustomerDetailComponent_button_97_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerDetailComponent_button_97_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](92); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r7.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "CHANGE_LOGO"), "");
} }
function CustomerDetailComponent_button_98_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerDetailComponent_button_98_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r21.onRemoveImage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "REMOVE_LOGO"), "");
} }
function CustomerDetailComponent_button_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "SAVE"), " ");
} }
const _c0 = function () { return ["CUST_ADD_CUSTOMER", "CUST_UPDATE_CUSTOMER"]; };
class AlreadyExistValidator {
    static exist(flag) {
        return (c) => {
            if (flag) {
                return { exist: true };
            }
            return null;
        };
    }
}
class CustomerDetailComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(fb, customerService, commonService, router, route, toastrService, translationService, location) {
        super(translationService);
        this.fb = fb;
        this.customerService = customerService;
        this.commonService = commonService;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.translationService = translationService;
        this.location = location;
        this.imgSrc = null;
        this.isImageUpload = false;
        this.countries = [];
        this.cities = [];
        this.isLoadingCity = false;
        this.editorConfig = _shared_editor_config__WEBPACK_IMPORTED_MODULE_3__.EditorConfig;
        this.filterCityObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.getLangDir();
    }
    ngOnInit() {
        this.createCustomerForm();
        this.getCountry();
        this.getCityByName();
        const routeSub$ = this.route.data.subscribe((data) => {
            if (data.customer) {
                this.customer = Object.assign({}, data.customer);
                if (this.customer.imageUrl) {
                    this.imgSrc = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${this.customer.imageUrl}`;
                }
                this.patchCustomer();
            }
            else {
                if (this.customer) {
                    this.imgSrc = '';
                    this.customer = Object.assign({}, null);
                }
            }
        });
        this.sub$.add(routeSub$);
    }
    getCityByName() {
        this.isLoadingCity = true;
        this.sub$.sink = this.filterCityObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)((c) => {
            var strArray = c.split(':');
            return this.commonService.getCityByName(strArray[0], strArray[1]);
        }))
            .subscribe((c) => {
            this.cities = [...c];
            this.isLoadingCity = false;
        }, (err) => (this.isLoadingCity = false));
    }
    patchCustomer() {
        this.customerForm.patchValue({
            customerName: this.customer.customerName,
            contactPerson: this.customer.contactPerson,
            mobileNo: this.customer.mobileNo,
            phoneNo: this.customer.phoneNo,
            description: this.customer.description,
            website: this.customer.website,
            isVarified: this.customer.isVarified,
            url: this.customer.url,
            address: this.customer.address,
            email: this.customer.email,
            countryId: this.customer.countryId,
            cityName: this.customer.cityName,
            countryName: this.customer.countryName
        });
    }
    createCustomerForm() {
        this.customerForm = this.fb.group({
            customerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(500)]],
            contactPerson: [''],
            mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            phoneNo: '',
            website: [''],
            description: [''],
            address: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.email]],
            cityId: [''],
            countryId: [''],
            cityName: [''],
            countryName: ['']
        });
    }
    onEmailChange(event) {
        const email = this.customerForm.get('email').value;
        if (!email) {
            return;
        }
        const id = this.customer && this.customer.id ? this.customer.id : guid_typescript__WEBPACK_IMPORTED_MODULE_1__.Guid.create();
        this.sub$.sink = this.customerService
            .checkEmailOrPhoneExist('', email, id)
            .subscribe((c) => {
            const emailControl = this.customerForm.get('email');
            if (c) {
                emailControl.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    AlreadyExistValidator.exist(true),
                ]);
            }
            else {
                emailControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
            }
            emailControl.updateValueAndValidity();
        });
    }
    onMobileNoChange(event) {
        const mobileno = this.customerForm.get('mobileNo').value;
        if (!mobileno) {
            return;
        }
        const id = this.customer && this.customer.id ? this.customer.id : guid_typescript__WEBPACK_IMPORTED_MODULE_1__.Guid.create();
        this.sub$.sink = this.customerService
            .checkEmailOrPhoneExist('', mobileno, id)
            .subscribe((c) => {
            const mobileNoControl = this.customerForm.get('mobileNo');
            if (c) {
                mobileNoControl.setValidators([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    AlreadyExistValidator.exist(true),
                ]);
            }
            else {
                mobileNoControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
            }
            mobileNoControl.updateValueAndValidity();
        });
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
        // tslint:disable-next-line: variable-name
        reader.onload = (_event) => {
            this.imgSrc = reader.result;
            this.isImageUpload = true;
            $event.target.value = '';
        };
    }
    onRemoveImage() {
        this.imgSrc = '';
        this.isImageUpload = true;
    }
    getCountry() {
        const CountrySub$ = this.commonService.getCountry().subscribe((data) => {
            this.countries = data;
        });
        this.sub$.add(CountrySub$);
    }
    handleFilterCity(cityName) {
        const country = this.customerForm.get('countryName').value;
        if (cityName && country) {
            const strCountryCity = country + ':' + cityName;
            this.filterCityObservable$.next(strCountryCity);
        }
    }
    onCountryChange(country) {
        this.customerForm.patchValue({
            cityName: '',
        });
        if (country.value) {
            const strCountry = country.value + ':' + '';
            this.filterCityObservable$.next(strCountry);
        }
        else {
            this.cities = [];
        }
    }
    onCustomerList() {
        this.location.back();
    }
    onCustomerSubmit() {
        if (this.customerForm.valid) {
            const custObj = this.createBuildForm();
            custObj.logo = this.imgSrc;
            custObj.isImageUpload = this.isImageUpload;
            if (this.customer) {
                this.sub$.sink = this.customerService
                    .updateCustomer(this.customer.id, custObj)
                    .subscribe(c => {
                    this.toastrService.success(this.translationService.getValue('CUSTOMER_UPDATE_SUCCESSFULLY'));
                    this.router.navigate(['/customer']);
                });
            }
            else {
                this.sub$.sink = this.customerService
                    .saveCustomer(custObj)
                    .subscribe(c => {
                    this.toastrService.success(this.translationService.getValue('CUSTOMER_SAVE_SUCCESSFULLY'));
                    this.router.navigate(['/customer']);
                });
            }
        }
        else {
            this.markFormGroupTouched(this.customerForm);
        }
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach((control) => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    createBuildForm() {
        const customerObj = {
            id: this.customer ? this.customer.id : null,
            customerName: this.customerForm.get('customerName').value,
            contactPerson: this.customerForm.get('contactPerson').value,
            mobileNo: this.customerForm.get('mobileNo').value,
            phoneNo: this.customerForm.get('phoneNo').value,
            website: this.customerForm.get('website').value,
            description: this.customerForm.get('description').value,
            url: '',
            isVarified: true,
            isUnsubscribe: false,
            address: this.customerForm.get('address').value,
            email: this.customerForm.get('email').value,
            countryId: this.customerForm.get('countryId').value,
            cityId: this.customerForm.get('cityId').value,
            cityName: this.customerForm.get('cityName').value,
            countryName: this.customerForm.get('countryName').value,
        };
        return customerObj;
    }
}
CustomerDetailComponent.ɵfac = function CustomerDetailComponent_Factory(t) { return new (t || CustomerDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_customer_service__WEBPACK_IMPORTED_MODULE_4__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_6__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.Location)); };
CustomerDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CustomerDetailComponent, selectors: [["app-customer-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 105, vars: 66, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-row"], [1, "form-group"], [1, "text-danger"], ["formControlName", "customerName", "type", "text", 1, "form-control"], [4, "ngIf"], ["formControlName", "contactPerson", "type", "text", 1, "form-control"], ["formControlName", "email", "type", "text", 1, "form-control", 3, "change"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "mobileNo", "type", "text", 1, "form-control", 3, "change"], ["formControlName", "phoneNo", "type", "text", 1, "form-control"], ["formControlName", "website", "type", "text", 1, "form-control"], [1, "col-md-12"], ["formControlName", "address", 1, "form-control"], [1, "col-md-6", "mt-4"], [3, "dir"], ["formControlName", "countryName", 1, "form-control", 3, "dir", "placeholder", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["autocomplete", "new-city", "type", "text", "formControlName", "cityName", 1, "form-control", 3, "placeholder", "matAutocomplete", "input"], ["auto", "matAutocomplete"], [1, "col-sm-9"], ["formControlName", "description", 3, "config"], [1, "col-md-3"], [1, "cus-mat-card", "text-center", 3, "dir"], ["hidden", "", "name", "logo", "type", "file", "name", "Profile Image", "fxFlex", "30", 3, "change"], ["fileInput", ""], ["class", "full-width", 3, "src", 4, "ngIf"], ["class", "full-width", "src", "../../../assets/images/company-logo.jpg", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-sm m-right-10", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "m-top-10", "col-md-12"], ["type", "submit", "class", "btn btn-success btn-sm m-right-10", 4, "hasClaim"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], [3, "value"], [1, "full-width", 3, "src"], ["src", "../../../assets/images/company-logo.jpg", 1, "full-width"], ["type", "button", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "far", "fa-image"], [1, "fas", "fa-trash-alt"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10"], [1, "fas", "fa-save"]], template: function CustomerDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function CustomerDetailComponent_Template_form_ngSubmit_7_listener() { return ctx.onCustomerSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 6)(12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, CustomerDetailComponent_div_17_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 6)(19, "div", 8)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 6)(25, "div", 8)(26, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CustomerDetailComponent_Template_input_change_29_listener($event) { return ctx.onEmailChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, CustomerDetailComponent_div_30_Template, 3, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, CustomerDetailComponent_div_31_Template, 3, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 6)(33, "div", 7)(34, "div", 6)(35, "div", 8)(36, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CustomerDetailComponent_Template_input_change_39_listener($event) { return ctx.onMobileNoChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, CustomerDetailComponent_div_40_Template, 3, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 6)(42, "div", 8)(43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 6)(48, "div", 8)(49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 18)(54, "div", 5)(55, "div", 6)(56, "div", 8)(57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div", 20)(62, "div", 5)(63, "div", 6)(64, "mat-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function CustomerDetailComponent_Template_mat_select_selectionChange_67_listener($event) { return ctx.onCountryChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, CustomerDetailComponent_mat_option_69_Template, 2, 2, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 6)(71, "div", 8)(72, "mat-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function CustomerDetailComponent_Template_input_input_75_listener($event) { return ctx.handleFilterCity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "mat-autocomplete", 21, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, CustomerDetailComponent_mat_option_79_Template, 3, 2, "mat-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 26)(81, "div", 8)(82, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](85, "angular-editor", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 28)(87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "mat-card", 29)(91, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function CustomerDetailComponent_Template_input_change_91_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](93, CustomerDetailComponent_img_93_Template, 1, 1, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, CustomerDetailComponent_img_94_Template, 1, 0, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](96, CustomerDetailComponent_button_96_Template, 4, 3, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](97, CustomerDetailComponent_button_97_Template, 4, 3, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](98, CustomerDetailComponent_button_98_Template, 4, 3, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](100, CustomerDetailComponent_button_100_Template, 4, 3, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerDetailComponent_Template_button_click_101_listener() { return ctx.onCustomerList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](102, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 35, "MANAGE_CUSTOMER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.customerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 37, "CUSTOMER_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.customerForm.get("customerName").touched && ctx.customerForm.get("customerName").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 39, "CONTACT_PERSON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 41, "EMAIL"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.customerForm.get("email").touched && (ctx.customerForm.get("email").errors == null ? null : ctx.customerForm.get("email").errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.customerForm.get("email").touched && (ctx.customerForm.get("email").errors == null ? null : ctx.customerForm.get("email").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](38, 43, "MOBILE_NUMBER"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.customerForm.get("mobileNo").touched && (ctx.customerForm.get("mobileNo").errors == null ? null : ctx.customerForm.get("mobileNo").errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](45, 45, "PHONE_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 47, "WEBSITE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](59, 49, "ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](66, 51, "COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](68, 53, "SELECT_COUNTRY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](74, 55, "CITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](76, 57, "SEARCH_CITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.cities);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](84, 59, "DESCRIPTION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("config", ctx.editorConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](89, 61, "UPLOAD_LOGO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.imgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.imgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.imgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.imgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.imgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](65, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](104, 63, "CANCEL"), " ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_7__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__.Dir, _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_18__.AngularEditorComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteTrigger, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCardActions, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe], styles: [".w-100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .k-textbox-container, .k-floating-label-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.chem-img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.display-none[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mt-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXGN1c3RvbWVyXFxjdXN0b21lci1kZXRhaWxcXGN1c3RvbWVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTs7RUFFRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7QUNLRjs7QURGQTtFQUNFLGlCQUFBO0FDS0YiLCJmaWxlIjoiY3VzdG9tZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG46Om5nLWRlZXAgLmstdGV4dGJveC1jb250YWluZXIsXHJcbi5rLWZsb2F0aW5nLWxhYmVsLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNoZW0taW1nIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4uZGlzcGxheS1ub25lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tdC0xMCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnB0LTEwIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4iLCIudy0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5rLXRleHRib3gtY29udGFpbmVyLFxuLmstZmxvYXRpbmctbGFiZWwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGVtLWltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmRpc3BsYXktbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tdC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5wdC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 67060:
/*!***************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-datasource.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDataSource": () => (/* binding */ CustomerDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44661);


class CustomerDataSource {
    constructor(customerService) {
        this.customerService = customerService;
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
        this.sub$ = this.customerService.getCustomers(resource)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.finalize)(() => this.loadingSubject$.next(false)))
            .subscribe((resp) => {
            if (resp && resp.headers.get('X-Pagination')) {
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

/***/ 10056:
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListComponent": () => (/* binding */ CustomerListComponent)
/* harmony export */ });
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 80823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 53298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/domain-classes/customer-resource-parameter */ 13231);
/* harmony import */ var _customer_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-datasource */ 67060);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer.service */ 61781);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _customer_so_list_customer_so_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-so-list/customer-so-list.component */ 23846);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





























const _c0 = function () { return ["/customer/addItem"]; };
function CustomerListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "ADD_CUSTOMER"), " ");
} }
function CustomerListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CustomerListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 44);
} }
function CustomerListComponent_td_15_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CustomerListComponent_td_15_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CustomerListComponent_td_15_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 51)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r32);
} }
function CustomerListComponent_td_15_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerListComponent_td_15_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const customer_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r35.editCustomer(customer_r28.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "EDIT"));
} }
function CustomerListComponent_td_15_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerListComponent_td_15_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r40); const customer_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r38.deleteCustomer(customer_r28)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "DELETE"));
} }
const _c1 = function () { return ["CUST_UPDATE_CUSTOMER", "CUST_DELETE_CUSTOMER"]; };
function CustomerListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CustomerListComponent_td_15_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42); const customer_r28 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r41.toggleRow(customer_r28)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, CustomerListComponent_td_15_mat_icon_2_Template, 2, 0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CustomerListComponent_td_15_mat_icon_3_Template, 2, 0, "mat-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, CustomerListComponent_td_15_button_4_Template, 3, 1, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-menu", null, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CustomerListComponent_td_15_button_7_Template, 6, 3, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, CustomerListComponent_td_15_button_8_Template, 6, 3, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const customer_r28 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", customer_r28 != ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", customer_r28 == ctx_r3.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasClaim", "CUST_UPDATE_CUSTOMER");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasClaim", "CUST_DELETE_CUSTOMER");
} }
function CustomerListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function CustomerListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r43.customerName, " ");
} }
function CustomerListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "CONTACT_PERSON"), " ");
} }
function CustomerListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r44.contactPerson, " ");
} }
function CustomerListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "EMAIL"), " ");
} }
function CustomerListComponent_td_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate1"]("href", "mailto:", row_r45.email, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](row_r45.email);
} }
function CustomerListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerListComponent_td_24_ng_container_1_Template, 3, 2, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", row_r45.email);
} }
function CustomerListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "MOBILE"), " ");
} }
function CustomerListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r48.mobileNo, " ");
} }
function CustomerListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "WEBSITE"), " ");
} }
function CustomerListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r49.website, " ");
} }
function CustomerListComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 59);
} }
function CustomerListComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 60)(1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_th_34_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r50.NameFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r15.NameFilter);
} }
function CustomerListComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 44)(1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_th_36_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r52.ContactFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r16.ContactFilter);
} }
function CustomerListComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 62)(1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_th_38_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r54.EmailFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r17.EmailFilter);
} }
function CustomerListComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 44)(1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_th_40_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r56.MobileOrPhoneFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r18.MobileOrPhoneFilter);
} }
function CustomerListComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 44)(1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function CustomerListComponent_th_42_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r58.WebsiteFilter = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r19.WebsiteFilter);
} }
const _c2 = function () { return [10, 20, 30]; };
function CustomerListComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-paginator", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx_r20.customerResource.totalCount)("pageSize", ctx_r20.customerResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c2));
} }
function CustomerListComponent_td_46_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 66)(2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-customer-so-list", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const customer_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@detailExpand", customer_r60 == ctx_r61.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("customerId", customer_r60.id);
} }
function CustomerListComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CustomerListComponent_td_46_ng_container_1_Template, 4, 2, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r60 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("colspan", ctx_r21.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", customer_r60 == ctx_r21.expandedElement);
} }
function CustomerListComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr")(1, "td", 69)(2, "span", 70)(3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
function CustomerListComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 71);
} }
function CustomerListComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 72);
} }
function CustomerListComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 73);
} }
function CustomerListComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 74);
} }
function CustomerListComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 75);
} }
const _c3 = function () { return ["action-search", "customerName-search", "contactPerson-search", "email-search", "mobileNo-search", "website-search"]; };
const _c4 = function () { return ["expandedDetail"]; };
class CustomerListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(customerService, toastrService, commonDialogService, router, translationService, dialog, cd) {
        super(translationService);
        this.customerService = customerService;
        this.toastrService = toastrService;
        this.commonDialogService = commonDialogService;
        this.router = router;
        this.translationService = translationService;
        this.dialog = dialog;
        this.cd = cd;
        this.customers = [];
        this.displayedColumns = ['action', 'customerName', 'contactPerson', 'email', 'mobileNo', 'website'];
        this.columnsToDisplay = ["footer"];
        this.isLoadingResults = true;
        this.filterObservable$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.getLangDir();
        this.customerResource = new _core_domain_classes_customer_resource_parameter__WEBPACK_IMPORTED_MODULE_1__.CustomerResourceParameter();
        this.customerResource.pageSize = 20;
        this.customerResource.orderBy = 'customerName asc';
    }
    get NameFilter() {
        return this._nameFilter;
    }
    set ContactFilter(v) {
        this._contactPersonFilter = v;
        const customerNameFilter = `contactPerson##${v}`;
        this.filterObservable$.next(customerNameFilter);
    }
    set NameFilter(v) {
        this._nameFilter = v;
        const nameFilter = `customerName##${v}`;
        this.filterObservable$.next(nameFilter);
    }
    get WebsiteFilter() {
        return this._websiteFilter;
    }
    set WebsiteFilter(v) {
        this._websiteFilter = v;
        const websiteFilter = `website##${v}`;
        this.filterObservable$.next(websiteFilter);
    }
    get EmailFilter() {
        return this._emailFilter;
    }
    set EmailFilter(v) {
        this._emailFilter = v;
        const emailFilter = `email##${v}`;
        this.filterObservable$.next(emailFilter);
    }
    get MobileOrPhoneFilter() {
        return this._mobileOrPhoneFilter;
    }
    set MobileOrPhoneFilter(v) {
        this._mobileOrPhoneFilter = v;
        const mobileOrFilter = `mobileNo##${v}`;
        this.filterObservable$.next(mobileOrFilter);
    }
    ngOnInit() {
        this.dataSource = new _customer_datasource__WEBPACK_IMPORTED_MODULE_2__.CustomerDataSource(this.customerService);
        this.dataSource.loadData(this.customerResource);
        this.getResourceParameter();
        this.sub$.sink = this.filterObservable$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)())
            .subscribe((c) => {
            this.customerResource.skip = 0;
            this.paginator.pageIndex = 0;
            const strArray = c.split('##');
            if (strArray[0] === 'customerName') {
                this.customerResource.customerName = escape(strArray[1]);
            }
            else if (strArray[0] === 'email') {
                this.customerResource.email = strArray[1];
            }
            else if (strArray[0] === 'mobileNo') {
                this.customerResource.mobileNo = strArray[1];
            }
            else if (strArray[0] === 'contactPerson') {
                this.customerResource.contactPerson = strArray[1];
            }
            else if (strArray[0] === 'website') {
                this.customerResource.website = encodeURI(strArray[1].trim());
            }
            this.dataSource.loadData(this.customerResource);
        });
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.tap)((c) => {
            this.customerResource.skip = this.paginator.pageIndex * this.paginator.pageSize;
            this.customerResource.pageSize = this.paginator.pageSize;
            this.customerResource.orderBy = this.sort.active + ' ' + this.sort.direction;
            this.dataSource.loadData(this.customerResource);
        }))
            .subscribe();
    }
    deleteCustomer(customer) {
        this.sub$.sink = this.commonDialogService
            .deleteConformationDialog(`${this.translationService.getValue('ARE_YOU_SURE_YOU_WANT_TO_DELETE')} ${customer.customerName}`)
            .subscribe((isTrue) => {
            if (isTrue) {
                this.sub$.sink = this.customerService.deleteCustomer(customer.id)
                    .subscribe(() => {
                    this.toastrService.success(this.translationService.getValue('CUSTOMER_DELETED_SUCCESSFULLY'));
                    this.paginator.pageIndex = 0;
                    this.dataSource.loadData(this.customerResource);
                });
            }
        });
    }
    getResourceParameter() {
        this.sub$.sink = this.dataSource.responseHeaderSubject$
            .subscribe((c) => {
            if (c) {
                this.customerResource.pageSize = c.pageSize;
                this.customerResource.skip = c.skip;
                this.customerResource.totalCount = c.totalCount;
            }
        });
    }
    editCustomer(customerId) {
        this.router.navigate(['/customer', customerId]);
    }
    toggleRow(customer) {
        this.expandedElement = this.expandedElement === customer ? null : customer;
        this.cd.detectChanges();
    }
}
CustomerListComponent.ɵfac = function CustomerListComponent_Factory(t) { return new (t || CustomerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_4__.CommonDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_5__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
CustomerListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CustomerListComponent, selectors: [["app-customer-list"]], viewQuery: function CustomerListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 53, vars: 19, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto", "col"], [1, "content-header"], [1, "col-md-auto", "col-sm-auto", "col-auto"], ["class", "btn blue-btn btn-sm m-right-10", 3, "routerLink", 4, "hasClaim"], ["class", "loading-shade", 4, "ngIf"], [1, "table-responsive"], ["mat-table", "", "matSort", "", "multiTemplateDataRows", "", "matSortActive", "customerName", 1, "table", "table-bordered", "table-hover", "grid-height", 3, "dir", "dataSource"], ["matColumnDef", "action", "sticky", ""], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "customerName", "sticky", ""], ["class", "table-column-300", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "contactPerson"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "email"], ["class", "table-column-200", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "mobileNo"], ["matColumnDef", "website"], ["matColumnDef", "action-search", "sticky", ""], ["class", "table-column-50", "class", "pr-5", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "customerName-search", "sticky", ""], ["class", "table-column-300", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "contactPerson-search"], ["matColumnDef", "email-search"], ["class", "table-column-200", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "mobileNo-search"], ["matColumnDef", "website-search"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "8", 4, "matFooterCellDef"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], [4, "matNoDataRow"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], [1, "fas", "fa-plus"], [1, "loading-shade"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], ["class", "", "mat-icon-button", "", "aria-label", "Action", 3, "matMenuTriggerFor", 4, "hasClaim"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "hasClaim"], ["mat-icon-button", "", "aria-label", "Action", 1, "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], [3, "href"], ["mat-header-cell", "", 1, "pr-5"], ["mat-header-cell", "", 1, "table-column-300"], ["type", "text", 1, "form-control", "w-90", 3, "ngModel", "ngModelChange"], ["mat-header-cell", "", 1, "table-column-200"], ["mat-footer-cell", "", "colspan", "8"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-cell", ""], [1, "example-element-detail"], [1, "inner-table", "mat-elevation-z8"], [3, "customerId"], ["colspan", "9"], [1, "p-4", "mt-4"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-footer-row", ""], ["mat-row", "", 1, "example-detail-row"]], template: function CustomerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, CustomerListComponent_button_8_Template, 4, 5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, CustomerListComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 7)(12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, CustomerListComponent_th_14_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, CustomerListComponent_td_15_Template, 9, 6, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](16, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, CustomerListComponent_th_17_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, CustomerListComponent_td_18_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, CustomerListComponent_th_20_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, CustomerListComponent_td_21_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](22, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, CustomerListComponent_th_23_Template, 3, 3, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CustomerListComponent_td_24_Template, 2, 1, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](25, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, CustomerListComponent_th_26_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, CustomerListComponent_td_27_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](28, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, CustomerListComponent_th_29_Template, 3, 3, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, CustomerListComponent_td_30_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](31, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, CustomerListComponent_th_32_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](33, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, CustomerListComponent_th_34_Template, 2, 1, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](35, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, CustomerListComponent_th_36_Template, 2, 1, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](37, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, CustomerListComponent_th_38_Template, 2, 1, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](39, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, CustomerListComponent_th_40_Template, 2, 1, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](41, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, CustomerListComponent_th_42_Template, 2, 1, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](43, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, CustomerListComponent_td_44_Template, 2, 4, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](45, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, CustomerListComponent_td_46_Template, 2, 2, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, CustomerListComponent_tr_47_Template, 6, 3, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, CustomerListComponent_tr_48_Template, 1, 0, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, CustomerListComponent_tr_49_Template, 1, 0, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, CustomerListComponent_tr_50_Template, 1, 0, "tr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, CustomerListComponent_tr_51_Template, 1, 0, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, CustomerListComponent_tr_52_Template, 1, 0, "tr", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 13, "CUSTOMERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hasClaim", "CUST_ADD_CUSTOMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 15, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](17, _c3))("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matFooterRowDef", ctx.columnsToDisplay)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](18, _c4));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_6__.HasClaimDirective, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Dir, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatFooterRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatNoDataRow, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_26__.MatButton, _customer_so_list_customer_so_list_component__WEBPACK_IMPORTED_MODULE_7__.CustomerSoListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe], styles: [".mat-table[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n}\n\n.table-column-0[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.table-column-2[_ngcontent-%COMP%] {\n  min-width: 2px;\n}\n\n.table-column-4[_ngcontent-%COMP%] {\n  min-width: 4px;\n}\n\n.table-column-6[_ngcontent-%COMP%] {\n  min-width: 6px;\n}\n\n.table-column-8[_ngcontent-%COMP%] {\n  min-width: 8px;\n}\n\n.table-column-10[_ngcontent-%COMP%] {\n  min-width: 10px;\n}\n\n.table-column-12[_ngcontent-%COMP%] {\n  min-width: 12px;\n}\n\n.table-column-14[_ngcontent-%COMP%] {\n  min-width: 14px;\n}\n\n.table-column-16[_ngcontent-%COMP%] {\n  min-width: 16px;\n}\n\n.table-column-18[_ngcontent-%COMP%] {\n  min-width: 18px;\n}\n\n.table-column-20[_ngcontent-%COMP%] {\n  min-width: 20px;\n}\n\n.table-column-22[_ngcontent-%COMP%] {\n  min-width: 22px;\n}\n\n.table-column-24[_ngcontent-%COMP%] {\n  min-width: 24px;\n}\n\n.table-column-26[_ngcontent-%COMP%] {\n  min-width: 26px;\n}\n\n.table-column-28[_ngcontent-%COMP%] {\n  min-width: 28px;\n}\n\n.table-column-30[_ngcontent-%COMP%] {\n  min-width: 30px;\n}\n\n.table-column-32[_ngcontent-%COMP%] {\n  min-width: 32px;\n}\n\n.table-column-34[_ngcontent-%COMP%] {\n  min-width: 34px;\n}\n\n.table-column-36[_ngcontent-%COMP%] {\n  min-width: 36px;\n}\n\n.table-column-38[_ngcontent-%COMP%] {\n  min-width: 38px;\n}\n\n.table-column-40[_ngcontent-%COMP%] {\n  min-width: 40px;\n}\n\n.table-column-42[_ngcontent-%COMP%] {\n  min-width: 42px;\n}\n\n.table-column-44[_ngcontent-%COMP%] {\n  min-width: 44px;\n}\n\n.table-column-46[_ngcontent-%COMP%] {\n  min-width: 46px;\n}\n\n.table-column-48[_ngcontent-%COMP%] {\n  min-width: 48px;\n}\n\n.table-column-50[_ngcontent-%COMP%] {\n  min-width: 50px;\n}\n\n.table-column-52[_ngcontent-%COMP%] {\n  min-width: 52px;\n}\n\n.table-column-54[_ngcontent-%COMP%] {\n  min-width: 54px;\n}\n\n.table-column-56[_ngcontent-%COMP%] {\n  min-width: 56px;\n}\n\n.table-column-58[_ngcontent-%COMP%] {\n  min-width: 58px;\n}\n\n.table-column-60[_ngcontent-%COMP%] {\n  min-width: 60px;\n}\n\n.table-column-62[_ngcontent-%COMP%] {\n  min-width: 62px;\n}\n\n.table-column-64[_ngcontent-%COMP%] {\n  min-width: 64px;\n}\n\n.table-column-66[_ngcontent-%COMP%] {\n  min-width: 66px;\n}\n\n.table-column-68[_ngcontent-%COMP%] {\n  min-width: 68px;\n}\n\n.table-column-70[_ngcontent-%COMP%] {\n  min-width: 70px;\n}\n\n.table-column-72[_ngcontent-%COMP%] {\n  min-width: 72px;\n}\n\n.table-column-74[_ngcontent-%COMP%] {\n  min-width: 74px;\n}\n\n.table-column-76[_ngcontent-%COMP%] {\n  min-width: 76px;\n}\n\n.table-column-78[_ngcontent-%COMP%] {\n  min-width: 78px;\n}\n\n.table-column-80[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n\n.table-column-82[_ngcontent-%COMP%] {\n  min-width: 82px;\n}\n\n.table-column-84[_ngcontent-%COMP%] {\n  min-width: 84px;\n}\n\n.table-column-86[_ngcontent-%COMP%] {\n  min-width: 86px;\n}\n\n.table-column-88[_ngcontent-%COMP%] {\n  min-width: 88px;\n}\n\n.table-column-90[_ngcontent-%COMP%] {\n  min-width: 90px;\n}\n\n.table-column-92[_ngcontent-%COMP%] {\n  min-width: 92px;\n}\n\n.table-column-94[_ngcontent-%COMP%] {\n  min-width: 94px;\n}\n\n.table-column-96[_ngcontent-%COMP%] {\n  min-width: 96px;\n}\n\n.table-column-98[_ngcontent-%COMP%] {\n  min-width: 98px;\n}\n\n.table-column-100[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n\n.table-column-102[_ngcontent-%COMP%] {\n  min-width: 102px;\n}\n\n.table-column-104[_ngcontent-%COMP%] {\n  min-width: 104px;\n}\n\n.table-column-106[_ngcontent-%COMP%] {\n  min-width: 106px;\n}\n\n.table-column-108[_ngcontent-%COMP%] {\n  min-width: 108px;\n}\n\n.table-column-110[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n\n.table-column-112[_ngcontent-%COMP%] {\n  min-width: 112px;\n}\n\n.table-column-114[_ngcontent-%COMP%] {\n  min-width: 114px;\n}\n\n.table-column-116[_ngcontent-%COMP%] {\n  min-width: 116px;\n}\n\n.table-column-118[_ngcontent-%COMP%] {\n  min-width: 118px;\n}\n\n.table-column-120[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n\n.table-column-122[_ngcontent-%COMP%] {\n  min-width: 122px;\n}\n\n.table-column-124[_ngcontent-%COMP%] {\n  min-width: 124px;\n}\n\n.table-column-126[_ngcontent-%COMP%] {\n  min-width: 126px;\n}\n\n.table-column-128[_ngcontent-%COMP%] {\n  min-width: 128px;\n}\n\n.table-column-130[_ngcontent-%COMP%] {\n  min-width: 130px;\n}\n\n.table-column-132[_ngcontent-%COMP%] {\n  min-width: 132px;\n}\n\n.table-column-134[_ngcontent-%COMP%] {\n  min-width: 134px;\n}\n\n.table-column-136[_ngcontent-%COMP%] {\n  min-width: 136px;\n}\n\n.table-column-138[_ngcontent-%COMP%] {\n  min-width: 138px;\n}\n\n.table-column-140[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n.table-column-142[_ngcontent-%COMP%] {\n  min-width: 142px;\n}\n\n.table-column-144[_ngcontent-%COMP%] {\n  min-width: 144px;\n}\n\n.table-column-146[_ngcontent-%COMP%] {\n  min-width: 146px;\n}\n\n.table-column-148[_ngcontent-%COMP%] {\n  min-width: 148px;\n}\n\n.table-column-150[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.table-column-152[_ngcontent-%COMP%] {\n  min-width: 152px;\n}\n\n.table-column-154[_ngcontent-%COMP%] {\n  min-width: 154px;\n}\n\n.table-column-156[_ngcontent-%COMP%] {\n  min-width: 156px;\n}\n\n.table-column-158[_ngcontent-%COMP%] {\n  min-width: 158px;\n}\n\n.table-column-160[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n\n.table-column-162[_ngcontent-%COMP%] {\n  min-width: 162px;\n}\n\n.table-column-164[_ngcontent-%COMP%] {\n  min-width: 164px;\n}\n\n.table-column-166[_ngcontent-%COMP%] {\n  min-width: 166px;\n}\n\n.table-column-168[_ngcontent-%COMP%] {\n  min-width: 168px;\n}\n\n.table-column-170[_ngcontent-%COMP%] {\n  min-width: 170px;\n}\n\n.table-column-172[_ngcontent-%COMP%] {\n  min-width: 172px;\n}\n\n.table-column-174[_ngcontent-%COMP%] {\n  min-width: 174px;\n}\n\n.table-column-176[_ngcontent-%COMP%] {\n  min-width: 176px;\n}\n\n.table-column-178[_ngcontent-%COMP%] {\n  min-width: 178px;\n}\n\n.table-column-180[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n\n.table-column-182[_ngcontent-%COMP%] {\n  min-width: 182px;\n}\n\n.table-column-184[_ngcontent-%COMP%] {\n  min-width: 184px;\n}\n\n.table-column-186[_ngcontent-%COMP%] {\n  min-width: 186px;\n}\n\n.table-column-188[_ngcontent-%COMP%] {\n  min-width: 188px;\n}\n\n.table-column-190[_ngcontent-%COMP%] {\n  min-width: 190px;\n}\n\n.table-column-192[_ngcontent-%COMP%] {\n  min-width: 192px;\n}\n\n.table-column-194[_ngcontent-%COMP%] {\n  min-width: 194px;\n}\n\n.table-column-196[_ngcontent-%COMP%] {\n  min-width: 196px;\n}\n\n.table-column-198[_ngcontent-%COMP%] {\n  min-width: 198px;\n}\n\n.table-column-200[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.table-column-202[_ngcontent-%COMP%] {\n  min-width: 202px;\n}\n\n.table-column-204[_ngcontent-%COMP%] {\n  min-width: 204px;\n}\n\n.table-column-206[_ngcontent-%COMP%] {\n  min-width: 206px;\n}\n\n.table-column-208[_ngcontent-%COMP%] {\n  min-width: 208px;\n}\n\n.table-column-210[_ngcontent-%COMP%] {\n  min-width: 210px;\n}\n\n.table-column-212[_ngcontent-%COMP%] {\n  min-width: 212px;\n}\n\n.table-column-214[_ngcontent-%COMP%] {\n  min-width: 214px;\n}\n\n.table-column-216[_ngcontent-%COMP%] {\n  min-width: 216px;\n}\n\n.table-column-218[_ngcontent-%COMP%] {\n  min-width: 218px;\n}\n\n.table-column-220[_ngcontent-%COMP%] {\n  min-width: 220px;\n}\n\n.table-column-222[_ngcontent-%COMP%] {\n  min-width: 222px;\n}\n\n.table-column-224[_ngcontent-%COMP%] {\n  min-width: 224px;\n}\n\n.table-column-226[_ngcontent-%COMP%] {\n  min-width: 226px;\n}\n\n.table-column-228[_ngcontent-%COMP%] {\n  min-width: 228px;\n}\n\n.table-column-230[_ngcontent-%COMP%] {\n  min-width: 230px;\n}\n\n.table-column-232[_ngcontent-%COMP%] {\n  min-width: 232px;\n}\n\n.table-column-234[_ngcontent-%COMP%] {\n  min-width: 234px;\n}\n\n.table-column-236[_ngcontent-%COMP%] {\n  min-width: 236px;\n}\n\n.table-column-238[_ngcontent-%COMP%] {\n  min-width: 238px;\n}\n\n.table-column-240[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n\n.table-column-242[_ngcontent-%COMP%] {\n  min-width: 242px;\n}\n\n.table-column-244[_ngcontent-%COMP%] {\n  min-width: 244px;\n}\n\n.table-column-246[_ngcontent-%COMP%] {\n  min-width: 246px;\n}\n\n.table-column-248[_ngcontent-%COMP%] {\n  min-width: 248px;\n}\n\n.table-column-250[_ngcontent-%COMP%] {\n  min-width: 250px;\n}\n\n.table-column-252[_ngcontent-%COMP%] {\n  min-width: 252px;\n}\n\n.table-column-254[_ngcontent-%COMP%] {\n  min-width: 254px;\n}\n\n.table-column-256[_ngcontent-%COMP%] {\n  min-width: 256px;\n}\n\n.table-column-258[_ngcontent-%COMP%] {\n  min-width: 258px;\n}\n\n.table-column-260[_ngcontent-%COMP%] {\n  min-width: 260px;\n}\n\n.table-column-262[_ngcontent-%COMP%] {\n  min-width: 262px;\n}\n\n.table-column-264[_ngcontent-%COMP%] {\n  min-width: 264px;\n}\n\n.table-column-266[_ngcontent-%COMP%] {\n  min-width: 266px;\n}\n\n.table-column-268[_ngcontent-%COMP%] {\n  min-width: 268px;\n}\n\n.table-column-270[_ngcontent-%COMP%] {\n  min-width: 270px;\n}\n\n.table-column-272[_ngcontent-%COMP%] {\n  min-width: 272px;\n}\n\n.table-column-274[_ngcontent-%COMP%] {\n  min-width: 274px;\n}\n\n.table-column-276[_ngcontent-%COMP%] {\n  min-width: 276px;\n}\n\n.table-column-278[_ngcontent-%COMP%] {\n  min-width: 278px;\n}\n\n.table-column-280[_ngcontent-%COMP%] {\n  min-width: 280px;\n}\n\n.table-column-282[_ngcontent-%COMP%] {\n  min-width: 282px;\n}\n\n.table-column-284[_ngcontent-%COMP%] {\n  min-width: 284px;\n}\n\n.table-column-286[_ngcontent-%COMP%] {\n  min-width: 286px;\n}\n\n.table-column-288[_ngcontent-%COMP%] {\n  min-width: 288px;\n}\n\n.table-column-290[_ngcontent-%COMP%] {\n  min-width: 290px;\n}\n\n.table-column-292[_ngcontent-%COMP%] {\n  min-width: 292px;\n}\n\n.table-column-294[_ngcontent-%COMP%] {\n  min-width: 294px;\n}\n\n.table-column-296[_ngcontent-%COMP%] {\n  min-width: 296px;\n}\n\n.table-column-298[_ngcontent-%COMP%] {\n  min-width: 298px;\n}\n\n.table-column-300[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n\n.table-column-302[_ngcontent-%COMP%] {\n  min-width: 302px;\n}\n\n.table-column-304[_ngcontent-%COMP%] {\n  min-width: 304px;\n}\n\n.table-column-306[_ngcontent-%COMP%] {\n  min-width: 306px;\n}\n\n.table-column-308[_ngcontent-%COMP%] {\n  min-width: 308px;\n}\n\n.table-column-310[_ngcontent-%COMP%] {\n  min-width: 310px;\n}\n\n.table-column-312[_ngcontent-%COMP%] {\n  min-width: 312px;\n}\n\n.table-column-314[_ngcontent-%COMP%] {\n  min-width: 314px;\n}\n\n.table-column-316[_ngcontent-%COMP%] {\n  min-width: 316px;\n}\n\n.table-column-318[_ngcontent-%COMP%] {\n  min-width: 318px;\n}\n\n.table-column-320[_ngcontent-%COMP%] {\n  min-width: 320px;\n}\n\n.table-column-322[_ngcontent-%COMP%] {\n  min-width: 322px;\n}\n\n.table-column-324[_ngcontent-%COMP%] {\n  min-width: 324px;\n}\n\n.table-column-326[_ngcontent-%COMP%] {\n  min-width: 326px;\n}\n\n.table-column-328[_ngcontent-%COMP%] {\n  min-width: 328px;\n}\n\n.table-column-330[_ngcontent-%COMP%] {\n  min-width: 330px;\n}\n\n.table-column-332[_ngcontent-%COMP%] {\n  min-width: 332px;\n}\n\n.table-column-334[_ngcontent-%COMP%] {\n  min-width: 334px;\n}\n\n.table-column-336[_ngcontent-%COMP%] {\n  min-width: 336px;\n}\n\n.table-column-338[_ngcontent-%COMP%] {\n  min-width: 338px;\n}\n\n.table-column-340[_ngcontent-%COMP%] {\n  min-width: 340px;\n}\n\n.table-column-342[_ngcontent-%COMP%] {\n  min-width: 342px;\n}\n\n.table-column-344[_ngcontent-%COMP%] {\n  min-width: 344px;\n}\n\n.table-column-346[_ngcontent-%COMP%] {\n  min-width: 346px;\n}\n\n.table-column-348[_ngcontent-%COMP%] {\n  min-width: 348px;\n}\n\n.table-column-350[_ngcontent-%COMP%] {\n  min-width: 350px;\n}\n\n.table-column-352[_ngcontent-%COMP%] {\n  min-width: 352px;\n}\n\n.table-column-354[_ngcontent-%COMP%] {\n  min-width: 354px;\n}\n\n.table-column-356[_ngcontent-%COMP%] {\n  min-width: 356px;\n}\n\n.table-column-358[_ngcontent-%COMP%] {\n  min-width: 358px;\n}\n\n.table-column-360[_ngcontent-%COMP%] {\n  min-width: 360px;\n}\n\n.table-column-362[_ngcontent-%COMP%] {\n  min-width: 362px;\n}\n\n.table-column-364[_ngcontent-%COMP%] {\n  min-width: 364px;\n}\n\n.table-column-366[_ngcontent-%COMP%] {\n  min-width: 366px;\n}\n\n.table-column-368[_ngcontent-%COMP%] {\n  min-width: 368px;\n}\n\n.table-column-370[_ngcontent-%COMP%] {\n  min-width: 370px;\n}\n\n.table-column-372[_ngcontent-%COMP%] {\n  min-width: 372px;\n}\n\n.table-column-374[_ngcontent-%COMP%] {\n  min-width: 374px;\n}\n\n.table-column-376[_ngcontent-%COMP%] {\n  min-width: 376px;\n}\n\n.table-column-378[_ngcontent-%COMP%] {\n  min-width: 378px;\n}\n\n.table-column-380[_ngcontent-%COMP%] {\n  min-width: 380px;\n}\n\n.table-column-382[_ngcontent-%COMP%] {\n  min-width: 382px;\n}\n\n.table-column-384[_ngcontent-%COMP%] {\n  min-width: 384px;\n}\n\n.table-column-386[_ngcontent-%COMP%] {\n  min-width: 386px;\n}\n\n.table-column-388[_ngcontent-%COMP%] {\n  min-width: 388px;\n}\n\n.table-column-390[_ngcontent-%COMP%] {\n  min-width: 390px;\n}\n\n.table-column-392[_ngcontent-%COMP%] {\n  min-width: 392px;\n}\n\n.table-column-394[_ngcontent-%COMP%] {\n  min-width: 394px;\n}\n\n.table-column-396[_ngcontent-%COMP%] {\n  min-width: 396px;\n}\n\n.table-column-398[_ngcontent-%COMP%] {\n  min-width: 398px;\n}\n\n.table-column-400[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n.table-column-402[_ngcontent-%COMP%] {\n  min-width: 402px;\n}\n\n.table-column-404[_ngcontent-%COMP%] {\n  min-width: 404px;\n}\n\n.table-column-406[_ngcontent-%COMP%] {\n  min-width: 406px;\n}\n\n.table-column-408[_ngcontent-%COMP%] {\n  min-width: 408px;\n}\n\n.table-column-410[_ngcontent-%COMP%] {\n  min-width: 410px;\n}\n\n.table-column-412[_ngcontent-%COMP%] {\n  min-width: 412px;\n}\n\n.table-column-414[_ngcontent-%COMP%] {\n  min-width: 414px;\n}\n\n.table-column-416[_ngcontent-%COMP%] {\n  min-width: 416px;\n}\n\n.table-column-418[_ngcontent-%COMP%] {\n  min-width: 418px;\n}\n\n.table-column-420[_ngcontent-%COMP%] {\n  min-width: 420px;\n}\n\n.table-column-422[_ngcontent-%COMP%] {\n  min-width: 422px;\n}\n\n.table-column-424[_ngcontent-%COMP%] {\n  min-width: 424px;\n}\n\n.table-column-426[_ngcontent-%COMP%] {\n  min-width: 426px;\n}\n\n.table-column-428[_ngcontent-%COMP%] {\n  min-width: 428px;\n}\n\n.table-column-430[_ngcontent-%COMP%] {\n  min-width: 430px;\n}\n\n.table-column-432[_ngcontent-%COMP%] {\n  min-width: 432px;\n}\n\n.table-column-434[_ngcontent-%COMP%] {\n  min-width: 434px;\n}\n\n.table-column-436[_ngcontent-%COMP%] {\n  min-width: 436px;\n}\n\n.table-column-438[_ngcontent-%COMP%] {\n  min-width: 438px;\n}\n\n.table-column-440[_ngcontent-%COMP%] {\n  min-width: 440px;\n}\n\n.table-column-442[_ngcontent-%COMP%] {\n  min-width: 442px;\n}\n\n.table-column-444[_ngcontent-%COMP%] {\n  min-width: 444px;\n}\n\n.table-column-446[_ngcontent-%COMP%] {\n  min-width: 446px;\n}\n\n.table-column-448[_ngcontent-%COMP%] {\n  min-width: 448px;\n}\n\n.table-column-450[_ngcontent-%COMP%] {\n  min-width: 450px;\n}\n\n.table-column-452[_ngcontent-%COMP%] {\n  min-width: 452px;\n}\n\n.table-column-454[_ngcontent-%COMP%] {\n  min-width: 454px;\n}\n\n.table-column-456[_ngcontent-%COMP%] {\n  min-width: 456px;\n}\n\n.table-column-458[_ngcontent-%COMP%] {\n  min-width: 458px;\n}\n\n.table-column-460[_ngcontent-%COMP%] {\n  min-width: 460px;\n}\n\n.table-column-462[_ngcontent-%COMP%] {\n  min-width: 462px;\n}\n\n.table-column-464[_ngcontent-%COMP%] {\n  min-width: 464px;\n}\n\n.table-column-466[_ngcontent-%COMP%] {\n  min-width: 466px;\n}\n\n.table-column-468[_ngcontent-%COMP%] {\n  min-width: 468px;\n}\n\n.table-column-470[_ngcontent-%COMP%] {\n  min-width: 470px;\n}\n\n.table-column-472[_ngcontent-%COMP%] {\n  min-width: 472px;\n}\n\n.table-column-474[_ngcontent-%COMP%] {\n  min-width: 474px;\n}\n\n.table-column-476[_ngcontent-%COMP%] {\n  min-width: 476px;\n}\n\n.table-column-478[_ngcontent-%COMP%] {\n  min-width: 478px;\n}\n\n.table-column-480[_ngcontent-%COMP%] {\n  min-width: 480px;\n}\n\n.table-column-482[_ngcontent-%COMP%] {\n  min-width: 482px;\n}\n\n.table-column-484[_ngcontent-%COMP%] {\n  min-width: 484px;\n}\n\n.table-column-486[_ngcontent-%COMP%] {\n  min-width: 486px;\n}\n\n.table-column-488[_ngcontent-%COMP%] {\n  min-width: 488px;\n}\n\n.table-column-490[_ngcontent-%COMP%] {\n  min-width: 490px;\n}\n\n.table-column-492[_ngcontent-%COMP%] {\n  min-width: 492px;\n}\n\n.table-column-494[_ngcontent-%COMP%] {\n  min-width: 494px;\n}\n\n.table-column-496[_ngcontent-%COMP%] {\n  min-width: 496px;\n}\n\n.table-column-498[_ngcontent-%COMP%] {\n  min-width: 498px;\n}\n\n.table-column-500[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n\n.table-column-502[_ngcontent-%COMP%] {\n  min-width: 502px;\n}\n\n.table-column-504[_ngcontent-%COMP%] {\n  min-width: 504px;\n}\n\n.table-column-506[_ngcontent-%COMP%] {\n  min-width: 506px;\n}\n\n.table-column-508[_ngcontent-%COMP%] {\n  min-width: 508px;\n}\n\n.table-column-510[_ngcontent-%COMP%] {\n  min-width: 510px;\n}\n\n.table-column-512[_ngcontent-%COMP%] {\n  min-width: 512px;\n}\n\n.table-column-514[_ngcontent-%COMP%] {\n  min-width: 514px;\n}\n\n.table-column-516[_ngcontent-%COMP%] {\n  min-width: 516px;\n}\n\n.table-column-518[_ngcontent-%COMP%] {\n  min-width: 518px;\n}\n\n.table-column-520[_ngcontent-%COMP%] {\n  min-width: 520px;\n}\n\n.table-column-522[_ngcontent-%COMP%] {\n  min-width: 522px;\n}\n\n.table-column-524[_ngcontent-%COMP%] {\n  min-width: 524px;\n}\n\n.table-column-526[_ngcontent-%COMP%] {\n  min-width: 526px;\n}\n\n.table-column-528[_ngcontent-%COMP%] {\n  min-width: 528px;\n}\n\n.table-column-530[_ngcontent-%COMP%] {\n  min-width: 530px;\n}\n\n.table-column-532[_ngcontent-%COMP%] {\n  min-width: 532px;\n}\n\n.table-column-534[_ngcontent-%COMP%] {\n  min-width: 534px;\n}\n\n.table-column-536[_ngcontent-%COMP%] {\n  min-width: 536px;\n}\n\n.table-column-538[_ngcontent-%COMP%] {\n  min-width: 538px;\n}\n\n.table-column-540[_ngcontent-%COMP%] {\n  min-width: 540px;\n}\n\n.table-column-542[_ngcontent-%COMP%] {\n  min-width: 542px;\n}\n\n.table-column-544[_ngcontent-%COMP%] {\n  min-width: 544px;\n}\n\n.table-column-546[_ngcontent-%COMP%] {\n  min-width: 546px;\n}\n\n.table-column-548[_ngcontent-%COMP%] {\n  min-width: 548px;\n}\n\n.table-column-550[_ngcontent-%COMP%] {\n  min-width: 550px;\n}\n\n.table-column-552[_ngcontent-%COMP%] {\n  min-width: 552px;\n}\n\n.table-column-554[_ngcontent-%COMP%] {\n  min-width: 554px;\n}\n\n.table-column-556[_ngcontent-%COMP%] {\n  min-width: 556px;\n}\n\n.table-column-558[_ngcontent-%COMP%] {\n  min-width: 558px;\n}\n\n.table-column-560[_ngcontent-%COMP%] {\n  min-width: 560px;\n}\n\n.table-column-562[_ngcontent-%COMP%] {\n  min-width: 562px;\n}\n\n.table-column-564[_ngcontent-%COMP%] {\n  min-width: 564px;\n}\n\n.table-column-566[_ngcontent-%COMP%] {\n  min-width: 566px;\n}\n\n.table-column-568[_ngcontent-%COMP%] {\n  min-width: 568px;\n}\n\n.table-column-570[_ngcontent-%COMP%] {\n  min-width: 570px;\n}\n\n.table-column-572[_ngcontent-%COMP%] {\n  min-width: 572px;\n}\n\n.table-column-574[_ngcontent-%COMP%] {\n  min-width: 574px;\n}\n\n.table-column-576[_ngcontent-%COMP%] {\n  min-width: 576px;\n}\n\n.table-column-578[_ngcontent-%COMP%] {\n  min-width: 578px;\n}\n\n.table-column-580[_ngcontent-%COMP%] {\n  min-width: 580px;\n}\n\n.table-column-582[_ngcontent-%COMP%] {\n  min-width: 582px;\n}\n\n.table-column-584[_ngcontent-%COMP%] {\n  min-width: 584px;\n}\n\n.table-column-586[_ngcontent-%COMP%] {\n  min-width: 586px;\n}\n\n.table-column-588[_ngcontent-%COMP%] {\n  min-width: 588px;\n}\n\n.table-column-590[_ngcontent-%COMP%] {\n  min-width: 590px;\n}\n\n.table-column-592[_ngcontent-%COMP%] {\n  min-width: 592px;\n}\n\n.table-column-594[_ngcontent-%COMP%] {\n  min-width: 594px;\n}\n\n.table-column-596[_ngcontent-%COMP%] {\n  min-width: 596px;\n}\n\n.table-column-598[_ngcontent-%COMP%] {\n  min-width: 598px;\n}\n\n.table-column-600[_ngcontent-%COMP%] {\n  min-width: 600px;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0 !important;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.inner-table[_ngcontent-%COMP%] {\n  margin: 1em;\n  padding: 1em;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBQiUyMFBPU1xcRnJvbnRlbmRcXHNyY1xcYXBwXFxjdXN0b21lclxcY3VzdG9tZXItbGlzdFxcY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURJRTtFQUVFLGNBQUE7QUNGSjs7QURBRTtFQUVFLGNBQUE7QUNFSjs7QURKRTtFQUVFLGNBQUE7QUNNSjs7QURSRTtFQUVFLGNBQUE7QUNVSjs7QURaRTtFQUVFLGNBQUE7QUNjSjs7QURoQkU7RUFFRSxlQUFBO0FDa0JKOztBRHBCRTtFQUVFLGVBQUE7QUNzQko7O0FEeEJFO0VBRUUsZUFBQTtBQzBCSjs7QUQ1QkU7RUFFRSxlQUFBO0FDOEJKOztBRGhDRTtFQUVFLGVBQUE7QUNrQ0o7O0FEcENFO0VBRUUsZUFBQTtBQ3NDSjs7QUR4Q0U7RUFFRSxlQUFBO0FDMENKOztBRDVDRTtFQUVFLGVBQUE7QUM4Q0o7O0FEaERFO0VBRUUsZUFBQTtBQ2tESjs7QURwREU7RUFFRSxlQUFBO0FDc0RKOztBRHhERTtFQUVFLGVBQUE7QUMwREo7O0FENURFO0VBRUUsZUFBQTtBQzhESjs7QURoRUU7RUFFRSxlQUFBO0FDa0VKOztBRHBFRTtFQUVFLGVBQUE7QUNzRUo7O0FEeEVFO0VBRUUsZUFBQTtBQzBFSjs7QUQ1RUU7RUFFRSxlQUFBO0FDOEVKOztBRGhGRTtFQUVFLGVBQUE7QUNrRko7O0FEcEZFO0VBRUUsZUFBQTtBQ3NGSjs7QUR4RkU7RUFFRSxlQUFBO0FDMEZKOztBRDVGRTtFQUVFLGVBQUE7QUM4Rko7O0FEaEdFO0VBRUUsZUFBQTtBQ2tHSjs7QURwR0U7RUFFRSxlQUFBO0FDc0dKOztBRHhHRTtFQUVFLGVBQUE7QUMwR0o7O0FENUdFO0VBRUUsZUFBQTtBQzhHSjs7QURoSEU7RUFFRSxlQUFBO0FDa0hKOztBRHBIRTtFQUVFLGVBQUE7QUNzSEo7O0FEeEhFO0VBRUUsZUFBQTtBQzBISjs7QUQ1SEU7RUFFRSxlQUFBO0FDOEhKOztBRGhJRTtFQUVFLGVBQUE7QUNrSUo7O0FEcElFO0VBRUUsZUFBQTtBQ3NJSjs7QUR4SUU7RUFFRSxlQUFBO0FDMElKOztBRDVJRTtFQUVFLGVBQUE7QUM4SUo7O0FEaEpFO0VBRUUsZUFBQTtBQ2tKSjs7QURwSkU7RUFFRSxlQUFBO0FDc0pKOztBRHhKRTtFQUVFLGVBQUE7QUMwSko7O0FENUpFO0VBRUUsZUFBQTtBQzhKSjs7QURoS0U7RUFFRSxlQUFBO0FDa0tKOztBRHBLRTtFQUVFLGVBQUE7QUNzS0o7O0FEeEtFO0VBRUUsZUFBQTtBQzBLSjs7QUQ1S0U7RUFFRSxlQUFBO0FDOEtKOztBRGhMRTtFQUVFLGVBQUE7QUNrTEo7O0FEcExFO0VBRUUsZUFBQTtBQ3NMSjs7QUR4TEU7RUFFRSxlQUFBO0FDMExKOztBRDVMRTtFQUVFLGVBQUE7QUM4TEo7O0FEaE1FO0VBRUUsZUFBQTtBQ2tNSjs7QURwTUU7RUFFRSxnQkFBQTtBQ3NNSjs7QUR4TUU7RUFFRSxnQkFBQTtBQzBNSjs7QUQ1TUU7RUFFRSxnQkFBQTtBQzhNSjs7QURoTkU7RUFFRSxnQkFBQTtBQ2tOSjs7QURwTkU7RUFFRSxnQkFBQTtBQ3NOSjs7QUR4TkU7RUFFRSxnQkFBQTtBQzBOSjs7QUQ1TkU7RUFFRSxnQkFBQTtBQzhOSjs7QURoT0U7RUFFRSxnQkFBQTtBQ2tPSjs7QURwT0U7RUFFRSxnQkFBQTtBQ3NPSjs7QUR4T0U7RUFFRSxnQkFBQTtBQzBPSjs7QUQ1T0U7RUFFRSxnQkFBQTtBQzhPSjs7QURoUEU7RUFFRSxnQkFBQTtBQ2tQSjs7QURwUEU7RUFFRSxnQkFBQTtBQ3NQSjs7QUR4UEU7RUFFRSxnQkFBQTtBQzBQSjs7QUQ1UEU7RUFFRSxnQkFBQTtBQzhQSjs7QURoUUU7RUFFRSxnQkFBQTtBQ2tRSjs7QURwUUU7RUFFRSxnQkFBQTtBQ3NRSjs7QUR4UUU7RUFFRSxnQkFBQTtBQzBRSjs7QUQ1UUU7RUFFRSxnQkFBQTtBQzhRSjs7QURoUkU7RUFFRSxnQkFBQTtBQ2tSSjs7QURwUkU7RUFFRSxnQkFBQTtBQ3NSSjs7QUR4UkU7RUFFRSxnQkFBQTtBQzBSSjs7QUQ1UkU7RUFFRSxnQkFBQTtBQzhSSjs7QURoU0U7RUFFRSxnQkFBQTtBQ2tTSjs7QURwU0U7RUFFRSxnQkFBQTtBQ3NTSjs7QUR4U0U7RUFFRSxnQkFBQTtBQzBTSjs7QUQ1U0U7RUFFRSxnQkFBQTtBQzhTSjs7QURoVEU7RUFFRSxnQkFBQTtBQ2tUSjs7QURwVEU7RUFFRSxnQkFBQTtBQ3NUSjs7QUR4VEU7RUFFRSxnQkFBQTtBQzBUSjs7QUQ1VEU7RUFFRSxnQkFBQTtBQzhUSjs7QURoVUU7RUFFRSxnQkFBQTtBQ2tVSjs7QURwVUU7RUFFRSxnQkFBQTtBQ3NVSjs7QUR4VUU7RUFFRSxnQkFBQTtBQzBVSjs7QUQ1VUU7RUFFRSxnQkFBQTtBQzhVSjs7QURoVkU7RUFFRSxnQkFBQTtBQ2tWSjs7QURwVkU7RUFFRSxnQkFBQTtBQ3NWSjs7QUR4VkU7RUFFRSxnQkFBQTtBQzBWSjs7QUQ1VkU7RUFFRSxnQkFBQTtBQzhWSjs7QURoV0U7RUFFRSxnQkFBQTtBQ2tXSjs7QURwV0U7RUFFRSxnQkFBQTtBQ3NXSjs7QUR4V0U7RUFFRSxnQkFBQTtBQzBXSjs7QUQ1V0U7RUFFRSxnQkFBQTtBQzhXSjs7QURoWEU7RUFFRSxnQkFBQTtBQ2tYSjs7QURwWEU7RUFFRSxnQkFBQTtBQ3NYSjs7QUR4WEU7RUFFRSxnQkFBQTtBQzBYSjs7QUQ1WEU7RUFFRSxnQkFBQTtBQzhYSjs7QURoWUU7RUFFRSxnQkFBQTtBQ2tZSjs7QURwWUU7RUFFRSxnQkFBQTtBQ3NZSjs7QUR4WUU7RUFFRSxnQkFBQTtBQzBZSjs7QUQ1WUU7RUFFRSxnQkFBQTtBQzhZSjs7QURoWkU7RUFFRSxnQkFBQTtBQ2taSjs7QURwWkU7RUFFRSxnQkFBQTtBQ3NaSjs7QUR4WkU7RUFFRSxnQkFBQTtBQzBaSjs7QUQ1WkU7RUFFRSxnQkFBQTtBQzhaSjs7QURoYUU7RUFFRSxnQkFBQTtBQ2thSjs7QURwYUU7RUFFRSxnQkFBQTtBQ3NhSjs7QUR4YUU7RUFFRSxnQkFBQTtBQzBhSjs7QUQ1YUU7RUFFRSxnQkFBQTtBQzhhSjs7QURoYkU7RUFFRSxnQkFBQTtBQ2tiSjs7QURwYkU7RUFFRSxnQkFBQTtBQ3NiSjs7QUR4YkU7RUFFRSxnQkFBQTtBQzBiSjs7QUQ1YkU7RUFFRSxnQkFBQTtBQzhiSjs7QURoY0U7RUFFRSxnQkFBQTtBQ2tjSjs7QURwY0U7RUFFRSxnQkFBQTtBQ3NjSjs7QUR4Y0U7RUFFRSxnQkFBQTtBQzBjSjs7QUQ1Y0U7RUFFRSxnQkFBQTtBQzhjSjs7QURoZEU7RUFFRSxnQkFBQTtBQ2tkSjs7QURwZEU7RUFFRSxnQkFBQTtBQ3NkSjs7QUR4ZEU7RUFFRSxnQkFBQTtBQzBkSjs7QUQ1ZEU7RUFFRSxnQkFBQTtBQzhkSjs7QURoZUU7RUFFRSxnQkFBQTtBQ2tlSjs7QURwZUU7RUFFRSxnQkFBQTtBQ3NlSjs7QUR4ZUU7RUFFRSxnQkFBQTtBQzBlSjs7QUQ1ZUU7RUFFRSxnQkFBQTtBQzhlSjs7QURoZkU7RUFFRSxnQkFBQTtBQ2tmSjs7QURwZkU7RUFFRSxnQkFBQTtBQ3NmSjs7QUR4ZkU7RUFFRSxnQkFBQTtBQzBmSjs7QUQ1ZkU7RUFFRSxnQkFBQTtBQzhmSjs7QURoZ0JFO0VBRUUsZ0JBQUE7QUNrZ0JKOztBRHBnQkU7RUFFRSxnQkFBQTtBQ3NnQko7O0FEeGdCRTtFQUVFLGdCQUFBO0FDMGdCSjs7QUQ1Z0JFO0VBRUUsZ0JBQUE7QUM4Z0JKOztBRGhoQkU7RUFFRSxnQkFBQTtBQ2toQko7O0FEcGhCRTtFQUVFLGdCQUFBO0FDc2hCSjs7QUR4aEJFO0VBRUUsZ0JBQUE7QUMwaEJKOztBRDVoQkU7RUFFRSxnQkFBQTtBQzhoQko7O0FEaGlCRTtFQUVFLGdCQUFBO0FDa2lCSjs7QURwaUJFO0VBRUUsZ0JBQUE7QUNzaUJKOztBRHhpQkU7RUFFRSxnQkFBQTtBQzBpQko7O0FENWlCRTtFQUVFLGdCQUFBO0FDOGlCSjs7QURoakJFO0VBRUUsZ0JBQUE7QUNrakJKOztBRHBqQkU7RUFFRSxnQkFBQTtBQ3NqQko7O0FEeGpCRTtFQUVFLGdCQUFBO0FDMGpCSjs7QUQ1akJFO0VBRUUsZ0JBQUE7QUM4akJKOztBRGhrQkU7RUFFRSxnQkFBQTtBQ2trQko7O0FEcGtCRTtFQUVFLGdCQUFBO0FDc2tCSjs7QUR4a0JFO0VBRUUsZ0JBQUE7QUMwa0JKOztBRDVrQkU7RUFFRSxnQkFBQTtBQzhrQko7O0FEaGxCRTtFQUVFLGdCQUFBO0FDa2xCSjs7QURwbEJFO0VBRUUsZ0JBQUE7QUNzbEJKOztBRHhsQkU7RUFFRSxnQkFBQTtBQzBsQko7O0FENWxCRTtFQUVFLGdCQUFBO0FDOGxCSjs7QURobUJFO0VBRUUsZ0JBQUE7QUNrbUJKOztBRHBtQkU7RUFFRSxnQkFBQTtBQ3NtQko7O0FEeG1CRTtFQUVFLGdCQUFBO0FDMG1CSjs7QUQ1bUJFO0VBRUUsZ0JBQUE7QUM4bUJKOztBRGhuQkU7RUFFRSxnQkFBQTtBQ2tuQko7O0FEcG5CRTtFQUVFLGdCQUFBO0FDc25CSjs7QUR4bkJFO0VBRUUsZ0JBQUE7QUMwbkJKOztBRDVuQkU7RUFFRSxnQkFBQTtBQzhuQko7O0FEaG9CRTtFQUVFLGdCQUFBO0FDa29CSjs7QURwb0JFO0VBRUUsZ0JBQUE7QUNzb0JKOztBRHhvQkU7RUFFRSxnQkFBQTtBQzBvQko7O0FENW9CRTtFQUVFLGdCQUFBO0FDOG9CSjs7QURocEJFO0VBRUUsZ0JBQUE7QUNrcEJKOztBRHBwQkU7RUFFRSxnQkFBQTtBQ3NwQko7O0FEeHBCRTtFQUVFLGdCQUFBO0FDMHBCSjs7QUQ1cEJFO0VBRUUsZ0JBQUE7QUM4cEJKOztBRGhxQkU7RUFFRSxnQkFBQTtBQ2txQko7O0FEcHFCRTtFQUVFLGdCQUFBO0FDc3FCSjs7QUR4cUJFO0VBRUUsZ0JBQUE7QUMwcUJKOztBRDVxQkU7RUFFRSxnQkFBQTtBQzhxQko7O0FEaHJCRTtFQUVFLGdCQUFBO0FDa3JCSjs7QURwckJFO0VBRUUsZ0JBQUE7QUNzckJKOztBRHhyQkU7RUFFRSxnQkFBQTtBQzByQko7O0FENXJCRTtFQUVFLGdCQUFBO0FDOHJCSjs7QURoc0JFO0VBRUUsZ0JBQUE7QUNrc0JKOztBRHBzQkU7RUFFRSxnQkFBQTtBQ3NzQko7O0FEeHNCRTtFQUVFLGdCQUFBO0FDMHNCSjs7QUQ1c0JFO0VBRUUsZ0JBQUE7QUM4c0JKOztBRGh0QkU7RUFFRSxnQkFBQTtBQ2t0Qko7O0FEcHRCRTtFQUVFLGdCQUFBO0FDc3RCSjs7QUR4dEJFO0VBRUUsZ0JBQUE7QUMwdEJKOztBRDV0QkU7RUFFRSxnQkFBQTtBQzh0Qko7O0FEaHVCRTtFQUVFLGdCQUFBO0FDa3VCSjs7QURwdUJFO0VBRUUsZ0JBQUE7QUNzdUJKOztBRHh1QkU7RUFFRSxnQkFBQTtBQzB1Qko7O0FENXVCRTtFQUVFLGdCQUFBO0FDOHVCSjs7QURodkJFO0VBRUUsZ0JBQUE7QUNrdkJKOztBRHB2QkU7RUFFRSxnQkFBQTtBQ3N2Qko7O0FEeHZCRTtFQUVFLGdCQUFBO0FDMHZCSjs7QUQ1dkJFO0VBRUUsZ0JBQUE7QUM4dkJKOztBRGh3QkU7RUFFRSxnQkFBQTtBQ2t3Qko7O0FEcHdCRTtFQUVFLGdCQUFBO0FDc3dCSjs7QUR4d0JFO0VBRUUsZ0JBQUE7QUMwd0JKOztBRDV3QkU7RUFFRSxnQkFBQTtBQzh3Qko7O0FEaHhCRTtFQUVFLGdCQUFBO0FDa3hCSjs7QURweEJFO0VBRUUsZ0JBQUE7QUNzeEJKOztBRHh4QkU7RUFFRSxnQkFBQTtBQzB4Qko7O0FENXhCRTtFQUVFLGdCQUFBO0FDOHhCSjs7QURoeUJFO0VBRUUsZ0JBQUE7QUNreUJKOztBRHB5QkU7RUFFRSxnQkFBQTtBQ3N5Qko7O0FEeHlCRTtFQUVFLGdCQUFBO0FDMHlCSjs7QUQ1eUJFO0VBRUUsZ0JBQUE7QUM4eUJKOztBRGh6QkU7RUFFRSxnQkFBQTtBQ2t6Qko7O0FEcHpCRTtFQUVFLGdCQUFBO0FDc3pCSjs7QUR4ekJFO0VBRUUsZ0JBQUE7QUMwekJKOztBRDV6QkU7RUFFRSxnQkFBQTtBQzh6Qko7O0FEaDBCRTtFQUVFLGdCQUFBO0FDazBCSjs7QURwMEJFO0VBRUUsZ0JBQUE7QUNzMEJKOztBRHgwQkU7RUFFRSxnQkFBQTtBQzAwQko7O0FENTBCRTtFQUVFLGdCQUFBO0FDODBCSjs7QURoMUJFO0VBRUUsZ0JBQUE7QUNrMUJKOztBRHAxQkU7RUFFRSxnQkFBQTtBQ3MxQko7O0FEeDFCRTtFQUVFLGdCQUFBO0FDMDFCSjs7QUQ1MUJFO0VBRUUsZ0JBQUE7QUM4MUJKOztBRGgyQkU7RUFFRSxnQkFBQTtBQ2syQko7O0FEcDJCRTtFQUVFLGdCQUFBO0FDczJCSjs7QUR4MkJFO0VBRUUsZ0JBQUE7QUMwMkJKOztBRDUyQkU7RUFFRSxnQkFBQTtBQzgyQko7O0FEaDNCRTtFQUVFLGdCQUFBO0FDazNCSjs7QURwM0JFO0VBRUUsZ0JBQUE7QUNzM0JKOztBRHgzQkU7RUFFRSxnQkFBQTtBQzAzQko7O0FENTNCRTtFQUVFLGdCQUFBO0FDODNCSjs7QURoNEJFO0VBRUUsZ0JBQUE7QUNrNEJKOztBRHA0QkU7RUFFRSxnQkFBQTtBQ3M0Qko7O0FEeDRCRTtFQUVFLGdCQUFBO0FDMDRCSjs7QUQ1NEJFO0VBRUUsZ0JBQUE7QUM4NEJKOztBRGg1QkU7RUFFRSxnQkFBQTtBQ2s1Qko7O0FEcDVCRTtFQUVFLGdCQUFBO0FDczVCSjs7QUR4NUJFO0VBRUUsZ0JBQUE7QUMwNUJKOztBRDU1QkU7RUFFRSxnQkFBQTtBQzg1Qko7O0FEaDZCRTtFQUVFLGdCQUFBO0FDazZCSjs7QURwNkJFO0VBRUUsZ0JBQUE7QUNzNkJKOztBRHg2QkU7RUFFRSxnQkFBQTtBQzA2Qko7O0FENTZCRTtFQUVFLGdCQUFBO0FDODZCSjs7QURoN0JFO0VBRUUsZ0JBQUE7QUNrN0JKOztBRHA3QkU7RUFFRSxnQkFBQTtBQ3M3Qko7O0FEeDdCRTtFQUVFLGdCQUFBO0FDMDdCSjs7QUQ1N0JFO0VBRUUsZ0JBQUE7QUM4N0JKOztBRGg4QkU7RUFFRSxnQkFBQTtBQ2s4Qko7O0FEcDhCRTtFQUVFLGdCQUFBO0FDczhCSjs7QUR4OEJFO0VBRUUsZ0JBQUE7QUMwOEJKOztBRDU4QkU7RUFFRSxnQkFBQTtBQzg4Qko7O0FEaDlCRTtFQUVFLGdCQUFBO0FDazlCSjs7QURwOUJFO0VBRUUsZ0JBQUE7QUNzOUJKOztBRHg5QkU7RUFFRSxnQkFBQTtBQzA5Qko7O0FENTlCRTtFQUVFLGdCQUFBO0FDODlCSjs7QURoK0JFO0VBRUUsZ0JBQUE7QUNrK0JKOztBRHArQkU7RUFFRSxnQkFBQTtBQ3MrQko7O0FEeCtCRTtFQUVFLGdCQUFBO0FDMCtCSjs7QUQ1K0JFO0VBRUUsZ0JBQUE7QUM4K0JKOztBRGgvQkU7RUFFRSxnQkFBQTtBQ2svQko7O0FEcC9CRTtFQUVFLGdCQUFBO0FDcy9CSjs7QUR4L0JFO0VBRUUsZ0JBQUE7QUMwL0JKOztBRDUvQkU7RUFFRSxnQkFBQTtBQzgvQko7O0FEaGdDRTtFQUVFLGdCQUFBO0FDa2dDSjs7QURwZ0NFO0VBRUUsZ0JBQUE7QUNzZ0NKOztBRHhnQ0U7RUFFRSxnQkFBQTtBQzBnQ0o7O0FENWdDRTtFQUVFLGdCQUFBO0FDOGdDSjs7QURoaENFO0VBRUUsZ0JBQUE7QUNraENKOztBRHBoQ0U7RUFFRSxnQkFBQTtBQ3NoQ0o7O0FEeGhDRTtFQUVFLGdCQUFBO0FDMGhDSjs7QUQ1aENFO0VBRUUsZ0JBQUE7QUM4aENKOztBRGhpQ0U7RUFFRSxnQkFBQTtBQ2tpQ0o7O0FEcGlDRTtFQUVFLGdCQUFBO0FDc2lDSjs7QUR4aUNFO0VBRUUsZ0JBQUE7QUMwaUNKOztBRDVpQ0U7RUFFRSxnQkFBQTtBQzhpQ0o7O0FEaGpDRTtFQUVFLGdCQUFBO0FDa2pDSjs7QURwakNFO0VBRUUsZ0JBQUE7QUNzakNKOztBRHhqQ0U7RUFFRSxnQkFBQTtBQzBqQ0o7O0FENWpDRTtFQUVFLGdCQUFBO0FDOGpDSjs7QURoa0NFO0VBRUUsZ0JBQUE7QUNra0NKOztBRHBrQ0U7RUFFRSxnQkFBQTtBQ3NrQ0o7O0FEeGtDRTtFQUVFLGdCQUFBO0FDMGtDSjs7QUQ1a0NFO0VBRUUsZ0JBQUE7QUM4a0NKOztBRGhsQ0U7RUFFRSxnQkFBQTtBQ2tsQ0o7O0FEcGxDRTtFQUVFLGdCQUFBO0FDc2xDSjs7QUR4bENFO0VBRUUsZ0JBQUE7QUMwbENKOztBRDVsQ0U7RUFFRSxnQkFBQTtBQzhsQ0o7O0FEaG1DRTtFQUVFLGdCQUFBO0FDa21DSjs7QURwbUNFO0VBRUUsZ0JBQUE7QUNzbUNKOztBRHhtQ0U7RUFFRSxnQkFBQTtBQzBtQ0o7O0FENW1DRTtFQUVFLGdCQUFBO0FDOG1DSjs7QURobkNFO0VBRUUsZ0JBQUE7QUNrbkNKOztBRHBuQ0U7RUFFRSxnQkFBQTtBQ3NuQ0o7O0FEeG5DRTtFQUVFLGdCQUFBO0FDMG5DSjs7QUQ1bkNFO0VBRUUsZ0JBQUE7QUM4bkNKOztBRGhvQ0U7RUFFRSxnQkFBQTtBQ2tvQ0o7O0FEcG9DRTtFQUVFLGdCQUFBO0FDc29DSjs7QUR4b0NFO0VBRUUsZ0JBQUE7QUMwb0NKOztBRDVvQ0U7RUFFRSxnQkFBQTtBQzhvQ0o7O0FEaHBDRTtFQUVFLGdCQUFBO0FDa3BDSjs7QURwcENFO0VBRUUsZ0JBQUE7QUNzcENKOztBRHhwQ0U7RUFFRSxnQkFBQTtBQzBwQ0o7O0FENXBDRTtFQUVFLGdCQUFBO0FDOHBDSjs7QURocUNFO0VBRUUsZ0JBQUE7QUNrcUNKOztBRHBxQ0U7RUFFRSxnQkFBQTtBQ3NxQ0o7O0FEeHFDRTtFQUVFLGdCQUFBO0FDMHFDSjs7QUQ1cUNFO0VBRUUsZ0JBQUE7QUM4cUNKOztBRDFxQ0E7RUFDRSxvQkFBQTtBQzZxQ0Y7O0FEMXFDQTtFQUNFLHNCQUFBO0FDNnFDRjs7QUQxcUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDNnFDRjs7QUQxcUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQzZxQ0YiLCJmaWxlIjoiY3VzdG9tZXItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRhYmxlIGNvbHVtbiB3aWR0aCBoZWxwZXIgZm9yIG1hdC10YWJsZXNcclxuLm1hdC10YWJsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxufVxyXG5AZm9yICRpbmRleCBmcm9tIDAgdGhyb3VnaCAzMDAge1xyXG4gICRzaXplOiAkaW5kZXggKiAyO1xyXG4gIC50YWJsZS1jb2x1bW4tI3skc2l6ZX0ge1xyXG4gICAgLy8gZmxleDogMCAxICN7JHNpemV9I3tcInB4XCJ9O1xyXG4gICAgbWluLXdpZHRoOiAjeyRzaXplfSN7XCJweFwifTtcclxuICB9XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaW5uZXItdGFibGUge1xyXG4gIG1hcmdpbjogMWVtO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5tYXQtdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi50YWJsZS1jb2x1bW4tMCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIge1xuICBtaW4td2lkdGg6IDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00IHtcbiAgbWluLXdpZHRoOiA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNiB7XG4gIG1pbi13aWR0aDogNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTgge1xuICBtaW4td2lkdGg6IDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMCB7XG4gIG1pbi13aWR0aDogMTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMiB7XG4gIG1pbi13aWR0aDogMTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNCB7XG4gIG1pbi13aWR0aDogMTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNiB7XG4gIG1pbi13aWR0aDogMTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOCB7XG4gIG1pbi13aWR0aDogMThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMCB7XG4gIG1pbi13aWR0aDogMjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMiB7XG4gIG1pbi13aWR0aDogMjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNCB7XG4gIG1pbi13aWR0aDogMjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNiB7XG4gIG1pbi13aWR0aDogMjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOCB7XG4gIG1pbi13aWR0aDogMjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMCB7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMiB7XG4gIG1pbi13aWR0aDogMzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNCB7XG4gIG1pbi13aWR0aDogMzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNiB7XG4gIG1pbi13aWR0aDogMzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zOCB7XG4gIG1pbi13aWR0aDogMzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MCB7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MiB7XG4gIG1pbi13aWR0aDogNDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NCB7XG4gIG1pbi13aWR0aDogNDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NiB7XG4gIG1pbi13aWR0aDogNDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OCB7XG4gIG1pbi13aWR0aDogNDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MCB7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MiB7XG4gIG1pbi13aWR0aDogNTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NCB7XG4gIG1pbi13aWR0aDogNTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NiB7XG4gIG1pbi13aWR0aDogNTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OCB7XG4gIG1pbi13aWR0aDogNThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02MCB7XG4gIG1pbi13aWR0aDogNjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02MiB7XG4gIG1pbi13aWR0aDogNjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02NCB7XG4gIG1pbi13aWR0aDogNjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02NiB7XG4gIG1pbi13aWR0aDogNjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi02OCB7XG4gIG1pbi13aWR0aDogNjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03MCB7XG4gIG1pbi13aWR0aDogNzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03MiB7XG4gIG1pbi13aWR0aDogNzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03NCB7XG4gIG1pbi13aWR0aDogNzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03NiB7XG4gIG1pbi13aWR0aDogNzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi03OCB7XG4gIG1pbi13aWR0aDogNzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04MCB7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04MiB7XG4gIG1pbi13aWR0aDogODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04NCB7XG4gIG1pbi13aWR0aDogODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04NiB7XG4gIG1pbi13aWR0aDogODZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi04OCB7XG4gIG1pbi13aWR0aDogODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05MCB7XG4gIG1pbi13aWR0aDogOTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05MiB7XG4gIG1pbi13aWR0aDogOTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05NCB7XG4gIG1pbi13aWR0aDogOTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05NiB7XG4gIG1pbi13aWR0aDogOTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi05OCB7XG4gIG1pbi13aWR0aDogOThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMDAge1xuICBtaW4td2lkdGg6IDEwMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEwMiB7XG4gIG1pbi13aWR0aDogMTAycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTA0IHtcbiAgbWluLXdpZHRoOiAxMDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMDYge1xuICBtaW4td2lkdGg6IDEwNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTEwOCB7XG4gIG1pbi13aWR0aDogMTA4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTEwIHtcbiAgbWluLXdpZHRoOiAxMTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMTIge1xuICBtaW4td2lkdGg6IDExMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTExNCB7XG4gIG1pbi13aWR0aDogMTE0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTE2IHtcbiAgbWluLXdpZHRoOiAxMTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMTgge1xuICBtaW4td2lkdGg6IDExOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEyMCB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTIyIHtcbiAgbWluLXdpZHRoOiAxMjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMjQge1xuICBtaW4td2lkdGg6IDEyNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEyNiB7XG4gIG1pbi13aWR0aDogMTI2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTI4IHtcbiAgbWluLXdpZHRoOiAxMjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMzAge1xuICBtaW4td2lkdGg6IDEzMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTEzMiB7XG4gIG1pbi13aWR0aDogMTMycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTM0IHtcbiAgbWluLXdpZHRoOiAxMzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xMzYge1xuICBtaW4td2lkdGg6IDEzNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTEzOCB7XG4gIG1pbi13aWR0aDogMTM4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTQwIHtcbiAgbWluLXdpZHRoOiAxNDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNDIge1xuICBtaW4td2lkdGg6IDE0MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE0NCB7XG4gIG1pbi13aWR0aDogMTQ0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTQ2IHtcbiAgbWluLXdpZHRoOiAxNDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNDgge1xuICBtaW4td2lkdGg6IDE0OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE1MCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTUyIHtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNTQge1xuICBtaW4td2lkdGg6IDE1NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE1NiB7XG4gIG1pbi13aWR0aDogMTU2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTU4IHtcbiAgbWluLXdpZHRoOiAxNThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNjAge1xuICBtaW4td2lkdGg6IDE2MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE2MiB7XG4gIG1pbi13aWR0aDogMTYycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTY0IHtcbiAgbWluLXdpZHRoOiAxNjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNjYge1xuICBtaW4td2lkdGg6IDE2NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE2OCB7XG4gIG1pbi13aWR0aDogMTY4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTcwIHtcbiAgbWluLXdpZHRoOiAxNzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNzIge1xuICBtaW4td2lkdGg6IDE3MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE3NCB7XG4gIG1pbi13aWR0aDogMTc0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTc2IHtcbiAgbWluLXdpZHRoOiAxNzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xNzgge1xuICBtaW4td2lkdGg6IDE3OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE4MCB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTgyIHtcbiAgbWluLXdpZHRoOiAxODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xODQge1xuICBtaW4td2lkdGg6IDE4NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE4NiB7XG4gIG1pbi13aWR0aDogMTg2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTg4IHtcbiAgbWluLXdpZHRoOiAxODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOTAge1xuICBtaW4td2lkdGg6IDE5MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTE5MiB7XG4gIG1pbi13aWR0aDogMTkycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMTk0IHtcbiAgbWluLXdpZHRoOiAxOTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0xOTYge1xuICBtaW4td2lkdGg6IDE5NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTE5OCB7XG4gIG1pbi13aWR0aDogMTk4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjAwIHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMDIge1xuICBtaW4td2lkdGg6IDIwMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIwNCB7XG4gIG1pbi13aWR0aDogMjA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjA2IHtcbiAgbWluLXdpZHRoOiAyMDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMDgge1xuICBtaW4td2lkdGg6IDIwOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIxMCB7XG4gIG1pbi13aWR0aDogMjEwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjEyIHtcbiAgbWluLXdpZHRoOiAyMTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMTQge1xuICBtaW4td2lkdGg6IDIxNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIxNiB7XG4gIG1pbi13aWR0aDogMjE2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjE4IHtcbiAgbWluLXdpZHRoOiAyMThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMjAge1xuICBtaW4td2lkdGg6IDIyMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTIyMiB7XG4gIG1pbi13aWR0aDogMjIycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjI0IHtcbiAgbWluLXdpZHRoOiAyMjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMjYge1xuICBtaW4td2lkdGg6IDIyNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIyOCB7XG4gIG1pbi13aWR0aDogMjI4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjMwIHtcbiAgbWluLXdpZHRoOiAyMzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMzIge1xuICBtaW4td2lkdGg6IDIzMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTIzNCB7XG4gIG1pbi13aWR0aDogMjM0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjM2IHtcbiAgbWluLXdpZHRoOiAyMzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yMzgge1xuICBtaW4td2lkdGg6IDIzOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI0MCB7XG4gIG1pbi13aWR0aDogMjQwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjQyIHtcbiAgbWluLXdpZHRoOiAyNDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNDQge1xuICBtaW4td2lkdGg6IDI0NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI0NiB7XG4gIG1pbi13aWR0aDogMjQ2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjQ4IHtcbiAgbWluLXdpZHRoOiAyNDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNTAge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI1MiB7XG4gIG1pbi13aWR0aDogMjUycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjU0IHtcbiAgbWluLXdpZHRoOiAyNTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNTYge1xuICBtaW4td2lkdGg6IDI1NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI1OCB7XG4gIG1pbi13aWR0aDogMjU4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjYwIHtcbiAgbWluLXdpZHRoOiAyNjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNjIge1xuICBtaW4td2lkdGg6IDI2MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI2NCB7XG4gIG1pbi13aWR0aDogMjY0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjY2IHtcbiAgbWluLXdpZHRoOiAyNjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNjgge1xuICBtaW4td2lkdGg6IDI2OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI3MCB7XG4gIG1pbi13aWR0aDogMjcwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjcyIHtcbiAgbWluLXdpZHRoOiAyNzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yNzQge1xuICBtaW4td2lkdGg6IDI3NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI3NiB7XG4gIG1pbi13aWR0aDogMjc2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjc4IHtcbiAgbWluLXdpZHRoOiAyNzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yODAge1xuICBtaW4td2lkdGg6IDI4MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTI4MiB7XG4gIG1pbi13aWR0aDogMjgycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjg0IHtcbiAgbWluLXdpZHRoOiAyODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yODYge1xuICBtaW4td2lkdGg6IDI4NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI4OCB7XG4gIG1pbi13aWR0aDogMjg4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjkwIHtcbiAgbWluLXdpZHRoOiAyOTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOTIge1xuICBtaW4td2lkdGg6IDI5MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTI5NCB7XG4gIG1pbi13aWR0aDogMjk0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMjk2IHtcbiAgbWluLXdpZHRoOiAyOTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0yOTgge1xuICBtaW4td2lkdGg6IDI5OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMwMCB7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzAyIHtcbiAgbWluLXdpZHRoOiAzMDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMDQge1xuICBtaW4td2lkdGg6IDMwNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMwNiB7XG4gIG1pbi13aWR0aDogMzA2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzA4IHtcbiAgbWluLXdpZHRoOiAzMDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMTAge1xuICBtaW4td2lkdGg6IDMxMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMxMiB7XG4gIG1pbi13aWR0aDogMzEycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzE0IHtcbiAgbWluLXdpZHRoOiAzMTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMTYge1xuICBtaW4td2lkdGg6IDMxNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTMxOCB7XG4gIG1pbi13aWR0aDogMzE4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzIwIHtcbiAgbWluLXdpZHRoOiAzMjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMjIge1xuICBtaW4td2lkdGg6IDMyMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTMyNCB7XG4gIG1pbi13aWR0aDogMzI0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzI2IHtcbiAgbWluLXdpZHRoOiAzMjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMjgge1xuICBtaW4td2lkdGg6IDMyOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMzMCB7XG4gIG1pbi13aWR0aDogMzMwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzMyIHtcbiAgbWluLXdpZHRoOiAzMzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zMzQge1xuICBtaW4td2lkdGg6IDMzNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTMzNiB7XG4gIG1pbi13aWR0aDogMzM2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzM4IHtcbiAgbWluLXdpZHRoOiAzMzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNDAge1xuICBtaW4td2lkdGg6IDM0MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM0MiB7XG4gIG1pbi13aWR0aDogMzQycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzQ0IHtcbiAgbWluLXdpZHRoOiAzNDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNDYge1xuICBtaW4td2lkdGg6IDM0NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM0OCB7XG4gIG1pbi13aWR0aDogMzQ4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzUwIHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNTIge1xuICBtaW4td2lkdGg6IDM1MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM1NCB7XG4gIG1pbi13aWR0aDogMzU0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzU2IHtcbiAgbWluLXdpZHRoOiAzNTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNTgge1xuICBtaW4td2lkdGg6IDM1OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM2MCB7XG4gIG1pbi13aWR0aDogMzYwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzYyIHtcbiAgbWluLXdpZHRoOiAzNjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNjQge1xuICBtaW4td2lkdGg6IDM2NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM2NiB7XG4gIG1pbi13aWR0aDogMzY2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzY4IHtcbiAgbWluLXdpZHRoOiAzNjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNzAge1xuICBtaW4td2lkdGg6IDM3MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM3MiB7XG4gIG1pbi13aWR0aDogMzcycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzc0IHtcbiAgbWluLXdpZHRoOiAzNzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zNzYge1xuICBtaW4td2lkdGg6IDM3NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM3OCB7XG4gIG1pbi13aWR0aDogMzc4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzgwIHtcbiAgbWluLXdpZHRoOiAzODBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zODIge1xuICBtaW4td2lkdGg6IDM4MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTM4NCB7XG4gIG1pbi13aWR0aDogMzg0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzg2IHtcbiAgbWluLXdpZHRoOiAzODZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zODgge1xuICBtaW4td2lkdGg6IDM4OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM5MCB7XG4gIG1pbi13aWR0aDogMzkwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzkyIHtcbiAgbWluLXdpZHRoOiAzOTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi0zOTQge1xuICBtaW4td2lkdGg6IDM5NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTM5NiB7XG4gIG1pbi13aWR0aDogMzk2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tMzk4IHtcbiAgbWluLXdpZHRoOiAzOThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MDAge1xuICBtaW4td2lkdGg6IDQwMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQwMiB7XG4gIG1pbi13aWR0aDogNDAycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDA0IHtcbiAgbWluLXdpZHRoOiA0MDRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MDYge1xuICBtaW4td2lkdGg6IDQwNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQwOCB7XG4gIG1pbi13aWR0aDogNDA4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDEwIHtcbiAgbWluLXdpZHRoOiA0MTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MTIge1xuICBtaW4td2lkdGg6IDQxMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQxNCB7XG4gIG1pbi13aWR0aDogNDE0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDE2IHtcbiAgbWluLXdpZHRoOiA0MTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MTgge1xuICBtaW4td2lkdGg6IDQxOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQyMCB7XG4gIG1pbi13aWR0aDogNDIwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDIyIHtcbiAgbWluLXdpZHRoOiA0MjJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MjQge1xuICBtaW4td2lkdGg6IDQyNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQyNiB7XG4gIG1pbi13aWR0aDogNDI2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDI4IHtcbiAgbWluLXdpZHRoOiA0MjhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MzAge1xuICBtaW4td2lkdGg6IDQzMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQzMiB7XG4gIG1pbi13aWR0aDogNDMycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDM0IHtcbiAgbWluLXdpZHRoOiA0MzRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00MzYge1xuICBtaW4td2lkdGg6IDQzNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQzOCB7XG4gIG1pbi13aWR0aDogNDM4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDQwIHtcbiAgbWluLXdpZHRoOiA0NDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NDIge1xuICBtaW4td2lkdGg6IDQ0MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ0NCB7XG4gIG1pbi13aWR0aDogNDQ0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDQ2IHtcbiAgbWluLXdpZHRoOiA0NDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NDgge1xuICBtaW4td2lkdGg6IDQ0OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ1MCB7XG4gIG1pbi13aWR0aDogNDUwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDUyIHtcbiAgbWluLXdpZHRoOiA0NTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NTQge1xuICBtaW4td2lkdGg6IDQ1NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ1NiB7XG4gIG1pbi13aWR0aDogNDU2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDU4IHtcbiAgbWluLXdpZHRoOiA0NThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NjAge1xuICBtaW4td2lkdGg6IDQ2MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ2MiB7XG4gIG1pbi13aWR0aDogNDYycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDY0IHtcbiAgbWluLXdpZHRoOiA0NjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NjYge1xuICBtaW4td2lkdGg6IDQ2NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ2OCB7XG4gIG1pbi13aWR0aDogNDY4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDcwIHtcbiAgbWluLXdpZHRoOiA0NzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00NzIge1xuICBtaW4td2lkdGg6IDQ3MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ3NCB7XG4gIG1pbi13aWR0aDogNDc0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDc2IHtcbiAgbWluLXdpZHRoOiA0NzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00Nzgge1xuICBtaW4td2lkdGg6IDQ3OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ4MCB7XG4gIG1pbi13aWR0aDogNDgwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDgyIHtcbiAgbWluLXdpZHRoOiA0ODJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00ODQge1xuICBtaW4td2lkdGg6IDQ4NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ4NiB7XG4gIG1pbi13aWR0aDogNDg2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDg4IHtcbiAgbWluLXdpZHRoOiA0ODhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OTAge1xuICBtaW4td2lkdGg6IDQ5MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ5MiB7XG4gIG1pbi13aWR0aDogNDkycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNDk0IHtcbiAgbWluLXdpZHRoOiA0OTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi00OTYge1xuICBtaW4td2lkdGg6IDQ5NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTQ5OCB7XG4gIG1pbi13aWR0aDogNDk4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTAwIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MDIge1xuICBtaW4td2lkdGg6IDUwMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUwNCB7XG4gIG1pbi13aWR0aDogNTA0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTA2IHtcbiAgbWluLXdpZHRoOiA1MDZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MDgge1xuICBtaW4td2lkdGg6IDUwOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUxMCB7XG4gIG1pbi13aWR0aDogNTEwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTEyIHtcbiAgbWluLXdpZHRoOiA1MTJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MTQge1xuICBtaW4td2lkdGg6IDUxNHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUxNiB7XG4gIG1pbi13aWR0aDogNTE2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTE4IHtcbiAgbWluLXdpZHRoOiA1MThweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MjAge1xuICBtaW4td2lkdGg6IDUyMHB4O1xufVxuXG4udGFibGUtY29sdW1uLTUyMiB7XG4gIG1pbi13aWR0aDogNTIycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTI0IHtcbiAgbWluLXdpZHRoOiA1MjRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MjYge1xuICBtaW4td2lkdGg6IDUyNnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUyOCB7XG4gIG1pbi13aWR0aDogNTI4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTMwIHtcbiAgbWluLXdpZHRoOiA1MzBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01MzIge1xuICBtaW4td2lkdGg6IDUzMnB4O1xufVxuXG4udGFibGUtY29sdW1uLTUzNCB7XG4gIG1pbi13aWR0aDogNTM0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTM2IHtcbiAgbWluLXdpZHRoOiA1MzZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01Mzgge1xuICBtaW4td2lkdGg6IDUzOHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU0MCB7XG4gIG1pbi13aWR0aDogNTQwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTQyIHtcbiAgbWluLXdpZHRoOiA1NDJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NDQge1xuICBtaW4td2lkdGg6IDU0NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU0NiB7XG4gIG1pbi13aWR0aDogNTQ2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTQ4IHtcbiAgbWluLXdpZHRoOiA1NDhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NTAge1xuICBtaW4td2lkdGg6IDU1MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU1MiB7XG4gIG1pbi13aWR0aDogNTUycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTU0IHtcbiAgbWluLXdpZHRoOiA1NTRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NTYge1xuICBtaW4td2lkdGg6IDU1NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU1OCB7XG4gIG1pbi13aWR0aDogNTU4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTYwIHtcbiAgbWluLXdpZHRoOiA1NjBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NjIge1xuICBtaW4td2lkdGg6IDU2MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU2NCB7XG4gIG1pbi13aWR0aDogNTY0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTY2IHtcbiAgbWluLXdpZHRoOiA1NjZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01Njgge1xuICBtaW4td2lkdGg6IDU2OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU3MCB7XG4gIG1pbi13aWR0aDogNTcwcHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTcyIHtcbiAgbWluLXdpZHRoOiA1NzJweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01NzQge1xuICBtaW4td2lkdGg6IDU3NHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU3NiB7XG4gIG1pbi13aWR0aDogNTc2cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTc4IHtcbiAgbWluLXdpZHRoOiA1NzhweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01ODAge1xuICBtaW4td2lkdGg6IDU4MHB4O1xufVxuXG4udGFibGUtY29sdW1uLTU4MiB7XG4gIG1pbi13aWR0aDogNTgycHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTg0IHtcbiAgbWluLXdpZHRoOiA1ODRweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01ODYge1xuICBtaW4td2lkdGg6IDU4NnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU4OCB7XG4gIG1pbi13aWR0aDogNTg4cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTkwIHtcbiAgbWluLXdpZHRoOiA1OTBweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OTIge1xuICBtaW4td2lkdGg6IDU5MnB4O1xufVxuXG4udGFibGUtY29sdW1uLTU5NCB7XG4gIG1pbi13aWR0aDogNTk0cHg7XG59XG5cbi50YWJsZS1jb2x1bW4tNTk2IHtcbiAgbWluLXdpZHRoOiA1OTZweDtcbn1cblxuLnRhYmxlLWNvbHVtbi01OTgge1xuICBtaW4td2lkdGg6IDU5OHB4O1xufVxuXG4udGFibGUtY29sdW1uLTYwMCB7XG4gIG1pbi13aWR0aDogNjAwcHg7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlubmVyLXRhYmxlIHtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_28__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 23846:
/*!***************************************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-so-list/customer-so-list.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerSoListComponent": () => (/* binding */ CustomerSoListComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/sales-order-resource-parameter */ 708);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var src_app_sales_order_sales_order_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales-order/sales-order-datasource */ 80931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales-order/sales-order.service */ 40838);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/pipes/purchase-order-paymentStatus.pipe */ 80443);






















function CustomerSoListComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function CustomerSoListComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "CREATED_DATE"), " ");
} }
function CustomerSoListComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, so_r18.soCreatedDate, "shortDate"), " ");
} }
function CustomerSoListComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "ORDER_NUMBER"), " ");
} }
const _c0 = function (a1) { return ["/sales-order/detail", a1]; };
function CustomerSoListComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 32)(1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](2, _c0, so_r19.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", so_r19.orderNumber, " ");
} }
function CustomerSoListComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "PAYMENT_STATUS"), "");
} }
const _c1 = function (a0, a1, a2) { return { "badge-success": a0, "badge-danger": a1, "badge-warning": a2 }; };
function CustomerSoListComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "paymentStatus");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const so_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](4, _c1, so_r20.paymentStatus == 0, so_r20.paymentStatus == 1, so_r20.paymentStatus == 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, so_r20.paymentStatus), "");
} }
function CustomerSoListComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "TOTAL_DISCOUNT"), " ");
} }
function CustomerSoListComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, so_r21.totalDiscount), " ");
} }
function CustomerSoListComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "TOTAL_TAX"), " ");
} }
function CustomerSoListComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, so_r22.totalTax), " ");
} }
function CustomerSoListComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "TOTAL_AMOUNT"), " ");
} }
function CustomerSoListComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const so_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, so_r23.totalAmount), " ");
} }
const _c2 = function () { return [5, 10, 15]; };
function CustomerSoListComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-paginator", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx_r13.salesOrderResource.totalCount)("pageSize", ctx_r13.salesOrderResource.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](3, _c2));
} }
function CustomerSoListComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 40);
} }
function CustomerSoListComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 41);
} }
function CustomerSoListComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 42);
} }
function CustomerSoListComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 5)(2, "div", 43)(3, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
class CustomerSoListComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(salesOrderService, translationService) {
        super(translationService);
        this.salesOrderService = salesOrderService;
        this.translationService = translationService;
        this.saleOrders = [];
        this.displayedColumns = ['soCreatedDate', 'orderNumber', 'totalDiscount', 'totalTax', 'totalAmount', 'paymentStatus'];
        this.footerToDisplayed = ['footer'];
        this.getLangDir();
    }
    ngOnChanges(changes) {
        if (changes['customerId']) {
            this.getSalesOrder();
        }
    }
    getSalesOrder() {
        this.salesOrderResource = new _core_domain_classes_sales_order_resource_parameter__WEBPACK_IMPORTED_MODULE_0__.SalesOrderResourceParameter();
        this.salesOrderResource.pageSize = 5;
        this.salesOrderResource.orderBy = 'soCreatedDate asc';
        this.salesOrderResource.customerId = this.customerId;
        this.dataSource = new src_app_sales_order_sales_order_datasource__WEBPACK_IMPORTED_MODULE_2__.SalesOrderDataSource(this.salesOrderService);
        this.dataSource.loadData(this.salesOrderResource);
        this.getResourceParameter();
    }
    ngAfterViewInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        this.sub$.sink = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(this.sort.sortChange, this.paginator.page)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(() => {
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
}
CustomerSoListComponent.ɵfac = function CustomerSoListComponent_Factory(t) { return new (t || CustomerSoListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_order_sales_order_service__WEBPACK_IMPORTED_MODULE_3__.SalesOrderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService)); };
CustomerSoListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: CustomerSoListComponent, selectors: [["app-customer-so-list"]], viewQuery: function CustomerSoListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { customerId: "customerId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 37, vars: 14, consts: [[1, "page-header-main"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "content-header"], ["class", "loading-shade", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "table-responsive"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "matSortActive", "soCreatedDate", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "soCreatedDate"], ["class", "table-column-100", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-100", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "orderNumber"], ["class", "table-column-150", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "paymentStatus"], ["mat-cell", "", "style", "text-align: center;", 4, "matCellDef"], ["matColumnDef", "totalDiscount"], ["matColumnDef", "totalTax"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "totalAmount"], ["matColumnDef", "footer"], ["mat-footer-cell", "", "colspan", "7", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], [4, "ngIf"], [1, "loading-shade"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-100"], ["mat-cell", "", 1, "table-column-100"], ["mat-header-cell", "", "mat-sort-header", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], [3, "routerLink"], ["mat-cell", "", 2, "text-align", "center"], [1, "badge-pill", 3, "ngClass"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-footer-cell", "", "colspan", "7"], [3, "length", "pageSize", "pageSizeOptions"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], [1, "col-sm-12", "ml-4", "mt-3"], [1, "font-weight-bold"]], template: function CustomerSoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, CustomerSoListComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, CustomerSoListComponent_th_14_Template, 3, 3, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, CustomerSoListComponent_td_15_Template, 3, 4, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](16, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, CustomerSoListComponent_th_17_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, CustomerSoListComponent_td_18_Template, 3, 4, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](19, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, CustomerSoListComponent_th_20_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, CustomerSoListComponent_td_21_Template, 4, 8, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](22, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, CustomerSoListComponent_th_23_Template, 3, 3, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, CustomerSoListComponent_td_24_Template, 3, 3, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](25, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, CustomerSoListComponent_th_26_Template, 3, 3, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, CustomerSoListComponent_td_27_Template, 3, 3, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](28, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, CustomerSoListComponent_th_29_Template, 3, 3, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, CustomerSoListComponent_td_30_Template, 3, 3, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](31, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, CustomerSoListComponent_td_32_Template, 2, 4, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, CustomerSoListComponent_tr_33_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, CustomerSoListComponent_tr_34_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, CustomerSoListComponent_tr_35_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, CustomerSoListComponent_ng_container_36_Template, 6, 3, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 10, "SALES_ORDERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](8, 12, ctx.dataSource.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matFooterRowDef", ctx.footerToDisplayed)("matFooterRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dataSource.count === 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__.Dir, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinner, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatFooterRow, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _shared_pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_5__.CustomCurrencyPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_6__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _shared_pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__.PaymentStatusPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1zby1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 72176:
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRoutingModule": () => (/* binding */ CustomerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-list/customer-list.component */ 10056);
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ 37581);
/* harmony import */ var _customer_detail_customer_detail_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-detail/customer-detail-resolver.service */ 95987);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_0__.CustomerListComponent,
        data: { claimType: 'CUST_VIEW_CUSTOMERS' },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
    },
    {
        path: ':id',
        component: _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailComponent,
        resolve: {
            customer: _customer_detail_customer_detail_resolver_service__WEBPACK_IMPORTED_MODULE_2__.CustomerResolverService
        },
        data: { claimType: ['CUST_ADD_CUSTOMER', 'CUST_UPDATE_CUSTOMER'] },
        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
    }
];
class CustomerRoutingModule {
}
CustomerRoutingModule.ɵfac = function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); };
CustomerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 40505:
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerModule": () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-routing.module */ 72176);
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list/customer-list.component */ 10056);
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-detail/customer-detail.component */ 37581);
/* harmony import */ var _customer_detail_customer_detail_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-detail/customer-detail-resolver.service */ 95987);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 9861);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _customer_list_customer_so_list_customer_so_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-list/customer-so-list/customer-so-list.component */ 23846);
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @kolkov/angular-editor */ 88888);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);






















class CustomerModule {
}
CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _customer_detail_customer_detail_resolver_service__WEBPACK_IMPORTED_MODULE_3__.CustomerResolverService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__.AngularEditorModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__.CustomerListComponent,
        _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_2__.CustomerDetailComponent,
        _customer_list_customer_so_list_customer_so_list_component__WEBPACK_IMPORTED_MODULE_5__.CustomerSoListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_9__.AngularEditorModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule] }); })();


/***/ }),

/***/ 69846:
/*!***************************************************!*\
  !*** ./node_modules/guid-typescript/dist/guid.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;

var Guid =
/** @class */
function () {
  function Guid(guid) {
    if (!guid) {
      throw new TypeError("Invalid argument; `value` has no value.");
    }

    this.value = Guid.EMPTY;

    if (guid && Guid.isGuid(guid)) {
      this.value = guid;
    }
  }

  Guid.isGuid = function (guid) {
    var value = guid.toString();
    return guid && (guid instanceof Guid || Guid.validator.test(value));
  };

  Guid.create = function () {
    return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));
  };

  Guid.createEmpty = function () {
    return new Guid("emptyguid");
  };

  Guid.parse = function (guid) {
    return new Guid(guid);
  };

  Guid.raw = function () {
    return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
  };

  Guid.gen = function (count) {
    var out = "";

    for (var i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      out += ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    return out;
  };

  Guid.prototype.equals = function (other) {
    // Comparing string `value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    return Guid.isGuid(other) && this.value === other.toString();
  };

  Guid.prototype.isEmpty = function () {
    return this.value === Guid.EMPTY;
  };

  Guid.prototype.toString = function () {
    return this.value;
  };

  Guid.prototype.toJSON = function () {
    return {
      value: this.value
    };
  };

  Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
  Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
  return Guid;
}();

exports.Guid = Guid;

/***/ })

}]);
//# sourceMappingURL=src_app_customer_customer_module_ts.js.map