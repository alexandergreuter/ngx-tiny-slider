import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxTinySliderService } from './ngx-tiny-slider.service';
import { NgxTinySliderSettingsInterface } from './interfaces/ngx-tiny-slider-settings.interface';
export declare class NgxTinySliderComponent implements OnInit, OnDestroy {
    private ngxTinySliderService;
    config: NgxTinySliderSettingsInterface;
    slideItemsContainerRef: any;
    sliderInstance: any;
    private aliveObservable;
    domReady: Subject<unknown>;
    private defaultConfig;
    constructor(ngxTinySliderService: NgxTinySliderService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private listenForDomReady;
    private extendConfig;
    private initSlider;
}
