webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
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
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegraPage = RegraPage_1 = (function () {
    function RegraPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    RegraPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(RegraPage_1, {
            item: item
        });
    };
    return RegraPage;
}());
RegraPage = RegraPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-regra',template:/*ion-inline-start:"C:\hockeyGame\src\pages\regra\regra.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Regras</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  Regras aqui...\n</ion-content>\n'/*ion-inline-end:"C:\hockeyGame\src\pages\regra\regra.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], RegraPage);

var RegraPage_1;
//# sourceMappingURL=regra.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_alerta_modal_alerta__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PerfilPage = (function () {
    function PerfilPage(navCtrl, http, loadingCtrl, toastCtrl, modalCtrl, storage, platform) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.platform = platform;
        this.apiUrl = '/api';
        this.usuario = {
            id: null,
            nome: null,
            celularCorporativo: null,
            dataNascimento: null,
            senha: null,
            confirmarSenha: null,
            genero: null
        };
        if (this.platform.is('cordova')) {
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('usuario').then(function (u) {
            if (u != null) {
                var number = u.dataNascimento;
                var currentDate = new Date(+number);
                currentDate.setHours(currentDate.getHours() - 3);
                _this.usuario = {
                    id: u.id,
                    nome: u.nome,
                    celularCorporativo: u.celularCorporativo,
                    dataNascimento: currentDate.toISOString(),
                    senha: u.senha,
                    confirmarSenha: u.confirmarSenha,
                    genero: u.genero
                };
            }
        });
    };
    PerfilPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.usuario.senha != this.usuario.confirmarSenha) {
            var errorMessage = "Passwords are different.";
            this.toastCtrl.create({ message: errorMessage, duration: 4500 }).present();
            return;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            autenticacao: {
                usuario: 'game',
                senha: 'edc2817e979e40b3210dae95c1348fa7'
            },
            id: this.usuario.id,
            celularCorporativo: this.usuario.celularCorporativo,
            dataNascimento: this.usuario.dataNascimento,
            senha: this.usuario.senha,
            genero: this.usuario.genero,
            type: 'json'
        };
        var loading = this.loadingCtrl.create();
        loading.present();
        this.http.post(this.apiUrl + "/usuario/perfil", postParams, options).subscribe(function (data) {
            loading.dismiss();
            if (data['_body'] != "" && data['_body'] != null) {
                var usuario = JSON.parse(data['_body']);
                _this.storage.set('usuario', usuario);
                _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_alerta_modal_alerta__["a" /* ModalAlertaPage */], { codigo: 6 }).present();
                _this.doBack();
            }
            else {
                _this.toastCtrl.create({ message: "Try again later...", duration: 4500 }).present();
            }
        }, function (error) {
            loading.dismiss();
            _this.toastCtrl.create({ message: "Try again later...", duration: 4500 }).present();
        });
    };
    PerfilPage.prototype.doBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\hockeyGame\src\pages\perfil\perfil.html"*/'<ion-header class="bgc-azul">\n  <ion-navbar class="text-center nav-interna">\n    <button class="position-absolute" ion-button (click)="doBack()" style="width:48px;">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n  <span class="page-title">Profile</span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Cadastro Chamada -->\n  <ion-grid  class="cadastro">\n    <ion-row align-items-top>\n      <ion-col col-12>\n\n        <h2>Hi {{usuario.nome}},</h2>\n        <p>Please update the data below if you wish.</p>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Formulário Cadastro -->\n  <!--<form #formData=\'ngForm\' class="cadastro-form"> -->\n    <ion-input type="text" hidden [(ngModel)]="usuario.id" ngControl="id"></ion-input>\n    <ion-list padding class="form-default text-center">\n      <ion-item>\n        <ion-label stacked>Phone</ion-label>\n        <ion-input type="tel" [(ngModel)]="usuario.celularCorporativo" name="celularCorporativo" placeholder="(21) 9 9999-9999"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Birth</ion-label>\n        <ion-datetime [(ngModel)]="usuario.dataNascimento" displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" placeholder="00/00/0000">\n        </ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Gender</ion-label>\n        <ion-select [(ngModel)]="usuario.genero" placeholder="Selecione">\n          <ion-option value="M">Masculino</ion-option>\n          <ion-option value="F">Feminino</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input [(ngModel)]="usuario.senha" type="password" placeholder=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Confirm password</ion-label>\n        <ion-input [(ngModel)]="usuario.confirmarSenha" type="password" placeholder=""></ion-input>\n      </ion-item>\n\n        <button ion-button type="submit" (click)="onSubmit()" class="btn-verde">SAVE</button>\n    </ion-list>\n   <!-- </form> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\hockeyGame\src\pages\perfil\perfil.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDetalhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardDetalhePage = (function () {
    function DashboardDetalhePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    DashboardDetalhePage.prototype.doBack = function () {
        //this.navCtrl.pop();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    return DashboardDetalhePage;
}());
DashboardDetalhePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard-detalhe',template:/*ion-inline-start:"C:\hockeyGame\src\pages\dashboard-detalhe\dashboard-detalhe.html"*/'<ion-header class="bgc-azul">\n  <ion-navbar class="text-center nav-interna">\n    <button class="position-absolute" ion-button (click)="doBack()" style="width:48px;">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <h1>{{selectedItem.cliente.empresa}}</h1>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bgc-cinza">\n  <!-- Etapas -->\n  <ion-grid class="bgc-branco">\n    <ion-row align-items-top class="etapas">\n      <ion-col col-4>\n        <div class="item-etapa">\n          <img src="assets/img/icone-local.svg" class="img-border" alt="" *ngIf="selectedItem.status.id <= 5">\n        </div>\n        <p>Check-In</p>\n        <img class="check" src="assets/img/icone-check.png" alt="" *ngIf="selectedItem.status.id <= 5">\n      </ion-col>\n      <ion-col col-4 class="linhas">\n        <div class="item-etapa">\n          <img src="assets/img/icone-arquivo.svg" class="img-border" alt="" *ngIf="selectedItem.status.id > 2 && selectedItem.status.id <= 5">\n        </div>\n        <p>Proposta</p>\n        <img class="check" src="assets/img/icone-check.png" alt="" *ngIf="selectedItem.status.id > 2 && selectedItem.status.id <= 5">\n      </ion-col>\n      <ion-col col-4>\n        <div class="item-etapa">\n          <img src="assets/img/icone-moeda.svg" class="img-border" alt="" *ngIf="selectedItem.status.id == 5">\n        </div>\n        <p>Negócio <br />Fechado</p>\n        <img class="check" src="assets/img/icone-check.png" alt="" *ngIf="selectedItem.status.id == 5">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!-- Lista -->\n  <ion-list class="lista-info overflowY-auto lista-proposta">\n    <ion-item class="no-border">\n      <p>\n        <b>Nome Completo</b> <br />\n        {{selectedItem.cliente.nome}}\n      </p>\n    </ion-item>\n    <ion-item class="no-border">\n      <p>\n        <b>Empresa</b> <br />\n        {{selectedItem.cliente.empresa}}\n      </p>\n    </ion-item>\n    <ion-item class="no-border">\n      <p>\n        <b>Endereço</b> <br />\n        {{selectedItem.cliente.endereco.logradouro}}, {{selectedItem.cliente.endereco.numero}}, {{selectedItem.cliente.endereco.bairro}}, <br/>\n        {{selectedItem.cliente.endereco.cidade.nome}}\n      </p>\n    </ion-item>\n    <ion-item class="no-border">\n      <p>\n        <b>Contato</b> <br />\n        {{selectedItem.cliente.celular}}\n      </p>\n    </ion-item>\n    <ion-item class="no-border">\n      <p>\n        <b>E-mail</b> <br />\n        {{selectedItem.cliente.email}}\n      </p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\hockeyGame\src\pages\dashboard-detalhe\dashboard-detalhe.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], DashboardDetalhePage);

//# sourceMappingURL=dashboard-detalhe.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizHistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizHistoricoPage = (function () {
    function QuizHistoricoPage(navCtrl, http, loadingCtrl, toastCtrl, modalCtrl, storage, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.platform = platform;
        this.apiUrl = '/api';
        this.quiz = {
            id: null
        };
        this.answers = [];
        this.selectedItem = navParams.get('item');
        if (this.platform.is('cordova')) {
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postParams = {
            autenticacao: {
                usuario: 'game',
                senha: 'edc2817e979e40b3210dae95c1348fa7'
            },
            idHistoricoUsuario: this.selectedItem.id,
            type: 'json'
        };
        var loading = this.loadingCtrl.create();
        loading.present();
        this.http.post(this.apiUrl + "/quiz/resposta", postParams, options).subscribe(function (data) {
            loading.dismiss();
            if (data['_body'] != "" && data['_body'] != null) {
                _this.quiz = JSON.parse(data['_body']);
                console.log(JSON.parse(data['_body']));
            }
            else {
                _this.quiz = null;
                _this.toastCtrl.create({ message: "Try again later...", duration: 3000 }).present();
            }
        }, function (error) {
            loading.dismiss();
            _this.toastCtrl.create({ message: "Try again later...", duration: 4500 }).present();
        });
    }
    QuizHistoricoPage.prototype.doBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    return QuizHistoricoPage;
}());
QuizHistoricoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-quiz-historico',template:/*ion-inline-start:"C:\hockeyGame\src\pages\quiz-historico\quiz-historico.html"*/'<ion-header class="bgc-azul">\n  <ion-navbar class="text-center nav-interna">\n    <button class="position-absolute" ion-button (click)="doBack()" style="width:48px;">\n      <ion-icon name="arrow-back"></ion-icon>\n    </button>\n    <h1>Quiz</h1>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bgc-cinza">\n\n  <h2 class="title-perguntas" *ngIf="quiz != null">{{quiz.descricao}}</h2>\n  \n  <form *ngIf="quiz?.id != null">\n    <ion-list class="lista-perguntas">\n      <ion-item *ngIf="quiz.opcaoCorreta == \'A\'">\n        <!--<input type="radio" id="resposta1" name="opcaoEscolhida" class="input-radio" formControlName="opcaoEscolhida" (ionChange)="onChange(\'A\', $event.checked)">-->\n        <ion-label text-wrap>{{quiz.opcaoA}}</ion-label>\n        <ion-checkbox [checked]="quiz.opcaoCorreta == \'A\'" disabled="true"></ion-checkbox> <!-- formControlName="opcaoEscolhida" -->\n      </ion-item>\n      <ion-item *ngIf="quiz.opcaoCorreta == \'B\'">\n        <!--<input type="radio" id="resposta2" name="opcaoEscolhida" class="input-radio" formControlName="opcaoEscolhida" (ionChange)="onChange(\'B\', $event.checked)">-->\n        <ion-label text-wrap>{{quiz.opcaoB}}</ion-label>\n        <ion-checkbox [checked]="quiz.opcaoCorreta == \'B\'" disabled="true"></ion-checkbox>\n      </ion-item>\n      <ion-item *ngIf="quiz.opcaoCorreta == \'C\'">\n        <!--<input type="radio" id="resposta3" name="opcaoEscolhida" class="input-radio" formControlName="opcaoEscolhida" (ionChange)="onChange(\'C\', $event.checked)">-->\n        <ion-label text-wrap>{{quiz.opcaoC}}</ion-label>\n        <ion-checkbox [checked]="quiz.opcaoCorreta == \'C\'" disabled="true"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n  </form> \n\n</ion-content>\n\n<!--\n<ion-content padding>\n  <form [formGroup]="form">\n    <ion-list>\n      \n      <h3 class="text-center">{{quiz.descricao}}</h3>\n      \n      <ion-item>\n        <ion-label text-wrap>{{quiz.opcaoA}}</ion-label>\n        <ion-checkbox formControlName="opcaoEscolhida" (ionChange)="onChange(\'A\', $event.checked)"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{quiz.opcaoB}}</ion-label>\n        <ion-checkbox formControlName="opcaoEscolhida" (ionChange)="onChange(\'B\', $event.checked)"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{quiz.opcaoC}}</ion-label>\n        <ion-checkbox formControlName="opcaoEscolhida" (ionChange)="onChange(\'C\', $event.checked)"></ion-checkbox>\n      </ion-item>\n      <button ion-button (click)="onSubmit(form)" block>RESPONDER</button>\n    </ion-list>\n  </form>\n</ion-content> -->\n'/*ion-inline-end:"C:\hockeyGame\src\pages\quiz-historico\quiz-historico.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], QuizHistoricoPage);

//# sourceMappingURL=quiz-historico.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_alerta_modal_alerta__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizPage = QuizPage_1 = (function () {
    function QuizPage(navCtrl, http, loadingCtrl, toastCtrl, modalCtrl, storage, platform) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.platform = platform;
        this.apiUrl = '/api';
        this.quiz = {
            id: null
        };
        this.answers = [];
        if (this.platform.is('cordova')) {
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
    }
    QuizPage.prototype.ionViewDidEnter = function () {
        this.refresh();
    };
    QuizPage.prototype.refresh = function () {
        var _this = this;
        this.storage.get('usuario').then(function (u) {
            if (u != null) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var postParams = {
                    autenticacao: {
                        usuario: 'game',
                        senha: 'edc2817e979e40b3210dae95c1348fa7'
                    },
                    idUsuario: u.id,
                    type: 'json'
                };
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.http.post(_this.apiUrl + "/quiz/listar", postParams, options).subscribe(function (data) {
                    loading_1.dismiss();
                    if (data['_body'] != "" && data['_body'] != null) {
                        _this.quiz = JSON.parse(data['_body']);
                    }
                    else {
                        _this.quiz = null;
                        _this.toastCtrl.create({ message: "Wait for the next question...", duration: 3000 }).present();
                    }
                }, function (error) {
                    loading_1.dismiss();
                    _this.toastCtrl.create({ message: "Try again later...", duration: 4500 }).present();
                });
            }
        });
    };
    QuizPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.answers.length > 0) {
            this.storage.get('usuario').then(function (u) {
                if (u != null) {
                    var postParams = {
                        autenticacao: {
                            usuario: 'game',
                            senha: 'edc2817e979e40b3210dae95c1348fa7'
                        },
                        idUsuario: u.id,
                        opcaoEscolhida: _this.answers,
                        idQuiz: _this.quiz.id,
                        type: 'json'
                    };
                    var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                    headers.append("Accept", 'application/json');
                    headers.append('Content-Type', 'application/json');
                    var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                    var loading_2 = _this.loadingCtrl.create();
                    loading_2.present();
                    _this.http.post(_this.apiUrl + "/quiz/responder", postParams, options).subscribe(function (data) {
                        loading_2.dismiss();
                        var resp = JSON.parse(data['_body']);
                        if (resp.codigo == 1) {
                            _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_alerta_modal_alerta__["a" /* ModalAlertaPage */], { codigo: 4 }).present();
                        }
                        else if (resp.codigo == 2) {
                            _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_alerta_modal_alerta__["a" /* ModalAlertaPage */], { codigo: 5 }).present();
                        }
                        else {
                            _this.toastCtrl.create({ message: resp.mensagem, duration: 4500 }).present();
                        }
                        _this.navCtrl.setRoot(QuizPage_1);
                    }, function (error) {
                        loading_2.dismiss();
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(error); // Error getting the data
                    });
                }
                else {
                    _this.toastCtrl.create({ message: "Try agan later.", duration: 4500 }).present();
                }
            });
        }
        else {
            this.toastCtrl.create({ message: "Choose one answer.", duration: 3000 }).present();
        }
    };
    QuizPage.prototype.onChange = function (value, event) {
        if (event.checked) {
            this.answers.push(value);
        }
        else {
            var index = this.answers.indexOf(value);
            if (index !== -1) {
                this.answers.splice(index, 1);
            }
        }
        console.log(this.answers);
    };
    return QuizPage;
}());
QuizPage = QuizPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-quiz',template:/*ion-inline-start:"C:\hockeyGame\src\pages\quiz\quiz.html"*/'<ion-header class="bgc-azul">\n  <ion-navbar class="text-center">\n    <button class="position-absolute" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img src="assets/img/logo-center.png" alt="">\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bgc-cinza">\n\n  <h2 class="title-perguntas" *ngIf="quiz != null">Look at the large LED to see the question number: {{quiz.id}}</h2>\n  \n  <form *ngIf="quiz?.id != null">\n    <ion-list class="lista-perguntas">\n      <ion-item>\n        <!--<input type="radio" id="resposta1" name="opcaoEscolhida" class="input-radio" formControlName="opcaoEscolhida" (ionChange)="onChange(\'A\', $event.checked)">-->\n        <ion-label text-wrap>{{quiz.opcaoA}}</ion-label>\n        <ion-checkbox (ionChange)="onChange(\'A\', $event)"></ion-checkbox> <!-- formControlName="opcaoEscolhida" -->\n      </ion-item>\n      <ion-item>\n        <!--<input type="radio" id="resposta2" name="opcaoEscolhida" class="input-radio" formControlName="opcaoEscolhida" (ionChange)="onChange(\'B\', $event.checked)">-->\n        <ion-label text-wrap>{{quiz.opcaoB}}</ion-label>\n        <ion-checkbox (ionChange)="onChange(\'B\', $event)"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <!--<input type="radio" id="resposta3" name="opcaoEscolhida" class="input-radio" formControlName="opcaoEscolhida" (ionChange)="onChange(\'C\', $event.checked)">-->\n        <ion-label text-wrap>{{quiz.opcaoC}}</ion-label>\n        <ion-checkbox (ionChange)="onChange(\'C\', $event)"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button (click)="onSubmit()" class="btn-verde align-center block">Answer</button>\n  </form> \n\n  <br />\n  <h2 *ngIf="quiz == null" class="sem-perguntas">Wait for the next question :)</h2>\n  <br />\n  <button ion-button *ngIf="quiz == null" (click)="refresh()" class="btn-verde align-center block">Refresh</button>\n</ion-content>\n\n<!--\n<ion-content padding>\n  <form [formGroup]="form">\n    <ion-list>\n      \n      <h3 class="text-center">{{quiz.descricao}}</h3>\n      \n      <ion-item>\n        <ion-label text-wrap>{{quiz.opcaoA}}</ion-label>\n        <ion-checkbox formControlName="opcaoEscolhida" (ionChange)="onChange(\'A\', $event.checked)"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{quiz.opcaoB}}</ion-label>\n        <ion-checkbox formControlName="opcaoEscolhida" (ionChange)="onChange(\'B\', $event.checked)"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label text-wrap>{{quiz.opcaoC}}</ion-label>\n        <ion-checkbox formControlName="opcaoEscolhida" (ionChange)="onChange(\'C\', $event.checked)"></ion-checkbox>\n      </ion-item>\n      <button ion-button (click)="onSubmit(form)" block>RESPONDER</button>\n    </ion-list>\n  </form>\n</ion-content> -->\n'/*ion-inline-end:"C:\hockeyGame\src\pages\quiz\quiz.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], QuizPage);

var QuizPage_1;
//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RankingPage = (function () {
    function RankingPage(navCtrl, navParams, http, loadingCtrl, storage, toastCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.apiUrl = '/api';
        this.minhaPosicao = 0;
        this.meusPontos = 0;
        this.selectedItem = navParams.get('item');
        if (this.platform.is('cordova')) {
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
        this.items = [];
        storage.get('usuario').then(function (u) {
            if (u != null) {
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var postParams = {
                    autenticacao: {
                        usuario: 'game',
                        senha: 'edc2817e979e40b3210dae95c1348fa7'
                    },
                    idUsuario: u.id,
                    type: 'json'
                };
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.http.post(_this.apiUrl + "/usuario/ranking", postParams, options).subscribe(function (data) {
                    loading_1.dismiss();
                    if (data['_body'] != "" && data['_body'] != null) {
                        _this.items = JSON.parse(data['_body']).usuarios;
                        _this.minhaPosicao = JSON.parse(data['_body']).minhaPosicao;
                        _this.meusPontos = JSON.parse(data['_body']).meusPontos;
                        //console.log(JSON.parse(data['_body']).usuario);
                    }
                    else {
                        var errorMessage = "Try again later...";
                        _this.toastCtrl.create({ message: errorMessage, duration: 4500 }).present();
                    }
                }, function (error) {
                    loading_1.dismiss();
                    _this.toastCtrl.create({ message: "Try again later...", duration: 4500 }).present();
                });
            }
        });
    }
    return RankingPage;
}());
RankingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-ranking',template:/*ion-inline-start:"C:\hockeyGame\src\pages\ranking\ranking.html"*/'<ion-header class="bgc-azul">\n  <ion-navbar class="text-center">\n    <button class="position-absolute" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img src="assets/img/logo-center.png" alt="">\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!--<ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.ranking" item-left></ion-icon>\n      {{item.nome}}\n      <div class="item-note" item-right>\n        {{item.pontos}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>-->\n\n  <!-- Header Ranking -->\n  <div class="header-ranking">\n    <ion-grid>\n        <ion-row align-items-end>\n          <ion-col col-8 class="text-center">\n            <div class="user-pontos">\n              <label class="desc pull-left">YOU HAVE</label>\n              <span class="pull-left">{{meusPontos}}</span>\n              <label class="desc pull-right">POINTS</label>\n            </div>\n          </ion-col>\n          <ion-col col-4 class="text-center">\n\n            <div class="user-posicao text-center">\n              <span>{{minhaPosicao}}</span>\n              <label class="desc">POSITION</label>\n            </div>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n  </div>\n\n  <!-- Lista Ranking -->\n  <ion-list class="lista-full-ranking">\n    <ion-item *ngFor="let item of items">\n      <ion-grid>\n        <ion-row align-items-center>\n          <ion-col col-8>\n            <span class="posicao">{{item.ranking}}º</span>\n            <ion-title class="nome text-left">{{item.nome}}</ion-title>\n          </ion-col>\n          <ion-col col-4 class="text-right">\n            <div class="pontos">\n              {{item.pontos}}\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\hockeyGame\src\pages\ranking\ranking.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], RankingPage);

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__esqueci_senha_esqueci_senha__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro_cadastro__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Storage } from '@ionic/storage';





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http, loadingCtrl, toastCtrl, modalCtrl, platform, menuCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.apiUrl = '/api';
        this.submitted = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
        if (this.platform.is('cordova')) {
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false, 'myMenu');
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true, 'myMenu');
    };
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.doLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                autenticacao: {
                    usuario: 'game',
                    senha: 'edc2817e979e40b3210dae95c1348fa7'
                },
                emailCorporativo: form.value.email,
                senha: form.value.password,
                type: 'json'
            };
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.http.post(this.apiUrl + "/usuario/login", postParams, options).subscribe(function (data) {
                loading_1.dismiss();
                if (data['_body'] != "" && data['_body'] != null) {
                    var usuario = JSON.parse(data['_body']);
                    //if (form.value.lembrar){
                    _this.storage.set('usuario', usuario);
                    //}
                    if (usuario.dataNascimento == null) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__cadastro_cadastro__["a" /* CadastroPage */], { usuario: usuario });
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    }
                }
                else {
                    var errorMessage = "You are using the wrong Username or Password.";
                    _this.toastCtrl.create({ message: errorMessage, duration: 5000 }).present();
                }
            }, function (error) {
                loading_1.dismiss();
                console.log('Error: ' + JSON.stringify(error));
                console.log(error); // Error getting the data
            });
        }
        else {
            var errorMessage = "You are using the wrong Username or Password.";
            this.toastCtrl.create({ message: errorMessage, duration: 5000 }).present();
        }
    };
    // private availableEmail(): boolean {
    //   let validEmailDomain = "berkshireschool.org";
    //   return (this.form.value.email.indexOf(validEmailDomain) > -1)
    // }
    LoginPage.prototype.doPageSignup = function () {
        //  this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.doForgotPassword = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__esqueci_senha_esqueci_senha__["a" /* EsqueciSenhaPage */]).present();
    };
    LoginPage.prototype.doBack = function () {
        this.navCtrl.pop();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\hockeyGame\src\pages\login\login.html"*/'<ion-content padding no-bounce class="bg-imagem">\n    <!-- <ion-icon name="arrow-back" color="light" (click)="doBack()"></ion-icon> -->\n\n    <form [formGroup]="form">\n        <ion-list class="form-login">\n            <img src="assets/img/logo-branco.png" class="logo" alt="Game Conecta Logo">\n            <ion-item>                \n                <ion-label stacked>EMAIL</ion-label>\n                <ion-input formControlName="email" type="email" placeholder="example@email.com"></ion-input>                \n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>PASSWORD</ion-label>\n                <ion-input formControlName="password" type="password" placeholder="password"></ion-input>\n            </ion-item>\n            \n            \n            <button ion-button class="btn-outline-branco" (click)="doLogin(form)" block>LOGIN</button>\n            <button ion-button (click)="doForgotPassword()" class="esq-senha">I forgot the password</button>\n        </ion-list>\n    </form>\n</ion-content>\n\n'/*ion-inline-end:"C:\hockeyGame\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsqueciSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { EmailComposer } from 'ionic-native';



//import { UserProvider } from '../../providers/user';
var EsqueciSenhaPage = (function () {
    function EsqueciSenhaPage(navCtrl, navParams, 
        //public userProvider: UserProvider,
        http, loadingCtrl, toastCtrl, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.apiUrl = '/api';
        this.submitted = false;
        if (this.platform.is('cordova')) {
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    }
    EsqueciSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EsqueciSenhaPage');
    };
    EsqueciSenhaPage.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        this.alertCtrl.create({
            title: 'Password sent',
            subTitle: 'Check your email. If you have not received it, check SPAM.',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.doPageLogin();
                    }
                },
            ]
        }).present();
    };
    EsqueciSenhaPage.prototype.doPageLogin = function () {
        this.navCtrl.pop();
    };
    EsqueciSenhaPage.prototype.doEmailUs = function () {
        if (!this.platform.is('cordova')) {
            this.toastCtrl.create({
                message: 'You can\'t open Email composer. You can only open this on mobile devices',
                duration: 4500
            }).present();
            return;
        }
        //console.log("open email box");
        //EmailComposer.isAvailable().then((available: boolean) =>{
        //  if(available) {
        //  //  //Now we know we can send
        //  }
        //});
        //let email = {
        //  to: 'max@mustermann.de',
        //  subject: 'There is a issue to login on BearsFeed iOS app',
        //  body: 'I can\'t login to app.',
        //  isHtml: true
        //};
        // Send a text message using default options
        //EmailComposer.open(email);
    };
    return EsqueciSenhaPage;
}());
EsqueciSenhaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'esqueci-senha',template:/*ion-inline-start:"C:\hockeyGame\src\pages\esqueci-senha\esqueci-senha.html"*/'<ion-content padding class="modal-padrao">\n    <div class="modal-content">\n        <ion-icon name="arrow-back" (click)="doPageLogin()"></ion-icon>\n        <form [formGroup]="form" (ngSubmit)="onSubmit(form)">\n            <header>\n                <h2 ion-text class="title" >Forgot your password?</h2>\n                <p>Do not worry, fill in the field below with your email that will solve this =)s</p>\n            </header>\n            <ion-list no-lines>\n                <ion-item>                \n                    <ion-label stacked>E-mail</ion-label>\n                    <ion-input type="email" formControlName="email" placeholder="email@email.com"> </ion-input>                \n                </ion-item>\n                <button ion-button type="submit" class="btn-verde">Send</button>\n                <!--\n                <p ion-text class="text-center">\n                Outros problemas?<a ion-text (click)="doEmailUs()" class="underline"> Nos envie um email.</a>\n                </p>\n                -->\n            </ion-list>\n        </form>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\hockeyGame\src\pages\esqueci-senha\esqueci-senha.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
], EsqueciSenhaPage);

//# sourceMappingURL=esqueci-senha.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_alerta_modal_alerta__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CadastroPage = (function () {
    function CadastroPage(navCtrl, toastCtrl, navParams, http, loadingCtrl, modalCtrl, storage, platform) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.platform = platform;
        this.apiUrl = '/api';
        this.submitted = false;
        this.concorda = false;
        this.usuario = navParams.get('usuario');
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            celularCorporativo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            dataNascimento: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            genero: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            senha: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            confirmarSenha: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        if (this.platform.is('cordova')) {
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
    }
    CadastroPage.prototype.cadastrar = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.value.senha != form.value.confirmarSenha) {
            var errorMessage = "Passwords are different.";
            this.toastCtrl.create({ message: errorMessage, duration: 4500 }).present();
            return;
        }
        if (this.form.valid) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var postParams = {
                autenticacao: {
                    usuario: 'game',
                    senha: 'edc2817e979e40b3210dae95c1348fa7'
                },
                id: this.usuario.id,
                celularCorporativo: form.value.celularCorporativo,
                dataNascimento: form.value.dataNascimento,
                genero: form.value.genero,
                senha: form.value.senha,
                concorda: this.concorda,
                type: 'json'
            };
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            if (this.concorda) {
                this.http.post(this.apiUrl + "/usuario/cadastro", postParams, options).subscribe(function (data) {
                    loading_1.dismiss();
                    if (data['_body'] != "" && data['_body'] != null) {
                        var usuario = JSON.parse(data['_body']);
                        _this.storage.set('usuario', usuario);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_alerta_modal_alerta__["a" /* ModalAlertaPage */], { codigo: 1 }).present();
                    }
                    else {
                        var errorMessage = "Please check the data and try again.";
                        _this.toastCtrl.create({ message: errorMessage, duration: 4500 }).present();
                    }
                }, function (error) {
                    loading_1.dismiss();
                    console.log('Error: ' + JSON.stringify(error));
                    console.log(error); // Error getting the data
                });
            }
            else {
                loading_1.dismiss();
                var errorMessage = "Please check the data and try again.";
                this.toastCtrl.create({ message: errorMessage, duration: 4500 }).present();
            }
        }
        else {
            var errorMessage = "Fill in the data correctly.";
            this.toastCtrl.create({ message: errorMessage, duration: 4500 }).present();
        }
    };
    CadastroPage.prototype.doBack = function () {
        this.navCtrl.pop();
    };
    CadastroPage.prototype.onChange = function (event) {
        if (event.checked) {
            this.concorda = true;
        }
        else {
            this.concorda = false;
        }
    };
    return CadastroPage;
}());
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cadastro',template:/*ion-inline-start:"C:\hockeyGame\src\pages\cadastro\cadastro.html"*/'<ion-header class="bgc-azul">\n  <ion-navbar class="text-center">\n  <span class="page-title">Cadastro</span>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Cadastro Chamada -->\n  <ion-grid  class="cadastro">\n    <ion-row align-items-top>\n      <ion-col col-12>\n\n        <h2>Olá {{usuario?.nome}},</h2>\n        <p>Seja bem-vindo ao Game Conecta. Para continuar com o seu primeiro acesso complete os dados abaixo corretamente.</p>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Formulário Cadastro -->\n  <form [formGroup]="form" class="cadastro-form">\n    <ion-list padding class="form-default text-center">\n      <ion-item>\n        <ion-label stacked>Telefone Corporativo</ion-label>\n        <ion-input formControlName="celularCorporativo" type="text" placeholder="(21) 9 9999-9999"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Data</ion-label>\n        <ion-datetime formControlName="dataNascimento" displayFormat="DD/MM/YYYY" pickerFormat="DD MMMM YYYY" placeholder="00/00/0000"></ion-datetime> <!-- [(ngModel)]="myDate" -->\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Gênero</ion-label>\n        <ion-select formControlName="genero" placeholder="Selecione"> <!-- [(ngModel)]="gaming" -->\n          <ion-option value="M">Masculino</ion-option>\n          <ion-option value="F">Feminino</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Senha</ion-label>\n        <ion-input formControlName="senha" type="password" placeholder="Nova senha"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Confirmar senha</ion-label>\n        <ion-input formControlName="confirmarSenha" type="password" placeholder="Confirmar senha"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label for="concordo">Concordo com as cláusulas abaixo:</ion-label>\n        <ion-checkbox id="concordo" (ionChange)="onChange($event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item class="regulamento">\n        <p>\n          1. Declaro estar ciente de que a minha participação no Game Conecta é facultativa. <br /> <br />\n          2. Autorizo a instalação do aplicativo Game Conecta em meu celular de uso pessoal e/ou de uso corporativo. <br /><br />\n          3. Estou ciente de todas as regras e do regulamento para participação no Game Conecta. <br /><br />\n          4. A etapa de check-in apenas valerá para a pontuação de visitas realizadas dentro do horário comercial, não configurando a existência de meio de controle de jornada de nenhuma espécie (art. 62, I e II da CLT).\n        </p>\n      </ion-item>\n      <button ion-button (click)="cadastrar(form)" class="btn-verde">VAMOS LÁ</button>\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\hockeyGame\src\pages\cadastro\cadastro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);



Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_detalhe_dashboard_detalhe__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_regra_regra__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_ranking_ranking__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quiz_quiz__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_quiz_historico_quiz_historico__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_esqueci_senha_esqueci_senha__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_alerta_modal_alerta__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_highcharts__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_location_accuracy__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_detalhe_dashboard_detalhe__["a" /* DashboardDetalhePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_regra_regra__["a" /* RegraPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_ranking_ranking__["a" /* RankingPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_quiz_quiz__["a" /* QuizPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_quiz_historico_quiz_historico__["a" /* QuizHistoricoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_esqueci_senha_esqueci_senha__["a" /* EsqueciSenhaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modal_alerta_modal_alerta__["a" /* ModalAlertaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20_angular2_highcharts__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_24__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_dashboard_dashboard__["a" /* DashboardPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_detalhe_dashboard_detalhe__["a" /* DashboardDetalhePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_regra_regra__["a" /* RegraPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_ranking_ranking__["a" /* RankingPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_quiz_quiz__["a" /* QuizPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_quiz_historico_quiz_historico__["a" /* QuizHistoricoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_cadastro_cadastro__["a" /* CadastroPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_esqueci_senha_esqueci_senha__["a" /* EsqueciSenhaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modal_alerta_modal_alerta__["a" /* ModalAlertaPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_network__["a" /* Network */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ConnectionStatusEnum */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_regra_regra__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConnectionStatusEnum;
(function (ConnectionStatusEnum) {
    ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
    ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
})(ConnectionStatusEnum || (ConnectionStatusEnum = {}));
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, alertCtrl, network) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.network = network;
        storage.get('usuario').then(function (u) {
            if (u != null) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
        });
        this.previousStatus = ConnectionStatusEnum.Online;
        //this.initializeApp();
        this.pages = {
            tabsPage: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            perfilPage: __WEBPACK_IMPORTED_MODULE_5__pages_perfil_perfil__["a" /* PerfilPage */],
            regraPage: __WEBPACK_IMPORTED_MODULE_4__pages_regra_regra__["a" /* RegraPage */]
        };
        this.network.onDisconnect().subscribe(function () {
            if (_this.previousStatus === ConnectionStatusEnum.Online) {
                var alert_1 = _this.alertCtrl.create({
                    title: "No Internet",
                    subTitle: "You are without internet.",
                    buttons: [{
                            text: 'Ok'
                        }]
                });
                alert_1.present();
            }
            _this.previousStatus = ConnectionStatusEnum.Offline;
        });
        this.network.onConnect().subscribe(function () {
            //if (this.previousStatus === ConnectionStatusEnum.Offline) {}
            _this.previousStatus = ConnectionStatusEnum.Online;
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.linkRegras = function () {
        window.open('https://s3.amazonaws.com/hockeygame/rules.pdf', '_system');
    };
    MyApp.prototype.logout = function () {
        this.storage.remove('usuario').then(function () {
        });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\hockeyGame\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content">\n  <!-- <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-content class="lista-menu">\n    <ion-list>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages.tabsPage)">\n        <ion-icon name="home"></ion-icon>\n        Home\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages.perfilPage)">\n        <ion-icon class="icone-embratel icone-user"></ion-icon>\n        Profile\n      </button>\n      <button menuClose ion-item icon-left (click)="linkRegras()"> <!-- (click)="nav.setRoot(pages.regraPage)" -->\n        <ion-icon class="icone-embratel icone-informacao"></ion-icon>\n        Rules\n      </button>\n      <button menuClose ion-item icon-left (click)="logout()">\n        <ion-icon class="icone-embratel icone-sair"></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus swipeBackEnabled="false"-->\n<ion-nav [root]="rootPage" #content ></ion-nav>'/*ion-inline-end:"C:\hockeyGame\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_network__["a" /* Network */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ranking_ranking__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(storage, http, loadingCtrl, toastCtrl, platform) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__ranking_ranking__["a" /* RankingPage */];
        this.apiUrl = '/api';
        this.quizDisponivel = null;
        if (this.platform.is('cordova')) {
            this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
        }
        storage.get('usuario').then(function (u) {
            if (u != null) {
                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var postParams = {
                    autenticacao: {
                        usuario: 'game',
                        senha: 'edc2817e979e40b3210dae95c1348fa7'
                    },
                    idUsuario: u.id,
                    type: 'json'
                };
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.http.post(_this.apiUrl + "/quiz/disponivel", postParams, options).subscribe(function (data) {
                    loading_1.dismiss();
                    if (data['_body'] != "" && data['_body'] != null) {
                        console.log("quiz", JSON.parse(data['_body']));
                        if (JSON.parse(data['_body'])) {
                            _this.quizDisponivel = 1;
                        }
                        else {
                            _this.quizDisponivel = null;
                        }
                    }
                }, function (error) {
                    loading_1.dismiss();
                    _this.toastCtrl.create({ message: "Try again later.", duration: 4500 }).present();
                });
            }
        });
    }
    TabsPage.prototype.removeTabBadge = function () {
        this.quizDisponivel = null;
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\hockeyGame\src\pages\tabs\tabs.html"*/'<ion-tabs id="tabs" tabsPlacement="top" class="tabs-game">\n  <ion-tab [root]="tab1Root" tabIcon="dashboard" tabTitle="home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="quiz" tabTitle="game" tabBadge="{{quizDisponivel}}" (click)="removeTabBadge()"></ion-tab> \n  <ion-tab [root]="tab5Root" tabIcon="ranking" tabTitle="ranking"></ion-tab> \n</ion-tabs>\n'/*ion-inline-end:"C:\hockeyGame\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAlertaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalAlertaPage = (function () {
    function ModalAlertaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.codigo = 0;
        this.codigo = navParams.get('codigo');
    }
    ModalAlertaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalAlertaPage');
    };
    ModalAlertaPage.prototype.doBack = function () {
        this.navCtrl.pop();
    };
    return ModalAlertaPage;
}());
ModalAlertaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'modal-alerta',template:/*ion-inline-start:"C:\hockeyGame\src\pages\modal-alerta\modal-alerta.html"*/'<ion-content padding class="modal-padrao" (click)="doBack()">\n  <div class="modal-content">\n    <!--<ion-icon name="close" (click)="doBack()"></ion-icon>-->\n\n    <!-- MENSAGEM ENVIADA COM SUCESSO -->\n    <div class="text-center sucesso" *ngIf="codigo == 3">\n      <img src="assets/img/icone-check.png" alt="Sucesso">\n      <p class="no-margin-bottom">\n        The email has been sent!\n      </p>\n    </div>\n\n    <div class="text-center sucesso" *ngIf="codigo == 4">\n      <img src="assets/img/icone-check-pontos.png" alt="Sucesso">\n      <p class="no-margin-bottom">\n        Correct! <br />\n        You earned <b>1 point</b>\n      </p>\n    </div>\n\n    <div class="text-center sucesso" *ngIf="codigo == 5">\n      <img src="assets/img/icone-erro.png" alt="Resposta errada">\n      <p class="no-margin-bottom">\n        Wrong...\n      </p>\n    </div>\n\n\n    <div class="text-center sucesso" *ngIf="codigo == 6">\n      <img src="assets/img/icone-check.png" alt="Sucesso">\n      <p class="no-margin-bottom">\n        Profile updated with <br />\n        success!\n      </p>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\hockeyGame\src\pages\modal-alerta\modal-alerta.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ModalAlertaPage);

//# sourceMappingURL=modal-alerta.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_detalhe_dashboard_detalhe__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_historico_quiz_historico__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {ChartModule} from 'angular2-highcharts';

var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams, http, loadingCtrl, toastCtrl, platform, storage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        //styles: [`
        //  chart {
        //    display: block;
        //  }
        //`]
        this.apiUrl = '/api';
        this.LIMIT = 6; //length page
        this.OFFSET = 1; // current
        this.totalPontosPorcentagem = 0;
        this.totalPontos = 0;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
    }
    DashboardPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('usuario').then(function (u) {
            if (u != null) {
                var postParams = {
                    autenticacao: {
                        usuario: 'game',
                        senha: 'edc2817e979e40b3210dae95c1348fa7'
                    },
                    idUsuario: u.id,
                    limit: _this.LIMIT,
                    offset: _this.OFFSET,
                    type: 'json'
                };
                if (_this.platform.is('cordova')) {
                    _this.apiUrl = 'http://hockeygameapi.us-east-1.elasticbeanstalk.com';
                }
                _this.items = [];
                //this.totalNegocioFechado = 3;
                _this.headers.append("Accept", 'application/json');
                _this.headers.append('Content-Type', 'application/json');
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: _this.headers });
                var loading_1 = _this.loadingCtrl.create();
                loading_1.present();
                _this.http.post(_this.apiUrl + "/usuario/historico", postParams, options).subscribe(function (data) {
                    loading_1.dismiss();
                    if (data['_body'] != "" && data['_body'] != null) {
                        _this.totalPontos = JSON.parse(data['_body']).totalPontos;
                        _this.totalPontosPorcentagem = _this.totalPontos * 100 / 60;
                        _this.items = JSON.parse(data['_body']).historicoUsuarios;
                    }
                    else {
                        var errorMessage = "Try again later...";
                        _this.toastCtrl.create({ message: errorMessage, duration: 4500 }).present();
                    }
                }, function (error) {
                    loading_1.dismiss();
                    console.log('Error: ' + JSON.stringify(error));
                    console.log(error); // Error getting the data
                });
            }
        });
    };
    DashboardPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.storage.get('usuario').then(function (u) {
                if (u != null) {
                    _this.OFFSET++;
                    var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: _this.headers });
                    var postParams = {
                        autenticacao: {
                            usuario: 'game',
                            senha: 'edc2817e979e40b3210dae95c1348fa7'
                        },
                        idUsuario: u.id,
                        limit: _this.LIMIT,
                        offset: _this.OFFSET,
                        type: 'json'
                    };
                    //let loading = this.loadingCtrl.create();
                    //loading.present();
                    _this.http.post(_this.apiUrl + "/usuario/historico", postParams, options).subscribe(function (data) {
                        //loading.dismiss();
                        if (data['_body'] != "" && data['_body'] != null) {
                            //this.items = JSON.parse(data['_body']).historicoUsuarios;
                            var arr = JSON.parse(data['_body']).historico;
                            if (arr == undefined || arr.length == 0) {
                                var message = "There are no more...";
                                _this.toastCtrl.create({ message: message, duration: 2500 }).present();
                                return;
                            }
                            for (var i = 0; i < arr.length; i++) {
                                _this.items.push(arr[i]);
                            }
                        }
                        else {
                            var errorMessage = "Try again later.";
                            _this.toastCtrl.create({ message: errorMessage, duration: 5000 }).present();
                        }
                    }, function (error) {
                        // loading.dismiss();
                        console.log('Error: ' + JSON.stringify(error));
                        console.log(error); // Error getting the data
                    });
                    infiniteScroll.complete();
                }
            });
        }, 500);
    };
    DashboardPage.prototype.itemTapped = function (event, item) {
        console.log(item);
        if (item.status.id != 6) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__dashboard_detalhe_dashboard_detalhe__["a" /* DashboardDetalhePage */], { item: item });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__quiz_historico_quiz_historico__["a" /* QuizHistoricoPage */], { item: item });
        }
    };
    return DashboardPage;
}());
DashboardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dashboard',template:/*ion-inline-start:"C:\hockeyGame\src\pages\dashboard\dashboard.html"*/'<ion-header class="bgc-azul">\n  <ion-navbar class="text-center">\n    <button class="position-absolute" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <img src="assets/img/logo-center.png" alt="">\n  </ion-navbar>\n</ion-header>\n<ion-content>\n\n  <div class="text-center">\n    <!-- <div class="meta">\n      <div id="donuts" style="width: 100%; height: 100%; margin: 0;">\n      </div>\n      <div class="geral">{{totalNegocioFechadoGeralPorcentagem < 10 ? \'0\' + totalNegocioFechadoGeralPorcentagem : totalNegocioFechadoGeralPorcentagem}}%</div>\n      <div class="mensal">{{totalNegocioFechadoGeralMesPorcentagem < 10 ? \'0\' + totalNegocioFechadoGeralMesPorcentagem : totalNegocioFechadoGeralMesPorcentagem}}%</div>\n    </div> -->\n    \n    <div class="barra-pontuacao">\n      <div class="legenda">\n        <div class="pontuacao" [ngClass]="{\'atingida\' : (totalPontos >= 60)}">\n           <ion-icon [name]="(totalPontos >= 60) ? \'checkmark-circle\' :\'lock\'"></ion-icon>\n          <p>60 <br /><span>points</span></p>\n        </div>\n        <div class="pontuacao" [ngClass]="{\'atingida\' : (totalPontos >= 50)}">\n           <ion-icon [name]="(totalPontos >= 50) ? \'checkmark-circle\' :\'lock\'"></ion-icon>\n          <p>50 <br /><span>points</span></p>\n        </div>\n        <div class="pontuacao" [ngClass]="{\'atingida\' : (totalPontos >= 40)}">\n           <ion-icon [name]="(totalPontos >= 40) ? \'checkmark-circle\' :\'lock\'"></ion-icon>\n          <p>40 <br /><span>points</span></p>\n        </div>\n        <div class="pontuacao" [ngClass]="{\'atingida\' : (totalPontos >= 30)}">\n           <ion-icon [name]="(totalPontos >= 30) ? \'checkmark-circle\' :\'lock\'"></ion-icon>\n          <p>30 <br /><span>points</span></p>\n        </div>\n        <div class="pontuacao invisivel">\n           <ion-icon name="lock"></ion-icon>\n          <p>20 <br /><span>points</span></p>\n        </div>\n        <div class="pontuacao" [ngClass]="{\'atingida\' : (totalPontos >= 10)}">\n          <ion-icon [name]="(totalPontos >= 10) ? \'checkmark-circle\' :\'lock\'"></ion-icon>\n          <p>10 <br /><span>points</span></p>\n        </div>\n      </div>\n      <div class="barra"> \n        <span class="retangulo" [ngStyle]="{\'height\': totalPontosPorcentagem +\'%\'}"> <!-- style=" 20%" -->\n          <p class="valor">\n            {{totalPontos}}<br />\n            <span>points</span>\n          </p>\n        </span>\n      </div>\n    </div>\n  </div>\n  <br />    \n\n  <ion-list class="lista-full">\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-grid *ngIf="item.status.id == 6">\n        <ion-row align-items-center>\n          <ion-col col-7>\n            <p class="no-margin-bottom">\n              <b>Quiz</b> <br />\n              {{item.data | date:\'dd/MM/yyyy HH:mm\'}}\n            </p>\n          </ion-col>\n          <ion-col col-5>\n            <div class="pontos">\n              <p>{{item.pontos}} pts</p>\n              <div class="icone">\n                <img src="assets/img/icone-quiz.png" alt="">\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </button>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"C:\hockeyGame\src\pages\dashboard\dashboard.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], DashboardPage);

//# sourceMappingURL=dashboard.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map