declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: ArrayConstructor;
    sticky: {
        default: boolean;
    };
    spacing: StringConstructor;
    columns: NumberConstructor;
    aspectRatio: {
        default: boolean;
    };
    overlapping: {
        default: boolean;
    };
    bgColor: StringConstructor;
}>, {}, {}, {
    defaultSpacing(): void;
    classList(): string[];
    isOverlapping(): boolean;
    columnsValue(): string;
    aspectRatioValue(): string;
    styles(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: ArrayConstructor;
    sticky: {
        default: boolean;
    };
    spacing: StringConstructor;
    columns: NumberConstructor;
    aspectRatio: {
        default: boolean;
    };
    overlapping: {
        default: boolean;
    };
    bgColor: StringConstructor;
}>> & Readonly<{}>, {
    sticky: boolean;
    overlapping: boolean;
    aspectRatio: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
