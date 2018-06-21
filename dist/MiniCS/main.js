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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin.guard.ts":
/*!********************************!*\
  !*** ./src/app/admin.guard.ts ***!
  \********************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminGuard = /** @class */ (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('loggedInAs') === 'admin') {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: MiniCSRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniCSRoutingModule", function() { return MiniCSRoutingModule; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _leisure_consultants_leisure_consultants_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./leisure-consultants/leisure-consultants.component */ "./src/app/leisure-consultants/leisure-consultants.component.ts");
/* harmony import */ var _travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./travel-list/travel-list.component */ "./src/app/travel-list/travel-list.component.ts");
/* harmony import */ var _hotels_hotels_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hotels/hotels.component */ "./src/app/hotels/hotels.component.ts");
/* harmony import */ var _passangers_passangers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passangers/passangers.component */ "./src/app/passangers/passangers.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _find_passanger_find_passanger_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./find-passanger/find-passanger.component */ "./src/app/find-passanger/find-passanger.component.ts");
/* harmony import */ var _check_hotel_check_hotel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./check-hotel/check-hotel.component */ "./src/app/check-hotel/check-hotel.component.ts");
/* harmony import */ var _admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin.guard */ "./src/app/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'upload', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"], canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'consultants', component: _leisure_consultants_leisure_consultants_component__WEBPACK_IMPORTED_MODULE_4__["LeisureConsultantsComponent"], canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'travel-list', component: _travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_5__["TravelListComponent"] },
    { path: 'hotels', component: _hotels_hotels_component__WEBPACK_IMPORTED_MODULE_6__["HotelsComponent"], canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'passenger-type', component: _passangers_passangers_component__WEBPACK_IMPORTED_MODULE_7__["PassangersComponent"], canActivate: [_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'wellcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"] },
    { path: 'find-passenger', component: _find_passanger_find_passanger_component__WEBPACK_IMPORTED_MODULE_9__["FindPassangerComponent"] },
    { path: 'check-hotel', component: _check_hotel_check_hotel_component__WEBPACK_IMPORTED_MODULE_10__["CheckHotelComponent"] },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
var MiniCSRoutingModule = /** @class */ (function () {
    function MiniCSRoutingModule() {
    }
    MiniCSRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MiniCSRoutingModule);
    return MiniCSRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n \n <app-navbar *ngIf=\"href != '/login'\"></app-navbar>\n\n<router-outlet ></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _leisure_consultants_leisure_consultants_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./leisure-consultants/leisure-consultants.component */ "./src/app/leisure-consultants/leisure-consultants.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _safeHTML_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./safeHTML.pipe */ "./src/app/safeHTML.pipe.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./travel-list/travel-list.component */ "./src/app/travel-list/travel-list.component.ts");
/* harmony import */ var _hotels_hotels_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hotels/hotels.component */ "./src/app/hotels/hotels.component.ts");
/* harmony import */ var _passangers_passangers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./passangers/passangers.component */ "./src/app/passangers/passangers.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _find_passanger_find_passanger_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./find-passanger/find-passanger.component */ "./src/app/find-passanger/find-passanger.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _check_hotel_check_hotel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./check-hotel/check-hotel.component */ "./src/app/check-hotel/check-hotel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_10__["UploadComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _leisure_consultants_leisure_consultants_component__WEBPACK_IMPORTED_MODULE_12__["LeisureConsultantsComponent"],
                _safeHTML_pipe__WEBPACK_IMPORTED_MODULE_14__["SafeHtmlPipe"],
                _travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_16__["TravelListComponent"],
                _hotels_hotels_component__WEBPACK_IMPORTED_MODULE_17__["HotelsComponent"],
                _passangers_passangers_component__WEBPACK_IMPORTED_MODULE_18__["PassangersComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_19__["WelcomeComponent"],
                _find_passanger_find_passanger_component__WEBPACK_IMPORTED_MODULE_20__["FindPassangerComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPipe"],
                _check_hotel_check_hotel_component__WEBPACK_IMPORTED_MODULE_23__["CheckHotelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                    }
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["MiniCSRoutingModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_15__["Ng2SmartTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_22__["FilterPipeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/check-hotel/check-hotel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/check-hotel/check-hotel.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 50px;\n}\n\nlabel{\n    font-weight: 600;\n}\n\nform {\n    border: 1px solid gray;\n    border-radius: 5px;\n    padding: 10px;\n    padding-bottom: 50px;\n    /* margin: 10px; */\n}"

/***/ }),

/***/ "./src/app/check-hotel/check-hotel.component.html":
/*!********************************************************!*\
  !*** ./src/app/check-hotel/check-hotel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-1\">\n            <label for=\"inputEmail4\">ID:</label>\n            <input type=\"number\" [(ngModel)]=\"passanger.ID\" class=\"form-control\" name=\"passanger.ID\" id=\"inputEmail4\" placeholder=\"ID\">\n          </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputPassword4\">Booking ID:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Booking_Id\"  class=\"form-control\" name=\"passanger.Booking_Id\" id=\"inputPassword4\" placeholder=\"Booking ID\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputAddress\">Booking Date:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Booking_Date\" class=\"form-control\" name=\"passanger.Booking_Date\" id=\"inputAddress\" placeholder=\"Booking Date\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputAddress2\">Hotel Name:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Hotel_Name\" name=\"passanger.Hotel_Name\"  class=\"form-control\" id=\"inputAddress2\" placeholder=\"Hotel Name\">\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputCity\">Pax name:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Pax_Name\" name=\"passanger.Pax_Name\" class=\"form-control\" id=\"Paxname\" placeholder=\"Pax name\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputZip\">DateTime arrival:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.DateTime_Arrival\" name=\"passanger.DateTime_Arrival\" class=\"form-control\" id=\"inputZip\" placeholder=\"DateTime arrival\">\n          </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputZip\">Supplier reference:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Supplier_reference\" name=\"passanger.Supplier_reference\" class=\"form-control\" id=\"inputZip\" placeholder=\"Supplier reference\">\n          </div>\n      \n            </div>\n            <button type=\"submit\" (click)=\"sendBookingID(passanger.Booking_Id)\" class=\"btn btn-info\">More info</button>\n   \n          <!-- <div class=\"form-row\">\n              <div class=\"form-group col-md-2\">\n                  <label for=\"inputState\">Room number:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Room_number\" name=\"passanger.Room_number\" class=\"form-control\" id=\"Pax name\" placeholder=\"Room number\">\n                </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"inputZip\">Passenger type:</label>\n                <input type=\"text\" [(ngModel)]=\"passanger.Passenger_type\" name=\"passanger.Passenger_type\" class=\"form-control\" id=\"inputZip\" placeholder=\"Passenger type\">\n              </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"inputZip\">Check by REP:</label>\n                  <input type=\"checkbox\" [(ngModel)]=\"passanger.Check_by_REP\" name=\"passanger.Check_by_REP\" class=\"form-control\" id=\"inputZip\" placeholder=\"Check by REP\">\n                </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"inputZip\">Check by LC:</label>\n                  <input type=\"checkbox\" [(ngModel)]=\"passanger.Check_by_LC\" name=\"passanger.Check_by_LC\" class=\"form-control\" id=\"inputZip\" placeholder=\"Check by LC\">\n                </div>\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputZip\">Leaving from:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Leaving_From\" name=\"passanger.Leaving_From\" class=\"form-control\" id=\"inputZip\" placeholder=\"Leaving from\">\n                </div>\n          </div> -->\n          <!-- <div class=\"form-row\">\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputState\">Supplier arrival:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Supplier_Arrival\" name=\"passanger.Supplier_Arrival\" class=\"form-control\" id=\"Pax name\" placeholder=\"Supplier arrival\">\n                </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"inputZip\">DateTime arrival:</label>\n                <input type=\"text\" [(ngModel)]=\"passanger.DateTime_Arrival\" name=\"passanger.DateTime_Arrival\" class=\"form-control\" id=\"inputZip\" placeholder=\"DateTime arrival\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputZip\">Terminal arrival:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Terminal_Arrival\" name=\"passanger.Terminal_Arrival\" class=\"form-control\" id=\"inputZip\" placeholder=\"Terminal arrival\">\n                </div>\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputZip\">Car name arrival:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Car_Name_Arrival\" name=\"passanger.Car_Name_Arrival\" class=\"form-control\" id=\"inputZip\" placeholder=\"Car name arrival\">\n                </div>\n          </div>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">\n                  <label for=\"inputState\">Car transfer type arrival:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Car_Transfer_Type_Arrival\" name=\"passanger.Car_Transfer_Type_Arrival\" class=\"form-control\" id=\"Pax name\" placeholder=\"Car transfer type aArrival\">\n                </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"inputZip\">Airline arrival:</label>\n                <input type=\"text\" [(ngModel)]=\"passanger.Airline_Arrival\" name=\"passanger.Airline_Arrival\" class=\"form-control\" id=\"inputZip\" placeholder=\"Airline arrival\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputZip\">Flight No. arrival:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.FlightNo_Arrival\" name=\"passanger.FlightNo_Arrival\" class=\"form-control\" id=\"inputZip\" placeholder=\"Flight No. Arrival\">\n                </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"inputZip\">Going to:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Going_to\" name=\"passanger.Going_to\" class=\"form-control\" id=\"inputZip\" placeholder=\"Going to\">\n                </div>\n          </div>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputState\">Supplier Departure:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Supplier_Departure\" name=\"passanger.Supplier_Departure\" class=\"form-control\" id=\"Pax name\" placeholder=\"Supplier departure\">\n                </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"inputZip\">DateTime Departure:</label>\n                <input type=\"text\" [(ngModel)]=\"passanger.DateTime_Departure\" name=\"passanger.DateTime_Departure\" class=\"form-control\" id=\"inputZip\" placeholder=\"DateTime departure\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputZip\">Terminal departure:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Terminal_Departure\" name=\"passanger.Terminal_Departure\" class=\"form-control\" id=\"inputZip\" placeholder=\"Terminal departure\">\n                </div>\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputZip\">Car name departure:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Car_Name_Departure\" name=\"passanger.Car_Name_Departure\" class=\"form-control\" id=\"inputZip\" placeholder=\"Car name departure\">\n                </div>\n          </div>\n          <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">\n                  <label for=\"inputState\">Car transfer type departure:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.Car_Transfer_Type_Departure\" name=\"passanger.Car_Transfer_Type_Departure\" class=\"form-control\" id=\"Pax name\" placeholder=\"Car transfer type departure\">\n                </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"inputZip\">Airline departure:</label>\n                <input type=\"text\" [(ngModel)]=\"passanger.Airline_Departure\" name=\"passanger.Airline_Departure\" class=\"form-control\" id=\"inputZip\" placeholder=\"Airline departure\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                  <label for=\"inputZip\">Flight No. departure:</label>\n                  <input type=\"text\" [(ngModel)]=\"passanger.FlightNo_Departure\" name=\"passanger.FlightNo_Departure\" class=\"form-control\" id=\"inputZip\" placeholder=\"Flight No. departure\">\n                </div>\n    \n          </div> -->\n    \n      </form>\n</div>"

/***/ }),

/***/ "./src/app/check-hotel/check-hotel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/check-hotel/check-hotel.component.ts ***!
  \******************************************************/
/*! exports provided: CheckHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckHotelComponent", function() { return CheckHotelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _travel_list_excelMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travel-list/excelMock */ "./src/app/travel-list/excelMock.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckHotelComponent = /** @class */ (function () {
    function CheckHotelComponent(router) {
        this.router = router;
        this.data = _travel_list_excelMock__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.passanger = {};
        this.loggedUser = localStorage.getItem('loggedInAs');
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].Pax_Name === this.loggedUser) {
                this.passanger = this.data[i];
            }
        }
    }
    CheckHotelComponent.prototype.ngOnInit = function () {
    };
    CheckHotelComponent.prototype.sendBookingID = function (bookignID) {
        localStorage.setItem('bookingID', bookignID);
        this.router.navigate(['/find-passanger']);
    };
    CheckHotelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-hotel',
            template: __webpack_require__(/*! ./check-hotel.component.html */ "./src/app/check-hotel/check-hotel.component.html"),
            styles: [__webpack_require__(/*! ./check-hotel.component.css */ "./src/app/check-hotel/check-hotel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CheckHotelComponent);
    return CheckHotelComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/find-passanger/find-passanger.component.css":
/*!*************************************************************!*\
  !*** ./src/app/find-passanger/find-passanger.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-top: 50px;\n}\n\nlabel{\n    font-weight: 600;\n}\n\nform {\n    border: 1px solid gray;\n    border-radius: 5px;\n    padding: 10px;\n    padding-bottom: 50px;\n    /* margin: 10px; */\n}\n\ninput {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/find-passanger/find-passanger.component.html":
/*!**************************************************************!*\
  !*** ./src/app/find-passanger/find-passanger.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-group row\">\n        <div class=\"col-4\">\n          <input class=\"form-control\" [(ngModel)]=\"bookingID\" dir=\"rtl\" type=\"text\"  placeholder=\"Booking ID\" id=\"example-search-input\">\n        </div>\n        <button class=\"btn btn-success col-1\"  (click)=\"findPassanger(bookingID)\" >Find</button>\n      </div>\n\n<form>\n\n    <!-- <div class=\"form-row\">\n        <div class=\"form-group row \">\n          <label for=\"inputEmail4\" class=\"col-md-1 col-form-label\">ID:</label>\n          <div class=\"col-md-3\">\n            <input type=\"number\"  [(ngModel)]=\"passanger.ID\" class=\"form-control\" name=\"passanger.ID\" id=\"inputEmail4\" placeholder=\"ID\">\n          </div>\n        </div> -->\n\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-1\">\n        <label for=\"inputEmail4\">ID:</label>\n        <input type=\"number\" [(ngModel)]=\"passanger.ID\" class=\"form-control\" name=\"passanger.ID\" id=\"inputEmail4\">\n      </div>\n      <div class=\"form-group col-md-3\">\n        <label for=\"inputPassword4\">Booking ID:</label>\n        <input type=\"text\" [(ngModel)]=\"passanger.Booking_Id\" class=\"form-control\" name=\"passanger.Booking_Id\" id=\"inputPassword4\" >\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputAddress\">Booking Date:</label>\n        <input type=\"text\" [(ngModel)]=\"passanger.Booking_Date\" class=\"form-control\" name=\"passanger.Booking_Date\" id=\"inputAddress\" >\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputAddress2\">Hotel Name:</label>\n        <input type=\"text\" [(ngModel)]=\"passanger.Hotel_Name\" name=\"passanger.Hotel_Name\"  class=\"form-control\" id=\"inputAddress2\" >\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputCity\">Pax name:</label>\n        <input type=\"text\" [(ngModel)]=\"passanger.Pax_Name\" name=\"passanger.Pax_Name\" class=\"form-control\" id=\"Paxname\" >\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputState\">Number Of Pax:</label>\n        <input type=\"text\" [(ngModel)]=\"passanger.Number_Of_Pax\" name=\"passanger.Number_Of_Pax\" class=\"form-control\" id=\"Pax name\" >\n      </div>\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputZip\">Supplier reference:</label>\n        <input type=\"text\" [(ngModel)]=\"passanger.Supplier_reference\" name=\"passanger.Supplier_reference\" class=\"form-control\" id=\"inputZip\" >\n      </div>\n  \n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-2\">\n              <label for=\"inputZip\">Room type:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Room_type\" name=\"passanger.Room_type\" class=\"form-control\" id=\"inputZip\" >\n          </div>\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputZip\">Number of rooms:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Number_of_rooms\" name=\"passanger.Number_of_rooms\" class=\"form-control\" id=\"inputZip\" >\n          </div>\n        <div class=\"form-group col-md-4\">\n            <label for=\"inputZip\">Leasuremant customer:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Leasuremant_customer\" name=\"passanger.Leasuremant_customer\" class=\"form-control\" id=\"inputZip\" >\n          </div>\n        <div class=\"form-group col-md-3\">\n          <label for=\"inputCity\">Contact_number:</label>\n          <input type=\"text\" [(ngModel)]=\"passanger.Contact_number\" name=\"passanger.Contact_number\" class=\"form-control\" id=\"Paxname\" >\n        </div>\n\n      </div>\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-2\">\n              <label for=\"inputState\">Room number:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Room_number\" name=\"passanger.Room_number\" class=\"form-control\" id=\"Pax name\">\n            </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputZip\">Passenger type:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Passenger_type\" name=\"passanger.Passenger_type\" class=\"form-control\" id=\"inputZip\" >\n          </div>\n          <div class=\"form-group col-md-2\">\n              <label for=\"inputZip\">Check by REP:</label>\n              <input type=\"checkbox\" [(ngModel)]=\"passanger.Check_by_REP\" name=\"passanger.Check_by_REP\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n          <div class=\"form-group col-md-2\">\n              <label for=\"inputZip\">Check by LC:</label>\n              <input type=\"checkbox\" [(ngModel)]=\"passanger.Check_by_LC\" name=\"passanger.Check_by_LC\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputZip\">Leaving from:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Leaving_From\" name=\"passanger.Leaving_From\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n      </div>\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputState\">Supplier arrival:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Supplier_Arrival\" name=\"passanger.Supplier_Arrival\" class=\"form-control\" id=\"Pax name\" >\n            </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputZip\">DateTime arrival:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.DateTime_Arrival\" name=\"passanger.DateTime_Arrival\" class=\"form-control\" id=\"inputZip\" >\n          </div>\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputZip\">Terminal arrival:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Terminal_Arrival\" name=\"passanger.Terminal_Arrival\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputZip\">Car name arrival:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Car_Name_Arrival\" name=\"passanger.Car_Name_Arrival\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n      </div>\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n              <label for=\"inputState\">Car transfer type arrival:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Car_Transfer_Type_Arrival\" name=\"passanger.Car_Transfer_Type_Arrival\" class=\"form-control\" id=\"Pax name\" >\n            </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputZip\">Airline arrival:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Airline_Arrival\" name=\"passanger.Airline_Arrival\" class=\"form-control\" id=\"inputZip\" >\n          </div>\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputZip\">Flight No. arrival:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.FlightNo_Arrival\" name=\"passanger.FlightNo_Arrival\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n          <div class=\"form-group col-md-2\">\n              <label for=\"inputZip\">Going to:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Going_to\" name=\"passanger.Going_to\" class=\"form-control\" id=\"inputZip\">\n            </div>\n      </div>\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputState\">Supplier Departure:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Supplier_Departure\" name=\"passanger.Supplier_Departure\" class=\"form-control\" id=\"Pax name\" >\n            </div>\n          <div class=\"form-group col-md-3\">\n            <label for=\"inputZip\">DateTime Departure:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.DateTime_Departure\" name=\"passanger.DateTime_Departure\" class=\"form-control\" id=\"inputZip\" >\n          </div>\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputZip\">Terminal departure:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Terminal_Departure\" name=\"passanger.Terminal_Departure\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputZip\">Car name departure:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Car_Name_Departure\" name=\"passanger.Car_Name_Departure\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n      </div>\n      <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n              <label for=\"inputState\">Car transfer type departure:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.Car_Transfer_Type_Departure\" name=\"passanger.Car_Transfer_Type_Departure\" class=\"form-control\" id=\"Pax name\" >\n            </div>\n          <div class=\"form-group col-md-4\">\n            <label for=\"inputZip\">Airline departure:</label>\n            <input type=\"text\" [(ngModel)]=\"passanger.Airline_Departure\" name=\"passanger.Airline_Departure\" class=\"form-control\" id=\"inputZip\" >\n          </div>\n          <div class=\"form-group col-md-3\">\n              <label for=\"inputZip\">Flight No. departure:</label>\n              <input type=\"text\" [(ngModel)]=\"passanger.FlightNo_Departure\" name=\"passanger.FlightNo_Departure\" class=\"form-control\" id=\"inputZip\" >\n            </div>\n\n      </div>\n\n      <button class=\"btn btn-success float-right\">Save</button>\n    <!-- <div class=\"form-group\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n        <label class=\"form-check-label\" for=\"gridCheck\">\n          Check me out\n        </label>\n      </div>\n    </div> -->\n  </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/find-passanger/find-passanger.component.ts":
/*!************************************************************!*\
  !*** ./src/app/find-passanger/find-passanger.component.ts ***!
  \************************************************************/
/*! exports provided: FindPassangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindPassangerComponent", function() { return FindPassangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _travel_list_excelMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../travel-list/excelMock */ "./src/app/travel-list/excelMock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FindPassangerComponent = /** @class */ (function () {
    function FindPassangerComponent() {
        this.passangersList = _travel_list_excelMock__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.passanger = {};
        this.findPassanger(localStorage.getItem('bookingID'));
    }
    FindPassangerComponent.prototype.ngOnInit = function () {
    };
    FindPassangerComponent.prototype.findPassanger = function (bookingID) {
        for (var i = 0; i < this.passangersList.length; i++) {
            if (this.passangersList[i].Booking_Id === bookingID) {
                console.log(this.passangersList[i]);
                this.passanger = this.passangersList[i];
            }
        }
    };
    FindPassangerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-passanger',
            template: __webpack_require__(/*! ./find-passanger.component.html */ "./src/app/find-passanger/find-passanger.component.html"),
            styles: [__webpack_require__(/*! ./find-passanger.component.css */ "./src/app/find-passanger/find-passanger.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FindPassangerComponent);
    return FindPassangerComponent;
}());



/***/ }),

/***/ "./src/app/hotels/hotels.component.css":
/*!*********************************************!*\
  !*** ./src/app/hotels/hotels.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   .container{\n       padding-top: 50px;\n       /* margin-left: -100px; */\n   }\n   h2{\n       padding-bottom: 30px;\n   }\n   /* .vl {\n    border-right: 2px solid grey;\n    height:95vh;\n    height: 100%;\n    padding-right: 10px;\n    padding-left: 10px;\n} */"

/***/ }),

/***/ "./src/app/hotels/hotels.component.html":
/*!**********************************************!*\
  !*** ./src/app/hotels/hotels.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"form-row\">\n        <div class=\" col-lg-6 col-sm-12  vl\">\n            <h2>Find hotel by name:</h2>\n            <div class=\"form-group row\">\n               <div class=\"col-8\">\n                 <input class=\"form-control\" dir=\"rtl\" type=\"text\" [(ngModel)]=\"searchText.Hotel\" (keypress)=\"check()\" value=\"How do I shoot web\" id=\"example-search-input\">\n               </div>\n               \n             </div>\n    <h2>Hotels List:</h2>\n    <div class=\"form-group row\" *ngFor=\"let hotel of hotelsList  | filterBy: searchText\">\n      <div class=\"col-6\">\n        {{hotel.Hotel}}\n        \n      </div>\n      \n      <!-- <label for=\"example-text-input\" class=\"col-2 col-form-label\">{{ 'admin-panel.label-username' | translate }}</label> -->\n      <div class=\"col-6\">\n        <select class=\"form-control\" [(ngModel)]=\"hotel.LC\" name=\"hotel-LC\">\n          <option *ngFor=\"let lc of leisureConsultantsList\">{{lc}}</option>\n        </select>\n        <!-- <input class=\"form-control\" type=\"text\" value=\"{{ 'admin-panel.label-username' | translate }}\" id=\"example-text-input\"> -->\n      </div>\n    </div>\n    <li *ngIf=\"(hotelsList | filterBy: searchText).length === 0\">No matching elements</li>\n\n    </div>\n    <!-- <div class=\" col-6\">\n <h2>Find hotel by name:</h2>\n <div class=\"form-group row\">\n    <div class=\"col-8\">\n      <input class=\"form-control\" dir=\"rtl\" type=\"text\" [(ngModel)]=\"searchText.Hotel\" (keypress)=\"check()\" value=\"How do I shoot web\" id=\"example-search-input\">\n    </div>\n\n  </div>\n    </div> -->\n    </div>\n    \n\n    <!-- <div class=\"form-group row\">\n      <div class=\"col-7\"></div>\n      <button class=\"btn btn-success col-1\">{{ 'admin-panel.label-add' | translate }}</button>\n    </div> -->\n    </div>"

/***/ }),

/***/ "./src/app/hotels/hotels.component.ts":
/*!********************************************!*\
  !*** ./src/app/hotels/hotels.component.ts ***!
  \********************************************/
/*! exports provided: HotelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsComponent", function() { return HotelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _leisure_consultants_leisureMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../leisure-consultants/leisureMock */ "./src/app/leisure-consultants/leisureMock.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HotelsComponent = /** @class */ (function () {
    function HotelsComponent(filterPipe) {
        this.filterPipe = filterPipe;
        this.hotelsList = _leisure_consultants_leisureMock__WEBPACK_IMPORTED_MODULE_1__["hotels"];
        this.leisureConsultantsList = _leisure_consultants_leisureMock__WEBPACK_IMPORTED_MODULE_1__["pax"];
        this.searchText = { Hotel: '' };
        // console.log(filterPipe.transform(this.hotelsList, { Hotel: 'F'}));
        this.hotelsList.sort(this.dynamicSort("Hotel"));
    }
    HotelsComponent.prototype.ngOnInit = function () {
    };
    HotelsComponent.prototype.dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    };
    HotelsComponent.prototype.check = function () {
        // this.hotelsList = this.filterPipe.transform(this.hotelsList, this.searchText);
        // console.log(this.hotelsList);
        // console.log(this.filterPipe.transform(this.hotelsList, this.searchText));
    };
    HotelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hotels',
            template: __webpack_require__(/*! ./hotels.component.html */ "./src/app/hotels/hotels.component.html"),
            styles: [__webpack_require__(/*! ./hotels.component.css */ "./src/app/hotels/hotels.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterPipe"]])
    ], HotelsComponent);
    return HotelsComponent;
}());



/***/ }),

/***/ "./src/app/leisure-consultants/leisure-consultants.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/leisure-consultants/leisure-consultants.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.btn {\n margin-left: -15px;\n}\n\n.container{\n    padding-top: 50px;\n}\n\nh2{\n    padding-bottom: 30px;\n}"

/***/ }),

/***/ "./src/app/leisure-consultants/leisure-consultants.component.html":
/*!************************************************************************!*\
  !*** ./src/app/leisure-consultants/leisure-consultants.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"container\">\n<h2>Add Leisure Consultant:</h2>\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-2 col-form-label\">{{ 'admin-panel.label-username' | translate }}</label>\n  <div class=\"col-6\">\n    <input class=\"form-control\" [(ngModel)]=\"consultant.username\" type=\"text\" placeholder=\"{{ 'admin-panel.label-username' | translate }}\" id=\"example-text-input\">\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-search-input\" class=\"col-2 col-form-label\">{{ 'admin-panel.label-password' | translate }}</label>\n  <div class=\"col-6\">\n    <input class=\"form-control\" [(ngModel)]=\"consultant.password\" type=\"password\" placeholder=\"{{ 'admin-panel.label-password' | translate }}\" id=\"example-search-input\">\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-email-input\" class=\"col-2 col-form-label\">{{ 'admin-panel.label-first-name' | translate }}</label>\n  <div class=\"col-6\">\n    <input class=\"form-control\" [(ngModel)]=\"consultant.firstName\" type=\"text\" placeholder=\"{{ 'admin-panel.label-first-name' | translate }}\" id=\"example-email-input\">\n  </div>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-url-input\" class=\"col-2 col-form-label\">{{ 'admin-panel.label-last-name' | translate }}</label>\n  <div class=\"col-6\">\n    <input class=\"form-control\" [(ngModel)]=\"consultant.lastName\" type=\"text\" placeholder=\"{{ 'admin-panel.label-last-name' | translate }}\" id=\"example-url-input\">\n  </div>\n</div>\n<div class=\"form-group row\">\n  <div class=\"col-7\"></div>\n  <button class=\"btn btn-success col-1\" type=\"submit\" (click)=\"addConsultant(consultant)\"> {{ 'admin-panel.label-add' | translate }}</button>\n</div>\n</div> -->\n\n<div class=\"container\">\n    <h2>Add Leisure Consultant:</h2>\n<!-- <table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">First name</th>\n        <th scope=\"col\">Last name</th>\n        <th scope=\"col\">Username</th>\n        <th scope=\"col\">Password</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let consultant of addedConslutants; let i = index\">\n        <th scope=\"row\">{{i + 1 }}</th>\n        <td>{{consultant.firstName}}</td>\n        <td>{{consultant.lastName}}</td>\n        <td>{{consultant.userame}}</td>\n        <td>{{consultant.password}}</td>\n      </tr>\n    </tbody>\n  </table> -->\n  <ng2-smart-table  [settings]=\"settings\" [source]=\"addedConslutants\"></ng2-smart-table>\n</div>"

/***/ }),

/***/ "./src/app/leisure-consultants/leisure-consultants.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/leisure-consultants/leisure-consultants.component.ts ***!
  \**********************************************************************/
/*! exports provided: LeisureConsultantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeisureConsultantsComponent", function() { return LeisureConsultantsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _leisureMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leisureMock */ "./src/app/leisure-consultants/leisureMock.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeisureConsultantsComponent = /** @class */ (function () {
    function LeisureConsultantsComponent() {
        this.hotelsList = _leisureMock__WEBPACK_IMPORTED_MODULE_1__["hotels"];
        this.leisureConsultantsList = _leisureMock__WEBPACK_IMPORTED_MODULE_1__["pax"];
        this.consultant = {
            username: '',
            password: '',
            firstName: '',
            lastName: ''
        };
        this.addedConslutants = [];
        this.settings = {
            columns: {
                firstName: {
                    title: 'First name'
                },
                lastName: {
                    title: 'Last name'
                },
                username: {
                    title: 'Username'
                },
                password: {
                    title: 'Password'
                }
            }
        };
    }
    LeisureConsultantsComponent.prototype.ngOnInit = function () {
    };
    LeisureConsultantsComponent.prototype.addConsultant = function (consultant) {
        this.addedConslutants.push(consultant);
        console.log(this.addedConslutants);
    };
    LeisureConsultantsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leisure-consultants',
            template: __webpack_require__(/*! ./leisure-consultants.component.html */ "./src/app/leisure-consultants/leisure-consultants.component.html"),
            styles: [__webpack_require__(/*! ./leisure-consultants.component.css */ "./src/app/leisure-consultants/leisure-consultants.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeisureConsultantsComponent);
    return LeisureConsultantsComponent;
}());



/***/ }),

/***/ "./src/app/leisure-consultants/leisureMock.ts":
/*!****************************************************!*\
  !*** ./src/app/leisure-consultants/leisureMock.ts ***!
  \****************************************************/
/*! exports provided: hotels, pax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotels", function() { return hotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pax", function() { return pax; });
var hotels = [
    {
        'Hotel': 'FLORA GRAND HOTEL',
        'LC': 'AKBAR ABBASIAN',
    },
    {
        'Hotel': 'ASTERION PALACE',
        'LC': 'SIAMAK SABER',
    },
    {
        'Hotel': 'NASSIMA ROYAL HOTEL',
        'LC': 'TAHEREH HAKIMELAHI',
    },
    {
        'Hotel': 'Burj Al Arab',
        'LC': 'ALISALEH GHAHESTANI',
    },
    {
        'Hotel': 'IBERIA',
        'LC': 'SEYEDALOLAMA SEYEDMOHAMMADAMIN',
    },
    {
        'Hotel': 'PRIME HOTEL',
        'LC': 'ALIREZA GANJIDELSHAD',
    },
    {
        'Hotel': 'RAMADA ENCORE',
        'LC': 'REZA SHABANGHAMSARI',
    },
    {
        'Hotel': 'AMBASADORI HISTORICAL PART',
        'LC': 'IMAN ABRISHAMI',
    },
    {
        'Hotel': 'GRAND HOTEL',
        'LC': 'MOJTABA MOHAMMAGHALEH',
    },
    {
        'Hotel': 'CONTINENT CRON PALACE TBILISI HOTEL',
        'LC': 'ROJA AZAD',
    },
    {
        'Hotel': 'NIKKI BEACH RESORT',
        'LC': 'FATEMEH SALAHINEZHAD',
    },
    {
        'Hotel': 'SWISSOTEL AL GHURAIR',
        'LC': 'SEYEDMOJTABA SALIMBAHRAMI',
    },
    {
        'Hotel': 'SUN & SANDS SEA VIEW HOTEL',
        'LC': 'LEILA HASEMI',
    },
    {
        'Hotel': 'AVENUE HOTEL DUBAI',
        'LC': 'AMIRREZA GOLESTANI',
    },
    {
        'Hotel': 'NOVOTEL WORLD TRADE CENTRE',
        'LC': 'FERESHTEH MOMAYEZHAGHIGHI',
    },
    {
        'Hotel': 'GRAND HYATT DUBAI',
        'LC': 'MAJID RAHMANI',
    },
    {
        'Hotel': 'IBIS AL BARSHA',
        'LC': 'MASOOMEH ZARGAR',
    },
    {
        'Hotel': 'RIXOS BAB AL BAHR',
        'LC': 'HASAN SAHRAEIAFSHAR',
    },
    {
        'Hotel': 'ROYAL CONTINENTAL HOTEL',
        'LC': 'MATIN SHAMLOONIA',
    },
    {
        'Hotel': 'CROWNE PLAZA SHEIKH ZAYED',
        'LC': 'SARA KHADEMIAN',
    },
    {
        'Hotel': 'Royal Falcon',
        'LC': 'BEHROOZ BAGHERI',
    },
    {
        'Hotel': 'DORUS HOTEL',
        'LC': 'MOHAMMAD KHAVAND',
    },
    {
        'Hotel': 'Delmon Palace Hotel',
        'LC': 'MOHAMMAD TEIMOURIJERVEKANI',
    }
    // ,
    // 'FLORA GRAND HOTEL',
    // 'ASTERION PALACE',
    // 'NASSIMA ROYAL HOTEL',
    // 'Burj Al Arab',
    // 'IBERIA',
    // 'PRIME HOTEL',
    // 'RAMADA ENCORE',
    // 'AMBASADORI HISTORICAL PART',
    // 'GRAND HOTEL',
    // 'CONTINENT CRON PALACE TBILISI HOTEL',
    // 'TBILISI CENTRALI',
    // 'NIKKI BEACH RESORT',
    // 'SWISSOTEL AL GHURAIR',
    // 'SUN & SANDS SEA VIEW HOTEL',
    // 'AVENUE HOTEL DUBAI',
    // 'NOVOTEL WORLD TRADE CENTRE',
    // 'GRAND HYATT DUBAI',
    // 'IBIS AL BARSHA',
    // 'RIXOS BAB AL BAHR',
    // 'ROYAL CONTINENTAL HOTEL',
    // 'CROWNE PLAZA SHEIKH ZAYED',
    // 'Royal Falcon',
    // 'DORUS HOTEL',
    // 'Delmon Palace Hotel'
];
var pax = [
    'FATEMEH SALAHINEZHAD',
    'SEYEDMOJTABA SALIMBAHRAMI',
    'RAHA KHOSRAVI',
    'LEILA HASEMI',
    'ALI KARIMI',
    'AMIRREZA GOLESTANI',
    'FERESHTEH MOMAYEZHAGHIGHI',
    'JAVAD ABTAEIKHEIRABADI',
    'MAJID RAHMANI',
    'MASOOMEH ZARGAR',
    'HASAN SAHRAEIAFSHAR',
    'MATIN SHAMLOONIA',
    'SARA KHADEMIAN',
    'BEHROOZ BAGHERI',
    'MOHAMMAD KHAVAND',
    'HOUMAN ASADPOURSHESHBAHREH',
    'MOHAMMAD TEIMOURIJERVEKANI',
    'HEDAYATOLLAH SHARAFI',
    'SOHAIL FARJAMI',
    'SHAHIN SHAMLOUREZAEI',
    'AKBAR ABBASIAN',
    'POORYA SAEIDIFARID',
    'SIAMAK SABER',
    'TAHEREH HAKIMELAHI',
    'ALISALEH GHAHESTANI',
    'SEYEDALOLAMA SEYEDMOHAMMADAMIN',
    'ALIREZA GANJIDELSHAD',
    'ALIREZA NOORI',
    'DANIAL SHIRINKAR',
    'MEYSAM ALAVINEJAD',
    'IMAN ABRISHAMI',
    'HOJAT KESHAVARZI',
    'MINA MOSTOFI',
    'ROJA AZAD',
    'HOSSEIN RASOLI',
    'LEILA NADREMANESH',
    'MOJTABA MOHAMMAGHALEH',
    'MOHAMMAD JAFARPOOR',
    'REZA SHABANGHAMSARI',
    'ABOLFAZL VAZIRIDOUZIN',
    'ESMAEIL HABIBI',
    'AYOUB DELJOUKHORTOUMI'
];


/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    height: 100vh;\n}\nbody {\n    min-height: 100vh;\n}\nbody {\n  display: flex;\n  align-items: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n  \n}\n.form-signin {\n  width: 100%;\n  max-width: 500px;\n  padding: 15px;\n  margin: auto;\n  margin-top: 250px;\n}\n.form-signin .checkbox {\n  font-weight: 400;\n}\n.form-signin .form-control {\n  position: relative;\n  box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.spinner {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n}\n.spinner img {\n  margin: auto;\n  height: 100px;\n  width: 100px;\n}\n.setZIndex {\n  z-index: -1;\n}\n.centered {\n  position: fixed;\n  top: 42%;\n  left: 47%;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"text-center\">\n    <!-- <img id=\"profile-img\" class=\"profile-img-card\" src=\"../../../assets/avatar.png\" /> -->\n  <form class=\"form-signin\">\n    <h1 class=\"h3 mb-3 font-weight-normal\">{{ 'login-page.label-please-sing-in' | translate }} </h1>\n    <input type=\"email\" dir=\"rtl\" [(ngModel)]=\"data.username\" name=\"username\" id=\"input-username\" class=\"form-control\" placeholder=\"{{ 'login-page.label-username' | translate }}\" required autofocus>\n    <input type=\"password\"  dir=\"rtl\" [(ngModel)]=\"data.password\" name=\"password\" id=\"input-password\" class=\"form-control\" placeholder=\"{{ 'login-page.label-password' | translate }}\" required>\n    <button class=\"btn-outline-success btn btn-lg btn-block\" (click)=\"login(data)\" type=\"submit\">{{ 'login-page.label-submit' | translate }} </button>\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2018</p>\n  </form>\n</body>\n<div class=\"spinner\" *ngIf=\"spinnerLoading\">\n    <div class=\"centered\">\n\n        <img src=\"../../../assets/loading_spinner.gif\">\n        <h2><p><b>{{'login-page.label-loading' | translate}}</b></p></h2>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(translate, router) {
        this.translate = translate;
        this.router = router;
        this.spinnerLoading = false;
        this.data = {
            username: '',
            password: ''
        };
        translate.setDefaultLang('fa_FA');
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        this.spinnerLoading = true;
        localStorage.setItem('loggedInAs', data.username);
        setTimeout(function () {
            _this.spinnerLoading = false;
            _this.router.navigate(['/wellcome']);
        }, 1500);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.navbar-brand {\n    color: #fff !important;\n  }\n\n  .navbar{\n    background-repeat: repeat-x;\n  }"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" >Mini CS</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n   \n      <li class=\"nav-item dropdown\" ngbDropdown *ngIf=\"admin\">\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle style=\"cursor: pointer;\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{'nav-bar.label-admin-panel' | translate}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" routerLink=\"upload\">Upload</a>\n          <a class=\"dropdown-item\" routerLink=\"consultants\">Add Consultant</a>\n          <a class=\"dropdown-item\" routerLink=\"hotels\">Manage Hotels</a>\n          <a class=\"dropdown-item\" routerLink=\"passenger-type\">Passanger type</a>\n        </div>\n      </li>\n      <li class=\"nav-item \" *ngIf=\"loggedIn\">\n          <a class=\"nav-link\" routerLink=\"travel-list\">{{'nav-bar.label-travel-list' | translate}} <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item \" *ngIf=\"loggedIn\">\n            <a class=\"nav-link\" routerLink=\"find-passenger\">{{'nav-bar.label-find-passenger' | translate}} <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item \" *ngIf=\"loggedIn\">\n              <a class=\"nav-link\" routerLink=\"check-hotel\">{{'nav-bar.label-check-hotel' | translate}}<span class=\"sr-only\">(current)</span></a>\n            </li>\n      <li class=\"nav-item dropdown\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle style=\"cursor: pointer;\"  id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            {{'nav-bar.label-change-language' | translate}}\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"changeLang('en_UK')\">English</a>\n          <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"changeLang('fa_FA')\">Farsi</a>\n        </div>\n      </li>\n\n      <!-- (click)=\"changeLang('en_US')\" -->\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n        <!-- <li class=\"nav-item \">\n            <a class=\"nav-link\" routerLink=\"login\">Logout<span class=\"sr-only\">(current)</span></a>\n          </li> -->\n      <!-- <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"نام کاربری\" aria-label=\"نام کاربری\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"کلمه عبور\" aria-label=\"کلمه عبور\">-->\n      <button class=\"btn btn-outline-danger my-2 my-sm-0\" (click)=\"logout()\" *ngIf=\"loggedIn\" type=\"submit\">Logout</button> \n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        translate.setDefaultLang('fa_FA');
        setInterval(function () {
            if (localStorage.getItem('loggedInAs') === 'admin') {
                _this.admin = true;
                _this.loggedIn = true;
            }
            else {
                _this.admin = false;
                _this.loggedIn = false;
            }
            if (localStorage.getItem('loggedInAs')) {
                _this.loggedIn = true;
            }
        }, 100);
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('loggedInAs');
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/passangers/passangers.component.css":
/*!*****************************************************!*\
  !*** ./src/app/passangers/passangers.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding-top: 20px;\n  }\n  \n    \n  h2{\n    padding-top: 20px;\n  }\n  \n    \n  th {\n    text-align: center;\n}\n  \n    \n  td {\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/passangers/passangers.component.html":
/*!******************************************************!*\
  !*** ./src/app/passangers/passangers.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Add passenger type:</h2>\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Type:</label>\n  <div class=\"col-6\">\n    <input class=\"form-control\" [(ngModel)]=\"type\" type=\"text\" name=\"type\" placeholder=\"Passanger type\" id=\"example-text-input\">\n  </div>\n  <button class=\"btn btn-success col-1\"  *ngIf=\"!editButtonClicked\" (click)=\"addType(type)\" >Add</button>\n  <button class=\"btn btn-success col-1\" *ngIf=\"editButtonClicked\" (click)=\"save(type)\" >Save</button>\n</div>\n\n<div class=\"col-9\">\n<table class=\"table\">\n    <thead>\n      <tr>\n        <th scope=\"col\">ID</th>\n        <th scope=\"col\">Type</th>\n        <th scope=\"col\">Delete/Edit</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let li of list;let i = index\">\n        <th scope=\"row\">{{i+1}}</th>\n        <td>{{li}}</td>\n        <td><button class=\"btn btn-danger\" (click)=\"delete(i)\">X</button> <button class=\"btn btn-primary\" (click)=\"edit(i)\">Edit</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/passangers/passangers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/passangers/passangers.component.ts ***!
  \****************************************************/
/*! exports provided: PassangersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassangersComponent", function() { return PassangersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PassangersComponent = /** @class */ (function () {
    function PassangersComponent() {
        this.list = [];
        this.editButtonClicked = false;
    }
    PassangersComponent.prototype.ngOnInit = function () {
    };
    PassangersComponent.prototype.addType = function (type) {
        this.list.push(type);
    };
    PassangersComponent.prototype.delete = function (i) {
        this.list.splice(i, 1);
    };
    PassangersComponent.prototype.edit = function (i) {
        this.editIndex = i;
        this.editButtonClicked = true;
        this.type = this.list[i];
    };
    PassangersComponent.prototype.save = function () {
        this.list[this.editIndex] = this.type;
        this.editButtonClicked = false;
        this.type = '';
    };
    PassangersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passangers',
            template: __webpack_require__(/*! ./passangers.component.html */ "./src/app/passangers/passangers.component.html"),
            styles: [__webpack_require__(/*! ./passangers.component.css */ "./src/app/passangers/passangers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PassangersComponent);
    return PassangersComponent;
}());



/***/ }),

/***/ "./src/app/safeHTML.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/safeHTML.pipe.ts ***!
  \**********************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/travel-list/excelMock.ts":
/*!******************************************!*\
  !*** ./src/app/travel-list/excelMock.ts ***!
  \******************************************/
/*! exports provided: settings, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var settings = {
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
        ID: {
            title: 'ID'
        },
        Booking_Id: {
            title: 'Booking ID'
        },
        Booking_Date: {
            title: 'Booking Date'
        },
        Hotel_Name: {
            title: 'Hotel Name'
        },
        Pax_Name: {
            title: 'Pax Name'
        },
        Number_Of_Pax: {
            title: 'No. Of Pax'
        },
        Supplier_reference: {
            title: 'Supplier reference'
        },
        Room_type: {
            title: 'Room type'
        },
        Number_of_rooms: {
            title: 'Number of rooms'
        },
        Leasuremant_customer: {
            title: 'Leasuremant customer'
        },
        Contact_number: {
            title: 'Contact number'
        },
        Room_number: {
            title: 'Room number'
        },
        Passenger_type: {
            title: 'Passenger type'
        },
        Check_by_REP: {
            title: 'Check by REP',
            type: 'html',
            valuePrepareFunction: function (data) { return '<input type="checkbox" checked>'; },
            filter: false
        },
        Check_by_LC: {
            title: 'Check by LC',
            type: 'html',
            valuePrepareFunction: function (data) { return '<input type="checkbox" checked>'; },
            filter: false
        },
        // Check_by_REP: {
        //      title: 'Check by REP'
        // },
        // Check_by_LC: {
        //      title: 'Check by LC'
        // },
        Leaving_From: {
            title: 'Leaving From'
        },
        Supplier_Arrival: {
            title: 'Supplier'
        },
        DateTime_Arrival: {
            title: 'Date & Time'
        },
        Terminal_Arrival: {
            title: 'Terminal'
        },
        Car_Name_Arrival: {
            title: 'Car Name'
        },
        Car_Transfer_Type_Arrival: {
            title: 'Car Transfer Type'
        },
        Airline_Arrival: {
            title: 'Airline'
        },
        FlightNo_Arrival: {
            title: 'Flight No.'
        },
        Going_to: {
            title: 'Going To'
        },
        Supplier_Departure: {
            title: 'Supplier'
        },
        DateTime_Departure: {
            title: 'Date & Time'
        },
        Terminal_Departure: {
            title: 'Terminal'
        },
        Car_Name_Departure: {
            title: 'Car Name'
        },
        Car_Transfer_Type_Departure: {
            title: 'Car Transfer Type'
        },
        Airline_Departure: {
            title: 'Airline'
        },
        FlightNo_Departure: {
            title: 'Flight No.'
        }
    }
};
var data = [
    {
        'ID': 3,
        'Booking_Id': 'DD13247371',
        'Booking_Date': '02-Jun-2018',
        'Hotel_Name': 'NIKKI BEACH RESORT',
        'Pax_Name': 'FATEMEH SALAHINEZHAD',
        'Number_Of_Pax': 2,
        'Supplier_reference': 111303,
        'Room_type': 'single,double',
        'Number_of_rooms': 2,
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': true,
        'Check_by_LC': true,
        'Leaving_From': 'Thr',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 05:25',
        'Terminal_Arrival': 'Dubai Airport (T3)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'EK (Emirates)',
        'FlightNo_Arrival': 976,
        'Going_to': 'Thr',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 20:45',
        'Terminal_Departure': 'Dubai Airport (T3)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'EK (Emirates)',
        'FlightNo_Departure': 977
    },
    {
        'ID': 4,
        'Booking_Id': 'DD13247783',
        'Booking_Date': '07-Jun-2018',
        'Hotel_Name': 'SWISSOTEL AL GHURAIR',
        'Pax_Name': 'seyedmojtaba salimbahrami',
        'Number_Of_Pax': 3,
        'Supplier_reference': 24193429,
        'Room_type': 'doublepluschild',
        'Number_of_rooms': 1,
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': false,
        'Check_by_LC': false,
        'Leaving_From': 'Thr',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 07:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': 658,
        'Going_to': 'Thr',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 21:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': 659
    },
    {
        'ID': 6,
        'Booking_Id': 'DD13247215',
        'Booking_Date': '31-May-2018',
        'Hotel_Name': 'SUN & SANDS SEA VIEW HOTEL',
        'Pax_Name': 'RAHA KHOSRAVI',
        'Number_Of_Pax': 1,
        'Supplier_reference': 2219,
        'Room_type': 'single',
        'Number_of_rooms': 1,
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': false,
        'Check_by_LC': false,
        'Leaving_From': 'Thr',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': 61,
        'Going_to': 'Thr',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 12:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'W5 (Mahan Air)',
        'FlightNo_Departure': 60
    },
    {
        'ID': 7,
        'Booking_Id': 'DD13246966',
        'Booking_Date': '29-May-2018',
        'Hotel_Name': 'SUN & SANDS SEA VIEW HOTEL',
        'Pax_Name': 'LEILA HASEMI',
        'Number_Of_Pax': 2,
        'Supplier_reference': 2217,
        'Room_type': 'double',
        'Number_of_rooms': 1,
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': false,
        'Check_by_LC': false,
        'Leaving_From': 'Teh',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': 658,
        'Going_to': 'Teh',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 20:55',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': 659
    },
    {
        'ID': 8,
        'Booking_Id': 'DD13247543',
        'Booking_Date': '03-Jun-2018',
        'Hotel_Name': 'SUN & SANDS SEA VIEW HOTEL',
        'Pax_Name': 'ALI KARIMI',
        'Number_Of_Pax': 1,
        'Supplier_reference': 2222,
        'Room_type': 'single',
        'Number_of_rooms': 1,
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': false,
        'Check_by_LC': false,
        'Leaving_From': 'Teh',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': 'IR658',
        'Going_to': 'Teh',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 20:55',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': 'IR659'
    },
    {
        'ID': 9,
        'Booking_Id': 'DD13247543',
        'Booking_Date': '03-Jun-2018',
        'Hotel_Name': 'SUN & SANDS SEA VIEW HOTEL',
        'Pax_Name': 'ALI KARIMI',
        'Number_Of_Pax': 1,
        'Supplier_reference': 2222,
        'Room_type': 'single',
        'Number_of_rooms': 1,
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': false,
        'Check_by_LC': false,
        'Leaving_From': 'Teh',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': 'IR658',
        'Going_to': 'Teh',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 20:55',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': 'IR659'
    },
    {
        'ID': '10',
        'Booking_Id': 'DD13246622',
        'Booking_Date': '27-May-2018',
        'Hotel_Name': 'NOVOTEL WORLD TRADE CENTRE',
        'Pax_Name': 'FERESHTEH MOMAYEZHAGHIGHI',
        'Number_Of_Pax': '3',
        'Supplier_reference': '66086807',
        'Room_type': 'triple',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'THR',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': '61',
        'Going_to': 'THR',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 21:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'W5 (Mahan Air)',
        'FlightNo_Departure': '64'
    },
    {
        'ID': '11',
        'Booking_Id': 'DD13247196',
        'Booking_Date': '31-May-2018',
        'Hotel_Name': 'SUN & SANDS SEA VIEW HOTEL',
        'Pax_Name': 'JAVAD ABTAEIKHEIRABADI',
        'Number_Of_Pax': '3',
        'Supplier_reference': '2220',
        'Room_type': 'doublepluschild',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'THR',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': '61',
        'Going_to': 'THR',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 21:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'W5 (Mahan Air)',
        'FlightNo_Departure': '64'
    },
    {
        'ID': '12',
        'Booking_Id': 'DD13247296',
        'Booking_Date': '02-Jun-2018',
        'Hotel_Name': 'GRAND HYATT DUBAI',
        'Pax_Name': 'majid rahmani',
        'Number_Of_Pax': '2',
        'Supplier_reference': '4733311',
        'Room_type': 'double',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'ika',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': '61',
        'Going_to': 'ika',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 21:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'W5 (Mahan Air)',
        'FlightNo_Departure': '64'
    },
    {
        'ID': '13',
        'Booking_Id': 'DD13246852',
        'Booking_Date': '29-May-2018',
        'Hotel_Name': 'IBIS AL BARSHA',
        'Pax_Name': 'masoomeh zargar',
        'Number_Of_Pax': '1',
        'Supplier_reference': '698872',
        'Room_type': 'single',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'tehran',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': '61',
        'Going_to': 'tehran',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '15/06/2018 21:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'W5 (Mahan Air)',
        'FlightNo_Departure': '64'
    },
    {
        'ID': '14',
        'Booking_Id': 'DD13248073',
        'Booking_Date': '10-Jun-2018',
        'Hotel_Name': 'RIXOS BAB AL BAHR',
        'Pax_Name': 'Hasan Sahraeiafshar',
        'Number_Of_Pax': '3',
        'Supplier_reference': '521852',
        'Room_type': 'triple',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'Thr',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': '61',
        'Going_to': 'Thr',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '15/06/2018 21:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'W5 (Mahan Air)',
        'FlightNo_Departure': '64'
    },
    {
        'ID': '15',
        'Booking_Id': 'DD13245795',
        'Booking_Date': '20-May-2018',
        'Hotel_Name': 'ROYAL CONTINENTAL HOTEL',
        'Pax_Name': 'MATIN SHAMLOONIA',
        'Number_Of_Pax': '1',
        'Supplier_reference': 'R-21808',
        'Room_type': 'single',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'teh',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': 'IR658',
        'Going_to': 'teh',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '15/06/2018 21:35',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': 'IR655'
    },
    {
        'ID': '17',
        'Booking_Id': 'DD13247923',
        'Booking_Date': '09-Jun-2018',
        'Hotel_Name': 'CROWNE PLAZA SHEIKH ZAYED',
        'Pax_Name': 'SARA KHADEMIAN',
        'Number_Of_Pax': '2',
        'Supplier_reference': '16137389',
        'Room_type': 'double',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'teh',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': '658',
        'Going_to': 'teh',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '15/06/2018 21:35',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': '655'
    },
    {
        'ID': '18',
        'Booking_Id': 'DD14248025',
        'Booking_Date': '10-Jun-2018',
        'Hotel_Name': 'Royal Falcon',
        'Pax_Name': 'behrooz bagheri',
        'Number_Of_Pax': '1',
        'Supplier_reference': '25950203',
        'Room_type': 'single',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'thr',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': '61',
        'Going_to': 'thr',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '17/06/2018 12:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'W5 (Mahan Air)',
        'FlightNo_Departure': '60'
    },
    {
        'ID': '21',
        'Booking_Id': 'DD13247953',
        'Booking_Date': '10-Jun-2018',
        'Hotel_Name': 'DORUS HOTEL',
        'Pax_Name': 'MOHAMMAD KHAVAND',
        'Number_Of_Pax': '1',
        'Supplier_reference': '57834',
        'Room_type': 'single',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'SHIRAZ',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 15:45',
        'Terminal_Arrival': 'Dubai Airport (T2)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'Y9 (Kish Air)',
        'FlightNo_Arrival': '6012',
        'Going_to': 'SHIRAZ',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 18:10',
        'Terminal_Departure': 'Dubai Airport (T2)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'Y9 (Kish Air)',
        'FlightNo_Departure': '6013'
    },
    {
        'ID': '22',
        'Booking_Id': 'DD13246035',
        'Booking_Date': '22-May-2018',
        'Hotel_Name': 'SUN & SANDS SEA VIEW HOTEL',
        'Pax_Name': 'HOUMAN ASADPOURSHESHBAHREH',
        'Number_Of_Pax': '2',
        'Supplier_reference': '2207',
        'Room_type': 'double',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'IFN',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 17:45',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': '680',
        'Going_to': 'IFN',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '21/06/2018 10:45',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': '681'
    },
    {
        'ID': '23',
        'Booking_Id': 'DD7247845',
        'Booking_Date': '09-Jun-2018',
        'Hotel_Name': 'Delmon Palace Hotel',
        'Pax_Name': 'mohammad Teimourijervekani',
        'Number_Of_Pax': '2',
        'Supplier_reference': '167548505',
        'Room_type': '',
        'Number_of_rooms': '',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'isfahan',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 18:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': '681',
        'Going_to': 'isfahan',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 10:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': '680'
    },
    {
        'ID': '33',
        'Booking_Id': 'DD13247782',
        'Booking_Date': '07-Jun-2018',
        'Hotel_Name': 'NOVOTEL WORLD TRADE CENTRE',
        'Pax_Name': 'Hedayatollah Sharafi',
        'Number_Of_Pax': '1',
        'Supplier_reference': '66090799',
        'Room_type': 'single',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'IFN',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 18:35',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'IR (Iran Air)',
        'FlightNo_Arrival': '680',
        'Going_to': 'DXB',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '14/06/2018 10:45',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'IR (Iran Air)',
        'FlightNo_Departure': '681'
    },
    {
        'ID': '34',
        'Booking_Id': 'DD13245553',
        'Booking_Date': '17-May-2018',
        'Hotel_Name': 'SWISSOTEL AL GHURAIR',
        'Pax_Name': 'SOHAIL FARJAMI',
        'Number_Of_Pax': '2',
        'Supplier_reference': '24186793',
        'Room_type': 'double',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'thr',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 18:35',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': '65',
        'Going_to': 'thr',
        'Supplier_Departure': 'DDH Transfer',
        'DateTime_Departure': '18/06/2018 21:00',
        'Terminal_Departure': 'Dubai Airport (T1)',
        'Car_Name_Departure': 'Mini Bus,Van',
        'Car_Transfer_Type_Departure': 'General_Group_Transfer',
        'Airline_Departure': 'W5 (Mahan Air)',
        'FlightNo_Departure': '64'
    },
    {
        'ID': '5',
        'Booking_Id': 'DD13247267',
        'Booking_Date': '02-Jun-2018',
        'Hotel_Name': 'CROWNE PLAZA SHEIKH ZAYED',
        'Pax_Name': 'shahin shamlourezaei',
        'Number_Of_Pax': '2',
        'Supplier_reference': '16133650',
        'Room_type': 'double',
        'Number_of_rooms': '1',
        'Leasuremant_customer': '',
        'Contact_number': '',
        'Room_number': '',
        'Passenger_type': '',
        'Check_by_REP': '',
        'Check_by_LC': '',
        'Leaving_From': 'thr',
        'Supplier_Arrival': 'DDH Transfer',
        'DateTime_Arrival': '11/06/2018 08:00',
        'Terminal_Arrival': 'Dubai Airport (T1)',
        'Car_Name_Arrival': 'Mini Bus,Van',
        'Car_Transfer_Type_Arrival': 'General_Group_Transfer',
        'Airline_Arrival': 'W5 (Mahan Air)',
        'FlightNo_Arrival': '61',
        'Going_to': 'N/A',
        'Supplier_Departure': 'N/A',
        'DateTime_Departure': '',
        'Terminal_Departure': '',
        'Car_Name_Departure': '',
        'Car_Transfer_Type_Departure': '',
        'Airline_Departure': '',
        'FlightNo_Departure': ''
    }, {
        "ID": "1",
        "Booking_Id": "DD13245872",
        "Booking_Date": "",
        "Hotel_Name": "FLORA GRAND HOTEL",
        "Pax_Name": "Mr AKBAR ABBASIAN",
        "Number_Of_Pax": "",
        "Supplier_reference": "6420150 - 6420151",
        "Room_type": "single,double",
        "Number_of_rooms": "2",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 00:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "",
        "FlightNo_Arrival": "",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "13-Jun-2018 00:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "",
        "FlightNo_Departure": ""
    },
    {
        "ID": "2",
        "Booking_Id": "DD13246251",
        "Booking_Date": "",
        "Hotel_Name": "FLORA GRAND HOTEL",
        "Pax_Name": "Mr POORYA SAEIDIFARID",
        "Number_Of_Pax": "",
        "Supplier_reference": "6420940",
        "Room_type": "single",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 00:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "",
        "FlightNo_Arrival": "",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "13-Jun-2018 00:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "",
        "FlightNo_Departure": ""
    },
    {
        "ID": "3",
        "Booking_Id": "DD13247898",
        "Booking_Date": "",
        "Hotel_Name": "ASTERION PALACE",
        "Pax_Name": "Mr SIAMAK SABER",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247898",
        "Room_type": "single",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 00:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "",
        "FlightNo_Arrival": "",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "12-Jun-2018 00:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "",
        "FlightNo_Departure": ""
    },
    {
        "ID": "4",
        "Booking_Id": "DD13247973",
        "Booking_Date": "",
        "Hotel_Name": "NASSIMA ROYAL HOTEL",
        "Pax_Name": "Mr TAHEREH HAKIMELAHI",
        "Number_Of_Pax": "",
        "Supplier_reference": "2954417",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 00:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "",
        "FlightNo_Arrival": "",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "12-Jun-2018 00:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "",
        "FlightNo_Departure": ""
    },
    {
        "ID": "5",
        "Booking_Id": "DD14248058",
        "Booking_Date": "",
        "Hotel_Name": "Burj Al Arab",
        "Pax_Name": "Mr ALISALEH GHAHESTANI",
        "Number_Of_Pax": "",
        "Supplier_reference": "25950730",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 00:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "",
        "FlightNo_Arrival": "",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "12-Jun-2018 00:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "",
        "FlightNo_Departure": ""
    },
    {
        "ID": "6",
        "Booking_Id": "DD13246578",
        "Booking_Date": "",
        "Hotel_Name": "IBERIA",
        "Pax_Name": "Mr SEYEDALOLAMA SEYEDMOHAMMADAMIN",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13246578",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 ",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "",
        "FlightNo_Arrival": "",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 22:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "QB (Qeshm Air)",
        "FlightNo_Departure": "2272"
    },
    {
        "ID": "7",
        "Booking_Id": "DD13246618",
        "Booking_Date": "",
        "Hotel_Name": "PRIME HOTEL",
        "Pax_Name": "Mr ALIREZA GANJIDELSHAD",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13246618",
        "Room_type": "triple",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "",
        "FlightNo_Arrival": "",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 22:15",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "QB (Qeshm Air)",
        "FlightNo_Departure": "2272"
    },
    {
        "ID": "11",
        "Booking_Id": "DD13246406",
        "Booking_Date": "",
        "Hotel_Name": "FLORA GRAND HOTEL",
        "Pax_Name": "Mr ALIREZA NOORI",
        "Number_Of_Pax": "",
        "Supplier_reference": "6421323",
        "Room_type": "single",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 08:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "IR (Iran Air)",
        "FlightNo_Arrival": "658",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 21:35",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "IR (Iran Air)",
        "FlightNo_Departure": "655"
    },
    {
        "ID": "24",
        "Booking_Id": "DD13247959",
        "Booking_Date": "",
        "Hotel_Name": "RAMADA ENCORE",
        "Pax_Name": "Mr DANIAL SHIRINKAR",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247959",
        "Room_type": "single",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 11:50",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "Y9 (Kish Air)",
        "FlightNo_Arrival": "6079",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "14-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "Y9 (Kish Air)",
        "FlightNo_Departure": "6078"
    },
    {
        "ID": "25",
        "Booking_Id": "DD13247804",
        "Booking_Date": "",
        "Hotel_Name": "RAMADA ENCORE",
        "Pax_Name": "Mr MEYSAM ALAVINEJAD",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247804",
        "Room_type": "triple",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 15:30",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "Georgian Airways",
        "FlightNo_Arrival": "506",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "14-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "Y9 (Kish Air)",
        "FlightNo_Departure": "6078"
    },
    {
        "ID": "28",
        "Booking_Id": "DD13246920",
        "Booking_Date": "",
        "Hotel_Name": "AMBASADORI HISTORICAL PART",
        "Pax_Name": "Mr IMAN ABRISHAMI",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13246920",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "29",
        "Booking_Id": "DD13246980",
        "Booking_Date": "",
        "Hotel_Name": "GRAND HOTEL",
        "Pax_Name": "Mr HOJAT KESHAVARZI",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13246980",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "30",
        "Booking_Id": "DD13247025",
        "Booking_Date": "",
        "Hotel_Name": "CONTINENT CRON PALACE TBILISI HOTEL",
        "Pax_Name": "Mr MINA MOSTOFI",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247025",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "31",
        "Booking_Id": "DD13247027",
        "Booking_Date": "",
        "Hotel_Name": "CONTINENT CRON PALACE TBILISI HOTEL",
        "Pax_Name": "Mrs ROJA AZAD",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247027",
        "Room_type": "triple",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:01",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "32",
        "Booking_Id": "DD13247068",
        "Booking_Date": "",
        "Hotel_Name": "RAMADA ENCORE",
        "Pax_Name": "Mr HOSSEIN RASOLI",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247068",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "33",
        "Booking_Id": "DD13247410",
        "Booking_Date": "",
        "Hotel_Name": "ASTERION PALACE",
        "Pax_Name": "Mrs LEILA NADREMANESH",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247410",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "34",
        "Booking_Id": "DD13247857",
        "Booking_Date": "",
        "Hotel_Name": "GRAND HOTEL",
        "Pax_Name": "Mr MOJTABA MOHAMMAGHALEH",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247857",
        "Room_type": "double",
        "Number_of_rooms": "2",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "35",
        "Booking_Id": "DD13247916",
        "Booking_Date": "",
        "Hotel_Name": "ASTERION PALACE",
        "Pax_Name": "Mr MOHAMMAD JAFARPOOR",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247916",
        "Room_type": "twin",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "36",
        "Booking_Id": "DD13247969",
        "Booking_Date": "",
        "Hotel_Name": "RAMADA ENCORE",
        "Pax_Name": "Mr REZA SHABANGHAMSARI",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247969",
        "Room_type": "single",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 18:00",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "ZV (Zagros)",
        "FlightNo_Arrival": "3059",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 14:00",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3068"
    },
    {
        "ID": "40",
        "Booking_Id": "DD13246658",
        "Booking_Date": "",
        "Hotel_Name": "TBILISI CENTRALI",
        "Pax_Name": "Mr ABOLFAZL VAZIRIDOUZIN",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13246658",
        "Room_type": "triple",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 19:10",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "TBZ (ATA)",
        "FlightNo_Arrival": "6607",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 21:30",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "TBZ (ATA)",
        "FlightNo_Departure": "6608"
    },
    {
        "ID": "41",
        "Booking_Id": "DD13247202",
        "Booking_Date": "",
        "Hotel_Name": "IBERIA",
        "Pax_Name": "Mr ESMAEIL HABIBI",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247202",
        "Room_type": "triple",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 19:10",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "TBZ (ATA)",
        "FlightNo_Arrival": "6607",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 21:20",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "TBZ (ATA)",
        "FlightNo_Departure": "6608"
    },
    {
        "ID": "42",
        "Booking_Id": "DD13247881",
        "Booking_Date": "",
        "Hotel_Name": "IBERIA",
        "Pax_Name": "Mr Ayoub deljoukhortoumi",
        "Number_Of_Pax": "",
        "Supplier_reference": "DD13247881",
        "Room_type": "double",
        "Number_of_rooms": "1",
        "Leasuremant_customer": "",
        "Contact_number": "",
        "Room_number": "",
        "Passenger_type": "",
        "Check_by_REP": "",
        "Check_by_LC": "",
        "Leaving_From": "",
        "Supplier_Arrival": "",
        "DateTime_Arrival": "11-Jun-2018 19:10",
        "Terminal_Arrival": "",
        "Car_Name_Arrival": "",
        "Car_Transfer_Type_Arrival": "",
        "Airline_Arrival": "TBZ (ATA)",
        "FlightNo_Arrival": "6607",
        "Going_to": "",
        "Supplier_Departure": "",
        "DateTime_Departure": "15-Jun-2018 20:30",
        "Terminal_Departure": "",
        "Car_Name_Departure": "",
        "Car_Transfer_Type_Departure": "",
        "Airline_Departure": "ZV (Zagros)",
        "FlightNo_Departure": "3058"
    }
];


/***/ }),

/***/ "./src/app/travel-list/travel-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/travel-list/travel-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    font-size: 1rem;\n  }\n  :host /deep/ * {\n    box-sizing: border-box;\n  }\n  :host /deep/ button, :host /deep/ input, :host /deep/ optgroup, :host /deep/ select, :host /deep/ textarea {\n    color: inherit;\n    font: inherit;\n    margin: 0;\n  }\n  :host /deep/ table {\n    line-height: 1.5em;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: table;\n    width: 100%;\n    max-width: 100%;\n    overflow: auto;\n    word-break: normal;\n    word-break: keep-all;\n  }\n  :host /deep/ table tr th {\n    font-weight: bold;\n     /*my styles */\n    min-width: 100px;\n    max-width:100%;\n    white-space:nowrap;\n  }\n  :host /deep/ table tr section {\n    font-size: 0.75em;\n    font-weight: bold;\n  }\n  :host /deep/ table tr td, :host /deep/ table tr th {\n    font-size: 0.875em;\n    margin: 0;\n    padding: 0.5em 1em;\n    /*my styles */\n    min-width: 100px;\n    max-width:100%;\n    white-space:nowrap;\n    border: 1px solid black;\n  }\n  :host /deep/ a {\n    color: #1e6bb8;\n    text-decoration: none;\n  }\n  :host /deep/ a:hover {\n    text-decoration: underline;\n  }\n  h2{\n    padding-left: 15px;\n    padding-top: 20px;\n}\n  .smart-table{\n      padding-top: 20px;\n      padding-left: 15px;\n      padding-right: 15px;\n  }\n  :host /deep/ ng2-smart-table thead > tr > th { direction: rtl; }\n  input .form-control{\n    color: red;\n  }"

/***/ }),

/***/ "./src/app/travel-list/travel-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/travel-list/travel-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Passangers table:</h2>\n<div class=\"smart-table\" style=\"overflow-x:auto;\" >\n<ng2-smart-table  [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\n</div>"

/***/ }),

/***/ "./src/app/travel-list/travel-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/travel-list/travel-list.component.ts ***!
  \******************************************************/
/*! exports provided: TravelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelListComponent", function() { return TravelListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _excelMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excelMock */ "./src/app/travel-list/excelMock.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TravelListComponent = /** @class */ (function () {
    function TravelListComponent(_sanitizer) {
        var _this = this;
        this._sanitizer = _sanitizer;
        // settings = settings;
        this.data = _excelMock__WEBPACK_IMPORTED_MODULE_1__["data"];
        this.settings = {
            // add: {
            //   addButtonContent: '<i class="nb-plus"></i>',
            //   createButtonContent: '<i class="nb-checkmark"></i>',
            //   cancelButtonContent: '<i class="nb-close"></i>',
            // },
            // edit: {
            //   editButtonContent: '<i class="nb-edit"></i>',
            //   saveButtonContent: '<i class="nb-checkmark"></i>',
            //   cancelButtonContent: '<i class="nb-close"></i>',
            // },
            // delete: {
            //   deleteButtonContent: '<i class="nb-trash"></i>',
            //   confirmDelete: true,
            // },
            columns: {
                ID: {
                    title: 'ID'
                },
                Booking_Id: {
                    title: 'Booking ID'
                },
                Booking_Date: {
                    title: 'Booking Date'
                },
                Hotel_Name: {
                    title: 'Hotel Name'
                },
                Pax_Name: {
                    title: 'Pax Name'
                },
                Number_Of_Pax: {
                    title: 'No. Of Pax'
                },
                Supplier_reference: {
                    title: 'Supplier reference'
                },
                Room_type: {
                    title: 'Room type'
                },
                Number_of_rooms: {
                    title: 'Number of rooms'
                },
                Leasuremant_customer: {
                    title: 'Leasuremant customer'
                },
                Contact_number: {
                    title: 'Contact number'
                },
                Room_number: {
                    title: 'Room number'
                },
                Passenger_type: {
                    title: 'Passenger type'
                },
                Check_by_REP: {
                    title: 'Check by REP',
                    type: 'html',
                    editor: {
                        type: 'checkbox'
                    },
                    valuePrepareFunction: function (value) { return _this._sanitizer.bypassSecurityTrustHtml(_this.input); },
                    filter: false
                },
                Check_by_LC: {
                    title: 'Check by LC',
                    type: 'html',
                    editor: {
                        type: 'checkbox'
                    },
                    valuePrepareFunction: function (value) { return _this._sanitizer.bypassSecurityTrustHtml(_this.input); },
                    filter: false
                },
                // Check_by_REP: {
                //      title: 'Check by REP'
                // },
                // Check_by_LC: {
                //      title: 'Check by LC'
                // },
                Leaving_From: {
                    title: 'Leaving From'
                },
                Supplier_Arrival: {
                    title: 'Supplier'
                },
                DateTime_Arrival: {
                    title: 'Date & Time'
                },
                Terminal_Arrival: {
                    title: 'Terminal'
                },
                Car_Name_Arrival: {
                    title: 'Car Name'
                },
                Car_Transfer_Type_Arrival: {
                    title: 'Car Transfer Type'
                },
                Airline_Arrival: {
                    title: 'Airline'
                },
                FlightNo_Arrival: {
                    title: 'Flight No.'
                },
                Going_to: {
                    title: 'Going To'
                },
                Supplier_Departure: {
                    title: 'Supplier'
                },
                DateTime_Departure: {
                    title: 'Date & Time'
                },
                Terminal_Departure: {
                    title: 'Terminal'
                },
                Car_Name_Departure: {
                    title: 'Car Name'
                },
                Car_Transfer_Type_Departure: {
                    title: 'Car Transfer Type'
                },
                Airline_Departure: {
                    title: 'Airline'
                },
                FlightNo_Departure: {
                    title: 'Flight No.'
                }
            }
        };
        this.input = '<input type="checkbox">';
    }
    TravelListComponent.prototype.ngOnInit = function () {
    };
    TravelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-list',
            template: __webpack_require__(/*! ./travel-list.component.html */ "./src/app/travel-list/travel-list.component.html"),
            styles: [__webpack_require__(/*! ./travel-list.component.css */ "./src/app/travel-list/travel-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TravelListComponent);
    return TravelListComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 20px;\n}\n\n  \nh2{\n  padding-top: 20px;\n}  "

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2>Upload lists:</h2>\n<div class=\"form-group row\">\n  <label for=\"example-text-input\" class=\"col-2 col-form-label\">Upload Arrival_list</label>\n  <div class=\"col-6\">\n    <input class=\"form-control\" type=\"file\" (change)=\"onFileChange($event)\" value=\"Artisanal kale\" id=\"example-text-input\">\n  </div>\n  <button class=\"btn btn-success col-1\" >Upload</button>\n</div>\n<div class=\"form-group row\">\n  <label for=\"example-search-input\" class=\"col-2 col-form-label\">Upload Travel_list</label>\n  <div class=\"col-6\">\n    <input class=\"form-control\" type=\"file\" (change)=\"onFileChange1($event)\" value=\"How do I shoot web\" id=\"example-search-input\">\n  </div>\n  <button class=\"btn btn-success col-1\">Upload</button>\n</div>\n</div>\n\n\n<!-- <input  value=\"{{val}}\" (focus)=\"sendID(i+'-'+j)\"> -->\n<!-- <table class=\"sjs-table\">\n  <tr *ngFor=\"let row of data; let i = index\">\n    <td *ngFor=\"let val of row; let j = index\" id=\"{{i+'-'+j}}\" (click)=\"sendID(i+'-'+j)\" >\n      {{val}}\n    </td>\n  </tr>\n</table> -->\n\n\n\n\n<!-- <table class=\"sjs-table\">\n  <tr *ngFor=\"let row of data1\">\n    <td *ngFor=\"let val of row\">\n      {{val}}\n    </td>\n  </tr>\n</table> -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadComponent = /** @class */ (function () {
    function UploadComponent() {
        this.wopts = { bookType: 'xlsx', type: 'array' };
        this.fileName = 'SheetJS.xlsx';
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.onFileChange = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            // , {header: 1}
            // , {header: 1, blankrows: true, range: 120, raw: true}
            _this.data = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(ws, { header: 1, raw: true });
            //  this.data = XLSX.utils.sheet_to_html(ws, {id: true, editable: 'true'})
            console.log(_this.data);
            console.log(typeof (_this.data));
            // this.createJsonArray(this.data)
        };
        reader.readAsBinaryString(target.files[0]);
    };
    // createJsonArray(data) {
    //   let len = data[0].length;
    //   for (let i = 0; i < data.length; i++) {
    //     if (len < data[i].length) {
    //       len = data[i].length;
    //     }
    //   }
    //   for (let i = 0; i < data.length; i++) {
    //          for (let j = data[i].length; j < len; j++) {
    //               data[i][j] = '';
    //     }
    //   }
    //   console.log(len)
    // }
    // sendID(params) {
    //   console.log(params)
    // }
    UploadComponent.prototype.onFileChange1 = function (evt) {
        var _this = this;
        /* wire up file reader */
        var target = (evt.target);
        if (target.files.length !== 1)
            throw new Error('Cannot use multiple files');
        var reader = new FileReader();
        reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["read"](bstr, { type: 'binary' });
            /* grab first sheet */
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */
            _this.data1 = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].sheet_to_json(ws, { header: 1 });
            console.log(_this.data1);
            console.log(typeof (_this.data1));
        };
        reader.readAsBinaryString(target.files[0]);
    };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    position: fixed;\n    top: 42%;\n    left: 42%;\n    /* color: white; */\n}\n\ndiv {\n    background-image: url('background.jpg');\n    /* background-repeat: repeat-x; */\n    height:95vh;\n}"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<h1>خوش آمدید به صفحه اصلی</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dev6/Documents/MiniCS/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map