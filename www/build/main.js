webpackJsonp([12],{

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantType; });
var RestaurantType;
(function (RestaurantType) {
    RestaurantType[RestaurantType["bandejao"] = 1] = "bandejao";
    RestaurantType[RestaurantType["restaurant"] = 2] = "restaurant";
})(RestaurantType || (RestaurantType = {}));
;
;
//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedType; });
var FeedType;
(function (FeedType) {
    FeedType[FeedType["internship"] = 0] = "internship";
    FeedType[FeedType["research"] = 1] = "research";
    FeedType[FeedType["restaurant"] = 2] = "restaurant";
    FeedType[FeedType["event"] = 3] = "event";
    FeedType[FeedType["news"] = 4] = "news";
})(FeedType || (FeedType = {}));
;
;
;
//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auths_auths__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authsProvider, app) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            statusBar.backgroundColorByHexString('#F7931E');
            if (__WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser) {
                app.getActiveNav().push(__WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]);
            }
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auths_auths__["a" /* AuthsProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConectadaHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConectadaHeaderComponent = (function () {
    function ConectadaHeaderComponent() {
    }
    ConectadaHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'conectada-header',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\components\conectada-header\conectada-header.html"*/'<ion-title>Conectada<span class="grey-text">.io</span></ion-title>'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\components\conectada-header\conectada-header.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ConectadaHeaderComponent);
    return ConectadaHeaderComponent;
}());

//# sourceMappingURL=conectada-header.js.map

/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
        this.markers = [];
        this.selectedMarker = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.googleOptions = {};
    }
    MapComponent.prototype.addMarker = function (marker) {
        var _this = this;
        var title = marker.title, latitude = marker.latitude, longitude = marker.longitude;
        var googleMarker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: this.map, title: title,
        });
        new google.maps.event.addListener(googleMarker, 'click', function () {
            _this.selectedMarker.emit({ marker: marker, googleMarker: googleMarker, map: _this.map });
        });
    };
    MapComponent.prototype.buildGoogleOptions = function () {
        var _a = this.config, initialLatitude = _a.initialLatitude, initialLongitude = _a.initialLongitude, zoom = _a.zoom, mapTypeControl = _a.mapTypeControl, scaleControl = _a.scaleControl, streetViewControl = _a.streetViewControl, rotateControl = _a.rotateControl;
        var center = new google.maps.LatLng(initialLatitude, initialLongitude);
        this.googleOptions = {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: center, zoom: zoom, mapTypeControl: mapTypeControl, scaleControl: scaleControl,
            streetViewControl: streetViewControl, rotateControl: rotateControl
        };
    };
    MapComponent.prototype.refresh = function () {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.googleOptions);
    };
    MapComponent.prototype.addMarkers = function () {
        var _this = this;
        this.markers.forEach(function (marker) { return _this.addMarker(marker); });
    };
    MapComponent.prototype.ngOnChanges = function () {
        this.buildGoogleOptions();
        this.refresh();
        this.addMarkers();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "markers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "selectedMarker", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapComponent.prototype, "mapElement", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'map',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\components\map\map.html"*/'<div #map id="map"></div>'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\components\map\map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_userStatus__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthsProvider = (function () {
    function AuthsProvider() {
        this.userStatus = __WEBPACK_IMPORTED_MODULE_2__interfaces_userStatus__["a" /* UserStatus */].loggedOut;
        // this is not private
        var config = {
            apiKey: "AIzaSyD0HEmK2wQ9K0HVm7_zJs0ShkT0SlcBBA0",
            authDomain: "conectada-app.firebaseapp.com",
            databaseURL: "https://conectada-app.firebaseio.com",
            projectId: "conectada-app",
            storageBucket: "conectada-app.appspot.com",
            messagingSenderId: "800737561462"
        };
        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.initializeApp(config);
        this.googleProvider = new __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.GoogleAuthProvider();
        this.updateUserStatus();
    }
    AuthsProvider.prototype.updateUserStatus = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser) {
            this.userStatus = __WEBPACK_IMPORTED_MODULE_2__interfaces_userStatus__["a" /* UserStatus */].authorized;
        }
        else {
            this.userStatus = __WEBPACK_IMPORTED_MODULE_2__interfaces_userStatus__["a" /* UserStatus */].loggedOut;
        }
    };
    AuthsProvider.prototype.getLoginStatus = function () {
        return Promise.resolve(this.userStatus);
    };
    AuthsProvider.prototype.login = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithPopup(this.googleProvider)
            .then(function (then) {
            console.log(then);
            return __WEBPACK_IMPORTED_MODULE_2__interfaces_userStatus__["a" /* UserStatus */].authorized;
        })
            .catch(function (err) {
            console.log(err);
            return __WEBPACK_IMPORTED_MODULE_2__interfaces_userStatus__["a" /* UserStatus */].loggedOut;
        });
    };
    AuthsProvider.prototype.logout = function () {
        return __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signOut()
            .then(function () { return __WEBPACK_IMPORTED_MODULE_2__interfaces_userStatus__["a" /* UserStatus */].loggedOut; })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_2__interfaces_userStatus__["a" /* UserStatus */].failed; });
    };
    AuthsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthsProvider);
    return AuthsProvider;
}());

//# sourceMappingURL=auths.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invite_invite__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inviteSent_inviteSent__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__interfaces_userStatus__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auths_auths__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(nav, authsProvider) {
        this.nav = nav;
        this.authsProvider = authsProvider;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        return this.authsProvider.login()
            .then(function (auth) {
            switch (auth) {
                case __WEBPACK_IMPORTED_MODULE_6__interfaces_userStatus__["a" /* UserStatus */].invite:
                    return __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* setNavRoot */](_this.nav, __WEBPACK_IMPORTED_MODULE_4__invite_invite__["a" /* InvitePage */]);
                case __WEBPACK_IMPORTED_MODULE_6__interfaces_userStatus__["a" /* UserStatus */].inviteSent:
                    return __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* setNavRoot */](_this.nav, __WEBPACK_IMPORTED_MODULE_5__inviteSent_inviteSent__["a" /* InviteSentPage */]);
                case __WEBPACK_IMPORTED_MODULE_6__interfaces_userStatus__["a" /* UserStatus */].authorized:
                    return __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* setNavRoot */](_this.nav, __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            }
        });
    };
    LoginPage.prototype.goToInvitePage = function () {
        __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* setNavRoot */](this.nav, __WEBPACK_IMPORTED_MODULE_4__invite_invite__["a" /* InvitePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\login\login.html"*/'<ion-content class="login">\n\n  <div class="logo"></div>\n\n  <div class="buttons">\n\n    <button ion-button color="primary" (click)="login()" medium icon-start>\n\n      Entrar com o Google\n\n    </button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auths_auths__["a" /* AuthsProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__opportunities_opportunities__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__meals_meals__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_reports__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab0Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__opportunities_opportunities__["a" /* OpportunitiesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__meals_meals__["a" /* MealsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__reports_reports__["a" /* ReportsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab0Root" tabTitle="início" swipeBackEnabled="true" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab1Root" tabTitle="eventos" tabIcon="calendar"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="oportunidades" tabIcon="star"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="restaurantes" tabIcon="restaurant"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="reportar" tabIcon="megaphone"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\tabs\tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_opportunity__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_opportunities_opportunities__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OpportunityModalPage = (function () {
    function OpportunityModalPage(viewCtrl, modalCtrl, opportunitiesProvider, params) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.opportunitiesProvider = opportunitiesProvider;
        this.params = params;
    }
    OpportunityModalPage.prototype.sendInterest = function () {
        var _this = this;
        this.viewCtrl.dismiss();
        this.sendInterestSub = this.opportunitiesProvider.sendInterest(this.opportunity)
            .subscribe(function (response) {
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], response);
            modal.present();
        });
    };
    OpportunityModalPage.prototype.setOpportunityTitleByType = function () {
        if (this.opportunity.opportunityType === __WEBPACK_IMPORTED_MODULE_3__interfaces_opportunity__["a" /* OpportunityType */].internship) {
            this.title = 'Estágio';
        }
        if (this.opportunity.opportunityType === __WEBPACK_IMPORTED_MODULE_3__interfaces_opportunity__["a" /* OpportunityType */].research) {
            this.title = 'Pesquisa';
        }
    };
    OpportunityModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OpportunityModalPage.prototype.ngOnInit = function () {
        this.opportunity = {
            id: this.params.get('id'),
            opportunityType: this.params.get('opportunityType'),
            title: this.params.get('title'),
            description: this.params.get('description'),
        };
        this.setOpportunityTitleByType();
    };
    OpportunityModalPage.prototype.ngOnDestroy = function () {
        if (this.sendInterestSub) {
            this.sendInterestSub.unsubscribe();
        }
    };
    OpportunityModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-opportunity-modal',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\opportunityModal\opportunityModal.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="response">\n\n    <ion-label>\n\n        {{ opportunity.title }}\n\n    </ion-label>\n\n    <ion-label>\n\n        {{ opportunity.description }}\n\n    </ion-label>\n\n  </div>\n\n\n\n  <div class="buttons">\n\n    <button ion-button round (click)="sendInterest()">Declarar interesse</button>\n\n    <button ion-button outline round (click)="dismiss()">Fechar</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\opportunityModal\opportunityModal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_opportunities_opportunities__["a" /* OpportunitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]])
    ], OpportunityModalPage);
    return OpportunityModalPage;
}());

//# sourceMappingURL=opportunityModal.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteSentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InviteSentPage = (function () {
    function InviteSentPage() {
    }
    InviteSentPage.prototype.refresh = function ($event) {
        setTimeout(function () { return $event.complete(); }, 1000);
    };
    InviteSentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invite-sent',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\inviteSent\inviteSent.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <conectada-header></conectada-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      refreshingSpinner="crescent">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div class="logo"></div>\n\n\n\n  <ion-card-content>\n\n    <div>\n\n      <p>\n\n        Name, seu convite está sendo analisado. Quando chegarmos a uma conclusão, você será o primeiro a saber.\n\n      </p>\n\n      <ion-note style="font-size: 12px">\n\n        Qualquer dúvida, crítica ou sugestão entre em contato conosco através do contato@conectada.io\n\n      </ion-note>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\inviteSent\inviteSent.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], InviteSentPage);
    return InviteSentPage;
}());

//# sourceMappingURL=inviteSent.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getRootNav */
/* harmony export (immutable) */ __webpack_exports__["a"] = setNavRoot;
/* unused harmony export setNavPush */
/* unused harmony export createAlert */
function getRootNav(nav) {
    var root = nav;
    while (root.parent != null) {
        root = root.parent;
    }
    return root;
}
function setNavRoot(nav, Component) {
    var root = getRootNav(nav);
    root.popToRoot();
    root.setRoot(Component);
}
function setNavPush(nav, Component) {
    var root = getRootNav(nav);
    root.popToRoot();
    root.push(Component);
}
function createAlert(alertCtrl, title, subTitle) {
    var alert = alertCtrl.create({
        title: title, subTitle: subTitle, buttons: ['OK']
    });
    alert.present();
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var response = {
    title: 'Interesse enviado',
    description: 'Seu interesse nessa vaga foi enviado com sucesso!',
};
var OpportunitiesProvider = (function () {
    function OpportunitiesProvider(apiProvider) {
        this.apiProvider = apiProvider;
    }
    OpportunitiesProvider.prototype.sendInterest = function (opportunity) {
        return this.apiProvider.submitInterest(opportunity)
            .map(function () { return response; });
    };
    OpportunitiesProvider.prototype.getOpportunities = function () {
        return this.apiProvider.getOpportunities();
    };
    OpportunitiesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */]])
    ], OpportunitiesProvider);
    return OpportunitiesProvider;
}());

//# sourceMappingURL=opportunities.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_event__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_events_events__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsPage = (function () {
    function EventsPage(eventsProvider) {
        this.eventsProvider = eventsProvider;
        this.page = 'parties';
        this.parties = [];
        this.academics = [];
        this.mapConfig = {};
        this.markers = [];
    }
    EventsPage.prototype.showParties = function () {
        this.markers = this.parties;
    };
    EventsPage.prototype.showAcademics = function () {
        this.markers = this.academics;
    };
    EventsPage.prototype.filterEventsByCategory = function (events) {
        var groupByType = __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* groupBy */](__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* prop */]('eventType'));
        var groupedEvents = groupByType(events);
        this.parties = groupedEvents[__WEBPACK_IMPORTED_MODULE_2__interfaces_event__["a" /* EventType */].party];
        this.academics = groupedEvents[__WEBPACK_IMPORTED_MODULE_2__interfaces_event__["a" /* EventType */].academic];
    };
    EventsPage.prototype.handleSelectedMarker = function (selected) {
        var title = selected.marker.title;
        var infoWindow = new google.maps.InfoWindow;
        var htmlTitle = "<b>" + title + "</b>";
        infoWindow.setContent(htmlTitle);
        infoWindow.open(selected.map, selected.googleMarker);
    };
    EventsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var eventsObservable = this.eventsProvider.getEvents();
        var mapConfigObservable = this.eventsProvider.getInitialMapConfig();
        this.eventsSub = eventsObservable
            .subscribe(function (events) { return (_this.filterEventsByCategory(events)); });
        this.mapConfigSub = mapConfigObservable
            .subscribe(function (mapConfig) { return (_this.mapConfig = mapConfig); });
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].concat(eventsObservable, mapConfigObservable)
            .subscribe(function () { return _this.showParties(); });
    };
    EventsPage.prototype.ngOnDestroy = function () {
        this.eventsSub.unsubscribe();
        this.mapConfigSub.unsubscribe();
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\events\events.html"*/'<ion-header>\n\n  <ion-segment [(ngModel)]="page">\n\n    <ion-segment-button value="parties" (click)="showParties()">\n\n      Festas\n\n    </ion-segment-button>\n\n    <ion-segment-button value="academics" (click)="showAcademics()">\n\n      Eventos\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <map class="map"\n\n  [markers]="markers"\n\n  [config]="mapConfig"\n\n  (selectedMarker)="handleSelectedMarker($event)"></map>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\events\events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_events_events__["a" /* EventsProvider */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_home_home__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_feed__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__opportunityModal_opportunityModal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_modal__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(nav, modalCtrl, homeProvider) {
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.homeProvider = homeProvider;
        this.feeds = [];
    }
    HomePage.prototype.openProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    HomePage.prototype.fillFeedInfo = function (feed, typeText, icon, showMore, moreText) {
        if (moreText === void 0) { moreText = undefined; }
        feed.feedTypeText = typeText;
        feed.icon = icon;
        feed.showMore = showMore;
        feed.moreText = moreText;
        return feed;
    };
    HomePage.prototype.mapFeedsByType = function (feeds) {
        var _this = this;
        return feeds.map(function (feed) {
            feed.shortDescription = feed.description.slice(0, 100);
            feed.showMoreText = 'Ver mais';
            switch (feed.feedType) {
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_feed__["a" /* FeedType */].internship:
                    _this.fillFeedInfo(feed, 'Estágio', 'star', function () { return _this.showOpportunity(feed); });
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_feed__["a" /* FeedType */].research:
                    _this.fillFeedInfo(feed, 'Pesquisa', 'star', function () { return _this.showOpportunity(feed); });
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_feed__["a" /* FeedType */].restaurant:
                    _this.fillFeedInfo(feed, 'Restaurante', 'restaurant', function () { return _this.showRestaurant(feed); });
                    break;
                case __WEBPACK_IMPORTED_MODULE_4__interfaces_feed__["a" /* FeedType */].event:
                    _this.fillFeedInfo(feed, 'Evento', 'calendar', function () { }, '');
                    break;
                default:
                    _this.fillFeedInfo(feed, 'Informativo', 'text', function () { return _this.showText(feed); });
                    break;
            }
            return feed;
        });
    };
    HomePage.prototype.showOpportunity = function (viewFeed) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__opportunityModal_opportunityModal__["a" /* OpportunityModalPage */], {
            id: viewFeed.id,
            opportunityType: viewFeed.feedType,
            title: viewFeed.name,
            description: viewFeed.description,
        });
        modal.present();
    };
    HomePage.prototype.showRestaurant = function (viewFeed) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modal_modal__["a" /* ModalPage */], {
            title: viewFeed.name,
            description: viewFeed.description,
        });
        modal.present();
    };
    HomePage.prototype.showText = function (viewFeed) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modal_modal__["a" /* ModalPage */], {
            title: viewFeed.name,
            description: viewFeed.description,
        });
        modal.present();
    };
    HomePage.prototype.refresh = function ($event) {
        var _this = this;
        this.feedsSub = this.homeProvider.getFeeds()
            .subscribe(function (feeds) {
            _this.feeds = _this.mapFeedsByType(feeds);
            $event.complete();
        }, function () { return $event.cancel(); });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.feedsSub = this.homeProvider.getFeeds()
            .subscribe(function (feeds) { return (_this.feeds = _this.mapFeedsByType(feeds)); });
    };
    HomePage.prototype.ngOnDestroy = function () {
        this.feedsSub.unsubscribe();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <conectada-header></conectada-header>\n\n    <ion-buttons end>	\n\n      <button ion-button icon-only (click)="openProfile()">	\n\n        <ion-icon name="person"></ion-icon>	\n\n      </button>	\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      refreshingSpinner="crescent">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div class="logo"></div>\n\n\n\n  <ion-card-content *ngIf="feeds.length > 0">\n\n    <div *ngFor="let feed of feeds">\n\n      <p><ion-icon name="{{feed.icon}}"></ion-icon> {{ feed.feedTypeText }}</p>\n\n      <div\n\n        *ngIf="feed.image"\n\n        class="offer-image"\n\n        [style.background-image]="\'url(\' + feed.image + \')\'">\n\n      </div>\n\n      <p>\n\n        <b> {{ feed.name }} </b> {{ feed.shortDescription }}\n\n      </p>\n\n      <ion-note *ngIf="feed.showMoreText.length > 0" style="font-size: 12px" (click)="feed.showMore()">\n\n        {{ feed.showMoreText }}\n\n      </ion-note>\n\n    </div>\n\n  </ion-card-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_home_home__["a" /* HomeProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profiles_profiles__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auths_auths__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = (function () {
    function ProfilePage(modalCtrl, nav, authsProvider, profilesProvider) {
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.authsProvider = authsProvider;
        this.profilesProvider = profilesProvider;
        this.user = {
            uid: '',
            image: '',
            name: '',
            email: '',
            phone: '',
        };
    }
    ProfilePage.prototype.saveProfile = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modal_modal__["a" /* ModalPage */], {
            title: 'Configurações salvas',
            description: 'Seu perfil foi atualizado'
        });
        modal.present();
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.authsProvider.logout()
            .then(function () {
            __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* setNavRoot */](_this.nav, __WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.profileSub = this.profilesProvider.getProfile()
            .subscribe(function (profile) { return (_this.user = profile); });
    };
    ProfilePage.prototype.ngOnDestroy = function () {
        this.profileSub.unsubscribe();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item no-margin no-padding>\n\n    <ion-label> \n\n      <ion-icon name="clipboard" color="gray"></ion-icon>\n\n    </ion-label>\n\n    <ion-input disabled placeholder="Nome" type="text" [value]="user.name"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label> \n\n      <ion-icon name="mail" color="gray"></ion-icon>\n\n    </ion-label>\n\n    <ion-input disabled placeholder="Email" type="text" [value]="user.email"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label> \n\n      <ion-icon name="phone-portrait" color="gray"></ion-icon>\n\n    </ion-label>\n\n    <ion-input disabled placeholder="Número" type="text" [value]="user.phone"></ion-input>\n\n  </ion-item>\n\n\n\n  <div class="buttons">\n\n    <button ion-button round outline (click)="logout()">Sair</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auths_auths__["a" /* AuthsProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_profiles_profiles__["a" /* ProfilesProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_opportunity__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__opportunityModal_opportunityModal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_opportunities_opportunities__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpportunitiesPage = (function () {
    function OpportunitiesPage(modalCtrl, opportunitiesProvider) {
        this.modalCtrl = modalCtrl;
        this.opportunitiesProvider = opportunitiesProvider;
        this.groupedOpportunities = [];
        this.internships = [];
        this.researchs = [];
    }
    OpportunitiesPage.prototype.selectOpportunity = function (opportunity) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__opportunityModal_opportunityModal__["a" /* OpportunityModalPage */], opportunity);
        modal.present();
    };
    OpportunitiesPage.prototype.filterOpportunities = function ($event) {
        var search = $event.target.value.toLowerCase();
        var filterOpportunityByTerm = function (opportunity) {
            var term = opportunity.title.toLowerCase();
            return term.search(search) >= 0;
        };
        this.internships = this.groupedOpportunities[__WEBPACK_IMPORTED_MODULE_3__interfaces_opportunity__["a" /* OpportunityType */].internship]
            .filter(filterOpportunityByTerm);
        this.researchs = this.groupedOpportunities[__WEBPACK_IMPORTED_MODULE_3__interfaces_opportunity__["a" /* OpportunityType */].research]
            .filter(filterOpportunityByTerm);
    };
    OpportunitiesPage.prototype.mapOpportunitiesByType = function (opportunities) {
        var groupByType = __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* groupBy */](__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* prop */]('opportunityType'));
        this.groupedOpportunities = groupByType(opportunities);
        this.internships = this.groupedOpportunities[__WEBPACK_IMPORTED_MODULE_3__interfaces_opportunity__["a" /* OpportunityType */].internship];
        this.researchs = this.groupedOpportunities[__WEBPACK_IMPORTED_MODULE_3__interfaces_opportunity__["a" /* OpportunityType */].research];
    };
    OpportunitiesPage.prototype.refresh = function ($event) {
        var _this = this;
        this.opportunitiesSub = this.opportunitiesProvider.getOpportunities()
            .subscribe(function (opportunities) {
            _this.mapOpportunitiesByType(opportunities);
            $event.complete();
        }, function () { return $event.cancel(); });
    };
    OpportunitiesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.opportunitiesSub = this.opportunitiesProvider.getOpportunities()
            .subscribe(function (opportunities) { return (_this.mapOpportunitiesByType(opportunities)); });
    };
    OpportunitiesPage.prototype.ngOnDestroy = function () {
        this.opportunitiesSub.unsubscribe();
    };
    OpportunitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-opportunities',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\opportunities\opportunities.html"*/'<ion-header>\n\n  <ion-searchbar placeholder="Buscar oportunidade" class="searchbar" (input)="filterOpportunities($event)"></ion-searchbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      refreshingSpinner="crescent">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list *ngIf="internships.length > 0">\n\n    <ion-list-header>\n\n      Estágio\n\n    </ion-list-header>\n\n    <button ion-item *ngFor="let opportunity of internships" (click)="selectOpportunity(opportunity)">\n\n      {{ opportunity.title }}\n\n    </button> \n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="researchs.length > 0">\n\n    <ion-list-header>\n\n      Pesquisa\n\n    </ion-list-header>\n\n    <button ion-item *ngFor="let opportunity of researchs" (click)="selectOpportunity(opportunity)">\n\n      {{ opportunity.title }}\n\n    </button> \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\opportunities\opportunities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_opportunities_opportunities__["a" /* OpportunitiesProvider */]])
    ], OpportunitiesPage);
    return OpportunitiesPage;
}());

//# sourceMappingURL=opportunities.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_restaurant__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_meals_meals__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MealsPage = (function () {
    function MealsPage(modalCtrl, mealsProvider) {
        this.modalCtrl = modalCtrl;
        this.mealsProvider = mealsProvider;
        this.page = 'restaurantes';
        this.bandejoes = [];
        this.restaurants = [];
        this.mapConfig = {};
        this.markers = [];
    }
    MealsPage.prototype.showBandejoes = function () {
        this.markers = this.bandejoes;
    };
    MealsPage.prototype.showRestaurants = function () {
        this.markers = this.restaurants;
    };
    MealsPage.prototype.filterRestaurantsByCategory = function (restaurants) {
        var groupByType = __WEBPACK_IMPORTED_MODULE_0_ramda__["a" /* groupBy */](__WEBPACK_IMPORTED_MODULE_0_ramda__["b" /* prop */]('restaurantType'));
        var groupedRestaurants = groupByType(restaurants);
        this.bandejoes = groupedRestaurants[__WEBPACK_IMPORTED_MODULE_4__interfaces_restaurant__["a" /* RestaurantType */].bandejao];
        this.restaurants = groupedRestaurants[__WEBPACK_IMPORTED_MODULE_4__interfaces_restaurant__["a" /* RestaurantType */].restaurant];
    };
    MealsPage.prototype.handleSelectedMarker = function (selected) {
        var _a = selected.marker, title = _a.title, description = _a.description;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_modal__["a" /* ModalPage */], {
            title: title, description: description
        });
        modal.present();
    };
    MealsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var restaurantsObservable = this.mealsProvider.getRestaurants();
        var mapConfigObservable = this.mealsProvider.getInitialMapConfig();
        this.restaurantsSub = restaurantsObservable
            .subscribe(function (events) { return (_this.filterRestaurantsByCategory(events)); });
        this.mapConfigSub = mapConfigObservable
            .subscribe(function (mapConfig) { return (_this.mapConfig = mapConfig); });
        __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].concat(restaurantsObservable, mapConfigObservable)
            .subscribe(function () { return _this.showBandejoes(); });
    };
    MealsPage.prototype.ngOnDestroy = function () {
        this.restaurantsSub.unsubscribe();
        this.mapConfigSub.unsubscribe();
    };
    MealsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-meals',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\meals\meals.html"*/'<ion-header>\n\n  <ion-segment [(ngModel)]="page">\n\n    <ion-segment-button value="bandejoes" (click)="showBandejoes()">\n\n      Bandejões\n\n    </ion-segment-button>\n\n    <ion-segment-button value="restaurants" (click)="showRestaurants()">\n\n      Restaurantes\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <map class="map"\n\n    [markers]="markers"\n\n    [config]="mapConfig"\n\n    (selectedMarker)="handleSelectedMarker($event)"></map>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\meals\meals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_meals_meals__["a" /* MealsProvider */]])
    ], MealsPage);
    return MealsPage;
}());

//# sourceMappingURL=meals.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reports_reports__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsPage = (function () {
    function ReportsPage(modalCtrl, reportsProvider) {
        this.modalCtrl = modalCtrl;
        this.reportsProvider = reportsProvider;
        this.reportTypes = [];
        this.report = {
            title: '',
            description: '',
            type: 0,
        };
    }
    ReportsPage.prototype.submitReport = function () {
        var _this = this;
        return this.reportsProvider.submitReport(this.report)
            .subscribe(function (data) {
            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_modal__["a" /* ModalPage */], data);
            modal.present();
        });
    };
    ReportsPage.prototype.refresh = function ($event) {
        var _this = this;
        this.reportTypesSub = this.reportsProvider.getReportTypes()
            .subscribe(function (reportTypes) {
            _this.reportTypes = reportTypes;
            $event.complete();
        }, function () { return $event.cancel(); });
    };
    ReportsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.reportTypesSub = this.reportsProvider.getReportTypes()
            .subscribe(function (reportTypes) { return (_this.reportTypes = reportTypes); });
    };
    ReportsPage.prototype.ngOnDestroy = function () {
        this.reportTypesSub.unsubscribe();
    };
    ReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-reports',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\reports\reports.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <ion-title>Reportar</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item no-margin padding-left padding-right>\n\n    <ion-label>Categoria</ion-label>\n\n    <ion-select [(ngModel)]="report.type">\n\n      <ion-option value="{{type.name}}" *ngFor="let type of reportTypes">{{ type.name }}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <ion-item no-margin padding-left padding-right>\n\n    <ion-input type="text" placeholder="Assunto"  [(ngModel)]="report.title"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item no-margin padding-left padding-right>\n\n    <ion-textarea rows="5" placeholder="Descrição" [(ngModel)]="report.description"></ion-textarea>\n\n  </ion-item>\n\n\n\n  <div class="buttons">\n\n    <button ion-button round (click)="submitReport()">Reportar para universidade</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\reports\reports.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_reports_reports__["a" /* ReportsProvider */]])
    ], ReportsPage);
    return ReportsPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inviteSent_inviteSent__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvitePage = (function () {
    function InvitePage(nav) {
        this.nav = nav;
        this.invite = {
            city: '',
            state: '',
            university: '',
            campus: '',
            universityEmail: '',
            email: '',
            age: '',
            course: ''
        };
    }
    InvitePage.prototype.sendInvite = function () {
        __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* setNavRoot */](this.nav, __WEBPACK_IMPORTED_MODULE_3__inviteSent_inviteSent__["a" /* InviteSentPage */]);
    };
    InvitePage.prototype.refresh = function ($event) {
        setTimeout(function () { return $event.complete(); }, 1000);
    };
    InvitePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invite',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\invite\invite.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <conectada-header></conectada-header>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content\n\n      pullingIcon="arrow-dropdown"\n\n      refreshingSpinner="crescent">\n\n    </ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <div class="logo"></div>\n\n\n\n  <ion-card-content>\n\n    <div>\n\n      <p>\n\n        Oi, Name. Estamos felizes que esteja aqui. Mas antes de começar, podemos te conhecer um pouco mais?\n\n      </p>\n\n      <ion-note style="font-size: 12px">\n\n        Por favor, preencha seu complemento de cadastro e solicite um convite. Dica: são apenas 8 perguntinhas!\n\n      </ion-note>\n\n    </div>\n\n  </ion-card-content>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label stacked>Qual cidade você mora?</ion-label>\n\n    <ion-input type="text" [value]="invite.city"></ion-input>\n\n  </ion-item>\n\n  <ion-note style="font-size: 12px">\n\n    Exemplo: Rio de Janeiro\n\n  </ion-note>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label stacked>Em qual estado ela fica?</ion-label>\n\n    <ion-input type="text" [value]="invite.state"></ion-input>\n\n  </ion-item>\n\n  <ion-note style="font-size: 12px">\n\n    Exemplo: Rio de Janeiro\n\n  </ion-note>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label stacked>Onde você estuda?</ion-label>\n\n    <ion-input type="text" [value]="invite.university"></ion-input>\n\n  </ion-item>\n\n  <ion-note style="font-size: 12px">\n\n    Exemplo: UFRJ\n\n  </ion-note>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label stacked>Você estuda em qual campus?</ion-label>\n\n    <ion-input type="text" [value]="invite.campus"></ion-input>\n\n  </ion-item>\n\n  <ion-note style="font-size: 12px">\n\n    Exemplo: Cidade universitária\n\n  </ion-note>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label stacked>Qual curso você faz?</ion-label>\n\n    <ion-input type="text" [value]="invite.course"></ion-input>\n\n  </ion-item>\n\n  <ion-note style="font-size: 12px">\n\n    Exemplo: Letras - Francês\n\n  </ion-note>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label stacked>Qual é a sua idade?</ion-label>\n\n    <ion-input type="number" [value]="invite.age"></ion-input>\n\n  </ion-item>\n\n  <ion-note style="font-size: 12px">\n\n    Exemplo: 18\n\n  </ion-note>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label stacked>Qual é o seu email pessoal?</ion-label>\n\n    <ion-input type="email" [value]="invite.email"></ion-input>\n\n  </ion-item>\n\n  <ion-note style="font-size: 12px">\n\n    Exemplo: nome@email.com\n\n  </ion-note>\n\n\n\n  <ion-item no-margin no-padding>\n\n    <ion-label stacked>Possui email universitário? Se sim, qual?</ion-label>\n\n    <ion-input type="text" [value]="invite.universityEmail"></ion-input>\n\n  </ion-item>\n\n  <ion-note style="font-size: 12px">\n\n    Exemplo: Sim, nome@universidade.com\n\n  </ion-note>\n\n\n\n  <div class="buttons">\n\n    <button ion-button round (click)="sendInvite()">Pedir convite</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\invite\invite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], InvitePage);
    return InvitePage;
}());

//# sourceMappingURL=invite.js.map

/***/ }),

/***/ 283:
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
webpackEmptyAsyncContext.id = 283;

/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/events/events.module": [
		1187,
		11
	],
	"../pages/home/home.module": [
		1188,
		10
	],
	"../pages/invite/invite.module": [
		1194,
		8
	],
	"../pages/inviteSent/inviteSent.module": [
		1189,
		9
	],
	"../pages/login/login.module": [
		1190,
		7
	],
	"../pages/meals/meals.module": [
		1198,
		6
	],
	"../pages/modal/modal.module": [
		1191,
		5
	],
	"../pages/opportunities/opportunities.module": [
		1195,
		4
	],
	"../pages/opportunityModal/opportunityModal.module": [
		1192,
		3
	],
	"../pages/profile/profile.module": [
		1193,
		2
	],
	"../pages/reports/reports.module": [
		1197,
		1
	],
	"../pages/tabs/tabs.module": [
		1196,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 328;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var mapConfig = {
    initialLatitude: -22.858926,
    initialLongitude: -43.2285518,
    zoom: 13,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false
};
var EventsProvider = (function () {
    function EventsProvider(apiProvider) {
        this.apiProvider = apiProvider;
    }
    EventsProvider.prototype.getInitialMapConfig = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(Promise.resolve(mapConfig));
    };
    EventsProvider.prototype.getEvents = function () {
        return this.apiProvider.getEvents();
    };
    EventsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */]])
    ], EventsProvider);
    return EventsProvider;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunityType; });
var OpportunityType;
(function (OpportunityType) {
    OpportunityType[OpportunityType["internship"] = 1] = "internship";
    OpportunityType[OpportunityType["research"] = 2] = "research";
})(OpportunityType || (OpportunityType = {}));
;
;
//# sourceMappingURL=opportunity.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MealsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var mapConfig = {
    initialLatitude: -22.858926,
    initialLongitude: -43.2285518,
    zoom: 14,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false
};
var MealsProvider = (function () {
    function MealsProvider(apiProvider) {
        this.apiProvider = apiProvider;
    }
    MealsProvider.prototype.getInitialMapConfig = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(Promise.resolve(mapConfig));
    };
    MealsProvider.prototype.getRestaurants = function () {
        return this.apiProvider.getRestaurants();
    };
    MealsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */]])
    ], MealsProvider);
    return MealsProvider;
}());

//# sourceMappingURL=meals.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var response = {
    title: 'Reportado',
    description: 'Reportado com sucesso!',
};
var ReportsProvider = (function () {
    function ReportsProvider(apiProvider) {
        this.apiProvider = apiProvider;
    }
    ReportsProvider.prototype.getReportTypes = function () {
        return this.apiProvider.getReportTypes();
    };
    ReportsProvider.prototype.submitReport = function (report) {
        return this.apiProvider.submitReport(report)
            .map(function () { return response; });
    };
    ReportsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */]])
    ], ReportsProvider);
    return ReportsProvider;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatus; });
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["loggedOut"] = 0] = "loggedOut";
    UserStatus[UserStatus["failed"] = 1] = "failed";
    UserStatus[UserStatus["invite"] = 2] = "invite";
    UserStatus[UserStatus["inviteSent"] = 3] = "inviteSent";
    UserStatus[UserStatus["authorized"] = 4] = "authorized";
})(UserStatus || (UserStatus = {}));
;
//# sourceMappingURL=userStatus.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProfilesProvider = (function () {
    function ProfilesProvider(apiProvider) {
        this.apiProvider = apiProvider;
    }
    ProfilesProvider.prototype.getProfile = function () {
        return this.apiProvider.getProfile();
    };
    ProfilesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */]])
    ], ProfilesProvider);
    return ProfilesProvider;
}());

//# sourceMappingURL=profiles.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var HomeProvider = (function () {
    function HomeProvider(apiProvider) {
        this.apiProvider = apiProvider;
    }
    HomeProvider.prototype.getFeeds = function () {
        return this.apiProvider.getHome();
    };
    HomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* ApiProvider */]])
    ], HomeProvider);
    return HomeProvider;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(571);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(1179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_home_home__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_events_events__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_meals_meals__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_opportunities_opportunities__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_profiles_profiles__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_reports_reports__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auths_auths__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_api__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_invite_invite__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_inviteSent_inviteSent__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_events_events__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_meals_meals__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_opportunities_opportunities__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_opportunityModal_opportunityModal__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_reports_reports__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_facebook__ = __webpack_require__(1184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_conectada_header_conectada_header__ = __webpack_require__(1185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_map_map__ = __webpack_require__(1186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_meals_meals__["a" /* MealsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_opportunityModal_opportunityModal__["a" /* OpportunityModalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_opportunities_opportunities__["a" /* OpportunitiesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_invite_invite__["a" /* InvitePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_inviteSent_inviteSent__["a" /* InviteSentPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_conectada_header_conectada_header__["a" /* ConectadaHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_map_map__["a" /* MapComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/events/events.module#EventsModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inviteSent/inviteSent.module#InviteSentModule', name: 'InviteSentPage', segment: 'inviteSent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal/modal.module#ModalModule', name: 'ModalPage', segment: 'modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opportunityModal/opportunityModal.module#OpportunityModalModule', name: 'OpportunityModalPage', segment: 'opportunityModal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfileModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invite/invite.module#InviteModule', name: 'InvitePage', segment: 'invite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opportunities/opportunities.module#OpportunitiesModule', name: 'OpportunitiesPage', segment: 'opportunities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reports/reports.module#ReportsModule', name: 'ReportsPage', segment: 'reports', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meals/meals.module#MealsModule', name: 'MealsPage', segment: 'meals', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_meals_meals__["a" /* MealsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_opportunityModal_opportunityModal__["a" /* OpportunityModalPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_opportunities_opportunities__["a" /* OpportunitiesPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_invite_invite__["a" /* InvitePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_inviteSent_inviteSent__["a" /* InviteSentPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_12__providers_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_events_events__["a" /* EventsProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_meals_meals__["a" /* MealsProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_opportunities_opportunities__["a" /* OpportunitiesProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_profiles_profiles__["a" /* ProfilesProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_reports_reports__["a" /* ReportsProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auths_auths__["a" /* AuthsProvider */],
                __WEBPACK_IMPORTED_MODULE_5__providers_home_home__["a" /* HomeProvider */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiProvider = (function () {
    function ApiProvider() {
    }
    ApiProvider.prototype.mapDBSnapshot = function (result) {
        var value = result.val();
        return Object.keys(value).map(function (key) {
            var entry = value[key];
            entry.id = key;
            return entry;
        });
    };
    ApiProvider.prototype.getEntriesFromDBName = function (databaseName) {
        var database = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.database().ref("/v1/" + databaseName);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(database, 'value')
            .map(this.mapDBSnapshot);
    };
    ApiProvider.prototype.getEvents = function () {
        return this.getEntriesFromDBName('events');
    };
    ApiProvider.prototype.getOpportunities = function () {
        return this.getEntriesFromDBName('opportunities');
    };
    ApiProvider.prototype.getHome = function () {
        return this.getEntriesFromDBName('home');
    };
    ApiProvider.prototype.getRestaurants = function () {
        return this.getEntriesFromDBName('restaurants');
    };
    ApiProvider.prototype.getReportTypes = function () {
        return this.getEntriesFromDBName('types/reports');
    };
    ApiProvider.prototype.getProfile = function () {
        var profile = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].from(Promise.resolve(profile))
            .map(function (firebaseUser) { return ({
            uid: firebaseUser.uid,
            name: firebaseUser.displayName,
            image: firebaseUser.photoURL,
            email: firebaseUser.email,
            phone: firebaseUser.phoneNumber,
        }); });
    };
    ApiProvider.prototype.submitReport = function (report) {
        var uid = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser.uid;
        var reports = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.database().ref("/v1/reports/" + uid);
        reports.push(report);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(reports, 'child_added');
    };
    ApiProvider.prototype.submitInterest = function (interest) {
        var uid = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().currentUser.uid;
        var interests = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.database().ref("/v1/interests/" + uid);
        interests.push(interest);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(interests, 'child_added');
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalPage = (function () {
    function ModalPage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.title = '';
        this.description = '';
    }
    ModalPage.prototype.ngOnInit = function () {
        this.title = this.params.get('title');
        this.description = this.params.get('description');
    };
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\modal\modal.html"*/'<ion-header>\n\n  <ion-navbar color="white">\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <div class="response">\n\n    <ion-label>\n\n        {{ description }}\n\n    </ion-label>\n\n  </div>\n\n\n\n  <div class="buttons">\n\n    <button ion-button outline round (click)="dismiss()">Fechar</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathe\Desktop\M2irror\Conectada-App-Old\src\pages\modal\modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 794:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventType; });
;
var EventType;
(function (EventType) {
    EventType[EventType["party"] = 1] = "party";
    EventType[EventType["academic"] = 2] = "academic";
})(EventType || (EventType = {}));
;
;
//# sourceMappingURL=event.js.map

/***/ })

},[566]);
//# sourceMappingURL=main.js.map