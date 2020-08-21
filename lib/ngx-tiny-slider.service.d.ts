import { ElementRef } from '@angular/core';
export declare class NgxTinySliderService {
    constructor();
    initSlider(config: any, elementRef: ElementRef): import("tiny-slider").TinySliderInstance;
    getDefaultConfig(): {
        items: number;
        mode: string;
        controlsPosition: string;
        speed: number;
    };
}
