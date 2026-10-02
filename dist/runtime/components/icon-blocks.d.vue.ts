declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    iconBlocks: {
        type: ObjectConstructor;
        required: true;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    classes: {
        type: StringConstructor;
        default: string;
    };
    columns: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    headline: {
        type: StringConstructor;
        default: null;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    columnClass(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    iconBlocks: {
        type: ObjectConstructor;
        required: true;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    classes: {
        type: StringConstructor;
        default: string;
    };
    columns: {
        type: (BooleanConstructor | NumberConstructor)[];
        default: boolean;
    };
    headline: {
        type: StringConstructor;
        default: null;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    headline: string;
    sticky: boolean;
    spacing: string;
    classes: string;
    level: string;
    columns: number | boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
