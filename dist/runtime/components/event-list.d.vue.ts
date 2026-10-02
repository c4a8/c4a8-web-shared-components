declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    list: {
        type: ArrayConstructor;
        required: true;
    };
    overlap: {
        type: BooleanConstructor;
        default: boolean;
    };
    settings: {
        type: ArrayConstructor;
        default: () => never[];
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
    mergedTeasers(): any[];
}, {
    getTeaserProps(teaserData: any, event: any, variant: any, forloopIndex: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: ArrayConstructor;
        required: true;
    };
    overlap: {
        type: BooleanConstructor;
        default: boolean;
    };
    settings: {
        type: ArrayConstructor;
        default: () => never[];
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
    sticky: boolean;
    spacing: string;
    overlap: boolean;
    settings: unknown[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
