declare const _default: typeof __VLS_export;
export default _default;
declare const __VLS_export: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    maxBlur: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    steps: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    tint: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {
    stepCount(): number;
    gradientDirection(): any;
    layers(): {
        index: number;
        style: {
            backdropFilter: string;
            WebkitBackdropFilter: string;
            maskImage: string;
            WebkitMaskImage: string;
        };
    }[];
    tintStyle(): {
        backgroundImage: string;
    } | null;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    maxBlur: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    steps: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    tint: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    direction: string;
    maxBlur: string | number;
    steps: string | number;
    tint: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
