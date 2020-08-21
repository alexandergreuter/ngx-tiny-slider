import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { first, takeWhile } from 'rxjs/operators';
import { NgxTinySliderService } from './ngx-tiny-slider.service';
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
export { NgxTinySliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbnktc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC10aW55LXNsaWRlci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtdGlueS1zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsU0FBUyxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRWhHLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQVMvRDtJQVVFLGdDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVRyRCxXQUFNLEdBQW1DLEVBQUUsQ0FBQztRQUk3QyxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUV4QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBR3JFLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3RELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRU8sa0RBQWlCLEdBQXpCO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsUUFBUTthQUNWLElBQUksQ0FDSCxLQUFLLEVBQUUsRUFDUCxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQXBCLENBQW9CLENBQUMsQ0FDdEM7YUFDQSxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyw2Q0FBWSxHQUFwQjtRQUFBLGlCQUVDO1FBREMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVPLDJDQUFVLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDOUcsQ0FBQzs7Z0JBeEN5QyxvQkFBb0I7O0lBVHJEO1FBQVIsS0FBSyxFQUFFOzswREFBNkM7SUFDVjtRQUExQyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOzswRUFBd0I7SUFGdkQsc0JBQXNCO1FBTmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsMEpBQTZDO1lBRTdDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztTQUN0QyxDQUFDO3lDQVcwQyxvQkFBb0I7T0FWbkQsc0JBQXNCLENBbURsQztJQUFELDZCQUFDO0NBQUEsQUFuREQsSUFtREM7U0FuRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpcnN0LCB0YWtlV2hpbGV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtOZ3hUaW55U2xpZGVyU2VydmljZX0gZnJvbSAnLi9uZ3gtdGlueS1zbGlkZXIuc2VydmljZSc7XG5pbXBvcnQge05neFRpbnlTbGlkZXJTZXR0aW5nc0ludGVyZmFjZX0gZnJvbSAnLi9pbnRlcmZhY2VzL25neC10aW55LXNsaWRlci1zZXR0aW5ncy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdGlueS1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJ25neC10aW55LXNsaWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyduZ3gtdGlueS1zbGlkZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hUaW55U2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjb25maWc6IE5neFRpbnlTbGlkZXJTZXR0aW5nc0ludGVyZmFjZSA9IHt9O1xuICBAVmlld0NoaWxkKCdzbGlkZUl0ZW1zJywgeyBzdGF0aWM6IHRydWUgfSkgc2xpZGVJdGVtc0NvbnRhaW5lclJlZjtcblxuICBwdWJsaWMgc2xpZGVySW5zdGFuY2U7XG4gIHByaXZhdGUgYWxpdmVPYnNlcnZhYmxlID0gdHJ1ZTtcblxuICBwdWJsaWMgZG9tUmVhZHkgPSBuZXcgU3ViamVjdCgpO1xuICBwcml2YXRlIGRlZmF1bHRDb25maWcgPSB0aGlzLm5neFRpbnlTbGlkZXJTZXJ2aWNlLmdldERlZmF1bHRDb25maWcoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5neFRpbnlTbGlkZXJTZXJ2aWNlOiBOZ3hUaW55U2xpZGVyU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLmV4dGVuZENvbmZpZygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbmZpZy53YWl0Rm9yRG9tKSB7XG4gICAgICB0aGlzLmxpc3RlbkZvckRvbVJlYWR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdFNsaWRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZy53YWl0Rm9yRG9tKSB7XG4gICAgICB0aGlzLmFsaXZlT2JzZXJ2YWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNsaWRlckluc3RhbmNlICYmIHRoaXMuc2xpZGVySW5zdGFuY2UuZGVzdHJveSkge1xuICAgICAgdGhpcy5zbGlkZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsaXN0ZW5Gb3JEb21SZWFkeSgpIHtcbiAgICB0aGlzLmRvbVJlYWR5XG4gICAgICAucGlwZShcbiAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgdGFrZVdoaWxlKCgpID0+IHRoaXMuYWxpdmVPYnNlcnZhYmxlKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmluaXRTbGlkZXIoKSk7XG4gIH1cblxuICBwcml2YXRlIGV4dGVuZENvbmZpZygpIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZykuZm9yRWFjaChpID0+IHRoaXMuZGVmYXVsdENvbmZpZ1tpXSA9IHRoaXMuY29uZmlnW2ldKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdFNsaWRlcigpIHtcbiAgICB0aGlzLnNsaWRlckluc3RhbmNlID0gdGhpcy5uZ3hUaW55U2xpZGVyU2VydmljZS5pbml0U2xpZGVyKHRoaXMuZGVmYXVsdENvbmZpZywgdGhpcy5zbGlkZUl0ZW1zQ29udGFpbmVyUmVmKTtcbiAgfVxufVxuIl19