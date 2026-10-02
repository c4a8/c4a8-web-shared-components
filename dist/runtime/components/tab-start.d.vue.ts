declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    open: BooleanConstructor;
    headlineText: StringConstructor;
    headlineLevel: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: StringConstructor;
}>, {}, {}, {
    classList(): (string | {
        'show active': boolean;
    })[];
    headlineClassList(): (string | undefined)[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    open: BooleanConstructor;
    headlineText: StringConstructor;
    headlineLevel: {
        type: StringConstructor;
        default: string;
    };
    headlineClasses: StringConstructor;
}>> & Readonly<{}>, {
    open: boolean;
    headlineLevel: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
