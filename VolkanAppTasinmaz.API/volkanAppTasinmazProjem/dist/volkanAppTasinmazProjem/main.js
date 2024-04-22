(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _tasinmaz_tasinmaz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasinmaz/tasinmaz.component */ "./src/app/tasinmaz/tasinmaz.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logs/logs.component */ "./src/app/logs/logs.component.ts");
/* harmony import */ var _tasinmaz_tasinmaz_add_tasinmaz_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasinmaz/tasinmaz-add/tasinmaz-add.component */ "./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.ts");
/* harmony import */ var _tasinmaz_tasinmaz_update_tasinmaz_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasinmaz/tasinmaz-update/tasinmaz-update.component */ "./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.ts");
/* harmony import */ var _users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/user-add/user-add.component */ "./src/app/users/user-add/user-add.component.ts");
/* harmony import */ var _users_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users/user-update/user-update.component */ "./src/app/users/user-update/user-update.component.ts");
/* harmony import */ var _logs_log_detail_log_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logs/log-detail/log-detail.component */ "./src/app/logs/log-detail/log-detail.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/admin.guard */ "./src/app/services/admin.guard.ts");
/* harmony import */ var _guards_auth_redirect_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth-redirect.guard */ "./src/app/guards/auth-redirect.guard.ts");
















var routes = [
    { path: 'auth/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_guards_auth_redirect_guard__WEBPACK_IMPORTED_MODULE_15__["AuthRedirectGuard"]] },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    {
        path: '',
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        children: [
            { path: 'tasinmaz', component: _tasinmaz_tasinmaz_component__WEBPACK_IMPORTED_MODULE_4__["TasinmazComponent"] },
            { path: 'kullanici-islemleri', component: _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]] },
            { path: 'tasinmaz/tasinmaz-add', component: _tasinmaz_tasinmaz_add_tasinmaz_add_component__WEBPACK_IMPORTED_MODULE_7__["TasinmazAddComponent"] },
            { path: 'tasinmaz/tasinmaz-update', component: _tasinmaz_tasinmaz_update_tasinmaz_update_component__WEBPACK_IMPORTED_MODULE_8__["TasinmazUpdateComponent"] },
            { path: 'kullanici-islemleri/user-add', component: _users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_9__["UserAddComponent"], canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]] },
            { path: 'kullanici-islemleri/user-update', component: _users_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_10__["UserUpdateComponent"], canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]] },
            { path: 'log-islemleri/logdetails', component: _logs_log_detail_log_detail_component__WEBPACK_IMPORTED_MODULE_11__["LogDetailComponent"], canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]] },
            { path: 'log-islemleri', component: _logs_logs_component__WEBPACK_IMPORTED_MODULE_6__["LogsComponent"], canActivate: [_services_admin_guard__WEBPACK_IMPORTED_MODULE_14__["AdminGuard"]] },
            { path: 'err', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"] }
        ],
    },
    { path: '**', redirectTo: '/err' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \"X\" çıkış düğmesi stilini özelleştirme */\r\n.iptal {\r\n  background-color: #dc3545;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  font-size: 20px;\r\n  line-height: 1;\r\n  display: flex;\r\n  align-items: center; /* Düğme içeriğini dikey hizala */\r\n  justify-content: flex-start; /* Düğme içeriğini yatayda sola hizala */\r\n  cursor: pointer; /* Üzerine gelindiğinde imleci bir el işareti yap */\r\n  transition: background-color 0.3s ease; /* Arka plan rengi için yumuşak bir geçiş ekleyin */\r\n}\r\n.iptal:hover {\r\n  background-color: #c82333;\r\n}\r\n/* \"Hoş Geldiniz\" metni stilini düzenleme */\r\n#welcome-text {\r\n  color: #337ab7; /* Hoşgeldiniz yazısının rengini ayarlayabilirsiniz */\r\n  font-weight: bold; /* Yazının kalınlığını artırabilirsiniz */\r\n  text-align: right; /* Metni sağa yaslayın */\r\n}\r\n#welcome-text-container {\r\n  background-color: silver; /* Kutu arka plan rengi */\r\n  padding: 10px; /* Kutu içeriği ile kenarları arasındaki boşluk */\r\n  border-radius: 5px; /* Kutunun kenarlarının yuvarlaklığı */\r\n  display: inline-block; /* Kutunun içeriğe uygun boyutlanmasını sağlar */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CLEVBQUUsaUNBQWlDO0VBQ3RELDJCQUEyQixFQUFFLHdDQUF3QztFQUNyRSxlQUFlLEVBQUUsbURBQW1EO0VBQ3BFLHNDQUFzQyxFQUFFLG1EQUFtRDtBQUM3RjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUEsMkNBQTJDO0FBQzNDO0VBQ0UsY0FBYyxFQUFFLHFEQUFxRDtFQUNyRSxpQkFBaUIsRUFBRSx5Q0FBeUM7RUFDNUQsaUJBQWlCLEVBQUUsd0JBQXdCO0FBQzdDO0FBRUE7RUFDRSx3QkFBd0IsRUFBRSx5QkFBeUI7RUFDbkQsYUFBYSxFQUFFLGlEQUFpRDtFQUNoRSxrQkFBa0IsRUFBRSxzQ0FBc0M7RUFDMUQscUJBQXFCLEVBQUUsZ0RBQWdEO0FBQ3pFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcIlhcIiDDp8Sxa8SxxZ8gZMO8xJ9tZXNpIHN0aWxpbmkgw7Z6ZWxsZcWfdGlybWUgKi9cclxuLmlwdGFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIETDvMSfbWUgacOnZXJpxJ9pbmkgZGlrZXkgaGl6YWxhICovXHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyAvKiBEw7zEn21lIGnDp2VyacSfaW5pIHlhdGF5ZGEgc29sYSBoaXphbGEgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIMOcemVyaW5lIGdlbGluZGnEn2luZGUgaW1sZWNpIGJpciBlbCBpxZ9hcmV0aSB5YXAgKi9cclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgLyogQXJrYSBwbGFuIHJlbmdpIGnDp2luIHl1bXXFn2FrIGJpciBnZcOnacWfIGVrbGV5aW4gKi9cclxufVxyXG5cclxuLmlwdGFsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzgyMzMzO1xyXG59XHJcblxyXG4vKiBcIkhvxZ8gR2VsZGluaXpcIiBtZXRuaSBzdGlsaW5pIGTDvHplbmxlbWUgKi9cclxuI3dlbGNvbWUtdGV4dCB7XHJcbiAgY29sb3I6ICMzMzdhYjc7IC8qIEhvxZ9nZWxkaW5peiB5YXrEsXPEsW7EsW4gcmVuZ2luaSBheWFybGF5YWJpbGlyc2luaXogKi9cclxuICBmb250LXdlaWdodDogYm9sZDsgLyogWWF6xLFuxLFuIGthbMSxbmzEscSfxLFuxLEgYXJ0xLFyYWJpbGlyc2luaXogKi9cclxuICB0ZXh0LWFsaWduOiByaWdodDsgLyogTWV0bmkgc2HEn2EgeWFzbGF5xLFuICovXHJcbn1cclxuXHJcbiN3ZWxjb21lLXRleHQtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7IC8qIEt1dHUgYXJrYSBwbGFuIHJlbmdpICovXHJcbiAgcGFkZGluZzogMTBweDsgLyogS3V0dSBpw6dlcmnEn2kgaWxlIGtlbmFybGFyxLEgYXJhc8SxbmRha2kgYm/Fn2x1ayAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogS3V0dW51biBrZW5hcmxhcsSxbsSxbiB5dXZhcmxha2zEscSfxLEgKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIEt1dHVudW4gacOnZXJpxJ9lIHV5Z3VuIGJveXV0bGFubWFzxLFuxLEgc2HEn2xhciAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav *ngIf=\"isLoggedin()\"></app-nav>\r\n\r\n<div *ngIf=\"isLoggedin()\" class=\"col-md-12\">\r\n  <div class=\"row justify-content-between m-5\">\r\n    <div class=\"col-md-2\">\r\n      <button class=\"btn btn-danger btn-lg iptal\" (click)=\"logOut();\">\r\n        <i class=\"fas fa-times\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"col-md-3 text-right\">\r\n      <div id=\"welcome-text-container\">\r\n        <span  id=\"welcome-text\">{{ name }}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.name = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Kullanıcı girişi yapıldığında veya token içeriği elde edildiğinde kullanıcı adını güncelleyin
        this.authService.userName$.subscribe(function (userName) {
            if (userName) {
                _this.name = "Hoş Geldiniz, " + userName;
            }
        });
    };
    AppComponent.prototype.isLoggedin = function () {
        return this.authService.loggedIn();
    };
    AppComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, tokenGetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tasinmaz_tasinmaz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasinmaz/tasinmaz.component */ "./src/app/tasinmaz/tasinmaz.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _logs_logs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logs/logs.component */ "./src/app/logs/logs.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _tasinmaz_tasinmaz_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasinmaz/tasinmaz-filter.pipe */ "./src/app/tasinmaz/tasinmaz-filter.pipe.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _tasinmaz_tasinmaz_add_tasinmaz_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tasinmaz/tasinmaz-add/tasinmaz-add.component */ "./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.ts");
/* harmony import */ var _tasinmaz_tasinmaz_update_tasinmaz_update_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tasinmaz/tasinmaz-update/tasinmaz-update.component */ "./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _users_users_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/users-filter.pipe */ "./src/app/users/users-filter.pipe.ts");
/* harmony import */ var _users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/user-add/user-add.component */ "./src/app/users/user-add/user-add.component.ts");
/* harmony import */ var _users_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./users/user-update/user-update.component */ "./src/app/users/user-update/user-update.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _logs_log_detail_log_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./logs/log-detail/log-detail.component */ "./src/app/logs/log-detail/log-detail.component.ts");
/* harmony import */ var _logs_log_detail_logdetails_filter_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./logs/log-detail/logdetails-filter.pipe */ "./src/app/logs/log-detail/logdetails-filter.pipe.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _services_admin_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/admin.guard */ "./src/app/services/admin.guard.ts");
/* harmony import */ var _guards_auth_redirect_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./guards/auth-redirect.guard */ "./src/app/guards/auth-redirect.guard.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_core_testing__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core/testing */ "./node_modules/@angular/core/fesm5/testing.js");
/* harmony import */ var _tasinmaz_tasinmaz_map_layer_opacity_layer_opacity_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./tasinmaz/tasinmaz-map/layer-opacity/layer-opacity.component */ "./src/app/tasinmaz/tasinmaz-map/layer-opacity/layer-opacity.component.ts");
/* harmony import */ var _tasinmaz_tasinmaz_map_layer_toggle_layer_toggle_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./tasinmaz/tasinmaz-map/layer-toggle/layer-toggle.component */ "./src/app/tasinmaz/tasinmaz-map/layer-toggle/layer-toggle.component.ts");
/* harmony import */ var _tasinmaz_tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./tasinmaz/tasinmaz-map/tasinmaz-map.component */ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.ts");






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _tasinmaz_tasinmaz_component__WEBPACK_IMPORTED_MODULE_8__["TasinmazComponent"],
                _tasinmaz_tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_36__["TasinmazMapComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _logs_logs_component__WEBPACK_IMPORTED_MODULE_10__["LogsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"],
                _tasinmaz_tasinmaz_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["TasinmazFilterPipe"],
                _tasinmaz_tasinmaz_add_tasinmaz_add_component__WEBPACK_IMPORTED_MODULE_16__["TasinmazAddComponent"],
                _tasinmaz_tasinmaz_update_tasinmaz_update_component__WEBPACK_IMPORTED_MODULE_17__["TasinmazUpdateComponent"],
                _users_users_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["UsersFilterPipe"],
                _users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_20__["UserAddComponent"],
                _users_user_update_user_update_component__WEBPACK_IMPORTED_MODULE_21__["UserUpdateComponent"],
                _logs_log_detail_log_detail_component__WEBPACK_IMPORTED_MODULE_27__["LogDetailComponent"],
                _logs_log_detail_logdetails_filter_pipe__WEBPACK_IMPORTED_MODULE_28__["LogdetailsFilterPipe"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_29__["NotFoundComponent"],
                _tasinmaz_tasinmaz_map_layer_toggle_layer_toggle_component__WEBPACK_IMPORTED_MODULE_35__["LayerToggleComponent"],
                _tasinmaz_tasinmaz_map_layer_opacity_layer_opacity_component__WEBPACK_IMPORTED_MODULE_34__["LayerOpacityComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_22__["ToastrModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_26__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ["https://localhost:5001"],
                        blacklistedRoutes: ["example.com/examplebadroute/"],
                        headerName: "Authorization",
                        authScheme: "Bearer",
                        skipWhenExpired: true
                    }
                })
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_26__["JwtInterceptor"],
                    multi: true
                },
                _services_page_title_service__WEBPACK_IMPORTED_MODULE_12__["PageTitleService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_18__["AlertifyService"], _services_notification_service__WEBPACK_IMPORTED_MODULE_23__["NotificationService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"], _services_admin_guard__WEBPACK_IMPORTED_MODULE_30__["AdminGuard"], _guards_auth_redirect_guard__WEBPACK_IMPORTED_MODULE_31__["AuthRedirectGuard"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_32__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function tokenGetter() {
    var authService = _angular_core_testing__WEBPACK_IMPORTED_MODULE_33__["TestBed"].get(_services_auth_service__WEBPACK_IMPORTED_MODULE_24__["AuthService"]);
    var token = authService.token;
    return token ? "Bearer " + token : null;
}


/***/ }),

/***/ "./src/app/guards/auth-redirect.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/auth-redirect.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthRedirectGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRedirectGuard", function() { return AuthRedirectGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthRedirectGuard = /** @class */ (function () {
    function AuthRedirectGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthRedirectGuard.prototype.canActivate = function (next, state) {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/tasinmaz']);
            return false;
        }
    };
    AuthRedirectGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthRedirectGuard);
    return AuthRedirectGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\r\n    height:48px;\r\n  }\r\n  #loginFrame {\r\n    max-width : 420px;\r\n    width:100%;\r\n    margin:0 auto;\r\n  }\r\n  #login {\r\n    cursor:pointer;\r\n  }\r\n  .levelUp {z-index : 9;transform : translateX(32px) translateY(32px);transition:all 300ms linear;}\r\n  .levelDown {z-index : 8;transform : translateX(-32px) translateY(-32px);transition:all 300ms linear;}\r\n  #signup {\r\n    width:100%;\r\n    position:absolute;\r\n  }\r\n  .levelDown:after {\r\n    position:absolute;\r\n    content:\" \";\r\n    width:100%;\r\n    height:100%;\r\n    left:0;\r\n    top:0;\r\n    background : rgba(0,0,0,0.7);\r\n    border-radius:4px;\r\n  }\r\n  .levelDown:hover:after{\r\n    cursor:pointer;\r\n    background : rgba(0,0,0,0.1);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQSxVQUFVLFdBQVcsQ0FBQyw2Q0FBNkMsQ0FBQywyQkFBMkIsQ0FBQztFQUNoRyxZQUFZLFdBQVcsQ0FBQywrQ0FBK0MsQ0FBQywyQkFBMkIsQ0FBQztFQUVwRztJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxNQUFNO0lBQ04sS0FBSztJQUNMLDRCQUE0QjtJQUM1QixpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLGNBQWM7SUFDZCw0QkFBNEI7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6NDhweDtcclxuICB9XHJcbiAgI2xvZ2luRnJhbWUge1xyXG4gICAgbWF4LXdpZHRoIDogNDIwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICB9XHJcbiAgI2xvZ2luIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gIH1cclxuICAubGV2ZWxVcCB7ei1pbmRleCA6IDk7dHJhbnNmb3JtIDogdHJhbnNsYXRlWCgzMnB4KSB0cmFuc2xhdGVZKDMycHgpO3RyYW5zaXRpb246YWxsIDMwMG1zIGxpbmVhcjt9XHJcbiAgLmxldmVsRG93biB7ei1pbmRleCA6IDg7dHJhbnNmb3JtIDogdHJhbnNsYXRlWCgtMzJweCkgdHJhbnNsYXRlWSgtMzJweCk7dHJhbnNpdGlvbjphbGwgMzAwbXMgbGluZWFyO31cclxuICAgXHJcbiAgI3NpZ251cCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgfVxyXG4gICBcclxuICAubGV2ZWxEb3duOmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgY29udGVudDpcIiBcIjtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIGxlZnQ6MDtcclxuICAgIHRvcDowO1xyXG4gICAgYmFja2dyb3VuZCA6IHJnYmEoMCwwLDAsMC43KTtcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gIH1cclxuICAgXHJcbiAgLmxldmVsRG93bjpob3ZlcjphZnRlcntcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZCA6IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isAuthenticated\" class=\"vh-100 d-flex align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-5 col-md-6 col-sm-8 col-xs-10 mx-auto\">\r\n        <div id=\"loginFrame\" class=\"position-relative\">\r\n          <div id=\"login\" class=\"levelUp shadow bg-white card p-4\">\r\n            <div class=\"container\">\r\n              <h2 class=\"mb-4 text-center\">Taşınmaz Yönetim Girişi</h2>\r\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"mx-3 my-3\">\r\n                <div class=\"mb-3\">\r\n                  <label for=\"email\" class=\"form-label\">Email</label>\r\n                  <input id=\"email\" formControlName=\"email\" class=\"mt-2 form-control\" required autocomplete=\"email\">\r\n                  <div *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').dirty\" class=\"text-danger\">\r\n                    Email alanı boş bırakılamaz.\r\n                  </div>\r\n                  <div *ngIf=\"loginForm.get('email').hasError('email') && loginForm.get('email').dirty\" class=\"text-danger\">\r\n                    Geçerli bir email adresi girin.\r\n                  </div>\r\n                </div>\r\n                <div class=\"mb-3\">\r\n                  <label for=\"password\" class=\"form-label\">Parola</label>\r\n                  <input type=\"password\" formControlName=\"password\" class=\"mt-2 form-control\" required autocomplete=\"current-password\">\r\n                  <div *ngIf=\"loginForm.get('password').hasError('required') && loginForm.get('password').dirty\" class=\"text-danger\">\r\n                    Parola alanı boş bırakılamaz.\r\n                  </div>\r\n                  <div *ngIf=\"loginForm.get('password').hasError('minlength') && loginForm.get('password').dirty\" class=\"text-danger\">\r\n                    Parola en az 8 karakter uzunluğunda olmalıdır.\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"mb-3\">\r\n                  <div class=\"form-check\">\r\n                    <input type=\"checkbox\" formControlName=\"rememberMe\" class=\"form-check-input\" id=\"rememberMe\">\r\n                    <label class=\"form-check-label\" for=\"rememberMe\">Beni Hatırla</label>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"mb-3\">\r\n                  <button class=\"btn btn-lg btn-success w-100\" type=\"submit\">Giriş Yap</button>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <a href=\"#\" class=\"text-muted\">Parolanızı mı unuttunuz?</a>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createLoginForm();
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
    };
    LoginComponent.prototype.login = function () {
        if (this.loginForm.valid) {
            var userForLoginDto = {
                email: this.loginForm.get('email').value,
                password: this.loginForm.get('password').value
            };
            this.authService.login(userForLoginDto);
            console.log(userForLoginDto);
        }
    };
    LoginComponent.prototype.logOut = function () {
        this.authService.logOut();
    };
    Object.defineProperty(LoginComponent.prototype, "isAuthenticated", {
        get: function () {
            return this.authService.loggedIn();
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logs/log-detail/log-detail.component.css":
/*!**********************************************************!*\
  !*** ./src/app/logs/log-detail/log-detail.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Arama alanı stilini özelleştirme */\r\n.custom-search {\r\n    background-color: #ddd; /* Updated background color */\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}\r\n/* \"Ara\" butonu stilini özelleştirme */\r\n.btn-outline-primary {\r\n    background-color: #dc3545; /* Buton arka plan rengi */\r\n    color: #fff; /* Buton metin rengi */\r\n    border-color: #007bff; /* Buton kenar rengi */\r\n}\r\n.btn-outline-primary:hover {\r\n    background-color: #0056b3; /* Hover durumunda arka plan rengi */\r\n    border-color: #0056b3; /* Hover durumunda kenar rengi */\r\n    color: #fff; /* Hover durumunda metin rengi */\r\n}\r\n/* Tablo stilleri */\r\n.table {\r\n    background-color: #f0f0f0; /* Updated table background color */\r\n    border: 1px solid #ddd;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n/* Tablo başlık stilleri */\r\n.table thead {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n}\r\n/* Tablo başlık hücreleri */\r\n.table th {\r\n    padding: 12px;\r\n    text-align: center;\r\n    background-color: #0062cc; /* Updated header background color */\r\n    color: #fff;\r\n}\r\n/* Tablo veri hücreleri */\r\n.table td {\r\n    padding: 10px;\r\n    text-align: center;\r\n    border-top: 1px solid #ddd;\r\n}\r\n/* Zebra çizgili tablo (opsiyonel) */\r\n.table tbody tr:nth-child(even) {\r\n    background-color: #e0e0e0;\r\n}\r\n/* Hücre içeriği stilini özelleştirme (örnek olarak) */\r\n.table td {\r\n    color: #333;\r\n    background-color: #f0f0f0; /* Updated cell background color */\r\n}\r\n/* Seçili satır stilini özelleştirme (opsiyonel) */\r\n.table tbody tr.selected {\r\n    background-color: #ffffcc;\r\n}\r\n/* \"Sil\" düğmesi stilini özelleştirme */\r\n.action-button {\r\n    margin: 5px;\r\n    padding: 10px 20px;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n.action-button:disabled {\r\n    background-color: #ccc;\r\n    cursor: not-allowed;\r\n}\r\n.add-button {\r\n    background-color: #28a745;\r\n    color: #fff;\r\n}\r\n.delete-button {\r\n    background-color: #dc3545;\r\n    color: #fff;\r\n}\r\n.edit-button {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n}\r\n.report-button {\r\n    background-color: #333;\r\n    color: #fff;\r\n    float: right;\r\n    margin-bottom: 50px;\r\n    margin-right: 200px;\r\n    border-width: 2px;\r\n}\r\n.action-button:hover {\r\n    filter: brightness(1.2);\r\n}\r\n/* Taşınmaz bulunamadı mesajı stilini özelleştirme */\r\n.no-data-message {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}\r\n:host {\r\n    background-color: #007bff; /* Updated background color */\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncy9sb2ctZGV0YWlsL2xvZy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckM7SUFDSSxzQkFBc0IsRUFBRSw2QkFBNkI7SUFDckQsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1Q0FBdUM7QUFDM0M7QUFDQSxzQ0FBc0M7QUFDdEM7SUFDSSx5QkFBeUIsRUFBRSwwQkFBMEI7SUFDckQsV0FBVyxFQUFFLHNCQUFzQjtJQUNuQyxxQkFBcUIsRUFBRSxzQkFBc0I7QUFDakQ7QUFFQTtJQUNJLHlCQUF5QixFQUFFLG9DQUFvQztJQUMvRCxxQkFBcUIsRUFBRSxnQ0FBZ0M7SUFDdkQsV0FBVyxFQUFFLGdDQUFnQztBQUNqRDtBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLHlCQUF5QixFQUFFLG1DQUFtQztJQUM5RCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QixFQUFFLG9DQUFvQztJQUMvRCxXQUFXO0FBQ2Y7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUVBLG9DQUFvQztBQUNwQztJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLHNEQUFzRDtBQUN0RDtJQUNJLFdBQVc7SUFDWCx5QkFBeUIsRUFBRSxrQ0FBa0M7QUFDakU7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSx1Q0FBdUM7QUFDdkM7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBLG9EQUFvRDtBQUNwRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7QUFFQTtJQUNJLHlCQUF5QixFQUFFLDZCQUE2QjtJQUN4RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2xvZ3MvbG9nLWRldGFpbC9sb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcmFtYSBhbGFuxLEgc3RpbGluaSDDtnplbGxlxZ90aXJtZSAqL1xyXG4uY3VzdG9tLXNlYXJjaCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyAvKiBVcGRhdGVkIGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuLyogXCJBcmFcIiBidXRvbnUgc3RpbGluaSDDtnplbGxlxZ90aXJtZSAqL1xyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1OyAvKiBCdXRvbiBhcmthIHBsYW4gcmVuZ2kgKi9cclxuICAgIGNvbG9yOiAjZmZmOyAvKiBCdXRvbiBtZXRpbiByZW5naSAqL1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmOyAvKiBCdXRvbiBrZW5hciByZW5naSAqL1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzOyAvKiBIb3ZlciBkdXJ1bXVuZGEgYXJrYSBwbGFuIHJlbmdpICovXHJcbiAgICBib3JkZXItY29sb3I6ICMwMDU2YjM7IC8qIEhvdmVyIGR1cnVtdW5kYSBrZW5hciByZW5naSAqL1xyXG4gICAgY29sb3I6ICNmZmY7IC8qIEhvdmVyIGR1cnVtdW5kYSBtZXRpbiByZW5naSAqL1xyXG59XHJcblxyXG4vKiBUYWJsbyBzdGlsbGVyaSAqL1xyXG4udGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyogVXBkYXRlZCB0YWJsZSBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBUYWJsbyBiYcWfbMSxayBzdGlsbGVyaSAqL1xyXG4udGFibGUgdGhlYWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBUYWJsbyBiYcWfbMSxayBow7xjcmVsZXJpICovXHJcbi50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYzsgLyogVXBkYXRlZCBoZWFkZXIgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qIFRhYmxvIHZlcmkgaMO8Y3JlbGVyaSAqL1xyXG4udGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4vKiBaZWJyYSDDp2l6Z2lsaSB0YWJsbyAob3BzaXlvbmVsKSAqL1xyXG4udGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi8qIEjDvGNyZSBpw6dlcmnEn2kgc3RpbGluaSDDtnplbGxlxZ90aXJtZSAow7ZybmVrIG9sYXJhaykgKi9cclxuLnRhYmxlIHRkIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDsgLyogVXBkYXRlZCBjZWxsIGJhY2tncm91bmQgY29sb3IgKi9cclxufVxyXG5cclxuLyogU2XDp2lsaSBzYXTEsXIgc3RpbGluaSDDtnplbGxlxZ90aXJtZSAob3BzaXlvbmVsKSAqL1xyXG4udGFibGUgdGJvZHkgdHIuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZjYztcclxufVxyXG5cclxuLyogXCJTaWxcIiBkw7zEn21lc2kgc3RpbGluaSDDtnplbGxlxZ90aXJtZSAqL1xyXG4uYWN0aW9uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmRlbGV0ZS1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZWRpdC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucmVwb3J0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxufVxyXG5cclxuLyogVGHFn8Sxbm1heiBidWx1bmFtYWTEsSBtZXNhasSxIHN0aWxpbmkgw7Z6ZWxsZcWfdGlybWUgKi9cclxuLm5vLWRhdGEtbWVzc2FnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvKiBVcGRhdGVkIGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/logs/log-detail/log-detail.component.html":
/*!***********************************************************!*\
  !*** ./src/app/logs/log-detail/log-detail.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-10 col-lg-8 col-12 p-5 custom-search\">\r\n      <form>\r\n        <div class=\"input-group\">\r\n          <input\r\n            class=\"form-control bg-secondary text-white mx-3\"\r\n            type=\"search\"\r\n            placeholder=\"Ara\"\r\n            aria-label=\"Ara\"\r\n            [(ngModel)]=\"searchText\"\r\n            name=\"searchText\"\r\n          />\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-primary\" (click)=\"search()\" type=\"button\">\r\n              <i class=\"fas fa-search\"></i> Ara\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container mt-5\">\r\n  <div *ngIf=\"!pagedLogs || pagedLogs.length === 0\" class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <div class=\"no-data-message\">\r\n        Log Kayıtları Bulunamadı.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"pagedLogs && pagedLogs.length > 0\" class=\"row justify-content-center\">\r\n    <div class=\"col-md-10 col-lg-8 col-12\">\r\n      <form>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered excel-style\">\r\n            <thead>\r\n              <tr>\r\n                <th></th>\r\n                <th>Durum</th>\r\n                <th>Kullanıcı ID</th>\r\n                <th>İşlem Tipi</th>\r\n                <th>Tarih/Saat</th>\r\n                <th>IP</th> <!-- IP adresi -->\r\n                <th>Açıklama</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <!-- Belirli bir sayfa için verileri filtrele -->\r\n              <tr *ngFor=\"let log of pagedLogs | logdetailsFilter: searchText\">\r\n                <td>\r\n                  <input type=\"hidden\" [value]=\"log.logid\" />\r\n                  <input style=\"text-align: right;\" type=\"checkbox\" [value]=\"log.logid\" (change)=\"onCheckboxClicked($event, log)\" />\r\n                </td>\r\n                <td>{{ setUserStatus(log.durum) }}</td>\r\n                <td>{{ log.userid }}</td>\r\n                <td>{{ log.islemtipi }}</td>\r\n                <td>{{ log.tarih }}</td>\r\n                <td>{{ log.logip }}</td>\r\n                <td>{{ log.aciklama }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <mat-paginator\r\n              [length]=\"logs.length\"\r\n              [pageSize]=\"itemsPerPage\"\r\n              [pageSizeOptions]=\"[itemsPerPage]\"\r\n              showFirstLastButtons=\"true\"\r\n              (page)=\"changePage($event)\"\r\n              class=\"pagination-icons\"\r\n            ></mat-paginator>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row justify-content-between mt-3\">\r\n    <div class=\"col-6\"></div>\r\n    <div class=\"col-6\">\r\n      <button name=\"actionButtons\" class=\"btn btn-primary report-button float-right\" (click)=\"printLogs()\">\r\n        <i class=\"fas fa-print\"></i> Yazdır\r\n      </button>\r\n    </div>\r\n    <div #printSection  class=\"col-6\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/logs/log-detail/log-detail.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/logs/log-detail/log-detail.component.ts ***!
  \*********************************************************/
/*! exports provided: LogDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDetailComponent", function() { return LogDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");








var LogDetailComponent = /** @class */ (function () {
    function LogDetailComponent(logService, pageTitleService, alertifyService, userService, authService) {
        this.logService = logService;
        this.pageTitleService = pageTitleService;
        this.alertifyService = alertifyService;
        this.userService = userService;
        this.authService = authService;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.selectedLogs = [];
        this.pageSize = 10;
        this.searchText = '';
        this.tokenUserId = parseInt(this.authService.getIdentity().nameidentifier);
        this.selectedLogs = this.logService.getSelectedLogs();
        this.selectedLogsSpecific = [];
    }
    LogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setPageTitle('Log Detayları');
        this.userService.getUserById(this.tokenUserId).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
            _this.loadLogs();
        });
    };
    LogDetailComponent.prototype.loadLogs = function () {
        var _this = this;
        this.logService.getAll().subscribe(function (data) {
            _this.logs = data["data"];
            console.log('Tüm veriler:', _this.logs);
            _this.logs.sort(function (a, b) { return b.logid - a.logid; });
            _this.updatePagedLogs();
            _this.selectedLogs = _this.logService.getSelectedLogs();
            console.log('Seçili Kullanıcılar:', _this.selectedLogs);
        }, function (error) {
            console.error('Veri alınamadı:', error);
        });
    };
    LogDetailComponent.prototype.search = function () {
        var _this = this;
        if (this.searchText.trim() === '') {
            this.pagedLogs = this.logs.slice(0, this.itemsPerPage);
        }
        else {
            var filteredLogs = this.logs.filter(function (log) {
                return (((log.durum === true && 'başarılı'.includes(_this.searchText)) ||
                    (log.durum === false && 'başarısız'.includes(_this.searchText))) ||
                    (log.userid && log.userid.toString().includes(_this.searchText.toLowerCase())) ||
                    (log.islemtipi && log.islemtipi.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (log.tarih && log.tarih.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (log.logip && log.logip.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (log.aciklama && log.aciklama.toLowerCase().includes(_this.searchText.toLowerCase())));
            });
            this.pagedLogs = filteredLogs.slice(0, this.itemsPerPage);
        }
        this.currentPage = 1;
    };
    LogDetailComponent.prototype.changePage = function (event) {
        this.currentPage = event.pageIndex + 1;
        this.updatePagedLogs();
        this.selectedLogs = [];
        this.selectedLogsSpecific = [];
        this.logService.setSelectedLogs(this.selectedLogs);
    };
    LogDetailComponent.prototype.setUserStatus = function (durum) {
        return durum == false ? 'Başarısız' : 'Başarılı';
    };
    LogDetailComponent.prototype.onCheckboxClicked = function (event, log) {
        if (event.target.checked) {
            console.log(log);
            this.selectedLogs.push(log);
            this.selectedLogsSpecific.push(log);
            this.logService.setSelectedLogs(this.selectedLogs);
            console.log(this.selectedLogs[0].logid);
        }
        else {
            var index = this.selectedLogs.findIndex(function (item) { return item.logid === log.logid; });
            if (index !== -1) {
                this.selectedLogs.splice(index, 1);
                this.selectedLogsSpecific.splice(index, 1);
                this.logService.setSelectedLogs(this.selectedLogs);
            }
        }
    };
    LogDetailComponent.prototype.printLogs = function () {
        if (this.selectedLogs.length === 0) {
            this.alertifyService.error('En az bir adet log kaydı seçiniz...');
            return;
        }
        var currentDate = new Date();
        var formattedDate = currentDate.toISOString().slice(0, 19).replace(/[-T]/g, '').replace(/:/g, '');
        var workbook = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_new();
        var logsData = this.selectedLogs.map(function (log) {
            return {
                'Durum': log.durum,
                'Kullanıcı ID': log.userid,
                'İşlem Tipi': log.islemtipi,
                'Tarih/Saat': log.tarih,
                'IP': log.logip,
                'Açıklama': log.aciklama,
            };
        });
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].json_to_sheet(logsData);
        worksheet['A1'] = { v: 'Durum', s: { font: { bold: true } } };
        worksheet['B1'] = { v: 'Kullanıcı ID', s: { font: { bold: true } } };
        worksheet['C1'] = { v: 'İşlem Tipi', s: { font: { bold: true } } };
        worksheet['D1'] = { v: 'Tarih/Saat', s: { font: { bold: true } } };
        worksheet['E1'] = { v: 'IP', s: { font: { bold: true } } };
        worksheet['F1'] = { v: 'Açıklama', s: { font: { bold: true } } };
        xlsx__WEBPACK_IMPORTED_MODULE_4__["utils"].book_append_sheet(workbook, worksheet, 'Log Raporu');
        var excelBlob = xlsx__WEBPACK_IMPORTED_MODULE_4__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        var fileName = "log-raporu-" + formattedDate + ".xlsx";
        var file = new File([excelBlob], fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        var url = URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        URL.revokeObjectURL(url);
        this.alertifyService.success('Log Kayıtları İletildi...');
    };
    LogDetailComponent.prototype.updatePagedLogs = function () {
        var startIndex = (this.currentPage - 1) * this.itemsPerPage;
        var endIndex = startIndex + this.itemsPerPage;
        this.pagedLogs = this.logs.slice(startIndex, endIndex);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('printSection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LogDetailComponent.prototype, "printSection", void 0);
    LogDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-detail',
            template: __webpack_require__(/*! ./log-detail.component.html */ "./src/app/logs/log-detail/log-detail.component.html"),
            styles: [__webpack_require__(/*! ./log-detail.component.css */ "./src/app/logs/log-detail/log-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
            src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_5__["PageTitleService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], LogDetailComponent);
    return LogDetailComponent;
}());



/***/ }),

/***/ "./src/app/logs/log-detail/logdetails-filter.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/logs/log-detail/logdetails-filter.pipe.ts ***!
  \***********************************************************/
/*! exports provided: LogdetailsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogdetailsFilterPipe", function() { return LogdetailsFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogdetailsFilterPipe = /** @class */ (function () {
    function LogdetailsFilterPipe() {
    }
    LogdetailsFilterPipe.prototype.transform = function (logs, searchText) {
        if (!logs || !searchText) {
            return logs;
        }
        searchText = searchText.toLowerCase();
        return logs.filter(function (log) {
            // Burada farklı filtreleme kriterlerini ekleyebilirsiniz
            if ((log.userid && log.userid.toString().includes(searchText)) ||
                (log.islemtipi && log.islemtipi.toLowerCase().includes(searchText)) ||
                (log.tarih && log.tarih.toLowerCase().includes(searchText)) ||
                (log.logip && log.logip.toLowerCase().includes(searchText)) ||
                (log.aciklama && log.aciklama.toLowerCase().includes(searchText)) ||
                ((log.durum === true && 'başarılı'.includes(searchText)) ||
                    (log.durum === false && 'başarısız'.includes(searchText)))) {
                return true;
            }
            return false;
        });
    };
    LogdetailsFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'logdetailsFilter'
        })
    ], LogdetailsFilterPipe);
    return LogdetailsFilterPipe;
}());



/***/ }),

/***/ "./src/app/logs/logs.component.css":
/*!*****************************************!*\
  !*** ./src/app/logs/logs.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Tablo stilleri */\r\n.table {\r\n    background-color: #f0f0f0; /* Updated table background color */\r\n    border: 1px solid #ddd;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n/* Tablo başlık stilleri */\r\n.table thead {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n}\r\n/* Tablo başlık hücreleri */\r\n.table th {\r\n    padding: 12px;\r\n    text-align: center;\r\n    background-color: #0062cc; /* Updated header background color */\r\n    color: #fff;\r\n}\r\n/* Tablo veri hücreleri */\r\n.table td {\r\n    padding: 10px;\r\n    text-align: center;\r\n    border-top: 1px solid #ddd;\r\n}\r\n/* Zebra çizgili tablo (opsiyonel) */\r\n.table tbody tr:nth-child(even) {\r\n    background-color: #e0e0e0;\r\n}\r\n/* Hücre içeriği stilini özelleştirme (örnek olarak) */\r\n.table td {\r\n    color: #333;\r\n    background-color: #f0f0f0; /* Updated cell background color */\r\n}\r\n/* Seçili satır stilini özelleştirme (opsiyonel) */\r\n.table tbody tr.selected {\r\n    background-color: #ffffcc;\r\n}\r\n/* \"Sil\" düğmesi stilini özelleştirme */\r\n.action-button {\r\n    margin: 5px;\r\n    padding: 10px 20px;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n.action-button:disabled {\r\n    background-color: #ccc;\r\n    cursor: not-allowed;\r\n}\r\n.report-button {\r\n    background-color: #333;\r\n    color: #fff;\r\n    float: right;\r\n    margin-bottom: 50px;\r\n    margin-right: 200px;\r\n    border-width: 2px;\r\n}\r\n.action-button:hover {\r\n    filter: brightness(1.2);\r\n}\r\n/* Taşınmaz bulunamadı mesajı stilini özelleştirme */\r\n.no-data-message {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}\r\n:host {\r\n    background-color: #007bff; /* Updated background color */\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncy9sb2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG1CQUFtQjtBQUNuQjtJQUNJLHlCQUF5QixFQUFFLG1DQUFtQztJQUM5RCxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QixFQUFFLG9DQUFvQztJQUMvRCxXQUFXO0FBQ2Y7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUVBLG9DQUFvQztBQUNwQztJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLHNEQUFzRDtBQUN0RDtJQUNJLFdBQVc7SUFDWCx5QkFBeUIsRUFBRSxrQ0FBa0M7QUFDakU7QUFFQSxrREFBa0Q7QUFDbEQ7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSx1Q0FBdUM7QUFDdkM7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBLG9EQUFvRDtBQUNwRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1Q0FBdUM7QUFDM0M7QUFFQTtJQUNJLHlCQUF5QixFQUFFLDZCQUE2QjtJQUN4RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2xvZ3MvbG9ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIFRhYmxvIHN0aWxsZXJpICovXHJcbi50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiBVcGRhdGVkIHRhYmxlIGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFRhYmxvIGJhxZ9sxLFrIHN0aWxsZXJpICovXHJcbi50YWJsZSB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi8qIFRhYmxvIGJhxZ9sxLFrIGjDvGNyZWxlcmkgKi9cclxuLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MmNjOyAvKiBVcGRhdGVkIGhlYWRlciBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLyogVGFibG8gdmVyaSBow7xjcmVsZXJpICovXHJcbi50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi8qIFplYnJhIMOnaXpnaWxpIHRhYmxvIChvcHNpeW9uZWwpICovXHJcbi50YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuLyogSMO8Y3JlIGnDp2VyacSfaSBzdGlsaW5pIMO2emVsbGXFn3Rpcm1lICjDtnJuZWsgb2xhcmFrKSAqL1xyXG4udGFibGUgdGQge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwOyAvKiBVcGRhdGVkIGNlbGwgYmFja2dyb3VuZCBjb2xvciAqL1xyXG59XHJcblxyXG4vKiBTZcOnaWxpIHNhdMSxciBzdGlsaW5pIMO2emVsbGXFn3Rpcm1lIChvcHNpeW9uZWwpICovXHJcbi50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmNjO1xyXG59XHJcblxyXG4vKiBcIlNpbFwiIGTDvMSfbWVzaSBzdGlsaW5pIMO2emVsbGXFn3Rpcm1lICovXHJcbi5hY3Rpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLnJlcG9ydC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b246aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbn1cclxuXHJcbi8qIFRhxZ/EsW5tYXogYnVsdW5hbWFkxLEgbWVzYWrEsSBzdGlsaW5pIMO2emVsbGXFn3Rpcm1lICovXHJcbi5uby1kYXRhLW1lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjsgLyogVXBkYXRlZCBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/logs/logs.component.html":
/*!******************************************!*\
  !*** ./src/app/logs/logs.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div *ngIf=\"!pagedLogs || pagedLogs.length === 0\" class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <div class=\"no-data-message\">\r\n        Log Kayıtları Bulunamadı.\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"pagedLogs && pagedLogs.length > 0\" class=\"row justify-content-center\">\r\n    <div class=\"col-md-10 col-lg-8 col-12\">\r\n      <form>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-bordered excel-style\">\r\n            <thead>\r\n              <tr>\r\n                <th>Durum</th>\r\n                <th>Kullanıcı ID</th>\r\n                <th>İşlem Tipi</th>\r\n                <th>Tarih/Saat</th>\r\n                <th>IP</th> \r\n                <th>Açıklama</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n\r\n              <tr *ngFor=\"let log of pagedLogs\">\r\n                <td>{{ setUserStatus(log.durum)}}</td>\r\n                <td>{{ log.userid }}</td>\r\n                <td>{{ log.islemtipi }}</td>\r\n                <td>{{ log.tarih }}</td>\r\n                <td>{{ log.logip }}</td>\r\n                <td>{{ log.aciklama }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"d-flex justify-content-center\">\r\n            <mat-paginator\r\n              [length]=\"logs.length\"\r\n              [pageSize]=\"itemsPerPage\"\r\n              [pageSizeOptions]=\"[itemsPerPage]\"\r\n              showFirstLastButtons=\"true\"\r\n              (page)=\"changePage($event)\"\r\n              class=\"pagination-icons\"\r\n            ></mat-paginator>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row justify-content-between mt-3\">\r\n    <div class=\"col-6\"></div>\r\n    <div class=\"col-6\">\r\n      <button name=\"actionButtons\" class=\"btn btn-primary report-button float-right\" routerLink=\"/log-islemleri/logdetails\" routerLinkActive=\"router-link-active\" >\r\n        <i class=\"fas fa-info-circle\"></i> Log Detayları\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/logs/logs.component.ts":
/*!****************************************!*\
  !*** ./src/app/logs/logs.component.ts ***!
  \****************************************/
/*! exports provided: LogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsComponent", function() { return LogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");






var LogsComponent = /** @class */ (function () {
    function LogsComponent(logService, pageTitleService, authService, userService) {
        this.logService = logService;
        this.pageTitleService = pageTitleService;
        this.authService = authService;
        this.userService = userService;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.pageSize = 10;
        this.searchText = '';
        this.tokenUserId = parseInt(this.authService.getIdentity().nameidentifier);
    }
    LogsComponent.prototype.setUserStatus = function (durum) {
        return durum == false ? 'Başarısız' : 'Başarılı';
    };
    LogsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setPageTitle('Log İşlemleri');
        this.userService.getUserById(this.tokenUserId).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
            _this.loadLogs();
        });
    };
    LogsComponent.prototype.loadLogs = function () {
        var _this = this;
        this.logService.getAll().subscribe(function (data) {
            _this.logs = data["data"];
            console.log('Tüm veriler:', _this.logs);
            _this.logs.sort(function (a, b) { return b.logid - a.logid; });
            _this.updatePagedLogs();
        }, function (error) {
            console.error('Veri alınamadı:', error);
        });
    };
    LogsComponent.prototype.changePage = function (event) {
        this.currentPage = event.pageIndex + 1;
        this.updatePagedLogs();
    };
    LogsComponent.prototype.updatePagedLogs = function () {
        var startIndex = (this.currentPage - 1) * this.itemsPerPage;
        var endIndex = startIndex + this.itemsPerPage;
        this.pagedLogs = this.logs.slice(startIndex, endIndex);
    };
    LogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__(/*! ./logs.component.html */ "./src/app/logs/logs.component.html"),
            providers: [_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"]],
            styles: [__webpack_require__(/*! ./logs.component.css */ "./src/app/logs/logs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_log_service__WEBPACK_IMPORTED_MODULE_3__["LogService"],
            _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], LogsComponent);
    return LogsComponent;
}());



/***/ }),

/***/ "./src/app/models/tasinmaz.ts":
/*!************************************!*\
  !*** ./src/app/models/tasinmaz.ts ***!
  \************************************/
/*! exports provided: Tasinmaz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tasinmaz", function() { return Tasinmaz; });
var Tasinmaz = /** @class */ (function () {
    function Tasinmaz() {
    }
    return Tasinmaz;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Navbar stil */\r\n.navbar {\r\n    background-color: #343a40; /* Navbar arkaplan rengi */\r\n    border-bottom: 4px solid #007bff; /* Alt çizgi rengi */\r\n  }\r\n/* Navbar linkleri için stil */\r\n.navbar-nav .nav-link {\r\n    color: #fff; /* Metin rengi */\r\n    font-weight: bold; /* Kalın metin */\r\n    padding: 15px 20px; /* Link içeriği ile sağ ve sol boşluklar */\r\n    transition: background-color 0.3s, color 0.3s; /* Renk değişimi animasyonu */\r\n  }\r\n/* Navbar linkleri üzerine gelindiğinde stil */\r\n.navbar-nav .nav-link:hover {\r\n    background-color: #007bff; /* Link üzerine gelindiğinde arkaplan rengi */\r\n    color: #fff; /* Link üzerine gelindiğinde metin rengi */\r\n  }\r\n/* Aktif navbar linki için stil */\r\n.navbar-nav .nav-item.active .nav-link {\r\n    background-color: #007bff; /* Aktif linkin arkaplan rengi */\r\n    color: #fff; /* Aktif linkin metin rengi */\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtJQUNJLHlCQUF5QixFQUFFLDBCQUEwQjtJQUNyRCxnQ0FBZ0MsRUFBRSxvQkFBb0I7RUFDeEQ7QUFFQSw4QkFBOEI7QUFDOUI7SUFDRSxXQUFXLEVBQUUsZ0JBQWdCO0lBQzdCLGlCQUFpQixFQUFFLGdCQUFnQjtJQUNuQyxrQkFBa0IsRUFBRSwwQ0FBMEM7SUFDOUQsNkNBQTZDLEVBQUUsNkJBQTZCO0VBQzlFO0FBRUEsOENBQThDO0FBQzlDO0lBQ0UseUJBQXlCLEVBQUUsNkNBQTZDO0lBQ3hFLFdBQVcsRUFBRSwwQ0FBMEM7RUFDekQ7QUFFQSxpQ0FBaUM7QUFDakM7SUFDRSx5QkFBeUIsRUFBRSxnQ0FBZ0M7SUFDM0QsV0FBVyxFQUFFLDZCQUE2QjtFQUM1QyIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5hdmJhciBzdGlsICovXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDsgLyogTmF2YmFyIGFya2FwbGFuIHJlbmdpICovXHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwN2JmZjsgLyogQWx0IMOnaXpnaSByZW5naSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBOYXZiYXIgbGlua2xlcmkgacOnaW4gc3RpbCAqL1xyXG4gIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZjsgLyogTWV0aW4gcmVuZ2kgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAvKiBLYWzEsW4gbWV0aW4gKi9cclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDsgLyogTGluayBpw6dlcmnEn2kgaWxlIHNhxJ8gdmUgc29sIGJvxZ9sdWtsYXIgKi9cclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgY29sb3IgMC4zczsgLyogUmVuayBkZcSfacWfaW1pIGFuaW1hc3lvbnUgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogTmF2YmFyIGxpbmtsZXJpIMO8emVyaW5lIGdlbGluZGnEn2luZGUgc3RpbCAqL1xyXG4gIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvKiBMaW5rIMO8emVyaW5lIGdlbGluZGnEn2luZGUgYXJrYXBsYW4gcmVuZ2kgKi9cclxuICAgIGNvbG9yOiAjZmZmOyAvKiBMaW5rIMO8emVyaW5lIGdlbGluZGnEn2luZGUgbWV0aW4gcmVuZ2kgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQWt0aWYgbmF2YmFyIGxpbmtpIGnDp2luIHN0aWwgKi9cclxuICAubmF2YmFyLW5hdiAubmF2LWl0ZW0uYWN0aXZlIC5uYXYtbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvKiBBa3RpZiBsaW5raW4gYXJrYXBsYW4gcmVuZ2kgKi9cclxuICAgIGNvbG9yOiAjZmZmOyAvKiBBa3RpZiBsaW5raW4gbWV0aW4gcmVuZ2kgKi9cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"container-fluid position-relative\">\r\n    <a class=\"navbar-brand\">{{ pageTitle }}</a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-bs-toggle=\"collapse\"\r\n      data-bs-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"d-flex\">\r\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n        <li *ngIf=\"isLoggedIn && isAdmin\" class=\"nav-item\" routerLinkActive=\"active-menu-item active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n          <a class=\"nav-link\" aria-current=\"page\" routerLink=\"/log-islemleri\">Log İşlemleri</a>\r\n        </li>\r\n        <li *ngIf=\"isLoggedIn && isAdmin\" class=\"nav-item\" routerLinkActive=\"active-menu-item active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n          <a class=\"nav-link\" routerLink=\"/kullanici-islemleri\">Kullanıcı İşlemleri</a>\r\n        </li>\r\n        <li id=\"ozel\" class=\"nav-item\" routerLinkActive=\"active-menu-item active\" [routerLinkActiveOptions]=\"{ exact: true }\">\r\n          <a class=\"nav-link\" routerLink=\"/tasinmaz\">Mevcut Taşınmazlar Listesi</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var NavComponent = /** @class */ (function () {
    function NavComponent(pageTitleService, cdr, authService) {
        this.pageTitleService = pageTitleService;
        this.cdr = cdr;
        this.authService = authService;
        this.pageTitle = 'Mevcut Taşınmazlar Listesi';
        this.isLoggedIn = false;
        this.isAdmin = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleSubscription = this.pageTitleService.pageTitle$.subscribe(function (title) {
            _this.pageTitle = title;
            _this.cdr.detectChanges();
        });
        this.authService.userName$.subscribe(function (userName) {
            _this.isLoggedIn = !!userName; // Kullanıcı adı varsa giriş yapılmış demektir
            _this.isAdmin = _this.authService.isAdmin(); // Admin rolüne sahipse true döner
        });
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.pageTitleSubscription.unsubscribe(); // Aboneliği burada iptal et
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-found-container {\r\n    text-align: center;\r\n    margin-top: 50px;\r\n  }\r\n  \r\n  h1 {\r\n    font-size: 120px;\r\n    color: #f44336; /* Kırmızı renk örneği */\r\n  }\r\n  \r\n  p {\r\n    font-size: 24px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  a {\r\n    text-decoration: none;\r\n    color: #2196F3; /* Mavi renk örneği */\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    display: inline-block;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjLEVBQUUsd0JBQXdCO0VBQzFDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjLEVBQUUscUJBQXFCO0lBQ3JDLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgIGNvbG9yOiAjZjQ0MzM2OyAvKiBLxLFybcSxesSxIHJlbmsgw7ZybmXEn2kgKi9cclxuICB9XHJcbiAgXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjE5NkYzOyAvKiBNYXZpIHJlbmsgw7ZybmXEn2kgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"not-found-container\">\r\n  <h1>404</h1>\r\n  <p>Üzgünüz, aradığınız sayfa bulunamadı.</p>\r\n  <a routerLink=\"/tasinmaz\">Geri Dönmek için Tıklayınız...</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(userService, authService) {
        this.userService = userService;
        this.authService = authService;
        this.tokenUserId = parseInt(this.authService.getIdentity().nameidentifier);
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserById(this.tokenUserId).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
        });
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/admin.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/services/admin.guard.ts ***!
  \*****************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        if (this.authService.loggedIn() && this.authService.isAdmin()) {
            // Kullanıcı giriş yapmış ve "Admin" rolüne sahipse, sayfayı görüntülemesine izin ver
            return true;
        }
        else {
            // Kullanıcı giriş yapmamışsa veya "Admin" rolüne sahip değilse, hata sayfasına yönlendir
            this.router.navigate(['/err']); // Hata sayfasının yolunu uygun şekilde güncelleyin
            return false;
        }
    };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService.prototype.confirm = function (title, message, onConfirm, onCancel) {
        alertify.confirm(title, message, function () { onConfirm(); }, // Evet düğmesine tıklanınca çalışacak işlev
        function () { onCancel(); } // Hayır düğmesine tıklanınca çalışacak işlev
        ).set('labels', { ok: 'Evet', cancel: 'Hayır' }); // Düğme etiketlerini ayarla
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isUserLoggedIn = this.authService.loggedIn();
        if (isUserLoggedIn) {
            var isAccessTokenExpired = this.authService.isTokenExpired();
            if (!isAccessTokenExpired) {
                return true;
            }
            else {
                // Token süresi dolduğunda, kullanıcıyı oturumu kapat ve giriş sayfasına yönlendir
                this.authService.logoutForGuard();
                return false;
            }
        }
        else {
            this.router.navigateByUrl("auth/login");
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _jwt_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jwt-config.service */ "./src/app/services/jwt-config.service.ts");









var AuthService = /** @class */ (function () {
    function AuthService(httpClient, router, alertifyService, jwtConfigService) {
        this.httpClient = httpClient;
        this.router = router;
        this.alertifyService = alertifyService;
        this.jwtConfigService = jwtConfigService;
        this.apiUrl = "https://localhost:5001/api/auth";
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtHelperService"]();
        this.TOKEN_KEY = "token";
        this.IsUserLogged = false;
        this.userTokenDatas = [];
        this.userNameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userName$ = this.userNameSubject.asObservable();
    }
    // Kullanıcı adını güncellemek için bu fonksiyonu kullanabilirsiniz
    AuthService.prototype.updateUserName = function (userName) {
        this.userNameSubject.next(userName);
    };
    AuthService.prototype.getJwtConfig = function () {
        return this.jwtConfigService.getJwtConfig();
    };
    AuthService.prototype.getIdentity = function () {
        if (this.loggedIn()) {
            var token = this.token;
            var decoded = this.jwtHelper.decodeToken(token);
            // TokenInfo arayüzüne uygun olarak kullanıcı bilgilerini al
            var identity = {
                nameidentifier: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
                email: decoded["email"],
                name: decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
                role: decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"],
                nbf: decoded["nbf"],
                exp: decoded["exp"],
                iss: decoded["iss"],
                aud: decoded["aud"]
            };
            return identity;
        }
        return null;
    };
    AuthService.prototype.login = function (userForLoginDto) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": "Bearer " + this.token });
        this.httpClient
            .post(this.apiUrl + "/login", userForLoginDto, { headers: headers })
            .subscribe(function (data) {
            var responseData = data["data"];
            _this.saveToken(responseData.token); // API'den gelen token'i kaydedin
            _this.userToken = responseData;
            console.log(responseData);
            console.log(_this.jwtHelper.decodeToken(responseData.token));
            _this.decodedToken = _this.jwtHelper.decodeToken(responseData.token);
            _this.alertifyService.success("Sisteme giriş yapıldı");
            _this.router.navigateByUrl("/tasinmaz");
            _this.IsUserLogged = true;
            //this.updateUserName(this.getIdentity().name);
        }, function (error) {
            console.log(error);
            _this.alertifyService.error("Kullanıcı adı veya Şifre Hatalı...");
        });
    };
    AuthService.prototype.register = function (userForRegister, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": "Bearer " + this.token });
        var body = {
            email: userForRegister.email,
            password: password,
            firstName: userForRegister.firstName,
            lastName: userForRegister.lastName,
            role: userForRegister.role,
            adres: userForRegister.adres
        };
        return this.httpClient.post(this.apiUrl + "/register", body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            console.log('Kullanıcı başarıyla eklendi.');
            return response; // API'den dönen veriyi geri döndür
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            // Kayıt başarısızsa
            console.error('Kullanıcı kaydı başarısız: ' + error);
            throw error;
        }));
    };
    AuthService.prototype.isAdmin = function () {
        try {
            var role = this.getIdentity().role;
            if (role && role === 'Admin') {
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            // Rol bilgisini bulamadığımızda, konsola hata mesajı yazmayın ve kullanıcıyı giriş ekranına yönlendirin
            this.router.navigate(['auth/login']); // Giriş ekranının yolunu uygun şekilde güncelleyin
            return false;
        }
    };
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    };
    AuthService.prototype.logOut = function () {
        var _this = this;
        this.alertifyService.confirm("UYARI!", "Çıkış yapmak istediğinize emin misiniz?", function () {
            localStorage.removeItem(_this.TOKEN_KEY);
            _this.alertifyService.success("Sistemden çıkış yapıldı");
            _this.IsUserLogged = false;
            _this.router.navigateByUrl("auth/login");
            console.log(_this.TOKEN_KEY);
        }, function () {
            _this.alertifyService.error("Çıkış işlemi iptal edildi.");
        });
    };
    AuthService.prototype.logoutForGuard = function () {
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigateByUrl("auth/login");
        this.IsUserLogged = false;
    };
    AuthService.prototype.loggedIn = function () {
        return localStorage.getItem(this.TOKEN_KEY) !== null ?
            this.IsUserLogged = true : false;
    };
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return localStorage.getItem(this.TOKEN_KEY);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.refreshToken = function () {
        var _this = this;
        var refreshToken = localStorage.getItem("refreshToken");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": "Bearer " + this.token });
        return this.httpClient.post(this.apiUrl + "/refresh-token", { refreshToken: refreshToken }, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            // Assuming the API returns a new access token, update it in the local storage
            _this.saveToken(data.token);
            return data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    };
    AuthService.prototype.isTokenExpired = function () {
        var token = this.token;
        if (token) {
            console.log(this.jwtHelper.isTokenExpired(token));
            return this.jwtHelper.isTokenExpired(token);
        }
        return true; // Token doesn't exist or is expired
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"],
            _jwt_config_service__WEBPACK_IMPORTED_MODULE_8__["JwtConfigService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/coordinate-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/coordinate-service.service.ts ***!
  \********************************************************/
/*! exports provided: CoordinateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoordinateService", function() { return CoordinateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CoordinateService = /** @class */ (function () {
    function CoordinateService() {
        this.coordinateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.coordinate$ = this.coordinateSubject.asObservable();
    }
    CoordinateService.prototype.setCoordinates = function (coordinates) {
        this.coordinateSubject.next(coordinates);
    };
    CoordinateService.prototype.getCoordinates = function () {
        return this.coordinate$;
    };
    CoordinateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CoordinateService);
    return CoordinateService;
}());



/***/ }),

/***/ "./src/app/services/jwt-config.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/jwt-config.service.ts ***!
  \************************************************/
/*! exports provided: JwtConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtConfigService", function() { return JwtConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Örnek bir JWT ayarları servisi

var JwtConfigService = /** @class */ (function () {
    function JwtConfigService() {
        this.jwtConfig = {
            issuer: 'cccyyyccc.com/',
            audience: 'vvvyyyccc.com/',
            securitykey: 'bestsuperideakeystoremythebestkeystore'
        };
    }
    JwtConfigService.prototype.getJwtConfig = function () {
        return this.jwtConfig;
    };
    JwtConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JwtConfigService);
    return JwtConfigService;
}());



/***/ }),

/***/ "./src/app/services/log.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






var LogService = /** @class */ (function () {
    function LogService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.selectedLogs = [];
        this.path = "https://localhost:5001/api/";
    }
    LogService.prototype.getAll = function () {
        return this.httpClient.get(this.path + "logs/getall");
    };
    LogService.prototype.getSelectedLogs = function () {
        return this.selectedLogs;
    };
    LogService.prototype.setSelectedLogs = function (logs) {
        this.selectedLogs = logs;
    };
    // Log eklemek için yeni bir işlev ekleyin
    LogService.prototype.addLog = function (log) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.authService.token
            })
        };
        return this.httpClient.post(this.path + "logs/add", log, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    LogService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'Bir hata oluştu ' + err.error.message;
        }
        else {
            errorMessage = 'Sistemsel bir hata';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
    }
    NotificationService.prototype.showSuccess = function (message, title) {
        this.toastr.success(message, title);
    };
    NotificationService.prototype.showError = function (message, title) {
        this.toastr.error(message, title);
    };
    NotificationService.prototype.showInfo = function (message, title) {
        this.toastr.info(message, title);
    };
    NotificationService.prototype.showWarning = function (message, title) {
        this.toastr.warning(message, title);
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/page-title.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/page-title.service.ts ***!
  \************************************************/
/*! exports provided: PageTitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitleService", function() { return PageTitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

// page-title.service.ts


var PageTitleService = /** @class */ (function () {
    function PageTitleService() {
        this.pageTitleSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](''); // Başlangıçta boş bir başlık
        this.pageTitle$ = this.pageTitleSubject.asObservable();
    }
    PageTitleService.prototype.setPageTitle = function (title) {
        this.pageTitleSubject.next(title);
    };
    PageTitleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PageTitleService);
    return PageTitleService;
}());



/***/ }),

/***/ "./src/app/services/tasinmaz-report.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/tasinmaz-report.service.ts ***!
  \*****************************************************/
/*! exports provided: TasinmazReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasinmazReportService", function() { return TasinmazReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");



var TasinmazReportService = /** @class */ (function () {
    function TasinmazReportService() {
    }
    TasinmazReportService.prototype.exportToExcel = function (data, fileName) {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(data, {
            header: ['ID', 'İL', 'İLÇE', 'MAHALLE', 'ADA', 'PARSEL', 'NİTELİK', 'ADRES', 'X', 'Y']
        });
        ws['A1'] = { v: 'ID', s: { font: { bold: true } } };
        ws['B1'] = { v: 'İL', s: { font: { bold: true } } };
        ws['C1'] = { v: 'İLÇE', s: { font: { bold: true } } };
        ws['D1'] = { v: 'MAHALLE', s: { font: { bold: true } } };
        ws['E1'] = { v: 'ADA', s: { font: { bold: true } } };
        ws['F1'] = { v: 'PARSEL', s: { font: { bold: true } } };
        ws['G1'] = { v: 'NİTELİK', s: { font: { bold: true } } };
        ws['H1'] = { v: 'ADRES', s: { font: { bold: true } } };
        ws['I1'] = { v: 'X', s: { font: { bold: true } } };
        ws['J1'] = { v: 'Y', s: { font: { bold: true } } };
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        // Tarih ve saat bilgisini alın
        var currentDate = new Date();
        var formattedDate = currentDate.toISOString().slice(0, 19).replace(/[-T]/g, '').replace(/:/g, '');
        // Dosya isminde tarih ve saat bilgisini ekleyin
        var finalFileName = fileName + "-" + formattedDate + ".xlsx";
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Tasinmazlar Rapor');
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, finalFileName);
    };
    TasinmazReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasinmazReportService);
    return TasinmazReportService;
}());



/***/ }),

/***/ "./src/app/services/tasinmaz.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/tasinmaz.service.ts ***!
  \**********************************************/
/*! exports provided: TasinmazService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasinmazService", function() { return TasinmazService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






var TasinmazService = /** @class */ (function () {
    function TasinmazService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.selectedTasinmazlar = [];
        this.isMarked = false;
        this.coordinatesSubjectD = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.coordinatesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([null, null]);
        this.path = "https://localhost:5001/api/";
    }
    TasinmazService.prototype.setTasinmazComponent = function (component) {
        this.tasinmazComponent = component;
    };
    TasinmazService.prototype.setTasinmazLength = function (tasinmaz) {
        this.tasinmazlngt = tasinmaz;
    };
    TasinmazService.prototype.getTasinmazlarLength = function () {
        return this.tasinmazlngt;
    };
    TasinmazService.prototype.getTasinmazComponent = function () {
        return this.tasinmazComponent;
    };
    TasinmazService.prototype.getAll = function () {
        return this.httpClient.get(this.path + "tasinmazlar/getall");
    };
    TasinmazService.prototype.getAllLinq = function () {
        return this.httpClient.get(this.path + "tasinmazlar/getallasc");
    };
    TasinmazService.prototype.getTasinmazByUserId = function (userId) {
        return this.httpClient.get(this.path + "tasinmazlar/getbyuserid?userId=" + userId);
    };
    TasinmazService.prototype.getIller = function () {
        return this.httpClient.get(this.path + "iller/getall");
    };
    TasinmazService.prototype.getIlceler = function () {
        return this.httpClient.get(this.path + "ilceler/getall");
    };
    TasinmazService.prototype.getMahalleler = function () {
        return this.httpClient.get(this.path + "mahalleler/getall");
    };
    TasinmazService.prototype.getIlcelerByIlId = function (ilId) {
        return this.httpClient.get(this.path + ("ilceler/getlistbycategory?categoryId=" + ilId));
    };
    TasinmazService.prototype.getMahallelerByIlceId = function (ilceId) {
        return this.httpClient.get(this.path + ("mahalleler/getlistbycategory?categoryId=" + ilceId));
    };
    TasinmazService.prototype.getTasinmazById = function (id) {
        return this.httpClient.get(this.path + "tasinmazlar/getbyid?id=" + id);
    };
    TasinmazService.prototype.addTasinmaz = function (tasinmaz) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json', "Authorization": "Bearer " + this.authService.token
            })
        };
        return this.httpClient.post(this.path + "tasinmazlar/add", tasinmaz, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log(JSON.stringify(data["data"])); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    TasinmazService.prototype.updateTasinmaz = function (tasinmaz) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json', "Authorization": "Bearer " + this.authService.token
            })
        };
        return this.httpClient.put(this.path + "tasinmazlar/update", tasinmaz, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    TasinmazService.prototype.deleteTasinmaz = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json', "Authorization": "Bearer " + this.authService.token
            })
        };
        return this.httpClient.delete(this.path + "tasinmazlar/delete/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log(JSON.stringify(data)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    TasinmazService.prototype.getSelectedTasinmazlar = function () {
        return this.selectedTasinmazlar;
    };
    TasinmazService.prototype.setSelectedTasinmazlar = function (tasinmazlar) {
        this.selectedTasinmazlar = tasinmazlar;
    };
    TasinmazService.prototype.markTasinmazlarOnMap = function (coordinates) {
        // Koordinatları BehaviorSubject ile yayınla
        this.coordinatesSubjectD.next(coordinates);
    };
    // Koordinatları alma işlevi
    TasinmazService.prototype.getCoordinates = function () {
        return this.coordinatesSubject.asObservable();
    };
    TasinmazService.prototype.setIsMarked = function (isMarked) {
        this.isMarked = isMarked;
    };
    TasinmazService.prototype.getIsMarked = function () {
        return this.isMarked;
    };
    TasinmazService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'Bir hata oluştu ' + err.error.message;
        }
        else {
            errorMessage = 'Sistemsel bir hata';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    TasinmazService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], TasinmazService);
    return TasinmazService;
}());



/***/ }),

/***/ "./src/app/services/user-report.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user-report.service.ts ***!
  \*************************************************/
/*! exports provided: UserReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserReportService", function() { return UserReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.mjs");



var UserReportService = /** @class */ (function () {
    function UserReportService() {
    }
    UserReportService.prototype.exportToExcel = function (data, fileName) {
        var ws = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].json_to_sheet(data, {
            header: ['USERID', 'AD', 'SOYAD', 'E-MAİL', 'ROL', 'ADRES']
        });
        ws['A1'] = { v: 'USERID', s: { font: { bold: true } } };
        ws['B1'] = { v: 'AD', s: { font: { bold: true } } };
        ws['C1'] = { v: 'SOYAD', s: { font: { bold: true } } };
        ws['D1'] = { v: 'E-MAİL', s: { font: { bold: true } } };
        ws['E1'] = { v: 'ROL', s: { font: { bold: true } } };
        ws['F1'] = { v: 'ADRES', s: { font: { bold: true } } };
        var wb = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_new();
        // Tarih ve saat bilgisini alın
        var currentDate = new Date();
        var formattedDate = currentDate.toISOString().slice(0, 19).replace(/[-T]/g, '').replace(/:/g, '');
        // Dosya isminde tarih ve saat bilgisini ekleyin
        var finalFileName = fileName + "-" + formattedDate + ".xlsx";
        xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].book_append_sheet(wb, ws, 'Kullanıcılar Rapor');
        xlsx__WEBPACK_IMPORTED_MODULE_2__["writeFile"](wb, finalFileName);
    };
    UserReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserReportService);
    return UserReportService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");






var UserService = /** @class */ (function () {
    function UserService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
        this.selectedUsers = [];
        this.path = "https://localhost:5001/api/";
    }
    UserService.prototype.getAll = function () {
        return this.httpClient.get(this.path + "users/getall");
    };
    UserService.prototype.getUserById = function (id) {
        return this.httpClient.get(this.path + "users/getbyid?id=" + id);
    };
    //addUser <-- register ile ekliyoruz şimdilik aktif değil
    UserService.prototype.addUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json', "Authorization": "Bearer " + this.authService.token
            })
        };
        return this.httpClient.post(this.path + "auth/register", user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('Kullanıcı başarıyla eklendi:', data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    UserService.prototype.updateUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json', "Authorization": "Bearer " + this.authService.token
            })
        };
        return this.httpClient.put(this.path + "users/update", user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('Kullanıcı güncellendi:', data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    UserService.prototype.deleteUser = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json', "Authorization": "Bearer " + this.authService.token
            })
        };
        return this.httpClient.delete(this.path + "users/delete/" + id, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log('Kullanıcı Silindi:', data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    UserService.prototype.getSelectedUsers = function () {
        return this.selectedUsers;
    };
    UserService.prototype.setSelectedUsers = function (users) {
        this.selectedUsers = users;
    };
    UserService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = 'Bir hata oluştu ' + err.error.message;
        }
        else {
            errorMessage = 'Sistemsel bir hata';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-form {\r\n  background-color: #333;\r\n  border-radius: 10px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n  padding: 30px;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 20px;\r\n}\r\n\r\nlabel {\r\n  font-weight: bold;\r\n  color: #d9534f;\r\n}\r\n\r\n.form-control {\r\n  border: 1px solid #333;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n.text-danger {\r\n  color: #d9534f;\r\n}\r\n\r\n/* ... Diğer stiller ... */\r\n\r\n.btn-primary {\r\n  background-color: #007bff;\r\n  color: black;\r\n  border: none;\r\n  border-width: 2px;\r\n  border-radius: 10px;\r\n  padding: 10px 70px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n\r\n.btn-primary:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n/* Butonun içindeki ikonun stili */\r\n\r\n.btn-icon i {\r\n  margin-right: 5px; /* İkon ile metin arasındaki boşluğu ayarlar */\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzaW5tYXovdGFzaW5tYXotYWRkL3Rhc2lubWF6LWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0MsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsMEJBQTBCOztBQUUxQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsa0NBQWtDOztBQUNsQztFQUNFLGlCQUFpQixFQUFFLDhDQUE4QztBQUNuRSIsImZpbGUiOiJzcmMvYXBwL3Rhc2lubWF6L3Rhc2lubWF6LWFkZC90YXNpbm1hei1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tZm9ybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2Q5NTM0ZjtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICBjb2xvcjogI2Q5NTM0ZjtcclxufVxyXG5cclxuLyogLi4uIERpxJ9lciBzdGlsbGVyIC4uLiAqL1xyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDcwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59XHJcblxyXG4vKiBCdXRvbnVuIGnDp2luZGVraSBpa29udW4gc3RpbGkgKi9cclxuLmJ0bi1pY29uIGkge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4OyAvKiDEsGtvbiBpbGUgbWV0aW4gYXJhc8SxbmRha2kgYm/Fn2x1xJ91IGF5YXJsYXIgKi9cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"custom-form\">\r\n        <form [formGroup]=\"tasinmazForm\" (ngSubmit)=\"addTasinmaz()\">\r\n          <!-- İL Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"il\">İL</label>\r\n            <select class=\"form-control\" id=\"il\" formControlName=\"il\" required (change)=\"onIlChange()\">\r\n              <option value=\"\">İL seçin</option>\r\n              <!-- İllerin dinamik olarak eklenmesi gerekiyor -->\r\n              <option *ngFor=\"let il of iller\" [value]=\"il.ilId\">{{ il.ilName }}</option>\r\n            </select>\r\n            <div\r\n              *ngIf=\"\r\n                tasinmazForm.get('il')?.hasError('required') &&\r\n                tasinmazForm.get('il')?.dirty\r\n              \"\r\n              class=\"text-danger\"\r\n            >\r\n              İL Alanı zorunludur...\r\n            </div>\r\n          </div>\r\n\r\n          <!-- İLÇE Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"ilce\">İLÇE</label>\r\n            <select class=\"form-control\" id=\"ilce\" formControlName=\"ilce\" required (change)=\"onIlceChange()\">\r\n              <option value=\"\">İLÇE seçin</option>\r\n              <!-- İlçelerin dinamik olarak eklenmesi gerekiyor -->\r\n              <option *ngFor=\"let ilce of ilceler\" [value]=\"ilce.ilceId\">{{ ilce.ilceName }}</option>\r\n            </select>\r\n            <div\r\n              *ngIf=\"\r\n                tasinmazForm.get('ilce')?.hasError('required') &&\r\n                tasinmazForm.get('ilce')?.dirty\r\n              \"\r\n              class=\"text-danger\"\r\n            >\r\n              İLÇE Alanı zorunludur...\r\n            </div>\r\n          </div>\r\n\r\n          <!-- MAHALLE Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"mahalleId\">MAHALLE</label>\r\n            <select class=\"form-control\" id=\"mahalleId\" formControlName=\"mahalleId\" required>\r\n              <option value=\"\">MAHALLE seçin</option>\r\n              <!-- Mahallelerin dinamik olarak eklenmesi gerekiyor -->\r\n              <option *ngFor=\"let mahalle of mahalleler\" [value]=\"mahalle.mahalleId\">{{ mahalle.mahalleName }}</option>\r\n            </select>\r\n            <div\r\n              *ngIf=\"\r\n                tasinmazForm.get('mahalleId')?.hasError('required') &&\r\n                tasinmazForm.get('mahalleId')?.dirty\r\n              \"\r\n              class=\"text-danger\"\r\n            >\r\n              MAHALLE Alanı zorunludur...\r\n            </div>\r\n          </div>\r\n\r\n          <!-- ADA Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"ada\">ADA</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"ada\"\r\n              formControlName=\"ada\"\r\n              placeholder=\"ADA\"\r\n              required\r\n            />\r\n            <div\r\n              *ngIf=\"\r\n                tasinmazForm.get('ada')?.hasError('required') &&\r\n                tasinmazForm.get('ada')?.dirty\r\n              \"\r\n              class=\"text-danger\"\r\n            >\r\n              ADA zorunludur...\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div class=\"custom-form\">\r\n        <form [formGroup]=\"tasinmazForm\" (ngSubmit)=\"addTasinmaz()\">\r\n          <!-- PARSEL Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"parsel\">PARSEL</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"parsel\"\r\n              formControlName=\"parsel\"\r\n              placeholder=\"PARSEL\"\r\n              required\r\n            />\r\n            <div\r\n              *ngIf=\"\r\n                tasinmazForm.get('parsel')?.hasError('required') &&\r\n                tasinmazForm.get('parsel')?.dirty\r\n              \"\r\n              class=\"text-danger\"\r\n            >\r\n              PARSEL zorunludur...\r\n            </div>\r\n          </div>\r\n\r\n          <!-- NİTELİK Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"nitelik\">NİTELİK</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"nitelik\"\r\n              formControlName=\"nitelik\"\r\n              placeholder=\"NİTELİK\"\r\n              required\r\n            />\r\n            <div\r\n              *ngIf=\"\r\n                tasinmazForm.get('nitelik')?.hasError('required') &&\r\n                tasinmazForm.get('nitelik')?.dirty\r\n              \"\r\n              class=\"text-danger\"\r\n            >\r\n              NİTELİK zorunludur...\r\n            </div>\r\n          </div>\r\n\r\n          <!-- ADRES Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"adres\">ADRES</label>\r\n            <textarea\r\n              class=\"form-control\"\r\n              id=\"adres\"\r\n              formControlName=\"adres\"\r\n              placeholder=\"ADRES\"\r\n              rows=\"4\"\r\n              required\r\n            ></textarea>\r\n            <div\r\n              *ngIf=\"\r\n                tasinmazForm.get('adres')?.hasError('required') &&\r\n                tasinmazForm.get('adres')?.dirty\r\n              \"\r\n              class=\"text-danger\"\r\n            >\r\n              ADRES ALANI zorunludur...\r\n            </div>\r\n          </div>\r\n          <!-- coorX Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"coorX\">coorX</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"coorX\"\r\n              formControlName=\"coorX\"\r\n              placeholder=\"x\"\r\n              required\r\n            />\r\n          </div>\r\n          <div\r\n              *ngIf=\"\r\n                tasinmazForm.get('coorX')?.hasError('required') &&\r\n                tasinmazForm.get('coorX')?.dirty\r\n              \"\r\n              class=\"text-danger\"\r\n            >\r\n              X Koordinatı zorunludur...\r\n            </div>\r\n\r\n          <!-- coorY Alanı -->\r\n          <div class=\"form-group\">\r\n            <label for=\"coorY\">coorY</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"coorY\"\r\n              formControlName=\"coorY\"\r\n              placeholder=\"y\"\r\n              required\r\n            />\r\n          </div>\r\n          <div\r\n          *ngIf=\"\r\n            tasinmazForm.get('coorY')?.hasError('required') &&\r\n            tasinmazForm.get('coorY')?.dirty\r\n          \"\r\n          class=\"text-danger\"\r\n        >\r\n          Y Koordinatı zorunludur...\r\n        </div>\r\n\r\n          <!-- Gönder Butonu -->\r\n          <div class=\"form-group text-center\">\r\n            <button\r\n              type=\"submit\"\r\n              class=\"btn btn-primary btn-icon\"\r\n              [disabled]=\"tasinmazForm.invalid\"\r\n            >\r\n              <i class=\"fas fa-plus-circle\"></i> Ekle\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div>\r\n  <app-tasinmaz-map style=\"margin: 200px;\"></app-tasinmaz-map>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: TasinmazAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasinmazAddComponent", function() { return TasinmazAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var src_app_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tasinmaz.service */ "./src/app/services/tasinmaz.service.ts");
/* harmony import */ var src_app_models_tasinmaz__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/tasinmaz */ "./src/app/models/tasinmaz.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_coordinate_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/coordinate-service.service */ "./src/app/services/coordinate-service.service.ts");
/* harmony import */ var _tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../tasinmaz-map/tasinmaz-map.component */ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.ts");












var TasinmazAddComponent = /** @class */ (function () {
    function TasinmazAddComponent(pageTitleService, formBuilder, router, tasinmazService, alertifyService, authService, userService, coordinateService) {
        this.pageTitleService = pageTitleService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.tasinmazService = tasinmazService;
        this.alertifyService = alertifyService;
        this.authService = authService;
        this.userService = userService;
        this.coordinateService = coordinateService;
        this.newTasinmaz = new src_app_models_tasinmaz__WEBPACK_IMPORTED_MODULE_5__["Tasinmaz"]();
        this.iller = [];
        this.ilceler = [];
        this.mahalleler = [];
        this.user = {};
        this.tokenUserId = this.authService.getIdentity().nameidentifier;
        this.tasinmazForm = this.formBuilder.group({
            il: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ilce: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mahalleId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            parsel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nitelik: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            coorX: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            coorY: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    // İl seçimi değiştiğinde
    TasinmazAddComponent.prototype.onIlChange = function () {
        var _this = this;
        var selectedIl = this.tasinmazForm.get('il').value;
        this.tasinmazService.getIlcelerByIlId(selectedIl).subscribe(function (ilceler) {
            _this.ilceler = ilceler;
        });
    };
    // İlçe seçimi değiştiğinde
    TasinmazAddComponent.prototype.onIlceChange = function () {
        var _this = this;
        var selectedIlce = this.tasinmazForm.get('ilce').value;
        this.tasinmazService.getMahallelerByIlceId(selectedIlce).subscribe(function (mahalleler) {
            _this.mahalleler = mahalleler;
        });
    };
    TasinmazAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setPageTitle('Yeni Taşınmaz Ekle');
        this.userService.getUserById(parseInt(this.tokenUserId)).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
        });
        this.tasinmazService.getIller().subscribe(function (iller) {
            _this.iller = iller["data"];
        });
        // Diğer başlangıç işlemleri
        this.coordinateService.coordinate$.subscribe(function (coordinates) {
            // Koordinatları burada kullanabilirsiniz.
            var x = coordinates[0], y = coordinates[1];
            if (_this.mapComponent.markedTasinmazlar.length > 0) {
                var lastMarkedFeature = _this.mapComponent.markedTasinmazlar.pop(); // En son işareti çıkar
                _this.mapComponent.vectorSource.removeFeature(lastMarkedFeature); // Vektör kaynağından kaldır
            }
            // Örneğin, bu koordinatları form kontrollerine yerleştirebilirsiniz.
            _this.tasinmazForm.get('coorX').setValue(x);
            _this.tasinmazForm.get('coorY').setValue(y);
        });
    };
    TasinmazAddComponent.prototype.addTasinmaz = function () {
        var _this = this;
        if (this.tasinmazForm.valid) {
            // Kullanıcıya onay için bir iletişim kutusu (confirm dialog) gösterimi
            this.alertifyService.confirm("UYARI!", 'Yeni taşınmazı eklemek istediğinize emin misiniz?', function () {
                _this.user = _this.userService.getUserById(parseInt(_this.tokenUserId));
                // Kullanıcı "Evet" derse, taşınmazı ekleyin
                _this.newTasinmaz = Object.assign({}, _this.tasinmazForm.value);
                _this.newTasinmaz.ilce = parseInt(_this.tasinmazForm.get('ilce').value);
                _this.newTasinmaz.il = parseInt(_this.tasinmazForm.get('il').value);
                _this.newTasinmaz.mahalleId = parseInt(_this.tasinmazForm.get('mahalleId').value);
                _this.newTasinmaz.userId = parseInt(_this.tokenUserId);
                _this.newTasinmaz.coorX = _this.tasinmazForm.get('coorX').value.toString();
                _this.newTasinmaz.coorY = _this.tasinmazForm.get('coorY').value.toString();
                console.log(_this.newTasinmaz);
                _this.tasinmazService.addTasinmaz(_this.newTasinmaz).subscribe(function (response) {
                    console.log('Taşınmaz Başarıyla Eklendi:', response);
                    _this.alertifyService.success('Taşınmaz Ekleme İşlemi Başarıyla Gerçekleşti.');
                    _this.router.navigateByUrl('/tasinmaz');
                }, function (error) {
                    console.error('Tasinmaz ekleme başarısız..:', error);
                    _this.alertifyService.error(error);
                });
            }, function () {
                // Kullanıcı "Hayır" derse, işlemi iptal edin
                _this.alertifyService.warning("Taşınmaz Ekleme İşlemini İptal Ettiniz...");
                console.log('Taşınmaz ekleme işlemi iptal edildi.');
            });
        }
        else {
            // Form geçerli değilse kullanıcıya bir hata gösterin veya başka bir işlem yapın
            console.error('Form geçerli değil. Taşınmaz eklenemedi.');
            this.alertifyService.error('Form geçerli değil. Taşınmaz eklenemedi.');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_11__["TasinmazMapComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_11__["TasinmazMapComponent"])
    ], TasinmazAddComponent.prototype, "mapComponent", void 0);
    TasinmazAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasinmaz-add',
            template: __webpack_require__(/*! ./tasinmaz-add.component.html */ "./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.html"),
            styles: [__webpack_require__(/*! ./tasinmaz-add.component.css */ "./src/app/tasinmaz/tasinmaz-add/tasinmaz-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_4__["TasinmazService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"],
            src_app_services_coordinate_service_service__WEBPACK_IMPORTED_MODULE_10__["CoordinateService"]])
    ], TasinmazAddComponent);
    return TasinmazAddComponent;
}());



/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: TasinmazFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasinmazFilterPipe", function() { return TasinmazFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tasinmaz.service */ "./src/app/services/tasinmaz.service.ts");



var TasinmazFilterPipe = /** @class */ (function () {
    function TasinmazFilterPipe(tasinmazService) {
        var _this = this;
        this.tasinmazService = tasinmazService;
        // İlgili verileri burada alın
        this.tasinmazService.getMahalleler().subscribe(function (mahalleler) {
            _this.mahalleler = mahalleler["data"];
        });
        this.tasinmazService.getIller().subscribe(function (iller) {
            _this.iller = iller["data"];
        });
        this.tasinmazService.getIlceler().subscribe(function (ilceler) {
            _this.ilceler = ilceler["data"];
        });
    }
    TasinmazFilterPipe.prototype.transform = function (tasinmazlar, searchText) {
        var _this = this;
        if (!tasinmazlar || !searchText) {
            return tasinmazlar;
        }
        searchText = searchText.toLowerCase();
        return tasinmazlar.filter(function (tasinmaz) {
            if ((_this.getIlName(tasinmaz.il).toLowerCase().includes(searchText)) ||
                (_this.getIlceName(tasinmaz.ilce).toLowerCase().includes(searchText)) ||
                (_this.getMahalleName(tasinmaz.mahalleId).toLowerCase().includes(searchText)) ||
                (tasinmaz.ada && tasinmaz.ada.toLowerCase().includes(searchText)) ||
                (tasinmaz.parsel && tasinmaz.parsel.toLowerCase().includes(searchText)) ||
                (tasinmaz.nitelik && tasinmaz.nitelik.toLowerCase().includes(searchText)) ||
                (tasinmaz.adres && tasinmaz.adres.toLowerCase().includes(searchText))) {
                return true;
            }
            return false;
        });
    };
    TasinmazFilterPipe.prototype.getIlName = function (ilId) {
        var il = this.iller.find(function (item) { return item.ilId === ilId; });
        return il ? il.ilName : '';
    };
    TasinmazFilterPipe.prototype.getIlceName = function (ilceId) {
        var ilce = this.ilceler.find(function (item) { return item.ilceId === ilceId; });
        return ilce ? ilce.ilceName : '';
    };
    TasinmazFilterPipe.prototype.getMahalleName = function (mahalleId) {
        var mahalle = this.mahalleler.find(function (item) { return item.mahalleId === mahalleId; });
        return mahalle ? mahalle.mahalleName : '';
    };
    TasinmazFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'tasinmazFilter'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_2__["TasinmazService"]])
    ], TasinmazFilterPipe);
    return TasinmazFilterPipe;
}());



/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-map/layer-opacity/layer-opacity.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-map/layer-opacity/layer-opacity.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layer-container {\r\n    display: flex;\r\n    align-items: center; /* Yazı ve bileşenleri dikeyde ortala */\r\n    justify-content: space-between; /* Başlıkları ve opacity'i yatayda sağa ve sola hizala */\r\n  }\r\n  \r\n  .layer-opacity {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: end;\r\n    margin-left: 5px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzaW5tYXovdGFzaW5tYXotbWFwL2xheWVyLW9wYWNpdHkvbGF5ZXItb3BhY2l0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQixFQUFFLHVDQUF1QztJQUM1RCw4QkFBOEIsRUFBRSx3REFBd0Q7RUFDMUY7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC90YXNpbm1hei90YXNpbm1hei1tYXAvbGF5ZXItb3BhY2l0eS9sYXllci1vcGFjaXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5ZXItY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBZYXrEsSB2ZSBiaWxlxZ9lbmxlcmkgZGlrZXlkZSBvcnRhbGEgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLyogQmHFn2zEsWtsYXLEsSB2ZSBvcGFjaXR5J2kgeWF0YXlkYSBzYcSfYSB2ZSBzb2xhIGhpemFsYSAqL1xyXG4gIH1cclxuICBcclxuICAubGF5ZXItb3BhY2l0eSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-map/layer-opacity/layer-opacity.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-map/layer-opacity/layer-opacity.component.ts ***!
  \********************************************************************************/
/*! exports provided: LayerOpacityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerOpacityComponent", function() { return LayerOpacityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ol_layer_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/tile */ "./node_modules/ol/layer/tile.js");



var LayerOpacityComponent = /** @class */ (function () {
    function LayerOpacityComponent() {
    }
    Object.defineProperty(LayerOpacityComponent.prototype, "layerOpacity", {
        get: function () {
            return this.layer.getOpacity();
        },
        set: function (opacity) {
            this.layer.setOpacity(opacity);
        },
        enumerable: true,
        configurable: true
    });
    LayerOpacityComponent.prototype.changeOpacity = function () {
        // Opaklık değiştiğinde yapılacak işlemler burada
    };
    var _a;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LayerOpacityComponent.prototype, "layerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", typeof (_a = typeof ol_layer_tile__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined" && ol_layer_tile__WEBPACK_IMPORTED_MODULE_2__["default"]) === "function" ? _a : Object)
    ], LayerOpacityComponent.prototype, "layer", void 0);
    LayerOpacityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layer-opacity',
            template: "\n    <div class=\"layer-container\">\n      <div class=\"layer-name\">{{ layerName }}</div>\n      <div class=\"layer-opacity\">\n        <input type=\"range\" [(ngModel)]=\"layerOpacity\" (input)=\"changeOpacity()\" min=\"0\" max=\"1\" step=\"0.01\" />\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./layer-opacity.component.css */ "./src/app/tasinmaz/tasinmaz-map/layer-opacity/layer-opacity.component.css")]
        })
    ], LayerOpacityComponent);
    return LayerOpacityComponent;
}());



/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-map/layer-toggle/layer-toggle.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-map/layer-toggle/layer-toggle.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layer-name {\r\n    /* İstediğiniz yazı stili */\r\n    font-weight: bold;\r\n  }\r\n/*   \r\n  .layer-visibility {\r\n\r\n  }\r\n   */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzaW5tYXovdGFzaW5tYXotbWFwL2xheWVyLXRvZ2dsZS9sYXllci10b2dnbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7RUFDbkI7QUFDRjs7OztJQUlJIiwiZmlsZSI6InNyYy9hcHAvdGFzaW5tYXovdGFzaW5tYXotbWFwL2xheWVyLXRvZ2dsZS9sYXllci10b2dnbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXllci1uYW1lIHtcclxuICAgIC8qIMSwc3RlZGnEn2luaXogeWF6xLEgc3RpbGkgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuLyogICBcclxuICAubGF5ZXItdmlzaWJpbGl0eSB7XHJcblxyXG4gIH1cclxuICAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-map/layer-toggle/layer-toggle.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-map/layer-toggle/layer-toggle.component.ts ***!
  \******************************************************************************/
/*! exports provided: LayerToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerToggleComponent", function() { return LayerToggleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ol_layer_tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/tile */ "./node_modules/ol/layer/tile.js");



var LayerToggleComponent = /** @class */ (function () {
    function LayerToggleComponent() {
        this.layerVisibilityChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(LayerToggleComponent.prototype, "layerVisibility", {
        get: function () {
            return this.layer.getVisible();
        },
        enumerable: true,
        configurable: true
    });
    LayerToggleComponent.prototype.toggleLayer = function () {
        this.layer.setVisible(!this.layerVisibility);
        this.layerVisibilityChanged.emit(this.layerVisibility);
    };
    var _a;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], LayerToggleComponent.prototype, "layerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", typeof (_a = typeof ol_layer_tile__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined" && ol_layer_tile__WEBPACK_IMPORTED_MODULE_2__["default"]) === "function" ? _a : Object)
    ], LayerToggleComponent.prototype, "layer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LayerToggleComponent.prototype, "layerVisibilityChanged", void 0);
    LayerToggleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layer-toggle',
            template: "\n    <div class=\"layer-name\">{{ layerName }}</div>\n    <div class=\"layer-visibility\">\n      <input type=\"checkbox\" [checked]=\"layerVisibility\" (change)=\"toggleLayer()\" />\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./layer-toggle.component.css */ "./src/app/tasinmaz/tasinmaz-map/layer-toggle/layer-toggle.component.css")]
        })
    ], LayerToggleComponent);
    return LayerToggleComponent;
}());



/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.css":
/*!******************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Harita konteynerine uygulanan stiller */\r\n.map-container {\r\n  width: 50%;\r\n  margin: auto;\r\n  border: 2px solid #333; /* Kenarlık rengi ve kalınlığı */\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Gölge efekti */\r\n  position: relative;\r\n}\r\n/* Harita konteynerının içindeki harita divi */\r\n#map {\r\n  width: 100%;\r\n  height: 500px;\r\n  display: inline-flex;\r\n  justify-content: center; /* Yatayda ortalama */\r\n  align-items: center; /* Dikeyde ortalama */\r\n  background-position: center;\r\n}\r\n/* Sağ üst köşedeki panel */\r\n.panel {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  margin-left: 10px;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start; /* Paneli sağ üst köşede göstermek için \"align-items\" kullanın */\r\n\r\n  gap: 10px;\r\n}\r\n.layer-container {\r\n  display: flex;\r\n  flex-direction: column; /* Bileşenleri dikeyde sırala */\r\n  align-items: flex-start; /* Bileşenleri yatayda sola hizala */\r\n\r\n  /* İstediğiniz stillemeleri burada ekleyebilirsiniz */\r\n}\r\n/* Yazıların stili */\r\n.app-layer-toggle label,\r\n.app-layer-opacity label {\r\n  /* İstediğiniz yazı stili */\r\n  font-weight: bold;\r\n}\r\n/* Toggle'ın stili */\r\n.app-layer-toggle input[type=\"checkbox\"] {\r\n  /* İstediğiniz toggle stili */\r\n  margin-left: 20px; /* Yazıdan 5 piksel sağda görünmesini sağlar */\r\n}\r\n/* Opacity slider'ının stili */\r\n.app-layer-opacity input[type=\"range\"] {\r\n  /* İstediğiniz slider stili */\r\n  width: 100px; /* Genişlik ayarı, istediğiniz kadar büyütebilirsiniz */\r\n  margin-left: 5px; /* Toggle'dan 5 piksel sağda görünmesini sağlar */\r\n  align-self: flex-start; /* Opacity bileşenini sola hizala */\r\n}\r\n.ol-scale-bar {\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  padding: 5px 10px;\r\n  border-radius: 5px;\r\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 10px;\r\n}\r\n.coordinate-display {\r\n  position: absolute;\r\n  top: 6%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: rgba(79, 51, 116, 0.3); /* 0.5 opaklık (0'dan 1'e ölçek) */\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzaW5tYXovdGFzaW5tYXotbWFwL3Rhc2lubWF6LW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQztFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCLEVBQUUsZ0NBQWdDO0VBQ3hELDJDQUEyQyxFQUFFLGlCQUFpQjtFQUM5RCxrQkFBa0I7QUFDcEI7QUFHQSw4Q0FBOEM7QUFDOUM7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQix1QkFBdUIsRUFBRSxxQkFBcUI7RUFDOUMsbUJBQW1CLEVBQUUscUJBQXFCO0VBQzFDLDJCQUEyQjtBQUM3QjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUIsRUFBRSxnRUFBZ0U7O0VBRXpGLFNBQVM7QUFDWDtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQixFQUFFLCtCQUErQjtFQUN2RCx1QkFBdUIsRUFBRSxvQ0FBb0M7O0VBRTdELHFEQUFxRDtBQUN2RDtBQUVBLG9CQUFvQjtBQUNwQjs7RUFFRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25CO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQixFQUFFLDhDQUE4QztBQUNuRTtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLDZCQUE2QjtFQUM3QixZQUFZLEVBQUUsdURBQXVEO0VBQ3JFLGdCQUFnQixFQUFFLGlEQUFpRDtFQUNuRSxzQkFBc0IsRUFBRSxtQ0FBbUM7QUFDN0Q7QUFJQTtFQUNFLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHdDQUF3QyxFQUFFLGtDQUFrQztFQUM1RSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90YXNpbm1hei90YXNpbm1hei1tYXAvdGFzaW5tYXotbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIYXJpdGEga29udGV5bmVyaW5lIHV5Z3VsYW5hbiBzdGlsbGVyICovXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMzMzOyAvKiBLZW5hcmzEsWsgcmVuZ2kgdmUga2FsxLFubMSxxJ/EsSAqL1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8qIEfDtmxnZSBlZmVrdGkgKi9cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4vKiBIYXJpdGEga29udGV5bmVyxLFuxLFuIGnDp2luZGVraSBoYXJpdGEgZGl2aSAqL1xyXG4jbWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBZYXRheWRhIG9ydGFsYW1hICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogRGlrZXlkZSBvcnRhbGFtYSAqL1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLyogU2HEnyDDvHN0IGvDtsWfZWRla2kgcGFuZWwgKi9cclxuLnBhbmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAvKiBQYW5lbGkgc2HEnyDDvHN0IGvDtsWfZWRlIGfDtnN0ZXJtZWsgacOnaW4gXCJhbGlnbi1pdGVtc1wiIGt1bGxhbsSxbiAqL1xyXG5cclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLmxheWVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAvKiBCaWxlxZ9lbmxlcmkgZGlrZXlkZSBzxLFyYWxhICovXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IC8qIEJpbGXFn2VubGVyaSB5YXRheWRhIHNvbGEgaGl6YWxhICovXHJcblxyXG4gIC8qIMSwc3RlZGnEn2luaXogc3RpbGxlbWVsZXJpIGJ1cmFkYSBla2xleWViaWxpcnNpbml6ICovXHJcbn1cclxuXHJcbi8qIFlhesSxbGFyxLFuIHN0aWxpICovXHJcbi5hcHAtbGF5ZXItdG9nZ2xlIGxhYmVsLFxyXG4uYXBwLWxheWVyLW9wYWNpdHkgbGFiZWwge1xyXG4gIC8qIMSwc3RlZGnEn2luaXogeWF6xLEgc3RpbGkgKi9cclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyogVG9nZ2xlJ8SxbiBzdGlsaSAqL1xyXG4uYXBwLWxheWVyLXRvZ2dsZSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIC8qIMSwc3RlZGnEn2luaXogdG9nZ2xlIHN0aWxpICovXHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7IC8qIFlhesSxZGFuIDUgcGlrc2VsIHNhxJ9kYSBnw7Zyw7xubWVzaW5pIHNhxJ9sYXIgKi9cclxufVxyXG5cclxuLyogT3BhY2l0eSBzbGlkZXInxLFuxLFuIHN0aWxpICovXHJcbi5hcHAtbGF5ZXItb3BhY2l0eSBpbnB1dFt0eXBlPVwicmFuZ2VcIl0ge1xyXG4gIC8qIMSwc3RlZGnEn2luaXogc2xpZGVyIHN0aWxpICovXHJcbiAgd2lkdGg6IDEwMHB4OyAvKiBHZW5pxZ9saWsgYXlhcsSxLCBpc3RlZGnEn2luaXoga2FkYXIgYsO8ecO8dGViaWxpcnNpbml6ICovXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDsgLyogVG9nZ2xlJ2RhbiA1IHBpa3NlbCBzYcSfZGEgZ8O2csO8bm1lc2luaSBzYcSfbGFyICovXHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgLyogT3BhY2l0eSBiaWxlxZ9lbmluaSBzb2xhIGhpemFsYSAqL1xyXG59XHJcblxyXG5cclxuXHJcbi5vbC1zY2FsZS1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb29yZGluYXRlLWRpc3BsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc5LCA1MSwgMTE2LCAwLjMpOyAvKiAwLjUgb3Bha2zEsWsgKDAnZGFuIDEnZSDDtmzDp2VrKSAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map-container\" class=\"map-container\">\n    <div id=\"map\" class=\"map\"></div>\n    <div id=\"mouse-position\" class=\"ol-mouse-position\"></div>\n    <div class=\"coordinate-display\">\n      <p><strong> X: </strong> {{ mouseCoordinates.x }} | <strong> Y: </strong> {{ mouseCoordinates.y }} </p>\n    </div>\n    <div class=\"panel\">\n        <!-- OpenStreetMap katmanı için toggle ve opaklık bileşenleri -->\n        <div class=\"layer-container\">\n            <app-layer-toggle [layerName]=\"'OpenStreetMap'\" [layer]=\"openStreetMapLayer\"></app-layer-toggle>\n            <app-layer-opacity [layerName]=\"'OpenStreetMap'\" [layer]=\"openStreetMapLayer\"></app-layer-opacity>\n        </div>\n\n        <!-- Google Maps katmanı için toggle ve opaklık bileşenleri -->\n        <div class=\"layer-container\">\n            <app-layer-toggle [layerName]=\"'Google Maps'\" [layer]=\"googleMapsLayer\"></app-layer-toggle>\n            <app-layer-opacity [layerName]=\"'Google Maps'\" [layer]=\"googleMapsLayer\"></app-layer-opacity>\n        </div>\n\n        <!-- Diğer harita kontrolleri -->\n        <div id=\"scale-line\" class=\"ol-scale-line-inner\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.ts ***!
  \*****************************************************************/
/*! exports provided: TasinmazMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasinmazMapComponent", function() { return TasinmazMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ol_Map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/Map */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/View */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/tile */ "./node_modules/ol/layer/tile.js");
/* harmony import */ var ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source/OSM */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/control/ScaleLine */ "./node_modules/ol/control/ScaleLine.js");
/* harmony import */ var ol_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");
/* harmony import */ var ol_source_XYZ__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/source/XYZ */ "./node_modules/ol/source/XYZ.js");
/* harmony import */ var ol_layer_Vector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/layer/Vector */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_source_Vector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/source/Vector */ "./node_modules/ol/source/Vector.js");
/* harmony import */ var ol_Feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Point__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/geom/Point */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_style_Circle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style/Circle */ "./node_modules/ol/style/Circle.js");
/* harmony import */ var ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/style/Fill */ "./node_modules/ol/style/Fill.js");
/* harmony import */ var ol_style_Stroke__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/style/Stroke */ "./node_modules/ol/style/Stroke.js");
/* harmony import */ var ol_style_Style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/style/Style */ "./node_modules/ol/style/Style.js");
/* harmony import */ var ol_coordinate__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/coordinate */ "./node_modules/ol/coordinate.js");
/* harmony import */ var src_app_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/tasinmaz.service */ "./src/app/services/tasinmaz.service.ts");
/* harmony import */ var src_app_services_coordinate_service_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/services/coordinate-service.service */ "./src/app/services/coordinate-service.service.ts");





















var TasinmazMapComponent = /** @class */ (function () {
    function TasinmazMapComponent(renderer, elementRef, tasinmazService, coordinateService) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.tasinmazService = tasinmazService;
        this.coordinateService = coordinateService;
        this.isMarked = false;
        this.allowMapMarking = true;
        this.allowTakeCoordinate = true;
        this.coordinateBarVisible = false;
        this.markedTasinmazlar = [];
        this.mouseCoordinates = { x: 0, y: 0 };
    }
    TasinmazMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        // OpenStreetMap kaynağını oluşturun
        var openStreetMapSource = new ol_source_OSM__WEBPACK_IMPORTED_MODULE_5__["default"]();
        // Google Maps kaynağını oluşturun
        var googleMapsSource = new ol_source_XYZ__WEBPACK_IMPORTED_MODULE_9__["default"]({
            url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
        });
        // OpenStreetMap katmanını oluşturun
        this.openStreetMapLayer = new ol_layer_tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
            source: openStreetMapSource,
            opacity: 1,
            visible: true,
        });
        // Google Maps katmanını oluşturun, ancak görünmez yapın
        this.googleMapsLayer = new ol_layer_tile__WEBPACK_IMPORTED_MODULE_4__["default"]({
            source: googleMapsSource,
            opacity: 1,
            visible: false,
        });
        // Vektör kaynağını oluşturun
        this.vectorSource = new ol_source_Vector__WEBPACK_IMPORTED_MODULE_11__["default"]();
        // Vektör katmanını oluşturun ve kaynağı ekleyin
        this.vectorLayer = new ol_layer_Vector__WEBPACK_IMPORTED_MODULE_10__["default"]({
            source: this.vectorSource,
            style: new ol_style_Style__WEBPACK_IMPORTED_MODULE_17__["default"]({
                image: new ol_style_Circle__WEBPACK_IMPORTED_MODULE_14__["default"]({
                    radius: 6,
                    fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__["default"]({ color: 'red' }),
                    stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_16__["default"]({ color: 'white', width: 2 }),
                }),
            }),
        });
        // Türkiye'nin koordinatlarını kullanarak harita görünümünü tanımlayın ve zoom seviyesini ayarlayın
        var view = new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"]({
            center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_6__["fromLonLat"])([35, 39]),
            zoom: 6,
        });
        // Harita oluştur
        this.map = new ol_Map__WEBPACK_IMPORTED_MODULE_2__["default"]({
            target: this.elementRef.nativeElement.querySelector('#map'),
            layers: [this.openStreetMapLayer, this.googleMapsLayer, this.vectorLayer],
            view: view,
            controls: Object(ol_control__WEBPACK_IMPORTED_MODULE_8__["defaults"])().extend([new ol_control_ScaleLine__WEBPACK_IMPORTED_MODULE_7__["default"]()])
        });
        this.map.on('pointermove', function (event) {
            var coordinates = event.coordinate;
            var x = coordinates[0], y = coordinates[1];
            //const coordinateString = toStringXY(coordinates, 2);
            _this.mouseCoordinates.x = x;
            _this.mouseCoordinates.y = y;
        });
        // Haritaya tıklama olayını ekleyin
        if (this.allowTakeCoordinate) {
            this.map.on('click', function (event) {
                var coordinates = event.coordinate;
                var coordinateString = Object(ol_coordinate__WEBPACK_IMPORTED_MODULE_18__["toStringXY"])(coordinates, 2); // Koordinatları formatlayın
                console.log('Tıklanan Koordinatlar:', coordinateString);
                _this.coordinateService.setCoordinates(coordinates);
                // Tıklama olayı gerçekleştiğinde işaretleme fonksiyonunu çağırın
                _this.markTasinmazAtCoordinates(coordinates);
            });
        }
        // Harita katmanlarının görünürlüğünü izlemek için olay ekleyin
        this.openStreetMapLayer.on('change:visible', function () { return _this.onLayerVisibilityChange(); });
        this.googleMapsLayer.on('change:visible', function () { return _this.onLayerVisibilityChange(); });
    };
    TasinmazMapComponent.prototype.onLayerVisibilityChange = function () {
        var isGoogleMapsVisible = this.googleMapsLayer.getVisible();
        var isOpenStreetMapVisible = this.openStreetMapLayer.getVisible();
        if (!isOpenStreetMapVisible && !isGoogleMapsVisible) {
            // Her iki harita katmanı da kapalıysa
            this.allowMapMarking = false;
            this.hideCoordinateBar(); // Koordinat çubuğunu gizle
            this.vectorSource.clear(); // İşaretlemeleri temizle
        }
        else if (isOpenStreetMapVisible || isGoogleMapsVisible) {
            // Herhangi bir harita katmanı açıksa
            this.allowMapMarking = true;
            this.showCoordinateBar(); // Koordinat çubuğunu göster
            this.vectorSource.clear(); // İşaretlemeleri temizle
            this.vectorSource.addFeatures(this.markedTasinmazlar); // İşaretlemeleri geri ekle
        }
    };
    TasinmazMapComponent.prototype.showCoordinateBar = function () {
        this.coordinateBarVisible = false;
        this.toggleCoordinateBar();
    };
    TasinmazMapComponent.prototype.hideCoordinateBar = function () {
        this.coordinateBarVisible = true;
        this.toggleCoordinateBar();
    };
    TasinmazMapComponent.prototype.toggleCoordinateBar = function () {
        this.coordinateBarVisible = !this.coordinateBarVisible;
        var coordinateBar = this.elementRef.nativeElement.querySelector('.coordinate-display');
        var coordinateScaleLine = this.elementRef.nativeElement.querySelector('.ol-scale-line');
        var coordinateZoom = this.elementRef.nativeElement.querySelector('.ol-zoom');
        if (this.coordinateBarVisible) {
            this.renderer.setStyle(coordinateBar, 'display', 'block');
            this.renderer.setStyle(coordinateScaleLine, 'display', 'block');
            this.renderer.setStyle(coordinateZoom, 'display', 'block');
        }
        else {
            this.renderer.setStyle(coordinateBar, 'display', 'none');
            this.renderer.setStyle(coordinateScaleLine, 'display', 'none');
            this.renderer.setStyle(coordinateZoom, 'display', 'none');
        }
    };
    TasinmazMapComponent.prototype.toggleLayer = function (layer) {
        layer.setVisible(!layer.getVisible());
    };
    TasinmazMapComponent.prototype.refreshMap = function () {
        var defaultZoom = 6; // Önceki zoom seviyesini burada tanımlayabilirsiniz
        var defaultCenter = Object(ol_proj__WEBPACK_IMPORTED_MODULE_6__["fromLonLat"])([35, 39]); // Önceki merkez koordinatını burada tanımlayabilirsiniz
        this.map.getView().setCenter(defaultCenter);
        this.map.getView().setZoom(defaultZoom);
        // İşaretlenmiş taşınmazları temizleyin
        this.vectorSource.clear();
        this.vectorSource.addFeatures(this.markedTasinmazlar);
    };
    TasinmazMapComponent.prototype.changeOpacity = function (layer) {
        var currentOpacity = layer.getOpacity();
        var newOpacity = currentOpacity === 1 ? 0.5 : 1;
        layer.setOpacity(newOpacity);
    };
    TasinmazMapComponent.prototype.updateMapViewForCoordinates = function (coorX, coorY, zoomLevel) {
        this.map.getView().setCenter([coorX, coorY]);
        this.map.getView().setZoom(zoomLevel);
        console.log(coorX);
        console.log(coorY);
        console.log(5);
    };
    TasinmazMapComponent.prototype.resetZoom = function () {
        var defaultZoom = 6; // Önceki zoom seviyesini burada tanımlayabilirsiniz
        var defaultCenter = Object(ol_proj__WEBPACK_IMPORTED_MODULE_6__["fromLonLat"])([35, 39]); // Önceki merkez koordinatını burada tanımlayabilirsiniz
        this.map.getView().setCenter(defaultCenter);
        this.map.getView().setZoom(defaultZoom);
    };
    TasinmazMapComponent.prototype.toggleMapMarking = function () {
        this.allowMapMarking = !this.allowMapMarking;
    };
    TasinmazMapComponent.prototype.toggleTakeCoordinate = function () {
        this.allowTakeCoordinate = !this.allowTakeCoordinate;
    };
    TasinmazMapComponent.prototype.markTasinmazAtCoordinates = function (coordinates) {
        if (this.allowMapMarking) {
            var marker = new ol_Feature__WEBPACK_IMPORTED_MODULE_12__["default"]({
                geometry: new ol_geom_Point__WEBPACK_IMPORTED_MODULE_13__["default"](coordinates),
            });
            // İşaretleme stili ayarlayabilirsiniz
            marker.setStyle(new ol_style_Style__WEBPACK_IMPORTED_MODULE_17__["default"]({
                image: new ol_style_Circle__WEBPACK_IMPORTED_MODULE_14__["default"]({
                    radius: 6,
                    fill: new ol_style_Fill__WEBPACK_IMPORTED_MODULE_15__["default"]({ color: 'red' }),
                    stroke: new ol_style_Stroke__WEBPACK_IMPORTED_MODULE_16__["default"]({ color: 'white', width: 2 }),
                }),
            }));
            // İşaretlenmiş taşınmazları listeye ekleyin
            this.markedTasinmazlar.push(marker);
            // Vektör kaynağına özellik ekleyin
            this.vectorSource.clear();
            this.vectorSource.addFeatures(this.markedTasinmazlar);
        }
    };
    TasinmazMapComponent.prototype.unmarkTasinmazAtCoordinates = function (coorX, coorY) {
        // İşareti kaldırmak istediğiniz koordinatları kullanarak işareti bulun
        var index = this.markedTasinmazlar.findIndex(function (feature) {
            var geometry = feature.getGeometry();
            var coordinates = geometry.getCoordinates();
            return coordinates[0] === coorX && coordinates[1] === coorY;
        });
        if (index !== -1) {
            // İşareti kaldırın ve markedTasinmazlar dizisinden çıkarın
            var removedFeature = this.markedTasinmazlar.splice(index, 1)[0];
            this.vectorSource.removeFeature(removedFeature);
        }
    };
    TasinmazMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasinmaz-map',
            template: __webpack_require__(/*! ./tasinmaz-map.component.html */ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.html"),
            styles: [__webpack_require__(/*! ./tasinmaz-map.component.css */ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], src_app_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_19__["TasinmazService"], src_app_services_coordinate_service_service__WEBPACK_IMPORTED_MODULE_20__["CoordinateService"]])
    ], TasinmazMapComponent);
    return TasinmazMapComponent;
}());



/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.css":
/*!************************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Error messages */\r\n.error-message {\r\n  color: #d9534f;\r\n  margin-top: 5px;\r\n}\r\n/* Form style */\r\n.custom-form {\r\n  background-color: gray;\r\n  color: wheat;\r\n  border-radius: 10px;\r\n  padding-left: 10px;\r\n  padding: 30px;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n}\r\n/* Input style */\r\n.colorful {\r\n  background-color: lightblue;\r\n  border: 1px solid #ccc;\r\n  border-radius: 5px;\r\n  color: #333;\r\n}\r\n/* Button style */\r\n.btn-primary.colorful {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n  border: solid;\r\n  border-width: 3px;\r\n  border-radius: 10px;\r\n  margin: 50px;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n.btn-primary.colorful:hover {\r\n  background-color: #0056b3;\r\n}\r\n/* Butonun içindeki ikonun stili */\r\n.btn-primary i {\r\n  margin-right: 5px; /* İkon ile metin arasındaki boşluğu ayarlar */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzaW5tYXovdGFzaW5tYXotdXBkYXRlL3Rhc2lubWF6LXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQjtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUEsZUFBZTtBQUNmO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQ0FBMkM7QUFDN0M7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDZDQUE2QztBQUMvQztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsaUJBQWlCLEVBQUUsOENBQThDO0FBQ25FIiwiZmlsZSI6InNyYy9hcHAvdGFzaW5tYXovdGFzaW5tYXotdXBkYXRlL3Rhc2lubWF6LXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRXJyb3IgbWVzc2FnZXMgKi9cclxuLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiAjZDk1MzRmO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLyogRm9ybSBzdHlsZSAqL1xyXG4uY3VzdG9tLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgY29sb3I6IHdoZWF0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLyogSW5wdXQgc3R5bGUgKi9cclxuLmNvbG9yZnVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBzdHlsZSAqL1xyXG4uYnRuLXByaW1hcnkuY29sb3JmdWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDNweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5LmNvbG9yZnVsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG59XHJcblxyXG4vKiBCdXRvbnVuIGnDp2luZGVraSBpa29udW4gc3RpbGkgKi9cclxuLmJ0bi1wcmltYXJ5IGkge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4OyAvKiDEsGtvbiBpbGUgbWV0aW4gYXJhc8SxbmRha2kgYm/Fn2x1xJ91IGF5YXJsYXIgKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 p-4 custom-form mx-auto\">\r\n      <form [formGroup]=\"tasinmazForm\" (ngSubmit)=\"updateTasinmaz()\">\r\n        <!-- İl seçimi -->\r\n        <div class=\"form-group\">\r\n          <label for=\"il\">İL</label>\r\n          <select class=\"form-control colorful\" id=\"il\" formControlName=\"il\" (change)=\"onIlChange()\">\r\n            <option value=\"\" disabled selected>İl Seçiniz</option>\r\n            <option *ngFor=\"let il of iller\" [value]=\"il.ilId\">{{ il.ilName }}</option>\r\n          </select>\r\n          <div *ngIf=\"tasinmazForm.get('il')?.hasError('required') && tasinmazForm.get('il')?.dirty\" class=\"error-message\">\r\n            İL Alanı zorunludur.\r\n          </div>\r\n        </div>\r\n\r\n        <!-- İlçe seçimi -->\r\n        <div class=\"form-group\">\r\n          <label for=\"ilce\">İLÇE</label>\r\n          <select class=\"form-control colorful\" id=\"ilce\" formControlName=\"ilce\" (change)=\"onIlceChange()\">\r\n            <option value=\"\" disabled selected>İlçe Seçiniz</option>\r\n            <option *ngFor=\"let ilce of ilceler\" [value]=\"ilce.ilceId\">{{ ilce.ilceName }}</option>\r\n          </select>\r\n          <div *ngIf=\"tasinmazForm.get('ilce')?.hasError('required') && tasinmazForm.get('ilce')?.dirty\" class=\"error-message\">\r\n            İLÇE Alanı zorunludur.\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Mahalle seçimi -->\r\n        <div class=\"form-group\">\r\n          <label for=\"mahalleId\">MAHALLE</label>\r\n          <select class=\"form-control colorful\" id=\"mahalleId\" formControlName=\"mahalleId\">\r\n            <option value=\"\" disabled selected>Mahalle Seçiniz</option>\r\n            <option *ngFor=\"let mahalle of mahalleler\" [value]=\"mahalle.mahalleId\">{{ mahalle.mahalleName }}</option>\r\n          </select>\r\n          <div *ngIf=\"tasinmazForm.get('mahalleId')?.hasError('required') && tasinmazForm.get('mahalleId')?.dirty\" class=\"error-message\">\r\n            MAHALLE Alanı zorunludur.\r\n          </div>\r\n        </div>\r\n\r\n        <!-- ADA -->\r\n        <div class=\"form-group\">\r\n          <label for=\"ada\">ADA</label>\r\n          <input type=\"text\" class=\"form-control colorful\" id=\"ada\" formControlName=\"ada\" placeholder=\"ADA\">\r\n          <div *ngIf=\"tasinmazForm.get('ada')?.hasError('required') && tasinmazForm.get('ada')?.dirty\" class=\"error-message\">\r\n            ADA zorunludur.\r\n          </div>\r\n        </div>\r\n\r\n        <!-- PARSEL -->\r\n        <div class=\"form-group\">\r\n          <label for=\"parsel\">PARSEL</label>\r\n          <input type=\"text\" class=\"form-control colorful\" id=\"parsel\" formControlName=\"parsel\" placeholder=\"PARSEL\">\r\n          <div *ngIf=\"tasinmazForm.get('parsel')?.hasError('required') && tasinmazForm.get('parsel')?.dirty\" class=\"error-message\">\r\n            PARSEL zorunludur.\r\n          </div>\r\n        </div>\r\n\r\n        <!-- NİTELİK -->\r\n        <div class=\"form-group\">\r\n          <label for=\"nitelik\">NİTELİK</label>\r\n          <input type=\"text\" class=\"form-control colorful\" id=\"nitelik\" formControlName=\"nitelik\" placeholder=\"NİTELİK\">\r\n          <div *ngIf=\"tasinmazForm.get('nitelik')?.hasError('required') && tasinmazForm.get('nitelik')?.dirty\" class=\"error-message\">\r\n            NİTELİK zorunludur.\r\n          </div>\r\n        </div>\r\n\r\n        <!-- ADRES -->\r\n        <div class=\"form-group\">\r\n          <label for=\"adres\">ADRES</label>\r\n          <textarea class=\"form-control colorful\" id=\"adres\" formControlName=\"adres\" placeholder=\"ADRES\" rows=\"8\"></textarea>\r\n          <div *ngIf=\"tasinmazForm.get('adres')?.hasError('required') && tasinmazForm.get('adres')?.dirty\" class=\"error-message\">\r\n            ADRES ALANI zorunludur.\r\n          </div>\r\n        </div>\r\n        <!-- CoorX -->\r\n        <div class=\"form-group\">\r\n          <label for=\"coorX\">CoorX</label>\r\n          <input type=\"text\" class=\"form-control colorful\" id=\"coorX\" formControlName=\"coorX\" placeholder=\"x\">\r\n          <div *ngIf=\"tasinmazForm.get('coorX')?.hasError('required') && tasinmazForm.get('coorX')?.dirty\" class=\"error-message\">\r\n            CoorX zorunludur.\r\n          </div>\r\n        </div>\r\n        <!-- CoorY -->\r\n        <div class=\"form-group\">\r\n          <label for=\"coorY\">CoorY</label>\r\n          <input type=\"text\" class=\"form-control colorful\" id=\"coorY\" formControlName=\"coorY\" placeholder=\"y\">\r\n          <div *ngIf=\"tasinmazForm.get('coorY')?.hasError('required') && tasinmazForm.get('coorY')?.dirty\" class=\"error-message\">\r\n            CoorY zorunludur.\r\n          </div>\r\n        </div>\r\n        <!-- Güncelle Butonu -->\r\n        <div class=\"text-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary colorful\" [disabled]=\"tasinmazForm.invalid\">\r\n            <i class=\"fas fa-save\"></i> Güncelle\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div>\r\n<app-tasinmaz-map style=\"margin: 200px;\"></app-tasinmaz-map>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.ts ***!
  \***********************************************************************/
/*! exports provided: TasinmazUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasinmazUpdateComponent", function() { return TasinmazUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_tasinmaz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/tasinmaz */ "./src/app/models/tasinmaz.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_coordinate_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/coordinate-service.service */ "./src/app/services/coordinate-service.service.ts");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var src_app_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/tasinmaz.service */ "./src/app/services/tasinmaz.service.ts");
/* harmony import */ var _tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tasinmaz-map/tasinmaz-map.component */ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



 // ActivatedRoute eklenmiştir








var TasinmazUpdateComponent = /** @class */ (function () {
    function TasinmazUpdateComponent(pageTitleService, formBuilder, router, route, // parametreli routeler için
    tasinmazService, alertifyService, authService, userService, coordinateService) {
        this.pageTitleService = pageTitleService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.tasinmazService = tasinmazService;
        this.alertifyService = alertifyService;
        this.authService = authService;
        this.userService = userService;
        this.coordinateService = coordinateService;
        this.updatedTasinmaz = new src_app_models_tasinmaz__WEBPACK_IMPORTED_MODULE_4__["Tasinmaz"]();
        this.selectedTasinmazlar = [];
        this.iller = [];
        this.ilceler = [];
        this.mahalleler = [];
        this.tokenUserId = this.authService.getIdentity().nameidentifier;
        this.tasinmazForm = this.formBuilder.group({
            il: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ilce: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mahalleId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            parsel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nitelik: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            coorX: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            coorY: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    TasinmazUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setPageTitle('Taşınmaz Güncelle');
        this.userService.getUserById(parseInt(this.tokenUserId)).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
        });
        this.route.queryParams.subscribe(function (params) {
            var tasinmazId = +params['id'];
            // İlgili taşınmazı almak için servisi kullanın
            _this.tasinmazService.getTasinmazById(tasinmazId).subscribe(function (tasinmaz) {
                _this.updatedTasinmaz = tasinmaz["data"];
                console.log(_this.updatedTasinmaz);
                _this.selectedTasinmazlar[0] = _this.updatedTasinmaz;
                console.log(_this.tasinmazService.getSelectedTasinmazlar());
                _this.fillFormWithTasinmazData();
                _this.mapComponent.markTasinmazAtCoordinates([parseFloat(_this.updatedTasinmaz.coorX), parseFloat(_this.updatedTasinmaz.coorY)]);
                // Koordinatları forma doldurun
                // this.tasinmazForm.get('coorX').setValue(this.updatedTasinmaz.coorX);
                // this.tasinmazForm.get('coorY').setValue(this.updatedTasinmaz.coorY);
            }, function (error) {
                console.error('Tasinmaz alınamadı:', error);
            });
        });
        this.tasinmazService.getIller().subscribe(function (iller) {
            _this.iller = iller["data"];
        });
        this.selectedTasinmazlar = this.tasinmazService.getSelectedTasinmazlar();
        console.log(this.tasinmazService.getSelectedTasinmazlar());
        console.log(this.selectedTasinmazlar);
        if (this.selectedTasinmazlar.length === 1) {
            // İlk seçili taşınmazı alın ve form alanlarına yerleştirin
            var firstSelectedTasinmaz = this.selectedTasinmazlar[0];
            this.tasinmazForm.patchValue({
                il: firstSelectedTasinmaz.il,
                ilce: firstSelectedTasinmaz.ilce,
                mahalleId: firstSelectedTasinmaz.mahalleId,
                ada: firstSelectedTasinmaz.ada,
                parsel: firstSelectedTasinmaz.parsel,
                nitelik: firstSelectedTasinmaz.nitelik,
                adres: firstSelectedTasinmaz.adres,
                coorX: firstSelectedTasinmaz.coorX,
                coorY: firstSelectedTasinmaz.coorY
            });
        }
        // Diğer başlangıç işlemleri
        this.coordinateService.coordinate$.subscribe(function (coordinates) {
            // Koordinatları burada kullanabilirsiniz.
            var x = coordinates[0], y = coordinates[1];
            // Örneğin, bu koordinatları form kontrollerine yerleştirebilirsiniz.
            if (_this.mapComponent.markedTasinmazlar.length > 0) {
                var lastMarkedFeature = _this.mapComponent.markedTasinmazlar.pop(); // En son işareti çıkar
                _this.mapComponent.vectorSource.removeFeature(lastMarkedFeature); // Vektör kaynağından kaldır
            }
            _this.tasinmazForm.get('coorX').setValue(x);
            _this.tasinmazForm.get('coorY').setValue(y);
        });
        this.mapComponent.allowTakeCoordinate = false;
    };
    // İl seçimi değiştiğinde
    TasinmazUpdateComponent.prototype.onIlChange = function () {
        var _this = this;
        var selectedIl = this.tasinmazForm.get('il').value;
        this.tasinmazService.getIlcelerByIlId(selectedIl).subscribe(function (ilceler) {
            _this.ilceler = ilceler;
        });
    };
    // İlçe seçimi değiştiğinde
    TasinmazUpdateComponent.prototype.onIlceChange = function () {
        var _this = this;
        var selectedIlce = this.tasinmazForm.get('ilce').value;
        this.tasinmazService.getMahallelerByIlceId(selectedIlce).subscribe(function (mahalleler) {
            _this.mahalleler = mahalleler;
        });
    };
    TasinmazUpdateComponent.prototype.fillFormWithTasinmazData = function () {
        // Seçilen taşınmazın verilerini forma doldurun
        if (this.updatedTasinmaz) {
            this.tasinmazForm.setValue({
                il: this.updatedTasinmaz.il || '',
                ilce: this.updatedTasinmaz.ilce || '',
                mahalleId: this.updatedTasinmaz.mahalleId || '',
                ada: this.updatedTasinmaz.ada || '',
                parsel: this.updatedTasinmaz.parsel || '',
                nitelik: this.updatedTasinmaz.nitelik || '',
                adres: this.updatedTasinmaz.adres || '',
                coorX: this.updatedTasinmaz.coorX || '',
                coorY: this.updatedTasinmaz.coorY || ''
            });
        }
    };
    TasinmazUpdateComponent.prototype.updateTasinmaz = function () {
        var _this = this;
        if (this.tasinmazForm.valid) {
            // Kullanıcıya onay için bir iletişim kutusu (confirm dialog) gösterimi
            this.alertifyService.confirm("UYARI!", 'Seçili taşınmaza ait bilgileri güncellemek istediğinize emin misiniz?', function () {
                // Kullanıcı "Evet" derse, taşınmazı güncelleyin
                _this.updatedTasinmaz = Object.assign({}, _this.tasinmazForm.value);
                _this.updatedTasinmaz.tasinmazId = _this.selectedTasinmazlar[0].tasinmazId;
                _this.updatedTasinmaz.ilce = parseInt(_this.tasinmazForm.get('ilce').value);
                _this.updatedTasinmaz.il = parseInt(_this.tasinmazForm.get('il').value);
                _this.updatedTasinmaz.mahalleId = parseInt(_this.tasinmazForm.get('mahalleId').value);
                _this.updatedTasinmaz.userId = parseInt(_this.tokenUserId);
                _this.updatedTasinmaz.coorX = _this.tasinmazForm.get('coorX').value.toString();
                _this.updatedTasinmaz.coorY = _this.tasinmazForm.get('coorY').value.toString();
                // this.updatedTasinmaz.user = this.tasinmazService.getTasinmazByUserId(this.tokenUserId); //Todo
                console.log(_this.updatedTasinmaz); // Taşınmaz ID
                _this.tasinmazService.updateTasinmaz(_this.updatedTasinmaz).subscribe(function (response) {
                    console.log('Taşınmaz Başarıyla Güncellendi:', response);
                    _this.alertifyService.success('Seçili taşınmaza ait güncelleme işlemi başarı ile gerçekleşti');
                    _this.router.navigateByUrl('/tasinmaz');
                }, function (error) {
                    console.error('Tasinmaz güncelleme başarısız:', error);
                    _this.alertifyService.error('Tasinmaz güncelleme başarısız: ' + error);
                });
            }, function () {
                // Kullanıcı "Hayır" derse, işlemi iptal edin
                _this.alertifyService.warning("Taşınmaz Güncelleme İşlemini İptal Ettiniz...");
                console.log('Taşınmaz güncelleme işlemi iptal edildi.');
            });
        }
        else {
            // Form geçerli değilse kullanıcıya bir hata gösterin veya başka bir işlem yapın
            console.error('Form geçerli değil. Taşınmaz güncellenemedi.');
            this.alertifyService.error('Form geçerli değil. Taşınmaz güncellenemedi.');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_10__["TasinmazMapComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_10__["TasinmazMapComponent"])
    ], TasinmazUpdateComponent.prototype, "mapComponent", void 0);
    TasinmazUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasinmaz-update',
            template: __webpack_require__(/*! ./tasinmaz-update.component.html */ "./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.html"),
            styles: [__webpack_require__(/*! ./tasinmaz-update.component.css */ "./src/app/tasinmaz/tasinmaz-update/tasinmaz-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_8__["PageTitleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_9__["TasinmazService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
            src_app_services_coordinate_service_service__WEBPACK_IMPORTED_MODULE_7__["CoordinateService"]])
    ], TasinmazUpdateComponent);
    return TasinmazUpdateComponent;
}());



/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz.component.css":
/*!*************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Arama alanı stilini özelleştirme */\r\n.custom-search {\r\n  background-color: #27ae60; /* Mavi tonlu arka plan rengi */\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}\r\n/* Tablo stilleri */\r\n.table {\r\n  background-color: #f0f0f0; /* Updated table background color */\r\n  border: 1px solid #ddd;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n/* Tablo başlık stilleri */\r\n.table thead {\r\n  background-color: #007bff;\r\n  color: #fff;\r\n}\r\n/* Tablo başlık hücreleri */\r\n.table th {\r\n  padding: 12px;\r\n  text-align: center;\r\n  background-color: #0062cc; /* Updated header background color */\r\n  color: #fff;\r\n}\r\n/* Tablo veri hücreleri */\r\n.table td {\r\n  padding: 10px;\r\n  text-align: center;\r\n  border-top: 1px solid #ddd;\r\n}\r\n/* Zebra çizgili tablo (opsiyonel) */\r\n.table tbody tr:nth-child(even) {\r\n  background-color: #e0e0e0;\r\n}\r\n/* Hücre içeriği stilini özelleştirme (örnek olarak) */\r\n.table td {\r\n  color: #333;\r\n  background-color: #f0f0f0; /* Updated cell background color */\r\n}\r\n/* Seçili satır stilini özelleştirme (opsiyonel) */\r\n.table tbody tr.selected {\r\n  background-color: #ffffcc;\r\n}\r\n/* Düğme stilini özelleştirme */\r\n.action-button {\r\n  margin: 5px;\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s;\r\n}\r\n.action-button:disabled {\r\n  background-color: #ccc;\r\n  cursor: not-allowed;\r\n}\r\n.add-button {\r\n  background-color: #27ae60; /* Yeşil tonlu ekle düğmesi arka plan rengi */\r\n  color: #fff; /* Beyaz ekle düğmesi metin rengi */\r\n}\r\n.delete-button {\r\n  background-color: #e74c3c; /* Kırmızı tonlu sil düğmesi arka plan rengi */\r\n  color: #fff; /* Beyaz sil düğmesi metin rengi */\r\n}\r\n.edit-button {\r\n  background-color: #3498db; /* Mavi tonlu güncelle düğmesi arka plan rengi */\r\n  color: #fff; /* Beyaz güncelle düğmesi metin rengi */\r\n}\r\n.report-button {\r\n  background-color: #17a2b8; /* Turkuaz tonlu raporla düğmesi arka plan rengi */\r\n  color: #fff; /* Beyaz raporla düğmesi metin rengi */\r\n}\r\n.action-button:hover {\r\n  filter: brightness(1.2);\r\n}\r\n/* Taşınmaz bulunamadı mesajı stilini özelleştirme */\r\n.no-data-message {\r\n  text-align: center; /* Metni ortala */\r\n  font-size: 18px; /* Metin boyutu */\r\n  margin-top: 20px; /* Üst boşluk */\r\n  padding: 10px; /* İç boşluk */\r\n  background-color: #fff; /* Arka plan rengi */\r\n  border: 1px solid #ddd; /* Kenarlık */\r\n  border-radius: 5px; /* Köşe yuvarlama */\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Gölge efekti */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzaW5tYXovdGFzaW5tYXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckM7RUFDRSx5QkFBeUIsRUFBRSwrQkFBK0I7RUFDMUQsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSx5QkFBeUIsRUFBRSxtQ0FBbUM7RUFDOUQsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUIsRUFBRSxvQ0FBb0M7RUFDL0QsV0FBVztBQUNiO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSxXQUFXO0VBQ1gseUJBQXlCLEVBQUUsa0NBQWtDO0FBQy9EO0FBRUEsa0RBQWtEO0FBQ2xEO0VBQ0UseUJBQXlCO0FBQzNCO0FBS0EsK0JBQStCO0FBQy9CO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QixFQUFFLDZDQUE2QztFQUN4RSxXQUFXLEVBQUUsbUNBQW1DO0FBQ2xEO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSw4Q0FBOEM7RUFDekUsV0FBVyxFQUFFLGtDQUFrQztBQUNqRDtBQUVBO0VBQ0UseUJBQXlCLEVBQUUsZ0RBQWdEO0VBQzNFLFdBQVcsRUFBRSx1Q0FBdUM7QUFDdEQ7QUFFQTtFQUNFLHlCQUF5QixFQUFFLGtEQUFrRDtFQUM3RSxXQUFXLEVBQUUsc0NBQXNDO0FBQ3JEO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQSxvREFBb0Q7QUFDcEQ7RUFDRSxrQkFBa0IsRUFBRSxpQkFBaUI7RUFDckMsZUFBZSxFQUFFLGlCQUFpQjtFQUNsQyxnQkFBZ0IsRUFBRSxlQUFlO0VBQ2pDLGFBQWEsRUFBRSxjQUFjO0VBQzdCLHNCQUFzQixFQUFFLG9CQUFvQjtFQUM1QyxzQkFBc0IsRUFBRSxhQUFhO0VBQ3JDLGtCQUFrQixFQUFFLG1CQUFtQjtFQUN2Qyx1Q0FBdUMsRUFBRSxpQkFBaUI7QUFDNUQiLCJmaWxlIjoic3JjL2FwcC90YXNpbm1hei90YXNpbm1hei5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXJhbWEgYWxhbsSxIHN0aWxpbmkgw7Z6ZWxsZcWfdGlybWUgKi9cclxuLmN1c3RvbS1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2FlNjA7IC8qIE1hdmkgdG9ubHUgYXJrYSBwbGFuIHJlbmdpICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vKiBUYWJsbyBzdGlsbGVyaSAqL1xyXG4udGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIFVwZGF0ZWQgdGFibGUgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogVGFibG8gYmHFn2zEsWsgc3RpbGxlcmkgKi9cclxuLnRhYmxlIHRoZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBUYWJsbyBiYcWfbMSxayBow7xjcmVsZXJpICovXHJcbi50YWJsZSB0aCB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYzsgLyogVXBkYXRlZCBoZWFkZXIgYmFja2dyb3VuZCBjb2xvciAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBUYWJsbyB2ZXJpIGjDvGNyZWxlcmkgKi9cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLyogWmVicmEgw6dpemdpbGkgdGFibG8gKG9wc2l5b25lbCkgKi9cclxuLnRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxufVxyXG5cclxuLyogSMO8Y3JlIGnDp2VyacSfaSBzdGlsaW5pIMO2emVsbGXFn3Rpcm1lICjDtnJuZWsgb2xhcmFrKSAqL1xyXG4udGFibGUgdGQge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7IC8qIFVwZGF0ZWQgY2VsbCBiYWNrZ3JvdW5kIGNvbG9yICovXHJcbn1cclxuXHJcbi8qIFNlw6dpbGkgc2F0xLFyIHN0aWxpbmkgw7Z6ZWxsZcWfdGlybWUgKG9wc2l5b25lbCkgKi9cclxuLnRhYmxlIHRib2R5IHRyLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmNjO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBEw7zEn21lIHN0aWxpbmkgw7Z6ZWxsZcWfdGlybWUgKi9cclxuLmFjdGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdhZTYwOyAvKiBZZcWfaWwgdG9ubHUgZWtsZSBkw7zEn21lc2kgYXJrYSBwbGFuIHJlbmdpICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIEJleWF6IGVrbGUgZMO8xJ9tZXNpIG1ldGluIHJlbmdpICovXHJcbn1cclxuXHJcbi5kZWxldGUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjOyAvKiBLxLFybcSxesSxIHRvbmx1IHNpbCBkw7zEn21lc2kgYXJrYSBwbGFuIHJlbmdpICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIEJleWF6IHNpbCBkw7zEn21lc2kgbWV0aW4gcmVuZ2kgKi9cclxufVxyXG5cclxuLmVkaXQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiOyAvKiBNYXZpIHRvbmx1IGfDvG5jZWxsZSBkw7zEn21lc2kgYXJrYSBwbGFuIHJlbmdpICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIEJleWF6IGfDvG5jZWxsZSBkw7zEn21lc2kgbWV0aW4gcmVuZ2kgKi9cclxufVxyXG5cclxuLnJlcG9ydC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7IC8qIFR1cmt1YXogdG9ubHUgcmFwb3JsYSBkw7zEn21lc2kgYXJrYSBwbGFuIHJlbmdpICovXHJcbiAgY29sb3I6ICNmZmY7IC8qIEJleWF6IHJhcG9ybGEgZMO8xJ9tZXNpIG1ldGluIHJlbmdpICovXHJcbn1cclxuXHJcbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcclxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcclxufVxyXG5cclxuLyogVGHFn8Sxbm1heiBidWx1bmFtYWTEsSBtZXNhasSxIHN0aWxpbmkgw7Z6ZWxsZcWfdGlybWUgKi9cclxuLm5vLWRhdGEtbWVzc2FnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBNZXRuaSBvcnRhbGEgKi9cclxuICBmb250LXNpemU6IDE4cHg7IC8qIE1ldGluIGJveXV0dSAqL1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7IC8qIMOcc3QgYm/Fn2x1ayAqL1xyXG4gIHBhZGRpbmc6IDEwcHg7IC8qIMSww6cgYm/Fn2x1ayAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IC8qIEFya2EgcGxhbiByZW5naSAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IC8qIEtlbmFybMSxayAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDsgLyogS8O2xZ9lIHl1dmFybGFtYSAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTsgLyogR8O2bGdlIGVmZWt0aSAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz.component.html":
/*!**************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 col-lg-6 col-12 p-5 mx-auto custom-search\">\r\n      <form>\r\n        <div class=\"input-group\">\r\n          <input\r\n            class=\"form-control bg-secondary text-white mx-3\"\r\n            type=\"search\"\r\n            placeholder=\"Ara\"\r\n            aria-label=\"Ara\"\r\n            [(ngModel)]=\"searchText\"\r\n            name=\"searchText\"\r\n          />\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline- btn-primary\" (click)=\"search()\" type=\"button\">\r\n              <i class=\"fas fa-search\"></i> Ara\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!pagedTasinmazlar || pagedTasinmazlar.length === 0\" class=\"no-data-message\">\r\n  Taşınmaz bulunamadı.\r\n</div>\r\n\r\n<div *ngIf=\"pagedTasinmazlar && pagedTasinmazlar.length > 0\" class=\"row\">\r\n  <form class=\"col-md-10 col-lg-6 col-12 p-5 mx-auto\">\r\n    <div class=\"table-responsive\" style=\"max-height: 400px; overflow-y: auto;\">\r\n      <table class=\"table table-bordered excel-style\">\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>İL</th>\r\n            <th>İLÇE</th>\r\n            <th>MAHALLE</th>\r\n            <th>ADA</th>\r\n            <th>PARSEL</th>\r\n            <th>NİTELİK</th>\r\n            <th>ADRES</th>\r\n            <th>X</th>\r\n            <th>Y</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <!-- Belirli bir sayfa için verileri filtrele -->\r\n          <tr *ngFor=\"let tasinmaz of pagedTasinmazlar | tasinmazFilter: searchText\">\r\n            <td>\r\n              <input type=\"hidden\" [value]=\"tasinmaz.tasinmazId\" />\r\n              <input style=\"text-align: right;\" type=\"checkbox\" [value]=\"tasinmaz.tasinmazId\" (change)=\"onCheckboxClicked($event, tasinmaz)\" />\r\n            </td>\r\n            <td>{{ getIlName(tasinmaz.il) }}</td>\r\n            <td>{{ getIlceName(tasinmaz.ilce) }}</td>\r\n            <td>{{ getMahalleName(tasinmaz.mahalleId) }}</td>\r\n            <td>{{ tasinmaz.ada }}</td>\r\n            <td>{{ tasinmaz.parsel }}</td>\r\n            <td>{{ tasinmaz.nitelik }}</td>\r\n            <td>{{ tasinmaz.adres }}</td>\r\n            <td>{{ tasinmaz.coorX  }}  </td>\r\n            <td>{{ tasinmaz.coorY }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"d-flex justify-content-center\">\r\n        <mat-paginator\r\n          [length]=\"tasinmazlar.length\"\r\n          [pageSize]=\"itemsPerPage\"\r\n          [pageSizeOptions]=\"[itemsPerPage]\"\r\n          showFirstLastButtons=\"true\"\r\n          (page)=\"changePage($event)\"\r\n          class=\"pagination-icons\"\r\n        ></mat-paginator>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n<!-- app.component.html -->\r\n<app-tasinmaz-map></app-tasinmaz-map>\r\n<div class=\"button-container text-center mt-4\">\r\n  <button name=\"actionButtons\" class=\"action-button add-button\" routerLink=\"/tasinmaz/tasinmaz-add\">\r\n    <i class=\"fas fa-plus\"></i> Ekle\r\n  </button>\r\n  <button name=\"actionButtons\" class=\"action-button delete-button\" (click)=\"deleteSelectedTasinmaz()\" [disabled]=\"selectedTasinmazlar.length <= 0\">\r\n    <i class=\"fas fa-trash\"></i> Sil\r\n  </button>\r\n  <button name=\"actionButtons\" class=\"action-button edit-button\" (click)=\"navigateToUpdateTasinmaz()\" [disabled]=\"selectedTasinmazlar.length <= 0\">\r\n    <i class=\"fas fa-edit\"></i> Güncelle\r\n  </button>\r\n  <button name=\"actionButtons\" class=\"action-button report-button\" (click)=\"generateReport()\">\r\n    <i class=\"fas fa-file-excel\"></i> Raporla\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/tasinmaz/tasinmaz.component.ts":
/*!************************************************!*\
  !*** ./src/app/tasinmaz/tasinmaz.component.ts ***!
  \************************************************/
/*! exports provided: TasinmazComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasinmazComponent", function() { return TasinmazComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tasinmaz.service */ "./src/app/services/tasinmaz.service.ts");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_tasinmaz_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tasinmaz-report.service */ "./src/app/services/tasinmaz-report.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasinmaz-map/tasinmaz-map.component */ "./src/app/tasinmaz/tasinmaz-map/tasinmaz-map.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");










var TasinmazComponent = /** @class */ (function () {
    function TasinmazComponent(tasinmazService, tasinmazReportService, pageTitleService, router, alertifyService, authService, userService) {
        this.tasinmazService = tasinmazService;
        this.tasinmazReportService = tasinmazReportService;
        this.pageTitleService = pageTitleService;
        this.router = router;
        this.alertifyService = alertifyService;
        this.authService = authService;
        this.userService = userService;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.selectedTasinmazlar = [];
        this.pageSize = 10;
        this.searchText = '';
        this.mahalleler = [];
        this.iller = [];
        this.ilceler = [];
        this.tokenUserId = parseInt(this.authService.getIdentity().nameidentifier);
        this.selectedTasinmazlar = this.tasinmazService.getSelectedTasinmazlar();
        this.selectedTasinmazlarSpecific = [];
    }
    TasinmazComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setPageTitle('Mevcut Taşınmazlar Listesi');
        this.mapComponent.toggleTakeCoordinate();
        this.tasinmazService.getMahalleler().subscribe(function (mahalleler) {
            _this.mahalleler = mahalleler["data"];
        });
        this.tasinmazService.getIller().subscribe(function (iller) {
            _this.iller = iller["data"];
        });
        this.tasinmazService.getIlceler().subscribe(function (ilceler) {
            _this.ilceler = ilceler["data"];
        });
        this.userService.getUserById(this.tokenUserId).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
            _this.loadTasinmazlar();
        });
    };
    TasinmazComponent.prototype.loadTasinmazlar = function () {
        var _this = this;
        this.tasinmazService.getTasinmazByUserId(this.userId).subscribe(function (data) {
            _this.tasinmazlar = data["data"];
            console.log('Tüm veriler:', _this.tasinmazlar);
            _this.tasinmazlar.sort(function (a, b) { return a.tasinmazId - b.tasinmazId; });
            _this.updatePagedTasinmazlar();
            _this.tasinmazlar.forEach(function (tasinmaz) {
                if (tasinmaz.coorX !== null && tasinmaz.coorY !== null) {
                    // sfr:147258. <=
                    _this.tasinmazService.setTasinmazLength(_this.tasinmazlar.length);
                    _this.mapComponent.markTasinmazAtCoordinates([parseFloat(tasinmaz.coorX), parseFloat(tasinmaz.coorY)]);
                }
            });
            _this.mapComponent.toggleMapMarking();
            _this.selectedTasinmazlar = _this.tasinmazService.getSelectedTasinmazlar();
            console.log('Seçili Taşınmazlar:', _this.selectedTasinmazlar);
        }, function (error) {
            console.error('Veri alınamadı:', error);
        });
    };
    TasinmazComponent.prototype.updateMapViewForSingleSelectedTasinmaz = function () {
        if (this.selectedTasinmazlar.length === 1) {
            // Sadece bir taşınmaz seçiliyse, bu taşınmazın koordinatlarını alın
            var selectedTasinmaz = this.selectedTasinmazlar[0];
            var coorX = parseFloat(selectedTasinmaz.coorX);
            var coorY = parseFloat(selectedTasinmaz.coorY);
            // Harita görünümünü bu taşınmazın koordinatlarına göre güncelleyin ve zoom seviyesini ayarlayın
            this.mapComponent.updateMapViewForCoordinates(coorX, coorY, 9); // Zoom seviyesini istediğiniz değere ayarlayın
        }
    };
    TasinmazComponent.prototype.getIlName = function (ilId) {
        var il = this.iller.find(function (item) { return item.ilId === ilId; });
        return il ? il.ilName : '';
    };
    TasinmazComponent.prototype.getIlceName = function (ilceId) {
        var ilce = this.ilceler.find(function (item) { return item.ilceId === ilceId; });
        return ilce ? ilce.ilceName : '';
    };
    TasinmazComponent.prototype.getMahalleName = function (mahalleId) {
        var mahalle = this.mahalleler.find(function (item) { return item.mahalleId === mahalleId; });
        return mahalle ? mahalle.mahalleName : '';
    };
    TasinmazComponent.prototype.navigateToUpdateTasinmaz = function () {
        if (this.selectedTasinmazlar.length === 1) {
            // Sadece bir tasinmaz seçiliyse yönlendirme yap
            var selectedTasinmaz = this.selectedTasinmazlar[0];
            this.router.navigateByUrl('/tasinmaz/tasinmaz-update?id=' + selectedTasinmaz.tasinmazId);
        }
        else {
            // Birden fazla veya hiç tasinmaz seçiliyse uyarı ver veya işlem yapma
            if (this.selectedTasinmazlar.length > 1) {
                this.alertifyService.error('Lütfen güncellemek için sadece bir adet taşınmaz seçin.');
            }
            else {
                this.alertifyService.error('Lütfen güncellemek için bir taşınmaz seçin.');
            }
        }
    };
    TasinmazComponent.prototype.search = function () {
        var _this = this;
        if (this.searchText.trim() === '') {
            // Arama terimi boşsa, tüm verileri göster
            this.pagedTasinmazlar = this.tasinmazlar.slice(0, this.itemsPerPage);
        }
        else {
            // Arama terimi doluysa, filtrelemeyi uygula ve paginasyonu sıfırla
            var filteredTasinmazlar = this.tasinmazlar.filter(function (tasinmaz) {
                return ((_this.getIlName(tasinmaz.il).toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (_this.getIlceName(tasinmaz.ilce).toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (_this.getMahalleName(tasinmaz.mahalleId).toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (tasinmaz.ada && tasinmaz.ada.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (tasinmaz.parsel && tasinmaz.parsel.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (tasinmaz.nitelik && tasinmaz.nitelik.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (tasinmaz.adres && tasinmaz.adres.toLowerCase().includes(_this.searchText.toLowerCase())));
            });
            // Filtrelenen verileri paginatöre uygula
            this.pagedTasinmazlar = filteredTasinmazlar.slice(0, this.itemsPerPage);
        }
        // Sayfa numarasını sıfırla
        this.currentPage = 1;
    };
    TasinmazComponent.prototype.changePage = function (event) {
        this.currentPage = event.pageIndex + 1;
        this.updatePagedTasinmazlar();
        this.selectedTasinmazlar = [];
        this.selectedTasinmazlarSpecific = [];
        this.tasinmazService.setSelectedTasinmazlar(this.selectedTasinmazlar);
    };
    TasinmazComponent.prototype.onCheckboxClicked = function (event, tasinmaz) {
        if (event.target.checked) {
            console.log(tasinmaz);
            this.selectedTasinmazlar.push(tasinmaz);
            this.selectedTasinmazlarSpecific.push(tasinmaz);
            this.tasinmazService.setSelectedTasinmazlar(this.selectedTasinmazlar);
            this.updateMapViewForSingleSelectedTasinmaz();
            console.log(this.selectedTasinmazlar[0].tasinmazId);
        }
        else {
            // Seçili değilse, seçili taşınmazları çıkarın
            var index = this.selectedTasinmazlar.findIndex(function (item) { return item.tasinmazId === tasinmaz.tasinmazId; });
            if (index !== -1) {
                this.selectedTasinmazlar.splice(index, 1);
                this.selectedTasinmazlarSpecific.splice(index, 1); // İlgili taşınmazı özel listeden de çıkarın
                this.tasinmazService.setSelectedTasinmazlar(this.selectedTasinmazlar);
                this.mapComponent.resetZoom();
            }
        }
    };
    TasinmazComponent.prototype.generateReport = function () {
        var _this = this;
        if (this.selectedTasinmazlar.length !== 1) {
            this.alertifyService.error('Lütfen raporlamak için en az bir taşınmaz seçin.');
            return;
        }
        var dataToExport = this.selectedTasinmazlar.map(function (tasinmaz) {
            return {
                'ID': tasinmaz.tasinmazId,
                'İL': _this.getIlName(tasinmaz.il),
                'İLÇE': _this.getIlceName(tasinmaz.ilce),
                'MAHALLE': _this.getMahalleName(tasinmaz.mahalleId),
                'ADA': tasinmaz.ada,
                'PARSEL': tasinmaz.parsel,
                'NİTELİK': tasinmaz.nitelik,
                'ADRES': tasinmaz.adres,
                'X': tasinmaz.coorX,
                'Y': tasinmaz.coorY
            };
        });
        this.tasinmazReportService.exportToExcel(dataToExport, 'tasinmazlar-rapor');
        this.alertifyService.success('Taşınmaz bilgileri raporları başarıyla iletildi...');
        // Veriyi Excel dosyasına dönüştürme işlemi
        // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
        // const wb: XLSX.WorkBook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, ws, 'Tasinmazlar Rapor');
        // XLSX.writeFile(wb, 'tasinmazlar-rapor.xlsx');
    };
    TasinmazComponent.prototype.deleteSelectedTasinmaz = function () {
        var _this = this;
        if (this.selectedTasinmazlar.length > 0) {
            this.alertifyService.confirm("DİKKAT!", 'Seçili taşınmaz veya taşınmazlara ait tüm bilgileri silmek istediğinize emin misiniz?', function () {
                // Kullanıcı Evet'i tıkladığında yapılacak işlemler
                _this.selectedTasinmazlar.forEach(function (tasinmaz) {
                    // Seçili taşınmazları sil
                    _this.tasinmazService.deleteTasinmaz(tasinmaz.tasinmazId).subscribe(function () {
                        _this.tasinmazlar = _this.tasinmazlar.filter(function (item) { return item.tasinmazId !== tasinmaz.tasinmazId; });
                        _this.updatePagedTasinmazlar();
                        _this.mapComponent.unmarkTasinmazAtCoordinates(parseFloat(tasinmaz.coorX), parseFloat(tasinmaz.coorY));
                        _this.mapComponent.refreshMap();
                        _this.alertifyService.success('Taşınmaz Silme İşlemi Başarıyla Gerçekleşti.');
                        console.log("Ta\u015F\u0131nmaz ID " + tasinmaz.tasinmazId + " ba\u015Far\u0131yla silindi.");
                    }, function (error) {
                        console.error("Ta\u015F\u0131nmaz ID " + tasinmaz.tasinmazId + " silinemedi:", error);
                        _this.alertifyService.error('Taşınmaz silme işlemi başarısız...');
                    });
                });
                _this.selectedTasinmazlar = [];
                _this.selectedTasinmazlarSpecific = []; // Özel listeden de seçili taşınmazları çıkarın
            }, function () {
                // Kullanıcı Hayır'ı tıkladığında yapılacak işlemler
                _this.alertifyService.warning('Taşınmaz Silme İşlemini İptal Ettiniz...');
            });
        }
        else {
            alert('Lütfen silmek için en az bir taşınmaz seçin.');
        }
    };
    TasinmazComponent.prototype.updatePagedTasinmazlar = function () {
        var startIndex = (this.currentPage - 1) * this.itemsPerPage;
        var endIndex = startIndex + this.itemsPerPage;
        this.pagedTasinmazlar = this.tasinmazlar.slice(startIndex, endIndex);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_8__["TasinmazMapComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _tasinmaz_map_tasinmaz_map_component__WEBPACK_IMPORTED_MODULE_8__["TasinmazMapComponent"])
    ], TasinmazComponent.prototype, "mapComponent", void 0);
    TasinmazComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasinmaz',
            template: __webpack_require__(/*! ./tasinmaz.component.html */ "./src/app/tasinmaz/tasinmaz.component.html"),
            providers: [_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_2__["TasinmazService"], _services_tasinmaz_report_service__WEBPACK_IMPORTED_MODULE_6__["TasinmazReportService"]],
            styles: [__webpack_require__(/*! ./tasinmaz.component.css */ "./src/app/tasinmaz/tasinmaz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_tasinmaz_service__WEBPACK_IMPORTED_MODULE_2__["TasinmazService"],
            _services_tasinmaz_report_service__WEBPACK_IMPORTED_MODULE_6__["TasinmazReportService"],
            _services_page_title_service__WEBPACK_IMPORTED_MODULE_3__["PageTitleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]])
    ], TasinmazComponent);
    return TasinmazComponent;
}());



/***/ }),

/***/ "./src/app/users/user-add/user-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/user-add/user-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Ana formun tasarımı */\r\n.custom-form {\r\n  background-color: lightslategray; /* Arka plan rengi */\r\n  border-radius: 10px;\r\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\r\n  padding: 30px;\r\n  margin: 30px;\r\n}\r\n/* Form gruplarının tasarımı */\r\n.form-group {\r\n  margin-bottom: 20px;\r\n}\r\n/* Etiketlerin tasarımı */\r\nlabel {\r\n  font-weight: bold;\r\n  color: lavender; /* Mavi renk */\r\n}\r\n/* Form kontrolünün tasarımı */\r\n.form-control {\r\n  border: 1px solid #d9534f; /* Kenarlık rengi */\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n/* Hata mesajının tasarımı */\r\n.error-message {\r\n  color: #d9534f; /* Kırmızı renk */\r\n  font-size: 14px;\r\n}\r\n/* Düğmelerin tasarımı */\r\n.btn-primary {\r\n  background-color: green;\r\n  color: white;\r\n  border: none;\r\n  margin-top: 20px;\r\n  border-radius: 10px;\r\n  padding: 10px 60px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n.btn-primary:hover {\r\n  background-color: #0056b3; /* Hover rengi */\r\n}\r\n/* Buton içindeki ikonun tasarımı */\r\n.btn-icon i {\r\n  margin-right: 5px; /* İkon ile metin arasındaki boşluğu ayarlar */\r\n}\r\n/* Büyük başlık */\r\nh2 {\r\n  color: lavenderblush; /* Mavi renk */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1hZGQvdXNlci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSxnQ0FBZ0MsRUFBRSxvQkFBb0I7RUFDdEQsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBRSxjQUFjO0FBQ2pDO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UseUJBQXlCLEVBQUUsbUJBQW1CO0VBQzlDLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxjQUFjLEVBQUUsaUJBQWlCO0VBQ2pDLGVBQWU7QUFDakI7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxnQkFBZ0I7QUFDN0M7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxpQkFBaUIsRUFBRSw4Q0FBOEM7QUFDbkU7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQkFBb0IsRUFBRSxjQUFjO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlci1hZGQvdXNlci1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFuYSBmb3JtdW4gdGFzYXLEsW3EsSAqL1xyXG4uY3VzdG9tLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5OyAvKiBBcmthIHBsYW4gcmVuZ2kgKi9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi8qIEZvcm0gZ3J1cGxhcsSxbsSxbiB0YXNhcsSxbcSxICovXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBFdGlrZXRsZXJpbiB0YXNhcsSxbcSxICovXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogbGF2ZW5kZXI7IC8qIE1hdmkgcmVuayAqL1xyXG59XHJcblxyXG4vKiBGb3JtIGtvbnRyb2zDvG7DvG4gdGFzYXLEsW3EsSAqL1xyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDk1MzRmOyAvKiBLZW5hcmzEsWsgcmVuZ2kgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLyogSGF0YSBtZXNhasSxbsSxbiB0YXNhcsSxbcSxICovXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogI2Q5NTM0ZjsgLyogS8Sxcm3EsXrEsSByZW5rICovXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vKiBEw7zEn21lbGVyaW4gdGFzYXLEsW3EsSAqL1xyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIEhvdmVyIHJlbmdpICovXHJcbn1cclxuXHJcbi8qIEJ1dG9uIGnDp2luZGVraSBpa29udW4gdGFzYXLEsW3EsSAqL1xyXG4uYnRuLWljb24gaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIMSwa29uIGlsZSBtZXRpbiBhcmFzxLFuZGFraSBib8WfbHXEn3UgYXlhcmxhciAqL1xyXG59XHJcblxyXG4vKiBCw7x5w7xrIGJhxZ9sxLFrICovXHJcbmgyIHtcclxuICBjb2xvcjogbGF2ZW5kZXJibHVzaDsgLyogTWF2aSByZW5rICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/user-add/user-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/users/user-add/user-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 col-lg-6 col-12 p-5 mx-auto  custom-form\">\r\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"addUser()\" class=\"user-form\">\r\n        <h2 class=\"mb-4\">Yeni Kullanıcı Ekle</h2>\r\n        <!-- Ad Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"firstName\">Ad:</label>\r\n          <input type=\"text\" class=\"form-control colorful\" id=\"firstName\" formControlName=\"firstName\" placeholder=\"Ad\">\r\n          <div *ngIf=\"userForm.get('firstName')?.hasError('required') && userForm.get('firstName')?.dirty\" class=\"error-message\">\r\n            Ad Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- Soyad Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"lastName\">Soyad:</label>\r\n          <input type=\"text\" class=\"form-control colorful\" id=\"lastName\" formControlName=\"lastName\" placeholder=\"Soyad\">\r\n          <div *ngIf=\"userForm.get('lastName')?.hasError('required') && userForm.get('lastName')?.dirty\" class=\"error-message\">\r\n            Soyad Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- E-mail Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">E-mail:</label>\r\n          <input type=\"email\" class=\"form-control colorful\" id=\"email\" formControlName=\"email\" placeholder=\"E-mail\">\r\n          <div *ngIf=\"userForm.get('email')?.hasError('required') && userForm.get('email')?.dirty\" class=\"error-message\">\r\n            E-mail Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- Parola Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Parola:</label>\r\n          <input type=\"password\" class=\"form-control colorful\" id=\"password\" formControlName=\"password\" placeholder=\"Parola\">\r\n          <div *ngIf=\"userForm.get('password')?.hasError('required') && userForm.get('password')?.dirty\" class=\"error-message\">\r\n            Parola Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- Rol Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"role\">Rol:</label>\r\n          <select class=\"form-control colorful\" id=\"role\" formControlName=\"role\" placeholder=\"Rol\">\r\n            <option value=\"\" disabled selected>Rol Seçiniz</option>\r\n            <option value=\"Admin\">Admin</option>\r\n            <option value=\"User\">User</option>\r\n          </select>\r\n          <div *ngIf=\"userForm.get('role')?.hasError('required') && userForm.get('role')?.dirty\" class=\"error-message\">\r\n            Rol Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- Adres Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"adres\">Adres:</label>\r\n          <textarea class=\"form-control colorful\" id=\"adres\" formControlName=\"adres\" placeholder=\"Adres\"></textarea>\r\n          <div *ngIf=\"userForm.get('adres')?.hasError('required') && userForm.get('adres')?.dirty\" class=\"error-message\">\r\n            Adres Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-lg colorful\" [disabled]=\"!userForm.valid\">\r\n            <i class=\"fas fa-user-plus\"></i> Ekle\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/user-add/user-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/user-add/user-add.component.ts ***!
  \******************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(pageTitleService, fb, alertifyService, router, userService, authService) {
        this.pageTitleService = pageTitleService;
        this.fb = fb;
        this.alertifyService = alertifyService;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.newUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.tokenUserId = parseInt(this.authService.getIdentity().nameidentifier);
    }
    UserAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setPageTitle('Yeni Kullanıcı Ekle');
        this.userService.getUserById(this.tokenUserId).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
        });
        this.createUserForm();
    };
    UserAddComponent.prototype.createUserForm = function () {
        this.userForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    UserAddComponent.prototype.addUser = function () {
        var _this = this;
        if (this.userForm.valid) {
            this.alertifyService.confirm("UYARI!", 'Yeni kullanıcı eklemek istediğinize emin misiniz?', function () {
                var newUser = {
                    email: _this.userForm.get('email').value,
                    password: _this.userForm.get('password').value,
                    firstName: _this.userForm.get('firstName').value,
                    lastName: _this.userForm.get('lastName').value,
                    role: _this.userForm.get('role').value,
                    adres: _this.userForm.get('adres').value
                };
                _this.authService.register(newUser, newUser.password).subscribe(function (response) {
                    console.log('Kullanıcı Başarıyla Eklendi:', response);
                    _this.alertifyService.success('Kullanıcı Ekleme İşlemi Başarıyla Gerçekleşti.');
                    _this.router.navigateByUrl('/kullanici-islemleri');
                }, function (error) {
                    console.error('Kullanıcı ekleme başarısız:', error);
                    _this.alertifyService.error(error);
                });
            }, function () {
                // Kullanıcı "Hayır" derse, işlemi iptal edin
                _this.alertifyService.warning('Kullanıcı Ekleme İşlemini İptal Ettiniz...');
                console.log('Kullanıcı ekleme işlemi iptal edildi.');
            });
        }
        else {
            // Form geçerli değilse kullanıcıya bir hata gösterin veya başka bir işlem yapın
            console.error('Form geçerli değil. Kullanıcı eklenemedi.');
            this.alertifyService.error('Form geçerli değil. Kullanıcı eklenemedi.');
        }
    };
    UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/users/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/users/user-add/user-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_7__["PageTitleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/users/user-update/user-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/users/user-update/user-update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Ana formun tasarımı */\r\n.custom-form {\r\n  background-color: lightslategray; /* Arka plan rengi */\r\n  border-radius: 10px;\r\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\r\n  padding: 30px;\r\n  margin: 30px;\r\n}\r\n/* Form gruplarının tasarımı */\r\n.form-group {\r\n  margin-bottom: 20px;\r\n}\r\n/* Etiketlerin tasarımı */\r\nlabel {\r\n  font-weight: bold;\r\n  color: lavender; /* Mavi renk */\r\n}\r\n/* Form kontrolünün tasarımı */\r\n.form-control {\r\n  border: 1px solid #d9534f; /* Kenarlık rengi */\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n/* Hata mesajının tasarımı */\r\n.error-message {\r\n  color: #d9534f; /* Kırmızı renk */\r\n  font-size: 14px;\r\n}\r\n/* Düğmelerin tasarımı */\r\n.btn-primary {\r\n  background-color: green;\r\n  color: white;\r\n  border: none;\r\n  margin-top: 20px;\r\n  border-radius: 10px;\r\n  padding: 10px 60px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease-in-out;\r\n}\r\n.btn-primary:hover {\r\n  background-color: #0056b3; /* Hover rengi */\r\n}\r\n/* Buton içindeki ikonun tasarımı */\r\n.btn-icon i {\r\n  margin-right: 5px; /* İkon ile metin arasındaki boşluğu ayarlar */\r\n}\r\n/* Büyük başlık */\r\nh2 {\r\n  color: lavenderblush; /* Mavi renk */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci11cGRhdGUvdXNlci11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSxnQ0FBZ0MsRUFBRSxvQkFBb0I7RUFDdEQsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBRSxjQUFjO0FBQ2pDO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UseUJBQXlCLEVBQUUsbUJBQW1CO0VBQzlDLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxjQUFjLEVBQUUsaUJBQWlCO0VBQ2pDLGVBQWU7QUFDakI7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSx5QkFBeUIsRUFBRSxnQkFBZ0I7QUFDN0M7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxpQkFBaUIsRUFBRSw4Q0FBOEM7QUFDbkU7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxvQkFBb0IsRUFBRSxjQUFjO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlci11cGRhdGUvdXNlci11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFuYSBmb3JtdW4gdGFzYXLEsW3EsSAqL1xyXG4uY3VzdG9tLWZvcm0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5OyAvKiBBcmthIHBsYW4gcmVuZ2kgKi9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi8qIEZvcm0gZ3J1cGxhcsSxbsSxbiB0YXNhcsSxbcSxICovXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4vKiBFdGlrZXRsZXJpbiB0YXNhcsSxbcSxICovXHJcbmxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogbGF2ZW5kZXI7IC8qIE1hdmkgcmVuayAqL1xyXG59XHJcblxyXG4vKiBGb3JtIGtvbnRyb2zDvG7DvG4gdGFzYXLEsW3EsSAqL1xyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDk1MzRmOyAvKiBLZW5hcmzEsWsgcmVuZ2kgKi9cclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLyogSGF0YSBtZXNhasSxbsSxbiB0YXNhcsSxbcSxICovXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogI2Q5NTM0ZjsgLyogS8Sxcm3EsXrEsSByZW5rICovXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4vKiBEw7zEn21lbGVyaW4gdGFzYXLEsW3EsSAqL1xyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7IC8qIEhvdmVyIHJlbmdpICovXHJcbn1cclxuXHJcbi8qIEJ1dG9uIGnDp2luZGVraSBpa29udW4gdGFzYXLEsW3EsSAqL1xyXG4uYnRuLWljb24gaSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIMSwa29uIGlsZSBtZXRpbiBhcmFzxLFuZGFraSBib8WfbHXEn3UgYXlhcmxhciAqL1xyXG59XHJcblxyXG4vKiBCw7x5w7xrIGJhxZ9sxLFrICovXHJcbmgyIHtcclxuICBjb2xvcjogbGF2ZW5kZXJibHVzaDsgLyogTWF2aSByZW5rICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/users/user-update/user-update.component.html":
/*!**************************************************************!*\
  !*** ./src/app/users/user-update/user-update.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-10 col-lg-6 col-12 p-5 custom-form\">\r\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"updateUser()\">\r\n        <h2 class=\"mb-4 text-center\">Kullanıcı Bilgilerini Güncelle</h2>\r\n        <!-- Ad Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"firstName\">Ad:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" placeholder=\"Ad\">\r\n          <div *ngIf=\"userForm.get('firstName')?.hasError('required') && userForm.get('firstName')?.dirty\"\r\n               class=\"alert alert-danger\">\r\n            <i class=\"fa fa-exclamation-circle\"></i> Ad Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- Soyad Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"lastName\">Soyad:</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" placeholder=\"Soyad\">\r\n          <div *ngIf=\"userForm.get('lastName')?.hasError('required') && userForm.get('lastName')?.dirty\"\r\n               class=\"alert alert-danger\">\r\n            <i class=\"fa fa-exclamation-circle\"></i> Soyad Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- E-mail Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">E-mail:</label>\r\n          <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\" placeholder=\"E-mail\">\r\n          <div *ngIf=\"userForm.get('email')?.hasError('required') && userForm.get('email')?.dirty\"\r\n               class=\"alert alert-danger\">\r\n            <i class=\"fa fa-exclamation-circle\"></i> E-mail Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- Parola Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"newPassword\">Parola:</label>\r\n          <input type=\"password\" class=\"form-control\" id=\"newPassword\" formControlName=\"newPassword\" placeholder=\"Parola\">\r\n          <div *ngIf=\"userForm.get('newPassword')?.hasError('required') && userForm.get('newPassword')?.dirty\"\r\n               class=\"alert alert-danger\">\r\n            <i class=\"fa fa-exclamation-circle\"></i> Parola Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- Rol Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"role\">Rol:</label>\r\n          <select class=\"form-control\" id=\"role\" formControlName=\"role\" placeholder=\"Rol\">\r\n            <option value=\"\" disabled selected>Rol Seçiniz</option>\r\n            <option value=\"Admin\">Admin</option>\r\n            <option value=\"User\">User</option>\r\n          </select>\r\n          <div *ngIf=\"userForm.get('role')?.hasError('required') && userForm.get('role')?.dirty\"\r\n               class=\"alert alert-danger\">\r\n            <i class=\"fa fa-exclamation-circle\"></i> Rol Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <!-- Adres Alanı -->\r\n        <div class=\"form-group\">\r\n          <label for=\"address\">Adres:</label>\r\n          <textarea class=\"form-control\" id=\"adres\" formControlName=\"adres\" placeholder=\"Adres\"></textarea>\r\n          <div *ngIf=\"userForm.get('address')?.hasError('required') && userForm.get('address')?.dirty\"\r\n               class=\"alert alert-danger\">\r\n            <i class=\"fa fa-exclamation-circle\"></i> Adres Alanı zorunludur...\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center\">\r\n          <button type=\"submit\" class=\"btn btn-primary btn-lg colorful\" [disabled]=\"!userForm.valid\">\r\n            <i class=\"fas fa-sync-alt\"></i> Güncelle \r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/users/user-update/user-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/user-update/user-update.component.ts ***!
  \************************************************************/
/*! exports provided: UserUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserUpdateComponent", function() { return UserUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









var UserUpdateComponent = /** @class */ (function () {
    function UserUpdateComponent(pageTitleService, formBuilder, router, route, userService, alertifyService, authService) {
        this.pageTitleService = pageTitleService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.alertifyService = alertifyService;
        this.authService = authService;
        this.updatedUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.selectedUsers = [];
        this.tokenUserId = parseInt(this.authService.getIdentity().nameidentifier);
        this.userForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            adres: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    UserUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setPageTitle('Kullanıcı Bilgilerini Güncelle');
        this.userService.getUserById(this.tokenUserId).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
        });
        this.route.queryParams.subscribe(function (params) {
            var userId = +params['id'];
            _this.userService.getUserById(userId).subscribe(function (user) {
                _this.updatedUser = user["data"];
                _this.selectedUsers[0] = _this.updatedUser;
                console.log(_this.userService.getSelectedUsers());
                _this.fillFormWithUserData();
            }, function (error) {
                console.error('Kullanıcı alınamadı:', error);
            });
        });
        this.selectedUsers = this.userService.getSelectedUsers();
        console.log(this.userService.getSelectedUsers());
        console.log(this.selectedUsers);
        if (this.selectedUsers.length === 1) {
            var firstSelectedUser = this.selectedUsers[0];
            this.userForm.patchValue({
                firstName: firstSelectedUser.firstName,
                lastName: firstSelectedUser.lastName,
                email: firstSelectedUser.email,
                newPassword: '',
                role: firstSelectedUser.role,
                adres: firstSelectedUser.adres
            });
        }
    };
    UserUpdateComponent.prototype.fillFormWithUserData = function () {
        if (this.updatedUser) {
            this.userForm.setValue({
                firstName: this.updatedUser.firstName || '',
                lastName: this.updatedUser.lastName || '',
                email: this.updatedUser.email || '',
                newPassword: '',
                role: this.updatedUser.role || '',
                adres: this.updatedUser.adres || ''
            });
        }
    };
    UserUpdateComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.userForm.valid) {
            this.alertifyService.confirm("UYARI!", 'Seçili kullanıcıya ait bilgileri güncellemek istediğinize emin misiniz?', function () {
                var newPassword = _this.userForm.get('newPassword').value;
                var status = true;
                _this.updatedUser = Object.assign({}, _this.userForm.value);
                _this.updatedUser.userId = _this.selectedUsers[0].userId;
                if (newPassword) {
                    _this.updatedUser.status = status;
                }
                _this.userService.updateUser(_this.updatedUser).subscribe(function (response) {
                    console.log('Kullanıcı Başarıyla Güncellendi:', response);
                    _this.alertifyService.success('Seçili kullanıcıya ait güncelleme işlemi başarı ile gerçekleşti');
                    _this.router.navigateByUrl('/kullanici-islemleri');
                }, function (error) {
                    console.error('Kullanıcı güncelleme başarısız:', error);
                    _this.alertifyService.error('Kullanıcı güncelleme başarısız: ' + error);
                });
            }, function () {
                // Kullanıcı "Hayır" derse, işlemi iptal edin
                _this.alertifyService.warning("Kullanıcı Güncelleme İşlemini İptal Ettiniz...");
                console.log('Kullanıcı güncelleme işlemi iptal edildi.');
            });
        }
        else {
            console.error('Form geçerli değil. Kullanıcı güncellenemedi.');
            this.alertifyService.error('Form geçerli değil. Kullanıcı güncellenemedi.');
        }
    };
    UserUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-update',
            template: __webpack_require__(/*! ./user-update.component.html */ "./src/app/users/user-update/user-update.component.html"),
            styles: [__webpack_require__(/*! ./user-update.component.css */ "./src/app/users/user-update/user-update.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_page_title_service__WEBPACK_IMPORTED_MODULE_7__["PageTitleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], UserUpdateComponent);
    return UserUpdateComponent;
}());



/***/ }),

/***/ "./src/app/users/users-filter.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/users/users-filter.pipe.ts ***!
  \********************************************/
/*! exports provided: UsersFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFilterPipe", function() { return UsersFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersFilterPipe = /** @class */ (function () {
    function UsersFilterPipe() {
    }
    UsersFilterPipe.prototype.transform = function (users, searchText) {
        if (!users || !searchText) {
            return users;
        }
        searchText = searchText.toLowerCase();
        return users.filter(function (user) {
            // Burada farklı filtreleme kriterlerini ekleyebilirsiniz
            if ((user.firstName && user.firstName.toLowerCase().includes(searchText)) ||
                (user.lastName && user.lastName.toLowerCase().includes(searchText)) ||
                (user.email && user.email.toLowerCase().includes(searchText)) ||
                (user.role && user.role.toLowerCase().includes(searchText)) ||
                (user.adres && user.adres.toLowerCase().includes(searchText))) {
                return true;
            }
            return false;
        });
    };
    UsersFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'usersFilter'
        })
    ], UsersFilterPipe);
    return UsersFilterPipe;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Stil dosyası örnek */\r\n\r\n/* Arama alanı stilini özelleştirme */\r\n\r\n.custom-search {\r\n    background-color: #ccc;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n  }\r\n\r\n/* Tablo stilleri */\r\n\r\n.table {\r\n    background-color: #f5f5f5; /* Tablo arka plan rengi */\r\n    border: 1px solid #ddd; /* Tablo kenarlığı */\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\n/* Tablo başlık stilleri */\r\n\r\n.table thead {\r\n    background-color: #007bff; /* Başlık arka plan rengi */\r\n    color: #fff; /* Başlık metin rengi */\r\n  }\r\n\r\n/* Tablo başlık hücreleri */\r\n\r\n.table th {\r\n    padding: 12px; /* Başlık içeriği için iç boşluk */\r\n    text-align: center; /* Başlık metni ortala */\r\n    background-color: darkslategray;\r\n    color: white;\r\n  }\r\n\r\n/* Tablo veri hücreleri */\r\n\r\n.table td {\r\n    padding: 10px; /* Hücre içeriği için iç boşluk */\r\n    text-align: center; /* Hücre metni ortala */\r\n    border-top: 1px solid #ddd; /* Hücre üst kenarlığı */\r\n  }\r\n\r\n/* Zebra çizgili tablo (opsiyonel) */\r\n\r\n.table tbody tr:nth-child(even) {\r\n    background-color: #e0e0e0; /* Zebra çizgili arka plan rengi */\r\n  }\r\n\r\n/* Hücre içeriği stilini özelleştirme (örnek olarak) */\r\n\r\n.table td {\r\n    color: #333; /* Hücre metin rengi */\r\n    background-color: #f5f5f5; /* Hücre arka plan rengi */\r\n  }\r\n\r\n/* Seçili satır stilini özelleştirme (opsiyonel) */\r\n\r\n.table tbody tr.selected {\r\n    background-color: #ffffcc; /* Seçili satırın arka plan rengi */\r\n  }\r\n\r\n/* \"Sil\" düğmesi stilini özelleştirme */\r\n\r\n.action-button {\r\n    margin: 5px;\r\n    padding: 10px 20px;\r\n    font-size: 16px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n  }\r\n\r\n.action-button:disabled {\r\n    background-color: #ccc;\r\n    cursor: not-allowed;\r\n  }\r\n\r\n.add-button {\r\n    background-color: #28a745;\r\n    color: #fff;\r\n  }\r\n\r\n.delete-button {\r\n    background-color: #dc3545;\r\n    color: #fff;\r\n  }\r\n\r\n.edit-button {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n  }\r\n\r\n.report-button {\r\n    background-color: #17a2b8;\r\n    color: #fff;\r\n  }\r\n\r\n.action-button:hover {\r\n    filter: brightness(1.2);\r\n  }\r\n\r\n/* Taşınmaz bulunamadı mesajı stilini özelleştirme */\r\n\r\n.no-data-message {\r\n    text-align: center; /* Metni ortala */\r\n    font-size: 18px; /* Metin boyutu */\r\n    margin-top: 20px; /* Üst boşluk */\r\n    padding: 10px; /* İç boşluk */\r\n    background-color: #fff; /* Arka plan rengi */\r\n    border: 1px solid #ddd; /* Kenarlık */\r\n    border-radius: 5px; /* Köşe yuvarlama */\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Gölge efekti */\r\n  }\r\n\r\n:host {\r\n    background-color: #007bff; /* Arka plan rengi (örnek olarak mavi) */\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUI7O0FBRXZCLHFDQUFxQzs7QUFDckM7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1Q0FBdUM7RUFDekM7O0FBRUQsbUJBQW1COztBQUNwQjtJQUNJLHlCQUF5QixFQUFFLDBCQUEwQjtJQUNyRCxzQkFBc0IsRUFBRSxvQkFBb0I7SUFDNUMseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFQSwwQkFBMEI7O0FBQzFCO0lBQ0UseUJBQXlCLEVBQUUsMkJBQTJCO0lBQ3RELFdBQVcsRUFBRSx1QkFBdUI7RUFDdEM7O0FBRUEsMkJBQTJCOztBQUMzQjtJQUNFLGFBQWEsRUFBRSxrQ0FBa0M7SUFDakQsa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLCtCQUErQjtJQUMvQixZQUFZO0VBQ2Q7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNFLGFBQWEsRUFBRSxpQ0FBaUM7SUFDaEQsa0JBQWtCLEVBQUUsdUJBQXVCO0lBQzNDLDBCQUEwQixFQUFFLHdCQUF3QjtFQUN0RDs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0lBQ0UseUJBQXlCLEVBQUUsa0NBQWtDO0VBQy9EOztBQUVBLHNEQUFzRDs7QUFDdEQ7SUFDRSxXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLHlCQUF5QixFQUFFLDBCQUEwQjtFQUN2RDs7QUFFQSxrREFBa0Q7O0FBQ2xEO0lBQ0UseUJBQXlCLEVBQUUsbUNBQW1DO0VBQ2hFOztBQUlBLHVDQUF1Qzs7QUFDdkM7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztFQUNuQzs7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztBQUVBLG9EQUFvRDs7QUFDdEQ7SUFDSSxrQkFBa0IsRUFBRSxpQkFBaUI7SUFDckMsZUFBZSxFQUFFLGlCQUFpQjtJQUNsQyxnQkFBZ0IsRUFBRSxlQUFlO0lBQ2pDLGFBQWEsRUFBRSxjQUFjO0lBQzdCLHNCQUFzQixFQUFFLG9CQUFvQjtJQUM1QyxzQkFBc0IsRUFBRSxhQUFhO0lBQ3JDLGtCQUFrQixFQUFFLG1CQUFtQjtJQUN2Qyx1Q0FBdUMsRUFBRSxpQkFBaUI7RUFDNUQ7O0FBRUE7SUFDRSx5QkFBeUIsRUFBRSx3Q0FBd0M7SUFDbkUsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RpbCBkb3N5YXPEsSDDtnJuZWsgKi9cclxuXHJcbi8qIEFyYW1hIGFsYW7EsSBzdGlsaW5pIMO2emVsbGXFn3Rpcm1lICovXHJcbi5jdXN0b20tc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuICBcclxuIC8qIFRhYmxvIHN0aWxsZXJpICovXHJcbi50YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1OyAvKiBUYWJsbyBhcmthIHBsYW4gcmVuZ2kgKi9cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7IC8qIFRhYmxvIGtlbmFybMSxxJ/EsSAqL1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAvKiBUYWJsbyBiYcWfbMSxayBzdGlsbGVyaSAqL1xyXG4gIC50YWJsZSB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAvKiBCYcWfbMSxayBhcmthIHBsYW4gcmVuZ2kgKi9cclxuICAgIGNvbG9yOiAjZmZmOyAvKiBCYcWfbMSxayBtZXRpbiByZW5naSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBUYWJsbyBiYcWfbMSxayBow7xjcmVsZXJpICovXHJcbiAgLnRhYmxlIHRoIHtcclxuICAgIHBhZGRpbmc6IDEycHg7IC8qIEJhxZ9sxLFrIGnDp2VyacSfaSBpw6dpbiBpw6cgYm/Fn2x1ayAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBCYcWfbMSxayBtZXRuaSBvcnRhbGEgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtzbGF0ZWdyYXk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRhYmxvIHZlcmkgaMO8Y3JlbGVyaSAqL1xyXG4gIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyAvKiBIw7xjcmUgacOnZXJpxJ9pIGnDp2luIGnDpyBib8WfbHVrICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIEjDvGNyZSBtZXRuaSBvcnRhbGEgKi9cclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkOyAvKiBIw7xjcmUgw7xzdCBrZW5hcmzEscSfxLEgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogWmVicmEgw6dpemdpbGkgdGFibG8gKG9wc2l5b25lbCkgKi9cclxuICAudGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7IC8qIFplYnJhIMOnaXpnaWxpIGFya2EgcGxhbiByZW5naSAqL1xyXG4gIH1cclxuICBcclxuICAvKiBIw7xjcmUgacOnZXJpxJ9pIHN0aWxpbmkgw7Z6ZWxsZcWfdGlybWUgKMO2cm5layBvbGFyYWspICovXHJcbiAgLnRhYmxlIHRkIHtcclxuICAgIGNvbG9yOiAjMzMzOyAvKiBIw7xjcmUgbWV0aW4gcmVuZ2kgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IC8qIEjDvGNyZSBhcmthIHBsYW4gcmVuZ2kgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogU2XDp2lsaSBzYXTEsXIgc3RpbGluaSDDtnplbGxlxZ90aXJtZSAob3BzaXlvbmVsKSAqL1xyXG4gIC50YWJsZSB0Ym9keSB0ci5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmNjOyAvKiBTZcOnaWxpIHNhdMSxcsSxbiBhcmthIHBsYW4gcmVuZ2kgKi9cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogXCJTaWxcIiBkw7zEn21lc2kgc3RpbGluaSDDtnplbGxlxZ90aXJtZSAqL1xyXG4gIC5hY3Rpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLWJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgXHJcbiAgLmFkZC1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICAuZGVsZXRlLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5lZGl0LWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZXBvcnQtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbi1idXR0b246aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRhxZ/EsW5tYXogYnVsdW5hbWFkxLEgbWVzYWrEsSBzdGlsaW5pIMO2emVsbGXFn3Rpcm1lICovXHJcbi5uby1kYXRhLW1lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBNZXRuaSBvcnRhbGEgKi9cclxuICAgIGZvbnQtc2l6ZTogMThweDsgLyogTWV0aW4gYm95dXR1ICovXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyAvKiDDnHN0IGJvxZ9sdWsgKi9cclxuICAgIHBhZGRpbmc6IDEwcHg7IC8qIMSww6cgYm/Fn2x1ayAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgLyogQXJrYSBwbGFuIHJlbmdpICovXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkOyAvKiBLZW5hcmzEsWsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogS8O2xZ9lIHl1dmFybGFtYSAqL1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBHw7ZsZ2UgZWZla3RpICovXHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IC8qIEFya2EgcGxhbiByZW5naSAow7ZybmVrIG9sYXJhayBtYXZpKSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 col-lg-6 col-12 p-5 mx-auto custom-search\">\r\n      <form>\r\n        <div class=\"input-group\">\r\n          <input\r\n            class=\"form-control bg-secondary text-white mx-3\"\r\n            type=\"search\"\r\n            placeholder=\"Ara\"\r\n            aria-label=\"Ara\"\r\n            [(ngModel)]=\"searchText\"\r\n            name=\"searchText\"\r\n          />\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline- btn-primary\" (click)=\"search()\" type=\"button\">\r\n              <i class=\"fas fa-search\"></i> Ara\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!pagedUsers || pagedUsers.length === 0\" class=\"no-data-message text-center\">\r\n  Kullanıcılar bulunamadı.\r\n</div>\r\n\r\n<div *ngIf=\"pagedUsers && pagedUsers.length > 0\" class=\"row\">\r\n  <form class=\"col-md-10 col-lg-6 col-12 p-5 mx-auto\">\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-bordered excel-style\">\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>AD</th>\r\n            <th>SOYAD</th>\r\n            <th>E-MAİL</th>\r\n            <th>ROL</th>\r\n            <th>ADRES</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <!-- Belirli bir sayfa için verileri filtrele -->\r\n          <tr *ngFor=\"let user of pagedUsers | usersFilter: searchText\">\r\n            <td>\r\n              <input type=\"hidden\" [value]=\"user.userId\" />\r\n              <input style=\"text-align: right;\" type=\"checkbox\" [value]=\"user.userId\" (change)=\"onCheckboxClicked($event, user)\" />\r\n            </td>\r\n            <td>{{ user.firstName }}</td>\r\n            <td>{{ user.lastName }}</td>\r\n            <td>{{ user.email }}</td>\r\n            <td>{{ user.role }}</td>\r\n            <td>{{ user.adres }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n\r\n      <div class=\"d-flex justify-content-center\">\r\n        <mat-paginator\r\n          [length]=\"users.length\"\r\n          [pageSize]=\"itemsPerPage\"\r\n          [pageSizeOptions]=\"[itemsPerPage]\"\r\n          showFirstLastButtons=\"true\"\r\n          (page)=\"changePage($event)\"\r\n          class=\"pagination-icons\"\r\n        ></mat-paginator>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<div class=\"button-container text-center\">\r\n  <button name=\"actionButtons\" class=\"action-button add-button\" routerLink=\"/kullanici-islemleri/user-add\" (click)=\"navigateToAddUser()\">\r\n    <i class=\"fas fa-plus\"></i> Ekle\r\n  </button>\r\n  <button name=\"actionButtons\" class=\"action-button delete-button\" (click)=\"deleteSelectedUsers()\" [disabled]=\"selectedUsers.length <= 0\">\r\n    <i class=\"fas fa-trash\"></i> Sil\r\n  </button>\r\n  <button name=\"actionButtons\" class=\"action-button edit-button\" (click)=\"navigateToUpdateUser()\" [disabled]=\"selectedUsers.length <= 0\">\r\n    <i class=\"fas fa-edit\"></i> Güncelle\r\n  </button>\r\n  <button name=\"actionButtons\" class=\"action-button report-button\" (click)=\"generateReport()\">\r\n    <i class=\"fas fa-file-excel\"></i> Raporla\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/page-title.service */ "./src/app/services/page-title.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_user_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user-report.service */ "./src/app/services/user-report.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");








var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, authService, userReportService, pageTitleService, router, alertifyService) {
        this.userService = userService;
        this.authService = authService;
        this.userReportService = userReportService;
        this.pageTitleService = pageTitleService;
        this.router = router;
        this.alertifyService = alertifyService;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.selectedUsers = [];
        this.pageSize = 10;
        this.searchText = '';
        this.tokenUserId = parseInt(this.authService.getIdentity().nameidentifier);
        this.selectedUsers = this.userService.getSelectedUsers();
        this.selectedUsersSpecific = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageTitleService.setPageTitle('Kullanıcı İşlemleri');
        this.userService.getUserById(this.tokenUserId).subscribe(function (user) {
            _this.userId = user["data"].userId;
            _this.authService.updateUserName(user["data"].firstName + " " + user["data"].lastName);
            console.log(_this.userId);
            _this.loadUsers();
        });
    };
    UsersComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (data) {
            _this.users = data;
            console.log('Tüm veriler:', _this.users);
            _this.users.sort(function (a, b) { return a.userId - b.userId; });
            _this.updatePagedUsers();
            _this.selectedUsers = _this.userService.getSelectedUsers();
            console.log('Seçili Kullanıcılar:', _this.selectedUsers);
        }, function (error) {
            console.error('Veri alınamadı:', error);
        });
    };
    UsersComponent.prototype.navigateToAddUser = function () {
        this.router.navigateByUrl('/kullanici-islemleri/user-add');
    };
    UsersComponent.prototype.navigateToUpdateUser = function () {
        if (this.selectedUsers.length === 1) {
            var selectedUser = this.selectedUsers[0];
            // Doğru kullanıcı ID'sini alarak güncelleme sayfasına yönlendirin
            this.router.navigate(['kullanici-islemleri/user-update'], { queryParams: { id: selectedUser.userId } });
        }
        else {
            this.alertifyService.error('Lütfen güncellemek için sadece bir adet kullanıcı seçin.');
        }
    };
    UsersComponent.prototype.search = function () {
        var _this = this;
        if (this.searchText.trim() === '') {
            this.pagedUsers = this.users.slice(0, this.itemsPerPage);
        }
        else {
            var filteredUsers = this.users.filter(function (user) {
                return ((user.firstName && user.firstName.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (user.lastName && user.lastName.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (user.email && user.email.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (user.role && user.role.toLowerCase().includes(_this.searchText.toLowerCase())) ||
                    (user.adres && user.adres.toLowerCase().includes(_this.searchText.toLowerCase())));
            });
            this.pagedUsers = filteredUsers.slice(0, this.itemsPerPage);
        }
        this.currentPage = 1;
    };
    UsersComponent.prototype.changePage = function (event) {
        this.currentPage = event.pageIndex + 1;
        this.updatePagedUsers();
        this.selectedUsers = [];
        this.selectedUsersSpecific = [];
        this.userService.setSelectedUsers(this.selectedUsers);
    };
    UsersComponent.prototype.onCheckboxClicked = function (event, user) {
        if (event.target.checked) {
            console.log(user);
            this.selectedUsers.push(user);
            this.selectedUsersSpecific.push(user);
            this.userService.setSelectedUsers(this.selectedUsers);
            console.log(this.selectedUsers[0].userId);
        }
        else {
            var index = this.selectedUsers.findIndex(function (item) { return item.userId === user.userId; });
            if (index !== -1) {
                this.selectedUsers.splice(index, 1);
                this.selectedUsersSpecific.splice(index, 1); // İlgili taşınmazı özel listeden de çıkarın
                this.userService.setSelectedUsers(this.selectedUsers);
            }
        }
    };
    UsersComponent.prototype.generateReport = function () {
        if (this.selectedUsers.length !== 1) {
            this.alertifyService.error('Lütfen raporlamak için en az bir kullanıcı seçin.');
            return;
        }
        //console.log(this.selectedUsers.length);
        var dataToExport = this.selectedUsers.map(function (user) {
            return {
                'USERID': user.userId,
                'AD': user.firstName,
                'SOYAD': user.lastName,
                'E-MAİL': user.email,
                'ROL': user.role,
                'ADRES': user.adres
            };
        });
        this.userReportService.exportToExcel(dataToExport, 'kullanicilar-rapor');
        this.alertifyService.success('Kullanıcı bilgileri raporları başarıyla iletildi...');
        // Veriyi Excel dosyasına dönüştürme işlemi
        // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
        // const wb: XLSX.WorkBook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, ws, 'Tasinmazlar Rapor');
        // XLSX.writeFile(wb, 'tasinmazlar-rapor.xlsx');
    };
    UsersComponent.prototype.deleteSelectedUsers = function () {
        var _this = this;
        if (this.selectedUsers.length > 0) {
            this.alertifyService.confirm("DİKKAT!", 'Seçili kullanıcı veya kullanıcılara ait tüm bilgileri silmek istediğinize emin misiniz?', function () {
                var deletionPromises = _this.selectedUsers.map(function (user) {
                    console.log(user.userId);
                    return _this.userService.deleteUser(user.userId).toPromise()
                        .then(function () { return true; }) // Başarılı silme işlemi
                        .catch(function () { return false; }); // Silme hatası
                });
                Promise.all(deletionPromises).then(function (results) {
                    results.forEach(function (result, index) {
                        if (result) {
                            // Başarı mesajı göster
                            _this.alertifyService.success("Kullan\u0131c\u0131 ID " + _this.selectedUsers[index].userId + " ba\u015Far\u0131yla silindi.");
                            // Kullanıcıları yerel listeden kaldır
                            _this.users = _this.users.filter(function (item) { return item.userId !== _this.selectedUsers[index].userId; });
                            _this.updatePagedUsers();
                        }
                        else {
                            // Hata mesajı göster
                            _this.alertifyService.error("Kullan\u0131c\u0131 ID " + _this.selectedUsers[index].userId + " silinemedi.");
                        }
                    });
                    _this.selectedUsers = [];
                    _this.selectedUsersSpecific = [];
                }).catch(function (error) {
                    console.error('Silme işlemi sırasında hata oluştu:', error);
                    _this.alertifyService.error('Silme işlemi sırasında bir hata oluştu.');
                });
            }, function () {
                // Kullanıcı "Hayır" derse, işlemi iptal edin
                _this.alertifyService.warning('Kullanıcı Silme İşlemini İptal Ettiniz...');
            });
        }
        else {
            this.alertifyService.error('Lütfen silmek için en az bir kullanıcı seçin.');
        }
    };
    UsersComponent.prototype.updatePagedUsers = function () {
        var startIndex = (this.currentPage - 1) * this.itemsPerPage;
        var endIndex = startIndex + this.itemsPerPage;
        this.pagedUsers = this.users.slice(startIndex, endIndex);
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _services_user_report_service__WEBPACK_IMPORTED_MODULE_6__["UserReportService"]],
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _services_user_report_service__WEBPACK_IMPORTED_MODULE_6__["UserReportService"],
            _services_page_title_service__WEBPACK_IMPORTED_MODULE_2__["PageTitleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://localhost:5001/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\VolkanAppTasinmaz.API\VolkanAppTasinmaz.API\volkanAppTasinmazProjem\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map