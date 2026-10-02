declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    slider: ObjectConstructor;
    tooltip: StringConstructor;
    modalId: StringConstructor;
    products: ObjectConstructor;
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {
    loading: boolean;
    options: {
        type: string;
        hide_min_max: boolean;
        foreground_target_el: null;
        secondary_target_el: null;
        secondary_val: {
            steps: null;
            values: null;
        };
        result_max_target_el: null;
        hide_from_to: boolean;
        result_min_target_el: string;
        extra_classes: string;
    };
}, {
    pricingSliderRange(): any;
    hsIonRangeSliderOptions(): {
        extra_classes: string;
        hide_from_to: boolean;
        min: any;
        max: any;
        from: any;
        step: any;
        result_min_target_el: string;
    };
}, {
    handleRangeSliderStart(slider: any): void;
    handleRangeSliderChange(slider: any): void;
    bindEvents(): void;
    initRangeSlider(): void;
    init(): void;
    pollForJQuery(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    slider: ObjectConstructor;
    tooltip: StringConstructor;
    modalId: StringConstructor;
    products: ObjectConstructor;
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    light: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
