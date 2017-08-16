webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n  \n  .title {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 1rem;\n    background-color: #5F298C;\n    color: white;\n  }\n  .title-h1 {\n    font-weight: 300;\n    font-size: 3rem;\n    margin: 1rem;\n  }\n  .title-logo {\n    height: 8rem;\n    \n    border-radius: 1rem;\n    margin: 1rem;\n  }\n  .title-h2 {\n    font-weight: 300;\n    font-size: 2rem;\n    margin: .5rem;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"page-header title\">\n  <h1 class=\"title-h1\">Kichink Export Products</h1>\n  <div>\n    <img class=\"title-logo\" src=\"assets/img/header_kichink.png\"/>    \n  </div>\n  <h1 class=\"title-h2\">You can export your Kichink products to a CSV file if you want to create a backup, move your existing products to a different Store manager, edit your products in bulk using a spreadsheet, or Upload Your Product Catalog to Facebook</h1>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <br>\n    <br>\n    <br>\n  </div>\n  <div class=\"row\">\n    <h4>Export Products</h4>\n  </div>\n  <div class=\"row\">\n      <div *ngIf=objLoaderStatus style=\"position:absolute; z-index:0; width: 100%;\">\n          <div style=\"vertical-align:middle; text-align:center; width: 100%;\">\n              <img src=\"assets/img/Spinner.svg\" alt=\"\">\n          </div>\n        \n      </div>\n    <form [formGroup]=\"exportForm\" (ngSubmit)=\"export()\" novalidate>\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Kichink Store ID (Example: 80722)</label>\n            <br>\n            <img src=\"assets/img/example.png\" alt=\"\">\n            <br>\n            <input type=\"number\" class=\"form-control\" id=\"store_id\" aria-describedby=\"storeIdHelp\" formControlName=\"store_id\" required placeholder=\"Kichink Store ID\">\n            <small id=\"storeIdHelp\" class=\"form-text text-muted\">We'll not store your ID or any Product, all the processing happen on your browser.</small>\n          </div>\n         \n          <p>Export your products as a:\n          <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" checked>\n                CSV for Excel, Numbers and other spreadsheet programs. (Facebook Product Catalog Fields <a href=\"https://www.facebook.com/business/help/1397294963910848\" target=\"_blank\">more info..</a>).\n              </label>\n            </div>\n            \n            \n          <button type=\"submit\" [disabled]=\"exportForm.pristine||objLoaderStatus\" class=\"btn btn-success\">\n              \n            Export Products</button>\n\n\n          \n    </form>\n          \n        \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__export_service__ = __webpack_require__("../../../../../src/app/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(fb, exportService) {
        this.fb = fb;
        this.exportService = exportService;
        this.title = 'app';
        this.objLoaderStatus = false;
        this.createForm();
    }
    AppComponent.prototype.createForm = function () {
        this.exportForm = this.fb.group({
            store_id: ''
        });
    };
    AppComponent.prototype.export = function () {
        var _this = this;
        var products = [];
        this.objLoaderStatus = true;
        this.exportService.exportProducts(this.exportForm.value['store_id'])
            .then(function (result) {
            _this.objLoaderStatus = false;
            result.data.forEach(function (element) {
                var product_type = '';
                element.categories.forEach(function (category) {
                    var separator = '';
                    if (product_type !== '') {
                        separator = ' > ';
                    }
                    product_type = product_type + separator + category.name;
                });
                var product = {
                    'id': element.id,
                    'title': element.name,
                    'ios_url': '',
                    'ios_app_store_id': '',
                    'ios_app_name': '',
                    'android_url': '',
                    'android_package': '',
                    'android_app_name': '',
                    'windows_phone_url': '',
                    'windows_phone_app_id': '',
                    'windows_phone_app_name': '',
                    'description': element.description,
                    'google_product_category': product_type,
                    'product_type': product_type,
                    'link': 'https://www.kichink.com/buy/' + element.id + '/',
                    'image_link': element.images[0].bordered,
                    'condition': (element.new_item === '1') ? 'new' : 'used',
                    'availability': 'in stock',
                    'price': element.price + 'MXN',
                    'sale_price': (element.price - element.discount_price) + 'MXN',
                    'sale_price_effective_date': '',
                    'gtin': '',
                    'brand': element.storeUrl,
                    'mpn': '',
                    'item_group_id': '',
                    'gender': '',
                    'age_group': '',
                    'color': '',
                    'size': '',
                    'shipping': '',
                };
                products.push(product);
            });
            var headers = [
                'id',
                'title',
                'ios_url',
                'ios_app_store_id',
                'ios_app_name',
                'android_url',
                'android_package',
                'android_app_name',
                'windows_phone_url',
                'windows_phone_app_id',
                'windows_phone_app_name',
                'description',
                'google_product_category',
                'product_type',
                'link',
                'image_link',
                'condition',
                'availability',
                'price',
                'sale_price',
                'sale_price_effective_date',
                'gtin',
                'brand',
                'mpn',
                'item_group_id',
                'gender',
                'age_group',
                'color',
                'size',
                'shipping',
            ];
            var options = {
                fieldSeparator: ',',
                quoteStrings: '"',
                decimalseparator: '.',
                showLabels: true,
                showTitle: false,
                useBom: false,
                headers: headers
            };
            var file = new __WEBPACK_IMPORTED_MODULE_3_angular2_csv_Angular2_csv__["Angular2Csv"](products, 'Kichink Products', options);
        })
            .catch(function (error) { return console.log(error); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__export_service__["a" /* ExportService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__export_service__["a" /* ExportService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__export_service__ = __webpack_require__("../../../../../src/app/export.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- #1 import module



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__export_service__["a" /* ExportService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/export.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExportService = (function () {
    function ExportService(http) {
        this.http = http;
        this.kichinkApiUrl = 'https://api.kichink.com//kore/store/items'; // URL to web api
    }
    ExportService.prototype.exportProducts = function (store_id) {
        var body = new URLSearchParams();
        body.set('limit', '10000');
        body.set('cat_id', '');
        body.set('page', '1');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            /*
            'Origin': 'https://www.kichink.com',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'es-MX,es;q=0.8,es-419;q=0.6,en;q=0.4',
            */
            'X-STORE-ID': store_id,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
        });
        return this.http.post(this.kichinkApiUrl, body.toString(), { headers: headers })
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    ExportService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ExportService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return ExportService;
}());
ExportService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ExportService);

var _a;
//# sourceMappingURL=export.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map