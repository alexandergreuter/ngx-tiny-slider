import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, ViewChild, Component, ViewEncapsulation, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
import { tns } from 'tiny-slider/src/tiny-slider';

var NgxTinySliderService = /** @class */ (function () {
    function NgxTinySliderService() {
    }
    NgxTinySliderService.prototype.initSlider = function (config, elementRef) {
        var extendConfig = Object.assign({ container: elementRef.nativeElement }, config);
        return tns(extendConfig);
    };
    NgxTinySliderService.prototype.getDefaultConfig = function () {
        return {
            items: 3,
            mode: 'carousel',
            controlsPosition: 'bottom',
            speed: 400
        };
    };
    NgxTinySliderService.ɵprov = ɵɵdefineInjectable({ factory: function NgxTinySliderService_Factory() { return new NgxTinySliderService(); }, token: NgxTinySliderService, providedIn: "root" });
    NgxTinySliderService = __decorate([
        Injectable({
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
        this.domReady = new Subject();
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
            .pipe(first(), takeWhile(function () { return _this.aliveObservable; }))
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
        Input(),
        __metadata("design:type", Object)
    ], NgxTinySliderComponent.prototype, "config", void 0);
    __decorate([
        ViewChild('slideItems', { static: true }),
        __metadata("design:type", Object)
    ], NgxTinySliderComponent.prototype, "slideItemsContainerRef", void 0);
    NgxTinySliderComponent = __decorate([
        Component({
            selector: 'ngx-tiny-slider',
            template: "<div class=\"slider-wrapper\">\n  <div class=\"slide-items\" #slideItems>\n    <ng-content select=\".items\"></ng-content>\n  </div>\n</div>\n",
            encapsulation: ViewEncapsulation.None,
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
        NgModule({
            imports: [
                CommonModule
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

/*
 * Public API Surface of ngx-tiny-slider
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTinySliderComponent, NgxTinySliderModule, NgxTinySliderService };
//# sourceMappingURL=ngx-tiny-slider.js.map
