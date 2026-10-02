declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    stickyOffsetBottom: {
        type: NumberConstructor;
        default: number;
    };
    contentHeight: {
        type: NumberConstructor;
        default: number;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:isAtEnd": (...args: any[]) => void;
    "update:endPoint": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    stickyOffsetTop: {
        type: NumberConstructor;
        default: number;
    };
    stickyOffsetBottom: {
        type: NumberConstructor;
        default: number;
    };
    contentHeight: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    "onUpdate:isAtEnd"?: ((...args: any[]) => any) | undefined;
    "onUpdate:endPoint"?: ((...args: any[]) => any) | undefined;
}>, {
    stickyOffsetTop: number;
    stickyOffsetBottom: number;
    contentHeight: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
