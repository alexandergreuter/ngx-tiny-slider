(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('tiny-slider/src/tiny-slider')) :
    typeof define === 'function' && define.amd ? define('ngx-tiny-slider', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', 'tiny-slider/src/tiny-slider'], factory) :
    (global = global || self, factory(global['ngx-tiny-slider'] = {}, global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators, global.tinySlider));
}(this, (function (exports, core, common, rxjs, operators, tinySlider) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var NgxTinySliderService = /** @class */ (function () {
        function NgxTinySliderService() {
        }
        NgxTinySliderService.prototype.initSlider = function (config, elementRef) {
            var extendConfig = Object.assign({ container: elementRef.nativeElement }, config);
            return tinySlider.tns(extendConfig);
        };
        NgxTinySliderService.prototype.getDefaultConfig = function () {
            return {
                items: 3,
                mode: 'carousel',
                controlsPosition: 'bottom',
                speed: 400
            };
        };
        NgxTinySliderService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function NgxTinySliderService_Factory() { return new NgxTinySliderService(); }, token: NgxTinySliderService, providedIn: "root" });
        NgxTinySliderService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __metadata("design:paramtypes", [])
        ], NgxTinySliderService);
        return NgxTinySliderService;
    }());

    var NgxTinySliderComponent = /** @class */ (function () {
        function NgxTinySliderComponent(ngxTinySliderService) {
            this.ngxTinySliderService = ngxTinySliderService;
            this.config = {};
            this.aliveObservable = true;
            this.domReady = new rxjs.Subject();
            this.defaultConfig = this.ngxTinySliderService.getDefaultConfig();
        }
        NgxTinySliderComponent.prototype.ngOnInit = function () {
            if (this.config) {
                this.extendConfig();
            }
            if (this.config.waitForDom) {
                this.listenForDomReady();
            }
            else {
                this.initSlider();
            }
        };
        NgxTinySliderComponent.prototype.ngOnDestroy = function () {
            if (this.config.waitForDom) {
                this.aliveObservable = false;
            }
            if (this.sliderInstance && this.sliderInstance.destroy) {
                this.sliderInstance.destroy();
            }
        };
        NgxTinySliderComponent.prototype.listenForDomReady = function () {
            var _this = this;
            this.domReady
                .pipe(operators.first(), operators.takeWhile(function () { return _this.aliveObservable; }))
                .subscribe(function () { return _this.initSlider(); });
        };
        NgxTinySliderComponent.prototype.extendConfig = function () {
            var _this = this;
            Object.keys(this.config).forEach(function (i) { return _this.defaultConfig[i] = _this.config[i]; });
        };
        NgxTinySliderComponent.prototype.initSlider = function () {
            this.sliderInstance = this.ngxTinySliderService.initSlider(this.defaultConfig, this.slideItemsContainerRef);
        };
        NgxTinySliderComponent.ctorParameters = function () { return [
            { type: NgxTinySliderService }
        ]; };
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgxTinySliderComponent.prototype, "config", void 0);
        __decorate([
            core.ViewChild('slideItems', { static: true }),
            __metadata("design:type", Object)
        ], NgxTinySliderComponent.prototype, "slideItemsContainerRef", void 0);
        NgxTinySliderComponent = __decorate([
            core.Component({
                selector: 'ngx-tiny-slider',
                template: "<div class=\"slider-wrapper\">\n  <div class=\"slide-items\" #slideItems>\n    <ng-content select=\".items\"></ng-content>\n  </div>\n</div>\n",
                encapsulation: core.ViewEncapsulation.None,
                styles: [".tns-outer{padding:0!important}.tns-outer [hidden]{display:none!important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.tns-slider{transition:.1s}.tns-slider>.tns-item{box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>.tns-item{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:\"\";display:table;clear:both}.tns-horizontal.tns-no-subpixel>.tns-item{float:left}.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>.tns-item{position:absolute;left:-100%;transition:transform .1s,opacity .1s}.tns-gallery>.tns-slide-active{position:relative;left:auto!important}.tns-gallery>.tns-moving{transition:.25s}.tns-autowidth{display:inline-block}.tns-lazy-img{transition:opacity .6s;opacity:.6}.tns-lazy-img.tns-complete{opacity:1}.tns-ah{transition:height .1s}.tns-ovh{overflow:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;z-index:0}.tns-fadeOut,.tns-normal{opacity:0;z-index:-1}.tns-vpfix{white-space:nowrap}.tns-vpfix>div,.tns-vpfix>li{display:inline-block}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333333%;width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:\"\";display:table;clear:both}.tns-t-ct>div{width:1.4285714286%;width:calc(100% / 70);height:10px;float:left}.slider-wrapper-nav-center{position:relative;padding:0 28px}.slider-wrapper-nav-center .tns-controls{position:absolute;width:100%;left:0;top:50%}.slider-wrapper-nav-center .tns-controls [data-controls*=next]{right:0;position:absolute}.slider-wrapper-nav-center .tns-controls [data-controls*=prev]{left:0;position:absolute}.slider-wrapper-custom-nav-style .tns-controls button{width:25px;height:25px;color:grey;border-radius:12px;border:1px solid grey;padding:0;font-size:17px;outline:0}.slider-wrapper-custom-nav-style .tns-controls button:hover{background:#bfbfbf;color:#fff;border:1px solid #bfbfbf}"]
            }),
            __metadata("design:paramtypes", [NgxTinySliderService])
        ], NgxTinySliderComponent);
        return NgxTinySliderComponent;
    }());

    var NgxTinySliderModule = /** @class */ (function () {
        function NgxTinySliderModule() {
        }
        NgxTinySliderModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: [
                    NgxTinySliderComponent
                ],
                providers: [
                    NgxTinySliderService
                ],
                exports: [
                    NgxTinySliderComponent
                ]
            })
        ], NgxTinySliderModule);
        return NgxTinySliderModule;
    }());

    exports.NgxTinySliderComponent = NgxTinySliderComponent;
    exports.NgxTinySliderModule = NgxTinySliderModule;
    exports.NgxTinySliderService = NgxTinySliderService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-tiny-slider.umd.js.map
