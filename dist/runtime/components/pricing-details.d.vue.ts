declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    products: ObjectConstructor;
    headline: StringConstructor;
    description: StringConstructor;
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    toggleSwitch: ObjectConstructor;
    visibleTabs: ArrayConstructor;
    lang: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    pricingDetailTargetSelector(): any;
    langData(): any;
    vatInfo(): any;
    list(): any;
    pricing(): any;
    selectedPlan(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    products: ObjectConstructor;
    headline: StringConstructor;
    description: StringConstructor;
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    toggleSwitch: ObjectConstructor;
    visibleTabs: ArrayConstructor;
    lang: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    lang: string;
    bgColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
