import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';
import * as i0 from "@angular/core";
let NgxTinySliderService = class NgxTinySliderService {
    constructor() {
    }
    initSlider(config, elementRef) {
        const extendConfig = Object.assign({ container: elementRef.nativeElement }, config);
        return tns(extendConfig);
    }
    getDefaultConfig() {
        return {
            items: 3,
            mode: 'carousel',
            controlsPosition: 'bottom',
            speed: 400
        };
    }
};
NgxTinySliderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxTinySliderService_Factory() { return new NgxTinySliderService(); }, token: NgxTinySliderService, providedIn: "root" });
NgxTinySliderService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], NgxTinySliderService);
export { NgxTinySliderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbnktc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGlueS1zbGlkZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LXRpbnktc2xpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLDZCQUE2QixDQUFDOztBQUtoRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUUvQjtJQUNBLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBTSxFQUFFLFVBQXNCO1FBQ3ZDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLGFBQWEsRUFBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsVUFBVTtZQUNoQixnQkFBZ0IsRUFBRSxRQUFRO1lBQzFCLEtBQUssRUFBRSxHQUFHO1NBQ1gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztBQWxCWSxvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQzs7R0FDVyxvQkFBb0IsQ0FrQmhDO1NBbEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlbWVudFJlZiwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Ruc30gZnJvbSAndGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4VGlueVNsaWRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgaW5pdFNsaWRlcihjb25maWcsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBjb25zdCBleHRlbmRDb25maWcgPSBPYmplY3QuYXNzaWduKHtjb250YWluZXI6IGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudH0sIGNvbmZpZyk7XG4gICAgcmV0dXJuIHRucyhleHRlbmRDb25maWcpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdENvbmZpZygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IDMsXG4gICAgICBtb2RlOiAnY2Fyb3VzZWwnLFxuICAgICAgY29udHJvbHNQb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBzcGVlZDogNDAwXG4gICAgfTtcbiAgfVxufVxuIl19