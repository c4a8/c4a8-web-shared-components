declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        required: true;
    };
    count: {
        type: NumberConstructor;
        default: null;
    };
    filter: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: NumberConstructor;
        default: number;
    };
    classes: {
        type: StringConstructor;
        default: null;
    };
    variant: {
        type: StringConstructor;
        default: null;
    };
}>, {
    locale: any;
    strategy: any;
}, {
    props: {};
}, {
    classList(): (string | null)[];
    linkPrefix(): string;
    href(): string;
    hasIcon(): boolean;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        required: true;
    };
    count: {
        type: NumberConstructor;
        default: null;
    };
    filter: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: NumberConstructor;
        default: number;
    };
    classes: {
        type: StringConstructor;
        default: null;
    };
    variant: {
        type: StringConstructor;
        default: null;
    };
}>> & Readonly<{}>, {
    filter: boolean;
    spacing: number;
    classes: string;
    variant: string;
    count: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
