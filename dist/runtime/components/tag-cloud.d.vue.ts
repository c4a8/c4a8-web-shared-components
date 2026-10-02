declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    items: {
        type: ArrayConstructor;
        required: true;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    headline: {
        type: StringConstructor;
        required: true;
    };
    subline: {
        type: StringConstructor;
        default: null;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {
    jsonItems(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    items: {
        type: ArrayConstructor;
        required: true;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    headline: {
        type: StringConstructor;
        required: true;
    };
    subline: {
        type: StringConstructor;
        default: null;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    sticky: boolean;
    subline: string;
    level: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
