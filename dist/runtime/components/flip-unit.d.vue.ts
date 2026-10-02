declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    bgColor: {
        type: StringConstructor;
        required: false;
    };
    fontColor: {
        type: StringConstructor;
        required: false;
    };
}>, {}, {
    current: string | number;
    next: string | number;
    isFlipping: boolean;
}, {
    color(): string | null;
    style(): {
        '--flip-unit-font-color'?: string | undefined;
        '--flip-unit-background-color'?: string | undefined;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    label: {
        type: StringConstructor;
        required: false;
    };
    bgColor: {
        type: StringConstructor;
        required: false;
    };
    fontColor: {
        type: StringConstructor;
        required: false;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
