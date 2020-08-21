import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';
import * as i0 from "@angular/core";
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
    NgxTinySliderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxTinySliderService_Factory() { return new NgxTinySliderService(); }, token: NgxTinySliderService, providedIn: "root" });
    NgxTinySliderService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NgxTinySliderService);
    return NgxTinySliderService;
}());
export { NgxTinySliderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRpbnktc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtdGlueS1zbGlkZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LXRpbnktc2xpZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBYSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUFDLEdBQUcsRUFBQyxNQUFNLDZCQUE2QixDQUFDOztBQUtoRDtJQUVFO0lBQ0EsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxNQUFNLEVBQUUsVUFBc0I7UUFDdkMsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsYUFBYSxFQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEYsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELCtDQUFnQixHQUFoQjtRQUNFLE9BQU87WUFDTCxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRSxVQUFVO1lBQ2hCLGdCQUFnQixFQUFFLFFBQVE7WUFDMUIsS0FBSyxFQUFFLEdBQUc7U0FDWCxDQUFDO0lBQ0osQ0FBQzs7SUFqQlUsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csb0JBQW9CLENBa0JoQzsrQkF4QkQ7Q0F3QkMsQUFsQkQsSUFrQkM7U0FsQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50UmVmLCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dG5zfSBmcm9tICd0aW55LXNsaWRlci9zcmMvdGlueS1zbGlkZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hUaW55U2xpZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBpbml0U2xpZGVyKGNvbmZpZywgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGNvbnN0IGV4dGVuZENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe2NvbnRhaW5lcjogZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50fSwgY29uZmlnKTtcbiAgICByZXR1cm4gdG5zKGV4dGVuZENvbmZpZyk7XG4gIH1cblxuICBnZXREZWZhdWx0Q29uZmlnKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogMyxcbiAgICAgIG1vZGU6ICdjYXJvdXNlbCcsXG4gICAgICBjb250cm9sc1Bvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHNwZWVkOiA0MDBcbiAgICB9O1xuICB9XG59XG4iXX0=