declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_base: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headerData: ObjectConstructor;
    footerData: ObjectConstructor;
    layoutHeaderData: ObjectConstructor;
    layoutFooterData: ObjectConstructor;
    heroData: ObjectConstructor;
    pageData: ObjectConstructor;
    lang: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    hasBackToTop: BooleanConstructor;
    hasFabHint: BooleanConstructor;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headerData: ObjectConstructor;
    footerData: ObjectConstructor;
    layoutHeaderData: ObjectConstructor;
    layoutFooterData: ObjectConstructor;
    heroData: ObjectConstructor;
    pageData: ObjectConstructor;
    lang: {
        type: StringConstructor;
        default: string;
    };
    theme: StringConstructor;
    hasBackToTop: BooleanConstructor;
    hasFabHint: BooleanConstructor;
}>> & Readonly<{}>, {
    lang: string;
    hasBackToTop: boolean;
    hasFabHint: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    default?: ((props: {}) => any) | undefined;
};
