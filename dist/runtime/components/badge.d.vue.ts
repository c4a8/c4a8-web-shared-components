declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    overlapping: BooleanConstructor;
    icon: StringConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    uppercase: BooleanConstructor;
    classes: StringConstructor;
}>, {}, {}, {
    classList(): (string | {
        'badge--overlapping': boolean;
        'badge--uppercase'?: undefined;
        'badge--icon'?: undefined;
    } | {
        'badge--uppercase': boolean;
        'badge--overlapping'?: undefined;
        'badge--icon'?: undefined;
    } | {
        'badge--icon': boolean | "" | undefined;
        'badge--overlapping'?: undefined;
        'badge--uppercase'?: undefined;
    } | undefined)[];
    style(): {
        backgroundColor: string;
        color: string;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: StringConstructor;
    overlapping: BooleanConstructor;
    icon: StringConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    uppercase: BooleanConstructor;
    classes: StringConstructor;
}>> & Readonly<{}>, {
    color: string;
    overlapping: boolean;
    uppercase: boolean;
    textColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
