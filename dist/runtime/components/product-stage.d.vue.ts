declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    stage: ObjectConstructor;
    products: ObjectConstructor;
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {
    shapeClasses(): "position-absolute bottom-0 left-0 z-index-1 w-100" | "position-relative z-index-1";
    cardWrapperClasses(): (string | {
        'px-1 px-lg-3 nav-item': any;
        'mb-6 mb-md-8 mb-lg-0': boolean;
    })[];
    bgColor(): any;
    cutoffBgColor(): any;
    shape(): any;
    cards(): any;
    overlapping(): any;
}, {
    hasLink(card: any): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    stage: ObjectConstructor;
    products: ObjectConstructor;
    light: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    light: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
