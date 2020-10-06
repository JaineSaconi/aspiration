(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _homepage_result_result_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/result/result.component */ "./src/app/homepage/result/result.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/home/home.component */ "./src/app/homepage/home/home.component.ts");
/* harmony import */ var _homepage_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/form/form.component */ "./src/app/homepage/form/form.component.ts");
/* harmony import */ var _homepage_question_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/question/question.component */ "./src/app/homepage/question/question.component.ts");








const routes = [
    { path: '', component: _homepage_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: ':form', component: _homepage_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"] },
    { path: ':form/question', component: _homepage_question_question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"] },
    { path: ':form/question/result', component: _homepage_result_result_component__WEBPACK_IMPORTED_MODULE_0__["ResultComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'aspiration';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _homepage_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/home.module */ "./src/app/homepage/home.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _homepage_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _homepage_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _homepage_home_module__WEBPACK_IMPORTED_MODULE_0__["HomeModule"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/form/form.component.ts":
/*!*************************************************!*\
  !*** ./src/app/homepage/form/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../question/question.component */ "./src/app/homepage/question/question.component.ts");








const _c0 = ["question"];
function FormComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Para come\u00E7ar, precisamos saber o seu nome:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_0_input_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 11, 12);
} }
function FormComponent_div_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ola ", ctx_r4.nome, "! Qual a sua idade?");
} }
function FormComponent_div_0_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 13, 14);
} }
function FormComponent_div_0_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_0_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "east");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormComponent_div_0_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormComponent_div_0_input_6_Template, 2, 0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormComponent_div_0_span_8_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormComponent_div_0_input_10_Template, 2, 0, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormComponent_div_0_button_12_Template, 4, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.qst === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.qst === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.qst === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.qst === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.qst === 1 || ctx_r0.qst === 2);
} }
function FormComponent_app_question_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-question", 17);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nome", ctx_r1.nome);
} }
class FormComponent {
    constructor() {
        this.qst = 1;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
        });
    }
    ngOnInit() {
    }
    next() {
        this.nome = this.form.controls.name.value;
        this.qst++;
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], viewQuery: function FormComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.questionComponent = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "container-form", 3, "formGroup", 4, "ngIf"], [3, "nome", 4, "ngIf"], [1, "container-form", 3, "formGroup"], ["src", "assets/img/Topo.svg", 1, "img-position"], ["src", "assets/img/0aa2.png", 1, "img-bottom"], ["fxLayout", "column", 1, "format-group", 3, "formGroup"], ["class", "questions-format slide-up", 4, "ngIf"], ["formControlName", "name", "placeholder", "Digite o seu nome...", "formControlName", "name", 4, "ngIf"], ["formControlName", "name", "placeholder", "Digite sua idade...", "formControlName", "age", 4, "ngIf"], [3, "click", 4, "ngIf"], [1, "questions-format", "slide-up"], ["formControlName", "name", "placeholder", "Digite o seu nome...", "formControlName", "name"], ["name", ""], ["formControlName", "name", "placeholder", "Digite sua idade...", "formControlName", "age"], ["age", ""], [3, "click"], [1, "icon"], [3, "nome"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormComponent_div_0_Template, 13, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_app_question_1_Template, 1, 1, "app-question", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qst !== 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qst === 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _question_question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"]], styles: [".container-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  margin: 0 auto;\n  padding: 0px;\n  position: relative;\n  display: flex;\n  background: #465F5C 0% 0% no-repeat padding-box;\n}\n\n.img-position[_ngcontent-%COMP%] {\n  margin-top: 0em;\n  margin-left: 0em;\n  width: 9.6em;\n  position: fixed;\n}\n\n.img-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n\n.format-group[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20em;\n  margin-left: 2.5em;\n  position: absolute;\n}\n\n.format-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 4em;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n  letter-spacing: 0px;\n  color: #F8F7F5;\n  opacity: 1;\n}\n\n.format-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  font-size: 3.5em;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n  letter-spacing: 0px;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n  color: #F8F7F5;\n}\n\n.format-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  opacity: 0.5;\n}\n\n.format-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 72px;\n  width: 279px;\n  font-size: 38px;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n  color: #F8F7F5;\n  border: 2px solid #F8F7F5;\n  background-color: transparent;\n  margin: 1em 0;\n  align-items: center;\n}\n\n.format-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #F8F7F5;\n  color: #465F5C;\n  transition: 0.1s ease-in;\n}\n\n.icon[_ngcontent-%COMP%] {\n  height: 38px;\n  width: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0FBQUY7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQUg7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBSUEsd0JBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lci1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiAjNDY1RjVDIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG5cclxuLmltZy1wb3NpdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gICAgd2lkdGg6IDkuNmVtO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uaW1nLWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm1hdC1ncm91cCB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIG1hcmdpbi10b3A6IDIwZW07XHJcbiAgIG1hcmdpbi1sZWZ0OiAyLjVlbTtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZm9ybWF0LWdyb3VwIHNwYW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICBmb250LWZhbWlseTogJ0Z1dHVyYVBUJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0Y4RjdGNTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mb3JtYXQtZ3JvdXAgaW5wdXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDMuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGdXR1cmFQVCcsICdhcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIGNvbG9yOiAjRjhGN0Y1O1xyXG59XHJcblxyXG4uZm9ybWF0LWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmZvcm1hdC1ncm91cCBidXR0b24ge1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgd2lkdGg6IDI3OXB4OztcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnV0dXJhUFQnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNGOEY3RjU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRjhGN0Y1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm1hdC1ncm91cCBidXR0b246aG92ZXIgeyAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY3RjU7XHJcbiAgICBjb2xvcjojNDY1RjVDO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XHJcbiAgICAtbW96LXRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcclxuICAgIC1vLXRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss']
            }]
    }], function () { return []; }, { questionComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['question', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/homepage/home.module.ts":
/*!*****************************************!*\
  !*** ./src/app/homepage/home.module.ts ***!
  \*****************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _result_scroll_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./result/scroll-directive */ "./src/app/homepage/result/scroll-directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./result/result.component */ "./src/app/homepage/result/result.component.ts");
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-virtual-scroller */ "./node_modules/ngx-virtual-scroller/__ivy_ngcc__/fesm2015/ngx-virtual-scroller.js");
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./question/question.component */ "./src/app/homepage/question/question.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/homepage/home/home.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form/form.component */ "./src/app/homepage/form/form.component.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");





















class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, providers: [
        _result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"],
    ], imports: [[
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_14__["VirtualScrollerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_15__["QuestionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_17__["FormComponent"], _result_scroll_directive__WEBPACK_IMPORTED_MODULE_0__["ScrollDirective"]], imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_14__["VirtualScrollerModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_18__["ScrollingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_14__["VirtualScrollerModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                ],
                declarations: [_result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_15__["QuestionComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_17__["FormComponent"], _result_scroll_directive__WEBPACK_IMPORTED_MODULE_0__["ScrollDirective"]],
                providers: [
                    _result_result_component__WEBPACK_IMPORTED_MODULE_13__["ResultComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/homepage/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/homepage/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 59, vars: 2, consts: [[1, "container-form"], ["src", "assets/img/Topo.svg", 1, "img-position"], ["src", "assets/img/0aa2.png", 1, "img-textura"], [1, "header"], [1, "nav"], ["routerLink", "/form", 1, "btn-home"], [1, "bloco-1"], [1, "small-text"], [1, "big-text"], ["routerLink", "/form", 1, "btn-home", "btn-2"], [1, "btn-saiba-mais"], [1, "bloco-2"], ["src", "assets/img/perfumes.png"], [1, "bloco-3"], ["src", "assets/img/aspiracao-verde.svg", 1, "img-aspiracao-verde"], [1, "text-branco"], [1, "footer"], ["src", "assets/img/aspiracao-branco.svg", 1, "img-aspiracao"], [1, "contato"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "cromoter\u00E1picos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Iniciar Jornada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "uma jornada pelo seu bem-estar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " produtos artesanais direto da natureza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Iniciar Jornada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Saiba mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "conhe\u00E7a o projeto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " O Aspira\u00E7\u00E3o traz uma experi\u00EAncia em aromaterapia desenvolvida exclusivamente para voc\u00EA!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " E como fazemos isso? Baseados em estudos realizados sobre a aromaterapia, foi desenvolvido um banco de dados contendo as principais respostas para cada tipo de terapia, no qual pode se recomendar um arom\u00E1tico terap\u00EAutico que auxiliar\u00E1 a pessoa em quest\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "cromoter\u00E1picos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Rua S\u00E3o Joaquim, 2156");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Vila Esperan\u00E7a Gleba 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "S\u00E3o Carlos - SP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "(16) 9 9999 9999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "contato@aspira\u00E7\u00E3o.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", 2, "em");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 134.875em;\n  display: block;\n  background: #F8F7F5;\n  position: absolute;\n}\n\n.img-position[_ngcontent-%COMP%] {\n  margin-top: 0em;\n  margin-left: 0em;\n  width: 9.75em;\n  position: absolute;\n}\n\n.img-textura[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  display: flex;\n}\n\n.nav[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n}\n\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  justify-content: right;\n  margin: 0;\n  list-style-type: none;\n  float: right;\n}\n\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  text-decoration: underline;\n  font-size: 1.31em;\n  color: #465F5C;\n  margin: 0em 2em 0 2em;\n  font-family: \"Open Sans\", \"arial\", sans-serif;\n  font-weight: bold;\n}\n\n.header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n\n.btn-home[_ngcontent-%COMP%] {\n  background-color: #465F5C;\n  height: 75px;\n  text-align: center;\n  color: white;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n  line-height: 2.188em;\n  font-size: 1.75em;\n  width: 288px;\n  border: none;\n}\n\n.bloco-1[_ngcontent-%COMP%] {\n  margin-top: 17.7em;\n  margin-left: 3.5em;\n  position: absolute;\n  width: 58.813em;\n}\n\n.bloco-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.small-text[_ngcontent-%COMP%] {\n  color: #465F5C;\n  text-align: left;\n  font: oblique normal normal 1.875em/2.375em Futura PT;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n}\n\n.big-text[_ngcontent-%COMP%] {\n  color: #465F5C;\n  text-align: left;\n  font: normal normal medium;\n  font-size: 7.5em;\n  line-height: 1em;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n}\n\n.btn-2[_ngcontent-%COMP%] {\n  margin-top: 2.5em;\n  box-shadow: 0.5em 0.5em rgba(70, 95, 92, 0.5);\n}\n\n.btn-saiba-mais[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: transparent;\n  color: #DD4737;\n  text-decoration: underline;\n  font: oblique normal 300 28px/35px Futura PT;\n  margin-top: 9.5em;\n}\n\n.bloco-2[_ngcontent-%COMP%] {\n  margin-top: 5.75em;\n  float: right;\n  margin-right: 0em;\n  height: 65.938em;\n}\n\n.bloco-3[_ngcontent-%COMP%] {\n  margin-top: -1em;\n  display: inline-flex;\n  position: relative;\n  width: 100%;\n  justify-content: space-between;\n  padding: 3.5em;\n}\n\n.img-aspiracao-fundo[_ngcontent-%COMP%] {\n  margin-left: 3.5em;\n  width: 113em;\n  margin-top: 10.375em;\n  z-index: 1;\n}\n\n.img-linhas-vermelhas[_ngcontent-%COMP%] {\n  margin-left: 10.313em;\n  z-index: 2;\n}\n\n.img-aspiracao-verde[_ngcontent-%COMP%] {\n  margin-left: 11em;\n  z-index: 3;\n}\n\n.text-branco[_ngcontent-%COMP%] {\n  display: block;\n  width: 56.5em;\n  height: 31em;\n  background-color: white;\n  margin-left: 3.5em;\n  position: relative;\n  border-radius: 1em;\n  padding: 3.438em 7.5em;\n}\n\n.text-branco[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #DD4737;\n  font-family: \"Open Sans\";\n  font-size: 2.375em;\n  font-weight: bold;\n  text-align: right;\n}\n\n.text-branco[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  text-align: left;\n  line-break: auto;\n  font-size: 1.313em;\n  line-height: 2em;\n  color: #465F5C;\n  font-family: \"Open Sans\";\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 24.375em;\n  margin-top: 8.2em;\n  padding-left: 11em;\n  padding-right: 11em;\n  background-color: #465F5C;\n  display: flex;\n  justify-content: space-between;\n}\n\n.img-aspiracao[_ngcontent-%COMP%] {\n  margin-top: 7.563em;\n  height: 9.299em;\n  width: 40.25em;\n}\n\n.footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  margin-right: 30em;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: right;\n  list-style-type: none;\n  margin-top: 6.563em;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: white;\n  font: normal normal 600;\n  font-size: 1.31em/1.75em;\n  font-weight: bold;\n  margin: 1em 0 1em 0;\n  font-family: \"Open Sans\", \"arial\", sans-serif;\n}\n\n.contato[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: right;\n  margin-top: 4.875em;\n  text-align: right;\n}\n\n.contato[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.31em/1.75em;\n  font-family: \"Open Sans\", \"arial\", sans-serif;\n  margin: 0.5em 0 0.5em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQ0EsNENBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLDZDQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUVBLDBCQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDRyxxQkFBQTtFQUNBLFVBQUE7QUFBSDs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFBSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSwwQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTM0Ljg3NWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGN0Y1OyAgICBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmltZy1wb3NpdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMGVtO1xyXG4gICAgd2lkdGg6IDkuNzVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmltZy10ZXh0dXJhIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5oZWFkZXIgdWx7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaGVhZGVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LXNpemU6IDEuMzFlbTtcclxuICAgIGNvbG9yOiAjNDY1RjVDO1xyXG4gICAgbWFyZ2luOiAwZW0gMmVtIDAgMmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG59XHJcblxyXG4uaGVhZGVyIHVsIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMmVtIDtcclxufVxyXG5cclxuLmJ0bi1ob21lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjVGNUM7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogJ0Z1dHVyYVBUJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjE4OGVtO1xyXG4gICAgZm9udC1zaXplOiAxLjc1MGVtO1xyXG4gICAgd2lkdGg6IDI4OHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYmxvY28tMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNy43ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMy41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTguODEzZW07XHJcbn1cclxuXHJcbi5ibG9jby0xIHNwYW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNtYWxsLXRleHQge1xyXG4gICAgY29sb3I6ICM0NjVGNUM7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udDogb2JsaXF1ZSBub3JtYWwgbm9ybWFsIDEuODc1ZW0vMi4zNzVlbSBGdXR1cmEgUFQ7XHJcbiAgICBmb250LWZhbWlseTogJ0Z1dHVyYVBUJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJpZy10ZXh0IHtcclxuICAgIGNvbG9yOiAjNDY1RjVDO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbWVkaXVtO1xyXG4gICAgZm9udC1zaXplOiA3LjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBmb250LWZhbWlseTogJ0Z1dHVyYVBUJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJ0bi0yIHtcclxuICAgIG1hcmdpbi10b3A6IDIuNWVtO1xyXG4gICAgYm94LXNoYWRvdzogMC41ZW0gMC41ZW0gcmdiYSg3MCwgOTUsIDkyLCAwLjUpO1xyXG59XHJcblxyXG4uYnRuLXNhaWJhLW1haXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNERDQ3Mzc7XHJcbiAgICAvL2ZvbnQtc2l6ZTogMS43NTBlbTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgZm9udDogb2JsaXF1ZSBub3JtYWwgMzAwIDI4cHgvMzVweCBGdXR1cmEgUFQ7XHJcbiAgICBtYXJnaW4tdG9wOiA5LjVlbSA7XHJcbn1cclxuXHJcbi5ibG9jby0yIHtcclxuICAgIG1hcmdpbi10b3A6IDUuNzVlbTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMGVtO1xyXG4gICAgaGVpZ2h0OiA2NS45MzhlbTtcclxufVxyXG5cclxuLmJsb2NvLTMge1xyXG4gICAgbWFyZ2luLXRvcDogLTFlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzLjVlbTtcclxufVxyXG5cclxuLmltZy1hc3BpcmFjYW8tZnVuZG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMuNWVtO1xyXG4gICAgd2lkdGg6IDExMy4wMDBlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwLjM3NWVtO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmltZy1saW5oYXMtdmVybWVsaGFzIHtcclxuICAgbWFyZ2luLWxlZnQ6MTAuMzEzZW0gO1xyXG4gICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uaW1nLWFzcGlyYWNhby12ZXJkZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTFlbTtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi50ZXh0LWJyYW5jbyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1Ni41MDBlbTtcclxuICAgIGhlaWdodDogMzFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMuNWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgcGFkZGluZzogMy40MzhlbSA3LjVlbTtcclxufVxyXG5cclxuLnRleHQtYnJhbmNvIHNwYW4ge1xyXG4gICAgY29sb3I6ICNERDQ3Mzc7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICBmb250LXNpemU6IDIuMzc1ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRleHQtYnJhbmNvIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtIDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWJyZWFrOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxLjMxM2VtO1xyXG4gICAgbGluZS1oZWlnaHQ6MmVtO1xyXG4gICAgY29sb3I6ICM0NjVGNUM7XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbn1cclxuXHJcbi5mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjQuMzc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA4LjJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMTFlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDExZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY1RjVDO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG59XHJcblxyXG4uaW1nLWFzcGlyYWNhbyB7XHJcbiAgICBtYXJnaW4tdG9wOiA3LjU2M2VtO1xyXG4gICAgaGVpZ2h0OiA5LjI5OWVtO1xyXG4gICAgd2lkdGg6IDQwLjI1MGVtO1xyXG59XHJcblxyXG4uZm9vdGVyIG5hdiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwZW07XHJcbn1cclxuXHJcbi5mb290ZXIgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNi41NjNlbTtcclxufVxyXG5cclxuLmZvb3RlciB1bCBsaXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCA2MDA7XHJcbiAgICBmb250LXNpemU6IDEuMzFlbS8xLjc1ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICBtYXJnaW46IDFlbSAwIDFlbSAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGF0byB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOiA0Ljg3NWVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jb250YXRvIHNwYW4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjMxZW0vMS43NWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/homepage/question/question.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/homepage/question/question.component.ts ***!
  \*********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../result/result.component */ "./src/app/homepage/result/result.component.ts");






function QuestionComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.nome, ", voc\u00EA tem tido");
} }
function QuestionComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dores de cabe\u00E7a por tens\u00E3o?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Com que frequ\u00EAncia voc\u00EA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sentido insonia e fadiga?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ultimamente, voce tem tido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Preocupa\u00E7\u00F5es excessivas?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.nome, ", com que frequ\u00EAncia voc\u00EA tem");
} }
function QuestionComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sentido perda de apetite?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voce tem ficado com");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "M\u00E3os e p\u00E9s frios e suados?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.nome, ", voc\u00EA tem sentindo que");
} }
function QuestionComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N\u00E3o gosta das mesmas coisas que antes?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ultimamente voc\u00EA tem achado que");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N\u00E3o consegue se divertir e dar risadas?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.nome, ", voc\u00EA tem sentido que");
} }
function QuestionComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N\u00E3o se sente alegre a maior parte do tempo? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ultimamente tem achado que");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Perdeu o interesse de cuidar da apar\u00EAncia?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voc\u00EA tem conseguido sentir prazer ao ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assistir tv, ouvir r\u00E1dio ou ler?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r20.nome, ", voc\u00EA anda tendo ");
} }
function QuestionComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dificuldade para relaxar?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Com que frequ\u00EAncia voc\u00EA tem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "tem sentido nervosismo?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r24.nome, ", voc\u00EA tem sentido que");
} }
function QuestionComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dificuldade para respirar?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Anda sentindo medo que");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Algo de ruim aconte\u00E7a?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Voc\u00EA tem sentido seu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cora\u00E7\u00E3o bater de forma estranha?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Com que frequ\u00EAncia tem sentido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dor nos m\u00FAsculos do ombro e pesco\u00E7o?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Ultimamente voce anda");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Se sentindo muito cansado?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Na sua percep\u00E7\u00E3o, voce tem tido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dificuldade de concentra\u00E7\u00E3o?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r36.nome, ", voc\u00EA tem sentido");
} }
function QuestionComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Muito sono durante o dia?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r38.nome, ", ultimamente as coisas andam te causando");
} }
function QuestionComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Muita irrita\u00E7\u00E3o?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuestionComponent_app_result_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-result", 16);
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", ctx_r40.result)("xQuestionAir", ctx_r40.xQuestionAir)("xQuestionFire", ctx_r40.xQuestionFire)("xQuestionEarth", ctx_r40.xQuestionEarth)("xQuestionWater", ctx_r40.xQuestionWater)("nome", ctx_r40.nome);
} }
class QuestionComponent {
    constructor() {
        this.question = 1;
        this.air = 0;
        this.fire = 0;
        this.water = 0;
        this.earth = 0;
        this.answerNow = 0;
        this.xQuestionAir = 0;
        this.xQuestionFire = 0;
        this.xQuestionEarth = 0;
        this.xQuestionWater = 0;
        this.result = 0;
    }
    answer(answerCliked) {
        if (this.question < 6) {
            if (this.question === 1) {
                this.xQuestionAir = answerCliked === 3 ? 4 : answerCliked;
                this.air += answerCliked === 3 ? 4 : answerCliked;
            }
            else
                this.air += answerCliked;
        }
        if (this.question > 5 && this.question < 11) {
            if (this.question === 8) {
                this.xQuestionFire = answerCliked === 3 ? 4 : answerCliked;
                this.fire += answerCliked === 3 ? 4 : answerCliked;
            }
            else
                this.fire += answerCliked;
        }
        if (this.question > 10 && this.question < 16) {
            if (this.question === 13) {
                this.xQuestionWater = answerCliked === 3 ? 4 : answerCliked;
                this.water += answerCliked === 3 ? 4 : answerCliked;
            }
            else
                this.water += answerCliked;
        }
        if (this.question > 15 && this.question < 21) {
            if (this.question === 17) {
                this.xQuestionEarth = answerCliked === 3 ? 4 : answerCliked;
                this.earth += answerCliked === 3 ? 4 : answerCliked;
            }
            else
                this.earth += answerCliked;
        }
        this.answerNow = answerCliked;
        this.question++;
        // fire = depressão
        // air = ansiedade
        // earth = cansaço
        // water = stress
        if (this.question > 20) {
            if ((this.air > this.fire) && (this.air > this.water) && (this.air > this.earth))
                this.result = 1; // ansiedade
            else if ((this.fire > this.air) && (this.fire > this.water) && (this.fire > this.earth))
                this.result = 2; // depressão
            else if ((this.water > this.fire) && (this.water > this.air) && (this.water > this.earth))
                this.result = 3; // stress
            else if ((this.earth > this.fire) && (this.earth > this.water) && (this.earth > this.air))
                this.result = 4; // cançaso
            else if ((this.water == this.air) && (this.water > this.fire) && (this.water > this.earth) && (this.air > this.fire) && (this.air > this.earth))
                this.result = 5; // stress == ansiedade
            else if ((this.water == this.earth) && (this.water > this.fire) && (this.water > this.air) && (this.earth > this.fire) && (this.earth > this.air))
                this.result = 6; // stress == cansaço
            else if ((this.fire == this.earth) && (this.fire > this.air) && (this.fire > this.water) && (this.earth > this.air) && (this.earth > this.water))
                this.result = 7; // depressão == cansaço
            else if ((this.fire == this.air) && (this.fire > this.earth) && (this.fire > this.water) && (this.air > this.earth) && (this.air > this.water))
                this.result = 8; // depressão == ansiedade
            else if ((this.fire == this.water) && (this.fire > this.earth) && (this.fire > this.air) && (this.water > this.earth) && (this.water > this.air))
                this.result = 9; // depressão  == stress
            else if ((this.air == this.earth) && (this.air > this.fire) && (this.air > this.water) && (this.earth > this.fire) && (this.earth > this.water))
                this.result = 10; // ansiedade == cansaço
            else if (this.fire == this.air && this.fire == this.water && this.fire > this.earth)
                this.result = 11; // depressão = ansiedade = stress
            else if (this.water == this.air && this.water == this.earth && this.water > this.fire)
                this.result = 12; // stress = ansiedade = cansaço
            else if (this.water == this.fire && this.water == this.earth && this.water > this.air)
                this.result = 13; // stress = depressão = cansaço
            else if (this.fire == this.air && this.fire == this.earth && this.fire > this.water)
                this.result = 14; // depressão = ansiedade = cansaço
            else if (this.fire == this.air && this.fire == this.earth && this.fire == this.water)
                this.result = 15; // stress = ansiedade = cansaço = depressão
        }
    }
    return() {
        this.question--;
        if (this.question != 0) {
            if (this.question < 6) {
                if (this.question === 1 && this.answerNow === 3)
                    this.air = this.air - 4;
                else
                    this.air = this.air === 0 ? 0 : this.air - this.answerNow;
            }
            if (this.question > 5 && this.question < 11) {
                if (this.question === 8 && this.answerNow === 3)
                    this.fire = this.fire - 4;
                else
                    this.fire = this.fire === 0 ? 0 : this.fire - this.answerNow;
            }
            if (this.question > 10 && this.question < 16) {
                if (this.question === 13 && this.answerNow === 3)
                    this.water = this.water - 4;
                else
                    this.water = this.water === 0 ? 0 : this.water - this.answerNow;
            }
            if (this.question > 15 && this.question < 21) {
                if (this.question === 17 && this.answerNow === 3)
                    this.earth = this.earth - 4;
                else
                    this.earth = this.earth === 0 ? 0 : this.earth - this.answerNow;
            }
        }
        else {
            this.question = 1;
        }
    }
}
QuestionComponent.ɵfac = function QuestionComponent_Factory(t) { return new (t || QuestionComponent)(); };
QuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionComponent, selectors: [["app-question"]], inputs: { nome: "nome" }, decls: 66, vars: 41, consts: [[1, "container-form"], ["src", "assets/img/Topo.svg", 1, "img-position"], ["src", "assets/img/0aa2.png", 1, "img-bottom"], ["src", "assets/img/FolhaCortada.svg", 1, "img-folha"], ["src", "assets/img/AScortado.svg", 1, "img-as"], ["fxLayout", "column", 1, "format-group"], ["class", "q1", 4, "ngIf"], ["class", "q2", 4, "ngIf"], [1, "btns", 3, "click"], [1, "bottom"], [1, "btn-bottom", 3, "click"], [1, "progress"], [1, "progress-bar"], [3, "result", "xQuestionAir", "xQuestionFire", "xQuestionEarth", "xQuestionWater", "nome", 4, "ngIf"], [1, "q1"], [1, "q2"], [3, "result", "xQuestionAir", "xQuestionFire", "xQuestionEarth", "xQuestionWater", "nome"]], template: function QuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuestionComponent_span_6_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuestionComponent_span_7_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuestionComponent_span_8_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuestionComponent_span_9_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuestionComponent_span_10_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuestionComponent_span_11_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuestionComponent_span_12_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuestionComponent_span_13_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, QuestionComponent_span_14_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, QuestionComponent_span_15_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QuestionComponent_span_16_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, QuestionComponent_span_17_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, QuestionComponent_span_18_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, QuestionComponent_span_19_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, QuestionComponent_span_20_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuestionComponent_span_21_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QuestionComponent_span_22_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, QuestionComponent_span_23_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QuestionComponent_span_24_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, QuestionComponent_span_25_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, QuestionComponent_span_26_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, QuestionComponent_span_27_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, QuestionComponent_span_28_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, QuestionComponent_span_29_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, QuestionComponent_span_30_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, QuestionComponent_span_31_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, QuestionComponent_span_32_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, QuestionComponent_span_33_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, QuestionComponent_span_34_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, QuestionComponent_span_35_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, QuestionComponent_span_36_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, QuestionComponent_span_37_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, QuestionComponent_span_38_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, QuestionComponent_span_39_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, QuestionComponent_span_40_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, QuestionComponent_span_41_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, QuestionComponent_span_42_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, QuestionComponent_span_43_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, QuestionComponent_span_44_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, QuestionComponent_span_45_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_button_click_47_listener() { return ctx.answer(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "quase sempre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_button_click_49_listener() { return ctx.answer(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "muitas vezes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_button_click_51_listener() { return ctx.answer(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "poucas vezes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_button_click_53_listener() { return ctx.answer(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "nunca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionComponent_Template_button_click_56_listener() { return ctx.return(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Pergunta anterior ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, QuestionComponent_app_result_65_Template, 1, 6, "app-result", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 >= ctx.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 1 >= ctx.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question === 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question == 21);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _result_result_component__WEBPACK_IMPORTED_MODULE_4__["ResultComponent"]], styles: [".container-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background: #F8F7F5;\n  position: absolute;\n}\n\n.img-position[_ngcontent-%COMP%] {\n  margin-top: 0em;\n  margin-left: 0em;\n  width: 9.6em;\n  position: fixed;\n}\n\n.img-bottom[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 50%;\n}\n\n.img-folha[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 110%;\n  position: fixed;\n}\n\n.img-as[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 110%;\n  margin-right: 0em;\n}\n\n.format-group[_ngcontent-%COMP%] {\n  margin-top: 14em;\n  margin-left: 3.5em;\n  text-align: start;\n  position: absolute;\n}\n\n.format-group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: Futura PT;\n  letter-spacing: 0px;\n  color: #465F5C;\n  opacity: 1;\n  display: block;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n}\n\n.q1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 1em;\n}\n\n.q2[_ngcontent-%COMP%] {\n  font-size: 5.625em;\n  line-height: 1em;\n}\n\n.btns[_ngcontent-%COMP%] {\n  padding: 0.5em 1.5em;\n  font-size: 1.5em;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n  color: #465F5C;\n  border: 2px solid #465F5C;\n  background-color: transparent;\n  margin: 2.5em 1em 0 0;\n}\n\n.btns[_ngcontent-%COMP%]:hover {\n  background-color: #465F5C;\n  color: #F8F7F5;\n  transition: 0.1s ease-in;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 3.5em;\n  margin-bottom: 3em;\n  position: absolute;\n  align-self: flex-end;\n}\n\n.btn-bottom[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  font-size: 1.75em;\n  color: #465F5C;\n  border-color: transparent;\n  background-color: transparent;\n}\n\n.progress[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  width: 43.625em;\n  height: 3.688em;\n  margin-left: 25%;\n  margin-bottom: 3em;\n  position: fixed;\n}\n\n.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  width: 43.625em;\n  height: 1em;\n  background-color: #465F5C;\n  opacity: 0.2;\n  border-radius: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdBO0VBQ0csZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQUg7O0FBR0E7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSDs7QUFHQTtFQUNHLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUg7O0FBR0E7RUFDRyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFIOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHQztFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFBTDs7QUFHQztFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUlBLHdCQUFBO0FBQUw7O0FBR0M7RUFDRyxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBSjs7QUFJQTtFQUNLLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQURMOztBQUlDO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREw7O0FBSUM7RUFDSSxrQkFBQTtBQURMOztBQUlDO0VBQ0csZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lci1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY3RjU7ICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uaW1nLXBvc2l0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgICB3aWR0aDogOS42ZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5pbWctYm90dG9tIHtcclxuICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5pbWctZm9saGEge1xyXG4gICBoZWlnaHQ6IDEwMCU7XHJcbiAgIHdpZHRoOiAxMTAlO1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbn1cclxuXHJcbi5pbWctYXMge1xyXG4gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgd2lkdGg6IDExMCU7XHJcbiAgIG1hcmdpbi1yaWdodDogMGVtO1xyXG59XHJcblxyXG4uZm9ybWF0LWdyb3VwIHtcclxuICAgbWFyZ2luLXRvcDogMTRlbTtcclxuICAgbWFyZ2luLWxlZnQ6IDMuNWVtO1xyXG4gICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uZm9ybWF0LWdyb3VwIHNwYW4ge1xyXG4gICAgZm9udC1mYW1pbHk6IEZ1dHVyYSBQVDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogIzQ2NUY1QztcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtZmFtaWx5OiAnRnV0dXJhUFQnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gfSAgXHJcbiBcclxuLnExIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLnEyIHtcclxuICAgIGZvbnQtc2l6ZTogNS42MjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbiAuYnRucyB7XHJcbiAgICAgcGFkZGluZzogMC41ZW0gMS41ZW07XHJcbiAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICBmb250LWZhbWlseTogJ0Z1dHVyYVBUJywgJ2FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgICBjb2xvcjogIzQ2NUY1QztcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjNDY1RjVDO1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgIG1hcmdpbjogMi41ZW0gMWVtIDAgMDtcclxuIH1cclxuXHJcbiAuYnRuczpob3ZlciB7ICAgIFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjVGNUM7XHJcbiAgICAgY29sb3I6I0Y4RjdGNTtcclxuICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcclxuICAgICAtbW96LXRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcclxuICAgICAtby10cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XHJcbiAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xyXG4gfVxyXG5cclxuIC5ib3R0b20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzLjVlbSA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbn1cclxuXHJcbi5idG4tYm90dG9tIHtcclxuICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICBmb250LXNpemU6IDEuNzVlbTtcclxuICAgICBjb2xvcjojNDY1RjVDO1xyXG4gICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiB9XHJcblxyXG4gLnByb2dyZXNzIHtcclxuICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICB3aWR0aDogNDMuNjI1ZW07XHJcbiAgICAgaGVpZ2h0OiAzLjY4OGVtO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogM2VtO1xyXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuIH1cclxuXHJcbiAucHJvZ3Jlc3Mgc3BhbiB7XHJcbiAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gfVxyXG5cclxuIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgd2lkdGg6IDQzLjYyNWVtO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY1RjVDO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-question',
                templateUrl: './question.component.html',
                styleUrls: ['./question.component.scss']
            }]
    }], function () { return []; }, { nome: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/homepage/result/result.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/result/result.component.ts ***!
  \*****************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class ResultComponent {
    constructor(cdRef) {
        this.cdRef = cdRef;
        this.resultFinal = '';
        this.fogo = 'de fogo';
        this.ar = 'de ar';
        this.terra = 'de terra';
        this.agua = 'de água';
        this.textTerra = '';
    }
    ngOnInit() {
        this.textTerra = `Integrar cabeça, coração e colocar as mãos na massa. É sair do mundo das idéias e partir para a prática, fazer-se acontecer.    Comprometimento. Deixar o sentimento e motivação emergir e corporificar esta vontade.
    No elemento TERRA, o cromoterápico Lilás é importante e deverá estar presente em seu ambiente ou em pequenos objetos ou 
    acessórios e roupas que possa usar e ser estimulado ou impactado pela cor. Os óleos essenciais no elemento terra, transbordam
    luminosidade com notas cítricas e frutadas do LIMÃO SICILIANO. O corpo amadeirado exala personalidade e sofisticação com o óleo 
    essencial de CANELA. As notas de fundo criam nuances calorosas e adocicadas que equilibram e transmitem calma com óleo essencial
    de HORTELÃ PIPERITA. O elemento TERRA busca harmonizar pensamentos e sentimentos, auxiliando na falta de foco e nos padrões emocionais
    causadores de conflitos. Atuam nas sensações de variações de humor e cansaço, baixa estima e melhoram a motivação. 
    Sensação de bem-estar, de qualidades positivas, ser consistente, perseverante, pontual, cauteloso, responsável, firme, 
    confiável, sóbrio, respeitoso e realista.
    Principais componentes dos óleos essenciais: mentol, aldeído cinâmico, acetato de mentila, d-limoneno, beta-pineno, mentona e outros.
    Os chás conseguem traduzir bem a beleza pela simplicidade. Num gesto modesto incorporamos a natureza em água quente e daí poderemos desfrutar 
    esta magia pelas cores em tons delicados, pelo cheiro simples e o sabor peculiar de cada erva. Permitir acessar nossa memória e ter as boas lembranças.
    Cada planta escolhida tem seu propósito. Na TERRA escolhemos para você o Guaraná, a Canela-da-China e o Hortelã-pimenta. }`;
        if (this.result == 1)
            this.resultFinal = this.ar;
        if (this.result == 2)
            this.resultFinal = this.ar;
        if (this.result == 3)
            this.resultFinal = this.agua;
        if (this.result == 4)
            this.resultFinal = this.terra;
        if (this.result == 5) {
            if (this.xQuestionWater > this.xQuestionAir) {
                this.resultFinal = this.agua;
            }
            else {
                this.resultFinal = this.ar;
            }
        }
        if (this.result == 6) {
            if (this.xQuestionWater > this.xQuestionEarth) {
                this.resultFinal = this.agua;
            }
            else {
                this.resultFinal = this.terra;
            }
        }
        if (this.result == 7) {
            if (this.xQuestionFire > this.xQuestionEarth) {
                this.resultFinal = this.ar;
            }
            else {
                this.resultFinal = this.terra;
            }
        }
        if (this.result == 8) {
            if (this.xQuestionFire > this.xQuestionEarth) {
                this.resultFinal = this.ar;
            }
            else {
                this.resultFinal = this.terra;
            }
        }
        if (this.result == 9) {
            if (this.xQuestionFire > this.xQuestionWater) {
                this.resultFinal = this.ar;
            }
            else {
                this.resultFinal = this.agua;
            }
        }
        if (this.result == 10) {
            if (this.xQuestionAir > this.xQuestionEarth) {
                this.resultFinal = this.ar;
            }
            else {
                this.resultFinal = this.terra;
            }
        }
        if (this.result == 11) {
            if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionWater)
                this.resultFinal = this.fogo;
            else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionEarth)
                this.resultFinal = this.agua;
            else
                this.resultFinal = this.terra;
        }
        if (this.result == 12) {
            if (this.xQuestionWater >= this.xQuestionAir && this.xQuestionWater >= this.xQuestionEarth)
                this.resultFinal = this.agua;
            else if (this.xQuestionAir > this.xQuestionWater && this.xQuestionAir >= this.xQuestionEarth)
                this.resultFinal = this.ar;
            else
                this.resultFinal = this.terra;
        }
        if (this.result == 13) {
            if (this.xQuestionFire >= this.xQuestionWater && this.xQuestionFire >= this.xQuestionEarth)
                this.resultFinal = this.fogo;
            else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionEarth)
                this.resultFinal = this.agua;
            else
                this.resultFinal = this.terra;
        }
        if (this.result == 14) {
            if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionEarth)
                this.resultFinal = this.fogo;
            else if (this.xQuestionAir > this.xQuestionFire && this.xQuestionAir >= this.xQuestionEarth)
                this.resultFinal = this.ar;
            else
                this.resultFinal = this.terra;
        }
        if (this.result == 15) {
            if (this.xQuestionFire >= this.xQuestionAir && this.xQuestionFire >= this.xQuestionWater && this.xQuestionFire >= this.xQuestionEarth)
                this.resultFinal = this.fogo;
            else if (this.xQuestionWater > this.xQuestionFire && this.xQuestionWater >= this.xQuestionAir && this.xQuestionWater >= this.xQuestionEarth)
                this.resultFinal = this.agua;
            else if (this.xQuestionAir > this.xQuestionFire && this.xQuestionAir > this.xQuestionWater && this.xQuestionAir >= this.xQuestionEarth)
                this.resultFinal = this.ar;
            else
                this.resultFinal = this.terra;
        }
    }
    expand() {
        var texto = jquery__WEBPACK_IMPORTED_MODULE_1__('campoTexto');
        var div = jquery__WEBPACK_IMPORTED_MODULE_1__('#sizeDiv');
        if (div.hasClass('text-size-hidden')) {
            div.removeClass('text-size-hidden');
            div.addClass('text-size-expand');
        }
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], inputs: { result: "result", xQuestionWater: "xQuestionWater", xQuestionEarth: "xQuestionEarth", xQuestionFire: "xQuestionFire", xQuestionAir: "xQuestionAir", nome: "nome" }, decls: 49, vars: 3, consts: [[1, "container-form"], ["src", "assets/img/Topo.svg", 1, "img-position"], ["src", "assets/img/FolhaCortada.svg", 1, "img-folha"], ["src", "assets/img/AScortado.svg", 1, "img-as"], [1, "align"], ["fxLayout", "column", 1, "container-result"], [1, "header"], [1, "header-1"], [1, "small-text"], [1, "big-text"], [1, "divider"], [1, "c2"], [1, "titulo"], ["fxLayout", "column", 1, "text-size", "text-size-hidden"], ["sizeDiv", ""], [1, "text"], [1, "hidden-text"], ["campoTexto", ""], [1, "btn-ler-mais", 3, "click"], [1, "c3"], [1, "align-img"], [1, "img-pod"], [1, "img-pod", "img-margin"], ["fxLayout", "column", 1, "c3"], [1, "text-email"], [1, "c3", "c5"], ["formControlName", "name", "placeholder", "Digite seu e-mail..."]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Receber no e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "O que esta desalinhado?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Inseguran\u00E7a, medo, solid\u00E3o e instabilidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Sua jornada, neste momento emocional, apontou que seu elemento predominante \u00E9 TERRA.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_Template_button_click_29_listener() { return ctx.expand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Ler mais ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "arrow_right_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Produtos para voc\u00EA sintonizar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Receber no e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Receba o seu resultado por e-mail com todos os detalhes sobre a sua sintonia e como a Aspira\u00E7\u00E3o pode te ajudar! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.nome, ", voc\u00EA precisa da");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("sintonia ", ctx.resultFinal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.textTerra, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]], styles: [".container-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  background: #F8F7F5;\n  position: fixed;\n}\n\n.img-folha[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 110%;\n  margin-right: -1em;\n  position: fixed;\n}\n\n.img-position[_ngcontent-%COMP%] {\n  margin-top: 0em;\n  margin-left: 0em;\n  width: 9.6em;\n  position: fixed;\n}\n\n.img-as[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  width: 110%;\n  margin-right: 0em;\n}\n\n.align[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.container-result[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 7.75em;\n  margin-bottom: 7.75em;\n  width: 71.875em;\n  background-color: #465F5C;\n  border-radius: 1.875em;\n  padding: 3em;\n  overflow-y: auto;\n  position: relative;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n  color: white;\n}\n\n.header-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.small-text[_ngcontent-%COMP%] {\n  font-size: 2.375em;\n  margin-top: 1em;\n}\n\n.big-text[_ngcontent-%COMP%] {\n  font-size: 5.625em;\n  margin-top: 0.5em;\n}\n\n.header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font: normal normal medium 1.75em/35px \"FuturaPT\";\n  border: none;\n  padding: 20px 42px;\n  background-color: white;\n  color: #465F5C;\n  font-size: 1.75em;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  color: #F8F7F5;\n  font-size: 2.375em;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n}\n\n.text-size[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-top: 1em;\n  border-radius: 1em;\n  padding: 1.5em;\n  display: flex;\n}\n\n.text-size-hidden[_ngcontent-%COMP%] {\n  height: 17.438em;\n}\n\n.text-size-expand[_ngcontent-%COMP%] {\n  height: 50em;\n}\n\n.text[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Open Sans\";\n  font-size: 1.313em;\n  color: #465F5C;\n  height: 1.5em;\n  line-height: 2em;\n  position: absolute;\n}\n\n.text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-break: auto;\n}\n\n.hidden-text[_ngcontent-%COMP%] {\n  height: 2.6em;\n  overflow: hidden;\n}\n\n.show-text[_ngcontent-%COMP%] {\n  height: 30em;\n}\n\n.btn-ler-mais[_ngcontent-%COMP%] {\n  position: absolute;\n  border: none;\n  background-color: transparent;\n  font-size: 1.75em;\n  color: #465F5C;\n  padding: 0em;\n  width: 7.938em;\n  text-align: left;\n  font-family: \"FuturaPT\";\n}\n\n.c3[_ngcontent-%COMP%] {\n  margin-top: 5em;\n}\n\n.align-img[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  margin-top: 1em;\n}\n\n.img-pod[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 1em;\n  height: 26.813em;\n  width: 20.938em;\n}\n\n.img-margin[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.text-email[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.313em;\n  font-family: \"Open Sans\";\n  text-align: left;\n  font-weight: 2em;\n  margin-top: 1em;\n  font-weight: 2em;\n  letter-spacing: normal;\n}\n\n.c5[_ngcontent-%COMP%] {\n  height: 4.188em;\n  margin-top: 1.5em;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 5.625em;\n}\n\n.c5[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: #F8F7F5;\n  border-width: 1px;\n  padding-left: 1em;\n  outline: none;\n  background-color: transparent;\n  font-size: 1.75em;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n  letter-spacing: 0px;\n  color: #F8F7F5;\n  width: 47.75em;\n  border-radius: 0.5em 0 0 0.5em;\n}\n\n.c5[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 16.25em;\n  background-color: #F8F7F5;\n  font-size: 1.75em;\n  color: #465F5C;\n  font-family: \"FuturaPT\", \"arial\", sans-serif;\n  border-radius: 0 0.5em 0.5em 0;\n  border: none;\n}\n\n.divider[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-bottom: 3em;\n  margin-top: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSw0Q0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxpREFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQUFKOztBQUdBO0VBRUksdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7QUFESjs7QUFHQTtFQUNJLFlBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGN0Y1OyAgICBcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLmltZy1mb2xoYSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogLTFlbTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuIH1cclxuXHJcbi5pbWctcG9zaXRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMGVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBlbTtcclxuICAgIHdpZHRoOiA5LjZlbTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXHJcbn1cclxuXHJcbi5pbWctYXMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBlbTtcclxuIH1cclxuXHJcbi5hbGlnbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lci1yZXN1bHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDcuNzUwZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3Ljc1MGVtOztcclxuICAgIHdpZHRoOiA3MS44NzVlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjVGNUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjg3NWVtO1xyXG4gICAgcGFkZGluZzogM2VtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5oZWFkZXIgc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiAnRnV0dXJhUFQnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZGVyLTEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNtYWxsLXRleHQge1xyXG4gICAgZm9udC1zaXplOjIuMzc1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5iaWctdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogNS42MjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG59XHJcblxyXG4uaGVhZGVyIGJ1dHRvbntcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDEuNzVlbS8zNXB4ICdGdXR1cmFQVCc7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOjIwcHggNDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICM0NjVGNUM7XHJcbiAgICBmb250LXNpemU6IDEuNzVlbTtcclxufVxyXG5cclxuLnRpdHVsbyB7XHJcbiAgICBjb2xvcjogI0Y4RjdGNTtcclxuICAgIGZvbnQtc2l6ZTogMi4zNzVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnV0dXJhUFQnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGV4dC1zaXplIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxLjVlbTsgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG59XHJcblxyXG4udGV4dC1zaXplLWhpZGRlbiB7XHJcbiAgICBoZWlnaHQ6IDE3LjQzOGVtO1xyXG59XHJcbi50ZXh0LXNpemUtZXhwYW5kIHtcclxuICAgIGhlaWdodDogNTBlbTtcclxufVxyXG4udGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xyXG4gICAgZm9udC1zaXplOiAxLjMxM2VtO1xyXG4gICAgY29sb3I6ICM0NjVGNUM7XHJcbiAgICBoZWlnaHQ6IDEuNWVtIDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyZW07IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyAgIFxyXG59XHJcblxyXG4udGV4dCBwIHtcclxuICAgIGxpbmUtYnJlYWs6IGF1dG87XHJcbn1cclxuXHJcbi5oaWRkZW4tdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDIuNmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNob3ctdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDMwZW07XHJcbn1cclxuXHJcblxyXG4uYnRuLWxlci1tYWlzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxLjc1MGVtO1xyXG4gICAgY29sb3I6IzQ2NUY1QztcclxuICAgIHBhZGRpbmc6IDBlbTtcclxuICAgIHdpZHRoOiA3LjkzOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnV0dXJhUFQnO1xyXG59XHJcblxyXG4uYzMge1xyXG4gICAgbWFyZ2luLXRvcDogNS4wMDBlbTtcclxufVxyXG5cclxuLmFsaWduLWltZyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5pbWctcG9kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gICAgaGVpZ2h0OiAyNi44MTNlbTtcclxuICAgIHdpZHRoOiAyMC45MzhlbTtcclxufVxyXG5cclxuLmltZy1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcblxyXG4udGV4dC1lbWFpbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuMzEzZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDJlbTtcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG4uYzUge1xyXG4gICAgaGVpZ2h0OiA0LjE4OGVtO1xyXG4gICAgbWFyZ2luLXRvcDogMS41MDBlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNS42MjVlbTtcclxufVxyXG5cclxuLmM1IGlucHV0e1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRjhGN0Y1O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtc2l6ZTogMS43NTBlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnRnV0dXJhUFQnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjRjhGN0Y1O1xyXG4gICAgd2lkdGg6IDQ3Ljc1MGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW0gMCAwIDAuNWVtO1xyXG59XHJcblxyXG4uYzUgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxNi4yNTBlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY3RjU7XHJcbiAgICBmb250LXNpemU6IDEuNzUwZW07XHJcbiAgICBjb2xvcjogIzQ2NUY1QztcclxuICAgIGZvbnQtZmFtaWx5OiAnRnV0dXJhUFQnLCAnYXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwLjVlbSAwLjVlbSAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { result: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xQuestionWater: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xQuestionEarth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xQuestionFire: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], xQuestionAir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nome: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/homepage/result/scroll-directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/result/scroll-directive.ts ***!
  \*****************************************************/
/*! exports provided: ScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollDirective", function() { return ScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ScrollDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    checkScroll() {
        this.scroll();
    }
    scroll() {
        console.log("scoll started");
        let anchor = this.el.nativeElement.top = 500;
        //style.top =100;
        // this.el.nativeElement.style.top = 100;
        window.scrollTo({ top: anchor, left: 0, behavior: 'smooth' });
    }
}
ScrollDirective.ɵfac = function ScrollDirective_Factory(t) { return new (t || ScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollDirective, selectors: [["", "track-scroll", ""]], hostBindings: function ScrollDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollDirective_click_HostBindingHandler($event) { return ctx.checkScroll($event); });
    } }, inputs: { name: ["track-scroll", "name"] }, exportAs: ["trackScroll"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[track-scroll]',
                exportAs: 'trackScroll'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["track-scroll"]
        }], checkScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\55169\Desktop\aspiration\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map