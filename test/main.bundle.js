webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-background-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return moneyStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return orders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return amounts; });
/* unused harmony export updateFire */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



;
var products = [
    {
        id: 1,
        name: 'товар 1',
        price: 4,
        amount: 15
    },
    {
        id: 2,
        name: 'товар 2',
        price: 7,
        amount: 5
    }
];
;
var moneyStream = [
    {
        id: 1,
        date: new Date(2018, 0, 1, 0, 0, 0, 0),
        name: 'прибыль от продажи',
        income: 100
    },
    {
        id: 2,
        date: new Date(2018, 0, 2, 0, 0, 0, 0),
        name: 'выплата зарплат',
        income: -50
    }
];
var orders = [
    {
        id: 1,
        date: new Date(2018, 0, 1, 0, 0, 0, 0),
        products: { 1: 2 }
    },
    {
        id: 2,
        date: new Date(),
        products: { 1: 1, 2: 3 }
    }
];
var amounts = {
    products: 2,
    moneyStream: 2,
    orders: 2,
};
//export let crmDoc : AngularFirestoreDocument<FireCrm>;
//export let crm : Observable<FireCrm>;
var updateFire = function () {
};
/*
export let updateFire = (): void => {
  crmDoc.update({
    products : products,
    amounts : amounts,
    orders : orders,
    moneyStream : moneyStream
  });
}*/
var AppComponent = /** @class */ (function () {
    function AppComponent(afs) {
        this.afs = afs;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.crmDoc = this.afs.doc('crm/2O6FeLOoFWUtbdOkJDWR');
        this.crm = this.crmDoc.valueChanges();
        //console.log(products);
        // this.updateFire();
        console.log(this.crm);
        /*
        this.sub = this.crm.subscribe(elem => {
          products = elem.products;
          orders = elem.orders;
          moneyStream = elem.moneyStream;
          amounts = elem.amounts;
        });
        */
        this.updateFire();
    };
    AppComponent.prototype.updateFire = function () {
        var _this = this;
        setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.crmDoc.set({
                        products: products,
                        amounts: amounts,
                        orders: orders,
                        moneyStream: moneyStream
                    })];
            });
        }); }, 2000);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__ = __webpack_require__("./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_module__ = __webpack_require__("./src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_navbar_navbar_module__ = __webpack_require__("./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_service_component__ = __webpack_require__("./src/app/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stats_stats_component__ = __webpack_require__("./src/app/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cashbox_cashbox_component__ = __webpack_require__("./src/app/cashbox/cashbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__storage_storage_component__ = __webpack_require__("./src/app/storage/storage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__feedback_feedback_component__ = __webpack_require__("./src/app/feedback/feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_datatables__ = __webpack_require__("./node_modules/angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts__ = __webpack_require__("./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var firebaseConfig = {
    apiKey: "AIzaSyDvesSHD6cQ-jXKENOc3wbDCP4pAbNObjY",
    authDomain: "monger-crm.firebaseapp.com",
    databaseURL: "https://monger-crm.firebaseio.com",
    projectId: "monger-crm",
    storageBucket: "monger-crm.appspot.com",
    messagingSenderId: "217864887577"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__service_service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_11__stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__cashbox_cashbox_component__["a" /* CashboxComponent */],
                __WEBPACK_IMPORTED_MODULE_13__storage_storage_component__["a" /* StorageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__feedback_feedback_component__["a" /* FeedbackComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular_datatables__["a" /* DataTablesModule */],
                __WEBPACK_IMPORTED_MODULE_19__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_18__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_service_component__ = __webpack_require__("./src/app/service/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_stats_component__ = __webpack_require__("./src/app/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cashbox_cashbox_component__ = __webpack_require__("./src/app/cashbox/cashbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__storage_storage_component__ = __webpack_require__("./src/app/storage/storage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feedback_feedback_component__ = __webpack_require__("./src/app/feedback/feedback.component.ts");






var AppRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'service',
        component: __WEBPACK_IMPORTED_MODULE_1__service_service_component__["a" /* ServiceComponent */]
    },
    {
        path: 'stats',
        component: __WEBPACK_IMPORTED_MODULE_2__stats_stats_component__["a" /* StatsComponent */]
    },
    {
        path: 'cashbox',
        component: __WEBPACK_IMPORTED_MODULE_3__cashbox_cashbox_component__["a" /* CashboxComponent */]
    },
    {
        path: 'storage',
        component: __WEBPACK_IMPORTED_MODULE_4__storage_storage_component__["a" /* StorageComponent */]
    },
    {
        path: 'feedback',
        component: __WEBPACK_IMPORTED_MODULE_5__feedback_feedback_component__["a" /* FeedbackComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a" /* DashboardComponent */]
    }
];


/***/ }),

/***/ "./src/app/cashbox/cashbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <form [formGroup]=\"CashboxForm\">\n            <div id='new_product'>\n                <p>Новая операция:</p>\n            </div>\n            \n            <div class=\"col-lg-3 col-sm-6\" *ngFor=\"let elem of CashboxFormInfo; let i = index\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\" >\n                            <div class=\"col-xs-12\">\n                                <div>\n                                    <p>{{elem.name}}</p>\n                                </div>\n                                <div class=\"form-group has-success\">     \n                                    <input type=\"{{i ? 'number' : 'text'}}\" value=\"\" class=\"form-control\" formControlName=\"{{elem.controlName}}\"/>\n                                </div>\n                                <div *ngIf=\"isControlInvalid(CashboxForm,elem.controlName)\" class=\"card table-danger\"> \n                                    <p>{{elem.wrongMes}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            <div class=\"col-lg-4 col-sm-6\">\n                <div class=\"card\" (click)='addNewOperation()'>\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-warning text-center\">\n                                    <i class=\"ti-arrow-circle-up\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div>\n                                    <p>Добавить товар</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n                \n    \n    <div class=\"row\">\n        <div class=\"col-lg-12 col-sm-6\">\n            <div class=\"card\">\n                <div class=\"content\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <div>\n                                <p>Расходы и доходы: </p>\n                            </div>\n                            <table datatable class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th *ngFor=\"let cell of cashboxTable.headerRow\">{{ cell }}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let row of cashboxTable.dataRows\">\n                                       <td [class.table-danger]=\"row.income < 0\" [class.table-success]=\"row.income > 0\">{{row.id}}</td>\n                                       <td [class.table-danger]=\"row.income < 0\" [class.table-success]=\"row.income > 0\">{{row.date}}</td>\n                                       <td [class.table-danger]=\"row.income < 0\" [class.table-success]=\"row.income > 0\">{{row.name}}</td>\n                                       <td [class.table-danger]=\"row.income < 0\" [class.table-success]=\"row.income > 0\">{{row.income}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            <p>Доходы: {{income}} р. | Расходы: {{expense}} р. | Прибыль: {{income - expense}} р.</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cashbox/cashbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CashboxComponent = /** @class */ (function () {
    function CashboxComponent(fb) {
        this.fb = fb;
        this.statusesWrong = false;
        this.CashboxFormInfo = [
            {
                name: 'Название операции',
                controlName: 'name',
                wrongMes: 'Задано пустое имя'
            },
            {
                name: 'Изменение баланса',
                controlName: 'income',
                wrongMes: 'введено некорректно'
            }
        ];
        this.moneyStream = __WEBPACK_IMPORTED_MODULE_2__app_component__["c" /* moneyStream */];
        this.income = 0;
        this.expense = 0;
    }
    CashboxComponent.prototype.initForm = function () {
        this.CashboxForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            income: [null]
        });
    };
    CashboxComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.cashboxTable = {
            headerRow: ['#', 'дата', 'Операция', 'Баланс'],
            dataRows: __WEBPACK_IMPORTED_MODULE_2__app_component__["c" /* moneyStream */]
        };
        for (var _i = 0, _a = this.cashboxTable.dataRows; _i < _a.length; _i++) {
            var elem = _a[_i];
            if (elem.income > 0) {
                this.income += elem.income;
            }
            else {
                this.expense += -(elem.income);
            }
        }
    };
    ;
    CashboxComponent.prototype.isControlInvalid = function (form, controlName) {
        var control = form.controls[controlName];
        var result = control.invalid && control.touched;
        return result;
    };
    CashboxComponent.prototype.addNewOperation = function () {
        __WEBPACK_IMPORTED_MODULE_2__app_component__["c" /* moneyStream */].push({
            id: ++__WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* amounts */]['moneyStream'],
            date: new Date(),
            name: this.CashboxForm.value.name,
            income: Number(this.CashboxForm.value.income)
        });
        if (Number(this.CashboxForm.value.income) > 0) {
            this.income += Number(this.CashboxForm.value.income);
        }
        else {
            this.expense += -(Number(this.CashboxForm.value.income));
        }
        this.CashboxForm.setValue({
            name: [''],
            income: [null]
        });
    };
    ;
    CashboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cashbox-cmp',
            moduleId: module.i,
            template: __webpack_require__("./src/app/cashbox/cashbox.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], CashboxComponent);
    return CashboxComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-sm-6\" *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\">\n            <div class=\"card\" >\n                <a [routerLink]=\"[menuItem.path]\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"{{menuItem.iconClass}}\">\n                                    <i class=\"{{menuItem.icon}}\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div class=\"numbers\">\n                                    <p class='text-dark'>{{menuItem.title}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"header\">\n                    <h4 class=\"title\">Статистика продаж</h4>\n                    <p class=\"category\">последние 24 часа</p>\n                </div>\n                <div class=\"content\">\n                    <div id=\"chartHours\" class=\"ct-chart\"></div>\n                    <div class=\"footer\">\n                        <div class=\"chart-legend\">\n                            <i class=\"fa fa-circle text-info\"></i> Покупатели\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var iconClasses = [
    'icon-big icon-warning text-center',
    'icon-big icon-success text-center',
    'icon-big icon-danger text-center',
    'icon-big icon-info text-center'
];
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.menuItems = [];
    }
    DashboardComponent.prototype.ordersFromToday = function () {
        var now = new Date();
        var outAmount = [0, 0, 0, 0, 0, 0]; // 9-12-15-18-21-24
        __WEBPACK_IMPORTED_MODULE_3__app_component__["d" /* orders */].forEach(function (elem) {
            if (Number(now) - Number(elem.date) < 86400000) { // from the last day 
                var hour = elem.date.getHours();
                if (hour <= 16) { // 9-12-15
                    if (hour >= 14) {
                        outAmount[2]++;
                    }
                    else if (hour >= 11) {
                        outAmount[1]++;
                    }
                    else {
                        outAmount[0]++;
                    }
                }
                else { // 18-21-24
                    if (hour <= 19) {
                        outAmount[3]++;
                    }
                    else if (hour <= 22) {
                        outAmount[4]++;
                    }
                    else {
                        outAmount[5]++;
                    }
                }
            }
        });
        outAmount['total'] = outAmount.reduce(function (sum, elem) {
            return sum + elem;
        });
        return outAmount;
    };
    DashboardComponent.prototype.menuCreating = function () {
        for (var i = 1; i < __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* ROUTES */].length - 1; i++) {
            this.menuItems[i - 1] = {
                iconClass: iconClasses[i - 1],
                icon: __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* ROUTES */][i].icon,
                path: '../' + __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* ROUTES */][i].path,
                title: __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* ROUTES */][i].title
            };
        }
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.menuCreating();
        var dataSales = {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM'],
            series: [
                this.ordersFromToday()
            ]
        };
        var optionsSales = {
            low: 0,
            high: (this.ordersFromToday())['total'] + 5,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };
        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartHours', dataSales, optionsSales, responsiveSales);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-cmp',
            moduleId: module.i,
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <p>Если у вас возникли какие-либо вопросы или пожелания, оставьте их в данной форме</p>\n        <textarea class=\"form-control\" rows=\"10\"></textarea>\n        <p>Ваш e-mail для обратной связи: </p>\n        <div class=\"form-group\">\n            <input type=\"text\" value=\"\" placeholder=\"e-mail\" class=\"form-control\" />\n        </div>\n        <button class=\"btn btn-success\">Отправить</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent() {
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'feedback-cmp',
            moduleId: module.i,
            template: __webpack_require__("./src/app/feedback/feedback.component.html")
        })
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/service/service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"row\">\n        \n        <div class=\"col-lg-12 col-sm-6\">\n            <div class=\"card\">\n                <div class=\"content\">\n                    <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                            <div>\n                                <p>Итоговая сумма заказа: {{sumOfOrder}} руб.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngFor=\"let product of products\">\n            <div class=\"col-lg-3 col-sm-6\" *ngIf=\"product.id\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-12\">\n                                <label>Артикул: </label>\n                                <label #artikul>{{product.id}}</label>\n                                <div class=\"text-center\" #name>\n                                    <h3 class=\"bg-success\">{{product.name}}</h3>\n                                    <label> Остаток:</label>\n                                    <label>{{product.amount}}</label>\n                                    <label>| Цена:</label>\n                                    <label>{{product.price}}</label>\n                                    <label> р.</label>\n                                \n                                    <div>\n                                        <button class=\"btn btn-danger\" (click)='minusProduct(artikul)'>Убрать</button>\n                                        <button class=\"btn btn-success\" (click)='plusProduct(artikul)'>Добавить</button>\n                                    </div> \n                                </div>                           \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n         </div>\n    </div>\n\n    <div class=\"card\">\n            <div class=\"content\">\n                <h3>Заказ: </h3>\n            </div>\n\n            <div class=\"content table-responsive\">\n                <table class=\"table table-striped\">\n                    <tbody>\n                        <tr>\n                            <th>Товар</th>\n                            <th>Количество в заказе</th>\n                            <th>Цена</th>\n                        </tr>\n                        <tr *ngFor=\"let row of productsInOrder; let i = index\">\n                            <td *ngIf=\"row\">{{ products[i].name }}</td>\n                            <td *ngIf=\"row\">{{ row }}</td>\n                            <td *ngIf=\"row\">{{ row * products[i].price }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n               <div class=\"content\">\n                    <p>\n                        Итого: {{sumOfOrder}} р. | Посетитель платит: <input type=\"number\" id=\"oddMoney\" [(ngModel)]=\"moneyOfCustomer\" > р. | Сдача: {{moneyOfCustomer - sumOfOrder}} р.\n                    </p>\n                   \n                    <button class=\"btn btn-success btn-lg\" (click)=\"order()\">Оформить заказ</button>\n                    \n                    <button class=\"btn btn-danger btn-lg\" (click)=\"cancel()\">Отменить заказ</button>\n               </div>\n            </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/service/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
        this.products = __WEBPACK_IMPORTED_MODULE_1__app_component__["e" /* products */];
        this.sumOfOrder = 0;
        this.moneyOfCustomer = 0;
        this.productsInOrder = []; // productsInOrder[id_товара] = кол-во товара
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent.prototype.minusProduct = function (artikul) {
        var idInList = Number(artikul.innerHTML) - 1;
        if (this.productsInOrder[idInList] > 0) {
            this.productsInOrder[idInList]--;
            this.sumOfOrder -= __WEBPACK_IMPORTED_MODULE_1__app_component__["e" /* products */][idInList].price;
            __WEBPACK_IMPORTED_MODULE_1__app_component__["e" /* products */][idInList].amount++;
        }
    };
    ServiceComponent.prototype.plusProduct = function (artikul) {
        var idInList = Number(artikul.innerHTML) - 1;
        if (__WEBPACK_IMPORTED_MODULE_1__app_component__["e" /* products */][idInList].amount > 0) { // если кол-во товара > 0
            __WEBPACK_IMPORTED_MODULE_1__app_component__["e" /* products */][idInList].amount--;
            this.sumOfOrder += __WEBPACK_IMPORTED_MODULE_1__app_component__["e" /* products */][idInList].price; // прибавляем к сумме заказа
            if (this.productsInOrder[idInList] === undefined) {
                this.productsInOrder[idInList] = 1;
            }
            else {
                this.productsInOrder[idInList] += 1;
            }
            //updateFire();
            //console.log(this.productsInOrder);
        }
        //console.log(elem.children[0].innerHTML);
    };
    ServiceComponent.prototype.order = function () {
        // заказ
        var soldProducts = new Object();
        for (var i = 0; i < this.productsInOrder.length; i++) {
            if (this.productsInOrder[i]) {
                soldProducts[i + 1] = this.productsInOrder[i];
            }
        }
        __WEBPACK_IMPORTED_MODULE_1__app_component__["d" /* orders */].push({
            id: ++__WEBPACK_IMPORTED_MODULE_1__app_component__["b" /* amounts */]['orders'],
            date: new Date(),
            products: soldProducts
        });
        // денежная операция
        __WEBPACK_IMPORTED_MODULE_1__app_component__["c" /* moneyStream */].push({
            id: ++__WEBPACK_IMPORTED_MODULE_1__app_component__["b" /* amounts */]['moneyStream'],
            date: new Date(),
            name: 'Заказ #' + __WEBPACK_IMPORTED_MODULE_1__app_component__["b" /* amounts */]['orders'],
            income: this.sumOfOrder
        });
        //updateFire();
        // готовимся к следующему заказу
        this.sumOfOrder = 0;
        this.productsInOrder = [];
        this.moneyOfCustomer = 0;
    };
    ServiceComponent.prototype.cancel = function () {
        this.productsInOrder.forEach(function (elem, index) {
            __WEBPACK_IMPORTED_MODULE_1__app_component__["e" /* products */][index][3] += elem;
        });
        //updateFire();
        this.productsInOrder = [];
        this.sumOfOrder = 0;
        this.moneyOfCustomer = 0;
    };
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'service-cmp',
            moduleId: module.i,
            template: __webpack_require__("./src/app/service/service.component.html")
        })
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <div class=\"copyright pull-right\">\n             <a href=\"http://github.com/marsibarsi\">Roman Sedov Github</a>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'footer-cmp',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar bar1\"></span>\n                <span class=\"icon-bar bar2\"></span>\n                <span class=\"icon-bar bar3\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = window.location.pathname;
        titlee = titlee.substring(1);
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'navbar-cmp',
            template: __webpack_require__("./src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar-wrapper\">\n    <div class=\"logo\">\n        <a href=\"../index.html\" class=\"simple-text\">\n            Monger CRM\n        </a>\n    </div>\n    <ul class=\"nav\">\n        <li class=\"divider\" *ngIf=\"isNotMobileMenu()\"></li>\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"{{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ROUTES = [
    { path: 'dashboard', title: 'Главная', icon: 'ti-panel', class: '' },
    { path: 'service', title: 'Принять заказ', icon: 'ti-receipt', class: '' },
    { path: 'storage', title: 'Склад', icon: 'ti-layout-grid3-alt', class: '' },
    { path: 'stats', title: 'Статистика', icon: 'ti-stats-up', class: '' },
    { path: 'cashbox', title: 'Касса', icon: 'ti-money', class: '' },
    { path: 'feedback', title: 'Сообщить об ошибке', icon: 'ti-headphone-alt', class: 'feedback' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'sidebar-cmp',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Самые продаваемые товары</h4>        \n                    </div>\n                    <ngx-charts-advanced-pie-chart\n                        [view]=\"view\"\n                        [scheme]=\"colorScheme\"\n                        [results]=\"data\"\n                        [gradient]=\"gradient\"\n                        (select)=\"onSelect($event)\">\n                    </ngx-charts-advanced-pie-chart>\n                </div>\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h4 class=\"title\">Общая статистика</h4>        \n                    </div>\n                    <div class=\"content\">\n                        <div *ngFor=\"let elem of wholeStatistics\">\n                            <div class=\"card col-md-3\">\n                                <div class=\"text-center\">\n                                    <p>{{elem['mes']}}</p>\n                                </div>\n                                <h3 class=\"text-right\">{{elem['value']}}</h3>\n                            </div>\n                            <div class=\"card col-md-1\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n\n        <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"header\">\n                            <h4 class=\"title\">График прибыли</h4>\n                        </div>\n                        <div class=\"content\">\n                            <div id=\"chartMoney\" class=\"ct-chart\"></div>\n                            <div class=\"footer\">\n                                <div class=\"chart-legend\">\n                                    <i class=\"fa fa-circle text-info\"></i>Баланс\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export data */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var data = [];
var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
        this.wholeStatistics = [
            {
                mes: 'Всего заказов завершено',
                value: __WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* amounts */]['orders']
            },
            {
                mes: 'Всего операций выполнено',
                value: __WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* amounts */]['moneyStream']
            },
            {
                mes: 'Типов товаров',
                value: __WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* amounts */]['products']
            }
        ];
        this.view = [$(this).parent().width(), $(this).parent().height()];
        this.colorScheme = {
            domain: ['#7fb5b5', '#6dae81', '#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#ffcc00', '#ffad99', '#77d4c4']
        };
        Object.assign(this, { data: data });
    }
    StatsComponent.prototype.onSelect = function (event) {
        //console.log(event);
    };
    StatsComponent.prototype.selectStatistics = function () {
        var arrayOfProducts = [];
        __WEBPACK_IMPORTED_MODULE_2__app_component__["d" /* orders */].forEach(function (elem) {
            for (var key in elem.products) {
                if (arrayOfProducts[Number(key)]) {
                    arrayOfProducts[Number(key)] += Number(elem.products[key]);
                }
                else {
                    arrayOfProducts[Number(key)] = Number(elem.products[key]);
                }
            }
        });
        var i = 0;
        console.log(arrayOfProducts);
        arrayOfProducts.forEach(function (elem, index) {
            data[i] = {
                name: __WEBPACK_IMPORTED_MODULE_2__app_component__["e" /* products */][index - 1].name,
                value: elem
            };
            i++;
        });
    };
    StatsComponent.prototype.getMainProfit = function () {
        var finalObject = {
            labels: [],
            series: [
                []
            ],
            min: 0,
            max: 0
        };
        //console.log(moneyStream);
        finalObject.series[0][-1] = 0; // for the first iteration
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__app_component__["c" /* moneyStream */].length; i++) {
            finalObject.labels.push(__WEBPACK_IMPORTED_MODULE_2__app_component__["c" /* moneyStream */][i].income);
            finalObject.series[0].push(finalObject.series[0][i - 1] + __WEBPACK_IMPORTED_MODULE_2__app_component__["c" /* moneyStream */][i].income);
            if (finalObject.series[0][i] < finalObject.min) {
                finalObject.min = finalObject.series[0][i];
            }
            if (finalObject.series[0][i] > finalObject.max) {
                finalObject.max = finalObject.series[0][i];
            }
        }
        if (finalObject.labels.length > 40) {
            for (var i = 0; i < finalObject.labels.length; i++) {
                finalObject.labels[i] = '';
            }
        }
        //console.log(finalObject);
        return finalObject;
    };
    StatsComponent.prototype.ngOnInit = function () {
        this.selectStatistics();
        var dataMoneyStream = this.getMainProfit();
        var optionsMoneyStream = {
            low: this.getMainProfit().min - 5,
            high: this.getMainProfit().max + 5,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].simple({
                divisor: 3
            }),
            showLine: true,
            showPoint: false,
        };
        var responsiveMoneyStream = [
            ['screen and (max-width: 640px)', {
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#chartMoney', dataMoneyStream, optionsMoneyStream, responsiveMoneyStream);
    };
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'stats-cmp',
            moduleId: module.i,
            template: __webpack_require__("./src/app/stats/stats.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/app/storage/storage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <form [formGroup]=\"newProductForm\">\n            <div id='new_product'>\n                <p>Новый товар:</p>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\" *ngFor=\"let elem of addFormInfo; let i = index\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\" >\n                            <div class=\"col-xs-12\">\n                                <div>\n                                    <p>{{elem.name}}</p>\n                                </div>\n                                <div class=\"form-group has-success\">     \n                                    <input type=\"{{addFieldType(i)}}\" value=\"\" class=\"form-control\" formControlName=\"{{elem.controlName}}\"/>\n                                </div>\n                                <div *ngIf=\"isControlInvalid(newProductForm,elem.controlName)\" class=\"card table-danger\"> \n                                    <p>{{elem.wrongMes}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n               \n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\" (click)='addNewProduct()'>\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-warning text-center\">\n                                    <i class=\"ti-arrow-circle-up\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div>\n                                    <p>Добавить товар</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"row\">\n        <form [formGroup]=\"changeProductForm\">\n            <div id='new_product'>\n                <p>Изменить товар:</p>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\" *ngFor=\"let elem of changeFormInfo\">\n                <div class=\"card\">\n                    <div class=\"content\">\n                        <div class=\"row\" >\n                            <div class=\"col-xs-12\">\n                                <div>\n                                    <p>{{elem.name}}</p>\n                                </div>\n                                <div class=\"form-group has-success\">     \n                                    <input type=\"number\" value=\"\" class=\"form-control\" formControlName=\"{{elem.controlName}}\"/>\n                                </div>\n                                <div *ngIf=\"isControlInvalid(changeProductForm,elem.controlName)\" class=\"card table-danger\"> \n                                    <p>{{elem.wrongMes}}</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"card\" (click)='changeProduct()'>\n                    <div class=\"content\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-5\">\n                                <div class=\"icon-big icon-info text-center\">\n                                    <i class=\"ti-pencil-alt\"></i>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-7\">\n                                <div>\n                                    <p>Изменить товар</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div id='new_product'>\n        <p>Склад:</p>\n    </div>\n    <div class=\"card\">\n        <div class=\"content table-responsive\">\n            <table datatable class=\"table table-striped\">\n                <thead>\n                    <tr>\n                        <th *ngFor=\"let cell of storageTable.headerRow\">{{ cell }}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let row of storageTable.dataRows; let i = index\">\n                        <ng-container *ngIf=\"row.id\">\n                                <td >{{row.id}}</td>\n                                <td >{{row.name}}</td>\n                                <td >{{row.price}}</td>\n                                <td >{{row.amount}}</td>\n                                <td > <button class=\"btn btn-danger\" (click)='deleteProduct(i)'>Удалить</button></td>\n                        </ng-container>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/storage/storage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StorageComponent = /** @class */ (function () {
    function StorageComponent(fb) {
        this.fb = fb;
        this.addFormInfo = [
            {
                name: 'Имя товара',
                controlName: 'name',
                wrongMes: 'Задано пустое имя'
            },
            {
                name: 'Стоимость',
                controlName: 'price',
                wrongMes: 'стоимость не может быть отрицательной'
            },
            {
                name: 'Количество',
                controlName: 'amount',
                wrongMes: 'количество не может быть отрицательным'
            },
        ];
        this.changeFormInfo = [
            {
                name: 'Артикул товара',
                controlName: 'id',
                wrongMes: 'Артикул задан некорректно'
            },
            {
                name: 'Новая стоимость',
                controlName: 'newPrice',
                wrongMes: 'стоимость не может быть отрицательной'
            },
            {
                name: 'Новое количество',
                controlName: 'newAmount',
                wrongMes: 'количество не может быть отрицательным'
            },
        ];
    }
    StorageComponent.prototype.initForm = function () {
        this.newProductForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required]],
            price: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]],
            amount: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]]
        });
        this.changeProductForm = this.fb.group({
            id: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].max(__WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* amounts */].products)]],
            newPrice: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]],
            newAmount: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].min(0)]]
        });
    };
    StorageComponent.prototype.isControlInvalid = function (form, controlName) {
        var control = form.controls[controlName];
        console.log(form.controls[controlName]);
        var result = control.invalid && control.touched;
        return result;
    };
    StorageComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.storageTable = {
            headerRow: ['Артикул', 'Название товара', 'Стоимость', 'Остаток', ''],
            dataRows: __WEBPACK_IMPORTED_MODULE_2__app_component__["e" /* products */]
        };
    };
    ;
    StorageComponent.prototype.addNewProduct = function () {
        __WEBPACK_IMPORTED_MODULE_2__app_component__["e" /* products */].push({
            id: ++__WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* amounts */]['products'],
            name: this.newProductForm.value.name,
            price: Number(this.newProductForm.value.price),
            amount: Number(this.newProductForm.value.amount)
        });
        //updateFire();
        this.newProductForm.setValue({
            name: [''],
            price: [null],
            amount: [null]
        });
    };
    StorageComponent.prototype.deleteProduct = function (indexOfProd) {
        __WEBPACK_IMPORTED_MODULE_2__app_component__["e" /* products */][indexOfProd] = {
            id: 0,
            name: 'Deleted',
            price: -1,
            amount: -1
        };
        //updateFire();
    };
    StorageComponent.prototype.changeProduct = function () {
        __WEBPACK_IMPORTED_MODULE_2__app_component__["e" /* products */][Number(this.changeProductForm.value.id - 1)].price = Number(this.changeProductForm.value.newPrice);
        __WEBPACK_IMPORTED_MODULE_2__app_component__["e" /* products */][Number(this.changeProductForm.value.id - 1)].amount = Number(this.changeProductForm.value.newAmount);
        //updateFire();
        this.changeProductForm.setValue({
            id: [null],
            newPrice: [null],
            newAmount: [null]
        });
    };
    StorageComponent.prototype.addFieldType = function (index) {
        if (index == 0) {
            return 'text';
        }
        return 'number';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], StorageComponent.prototype, "products", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StorageComponent.prototype, "amounts", void 0);
    StorageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'storage-cmp',
            moduleId: module.i,
            template: __webpack_require__("./src/app/storage/storage.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], StorageComponent);
    return StorageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map