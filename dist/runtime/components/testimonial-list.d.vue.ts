declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    headline: {
        type: StringConstructor;
        default: string;
    };
    headlineLevel: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    subline: {
        type: StringConstructor;
        default: string;
    };
    contents: {
        type: ArrayConstructor;
        default: () => never[];
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    bgColorHover: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    listSize(): number;
    isEven(): boolean;
}, {
    isOdd(index: any): boolean;
    getAspectRatio(index: any): string;
    handleScrollEvent(): void;
    currentlyInViewPort(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    headline: {
        type: StringConstructor;
        default: string;
    };
    headlineLevel: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    subline: {
        type: StringConstructor;
        default: string;
    };
    contents: {
        type: ArrayConstructor;
        default: () => never[];
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    bgColorHover: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    headline: string;
    subline: string;
    headlineLevel: string | number;
    bgColor: string;
    contents: unknown[];
    bgColorHover: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
