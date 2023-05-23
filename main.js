"use strict";
(self["webpackChunkposadminportal"] = self["webpackChunkposadminportal"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/auth.guard */ 50319);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _company_profile_company_profile_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-profile/company-profile.resolver */ 31539);
/* harmony import */ var _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/layout/layout.component */ 21378);
/* harmony import */ var _user_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/my-profile/my-profile.component */ 76811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        resolve: { profile: _company_profile_company_profile_resolver__WEBPACK_IMPORTED_MODULE_2__.CompanyProfileResolver },
        children: [{
                path: 'login',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 80107))
                    .then(m => m.LoginModule)
            }, {
                path: '',
                component: _core_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent,
                children: [
                    {
                        path: 'my-profile',
                        component: _user_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__.MyProfileComponent,
                        canActivate: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                    }, {
                        path: 'pos',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pos_pos_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pos/pos.module */ 69295)).then(m => m.PosModule)
                    },
                    {
                        path: '',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_months_ts-node_modules_ng2-charts_fesm2015_ng2-charts_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_domain-classes_resource-parameter_ts-src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814))
                            .then(m => m.DashboardModule)
                    }, {
                        path: 'pages',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("src_app_page_page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/page.module */ 85115))
                            .then(m => m.PageModule)
                    },
                    {
                        path: 'roles',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"), __webpack_require__.e("default-src_app_core_services_action_service_ts-src_app_core_services_page_service_ts-node_mo-f2bd8d"), __webpack_require__.e("common"), __webpack_require__.e("src_app_role_role_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./role/role.module */ 37321))
                            .then(m => m.RoleModule)
                    }, {
                        path: 'users',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"), __webpack_require__.e("default-src_app_core_services_action_service_ts-src_app_core_services_page_service_ts-node_mo-f2bd8d"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_domain-classes_resource-parameter_ts-src_app_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user/user.module */ 88524))
                            .then(m => m.UserModule)
                    }, {
                        path: 'login-audit',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("src_app_login-audit_login-audit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login-audit/login-audit.module */ 28443))
                            .then(m => m.LoginAuditModule)
                    },
                    {
                        path: 'sessions',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_session_session_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./session/session.module */ 63900))
                            .then(m => m.SessionModule)
                    },
                    {
                        path: 'emailtemplate',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_editor_config_ts-node_modules_kolkov_angular-editor_fesm2015_kolkov-an-37aea6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_email-template_email-template_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./email-template/email-template.module */ 27514))
                            .then(m => m.EmailTemplateModule)
                    },
                    {
                        path: 'send-email',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-src_app_shared_editor_config_ts-node_modules_kolkov_angular-editor_fesm2015_kolkov-an-37aea6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_email-send_email-send_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./email-send/email-send.module */ 31087))
                            .then(m => m.EmailSendModule)
                    },
                    {
                        path: 'logs',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("src_app_n-log_n-log_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./n-log/n-log.module */ 73000))
                            .then(m => m.NLogModule)
                    },
                    {
                        path: 'email-smtp',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"), __webpack_require__.e("src_app_email-smtp-setting_email-smtp-setting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./email-smtp-setting/email-smtp-setting.module */ 80194))
                            .then(m => m.EmailSmtpSettingModule)
                    },
                    {
                        path: 'supplier',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-src_app_shared_editor_config_ts-node_modules_kolkov_angular-editor_fesm2015_kolkov-an-37aea6"), __webpack_require__.e("default-src_app_core_domain-classes_purchase-order-resource-parameter_ts-src_app_purchase-ord-976a97"), __webpack_require__.e("common"), __webpack_require__.e("src_app_supplier_supplier_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./supplier/supplier.module */ 53371)).then(m => m.SupplierModule)
                    },
                    {
                        path: 'testimonial',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-src_app_shared_editor_config_ts-node_modules_kolkov_angular-editor_fesm2015_kolkov-an-37aea6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"), __webpack_require__.e("src_app_testimonial_testimonial_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./testimonial/testimonial.module */ 84917)).then(m => m.TestimonialModule)
                    },
                    {
                        path: 'customer',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-src_app_shared_editor_config_ts-node_modules_kolkov_angular-editor_fesm2015_kolkov-an-37aea6"), __webpack_require__.e("default-src_app_core_domain-classes_sales-order-resource-parameter_ts-src_app_customer_custom-3e5c04"), __webpack_require__.e("common"), __webpack_require__.e("src_app_customer_customer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./customer/customer.module */ 40505)).then(m => m.CustomerModule)
                    },
                    {
                        path: 'contact-us',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_chips_mjs"), __webpack_require__.e("src_app_contact-us_contact-us_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contact-us/contact-us.module */ 63648)).then(m => m.ContactUsModule)
                    },
                    {
                        path: 'notifications',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_domain-classes_resource-parameter_ts-src_app_notification_notification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 22154))
                            .then(m => m.NotificationModule)
                    },
                    {
                        path: 'reminders',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_slide-toggle_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_domain-classes_resource-parameter_ts-src_app_reminder_reminder_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reminder/reminder.module */ 78784))
                            .then(m => m.ReminderModule)
                    },
                    {
                        path: 'purchase-order',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_purchase-order-resource-parameter_ts-src_app_purchase-ord-976a97"), __webpack_require__.e("default-src_app_core_domain-classes_product-resource-parameter_ts-src_app_product_product_ser-243fd0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_purchase-order_purchase-order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchase-order/purchase-order.module */ 32008))
                            .then(m => m.PurchaseOrderModule)
                    },
                    {
                        path: 'purchase-order-return',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_purchase-order-resource-parameter_ts-src_app_purchase-ord-976a97"), __webpack_require__.e("default-src_app_core_domain-classes_product-resource-parameter_ts-src_app_product_product_ser-243fd0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_purchase-order-return_purchase-order-return_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchase-order-return/purchase-order-return.module */ 21522))
                            .then(m => m.PurchaseOrderReturnModule)
                    },
                    {
                        path: 'purchase-order-request',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_purchase-order-resource-parameter_ts-src_app_purchase-ord-976a97"), __webpack_require__.e("common"), __webpack_require__.e("src_app_purchase-order-request_purchase-order-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchase-order-request/purchase-order-request.module */ 31822))
                            .then(m => m.PurchaseOrderRequestModule)
                    }, {
                        path: 'sales-order',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_sales-order-resource-parameter_ts-src_app_customer_custom-3e5c04"), __webpack_require__.e("default-src_app_core_domain-classes_product-resource-parameter_ts-src_app_product_product_ser-743026"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sales-order_sales-order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sales-order/sales-order.module */ 31073))
                            .then(m => m.SalesOrderModule)
                    },
                    {
                        path: 'sales-order-return',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_sales-order-resource-parameter_ts-src_app_customer_custom-3e5c04"), __webpack_require__.e("default-src_app_core_domain-classes_product-resource-parameter_ts-src_app_product_product_ser-743026"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sale-order-return_sale-order-return_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./sale-order-return/sale-order-return.module */ 17136))
                            .then(m => m.SaleOrderReturnModule)
                    },
                    {
                        path: 'company-profile',
                        canLoad: [_core_security_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_company-profile_company-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./company-profile/company-profile.module */ 63765))
                            .then(m => m.CompanyProfileModule)
                    },
                    {
                        path: 'expense-category',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_expense-category_expense-category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./expense-category/expense-category.module */ 13412))
                            .then(m => m.ExpenseCategoryModule)
                    },
                    {
                        path: 'expense',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_domain-classes_resource-parameter_ts-src_app_expense_expense_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./expense/expense.module */ 58032))
                            .then(m => m.ExpenseModule)
                    },
                    {
                        path: 'inquiry',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-src_app_shared_editor_config_ts-node_modules_kolkov_angular-editor_fesm2015_kolkov-an-37aea6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_chips_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_inquiry_inquiry_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inquiry/inquiry.module */ 80544)).then(m => m.InquiryModule)
                    }, {
                        path: 'inquiry-status',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_inquiry-status_inquiry-status_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inquiry-status/inquiry-status.module */ 98209))
                            .then(m => m.InquiryStatusModule)
                    }, {
                        path: 'inquiry-source',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_inquiry-source_inquiry-source_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inquiry-source/inquiry-source.module */ 97640))
                            .then(m => m.InquirySourceModule)
                    },
                    {
                        path: 'product-category',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_product-category_product-category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-category/product-category.module */ 44477)).then(m => m.ProductCategoryModule)
                    }, {
                        path: 'products',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product/product.module */ 11589)).then(m => m.ProductModule)
                    }, {
                        path: 'tax',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_tax_tax_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tax/tax.module */ 61126)).then(m => m.TaxModule)
                    }, {
                        path: 'brand',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_brand_brand_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./brand/brand.module */ 31547)).then(m => m.BrandModule)
                    }, {
                        path: 'warehouse',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_warehouse_warehouse_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./warehouse/warehouse.module */ 10273)).then(m => m.WarehouseModule)
                    }, {
                        path: 'country',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("src_app_country_country_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./country/country.module */ 70455)).then(m => m.CountryModule)
                    }, {
                        path: 'cities',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_city_city_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./city/city.module */ 11368)).then(m => m.CityModule)
                    }, {
                        path: 'inventory',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_inventory_inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./inventory/inventory.module */ 41564)).then(m => m.InventoryModule)
                    },
                    {
                        path: 'purchase-order-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_purchase-order-resource-parameter_ts-src_app_purchase-ord-976a97"), __webpack_require__.e("default-src_app_core_domain-classes_product-resource-parameter_ts-src_app_product_product_ser-243fd0"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_purchase-order-report_purchase-order-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/purchase-order-report/purchase-order-report.module */ 30484)).then(m => m.PurchaseOrderReportModule)
                    },
                    {
                        path: 'sales-order-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_sales-order-resource-parameter_ts-src_app_customer_custom-3e5c04"), __webpack_require__.e("default-src_app_core_domain-classes_product-resource-parameter_ts-src_app_product_product_ser-743026"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_sales-order-report_sales-order-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/sales-order-report/sales-order-report.module */ 84277)).then(m => m.SalesOrderReportModule)
                    },
                    {
                        path: 'purchase-payment-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_purchase-payment-report_purchase-payment-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/purchase-payment-report/purchase-payment-report.module */ 37214)).then(m => m.PurchasePaymentReportModule)
                    }, {
                        path: 'sales-payment-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_sales-payment-report_sales-payment-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/sales-payment-report/sales-payment-report.module */ 29881)).then(m => m.SalesPaymentReportModule)
                    }, {
                        path: 'sales-purchase-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_months_ts-node_modules_ng2-charts_fesm2015_ng2-charts_js"), __webpack_require__.e("src_app_reports_sales-purchase-report_sales-purchase-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/sales-purchase-report/sales-purchase-report.module */ 31797)).then(m => m.SalesPurchaseReportModule)
                    }, {
                        path: 'expense-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_domain-classes_resource-parameter_ts-src_app_reports_expense-report_expense-repo-b1ae5e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/expense-report/expense-report.module */ 56997)).then(m => m.ExpenseReportModule)
                    }, {
                        path: 'supplier-payment-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_domain-classes_resource-parameter_ts-src_app_reports_supplier-payments_supplier--a14a8d")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/supplier-payments/supplier-payments.module */ 12794)).then(m => m.SupplierPaymentsModule)
                    }, {
                        path: 'customer-payment-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_domain-classes_resource-parameter_ts-src_app_reports_customer-payment-report_cus-26df86")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/customer-payment-report/customer-payment-report.module */ 28788)).then(m => m.CustomerPaymentReportModule)
                    }, {
                        path: 'product-purchase-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_purchase-order-resource-parameter_ts-src_app_purchase-ord-976a97"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_product-purchase-report_product-purchase-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/product-purchase-report/product-purchase-report.module */ 1499)).then(m => m.ProductPurchaseReportModule)
                    }, {
                        path: 'product-sales-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_datepicker_mjs-node_modules_angular_material_f-5a094f"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_product-sales-report_product-sales-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/product-sales-report/product-sales-report.module */ 58404)).then(m => m.ProductSalesReportModule)
                    }, {
                        path: 'stock-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-src_app_core_domain-classes_resource-parameter_ts-node_modules_angular_material_fesm2-2d28b6"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_stock-report_stock-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/stock-report/stock-report.module */ 92155)).then(m => m.StockReportModule)
                    }, {
                        path: 'profit-loss-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_xlsx_xlsx_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_reports_profit-loss-report_profit-loss-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/profit-loss-report/profit-loss-report.module */ 81291)).then(m => m.ProfitLossReportModule)
                    }, {
                        path: 'unitConversation',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_input_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_unit-conversation_unit-conversation_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./unit-conversation/unit-conversation.module */ 29049)).then(m => m.UnitConversationModule)
                    }, {
                        path: 'warehouse-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("src_app_reports_warehouse-stock-report_warehouse-stock-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/warehouse-stock-report/warehouse-stock-report.module */ 8041)).then(m => m.WarehouseStockReportModule)
                    }, {
                        path: 'product-warehouse-report',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-spinner_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_button_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs"), __webpack_require__.e("src_app_reports_product-warehouse-report_product-warehouse-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/product-warehouse-report/product-warehouse-report.module */ 3678)).then(m => m.ProductWarehouseReportModule)
                    }, {
                        path: '**',
                        redirectTo: '/'
                    }
                ]
            },]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'top',
            relativeLinkResolution: 'legacy'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_signalr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/signalr.service */ 65754);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/common.service */ 50690);












class AppComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(signalrService, securityService, translate, translationService, route, titleService, router, commonService, document) {
        super(translationService);
        this.signalrService = signalrService;
        this.securityService = securityService;
        this.translate = translate;
        this.translationService = translationService;
        this.route = route;
        this.titleService = titleService;
        this.router = router;
        this.commonService = commonService;
        this.document = document;
        this.getLangDir();
        this.setProfile();
        this.companyProfileSubscription();
    }
    ngOnInit() {
        this.routerNavigate();
        this.signalrService.startConnection().then((resolve) => {
            if (resolve) {
                this.signalrService.handleMessage();
                this.getAuthObj();
            }
        });
    }
    setProfile() {
        this.route.data.subscribe((data) => {
            if (data.profile) {
                this.securityService.updateProfile(data.profile);
            }
        });
    }
    companyProfileSubscription() {
        this.securityService.companyProfile.subscribe((profile) => {
            if (profile) {
                this.titleService.setTitle(profile.title);
            }
        });
    }
    getAuthObj() {
        this.sub$.sink = this.securityService.securityObject$.subscribe((c) => {
            if (c) {
                const online = {
                    email: c.email,
                    id: c.id,
                    connectionId: this.signalrService.connectionId,
                };
                this.signalrService.addUser(online);
            }
        });
    }
    routerNavigate() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd))
            .subscribe((event) => {
            if (event.url.indexOf('purchase-order-report') > -1 ||
                event.url.indexOf('sales-order-report') > -1 ||
                event.url.indexOf('product-purchase-report') > -1 ||
                event.url.indexOf('product-sales-report') > -1 ||
                event.url.indexOf('product-warehouse-report') > -1 ||
                event.url.indexOf('stock-report') > -1 ||
                event.url.indexOf('purchase-payment-report') > -1 ||
                event.url.indexOf('expense-report') > -1 ||
                event.url.indexOf('profit-loss-report') > -1 ||
                event.url.indexOf('sales-payment-report') > -1 ||
                event.url.indexOf('supplier-payment-report') > -1 ||
                event.url.indexOf('sales-purchase-report') > -1 ||
                event.url.indexOf('customer-payment-report') > -1 ||
                event.url.indexOf('warehouse-report') > -1) {
                this.commonService.setCurrentUrl('report');
            }
            else if (event.url.indexOf('products') > -1 ||
                event.url.indexOf('product-category') > -1 ||
                event.url.indexOf('tax') > -1 ||
                event.url.indexOf('unitConversation') > -1 ||
                event.url.indexOf('brand') > -1 ||
                event.url.indexOf('warehouse') > -1) {
                this.commonService.setCurrentUrl('product');
            }
            else if (event.url.indexOf('supplier') > -1) {
                this.commonService.setCurrentUrl('supplier');
            }
            else if (event.url.indexOf('customer') > -1) {
                this.commonService.setCurrentUrl('customer');
            }
            else if (event.url.indexOf('inquiry') > -1 ||
                event.url.indexOf('inquiry-status') > -1 ||
                event.url.indexOf('inquiry-source') > -1) {
                this.commonService.setCurrentUrl('inquiry');
            }
            else if (event.url.indexOf('purchase-order-request') > -1) {
                this.commonService.setCurrentUrl('purchase-order-request');
            }
            else if (event.url.indexOf('purchase-order-return') > -1) {
                this.commonService.setCurrentUrl('purchase-order-return');
            }
            else if (event.url.indexOf('purchase-order') > -1) {
                this.commonService.setCurrentUrl('purchase-order');
            }
            else if (event.url.indexOf('sales-order-return') > -1) {
                this.commonService.setCurrentUrl('sales-order-return');
            }
            else if (event.url.indexOf('sales-order') > -1) {
                this.commonService.setCurrentUrl('sales-order');
            }
            else if (event.url.indexOf('expense') > -1 ||
                event.url.indexOf('expense-category') > -1) {
                this.commonService.setCurrentUrl('expense');
            }
            else if (event.url.indexOf('reminders') > -1) {
                this.commonService.setCurrentUrl('reminders');
            }
            else if (event.url.indexOf('users') > -1 ||
                event.url.indexOf('sessions') > -1) {
                this.commonService.setCurrentUrl('users');
            }
            else if (event.url.indexOf('roles') > -1) {
                this.commonService.setCurrentUrl('roles');
            }
            else if (event.url.indexOf('email-smtp') > -1 ||
                event.url.indexOf('emailtemplate') > -1 ||
                event.url.indexOf('send-email') > -1) {
                this.commonService.setCurrentUrl('email');
            }
            else if (event.url.indexOf('company-profile') > -1 ||
                event.url.indexOf('country') > -1 ||
                event.url.indexOf('cities') > -1) {
                this.commonService.setCurrentUrl('settings');
            }
            else if (event.url.indexOf('login-audit') > -1 ||
                event.url.indexOf('logs') > -1) {
                this.commonService.setCurrentUrl('logs');
            }
            else {
                this.commonService.setCurrentUrl('');
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_signalr_service__WEBPACK_IMPORTED_MODULE_1__.SignalrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_2__.SecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _http_interceptor_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-interceptor.module */ 83838);
/* harmony import */ var _store_app_store_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/app-store.module */ 33007);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_loading_indicator_pending_interceptor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/loading-indicator/pending-interceptor.module */ 96181);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _translater_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translater-loader */ 26971);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _boostrap_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boostrap-loader */ 80151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
            useFactory: _boostrap_loader__WEBPACK_IMPORTED_MODULE_8__.delayBootstrapping,
            deps: [_core_services_translation_service__WEBPACK_IMPORTED_MODULE_7__.TranslationService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService],
            multi: true
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _http_interceptor_module__WEBPACK_IMPORTED_MODULE_3__.HttpInterceptorModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateLoader,
                useFactory: (_translater_loader__WEBPACK_IMPORTED_MODULE_6__.createTranslateLoader),
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient],
            }
        }),
        _store_app_store_module__WEBPACK_IMPORTED_MODULE_4__.AppStoreModule,
        _shared_loading_indicator_pending_interceptor_module__WEBPACK_IMPORTED_MODULE_5__.PendingInterceptorModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_16__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_16__.OwlNativeDateTimeModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _http_interceptor_module__WEBPACK_IMPORTED_MODULE_3__.HttpInterceptorModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _store_app_store_module__WEBPACK_IMPORTED_MODULE_4__.AppStoreModule,
        _shared_loading_indicator_pending_interceptor_module__WEBPACK_IMPORTED_MODULE_5__.PendingInterceptorModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_16__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_16__.OwlNativeDateTimeModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule] }); })();


/***/ }),

/***/ 83607:
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 87478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/translation.service */ 16107);



class BaseComponent {
    constructor(translationService) {
        this.translationService = translationService;
        this.langDir = 'ltr';
        this.sub$ = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    getLangDir() {
        this.sub$.sink = this.translationService.lanDir$.subscribe((c) => {
            this.langDir = c;
        });
    }
    ngOnDestroy() {
        this.sub$.unsubscribe();
    }
}
BaseComponent.ɵfac = function BaseComponent_Factory(t) { return new (t || BaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService)); };
BaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BaseComponent, selectors: [["app-base"]], decls: 0, vars: 0, template: function BaseComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 80151:
/*!************************************!*\
  !*** ./src/app/boostrap-loader.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoostrapLoader": () => (/* binding */ BoostrapLoader),
/* harmony export */   "delayBootstrapping": () => (/* binding */ delayBootstrapping)
/* harmony export */ });
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.component */ 83607);

function delayBootstrapping(translationService, document, translate) {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            new BoostrapLoader(translationService, document, translate);
            resolve();
        }, 500);
    });
}
class BoostrapLoader extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(translationService, document, translate) {
        super(translationService);
        this.translationService = translationService;
        this.document = document;
        this.translate = translate;
        translate.addLangs(['en', 'es', 'ar', 'ru', 'cn', 'ja', 'ko']);
        this.setLanguage();
    }
    setLanguage() {
        let currentLang = this.translationService.getSelectedLanguage();
        if (currentLang) {
            this.sub$.sink = this.translationService.setLanguage(currentLang)
                .subscribe(() => { });
        }
        else {
            const browserLang = this.translate.getBrowserLang();
            currentLang = browserLang.match(/en|es|ar|ru|cn|ja|ko/) ? browserLang : 'en';
            this.sub$.sink = this.translationService.setLanguage(currentLang).subscribe(() => { });
        }
        if (currentLang == 'ar') {
            this.setDynamicStyleMain(`main-style`, currentLang);
            this.setDynamicStyleMain(`common-style`, currentLang);
            this.setDynamicStyleBootstrap(`boostrap-style`, currentLang);
        }
        else {
            this.setDynamicStyleMain('main-style', '');
            this.setDynamicStyleMain('common-style', '');
            this.setDynamicStyleBootstrap(`boostrap-style`, '');
        }
    }
    setDynamicStyleBootstrap(styleName, lang) {
        const head = this.document.getElementsByTagName('head')[0];
        let themeLink = this.document.getElementById(`${styleName}`);
        if (themeLink) {
            if (lang) {
                themeLink.href = "bootstrap-rtl-style.css";
            }
            else {
                themeLink.href = "bootstrap-style.css";
            }
        }
        else {
            const style = this.document.createElement('link');
            style.id = `${styleName}`;
            style.rel = 'stylesheet';
            style.href = lang ? `bootstrap-rtl-style.css` : `bootstrap-style.css`;
            head.appendChild(style);
        }
    }
    setDynamicStyleMain(styleName, lang) {
        const head = this.document.getElementsByTagName('head')[0];
        let themeLink = this.document.getElementById(`${styleName}`);
        if (themeLink) {
            if (lang) {
                themeLink.href = styleName + "-ar.css";
            }
            else {
                themeLink.href = styleName + ".css";
            }
        }
        else {
            const style = this.document.createElement('link');
            style.id = `${styleName}`;
            style.rel = 'stylesheet';
            style.href = lang ? `${styleName}-ar.css` : `${styleName}.css`;
            head.appendChild(style);
        }
    }
}


/***/ }),

/***/ 31539:
/*!*************************************************************!*\
  !*** ./src/app/company-profile/company-profile.resolver.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyProfileResolver": () => (/* binding */ CompanyProfileResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _company_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-profile.service */ 91076);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);






class CompanyProfileResolver {
    constructor(companyProfileService, router) {
        this.companyProfileService = companyProfileService;
        this.router = router;
    }
    resolve(route, state) {
        return this.companyProfileService.getCompanyProfile().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)((companyProfile) => {
            if (companyProfile) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(companyProfile);
            }
            else {
                this.router.navigate(['/dashboard']);
                return null;
            }
        }));
    }
}
CompanyProfileResolver.ɵfac = function CompanyProfileResolver_Factory(t) { return new (t || CompanyProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_company_profile_service__WEBPACK_IMPORTED_MODULE_0__.CompanyProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
CompanyProfileResolver.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CompanyProfileResolver, factory: CompanyProfileResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91076:
/*!************************************************************!*\
  !*** ./src/app/company-profile/company-profile.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyProfileService": () => (/* binding */ CompanyProfileService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);




class CompanyProfileService {
    constructor(http, commonHttpErrorService) {
        this.http = http;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    getCompanyProfile() {
        const url = `companyProfile`;
        return this.http.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    updateCompanyProfile(companyProfile) {
        const url = `companyProfile`;
        return this.http.post(url, companyProfile)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
}
CompanyProfileService.ɵfac = function CompanyProfileService_Factory(t) { return new (t || CompanyProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
CompanyProfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CompanyProfileService, factory: CompanyProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 95991:
/*!***************************************************************!*\
  !*** ./src/app/core/common-dialog/common-dialog.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonDialogComponent": () => (/* binding */ CommonDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



class CommonDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    clickHandler(data) {
        this.dialogRef.close(data);
    }
}
CommonDialogComponent.ɵfac = function CommonDialogComponent_Factory(t) { return new (t || CommonDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
CommonDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonDialogComponent, selectors: [["app-common-dialog"]], decls: 15, vars: 7, consts: [[1, "modal-content1"], [1, "modal-body"], ["md-dialog-title", "", 1, "primary-message"], [1, "modal-footer"], [1, "form-row", "w-100"], [1, "col-md-auto", "col-auto"], [1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-check"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"]], template: function CommonDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDialogComponent_Template_button_click_7_listener() { return ctx.clickHandler(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommonDialogComponent_Template_button_click_11_listener() { return ctx.clickHandler(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.primaryMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 3, "YES"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 5, "CANCEL"), "");
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".primary-message[_ngcontent-%COMP%] {\n  font: 400 16px/28px Roboto, Helvetica Neue, sans-serif !important;\n  letter-spacing: normal !important;\n  margin: 0 0 16px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBQiUyMFBPU1xcRnJvbnRlbmRcXHNyY1xcYXBwXFxjb3JlXFxjb21tb24tZGlhbG9nXFxjb21tb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUVBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0FDQ0oiLCJmaWxlIjoiY29tbW9uLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LW1lc3NhZ2Uge1xyXG4gICAgZm9udDogNDAwIDE2cHgvMjhweCBSb2JvdG8sSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDAgMTZweCAhaW1wb3J0YW50O1xyXG59IiwiLnByaW1hcnktbWVzc2FnZSB7XG4gIGZvbnQ6IDQwMCAxNnB4LzI4cHggUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAwIDE2cHggIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 44603:
/*!*************************************************************!*\
  !*** ./src/app/core/common-dialog/common-dialog.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonDialogService": () => (/* binding */ CommonDialogService)
/* harmony export */ });
/* harmony import */ var _common_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-dialog.component */ 95991);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);



class CommonDialogService {
    constructor(dialog) {
        this.dialog = dialog;
        this.dialogConfig = {
            disableClose: false,
            width: '',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            }
        };
    }
    deleteConformationDialog(message) {
        const dialogRef = this.dialog.open(_common_dialog_component__WEBPACK_IMPORTED_MODULE_0__.CommonDialogComponent, this.dialogConfig);
        dialogRef.componentInstance.primaryMessage = message;
        return dialogRef.afterClosed();
    }
}
CommonDialogService.ɵfac = function CommonDialogService_Factory(t) { return new (t || CommonDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
CommonDialogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonDialogService, factory: CommonDialogService.ɵfac });


/***/ }),

/***/ 13922:
/*!*******************************************************************!*\
  !*** ./src/app/core/control-sidebar/control-sidebar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlSidebarComponent": () => (/* binding */ ControlSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ControlSidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ControlSidebarComponent.ɵfac = function ControlSidebarComponent_Factory(t) { return new (t || ControlSidebarComponent)(); };
ControlSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ControlSidebarComponent, selectors: [["app-control-sidebar"]], decls: 1, vars: 0, consts: [[1, "control-sidebar", "control-sidebar-dark"]], template: function ControlSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aside", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250cm9sLXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 21378);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 43556);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer/footer.component */ 91229);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 68681);
/* harmony import */ var _common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-dialog/common-dialog.service */ 44603);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_loading_indicator_loading_indicator_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/loading-indicator/loading-indicator.module */ 72025);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 88626);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 97281);
/* harmony import */ var _error_handler_common_error_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-handler/common-error-handler.service */ 80467);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./control-sidebar/control-sidebar.component */ 13922);
/* harmony import */ var _common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common-dialog/common-dialog.component */ 95991);





















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [
        _common_dialog_common_dialog_service__WEBPACK_IMPORTED_MODULE_4__.CommonDialogService,
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ErrorHandler, useClass: _error_handler_common_error_handler_service__WEBPACK_IMPORTED_MODULE_7__.CommonErrorHandlerService,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
        }
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule,
        _shared_loading_indicator_loading_indicator_module__WEBPACK_IMPORTED_MODULE_6__.LoadingIndicatorModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule,
        ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__.BsDropdownModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
        _control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.ControlSidebarComponent,
        _common_dialog_common_dialog_component__WEBPACK_IMPORTED_MODULE_9__.CommonDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule,
        _shared_loading_indicator_loading_indicator_module__WEBPACK_IMPORTED_MODULE_6__.LoadingIndicatorModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__.PerfectScrollbarModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_18__.BsDropdownModule], exports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent] }); })();


/***/ }),

/***/ 70882:
/*!*********************************************************!*\
  !*** ./src/app/core/domain-classes/inventory-source.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventorySource": () => (/* binding */ InventorySource),
/* harmony export */   "inventorySource": () => (/* binding */ inventorySource)
/* harmony export */ });
class InventorySource {
}
const inventorySource = [
    {
        id: 0,
        name: 'DIRECT'
    }, {
        id: 1,
        name: 'PURCHASE_ORDER'
    }, {
        id: 2,
        name: 'SALES_ORDER'
    }, {
        id: 3,
        name: 'PURCHASE_ORDER_RETURN'
    }, {
        id: 4,
        name: 'SALES_ORDER_RETURN'
    }
];


/***/ }),

/***/ 22746:
/*!*************************************************!*\
  !*** ./src/app/core/domain-classes/operator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Operators": () => (/* binding */ Operators),
/* harmony export */   "UnitOperator": () => (/* binding */ UnitOperator),
/* harmony export */   "unitOperators": () => (/* binding */ unitOperators)
/* harmony export */ });
class UnitOperator {
}
var Operators;
(function (Operators) {
    Operators[Operators["Plush"] = 0] = "Plush";
    Operators[Operators["Minus"] = 1] = "Minus";
    Operators[Operators["Multiply"] = 2] = "Multiply";
    Operators[Operators["Divide"] = 3] = "Divide";
})(Operators || (Operators = {}));
const unitOperators = [
    {
        id: 0,
        name: 'Plush'
    }, {
        id: 1,
        name: 'Minus'
    }, {
        id: 2,
        name: 'Multiply'
    },
    {
        id: 3,
        name: 'Divide'
    },
];


/***/ }),

/***/ 96946:
/*!*******************************************************!*\
  !*** ./src/app/core/domain-classes/payment-method.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethod": () => (/* binding */ PaymentMethod),
/* harmony export */   "paymentMethods": () => (/* binding */ paymentMethods)
/* harmony export */ });
class PaymentMethod {
}
const paymentMethods = [
    {
        id: 0,
        name: 'CASH'
    }, {
        id: 1,
        name: 'CHEQUE'
    }, {
        id: 2,
        name: 'CREDIT_CARD'
    }, {
        id: 3,
        name: 'GIFT_CARD'
    }, {
        id: 4,
        name: 'OTHER'
    }
];


/***/ }),

/***/ 78675:
/*!*******************************************************!*\
  !*** ./src/app/core/domain-classes/paymentaStatus.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentStatus": () => (/* binding */ PaymentStatus),
/* harmony export */   "paymentStatuses": () => (/* binding */ paymentStatuses)
/* harmony export */ });
class PaymentStatus {
}
const paymentStatuses = [
    {
        id: 0,
        name: 'Paid'
    }, {
        id: 1,
        name: 'Pending'
    }, {
        id: 2,
        name: 'Partial'
    },
];


/***/ }),

/***/ 32760:
/*!***********************************************************!*\
  !*** ./src/app/core/domain-classes/reminder-frequency.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReminderFrequency": () => (/* binding */ ReminderFrequency),
/* harmony export */   "reminderFrequencies": () => (/* binding */ reminderFrequencies)
/* harmony export */ });
class ReminderFrequency {
}
const reminderFrequencies = [
    {
        id: 0,
        name: 'Daily'
    }, {
        id: 1,
        name: 'Weekly'
    }, {
        id: 2,
        name: 'Monthly'
    }, {
        id: 3,
        name: 'Quarterly'
    }, {
        id: 4,
        name: 'Half Yearly'
    }, {
        id: 5,
        name: 'Yearly'
    }
];


/***/ }),

/***/ 80467:
/*!********************************************************************!*\
  !*** ./src/app/core/error-handler/common-error-handler.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonErrorHandlerService": () => (/* binding */ CommonErrorHandlerService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);

class CommonErrorHandlerService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    handleError(error) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
            const obj = {
                errorMessage: error.message,
                stack: error.stack
            };
            this.saveErrorLog(obj).toPromise()
                .then((res) => { }, err => { });
        }
        else {
            console.error(error);
        }
    }
    saveErrorLog(obj) {
        return this.httpClient.post('nlog', obj);
    }
}


/***/ }),

/***/ 48032:
/*!*****************************************************************!*\
  !*** ./src/app/core/error-handler/common-http-error.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonHttpErrorService": () => (/* binding */ CommonHttpErrorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class CommonHttpErrorService {
    constructor() { }
    handleError(httpErrorResponse) {
        const customError = {
            statusText: httpErrorResponse.statusText,
            code: httpErrorResponse.status,
            messages: httpErrorResponse.error.messages,
            friendlyMessage: 'Error from service',
            error: httpErrorResponse.error
        };
        console.error(httpErrorResponse);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(customError);
    }
}
CommonHttpErrorService.ɵfac = function CommonHttpErrorService_Factory(t) { return new (t || CommonHttpErrorService)(); };
CommonHttpErrorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommonHttpErrorService, factory: CommonHttpErrorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91229:
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/security.service */ 40130);


class FooterComponent {
    constructor(securityService) {
        this.securityService = securityService;
    }
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
        this.companyProfileSubscription();
    }
    companyProfileSubscription() {
        this.securityService.companyProfile.subscribe(profile => {
            if (profile) {
                this.companyProfile = profile;
            }
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_0__.SecurityService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 2, consts: [[1, "main-footer"], [1, "float-right", "d-none", "d-sm-inline-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " 1.0.0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Copyright \u00A9 2014-", ctx.currentYear, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.companyProfile.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 43556:
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages */ 72644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _core_services_signalr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/signalr.service */ 65754);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _shared_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/date-ago.pipe */ 13056);
/* harmony import */ var _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/utc-to-localtime.pipe */ 18017);



















const _c0 = ["selectElem"];
function HeaderComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 44);
} }
function HeaderComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 45);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r1.logoImage, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 47)(2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/sales-order/add"]; };
function HeaderComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "SALES_ORDER"), "");
} }
const _c2 = function () { return ["/purchase-order/add"]; };
function HeaderComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "PURCHASE_ORDER"), "");
} }
const _c3 = function () { return ["/customer/addItem"]; };
function HeaderComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "CUSTOMER"), " ");
} }
const _c4 = function () { return ["/supplier/manage/addItem"]; };
function HeaderComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "SUPPLIER"), "");
} }
const _c5 = function () { return ["/products/add"]; };
function HeaderComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](4, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "PRODUCT"), "");
} }
function HeaderComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 49)(1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", "/expense/add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("\u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "EXPENSE"), "");
} }
const _c6 = function () { return ["/pos"]; };
function HeaderComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("display-none", ctx_r9.isFromPos);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](6, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, "POS"));
} }
function HeaderComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_ng_container_43_Template_li_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16); const language_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.setNewLanguageRefresh(language_r14.lang)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const language_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", language_r14.flag, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", language_r14.name, " ");
} }
const _c7 = function (a1) { return ["/sales-order/detail", a1]; };
function HeaderComponent_div_52_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const notificationUser_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](9, _c7, notificationUser_r17.referenceId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", notificationUser_r17.subject, " -", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, "SALES_ORDER_EXPECTED_SHIPMENT_DATE_IS"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 6, notificationUser_r17.duration, "shortDate"), ". ");
} }
const _c8 = function (a1) { return ["/purchase-order/detail", a1]; };
function HeaderComponent_div_52_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const notificationUser_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](9, _c8, notificationUser_r17.referenceId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", notificationUser_r17.subject, "-", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, "PURCHASE_ORDER_EXPECTED_DELIVERY_DATE_IS"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](4, 6, notificationUser_r17.duration, "shortDate"), ". ");
} }
const _c9 = function (a1) { return ["/inquiry/manage", a1]; };
function HeaderComponent_div_52_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const notificationUser_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](6, _c9, notificationUser_r17.referenceId));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", notificationUser_r17.subject, " ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](3, 3, notificationUser_r17.duration, "shortDate"), ". ");
} }
function HeaderComponent_div_52_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const notificationUser_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", notificationUser_r17.subject, " ");
} }
function HeaderComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div")(1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](4, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, HeaderComponent_div_52_ng_container_5_Template, 5, 11, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HeaderComponent_div_52_ng_container_6_Template, 5, 11, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, HeaderComponent_div_52_ng_container_7_Template, 4, 8, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, HeaderComponent_div_52_ng_container_8_Template, 2, 1, "ng-container", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "small", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "dateAgo");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "hr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notificationUser_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 6, notificationUser_r17.duration, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitch", notificationUser_r17.application);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 9, notificationUser_r17.duration), " ");
} }
function HeaderComponent_img_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 62);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r12.profilePath, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
} }
function HeaderComponent_img_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 63);
} }
const _c10 = function () { return ["/"]; };
const _c11 = function () { return ["SO_ADD_SO", "PO_ADD_PO", "CUST_ADD_CUSTOMER", "SUPP_ADD_SUPPLIER", "PRO_ADD_PRODUCT", "EXP_ADD_EXPENSE"]; };
const _c12 = function () { return ["/notifications"]; };
const _c13 = function () { return ["/my-profile"]; };
class HeaderComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(router, securityService, signalrService, translationService, commonService, translate, document) {
        super(translationService);
        this.router = router;
        this.securityService = securityService;
        this.signalrService = signalrService;
        this.translationService = translationService;
        this.commonService = commonService;
        this.translate = translate;
        this.document = document;
        this.isFromPos = false;
        this.navbarOpen = false;
        this.appUserAuth = null;
        this.notificationCount = 0;
        this.notificationUserList = [];
        this.languages = [];
        this.profilePath = '';
        this.logoImage = '';
        this.oldLang = '';
        this.getLangDir();
    }
    ngOnInit() {
        this.hideOrShowBaseOnCurrentUrl();
        this.languages = _languages__WEBPACK_IMPORTED_MODULE_2__.Languages.languages;
        this.routerNavigate();
        this.setTopLogAndName();
        this.setDefaultLanguage();
        this.getUserNotification();
        this.getNotificationList();
        this.companyProfileSubscription();
    }
    routerNavigate() {
        this.sub$.sink = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__.NavigationEnd)).subscribe((event) => {
            if (event.url.indexOf('pos') > -1) {
                this.isFromPos = true;
                this.lead.className = 'pos-page';
            }
            else {
                this.isFromPos = false;
                this.lead.className = '';
            }
        });
    }
    hideOrShowBaseOnCurrentUrl() {
        if (this.router.url.indexOf('pos') > -1) {
            this.isFromPos = true;
            this.lead.className = 'pos-page';
        }
        else {
            this.isFromPos = false;
            this.lead.className = '';
        }
    }
    companyProfileSubscription() {
        this.securityService.companyProfile.subscribe(profile => {
            if (profile) {
                this.logoImage = profile.logoUrl;
            }
        });
    }
    getUserNotification() {
        this.sub$.sink = this.signalrService.userNotification$
            .subscribe(c => {
            this.getUserNotificationCount();
            this.getNotificationList();
        });
    }
    getUserNotificationCount() {
        this.sub$.sink = this.commonService.getUserNotificationCount()
            .subscribe(c => {
            this.notificationCount = c;
        });
    }
    getNotificationList() {
        this.sub$.sink = this.commonService.getTop10UserNotification()
            .subscribe(c => {
            this.notificationUserList = c;
        });
    }
    setDefaultLanguage() {
        const lang = this.translationService.getSelectedLanguage();
        if (lang)
            this.setLanguageWithRefresh(lang);
    }
    setLanguageWithRefresh(lang) {
        this.languages.forEach((language) => {
            if (language.lang === lang) {
                language.active = true;
                this.language = language;
            }
            else {
                language.active = false;
            }
        });
        this.translationService.setLanguage(lang);
        if (this.oldLang == 'ar' || lang == 'ar') {
            //this.setLanguage(lang);
        }
    }
    setLanguageWithRefreshNew(lang) {
        this.languages.forEach((language) => {
            if (language.lang === lang) {
                language.active = true;
                this.language = language;
            }
            else {
                language.active = false;
            }
        });
        this.translationService.setLanguage(lang);
        this.setLanguage(lang);
    }
    setNewLanguageRefresh(lang) {
        this.translationService.setLanguage(lang);
        this.oldLang = this.translationService.getSelectedLanguage();
        this.sub$.sink = this.translationService
            .setLanguage(lang)
            .subscribe((response) => {
            this.setLanguageWithRefreshNew(response['LANGUAGE']);
        });
    }
    setLanguage(currentLang) {
        if (currentLang == 'ar') {
            this.setDynamicStyleMain(`main-style`, currentLang);
            this.setDynamicStyleMain(`common-style`, currentLang);
            this.setDynamicStyleBootstrap(`boostrap-style`, currentLang);
        }
        else {
            this.setDynamicStyleMain('main-style', '');
            this.setDynamicStyleMain('common-style', '');
            this.setDynamicStyleBootstrap(`boostrap-style`, '');
        }
    }
    setDynamicStyleBootstrap(styleName, lang) {
        const head = this.document.getElementsByTagName('head')[0];
        let themeLink = this.document.getElementById(`${styleName}`);
        if (themeLink) {
            if (lang) {
                themeLink.href = "bootstrap-rtl-style.css";
            }
            else {
                themeLink.href = "bootstrap-style.css";
            }
        }
        else {
            const style = this.document.createElement('link');
            style.id = `${styleName}`;
            style.rel = 'stylesheet';
            style.href = lang ? `bootstrap-rtl-style.css` : `bootstrap-style.css`;
            head.appendChild(style);
        }
    }
    setDynamicStyleMain(styleName, lang) {
        const head = this.document.getElementsByTagName('head')[0];
        let themeLink = this.document.getElementById(`${styleName}`);
        if (themeLink) {
            if (lang) {
                themeLink.href = styleName + "-ar.css";
            }
            else {
                themeLink.href = styleName + ".css";
            }
        }
        else {
            const style = this.document.createElement('link');
            style.id = `${styleName}`;
            style.rel = 'stylesheet';
            style.href = lang ? `${styleName}-ar.css` : `${styleName}.css`;
            head.appendChild(style);
        }
    }
    removedDynamicStyleMain(styleName) {
        const style = this.document.getElementById(styleName);
        if (style) {
            this.document.removeChild(style);
        }
    }
    setTopLogAndName() {
        this.sub$.sink = this.securityService.securityObject$.subscribe((c) => {
            if (c) {
                this.appUserAuth = c;
                if (this.appUserAuth.profilePhoto) {
                    this.profilePath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + this.appUserAuth.profilePhoto;
                }
            }
        });
    }
    onLogout() {
        this.signalrService.logout(this.appUserAuth.id);
        this.securityService.logout();
        this.router.navigate(['/login']);
    }
    onMyProfile() {
        this.router.navigate(['/my-profile']);
    }
    togglediv() {
        if (this.lead.className === 'toggled') {
            this.lead.className = '';
        }
        else {
            this.lead.className = 'toggled';
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_3__.SecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_signalr_service__WEBPACK_IMPORTED_MODULE_4__.SignalrService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_5__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, inputs: { lead: "lead" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]], decls: 70, vars: 39, consts: [[1, "topbar"], [1, "navbar", "header-nav", "navbar-expand-lg", "navbar-custom"], [1, "topbar-left"], [1, "logo", 3, "routerLink"], ["src", "assets/images/logo.png", "alt", "logo-large", "class", "logo-lg", 4, "ngIf"], ["alt", "logo-large", "class", "logo-lg", 3, "src", 4, "ngIf"], [1, "form-row", "align-items-center", "ml-2"], [1, "col-md-auto", "col-auto"], [1, "hamburger", "cursor-pointer", 3, "click"], [1, "line"], [1, "col-md-auto", "col-auto", "ml-2"], [1, "dropdown"], ["class", "btn blue-btn btn-sm", "type", "button", "id", "dropdownMenu2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 4, "hasClaim"], ["aria-labelledby", "dropdownMenu2", 1, "dropdown-menu"], ["class", "dropdown-item p-2 no-unserline", "type", "button", 4, "hasClaim"], ["class", "btn blue-btn btn-sm m-right-10", 3, "display-none", "routerLink", 4, "hasClaim"], [1, "col-md-auto", "col-auto", "ml-3", "d-block", "d-md-none"], [1, "notification-area"], [1, "far", "fa-bell", "fs-24"], [1, "noti-count"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon", "hamburger", 2, "margin-top", "-10px"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "list-unstyled", "topbar-nav", "ml-auto", "topbar-nav-right", "mb-0", "float-right", "hide-when-toogle"], [1, "nav-item", "dropdown"], ["href", "#", "data-toggle", "dropdown", 1, "dropdown-toggle", "nav-link"], ["alt", "language", 1, "contry-flag", "rounded", 3, "src"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "contry-dropdown"], [4, "ngFor", "ngForOf"], [1, "nav-item", "dropdown", "d-none", "d-md-block"], ["data-toggle", "dropdown", 1, "notification-area"], [1, "far", "fa-bell", "fs-20", "text-white"], [1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], [1, "dropdown-item", "dropdown-header"], [1, "dropdown-divider"], ["routerLinkActive", "router-link-active", 1, "dropdown-item", "dropdown-footer", 3, "routerLink"], [1, "nav-item"], [1, "nav-link", "cursor-pointer", 3, "routerLink"], [1, "left-fa-icon"], ["alt", "User Avatar", "class", "user-image mt-1", 3, "src", 4, "ngIf"], [1, "mb-0", "fs-14", "text-capitalize"], ["src", "assets/images/user-profile.jpg", "alt", "User Avatar", "class", "user-image mt-1", 4, "ngIf"], [1, "nav-link", 3, "click"], [1, "fas", "fa-sign-out-alt", "fs-15"], ["src", "assets/images/logo.png", "alt", "logo-large", 1, "logo-lg"], ["alt", "logo-large", 1, "logo-lg", 3, "src"], ["type", "button", "id", "dropdownMenu2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "blue-btn", "btn-sm"], [1, "glyphicon", "glyphicon-plus"], [1, "fa", "fa-plus"], ["type", "button", 1, "dropdown-item", "p-2", "no-unserline"], [3, "routerLink"], [1, "fa", "fa-plus", "ml-1", "blackiconcolor"], [1, "btn", "blue-btn", "btn-sm", "m-right-10", 3, "routerLink"], ["role", "button", 1, "dropdown-item", 3, "click"], [1, "contry-flag", "ml-2", 3, "src"], [1, "dropdown-item", 3, "title"], [1, "fas", "fa-envelope", "mr-2"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "float-right", "text-muted", "text-sm"], [1, "mb-0"], ["alt", "User Avatar", 1, "user-image", "mt-1", 3, "src"], ["src", "assets/images/user-profile.jpg", "alt", "User Avatar", 1, "user-image", "mt-1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, HeaderComponent_img_5_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HeaderComponent_img_6_Template, 1, 1, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_9_listener() { return ctx.togglediv(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "span", 9)(11, "span", 9)(12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 10)(14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, HeaderComponent_button_15_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, HeaderComponent_button_17_Template, 5, 5, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, HeaderComponent_button_18_Template, 5, 5, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, HeaderComponent_button_19_Template, 5, 5, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, HeaderComponent_button_20_Template, 5, 5, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](21, HeaderComponent_button_21_Template, 5, 5, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, HeaderComponent_button_22_Template, 5, 4, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, HeaderComponent_button_23_Template, 3, 7, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 16)(25, "div")(26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 7)(31, "button", 20)(32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "span", 9)(34, "span", 9)(35, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "div", 22)(37, "ul", 23)(38, "li", 24)(39, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, HeaderComponent_ng_container_43_Template, 4, 2, "ng-container", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "li", 29)(45, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "span", 33)(51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, HeaderComponent_div_52_Template, 13, 11, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "li", 36)(57, "a", 37)(58, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](59, HeaderComponent_img_59_Template, 1, 1, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, HeaderComponent_img_62_Template, 1, 0, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "li", 36)(64, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_64_listener() { return ctx.onLogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("display-none", ctx.isFromPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](35, _c10));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.logoImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.logoImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("display-none", ctx.isFromPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("display-none", ctx.isFromPos);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](36, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasClaim", "SO_ADD_SO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasClaim", "PO_ADD_PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasClaim", "CUST_ADD_CUSTOMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasClaim", "SUPP_ADD_SUPPLIER");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasClaim", "PRO_ADD_PRODUCT");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasClaim", "EXP_ADD_EXPENSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hasClaim", "POS_POS");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.notificationCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("src", ctx.language == null ? null : ctx.language.flag, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.language == null ? null : ctx.language.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.notificationCount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.notificationUserList);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](37, _c12));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](55, 31, "SEE_ALL_NOTIFICATIONS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](38, _c13));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.appUserAuth == null ? null : ctx.appUserAuth.profilePhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", ctx.appUserAuth.firstName, " ", ctx.appUserAuth.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !(ctx.appUserAuth == null ? null : ctx.appUserAuth.profilePhoto));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](69, 33, "LOGOUT"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchDefault, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkActive, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_7__.HasClaimDirective, _shared_pipes_date_ago_pipe__WEBPACK_IMPORTED_MODULE_8__.DateAgoPipe, _shared_pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_9__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".txt-blue-report[_ngcontent-%COMP%] {\n  color: #00a2e8;\n}\n\n.bg-blue-report[_ngcontent-%COMP%] {\n  background-color: #00a2e8;\n}\n\n.text-danger[_ngcontent-%COMP%] {\n  color: #e50046 !important;\n}\n\n.contry-flag[_ngcontent-%COMP%] {\n  width: 17px;\n}\n\n.active[_ngcontent-%COMP%] {\n  border: 1px solid #2196f3;\n  background-color: #2196f3;\n  border-radius: 10px;\n}\n\n.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n\nli[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.notification-area[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n}\n\n.notification-area[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #cacaca !important;\n}\n\n.notification-area[_ngcontent-%COMP%]   .noti-count[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 15px;\n  background-color: #e50046;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 600;\n  top: 5px;\n  left: 22px;\n  font-size: 12px;\n  padding: 0px 5px;\n}\n\n.notification-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  height: calc(100vh - 85px);\n  z-index: 2;\n  right: 0;\n  background: #fff;\n  border-radius: 20px 0 0 0;\n  box-shadow: 10px 20px 30px #cacaca;\n  padding: 0;\n  bottom: 0;\n  transition: all 0.5s ease;\n  width: 400px;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .auto-scroll[_ngcontent-%COMP%] {\n  height: calc(100vh - 141px);\n  max-height: calc(100vh - 141px);\n  overflow: auto;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .auto-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n  height: 7px;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .auto-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #fff;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .auto-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #989da2;\n  border-radius: 20px;\n  border: 0;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .auto-scroll[_ngcontent-%COMP%]:root {\n  scrollbar-color: #989da2 #fff !important;\n  scrollbar-width: 7px !important;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .header-area[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  border-radius: 20px 0 0 0;\n  padding: 15px 10px 15px 20px;\n  color: #fff;\n  font-size: 17px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .small-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-left: auto;\n  margin-right: 12px;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  cursor: pointer;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .noti[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f2f2f2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 15px;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .noti[_ngcontent-%COMP%]   .noti-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .read-noti[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-weight: normal !important;\n  color: #707070 !important;\n}\n\n.notification-bar[_ngcontent-%COMP%]   .read-noti[_ngcontent-%COMP%]   .text-black[_ngcontent-%COMP%] {\n  color: #707070 !important;\n}\n\n.icon-ml-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.icon-mr-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  min-width: 30px;\n}\n\n.d-address[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (min-width: 150px) and (max-width: 767px) {\n  .notification-bar[_ngcontent-%COMP%] {\n    width: 100%;\n    height: calc(100vh - 105px);\n  }\n  .icon-ml-10[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n\n.waves-effect[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.button-menu-mobile[_ngcontent-%COMP%] {\n  border: none;\n  color: #ffffff;\n  width: auto;\n  float: right;\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.button-menu-mobile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 53px;\n  color: #b5b5b5;\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  height: auto;\n  width: auto;\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b5b5b5;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.logo-lg[_ngcontent-%COMP%] {\n  max-height: 43px;\n}\n\n.navbar-custom[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 0;\n  margin-left: 0;\n  min-height: 55px;\n  position: relative;\n  box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.05);\n}\n\n.navbar-custom[_ngcontent-%COMP%]   .topbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.navbar-custom[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n  color: #000 !important;\n  line-height: 53px;\n  max-height: 55px;\n}\n\n.topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #565e66;\n  cursor: pointer;\n  border-right: 0;\n  padding: 0;\n  margin-left: 5px;\n  margin-top: 9px;\n}\n\n.topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n  line-height: 32px;\n  margin-top: 0;\n}\n\n.topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:last-child {\n  padding-right: 20px;\n}\n\n.topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #2196f3;\n  border-radius: 10px;\n}\n\n.topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%], .topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .la[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n  margin-right: 10px;\n}\n\n.topbar-nav-right[_ngcontent-%COMP%]   .left-fa-icon[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0px 5px 0 0;\n}\n\n.topbar-nav-right[_ngcontent-%COMP%]   .right-fa-icon[_ngcontent-%COMP%] {\n  float: right;\n  padding: 0 0 0 8px;\n}\n\n.list-unstyled[_ngcontent-%COMP%] {\n  padding-left: 0;\n  list-style: none;\n}\n\n.app-search[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 0;\n  margin-left: 0;\n  color: #565e66;\n  padding-left: 5px;\n}\n\n.app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: #efefef;\n  height: 40px;\n  color: #565e66;\n  padding-left: 20px;\n  padding-right: 40px;\n  background: #efefef;\n  box-shadow: none;\n  border-radius: 50px;\n  width: 300px;\n  text-indent: 20px;\n}\n\n.app-search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 10px;\n  display: block;\n  height: 40px;\n  line-height: 40px;\n  font-size: 20px;\n  width: 34px;\n  text-align: center;\n  border-radius: 50%;\n  color: #565e66;\n  transform: rotate(280deg);\n}\n\n.app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2196f3;\n  box-shadow: none;\n}\n\n.dropdown-menu-lg[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 10px;\n  border: 0;\n}\n\n.hamburger[_ngcontent-%COMP%] {\n  display: inline-block;\n  left: 0px;\n  position: relative;\n  top: 3px;\n  transition: all 0.3s ease-in-out 0s;\n  width: 26px;\n  z-index: 999;\n}\n\n.hamburger[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background: #000;\n  display: block;\n  height: 3px;\n  border-radius: 3px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n  margin-left: auto;\n  transition: all 0.3s ease-in-out;\n}\n\n.hamburger[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(1) {\n  width: 20px;\n}\n\n.hamburger[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(2) {\n  width: 26px;\n}\n\n.hamburger[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]:nth-child(3) {\n  width: 22px;\n}\n\n.hamburger[_ngcontent-%COMP%]:hover   .line[_ngcontent-%COMP%] {\n  width: 26px;\n}\n\n.nav-header[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background: #2196f3 !important;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n}\n\n.avatar[_ngcontent-%COMP%] {\n  font-size: 15px;\n  display: inline-flex;\n  width: 48px;\n  height: 48px;\n  color: #ffffff;\n  border-radius: 0.375rem;\n  align-items: center;\n  justify-content: center;\n}\n\n.avatar-sm[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 36px;\n  height: 36px;\n}\n\n.avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  object-fit: cover;\n  border: 1px solid #f0f1f5;\n}\n\n.change-password-dialog[_ngcontent-%COMP%] {\n  width: 500px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@media (min-width: 150px) and (max-width: 1366px) {\n  .topbar[_ngcontent-%COMP%]   .topbar-left[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    width: 250px;\n  }\n  .toggled[_ngcontent-%COMP%]   .topbar[_ngcontent-%COMP%] {\n    left: -250px !important;\n    transition: all 0.5s ease;\n  }\n}\n\n@media (min-width: 993px) and (max-width: 1191px) {\n  .topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 992px) {\n  .topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-right: none;\n    display: block;\n    flex: 0 1 auto;\n    list-style-type: none;\n  }\n  .list-unstyled[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: stretch;\n    justify-content: space-between;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n  .app-search[_ngcontent-%COMP%] {\n    width: 99%;\n  }\n  .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n    width: 100%;\n    border-radius: 0;\n  }\n  .navbar-custom[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    background: #fff;\n    box-shadow: 0px 10px 30px 0px rgba(82, 63, 105, 0.05);\n    padding: 10px;\n  }\n  .navbar-collapse[_ngcontent-%COMP%]   .list-unstyled[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .navbar-toggler[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .navbar-custom[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .navbar-nav[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .nav-link[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    width: max-content;\n  }\n  .user-pic-sm[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    margin-left: 15px;\n  }\n  .notification-count[_ngcontent-%COMP%] {\n    padding: 1px 3px 2px;\n    line-height: 10px;\n    font-size: 8px;\n  }\n  .topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    border-right: none;\n    padding: 0;\n    width: 100%;\n  }\n  .topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .topbar-nav-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:last-child {\n    padding-right: 10px;\n  }\n}\n\n.user-image[_ngcontent-%COMP%] {\n  float: left;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  margin-right: 10px;\n  margin-top: -2px;\n}\n\n.contry-dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  border-radius: 0px !important;\n  margin-left: 0px !important;\n}\n\n.blackiconcolor[_ngcontent-%COMP%] {\n  color: #2196f3;\n}\n\n.no-unserline[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.display-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxjb2xvci5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQUIlMjBQT1NcXEZyb250ZW5kXFxzcmNcXGFwcFxcY29yZVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVBO0VBQ0ksY0FBQTtBQ3BFSjs7QUR1RUE7RUFDSSx5QkFBQTtBQ3BFSjs7QUR1RUE7RUFDSSx5QkFBQTtBQ3BFSjs7QUNUQTtFQUNJLFdBQUE7QURZSjs7QUNUQTtFQUNJLHlCQUFBO0VBQ0EseUJGUFc7RUVRWCxtQkFBQTtBRFlKOztBQ1hJO0VBQ0ksc0JBQUE7QURhUjs7QUNUQTtFQUNJLGFBQUE7QURZSjs7QUNUQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FEWUo7O0FDWEk7RUFDSSx5QkFBQTtBRGFSOztBQ1hJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRi9CSztFRWdDTCxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURhUjs7QUNUQTtFQXNCSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBSUEseUJBQUE7RUFDQSxZQUFBO0FEVEo7O0FDekJJO0VBQ0ksMkJBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUQyQlI7O0FDekJJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7QUQyQlI7O0FDekJJO0VBQ0ksZ0JBQUE7QUQyQlI7O0FDekJJO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUQyQlI7O0FDekJJO0VBQ0ksd0NBQUE7RUFDQSwrQkFBQTtBRDJCUjs7QUNYSTtFQUNJLHlCRmpGTztFRWtGUCx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRGFSOztBQ1hJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURhUjs7QUNYSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FEYVI7O0FDWEk7RUFDSSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QURhUjs7QUNYWTtFQUNJLGtCQUFBO0FEYWhCOztBQ1JRO0VBQ0ksOEJBQUE7RUFDQSx5QkFBQTtBRFVaOztBQ1JRO0VBQ0kseUJBQUE7QURVWjs7QUNMQTtFQUNJLGlCQUFBO0FEUUo7O0FDTEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QURRSjs7QUNMQTtFQUNJLDBCQUFBO0FEUUo7O0FDTEE7RUFDSTtJQUNJLFdBQUE7SUFDQSwyQkFBQTtFRFFOO0VDTkU7SUFDSSxjQUFBO0VEUU47QUFDRjs7QUNMQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUdBLGlCQUFBO0VBQ0Esd0NBQUE7QURPSjs7QUNKQTtFQUNJLFlBQUE7RUFDQSxjRjdHUztFRThHVCxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBRE9KOztBQ05JO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0ZuSFM7QUMySGpCOztBQ0pBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QURPSjs7QUNOSTtFQUNJLGNGM0hTO0FDbUlqQjs7QUNKQTtFQUNJLGFBQUE7QURPSjs7QUNKQTtFQUNJLGdCQUFBO0FET0o7O0FDSkE7RUFDSSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0FET0o7O0FDTkk7RUFDSSxXQUFBO0FEUVI7O0FDTkk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRFFSOztBQ0hJO0VBQ0ksY0Y1TEk7RUU2TEosZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FETVI7O0FDTFE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBRE9aOztBQ05ZO0VBQ0ksbUJBQUE7QURRaEI7O0FDTFE7RUFDSSx5QkY5Tkc7RUUrTkgsbUJBQUE7QURPWjs7QUNOWTs7O0VBR0ksV0FBQTtBRFFoQjs7QUNKSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QURNUjs7QUNKSTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtBRE1SOztBQ0pJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FETVI7O0FDRkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QURLSjs7QUNGQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxjRjNPUTtFRTRPUixpQkFBQTtBREtKOztBQ0pJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0ZoUEk7RUVpUEosa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRE1SOztBQ0pJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRnJRSTtFRXNRSix5QkFBQTtBRE1SOztBQ0pJO0VBQ0kscUJGNVJPO0VFNlJQLGdCQUFBO0FETVI7O0FDRkE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FES0o7O0FDRkE7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FES0o7O0FDRkE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLGdDQUFBO0FES0o7O0FDRkE7RUFDSSxXQUFBO0FES0o7O0FDRkE7RUFDSSxXQUFBO0FES0o7O0FDRkE7RUFDSSxXQUFBO0FES0o7O0FDRkE7RUFDSSxXQUFBO0FES0o7O0FDRkE7RUFDSSw4QkFBQTtBREtKOztBQ0ZBO0VBQ0ksNkJBQUE7QURLSjs7QUNGQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0Z6U1M7RUUwU1QsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FES0o7O0FDRkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURLSjs7QUNGQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBREtKOztBQ0ZBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QURLSjs7QUNGQTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0VESVY7RUNERTtJQUNJLHVCQUFBO0lBQ0EseUJBQUE7RURHTjtBQUNGOztBQ0FBO0VBRVE7SUFDSSxVQUFBO0VEQ1Y7QUFDRjs7QUNHQTtFQUVRO0lBQ0ksa0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtJQUNBLHFCQUFBO0VERlY7RUNLRTtJQUNJLGFBQUE7SUFDQSxvQkFBQTtJQUNBLDhCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0VESE47RUNLRTtJQUNJLFVBQUE7RURITjtFQ0lNOztJQUVJLFdBQUE7SUFDQSxnQkFBQTtFREZWO0VDS0U7SUFDSSxnQkFBQTtFREhOO0FBQ0Y7O0FDTUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EscURBQUE7SUFDQSxhQUFBO0VESk47RUNLTTtJQUNJLGFBQUE7RURIVjtFQ01FO0lBQ0ksZUFBQTtFREpOO0VDTUU7SUFDSSxVQUFBO0VESk47RUNNRTtJQUNJLGdCQUFBO0VESk47RUNNRTtJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7RURKTjtFQ01FO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtFREpOO0VDU0U7SUFDSSxvQkFBQTtJQUNBLGlCQUFBO0lBQ0EsY0FBQTtFRFBOO0VDVU07SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0VEUlY7RUNTVTtJQUNJLFVBQUE7RURQZDtFQ1FjO0lBQ0ksbUJBQUE7RURObEI7QUFDRjs7QUNZQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRFZKOztBQ2NJO0VBQ0ksNkJBQUE7RUFDQSwyQkFBQTtBRFhSOztBQ2VBO0VBQ0ksY0FBQTtBRFpKOztBQ2dCSztFQUNHLHFCQUFBO0FEYlI7O0FDaUJBO0VBQ0ksd0JBQUE7QURkSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHJpbWFyeS1ibHVlOiAjMjE5NmYzO1xyXG4kZGFuZ2VyLXJlZDogI2U1MDA0NjtcclxuJGJsYWNrOiAjMjEyNTI5O1xyXG4kZ3JheTogIzU2NWU2NjtcclxuJGxpZ2h0LWdyYXk6ICNiNGI0YjQ7XHJcbiRncmVlbjogIzE2OWM2OTtcclxuJGJvZHktYmc6ICNmOWY5Zjk7XHJcbiRnb2xkZW46ICNiMjZlMDc7XHJcbiR3YXJuaW5nOiAjZmZlMTc4O1xyXG4kdmlvbGV0OiAjNzE1ZWRmO1xyXG4kcGluazogI2VlNmI2ZTtcclxuJHdoaXRlOiAjZmZmO1xyXG4kYWN0aXZlLW1lbnU6ICMwNDhhZjg7XHJcbi8vdGV4dFxyXG4kcHJpbWFyeTogIzIxOTZmMztcclxuJHRleHQtcHJpbWFyeTogIzFlYWFlNztcclxuJHByaW1hcnktdGV4dDogIzFlYWFlNztcclxuJGRhbmdlci10ZXh0OiAjZTUwMDQ2O1xyXG4kYmxhY2stdGV4dDogIzIxMjUyOTtcclxuJGdyYXktdGV4dDogIzU2NWU2NjtcclxuJGxpZ2h0LWdyYXktdGV4dDogI2I0YjRiNDtcclxuJGdyZWVuLXRleHQ6ICMxNjljNjk7XHJcbiRnb2xkZW4tdGV4dDogI2IyNmUwNztcclxuJGJvcmRlci1saWdodGdyYXk6ICNmMGYxZjU7XHJcbiRib3JkZXItbWVkaXVtZ3JheTogI2UxZTRlYztcclxuLy9ib3JkZXJcclxuJHByaW1hcnktdGV4dDogIzFlYWFlNztcclxuJGRhbmdlci10ZXh0OiAjZTUwMDQ2O1xyXG4kbGlnaHQtZ3JheS10ZXh0OiAjYjRiNGI0O1xyXG4kYnJhbmQtYmc6ICNlNTAwNDY7XHJcbiR3aGl0ZS1iZzogI2ZmZmZmZjtcclxuJHByaW1hcnktYmc6ICMyZjM4NDg7XHJcbiRsaWdodC1ncmVlbjogIzhkZDlhNTtcclxuJGdyYXktYmc6ICM3ZjdmN2Y7XHJcbiRsaWdodGdyYXktYmc6ICNmMWY1ZmE7XHJcbiR0ZWFsLWJnOiAjMzZiZWJjO1xyXG4kbGV0Z3JlZW4tYmc6ICM5ZGJhNGM7XHJcbiRza3libHVlLWJnOiAjZGJmMGZkO1xyXG4kbGlnaHRibHVlLWJnOiAjMDA4MGJiO1xyXG4kc2lsdmVyLWJnOiAjZThlOWVjO1xyXG4kb3JhbmdlLWJnOiAjZGQ5NDI3O1xyXG4kZ3JpZC1oZWFkZXItYmc6ICNmYWZhZmM7XHJcbiRzaWRlYmFyLWJnOiAjZTllY2VmO1xyXG4kYnRuLWJsdWU6ICM0NjhiYzQ7XHJcbiRjb2xvci1wcmltYXJ5OiAjNzA5MmJlO1xyXG4vL3RleHQtY29sb3JzXHJcbiR0ZXh0LXNlY29uZGFyeTogIzY5NmQ3NztcclxuJHRleHQtbXV0ZWQ6ICM4MjhhYTA7XHJcbiRibGFjazogIzAwMDAwMDtcclxuJHRleHQtZ3JlZW46ICM2YWQyOTY7XHJcbiR0ZXh0LXdoaXRlOiAjZmZmZmZmO1xyXG4kdGV4dC1ncmF5OiAjOTQ5NDk0O1xyXG4kdGV4dC1saWdodGdyYXk6ICNiNWI1YjU7XHJcbiR0ZXh0LXRlYWw6ICMzNWI3YjY7XHJcbiR0ZXh0LXJlZDogI2U1MDA0NjtcclxuJHRleHQtYmx1ZTogYmx1ZTtcclxuJGljb24tY29sb3I6ICNhNWFiYjk7XHJcbiRncmlkLWZvbnQtY29sb3I6ICMzNzQ2NjQ7XHJcbiR0ZXh0LWRhcmtibHVlOiAjNDQ3MTk4O1xyXG4vLy8vYm9yZGVycy1jb2xvcnNcclxuJGJvcmRlci1kYXJrZ3JheTogI2I2YmFjNDtcclxuJGJvcmRlci13aGl0ZTogI2ZmZjtcclxuJGJvcmRlci1kYXJrZXN0Z3JheTogIzdmN2Y3ZjtcclxuJGJvcmRlci1za3libHVlOiAjYzVkZmYwO1xyXG4kYm9yZGVyLWdyZWVuOiAjMTY5YzY5O1xyXG4kYm9yZGVyLXJlZDogI2U1MDA0NjtcclxuJGJvcmRlci1zaWx2ZXI6ICNlOGU5ZWM7XHJcbiRib3JkZXItYXNzZXRzOiAjNjg3ODhhO1xyXG4kYm9yZGVyLWdyaWQ6ICNlZGVmZjY7XHJcbi50eHQtYmx1ZS1yZXBvcnQge1xyXG4gICAgY29sb3I6ICMwMGEyZTg7XHJcbn1cclxuXHJcbi5iZy1ibHVlLXJlcG9ydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMmU4O1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6ICRkYW5nZXItdGV4dCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi50eHQtYmx1ZS1yZXBvcnQge1xuICBjb2xvcjogIzAwYTJlODtcbn1cblxuLmJnLWJsdWUtcmVwb3J0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTJlODtcbn1cblxuLnRleHQtZGFuZ2VyIHtcbiAgY29sb3I6ICNlNTAwNDYgIWltcG9ydGFudDtcbn1cblxuLmNvbnRyeS1mbGFnIHtcbiAgd2lkdGg6IDE3cHg7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjE5NmYzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxubGk6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubm90aWZpY2F0aW9uLWFyZWEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5vdGlmaWNhdGlvbi1hcmVhIGkge1xuICBjb2xvcjogI2NhY2FjYSAhaW1wb3J0YW50O1xufVxuLm5vdGlmaWNhdGlvbi1hcmVhIC5ub3RpLWNvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUwMDQ2O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiAyMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG5cbi5ub3RpZmljYXRpb24tYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4NXB4KTtcbiAgei1pbmRleDogMjtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDA7XG4gIGJveC1zaGFkb3c6IDEwcHggMjBweCAzMHB4ICNjYWNhY2E7XG4gIHBhZGRpbmc6IDA7XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIHdpZHRoOiA0MDBweDtcbn1cbi5ub3RpZmljYXRpb24tYmFyIC5hdXRvLXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE0MXB4KTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE0MXB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4ubm90aWZpY2F0aW9uLWJhciAuYXV0by1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG59XG4ubm90aWZpY2F0aW9uLWJhciAuYXV0by1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5ub3RpZmljYXRpb24tYmFyIC5hdXRvLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ZGEyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDA7XG59XG4ubm90aWZpY2F0aW9uLWJhciAuYXV0by1zY3JvbGw6cm9vdCB7XG4gIHNjcm9sbGJhci1jb2xvcjogIzk4OWRhMiAjZmZmICFpbXBvcnRhbnQ7XG4gIHNjcm9sbGJhci13aWR0aDogN3B4ICFpbXBvcnRhbnQ7XG59XG4ubm90aWZpY2F0aW9uLWJhciAuaGVhZGVyLWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDAgMCAwO1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAyMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubm90aWZpY2F0aW9uLWJhciAuc21hbGwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5ub3RpZmljYXRpb24tYmFyIC5jbG9zZS1pY29uIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLWJhciAubm90aSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjJmMmYyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5ub3RpZmljYXRpb24tYmFyIC5ub3RpIC5ub3RpLXRleHQgZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLm5vdGlmaWNhdGlvbi1iYXIgLnJlYWQtbm90aSBkaXYge1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNzA3MDcwICFpbXBvcnRhbnQ7XG59XG4ubm90aWZpY2F0aW9uLWJhciAucmVhZC1ub3RpIC50ZXh0LWJsYWNrIHtcbiAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcbn1cblxuLmljb24tbWwtMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmljb24tbXItMTAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cblxuLmQtYWRkcmVzczpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTUwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubm90aWZpY2F0aW9uLWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xuICB9XG4gIC5pY29uLW1sLTEwIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLndhdmVzLWVmZmVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idXR0b24tbWVudS1tb2JpbGUge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogYXV0bztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ1dHRvbi1tZW51LW1vYmlsZSBpIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogNTNweDtcbiAgY29sb3I6ICNiNWI1YjU7XG59XG5cbi5uYXZiYXItdG9nZ2xlci1pY29uIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cbi5uYXZiYXItdG9nZ2xlci1pY29uIGkge1xuICBjb2xvcjogI2I1YjViNTtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxvZ28tbGcge1xuICBtYXgtaGVpZ2h0OiA0M3B4O1xufVxuXG4ubmF2YmFyLWN1c3RvbSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtaW4taGVpZ2h0OiA1NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoODIsIDYzLCAxMDUsIDAuMDUpO1xufVxuLm5hdmJhci1jdXN0b20gLnRvcGJhci1uYXYgbGkge1xuICBmbG9hdDogbGVmdDtcbn1cbi5uYXZiYXItY3VzdG9tIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDUzcHg7XG4gIG1heC1oZWlnaHQ6IDU1cHg7XG59XG5cbi50b3BiYXItbmF2LXJpZ2h0IGxpIHtcbiAgY29sb3I6ICM1NjVlNjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG4udG9wYmFyLW5hdi1yaWdodCBsaSAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAwIDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLnRvcGJhci1uYXYtcmlnaHQgbGkgLm5hdi1saW5rOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnRvcGJhci1uYXYtcmlnaHQgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnRvcGJhci1uYXYtcmlnaHQgbGk6aG92ZXIgLm5hdi1saW5rLFxuLnRvcGJhci1uYXYtcmlnaHQgbGk6aG92ZXIgc3Bhbixcbi50b3BiYXItbmF2LXJpZ2h0IGxpOmhvdmVyIC5sYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnRvcGJhci1uYXYtcmlnaHQgbGk6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnRvcGJhci1uYXYtcmlnaHQgLmxlZnQtZmEtaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAwcHggNXB4IDAgMDtcbn1cbi50b3BiYXItbmF2LXJpZ2h0IC5yaWdodC1mYS1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiAwIDAgMCA4cHg7XG59XG5cbi5saXN0LXVuc3R5bGVkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uYXBwLXNlYXJjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBjb2xvcjogIzU2NWU2NjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWZlZmVmO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjNTY1ZTY2O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICB0ZXh0LWluZGVudDogMjBweDtcbn1cbi5hcHAtc2VhcmNoIGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogIzU2NWU2NjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjgwZGVnKTtcbn1cbi5hcHAtc2VhcmNoIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1tZW51LWxnIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAwO1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICB3aWR0aDogMjZweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uaGFtYnVyZ2VyIC5saW5lIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5oYW1idXJnZXIgLmxpbmU6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5oYW1idXJnZXIgLmxpbmU6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDI2cHg7XG59XG5cbi5oYW1idXJnZXIgLmxpbmU6bnRoLWNoaWxkKDMpIHtcbiAgd2lkdGg6IDIycHg7XG59XG5cbi5oYW1idXJnZXI6aG92ZXIgLmxpbmUge1xuICB3aWR0aDogMjZweDtcbn1cblxuLm5hdi1oZWFkZXIgLmhhbWJ1cmdlciAubGluZSB7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjMgIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtY2lyY2xlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYXZhdGFyLXNtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4uYXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMWY1O1xufVxuXG4uY2hhbmdlLXBhc3N3b3JkLWRpYWxvZyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNTBweCkgYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAudG9wYmFyIC50b3BiYXItbGVmdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAudG9nZ2xlZCAudG9wYmFyIHtcbiAgICBsZWZ0OiAtMjUwcHggIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxMTkxcHgpIHtcbiAgLnRvcGJhci1uYXYtcmlnaHQgbGkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC50b3BiYXItbmF2LXJpZ2h0IGxpIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIC5saXN0LXVuc3R5bGVkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuYXBwLXNlYXJjaCB7XG4gICAgd2lkdGg6IDk5JTtcbiAgfVxuICAuYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sLFxuLmFwcC1zZWFyY2ggLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAubmF2YmFyLWN1c3RvbSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDMwcHggMHB4IHJnYmEoODIsIDYzLCAxMDUsIDAuMDUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLm5hdmJhci1jb2xsYXBzZSAubGlzdC11bnN0eWxlZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAubmF2YmFyLWN1c3RvbSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAubmF2YmFyLW5hdiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAubmF2LWxpbmsge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICB9XG4gIC51c2VyLXBpYy1zbSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuICAubm90aWZpY2F0aW9uLWNvdW50IHtcbiAgICBwYWRkaW5nOiAxcHggM3B4IDJweDtcbiAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDhweDtcbiAgfVxuICAudG9wYmFyLW5hdi1yaWdodCBsaSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRvcGJhci1uYXYtcmlnaHQgbGkgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC50b3BiYXItbmF2LXJpZ2h0IGxpIC5uYXYtbGluazpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG59XG4udXNlci1pbWFnZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbn1cblxuLmNvbnRyeS1kcm9wZG93biBsaTpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ibGFja2ljb25jb2xvciB7XG4gIGNvbG9yOiAjMjE5NmYzO1xufVxuXG4ubm8tdW5zZXJsaW5lIDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmRpc3BsYXktbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9jb2xvci5zY3NzXCI7XHJcbi5jb250cnktZmxhZyB7XHJcbiAgICB3aWR0aDogMTdweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1ibHVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5saTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWFyZWEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAjY2FjYWNhICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubm90aS1jb3VudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhbmdlci1yZWQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgIGxlZnQ6IDIycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24tYmFyIHtcclxuICAgIC5hdXRvLXNjcm9sbCB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQxcHgpO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDFweCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYXV0by1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgfVxyXG4gICAgLmF1dG8tc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIC5hdXRvLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ODlkYTI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICB9XHJcbiAgICAuYXV0by1zY3JvbGw6cm9vdCB7XHJcbiAgICAgICAgc2Nyb2xsYmFyLWNvbG9yOiAjOTg5ZGEyICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBzY3JvbGxiYXItd2lkdGg6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gODVweCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMDtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMjBweCAzMHB4ICNjYWNhY2E7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAuaGVhZGVyLWFyZWEge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWJsdWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgLnNtYWxsLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuY2xvc2UtaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5ub3RpIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YyZjJmMjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgICAgICAubm90aS10ZXh0IHtcclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWFkLW5vdGkge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYmxhY2sge1xyXG4gICAgICAgICAgICBjb2xvcjogIzcwNzA3MCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmljb24tbWwtMTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uLW1yLTEwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1pbi13aWR0aDogMzBweDtcclxufVxyXG5cclxuLmQtYWRkcmVzczpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ub3RpZmljYXRpb24tYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDVweCk7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1tbC0xMCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53YXZlcy1lZmZlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnV0dG9uLW1lbnUtbW9iaWxlIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAkdGV4dC13aGl0ZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUzcHg7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0LWxpZ2h0Z3JheTtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBpIHtcclxuICAgICAgICBjb2xvcjogJHRleHQtbGlnaHRncmF5O1xyXG4gICAgfVxyXG59XHJcblxyXG5idXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmxvZ28tbGcge1xyXG4gICAgbWF4LWhlaWdodDogNDNweDtcclxufVxyXG5cclxuLm5hdmJhci1jdXN0b20ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDU1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IDBweCByZ2IoODIgNjMgMTA1IC8gNSUpO1xyXG4gICAgLnRvcGJhci1uYXYgbGkge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDAuNzVyZW07XHJcbiAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTNweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9wYmFyLW5hdi1yaWdodCB7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgY29sb3I6ICRncmF5LXRleHQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMC43NXJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1ibHVlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAubmF2LWxpbmssXHJcbiAgICAgICAgICAgIHNwYW4sXHJcbiAgICAgICAgICAgIC5sYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxpOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubGVmdC1mYS1pY29uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggNXB4IDAgMDtcclxuICAgIH1cclxuICAgIC5yaWdodC1mYS1pY29uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdC11bnN0eWxlZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uYXBwLXNlYXJjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgY29sb3I6ICRncmF5LXRleHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2VmZWZlZjtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgY29sb3I6ICRncmF5LXRleHQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICB0ZXh0LWluZGVudDogMjBweDtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgY29sb3I6ICRncmF5LXRleHQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjgwZGVnKTtcclxuICAgIH1cclxuICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHByaW1hcnktYmx1ZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS1sZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLmhhbWJ1cmdlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDNweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIC5saW5lIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5oYW1idXJnZXIgLmxpbmU6bnRoLWNoaWxkKDEpIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyIC5saW5lOm50aC1jaGlsZCgyKSB7XHJcbiAgICB3aWR0aDogMjZweDtcclxufVxyXG5cclxuLmhhbWJ1cmdlciAubGluZTpudGgtY2hpbGQoMykge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbn1cclxuXHJcbi5oYW1idXJnZXI6aG92ZXIgLmxpbmUge1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbn1cclxuXHJcbi5uYXYtaGVhZGVyIC5oYW1idXJnZXIgLmxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktYmx1ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucm91bmRlZC1jaXJjbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGNvbG9yOiAkdGV4dC13aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYXZhdGFyLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG59XHJcblxyXG4uYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmNoYW5nZS1wYXNzd29yZC1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE1MHB4KSBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAudG9wYmFyIHtcclxuICAgICAgICAudG9wYmFyLWxlZnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9nZ2xlZCAudG9wYmFyIHtcclxuICAgICAgICBsZWZ0OiAtMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkzcHgpIGFuZCAobWF4LXdpZHRoOiAxMTkxcHgpIHtcclxuICAgIC50b3BiYXItbmF2LXJpZ2h0IHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnRvcGJhci1uYXYtcmlnaHQge1xyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxleDogMCAxIGF1dG87XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdC11bnN0eWxlZCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuYXBwLXNlYXJjaCB7XHJcbiAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgICAuZm9ybS1jb250cm9sLFxyXG4gICAgICAgIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLWN1c3RvbSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAzMHB4IDBweCByZ2IoODIgNjMgMTA1IC8gNSUpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgLmxpc3QtdW5zdHlsZWQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jdXN0b20ge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgICAudXNlci1waWMtc20ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAvLyAudG9nZ2xlZCAuaGlkZS13aGVuLXRvb2dsZSB7XHJcbiAgICAvLyAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAvLyB9XHJcbiAgICAubm90aWZpY2F0aW9uLWNvdW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxcHggM3B4IDJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgIH1cclxuICAgIC50b3BiYXItbmF2LXJpZ2h0IHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci1pbWFnZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5cclxuLmNvbnRyeS1kcm9wZG93biB7XHJcbiAgICBsaTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYmxhY2tpY29uY29sb3Ige1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbn1cclxuXHJcbi5uby11bnNlcmxpbmUge1xyXG4gICAgIDpob3ZlciB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGlzcGxheS1ub25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.trigger)('slideInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
                    transform: 'translate3d(0,0,0)',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.state)('out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.style)({
                    transform: 'translate3d(100%, 0, 0)',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('in => out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('400ms ease-in-out')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.transition)('out => in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_15__.animate)('400ms ease-in-out')),
            ]),
        ] } });


/***/ }),

/***/ 72644:
/*!******************************************!*\
  !*** ./src/app/core/header/languages.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Languages": () => (/* binding */ Languages)
/* harmony export */ });
class Languages {
}
Languages.languages = [
    {
        lang: 'en',
        name: 'English',
        flag: '../../../assets/images/flags/united-states.svg',
    },
    {
        lang: 'ar',
        name: 'Arabic ',
        flag: '../../../assets/images/flags/egypt.svg',
    }
    //,
    // {
    //     lang: 'cn',
    //     name: 'Chinese',
    //     flag: '../../../assets/images/flags/china.svg',
    // },
    // {
    //     lang: 'es',
    //     name: 'Spanish ',
    //     flag: '../../../assets/images/flags/france.svg',
    // },
    // {
    //     lang: 'ru',
    //     name: 'Russian',
    //     flag: '../../../assets/images/flags/russia.svg',
    // },
    // {
    //     lang: 'ja',
    //     name: 'Japanese',
    //     flag: '../../../assets/images/flags/japan.svg',
    // },
    // {
    //     lang: 'de',
    //     name: 'German',
    //     flag: '../../../assets/images/flags/germany.png',
    // }, {
    //     lang: 'fr',
    //     name: 'French',
    //     flag: '../../../assets/images/flags/french.png'
    // },
];


/***/ }),

/***/ 21378:
/*!*************************************************!*\
  !*** ./src/app/core/layout/layout.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 43556);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 91229);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 68681);






class LayoutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 8, vars: 1, consts: [[1, "smooth-animation"], ["lead", ""], [3, "lead"], [1, "sidebar"], [1, "content-area"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "router-outlet")(7, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("lead", _r0);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent], styles: [".content-wrapper[_ngcontent-%COMP%]    > .content[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEFCJTIwUE9TXFxGcm9udGVuZFxcc3JjXFxhcHBcXGNvcmVcXGxheW91dFxcbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVyPi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgLjVyZW07XHJcbn0iLCIuY29udGVudC13cmFwcGVyID4gLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 50319:
/*!*********************************************!*\
  !*** ./src/app/core/security/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security.service */ 40130);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 34101);





class AuthGuard {
    constructor(securityService, router, toastr) {
        this.securityService = securityService;
        this.router = router;
        this.toastr = toastr;
    }
    canActivate(next, state) {
        if (this.securityService.isLogin()) {
            let claimType = next.data["claimType"];
            if (claimType) {
                if (!this.securityService.hasClaim(claimType)) {
                    this.toastr.error(`You don't have right to access this page`);
                    this.router.navigate(['/my-profile']);
                    return false;
                }
            }
        }
        else {
            this.router.navigate(['login'], {
                queryParams: { returnUrl: state.url }
            });
            return false;
        }
        return true;
    }
    canActivateChild(next, state) {
        if (this.securityService.isLogin()) {
            let claimType = next.data["claimType"];
            if (claimType) {
                if (!this.securityService.hasClaim(claimType)) {
                    this.toastr.error(`You don't have right to access this page `);
                    return false;
                }
            }
            return true;
        }
        else {
            this.router.navigate(['login'], {
                queryParams: { returnUrl: state.url }
            });
            return false;
        }
    }
    canLoad(route) {
        if (this.securityService.isLogin()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_security_service__WEBPACK_IMPORTED_MODULE_0__.SecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40130:
/*!***************************************************!*\
  !*** ./src/app/core/security/security.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityService": () => (/* binding */ SecurityService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error-handler/common-http-error.service */ 48032);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_clone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/clone.service */ 28265);








class SecurityService {
    constructor(http, commonHttpErrorService, router, clonerService) {
        this.http = http;
        this.commonHttpErrorService = commonHttpErrorService;
        this.router = router;
        this.clonerService = clonerService;
        // securityObject: UserAuth = new UserAuth();
        this._securityObject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this._companyProfile$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
        this.currencyCode = 'USD';
    }
    get companyProfile() {
        return this._companyProfile$;
    }
    get securityObject$() {
        return this._securityObject$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(c => {
            if (c) {
                return c;
            }
            const currenyData = localStorage.getItem('authObj');
            if (currenyData) {
                this._securityObject$.next(JSON.parse(currenyData));
                return JSON.parse(currenyData);
            }
            return null;
        }));
    }
    login(entity) {
        // Initialize security object
        this.resetSecurityObject();
        return this.http.post('authentication', entity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((resp) => {
            localStorage.setItem('authObj', JSON.stringify(resp));
            localStorage.setItem('bearerToken', resp.bearerToken);
            this._securityObject$.next(resp);
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.commonHttpErrorService.handleError));
    }
    isLogin() {
        const authStr = localStorage.getItem('authObj');
        if (authStr)
            return true;
        else
            return false;
    }
    logout() {
        this.resetSecurityObject();
    }
    resetSecurityObject() {
        localStorage.removeItem('authObj');
        localStorage.removeItem('bearerToken');
        this._securityObject$.next(null);
        this.router.navigate(['/login']);
    }
    updateProfile(companyProfile) {
        this.currencyCode = companyProfile.currencyCode;
        if (companyProfile.logoUrl) {
            companyProfile.logoUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${companyProfile.logoUrl}`;
        }
        this._companyProfile$.next(companyProfile);
    }
    updateUserProfile(user) {
        const authObj = JSON.parse(localStorage.getItem('authObj'));
        authObj.firstName = user.firstName;
        authObj.lastName = user.lastName;
        authObj.profilePhoto = user.profilePhoto;
        authObj.phoneNumber = user.phoneNumber;
        localStorage.setItem('authObj', JSON.stringify(authObj));
        this._securityObject$.next(this.clonerService.deepClone(authObj));
    }
    // This method can be called a couple of different ways
    // *hasClaim="'claimType'"  // Assumes claimValue is true
    // *hasClaim="'claimType:value'"  // Compares claimValue to value
    // *hasClaim="['claimType1','claimType2:value','claimType3']"
    // tslint:disable-next-line: typedef
    hasClaim(claimType, claimValue) {
        let ret = false;
        // See if an array of values was passed in.
        if (typeof claimType === 'string') {
            ret = this.isClaimValid(claimType, claimValue);
        }
        else {
            const claims = claimType;
            if (claims) {
                // tslint:disable-next-line: prefer-for-of
                for (let index = 0; index < claims.length; index++) {
                    ret = this.isClaimValid(claims[index]);
                    // If one is successful, then let them in
                    if (ret) {
                        break;
                    }
                }
            }
        }
        return ret;
    }
    isClaimValid(claimType, claimValue) {
        let ret = false;
        let auth = null;
        // Retrieve security object
        const authStr = localStorage.getItem('authObj');
        if (authStr) {
            auth = JSON.parse(authStr);
            // See if the claim type has a value
            // *hasClaim="'claimType:value'"
            if (claimType.indexOf(':') >= 0) {
                const words = claimType.split(':');
                claimType = words[0].toLowerCase();
                claimValue = words[1];
            }
            else {
                claimType = claimType.toLowerCase();
                // Either get the claim value, or assume 'true'
                claimValue = claimValue ? claimValue : 'true';
            }
            // Attempt to find the claim
            ret =
                auth.claims.find((c) => c.claimType && c.claimType.toLowerCase() == claimType && c.claimValue == claimValue) != null;
        }
        return ret;
    }
    getUserDetail() {
        var userJson = localStorage.getItem('authObj');
        return JSON.parse(userJson);
    }
}
SecurityService.ɵfac = function SecurityService_Factory(t) { return new (t || SecurityService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_1__.CommonHttpErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_clone_service__WEBPACK_IMPORTED_MODULE_2__.ClonerService)); };
SecurityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: SecurityService, factory: SecurityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 28265:
/*!************************************************!*\
  !*** ./src/app/core/services/clone.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClonerService": () => (/* binding */ ClonerService)
/* harmony export */ });
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clone */ 75482);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ClonerService {
    deepClone(value) {
        return clone__WEBPACK_IMPORTED_MODULE_0__(value);
    }
}
ClonerService.ɵfac = function ClonerService_Factory(t) { return new (t || ClonerService)(); };
ClonerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClonerService, factory: ClonerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 50690:
/*!*************************************************!*\
  !*** ./src/app/core/services/common.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonService": () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _core_domain_classes_reminder_frequency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/reminder-frequency */ 32760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);
/* harmony import */ var _country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country.service */ 98978);







class CommonService {
    constructor(httpClient, commonHttpErrorService, countryService) {
        this.httpClient = httpClient;
        this.commonHttpErrorService = commonHttpErrorService;
        this.countryService = countryService;
        this._currentUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
    }
    get currentUrl$() {
        return this._currentUrl$.asObservable();
    }
    setCurrentUrl(url) {
        this._currentUrl$.next(url);
    }
    getAllUsers() {
        const url = `user/getAllUsers`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonHttpErrorService.handleError));
    }
    getRoles() {
        const url = `role`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonHttpErrorService.handleError));
    }
    getCountry() {
        return this.countryService.getAll();
    }
    getCityByName(countryName, cityName) {
        const url = `City/country?countryName=${countryName}&&cityName=${cityName}`;
        return this.httpClient.get(url);
    }
    getUsers() {
        const url = `user/GetUsers`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.commonHttpErrorService.handleError));
    }
    getReminderFrequency() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(_core_domain_classes_reminder_frequency__WEBPACK_IMPORTED_MODULE_0__.reminderFrequencies);
    }
    getUserNotificationCount() {
        return this.httpClient.get('user/notification/count');
    }
    getTop10UserNotification() {
        return this.httpClient.get('reminder/notofication/top10');
    }
    sendEmail(sendEmail) {
        return this.httpClient.post('sendEmail/suppliers', sendEmail);
    }
    addReminderSchedule(customReminderScheduler) {
        return this.httpClient.post('ReminderScheduler', customReminderScheduler);
    }
    getReminderSchedulers(moduleReference) {
        const url = `ReminderScheduler/${moduleReference.application}/${moduleReference.referenceId}`;
        return this.httpClient.get(url);
    }
    getProducts() {
        return this.httpClient.get('product/detail');
    }
    getCurrencies() {
        return this.httpClient.get('Currency');
    }
}
CommonService.ɵfac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_1__.CommonHttpErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_country_service__WEBPACK_IMPORTED_MODULE_2__.CountryService)); };
CommonService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: CommonService, factory: CommonService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98978:
/*!**************************************************!*\
  !*** ./src/app/core/services/country.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryService": () => (/* binding */ CountryService)
/* harmony export */ });
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CountryService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase {
    constructor(serviceElementsFactory) {
        super('Country', serviceElementsFactory);
    }
}
CountryService.ɵfac = function CountryService_Factory(t) { return new (t || CountryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory)); };
CountryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CountryService, factory: CountryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65754:
/*!**************************************************!*\
  !*** ./src/app/core/services/signalr.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignalrService": () => (/* binding */ SignalrService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ 53509);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _clone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clone.service */ 28265);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation.service */ 16107);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/security/security.service */ 40130);









class SignalrService {
    constructor(clonerService, toastrService, translationService, securityService) {
        this.clonerService = clonerService;
        this.toastrService = toastrService;
        this.translationService = translationService;
        this.securityService = securityService;
        this.onlineUsers_key = 'onlineuser_key';
        this._onlineUsers = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this._userNotification$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
        this.handleMessage = () => {
            this.hubConnection.on('userLeft', (id) => {
                this.removeUser(id);
            });
            this.hubConnection.on('newOnlineUser', (onlineUser) => {
                this.newOnlineUser(onlineUser);
            });
            this.hubConnection.on('sendNotification', (userId) => {
                this._userNotification$.next(userId);
            });
            this.hubConnection.on('Joined', (onlineUser) => {
            });
            this.hubConnection.on('logout', (onlineUser) => {
                this.removeUser(onlineUser.id);
            });
            this.hubConnection.on('forceLogout', (onlineUser) => {
                this.removeUser(onlineUser.id);
                this.toastrService.error(this.translationService.getValue('ADMIN_LOGOUT_YOU_FORCEFULLY.'));
                this.securityService.logout();
            });
            this.hubConnection.on('onlineUsers', (onlineUsers) => {
                if (onlineUsers.length > 0) {
                    const onlineUsersStr = JSON.stringify(onlineUsers);
                    localStorage.setItem(this.onlineUsers_key, onlineUsersStr);
                    this._onlineUsers.next(onlineUsers);
                }
                else {
                    localStorage.removeItem(this.onlineUsers_key);
                    this._onlineUsers.next(this.clonerService.deepClone([]));
                }
            });
            this.hubConnection.on('sendDM', (message, sender) => {
            });
        };
    }
    get userNotification$() {
        return this._userNotification$.asObservable();
    }
    get connectionId() {
        return this.hubConnection.connectionId;
    }
    get onlineUsers$() {
        return this._onlineUsers.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((c) => {
            if (c && c.length > 0) {
                return c;
            }
            else {
                const onlineUsersStr = localStorage.getItem(this.onlineUsers_key);
                if (onlineUsersStr) {
                    const onlineUser = JSON.parse(onlineUsersStr);
                    this._onlineUsers.next(onlineUser);
                    return onlineUser;
                }
                else {
                    return null;
                }
            }
        }));
    }
    startConnection() {
        return new Promise((resolve, reject) => {
            this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__.HubConnectionBuilder()
                .withUrl(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}userHub`)
                .build();
            this.hubConnection
                .start()
                .then(() => {
                resolve(true);
            })
                .catch(err => {
                reject(false);
            });
        });
    }
    addUser(signalrUser) {
        this.hubConnection.invoke('join', signalrUser)
            .catch(err => console.error(err));
    }
    forceLogout(id) {
        this.hubConnection.invoke('forceLogout', id)
            .catch(err => console.error(err));
    }
    logout(id) {
        localStorage.removeItem(this.onlineUsers_key);
        this._onlineUsers.next([]);
        this.hubConnection.invoke('logout', id)
            .catch(err => console.error(err));
    }
    newOnlineUser(onlineUser) {
        const onlineUsersStr = localStorage.getItem(this.onlineUsers_key);
        const onlineUsers = JSON.parse(onlineUsersStr);
        if (onlineUsers && !onlineUsers.find(c => c.id === onlineUser.id)) {
            onlineUsers.push(onlineUser);
            this._onlineUsers.next(this.clonerService.deepClone(onlineUsers));
        }
        else {
            this._onlineUsers.next(this.clonerService.deepClone([onlineUser]));
        }
    }
    removeUser(id) {
        const onlineUsersStr = localStorage.getItem(this.onlineUsers_key);
        if (onlineUsersStr) {
            const onlineUsers = JSON.parse(onlineUsersStr);
            const filterOnlineUsers = onlineUsers.filter(c => c.id !== id);
            localStorage.removeItem(this.onlineUsers_key);
            if (filterOnlineUsers && filterOnlineUsers.length > 0) {
                localStorage.setItem(this.onlineUsers_key, JSON.stringify(filterOnlineUsers));
                this._onlineUsers.next(this.clonerService.deepClone(filterOnlineUsers));
            }
            else {
                this._onlineUsers.next(this.clonerService.deepClone([]));
            }
        }
        else {
            this._onlineUsers.next(this.clonerService.deepClone([]));
        }
    }
}
SignalrService.ɵfac = function SignalrService_Factory(t) { return new (t || SignalrService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_clone_service__WEBPACK_IMPORTED_MODULE_2__.ClonerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_4__.SecurityService)); };
SignalrService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: SignalrService, factory: SignalrService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 16107:
/*!******************************************************!*\
  !*** ./src/app/core/services/translation.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationService": () => (/* binding */ TranslationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



const LOCALIZATION_LOCAL_STORAGE_KEY = 'language';
class TranslationService {
    constructor(translate) {
        this.translate = translate;
        // Private properties
        this.langIds = [];
        this._lanDir = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('ltr');
    }
    get lanDir$() {
        return this._lanDir.asObservable();
    }
    loadTranslations(...args) {
        const locales = [...args];
        locales.forEach((locale) => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translate.setTranslation(locale.lang, locale.data, true);
            this.langIds.push(locale.lang);
        });
        // add new languages to the list
        this.translate.addLangs(this.langIds);
    }
    setLanguage(lang) {
        try {
            if (lang) {
                localStorage.setItem(LOCALIZATION_LOCAL_STORAGE_KEY, lang);
                if (lang === 'ar') {
                    this._lanDir.next('rtl');
                }
                else {
                    this._lanDir.next('ltr');
                }
                return this.translate.use(lang);
            }
        }
        catch (_a) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
        }
    }
    removeLanguage() {
        try {
            localStorage.removeItem(LOCALIZATION_LOCAL_STORAGE_KEY);
        }
        catch (_a) {
        }
    }
    /**
     * Returns selected language
     */
    getSelectedLanguage() {
        try {
            if (localStorage) {
                return localStorage.getItem(LOCALIZATION_LOCAL_STORAGE_KEY);
            }
            return null;
        }
        catch (_a) {
            return null;
        }
    }
    getValue(key) {
        return this.translate.instant(key);
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
TranslationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TranslationService, factory: TranslationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 68681:
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/has-claim.directive */ 79785);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { "active": a0 }; };
const _c2 = function () { return { exact: true }; };
function SidebarComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c1, ctx_r0.currentUrl == "dashboard"))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, "DASHBOARD"), " ");
} }
function SidebarComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 34)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r1.currentUrl == "product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "PRODUCT"));
} }
const _c3 = function () { return ["/products"]; };
function SidebarComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c4 = function () { return ["/products/add"]; };
function SidebarComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
const _c5 = function () { return ["/product-category"]; };
function SidebarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c5))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "PRODUCT_CATEGORY"));
} }
const _c6 = function () { return ["/tax"]; };
function SidebarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c6))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "TAX"));
} }
const _c7 = function () { return ["/unitConversation"]; };
function SidebarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c7))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "UNIT_CONVERSATION"));
} }
const _c8 = function () { return ["/brand"]; };
function SidebarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c8))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "BRAND"));
} }
const _c9 = function () { return ["/warehouse"]; };
function SidebarComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c9))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "WAREHOUSE"));
} }
function SidebarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 41)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r9.currentUrl == "supplier"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "SUPPLIER"));
} }
const _c10 = function () { return ["/supplier"]; };
function SidebarComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c10))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c11 = function () { return ["/supplier/manage/addItem"]; };
function SidebarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c11))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
function SidebarComponent_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 43)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r12.currentUrl == "customer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "CUSTOMER"));
} }
const _c12 = function () { return ["/customer"]; };
function SidebarComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c12))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c13 = function () { return ["/customer/addItem"]; };
function SidebarComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c13))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
function SidebarComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 45)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r15.currentUrl == "purchase-order-request"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "PURCHASE_ORDER_REQUEST"));
} }
const _c14 = function () { return ["/purchase-order-request/list"]; };
function SidebarComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c14))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c15 = function () { return ["/purchase-order-request/add"]; };
function SidebarComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c15))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
function SidebarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 47)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r18.currentUrl == "purchase-order"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "PURCHASE_ORDER"));
} }
const _c16 = function () { return ["/purchase-order/list"]; };
function SidebarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c16))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c17 = function () { return ["/purchase-order/add"]; };
function SidebarComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c17))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
function SidebarComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 49)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r21.currentUrl == "purchase-order-return"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "PURCHASE_ORDER_RETURN"));
} }
const _c18 = function () { return ["/purchase-order-return/list"]; };
function SidebarComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c18))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c19 = function () { return ["/purchase-order-return/add"]; };
function SidebarComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c19))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
function SidebarComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 50)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r24.currentUrl == "sales-order"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "SALES_ORDER"));
} }
const _c20 = function () { return ["/sales-order/list"]; };
function SidebarComponent_li_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c20))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c21 = function () { return ["/sales-order/add"]; };
function SidebarComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c21))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
function SidebarComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 52)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r27.currentUrl == "sales-order-return"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "SALES_ORDER_RETURN"));
} }
const _c22 = function () { return ["/sales-order-return/list"]; };
function SidebarComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c22))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c23 = function () { return ["/sales-order-return/add"]; };
function SidebarComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c23))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
const _c24 = function () { return ["/inventory"]; };
function SidebarComponent_li_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c24))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "INVENTORY"));
} }
function SidebarComponent_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 53)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r31.currentUrl == "expense"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "EXPENSE"));
} }
const _c25 = function () { return ["/expense"]; };
function SidebarComponent_li_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c25))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"), " ");
} }
const _c26 = function () { return ["/expense/add"]; };
function SidebarComponent_li_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c26))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"), " ");
} }
const _c27 = function () { return ["/expense-category"]; };
function SidebarComponent_li_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c27))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "EXPENSE_CATEGORY"), " ");
} }
function SidebarComponent_li_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 55)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r35.currentUrl == "report"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "REPORTS"));
} }
const _c28 = function () { return ["/purchase-order-report"]; };
function SidebarComponent_li_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c28))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "PURCHASE_ORDER_REPORT"), " ");
} }
const _c29 = function () { return ["/sales-order-report"]; };
function SidebarComponent_li_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c29))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "SALES_ORDER_REPORT"), " ");
} }
const _c30 = function () { return ["/product-purchase-report"]; };
function SidebarComponent_li_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c30))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "PRODUCT_PURCHASE_REPORT"), " ");
} }
const _c31 = function () { return ["/product-sales-report"]; };
function SidebarComponent_li_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c31))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "PRODUCT_SALES_REPORT"), " ");
} }
const _c32 = function () { return ["/product-warehouse-report"]; };
function SidebarComponent_li_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c32))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "PRODUCT_WAREHOUSE_REPORT"), " ");
} }
const _c33 = function () { return ["/stock-report"]; };
function SidebarComponent_li_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c33))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "STOCK_REPORT"), " ");
} }
const _c34 = function () { return ["/purchase-payment-report"]; };
function SidebarComponent_li_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c34))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "PURCHASE_PAYMENT_REPORT"), " ");
} }
const _c35 = function () { return ["/sales-payment-report"]; };
function SidebarComponent_li_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c35))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "SALES_PAYMENT_REPORT"), " ");
} }
const _c36 = function () { return ["/expense-report"]; };
function SidebarComponent_li_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c36))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "EXPENSE_REPORT"), " ");
} }
const _c37 = function () { return ["/profit-loss-report"]; };
function SidebarComponent_li_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c37))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "PROFIT_VS_LOSS_REPORT"), " ");
} }
const _c38 = function () { return ["/sales-purchase-report"]; };
function SidebarComponent_li_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c38))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "SALES_VS_PURCHASE"), " ");
} }
const _c39 = function () { return ["/supplier-payment-report"]; };
function SidebarComponent_li_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c39))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "SUPPLIER_PAYMENT_REPORT"), " ");
} }
const _c40 = function () { return ["/customer-payment-report"]; };
function SidebarComponent_li_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c40))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "CUSTOMER_PAYMENT_REPORT"), " ");
} }
const _c41 = function () { return ["/warehouse-report"]; };
function SidebarComponent_li_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c41))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "WAREHOUSE_REPORT"), " ");
} }
function SidebarComponent_li_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 57)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r50.currentUrl == "roles"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "ROLES"));
} }
const _c42 = function () { return ["/roles"]; };
function SidebarComponent_li_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c42))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c43 = function () { return ["/roles/manage"]; };
function SidebarComponent_li_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c43))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
function SidebarComponent_li_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 58)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r53.currentUrl == "users"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "USERS"));
} }
const _c44 = function () { return ["/users"]; };
function SidebarComponent_li_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c44))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "LIST"));
} }
const _c45 = function () { return ["/users/manage"]; };
function SidebarComponent_li_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c45))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "ADD_NEW"));
} }
const _c46 = function () { return ["/roles/users"]; };
function SidebarComponent_li_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c46))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "USER_ROLES"));
} }
const _c47 = function () { return ["/sessions"]; };
function SidebarComponent_li_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c47))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "CURRENT_ONLINE_USERS"), " ");
} }
function SidebarComponent_li_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 62)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c1, ctx_r58.currentUrl == "settings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 2, "SETTINGS"));
} }
const _c48 = function () { return ["/company-profile"]; };
function SidebarComponent_li_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c48))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "COMPANY_PROFILE"));
} }
const _c49 = function () { return ["/country"]; };
function SidebarComponent_li_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c49))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "COUNTRY"));
} }
const _c50 = function () { return ["/cities"]; };
function SidebarComponent_li_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 31)(1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c50))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 3, "CITY"));
} }
const _c51 = function () { return ["DB_STATISTICS", "DB_BEST_SELLING_PROS", "DB_REMINDERS", "DB_LATEST_INQUIRIES", "DB_RECENT_SO_SHIPMENT", "DB_RECENT_PO_DELIVERY"]; };
const _c52 = function () { return ["PRO_VIEW_PRODUCTS", "PRO_ADD_PRODUCT", "PRO_MANAGE_PRO_CAT", "PRO_MANAGE_TAX", "PRO_MANAGE_UNIT", "PRO_MANAGE_BRAND", "PRO_MANAGE_WAREHOUSE"]; };
const _c53 = function (a0) { return { "show": a0 }; };
const _c54 = function () { return ["SUPP_VIEW_SUPPLIERS", "SUPP_ADD_SUPPLIER"]; };
const _c55 = function () { return ["CUST_VIEW_CUSTOMERS", "CUST_ADD_CUSTOMER"]; };
const _c56 = function () { return ["POR_VIEW_PO_REQUESTS", "POR_ADD_PO_REQUEST"]; };
const _c57 = function () { return ["PO_VIEW_PURCHASE_ORDERS", "PO_ADD_PO"]; };
const _c58 = function () { return ["PO_RETURN_PO"]; };
const _c59 = function () { return ["SO_VIEW_SALES_ORDERS", "SO_ADD_SO"]; };
const _c60 = function () { return ["SO_RETURN_SO"]; };
const _c61 = function () { return ["INVE_VIEW_INVENTORIES"]; };
const _c62 = function () { return ["EXP_VIEW_EXPENSES", "EXP_ADD_EXPENSE", "EXP_MANAGE_EXP_CATEGORY"]; };
const _c63 = function () { return ["REP_PO_REP", "REP_SO_REP", "REP_PO_PAYMENT_REP", "REP_EXPENSE_REP", "REP_SO_PAYMENT_REP", "REP_SALES_VS_PURCHASE_REP", "REP_PRO_PP_REP", "REP_PRO_SO_REPORT", "REP_STOCK_REPORT", "REP_SUP_PAYMENT_REP", "REP_CUST_PAYMENT_REP", "REP_VIEW_PRO_LOSS_REP"]; };
const _c64 = function () { return ["ROLES_VIEW_ROLES", "ROLES_ADD_ROLE"]; };
const _c65 = function () { return ["USR_VIEW_USERS", "USR_ADD_USER", "USR_ASSIGN_USR_ROLES", "USR_ONLINE_USERS"]; };
const _c66 = function () { return ["SETT_UPDATE_COM_PROFILE", "SETT_MANAGE_COUNTRY", "SETT_MANAGE_CITY"]; };
class SidebarComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(securityService, router, commonService, translationService) {
        super(translationService);
        this.securityService = securityService;
        this.router = router;
        this.commonService = commonService;
        this.translationService = translationService;
        this.appUserAuth = null;
        this.currentUrl = "dashboard";
        this.getLangDir();
    }
    ngOnInit() {
        this.setTopLogAndName();
        this.routerNavigate();
    }
    setTopLogAndName() {
        this.sub$.sink = this.securityService.securityObject$
            .subscribe(c => {
            if (c) {
                this.appUserAuth = c;
                if (this.appUserAuth.profilePhoto) {
                    this.appUserAuth.profilePhoto = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}${this.appUserAuth.profilePhoto}`;
                }
            }
        });
    }
    routerNavigate() {
        this.sub$.sink = this.commonService.currentUrl$.subscribe(c => {
            this.currentUrl = c;
        });
    }
    getState(currentMenu) {
        if (currentMenu.active) {
            return 'down';
        }
        else {
            return 'up';
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_2__.SecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 79, vars: 116, consts: [["id", "accordionExample", 1, "left-sidenav"], [1, "main-menu-inner"], [1, "menu-body", "sidebar-nav"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav"], ["class", "nav-item", 4, "hasClaim"], ["id", "ProductHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#ProductCategory", "class", "collapsed", 4, "hasClaim"], ["id", "ProductCategory", "aria-labelledby", "ProductHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "SupplierHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Supplier", "class", "collapsed", 4, "hasClaim"], ["id", "Supplier", "aria-labelledby", "SupplierHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "CustomerHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Customer", "class", "collapsed", 4, "hasClaim"], ["id", "Customer", "aria-labelledby", "CustomerHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "PORHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#POR", "class", "collapsed", 4, "hasClaim"], ["id", "POR", "aria-labelledby", "PORHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "POHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#PO", "class", "collapsed", 4, "hasClaim"], ["id", "PO", "aria-labelledby", "POHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "POREHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#PORE", "class", "collapsed", 4, "hasClaim"], ["id", "PORE", "aria-labelledby", "POREHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "SalesHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Sales", "class", "collapsed", 4, "hasClaim"], ["id", "Sales", "aria-labelledby", "SalesHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "SalesReHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#SalesReturn", "class", "collapsed", 4, "hasClaim"], ["id", "SalesReturn", "aria-labelledby", "SalesReHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "ExpenseHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Expense", "class", "collapsed", 4, "hasClaim"], ["id", "Expense", "aria-labelledby", "ExpenseHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "ReportsHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Reports", "class", "collapsed", 4, "hasClaim"], ["id", "Reports", "aria-labelledby", "ReportsHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "RolesHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Roles", "class", "collapsed", 4, "hasClaim"], ["id", "Roles", "aria-labelledby", "RolesHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "UsersHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Users", "class", "collapsed", 4, "hasClaim"], ["id", "Users", "aria-labelledby", "UsersHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], ["id", "SettingsHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Settings", "class", "collapsed", 4, "hasClaim"], ["id", "Settings", "aria-labelledby", "SettingsHeading", "data-parent", "#accordionExample", 1, "sub-menu", "collapse", 3, "ngClass"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "ngClass", "routerLinkActiveOptions"], [1, "nav-icon", "fas", "fa-tachometer-alt"], ["id", "ProductHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#ProductCategory", 1, "collapsed"], [1, "nav-link", 3, "ngClass"], [1, "nav-icon", "fas", "fa-cubes"], [1, "fas", "fa-angle-down", "rotate-arrow", "ml-auto"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], [1, "far", "fa-list-alt", "nav-icon"], [1, "fas", "fa-plus-square", "nav-icon"], ["id", "SupplierHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Supplier", 1, "collapsed"], [1, "nav-icon", "fas", "fa-truck"], ["id", "CustomerHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Customer", 1, "collapsed"], [1, "nav-icon", "fas", "fa-users-cog"], ["id", "PORHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#POR", 1, "collapsed"], [1, "nav-icon", "fas", "fa-bookmark"], ["id", "POHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#PO", 1, "collapsed"], [1, "nav-icon", "fas", "fa-cart-plus"], ["id", "POREHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#PORE", 1, "collapsed"], ["id", "SalesHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Sales", 1, "collapsed"], [1, "nav-icon", "fas", "fa-cart-arrow-down"], ["id", "SalesReHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#SalesReturn", 1, "collapsed"], ["id", "ExpenseHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Expense", 1, "collapsed"], [1, "fas", "fa-solid", "fa-wallet", "nav-icon"], ["id", "ReportsHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Reports", 1, "collapsed"], [1, "nav-icon", "fas", "fa-chart-bar"], ["id", "RolesHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Roles", 1, "collapsed"], ["id", "UsersHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Users", 1, "collapsed"], [1, "nav-icon", "fa", "fa-users"], [1, "fas", "fa-user-shield", "nav-icon"], [1, "nav-icon", "fa", "fa-chalkboard-teacher"], ["id", "SettingsHeading", "aria-expanded", "true", "aria-controls", "collapseOne", "data-toggle", "collapse", "data-target", "#Settings", 1, "collapsed"], [1, "nav-icon", "fa", "fa-tools"], [1, "fas", "fa-building", "nav-icon"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, SidebarComponent_li_4_Template, 6, 10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, SidebarComponent_li_5_Template, 7, 6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, SidebarComponent_li_7_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, SidebarComponent_li_8_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, SidebarComponent_li_9_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SidebarComponent_li_10_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SidebarComponent_li_11_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, SidebarComponent_li_12_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, SidebarComponent_li_13_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, SidebarComponent_li_14_Template, 7, 6, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, SidebarComponent_li_16_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, SidebarComponent_li_17_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, SidebarComponent_li_18_Template, 7, 6, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, SidebarComponent_li_20_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, SidebarComponent_li_21_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, SidebarComponent_li_22_Template, 7, 6, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, SidebarComponent_li_24_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, SidebarComponent_li_25_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, SidebarComponent_li_26_Template, 7, 6, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, SidebarComponent_li_28_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SidebarComponent_li_29_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, SidebarComponent_li_30_Template, 7, 6, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, SidebarComponent_li_32_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SidebarComponent_li_33_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, SidebarComponent_li_34_Template, 7, 6, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, SidebarComponent_li_36_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, SidebarComponent_li_37_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SidebarComponent_li_38_Template, 7, 6, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, SidebarComponent_li_40_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, SidebarComponent_li_41_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, SidebarComponent_li_42_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, SidebarComponent_li_43_Template, 7, 6, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, SidebarComponent_li_45_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, SidebarComponent_li_46_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, SidebarComponent_li_47_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, SidebarComponent_li_48_Template, 7, 6, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "ul", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, SidebarComponent_li_50_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, SidebarComponent_li_51_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, SidebarComponent_li_52_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](53, SidebarComponent_li_53_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, SidebarComponent_li_54_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, SidebarComponent_li_55_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, SidebarComponent_li_56_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, SidebarComponent_li_57_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](58, SidebarComponent_li_58_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, SidebarComponent_li_59_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, SidebarComponent_li_60_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, SidebarComponent_li_61_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, SidebarComponent_li_62_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, SidebarComponent_li_63_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, SidebarComponent_li_64_Template, 7, 6, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, SidebarComponent_li_66_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, SidebarComponent_li_67_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, SidebarComponent_li_68_Template, 7, 6, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "ul", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](70, SidebarComponent_li_70_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](71, SidebarComponent_li_71_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](72, SidebarComponent_li_72_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](73, SidebarComponent_li_73_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, SidebarComponent_li_74_Template, 7, 6, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, SidebarComponent_li_76_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](77, SidebarComponent_li_77_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](78, SidebarComponent_li_78_Template, 6, 7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](75, _c51));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](76, _c52));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](77, _c53, ctx.currentUrl == "product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PRO_VIEW_PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PRO_ADD_PRODUCT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PRO_MANAGE_PRO_CAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PRO_MANAGE_TAX");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PRO_MANAGE_UNIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PRO_MANAGE_BRAND");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PRO_MANAGE_WAREHOUSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](79, _c54));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](80, _c53, ctx.currentUrl == "supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SUPP_VIEW_SUPPLIERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SUPP_ADD_SUPPLIER");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](82, _c55));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](83, _c53, ctx.currentUrl == "customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "CUST_VIEW_CUSTOMERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "CUST_ADD_CUSTOMER");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](85, _c56));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](86, _c53, ctx.currentUrl == "purchase-order-request"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "POR_VIEW_PO_REQUESTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "POR_ADD_PO_REQUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](88, _c57));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](89, _c53, ctx.currentUrl == "purchase-order"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PO_VIEW_PURCHASE_ORDERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PO_ADD_PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](91, _c58));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](92, _c53, ctx.currentUrl == "purchase-order-return"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PO_RETURN_PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "PO_RETURN_PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](94, _c59));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](95, _c53, ctx.currentUrl == "sales-order"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SO_VIEW_SALES_ORDERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SO_ADD_SO");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](97, _c60));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](98, _c53, ctx.currentUrl == "sales-order-return"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SO_RETURN_SO");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SO_RETURN_SO");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](100, _c61));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](101, _c62));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](102, _c53, ctx.currentUrl == "expense"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "EXP_VIEW_EXPENSES");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "EXP_ADD_EXPENSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "EXP_MANAGE_EXP_CATEGORY");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](104, _c63));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](105, _c53, ctx.currentUrl == "report"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_PO_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_SO_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_PRO_PP_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_PRO_SO_REPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_VIEW_WAR_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_STOCK_REPORT");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_PO_PAYMENT_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_SO_PAYMENT_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_EXPENSE_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_VIEW_PRO_LOSS_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_SALES_VS_PURCHASE_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_SUP_PAYMENT_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_CUST_PAYMENT_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "REP_VIEW_WAR_REP");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](107, _c64));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](108, _c53, ctx.currentUrl == "roles"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "ROLES_VIEW_ROLES");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "ROLES_ADD_ROLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](110, _c65));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](111, _c53, ctx.currentUrl == "users"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "USR_VIEW_USERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "USR_ADD_USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "USR_ASSIGN_USR_ROLES");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "USR_ONLINE_USERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](113, _c66));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](114, _c53, ctx.currentUrl == "settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SETT_UPDATE_COM_PROFILE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SETT_MANAGE_COUNTRY");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hasClaim", "SETT_MANAGE_CITY");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _shared_has_claim_directive__WEBPACK_IMPORTED_MODULE_5__.HasClaimDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('slide', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('up', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ height: 0 })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('down', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('up <=> down', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)(200))
            ])
        ] } });


/***/ }),

/***/ 83838:
/*!********************************************!*\
  !*** ./src/app/http-interceptor.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpInterceptorModule": () => (/* binding */ HttpInterceptorModule),
/* harmony export */   "HttpRequestInterceptor": () => (/* binding */ HttpRequestInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);







class HttpRequestInterceptor {
    /**
     *
     */
    constructor(router, toastrService) {
        this.router = router;
        this.toastrService = toastrService;
    }
    intercept(req, next) {
        var token = localStorage.getItem('bearerToken');
        const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
        if (req.url.lastIndexOf('i18n') > -1) {
            return next.handle(req);
        }
        const url = req.url.lastIndexOf('api') > -1 ? req.url : 'api/' + req.url;
        if (token) {
            const newReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token),
                url: `${baseUrl}${url}`,
            });
            return next.handle(newReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => { }, (err) => {
                var _a;
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate(['login']);
                    }
                    else if (err.error) {
                        this.toastrService.error((_a = err.error) === null || _a === void 0 ? void 0 : _a.join(" </br> "), "", {
                            enableHtml: true
                        });
                    }
                    else {
                        this.toastrService.error(err.message, "", {
                            enableHtml: true
                        });
                    }
                }
            }));
        }
        else {
            const newReq = req.clone({
                url: `${baseUrl}${url}`,
            });
            return next.handle(newReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => { }, (err) => {
                if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
                    if (err.status === 401) {
                        this.router.navigate(['login']);
                    }
                    if (err.status === 403) {
                        this.router.navigate(['login']);
                    }
                    if (err.status === 409) {
                        this.toastrService.error(err.error.messages[0]);
                    }
                }
            }));
        }
    }
}
HttpRequestInterceptor.ɵfac = function HttpRequestInterceptor_Factory(t) { return new (t || HttpRequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
HttpRequestInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HttpRequestInterceptor, factory: HttpRequestInterceptor.ɵfac });
class HttpInterceptorModule {
}
HttpInterceptorModule.ɵfac = function HttpInterceptorModule_Factory(t) { return new (t || HttpInterceptorModule)(); };
HttpInterceptorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HttpInterceptorModule });
HttpInterceptorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
            useClass: HttpRequestInterceptor,
            multi: true,
        },
    ] });


/***/ }),

/***/ 24929:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/add-reminder-scheduler/add-reminder-scheduler.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddReminderSchedulerComponent": () => (/* binding */ AddReminderSchedulerComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/common.service */ 50690);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

















function AddReminderSchedulerComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SUBJECT_IS_REQUIRED"), " ");
} }
function AddReminderSchedulerComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddReminderSchedulerComponent_div_20_div_1_Template, 3, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.reminderForm.get("subject").errors == null ? null : ctx_r0.reminderForm.get("subject").errors.required);
} }
function AddReminderSchedulerComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "MESSAGE_IS_REQUIRED"), " ");
} }
function AddReminderSchedulerComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddReminderSchedulerComponent_div_27_div_1_Template, 3, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.reminderForm.get("message").errors == null ? null : ctx_r1.reminderForm.get("message").errors.required);
} }
function AddReminderSchedulerComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" (+", ctx_r3.reminderForm.get("selectedUsers").value.length - 1, " ", (ctx_r3.reminderForm.get("selectedUsers").value == null ? null : ctx_r3.reminderForm.get("selectedUsers").value.length) === 2 ? "other" : "others", ") ");
} }
function AddReminderSchedulerComponent_mat_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", user_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", user_r16.firstName, " ", user_r16.lastName, " ");
} }
function AddReminderSchedulerComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "SUBJECT"), " ");
} }
function AddReminderSchedulerComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r17.subject, " ");
} }
function AddReminderSchedulerComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "DATE"), " ");
} }
function AddReminderSchedulerComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "utcToLocalTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r18.duration, "short"), " ");
} }
function AddReminderSchedulerComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "NAME"), " ");
} }
function AddReminderSchedulerComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r19.userName, " ");
} }
function AddReminderSchedulerComponent_tr_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 58);
} }
function AddReminderSchedulerComponent_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 59);
} }
function AddReminderSchedulerComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9)(2, "div", 60)(3, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, "NO_DATA_FOUND"), "");
} }
class AddReminderSchedulerComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(fb, commonService, translationService, dialogRef, data) {
        super(translationService);
        this.fb = fb;
        this.commonService = commonService;
        this.translationService = translationService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.users = [];
        this.selectedUsers = [];
        this.reminderSchedulers = [];
        this.displayedColumns = ['subject', 'createdDate', 'userName'];
        this.getLangDir();
    }
    ngOnInit() {
        this.createReminder();
        this.getUsers();
        this.getReminderSchedulers();
    }
    createReminder() {
        this.reminderForm = this.fb.group({
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            isEmailNotification: [true],
            reminderDate: [new Date()],
            selectedUsers: [null]
        });
    }
    buildReminderSchedule() {
        const selectedUsers = this.reminderForm.get('selectedUsers').value;
        const customReminderScheduler = {
            subject: this.reminderForm.get('subject').value,
            message: this.reminderForm.get('message').value,
            isEmailNotification: this.reminderForm.get('isEmailNotification').value,
            createdDate: this.reminderForm.get('reminderDate').value,
            userIds: selectedUsers ? selectedUsers.map(c => c.id) : null,
            application: this.data.application,
            referenceId: this.data.referenceId
        };
        return customReminderScheduler;
    }
    getUsers() {
        this.commonService.getAllUsers().subscribe((u) => {
            this.users = u;
        });
    }
    saveReminder() {
        if (this.reminderForm.valid) {
            let reminderSchedulers = this.buildReminderSchedule();
            if (!reminderSchedulers.userIds) {
                reminderSchedulers.userIds = [];
            }
            this.commonService.addReminderSchedule(reminderSchedulers)
                .subscribe(c => {
                if (c) {
                    this.dialogRef.close();
                }
            });
        }
        else {
            this.reminderForm.markAllAsTouched();
        }
    }
    getReminderSchedulers() {
        this.commonService.getReminderSchedulers(this.data)
            .subscribe((c) => {
            this.reminderSchedulers = c;
        });
    }
    cancelReminder() {
        this.dialogRef.close();
    }
}
AddReminderSchedulerComponent.ɵfac = function AddReminderSchedulerComponent_Factory(t) { return new (t || AddReminderSchedulerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_2__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA)); };
AddReminderSchedulerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddReminderSchedulerComponent, selectors: [["app-add-reminder-scheduler"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 76, vars: 44, consts: [[1, "modal-content1"], [1, "modal-header"], [1, "d-flex", "w-100", "align-items-center", "justify-content-between"], [1, "col-md-8", "col"], [1, "modal-title"], [1, "col-sm-auto", "ml-auto", "col-auto"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "fas", "fa-times"], [1, "modal-body"], [1, "row"], [1, "col-sm-12"], [3, "formGroup"], [1, "form-group", "col-md-12"], ["for", "subject", 1, "text-danger"], ["formControlName", "subject", "type", "text", "id", "subject", 1, "form-control"], [4, "ngIf"], ["for", "message", 1, "text-danger"], ["formControlName", "message", "id", "message", "cols", "30", 1, "form-control"], [1, "form-group", "col-md-3"], ["for", "frequency"], ["formControlName", "reminderDate", "placeholder", "End Date", 1, "form-control", 3, "owlDateTimeTrigger", "owlDateTime"], ["dt4", ""], [1, "col-md-7", "form-group"], ["formControlName", "selectedUsers", "multiple", "", 1, "form-control", 3, "dir", "placeholder"], [3, "dir"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2", "mt-4"], ["color", "primary", "formControlName", "isEmailNotification", 3, "dir"], [1, "mt-2", "col-md-12"], ["type", "submit", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"], [1, "col-sm-12", "mt-2"], [1, "table-responsive"], ["mat-table", "", 1, "table", "table-bordered", "table-hover", 3, "dir", "dataSource"], ["matColumnDef", "subject"], ["class", "table-column-300", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-300", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "createdDate"], ["class", "table-column-150", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-150", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "userName"], ["class", "table-column-200", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "table-column-200", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "example-additional-selection"], [3, "value"], ["mat-header-cell", "", 1, "table-column-300"], ["mat-cell", "", 1, "table-column-300"], ["mat-header-cell", "", 1, "table-column-150"], ["mat-cell", "", 1, "table-column-150"], ["mat-header-cell", "", 1, "table-column-200"], ["mat-cell", "", 1, "table-column-200"], ["mat-header-row", ""], ["mat-row", ""], [1, "col-sm-12", "ml-4", "mt-3"], [1, "font-weight-bold"]], template: function AddReminderSchedulerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReminderSchedulerComponent_Template_button_click_8_listener() { return ctx.cancelReminder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "form", 11)(14, "div", 9)(15, "div", 12)(16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, AddReminderSchedulerComponent_div_20_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9)(22, "div", 12)(23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, AddReminderSchedulerComponent_div_27_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 9)(29, "div", 18)(30, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 20)(34, "owl-date-time", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 22)(37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-select-trigger", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, AddReminderSchedulerComponent_span_44_Template, 2, 2, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, AddReminderSchedulerComponent_mat_option_45_Template, 2, 3, "mat-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 27)(47, "mat-checkbox", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 9)(51, "div", 29)(52, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReminderSchedulerComponent_Template_button_click_52_listener() { return ctx.saveReminder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddReminderSchedulerComponent_Template_button_click_56_listener() { return ctx.cancelReminder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 9)(61, "div", 34)(62, "div", 35)(63, "table", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](64, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](65, AddReminderSchedulerComponent_th_65_Template, 3, 3, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, AddReminderSchedulerComponent_td_66_Template, 2, 1, "td", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](67, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](68, AddReminderSchedulerComponent_th_68_Template, 3, 3, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, AddReminderSchedulerComponent_td_69_Template, 3, 4, "td", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](70, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](71, AddReminderSchedulerComponent_th_71_Template, 3, 3, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, AddReminderSchedulerComponent_td_72_Template, 2, 1, "td", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, AddReminderSchedulerComponent_tr_73_Template, 1, 0, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](74, AddReminderSchedulerComponent_tr_74_Template, 1, 0, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, AddReminderSchedulerComponent_ng_container_75_Template, 6, 3, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 26, "REMINDER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.reminderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 28, "SUBJECT"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.reminderForm.get("subject").touched && ctx.reminderForm.get("subject").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 30, "MESSAGE"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.reminderForm.get("message").touched && ctx.reminderForm.get("message").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 32, "REMINDER_DATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("owlDateTimeTrigger", _r2)("owlDateTime", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 34, "SELECT_USERS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](41, 36, "SELECT_USERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.reminderForm.get("selectedUsers").value ? ctx.reminderForm.get("selectedUsers").value[0].firstName + " " + ctx.reminderForm.get("selectedUsers").value[0].lastName : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.reminderForm.get("selectedUsers").value == null ? null : ctx.reminderForm.get("selectedUsers").value.length) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 38, "SEND_EMAIL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](55, 40, "SAVE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](59, 42, "CANCEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir)("dataSource", ctx.reminderSchedulers);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.reminderSchedulers.length === 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Dir, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__.OwlDateTimeTriggerDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__.OwlDateTimeInputDirective, ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_9__.OwlDateTimeComponent, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_3__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVtaW5kZXItc2NoZWR1bGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 33900:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/drag-drop.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropDirective": () => (/* binding */ DragDropDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class DragDropDirective {
    constructor() {
        this.onFileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.fileOver = false;
    }
    onDragOver(evt) {
        // Dragover listener @HostListener('dragover', ['$event']) onDragover (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log('Drag over');
    }
    onDragLeave(evt) {
        // Dragleave listener @HostListener('dragleave', ['$event']) public onDragLeave (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log('Drag Leave');
    }
    onDrop(evt) {
        // Drop listener @HostListener('drop', ['$event']) public ondrop(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.onFileDropped.emit(files);
            // Do Some stuff here console.log('You dropped ${files.length} files. );
        }
    }
}
DragDropDirective.ɵfac = function DragDropDirective_Factory(t) { return new (t || DragDropDirective)(); };
DragDropDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DragDropDirective, selectors: [["", "appDragDrop", ""]], hostBindings: function DragDropDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDropDirective_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragleave", function DragDropDirective_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function DragDropDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } }, inputs: { appDragDrop: "appDragDrop" }, outputs: { onFileDropped: "onFileDropped" } });


/***/ }),

/***/ 84507:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/lang-dire.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LangDirDirective": () => (/* binding */ LangDirDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/services/translation.service */ 16107);



class LangDirDirective {
    constructor(_elRef, _renderer, translationService) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.translationService = translationService;
        console.log('!');
    }
    ngOnInit() {
        // this.translationService.lanDir$.subscribe(c=>{
        this._renderer.setAttribute(this._elRef.nativeElement, 'dir', 'rtl');
        // });
    }
}
LangDirDirective.ɵfac = function LangDirDirective_Factory(t) { return new (t || LangDirDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_0__.TranslationService)); };
LangDirDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LangDirDirective, selectors: [["", "lang-dir", ""]] });


/***/ }),

/***/ 79785:
/*!***********************************************!*\
  !*** ./src/app/shared/has-claim.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasClaimDirective": () => (/* binding */ HasClaimDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/security/security.service */ 40130);



class HasClaimDirective {
    constructor(templateRef, viewContainer, securityService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.securityService = securityService;
    }
    set hasClaim(claimType) {
        if (this.securityService.hasClaim(claimType)) {
            // Add template to DOM
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            // Remove template from DOM
            this.viewContainer.clear();
        }
    }
}
HasClaimDirective.ɵfac = function HasClaimDirective_Factory(t) { return new (t || HasClaimDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_0__.SecurityService)); };
HasClaimDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: HasClaimDirective, selectors: [["", "hasClaim", ""]], inputs: { hasClaim: "hasClaim" } });


/***/ }),

/***/ 23096:
/*!*************************************************************************!*\
  !*** ./src/app/shared/loading-indicator/loading-indicator.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingIndicatorComponent": () => (/* binding */ LoadingIndicatorComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 45398);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 12972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pending_interceptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-interceptor.service */ 40052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);






function LoadingIndicatorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-bar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoadingIndicatorComponent {
    constructor(pendingRequestInterceptorService) {
        this.pendingRequestInterceptorService = pendingRequestInterceptorService;
        this.filteredUrlPatterns = [];
        this.debounceDelay = 100;
        this.entryComponent = null;
        this.subscription = this.pendingRequestInterceptorService
            .pendingRequestsStatus
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounce)(this.handleDebounce.bind(this)))
            .subscribe(hasPendingRequests => this.isSpinnerVisible = hasPendingRequests);
    }
    ngOnInit() {
        if (!(this.filteredUrlPatterns instanceof Array)) {
            throw new TypeError('`filteredUrlPatterns` must be an array.');
        }
        if (!!this.filteredUrlPatterns.length) {
            this.filteredUrlPatterns.forEach(e => {
                this.pendingRequestInterceptorService.filteredUrlPatterns.push(new RegExp(e));
            });
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    handleDebounce(hasPendingRequests) {
        if (hasPendingRequests) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(this.debounceDelay);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(0);
    }
}
LoadingIndicatorComponent.ɵfac = function LoadingIndicatorComponent_Factory(t) { return new (t || LoadingIndicatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pending_interceptor_service__WEBPACK_IMPORTED_MODULE_0__.PendingInterceptorService)); };
LoadingIndicatorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingIndicatorComponent, selectors: [["app-loading-indicator"]], inputs: { backgroundColor: "backgroundColor", filteredUrlPatterns: "filteredUrlPatterns", debounceDelay: "debounceDelay", entryComponent: "entryComponent" }, decls: 1, vars: 1, consts: [["class", "progress", 4, "ngIf"], [1, "progress"], ["mode", "indeterminate"]], template: function LoadingIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoadingIndicatorComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar], styles: [".progress[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 5px;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcQUIlMjBQT1NcXEZyb250ZW5kXFxzcmNcXGFwcFxcc2hhcmVkXFxsb2FkaW5nLWluZGljYXRvclxcbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6ImxvYWRpbmctaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgei1pbmRleDogOTk5OTtcclxufVxyXG4iLCIucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVweDtcbiAgei1pbmRleDogOTk5OTtcbn0iXX0= */"] });


/***/ }),

/***/ 72025:
/*!**********************************************************************!*\
  !*** ./src/app/shared/loading-indicator/loading-indicator.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingIndicatorModule": () => (/* binding */ LoadingIndicatorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-indicator.component */ 23096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class LoadingIndicatorModule {
}
LoadingIndicatorModule.ɵfac = function LoadingIndicatorModule_Factory(t) { return new (t || LoadingIndicatorModule)(); };
LoadingIndicatorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoadingIndicatorModule });
LoadingIndicatorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoadingIndicatorModule, { declarations: [_loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__.MatProgressBarModule], exports: [_loading_indicator_component__WEBPACK_IMPORTED_MODULE_0__.LoadingIndicatorComponent] }); })();


/***/ }),

/***/ 96181:
/*!************************************************************************!*\
  !*** ./src/app/shared/loading-indicator/pending-interceptor.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingInterceptorModule": () => (/* binding */ PendingInterceptorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _pending_interceptor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pending-interceptor.service */ 40052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const PendingInterceptorServiceExistingProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HTTP_INTERCEPTORS,
    useExisting: _pending_interceptor_service__WEBPACK_IMPORTED_MODULE_0__.PendingInterceptorService,
    multi: true
};
class PendingInterceptorModule {
}
PendingInterceptorModule.ɵfac = function PendingInterceptorModule_Factory(t) { return new (t || PendingInterceptorModule)(); };
PendingInterceptorModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PendingInterceptorModule });
PendingInterceptorModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        PendingInterceptorServiceExistingProvider,
        _pending_interceptor_service__WEBPACK_IMPORTED_MODULE_0__.PendingInterceptorServiceFactoryProvider
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PendingInterceptorModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 40052:
/*!*************************************************************************!*\
  !*** ./src/app/shared/loading-indicator/pending-interceptor.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingInterceptorService": () => (/* binding */ PendingInterceptorService),
/* harmony export */   "PendingInterceptorServiceFactory": () => (/* binding */ PendingInterceptorServiceFactory),
/* harmony export */   "PendingInterceptorServiceFactoryProvider": () => (/* binding */ PendingInterceptorServiceFactoryProvider)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 61555);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 44661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);






class PendingInterceptorService {
    constructor(router) {
        this._pendingRequests = 0;
        this._pendingRequestsStatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
        this._filteredUrlPatterns = [];
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this._pendingRequestsStatus.next(true);
            }
            if ((event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationError || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationCancel)) {
                this._pendingRequestsStatus.next(false);
            }
        });
    }
    get pendingRequests() {
        return this._pendingRequests;
    }
    get pendingRequestsStatus() {
        return this._pendingRequestsStatus.asObservable();
    }
    get filteredUrlPatterns() {
        return this._filteredUrlPatterns;
    }
    intercept(req, next) {
        const shouldBypass = this.shouldBypass(req.url);
        if (!shouldBypass) {
            this._pendingRequests++;
            if (1 === this._pendingRequests) {
                this._pendingRequestsStatus.next(true);
            }
        }
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => {
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => {
            if (!shouldBypass) {
                this._pendingRequests--;
                if (0 === this._pendingRequests) {
                    this._pendingRequestsStatus.next(false);
                }
            }
        }));
    }
    shouldBypass(url) {
        return this._filteredUrlPatterns.some(e => {
            return e.test(url);
        });
    }
}
PendingInterceptorService.ɵfac = function PendingInterceptorService_Factory(t) { return new (t || PendingInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
PendingInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: PendingInterceptorService, factory: PendingInterceptorService.ɵfac });
function PendingInterceptorServiceFactory(router) {
    return new PendingInterceptorService(router);
}
let PendingInterceptorServiceFactoryProvider = {
    provide: PendingInterceptorService,
    useFactory: PendingInterceptorServiceFactory,
    deps: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router]
};


/***/ }),

/***/ 68708:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/custome-currency.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCurrencyPipe": () => (/* binding */ CustomCurrencyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/security.service */ 40130);



class CustomCurrencyPipe {
    constructor(currencyPipe, securityService) {
        this.currencyPipe = currencyPipe;
        this.securityService = securityService;
    }
    transform(value, args) {
        value = value !== null && value !== void 0 ? value : 0;
        return this.currencyPipe.transform(value, this.securityService.currencyCode);
    }
}
CustomCurrencyPipe.ɵfac = function CustomCurrencyPipe_Factory(t) { return new (t || CustomCurrencyPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_0__.SecurityService, 16)); };
CustomCurrencyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "customCurrency", type: CustomCurrencyPipe, pure: true });


/***/ }),

/***/ 13056:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/date-ago.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAgoPipe": () => (/* binding */ DateAgoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DateAgoPipe {
    transform(value, args) {
        if (value) {
            const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            if (seconds < 29) // less than 30 seconds ago will show as 'Just now'
                return 'Just now';
            const intervals = {
                'year': 31536000,
                'month': 2592000,
                'week': 604800,
                'day': 86400,
                'hour': 3600,
                'minute': 60,
                'second': 1
            };
            let counter;
            for (const i in intervals) {
                counter = Math.floor(seconds / intervals[i]);
                if (counter > 0)
                    if (counter === 1) {
                        return counter + ' ' + i + ' ago'; // singular (1 day ago)
                    }
                    else {
                        return counter + ' ' + i + 's ago'; // plural (2 days ago)
                    }
            }
        }
        return value;
    }
}
DateAgoPipe.ɵfac = function DateAgoPipe_Factory(t) { return new (t || DateAgoPipe)(); };
DateAgoPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateAgo", type: DateAgoPipe, pure: true });


/***/ }),

/***/ 94840:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/inventory-source.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventorySourcePipe": () => (/* binding */ InventorySourcePipe)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_inventory_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/inventory-source */ 70882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/translation.service */ 16107);



class InventorySourcePipe {
    constructor(translationService) {
        this.translationService = translationService;
    }
    transform(value, ...args) {
        const inventoryName = _core_domain_classes_inventory_source__WEBPACK_IMPORTED_MODULE_0__.inventorySource.find(c => c.id == value);
        if (inventoryName) {
            return this.translationService.getValue(inventoryName.name);
        }
        return '';
    }
}
InventorySourcePipe.ɵfac = function InventorySourcePipe_Factory(t) { return new (t || InventorySourcePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService, 16)); };
InventorySourcePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "inventorySource", type: InventorySourcePipe, pure: true });


/***/ }),

/***/ 49552:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/operator.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitOperatorPipe": () => (/* binding */ UnitOperatorPipe)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/operator */ 22746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/translation.service */ 16107);



class UnitOperatorPipe {
    constructor(translationService) {
        this.translationService = translationService;
    }
    transform(value, ...args) {
        const operators = _core_domain_classes_operator__WEBPACK_IMPORTED_MODULE_0__.unitOperators.find(c => c.id == value);
        if (operators) {
            return this.translationService.getValue(operators.name);
        }
        return '';
    }
}
UnitOperatorPipe.ɵfac = function UnitOperatorPipe_Factory(t) { return new (t || UnitOperatorPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService, 16)); };
UnitOperatorPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "unitOperator", type: UnitOperatorPipe, pure: true });


/***/ }),

/***/ 57432:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/paymentMethod.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentMethodPipe": () => (/* binding */ PaymentMethodPipe)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_payment_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/payment-method */ 96946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/translation.service */ 16107);



class PaymentMethodPipe {
    constructor(translationService) {
        this.translationService = translationService;
    }
    transform(value, ...args) {
        const paymentMethod = _core_domain_classes_payment_method__WEBPACK_IMPORTED_MODULE_0__.paymentMethods.find(c => c.id == value);
        if (paymentMethod) {
            return this.translationService.getValue(paymentMethod.name);
        }
        return '';
    }
}
PaymentMethodPipe.ɵfac = function PaymentMethodPipe_Factory(t) { return new (t || PaymentMethodPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService, 16)); };
PaymentMethodPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "paymentmethod", type: PaymentMethodPipe, pure: true });


/***/ }),

/***/ 24586:
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/pipes.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _truncate_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncate.pipe */ 52821);
/* harmony import */ var _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-ago.pipe */ 13056);
/* harmony import */ var _custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custome-currency.pipe */ 68708);
/* harmony import */ var _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/paymentMethod.pipe */ 57432);
/* harmony import */ var _utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utc-to-localtime.pipe */ 18017);
/* harmony import */ var _operator_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operator.pipe */ 49552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_truncate_pipe__WEBPACK_IMPORTED_MODULE_0__.TruncatePipe,
        _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__.DateAgoPipe,
        _custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomCurrencyPipe,
        _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodPipe,
        _utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_4__.UTCToLocalTime,
        _operator_pipe__WEBPACK_IMPORTED_MODULE_5__.UnitOperatorPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule], exports: [_truncate_pipe__WEBPACK_IMPORTED_MODULE_0__.TruncatePipe,
        _date_ago_pipe__WEBPACK_IMPORTED_MODULE_1__.DateAgoPipe,
        _custome_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.CustomCurrencyPipe,
        _shared_pipes_paymentMethod_pipe__WEBPACK_IMPORTED_MODULE_3__.PaymentMethodPipe,
        _operator_pipe__WEBPACK_IMPORTED_MODULE_5__.UnitOperatorPipe,
        _utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_4__.UTCToLocalTime] }); })();


/***/ }),

/***/ 80443:
/*!*******************************************************************!*\
  !*** ./src/app/shared/pipes/purchase-order-paymentStatus.pipe.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentStatusPipe": () => (/* binding */ PaymentStatusPipe)
/* harmony export */ });
/* harmony import */ var _core_domain_classes_paymentaStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/domain-classes/paymentaStatus */ 78675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services/translation.service */ 16107);



class PaymentStatusPipe {
    constructor(translationService) {
        this.translationService = translationService;
    }
    transform(value, ...args) {
        const paymentaStatus = _core_domain_classes_paymentaStatus__WEBPACK_IMPORTED_MODULE_0__.paymentStatuses.find(c => c.id == value);
        if (paymentaStatus) {
            return this.translationService.getValue(paymentaStatus.name.replace(" ", "_").toUpperCase());
        }
        return '';
    }
}
PaymentStatusPipe.ɵfac = function PaymentStatusPipe_Factory(t) { return new (t || PaymentStatusPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_1__.TranslationService, 16)); };
PaymentStatusPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "paymentStatus", type: PaymentStatusPipe, pure: true });


/***/ }),

/***/ 76521:
/*!***************************************************************!*\
  !*** ./src/app/shared/pipes/quantities-unitprice-tax.pipe.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuantitiesUnitPriceTaxPipe": () => (/* binding */ QuantitiesUnitPriceTaxPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class QuantitiesUnitPriceTaxPipe {
    transform(value, ...args) {
        if (args.length === 1) {
            const totalAmount = value * args[0];
            return parseFloat(totalAmount.toFixed(2));
        }
        else if (args.length === 2) {
            const totalAmount = value * args[0];
            if (args[1]) {
                return this.getSubTotalAfterDiscount(totalAmount, parseFloat(args[1]));
            }
            else {
                return 0;
            }
        }
        else if (args.length === 4) {
            let totalAmount = value * args[0];
            if (args[1]) {
                totalAmount = parseFloat(this.getSubTotalAfterDiscountWithTotalAmount(totalAmount, parseFloat(args[1])));
            }
            const taxIds = args[2];
            const taxs = args[3];
            if (taxIds && taxIds.length > 0) {
                return this.getSubTotalAfterTaxPercentage(totalAmount, taxIds, taxs);
            }
            else {
                return 0;
            }
        }
        return 0;
    }
    getSubTotalAfterTax(totalAmount, taxIds, taxs) {
        const selectedPercentages = [];
        const selectedTaxs = [];
        taxIds.forEach(tax => {
            selectedPercentages.push(taxs.find(c => c.id === tax).percentage);
        });
        selectedPercentages.forEach(percentage => {
            selectedTaxs.push((totalAmount * percentage) / 100);
        });
        selectedTaxs.forEach(c => {
            totalAmount = totalAmount + c;
        });
        return totalAmount.toFixed(2);
    }
    getSubTotalAfterTaxPercentage(totalAmount, taxIds, taxs) {
        const selectedPercentages = [];
        const selectedTaxs = [];
        let taxAmount = 0;
        taxIds.forEach(tax => {
            selectedPercentages.push(taxs.find(c => c.id === tax).percentage);
        });
        selectedPercentages.forEach(percentage => {
            selectedTaxs.push((totalAmount * percentage) / 100);
        });
        selectedTaxs.forEach(c => {
            taxAmount = taxAmount + c;
        });
        return taxAmount.toFixed(2);
    }
    getSubTotalAfterDiscountWithTotalAmount(totalAmount, discount) {
        let totalDiscount = (totalAmount * discount) / 100;
        const total = totalAmount - totalDiscount;
        return total.toFixed(2);
    }
    getSubTotalAfterDiscount(totalAmount, discount) {
        let totalDiscount = (totalAmount * discount) / 100;
        return totalDiscount.toFixed(2);
    }
}
QuantitiesUnitPriceTaxPipe.ɵfac = function QuantitiesUnitPriceTaxPipe_Factory(t) { return new (t || QuantitiesUnitPriceTaxPipe)(); };
QuantitiesUnitPriceTaxPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "quantitiesunitpriceTax", type: QuantitiesUnitPriceTaxPipe, pure: true });


/***/ }),

/***/ 16695:
/*!***********************************************************!*\
  !*** ./src/app/shared/pipes/quantities-unitprice.pipe.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuantitiesUnitPricePipe": () => (/* binding */ QuantitiesUnitPricePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class QuantitiesUnitPricePipe {
    transform(value, ...args) {
        if (args.length === 1) {
            const totalAmount = value * args[0];
            return parseFloat(totalAmount.toFixed(2));
        }
        else if (args.length === 2) {
            const totalAmount = value * args[0];
            if (args[1]) {
                return this.getSubTotalAfterDiscount(totalAmount, parseFloat(args[1]));
            }
            else {
                return totalAmount;
            }
        }
        else if (args.length === 4) {
            let totalAmount = value * args[0];
            if (args[1]) {
                totalAmount = parseFloat(this.getSubTotalAfterDiscount(totalAmount, parseFloat(args[1])));
            }
            const taxIds = args[2];
            const taxs = args[3];
            if (taxIds && taxIds.length > 0) {
                return this.getSubTotalAfterTax(totalAmount, taxIds, taxs);
            }
            else {
                return totalAmount.toFixed(2);
            }
        }
        return 0;
    }
    getSubTotalAfterTax(totalAmount, taxIds, taxs) {
        const selectedPercentages = [];
        const selectedTaxs = [];
        taxIds.forEach(tax => {
            selectedPercentages.push(taxs.find(c => c.id === tax).percentage);
        });
        selectedPercentages.forEach(percentage => {
            selectedTaxs.push((totalAmount * percentage) / 100);
        });
        selectedTaxs.forEach(c => {
            totalAmount = totalAmount + c;
        });
        return totalAmount.toFixed(2);
    }
    getSubTotalAfterDiscount(totalAmount, discount) {
        totalAmount = totalAmount - (totalAmount * discount) / 100;
        return totalAmount.toFixed(2);
    }
}
QuantitiesUnitPricePipe.ɵfac = function QuantitiesUnitPricePipe_Factory(t) { return new (t || QuantitiesUnitPricePipe)(); };
QuantitiesUnitPricePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "quantitiesunitprice", type: QuantitiesUnitPricePipe, pure: true });


/***/ }),

/***/ 52821:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruncatePipe": () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// tslint:disable-next-line:use-pipe-transform-interface
class TruncatePipe {
    transform(value, args) {
        if (!value)
            return '';
        const limit = args ? parseInt(args, 10) : 100;
        const trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    }
}
TruncatePipe.ɵfac = function TruncatePipe_Factory(t) { return new (t || TruncatePipe)(); };
TruncatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "limitTo", type: TruncatePipe, pure: true });


/***/ }),

/***/ 18017:
/*!*******************************************************!*\
  !*** ./src/app/shared/pipes/utc-to-localtime.pipe.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UTCToLocalTime": () => (/* binding */ UTCToLocalTime)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

var UTCToLocalTimeFormat;
(function (UTCToLocalTimeFormat) {
    UTCToLocalTimeFormat["FULL"] = "full";
    UTCToLocalTimeFormat["SHORT"] = "short";
    UTCToLocalTimeFormat["SHORT_DATE"] = "shortDate";
    UTCToLocalTimeFormat["SHORT_TIME"] = "shortTime";
})(UTCToLocalTimeFormat || (UTCToLocalTimeFormat = {}));
class UTCToLocalTime {
    transform(utcDate, format) {
        const browserLanuges = navigator.language;
        if (!utcDate) {
            return '';
        }
        if (format === UTCToLocalTimeFormat.SHORT) {
            const date = new Date(utcDate).toLocaleDateString(browserLanuges);
            const time = new Date(utcDate).toLocaleTimeString(browserLanuges);
            return `${date} ${time}`;
            //  return moment.utc(utcDate).format("MM/DD/YYYY hh:mm:ss");
        }
        else if (format === UTCToLocalTimeFormat.SHORT_DATE) {
            const date = new Date(utcDate).toLocaleDateString(browserLanuges);
            return `${date}`;
        }
        else if (format === UTCToLocalTimeFormat.SHORT_TIME) {
            const time = new Date(utcDate).toLocaleTimeString(browserLanuges);
            return `${time}`;
        }
        else {
            const date = new Date(utcDate).toLocaleDateString(browserLanuges);
            const time = new Date(utcDate).toLocaleTimeString(browserLanuges);
            return `${date} ${time}`;
        }
    }
}
UTCToLocalTime.ɵfac = function UTCToLocalTime_Factory(t) { return new (t || UTCToLocalTime)(); };
UTCToLocalTime.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "utcToLocalTime", type: UTCToLocalTime, pure: true });


/***/ }),

/***/ 92552:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/purchase-order-invoice/purchase-order-invoice.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseOrderInvoiceComponent": () => (/* binding */ PurchaseOrderInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/purchase-order-paymentStatus.pipe */ 80443);








function PurchaseOrderInvoiceComponent_h3_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PURCHASE_ORDER_REQUEST"));
} }
function PurchaseOrderInvoiceComponent_h3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PURCHASE_ORDER_INVOICE"));
} }
function PurchaseOrderInvoiceComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 42);
} }
function PurchaseOrderInvoiceComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 43);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r3.companyProfile.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function PurchaseOrderInvoiceComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.purchaseOrderForInvoice.supplier.billingAddress == null ? null : ctx_r4.purchaseOrderForInvoice.supplier.billingAddress.address, " ");
} }
function PurchaseOrderInvoiceComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "PHONE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.purchaseOrderForInvoice.supplier.mobileNo, " ");
} }
function PurchaseOrderInvoiceComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "EMAIL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.purchaseOrderForInvoice.supplier == null ? null : ctx_r6.purchaseOrderForInvoice.supplier.email, " ");
} }
function PurchaseOrderInvoiceComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.companyProfile == null ? null : ctx_r7.companyProfile.address, " ");
} }
function PurchaseOrderInvoiceComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "PHONE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.companyProfile == null ? null : ctx_r8.companyProfile.phone, " ");
} }
function PurchaseOrderInvoiceComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "EMAIL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.companyProfile == null ? null : ctx_r9.companyProfile.email, " ");
} }
function PurchaseOrderInvoiceComponent_tr_76_span_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PurchaseOrderInvoiceComponent_tr_76_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PurchaseOrderInvoiceComponent_tr_76_span_20_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r18 = ctx.$implicit;
    const last_r19 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r18.taxName, "(", tax_r18.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r19);
} }
function PurchaseOrderInvoiceComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PurchaseOrderInvoiceComponent_tr_76_span_20_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const purchaseItem_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r16 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", purchaseItem_r15.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, purchaseItem_r15.unitPrice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", purchaseItem_r15.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", purchaseItem_r15.unitName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 11, purchaseItem_r15.discount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 13, purchaseItem_r15.taxValue), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", purchaseItem_r15.purchaseOrderItemTaxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 15, (purchaseItem_r15 == null ? null : purchaseItem_r15.quantity) * (purchaseItem_r15 == null ? null : purchaseItem_r15.unitPrice) - purchaseItem_r15.discount + purchaseItem_r15.taxValue), " ");
} }
function PurchaseOrderInvoiceComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 48)(1, "td", 49)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "RETURNED_ITEMS"), "");
} }
function PurchaseOrderInvoiceComponent_tr_78_span_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function PurchaseOrderInvoiceComponent_tr_78_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, PurchaseOrderInvoiceComponent_tr_78_span_20_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r24 = ctx.$implicit;
    const last_r25 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r24.taxName, "(", tax_r24.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r25);
} }
function PurchaseOrderInvoiceComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 50)(1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PurchaseOrderInvoiceComponent_tr_78_span_20_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const purchaseItem_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r22 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", purchaseItem_r21.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, purchaseItem_r21.unitPrice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", purchaseItem_r21.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", purchaseItem_r21.unitName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 11, purchaseItem_r21.discount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 13, purchaseItem_r21.taxValue), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", purchaseItem_r21.purchaseOrderItemTaxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 15, (purchaseItem_r21 == null ? null : purchaseItem_r21.quantity) * (purchaseItem_r21 == null ? null : purchaseItem_r21.unitPrice) - purchaseItem_r21.discount + purchaseItem_r21.taxValue), " ");
} }
function PurchaseOrderInvoiceComponent_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51)(1, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "TERM_AND_CONDITION"), "::");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.purchaseOrderForInvoice.termAndCondition, " ");
} }
function PurchaseOrderInvoiceComponent_div_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "NOTE"), "::");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.purchaseOrderForInvoice.note, " ");
} }
class PurchaseOrderInvoiceComponent {
    constructor(securityService) {
        this.securityService = securityService;
        this.isquatation = false;
    }
    ngOnInit() {
        this.subScribeCompanyProfile();
    }
    ngOnChanges(changes) {
        if (changes['purchaseOrder']) {
            this.isquatation = this.purchaseOrder.isPurchaseOrderRequest;
            this.purchaseOrder.totalQuantity = this.purchaseOrder.purchaseOrderItems.map(item => item.status == 0 ? item.quantity : (-1) * item.quantity).reduce((prev, next) => prev + next);
            this.purchaseOrderItems = this.purchaseOrder.purchaseOrderItems.filter(c => c.status == 0);
            this.purchaseOrderReturnsItems = this.purchaseOrder.purchaseOrderItems.filter(c => c.status == 1);
            this.purchaseOrderForInvoice = this.purchaseOrder;
            this.purchaseOrder = null;
        }
        setTimeout(() => {
            this.printInvoice();
        }, 1000);
    }
    subScribeCompanyProfile() {
        this.securityService.companyProfile.subscribe(data => {
            this.companyProfile = data;
        });
    }
    printInvoice() {
        let name = this.purchaseOrderForInvoice.orderNumber;
        let printContents, popupWin;
        printContents = document.getElementById('purchaseOrderInvoice').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
        <html>
          <head>
            <title>${name}</title>
            <style>
            @page { size: auto;  margin: 0mm;  margin-top:60px; }

            @media print {
              * {
                font-family: "Hind-Vadodara", sans-serif;
                -webkit-print-color-adjust: exact;
              }
            }
            tr{
              border: 1px solid #000;
              border-spacing: 2px;
              
            }
            table {
              border-collapse: collapse;
            }
            th, td {
              padding: 5px;
            }
            </style>
            <script>
            function loadHandler(){

            var is_chrome = function () { return Boolean(window.chrome); }
        if(is_chrome)
        {
           window.print();
           setTimeout(function(){window.close();}, 1000);
           //give them 10 seconds to print, then close
        }
        else
        {
           window.print();
           window.close();
        }
        }
        </script>
          </head>
      <body onload="loadHandler()">${printContents}</body>
        </html>
    `);
        popupWin.document.close();
    }
}
PurchaseOrderInvoiceComponent.ɵfac = function PurchaseOrderInvoiceComponent_Factory(t) { return new (t || PurchaseOrderInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_0__.SecurityService)); };
PurchaseOrderInvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PurchaseOrderInvoiceComponent, selectors: [["app-purchase-order-invoice"]], inputs: { purchaseOrder: "purchaseOrder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 120, vars: 89, consts: [[2, "position", "absolute", "left", "-15420px"], [2, "width", "100%", "display", "flex"], ["id", "purchaseOrderInvoice"], [1, "container", 2, "width", "80%", "margin-right", "auto", "margin-left", "auto"], [1, "brand-section"], [1, "row", 2, "display", "flex", "flex-wrap", "wrap"], [1, "col-6", 2, "width", "50%", "flex", "0 0 auto"], ["style", "margin-bottom: 0px !important;", 4, "ngIf"], [1, "company-details", 2, "float", "right", "text-align", "right"], ["class", "img-fluid", "style", "max-height:50px;\n                              object-position: left;", "src", "../../../assets/images/logo.png", 4, "ngIf"], ["class", "img-fluid", "style", "max-height:50px;\n                              object-position: left;", 3, "src", 4, "ngIf"], [1, "body-section", 2, "padding", "10px 10px 20px 20px", "border", "1px solid gray", "margin-top", "10px"], [1, "col-8", 2, "width", "50%", "flex", "0 0 auto"], [1, "heading", 2, "margin-bottom", "2px"], ["style", "width:50%;", 4, "ngIf"], [2, "margin-top", "2px"], [4, "ngIf"], [1, "col-4", 2, "width", "50%", "flex", "0 0 auto"], [2, "margin-top", "3px", "width", "60%"], [1, "body-section", 2, "padding", "16px", "border", "1px solid gray"], [1, "heading", 2, "margin-top", "2px"], [1, "table-bordered", 2, "background-color", "#fff", "width", "100%", "border-collapse", "collapse", "box-shadow", "0px 0px 5px 0.5px gray"], [2, "border", "1px solid #111", "background-color", "#f2f2f2"], [2, "padding-top", "08px", "padding-bottom", "08px", "border", "1px solid #dee2e6", "width", "5%"], [2, "padding-top", "08px", "padding-bottom", "08px", "border", "1px solid #dee2e6", "width", "20%"], [1, "w-20", 2, "padding-top", "08px", "padding-bottom", "08px", "border", "1px solid #dee2e6", "width", "20%"], [1, "w-20", 2, "padding-top", "08px", "padding-bottom", "08px", "border", "1px solid #dee2e6", "width", "8%"], [4, "ngFor", "ngForOf"], ["style", "vertical-align:middle!important;border:1px solid #dee2e6;background-color: blanchedalmond;", 4, "ngIf"], ["style", "background-color: blanchedalmond;;", 4, "ngFor", "ngForOf"], ["colspan", "3", 1, "text-right", 2, "text-align", "end", "border", "1px solid #dee2e6", "font-weight", "bold"], [1, "text-right", 2, "text-align", "end", "border", "1px solid #dee2e6", "font-weight", "bold"], [2, "text-align", "end", "border", "1px solid #dee2e6", "font-weight", "bold"], ["colspan", "6", 1, "text-right", 2, "text-align", "end", "border", "1px solid #dee2e6", "font-weight", "bold"], [2, "text-align", "end", "border", "1px solid #dee2e6"], ["style", "display:flex;flex-wrap: wrap;margin-top: 20px;", 4, "ngIf"], ["class", "row", "style", "display:flex;flex-wrap: wrap;margin-top: 20px;", 4, "ngIf"], [1, "row", 2, "display", "flex", "flex-wrap", "wrap", "margin-top", "20px"], [1, "col-8", 2, "width", "60%", "flex", "0 0 auto", "margin-top", "10px"], [1, "col-4", 2, "width", "40%"], [2, "margin-left", "40px"], [2, "margin-bottom", "0px !important"], ["src", "../../../assets/images/logo.png", 1, "img-fluid", 2, "max-height", "50px", "object-position", "left"], [1, "img-fluid", 2, "max-height", "50px", "object-position", "left", 3, "src"], [2, "width", "50%"], [2, "vertical-align", "middle!important", "text-align", "center", "border", "1px solid #dee2e6"], [2, "font-size", "10px"], ["style", "font-size: 10px;", 4, "ngFor", "ngForOf"], [2, "vertical-align", "middle!important", "border", "1px solid #dee2e6", "background-color", "blanchedalmond"], ["colspan", "100%"], [2, "background-color", "blanchedalmond"], [2, "display", "flex", "flex-wrap", "wrap", "margin-top", "20px"]], template: function PurchaseOrderInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, PurchaseOrderInvoiceComponent_h3_8_Template, 3, 3, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, PurchaseOrderInvoiceComponent_h3_9_Template, 3, 3, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div")(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "utcToLocalTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6)(19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, PurchaseOrderInvoiceComponent_img_20_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, PurchaseOrderInvoiceComponent_img_21_Template, 1, 1, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 11)(23, "div", 5)(24, "div", 12)(25, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, PurchaseOrderInvoiceComponent_div_31_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, PurchaseOrderInvoiceComponent_div_33_Template, 6, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, PurchaseOrderInvoiceComponent_div_34_Template, 5, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 17)(36, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, PurchaseOrderInvoiceComponent_div_43_Template, 3, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, PurchaseOrderInvoiceComponent_div_45_Template, 6, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, PurchaseOrderInvoiceComponent_div_46_Template, 5, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 19)(48, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "table", 21)(52, "thead")(53, "tr", 22)(54, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](76, PurchaseOrderInvoiceComponent_tr_76_Template, 24, 17, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, PurchaseOrderInvoiceComponent_tr_77_Template, 5, 3, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, PurchaseOrderInvoiceComponent_tr_78_Template, 24, 17, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "tr")(80, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](87, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](90, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](93, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "tr")(95, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](100, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "tr")(102, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](107, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](108, PurchaseOrderInvoiceComponent_div_108_Template, 5, 4, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](109, PurchaseOrderInvoiceComponent_div_109_Template, 5, 4, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 37)(111, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](114, "paymentStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, " ___________________________ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](119, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isquatation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isquatation);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.purchaseOrderForInvoice == null ? null : ctx.purchaseOrderForInvoice.orderNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 42, "ORDER_DATE"), " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 44, ctx.purchaseOrderForInvoice == null ? null : ctx.purchaseOrderForInvoice.poCreatedDate, "shortDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.companyProfile.logoUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.companyProfile.logoUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 47, "TO"), ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.purchaseOrderForInvoice == null ? null : ctx.purchaseOrderForInvoice.supplier == null ? null : ctx.purchaseOrderForInvoice.supplier.supplierName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice.supplier == null ? null : ctx.purchaseOrderForInvoice.supplier.billingAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice == null ? null : ctx.purchaseOrderForInvoice.supplier == null ? null : ctx.purchaseOrderForInvoice.supplier.mobileNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice.supplier == null ? null : ctx.purchaseOrderForInvoice.supplier.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 49, "FROM"), ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.companyProfile == null ? null : ctx.companyProfile.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.companyProfile == null ? null : ctx.companyProfile.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.companyProfile == null ? null : ctx.companyProfile.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.companyProfile == null ? null : ctx.companyProfile.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](50, 51, "PURCHASE_ORDER_ITEMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](56, 53, "NO."), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](59, 55, "DESCRIPTION"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](62, 57, "UNIT_PRICE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](65, 59, "QUANTITY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](68, 61, "DISCOUNT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](71, 63, "TAX"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](74, 65, "TOTAL_AMOUNT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.purchaseOrderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.purchaseOrderReturnsItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.purchaseOrderReturnsItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](82, 67, "TOTAL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.purchaseOrderForInvoice.totalQuantity, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](87, 69, ctx.purchaseOrderForInvoice.totalDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](90, 71, ctx.purchaseOrderForInvoice.totalTax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](93, 73, ctx.purchaseOrderForInvoice.totalAmount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](97, 75, "PAID"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](100, 77, ctx.purchaseOrderForInvoice.totalPaidAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](104, 79, "BALANCE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](107, 81, ctx.purchaseOrderForInvoice.totalAmount - ctx.purchaseOrderForInvoice.totalPaidAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice.termAndCondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.purchaseOrderForInvoice.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](113, 83, "PAYMENT_STATUS"), ":", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](114, 85, ctx.purchaseOrderForInvoice.paymentStatus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](119, 87, "AUTHORIZED_SIGNATURE"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.CustomCurrencyPipe, _pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_2__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_3__.PaymentStatusPipe], styles: [".bg-lightblue[_ngcontent-%COMP%] {\n  background-color: #D7ECFD !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1cmNoYXNlLW9yZGVyLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBQiUyMFBPU1xcRnJvbnRlbmRcXHNyY1xcYXBwXFxzaGFyZWRcXHB1cmNoYXNlLW9yZGVyLWludm9pY2VcXHB1cmNoYXNlLW9yZGVyLWludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxvQ0FBQTtBQ0FKIiwiZmlsZSI6InB1cmNoYXNlLW9yZGVyLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJnLWxpZ2h0Ymx1ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdFQ0ZEICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9IiwiLmJnLWxpZ2h0Ymx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEN0VDRkQgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 56717:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/sales-order-invoice/sales-order-invoice.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderInvoiceComponent": () => (/* binding */ SalesOrderInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pipes/custome-currency.pipe */ 68708);
/* harmony import */ var _pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/utc-to-localtime.pipe */ 18017);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/purchase-order-paymentStatus.pipe */ 80443);








function SalesOrderInvoiceComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 41);
} }
function SalesOrderInvoiceComponent_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 42);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.companyProfile.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function SalesOrderInvoiceComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.salesOrderForInvoice.customer.address, " ");
} }
function SalesOrderInvoiceComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "PHONE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.salesOrderForInvoice.customer.mobileNo, " ");
} }
function SalesOrderInvoiceComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "EMAIL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.salesOrderForInvoice.customer == null ? null : ctx_r4.salesOrderForInvoice.customer.email, " ");
} }
function SalesOrderInvoiceComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "ADDRESS"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.companyProfile == null ? null : ctx_r5.companyProfile.address, " ");
} }
function SalesOrderInvoiceComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "PHONE"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.companyProfile == null ? null : ctx_r6.companyProfile.phone, " ");
} }
function SalesOrderInvoiceComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "EMAIL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.companyProfile == null ? null : ctx_r7.companyProfile.email, " ");
} }
function SalesOrderInvoiceComponent_tr_78_span_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SalesOrderInvoiceComponent_tr_78_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SalesOrderInvoiceComponent_tr_78_span_20_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r16 = ctx.$implicit;
    const last_r17 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r16.taxName, "(", tax_r16.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r17);
} }
function SalesOrderInvoiceComponent_tr_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SalesOrderInvoiceComponent_tr_78_span_20_Template, 3, 3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const salesItem_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r14 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", salesItem_r13.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, salesItem_r13.unitPrice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", salesItem_r13.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", salesItem_r13.unitName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 11, salesItem_r13.discount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 13, salesItem_r13.taxValue), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", salesItem_r13.salesOrderItemTaxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 15, (salesItem_r13 == null ? null : salesItem_r13.quantity) * (salesItem_r13 == null ? null : salesItem_r13.unitPrice) - salesItem_r13.discount + salesItem_r13.taxValue), " ");
} }
function SalesOrderInvoiceComponent_tr_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 47)(1, "td", 48)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "RETURNED_ITEMS"));
} }
function SalesOrderInvoiceComponent_tr_80_span_20_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SalesOrderInvoiceComponent_tr_80_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SalesOrderInvoiceComponent_tr_80_span_20_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r22 = ctx.$implicit;
    const last_r23 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", tax_r22.taxName, "(", tax_r22.taxPercentage, "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !last_r23);
} }
function SalesOrderInvoiceComponent_tr_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 49)(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SalesOrderInvoiceComponent_tr_80_span_20_Template, 3, 3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "customCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const salesItem_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", i_r20 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", salesItem_r19.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, salesItem_r19.unitPrice), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", salesItem_r19.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(", salesItem_r19.unitName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 11, salesItem_r19.discount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 13, salesItem_r19.taxValue), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", salesItem_r19.purchaseOrderItemTaxes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 15, (salesItem_r19 == null ? null : salesItem_r19.quantity) * (salesItem_r19 == null ? null : salesItem_r19.unitPrice) - salesItem_r19.discount + salesItem_r19.taxValue), " ");
} }
function SalesOrderInvoiceComponent_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 50)(1, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "TERM_AND_CONDITION"), "::");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r11.salesOrderForInvoice.termAndCondition, " ");
} }
function SalesOrderInvoiceComponent_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 37)(1, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "NOTE"), "::");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r12.salesOrderForInvoice.note, " ");
} }
class SalesOrderInvoiceComponent {
    constructor(securityService) {
        this.securityService = securityService;
    }
    ngOnInit() {
        this.subScribeCompanyProfile();
    }
    ngOnChanges(changes) {
        if (changes['salesOrder']) {
            this.salesOrder.totalQuantity = this.salesOrder.salesOrderItems.map(item => item.status == 0 ? item.quantity : (-1) * item.quantity).reduce((prev, next) => prev + next);
            this.salesOrderItems = this.salesOrder.salesOrderItems.filter(c => c.status == 0);
            this.salesOrderReturnsItems = this.salesOrder.salesOrderItems.filter(c => c.status == 1);
            this.salesOrderForInvoice = this.salesOrder;
            this.salesOrder = null;
        }
        setTimeout(() => {
            this.printInvoice();
        }, 1000);
    }
    subScribeCompanyProfile() {
        this.securityService.companyProfile.subscribe(data => {
            this.companyProfile = data;
        });
    }
    printInvoice() {
        let name = this.salesOrderForInvoice.orderNumber;
        let printContents, popupWin;
        printContents = document.getElementById('salesOrderForInvoice').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
        <html>
          <head>
            <title>${name}</title>
            <style>
            @page { size: auto;  margin: 0mm;  margin-top:60px; }

            @media print {
              * {
                font-family: "Hind-Vadodara", sans-serif;
                -webkit-print-color-adjust: exact;
              }
            }
            tr{
              border: 1px solid #000;
              border-spacing: 2px;
            }
            table {
              border-collapse: collapse;
            }
            th, td {
              padding: 5px;
            }
            </style>
            <script>
            function loadHandler(){

            var is_chrome = function () { return Boolean(window.chrome); }
        if(is_chrome)
        {
           window.print();
           setTimeout(function(){window.close();}, 1000);
           //give them 10 seconds to print, then close
        }
        else
        {
           window.print();
           window.close();
        }
        }
        </script>
          </head>
      <body onload="loadHandler()">${printContents}</body>
        </html>
    `);
        popupWin.document.close();
    }
}
SalesOrderInvoiceComponent.ɵfac = function SalesOrderInvoiceComponent_Factory(t) { return new (t || SalesOrderInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_0__.SecurityService)); };
SalesOrderInvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SalesOrderInvoiceComponent, selectors: [["app-sales-order-invoice"]], inputs: { salesOrder: "salesOrder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 122, vars: 93, consts: [[2, "position", "absolute", "left", "-15420px"], [2, "width", "100%", "display", "flex"], ["id", "salesOrderForInvoice"], [1, "container", 2, "width", "80%", "margin-right", "auto", "margin-left", "auto"], [1, "brand-section"], [1, "row", 2, "display", "flex", "flex-wrap", "wrap"], [1, "col-6", 2, "width", "50%", "flex", "0 0 auto"], [2, "margin-bottom", "0px !important"], [1, "company-details", 2, "float", "right", "text-align", "right"], ["class", "img-fluid", "style", "max-height:50px;\n                              object-position: left;", "src", "../../../assets/images/logo.png", 4, "ngIf"], ["class", "img-fluid", "style", "max-height:50px;\n                              object-position: left;", 3, "src", 4, "ngIf"], [1, "body-section", 2, "padding", "10px 10px 20px 20px", "border", "1px solid gray", "margin-top", "10px"], [1, "col-8", 2, "width", "50%", "flex", "0 0 auto"], [1, "heading", 2, "margin-bottom", "2px"], ["style", "width:50%;", 4, "ngIf"], [2, "margin-top", "2px"], [4, "ngIf"], [1, "col-4", 2, "width", "50%", "flex", "0 0 auto"], [2, "margin-top", "3px", "width", "60%"], [1, "body-section", 2, "padding", "16px", "border", "1px solid gray"], [1, "heading", 2, "margin-top", "2px"], [1, "table-bordered", 2, "background-color", "#fff", "width", "100%", "border-collapse", "collapse", "box-shadow", "0px 0px 5px 0.5px gray"], [2, "border", "1px solid #111", "background-color", "#f2f2f2"], [2, "padding-top", "08px", "padding-bottom", "08px", "border", "1px solid #dee2e6", "width", "5%"], [2, "padding-top", "08px", "padding-bottom", "08px", "border", "1px solid #dee2e6", "width", "20%"], [1, "w-20", 2, "padding-top", "08px", "padding-bottom", "08px", "border", "1px solid #dee2e6", "width", "20%"], [1, "w-20", 2, "padding-top", "08px", "padding-bottom", "08px", "border", "1px solid #dee2e6", "width", "8%"], [4, "ngFor", "ngForOf"], ["style", "vertical-align:middle!important;border:1px solid #dee2e6;background-color: blanchedalmond;", 4, "ngIf"], ["style", "background-color: blanchedalmond;", 4, "ngFor", "ngForOf"], ["colspan", "3", 1, "text-right", 2, "text-align", "end", "border", "1px solid #dee2e6", "font-weight", "bold"], [1, "text-right", 2, "text-align", "end", "border", "1px solid #dee2e6", "font-weight", "bold"], [2, "text-align", "end", "border", "1px solid #dee2e6", "font-weight", "bold"], ["colspan", "6", 1, "text-right", 2, "text-align", "end", "border", "1px solid #dee2e6", "font-weight", "bold"], [2, "text-align", "end", "border", "1px solid #dee2e6"], ["style", "display:flex;flex-wrap: wrap;margin-top: 20px;", 4, "ngIf"], ["class", "row", "style", "display:flex;flex-wrap: wrap;margin-top: 20px;", 4, "ngIf"], [1, "row", 2, "display", "flex", "flex-wrap", "wrap", "margin-top", "20px"], [1, "col-8", 2, "width", "60%", "flex", "0 0 auto", "margin-top", "10px"], [1, "col-4", 2, "width", "40%"], [2, "margin-left", "40px"], ["src", "../../../assets/images/logo.png", 1, "img-fluid", 2, "max-height", "50px", "object-position", "left"], [1, "img-fluid", 2, "max-height", "50px", "object-position", "left", 3, "src"], [2, "width", "50%"], [2, "vertical-align", "middle!important", "text-align", "center", "border", "1px solid #dee2e6"], [2, "font-size", "10px"], ["style", "font-size: 10px;", 4, "ngFor", "ngForOf"], [2, "vertical-align", "middle!important", "border", "1px solid #dee2e6", "background-color", "blanchedalmond"], ["colspan", "100%"], [2, "background-color", "blanchedalmond"], [2, "display", "flex", "flex-wrap", "wrap", "margin-top", "20px"]], template: function SalesOrderInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div")(8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div")(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "utcToLocalTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SalesOrderInvoiceComponent_img_22_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SalesOrderInvoiceComponent_img_23_Template, 1, 1, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 11)(25, "div", 5)(26, "div", 12)(27, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, SalesOrderInvoiceComponent_div_33_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, SalesOrderInvoiceComponent_div_35_Template, 6, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, SalesOrderInvoiceComponent_div_36_Template, 5, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 17)(38, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, SalesOrderInvoiceComponent_div_45_Template, 7, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, SalesOrderInvoiceComponent_div_47_Template, 6, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, SalesOrderInvoiceComponent_div_48_Template, 5, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 19)(50, "h4", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "table", 21)(54, "thead")(55, "tr", 22)(56, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, SalesOrderInvoiceComponent_tr_78_Template, 24, 17, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, SalesOrderInvoiceComponent_tr_79_Template, 5, 3, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, SalesOrderInvoiceComponent_tr_80_Template, 24, 17, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "tr")(82, "td", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](89, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "td", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](92, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "td", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](95, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "tr")(97, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](102, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "tr")(104, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "td", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](109, "customCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, SalesOrderInvoiceComponent_div_110_Template, 5, 4, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](111, SalesOrderInvoiceComponent_div_111_Template, 5, 4, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 37)(113, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](116, "paymentStatus");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, " ___________________________ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 42, "SALES_ORDER_INVOICE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 44, "SALES_ORDER"), ": ", ctx.salesOrderForInvoice == null ? null : ctx.salesOrderForInvoice.orderNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 46, "ORDER_DATE"), " :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 48, ctx.salesOrderForInvoice == null ? null : ctx.salesOrderForInvoice.soCreatedDate, "shortDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.companyProfile.logoUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.companyProfile.logoUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 51, "TO"), ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.salesOrderForInvoice == null ? null : ctx.salesOrderForInvoice.customer == null ? null : ctx.salesOrderForInvoice.customer.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice.customer == null ? null : ctx.salesOrderForInvoice.customer.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice == null ? null : ctx.salesOrderForInvoice.customer == null ? null : ctx.salesOrderForInvoice.customer.mobileNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice.customer == null ? null : ctx.salesOrderForInvoice.customer.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 53, "FROM"), ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.companyProfile == null ? null : ctx.companyProfile.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.companyProfile == null ? null : ctx.companyProfile.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.companyProfile == null ? null : ctx.companyProfile.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.companyProfile == null ? null : ctx.companyProfile.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 55, "SALES_ORDER_ITEMS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](58, 57, "NO."), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 59, "DESCRIPTION"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](64, 61, "UNIT_PRICE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](67, 63, "QUANTITY"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](70, 65, "DISCOUNT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](73, 67, "TAX"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](76, 69, "TOTAL_AMOUNT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.salesOrderItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.salesOrderReturnsItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.salesOrderReturnsItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](84, 71, "TOTAL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.salesOrderForInvoice.totalQuantity, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](89, 73, ctx.salesOrderForInvoice.totalDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](92, 75, ctx.salesOrderForInvoice.totalTax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](95, 77, ctx.salesOrderForInvoice.totalAmount), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](99, 79, "PAID"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](102, 81, ctx.salesOrderForInvoice.totalPaidAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](106, 83, "BALANCE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](109, 85, ctx.salesOrderForInvoice.totalAmount - ctx.salesOrderForInvoice.totalPaidAmount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice.termAndCondition);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.salesOrderForInvoice.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](115, 87, "PAYMENT_STATUS"), ":", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](116, 89, ctx.salesOrderForInvoice.paymentStatus), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](121, 91, "AUTHORIZED_SIGNATURE"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _pipes_custome_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.CustomCurrencyPipe, _pipes_utc_to_localtime_pipe__WEBPACK_IMPORTED_MODULE_2__.UTCToLocalTime, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_3__.PaymentStatusPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy1vcmRlci1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _has_claim_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-claim.directive */ 79785);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/pipes.module */ 24586);
/* harmony import */ var _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/drag-drop.directive */ 33900);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-doc-viewer */ 13778);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 75103);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _add_reminder_scheduler_add_reminder_scheduler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-reminder-scheduler/add-reminder-scheduler.component */ 24929);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-pick-datetime-ex */ 92178);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 44770);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/quantities-unitprice.pipe */ 16695);
/* harmony import */ var _pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/quantities-unitprice-tax.pipe */ 76521);
/* harmony import */ var _purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase-order-invoice/purchase-order-invoice.component */ 92552);
/* harmony import */ var _pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/purchase-order-paymentStatus.pipe */ 80443);
/* harmony import */ var _sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sales-order-invoice/sales-order-invoice.component */ 56717);
/* harmony import */ var _pipes_inventory_source_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/inventory-source.pipe */ 94840);
/* harmony import */ var _directives_lang_dire_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/lang-dire.directive */ 84507);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
























class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_14__.NgxDocViewerModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__.NgxExtendedPdfViewerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__.OwlNativeDateTimeModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule, _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_has_claim_directive__WEBPACK_IMPORTED_MODULE_0__.HasClaimDirective,
        _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_2__.DragDropDirective,
        _add_reminder_scheduler_add_reminder_scheduler_component__WEBPACK_IMPORTED_MODULE_3__.AddReminderSchedulerComponent,
        _pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_4__.QuantitiesUnitPricePipe,
        _pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPriceTaxPipe,
        _purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderInvoiceComponent,
        _sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_8__.SalesOrderInvoiceComponent,
        _pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__.PaymentStatusPipe,
        _pipes_inventory_source_pipe__WEBPACK_IMPORTED_MODULE_9__.InventorySourcePipe,
        _directives_lang_dire_directive__WEBPACK_IMPORTED_MODULE_10__.LangDirDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
        ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_14__.NgxDocViewerModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__.NgxExtendedPdfViewerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__.OwlDateTimeModule,
        ng_pick_datetime_ex__WEBPACK_IMPORTED_MODULE_20__.OwlNativeDateTimeModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule], exports: [_has_claim_directive__WEBPACK_IMPORTED_MODULE_0__.HasClaimDirective,
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_1__.PipesModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule,
        _directives_drag_drop_directive__WEBPACK_IMPORTED_MODULE_2__.DragDropDirective,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule,
        _pipes_quantities_unitprice_pipe__WEBPACK_IMPORTED_MODULE_4__.QuantitiesUnitPricePipe,
        _pipes_quantities_unitprice_tax_pipe__WEBPACK_IMPORTED_MODULE_5__.QuantitiesUnitPriceTaxPipe,
        _purchase_order_invoice_purchase_order_invoice_component__WEBPACK_IMPORTED_MODULE_6__.PurchaseOrderInvoiceComponent,
        _sales_order_invoice_sales_order_invoice_component__WEBPACK_IMPORTED_MODULE_8__.SalesOrderInvoiceComponent,
        _pipes_purchase_order_paymentStatus_pipe__WEBPACK_IMPORTED_MODULE_7__.PaymentStatusPipe,
        _pipes_inventory_source_pipe__WEBPACK_IMPORTED_MODULE_9__.InventorySourcePipe,
        _directives_lang_dire_directive__WEBPACK_IMPORTED_MODULE_10__.LangDirDirective] }); })();


/***/ }),

/***/ 33007:
/*!*******************************************!*\
  !*** ./src/app/store/app-store.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStoreModule": () => (/* binding */ AppStoreModule)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 35585);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 50369);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ 35811);
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity-metadata */ 44349);
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/data */ 44824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);











class AppStoreModule {
}
AppStoreModule.ɵfac = function AppStoreModule_Factory(t) { return new (t || AppStoreModule)(); };
AppStoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppStoreModule });
AppStoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.StoreModule.forRoot({}),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.EffectsModule.forRoot([]),
        _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__.StoreDevtoolsModule.instrument(),
        _ngrx_data__WEBPACK_IMPORTED_MODULE_6__.EntityDataModule.forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_1__.entityConfig)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppStoreModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__.StoreDevtoolsModule, _ngrx_data__WEBPACK_IMPORTED_MODULE_6__.EntityDataModule] }); })();


/***/ }),

/***/ 44349:
/*!******************************************!*\
  !*** ./src/app/store/entity-metadata.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entityConfig": () => (/* binding */ entityConfig)
/* harmony export */ });
const entityMetadata = {
    Page: {},
    Action: {},
    PageAction: {},
    InquiryStatus: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    InquirySource: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    ExpenseCategory: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    Currency: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    ProductCategory: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    Tax: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    Unit: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    Brand: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    Warehouse: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    Country: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
    City: {
        entityDispatcherOptions: { optimisticDelete: false, optimisticUpsert: false }
    },
};
const pluralNames = {
    Page: "Pages",
    Action: "Actions",
    PageAction: "PageActions",
    InquiryStatus: "InquiryStatuses",
    InquirySource: "InquirySources",
    ExpenseCategory: "ExpenseCategories",
    Currency: "Currencies",
    ProductCategory: "ProductCategories",
    Tax: "Taxes",
    Unit: "Units",
    Brand: "Brands",
    Warehouse: "Warehouses",
    Country: "Countries",
    City: "Cities"
};
const entityConfig = {
    entityMetadata,
    pluralNames
};


/***/ }),

/***/ 26971:
/*!**************************************!*\
  !*** ./src/app/translater-loader.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);

function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}


/***/ }),

/***/ 92384:
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ 1584);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);













function ChangePasswordComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "CURRENT_PASSWORD_IS_REQUIRED"), " ");
} }
function ChangePasswordComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChangePasswordComponent_div_20_div_1_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.changePasswordForm.get("oldPasswordPassword").errors == null ? null : ctx_r0.changePasswordForm.get("oldPasswordPassword").errors.required);
} }
function ChangePasswordComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PASSWORD_IS_REQUIRED"), " ");
} }
function ChangePasswordComponent_div_27_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "YOU_HAVE_TO_ENTER_AT_LEAST_6_DIGIT"), " ");
} }
function ChangePasswordComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChangePasswordComponent_div_27_div_1_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChangePasswordComponent_div_27_div_2_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.changePasswordForm.get("password").errors == null ? null : ctx_r1.changePasswordForm.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.changePasswordForm.get("password").errors == null ? null : ctx_r1.changePasswordForm.get("password").errors.minlength);
} }
function ChangePasswordComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "CONFIRM_PASSWORD_IS_REQUIRED"), " ");
} }
function ChangePasswordComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ChangePasswordComponent_div_34_div_1_Template, 3, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.changePasswordForm.get("confirmPassword").errors == null ? null : ctx_r2.changePasswordForm.get("confirmPassword").errors.required);
} }
function ChangePasswordComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "PASSWORDS_DO_NOT_MATCH"), " ");
} }
class ChangePasswordComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
    constructor(userService, fb, dialogRef, data, toastrService, securityService, translationService) {
        super(translationService);
        this.userService = userService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.data = data;
        this.toastrService = toastrService;
        this.securityService = securityService;
        this.translationService = translationService;
        this.getLangDir();
    }
    ngOnInit() {
        this.createChangePasswordForm();
        this.changePasswordForm.get('email').setValue(this.data.userName);
    }
    createChangePasswordForm() {
        this.changePasswordForm = this.fb.group({
            email: [],
            oldPasswordPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        }, {
            validator: this.checkPasswords
        });
    }
    checkPasswords(group) {
        let pass = group.get('password').value;
        let confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : { notSame: true };
    }
    changePassword() {
        if (this.changePasswordForm.valid) {
            this.sub$.sink = this.userService.changePassword(this.createBuildObject()).subscribe(d => {
                this.toastrService.success(this.translationService.getValue('SUCCESSFULLY_CHANGED_PASSWORD'));
                this.securityService.logout();
                this.dialogRef.close();
            });
        }
    }
    createBuildObject() {
        return {
            email: '',
            oldPassword: this.changePasswordForm.get('oldPasswordPassword').value,
            newPassword: this.changePasswordForm.get('password').value,
            userName: this.changePasswordForm.get('email').value,
        };
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_2__.SecurityService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_3__.TranslationService)); };
ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 45, vars: 30, consts: [[1, "close-btn-modal", 3, "click"], [1, "fa", "fa-times"], [1, "container"], ["mat-dialog-title", "", 3, "dir"], ["mat-dialog-content", "", 3, "dir"], [3, "formGroup"], [1, "col-md-12"], [1, "form-group"], ["formControlName", "email", "type", "email", 1, "form-control"], [1, "text-danger"], ["autocomplete", "new-password", "formControlName", "oldPasswordPassword", "type", "password", 1, "form-control"], [4, "ngIf"], ["autocomplete", "new-password", "formControlName", "password", "type", "password", 1, "form-control"], ["autocomplete", "new-password", "formControlName", "confirmPassword", "type", "password", 1, "form-control"], ["mat-dialog-actions", "", 3, "dir"], ["cdkFocusInitial", "", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-times-circle"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_div_click_0_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "form", 5)(8, "div", 6)(9, "div", 7)(10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 6)(15, "div", 7)(16, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ChangePasswordComponent_div_20_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 6)(22, "div", 7)(23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ChangePasswordComponent_div_27_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 6)(29, "div", 7)(30, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ChangePasswordComponent_div_34_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ChangePasswordComponent_div_35_Template, 3, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 14)(37, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_37_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_41_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 16, "CHANGE_PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 18, "EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 20, "CURRENT_PASSWORD"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("oldPasswordPassword").touched && ctx.changePasswordForm.get("oldPasswordPassword").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 22, "NEW_PASSWORD"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("password").touched && ctx.changePasswordForm.get("password").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 24, "CONFIRM_PASSWORD"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmPassword").touched && ctx.changePasswordForm.get("confirmPassword").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmPassword").touched && ctx.changePasswordForm.hasError("notSame"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 26, "SAVE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 28, "CANCEL"), "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Dir, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 76811:
/*!*********************************************************!*\
  !*** ./src/app/user/my-profile/my-profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyProfileComponent": () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var src_app_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/base.component */ 83607);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../change-password/change-password.component */ 92384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ 1584);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/translation.service */ 16107);
/* harmony import */ var _core_security_security_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/security/security.service */ 40130);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
















function MyProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "h4", 31)(2, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyProfileComponent_div_6_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.changePassword()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 1, "CHANGE_PASSWORD"), " ");
} }
function MyProfileComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "FIRST_NAME_IS_REQUIRED"), " ");
} }
function MyProfileComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MyProfileComponent_div_17_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.userForm.get("firstName").errors == null ? null : ctx_r1.userForm.get("firstName").errors.required);
} }
function MyProfileComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "LAST_NAME_IS_REQUIRED"), " ");
} }
function MyProfileComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MyProfileComponent_div_24_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.userForm.get("lastName").errors == null ? null : ctx_r2.userForm.get("lastName").errors.required);
} }
function MyProfileComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "MOBILE_IS_REQUIRED"), " ");
} }
function MyProfileComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MyProfileComponent_div_31_div_1_Template, 3, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.userForm.get("phoneNumber").errors == null ? null : ctx_r3.userForm.get("phoneNumber").errors.required);
} }
function MyProfileComponent_img_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 35);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r5.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function MyProfileComponent_img_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 36);
} }
function MyProfileComponent_button_64_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyProfileComponent_button_64_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](60); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r4.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "ADD_PHOTO"), "");
} }
function MyProfileComponent_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyProfileComponent_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](60); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r4.click()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "CHANGE_PHOTO"), "");
} }
function MyProfileComponent_button_66_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyProfileComponent_button_66_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.removeImage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "REMOVE_PHOTO"), "");
} }
const _c0 = function () { return ["/"]; };
class MyProfileComponent extends src_app_base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(fb, userService, toastrService, dialog, translationService, securityService) {
        super(translationService);
        this.fb = fb;
        this.userService = userService;
        this.toastrService = toastrService;
        this.dialog = dialog;
        this.translationService = translationService;
        this.securityService = securityService;
        this.getLangDir();
    }
    ngOnInit() {
        this.createUserForm();
        this.sub$.sink = this.userService.getUserProfile().subscribe((user) => {
            this.user = user;
            if (this.user) {
                if (this.user.profilePhoto) {
                    this.imgURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + this.user.profilePhoto;
                }
                this.userForm.patchValue(this.user);
            }
        });
    }
    fileEvent($event) {
        this.fileSelected = $event.target.files[0];
        if (!this.fileSelected) {
            return;
        }
        const mimeType = this.fileSelected.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(this.fileSelected);
        // tslint:disable-next-line: variable-name
        reader.onload = (_event) => {
            const formData = new FormData();
            formData.append(this.fileSelected.name, this.fileSelected);
            this.userService.updateProfilePhoto(formData).subscribe((user) => {
                this.toastrService.success(this.translationService.getValue('PROFILE_PHOTO_UPDATED_SUCCESSFULLY'));
                this.imgURL = reader.result;
                this.securityService.updateUserProfile(user);
                $event.target.value = '';
            });
        };
    }
    removeImage() {
        const formData = new FormData();
        this.userService.updateProfilePhoto(formData).subscribe((user) => {
            this.toastrService.success(this.translationService.getValue('PROFILE_PHOTO_REMOVED_SUCCESSFULLY'));
            this.imgURL = "";
            this.securityService.updateUserProfile(user);
        });
    }
    createUserForm() {
        this.userForm = this.fb.group({
            id: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            address: ['']
        });
    }
    updateProfile() {
        if (this.userForm.valid) {
            const user = this.createBuildObject();
            this.sub$.sink = this.userService.updateUserProfile(user)
                .subscribe((user) => {
                this.toastrService.success(this.translationService.getValue('PROFILE_UPDATED_SUCCESSFULLY'));
                this.securityService.updateUserProfile(user);
            });
        }
        else {
            this.toastrService.error(this.translationService.getValue('PLEASE_ENTER_PROPER_DATA'));
        }
    }
    createBuildObject() {
        const user = {
            id: this.userForm.get('id').value,
            firstName: this.userForm.get('firstName').value,
            lastName: this.userForm.get('lastName').value,
            email: this.userForm.get('email').value,
            phoneNumber: this.userForm.get('phoneNumber').value,
            userName: this.userForm.get('email').value,
            address: this.userForm.get('address').value
        };
        return user;
    }
    changePassword() {
        this.dialog.open(_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordComponent, {
            width: '350px',
            direction: this.langDir,
            data: Object.assign({}, this.user)
        });
    }
}
MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) { return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_translation_service__WEBPACK_IMPORTED_MODULE_4__.TranslationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_security_security_service__WEBPACK_IMPORTED_MODULE_5__.SecurityService)); };
MyProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MyProfileComponent, selectors: [["app-my-profile"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 67, vars: 43, consts: [[1, "row", "mb-3", "align-items-center", "justify-content-between"], [1, "col-md-auto", "col-sm-auto"], [1, "section-title"], ["class", "col-md-auto col-sm-auto", 4, "ngIf"], [3, "formGroup"], [1, "row"], [1, "col-md-8"], [1, "col-md-6"], [1, "form-group"], [1, "text-danger"], ["formControlName", "firstName", "type", "text", 1, "form-control"], [4, "ngIf"], ["formControlName", "lastName", "type", "text", 1, "form-control"], ["formControlName", "phoneNumber", "type", "number", 1, "form-control"], ["formControlName", "email", "type", "email", 1, "form-control"], [1, "form-group", "col-md-12"], ["formControlName", "address", 1, "form-control"], [1, "m-top-10", "col-md-6"], ["cdkFocusInitial", "", 1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-save"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "routerLink"], [1, "fas", "fa-times-circle"], [1, "col-md-3"], [1, "row", "justify-content-center"], [3, "dir"], ["hidden", "", "name", "logo", "type", "file", "name", "Profile Photo", "fxFlex", "30", 3, "change"], ["fileInput", ""], ["class", "full-width", 3, "src", 4, "ngIf"], ["class", "full-width", "src", "../../../assets/images/user-profile.jpg", 4, "ngIf"], ["class", "btn btn-success btn-sm m-right-10", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger btn-sm", 3, "click", 4, "ngIf"], [1, "widget-title"], [1, "btn", "btn-success", "btn-sm", "m-right-10", 3, "click"], [1, "fas", "fa-key"], ["class", "text-danger", 4, "ngIf"], [1, "full-width", 3, "src"], ["src", "../../../assets/images/user-profile.jpg", 1, "full-width"], [1, "far", "fa-image"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "fas", "fa-trash-alt"]], template: function MyProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MyProfileComponent_div_6_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 4)(8, "div", 5)(9, "div", 6)(10, "div", 5)(11, "div", 7)(12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, MyProfileComponent_div_17_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 7)(19, "div", 8)(20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, MyProfileComponent_div_24_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 7)(26, "div", 8)(27, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, MyProfileComponent_div_31_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 7)(33, "div", 8)(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 15)(39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 17)(44, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyProfileComponent_Template_button_click_44_listener() { return ctx.updateProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 22)(53, "div", 23)(54, "mat-card", 24)(55, "mat-card-header", 24)(56, "mat-card-title", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MyProfileComponent_Template_input_change_59_listener($event) { return ctx.fileEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, MyProfileComponent_img_61_Template, 1, 1, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, MyProfileComponent_img_62_Template, 1, 0, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, MyProfileComponent_button_64_Template, 4, 3, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](65, MyProfileComponent_button_65_Template, 4, 3, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, MyProfileComponent_button_66_Template, 4, 3, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 24, "PROFILE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx.user == null ? null : ctx.user.provider));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 26, "FIRST_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.get("firstName").touched && ctx.userForm.get("firstName").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 28, "LAST_NAME"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.get("lastName").touched && ctx.userForm.get("lastName").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 30, "MOBILE_NUMBER"), " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.get("phoneNumber").touched && ctx.userForm.get("phoneNumber").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 32, "EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](41, 34, "ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 36, "SAVE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](42, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](51, 38, "CANCEL"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dir", ctx.langDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](58, 40, "PROFILE_PHOTO"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imgURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.imgURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.imgURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imgURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imgURL);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Dir, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardActions, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: [".img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border: 1px #d32f2f solid;\n  font-size: 0;\n}\n\n.img-wrap[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  z-index: 100;\n  background-color: #FFF;\n  padding: 2px 2px 3px 2px;\n  color: #000;\n  font-weight: bold;\n  cursor: pointer;\n  opacity: 0.2;\n  text-align: center;\n  font-size: 22px;\n  line-height: 10px;\n  border-radius: 50%;\n}\n\n.img-wrap[_ngcontent-%COMP%]:hover   .close[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxBQiUyMFBPU1xcRnJvbnRlbmRcXHNyY1xcYXBwXFx1c2VyXFxteS1wcm9maWxlXFxteS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0FDR0oiLCJmaWxlIjoibXktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctd3JhcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCAjZDMyZjJmIHNvbGlkO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG59XHJcbi5pbWctd3JhcCAuY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICByaWdodDogMnB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIHBhZGRpbmc6IDJweCAycHggM3B4IDJweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5pbWctd3JhcDpob3ZlciAuY2xvc2Uge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4iLCIuaW1nLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggI2QzMmYyZiBzb2xpZDtcbiAgZm9udC1zaXplOiAwO1xufVxuXG4uaW1nLXdyYXAgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAycHggMnB4IDNweCAycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaW1nLXdyYXA6aG92ZXIgLmNsb3NlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"] });


/***/ }),

/***/ 1584:
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/error-handler/common-http-error.service */ 48032);





class UserService {
    constructor(httpClient, commonHttpErrorService) {
        this.httpClient = httpClient;
        this.commonHttpErrorService = commonHttpErrorService;
    }
    updateUser(user) {
        const url = `user/${user.id}`;
        return this.httpClient.put(url, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    addUser(user) {
        const url = `user`;
        return this.httpClient.post(url, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    deleteUser(id) {
        const url = `user/${id}`;
        return this.httpClient.delete(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    getUser(id) {
        const url = `user/${id}`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    updateUserClaim(userClaims, userId) {
        const url = `UserClaim/${userId}`;
        return this.httpClient.put(url, { userClaims })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    resetPassword(user) {
        const url = `user/resetpassword`;
        return this.httpClient.post(url, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    changePassword(user) {
        const url = `user/changepassword`;
        return this.httpClient.post(url, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    updateUserProfile(user) {
        const url = `user/profile`;
        return this.httpClient.put(url, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    getUserProfile() {
        const url = `user/profile`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    getUsers(resource) {
        const url = `user/GetUsers`;
        const customParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('Fields', resource.fields)
            .set('OrderBy', resource.orderBy)
            .set('PageSize', resource.pageSize.toString())
            .set('Skip', resource.skip.toString())
            .set('SearchQuery', resource.searchQuery)
            .set('name', resource.name.toString());
        return this.httpClient.get(url, {
            params: customParams,
            observe: 'response'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    getRecentlyRegisteredUsers() {
        const url = `user/GetRecentlyRegisteredUsers`;
        return this.httpClient.get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
    updateProfilePhoto(form) {
        const url = `user/UpdateUserProfilePhoto`;
        return this.httpClient.post(url, form)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.commonHttpErrorService.handleError));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_error_handler_common_http_error_service__WEBPACK_IMPORTED_MODULE_0__.CommonHttpErrorService)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://abpos.somee.com/',
    allowFileExtension: ['pdf', 'doc', 'docx', 'xls', 'xlsx'],
    allowExtesions: ['pdf', 'doc', 'docx'],
    maximumFileSize: 104857600
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map