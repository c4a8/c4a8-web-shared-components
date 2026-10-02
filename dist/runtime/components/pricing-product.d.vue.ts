declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    product: ObjectConstructor;
    index: NumberConstructor;
    hasAnimation: BooleanConstructor;
    targetSelectorClass: StringConstructor;
    visibleTabs: {
        type: ArrayConstructor;
        default: null;
    };
    selectedPlan: StringConstructor;
    pricing: ObjectConstructor;
}>, {}, {}, {
    title(): any;
    description(): any;
    price(): any;
    additionalUsersFee(): any;
    buttons(): any;
    includedTargetSelectorClass(): string;
    computedTargetSelectorClass(): any;
    visibleTabExpression(): (item: any) => any;
    filterExpression(): (item: any) => any;
    filteredButtons(): any;
    visibleTabButtons(): any;
    buttonClasses(): string;
    pricingProductClasses(): string[];
    pricingProductPriceColumns(): string[];
}, {
    updatePrices(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    product: ObjectConstructor;
    index: NumberConstructor;
    hasAnimation: BooleanConstructor;
    targetSelectorClass: StringConstructor;
    visibleTabs: {
        type: ArrayConstructor;
        default: null;
    };
    selectedPlan: StringConstructor;
    pricing: ObjectConstructor;
}>> & Readonly<{}>, {
    hasAnimation: boolean;
    visibleTabs: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
