declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    awards: {
        type: ObjectConstructor;
        required: true;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    visualOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: {
        type: NumberConstructor;
        default: number;
    };
    classes: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    awardsColsValue(): "col-lg-6" | "col-lg-12 justify-content-center";
    awardsCol(): number;
    headlineClasses(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    awards: {
        type: ObjectConstructor;
        required: true;
    };
    level: {
        type: StringConstructor;
        default: string;
    };
    visualOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
    cols: {
        type: NumberConstructor;
        default: number;
    };
    classes: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    classes: string;
    level: string;
    visualOnly: boolean;
    cols: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
